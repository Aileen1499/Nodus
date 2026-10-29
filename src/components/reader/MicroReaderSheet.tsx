import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MindmapNode, HighlightColor } from '../../types';
import { useUser } from '../../context/UserContext';
import { askSocratesAI, ChatMessage } from '../../lib/socrates';
import {
  X,
  CheckSquare,
  Square,
  Sparkles,
  CheckCircle2,
  Building2,
  Bot,
  Send,
  Loader2,
  BookOpen,
  GraduationCap,
  Award,
  Highlighter,
  ArrowRight,
  Clock,
  Layers,
  Compass,
  Check
} from 'lucide-react';

interface MicroReaderSheetProps {
  node: MindmapNode | null;
  onClose: () => void;
  onStartQuiz: (node: MindmapNode) => void;
}

const HIGHLIGHT_COLOR_MAP: Record<HighlightColor, {
  name: string;
  btnBg: string;
  markClass: string;
  badgeBg: string;
}> = {
  yellow: {
    name: 'Kuning Pastel',
    btnBg: 'bg-amber-300 hover:bg-amber-400 border-amber-400',
    markClass: 'bg-amber-200/90 dark:bg-amber-400/30 text-amber-950 dark:text-amber-200 border-b-2 border-amber-400',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-400/30',
  },
  emerald: {
    name: 'Emerald Mint',
    btnBg: 'bg-emerald-300 hover:bg-emerald-400 border-emerald-400',
    markClass: 'bg-emerald-200/90 dark:bg-emerald-400/30 text-emerald-950 dark:text-emerald-200 border-b-2 border-emerald-400',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border-emerald-400/30',
  },
  indigo: {
    name: 'Soft Indigo',
    btnBg: 'bg-indigo-300 hover:bg-indigo-400 border-indigo-400',
    markClass: 'bg-indigo-200/90 dark:bg-indigo-400/30 text-indigo-950 dark:text-indigo-200 border-b-2 border-indigo-400',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300 border-indigo-400/30',
  },
  rose: {
    name: 'Coral Pink',
    btnBg: 'bg-rose-300 hover:bg-rose-400 border-rose-400',
    markClass: 'bg-rose-200/90 dark:bg-rose-400/30 text-rose-950 dark:text-rose-200 border-b-2 border-rose-400',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/70 text-rose-800 dark:text-rose-300 border-rose-400/30',
  },
};

