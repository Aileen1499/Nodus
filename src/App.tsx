import React, { useMemo, useState } from 'react';
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
import { ToolkitView } from './components/tools/ToolkitView';
import type { ToolId } from './lib/curriculumBuilder';
import { allNodes, getMapById } from './lib/nodeIndex';
import { isDueForReview } from './lib/review';
import { ProfileModal } from './components/profile/ProfileModal';
import { AuthModal } from './components/auth/AuthModal';
import { PaywallModal } from './components/paywall/PaywallModal';
import { MindmapData, MindmapNode } from './types';
import { PRESET_QUERIES } from './data/mockMindmaps';
import { generateMindmapWithGemini } from './lib/gemini';
import { getMindmapForTopic } from './lib/topicEngine';
import { getCurriculumForQuery, ZERO_TO_HERO_OWNER_CURRICULUM } from './lib/curriculumData';

const AppContent: React.FC = () => {
  const { progress, isPro, useCredit } = useUser();

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
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isLoadingMindmap, setIsLoadingMindmap] = useState(false);

  // Search Handler with Instant Predefined Routing & Fallback to Gemini AI
  const handleSearch = async (query: string) => {
    // Reset active modal / sheet nodes immediately so state doesn't persist
    setActiveReaderNode(null);
    setActiveQuizNode(null);
    setIsQuizHubOpen(false);

    // 1. Check for structured masterclass curricula or pre-mapped domains
    const predefinedCurriculum = getCurriculumForQuery(query) || getMindmapForTopic(query);
    if (predefinedCurriculum) {
      setCurrentMindmap(predefinedCurriculum);
      return;
    }

    // 2. Custom AI Generation for novel queries
    if (!isPro && progress.credits <= 0) {
      setIsPaywallOpen(true);
      return;
    }

    setIsLoadingMindmap(true);

    if (!isPro) {
      const creditUsed = useCredit();
      if (!creditUsed) {
        setIsPaywallOpen(true);
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
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#FBF9F5] dark:bg-[#151517] font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Header with Logo, Theme Toggle, Auth, and Live Stats */}
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPaywall={() => setIsPaywallOpen(true)}
      />

      {/* Main Interactive Canvas */}
      <main className="relative flex-1 overflow-y-auto">
        <MindmapCanvas
          data={currentMindmap}
          activeNode={activeReaderNode}
          onSelectNode={(node) => setActiveReaderNode(node)}
          onStartQuiz={(node) => setActiveQuizNode(node)}
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
          onNavigate={(node) => setActiveReaderNode(node)}
          onOpenTool={(tool) => { setActiveReaderNode(null); setToolkit({ open: true, tool: tool as ToolId }); setActiveTab('tools'); }}
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
          onSelectNode={(node) => setActiveQuizNode(node)}
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
        />
      )}

      {/* Alat bisnis (full screen) */}
      {toolkit.open && (
        <ToolkitView
          key={toolkit.tool || 'list'}
          initialTool={toolkit.tool}
          onClose={() => {
            setToolkit({ open: false, tool: null });
            setActiveTab('map');
          }}
        />
      )}

      {/* Profile & Achievements Modal */}
      {isProfileOpen && (
        <ProfileModal
          onClose={() => {
            setIsProfileOpen(false);
            setActiveTab('map');
          }}
          onOpenNode={(node, map) => {
            setCurrentMindmap(map);
            setIsProfileOpen(false);
            setActiveTab('map');
            setActiveReaderNode(node);
          }}
        />
      )}

      {/* User Auth Modal */}
      {isAuthOpen && (
        <AuthModal onClose={() => setIsAuthOpen(false)} />
      )}

      {/* Paywall & Credit Limit Modal */}
      {isPaywallOpen && (
        <PaywallModal onClose={() => setIsPaywallOpen(false)} />
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <SettingsModal onClose={() => setIsSettingsOpen(false)} />
      )}

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
