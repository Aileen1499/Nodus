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
import { MOCK_MINDMAPS, PRESET_QUERIES } from './data/mockMindmaps';
import { generateMindmapWithGemini } from './lib/gemini';
import { getMindmapForTopic } from './lib/topicEngine';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  text: string;
}

const AppContent: React.FC = () => {
  const { progress, isPro, useCredit, isNodeMastered } = useUser();

  // Active Mindmap State
  const [currentMindmap, setCurrentMindmap] = useState<MindmapData>(() => {
    return MOCK_MINDMAPS['Strategi Bisnis & Model Mental Miliarder'];
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

  // Toast Notification State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (text: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, type, text }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Search Handler with Credit & Paywall Checking
  const handleSearch = async (query: string) => {
    // Reset active modal / sheet nodes immediately so state doesn't persist
    setActiveReaderNode(null);
    setActiveQuizNode(null);

    const isPredefined = !!getMindmapForTopic(query);

    if (!isPredefined && !isPro && progress.credits <= 0) {
      setIsPaywallOpen(true);
      showToast('Kuota harian 3 pencarian kustom AI telah habis. Buka akses penuh di Nodus Pro!', 'warning');
      return;
    }

    setIsLoadingMindmap(true);
    showToast(`Membedah jejaring kausal untuk "${query}"...`, 'info');

    if (!isPredefined && !isPro) {
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
      showToast(`Peta konsep "${generated.topic}" berhasil dimuat!`, 'success');
    } catch (err) {
      console.error('Error generating mindmap:', err);
      showToast('Gagal memuat peta dari AI, menggunakan data cadangan lokal.', 'warning');
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
  const handleQuizComplete = (earnedPoints: number) => {
    showToast(`Luar biasa! Simpul dikuasai, +${earnedPoints} RP ditambahkan ke profil!`, 'success');
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

      {/* Floating Toast Notifications */}
      <div className="fixed bottom-16 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-xs font-bold shadow-2xl backdrop-blur-xl transition-all ${
              toast.type === 'success'
                ? 'border-emerald-500/50 bg-white/95 dark:bg-[#0B0F19]/95 text-emerald-700 dark:text-emerald-300'
                : toast.type === 'warning'
                ? 'border-amber-500/50 bg-white/95 dark:bg-[#0B0F19]/95 text-amber-700 dark:text-amber-300'
                : 'border-indigo-500/50 bg-white/95 dark:bg-[#0B0F19]/95 text-indigo-700 dark:text-indigo-300'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            ) : toast.type === 'warning' ? (
              <AlertCircle className="h-4 w-4 text-amber-500" />
            ) : (
              <Sparkles className="h-4 w-4 text-indigo-500" />
            )}
            <span>{toast.text}</span>
          </div>
        ))}
      </div>

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
