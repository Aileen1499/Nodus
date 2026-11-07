// NODUS — learning path logic: single source of truth for node states, the
// recommended next step and path ordering. Shared by graph, path view, reader, app shell.
import { MindmapData, MindmapNode } from '../types';

export type NodeState = 'mastered' | 'available' | 'locked';
type MasteredFn = (nodeId: string) => boolean;

export const isNodeLocked = (node: MindmapNode, data: MindmapData, isMastered: MasteredFn): boolean => {
  if (node.level === 0 || node.id === data.rootId) return false;
  if (isMastered(node.id)) return false;
  if (node.prerequisiteId) return !isMastered(node.prerequisiteId);
  if (isMastered(data.rootId)) return false;
  const incoming = data.edges.filter((e) => e.to === node.id);
  if (incoming.length === 0) return false;
  return !incoming.some((e) => isMastered(e.from));
};

export const getNodeState = (node: MindmapNode, data: MindmapData, isMastered: MasteredFn): NodeState => {
  if (isMastered(node.id)) return 'mastered';
  return isNodeLocked(node, data, isMastered) ? 'locked' : 'available';
};

const stepKey = (node: MindmapNode): number[] | null => {
  const match = node.stepNumber?.match(/\d+(?:\.\d+)*/);
  return match ? match[0].split('.').map(Number) : null;
};

/** Curriculum order: by step number when every node has one, otherwise authoring order. */
export const getPathOrder = (data: MindmapData): MindmapNode[] => {
  if (data.nodes.some((n) => stepKey(n) === null)) return [...data.nodes];
  return [...data.nodes].sort((a, b) => {
    const ka = stepKey(a) as number[];
    const kb = stepKey(b) as number[];
    for (let i = 0; i < Math.max(ka.length, kb.length); i++) {
      const diff = (ka[i] ?? 0) - (kb[i] ?? 0);
      if (diff !== 0) return diff;
    }
    return 0;
  });
};

/** First unlocked, unmastered node on the path. */
export const getRecommendedNode = (data: MindmapData, isMastered: MasteredFn): MindmapNode | undefined => {
  const ordered = getPathOrder(data);
  return (
    ordered.find((n) => !isMastered(n.id) && !isNodeLocked(n, data, isMastered)) ||
    ordered.find((n) => !isMastered(n.id)) ||
    ordered[ordered.length - 1]
  );
};

export const getPrerequisiteNode = (node: MindmapNode, data: MindmapData, isMastered: MasteredFn): MindmapNode | undefined => {
  if (node.prerequisiteId) return data.nodes.find((n) => n.id === node.prerequisiteId);
  const incoming = data.edges.filter((e) => e.to === node.id).map((e) => data.nodes.find((n) => n.id === e.from));
  return incoming.find((n) => n && !isMastered(n.id)) || incoming[0] || undefined;
};

export const getLockReason = (node: MindmapNode, data: MindmapData, isMastered: MasteredFn): string => {
  const prereq = getPrerequisiteNode(node, data, isMastered);
  return prereq ? `Kuasai ${prereq.stepNumber || prereq.label} lebih dulu.` : 'Kuasai simpul yang terhubung lebih dulu.';
};

export const getNeighbours = (node: MindmapNode, data: MindmapData): { previous?: MindmapNode; next?: MindmapNode } => {
  const ordered = getPathOrder(data);
  const index = ordered.findIndex((n) => n.id === node.id);
  return index === -1 ? {} : { previous: ordered[index - 1], next: ordered[index + 1] };
};

export const countMastered = (data: MindmapData, isMastered: MasteredFn): number =>
  data.nodes.filter((n) => isMastered(n.id)).length;

/** Source text sometimes contains markdown/LaTeX markers. Render as plain text. */
export const plain = (text: string): string =>
  text
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\[a-zA-Z]+/g, '')
    .replace(/\*+/g, '')
    .replace(/\$/g, '');
