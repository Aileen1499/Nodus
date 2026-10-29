import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { askSocratesAI, ChatMessage } from '../../lib/socrates';
import {
  X,
  CheckSquare,
  Square,
  ArrowLeft,
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
  ChevronRight,
  Check
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
  const { isNodeMastered, toggleActionCheck, isActionChecked, progress, addHighlight, highlights } = useUser();
  const [activeTab, setActiveTab] = useState<'slides' | 'socrates'>('slides');
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<number>(1);

  // Floating Highlighter Tooltip State
  const [highlighterTooltip, setHighlighterTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [justHighlighted, setJustHighlighted] = useState(false);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Socrates AI Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'socrates',
      text: `Salam. Saya Socrates, AI Mentor Anda. Saya siap membedah konsep "${node?.label || 'materi ini'}" dengan analogi membumi untuk bisnis Anda. Ada bagian yang ingin kita diskusikan bersama?`,
      timestamp: 'Baru saja',
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isAskingSocrates, setIsAskingSocrates] = useState(false);

  // Reset slide index when opening a new node
  useEffect(() => {
    setCurrentSlide(0);
    setHighlighterTooltip(null);
  }, [node?.id]);

  // Handle Text Selection for Stabilo / Highlighter
  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setHighlighterTooltip(null);
      return;
    }

    const text = selection.toString().trim();
    if (text.length < 5) {
      setHighlighterTooltip(null);
      return;
    }

    try {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const containerRect = contentContainerRef.current?.getBoundingClientRect();

      if (containerRect) {
        setHighlighterTooltip({
          text,
          x: Math.max(10, Math.min(rect.left + rect.width / 2 - containerRect.left, containerRect.width - 150)),
          y: Math.max(0, rect.top - containerRect.top - 44),
        });
      }
    } catch {
      setHighlighterTooltip(null);
    }
  }, []);

  const handleApplyHighlight = () => {
    if (!highlighterTooltip || !node) return;
    addHighlight(node.id, node.label, node.domain, highlighterTooltip.text);
    setJustHighlighted(true);
    setHighlighterTooltip(null);
    window.getSelection()?.removeAllRanges();
    setTimeout(() => setJustHighlighted(false), 2000);
  };

  if (!node) return null;

  const mastered = isNodeMastered(node.id);
  const totalSlides = 4;

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setSlideDirection(1);
      setCurrentSlide((prev) => prev + 1);
      setHighlighterTooltip(null);
    } else {
      onStartQuiz(node);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setSlideDirection(-1);
      setCurrentSlide((prev) => prev - 1);
      setHighlighterTooltip(null);
    }
  };

  // Helper to render text with user's saved highlights
  const renderHighlightedText = (text: string) => {
    if (!text) return null;
    const nodeHighlights = highlights.filter((h) => h.nodeId === node.id);
    if (nodeHighlights.length === 0) return text;

    let highlightedJSX: React.ReactNode = text;
    nodeHighlights.forEach((hl) => {
      if (typeof highlightedJSX === 'string' && highlightedJSX.includes(hl.text)) {
        const parts = highlightedJSX.split(hl.text);
        highlightedJSX = (
          <>
            {parts.map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index < parts.length - 1 && (
                  <mark className="bg-amber-200/90 dark:bg-amber-400/30 text-amber-950 dark:text-amber-200 px-1 py-0.5 rounded font-medium transition-all shadow-sm">
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
        text: 'Koneksi terhambat sesaat. Namun prinsip intinya: jangan takut memulai dari skala terkecil.',
        timestamp: 'Baru saja',
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsAskingSocrates(false);
    }
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.28, ease: 'easeOut' as const },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' as const },
    }),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-2 sm:p-4 backdrop-blur-md">
      <div className="relative flex flex-col w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B0F19] shadow-2xl overflow-hidden transition-all duration-300">

        {/* Top Header & Slide Progress Bar */}
        <div className="border-b border-slate-200/80 dark:border-slate-800/80 px-5 pt-4 pb-3 bg-slate-50/90 dark:bg-[#0F172A]/90 backdrop-blur-md">
          
          {/* Slide Progress Dots / Indicators */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSlideDirection(idx > currentSlide ? 1 : -1);
                    setCurrentSlide(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? 'w-8 bg-indigo-600 dark:bg-indigo-400'
                      : currentSlide > idx
                      ? 'w-3.5 bg-emerald-500'
                      : 'w-3 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Ke slide ${idx + 1}`}
                />
              ))}
              <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 ml-1.5">
                {currentSlide + 1} / {totalSlides}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {mastered && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-500/40">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  Dikuasai
                </span>
              )}

              <button
                onClick={onClose}
                className="flex h-7 w-7 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Module Step & Subtitle */}
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1 mr-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {node.stepNumber || node.stageTitle || node.domain}
              </span>
              <h2 className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white truncate">
                {node.label}
              </h2>
            </div>

            {/* View Mode Toggle: Slide vs Socrates AI */}
            <div className="flex items-center gap-1 rounded-xl bg-slate-200/70 dark:bg-slate-900/90 p-1 border border-slate-300/60 dark:border-slate-800 shrink-0">
              <button
                onClick={() => setActiveTab('slides')}
                className={`flex items-center gap-1 py-1 px-2.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'slides'
                    ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <BookOpen className="h-3.5 w-3.5" />
                <span>Slide</span>
              </button>

              <button
                onClick={() => setActiveTab('socrates')}
                className={`flex items-center gap-1 py-1 px-2.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'socrates'
                    ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Bot className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-300" />
                <span>Socrates</span>
              </button>
            </div>
          </div>
        </div>

        {/* Slide Content Body (with Spacious TikTok-like Reading Flow) */}
        <div
          ref={contentContainerRef}
          onMouseUp={handleTextSelection}
          onTouchEnd={handleTextSelection}
          className="relative flex-1 overflow-y-auto px-5 sm:px-7 py-5 select-text"
        >
          {/* Floating Highlighter / Stabilo Tooltip */}
          {highlighterTooltip && activeTab === 'slides' && (
            <div
              style={{
                left: `${highlighterTooltip.x}px`,
                top: `${highlighterTooltip.y}px`,
              }}
              className="absolute z-40 transform -translate-x-1/2 animate-in fade-in zoom-in-95 duration-150"
            >
              <button
                onClick={handleApplyHighlight}
                className="flex items-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 py-1.5 text-xs font-bold shadow-xl border border-slate-700 dark:border-slate-300 hover:scale-105 active:scale-95 transition-transform"
              >
                <Highlighter className="h-3.5 w-3.5 text-amber-400 dark:text-amber-600" />
                <span>Stabilo Kalimat Ini</span>
              </button>
            </div>
          )}

          {/* Toast Notification when text is highlighted */}
          {justHighlighted && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 rounded-full bg-emerald-600 text-white px-3 py-1 text-xs font-bold shadow-lg animate-in fade-in slide-in-from-top-2">
              <Check className="h-3.5 w-3.5" />
              <span>Tersimpan di Catatan Pentingku!</span>
            </div>
          )}

          {activeTab === 'slides' ? (
            <div className="min-h-[280px] flex flex-col justify-center">
              <AnimatePresence mode="wait" custom={slideDirection}>
                
                {/* ------------------------------------------------------------- */}
                {/* SLIDE 1: 💡 INTI IDEMYA (Analogi Sederhana & Mental Model)     */}
                {/* ------------------------------------------------------------- */}
                {currentSlide === 0 && (
                  <motion.div
                    key="slide-1"
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                        <Award className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        Slide 1: Inti Idemya
                      </span>
                    </div>

                    {node.microContent.mentalModel && (
                      <div className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 px-3 py-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-500/30">
                        <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                        <span>Model Mental: {node.microContent.mentalModel}</span>
                      </div>
                    )}

                    <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-slate-50/60 dark:bg-slate-900/40 p-5 sm:p-6 shadow-sm">
                      <p className="text-sm sm:text-base leading-relaxed font-normal text-slate-800 dark:text-slate-100">
                        {renderHighlightedText(node.microContent.analogy)}
                      </p>
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                      💡 Tip: Sorot teks manapun dengan mouse/jari untuk men-stabilo catatan penting ini.
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* SLIDE 2: 🧠 KONEKSI LINTAS ILMU (Cross-Discipline Synthesis)  */}
                {/* ------------------------------------------------------------- */}
                {currentSlide === 1 && (
                  <motion.div
                    key="slide-2"
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-sky-700 dark:text-sky-400">
                        Slide 2: Koneksi Lintas Ilmu
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-xl bg-sky-50 dark:bg-sky-950/70 px-3 py-1.5 text-xs font-bold text-sky-700 dark:text-sky-300 border border-sky-500/30">
                      <span>Sinergi:</span>
                      <span>{node.microContent.crossDisciplinary.connectionText}</span>
                    </div>

                    <div className="rounded-3xl border border-sky-200/80 dark:border-sky-900/50 bg-sky-50/40 dark:bg-slate-900/50 p-5 sm:p-6 shadow-sm space-y-3">
                      <p className="text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100">
                        {renderHighlightedText(node.microContent.crossDisciplinary.insight)}
                      </p>

                      {node.microContent.academicInsight && (
                        <div className="pt-3 border-t border-sky-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {renderHighlightedText(node.microContent.academicInsight)}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* SLIDE 3: 💼 REAL-WORLD CASE STUDY (Eksekusi Nyata dari Nol)    */}
                {/* ------------------------------------------------------------- */}
                {currentSlide === 2 && (
                  <motion.div
                    key="slide-3"
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                        <Building2 className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        Slide 3: Real-World Case Study
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      {node.microContent.caseStudy?.companyOrFigure || 'Studi Kasus Eksekutif'}
                    </h3>

                    <div className="rounded-3xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-slate-900/50 p-5 sm:p-6 shadow-sm space-y-3">
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                        {renderHighlightedText(node.microContent.caseStudy?.story || '')}
                      </p>

                      {node.microContent.caseStudy?.takeaway && (
                        <div className="rounded-2xl bg-white/80 dark:bg-[#070A11] p-3.5 border border-emerald-500/30">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                            Pelajaran Kunci:
                          </span>
                          <p className="text-xs font-semibold text-slate-900 dark:text-slate-100">
                            {renderHighlightedText(node.microContent.caseStudy.takeaway)}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* SLIDE 4: 🎯 TINDAKAN NYATA HARI INI (Gamified Action Cards)   */}
                {/* ------------------------------------------------------------- */}
                {currentSlide === 3 && (
                  <motion.div
                    key="slide-4"
                    custom={slideDirection}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                          <CheckSquare className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                          Slide 4: Tindakan Nyata Hari Ini
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        +10 RP per Centang
                      </span>
                    </div>

                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Terapkan 3 aksi taktis ini ke dalam bisnis atau proyek nyata Anda:
                    </p>

                    <div className="space-y-2.5">
                      {node.microContent.actionableSteps.map((step, idx) => {
                        const checked = isActionChecked(node.id, idx);
                        return (
                          <div
                            key={idx}
                            onClick={() => toggleActionCheck(node.id, idx)}
                            className={`flex items-start gap-3 rounded-2xl p-3.5 border cursor-pointer transition-all ${
                              checked
                                ? 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-500/50 shadow-sm'
                                : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                            }`}
                          >
                            <div className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400">
                              {checked ? (
                                <CheckSquare className="h-4 w-4" />
                              ) : (
                                <Square className="h-4 w-4 text-slate-400" />
                              )}
                            </div>
                            <span
                              className={`text-xs sm:text-sm leading-relaxed ${
                                checked
                                  ? 'line-through text-slate-400 dark:text-slate-500 font-medium'
                                  : 'text-slate-800 dark:text-slate-200 font-medium'
                              }`}
                            >
                              {step}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          ) : (
            /* Socrates AI Interactive Mentoring View */
            <div className="flex flex-col h-[340px] space-y-3">
              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed ${
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

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <input
                  type="text"
                  value={inputQuestion}
                  onChange={(e) => setInputQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendQuestion()}
                  placeholder="Tanyakan konsep yang belum Anda pahami..."
                  className="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                />
                <button
                  onClick={() => handleSendQuestion()}
                  disabled={isAskingSocrates || !inputQuestion.trim()}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white disabled:opacity-40"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Slide Navigation Controls */}
        {activeTab === 'slides' && (
          <div className="border-t border-slate-200/80 dark:border-slate-800/80 px-5 py-3.5 bg-slate-50/80 dark:bg-[#0F172A]/80 backdrop-blur-md flex items-center justify-between gap-3">
            <button
              onClick={goToPrevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Sebelumnya</span>
            </button>

            {currentSlide < totalSlides - 1 ? (
              <button
                onClick={goToNextSlide}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-500/20 hover:bg-indigo-500 active:scale-95 transition-all"
              >
                <span>Lanjut Slide {currentSlide + 2}</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                onClick={() => onStartQuiz(node)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white text-xs font-bold shadow-lg shadow-emerald-500/25 hover:opacity-95 active:scale-95 transition-all"
              >
                <span>Mulai Simulasi Keputusan</span>
                <Sparkles className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
