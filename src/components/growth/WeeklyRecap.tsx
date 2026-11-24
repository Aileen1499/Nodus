import React, { useMemo } from 'react';
import { CalendarDays, TrendingDown, TrendingUp } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { localDay } from '../../lib/date';

const DAY_LABELS = ['M', 'S', 'S', 'R', 'K', 'J', 'S']; // Minggu..Sabtu

const dayOffset = (offset: number): Date => {
  const d = new Date();
  d.setHours(12, 0, 0, 0); // hindari lompatan zona waktu
  d.setDate(d.getDate() - offset);
  return d;
};

/** Ringkasan 7 hari terakhir: hari aktif, menit, pelajaran, dan perbandingan dengan 7 hari sebelumnya. */
export const WeeklyRecap: React.FC = () => {
  const { progress } = useUser();
  const log = progress.activityLog;

  const data = useMemo(() => {
    const days = Array.from({ length: 14 }, (_, i) => {
      const d = dayOffset(13 - i);
      const e = log?.[localDay(d)];
      return { label: DAY_LABELS[d.getDay()], active: !!e, m: e?.m ?? 0, l: e?.l ?? 0, isToday: i === 13 };
    });
    const sum = (arr: typeof days) => ({
      active: arr.filter((d) => d.active).length,
      minutes: arr.reduce((a, d) => a + d.m, 0),
      lessons: arr.reduce((a, d) => a + d.l, 0),
    });
    return { week: days.slice(7), now: sum(days.slice(7)), before: sum(days.slice(0, 7)) };
  }, [log]);

  const { week, now, before } = data;
  const hasAny = now.active + before.active > 0;
  if (!hasAny) return null;

  const diff = now.active - before.active;
  const maxM = Math.max(1, ...week.map((d) => d.m));

  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/5" aria-label="Ringkasan 7 hari terakhir">
      <div className="flex items-center justify-between gap-3">
        <p className="eyebrow flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" />7 hari terakhir</p>
        {before.active > 0 && diff !== 0 && (
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${diff > 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300' : 'bg-amber-50 text-amber-800 dark:bg-amber-500/15 dark:text-amber-200'}`}>
            {diff > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
            {diff > 0 ? `+${diff}` : diff} hari vs minggu lalu
          </span>
        )}
      </div>

      <div className="mt-4 flex items-end justify-between gap-1.5" role="img" aria-label={`Aktif ${now.active} dari 7 hari`}>
        {week.map((d, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex h-14 w-full items-end justify-center">
              <div
                className={`w-full max-w-[26px] rounded-lg ${d.active ? 'bg-[#E3A63A]' : 'bg-slate-200 dark:bg-white/10'}`}
                style={{ height: d.active ? `${Math.max(22, Math.round((d.m / maxM) * 100))}%` : '12%' }}
              />
            </div>
            <span className={`text-[11px] font-bold ${d.isToday ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>{d.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {[
          { v: `${now.active}/7`, l: 'hari aktif' },
          { v: `${now.minutes}`, l: 'menit belajar' },
          { v: `${now.lessons}`, l: 'pelajaran selesai' },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl bg-slate-50 px-2 py-3 dark:bg-white/5">
            <p className="font-serif text-xl font-semibold tabular-nums text-slate-900 dark:text-white">{s.v}</p>
            <p className="mt-0.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">{s.l}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] leading-snug text-slate-600 dark:text-slate-300">
        {now.active >= 5 ? 'Konsisten sekali. Kebiasaan ini yang membuat konsep benar-benar melekat.' : now.active >= 3 ? 'Ritme bagus. Tambah satu hari lagi untuk minggu yang lebih kuat.' : 'Mulai kecil: lima menit per hari lebih efektif daripada maraton sekali seminggu.'}
      </p>
    </section>
  );
};
