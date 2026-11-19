// Lapisan pembayaran yang tidak terikat penyedia. Penyedia nyata (RevenueCat untuk
// App Store/Play Store, atau Midtrans/Xendit untuk web) didaftarkan sekali di sini.
// Hak akses Pro HARUS ditetapkan server (webhook penyedia → Firestore users/{uid}.isPro),
// bukan oleh klien. Lihat docs/LAUNCH_CHECKLIST.md.

export type PlanId = 'monthly' | 'yearly';
export type CheckoutResult = 'redirected' | 'purchased' | 'cancelled';

export interface BillingProvider {
  startCheckout(plan: PlanId, uid: string | null): Promise<CheckoutResult>;
  restorePurchases(uid: string | null): Promise<boolean>;
}

let provider: BillingProvider | null = null;

export const registerBillingProvider = (p: BillingProvider) => {
  provider = p;
};

export const isBillingConfigured = (): boolean => provider !== null;

export const startCheckout = async (plan: PlanId, uid: string | null): Promise<CheckoutResult> => {
  if (!provider) throw new Error('Pembayaran belum tersedia. Coba lagi nanti.');
  return provider.startCheckout(plan, uid);
};

export const restorePurchases = async (uid: string | null): Promise<boolean> => {
  if (!provider) throw new Error('Pembayaran belum tersedia. Coba lagi nanti.');
  return provider.restorePurchases(uid);
};
