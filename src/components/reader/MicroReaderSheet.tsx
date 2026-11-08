import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MindmapData, MindmapNode, HighlightColor } from '../../types';
import { useUser } from '../../context/UserContext';
import { askSocratesAI, ChatMessage } from '../../lib/socrates';
import { getNeighbours, getNodeState, plain } from '../../lib/pathLogic';
import { toolTitle } from '../tools/ToolkitView';
import {
  X,
  CheckSquare,
  Square,
  Bot,
  Send,
  Loader2,
  Highlighter,
  ArrowRight,
  ArrowLeft,
  Clock,
  Bookmark,
  Check,
  Lock,
  StickyNote,
} from 'lucide-react';

interface MicroReaderSheetProps {
  node: MindmapNode | null;
  /** Curriculum the node belongs to: gives the reader its place on the path. */
  data?: MindmapData;
  onClose: () => void;
  onStartQuiz: (node: MindmapNode) => void;
  /** Move to another lesson on the path. */
  onNavigate?: (node: MindmapNode) => void;
  /** Open a calculator from the Alat tab. */
  onOpenTool?: (toolId: string) => void;
}

const HIGHLIGHT_COLORS: Record<HighlightColor, { name: string; dot: string; mark: string }> = {
  yellow: {
    name: 'Emas',
    dot: 'bg-[#F1D8A0] border-[#E3A63A]',
    mark: 'bg-[#F8EAC9] dark:bg-[#E3A63A]/30 text-inherit',
  },
  emerald: {
    name: 'Hijau',
    dot: 'bg-[#A8DCC3] border-[#2E7D5B]',
    mark: 'bg-[#CFEBDD] dark:bg-[#2E7D5B]/40 text-inherit',
  },
  indigo: {
    name: 'Biru',
    dot: 'bg-[#BFD7F2] border-[#4A7BB5]',
    mark: 'bg-[#DCE9F7] dark:bg-[#4A7BB5]/40 text-inherit',
  },
  rose: {
    name: 'Merah muda',
    dot: 'bg-[#F6C6CF] border-[#C5506A]',
    mark: 'bg-[#FADADF] dark:bg-[#C5506A]/35 text-inherit',
  },
};

const SECTIONS = [
  { id: 'section-concept', label: 'Konsep Inti' },
  { id: 'section-insight', label: 'Wawasan' },
  { id: 'section-case', label: 'Studi Kasus' },
  { id: 'section-action', label: 'Tindakan Nyata' },
];

/** Section heading with a gold marker, like an editorial subhead. */
const SectionHeading: React.FC<{ children: React.ReactNode; aside?: React.ReactNode }> = ({ children, aside }) => (
  <div className="mb-4 flex items-center justify-between gap-3">
    <h2 className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
      <span aria-hidden className="h-5 w-1.5 rounded-full bg-[#CF8E1F]" />
      {children}
    </h2>
    {aside}
  </div>
);

