// Alamat publik NODUS untuk semua tautan bagikan. Jangan pakai window.location.origin:
// alamat preview/cabang Vercel bisa meminta login. Ganti lewat VITE_PUBLIC_URL bila
// nanti memakai domain sendiri.
export const SITE_URL = (((import.meta.env?.VITE_PUBLIC_URL as string | undefined) || 'https://nodus-indol.vercel.app').trim()).replace(/\/+$/, '');
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '');
