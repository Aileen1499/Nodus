// ==============================================================================
// NODUS — DAFTAR TUNGGU
// Minat paket disimpan di perangkat dan, bila Firebase aktif, dikirim ke
// koleksi Firestore `waitlist` supaya pemilik produk bisa melihat dan mengabari.
// Klien hanya boleh membuat/memperbarui dokumennya sendiri (lihat firestore.rules).
// ==============================================================================
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db, isFirebaseConfigured } from './firebase';

const DEVICE_KEY = 'nodus_waitlist_device_v1';
const EMAIL_KEY = 'nodus_waitlist_email_v1';

export type WaitlistResult = 'synced' | 'local';

const deviceId = (): string => {
  try {
    const saved = localStorage.getItem(DEVICE_KEY);
    if (saved) return saved;
    const bytes = new Uint8Array(12);
    crypto.getRandomValues(bytes);
    const id = 'd' + Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
    localStorage.setItem(DEVICE_KEY, id);
    return id;
  } catch {
    return 'd' + Math.random().toString(16).slice(2, 14).padEnd(12, '0');
  }
};

export const getWaitlistEmail = (): string => {
  try { return localStorage.getItem(EMAIL_KEY) || ''; } catch { return ''; }
};

export const isValidEmail = (v: string): boolean => /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/.test(v.trim());

/** Kirim seluruh minat paket milik perangkat/akun ini. `plans` kosong berarti keluar dari daftar. */
export const syncWaitlist = async (plans: string[], uid?: string | null, accountEmail?: string | null, extraEmail?: string): Promise<WaitlistResult> => {
  if (extraEmail !== undefined) {
    try { localStorage.setItem(EMAIL_KEY, extraEmail.trim()); } catch { /* abaikan */ }
  }
  if (!db || !isFirebaseConfigured) return 'local';
  const email = (accountEmail || extraEmail || getWaitlistEmail() || '').trim().slice(0, 254);
  try {
    await setDoc(doc(db, 'waitlist', uid || deviceId()), {
      plans: plans.slice(0, 8),
      email: email || null,
      uid: uid || null,
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return 'synced';
  } catch (e) {
    console.warn('Gagal menyimpan daftar tunggu:', e);
    return 'local';
  }
};
