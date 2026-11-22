// ==============================================================================
// NODUS — PENGINGAT BELAJAR
// Pengaturan pengingat harian + izin notifikasi browser. Di web, pengingat hanya
// bisa muncul saat NODUS terbuka (tab/PWA aktif). Pengingat latar belakang penuh
// butuh notifikasi lokal native; itu disambungkan saat dibungkus Capacitor
// (lihat docs/LAUNCH_CHECKLIST.md).
// ==============================================================================

export interface ReminderSettings {
  enabled: boolean;
  /** Format 24 jam "HH:MM". */
  time: string;
}

const KEY = 'nodus_reminder_v1';
export const DEFAULT_REMINDER: ReminderSettings = { enabled: false, time: '19:00' };

export const readReminder = (): ReminderSettings => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_REMINDER;
    const v = JSON.parse(raw) as Partial<ReminderSettings>;
    return { enabled: !!v.enabled, time: /^\d{2}:\d{2}$/.test(v.time || '') ? (v.time as string) : DEFAULT_REMINDER.time };
  } catch {
    return DEFAULT_REMINDER;
  }
};

export const writeReminder = (s: ReminderSettings): void => {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* penyimpanan tidak tersedia */ }
};

export const notificationsSupported = (): boolean => typeof window !== 'undefined' && 'Notification' in window;

export const notificationPermission = (): NotificationPermission | 'unsupported' =>
  notificationsSupported() ? Notification.permission : 'unsupported';

/** Minta izin. Mengembalikan status akhir. */
export const requestNotificationPermission = async (): Promise<NotificationPermission | 'unsupported'> => {
  if (!notificationsSupported()) return 'unsupported';
  try { return await Notification.requestPermission(); } catch { return Notification.permission; }
};

/** Milidetik sampai waktu pengingat berikutnya (hari ini bila belum lewat, selain itu besok). */
export const msUntil = (time: string, now: Date = new Date()): number => {
  const [h, m] = time.split(':').map(Number);
  const t = new Date(now);
  t.setHours(h, m, 0, 0);
  if (t.getTime() <= now.getTime()) t.setDate(t.getDate() + 1);
  return t.getTime() - now.getTime();
};

export const showReminder = (streak: number): void => {
  if (!notificationsSupported() || Notification.permission !== 'granted') return;
  const body = streak > 0 ? `Streak ${streak} harimu menunggu. Satu pelajaran singkat cukup untuk menjaganya.` : 'Satu pelajaran singkat hari ini membuat ilmumu terus bertumbuh.';
  try { new Notification('Waktunya belajar di NODUS', { body, icon: '/apple-touch-icon.png', tag: 'nodus-daily' }); } catch { /* abaikan */ }
};
