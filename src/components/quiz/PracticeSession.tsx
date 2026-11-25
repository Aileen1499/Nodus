import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { X, CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { ConfirmSheet } from '../common/ConfirmSheet';
import { useUser } from '../../context/UserContext';
import { plain } from '../../lib/pathLogic';
import { shuffleQuestion } from '../../lib/shuffle';
import { Portal } from '../common/Portal';
import { PracticeItem } from '../../lib/review';

interface PracticeSessionProps {
  items: PracticeItem[];
  title: string;
  onClose: () => void;
}

/** Latihan campuran: satu soal per pelajaran, tanpa timer. Mencatat ulasan (pengulangan berjarak) dan streak. */
export const PracticeSession: React.FC<PracticeSessionProps> = ({ items: rawItems, title, onClose }) => {
  const items = useMemo(() => rawItems.map((it) => ({ ...it, question: shuffleQuestion(it.question) })), [rawItems]);
  const { recordReview, progress } = useUser();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<{ item: PracticeItem; picked: number }[]>([]);
  const [done, setDone] = useState(false);

  const item = items[index];
  const correct = results.filter((r) => r.picked === r.item.question.correctAnswerIndex).length;
  const inProgress = !done && results.length > 0;

  const [confirmExit, setConfirmExit] = useState(false);
  const requestClose = useCallback(() => {
    if (inProgress) { setConfirmExit(true); return; }
    onClose();
  }, [inProgress, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && !confirmExit && requestClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [requestClose, confirmExit]);

  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    setResults((r) => [...r, { item, picked: idx }]);
  };

  const next = () => {
    if (index < items.length - 1) {
      setIndex((i) => i + 1);
      setPicked(null);
    } else {
      // Hanya soal yang dijawab benar menunda pengulangan; yang salah tetap "perlu diulang".
      const okIds = results.filter((r) => r.picked === r.item.question.correctAnswerIndex).map((r) => r.item.node.id);
      recordReview(okIds);
      setDone(true);
    }
  };

  const restart = () => {
    setIndex(0);
    setPicked(null);
    setResults([]);
    setDone(false);
  };

  return (
    <Portal>
    <div className="fixed inset-0 z-[70] pt-[env(safe-area-inset-top)] flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520]" role="dialog" aria-modal="true" aria-label={title}>
      <div className="border-b border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-3 sm:px-6">
          <button onClick={requestClose} aria-label="Tutup latihan" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            <X className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="eyebrow">Latihan</p>
            <p className="truncate text-sm font-bold text-slate-900 dark:text-white">{title}</p>
          </div>
        </div>
        {!done && (
          <div className="mx-auto flex w-full max-w-2xl gap-1.5 px-4 pb-3 sm:px-6" aria-hidden="true">
            {items.map((_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < index + (picked !== null ? 1 : 0) ? 'bg-[#E3A63A]' : 'bg-slate-200 dark:bg-slate-800'}`} />
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-2xl px-4 py-7 sm:px-6 sm:py-10">
          {!done && item && (
            <div key={index} className="space-y-6">
              <div>
                <p className="eyebrow">Soal {index + 1} dari {items.length} · {item.node.stepNumber || item.node.domain}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{item.node.label}</p>
                <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-white sm:text-3xl">{plain(item.question.question)}</h2>
              </div>
              <div className="space-y-3">
                {item.question.options.map((opt, idx) => {
                  const right = idx === item.question.correctAnswerIndex;
                  const isPicked = picked === idx;
                  let cls = 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[#18202D] dark:hover:border-slate-500';
                  if (picked !== null) cls = right ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10' : isPicked ? 'border-rose-500 bg-rose-50 dark:bg-rose-500/10' : 'border-slate-200 bg-white opacity-55 dark:border-slate-700 dark:bg-[#18202D]';
                  return (
                    <button key={idx} disabled={picked !== null} onClick={() => choose(idx)} className={`flex w-full items-start gap-3.5 rounded-2xl border-2 p-4 text-left transition-all ${cls}`}>
                      <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${picked !== null && right ? 'bg-emerald-600 text-white' : picked !== null && isPicked ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>{String.fromCharCode(65 + idx)}</span>
                      <span className="text-base leading-relaxed text-slate-900 dark:text-slate-100">{plain(opt)}</span>
                    </button>
                  );
                })}
              </div>
              {picked !== null && (
                <div className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/70 dark:bg-[#18202D] dark:ring-white/10" aria-live="polite">
                  <p className={`flex items-center gap-2 text-base font-extrabold ${picked === item.question.correctAnswerIndex ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
                    {picked === item.question.correctAnswerIndex ? <><CheckCircle2 className="h-5 w-5" />Tepat</> : <><XCircle className="h-5 w-5" />Belum tepat</>}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{plain(item.question.explanation)}</p>
                </div>
              )}
            </div>
          )}

          {done && (
            <div className="space-y-7">
              <div className="text-center">
                <p className="eyebrow">Latihan selesai</p>
                <h1 className="mt-2 font-serif text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{correct} dari {items.length} tepat</h1>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {correct === items.length ? 'Ingatan Anda kuat. Pelajaran yang tepat dijadwalkan ulang beberapa hari ke depan.' : 'Pelajaran yang masih keliru tetap muncul di daftar "Perlu diulang" sampai Anda menjawabnya dengan benar.'}
                </p>
                <p className="mt-4 inline-flex rounded-full bg-[#FDF0D5] px-4 py-1.5 text-sm font-bold text-[#7A4D0A] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">Streak: {progress.streak} hari</p>
              </div>
              <ul className="space-y-3">
                {results.map((r, i) => {
                  const ok = r.picked === r.item.question.correctAnswerIndex;
                  return (
                    <li key={i} className="surface p-4">
                      <p className="flex items-start gap-2 text-[15px] font-bold leading-snug text-slate-900 dark:text-white">
                        {ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />}
                        {r.item.node.label}
                      </p>
                      {!ok && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><strong>Jawaban benar: </strong>{plain(r.item.question.options[r.item.question.correctAnswerIndex])}</p>}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-slate-200/80 bg-[#FBF9F5]/95 backdrop-blur dark:border-slate-800 dark:bg-[#0F1520]/95" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="mx-auto w-full max-w-2xl px-4 py-3 sm:px-6">
          {done ? (
            <div className="flex flex-col gap-2 sm:flex-row">
              <button onClick={restart} className="btn-ink flex-1 !py-4 text-base"><RotateCcw className="h-4 w-4" />Ulangi soal ini</button>
              <button onClick={onClose} className="btn-gold flex-1 !py-4 text-base">Selesai</button>
            </div>
          ) : picked !== null ? (
            <button onClick={next} className="btn-gold w-full !py-4 text-base">{index < items.length - 1 ? 'Soal berikutnya' : 'Lihat hasil'} <ArrowRight className="h-4 w-4" /></button>
          ) : (
            <p className="py-3.5 text-center text-sm font-medium text-slate-500 dark:text-slate-400">Pilih satu jawaban</p>
          )}
        </div>
      </div>
      {confirmExit && <ConfirmSheet title="Keluar dari latihan?" message="Hasil sesi latihan ini tidak akan disimpan." cancelLabel="Lanjut belajar" confirmLabel="Ya, keluar" onCancel={() => setConfirmExit(false)} onConfirm={onClose} />}
    </div>
    </Portal>
  );
};
