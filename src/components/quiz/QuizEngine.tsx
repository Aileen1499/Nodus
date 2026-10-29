import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
  Compass
} from 'lucide-react';

interface QuizEngineProps {
  node: MindmapNode;
  onClose: () => void;
  onComplete: (scoreBonus: number) => void;
}

type QuizPhase = 'decision' | 'quiz' | 'completed';

export const QuizEngine: React.FC<QuizEngineProps> = ({
  node,
  onClose,
  onComplete,
}) => {
  const { markNodeMastered, addRankPoints } = useUser();

  const [phase, setPhase] = useState<QuizPhase>('decision');
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
                {phase === 'decision' ? 'Tahap 1: Decision Simulator' : phase === 'quiz' ? 'Tahap 2: Timed Reasoning Quiz' : 'Hasil Evaluasi'}
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
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                              <span>Langkah Optimal (+{choice.scoreBonus} RP)</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
                              <span>Kurang Optimal (+{choice.scoreBonus} RP)</span>
                            </>
                          )}
                        </div>
                        <p>{choice.consequence}</p>
                        <p className="mt-1 text-[11px] opacity-80">{choice.explanation}</p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Decision Action Footer */}
            <div className="pt-2">
              {!isDecisionConfirmed ? (
                <button
                  onClick={handleConfirmDecision}
                  disabled={!selectedChoice}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 disabled:opacity-40 transition-all active:scale-[0.99]"
                >
                  <span>Eksekusi Keputusan Ini</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleProceedToQuiz}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-emerald-500 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all active:scale-[0.99]"
                >
                  <span>Lanjut ke Kuis Penalaran (30s Timer)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Phase 2: Gamified Timed Reasoning Quiz */}
        {phase === 'quiz' && currentQ && (
          <div className="flex flex-col flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
            {/* Timer Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-500 dark:text-slate-400">
                  Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
                </span>
                <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border ${
                  timeLeft <= 8 
                    ? 'border-rose-500 bg-rose-50 dark:bg-rose-500/20 text-rose-600 dark:text-rose-300 animate-pulse' 
                    : 'border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}>
                  <Clock className="h-3.5 w-3.5" />
                  <span className="tabular-nums font-mono font-bold">{timeLeft}s</span>
                </div>
              </div>

              {/* Progress Bar for 30s */}
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                  className={`h-full transition-all duration-1000 ease-linear rounded-full ${
                    timeLeft <= 8 ? 'bg-rose-500' : 'bg-gradient-to-r from-indigo-500 to-emerald-400'
                  }`}
                  style={{ width: `${(timeLeft / 30) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 p-4">
              <h4 className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-900 dark:text-white">
                {currentQ.question}
              </h4>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswerIndex === idx;
                const isCorrect = idx === currentQ.correctAnswerIndex;
                let optionStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600';

                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-500/20 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/50';
                  } else if (isSelected) {
                    optionStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-500/20 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/50';
                  } else {
                    optionStyle = 'border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/20 text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx)}
                    disabled={isAnswerSubmitted}
                    className={`flex w-full items-start gap-3 rounded-2xl border p-3.5 text-left text-xs sm:text-sm transition-all ${optionStyle}`}
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 leading-relaxed">{opt}</span>
                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="h-4 w-4 shrink-0 text-rose-500" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer is submitted */}
            {isAnswerSubmitted && (
              <motion.div 
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-indigo-500/40 bg-indigo-50/60 dark:bg-indigo-500/10 p-4 text-xs leading-relaxed text-slate-700 dark:text-slate-200"
              >
                <p className="font-bold text-indigo-700 dark:text-indigo-300 mb-1 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                  Rasionalitas & Prinsip:
                </p>
                <p>{currentQ.explanation}</p>
              </motion.div>
            )}

            {/* Next / Finish Button */}
            {isAnswerSubmitted && (
              <div className="pt-2">
                <button
                  onClick={handleNextQuestion}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-emerald-500 py-3.5 font-bold text-white shadow-lg shadow-emerald-500/25 hover:opacity-95 transition-all"
                >
                  <span>
                    {currentQuestionIndex < questions.length - 1 ? 'Pertanyaan Berikutnya' : 'Lihat Hasil Akhir'}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Phase 3: Completion Screen */}
        {phase === 'completed' && (
          <div className="flex flex-col flex-1 items-center justify-center p-6 sm:p-8 text-center space-y-6">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-emerald-400 p-1 shadow-2xl shadow-emerald-500/30 animate-bounce">
              <div className="flex h-full w-full items-center justify-center rounded-[22px] bg-slate-900 text-emerald-400">
                <Award className="h-10 w-10" />
              </div>
            </div>

            <div>
              <span className="rounded-full bg-emerald-50 dark:bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-500/40">
                Simpul Dikuasai!
              </span>
              <h3 className="mt-3 text-2xl font-black text-slate-900 dark:text-white">
                Selamat! Anda Menguasai Simpul Ini
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
                Prinsip di balik <span className="font-semibold text-slate-900 dark:text-slate-200">"{node.label}"</span> kini terpatri dalam arsitektur berpikir Anda.
              </p>
            </div>

            {/* Reward Points Box */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="rounded-2xl border border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 p-3.5">
                <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 font-black text-lg">
                  <Sparkles className="h-5 w-5" />
                  <span>+{totalEarnedRP + 80}</span>
                </div>
                <p className="text-[11px] font-semibold text-amber-700 dark:text-amber-300/80 mt-0.5">
                  Rank Points Diperoleh
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 p-3.5">
                <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-black text-lg">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>{correctCount}/{questions.length}</span>
                </div>
                <p className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300/80 mt-0.5">
                  Akurasi Penalaran
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full max-w-sm pt-2">
              <button
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-emerald-500 py-3.5 font-bold text-white shadow-xl shadow-indigo-500/25 hover:opacity-95 transition-all active:scale-[0.99]"
              >
                <span>Buka Cabang Simpul Baru di Graf</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
