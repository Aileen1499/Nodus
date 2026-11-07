import React, { useEffect, useRef, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Sparkles, Flame, Zap, Settings, HelpCircle, Sun, Moon, Crown, User as UserIcon } from 'lucide-react';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenHelp: () => void;
  onOpenProfile?: () => void;
  onOpenAuth?: () => void;
  onOpenPaywall?: () => void;
}

/** Brand, streak, RP and one account menu. Everything secondary lives in the menu. */
export const Header: React.FC<HeaderProps> = ({ onOpenSettings, onOpenHelp, onOpenProfile, onOpenAuth, onOpenPaywall }) => {
  const { progress, isPro } = useUser();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const run = (fn?: () => void) => () => {
    setMenuOpen(false);
    fn?.();
  };
  const initial = (user?.displayName || user?.email || 'U')[0].toUpperCase();
  const menuItem = 'flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5';

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/70 bg-[#FBF9F5]/90 backdrop-blur-md dark:border-white/10 dark:bg-[#151517]/90">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="text-[19px] font-extrabold tracking-tight text-slate-900 dark:text-white">NODUS</span>
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#E3A63A]" />
          {isPro && (
            <span className="ml-1 inline-flex items-center gap-1 rounded-full bg-[#151517] px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#E3A63A] dark:bg-[#E3A63A] dark:text-[#151517]">
              <Crown className="h-2.5 w-2.5" />
              PRO
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div title="Streak belajar harian" className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-800 dark:bg-white/10 dark:text-white">
            <Flame className="h-4 w-4 text-[#E3A63A]" />
            <span className="tabular-nums">{progress.streak}</span>
          </div>

          <button onClick={onOpenProfile} title="Rank Points — buka Brankas" className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
            <Sparkles className="h-4 w-4 text-[#CF8E1F]" />
            <span className="tabular-nums">{progress.rankPoints}</span>
            <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">RP</span>
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              aria-label="Menu akun"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#151517] text-sm font-extrabold text-[#FBF9F5] transition-transform active:scale-95 dark:bg-[#FBF9F5] dark:text-[#151517]"
            >
              {user ? initial : <UserIcon className="h-4 w-4" />}
            </button>

            {menuOpen && (
              <div role="menu" className="absolute right-0 top-12 z-40 w-64 animate-fade-in rounded-2xl border border-slate-200/80 bg-white p-2 shadow-float dark:border-white/10 dark:bg-[#1F1F23]">
                <button role="menuitem" onClick={run(onOpenAuth)} className={menuItem}>
                  <UserIcon className="h-4 w-4 text-slate-500" />
                  <span className="min-w-0 flex-1 truncate">{user ? user.displayName || user.email || 'Akun saya' : 'Masuk / Daftar'}</span>
                </button>
                <button role="menuitem" onClick={run(onOpenPaywall)} className={menuItem}>
                  <Zap className="h-4 w-4 text-[#CF8E1F]" />
                  <span className="flex-1">{isPro ? 'NODUS Pro aktif' : 'Upgrade ke Pro'}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold tabular-nums text-slate-600 dark:bg-white/10 dark:text-slate-300">
                    {isPro ? '∞' : progress.credits} kredit AI
                  </span>
                </button>
                <div className="my-1 h-px bg-slate-200/70 dark:bg-white/10" />
                <button role="menuitem" onClick={toggleTheme} className={menuItem}>
                  {theme === 'dark' ? <Sun className="h-4 w-4 text-slate-500" /> : <Moon className="h-4 w-4 text-slate-500" />}
                  <span className="flex-1">{theme === 'dark' ? 'Mode terang' : 'Mode gelap'}</span>
                </button>
                <button role="menuitem" onClick={run(onOpenHelp)} className={menuItem}>
                  <HelpCircle className="h-4 w-4 text-slate-500" />
                  <span className="flex-1">Panduan NODUS</span>
                </button>
                <button role="menuitem" onClick={run(onOpenSettings)} className={menuItem}>
                  <Settings className="h-4 w-4 text-slate-500" />
                  <span className="flex-1">Pengaturan</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
