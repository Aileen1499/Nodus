import React from 'react';
import { ArrowRight, Bookmark, Check, Clock, Lock, Play } from 'lucide-react';
import { MindmapData, MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { getLockReason, getNeighbours, getNodeState, getPrerequisiteNode, plain } from '../../lib/pathLogic';

interface NodeDetailCardProps {
  node: MindmapNode;
  data: MindmapData;
  isRecommended: boolean;
  onOpen: (node: MindmapNode) => void;
  onSelectNode: (node: MindmapNode) => void;
  onStartQuiz?: (node: MindmapNode) => void;
}

/** Selected node: where it sits, what it is worth, how far the learner is, one primary action. */
export const NodeDetailCard: React.FC<NodeDetailCardProps> = ({ node, data, isRecommended, onOpen, onSelectNode, onStartQuiz }) => {
  const { isNodeMastered, isActionChecked, isBookmarked, toggleBookmark } = useUser();
  const state = getNodeState(node, data, isNodeMastered);
  const steps = node.microContent.actionableSteps || [];
  const doneSteps = steps.filter((_, i) => isActionChecked(node.id, i)).length;
  const percent = steps.length ? Math.round((doneSteps / steps.length) * 100) : 0;
  const saved = isBookmarked(node.id);
  const prerequisite = state === 'locked' ? getPrerequisiteNode(node, data, isNodeMastered) : undefined;
  const { next } = getNeighbours(node, data);
  const nextState = next ? getNodeState(next, data, isNodeMastered) : undefined;

  const eyebrowLabel = state === 'mastered' ? 'Dikuasai' : state === 'locked' ? 'Terkunci' : isRecommended ? 'Sedang dipelajari' : 'Siap dipelajari';
  const eyebrowTone =
    state === 'mastered'
      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'
      : state === 'locked'
      ? 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-400'
      : 'bg-[#FDF0D5] text-[#7A4D0A] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]';

  return (
    <div className="space-y-3">
      <section aria-label="Detail simpul terpilih" className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-card dark:border-white/10 dark:bg-[#1F1F23] dark:shadow-none">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${eyebrowTone}`}>
              {node.stepNumber ? `${node.stepNumber} • ` : ''}{eyebrowLabel}
            </span>
            {state !== 'mastered' && <span className="text-[11px] font-bold text-[#9A6410] dark:text-[#E9C06B]">+80 RP</span>}
          </div>
          <button
            onClick={() => toggleBookmark(node.id)}
            aria-pressed={saved}
            aria-label={saved ? 'Hapus dari Brankas' : 'Simpan ke Brankas'}
            title={saved ? 'Tersimpan di Brankas' : 'Simpan ke Brankas'}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
              saved ? 'bg-[#E3A63A] text-[#151517]' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15'
            }`}
          >
            <Bookmark className="h-[18px] w-[18px]" fill={saved ? 'currentColor' : 'none'} />
          </button>
        </div>

        <h2 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-slate-900 dark:text-white">{node.label}</h2>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{plain(node.summary)}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-slate-500 dark:text-slate-400">
          {node.microContent.readTime && (
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{node.microContent.readTime} baca</span>
          )}
          {node.microContent.difficulty && <span>{node.microContent.difficulty}</span>}
          <span>{node.domain}</span>
        </div>

        {state !== 'locked' && steps.length > 0 && (
          <div className="mt-4">
            <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
              <span>Tindakan nyata dikerjakan</span>
              <span className="tabular-nums">{doneSteps} / {steps.length}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="Progres tindakan nyata">
              <div className={`h-full rounded-full transition-all duration-500 ${state === 'mastered' ? 'bg-emerald-500' : 'bg-[#E3A63A]'}`} style={{ width: `${percent}%` }} />
            </div>
          </div>
        )}

        {state === 'locked' && (
          <div className="mt-4 flex items-start gap-3 rounded-2xl bg-slate-50 p-3.5 text-sm text-slate-600 dark:bg-white/5 dark:text-slate-300">
            <Lock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <p className="leading-relaxed">{getLockReason(node, data, isNodeMastered)} Setiap simpul dibuka lewat penguasaan simpul sebelumnya, supaya pemahamanmu berurutan.</p>
          </div>
        )}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          {state === 'locked' ? (
            <button onClick={() => prerequisite && onSelectNode(prerequisite)} disabled={!prerequisite} className="btn-gold w-full">
              <span>Lihat {prerequisite?.stepNumber || 'prasyarat'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : state === 'mastered' ? (
            <>
              <button onClick={() => onOpen(node)} className="btn-ink flex-1"><span>Baca ulang</span><ArrowRight className="h-4 w-4" /></button>
              {onStartQuiz && (
                <button onClick={() => onStartQuiz(node)} className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5">
                  Uji ulang
                </button>
              )}
            </>
          ) : (
            <button onClick={() => onOpen(node)} className="btn-gold w-full">
              <Play className="h-4 w-4" fill="currentColor" />
              <span>{doneSteps > 0 ? 'Lanjutkan Belajar' : 'Mulai Belajar'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </section>

      {next && (
        <button onClick={() => onSelectNode(next)} className="flex w-full items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-3.5 text-left transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-300">
            {nextState === 'locked' ? <Lock className="h-4 w-4" /> : nextState === 'mastered' ? <Check className="h-4 w-4 text-emerald-600" /> : <ArrowRight className="h-4 w-4" />}
          </span>
          <span className="min-w-0 flex-1">
            <span className="eyebrow block">Setelah ini</span>
            <span className="block truncate text-sm font-bold text-slate-900 dark:text-white">{next.stepNumber ? `${next.stepNumber}: ` : ''}{next.label}</span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
        </button>
      )}
    </div>
  );
};
