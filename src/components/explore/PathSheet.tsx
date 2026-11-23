import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Layers, Lock, Map as MapIcon, Target, Wrench, X } from 'lucide-react';
import type { MindmapData, MindmapNode } from '../../types';
import { TOOLS } from '../tools/ToolkitView';
import { getNodeState, getPathOrder, getRecommendedNode } from '../../lib/pathLogic';
import { useUser } from '../../context/UserContext';

interface PathSheetProps {
  map: MindmapData;
  onClose: () => void;
  /** Buka satu pelajaran langsung di pembaca. */
  onOpenLesson: (map: MindmapData, node: MindmapNode) => void;
  /** Buka peta jalur ini. */
  onOpenMap: (map: MindmapData) => void;
}

/** Pratinjau jalur: daftar pelajaran yang bisa diketuk untuk melihat ringkasan sebelum membukanya. */
export const PathSheet: React.FC<PathSheetProps> = ({ map, onClose, onOpenLesson, onOpenMap }) => {
  const { isNodeMastered } = useUser();
  const lessons = useMemo(() => getPathOrder(map).filter((n) => n.level !== 0 && n.id !== map.rootId), [map]);
  const next = getRecommendedNode(map, isNodeMastered);
  const [openId, setOpenId] = useState<string | null>(next?.id ?? lessons[0]?.id ?? null);

  const toolNames = useMemo(() => {
    const ids = Array.from(new Set(lessons.map((n) => n.toolId).filter(Boolean)));
    return ids.map((id) => TOOLS.find((t) => t.id === id)?.title).filter(Boolean) as string[];
  }, [lessons]);

  const stages = useMemo(() => {
    const groups: { title: string | null; items: MindmapNode[] }[] = [];
    lessons.forEach((n) => {
      const title = n.stageTitle ?? null;
      const last = groups[groups.length - 1];
      if (last && last.title === title) last.items.push(n);
      else groups.push({ title, items: [n] });
    });
    return groups;
  }, [lessons]);

  const doneCount = lessons.filter((n) => isNodeMastered(n.id)).length;
  const target = next && lessons.find((n) => n.id === next.id) ? next : lessons[0];
  let counter = 0;

  return (
    <div className="fixed inset-0 z-[85] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={map.topic}>
      <button aria-label="Tutup pratinjau" onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
      <div className="relative flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[28px] border border-white/10 bg-[#18202D] text-[#FBF9F5] shadow-2xl animate-sheet-up sm:rounded-[28px]">
        <div className="flex items-start gap-3 px-5 pb-3 pt-5">
          <div className="min-w-0 flex-1">
            <p className="eyebrow !text-[#E3A63A]">Jalur belajar</p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold leading-tight">{map.topic}</h3>
          </div>
          <button onClick={onClose} aria-label="Tutup" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><X className="h-4 w-4" /></button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4">
          {map.description && <p className="text-sm leading-relaxed text-[#FBF9F5]/75">{map.description}</p>}
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"><Layers className="h-3.5 w-3.5 text-[#E3A63A]" />{doneCount}/{lessons.length} dikuasai</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"><Target className="h-3.5 w-3.5 text-[#E3A63A]" />Kuis di tiap pelajaran</span>
            {toolNames.length > 0 && <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5"><Wrench className="h-3.5 w-3.5 text-[#E3A63A]" />{toolNames.length} alat</span>}
          </div>

          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#FBF9F5]/55">Ketuk pelajaran untuk pratinjau</p>
          <div className="mt-2 space-y-4">
            {stages.map((g, gi) => (
              <div key={gi}>
                {g.title && <p className="mb-1.5 text-xs font-bold text-[#E3A63A]">{g.title.replace(/^TAHAP\s*/i, 'Tahap ')}</p>}
                <ol className="space-y-1.5">
                  {g.items.map((n) => {
                    counter += 1;
                    const mastered = isNodeMastered(n.id);
                    const locked = getNodeState(n, map, isNodeMastered) === 'locked';
                    const open = openId === n.id;
                    return (
                      <li key={n.id} className={`overflow-hidden rounded-2xl border transition-colors ${open ? 'border-[#E3A63A]/40 bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'}`}>
                        <button onClick={() => setOpenId(open ? null : n.id)} aria-expanded={open} className="flex w-full items-center gap-3 px-3 py-3 text-left">
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold tabular-nums ${mastered ? 'bg-[#2E7D5B] text-white' : 'bg-white/10'}`}>
                            {mastered ? <Check className="h-3.5 w-3.5" /> : locked ? <Lock className="h-3 w-3 text-white/60" /> : counter}
                          </span>
                          <span className={`min-w-0 flex-1 text-sm font-semibold leading-snug ${locked ? 'text-[#FBF9F5]/60' : 'text-[#FBF9F5]'}`}>{n.label}</span>
                          <ChevronDown className={`h-4 w-4 shrink-0 text-white/50 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </button>
                        {open && (
                          <div className="border-t border-white/10 px-3 pb-3 pt-2.5">
                            {n.summary && <p className="text-[13px] leading-relaxed text-[#FBF9F5]/75">{n.summary}</p>}
                            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-semibold text-[#FBF9F5]/55">
                              <span>±5 menit</span>
                              {n.quiz?.length ? <span>{n.quiz.length} soal kuis</span> : null}
                              {n.toolId ? <span>Ada alat</span> : null}
                            </div>
                            <button onClick={() => onOpenLesson(map, n)} className="btn-gold mt-3 flex w-full items-center justify-center gap-2 !py-2.5 text-sm">
                              {locked ? 'Lihat syarat pelajaran' : mastered ? 'Baca ulang' : 'Buka pelajaran'} <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2 border-t border-white/10 bg-[#18202D] px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
          <button onClick={() => onOpenMap(map)} className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm font-bold text-[#FBF9F5] hover:bg-white/10"><MapIcon className="h-4 w-4" />Peta</button>
          {target && (
            <button onClick={() => onOpenLesson(map, target)} className="btn-gold flex flex-1 items-center justify-center gap-2 px-4 py-3 text-base">
              {doneCount > 0 ? 'Lanjutkan' : 'Mulai jalur ini'} <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
