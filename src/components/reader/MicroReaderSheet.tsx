import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { askSocratesAI, ChatMessage } from '../../lib/socrates';
import { 
  X, 
  Lightbulb, 
  Share2, 
  CheckSquare, 
  Square, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Building2,
  Bot,
  Send,
  Loader2,
  BookOpen,
  HelpCircle,
  Clock,
  BarChart3
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
  const { isNodeMastered, toggleActionCheck, isActionChecked, progress } = useUser();
  const [activeTab, setActiveTab] = useState<'content' | 'socrates'>('content');

  // Socrates AI Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      sender: 'socrates',
      text: `Salam. Saya Socrates, AI Mentor Anda. Saya siap membedah konsep "${node?.label || 'materi ini'}" dengan analogi membumi untuk bisnis Anda. Ada bagian yang ingin kita bedah bersama?`,
      timestamp: 'Baru saja'
    }
  ]);
  const [inputQuestion, setInputQuestion] = useState('');
  const [isAskingSocrates, setIsAskingSocrates] = useState(false);

  if (!node) return null;

  const mastered = isNodeMastered(node.id);
  const difficulty = node.microContent.difficulty || 'Menengah';
  const readTime = node.microContent.readTime || '2 min baca';

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
        text: 'Maaf, terjadi gangguan jaringan saat menghubungi Socrates. Namun ingat prinsip dasarnya: sederhanakan penawaran dan uji coba dalam skala kecil.',
        timestamp: 'Baru saja',
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsAskingSocrates(false);
    }
  };

  const presetQuestions = [
    'Contoh simpelnya di bisnis toko kopi / UMKM lokal?',
    'Bagaimana cara menerapkannya dengan modal kecil?',
    'Apa kesalahan paling fatal saat mengeksekusi ini?'
  ];

  return (
    <AnimatePresence>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/60 dark:bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Sheet Container: Bottom Sheet on Mobile, Slide-in Drawer on Desktop */}
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92vh] flex-col rounded-t-3xl border-t border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B0F19] shadow-2xl transition-colors duration-300 md:inset-y-0 md:left-auto md:right-0 md:h-full md:max-h-full md:w-[540px] md:rounded-l-3xl md:rounded-t-none md:border-l md:border-t-0"
      >
        {/* Mobile drag handle indicator */}
        <div className="flex w-full justify-center pt-3 pb-1 md:hidden">
          <div className="h-1.5 w-12 rounded-full bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Sheet Top Bar with Classy Badges */}
        <div className="border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-4 bg-slate-50/80 dark:bg-[#0F172A]/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="rounded-lg bg-indigo-50 dark:bg-indigo-500/20 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:text-indigo-400 border border-indigo-500/30">
                {node.domain}
              </span>
              <span className="flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                <BarChart3 className="h-3 w-3 text-slate-400" />
                {difficulty}
              </span>
              <span className="flex items-center gap-1 rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                <Clock className="h-3 w-3 text-slate-400" />
                {readTime}
              </span>
              {mastered && (
                <span className="flex items-center gap-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 border border-emerald-500/40">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  Dikuasai
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tab Selector: Materi vs Tanya Socrates AI */}
          <div className="flex items-center gap-2 mt-3 p-1 rounded-xl bg-slate-200/60 dark:bg-slate-900/80 border border-slate-300/50 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('content')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'content'
                  ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Materi & Kasus Nyata</span>
            </button>

            <button
              onClick={() => setActiveTab('socrates')}
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'socrates'
                  ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Bot className="h-3.5 w-3.5 text-indigo-500 dark:text-indigo-300" />
              <span>Tanya Socrates AI</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
          
          {activeTab === 'content' ? (
            <>
              {/* Title & Headline Summary */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  {node.label}
                </h2>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {node.summary}
                </p>
              </div>

              {/* Lapis 1: 💡 Core Analogy & Fact (<120 kata) */}
              <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/40 dark:bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <Lightbulb className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-indigo-800 dark:text-indigo-300">
                    1. Core Analogy & Fakta
                  </h3>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {node.microContent.analogy}
                </p>
              </div>

              {/* Lapis 2: 🌐 Cross-Discipline Link */}
              <div className="rounded-2xl border border-purple-500/30 bg-purple-50/40 dark:bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-400">
                    <Share2 className="h-4 w-4" />
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-purple-800 dark:text-purple-300">
                    2. Koneksi Lintas Disiplin
                  </h3>
                </div>
                
                <div className="mb-2 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Korelasi:</span>
                  <span className="rounded-md bg-purple-100 dark:bg-purple-950/80 px-2 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300 border border-purple-500/30">
                    {node.microContent.crossDisciplinary.connectionText}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {node.microContent.crossDisciplinary.insight}
                </p>
              </div>

              {/* Lapis 3: 📊 Real-World Case Study */}
              {node.microContent.caseStudy && (
                <div className="rounded-2xl border border-amber-500/30 bg-amber-50/40 dark:bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-amber-800 dark:text-amber-300">
                      3. Real-World Case Study: {node.microContent.caseStudy.companyOrFigure}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200 mb-2">
                    {node.microContent.caseStudy.story}
                  </p>

                  <div className="rounded-xl bg-amber-100/60 dark:bg-amber-950/40 border border-amber-500/20 p-2.5 text-xs text-amber-900 dark:text-amber-300 font-medium">
                    <span className="font-bold">Kunci Taktis:</span> {node.microContent.caseStudy.takeaway}
                  </div>
                </div>
              )}

              {/* Lapis 4: 🛠️ Tindakan Nyata Hari Ini (Interactive Checklists) */}
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/40 dark:bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <CheckSquare className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                      4. Tindakan Nyata Hari Ini
                    </h3>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                    +10 RP per centang
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  Pilih dan eksekusi salah satu tindakan di bawah dalam 48 jam ke depan:
                </p>

                <div className="space-y-2.5">
                  {node.microContent.actionableSteps.map((step, idx) => {
                    const checked = isActionChecked(node.id, idx);
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleActionCheck(node.id, idx)}
                        className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-all ${
                          checked
                            ? 'border-emerald-500/60 bg-emerald-50 dark:bg-emerald-500/10 text-slate-900 dark:text-white'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600'
                        }`}
                      >
                        <button
                          type="button"
                          className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400 focus:outline-none"
                        >
                          {checked ? (
                            <CheckSquare className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Square className="h-4 w-4 text-slate-400 dark:text-slate-600" />
                          )}
                        </button>
                        <span className={`text-xs sm:text-sm leading-relaxed ${checked ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            /* Tab Socrates AI: Embedded Interactive Mentor */
            <div className="flex flex-col h-full space-y-4">
              <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/50 dark:bg-slate-900/60 p-3.5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-emerald-500 text-white shadow-md">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Socrates AI Mentor
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Membimbing materi <span className="font-semibold text-indigo-600 dark:text-indigo-400">"{node.label}"</span> dengan gaya mentor bisnis dunia.
                  </p>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="flex-1 space-y-3 min-h-[220px]">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed shadow-sm ${
                        msg.sender === 'user'
                          ? 'bg-indigo-600 text-white rounded-br-none'
                          : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200/80 dark:border-slate-700/80'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 px-1">
                      {msg.sender === 'socrates' ? 'Socrates AI' : 'Anda'}
                    </span>
                  </div>
                ))}

                {isAskingSocrates && (
                  <div className="flex items-center gap-2 text-xs text-indigo-500 dark:text-indigo-400 p-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Socrates sedang merenungkan jawaban terbaik...</span>
                  </div>
                )}
              </div>

              {/* Quick Prompts */}
              <div className="space-y-1.5 pt-2">
                <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <HelpCircle className="h-3 w-3" />
                  Pertanyaan Populer:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {presetQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendQuestion(q)}
                      disabled={isAskingSocrates}
                      className="text-left rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 px-2.5 py-1 text-[11px] text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="text"
                  value={inputQuestion}
                  onChange={(e) => setInputQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSendQuestion();
                  }}
                  placeholder={`Tanya Socrates tentang ${node.label}...`}
                  className="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 py-2.5 px-3.5 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  onClick={() => handleSendQuestion()}
                  disabled={!inputQuestion.trim() || isAskingSocrates}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white disabled:opacity-50 hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Action Button CTA (Lapis 4: Tactical Decision Simulator) */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#0B0F19]/95 p-4 backdrop-blur-md">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onStartQuiz(node)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-500 py-3.5 px-6 font-bold text-white shadow-lg shadow-indigo-500/25 transition-all hover:opacity-95"
          >
            <Sparkles className="h-4 w-4" />
            <span>Mulai Simulasi Keputusan & Kuis (+80 RP)</span>
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

      </motion.div>
    </AnimatePresence>
  );
};
