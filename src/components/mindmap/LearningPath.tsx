import React, { useState } from 'react';
import { ArrowRight, Check, Lock, Play } from 'lucide-react';
import { MindmapData, MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { getLockReason, getNodeState, getPathOrder, getPrerequisiteNode, getRecommendedNode, plain } from '../../lib/pathLogic';

interface LearningPathProps {
  data: MindmapData;
  onOpenNode: (node: MindmapNode) => void;
}

/** Vertical learning path: done, current, and locked (with the reason). */
export const LearningPath: React.FC<LearningPathProps> = ({ data, onOpenNode }) => {
  const { isNodeMastered, isActionChecked } = useUser();
  const [expandedLockedId, setExpandedLockedId] = useState<string | null>(null);
  const ordered = getPathOrder(data);
  const current = getRecommendedNode(data, isNodeMastered);
  const masteredCount = ordered.filter((n) => isNodeMastered(n.id)).length;

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white p-4 shadow-card dark:border-white/10 dark:bg-[#1F1F23] dark:shadow-none sm:p-6">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <h2 className="font-serif text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-white">Jalur Belajar</h2>
          <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">Urut dari fondasi sampai eksekusi. Setiap simpul dibuka oleh simpul sebelumnya.</p>
        </div>
        <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold tabular-nums text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
          {masteredCount} / {ordered.length} selesai
        </span>
      </div>

      <ol className="relative">
        {ordered.map((node, index) => {
          const state = getNodeState(node, data, isNodeMastered);
          const isCurrent = current?.id === node.id && state !== 'mastered';
          const isLast = index === ordered.length - 1;
          const showStage = node.stageTitle && node.stageTitle !== ordered[index - 1]?.stageTitle;
          const steps = node.microContent.actionableSteps || [];
          const doneSteps = steps.filter((_, i) => isActionChecked(node.id, i)).length;
          const isExpanded = expandedLockedId === node.id;
          const prereq = state === 'locked' ? getPrerequisiteNode(node, data, isNodeMastered) : undefined;

          return (
            <li key={node.id} className="relative">
              {showStage && <p className="eyebrow mb-3 mt-1 pl-[52px]">{node.stageTitle}</p>}
              <div className="relative flex gap-3.5 pb-5">
                {!isLast && (
                  <span aria-hidden className={`absolute left-[17px] top-9 bottom-0 w-0.5 ${state === 'mastered' ? 'bg-emerald-500' : 'border-l-2 border-dashed border-slate-300 dark:border-white/20'}`} />
                )}
                <span
                  className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    state === 'mastered'
                      ? 'bg-emerald-500 text-white'
                      : isCurrent
                      ? 'bg-[#151517] text-[#E3A63A] ring-4 ring-[#E3A63A]/30 dark:bg-[#E3A63A] dark:text-[#151517]'
                      : state === 'locked'
                      ? 'bg-slate-100 text-slate-400 dark:bg-white/10'
                      : 'border-2 border-[#E3A63A] bg-white text-[#CF8E1F] dark:bg-[#1F1F23]'
                  }`}
                >
                  {state === 'mastered' ? <Check className="h-[18px] w-[18px]" strokeWidth={3} /> : isCurrent ? <Play className="h-4 w-4" fill="currentColor" /> : state === 'locked' ? <Lock className="h-4 w-4" /> : <span className="h-2 w-2 rounded-full bg-[#E3A63A]" />}
                </span>

                {isCurrent ? (
                  <div className="min-w-0 flex-1 rounded-2xl bg-[#151517] p-4 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-full bg-[#E3A63A] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#151517]">Sedang dipelajari</span>
                      <span className="text-[11px] font-bold text-[#E3A63A]">+80 RP</span>
                    </div>
                    <p className="eyebrow mt-3 !text-slate-400">{node.stepNumber}</p>
                    <h3 className="mt-0.5 text-base font-extrabold leading-snug">{node.label}</h3>
                    <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-slate-300">{plain(node.summary)}</p>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold text-slate-400">Tindakan nyata {doneSteps} / {steps.length}</span>
                      <button onClick={() => onOpenNode(node)} className="inline-flex items-center gap-1.5 rounded-full bg-[#E3A63A] px-4 py-2 text-sm font-bold text-[#151517] transition-colors hover:bg-[#EBB24F]">
                        {doneSteps > 0 ? 'Lanjutkan' : 'Mulai'}<ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ) : state === 'locked' ? (
                  <div className="min-w-0 flex-1 rounded-2xl bg-slate-50 dark:bg-white/5">
                    <button onClick={() => setExpandedLockedId(isExpanded ? null : node.id)} aria-expanded={isExpanded} className="block w-full rounded-2xl p-4 text-left transition-colors hover:bg-slate-100 dark:hover:bg-white/10">
                      <p className="eyebrow">Terkunci{prereq?.stepNumber ? ` • prasyarat ${prereq.stepNumber.replace('Langkah ', '')}` : ''}</p>
                      <h3 className="mt-0.5 text-[15px] font-bold leading-snug text-slate-500 dark:text-slate-400">{node.stepNumber ? `${node.stepNumber}: ` : ''}{node.label}</h3>
                    </button>
                    {isExpanded && (
                      <div className="px-4 pb-4 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                        <p>{getLockReason(node, data, isNodeMastered)}</p>
                        {prereq && (
                          <button onClick={() => onOpenNode(prereq)} className="mt-2 inline-flex items-center gap-1 font-bold text-[#9A6410] dark:text-[#E9C06B]">
                            Buka {prereq.stepNumber || prereq.label}<ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <button onClick={() => onOpenNode(node)} className="min-w-0 flex-1 rounded-2xl border border-slate-200/80 bg-white p-4 text-left transition-colors hover:border-[#E3A63A] dark:border-white/10 dark:bg-white/5">
                    <p className={`eyebrow ${state === 'mastered' ? '!text-emerald-600 dark:!text-emerald-400' : '!text-[#9A6410] dark:!text-[#E9C06B]'}`}>{node.stepNumber} • {state === 'mastered' ? 'Dikuasai' : 'Siap dipelajari'}</p>
                    <h3 className="mt-0.5 text-[15px] font-bold leading-snug text-slate-900 dark:text-white">{node.label}</h3>
                    <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">{plain(node.summary)}</p>
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
