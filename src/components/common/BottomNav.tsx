import React from 'react';
import { Map, Compass, BarChart3, User } from 'lucide-react';

export type NavTab = 'map' | 'explore' | 'quiz' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChangeTab }) => {
  const navItems = [
    { id: 'map' as NavTab, label: 'Peta', icon: Map },
    { id: 'explore' as NavTab, label: 'Katalog', icon: Compass },
    { id: 'quiz' as NavTab, label: 'Evaluasi', icon: BarChart3 },
    { id: 'profile' as NavTab, label: 'Profil', icon: User },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 inset-x-0 mx-auto z-40 w-[92%] sm:w-auto sm:min-w-[420px] max-w-md pointer-events-none select-none">
      <nav 
        className="pointer-events-auto flex items-center justify-between rounded-[28px] border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-2xl p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.65)] ring-1 ring-slate-900/5 dark:ring-white/10 transition-all duration-300"
        role="navigation"
        aria-label="Navigasi Utama"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChangeTab(item.id)}
              className={`relative flex flex-1 flex-col items-center justify-center py-2 px-3 rounded-[22px] transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-b from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-600/30 scale-100 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60 font-medium'
              }`}
            >
              <Icon 
                className={`h-5 w-5 transition-transform duration-200 ${
                  isActive ? 'scale-110 drop-shadow-sm' : 'scale-100'
                }`} 
              />
              <span className={`text-[10px] mt-1 tracking-tight leading-none ${
                isActive ? 'text-white font-black' : 'font-semibold'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
