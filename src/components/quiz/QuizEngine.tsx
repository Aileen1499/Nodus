import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MindmapNode, DecisionChoice } from '../../types';
import { useUser } from '../../context/UserContext';
import confetti from 'canvas-confetti';
import { 
  X, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Award, 
  ShieldAlert,
  Compass,
  Layers,
  HelpCircle
} from 'lucide-react';

interface QuizEngineProps {
  node: MindmapNode;
  onClose: () => void;
  onComplete: (scoreBonus: number) => void;
}

type QuizPhase = 'intro' | 'decision' | 'quiz' | 'completed';

export const QuizEngine: React.FC<QuizEngineProps> = ({
  node,
  onClose,
  onComplete,
}) => {
  const { markNodeMastered, addRankPoints } = useUser();

  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [selectedChoice, setSelectedChoice] = useState<DecisionChoice | null>(null);
  const [isDecisionConfirmed, setIsDecisionConfirmed] = useState(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalEarnedRP, setTotalEarnedRP] = useState(0);

  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const questions = node.quiz;
  const currentQ = questions[currentQuestionIndex];

  useEffect(() => {
    if (phase !== 'quiz' || isAnswerSubmitted) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setTimeLeft(30);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, currentQuestionIndex, isAnswerSubmitted]);

  const handleTimeOut = () => {
    if (isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    setSelectedAnswerIndex(-1);
  };

  const handleSelectChoice = (choice: DecisionChoice) => {
    if (isDecisionConfirmed) return;
    setSelectedChoice(choice);
  };

  const handleConfirmDecision = () => {
    if (!selectedChoice) return;
    setIsDecisionConfirmed(true);
    setTotalEarnedRP((prev) => prev + selectedChoice.scoreBonus);
  };

  const handleProceedToQuiz = () => {
    setPhase('quiz');
  };

  const handleSelectAnswer = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswerIndex(idx);
    setIsAnswerSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const isCorrect = idx === currentQ.correctAnswerIndex;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      const earned = 30 + Math.floor(timeLeft / 2);
      setTotalEarnedRP((prev) => prev + earned);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswerIndex(null);
      setIsAnswerSubmitted(false);
    } else {
      finishSimulation();
    }
  };

  const finishSimulation = () => {
    setPhase('completed');
    const finalBonus = 80;
    markNodeMastered(node.id, finalBonus);
    addRankPoints(totalEarnedRP);

    try {
      confetti({
        particleCount: 130,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#10B981', '#F59E0B', '#EC4899'],
      });
    } catch {
      // ignore
    }

    onComplete(totalEarnedRP + finalBonus);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 sm:p-4 backdrop-blur-md">
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative flex w-full max-w-2xl flex-col rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B0F19] shadow-2xl overflow-hidden max-h-[92vh] transition-colors duration-300"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-5 sm:px-6 py-4 bg-slate-50 dark:bg-[#0F172A]">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
              <Compass className="h-4 w-4" />
            </span>
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {phase === 'intro' ? 'Evaluasi Pemahaman' : phase === 'decision' ? 'Tahap 1: Decision Simulator' : phase === 'quiz' ? 'Tahap 2: Timed Reasoning Quiz' : 'Hasil Evaluasi'}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate max-w-xs sm:max-w-md">
                {node.label}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Phase 0: Elegant Pre-Quiz Intro Screen (Curio PDF Style) */}
        {phase === 'intro' && (
          <div className="flex flex-col flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                <Layers className="h-3.5 w-3.5 text-indigo-500" />
                <span>{node.stepNumber || node.stageTitle || node.domain}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                Cek Paham: {node.label}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Uji ketajaman mental model Anda. Setiap keputusan yang Anda ambil memiliki konsekuensi modal, reputasi, dan risiko nyata.
              </p>
            </div>

            {/* 3 Metric Cards (Curio Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4 text-center space-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mx-auto mb-1">
                  <ShieldAlert className="h-4 w-4" />
                </div>
                <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  1 Kasus + {questions.length} Soal
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Simulasi & Evaluasi
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4 text-center space-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto mb-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  30 Detik
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Batas Waktu per Soal
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4 text-center space-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto mb-1">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                  +80 RP
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  Bonus Kelulusan
                </div>
              </div>
            </div>

            {/* Instruction Tip */}
            <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/40 dark:bg-indigo-950/30 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-indigo-600 dark:text-indigo-400 shrink-0">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Pada tahap pertama, Anda akan menghadapi skenario dilema bisnis nyata. Pilih opsi paling strategis untuk memaksimalkan RP sebelum menjawab kuis penalaran berbatas waktu.
                </p>
              </div>
            </div>

            {/* Start CTA */}
            <div className="pt-2">
              <button
                onClick={() => setPhase('decision')}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-indigo-600 via-teal-600 to-emerald-600 text-white font-black text-sm sm:text-base shadow-xl shadow-indigo-500/25 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Mulai Cek Paham Sekarang</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Phase 1: Interactive Decision Simulator */}
        {phase === 'decision' && (
          <div className="flex flex-col flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
            {/* Context & Dilemma */}
            <div className="rounded-2xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-500/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <h4 className="font-bold text-xs sm:text-sm text-amber-800 dark:text-amber-300">
                  {node.decisionScenario.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {node.decisionScenario.context}
              </p>
              <div className="mt-3 rounded-xl bg-white dark:bg-slate-950/70 p-3 border border-slate-200 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  ⚖️ Dilema: {node.decisionScenario.dilemma}
                </p>
              </div>
            </div>

            {/* Strategic Choices */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Pilih Keputusan Taktis Anda:
              </p>

              {node.decisionScenario.choices.map((choice) => {
                const isSelected = selectedChoice?.id === choice.id;
                return (
                  <div
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    className={`rounded-2xl border p-4 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-500/15 text-slate-900 dark:text-white ring-2 ring-indigo-500/40'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                        isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-400 text-slate-500'
                      }`}>
                        {choice.id.replace('c', '')}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm font-medium leading-relaxed">
                          {choice.text}
                        </p>
                      </div>
                    </div>

                    {/* Impact explanation when confirmed */}
                    {isDecisionConfirmed && isSelected && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={`mt-3 rounded-xl p-3 text-xs leading-relaxed border ${
                          choice.isOptimal 
                            ? 'border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/15 text-emerald-800 dark:text-emerald-200' 
                            : 'border-rose-500/40 bg-rose-50 dark:bg-rose-500/15 text-rose-800 dark:text-rose-200'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          {choice.isOptimal ? (
                            <>
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                              <span>Keputusan Optimal (+{choice.scoreBonus} RP)</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-3.5 w-3.5 text-rose-600" />
                              <span>Bukan Pilihan Ideal (+{choice.scoreBonus} RP)</span>
                            </>
                          )}
                        </div>
                        <p>{choice.explanation || choice.consequence}</p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Decision Actions */}
            <div className="pt-2 flex items-center justify-between">
              {!isDecisionConfirmed ? (
                <button
                  onClick={handleConfirmDecision}
                  disabled={!selectedChoice}
                  className="w-full py-3 px-5 rounded-xl bg-indigo-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-indigo-500/20 disabled:opacity-40 hover:bg-indigo-500 active:scale-95 transition-all"
                >
                  Kunci Keputusan Ini
                </button>
              ) : (
                <button
                  onClick={handleProceedToQuiz}
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/25 hover:opacity-95 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Lanjut ke Kuis Penalaran (+Soal Berbatas Waktu)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Phase 2: Timed Reasoning Quiz */}
        {phase === 'quiz' && currentQ && (
          <div className="flex flex-col flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
            {/* Question Progress & Timer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                <span>Soal {currentQuestionIndex + 1} dari {questions.length}</span>
                <span className="h-1 w-1 rounded-full bg-slate-400" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{totalEarnedRP} RP Terkumpul</span>
              </div>

              {/* Countdown Timer with warning color */}
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                timeLeft <= 5 
                  ? 'border-rose-500 bg-rose-50 dark:bg-rose-500/20 text-rose-600 animate-pulse' 
                  : 'border-amber-500/40 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400'
              }`}>
                <Clock className="h-3.5 w-3.5" />
                <span>{timeLeft}s</span>
              </div>
            </div>

            {/* Question Card */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                {currentQ.question}
              </h4>
            </div>

            {/* Answer Options */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswerIndex === idx;
                const isCorrect = idx === currentQ.correctAnswerIndex;

                let stateClasses = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:border-slate-400';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    stateClasses = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/20 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/40';
                  } else if (isSelected && !isCorrect) {
                    stateClasses = 'border-rose-500 bg-rose-50 dark:bg-rose-500/20 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/40';
                  } else {
                    stateClasses = 'opacity-50 border-slate-200 dark:border-slate-800';
                  }
                }

                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    className={`rounded-2xl border p-3.5 sm:p-4 text-xs sm:text-sm font-medium transition-all ${stateClasses} ${
                      !isAnswerSubmitted ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold border ${
                        isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 dark:border-slate-700 text-slate-500'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="flex-1 leading-snug">{opt}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explanation when submitted */}
            <AnimatePresence>
              {isAnswerSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/40 p-4 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-bold">
                    {selectedAnswerIndex === currentQ.correctAnswerIndex ? (
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="h-4 w-4" />
                        Tepat Sekali! (+{30 + Math.floor(timeLeft / 2)} RP)
                      </span>
                    ) : (
                      <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        <XCircle className="h-4 w-4" />
                        Jawaban Kurang Tepat
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>

                  <button
                    onClick={handleNextQuestion}
                    className="w-full mt-2 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>{currentQuestionIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil Akhir'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Phase 3: Final Completed Result */}
        {phase === 'completed' && (
          <div className="flex flex-col flex-1 items-center justify-center p-6 sm:p-8 text-center space-y-5">
            <div className="relative">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-500 to-indigo-600 p-[2px] shadow-2xl">
                <div className="flex h-full w-full items-center justify-center rounded-[22px] bg-slate-900 text-emerald-400">
                  <Award className="h-10 w-10 animate-pulse" />
                </div>
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-7 w-7 text-amber-400 animate-spin" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                Simulasi Selesai & Teruji!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                Anda telah membuktikan penguasaan atas konsep <strong>{node.label}</strong> dengan sukses.
              </p>
            </div>

            {/* Score summary cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3">
                <div className="text-xs text-slate-500 dark:text-slate-400">Total RP Didapat</div>
                <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">+{totalEarnedRP + 80} RP</div>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3">
                <div className="text-xs text-slate-500 dark:text-slate-400">Akurasi Soal</div>
                <div className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                  {correctCount}/{questions.length}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full max-w-xs py-3 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 hover:opacity-95 active:scale-95 transition-all"
            >
              Kembali ke Peta Konsep
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
