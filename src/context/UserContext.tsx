import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress, UserHighlight, DomainType, HighlightColor } from '../types';
import { useAuth } from './AuthContext';
import { syncUserRP, syncUserCredits, syncUserMasteredNodes, getUserProgress, DEFAULT_FREE_CREDITS } from '../lib/db';

interface UserContextType {
  progress: UserProgress;
  isPro: boolean;
  highlights: UserHighlight[];
  addRankPoints: (points: number) => void;
  markNodeMastered: (nodeId: string, bonusPoints?: number) => void;
  isNodeMastered: (nodeId: string) => boolean;
  toggleActionCheck: (nodeId: string, actionIndex: number) => void;
  isActionChecked: (nodeId: string, actionIndex: number) => boolean;
  addHighlight: (nodeId: string, nodeTitle: string, domain: DomainType, text: string, color?: HighlightColor) => void;
  removeHighlight: (id: string) => void;
  addStudyMinutes: (minutes: number) => void;
  useCredit: () => boolean;
  resetProgress: () => void;
  saveApiKey: (key: string, model?: string) => void;
  activatePro: () => void;
}

const STORAGE_KEY = 'nodus_user_progress_v1';

const getTodayString = (): string => {
  return new Date().toISOString().split('T')[0];
};

const defaultProgress: UserProgress = {
  rankPoints: 0,
  streak: 0,
  credits: DEFAULT_FREE_CREDITS, // 3 free credits per day
  masteredNodeIds: [],
  checkedActions: {},
  highlights: [],
  totalStudyMinutes: 0,
  lastStudyDate: undefined,
  lastActiveDate: getTodayString(),
  apiKey: '',
  aiModel: 'gemini-1.5-flash',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, userProfile } = useAuth();
  const [isPro, setIsPro] = useState<boolean>(false);

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        const today = getTodayString();
        const lastActive = parsed.lastActiveDate || today;
        const diffDays = Math.floor(
          (new Date(today).getTime() - new Date(lastActive).getTime()) / (1000 * 3600 * 24)
        );

        let streak = parsed.streak || 1;
        let credits = parsed.credits ?? DEFAULT_FREE_CREDITS;

        if (diffDays === 1) {
          credits = DEFAULT_FREE_CREDITS;
        } else if (diffDays > 1) {
          streak = 1;
          credits = DEFAULT_FREE_CREDITS;
        }

        return {
          ...defaultProgress,
          ...parsed,
          streak,
          credits,
          lastActiveDate: today,
        };
      }
    } catch (e) {
      console.error('Failed to load user progress:', e);
    }
    return defaultProgress;
  });

  // Sync with Firestore profile when user logs in
  useEffect(() => {
    if (userProfile && user) {
      setIsPro(userProfile.isPro || false);
      setProgress((prev) => ({
        ...prev,
        rankPoints: Math.max(prev.rankPoints, userProfile.rp || 0),
        streak: Math.max(prev.streak, userProfile.streak || 1),
        credits: userProfile.isPro ? 999 : (userProfile.credits ?? prev.credits),
      }));

      // Load mastered nodes from Firestore
      getUserProgress(user.uid).then((nodes: string[]) => {
        if (nodes && nodes.length > 0) {
          setProgress((prev) => ({
            ...prev,
            masteredNodeIds: Array.from(new Set([...prev.masteredNodeIds, ...nodes])),
          }));
        }
      }).catch(() => {});
    }
  }, [userProfile, user]);

  // Persist to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save user progress:', e);
    }
  }, [progress]);

  const addRankPoints = (points: number) => {
    setProgress((prev) => {
      const newRP = Math.max(0, prev.rankPoints + points);
      if (user) {
        syncUserRP(user.uid, newRP);
      }
      return {
        ...prev,
        rankPoints: newRP,
      };
    });
  };

  const markNodeMastered = (nodeId: string, bonusPoints: number = 80) => {
    setProgress((prev) => {
      const alreadyMastered = prev.masteredNodeIds.includes(nodeId);
      const newMastered = alreadyMastered ? prev.masteredNodeIds : [...prev.masteredNodeIds, nodeId];
      const newPoints = alreadyMastered ? prev.rankPoints : prev.rankPoints + bonusPoints;

      // Accurate streak calculation: only increment if activity happens on a new day
      const today = getTodayString();
      let updatedStreak = prev.streak;
      if (!prev.lastStudyDate) {
        updatedStreak = 1;
      } else if (prev.lastStudyDate !== today) {
        const diff = Math.floor(
          (new Date(today).getTime() - new Date(prev.lastStudyDate).getTime()) / (1000 * 3600 * 24)
        );
        if (diff === 1) {
          updatedStreak = prev.streak + 1;
        } else {
          updatedStreak = 1;
        }
      }

      if (user) {
        syncUserRP(user.uid, newPoints);
        syncUserMasteredNodes(user.uid, newMastered);
      }

      return {
        ...prev,
        rankPoints: newPoints,
        streak: updatedStreak,
        lastStudyDate: today,
        masteredNodeIds: newMastered,
      };
    });
  };

  const isNodeMastered = (nodeId: string): boolean => {
    return progress.masteredNodeIds.includes(nodeId);
  };

  const addStudyMinutes = (minutes: number) => {
    if (minutes <= 0) return;
    setProgress((prev) => ({
      ...prev,
      totalStudyMinutes: (prev.totalStudyMinutes || 0) + minutes,
    }));
  };

  const toggleActionCheck = (nodeId: string, actionIndex: number) => {
    const key = `${nodeId}_${actionIndex}`;
    setProgress((prev) => {
      const isChecked = !prev.checkedActions[key];
      const newRP = isChecked ? prev.rankPoints + 10 : Math.max(0, prev.rankPoints - 10);
      if (user) {
        syncUserRP(user.uid, newRP);
      }
      return {
        ...prev,
        checkedActions: {
          ...prev.checkedActions,
          [key]: isChecked,
        },
        rankPoints: newRP,
      };
    });
  };

  const isActionChecked = (nodeId: string, actionIndex: number): boolean => {
    return !!progress.checkedActions[`${nodeId}_${actionIndex}`];
  };

  const highlights = progress.highlights || [];

  const addHighlight = (
    nodeId: string,
    nodeTitle: string,
    domain: DomainType,
    text: string,
    color: HighlightColor = 'yellow'
  ) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setProgress((prev) => {
      const currentHighlights = prev.highlights || [];
      // Prevent exact duplicate highlights
      if (currentHighlights.some((h) => h.nodeId === nodeId && h.text === trimmed)) {
        return prev;
      }

      const newHighlight: UserHighlight = {
        id: `hl-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        nodeId,
        nodeTitle,
        domain,
        text: trimmed,
        color,
        createdAt: new Date().toISOString(),
      };

      const updated = [newHighlight, ...currentHighlights];
      return {
        ...prev,
        highlights: updated,
      };
    });
  };

  const removeHighlight = (id: string) => {
    setProgress((prev) => ({
      ...prev,
      highlights: (prev.highlights || []).filter((h) => h.id !== id),
    }));
  };

  const useCredit = (): boolean => {
    if (isPro) return true; // Pro users have unlimited searches
    if (progress.credits <= 0) return false;

    const newCredits = Math.max(0, progress.credits - 1);
    setProgress((prev) => ({
      ...prev,
      credits: newCredits,
    }));

    if (user) {
      syncUserCredits(user.uid, newCredits);
    }
    return true;
  };

  const activatePro = () => {
    setIsPro(true);
    setProgress((prev) => ({
      ...prev,
      credits: 999,
    }));
  };

  const resetProgress = () => {
    const fresh = {
      ...defaultProgress,
      apiKey: progress.apiKey,
      aiModel: progress.aiModel,
    };
    setProgress(fresh);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  };

  const saveApiKey = (key: string, model: string = 'gemini-1.5-flash') => {
    setProgress((prev) => ({
      ...prev,
      apiKey: key.trim(),
      aiModel: model,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        progress,
        isPro,
        highlights,
        addRankPoints,
        markNodeMastered,
        isNodeMastered,
        toggleActionCheck,
        isActionChecked,
        addHighlight,
        removeHighlight,
        addStudyMinutes,
        useCredit,
        resetProgress,
        saveApiKey,
        activatePro,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
