import React, { useState } from 'react';
import { ArrowRight, Briefcase, Crown, Skull, Sparkles, ShieldCheck } from 'lucide-react';
import { CASES, BusinessCase, CaseVerdict, readCaseResults } from '../../lib/cases';
import { CaseSim } from './CaseSim';

const FREE_CASES = 2;

const VerdictBadge: React.FC<{ v?: CaseVerdict }> = ({ v }) => {
  if (!v) return null;
  const map = {
    tumbuh: { t: 'Tumbuh sehat', c: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300', i: <Sparkles className="h-3 w-3" /> },
    bertahan: { t: 'Bertahan', c: 'bg-[#FDF0D5] text-[#7A4E0C] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]', i: <ShieldCheck className="h-3 w-3" /> },
    bangkrut: { t: 'Bangkrut', c: 'bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300', i: <Skull className="h-3 w-3" /> },
  }[v];
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${map.c}`}>{map.i}{map.t}</span>;
};

/** Daftar studi kasus simulasi bisnis; dua kasus pertama gratis, sisanya Pro. */
export const CaseList: React.FC<{ isPro: boolean; onUpgrade?: () => void; onOpenLesson?: (nodeId: string) => void }> = ({ isPro, onUpgrade, onOpenLesson }) => {
  const [active, setActive] = useState<BusinessCase | null>(null);
  const [results, setResults] = useState(readCaseResults);

  const open = (c: BusinessCase, i: number) => {
    if (!isPro && i >= FREE_CASES) { onUpgrade?.(); return; }
    setActive(c);
  };

  return (
    <section aria-label="Studi kasus bisnis">
      <p className="eyebrow flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />Simulasi bisnis</p>
      <h3 className="mt-1 font-serif text-xl font-medium text-slate-900 dark:text-white">Bertahan atau bangkrut?</h3>
      <p className="mt-1 text-[13px] leading-snug text-slate-600 dark:text-slate-300">Jalankan bisnis ilustrasi, ambil keputusan, lalu bedah faktor yang menentukan hasilnya.</p>
      <div className="mt-3 space-y-2.5">
        {CASES.map((c, i) => {
          const locked = !isPro && i >= FREE_CASES;
          return (
            <button key={c.id} onClick={() => open(c, i)} className="flex w-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 text-left transition-colors hover:border-[#E3A63A]/60 dark:border-white/10 dark:bg-white/5">
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="text-[15px] font-bold text-slate-900 dark:text-white">{c.title}</span>
                  <VerdictBadge v={results[c.id]} />
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-slate-600 dark:text-slate-300">{c.tagline}</span>
                <span className="mt-1 block text-[11px] font-semibold text-slate-500 dark:text-slate-400">{c.industry} · {c.rounds.length} keputusan</span>
              </span>
              {locked ? <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#151517] px-2.5 py-1 text-[11px] font-bold text-[#E3A63A]"><Crown className="h-3 w-3" />Pro</span> : <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />}
            </button>
          );
        })}
      </div>
      {active && <CaseSim biz={active} onClose={() => { setActive(null); setResults(readCaseResults()); }} onOpenLesson={onOpenLesson} />}
    </section>
  );
};
