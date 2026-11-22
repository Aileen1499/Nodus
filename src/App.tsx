import React, { useEffect, useMemo, useState } from 'react';
import { localDay } from './lib/date';
import { UserProvider, useUser } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/common/Header';
import { BottomNav, NavTab } from './components/common/BottomNav';
import { MindmapCanvas } from './components/mindmap/MindmapCanvas';
import { MicroReaderSheet } from './components/reader/MicroReaderSheet';
import { QuizEngine } from './components/quiz/QuizEngine';
import { ArenaView } from './components/quiz/ArenaView';
import { getNeighbours } from './lib/pathLogic';
import { SettingsModal } from './components/common/SettingsModal';
import { HelpModal } from './components/common/HelpModal';
import { ExploreModal } from './components/explore/ExploreModal';
import { ToolkitView, TOOLS } from './components/tools/ToolkitView';
import type { ToolId } from './lib/curriculumBuilder';
import { allNodes, findNode, getMapById, resolveRetired } from './lib/nodeIndex';
import { isDueForReview } from './lib/review';
import { ProfileModal } from './components/profile/ProfileModal';
import { AuthModal } from './components/auth/AuthModal';
import { WelcomeScreen } from './components/brand/WelcomeScreen';
import { PlansView } from './components/paywall/PlansView';
import { LegalView, LegalKind } from './components/legal/LegalView';
import { readReminder, msUntil, showReminder } from './lib/reminder';
import { isLessonPlanLocked, isToolPlanLocked, PaywallReason } from './lib/plans';
import { MindmapData, MindmapNode } from './types';
import { PRESET_QUERIES } from './data/mockMindmaps';
import { generateMindmapWithGemini } from './lib/gemini';
import { getMindmapForTopic } from './lib/topicEngine';
import { StreakCard } from './components/growth/StreakCard';
import { getRecommendedNode } from './lib/pathLogic';
import { getCurriculumForQuery, ZERO_TO_HERO_OWNER_CURRICULUM } from './lib/curriculumData';

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
  const openPaywall = (reason: PaywallReason = 'manual') => setPaywall({ open: true, reason });
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
    if (isLessonPlanLocked(map, node, isPro)) openPaywall('lesson');
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
      openPaywall('ai');
      return;
    }

    setIsLoadingMindmap(true);

    if (!isPro) {
      const creditUsed = useCredit();
      if (!creditUsed) {
        openPaywall('ai');
        setIsLoadingMindmap(false);
        return;
      }
    }

    try {
      const generated = await generateMindmapWithGemini(
        query,
        progress.apiKey,
        progress.aiModel || 'gemini-1.5-flash'
      );

      setCurrentMindmap(generated);
      setActiveReaderNode(null);
      setActiveQuizNode(null);
      setIsQuizHubOpen(false);
    } catch (err) {
      console.error('Error generating mindmap:', err);
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
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#FBF9F5] dark:bg-[#0F1520] font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
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
            <StreakCard onContinue={() => { const n = getRecommendedNode(currentMindmap, isNodeMastered); if (n) openReader(n); }} />
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
          onOpenTool={(tool) => { setActiveReaderNode(null); if (isToolPlanLocked(tool as ToolId, isPro)) { openPaywall('tool'); return; } setToolkit({ open: true, tool: tool as ToolId }); setActiveTab('tools'); }}
          onClose={() => setActiveReaderNode(null)}
          onStartQuiz={(node) => {
            setActiveReaderNode(null);
            setActiveQuizNode(node);
          }}
        />
      )}

      {/* Arena (full screen) */}
      {isQuizHubOpen && (
        <ArenaView
          data={currentMindmap}
          onClose={() => {
            setIsQuizHubOpen(false);
            setActiveTab('map');
          }}
          onSelectNode={openQuiz}
        />
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
          <QuizEngine
            key={quizNode.id}
            node={quizNode}
            onClose={() => setActiveQuizNode(null)}
            onComplete={handleQuizComplete}
            onNext={nextNode ? () => openReader(nextNode) : undefined}
            nextLabel={nextNode ? `Lanjut: ${nextNode.label}` : undefined}
            onReadLesson={() => openReader(quizNode)}
            onUpgrade={() => setPaywall({ open: true, reason: 'manual' })}
          />
        );
      })()}

      {/* Kurikulum (full screen) */}
      {isExploreOpen && (
        <ExploreModal
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
        />
      )}

      {/* Alat bisnis (full screen) */}
      {toolkit.open && (
        <ToolkitView
          key={toolkit.tool || 'list'}
          initialTool={toolkit.tool}
          lockedTools={lockedTools}
          onLockedTool={() => openPaywall('tool')}
          onClose={() => {
            setToolkit({ open: false, tool: null });
            setActiveTab('map');
          }}
        />
      )}

      {/* Profile & Achievements Modal */}
      {isProfileOpen && (
        <ProfileModal
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
        />
      )}

      {/* User Auth Modal */}
      {isAuthOpen && (
        <AuthModal onClose={() => setIsAuthOpen(false)} />
      )}

      {paywall.open && (
        <PlansView
          reason={paywall.reason}
          onClose={() => setPaywall({ open: false, reason: 'manual' })}
          onOpenLegal={setLegal}
          onOpenAuth={() => setIsAuthOpen(true)}
        />
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <SettingsModal
          onClose={() => setIsSettingsOpen(false)}
          onOpenAuth={() => setIsAuthOpen(true)}
          onOpenPlans={() => openPaywall('manual')}
          onOpenHelp={() => setIsHelpOpen(true)}
          onOpenLegal={setLegal}
        />
      )}

      {isWelcomeOpen && (
        <WelcomeScreen onStart={(mapId) => { closeWelcome(); const m = mapId ? getMapById(mapId) : undefined; if (m) openMap(m); }} onLogin={() => setIsAuthOpen(true)} />
      )}

      {legal && <LegalView kind={legal} onClose={() => setLegal(null)} />}

      {/* Help Modal */}
      {isHelpOpen && (
        <HelpModal onClose={() => setIsHelpOpen(false)} />
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
