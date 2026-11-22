// NODUS — pengulangan berjarak ringan + penyusun sesi latihan.
// Simpul yang sudah dikuasai dianggap "perlu diulang" bila terakhir diuji >= REVIEW_AFTER_DAYS hari lalu
// (atau belum pernah diulas sama sekali).
import { MindmapNode, QuizQuestion } from '../types';
import { IndexedNode } from './nodeIndex';

export const REVIEW_AFTER_DAYS = 3;

const daysSince = (isoDate: string, now: Date): number =>
  Math.round((Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) - new Date(isoDate).getTime()) / (1000 * 3600 * 24));

export const isDueForReview = (nodeId: string, lastReviewed: Record<string, string> | undefined, now = new Date()): boolean => {
  const last = lastReviewed?.[nodeId];
  return !last || daysSince(last, now) >= REVIEW_AFTER_DAYS;
};

export interface PracticeItem {
  node: MindmapNode;
  mapTopic: string;
  question: QuizQuestion;
}

const shuffle = <T,>(items: T[]): T[] => {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

/** Satu soal acak per simpul, dari simpul yang diberikan, maksimal `count` soal. */
export const buildPracticeSet = (pool: IndexedNode[], count = 5): PracticeItem[] =>
  shuffle(pool.filter((p) => p.node.quiz.length > 0))
    .slice(0, count)
    .map(({ node, map }) => ({
      node,
      mapTopic: map.topic,
      question: shuffle(node.quiz)[0],
    }));
