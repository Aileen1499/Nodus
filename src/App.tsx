import React, { useState } from 'react';
import { UserProvider, useUser } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/common/Header';
import { BottomNav, NavTab } from './components/common/BottomNav';
import { MindmapCanvas } from './components/mindmap/MindmapCanvas';
import { MicroReaderSheet } from './components/reader/MicroReaderSheet';
import { QuizEngine } from './components/quiz/QuizEngine';
import { SettingsModal } from './components/common/SettingsModal';
import { HelpModal } from './components/common/HelpModal';
import { ExploreModal } from './components/explore/ExploreModal';
import { ProfileModal } from './components/profile/ProfileModal';
import { AuthModal } from './components/auth/AuthModal';
import { PaywallModal } from './components/paywall/PaywallModal';
import { MindmapData, MindmapNode } from './types';
import { PRESET_QUERIES } from './data/mockMindmaps';
import { generateMindmapWithGemini } from './lib/gemini';
import { getMindmapForTopic } from './lib/topicEngine';
import { getCurriculumForQuery, CORPORATE_STRATEGY_WEALTH_CURRICULUM } from './lib/curriculumData';

const AppContent: React.FC = () => {
  const { progress, isPro, useCredit, isNodeMastered } = useUser();

  // Active Mindmap State (Default: Strategi Korporat, Legalitas PT & Arsitektur Kekayaan)
  const [currentMindmap, setCurrentMindmap] = useState<MindmapData>(() => {
    return CORPORATE_STRATEGY_WEALTH_CURRICULUM;
  });

  // Navigation tab state (Mobile Bottom Nav)
  const [activeTab, setActiveTab] = useState<NavTab>('map');

  // Modal / Sheet States
  const [activeReaderNode, setActiveReaderNode] = useState<MindmapNode | null>(null);
  const [activeQuizNode, setActiveQuizNode] = useState<MindmapNode | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isPaywallOpen, setIsPaywallOpen] = useState(false);
  const [isLoadingMindmap, setIsLoadingMindmap] = useState(false);

  // Search Handler with Instant Predefined Routing & Fallback to Gemini AI
  const handleSearch = async (query: string) => {
    // Reset active modal / sheet nodes immediately so state doesn't persist
    setActiveReaderNode(null);
    setActiveQuizNode(null);

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
    } catch (err) {
      console.error('Error generating mindmap:', err);
    } finally {
      setIsLoadingMindmap(false);
    }
  };

  // Tab change handler from Mobile Bottom Nav
  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'explore') {
      setIsExploreOpen(true);
    } else if (tab === 'profile') {
      setIsProfileOpen(true);
    } else if (tab === 'quiz') {
      const targetNode =
        currentMindmap.nodes.find((n) => !isNodeMastered(n.id)) || currentMindmap.nodes[0];
      if (targetNode) {
        setActiveQuizNode(targetNode);
      }
    }
  };

  // Complete Quiz Handler
  const handleQuizComplete = () => {
    // Subtle in-place state update without floating banner
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-[#F8FAFC] dark:bg-[#070A11] font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Header with Logo, Theme Toggle, Auth, and Live Stats */}
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenPaywall={() => setIsPaywallOpen(true)}
      />

      {/* Main Interactive Canvas */}
      <main className="relative flex-1 overflow-hidden">
        <MindmapCanvas
          data={currentMindmap}
          activeNode={activeReaderNode}
          onSelectNode={(node) => setActiveReaderNode(node)}
          onSearch={handleSearch}
          isLoading={isLoadingMindmap}
          presetQueries={PRESET_QUERIES}
        />
      </main>

      {/* Mobile Bottom Navigation Bar (<768px) */}
      <BottomNav
        activeTab={activeTab}
        onChangeTab={handleTabChange}
      />

      {/* Micro-Reader Bottom Sheet / Drawer */}
      {activeReaderNode && (
        <MicroReaderSheet
          node={activeReaderNode}
          onClose={() => setActiveReaderNode(null)}
          onStartQuiz={(node) => {
            setActiveReaderNode(null);
            setActiveQuizNode(node);
          }}
        />
      )}

      {/* Decision Simulation & Gamified Quiz Engine */}
      {activeQuizNode && (
        <QuizEngine
          node={activeQuizNode}
          onClose={() => {
            setActiveQuizNode(null);
            setActiveTab('map');
          }}
          onComplete={handleQuizComplete}
        />
      )}

      {/* Explore Curriculum Modal */}
      {isExploreOpen && (
        <ExploreModal
          onClose={() => {
            setIsExploreOpen(false);
            setActiveTab('map');
          }}
          onSelectTopic={(topic) => {
            handleSearch(topic);
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
