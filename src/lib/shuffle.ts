import type { QuizQuestion } from '../types';

/** Acak urutan (Fisher–Yates) tanpa mengubah array asal. */
export const shuffled = <T,>(arr: readonly T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/** Acak urutan opsi soal dan petakan ulang indeks jawaban benar, supaya jawaban benar tidak selalu di posisi yang sama. */
export const shuffleQuestion = (q: QuizQuestion): QuizQuestion => {
  const order = shuffled(q.options.map((_, i) => i));
  return { ...q, options: order.map((i) => q.options[i]), correctAnswerIndex: order.indexOf(q.correctAnswerIndex) };
};
