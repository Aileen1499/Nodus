import React, { useState } from 'react';
import { LogoMark } from '../brand/Logo';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, ArrowRight, AlertCircle, Cloud, Crown, Eye, EyeOff, Flame, LogOut, Lock, Mail, ShieldCheck, User } from 'lucide-react';

interface AuthModalProps {
  onClose: () => void;
  onOpenLegal?: (kind: 'privacy' | 'terms') => void;
}

const BENEFITS = [
  { icon: Cloud, text: 'Progres tersinkron di semua perangkat' },
  { icon: Flame, text: 'Streak dan Rank Points tidak hilang' },
  { icon: Crown, text: 'Langganan Pro berlaku di mana pun' },
];

const GoogleMark = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const inputCls =
  'h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-[#CF8E1F] focus:outline-none focus:ring-4 focus:ring-[#E3A63A]/20 dark:border-white/10 dark:bg-[#18202D] dark:text-white dark:placeholder-slate-500';

/** Halaman masuk/daftar layar penuh. Mengelola juga tampilan akun saat sudah masuk. */
export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onOpenLegal }) => {
  const { user, userProfile, signInWithGoogle, signInWithEmail, signUpWithEmail, logout, authError, clearError, isFirebaseActive } = useAuth();

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
      if (tab === 'login') await signInWithEmail(email, password);
      else await signUpWithEmail(email, password, displayName);
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

  return (
    <div className="fixed inset-0 z-[90] flex flex-col bg-[#FBF9F5] text-slate-900 animate-fade-in dark:bg-[#0F1520] dark:text-white" role="dialog" aria-modal="true" aria-label={user ? 'Akun NODUS' : 'Masuk ke NODUS'}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_50%_-20%,rgba(227,166,58,0.22),transparent_70%)]" />

      <div className="relative flex items-center px-4 py-3 sm:px-8">
        <button onClick={onClose} aria-label="Kembali" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10">
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex-1 overflow-y-auto overflow-x-hidden pb-10">
        <div className="mx-auto w-full max-w-md px-6">
          {user ? (
            <div className="pt-4">
              <LogoMark size={56} />
              <h1 className="mt-5 font-serif text-3xl font-semibold leading-tight">Akun kamu</h1>
              <div className="mt-6 flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-[#18202D]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#151517] text-xl font-black text-[#E3A63A] dark:bg-[#E3A63A] dark:text-[#151517]">
                  {(user.displayName || user.email || 'U')[0].toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-base font-bold">{user.displayName || 'Pembelajar NODUS'}</p>
                  <p className="truncate text-sm text-slate-500 dark:text-slate-400">{user.email}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-3.5 w-3.5" /> Tersinkron
                    {userProfile?.isPro && <span className="ml-1 rounded-full bg-[#E3A63A] px-2 py-0.5 text-[10px] font-extrabold text-[#151517]">PRO</span>}
                  </p>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#18202D]">
                  <p className="eyebrow">Rank Points</p>
                  <p className="mt-1 text-2xl font-extrabold text-[#9A6410] dark:text-[#E9C06B]">{userProfile?.rp ?? 0}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#18202D]">
                  <p className="eyebrow">Kredit mentor AI</p>
                  <p className="mt-1 text-2xl font-extrabold">{userProfile?.credits ?? 0}</p>
                </div>
              </div>
              <button
                onClick={async () => { await logout(); onClose(); }}
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-rose-500/30 bg-rose-50 text-sm font-bold text-rose-600 transition-colors hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-300 dark:hover:bg-rose-500/20"
              >
                <LogOut className="h-4 w-4" /> Keluar dari akun
              </button>
            </div>
          ) : (
            <div className="pt-2">
              <LogoMark size={56} />
              <h1 className="mt-5 font-serif text-[32px] font-semibold leading-[1.1]">
                {tab === 'login' ? 'Selamat datang kembali' : 'Mulai perjalananmu'}
              </h1>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                {tab === 'login' ? 'Masuk untuk melanjutkan belajar dari tempat terakhirmu.' : 'Buat akun gratis agar progres belajarmu aman dan ikut ke mana pun.'}
              </p>

              <ul className="mt-5 space-y-2">
                {BENEFITS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3A63A]/15 text-[#9A6410] dark:text-[#E9C06B]"><Icon className="h-4 w-4" /></span>
                    {text}
                  </li>
                ))}
              </ul>

              {authError && (
                <div className="mt-5 flex items-start gap-2 rounded-2xl border border-rose-500/40 bg-rose-50 p-3.5 text-sm text-rose-800 dark:bg-rose-500/15 dark:text-rose-200" role="alert">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" />
                  <span className="flex-1">{authError}</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white text-[15px] font-bold text-slate-800 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.99] disabled:opacity-60 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <GoogleMark /> Lanjutkan dengan Google
              </button>

              <div className="my-5 flex items-center gap-3 text-xs text-slate-400">
                <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />atau dengan email<span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
              </div>

              <div className="grid grid-cols-2 gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-white/5" role="tablist">
                {([['login', 'Masuk'], ['register', 'Daftar']] as const).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={tab === id}
                    onClick={() => { setTab(id); clearError(); }}
                    className={`rounded-xl py-2.5 text-sm font-bold transition-colors ${tab === id ? 'bg-white text-slate-900 shadow-sm dark:bg-[#FBF9F5] dark:text-[#0F1520]' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                {tab === 'register' && (
                  <div className="relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input type="text" required autoComplete="name" aria-label="Nama" value={displayName} onChange={(e) => setDisplayName(e.target.value)} placeholder="Nama lengkap" className={inputCls} />
                  </div>
                )}
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input type="email" required autoComplete="email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Alamat email" className={inputCls} />
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    minLength={6}
                    autoComplete={tab === 'login' ? 'current-password' : 'new-password'}
                    aria-label="Kata sandi"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Kata sandi (minimal 6 karakter)"
                    className={`${inputCls} pr-12`}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'} className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>

                <button type="submit" disabled={isLoading} className="btn-gold !h-12 w-full !text-[15px]">
                  {isLoading ? 'Memproses…' : tab === 'login' ? 'Masuk' : 'Buat akun'} {!isLoading && <ArrowRight className="h-4 w-4" />}
                </button>
              </form>

              {!isFirebaseActive && (
                <p className="mt-4 rounded-xl bg-slate-100 px-3.5 py-2.5 text-xs leading-relaxed text-slate-500 dark:bg-white/5 dark:text-slate-400">
                  Mode demo: akun saat ini hanya tersimpan di perangkat ini dan belum tersinkron ke cloud.
                </p>
              )}

              <p className="mt-5 text-center text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Dengan melanjutkan, kamu menyetujui{' '}
                <button type="button" onClick={() => onOpenLegal?.('terms')} className="font-semibold underline underline-offset-2">Ketentuan Layanan</button> dan{' '}
                <button type="button" onClick={() => onOpenLegal?.('privacy')} className="font-semibold underline underline-offset-2">Kebijakan Privasi</button>.
              </p>

              <button type="button" onClick={onClose} className="mx-auto mt-4 block text-sm font-semibold text-slate-500 underline-offset-4 hover:underline dark:text-slate-400">
                Nanti saja, lanjut tanpa akun
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
