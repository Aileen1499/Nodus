// Peta pendek lama (4 pelajaran) yang isinya sudah tercakup penuh oleh jalur utama.
// Dipensiunkan dari daftar dan hitungan, dan pencariannya dialihkan ke jalur pengganti
// supaya pengguna tidak melihat dua jalur kembar dengan kedalaman berbeda.
export const RETIRED_PATHS: Record<string, string> = {
  'domain-bisnis-strategi': 'curriculum-bisnis-strategi-moat',
  'domain-psikologi-perilaku': 'curriculum-psikologi-perilaku-keputusan',
  'domain-ekonomi-keuangan': 'curriculum-ekonomi-makro-keuangan',
  'domain-geopolitik-sistem': 'mindmap-ekspor-impor-geopolitik',
};

/** Jalur utama (mendalam, berurutan) dibedakan dari "pendalaman topik" yang lebih pendek. */
export const isMainPath = (mapId: string): boolean => mapId.startsWith('curriculum-');
