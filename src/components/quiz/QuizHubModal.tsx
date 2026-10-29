import React, { useState } from 'react';
import { MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  Brain, 
  ShieldAlert, 
  Award,
  Layers,
  Clock,
  Star
} from 'lucide-react';

interface QuizHubModalProps {
  nodes: MindmapNode[];
  curriculumTitle: string;
  onClose: () => void;
  onSelectNode: (node: MindmapNode) => void;
}

export const QuizHubModal: React.FC<QuizHubModalProps> = ({
  nodes,
  curriculumTitle,
  onClose,
  onSelectNode,
}) => {
  const { isNodeMastered } = useUser();
  const [filter, setFilter] = useState<'all' | 'unmastered' | 'mastered'>('all');

  const masteredCount = nodes.filter((n) => isNodeMastered(n.id)).length;
  const progressPercent = Math.round((masteredCount / Math.max(1, nodes.length)) * 100);

  const filteredNodes = nodes.filter((node) => {
    const mastered = isNodeMastered(node.id);
    if (filter === 'unmastered') return !mastered;
    if (filter === 'mastered') return mastered;
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-5 md:p-6 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="flex flex-col w-full max-w-4xl max-h-[90vh] rounded-[32px] border border-slate-200/90 dark:border-slate-800/90 bg-[#F4F7FC] dark:bg-[#0B0F19] shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-6 sm:px-8 py-5 bg-white/95 dark:bg-[#161E2E]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-indigo-600 p-[1.5px] shadow-md shadow-orange-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-900 text-amber-400">
                <Brain className="h-5 w-5" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                  Arena Evaluasi & Uji Nalar
                </h3>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  +80 RP
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Pilih topik strategis dari kurikulum "{curriculumTitle}" untuk diuji
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800/80 transition-colors"
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Progress Overview & Clay Filter Bar */}
        <div className="px-6 sm:px-8 py-4 bg-white/70 dark:bg-[#161E2E]/70 border-b border-slate-200/60 dark:border-slate-800/60 space-y-3">
          
          {/* Progress stats banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Status Penguasaan Materi: {masteredCount} dari {nodes.length} Dikuasai
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Setiap kelulusan kuis mengubah simpul menjadi Hijau Emerald Terang ⭐
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-28 sm:w-36 h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                {progressPercent}%
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-xl px-3.5 py-1.5 font-bold transition-all ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              Semua Modul ({nodes.length})
            </button>

            <button
              onClick={() => setFilter('unmastered')}
              className={`rounded-xl px-3.5 py-1.5 font-bold transition-all ${
                filter === 'unmastered'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              Belum Diuji ({nodes.length - masteredCount})
            </button>

            <button
              onClick={() => setFilter('mastered')}
              className={`rounded-xl px-3.5 py-1.5 font-bold transition-all ${
                filter === 'mastered'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-slate-800'
              }`}
            >
              ⭐ Sudah Dikuasai ({masteredCount})
            </button>
          </div>
        </div>

        {/* Quiz Cards Grid (Claymorphism style) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {filteredNodes.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-slate-500 dark:text-slate-400">
              <Award className="h-12 w-12 text-slate-400 mb-3 opacity-40 animate-pulse" />
              <p className="text-base font-bold">Tidak ada topik evaluasi pada filter ini</p>
              <p className="text-xs mt-1">Coba ganti filter di atas untuk melihat modul lainnya.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {filteredNodes.map((node) => {
                const mastered = isNodeMastered(node.id);

                return (
                  <div
                    key={node.id}
                    onClick={() => onSelectNode(node)}
                    className={`group relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer overflow-hidden ${
                      mastered
                        ? 'border-2 border-emerald-500/60 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/30 dark:from-emerald-950/30 dark:via-[#161E2E] dark:to-teal-950/20 shadow-[0_12px_30px_rgba(16,185,129,0.12)]'
                        : 'border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#161E2E] shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-indigo-500/50 hover:-translate-y-0.5'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-500/25">
                          <Layers className="h-3 w-3" />
                          {node.stepNumber || node.domain}
                        </span>

                        {mastered ? (
                          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-black text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 border border-emerald-500/40 shadow-sm">
                            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                            LULUS TERUJI
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                            <Clock className="h-3 w-3 text-amber-500" />
                            30 Detik/Soal
                          </span>
                        )}
                      </div>

                      {/* Title & Dilemma */}
                      <h4 className={`text-base font-black leading-snug transition-colors ${
                        mastered
                          ? 'text-emerald-900 dark:text-emerald-200'
                          : 'text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400'
                      }`}>
                        {node.label}
                      </h4>

                      <div className="mt-2.5 p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-700 dark:text-amber-400 mb-0.5">
                          <ShieldAlert className="h-3.5 w-3.5" />
                          <span>Dilema Strategis:</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                          {node.decisionScenario.dilemma}
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-5 pt-3.5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>+{mastered ? '80' : '80'} RP Kelulusan</span>
                      </div>

                      <div className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                        mastered
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20 group-hover:bg-emerald-500'
                          : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 group-hover:bg-indigo-500'
                      }`}>
                        <span>{mastered ? 'Uji Ulang' : 'Mulai Evaluasi'}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
