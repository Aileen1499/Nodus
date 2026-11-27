import React, { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Check, Lightbulb, X } from 'lucide-react';
import { Portal } from '../common/Portal';
import { useModal } from '../../lib/useModal';
import { markStoryRead, Story, STORY_NOTICE } from '../../lib/stories';
import { findNode } from '../../lib/nodeIndex';
import { shuffled } from '../../lib/shuffle';

interface Props {
  story: Story;
  onClose: () => void;
  onOpenLesson?: (nodeId: string) => void;
}

const KIND_LABEL = { sukses: 'Kisah sukses', bangkrut: 'Kisah jatuhnya', model: 'Model bisnis' } as const;

/** Pembaca kisah: tebak dulu, baru cerita, lalu pelajaran dan tautan ke konsepnya. */
export const StoryReader: React.FC<Props> = ({ story, onClose, onOpenLesson }) => {
  useModal(onClose);
  const [picked, setPicked] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  // Urutan pilihan diacak tiap dibuka, supaya jawaban benar tidak selalu di posisi yang sama.
  const g = useMemo(() => {
    const order = shuffled(story.guess.options.map((_, i) => i));
    return { ...story.guess, options: order.map((i) => story.guess.options[i]), answer: order.indexOf(story.guess.answer) };
  }, [story]);
  const reveal = (i: number | null) => { setPicked(i); setOpen(true); markStoryRead(story.id); };

  return (
    <Portal>
      <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label={story.title}>
        <button aria-label="Tutup" onClick={onClose} className="absolute inset-0 cursor-default" tabIndex={-1} />
        <div className="relative flex max-h-[94dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[28px] bg-[#FBF9F5] shadow-2xl animate-sheet-up dark:bg-[#1C1C1F] sm:rounded-[28px]">
          <div className="flex items-start justify-between gap-3 border-b border-slate-200/70 px-5 pb-3 pt-5 dark:border-white/10">
            <div className="min-w-0">
              <p className="eyebrow">{KIND_LABEL[story.kind]} · {story.minutes} menit baca</p>
              <h2 className="mt-1 font-serif text-[22px] font-semibold leading-tight text-slate-900 dark:text-white">{story.title}</h2>
            </div>
            <button onClick={onClose} aria-label="Tutup kisah" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200"><X className="h-5 w-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-4">
            {!open ? (
              <div>
                <p className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#9A6410] dark:text-[#E9C06B]"><Lightbulb className="h-3.5 w-3.5" />Tebak dulu</p>
                <p className="mt-2 font-serif text-xl leading-snug text-slate-900 dark:text-white">{g.q}</p>
                <div className="mt-4 space-y-2.5">
                  {g.options.map((o, i) => (
                    <button key={o} onClick={() => reveal(i)} className="w-full rounded-2xl border border-slate-200/80 bg-white p-4 text-left text-[14.5px] font-semibold text-slate-800 transition-colors hover:border-[#E3A63A] dark:border-white/10 dark:bg-white/5 dark:text-slate-100">{o}</button>
                  ))}
                </div>
                <button onClick={() => reveal(null)} className="mt-4 text-[13px] font-semibold text-slate-500 underline underline-offset-4 dark:text-slate-400">Lewati, langsung baca kisahnya</button>
              </div>
            ) : (
              <div>
                {picked !== null && (
                  <div className={`rounded-2xl p-4 ${picked === g.answer ? 'bg-emerald-50 dark:bg-emerald-500/10' : 'bg-[#FDF0D5] dark:bg-[#E3A63A]/10'}`}>
                    <p className={`flex items-center gap-1.5 text-sm font-bold ${picked === g.answer ? 'text-emerald-800 dark:text-emerald-300' : 'text-[#7A4D0A] dark:text-[#E9C06B]'}`}>
                      {picked === g.answer ? <><Check className="h-4 w-4" />Tebakanmu tepat</> : 'Tebakan yang wajar, tapi begini ceritanya'}
                    </p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-slate-700 dark:text-slate-200">{g.reveal}</p>
                  </div>
                )}

                <p className="mt-4 text-[15px] italic leading-relaxed text-slate-600 dark:text-slate-300">{story.tagline}</p>

                {story.chapters.map((c) => (
                  <section key={c.h} className="mt-6">
                    <h3 className="font-serif text-lg font-semibold text-slate-900 dark:text-white">{c.h}</h3>
                    {c.p.map((t, i) => <p key={i} className="mt-2 text-[15px] leading-[1.75] text-slate-700 dark:text-slate-200">{t}</p>)}
                  </section>
                ))}

                <section className="mt-7 rounded-2xl bg-[#151517] p-5 text-[#FBF9F5]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#E9C06B]">Yang bisa dibawa pulang</p>
                  <ul className="mt-2 space-y-2">
                    {story.takeaways.map((t) => (
                      <li key={t} className="flex gap-2 text-[14px] leading-relaxed"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E3A63A]" />{t}</li>
                    ))}
                  </ul>
                </section>

                <section className="mt-6">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pelajari konsep di baliknya</h3>
                  <div className="mt-2 space-y-2">
                    {story.lessons.map((l) => {
                      const hit = findNode(l.id);
                      if (!hit) return null;
                      return (
                        <button key={l.id} onClick={() => onOpenLesson?.(l.id)} className="flex w-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 text-left dark:border-white/10 dark:bg-white/5">
                          <BookOpen className="h-5 w-5 shrink-0 text-[#9A6410] dark:text-[#E9C06B]" />
                          <span className="min-w-0 flex-1">
                            <span className="block text-[14px] font-bold text-slate-900 dark:text-white">{hit.node.label}</span>
                            <span className="mt-0.5 block text-[12.5px] leading-snug text-slate-600 dark:text-slate-300">{l.why}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
                        </button>
                      );
                    })}
                  </div>
                </section>

                <section className="mt-6 border-t border-slate-200/70 pt-4 dark:border-white/10">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Sumber</p>
                  <ul className="mt-1.5 space-y-1">
                    {story.sources.map((s) => <li key={s} className="text-[12px] leading-snug text-slate-500 dark:text-slate-400">{s}</li>)}
                  </ul>
                  <p className="mt-3 text-[11.5px] leading-relaxed text-slate-500 dark:text-slate-400">{STORY_NOTICE}</p>
                </section>
              </div>
            )}
          </div>

          {open && (
            <div className="border-t border-slate-200/80 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 dark:border-white/10">
              <button onClick={onClose} className="btn-ink w-full py-3.5 text-base">Selesai membaca</button>
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};