export const MicroReaderSheet: React.FC<MicroReaderSheetProps> = ({
  node,
  onClose,
  onStartQuiz,
}) => {
  const {
    isNodeMastered,
    toggleActionCheck,
    isActionChecked,
    progress,
    addHighlight,
    highlights,
    addStudyMinutes,
  } = useUser();

  const [activeTab, setActiveTab] = useState<'article' | 'socrates'>('article');
  const [activeSection, setActiveSection] = useState<'concept' | 'cross' | 'case' | 'action'>('concept');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Active study duration tracking in seconds
  const [readingSeconds, setReadingSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Floating Multi-Color Highlighter Tooltip State
  const [highlighterTooltip, setHighlighterTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [justHighlighted, setJustHighlighted] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Socrates AI Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'socrates',
      text: `Salam pemikir strategis. Saya Socrates, AI Mentor Anda. Saya siap membedah konsep "${node?.label || 'materi ini'}" dengan analogi membumi dan studi kasus nyata. Apa yang ingin Anda diskusikan?`,
      timestamp: 'Baru saja',
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isAskingSocrates, setIsAskingSocrates] = useState(false);

  // Study timer setup
  useEffect(() => {
    setReadingSeconds(0);
    timerRef.current = setInterval(() => {
      setReadingSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [node?.id]);

  // Flush study minutes on unmount or node change
  useEffect(() => {
    return () => {
      if (readingSeconds >= 30) {
        const minutes = Math.max(1, Math.round(readingSeconds / 60));
        addStudyMinutes(minutes);
      }
    };
  }, [readingSeconds, addStudyMinutes]);

  // Reset state when switching nodes
  useEffect(() => {
    setActiveTab('article');
    setActiveSection('concept');
    setHighlighterTooltip(null);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [node?.id]);

  // Scroll Progress Tracking
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const maxScroll = scrollHeight - clientHeight;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(100, Math.round((scrollTop / maxScroll) * 100)));
    }
  };

  // Scroll smoothly to section
  const scrollToSection = (sectionId: string) => {
    if (!scrollContainerRef.current) return;
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle Text Selection for Stabilo / Highlighter
  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setHighlighterTooltip(null);
      return;
    }

    const text = selection.toString().trim();
    if (text.length < 4) {
      setHighlighterTooltip(null);
      return;
    }

    try {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const containerRect = scrollContainerRef.current?.getBoundingClientRect();

      if (containerRect) {
        setHighlighterTooltip({
          text,
          x: Math.max(20, Math.min(rect.left + rect.width / 2 - containerRect.left, containerRect.width - 160)),
          y: Math.max(10, rect.top - containerRect.top - 55),
        });
      }
    } catch {
      setHighlighterTooltip(null);
    }
  }, []);

  const handleApplyHighlight = (color: HighlightColor) => {
    if (!highlighterTooltip || !node) return;
    addHighlight(node.id, node.label, node.domain, highlighterTooltip.text, color);
    setJustHighlighted(true);
    setHighlighterTooltip(null);
    window.getSelection()?.removeAllRanges();
    setTimeout(() => setJustHighlighted(false), 2000);
  };

  if (!node) return null;

  const mastered = isNodeMastered(node.id);

  // Helper to render text with user's saved highlights
  const renderHighlightedText = (text: string) => {
    if (!text) return null;
    const nodeHighlights = highlights.filter((h) => h.nodeId === node.id);
    if (nodeHighlights.length === 0) return text;

    let highlightedJSX: React.ReactNode = text;
    nodeHighlights.forEach((hl) => {
      if (typeof highlightedJSX === 'string' && highlightedJSX.includes(hl.text)) {
        const parts = highlightedJSX.split(hl.text);
        const colorConfig = HIGHLIGHT_COLOR_MAP[hl.color || 'yellow'];
        highlightedJSX = (
          <>
            {parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < parts.length - 1 && (
                  <mark className={`px-1 py-0.5 rounded font-medium transition-all shadow-sm ${colorConfig.markClass}`}>
                    {hl.text}
                  </mark>
                )}
              </React.Fragment>
            ))}
          </>
        );
      }
    });

    return highlightedJSX;
  };

  const handleSendQuestion = async (customQ?: string) => {
    const qToSend = (customQ || inputQuestion).trim();
    if (!qToSend || isAskingSocrates) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: qToSend,
      timestamp: 'Baru saja',
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setInputQuestion('');
    setIsAskingSocrates(true);

    try {
      const reply = await askSocratesAI(
        node.label,
        node.domain,
        qToSend,
        progress.apiKey
      );

      const socratesMsg: ChatMessage = {
        id: `s-${Date.now()}`,
        sender: 'socrates',
        text: reply,
        timestamp: 'Baru saja',
      };
      setChatMessages((prev) => [...prev, socratesMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'socrates',
        text: 'Koneksi AI mentor terhambat sesaat. Namun prinsip intinya: pahami fondasi hukum dan alokasikan modal dengan disiplin.',
        timestamp: 'Baru saja',
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsAskingSocrates(false);
    }
  };

  const formatReadingDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m > 0 ? `${m}m ` : ''}${s}d`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-4 md:p-6 transition-all">
      <div className="relative flex flex-col w-full max-w-3xl h-full sm:h-[92vh] sm:rounded-[32px] border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B0F19] shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300">

        {/* Top Reading Progress Bar (Substack Style) */}
        <div className="w-full h-1 bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 via-teal-500 to-emerald-400 transition-all duration-200"
            style={{ width: `${activeTab === 'article' ? scrollProgress : 100}%` }}
          />
        </div>

        {/* Top Editorial Header */}
        <div className="border-b border-slate-200/80 dark:border-slate-800/80 px-5 sm:px-8 pt-4 pb-3 bg-slate-50/90 dark:bg-[#0F172A]/90 backdrop-blur-md shrink-0">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                <Layers className="h-3 w-3" />
                {node.stepNumber || node.stageTitle || node.domain}
              </span>
              {mastered && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-500/20 px-2.5 py-0.5 text-[10px] sm:text-xs font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-500/40">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  Dikuasai
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Reading timer indicator */}
              <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800/60 px-2 py-0.5 rounded-md">
                <Clock className="h-3 w-3 text-slate-400" />
                <span>{formatReadingDuration(readingSeconds)}</span>
              </div>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {node.label}
              </h1>
            </div>

            {/* View Mode Toggle: Editorial Article vs Socrates AI */}
            <div className="flex items-center gap-1 rounded-xl bg-slate-200/70 dark:bg-slate-900/90 p-1 border border-slate-300/60 dark:border-slate-800 shrink-0">
              <button
                onClick={() => setActiveTab('article')}
                className={`flex items-center gap-1.5 py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'article'
                    ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Bacaan</span>
              </button>

              <button
                onClick={() => setActiveTab('socrates')}
                className={`flex items-center gap-1.5 py-1 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'socrates'
                    ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Bot className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-300" />
                <span>Socrates AI</span>
              </button>
            </div>
          </div>

          {/* Section Jump Pills (Substack x Curio Style Navigation) */}
          {activeTab === 'article' && (
            <div className="flex items-center gap-1.5 overflow-x-auto pt-3 scrollbar-none text-xs">
              <button
                onClick={() => {
                  setActiveSection('concept');
                  scrollToSection('section-concept');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold shrink-0 transition-all ${
                  activeSection === 'concept'
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/40'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Award className="h-3 w-3" />
                <span>1. Konsep Inti</span>
              </button>

              <button
                onClick={() => {
                  setActiveSection('cross');
                  scrollToSection('section-cross');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold shrink-0 transition-all ${
                  activeSection === 'cross'
                    ? 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/40'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <GraduationCap className="h-3 w-3" />
                <span>2. Wawasan Akademis</span>
              </button>

              <button
                onClick={() => {
                  setActiveSection('case');
                  scrollToSection('section-case');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold shrink-0 transition-all ${
                  activeSection === 'case'
                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Building2 className="h-3 w-3" />
                <span>3. Studi Kasus</span>
              </button>

              <button
                onClick={() => {
                  setActiveSection('action');
                  scrollToSection('section-action');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold shrink-0 transition-all ${
                  activeSection === 'action'
                    ? 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-500/40'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <CheckSquare className="h-3 w-3" />
                <span>4. Tindakan Nyata</span>
              </button>
            </div>
          )}
        </div>

        {/* Content Body: Full Editorial Substack Canvas */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseUp={handleTextSelection}
          onTouchEnd={handleTextSelection}
          className="relative flex-1 overflow-y-auto px-5 sm:px-9 py-6 select-text scroll-smooth"
        >
          {/* Multi-Color Highlighter / Stabilo Tooltip */}
          {highlighterTooltip && activeTab === 'article' && (
            <div
              style={{
                left: `${highlighterTooltip.x}px`,
                top: `${highlighterTooltip.y}px`,
              }}
              className="absolute z-40 transform -translate-x-1/2 animate-in fade-in zoom-in-95 duration-150"
            >
              <div className="flex items-center gap-1.5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-1.5 shadow-2xl border border-slate-700 dark:border-slate-300">
                <span className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 text-slate-300 dark:text-slate-700">
                  <Highlighter className="h-3 w-3" />
                  Stabilo:
                </span>
                {(['yellow', 'emerald', 'indigo', 'rose'] as HighlightColor[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => handleApplyHighlight(c)}
                    title={HIGHLIGHT_COLOR_MAP[c].name}
                    className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 active:scale-90 ${HIGHLIGHT_COLOR_MAP[c].btnBg}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Toast Notification when text is highlighted */}
          {justHighlighted && (
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 rounded-full bg-emerald-600 text-white px-4 py-1.5 text-xs font-bold shadow-xl animate-in fade-in slide-in-from-top-3">
              <Check className="h-3.5 w-3.5" />
              <span>Tersimpan di Catatan Stabilo Saya!</span>
            </div>
          )}

          {activeTab === 'article' ? (
            <article className="space-y-8 max-w-2xl mx-auto pb-10">

              {/* ------------------------------------------------------------------- */}
              {/* SECTION 1: INTI KONSEP & ANALOGI (MENTAL MODEL)                     */}
              {/* ------------------------------------------------------------------- */}
              <section id="section-concept" className="space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                      <Award className="h-4 w-4" />
                    </div>
                    <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      Bagian 1: Inti Konsep & Analogi
                    </h2>
                  </div>

                  {node.microContent.mentalModel && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                      <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                      <span>{node.microContent.mentalModel}</span>
                    </div>
                  )}
                </div>

                <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/70 dark:bg-slate-900/40 p-6 sm:p-7 shadow-sm">
                  <p className="text-base sm:text-lg leading-[1.8] text-slate-800 dark:text-slate-100 font-serif sm:font-sans">
                    {renderHighlightedText(node.microContent.analogy)}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 italic px-2">
                  <Highlighter className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                  <span>Sorot kalimat penting manapun untuk menyimpan catatan dengan 4 pilihan warna stabilo.</span>
                </div>
              </section>

              {/* ------------------------------------------------------------------- */}
              {/* SECTION 2: WAWASAN AKADEMIS & KONEKSI LINTAS ILMU                   */}
              {/* ------------------------------------------------------------------- */}
              <section id="section-cross" className="space-y-4 pt-4 border-t border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-sky-700 dark:text-sky-400">
                      Bagian 2: Wawasan Akademis & Lintas Ilmu
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 dark:bg-sky-950/70 px-3 py-1 text-xs font-bold text-sky-700 dark:text-sky-300 border border-sky-500/30">
                    <Compass className="h-3.5 w-3.5 text-sky-500" />
                    <span>{node.microContent.crossDisciplinary.connectionText}</span>
                  </div>
                </div>

                <div className="rounded-3xl border border-sky-200/80 dark:border-sky-900/50 bg-sky-50/30 dark:bg-slate-900/50 p-6 sm:p-7 shadow-sm space-y-4">
                  <p className="text-sm sm:text-base leading-[1.8] text-slate-800 dark:text-slate-100">
                    {renderHighlightedText(node.microContent.crossDisciplinary.insight)}
                  </p>

                  {node.microContent.academicInsight && (
                    <div className="pt-4 border-t border-sky-200/60 dark:border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 block mb-1">
                        Fondasi Teori & Riset:
                      </span>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {renderHighlightedText(node.microContent.academicInsight)}
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {/* ------------------------------------------------------------------- */}
              {/* SECTION 3: REAL-WORLD EXECUTIVE CASE STUDY                          */}
              {/* ------------------------------------------------------------------- */}
              <section id="section-case" className="space-y-4 pt-4 border-t border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                    Bagian 3: Studi Kasus Eksekutif Dunia Nyata
                  </h2>
                </div>

                <div className="rounded-3xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-slate-900/50 p-6 sm:p-7 shadow-sm space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                      {node.microContent.caseStudy?.companyOrFigure || 'Studi Kasus Eksekutif'}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm leading-[1.8] text-slate-700 dark:text-slate-200">
                    {renderHighlightedText(node.microContent.caseStudy?.story || '')}
                  </p>

                  {node.microContent.caseStudy?.takeaway && (
                    <div className="rounded-2xl bg-white/90 dark:bg-[#070A11] p-4 border border-emerald-500/30">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                        Pelajaran Kunci Eksekutif:
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-relaxed">
                        {renderHighlightedText(node.microContent.caseStudy.takeaway)}
                      </p>
                    </div>
                  )}
                </div>
              </section>

              {/* ------------------------------------------------------------------- */}
              {/* SECTION 4: TINDAKAN NYATA HARI INI (+10 RP PER CHECK)               */}
              {/* ------------------------------------------------------------------- */}
              <section id="section-action" className="space-y-4 pt-4 border-t border-slate-200/70 dark:border-slate-800/70">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                      <CheckSquare className="h-4 w-4" />
                    </div>
                    <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                      Bagian 4: Tindakan Nyata Hari Ini
                    </h2>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/30">
                    +10 RP per Centang
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Terapkan 3 aksi konkret ini ke dalam rencana bisnis, portofolio, atau operasional nyata Anda:
                </p>

                <div className="space-y-3">
                  {node.microContent.actionableSteps.map((step, idx) => {
                    const checked = isActionChecked(node.id, idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleActionCheck(node.id, idx)}
                        className={`flex items-start gap-3.5 rounded-2xl p-4 border cursor-pointer transition-all duration-200 ${
                          checked
                            ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-500/50 shadow-sm'
                            : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                        }`}
                      >
                        <div className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400">
                          {checked ? (
                            <CheckSquare className="h-5 w-5" />
                          ) : (
                            <Square className="h-5 w-5 text-slate-400" />
                          )}
                        </div>
                        <span
                          className={`text-xs sm:text-sm leading-relaxed ${
                            checked
                              ? 'line-through text-slate-400 dark:text-slate-500 font-medium'
                              : 'text-slate-800 dark:text-slate-100 font-medium'
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>

            </article>
          ) : (
            /* Socrates AI Interactive Mentoring View */
            <div className="flex flex-col h-[460px] sm:h-[500px] space-y-3 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-700 dark:text-indigo-300">
                <Bot className="h-4 w-4 shrink-0 text-indigo-500" />
                <span>
                  Socrates AI siap menjawab pertanyaan kritis seputar konsep <strong>{node.label}</strong> secara personal.
                </span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600 text-white rounded-br-none shadow-md'
                          : 'bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-800 shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isAskingSocrates && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 pl-2">
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-indigo-500" />
                    <span>Socrates sedang merenungkan jawaban Anda...</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-200 dark:border-slate-800">
                <input
                  type="text"
                  value={inputQuestion}
                  onChange={(e) => setInputQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
                  placeholder="Tanyakan konsep yang belum Anda pahami ke Socrates..."
                  className="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={() => handleSendQuestion()}
                  disabled={isAskingSocrates || !inputQuestion.trim()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white disabled:opacity-40 hover:bg-indigo-500 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Persistent Action Bar */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 px-5 sm:px-8 py-3.5 bg-slate-50/90 dark:bg-[#0F172A]/90 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-medium">
              Selesai membaca? Uji pemahaman Anda melalui simulasi keputusan eksekutif.
            </span>
          </div>

          <button
            onClick={() => onStartQuiz(node)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 hover:opacity-95 active:scale-95 transition-all shrink-0"
          >
            <span>Cek Paham Sekarang</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
