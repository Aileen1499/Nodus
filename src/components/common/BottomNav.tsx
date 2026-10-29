import React from 'react';
import { Network, Compass, Award, User } from 'lucide-react';

export type NavTab = 'map' | 'explore' | 'quiz' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChangeTab }) => {
  const navItems = [
    { id: 'map' as NavTab, label: 'Peta', icon: Network },
    { id: 'explore' as NavTab, label: 'Katalog', icon: Compass },
    { id: 'quiz' as NavTab, label: 'Evaluasi', icon: Award },
    { id: 'profile' as NavTab, label: 'Profil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 md:hidden border-t border-slate-200/80 dark:border-slate-800/80 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl px-3 py-1.5 shadow-2xl transition-colors duration-300">
      <div className="flex items-center justify-around h-13 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChangeTab(item.id)}
              className={`relative flex flex-col items-center justify-center w-16 py-1 rounded-2xl transition-all duration-200 ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium'
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-indigo-500/15 dark:bg-indigo-500/25 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-indigo-500/30'
                    : 'bg-transparent'
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
