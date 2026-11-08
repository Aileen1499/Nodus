import React from 'react';
import { Compass, BookOpen, Zap, Lock, Calculator } from 'lucide-react';

// Tab ids stay stable (App routing); labels follow the NODUS design.
export type NavTab = 'map' | 'explore' | 'tools' | 'quiz' | 'profile';

interface BottomNavProps {
  activeTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
}

/** Charcoal pill dock, gold active state. Peta / Kurikulum / Alat / Arena / Brankas. */
export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onChangeTab }) => {
  const navItems = [
    { id: 'map' as NavTab, label: 'Peta', icon: Compass },
    { id: 'explore' as NavTab, label: 'Kurikulum', icon: BookOpen },
    { id: 'tools' as NavTab, label: 'Alat', icon: Calculator },
    { id: 'quiz' as NavTab, label: 'Arena', icon: Zap },
    { id: 'profile' as NavTab, label: 'Brankas', icon: Lock },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-[55] mx-auto w-[92%] max-w-md select-none"
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 14px)' }}
    >
      <nav className="pointer-events-auto flex items-center justify-between rounded-full bg-[#151517] p-1.5 shadow-float ring-1 ring-white/10" role="navigation" aria-label="Navigasi utama">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onChangeTab(item.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-full py-2 transition-colors ${
                isActive ? 'bg-[#E3A63A] text-[#151517]' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.4 : 2} />
              <span className="text-[11px] font-bold leading-none tracking-tight">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
