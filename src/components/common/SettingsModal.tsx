import React, { useState } from 'react';
import { ArrowLeft, Bell, ChevronRight, Crown, FileText, HelpCircle, LogOut, Moon, ShieldCheck, Sun, Trash2, User as UserIcon } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { BILLING_LIVE, SUPPORT_EMAIL } from '../../lib/plans';
import { InviteCard } from '../growth/InviteCard';
import { notificationPermission, readReminder, requestNotificationPermission, writeReminder, ReminderSettings } from '../../lib/reminder';

interface SettingsModalProps {
  onClose: () => void;
  onOpenAuth: () => void;
  onOpenPlans: () => void;
  onOpenHelp: () => void;
  onOpenLegal: (kind: 'privacy' | 'terms') => void;
}

const APP_VERSION = '1.0.0';

const Group: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mt-7">
    <h3 className="eyebrow mb-2 px-1">{title}</h3>
    <div className="divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#18202D]">{children}</div>
  </section>
);

const Row: React.FC<{ icon: React.ReactNode; label: string; hint?: string; onClick?: () => void; danger?: boolean; right?: React.ReactNode }> = ({ icon, label, hint, onClick, danger, right }) => {
  const body = (
    <>
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${danger ? 'bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-300' : 'bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]'}`}>{icon}</span>
      <span className="min-w-0 flex-1 text-left">
        <span className={`block text-[15px] font-semibold ${danger ? 'text-rose-700 dark:text-rose-300' : 'text-slate-900 dark:text-white'}`}>{label}</span>
        {hint && <span className="mt-0.5 block text-[13px] leading-snug text-slate-500 dark:text-slate-400">{hint}</span>}
      </span>
      {right ?? (onClick && <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />)}
    </>
  );
  return onClick ? (
    <button onClick={onClick} className="flex w-full items-center gap-3 px-4 py-3.5 transition-colors hover:bg-slate-50 dark:hover:bg-white/5">{body}</button>
  ) : (
    <div className="flex w-full items-center gap-3 px-4 py-3.5">{body}</div>
  );
};

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose, onOpenAuth, onOpenPlans, onOpenHelp, onOpenLegal }) => {
  const { theme, toggleTheme } = useTheme();
  const { resetProgress, isPro } = useUser();
  const { user, logout, deleteAccount } = useAuth();
  const [confirm, setConfirm] = useState<null | 'reset' | 'delete'>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [reminder, setReminder] = useState<ReminderSettings>(readReminder);
  const [perm, setPerm] = useState(notificationPermission());

  const updateReminder = (next: ReminderSettings) => { setReminder(next); writeReminder(next); window.dispatchEvent(new Event('nodus-reminder')); };
  const toggleReminder = async () => {
    if (reminder.enabled) { updateReminder({ ...reminder, enabled: false }); return; }
    const res = await requestNotificationPermission();
    setPerm(res);
    updateReminder({ ...reminder, enabled: true });
  };

  const doReset = () => { resetProgress(); setConfirm(null); onClose(); };
  const doDelete = async () => {
    setBusy(true);
    setError(null);
    try {
      await deleteAccount();
      setConfirm(null);
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Akun belum bisa dihapus.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] pt-[env(safe-area-inset-top)] flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520] animate-fade-in" role="dialog" aria-modal="true" aria-label="Pengaturan">
      <div className="flex items-center gap-3 border-b border-slate-200/80 px-4 py-3 dark:border-white/10 sm:px-8">
        <button onClick={onClose} aria-label="Kembali" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div>
          <p className="eyebrow">NODUS</p>
          <h2 className="font-serif text-xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-2xl">Pengaturan</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <div className="mx-auto w-full max-w-2xl px-5 pb-16 sm:px-7">
          <Group title="Akun">
            {user ? (
              <>
                <Row icon={<UserIcon className="h-4 w-4" />} label={user.displayName || 'Akun saya'} hint={user.email || undefined} right={<span />} />
                <Row icon={<LogOut className="h-4 w-4" />} label="Keluar" onClick={() => { void logout(); }} />
              </>
            ) : (
              <Row icon={<UserIcon className="h-4 w-4" />} label="Masuk atau daftar" hint="Pulihkan kemajuan dan pakai di perangkat lain." onClick={onOpenAuth} />
            )}
          </Group>

          <Group title="Paket">
            <Row icon={<Crown className="h-4 w-4" />} label={isPro ? 'NODUS Pro aktif' : BILLING_LIVE ? 'Upgrade ke Pro' : 'Lihat paket NODUS Pro'} hint={isPro ? 'Terima kasih sudah mendukung NODUS.' : 'Semua jalur dan semua alat bisnis.'} onClick={onOpenPlans} />
          </Group>

          <Group title="Kebiasaan belajar">
            <Row
              icon={<Bell className="h-4 w-4" />}
              label="Pengingat harian"
              hint={reminder.enabled ? (perm === 'denied' ? 'Izin notifikasi ditolak di browser. Pengingat dalam aplikasi tetap tampil.' : 'Muncul saat NODUS terbuka. Pengingat di latar belakang aktif di aplikasi Android dan iPhone.') : 'Jaga streak dengan satu pelajaran singkat per hari.'}
              onClick={toggleReminder}
              right={<span role="switch" aria-checked={reminder.enabled} className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${reminder.enabled ? 'bg-[#E3A63A]' : 'bg-slate-300 dark:bg-slate-700'}`}><span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${reminder.enabled ? 'left-6' : 'left-1'}`} /></span>}
            />
            {reminder.enabled && (
              <label className="flex items-center justify-between gap-3 px-4 py-3.5">
                <span className="text-[15px] font-semibold text-slate-900 dark:text-white">Jam pengingat</span>
                <input type="time" value={reminder.time} onChange={(e) => e.target.value && updateReminder({ ...reminder, time: e.target.value })} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-base font-bold text-slate-900 focus:border-[#CF8E1F] focus:outline-none dark:border-slate-700 dark:bg-[#0F1520] dark:text-white" />
              </label>
            )}
            <InviteCard />
          </Group>

          <Group title="Tampilan">
            <Row icon={theme === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />} label={theme === 'dark' ? 'Mode gelap' : 'Mode terang'} hint="Ketuk untuk berganti." onClick={toggleTheme} />
          </Group>

          <Group title="Bantuan">
            <Row icon={<HelpCircle className="h-4 w-4" />} label="Panduan NODUS" onClick={onOpenHelp} />
            <Row icon={<ShieldCheck className="h-4 w-4" />} label="Kebijakan Privasi" onClick={() => onOpenLegal('privacy')} />
            <Row icon={<FileText className="h-4 w-4" />} label="Ketentuan Layanan" onClick={() => onOpenLegal('terms')} />
            {SUPPORT_EMAIL && <Row icon={<HelpCircle className="h-4 w-4" />} label="Hubungi kami" hint={SUPPORT_EMAIL} onClick={() => { window.location.href = `mailto:${SUPPORT_EMAIL}`; }} />}
          </Group>

          <Group title="Data">
            {confirm === 'reset' ? (
              <div className="space-y-3 p-4">
                <p className="text-sm font-bold text-rose-700 dark:text-rose-300">Hapus semua progres, stabilo, dan catatan di perangkat ini?</p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">Tindakan ini tidak bisa dibatalkan.</p>
                <div className="flex gap-2">
                  <button onClick={doReset} className="rounded-full bg-rose-600 px-4 py-2 text-sm font-bold text-white hover:bg-rose-700">Ya, reset</button>
                  <button onClick={() => setConfirm(null)} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 dark:border-white/20 dark:text-slate-200">Batal</button>
                </div>
              </div>
            ) : (
              <Row icon={<Trash2 className="h-4 w-4" />} label="Reset progres" hint="Mengembalikan poin, penguasaan, stabilo, dan catatan ke awal." danger onClick={() => setConfirm('reset')} />
            )}
            {user && (confirm === 'delete' ? (
              <div className="space-y-3 p-4">
                <p className="text-sm font-bold text-rose-700 dark:text-rose-300">Hapus akun dan semua data di server?</p>
                <p className="text-[13px] text-slate-500 dark:text-slate-400">Akunmu, poin, dan kemajuan yang tersinkron akan dihapus permanen. Langganan aktif harus kamu batalkan sendiri di akun toko aplikasimu.</p>
                {error && <p role="alert" className="text-[13px] font-semibold text-rose-600 dark:text-rose-300">{error}</p>}
                <div className="flex gap-2">
                  <button onClick={doDelete} disabled={busy} className="rounded-full bg-rose-600 px-4 py-2 text-sm font-bold text-white hover:bg-rose-700 disabled:opacity-50">{busy ? 'Menghapus…' : 'Ya, hapus akun'}</button>
                  <button onClick={() => { setConfirm(null); setError(null); }} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-700 dark:border-white/20 dark:text-slate-200">Batal</button>
                </div>
              </div>
            ) : (
              <Row icon={<Trash2 className="h-4 w-4" />} label="Hapus akun" hint="Menghapus akun dan data di server secara permanen." danger onClick={() => setConfirm('delete')} />
            ))}
          </Group>

          <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">NODUS versi {APP_VERSION}</p>
        </div>
      </div>
    </div>
  );
};
