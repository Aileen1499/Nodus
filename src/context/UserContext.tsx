import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress } from '../types';

interface UserContextType {
  progress: UserProgress;
  addRankPoints: (points: number) => void;
  markNodeMastered: (nodeId: string, bonusPoints?: number) => void;
  isNodeMastered: (nodeId: string) => boolean;
  toggleActionCheck: (nodeId: string, actionIndex: number) => void;
  isActionChecked: (nodeId: string, actionIndex: number) => boolean;
  useCredit: () => boolean;
  resetProgress: () => void;
  saveApiKey: (key: string, model?: string) => void;
}

const STORAGE_KEY = 'nodus_user_progress_v1';

const getTodayString = (): string => {
  return new Date().toISOString().split('T')[0];
};

const defaultProgress: UserProgress = {
  rankPoints: 120, // Start with starter RP
  streak: 3, // Starter encouraging streak
  credits: 8, // Deep-dive credits
  masteredNodeIds: ['musk-root', 'inflasi-root'],
  checkedActions: {},
  lastActiveDate: getTodayString(),
  apiKey: '',
  aiModel: 'gemini-1.5-flash',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Check streak maintenance
        const today = getTodayString();
        const lastActive = parsed.lastActiveDate || today;
        const diffDays = Math.floor(
          (new Date(today).getTime() - new Date(lastActive).getTime()) / (1000 * 3600 * 24)
        );

        let streak = parsed.streak || 1;
        if (diffDays === 1) {
          // Continuous
        } else if (diffDays > 1) {
          streak = 1; // Streak reset
        }

        return {
          ...defaultProgress,
          ...parsed,
          streak,
          lastActiveDate: today,
        };
      }
    } catch (e) {
      console.error('Failed to load user progress:', e);
    }
    return defaultProgress;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save user progress:', e);
    }
  }, [progress]);

  const addRankPoints = (points: number) => {
    setProgress((prev) => ({
      ...prev,
      rankPoints: Math.max(0, prev.rankPoints + points),
    }));
  };

  const markNodeMastered = (nodeId: string, bonusPoints: number = 80) => {
    setProgress((prev) => {
      const alreadyMastered = prev.masteredNodeIds.includes(nodeId);
      const newMastered = alreadyMastered ? prev.masteredNodeIds : [...prev.masteredNodeIds, nodeId];
      const newPoints = alreadyMastered ? prev.rankPoints : prev.rankPoints + bonusPoints;

      return {
        ...prev,
        rankPoints: newPoints,
        masteredNodeIds: newMastered,
      };
    });
  };

  const isNodeMastered = (nodeId: string): boolean => {
    return progress.masteredNodeIds.includes(nodeId);
  };

  const toggleActionCheck = (nodeId: string, actionIndex: number) => {
    const key = `${nodeId}_${actionIndex}`;
    setProgress((prev) => {
      const isChecked = !prev.checkedActions[key];
      return {
        ...prev,
        checkedActions: {
          ...prev.checkedActions,
          [key]: isChecked,
        },
        rankPoints: isChecked ? prev.rankPoints + 10 : prev.rankPoints - 10,
      };
    });
  };

  const isActionChecked = (nodeId: string, actionIndex: number): boolean => {
    return !!progress.checkedActions[`${nodeId}_${actionIndex}`];
  };

  const useCredit = (): boolean => {
    if (progress.credits <= 0) return false;
    setProgress((prev) => ({
      ...prev,
      credits: Math.max(0, prev.credits - 1),
    }));
    return true;
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
        addRankPoints,
        markNodeMastered,
        isNodeMastered,
        toggleActionCheck,
        isActionChecked,
        useCredit,
        resetProgress,
        saveApiKey,
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

