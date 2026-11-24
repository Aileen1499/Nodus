// ==============================================================================
// NODUS — DAFTAR TUNGGU
// Minat paket disimpan di perangkat dan dikirim ke Supabase lewat fungsi
// `join_waitlist` (tabel `waitlist` tertutup untuk klien; hanya fungsi tervalidasi
// yang boleh menulis). Kunci "publishable" memang aman berada di sisi klien.
// ==============================================================================
export const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL as string | undefined) || 'https://ujpuagdlqqckejhswqew.supabase.co';
export const SUPABASE_KEY = (import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined) || 'sb_publishable_-3Ce8m7Dx1-pe-tInHTt7w_ri4GzTRf';

const DEVICE_KEY = 'nodus_waitlist_device_v1';
const EMAIL_KEY = 'nodus_waitlist_email_v1';

export type WaitlistResult = 'synced' | 'local';

export const deviceId = (): string => {
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
  const email = (accountEmail || extraEmail || getWaitlistEmail() || '').trim().slice(0, 254);
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/join_waitlist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      body: JSON.stringify({
        p_id: uid || deviceId(),
        p_plans: plans.slice(0, 8),
        p_email: isValidEmail(email) ? email : null,
        p_uid: uid || null,
      }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return 'synced';
  } catch (e) {
    console.warn('Gagal menyimpan daftar tunggu:', e);
    return 'local';
  }
};
