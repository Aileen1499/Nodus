// ==============================================================================
// NODUS — NODE INDEX
// Lets the personal knowledge system (Brankas) find any lesson by id, across every
// curriculum, so a saved concept or highlight can always lead back to its source.
// ==============================================================================

import { MindmapData, MindmapNode } from '../types';
import { MOCK_MINDMAPS } from '../data/mockMindmaps';
import { TOPIC_REGISTRY } from './topicEngine';
import { STRUCTURED_CURRICULA } from './curriculumData';
import { RETIRED_PATHS } from './retiredPaths';

export interface IndexedNode {
  node: MindmapNode;
  map: MindmapData;
}

let cache: { maps: MindmapData[]; byId: Map<string, IndexedNode> } | null = null;

const build = () => {
  if (cache) return cache;
  const maps = new Map<string, MindmapData>();
  (Object.values(STRUCTURED_CURRICULA) as MindmapData[]).forEach((m) => maps.set(m.id, m));
  (Object.values(TOPIC_REGISTRY) as MindmapData[]).forEach((m) => !maps.has(m.id) && maps.set(m.id, m));
  (Object.values(MOCK_MINDMAPS) as MindmapData[]).forEach((m) => !maps.has(m.id) && maps.set(m.id, m));

  Object.keys(RETIRED_PATHS).forEach((id) => maps.delete(id));

  const byId = new Map<string, IndexedNode>();
  maps.forEach((map) => map.nodes.forEach((node) => !byId.has(node.id) && byId.set(node.id, { node, map })));
  cache = { maps: Array.from(maps.values()), byId };
  return cache;
};

export const findNode = (nodeId: string): IndexedNode | undefined => build().byId.get(nodeId);

export const allNodes = (): IndexedNode[] => Array.from(build().byId.values());

export const allMaps = (): MindmapData[] => build().maps;

export const getMapById = (mapId: string): MindmapData | undefined => {
  const id = RETIRED_PATHS[mapId] ?? mapId;
  return build().maps.find((m) => m.id === id);
};

/** Jika peta adalah jalur lama yang sudah dipensiunkan, kembalikan penggantinya. */
export const resolveRetired = (map: MindmapData): MindmapData =>
  RETIRED_PATHS[map.id] ? getMapById(map.id) ?? map : map;
