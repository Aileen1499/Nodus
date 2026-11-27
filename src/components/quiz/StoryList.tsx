import React, { useState } from 'react';
import { ArrowRight, Check, Crown } from 'lucide-react';
import { readStoriesRead, Story, STORIES, StoryKind } from '../../lib/stories';
import { StoryReader } from './StoryReader';

const FREE_STORIES = 5;

const KIND: Record<StoryKind, { label: string; cls: string }> = {
  sukses: { label: 'Sukses', cls: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300' },
  bangkrut: { label: 'Bangkrut', cls: 'bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300' },
  model: { label: 'Model bisnis', cls: 'bg-[#FDF0D5] text-[#7A4E0C] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]' },
};

/** Daftar kisah bisnis nyata; lima pertama gratis, selebihnya Pro. */
export const StoryList: React.FC<{ isPro: boolean; onLocked?: () => void; onOpenLesson?: (nodeId: string) => void }> = ({ isPro, onLocked, onOpenLesson }) => {
  const [active, setActive] = useState<Story | null>(null);
  const [read, setRead] = useState(readStoriesRead);

  const open = (s: Story, i: number) => {
    if (!isPro && i >= FREE_STORIES) { onLocked?.(); return; }
    setActive(s);
  };

  return (
    <section aria-label="Kisah bisnis">
      <p className="text-[13px] leading-snug text-slate-600 dark:text-slate-300">Cerita nyata perusahaan yang tumbuh atau jatuh, dan apa yang bisa kita pelajari darinya. Tiap kisah dibuka dengan satu tebakan.</p>
      <div className="mt-3 space-y-2.5">
        {STORIES.map((s, i) => {
          const locked = !isPro && i >= FREE_STORIES;
          const k = KIND[s.kind];
          return (
            <button key={s.id} onClick={() => open(s, i)} className="flex w-full items-center gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 text-left transition-colors hover:border-[#E3A63A]/60 dark:border-white/10 dark:bg-white/5">
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${k.cls}`}>{k.label}</span>
                  {read[s.id] && <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400"><Check className="h-3 w-3" />Sudah dibaca</span>}
                </span>
                <span className="mt-1.5 block text-[15px] font-bold leading-snug text-slate-900 dark:text-white">{s.title}</span>
                <span className="mt-0.5 block text-[12.5px] leading-snug text-slate-600 dark:text-slate-300">{s.tagline}</span>
                <span className="mt-1 block text-[11px] font-semibold text-slate-500 dark:text-slate-400">{s.minutes} menit baca</span>
              </span>
              {locked ? <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#151517] px-2.5 py-1 text-[11px] font-bold text-[#E3A63A]"><Crown className="h-3 w-3" />Pro</span> : <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />}
            </button>
          );
        })}
      </div>
      {active && <StoryReader story={active} onClose={() => { setActive(null); setRead(readStoriesRead()); }} onOpenLesson={onOpenLesson} />}
    </section>
  );
};
