import React, { useState } from 'react';
import { CalendarCheck, Check } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { localDay } from '../../lib/date';

const KEY = 'nodus_weekly_goal_v1';
const OPTIONS = [3, 5, 7] as const;
const DAYS = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

const readGoal = (): number => {
  try { const n = Number(localStorage.getItem(KEY)); return OPTIONS.includes(n as 3 | 5 | 7) ? n : 3; } catch { return 3; }
};

/** Komitmen mingguan: berapa hari dalam minggu ini kamu ingin belajar. Tersimpan di perangkat. */
export const WeeklyGoal: React.FC = () => {
  const { progress } = useUser();
  const [goal, setGoal] = useState(readGoal);
  const log = progress.activityLog || {};

  // Senin sampai Minggu pada minggu berjalan.
  const now = new Date();
  const offset = (now.getDay() + 6) % 7;
  const week = DAYS.map((label, i) => {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - offset + i);
    const key = localDay(d);
    return { label, key, done: !!log[key], today: key === localDay(now) };
  });
  const doneCount = week.filter((d) => d.done).length;
  const reached = doneCount >= goal;

  const pick = (n: number) => { setGoal(n); try { localStorage.setItem(KEY, String(n)); } catch { /* abaikan */ } };

  return (
    <section aria-label="Target mingguan" className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-[#1C1C1F]">
      <div className="flex items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white"><CalendarCheck className="h-4 w-4 text-[#9A6410] dark:text-[#E9C06B]" />Target minggu ini</p>
        <p className={`text-[13px] font-bold tabular-nums ${reached ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-300'}`}>{doneCount} / {goal} hari</p>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1.5" aria-hidden="true">
        {week.map((d) => (
          <div key={d.key} className="text-center">
            <span className={`flex h-8 items-center justify-center rounded-lg ${d.done ? 'bg-[#E3A63A] text-[#151517]' : d.today ? 'border-2 border-[#E3A63A]/70 text-slate-400' : 'bg-slate-100 text-transparent dark:bg-white/10'}`}>{d.done ? <Check className="h-4 w-4" /> : '·'}</span>
            <span className="mt-1 block text-[10px] font-semibold text-slate-500 dark:text-slate-400">{d.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12.5px] leading-snug text-slate-600 dark:text-slate-300">
        {reached ? 'Target minggu ini tercapai. Hari tambahan membuat kebiasaannya makin kuat.' : `Belajar ${goal - doneCount} hari lagi minggu ini untuk mencapai targetmu. Satu pelajaran singkat atau latihan sudah dihitung.`}
      </p>
      <div className="mt-3 flex items-center gap-2" role="radiogroup" aria-label="Pilih target mingguan">
        <span className="text-[12px] font-semibold text-slate-500 dark:text-slate-400">Target:</span>
        {OPTIONS.map((n) => (
          <button key={n} role="radio" aria-checked={goal === n} onClick={() => pick(n)} className={`rounded-full px-3 py-1 text-[12px] font-bold transition-colors ${goal === n ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#FBF9F5] dark:text-[#121214]' : 'bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300'}`}>{n} hari</button>
        ))}
      </div>
    </section>
  );
};
