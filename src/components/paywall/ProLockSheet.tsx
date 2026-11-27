import React from 'react';
import { Check, Lock, X } from 'lucide-react';
import { Portal } from '../common/Portal';
import { useModal } from '../../lib/useModal';
import { BILLING_LIVE, PaywallReason, PRICING, idr, yearlyPerMonth } from '../../lib/plans';

const COPY: Record<PaywallReason, { title: string; text: string; bullets: string[] }> = {
  lesson: { title: 'Pelajaran ini bagian dari Pro', text: 'Kamu sudah mencoba pelajaran pembuka jalur ini. Pro membuka sisanya sampai tuntas.', bullets: ['Semua pelajaran di semua jalur', 'Kuis dan kasus keputusan di setiap pelajaran', 'Sertifikat saat jalur selesai'] },
  tool: { title: 'Alat ini bagian dari Pro', text: 'Hitung angka bisnismu sendiri dengan alat yang siap pakai.', bullets: ['Arus kas, stok, unit economics, investasi', 'Hasil bisa disimpan dan diunduh', 'Alat baru tanpa biaya tambahan'] },
  ai: { title: 'Kuota mentor AI hari ini habis', text: 'Kuota gratis dihitung per hari. Pro memperbesar kuotanya.', bullets: ['Kuota tanya dan bedah topik lebih besar', 'Jalur yang disusun sesuai pertanyaanmu', 'Kuota gratis kembali besok'] },
  case: { title: 'Simulasi ini bagian dari Pro', text: 'Dua simulasi pertama gratis. Simulasi lain membuka bisnis dengan faktor penentu yang berbeda.', bullets: ['Semua studi kasus bertahan atau bangkrut', 'Bedah faktor penentu di tiap kasus', 'Kasus baru ditambahkan berkala'] },
  story: { title: 'Kisah ini bagian dari Pro', text: 'Lima kisah pertama gratis. Kisah lain membedah perusahaan dan model bisnis lain.', bullets: ['Semua kisah sukses dan bangkrut', 'Tebak dulu, lalu pelajari konsep di baliknya', 'Kisah baru ditambahkan berkala'] },
  welcome: { title: 'NODUS Pro', text: 'Semua jalur, semua alat, dan latihan yang menjaga ilmumu tetap ingat.', bullets: ['Semua jalur sampai tuntas', 'Semua alat bisnis', 'Sertifikat penyelesaian'] },
  manual: { title: 'NODUS Pro', text: 'Semua jalur, semua alat, dan latihan yang menjaga ilmumu tetap ingat.', bullets: ['Semua jalur sampai tuntas', 'Semua alat bisnis', 'Sertifikat penyelesaian'] },
};

/** Pop-up kecil saat pengguna mengetuk fitur Pro: jelaskan dulu, baru tawarkan halaman paket. */
export const ProLockSheet: React.FC<{ reason: PaywallReason; onSeePlans: () => void; onClose: () => void }> = ({ reason, onSeePlans, onClose }) => {
  useModal(onClose);
  const c = COPY[reason];
  return (
    <Portal>
      <div className="fixed inset-0 z-[130] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label={c.title}>
        <button aria-label="Tutup" onClick={onClose} className="absolute inset-0 touch-none bg-black/55 backdrop-blur-sm animate-fade-in" />
        <div className="relative w-full max-w-sm rounded-t-[28px] border border-slate-200/70 bg-[#FBF9F5] p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-2xl animate-sheet-up dark:border-white/10 dark:bg-[#1C1C1F] sm:rounded-[28px]">
          <button onClick={onClose} aria-label="Tutup" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200"><X className="h-4 w-4" /></button>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]"><Lock className="h-6 w-6" /></span>
          <h3 className="mt-4 font-serif text-2xl font-semibold leading-tight text-slate-900 dark:text-white">{c.title}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600 dark:text-slate-300">{c.text}</p>
          <ul className="mt-4 space-y-2">
            {c.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[14px] font-medium text-slate-800 dark:text-slate-100">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3A63A] text-[#151517]"><Check className="h-3 w-3" strokeWidth={3} /></span>{b}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[13px] text-slate-500 dark:text-slate-400">Mulai {idr(yearlyPerMonth)} per bulan di paket tahunan, dengan uji coba {PRICING.yearly.trialDays} hari.</p>
          <button onClick={onSeePlans} className="btn-gold mt-4 w-full py-3.5 text-base">{BILLING_LIVE ? 'Lihat paket Pro' : 'Lihat paket & kabari saya'}</button>
          <button onClick={onClose} className="mt-2 w-full rounded-full py-3 text-sm font-bold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5">Nanti saja</button>
          <p className="mt-2 text-center text-[11.5px] text-slate-400 dark:text-slate-500">Ketuk tombol emas di atas untuk membuka halaman paket Pro.</p>
        </div>
      </div>
    </Portal>
  );
};
