/** Tanggal lokal (YYYY-MM-DD). Bukan UTC, supaya pergantian hari terjadi tengah malam waktu pengguna. */
export const localDay = (d: Date = new Date()): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};
