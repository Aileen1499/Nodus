// ==============================================================================
// NODUS — UNDANG TEMAN
// Kode undangan dibuat lokal dan ikut tautan bagikan. Hadiah belum otomatis:
// klaimnya butuh server (lihat docs/LAUNCH_CHECKLIST.md). Kode yang masuk lewat
// ?ref= dicatat supaya bisa diklaim saat server siap.
// ==============================================================================

import { SITE_URL } from './site';
import { SUPABASE_URL, SUPABASE_KEY, deviceId } from './waitlist';

const CODE_KEY = 'nodus_ref_code_v1';
const INCOMING_KEY = 'nodus_ref_in_v1';
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

export const getMyReferralCode = (seed?: string | null): string => {
  try {
    const saved = localStorage.getItem(CODE_KEY);
    if (saved) return saved;
  } catch { /* abaikan */ }
  let code = 'N-';
  const bytes = new Uint8Array(6);
  (window.crypto || ({} as Crypto)).getRandomValues?.(bytes);
  for (let i = 0; i < 6; i++) code += ALPHABET[(bytes[i] || Math.floor(Math.random() * 256)) % ALPHABET.length];
  if (seed) code = `N-${seed.replace(/[^A-Za-z0-9]/g, '').slice(0, 6).toUpperCase().padEnd(6, 'X')}`;
  try { localStorage.setItem(CODE_KEY, code); } catch { /* abaikan */ }
  return code;
};

export const shareUrl = (code: string): string => `${SITE_URL}/?ref=${encodeURIComponent(code)}`;

/** Catat kode undangan yang datang lewat tautan, lalu bersihkan dari URL. */
export const captureIncomingReferral = (): void => {
  try {
    const url = new URL(window.location.href);
    const ref = url.searchParams.get('ref');
    if (!ref || !/^[A-Za-z0-9-]{4,20}$/.test(ref)) return;
    if (!localStorage.getItem(INCOMING_KEY)) localStorage.setItem(INCOMING_KEY, ref);
    url.searchParams.delete('ref');
    window.history.replaceState({}, '', url.pathname + (url.search || '') + url.hash);
  } catch { /* abaikan */ }
};

/** Kode undangan teman yang membawa pengguna ini (bila ada). */
export const getIncomingReferral = (): string | null => {
  try { return localStorage.getItem(INCOMING_KEY); } catch { return null; }
};

// --- Pencatatan di server (Supabase). Hadiah baru diberikan saat Pro dibuka. ---

/** Hadiah: 1 bulan Pro gratis untuk pengundang dan teman, maksimal 3 bulan dari undangan. */
export const REFERRAL_MAX_MONTHS = 3;

const rpc = async <T,>(fn: string, body: Record<string, unknown>): Promise<T | null> => {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` },
      body: JSON.stringify(body),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch { return null; }
};

/** Daftarkan kode milik perangkat ini agar bisa dipakai teman. */
export const registerMyCode = (code: string): void => { void rpc('register_referral_code', { p_code: code, p_device: deviceId() }); };

export type ClaimResult = 'ok' | 'invalid' | 'own' | 'already' | 'unknown' | 'error';
export const claimReferral = async (code: string): Promise<ClaimResult> => {
  const r = await rpc<string>('claim_referral', { p_code: code.trim(), p_device: deviceId() });
  if (r === null) return 'error';
  return (['ok', 'invalid', 'own', 'already', 'unknown'].includes(r) ? r : 'error') as ClaimResult;
};

export const fetchReferralCount = async (code: string): Promise<number | null> => rpc<number>('referral_count', { p_code: code });

/** Kode dari tautan dikirim ke server sekali saja. */
export const claimIncomingIfAny = async (): Promise<void> => {
  try {
    const code = getIncomingReferral();
    if (!code || localStorage.getItem('nodus_ref_claimed_v1')) return;
    const r = await claimReferral(code);
    if (r !== 'error') localStorage.setItem('nodus_ref_claimed_v1', r);
  } catch { /* abaikan */ }
};
