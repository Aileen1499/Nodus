import React from 'react';
import { Flame, ShieldAlert, Target } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { localDay } from '../../lib/date';

const MILESTONES = [3, 7, 14, 30, 60, 100];

/** Kartu kebiasaan di Peta: streak, target hari ini, dan pengingat bila streak terancam putus. */
export const StreakCard: React.FC<{ onContinue?: () => void }> = ({ onContinue }) => {
  const { progress } = useUser();
  const today = localDay();
  const doneToday = progress.lastStudyDate === today;
  const streak = progress.streak || 0;
  const atRisk = !doneToday && streak > 0 && !!progress.lastStudyDate;
  const next = MILESTONES.find((m) => m > streak);

  if (streak === 0 && !doneToday) return null;

  return (
    <button
      onClick={onContinue}
      className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${atRisk ? 'border-[#E3A63A]/60 bg-[#FDF0D5] dark:bg-[#E3A63A]/10' : 'border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#1C1C1F]'}`}
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${atRisk ? 'bg-[#E3A63A] text-[#151517]' : 'bg-[#151517] text-[#E3A63A] dark:bg-[#E3A63A] dark:text-[#121214]'}`}>
        {atRisk ? <ShieldAlert className="h-5 w-5" /> : doneToday ? <Target className="h-5 w-5" /> : <Flame className="h-5 w-5" />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-slate-900 dark:text-white">
          {atRisk ? `Streak ${streak} hari terancam putus` : doneToday ? `Target hari ini tercapai · ${streak} hari beruntun` : `${streak} hari beruntun`}
        </span>
        <span className="mt-0.5 block text-[12px] leading-snug text-slate-600 dark:text-slate-300">
          {atRisk ? 'Satu pelajaran singkat hari ini menyelamatkannya.' : next ? `${next - streak} hari lagi menuju lencana ${next} hari.` : 'Konsistenmu luar biasa.'}
        </span>
        
      </span>
    </button>
  );
};
