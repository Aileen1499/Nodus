// ==============================================================================
// NODUS — PAKET & AKSES
// Satu sumber kebenaran untuk apa yang gratis dan apa yang Pro.
//
// BILLING_LIVE = false  → semua konten tetap terbuka (mode pra-peluncuran).
// BILLING_LIVE = true   → pembatasan Pro aktif. Nyalakan HANYA setelah penyedia
//                          pembayaran terhubung (lihat docs/LAUNCH_CHECKLIST.md),
//                          dengan env VITE_BILLING_LIVE=true.
// ==============================================================================

import { MindmapData, MindmapNode } from '../types';
import { getPathOrder } from './pathLogic';
import type { ToolId } from './curriculumBuilder';

export const BILLING_LIVE = (import.meta.env?.VITE_BILLING_LIVE as string | undefined) === 'true';

export const SUPPORT_EMAIL = ((import.meta.env?.VITE_SUPPORT_EMAIL as string | undefined) || '').trim();

export const PRICING = {
  monthly: { price: 59000, label: 'Bulanan', per: 'bulan' },
  yearly: { price: 399000, label: 'Tahunan', per: 'tahun', trialDays: 7 },
} as const;

export const yearlyPerMonth = Math.round(PRICING.yearly.price / 12);
export const yearlySavingPercent = Math.round((1 - PRICING.yearly.price / (PRICING.monthly.price * 12)) * 100);

/** Harga bila dibayar bulanan selama setahun: jangkar perbandingan yang jujur untuk paket tahunan. */
export const yearlyAsMonthly = PRICING.monthly.price * 12;
export const yearlySavingAmount = yearlyAsMonthly - PRICING.yearly.price;
export const yearlyPerDay = Math.round(PRICING.yearly.price / 365);

export const idr = (n: number): string => `Rp ${n.toLocaleString('id-ID')}`;

/** Jalur yang selalu gratis penuh: pintu masuk yang mengajarkan kebiasaan belajar. */
export const FREE_PATH_IDS: readonly string[] = ['curriculum-zero-to-hero-owner'];

/** Di jalur lain, berapa pelajaran pertama yang boleh dicoba gratis. */
export const FREE_PREVIEW_LESSONS = 2;

/** Alat yang gratis; sisanya Pro. */
export const FREE_TOOL_IDS: readonly ToolId[] = ['margin', 'breakeven', 'pricing'];

const isCuratedPath = (map: MindmapData): boolean => map.id.startsWith('curriculum-');

/** Apakah pelajaran ini terkunci karena paket (bukan karena prasyarat). */
export const isLessonPlanLocked = (map: MindmapData, node: MindmapNode, isPro: boolean): boolean => {
  if (!BILLING_LIVE || isPro) return false;
  if (!isCuratedPath(map) || FREE_PATH_IDS.includes(map.id)) return false;
  if (node.level === 0 || node.id === map.rootId) return false;
  const order = getPathOrder(map).filter((n) => n.level !== 0 && n.id !== map.rootId);
  const index = order.findIndex((n) => n.id === node.id);
  return index >= FREE_PREVIEW_LESSONS;
};

export const isToolPlanLocked = (tool: ToolId, isPro: boolean): boolean =>
  BILLING_LIVE && !isPro && !FREE_TOOL_IDS.includes(tool);

export const countProLessons = (maps: MindmapData[]): number =>
  maps.reduce((sum, m) => {
    if (!isCuratedPath(m) || FREE_PATH_IDS.includes(m.id)) return sum;
    const lessons = m.nodes.filter((n) => n.level !== 0 && n.id !== m.rootId).length;
    return sum + Math.max(0, lessons - FREE_PREVIEW_LESSONS);
  }, 0);

export type PaywallReason = 'lesson' | 'tool' | 'ai' | 'manual' | 'welcome';