export const MicroReaderSheet: React.FC<MicroReaderSheetProps> = ({ node, data, onClose, onStartQuiz, onNavigate, onOpenTool }) => {
  const {
    isNodeMastered,
    toggleActionCheck,
    isActionChecked,
    progress,
    addHighlight,
    highlights,
    addStudyMinutes,
    isBookmarked,
    toggleBookmark,
  } = useUser();

  const [activeTab, setActiveTab] = useState<'article' | 'socrates'>('article');
  const [activeSection, setActiveSection] = useState('section-concept');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [readingSeconds, setReadingSeconds] = useState(0);

  // Floating highlighter. `text` is captured at selection time so a later click cannot lose it.
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [noteMode, setNoteMode] = useState(false);
  const [noteDraft, setNoteDraft] = useState('');
  const [justSaved, setJustSaved] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef(0);
  const saveFlashRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Socrates chat
  const welcome = (label: string): ChatMessage => ({
    id: 'welcome',
    sender: 'socrates',
    text: `Saya Socrates. Saya tidak akan sekadar memberi jawaban. Saya akan menguji dan memperdalam pemahamanmu tentang "${label}". Mau mulai dari mana?`,
    timestamp: 'Baru saja',
  });
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => [welcome(node?.label || 'materi ini')]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isAsking, setIsAsking] = useState(false);

  // Study timer. Minutes are credited exactly once, when the lesson is left.
  useEffect(() => {
    secondsRef.current = 0;
    setReadingSeconds(0);
    const timer = setInterval(() => {
      secondsRef.current += 1;
      setReadingSeconds(secondsRef.current);
    }, 1000);
    return () => {
      clearInterval(timer);
      if (secondsRef.current >= 30) addStudyMinutes(Math.max(1, Math.round(secondsRef.current / 60)));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node?.id]);

  // Reset per lesson
  useEffect(() => {
    setActiveTab('article');
    setActiveSection('section-concept');
    setTooltip(null);
    setNoteMode(false);
    setScrollProgress(0);
    setChatMessages([welcome(node?.label || 'materi ini')]);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [node?.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => () => {
    if (saveFlashRef.current) clearTimeout(saveFlashRef.current);
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    setScrollProgress(max > 0 ? Math.min(100, Math.round((el.scrollTop / max) * 100)) : 100);

    // Highlight the section currently in view
    const top = el.getBoundingClientRect().top + 120;
    let current = SECTIONS[0].id;
    for (const s of SECTIONS) {
      const target = document.getElementById(s.id);
      if (target && target.getBoundingClientRect().top <= top) current = s.id;
    }
    setActiveSection(current);
  };

  const jumpTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) return;
    const text = selection.toString().trim();
    if (text.length < 4) return;
    try {
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      const box = scrollRef.current?.getBoundingClientRect();
      if (!box) return;
      setNoteMode(false);
      setNoteDraft('');
      setTooltip({
        text,
        x: Math.max(130, Math.min(rect.left + rect.width / 2 - box.left, box.width - 130)),
        y: Math.max(8, rect.top - box.top + (scrollRef.current?.scrollTop ?? 0) - 56),
      });
    } catch {
      setTooltip(null);
    }
  }, []);

  if (!node) return null;

  const mastered = isNodeMastered(node.id);
  const saved = isBookmarked(node.id);
  const { previous, next } = data ? getNeighbours(node, data) : { previous: undefined, next: undefined };
  const nextLocked = !!(data && next && getNodeState(next, data, isNodeMastered) === 'locked');
  const steps = node.microContent.actionableSteps || [];
  const doneSteps = steps.filter((_, i) => isActionChecked(node.id, i)).length;
  const minutes = Math.floor(readingSeconds / 60);

  const saveHighlight = (color: HighlightColor) => {
    if (!tooltip) return;
    addHighlight(node.id, node.label, node.domain, tooltip.text, color, noteMode ? noteDraft : undefined);
    setTooltip(null);
    setNoteMode(false);
    setNoteDraft('');
    window.getSelection()?.removeAllRanges();
    setJustSaved(true);
    if (saveFlashRef.current) clearTimeout(saveFlashRef.current);
    saveFlashRef.current = setTimeout(() => setJustSaved(false), 2200);
  };

  /** Renders text with this lesson's saved highlights marked. */
  const withHighlights = (raw: string): React.ReactNode => {
    const text = plain(raw || '');
    const mine = highlights.filter((h) => h.nodeId === node.id && text.includes(h.text));
    if (mine.length === 0) return text;

    let parts: React.ReactNode[] = [text];
    mine.forEach((hl) => {
      parts = parts.flatMap((part, pi) => {
        if (typeof part !== 'string' || !part.includes(hl.text)) return [part];
        const pieces = part.split(hl.text);
        const out: React.ReactNode[] = [];
        pieces.forEach((piece, i) => {
          out.push(piece);
          if (i < pieces.length - 1) {
            out.push(
              <mark key={`${hl.id}-${pi}-${i}`} title={hl.note || undefined} className={`rounded-[3px] px-0.5 py-px ${HIGHLIGHT_COLORS[hl.color || 'yellow'].mark}`}>
                {hl.text}
              </mark>
            );
          }
        });
        return out;
      });
    });
    return <>{parts.map((p, i) => <React.Fragment key={i}>{p}</React.Fragment>)}</>;
  };

  const ask = async (custom?: string) => {
    const question = (custom ?? inputQuestion).trim();
    if (!question || isAsking) return;
    setChatMessages((prev) => [...prev, { id: `u-${Date.now()}`, sender: 'user', text: question, timestamp: 'Baru saja' }]);
    setInputQuestion('');
    setIsAsking(true);
    try {
      const reply = await askSocratesAI(node.label, node.domain, question, progress.apiKey);
      setChatMessages((prev) => [...prev, { id: `s-${Date.now()}`, sender: 'socrates', text: reply, timestamp: 'Baru saja' }]);
    } catch {
      setChatMessages((prev) => [
        ...prev,
        { id: `e-${Date.now()}`, sender: 'socrates', text: 'Koneksi mentor sedang terganggu. Coba tanyakan lagi sebentar lagi.', timestamp: 'Baru saja' },
      ]);
    } finally {
      setIsAsking(false);
    }
  };

  const starters = [
    `Jelaskan "${node.label}" dengan analogi lain`,
    'Uji pemahamanku dengan satu pertanyaan sulit',
    'Apa kesalahan paling umum soal ini?',
  ];

  const tocTone = (id: string) =>
    activeSection === id
      ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#FBF9F5] dark:text-[#151517]'
      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10';

  const m = node.microContent;

  return (
    <div className="fixed inset-0 z-[70] flex items-stretch justify-center bg-black/60 sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-label={node.label}>
      <div className="relative flex h-full w-full max-w-3xl animate-sheet-up flex-col overflow-hidden bg-[#FBF9F5] shadow-float dark:bg-[#151517] sm:h-[94vh] sm:rounded-[28px]">
        {/* Reading progress */}
        <div className="h-1 w-full shrink-0 bg-slate-200/70 dark:bg-white/10" role="progressbar" aria-valuenow={scrollProgress} aria-valuemin={0} aria-valuemax={100} aria-label="Progres membaca">
          <div className="h-full bg-[#E3A63A] transition-[width] duration-150" style={{ width: `${activeTab === 'article' ? scrollProgress : 100}%` }} />
        </div>

        {/* Top bar */}
        <header className="shrink-0 border-b border-slate-200/70 px-4 pb-2.5 pt-3 dark:border-white/10 sm:px-8">
          <div className="flex items-center justify-between gap-3">
            <button onClick={onClose} aria-label="Tutup" className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>

            <div className="flex rounded-full bg-slate-100 p-0.5 dark:bg-white/10" role="tablist" aria-label="Mode belajar">
              {([
                { id: 'article', label: 'Bacaan', icon: null },
                { id: 'socrates', label: 'Socrates', icon: Bot },
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
                    activeTab === tab.id ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#FBF9F5] dark:text-[#151517]' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {tab.icon && <tab.icon className="h-3.5 w-3.5" />}
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1">
              <span className="hidden items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold tabular-nums text-slate-600 dark:bg-white/10 dark:text-slate-300 sm:flex" title="Waktu membaca sesi ini">
                <Clock className="h-3.5 w-3.5" />
                {minutes}:{String(readingSeconds % 60).padStart(2, '0')}
              </span>
              <button
                onClick={() => toggleBookmark(node.id)}
                aria-pressed={saved}
                aria-label={saved ? 'Hapus dari Brankas' : 'Simpan ke Brankas'}
                title={saved ? 'Tersimpan di Brankas' : 'Simpan ke Brankas'}
                className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${saved ? 'bg-[#E3A63A] text-[#151517]' : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'}`}
              >
                <Bookmark className="h-5 w-5" fill={saved ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>

          {activeTab === 'article' && (
            <nav aria-label="Daftar isi" className="-mx-1 mt-2 flex items-center gap-1 overflow-x-auto scrollbar-none">
              {SECTIONS.map((s) => (
                <button key={s.id} onClick={() => jumpTo(s.id)} aria-current={activeSection === s.id ? 'true' : undefined} className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${tocTone(s.id)}`}>
                  {s.label}
                </button>
              ))}
            </nav>
          )}
        </header>

        {/* Body */}
        <div ref={scrollRef} onScroll={handleScroll} onMouseUp={handleSelection} onTouchEnd={handleSelection} className="relative flex-1 select-text overflow-y-auto scroll-smooth">
          {tooltip && activeTab === 'article' && (
            <div style={{ left: tooltip.x, top: tooltip.y }} className="absolute z-40 -translate-x-1/2 animate-fade-in">
              <div className="rounded-2xl bg-[#151517] p-1.5 text-white shadow-float ring-1 ring-white/10 dark:bg-[#FBF9F5] dark:text-[#151517]">
                <div className="flex items-center gap-1.5">
                  {(Object.keys(HIGHLIGHT_COLORS) as HighlightColor[]).map((c) => (
                    <button key={c} onClick={() => saveHighlight(c)} title={`Stabilo ${HIGHLIGHT_COLORS[c].name}`} aria-label={`Stabilo ${HIGHLIGHT_COLORS[c].name}`} className={`h-7 w-7 rounded-full border-2 transition-transform hover:scale-110 active:scale-90 ${HIGHLIGHT_COLORS[c].dot}`} />
                  ))}
                  <span className="mx-0.5 h-5 w-px bg-white/20 dark:bg-black/15" />
                  <button onClick={() => setNoteMode((v) => !v)} aria-pressed={noteMode} className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-bold hover:bg-white/10 dark:hover:bg-black/5">
                    <StickyNote className="h-3.5 w-3.5" />
                    Catatan
                  </button>
                </div>
                {noteMode && (
                  <input
                    autoFocus
                    value={noteDraft}
                    onChange={(e) => setNoteDraft(e.target.value)}
                    placeholder="Tulis catatanmu, lalu pilih warna"
                    aria-label="Catatan untuk stabilo"
                    className="mt-1.5 w-full rounded-xl bg-white/10 px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none dark:bg-black/5 dark:text-[#151517]"
                  />
                )}
              </div>
            </div>
          )}

          {justSaved && (
            <div role="status" className="fixed left-1/2 top-6 z-[80] flex -translate-x-1/2 animate-fade-in items-center gap-2 rounded-full bg-[#151517] px-4 py-2 text-sm font-bold text-white shadow-float">
              <Check className="h-4 w-4 text-[#7BD9AE]" />
              Tersimpan di Brankas
            </div>
          )}

          {activeTab === 'article' ? (
            <article className="mx-auto max-w-[40rem] px-5 pb-24 pt-8 sm:px-8">
              {/* Title block */}
              <p className="eyebrow">
                {node.stageTitle ? node.stageTitle.replace(/^LEVEL \d+:\s*/i, '') : node.domain}
                {node.stepNumber ? ` • ${node.stepNumber}` : ''}
              </p>
              <h1 className="mt-3 font-serif text-[2rem] font-medium leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-[2.5rem]">{node.label}</h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">{plain(node.summary)}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-bold">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-white/10 dark:text-slate-200">{m.readTime ? `${m.readTime} baca` : 'Bacaan singkat'}</span>
                {m.difficulty && <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 dark:bg-white/10 dark:text-slate-200">{m.difficulty}</span>}
                {mastered && <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">Dikuasai</span>}
              </div>

              {/* 1. Core concept */}
              <section id="section-concept" className="scroll-mt-4 pt-10">
                <SectionHeading>Konsep Inti</SectionHeading>
                {m.mentalModel && (
                  <div className="mb-5 rounded-2xl bg-[#151517] p-5 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#E3A63A]">Model mental</p>
                    <p className="mt-2 font-serif text-xl italic leading-snug">{plain(m.mentalModel)}</p>
                  </div>
                )}
                <p className="font-serif text-[1.1875rem] leading-[1.75] text-slate-800 dark:text-slate-100">{withHighlights(m.analogy)}</p>
                <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <Highlighter className="h-3.5 w-3.5 shrink-0 text-[#CF8E1F]" />
                  Sorot kalimat penting untuk menyimpannya ke Brankas, dengan warna dan catatan sendiri.
                </p>
              </section>

              {/* 2. Insight */}
              <section id="section-insight" className="scroll-mt-4 pt-12">
                <SectionHeading>Wawasan Lintas Ilmu</SectionHeading>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-[#9A6410] dark:text-[#E9C06B]">{plain(m.crossDisciplinary.connectionText)}</p>
                <p className="font-serif text-[1.1875rem] leading-[1.75] text-slate-800 dark:text-slate-100">{withHighlights(m.crossDisciplinary.insight)}</p>
                {m.academicInsight && (
                  <div className="mt-6 border-l-[3px] border-[#E3A63A] pl-4">
                    <p className="eyebrow mb-1">Fondasi teori & riset</p>
                    <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">{withHighlights(m.academicInsight)}</p>
                  </div>
                )}
              </section>

              {/* 3. Case */}
              <section id="section-case" className="scroll-mt-4 pt-12">
                <SectionHeading>Studi Kasus</SectionHeading>
                {m.caseStudy ? (
                  <>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white">{plain(m.caseStudy.companyOrFigure)}</h3>
                    <p className="mt-2 font-serif text-[1.1875rem] leading-[1.75] text-slate-800 dark:text-slate-100">{withHighlights(m.caseStudy.story)}</p>
                    {m.caseStudy.takeaway && (
                      <div className="mt-6 rounded-2xl bg-[#151517] p-5 text-white">
                        <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#E3A63A]">Pelajaran kunci</p>
                        <p className="mt-2 font-serif text-xl italic leading-snug">{withHighlights(m.caseStudy.takeaway)}</p>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400">Materi ini belum memiliki studi kasus.</p>
                )}
              </section>

              {/* 4. Actions */}
              <section id="section-action" className="scroll-mt-4 pt-12">
                <SectionHeading aside={<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tabular-nums text-slate-600 dark:bg-white/10 dark:text-slate-300">{doneSteps} / {steps.length}</span>}>
                  Tindakan Nyata
                </SectionHeading>
                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">Pengetahuan baru terasa nyata ketika dipakai. Kerjakan langkah ini pada bisnis atau rencanamu (+10 RP per langkah).</p>
                <ul className="space-y-2.5">
                  {steps.map((step, idx) => {
                    const checked = isActionChecked(node.id, idx);
                    return (
                      <li key={idx}>
                        <button
                          onClick={() => toggleActionCheck(node.id, idx)}
                          aria-pressed={checked}
                          className={`flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition-colors ${
                            checked ? 'border-emerald-500/40 bg-emerald-50 dark:bg-emerald-500/10' : 'border-slate-200 bg-white hover:border-[#E3A63A] dark:border-white/10 dark:bg-white/5'
                          }`}
                        >
                          <span className={`mt-0.5 shrink-0 ${checked ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                            {checked ? <CheckSquare className="h-5 w-5" /> : <Square className="h-5 w-5" />}
                          </span>
                          <span className={`text-[15px] leading-relaxed ${checked ? 'text-slate-500 line-through dark:text-slate-400' : 'font-medium text-slate-800 dark:text-slate-100'}`}>{plain(step)}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {node.toolId && onOpenTool && (
                <button onClick={() => onOpenTool(node.toolId as string)} className="mt-6 flex w-full items-center gap-3 rounded-2xl border border-[#E3A63A]/50 bg-[#FDF0D5] p-4 text-left transition-colors hover:bg-[#FBE7BD] dark:bg-[#E3A63A]/10 dark:hover:bg-[#E3A63A]/15">
                  <span className="min-w-0 flex-1">
                    <span className="eyebrow !text-[#7A4D0A] dark:!text-[#E9C06B]">Alat terkait</span>
                    <span className="block text-sm font-extrabold text-slate-900 dark:text-white">Hitung langsung: {toolTitle(node.toolId)}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#9A6410] dark:text-[#E9C06B]" />
                </button>
              )}

              {/* Next up: one clear continuation */}
              <section className="mt-14 rounded-3xl bg-white p-5 shadow-card ring-1 ring-slate-200/70 dark:bg-white/5 dark:ring-white/10">
                <p className="eyebrow">Langkah berikutnya</p>
                <p className="mt-1.5 text-base font-extrabold leading-snug text-slate-900 dark:text-white">
                  {mastered ? 'Materi ini sudah kamu kuasai.' : 'Uji nalarmu lewat simulasi keputusan.'}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {mastered
                    ? 'Ulangi simulasi untuk menjaga ingatan, atau lanjut ke materi berikutnya.'
                    : 'Satu kasus keputusan dan kuis singkat. Lulus untuk menyelesaikan simpul ini dan membuka langkah selanjutnya.'}
                </p>
                <button onClick={() => onStartQuiz(node)} className="btn-gold mt-4 w-full sm:w-auto">
                  <span>{mastered ? 'Uji ulang pemahaman' : 'Mulai Cek Paham'}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </section>

              {(previous || next) && (
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {previous ? (
                    <button onClick={() => onNavigate?.(previous)} className="rounded-2xl border border-slate-200 p-3.5 text-left transition-colors hover:border-[#E3A63A] dark:border-white/10">
                      <span className="eyebrow flex items-center gap-1"><ArrowLeft className="h-3 w-3" />Sebelumnya</span>
                      <span className="mt-1 block line-clamp-2 text-sm font-bold text-slate-900 dark:text-white">{previous.label}</span>
                    </button>
                  ) : <span />}
                  {next ? (
                    <button
                      onClick={() => onNavigate?.(next)}
                      disabled={nextLocked}
                      className="rounded-2xl border border-slate-200 p-3.5 text-right transition-colors enabled:hover:border-[#E3A63A] disabled:opacity-60 dark:border-white/10"
                    >
                      <span className="eyebrow flex items-center justify-end gap-1">
                        {nextLocked ? <Lock className="h-3 w-3" /> : null}Berikutnya{nextLocked ? '' : <ArrowRight className="h-3 w-3" />}
                      </span>
                      <span className="mt-1 block line-clamp-2 text-sm font-bold text-slate-900 dark:text-white">{next.label}</span>
                      {nextLocked && <span className="mt-0.5 block text-[11px] font-medium text-slate-500">Lulus Cek Paham untuk membuka</span>}
                    </button>
                  ) : <span />}
                </div>
              )}
            </article>
          ) : (
            <div className="mx-auto flex h-full max-w-[40rem] flex-col px-5 pb-6 pt-6 sm:px-8">
              <div className="mb-4 rounded-2xl bg-[#FDF0D5] p-4 text-sm leading-relaxed text-[#5E3A08] dark:bg-[#E3A63A]/10 dark:text-[#E9C06B]">
                <p className="font-extrabold">Mentor, bukan mesin jawaban</p>
                <p className="mt-0.5">Socrates menjawab berdasarkan materi “{node.label}”, lalu mengajukan pertanyaan balik untuk menguji nalarmu.</p>
              </div>

              <div className="flex-1 space-y-3 overflow-y-auto pb-3" aria-live="polite">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[88%] rounded-3xl px-4 py-3 text-[15px] leading-relaxed ${msg.sender === 'user' ? 'rounded-br-lg bg-[#151517] text-white dark:bg-[#FBF9F5] dark:text-[#151517]' : 'rounded-bl-lg bg-white text-slate-800 shadow-card ring-1 ring-slate-200/70 dark:bg-white/5 dark:text-slate-100 dark:ring-white/10'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isAsking && (
                  <div className="flex items-center gap-2 pl-2 text-sm text-slate-500" role="status">
                    <Loader2 className="h-4 w-4 animate-spin text-[#CF8E1F]" />
                    Socrates sedang berpikir…
                  </div>
                )}
              </div>

              {chatMessages.length <= 1 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {starters.map((s) => (
                    <button key={s} onClick={() => ask(s)} className="rounded-full border border-slate-300 bg-white px-3.5 py-2 text-left text-xs font-semibold text-slate-700 transition-colors hover:border-[#E3A63A] dark:border-white/15 dark:bg-white/5 dark:text-slate-200">
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={(e) => { e.preventDefault(); ask(); }} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 pl-4 focus-within:border-[#CF8E1F] dark:border-white/10 dark:bg-white/5">
                <input value={inputQuestion} onChange={(e) => setInputQuestion(e.target.value)} placeholder="Tanyakan atau jelaskan dengan kata-katamu…" aria-label="Pertanyaan untuk Socrates" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white" />
                <button type="submit" disabled={isAsking || !inputQuestion.trim()} aria-label="Kirim" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E3A63A] text-[#151517] transition-colors hover:bg-[#EBB24F] disabled:opacity-40">
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
