import React, { useState } from 'react';
import { Crown, PenLine, Sparkles } from 'lucide-react';
import { MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { BILLING_LIVE } from '../../lib/plans';
import { plain } from '../../lib/pathLogic';
import { reviewWrittenAnswerAI, WrittenFeedback } from '../../lib/socrates';

interface Props {
  node: MindmapNode;
  onUpgrade?: () => void;
}

/** Latihan tulis: jelaskan materi dengan kata sendiri, lalu dapat umpan balik. Fitur Pro saat langganan dibuka. */
export const WrittenReview: React.FC<Props> = ({ node, onUpgrade }) => {
  const { progress, isPro } = useUser();
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [fb, setFb] = useState<WrittenFeedback | null>(null);
  const locked = BILLING_LIVE && !isPro;
  const mc = node.microContent;
  const reference = plain([mc?.mentalModel, mc?.analogy, mc?.academicInsight].filter(Boolean).join('. '));

  const submit = async () => {
    setBusy(true);
    setFb(null);
    try {
      setFb(await reviewWrittenAnswerAI(node.label, node.domain, reference, text, progress.apiKey, mc?.mentalModel));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="surface p-5">
      <div className="flex items-center gap-2">
        <PenLine className="h-4 w-4 text-[#9A6410] dark:text-[#E9C06B]" />
        <p className="eyebrow">Latihan tulis</p>
        {BILLING_LIVE && <span className="ml-auto rounded-full bg-[#E3A63A] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[#151517]">Pro</span>}
      </div>
      <h3 className="mt-2 font-serif text-xl font-semibold leading-snug text-slate-900 dark:text-white">Jelaskan dengan kata Anda sendiri</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Menulis ulang adalah cara tercepat mengetahui apakah Anda benar-benar paham. Tulis 2 sampai 4 kalimat tentang "{node.label}" dan satu contoh nyata.</p>
      {locked ? (
        <button onClick={onUpgrade} className="btn-gold mt-4 w-full"><Crown className="h-4 w-4" />Buka dengan NODUS Pro</button>
      ) : (
        <>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            maxLength={1200}
            placeholder="Contoh: Konsep ini berarti… Saya bisa menerapkannya di usaha saya dengan…"
            aria-label="Penjelasan Anda"
            className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-white p-3.5 text-base leading-relaxed text-slate-900 placeholder-slate-400 focus:border-[#CF8E1F] focus:outline-none dark:border-slate-700 dark:bg-[#121214] dark:text-white"
          />
          <button onClick={submit} disabled={busy || text.trim().length < 8} className="btn-ink mt-3 w-full disabled:opacity-50">
            <Sparkles className="h-4 w-4" />{busy ? 'Socrates membaca…' : 'Minta umpan balik'}
          </button>
          {fb && (
            <div role="status" className="mt-4 rounded-2xl bg-[#FDF0D5] p-4 dark:bg-[#E3A63A]/10">
              <p className="eyebrow !text-[#7A4D0A] dark:!text-[#E9C06B]">{fb.source === 'ai' ? 'Umpan balik Socrates' : 'Umpan balik otomatis'}</p>
              <p className="mt-1.5 whitespace-pre-line text-[15px] leading-relaxed text-[#5E3A08] dark:text-[#F1D8A0]">{fb.text}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
