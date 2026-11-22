import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { MindmapNode, DecisionChoice } from '../../types';
import { ConfirmSheet } from '../common/ConfirmSheet';
import { useUser } from '../../context/UserContext';
import { plain } from '../../lib/pathLogic';
import { WrittenReview } from './WrittenReview';
import confetti from 'canvas-confetti';
import { X, Clock, CheckCircle2, XCircle, ArrowRight, Award, RotateCcw, BookOpen, Sparkles } from 'lucide-react';

interface QuizEngineProps {
  node: MindmapNode;
  onClose: () => void;
  onComplete: (scoreBonus: number) => void;
  /** Lanjut ke pelajaran berikutnya setelah lulus. */
  onNext?: () => void;
  nextLabel?: string;
  /** Buka kembali materi bacaan (dipakai saat belum lulus). */
  onReadLesson?: () => void;
  /** Buka penawaran Pro (latihan tulis). */
  onUpgrade?: () => void;
}

type Phase = 'intro' | 'decision' | 'quiz' | 'completed';

const SECONDS_PER_QUESTION = 45;
const PASS_RATIO = 0.5;
const MASTERY_BONUS = 80;

interface AnswerRecord {
  question: string;
  picked: number; // -1 = waktu habis
  correct: number;
  options: string[];
  explanation: string;
}

