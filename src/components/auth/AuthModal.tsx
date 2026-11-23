import React, { useState } from 'react';
import { LogoMark } from '../brand/Logo';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, ArrowRight, Cloud, Eye, EyeOff, Lock, LogOut, Mail, ShieldCheck, Sparkles, User, AlertCircle, Repeat } from 'lucide-react';
import { useModal } from '../../lib/useModal';

interface AuthModalProps {
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  useModal(onClose);
  const { 
    user, 
    userProfile, 
    signInWithGoogle, 
    signInWithEmail, 
    signUpWithEmail, 
    logout, 
    authError, 
    clearError,
    isFirebaseActive 
  } = useAuth();

  const [tab, setTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsLoading(true);

    try {
      if (tab === 'login') {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, displayName);
      }
      onClose();
    } catch {
      // Error handled in AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      onClose();
    } catch {
      // Error handled in AuthContext
    } finally {
      setIsLoading(false);
    }
  };

  const input = 'w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-[#CF8E1F] focus:outline-none dark:border-slate-700 dark:bg-[#18202D] dark:text-white';
  const icon = 'pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400';

  return (
    <div className="fixed inset-0 z-[95] flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520] animate-fade-in" role="dialog" aria-modal="true" aria-label={user ? 'Akun NODUS' : 'Masuk ke NODUS'}>
      <div className="flex items-center justify-between px-4 py-3 sm:px-8" style={{ paddingTop: 'max(env(safe-area-inset-top, 0px), 12px)' }}>
        <button onClick={onClose} aria-label="Kembali" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <LogoMark size={32} />
        <span className="w-10" />
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="mx-auto w-full max-w-md px-6 pb-10 pt-4">
          {user ? (
            <div className="space-y-6">
              <div>
                <p className="eyebrow">Akun</p>
                <h1 className="mt-2 font-serif text-3xl font-semibold leading-tight text-slate-900 dark:text-white">Halo, {(user.displayName || 'Pembelajar').split(' ')[0]}</h1>
              </div>
              <div className="surface flex items-center gap-4 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#151517] text-xl font-extrabold text-[#E9C06B]">
                  {(user.displayName || user.email || 'U')[0].toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-bold text-slate-900 dark:text-white">{user.displayName || 'Pembelajar NODUS'}</p>
                  <p className="truncate text-sm text-slate-500 dark:text-slate-400">{user.email}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                    <ShieldCheck className="h-3.5 w-3.5" /> Progres tersinkron
                    {userProfile?.isPro && <span className="ml-1 rounded-full bg-[#E3A63A] px-2 py-0.5 text-[10px] font-extrabold text-[#151517]">PRO</span>}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="surface p-4"><p className="eyebrow">Rank Points</p><p className="mt-1 text-2xl font-extrabold text-[#9A6410] dark:text-[#E9C06B]">{userProfile?.rp ?? 0}</p></div>
                <div className="surface p-4"><p className="eyebrow">Kredit AI</p><p className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">{userProfile?.credits ?? 0}</p></div>
              </div>
              <button
                onClick={async () => { await logout(); onClose(); }}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-rose-500/30 bg-rose-50 py-3.5 text-sm font-bold text-rose-700 transition-colors hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20"
              >
                <LogOut className="h-4 w-4" /> Keluar dari akun
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <p className="eyebrow">{tab === 'login' ? 'Selamat datang kembali' : 'Buat akun gratis'}</p>
                <h1 className="mt-2 font-serif text-[34px] font-semibold leading-[1.1] text-slate-900 dark:text-white">Simpan progresmu, belajar di mana saja.</h1>
                <ul className="mt-5 space-y-2.5 text-[15px] text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-3"><Cloud className="h-4 w-4 shrink-0 text-[#9A6410] dark:text-[#E9C06B]" />Progres, stabilo, dan catatan tersimpan di cloud</li>
                  <li className="flex items-center gap-3"><Repeat className="h-4 w-4 shrink-0 text-[#9A6410] dark:text-[#E9C06B]" />Lanjut di ponsel, tablet, atau laptop</li>
                  <li className="flex items-center gap-3"><Sparkles className="h-4 w-4 shrink-0 text-[#9A6410] dark:text-[#E9C06B]" />Langganan Pro mengikuti akunmu</li>
                </ul>
              </div>

              {!isFirebaseActive && (
                <p className="rounded-2xl bg-[#FDF0D5] p-3.5 text-[13px] leading-relaxed text-[#5E3A08] dark:bg-[#E3A63A]/10 dark:text-[#F1D8A0]">
                  Layanan akun cloud belum dihubungkan pada versi ini, jadi masuk berjalan dalam mode lokal: datamu tersimpan di perangkat ini saja.
                </p>
              )}

              {authError && (
                <div role="alert" className="flex items-start gap-2 rounded-2xl bg-rose-50 p-3.5 text-[13px] text-rose-800 dark:bg-rose-500/15 dark:text-rose-200">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="flex-1">{authError}</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-3 rounded-full border border-slate-300 bg-white py-3.5 text-[15px] font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 active:scale-[0.99] disabled:opacity-50 dark:border-slate-600 dark:bg-[#18202D] dark:text-white dark:hover:bg-[#212B3B]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                Lanjutkan dengan Google
              </button>

              <div className="flex items-center gap-3 text-xs font-semibold text-slate-400">
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />atau dengan email<span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              </div>

              <div className="grid grid-cols-2 gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-white/5" role="tablist" aria-label="Masuk atau daftar">
                {(['login', 'register'] as const).map((t) => (
                  <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => { setTab(t); clearError(); }}
                    className={`rounded-xl py-2.5 text-sm font-bold transition-colors ${tab === t ? 'bg-white text-slate-900 shadow-sm dark:bg-[#FBF9F5] dark:text-[#0F1520]' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`}>
                    {t === 'login' ? 'Masuk' : 'Daftar'}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                {tab === 'register' && (
                  <div className="relative">
                    <User className={icon} />
                    <input type="text" required autoComplete="name" aria-label="Nama" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Nama kamu" className={input} />
                  </div>
                )}
                <div className="relative">
                  <Mail className={icon} />
                  <input type="email" required autoComplete="email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={input} />
                </div>
                <div className="relative">
                  <Lock className={icon} />
                  <input type={showPassword ? 'text' : 'password'} required minLength={6} autoComplete={tab === 'login' ? 'current-password' : 'new-password'} aria-label="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Kata sandi (min. 6 karakter)" className={`${input} !pr-12`} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                <button type="submit" disabled={isLoading} className="btn-gold w-full !py-4 text-base">
                  {isLoading ? 'Memproses…' : tab === 'login' ? 'Masuk' : 'Buat akun'} {!isLoading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              <button type="button" onClick={onClose} className="mx-auto block text-sm font-semibold text-slate-500 underline-offset-4 hover:underline dark:text-slate-400">Nanti saja, lanjut tanpa akun</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
