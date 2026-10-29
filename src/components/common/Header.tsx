import React from 'react';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { 
  Sparkles, 
  Flame, 
  Zap, 
  Settings, 
  HelpCircle, 
  Network, 
  Sun, 
  Moon, 
  Crown,
  User as UserIcon
} from 'lucide-react';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenHelp: () => void;
  onOpenProfile?: () => void;
  onOpenAuth?: () => void;
  onOpenPaywall?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSettings, 
  onOpenHelp, 
  onOpenProfile,
  onOpenAuth,
  onOpenPaywall
}) => {
  const { progress, isPro } = useUser();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-slate-200/80 bg-white/80 dark:border-slate-800/80 dark:bg-[#0B0F19]/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        
        {/* Brand & Logo */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-emerald-400 p-[1.5px] shadow-lg shadow-indigo-500/20">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900">
              <Network className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold tracking-wider text-slate-900 dark:text-slate-50 text-base sm:text-xl">
                NODUS
              </span>
              {isPro ? (
                <span className="flex items-center gap-1 rounded bg-gradient-to-r from-amber-500/20 to-indigo-500/20 px-1.5 py-0.5 text-[10px] font-black text-amber-500 border border-amber-500/40">
                  <Crown className="h-2.5 w-2.5" />
                  PRO
                </span>
              ) : (
                <button
                  onClick={onOpenPaywall}
                  className="rounded bg-indigo-500/10 dark:bg-indigo-500/20 px-1.5 py-0.5 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors"
                >
                  UPGRADE
                </button>
              )}
            </div>
            <p className="hidden text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:block">
              Connect the Dots to Wealth & Business Mastery
            </p>
          </div>
        </div>

        {/* Live User Stats Bar */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          
          {/* Rank Points (RP) Counter */}
          <button
            onClick={onOpenProfile}
            title="Rank Points (RP) — Klik untuk membuka Profil"
            className="flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 transition-all hover:border-amber-500/60 active:scale-95"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span className="tabular-nums font-bold">{progress.rankPoints}</span>
            <span className="text-[10px] text-amber-600 dark:text-amber-400/80">RP</span>
          </button>

          {/* Daily Streak */}
          <div 
            title="Daily Streak — Hari berturut-turut belajar di Nodus"
            className="flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-50 dark:bg-rose-500/10 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 transition-all"
          >
            <Flame className="h-3.5 w-3.5 text-rose-500 animate-bounce" />
            <span className="tabular-nums font-bold">{progress.streak}</span>
            <span className="hidden text-[10px] text-rose-600 dark:text-rose-400/80 sm:inline">Hari</span>
          </div>

          {/* Deep-Dive Credits (Click opens Paywall if empty) */}
          <button
            onClick={onOpenPaywall}
            title={isPro ? "Akses Pro: Kredit Deep-Dive Tanpa Batas" : "Sisa Kredit Deep-Dive — Klik untuk Upgrade"}
            className="hidden xs:flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-300 transition-all hover:border-indigo-500/60"
          >
            <Zap className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="tabular-nums font-bold">{isPro ? '∞' : progress.credits}</span>
            <span className="hidden text-[10px] text-indigo-600 dark:text-indigo-300/80 sm:inline">
              {isPro ? 'Pro' : 'Kredit'}
            </span>
          </button>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-0.5 hidden sm:block" />

          {/* Theme Toggle Button (Light/Dark Mode) */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Beralih ke Mode Terang (Light Mode)' : 'Beralih ke Mode Gelap (Dark Mode)'}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all active:scale-95 shadow-sm"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Guide / Help button */}
          <button
            onClick={onOpenHelp}
            title="Panduan Nodus"
            className="hidden sm:flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600 transition-all"
            aria-label="Panduan"
          >
            <HelpCircle className="h-4 w-4" />
          </button>

          {/* Settings / API Key button */}
          <button
            onClick={onOpenSettings}
            title="Pengaturan & Gemini API Key"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
            aria-label="Pengaturan"
          >
            <Settings className="h-4 w-4" />
          </button>

          {/* User Auth Button */}
          <button
            onClick={onOpenAuth}
            title={user ? `Akun: ${user.email}` : "Masuk / Daftar Akun"}
            className="flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-600 text-white px-2.5 sm:px-3 py-1.5 text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm shadow-indigo-500/20 active:scale-95"
          >
            {user ? (
              <div className="flex items-center gap-1.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400 text-slate-900 font-black text-[10px]">
                  {(user.displayName || user.email || 'U')[0].toUpperCase()}
                </div>
                <span className="hidden md:inline max-w-[80px] truncate text-[11px]">
                  {user.displayName?.split(' ')[0] || 'Profil'}
                </span>
              </div>
            ) : (
              <>
                <UserIcon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Masuk</span>
              </>
            )}
          </button>

        </div>

      </div>
    </header>
  );
};
