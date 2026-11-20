import React, { useEffect } from 'react';
import { ArrowRight, Check, Crown } from 'lucide-react';
import { BILLING_LIVE, PRICING, idr, yearlyAtMonthlyRate, yearlyPerDay, yearlySavingPercent } from '../../lib/plans';

interface ProOfferSheetProps {
  onSeePlans: () => void;
  onDismiss: () => void;
}

/** Penawaran Pro singkat saat aplikasi dibuka. Tampil paling sering sekali per 24 jam. */
export const ProOfferSheet: React.FC<ProOfferSheetProps> = ({ onSeePlans, onDismiss }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onDismiss(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 z-[75] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Penawaran NODUS Pro">
      <button aria-label="Tutup penawaran" onClick={onDismiss} className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
      <div className="relative w-full max-w-md overflow-hidden rounded-t-[32px] border border-[#E3A63A]/40 bg-gradient-to-b from-[#1B2436] to-[#0B1019] px-6 pb-7 pt-6 text-[#FBF9F5] shadow-[0_-20px_60px_-20px_rgba(227,166,58,0.5)] animate-sheet-up sm:rounded-[32px]">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-44 w-72 -translate-x-1/2 rounded-full bg-[#E3A63A]/25 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E3A63A]/40 bg-[#E3A63A]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#F3C766]">
            <Crown className="h-3.5 w-3.5" /> {BILLING_LIVE ? 'NODUS Pro' : 'NODUS Pro segera hadir'}
          </span>
          <h2 className="mt-3 font-serif text-[28px] font-semibold leading-[1.1]">Buka semua jalur dan alat bisnis</h2>

          <ul className="mt-4 space-y-2 text-[14px] text-[#FBF9F5]/85">
            {['Semua jalur belajar tanpa batas', 'Semua alat: arus kas, stok, unit economics, investasi', 'Sertifikat untuk tiap jalur yang tuntas'].map((t) => (
              <li key={t} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#F3C766]" />{t}</li>
            ))}
          </ul>

          <div className="mt-5 flex items-end justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3.5">
            <div>
              <p className="text-xs text-[#FBF9F5]/45 line-through decoration-rose-400/80 decoration-2 tabular-nums">{idr(yearlyAtMonthlyRate)}</p>
              <p className="mt-0.5 bg-gradient-to-b from-[#FFE9B0] via-[#F3C766] to-[#CF8E1F] bg-clip-text text-[30px] font-extrabold leading-none tracking-tight text-transparent tabular-nums">{idr(PRICING.yearly.price)}</p>
              <p className="mt-1 text-xs text-[#FBF9F5]/60">per tahun · {idr(yearlyPerDay)} per hari</p>
            </div>
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-300">Hemat {yearlySavingPercent}%</span>
          </div>

          <button onClick={onSeePlans} className="btn-gold mt-5 w-full !py-3.5 text-base">
            Lihat paket Pro <ArrowRight className="h-4 w-4" />
          </button>
          <button onClick={onDismiss} className="mx-auto mt-3 block text-sm font-semibold text-[#FBF9F5]/55 hover:text-[#FBF9F5]">Nanti saja</button>
        </div>
      </div>
    </div>
  );
};
