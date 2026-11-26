// Nama panggilan pengguna, disimpan di perangkat. Dipakai untuk sapaan agar aplikasi terasa personal.
const KEY = 'nodus_name_v1';
export const getName = (): string => { try { return localStorage.getItem(KEY) || ''; } catch { return ''; } };
export const setName = (n: string): void => { try { localStorage.setItem(KEY, n.trim().slice(0, 30)); } catch { /* abaikan */ } };
export const firstName = (full?: string | null): string => (full || '').trim().split(/\s+/)[0] || '';
export const timeGreeting = (d = new Date()): string => {
  const h = d.getHours();
  return h >= 4 && h < 11 ? 'Selamat pagi' : h >= 11 && h < 15 ? 'Selamat siang' : h >= 15 && h < 18 ? 'Selamat sore' : 'Selamat malam';
};
