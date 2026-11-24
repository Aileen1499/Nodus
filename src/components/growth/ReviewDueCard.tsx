import React from 'react';
import { ArrowRight, BrainCircuit } from 'lucide-react';

/** Pengingat ulasan berjarak di Peta: konsep yang sudah dikuasai dan siap diulang. */
export const ReviewDueCard: React.FC<{ count: number; onReview: () => void }> = ({ count, onReview }) => {
  if (count <= 0) return null;
  return (
    <button
      onClick={onReview}
      className="mt-2.5 flex w-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 text-left transition-colors hover:border-[#E3A63A]/60 dark:border-white/10 dark:bg-white/5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">
        <BrainCircuit className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-slate-900 dark:text-white">{count} konsep siap diulas</span>
        <span className="mt-0.5 block text-[12px] leading-snug text-slate-600 dark:text-slate-300">Ulangan singkat di Arena membuat ingatan bertahan lebih lama.</span>
      </span>
      <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
    </button>
  );
};
