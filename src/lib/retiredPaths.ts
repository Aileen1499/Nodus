// ==============================================================================
// NODUS — RETIRED PATHS
// Jalur pendek lama yang topiknya sudah dicakup jalur kurikulum yang lebih lengkap.
// Dipensiunkan supaya daftar jalur tidak kembar; id lama tetap dialihkan ke
// penggantinya sehingga tautan, pencarian, dan progres lama tidak rusak.
// ==============================================================================

export const RETIRED_PATHS: Record<string, string> = {
  'domain-bisnis-strategi': 'curriculum-bisnis-strategi-moat',
  'domain-psikologi-perilaku': 'curriculum-psikologi-perilaku-keputusan',
  'domain-ekonomi-keuangan': 'curriculum-ekonomi-makro-keuangan',
  'domain-pemasaran-sales': 'curriculum-pemasaran-brand',
};

export const isRetiredPath = (id: string): boolean => id in RETIRED_PATHS;
