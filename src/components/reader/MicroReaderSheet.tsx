import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { 
  X, 
  Lightbulb, 
  Share2, 
  CheckSquare, 
  Square, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2
} from 'lucide-react';

interface MicroReaderSheetProps {
  node: MindmapNode | null;
  onClose: () => void;
  onStartQuiz: (node: MindmapNode) => void;
}

export const MicroReaderSheet: React.FC<MicroReaderSheetProps> = ({
  node,
  onClose,
  onStartQuiz,
}) => {
  const { isNodeMastered, toggleActionCheck, isActionChecked } = useUser();

  if (!node) return null;

  const mastered = isNodeMastered(node.id);

  return (
    <AnimatePresence>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 dark:bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Sheet Container: Bottom Sheet on Mobile, Slide-in Drawer on Desktop */}
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="fixed inset-x-0 bottom-0 z-50 flex max-h-[90vh] flex-col rounded-t-3xl border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B0F19] shadow-2xl transition-colors duration-300 md:inset-y-0 md:left-auto md:right-0 md:h-full md:max-h-full md:w-[500px] md:rounded-l-3xl md:rounded-t-none md:border-l md:border-t-0"
      >
        {/* Mobile drag handle indicator */}
        <div className="flex w-full justify-center pt-3 pb-1 md:hidden">
          <div className="h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Sheet Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-4 bg-slate-50/70 dark:bg-[#0F172A]/70">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-50 dark:bg-indigo-500/20 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-400 border border-indigo-500/30">
              {node.domain}
            </span>
            {mastered && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-500/20 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/40">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                Dikuasai
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          
          {/* Title & Summary */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              {node.label}
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {node.summary}
            </p>
          </div>

          {/* Section 1: 💡 Inti Idemya (Analogi Dunia Nyata) */}
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/40 dark:bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                <Lightbulb className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-300">
                Inti Idemya (Analogi Sederhana)
              </h3>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
              {node.microContent.analogy}
            </p>
          </div>

          {/* Section 2: 🧠 Koneksi Lintas Ilmu (Inter-Disciplinary) */}
          <div className="rounded-2xl border border-purple-500/30 bg-purple-50/40 dark:bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-400">
                <Share2 className="h-4 w-4" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-purple-800 dark:text-purple-300">
                Koneksi Lintas Ilmu
              </h3>
            </div>
            
            <div className="mb-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Korelasi:</span>
              <span className="rounded-md bg-purple-100 dark:bg-purple-950/80 px-2 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-500/30">
                {node.microContent.crossDisciplinary.connectionText}
              </span>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {node.microContent.crossDisciplinary.insight}
            </p>
          </div>

          {/* Section 3: 🛠️ Tindakan Nyata (Interactive Checklists) */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <CheckSquare className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  Tindakan Nyata Hari Ini
                </h3>
              </div>
              <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                +10 RP per centang
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Jalankan salah satu tindakan di bawah untuk mengonversi wawasan ke eksekusi:
            </p>

            <div className="space-y-2.5">
              {node.microContent.actionableSteps.map((step, idx) => {
                const checked = isActionChecked(node.id, idx);
                return (
                  <div
                    key={idx}
                    onClick={() => toggleActionCheck(node.id, idx)}
                    className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-all ${
                      checked
                        ? 'border-emerald-500/60 bg-emerald-50 dark:bg-emerald-500/10 text-slate-900 dark:text-white'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                    }`}
                  >
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400 focus:outline-none"
                    >
                      {checked ? (
                        <CheckSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Square className="h-4 w-4 text-slate-400 dark:text-slate-600" />
                      )}
                    </button>
                    <span className={`text-xs sm:text-sm leading-relaxed ${checked ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Action Button CTA */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#0B0F19]/95 p-4 backdrop-blur-md">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartQuiz(node)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 py-3.5 px-6 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-95"
          >
            <Sparkles className="h-4 w-4" />
            <span>Mulai Cek Paham (Kuis & Skenario)</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