export const QuizEngine: React.FC<QuizEngineProps> = ({ node, onClose, onComplete, onNext, nextLabel, onReadLesson, onUpgrade }) => {
  const { markNodeMastered, addRankPoints, recordReview, isNodeMastered } = useUser();
  const alreadyMastered = useMemo(() => isNodeMastered(node.id), []); // eslint-disable-line react-hooks/exhaustive-deps

  const [phase, setPhase] = useState<Phase>('intro');
  const [timed, setTimed] = useState(true);
  const [selectedChoice, setSelectedChoice] = useState<DecisionChoice | null>(null);
  const [decisionConfirmed, setDecisionConfirmed] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [earned, setEarned] = useState(0);
  const [timeLeft, setTimeLeft] = useState(SECONDS_PER_QUESTION);
  const [attempt, setAttempt] = useState(0);

  const questions = node.quiz;
  const q = questions[qIndex];
  const submitted = picked !== null;
  const total = questions.length;
  const correctCount = answers.filter((a) => a.picked === a.correct).length;
  const passed = total === 0 ? true : correctCount / total >= PASS_RATIO;
  const needed = Math.ceil(total * PASS_RATIO);
  const inProgress = phase === 'decision' || phase === 'quiz';

  // Timer: satu setTimeout per detik, berhenti saat jawaban dikunci.
  useEffect(() => {
    if (phase !== 'quiz' || !timed || submitted) return;
    if (timeLeft <= 0) {
      setPicked(-1);
      setAnswers((prev) => [...prev, { question: q.question, picked: -1, correct: q.correctAnswerIndex, options: q.options, explanation: q.explanation }]);
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, timed, submitted, timeLeft, q]);

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

  // Setelah keputusan dikunci, gulir ke pembahasan supaya langsung terbaca.
  useEffect(() => {
    if (!decisionConfirmed) return;
    const id = setTimeout(() => document.getElementById('decision-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120);
    return () => clearTimeout(id);
  }, [decisionConfirmed]);

  const confirmDecision = () => {
    if (!selectedChoice) return;
    setDecisionConfirmed(true);
    if (!alreadyMastered) setEarned((e) => e + Math.max(0, selectedChoice.scoreBonus));
  };

  const answer = (idx: number) => {
    if (submitted) return;
    setPicked(idx);
    setAnswers((prev) => [...prev, { question: q.question, picked: idx, correct: q.correctAnswerIndex, options: q.options, explanation: q.explanation }]);
    if (idx === q.correctAnswerIndex && !alreadyMastered) setEarned((e) => e + 30 + (timed ? Math.floor(timeLeft / 3) : 0));
  };

  const finish = () => {
    const finalCorrect = answers.filter((a) => a.picked === a.correct).length;
    const ok = total === 0 || finalCorrect / total >= PASS_RATIO;
    recordReview([node.id]);
    if (ok && !alreadyMastered) {
      markNodeMastered(node.id, MASTERY_BONUS);
      addRankPoints(earned);
      onComplete(earned + MASTERY_BONUS);
      try {
        confetti({ particleCount: 130, spread: 85, origin: { y: 0.6 }, colors: ['#CF8E1F', '#2E7D5B', '#E3A63A', '#EC4899'] });
      } catch {
        /* abaikan */
      }
    }
    setPhase('completed');
  };

  const next = () => {
    if (qIndex < total - 1) {
      setQIndex((i) => i + 1);
      setPicked(null);
      setTimeLeft(SECONDS_PER_QUESTION);
    } else {
      finish();
    }
  };

  const retry = () => {
    setPhase('quiz');
    setQIndex(0);
    setPicked(null);
    setAnswers([]);
    setEarned(0);
    setTimeLeft(SECONDS_PER_QUESTION);
    setAttempt((a) => a + 1);
  };

  const best = node.decisionScenario.choices.find((c) => c.isOptimal);
  const stepsTotal = 1 + total;
  const stepsDone = phase === 'intro' ? 0 : phase === 'decision' ? (decisionConfirmed ? 1 : 0) : phase === 'quiz' ? 1 + qIndex + (submitted ? 1 : 0) : stepsTotal;

  const footer = (() => {
    if (phase === 'intro')
      return <button onClick={() => setPhase('decision')} className="btn-gold w-full !py-4 text-base">Mulai evaluasi <ArrowRight className="h-4 w-4" /></button>;
    if (phase === 'decision')
      return !decisionConfirmed ? (
        <button onClick={confirmDecision} disabled={!selectedChoice} className="btn-ink w-full !py-4 text-base">Kunci keputusan ini</button>
      ) : (
        <button onClick={() => setPhase('quiz')} className="btn-gold w-full !py-4 text-base">Lanjut ke kuis <ArrowRight className="h-4 w-4" /></button>
      );
    if (phase === 'quiz')
      return submitted ? (
        <button onClick={next} className="btn-gold w-full !py-4 text-base">{qIndex < total - 1 ? 'Soal berikutnya' : 'Lihat hasil'} <ArrowRight className="h-4 w-4" /></button>
      ) : (
        <p className="py-3.5 text-center text-sm font-medium text-slate-500 dark:text-slate-400">Pilih satu jawaban</p>
      );
    return null;
  })();

  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520]" role="dialog" aria-modal="true" aria-label={`Evaluasi: ${node.label}`}>
      {/* Bar atas */}
      <div className="border-b border-slate-200/80 dark:border-slate-800">
        <div className="mx-auto flex w-full max-w-2xl items-center gap-3 px-4 py-3 sm:px-6">
          <button onClick={requestClose} aria-label="Tutup evaluasi" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
            <X className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="eyebrow">{node.stepNumber || 'Evaluasi'}</p>
            <p className="truncate text-sm font-bold text-slate-900 dark:text-white">{node.label}</p>
          </div>
          {phase === 'quiz' && timed && !submitted && (
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular-nums ${timeLeft <= 10 ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
              <Clock className="h-4 w-4" />{timeLeft}s
            </span>
          )}
        </div>
        {phase !== 'completed' && (
          <div className="mx-auto flex w-full max-w-2xl gap-1.5 px-4 pb-3 sm:px-6" aria-hidden="true">
            {Array.from({ length: stepsTotal }).map((_, i) => (
              <span key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i < stepsDone ? 'bg-[#E3A63A]' : 'bg-slate-200 dark:bg-slate-800'}`} />
            ))}
          </div>
        )}
      </div>

      {/* Isi */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto w-full max-w-2xl px-4 py-7 sm:px-6 sm:py-10">
          {phase === 'intro' && (
            <div className="space-y-7">
              <div>
                <p className="eyebrow">{alreadyMastered ? 'Latihan ulang' : 'Cek paham'}</p>
                <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl">{node.label}</h1>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  Dua bagian: satu kasus keputusan nyata, lalu {total} soal penalaran. Lulus bila minimal {needed} dari {total} soal benar.
                </p>
              </div>

              <ol className="space-y-3">
                <li className="surface flex gap-4 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDF0D5] text-sm font-extrabold text-[#7A4D0A]">1</span><span><strong className="block text-slate-900 dark:text-white">Kasus keputusan</strong><span className="text-sm text-slate-600 dark:text-slate-300">Pilih tindakan, lalu lihat pilihan terkuat, konsekuensinya, dan teori di baliknya.</span></span></li>
                <li className="surface flex gap-4 p-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FDF0D5] text-sm font-extrabold text-[#7A4D0A]">2</span><span><strong className="block text-slate-900 dark:text-white">{total} soal penalaran</strong><span className="text-sm text-slate-600 dark:text-slate-300">Setiap jawaban langsung dibahas, jadi Anda belajar walau salah.</span></span></li>
              </ol>

              <button type="button" role="switch" aria-checked={timed} onClick={() => setTimed((v) => !v)} className="surface flex w-full items-center gap-4 p-4 text-left">
                <span className="min-w-0 flex-1">
                  <strong className="block text-slate-900 dark:text-white">Batas waktu {SECONDS_PER_QUESTION} detik per soal</strong>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{timed ? 'Aktif: jawaban cepat memberi RP ekstra.' : 'Nonaktif: baca dengan santai.'}</span>
                </span>
                <span className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${timed ? 'bg-[#E3A63A]' : 'bg-slate-300 dark:bg-slate-700'}`}>
                  <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${timed ? 'left-6' : 'left-1'}`} />
                </span>
              </button>

              <p className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                <Sparkles className="h-4 w-4 text-[#CF8E1F]" />
                {alreadyMastered ? 'Latihan ulang tidak menambah RP, tetapi menjaga ingatan dan streak Anda.' : `Lulus pertama kali memberi +${MASTERY_BONUS} RP kelulusan plus RP dari jawaban Anda.`}
              </p>
            </div>
          )}

          {phase === 'decision' && (
            <div className="space-y-6">
              <div>
                <p className="eyebrow">Bagian 1 · Kasus keputusan</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-white sm:text-3xl">{node.decisionScenario.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">{plain(node.decisionScenario.context)}</p>
                <p className="mt-4 rounded-2xl bg-[#FDF0D5] p-4 font-serif text-xl font-medium leading-snug text-[#5E3A08] dark:bg-[#E3A63A]/10 dark:text-[#F1D8A0]">{plain(node.decisionScenario.dilemma)}</p>
              </div>

              <div className="space-y-3" role="radiogroup" aria-label="Pilihan keputusan">
                {node.decisionScenario.choices.map((c, i) => {
                  const isSel = selectedChoice?.id === c.id;
                  let cls = isSel
                    ? 'border-[#CF8E1F] bg-[#FDF0D5]/60 dark:bg-[#E3A63A]/10'
                    : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[#18202D] dark:hover:border-slate-500';
                  let badge = isSel ? 'bg-[#E3A63A] text-[#151517]' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300';
                  if (decisionConfirmed) {
                    if (c.isOptimal) { cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10'; badge = 'bg-emerald-600 text-white'; }
                    else if (isSel) { cls = 'border-rose-500 bg-rose-50 dark:bg-rose-500/10'; badge = 'bg-rose-600 text-white'; }
                    else { cls = 'border-slate-200 bg-white opacity-55 dark:border-slate-700 dark:bg-[#18202D]'; }
                  }
                  return (
                    <button
                      key={c.id}
                      role="radio"
                      aria-checked={isSel}
                      disabled={decisionConfirmed}
                      onClick={() => setSelectedChoice(c)}
                      className={`flex w-full items-start gap-3.5 rounded-2xl border-2 p-4 text-left transition-all ${cls}`}
                    >
                      <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${badge}`}>{String.fromCharCode(65 + i)}</span>
                      <span className="text-base leading-relaxed text-slate-900 dark:text-slate-100">
                        {plain(c.text)}
                        {decisionConfirmed && c.isOptimal && <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">Pilihan terkuat</span>}
                        {decisionConfirmed && isSel && !c.isOptimal && <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-300">Pilihan Anda</span>}
                      </span>
                    </button>
                  );
                })}
              </div>

              {decisionConfirmed && selectedChoice && (() => {
                const right = selectedChoice.isOptimal;
                const bestLetter = best ? String.fromCharCode(65 + node.decisionScenario.choices.findIndex((c) => c.id === best.id)) : '';
                const theory = node.microContent?.mentalModel;
                return (
                  <motion.div id="decision-result" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="scroll-mt-4 space-y-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/70 dark:bg-[#18202D] dark:ring-white/10" aria-live="polite">
                    <p className={`flex items-center gap-2 text-base font-extrabold ${right ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
                      {right ? <><CheckCircle2 className="h-5 w-5" />Keputusan tepat</> : <><XCircle className="h-5 w-5" />Belum tepat{best ? `: pilihan terkuat adalah ${bestLetter}` : ''}</>}
                    </p>
                    <div>
                      <p className="eyebrow">Konsekuensi pilihan Anda</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{plain(selectedChoice.consequence)}</p>
                    </div>
                    <div>
                      <p className="eyebrow">{right ? 'Mengapa ini kuat' : `Mengapa ${bestLetter || 'pilihan lain'} lebih kuat`}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{plain((right ? selectedChoice : best ?? selectedChoice).explanation)}</p>
                    </div>
                    {!right && (
                      <div>
                        <p className="eyebrow">Mengapa pilihan Anda kurang tepat</p>
                        <p className="mt-1 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{plain(selectedChoice.explanation)}</p>
                      </div>
                    )}
                    {theory && (
                      <div className="rounded-xl bg-[#FDF0D5] p-4 dark:bg-[#E3A63A]/10">
                        <p className="eyebrow !text-[#7A4D0A] dark:!text-[#E9C06B]">Teori di baliknya</p>
                        <p className="mt-1 font-serif text-lg font-medium leading-snug text-[#5E3A08] dark:text-[#F1D8A0]">{plain(theory)}</p>
                      </div>
                    )}
                  </motion.div>
                );
              })()}
            </div>
          )}

          {phase === 'quiz' && q && (
            <div key={`${attempt}-${qIndex}`} className="space-y-6">
              <div>
                <p className="eyebrow">Bagian 2 · Soal {qIndex + 1} dari {total}</p>
                <h2 className="mt-2 font-serif text-2xl font-semibold leading-snug text-slate-900 dark:text-white sm:text-3xl">{plain(q.question)}</h2>
              </div>

              <div className="space-y-3" role="group" aria-label="Pilihan jawaban">
                {q.options.map((opt, idx) => {
                  const isPicked = picked === idx;
                  const isRight = idx === q.correctAnswerIndex;
                  let cls = 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[#18202D] dark:hover:border-slate-500';
                  if (submitted) {
                    if (isRight) cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10';
                    else if (isPicked) cls = 'border-rose-500 bg-rose-50 dark:bg-rose-500/10';
                    else cls = 'border-slate-200 bg-white opacity-55 dark:border-slate-700 dark:bg-[#18202D]';
                  }
                  return (
                    <button key={idx} disabled={submitted} onClick={() => answer(idx)} className={`flex w-full items-start gap-3.5 rounded-2xl border-2 p-4 text-left transition-all ${cls}`}>
                      <span className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${submitted && isRight ? 'bg-emerald-600 text-white' : submitted && isPicked ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'}`}>{String.fromCharCode(65 + idx)}</span>
                      <span className="text-base leading-relaxed text-slate-900 dark:text-slate-100">{plain(opt)}</span>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-slate-200/70 dark:bg-[#18202D] dark:ring-white/10" aria-live="polite">
                  <p className={`flex items-center gap-2 text-base font-extrabold ${picked === q.correctAnswerIndex ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'}`}>
                    {picked === q.correctAnswerIndex ? <><CheckCircle2 className="h-5 w-5" />Tepat</> : picked === -1 ? <><Clock className="h-5 w-5" />Waktu habis</> : <><XCircle className="h-5 w-5" />Belum tepat</>}
                  </p>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">{plain(q.explanation)}</p>
                </motion.div>
              )}
            </div>
          )}

          {phase === 'completed' && (
            <div className="space-y-7">
              <div className="text-center">
                <span className={`mx-auto flex h-16 w-16 items-center justify-center rounded-3xl ${passed ? 'bg-[#E3A63A] text-[#151517]' : 'bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
                  {passed ? <Award className="h-8 w-8" /> : <RotateCcw className="h-8 w-8" />}
                </span>
                <h1 className="mt-5 font-serif text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{passed ? (alreadyMastered ? 'Ingatan terjaga' : 'Simpul dikuasai') : 'Belum lulus, hampir'}</h1>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {passed
                    ? alreadyMastered ? 'Latihan ulang tercatat. Jeda pengulangan berikutnya dimulai dari hari ini.' : `Anda menjawab ${correctCount} dari ${total} dengan benar. Langkah berikutnya terbuka.`
                    : `Anda menjawab ${correctCount} dari ${total}; butuh minimal ${needed}. Baca ulang materinya atau coba lagi. Tidak ada penalti.`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="surface p-4 text-center"><p className="eyebrow">Akurasi</p><p className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">{correctCount}/{total}</p></div>
                <div className="surface p-4 text-center"><p className="eyebrow">RP didapat</p><p className="mt-1 text-2xl font-extrabold text-[#9A6410] dark:text-[#E9C06B]">{passed && !alreadyMastered ? `+${earned + MASTERY_BONUS}` : '0'}</p></div>
              </div>

              {passed && <WrittenReview node={node} onUpgrade={onUpgrade} />}

              <div>
                <p className="eyebrow mb-3">Tinjau jawaban</p>
                <ul className="space-y-3">
                  {answers.map((a, i) => {
                    const ok = a.picked === a.correct;
                    return (
                      <li key={i} className="surface p-4">
                        <p className="flex items-start gap-2 text-[15px] font-bold leading-snug text-slate-900 dark:text-white">
                          {ok ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" /> : <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />}
                          {plain(a.question)}
                        </p>
                        {!ok && <p className="mt-2 text-sm text-slate-600 dark:text-slate-300"><strong>Jawaban benar: </strong>{plain(a.options[a.correct])}</p>}
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{plain(a.explanation)}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Aksi bawah (selalu terlihat, tidak tertutup dock) */}
      <div className="border-t border-slate-200/80 bg-[#FBF9F5]/95 backdrop-blur dark:border-slate-800 dark:bg-[#0F1520]/95" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="mx-auto w-full max-w-2xl px-4 py-3 sm:px-6">
          {phase === 'completed' ? (
            passed ? (
              <div className="flex flex-col gap-2 sm:flex-row">
                {onNext && <button onClick={onNext} className="btn-gold flex-1 !py-4 text-base">{nextLabel || 'Pelajaran berikutnya'} <ArrowRight className="h-4 w-4" /></button>}
                <button onClick={onClose} className={`${onNext ? 'btn-ink' : 'btn-gold'} flex-1 !py-4 text-base`}>Kembali</button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 sm:flex-row">
                <button onClick={retry} className="btn-gold flex-1 !py-4 text-base"><RotateCcw className="h-4 w-4" />Coba lagi</button>
                {onReadLesson && <button onClick={onReadLesson} className="btn-ink flex-1 !py-4 text-base"><BookOpen className="h-4 w-4" />Baca ulang materi</button>}
              </div>
            )
          ) : (
            footer
          )}
        </div>
      </div>
      {confirmExit && <ConfirmSheet title="Keluar dari evaluasi?" message="Progres evaluasi ini tidak akan disimpan. Kamu bisa mengulanginya kapan saja." cancelLabel="Lanjut belajar" confirmLabel="Ya, keluar" onCancel={() => setConfirmExit(false)} onConfirm={onClose} />}
    </div>
  );
};
