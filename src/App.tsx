import React, { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { localDay } from './lib/date';
import { UserProvider, useUser } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/common/Header';
import { BottomNav, NavTab } from './components/common/BottomNav';
import { MindmapCanvas } from './components/mindmap/MindmapCanvas';
import { MicroReaderSheet } from './components/reader/MicroReaderSheet';
import { getNeighbours } from './lib/pathLogic';
import { ToolkitView, TOOLS } from './components/tools/ToolkitView';
import type { ToolId } from './lib/curriculumBuilder';
import { allNodes, findNode, getMapById, resolveRetired } from './lib/nodeIndex';
import { isDueForReview } from './lib/review';
import { WelcomeScreen } from './components/brand/WelcomeScreen';
import { ProLockSheet } from './components/paywall/ProLockSheet';
import { LegalView, LegalKind } from './components/legal/LegalView';
import { readReminder, msUntil, showReminder } from './lib/reminder';
import { isLessonPlanLocked, isToolPlanLocked, PaywallReason } from './lib/plans';
import { MindmapData, MindmapNode } from './types';
import { PRESET_QUERIES } from './data/mockMindmaps';
import { generateMindmapWithGemini } from './lib/gemini';
import { getMindmapForTopic } from './lib/topicEngine';
import { StreakCard } from './components/growth/StreakCard';
import { Greeting } from './components/growth/Greeting';
import { ReviewDueCard } from './components/growth/ReviewDueCard';
import { getRecommendedNode } from './lib/pathLogic';
import { getCurriculumForQuery, ZERO_TO_HERO_OWNER_CURRICULUM } from './lib/curriculumData';

const SettingsModal = lazy(() => import('./components/common/SettingsModal').then((m) => ({ default: m.SettingsModal })));
const HelpModal = lazy(() => import('./components/common/HelpModal').then((m) => ({ default: m.HelpModal })));
const ExploreModal = lazy(() => import('./components/explore/ExploreModal').then((m) => ({ default: m.ExploreModal })));
const ProfileModal = lazy(() => import('./components/profile/ProfileModal').then((m) => ({ default: m.ProfileModal })));
const AuthModal = lazy(() => import('./components/auth/AuthModal').then((m) => ({ default: m.AuthModal })));
const PlansView = lazy(() => import('./components/paywall/PlansView').then((m) => ({ default: m.PlansView })));
const ArenaView = lazy(() => import('./components/quiz/ArenaView').then((m) => ({ default: m.ArenaView })));
const QuizEngine = lazy(() => import('./components/quiz/QuizEngine').then((m) => ({ default: m.QuizEngine })));

const AppContent: React.FC = () => {
  const { progress, isPro, useCredit, isNodeMastered } = useUser();

  // Active Mindmap State (Default: Zero-to-Hero: Dari Nol Menjadi Business Owner)
  const [currentMindmap, setCurrentMindmap] = useState<MindmapData>(() => {
    return ZERO_TO_HERO_OWNER_CURRICULUM;
  });

  const dueReviews = useMemo(
    () => allNodes().filter((p) => progress.masteredNodeIds.includes(p.node.id) && isDueForReview(p.node.id, progress.lastReviewed)).length,
    [progress.masteredNodeIds, progress.lastReviewed]
  );

  // Navigation tab state (Mobile Bottom Nav)
  const [activeTab, setActiveTab] = useState<NavTab>('map');

  // Modal / Sheet States
  const [activeReaderNode, setActiveReaderNode] = useState<MindmapNode | null>(null);
  const [activeQuizNode, setActiveQuizNode] = useState<MindmapNode | null>(null);
  const [isQuizHubOpen, setIsQuizHubOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [toolkit, setToolkit] = useState<{ open: boolean; tool: ToolId | null }>({ open: false, tool: null });
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [paywall, setPaywall] = useState<{ open: boolean; reason: PaywallReason }>({ open: false, reason: 'manual' });
  const [legal, setLegal] = useState<LegalKind | null>(null);
  const [lock, setLock] = useState<PaywallReason | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const showNotice = (m: string) => { setNotice(m); window.setTimeout(() => setNotice((cur) => (cur === m ? null : cur)), 6000); };
  const openPaywall = (reason: PaywallReason = 'manual') => setPaywall({ open: true, reason });
  /** Fitur terkunci: tampilkan pop-up penjelasan dulu, bukan langsung halaman paket. */
  const openLock = (reason: PaywallReason) => setLock(reason);
  const lockedTools = useMemo(() => TOOLS.filter((t) => isToolPlanLocked(t.id, isPro)).map((t) => t.id), [isPro]);
  const [isLoadingMindmap, setIsLoadingMindmap] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(() => {
    try { return localStorage.getItem('nodus_welcome_seen_v1') !== '1'; } catch { return false; }
  });
  const closeWelcome = () => {
    setIsWelcomeOpen(false);
    try { localStorage.setItem('nodus_welcome_seen_v1', '1'); } catch { /* storage unavailable */ }
  };

  // Pengingat harian: aktif selama NODUS terbuka dan belum belajar hari ini.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const arm = () => {
      if (timer) clearTimeout(timer);
      const r = readReminder();
      if (!r.enabled) return;
      timer = setTimeout(() => {
        const today = localDay();
        if (progress.lastStudyDate !== today) showReminder(progress.streak);
        arm();
      }, msUntil(r.time));
    };
    arm();
    window.addEventListener('nodus-reminder', arm);
    return () => { if (timer) clearTimeout(timer); window.removeEventListener('nodus-reminder', arm); };
  }, [progress.lastStudyDate, progress.streak]);

  // Tawarkan Pro saat masuk aplikasi: sekali per hari, setelah sambutan, tidak menimpa layar lain.
  useEffect(() => {
    if (isPro || isWelcomeOpen) return;
    const today = new Date().toDateString();
    let last: string | null = null;
    try { last = localStorage.getItem('nodus_offer_day_v1'); } catch { /* storage unavailable */ }
    if (last === today) return;
    const id = setTimeout(() => {
      try { localStorage.setItem('nodus_offer_day_v1', today); } catch { /* storage unavailable */ }
      setPaywall((p) => (p.open ? p : { open: true, reason: 'welcome' }));
    }, 2200);
    return () => clearTimeout(id);
  }, [isPro, isWelcomeOpen]);

  // Satu pintu untuk membuka pelajaran: pelajaran Pro membuka halaman paket.
  const guardNode = (node: MindmapNode, go: () => void) => {
    const map = findNode(node.id)?.map ?? currentMindmap;
    if (isLessonPlanLocked(map, node, isPro)) openLock('lesson');
    else go();
  };
  const openReader = (node: MindmapNode) => guardNode(node, () => setActiveReaderNode(node));
  const openQuiz = (node: MindmapNode) => guardNode(node, () => setActiveQuizNode(node));

  // Search Handler with Instant Predefined Routing & Fallback to Gemini AI
  const handleSearch = async (query: string) => {
    // Reset active modal / sheet nodes immediately so state doesn't persist
    setActiveReaderNode(null);
    setActiveQuizNode(null);
    setIsQuizHubOpen(false);

    // 1. Check for structured masterclass curricula or pre-mapped domains
    const predefinedCurriculum = getCurriculumForQuery(query) || (() => { const t = getMindmapForTopic(query); return t ? resolveRetired(t) : null; })();
    if (predefinedCurriculum) {
      setCurrentMindmap(predefinedCurriculum);
      return;
    }

    // 2. Custom AI Generation for novel queries
    if (!isPro && progress.credits <= 0) {
      openLock('ai');
      return;
    }

    if (!isPro && progress.credits <= 0) { openLock('ai'); return; }
    setIsLoadingMindmap(true);

    try {
      const model = progress.aiModel && !progress.aiModel.startsWith('gemini-1.5') ? progress.aiModel : 'gemini-2.5-flash';
      const generated = await generateMindmapWithGemini(query, progress.apiKey, model);
      // Kuota hanya terpakai bila hasilnya benar-benar didapat.
      if (!isPro) useCredit();
      setCurrentMindmap(generated);
      setActiveReaderNode(null);
      setActiveQuizNode(null);
      setIsQuizHubOpen(false);
    } catch (err) {
      if (err instanceof Error && err.message === 'NO_MATCH') {
        showNotice('Topik itu belum ada di NODUS, dan pembedah topik AI belum aktif. Coba kata kunci lain, atau pilih jalur lewat tombol "Ganti".');
      } else {
        showNotice('Gagal memuat topik. Periksa koneksi internetmu, lalu coba lagi.');
      }
    } finally {
      setIsLoadingMindmap(false);
    }
  };

  // Tab change handler from Mobile Bottom Nav
  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    setIsExploreOpen(tab === 'explore');
    setIsQuizHubOpen(tab === 'quiz');
    setIsProfileOpen(tab === 'profile');
    setToolkit({ open: tab === 'tools', tool: null });
    if (tab !== 'map') setActiveReaderNode(null);
  };

  const openMap = (map: MindmapData) => {
    setCurrentMindmap(map);
    setActiveReaderNode(null);
    setActiveQuizNode(null);
    setIsExploreOpen(false);
    setActiveTab('map');
  };

  // Complete Quiz Handler
  const handleQuizComplete = () => {
    // Subtle in-place state update without floating banner
  };

  return (
    <div className="flex h-[100dvh] w-full flex-col overflow-hidden bg-[#FBF9F5] dark:bg-[#121214] font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Header with Logo, Theme Toggle, Auth, and Live Stats */}
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPaywall={() => openPaywall('manual')}
        onOpenWelcome={() => setIsWelcomeOpen(true)}
      />

      {/* Main Interactive Canvas */}
      <main className="relative flex-1 overflow-y-auto">
        {activeTab === 'map' && (
          <div className="mx-auto w-full max-w-6xl px-4 pt-3 sm:px-8">
            <Greeting />
            <StreakCard onContinue={() => { const n = getRecommendedNode(currentMindmap, isNodeMastered); if (n) openReader(n); }} />
            <ReviewDueCard count={dueReviews} onReview={() => setActiveTab('quiz')} />
          </div>
        )}
        <MindmapCanvas
          data={currentMindmap}
          activeNode={activeReaderNode}
          onSelectNode={openReader}
          onStartQuiz={openQuiz}
          onSearch={handleSearch}
          onSelectMap={(mapId) => { const m = getMapById(mapId); if (m) openMap(m); }}
          isLoading={isLoadingMindmap}
          presetQueries={PRESET_QUERIES}
        />
      </main>

      {notice && (
        <div role="status" aria-live="polite" className="fixed inset-x-4 bottom-28 z-[95] mx-auto max-w-md rounded-2xl bg-[#151517] px-4 py-3 text-[13.5px] leading-snug text-[#FBF9F5] shadow-float animate-fade-in">
          {notice}
          <button onClick={() => setNotice(null)} className="ml-2 font-bold text-[#E9C06B]">Tutup</button>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar (<768px) */}
      <BottomNav
        activeTab={activeTab}
        onChangeTab={handleTabChange}
        badges={{ quiz: dueReviews }}
      />

      {/* Micro-Reader Bottom Sheet / Drawer */}
      {activeReaderNode && (
        <MicroReaderSheet
          node={activeReaderNode}
          data={currentMindmap}
          onNavigate={openReader}
          onOpenTool={(tool) => { setActiveReaderNode(null); if (isToolPlanLocked(tool as ToolId, isPro)) { openLock('tool'); return; } setToolkit({ open: true, tool: tool as ToolId }); setActiveTab('tools'); }}
          onClose={() => setActiveReaderNode(null)}
          onStartQuiz={(node) => {
            setActiveReaderNode(null);
            setActiveQuizNode(node);
          }}
        />
      )}

      {/* Arena (full screen) */}
      {isQuizHubOpen && (
        <Suspense fallback={null}><ArenaView
          data={currentMindmap}
          onClose={() => {
            setIsQuizHubOpen(false);
            setActiveTab('map');
          }}
          onSelectNode={openQuiz}
          onUpgrade={() => openPaywall('manual')}
          onLocked={() => openLock('case')}
          onLockedStory={() => openLock('story')}
          onOpenLesson={(id) => {
            const hit = findNode(id);
            if (!hit) return;
            setCurrentMindmap(hit.map);
            setActiveQuizNode(null);
            setIsQuizHubOpen(false);
            setActiveTab('map');
            openReader(hit.node);
          }}
        /></Suspense>
      )}

      {/* Evaluasi (full screen, di atas Arena atau Peta) */}
      {activeQuizNode && (() => {
        const quizNode = activeQuizNode;
        const nextNode = getNeighbours(quizNode, currentMindmap).next;
        const openReader = (node: MindmapNode) => {
          setActiveQuizNode(null);
          setIsQuizHubOpen(false);
          setActiveTab('map');
          setActiveReaderNode(node);
        };
        return (
          <Suspense fallback={null}><QuizEngine
            key={quizNode.id}
            node={quizNode}
            onClose={() => setActiveQuizNode(null)}
            onComplete={handleQuizComplete}
            onNext={nextNode ? () => openReader(nextNode) : undefined}
            nextLabel={nextNode ? `Lanjut: ${nextNode.label}` : undefined}
            onReadLesson={() => openReader(quizNode)}
            onUpgrade={() => setPaywall({ open: true, reason: 'manual' })}
          /></Suspense>
        );
      })()}

      {/* Kurikulum (full screen) */}
      {isExploreOpen && (
        <Suspense fallback={null}><ExploreModal
          onClose={() => {
            setIsExploreOpen(false);
            setActiveTab('map');
          }}
          onSelectMap={openMap}
          onOpenLesson={(map, node) => {
            setCurrentMindmap(map);
            setActiveQuizNode(null);
            setIsExploreOpen(false);
            setActiveTab('map');
            openReader(node);
          }}
        /></Suspense>
      )}

      {/* Alat bisnis (full screen) */}
      {toolkit.open && (
        <ToolkitView
          key={toolkit.tool || 'list'}
          initialTool={toolkit.tool}
          lockedTools={lockedTools}
          onLockedTool={() => openLock('tool')}
          onClose={() => {
            setToolkit({ open: false, tool: null });
            setActiveTab('map');
          }}
        />
      )}

      {/* Profile & Achievements Modal */}
      {isProfileOpen && (
        <Suspense fallback={null}><ProfileModal
          onOpenAuth={() => setIsAuthOpen(true)}
          onClose={() => {
            setIsProfileOpen(false);
            setActiveTab('map');
          }}
          onOpenNode={(node, map) => {
            setCurrentMindmap(map);
            setIsProfileOpen(false);
            setActiveTab('map');
            openReader(node);
          }}
        /></Suspense>
      )}

      {/* User Auth Modal */}
      {isAuthOpen && (
        <Suspense fallback={null}><AuthModal onClose={() => setIsAuthOpen(false)} /></Suspense>
      )}

      {lock && <ProLockSheet reason={lock} onClose={() => setLock(null)} onSeePlans={() => { const r = lock; setLock(null); openPaywall(r); }} />}

      {paywall.open && (
        <Suspense fallback={null}><PlansView
          reason={paywall.reason}
          onClose={() => setPaywall({ open: false, reason: 'manual' })}
          onOpenLegal={setLegal}
          onOpenAuth={() => setIsAuthOpen(true)}
        /></Suspense>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <Suspense fallback={null}><SettingsModal
          onClose={() => setIsSettingsOpen(false)}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenPlans={() => openPaywall('manual')}
          onOpenHelp={() => setIsHelpOpen(true)}
          onOpenLegal={setLegal}
        /></Suspense>
      )}

      {isWelcomeOpen && (
        <WelcomeScreen onStart={(mapId) => { closeWelcome(); const m = mapId ? getMapById(mapId) : undefined; if (m) openMap(m); }} onLogin={() => setIsAuthOpen(true)} />
      )}

      {legal && <LegalView kind={legal} onClose={() => setLegal(null)} />}

      {/* Help Modal */}
      {isHelpOpen && (
        <Suspense fallback={null}><HelpModal onClose={() => setIsHelpOpen(false)} /></Suspense>
      )}

    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          <AppContent />
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
