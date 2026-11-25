import React, { useMemo, useState } from 'react';
import { Portal } from '../common/Portal';
import { ArrowRight, BookOpen, Check, RotateCcw, Skull, TrendingUp, Wallet, X, Sparkles, ShieldCheck } from 'lucide-react';
import { BusinessCase, CaseChoice, saveCaseResult, verdictOf } from '../../lib/cases';
import { useModal } from '../../lib/useModal';

interface Props {
  biz: BusinessCase;
  onClose: () => void;
  onOpenLesson?: (nodeId: string) => void;
}

const fmt = (n: number) => `Rp${n.toLocaleString('id-ID')} jt`;
const signed = (n: number) => `${n > 0 ? '+' : ''}${n}`;

export const CaseSim: React.FC<Props> = ({ biz, onClose, onOpenLesson }) => {
  useModal(onClose);
  const [round, setRound] = useState(0);
  const [kas, setKas] = useState(biz.startKas);
  const [rep, setRep] = useState(biz.startRep);
  const [picked, setPicked] = useState<CaseChoice | null>(null);
  const [history, setHistory] = useState<{ round: number; choice: CaseChoice }[]>([]);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  const r = biz.rounds[round];
  const verdict = useMemo(() => verdictOf(biz, kas, rep), [biz, kas, rep]);

  const choose = (c: CaseChoice) => {
    if (picked) return;
    setPicked(c);
    setKas((k) => k + c.dKas);
    setRep((p) => Math.max(0, Math.min(100, p + c.dRep)));
    setHistory((h) => [...h, { round, choice: c }]);
  };

  const next = () => {
    const broke = kas <= 0;
    if (broke || round === biz.rounds.length - 1) {
      saveCaseResult(biz.id, verdictOf(biz, kas, rep));
      setDone(true);
      return;
    }
    setRound((x) => x + 1);
    setPicked(null);
  };

  const restart = () => {
    setRound(0); setKas(biz.startKas); setRep(biz.startRep); setPicked(null); setHistory([]); setDone(false); setStarted(true);
  };

  const meter = (
    <div className="grid grid-cols-2 gap-2.5">
      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"><Wallet className="h-3.5 w-3.5" />Kas</p>
        <p className={`mt-1 font-serif text-xl font-semibold tabular-nums ${kas <= 0 ? 'text-rose-600' : 'text-slate-900 dark:text-white'}`}>{fmt(kas)}</p>
      </div>
      <div className="rounded-2xl bg-slate-50 p-3 dark:bg-white/5">
        <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"><TrendingUp className="h-3.5 w-3.5" />Reputasi</p>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"><div className="h-full rounded-full bg-[#E3A63A] transition-all" style={{ width: `${rep}%` }} /></div>
        <p className="mt-1 text-[11px] font-semibold tabular-nums text-slate-600 dark:text-slate-300">{rep} / 100</p>
      </div>
    </div>
  );

  return (
    <Portal>
    <div role="dialog" aria-modal="true" aria-label={biz.title} className="fixed inset-0 z-[110] flex flex-col bg-[#FBF9F5] pt-[env(safe-area-inset-top)] dark:bg-[#0F1520]">
      <div className="flex items-center gap-3 border-b border-slate-200/80 px-4 py-3 dark:border-white/10">
        <div className="min-w-0 flex-1">
          <p className="eyebrow">Studi kasus</p>
          <h2 className="truncate font-serif text-lg font-medium text-slate-900 dark:text-white">{biz.title}</h2>
        </div>
        <button onClick={onClose} aria-label="Tutup" className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"><X className="h-5 w-5" /></button>
      </div>

      <div className="flex-1 overflow-y-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto w-full max-w-xl space-y-4 px-4 py-5">
          {!started && (
            <div className="animate-fade-in space-y-4">
              <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{biz.intro}</p>
              {meter}
              <p className="rounded-2xl bg-[#FDF0D5] px-4 py-3 text-[13px] leading-snug text-[#7A4E0C] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">
                {biz.rounds.length} keputusan. Tidak ada satu jawaban sempurna, tetapi tiap pilihan punya konsekuensi pada kas dan reputasi. Tokoh dan angka adalah ilustrasi.
              </p>
              <button onClick={() => setStarted(true)} className="btn-gold flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[15px] font-bold">Mulai simulasi <ArrowRight className="h-4 w-4" /></button>
            </div>
          )}

          {started && !done && (
            <div className="animate-fade-in space-y-4">
              {meter}
              <div className="flex items-center justify-between text-[12px] font-bold text-slate-500 dark:text-slate-400">
                <span>Keputusan {round + 1} dari {biz.rounds.length}</span>
                <span>{r.factor}</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-medium text-slate-900 dark:text-white">{r.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{r.situation}</p>
              </div>
              <div className="space-y-2.5">
                {r.choices.map((c, i) => {
                  const isPicked = picked === c;
                  return (
                    <button
                      key={i}
                      disabled={!!picked}
                      onClick={() => choose(c)}
                      className={`w-full rounded-2xl border p-4 text-left text-[14px] font-semibold leading-snug transition-colors ${
                        isPicked
                          ? c.good ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-100' : 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-500/15 dark:text-amber-100'
                          : 'border-slate-200 bg-white text-slate-900 hover:border-[#E3A63A] disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-white'
                      }`}
                    >
                      {c.text}
                    </button>
                  );
                })}
              </div>

              {picked && (
                <div className="animate-fade-in space-y-3 rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex flex-wrap gap-2">
                    <span className={`rounded-full px-3 py-1 text-[12px] font-bold ${picked.dKas >= 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300'}`}>Kas {signed(picked.dKas)} jt</span>
                    <span className={`rounded-full px-3 py-1 text-[12px] font-bold ${picked.dRep >= 0 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300' : 'bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300'}`}>Reputasi {signed(picked.dRep)}</span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-slate-800 dark:text-slate-100">{picked.result}</p>
                  <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-300"><span className="font-bold text-slate-900 dark:text-white">Mengapa: </span>{picked.why}</p>
                  <button onClick={next} className="btn-ink flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-[14px] font-bold">
                    {kas <= 0 ? 'Lihat hasil' : round === biz.rounds.length - 1 ? 'Lihat hasil akhir' : 'Keputusan berikutnya'}<ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          )}

          {done && (
            <div className="animate-fade-in space-y-5">
              <div className={`rounded-3xl p-5 text-center ${verdict === 'bangkrut' ? 'bg-rose-50 dark:bg-rose-500/10' : verdict === 'tumbuh' ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-[#FDF0D5] dark:bg-[#E3A63A]/10'}`}>
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm dark:bg-white/10">
                  {verdict === 'bangkrut' ? <Skull className="h-7 w-7 text-rose-600" /> : verdict === 'tumbuh' ? <Sparkles className="h-7 w-7 text-emerald-600" /> : <ShieldCheck className="h-7 w-7 text-[#9A6410]" />}
                </span>
                <h3 className="mt-3 font-serif text-2xl font-medium text-slate-900 dark:text-white">
                  {verdict === 'bangkrut' ? 'Bisnis kehabisan kas' : verdict === 'tumbuh' ? 'Bisnis tumbuh sehat' : 'Bisnis bertahan, belum kuat'}
                </h3>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">Kas akhir {fmt(Math.max(kas, 0))}, reputasi {rep}/100.</p>
              </div>

              <div>
                <p className="eyebrow">Bedah kasus: faktor penentu</p>
                <ul className="mt-3 space-y-2.5">
                  {history.map(({ round: ri, choice }) => (
                    <li key={ri} className="rounded-2xl border border-slate-200 bg-white p-3.5 dark:border-white/10 dark:bg-white/5">
                      <div className="flex items-start gap-3">
                        <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${choice.good ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300'}`}>
                          {choice.good ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-[13px] font-bold text-slate-900 dark:text-white">{biz.rounds[ri].factor}</p>
                          <p className="mt-0.5 text-[13px] leading-snug text-slate-600 dark:text-slate-300">{choice.why}</p>
                          {biz.rounds[ri].lessonId && onOpenLesson && (
                            <button onClick={() => onOpenLesson(biz.rounds[ri].lessonId as string)} className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-bold text-[#9A6410] dark:text-[#E9C06B]"><BookOpen className="h-3.5 w-3.5" />Pelajari konsepnya</button>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2.5">
                <button onClick={restart} className="btn-ink flex flex-1 items-center justify-center gap-2 rounded-2xl py-3.5 text-[14px] font-bold"><RotateCcw className="h-4 w-4" />Main lagi</button>
                <button onClick={onClose} className="flex-1 rounded-2xl border border-slate-300 py-3.5 text-[14px] font-bold text-slate-800 dark:border-white/20 dark:text-white">Selesai</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </Portal>
  );
};
