import React, { useEffect } from 'react';
import { ArrowRight, Compass, Network, Wrench, X } from 'lucide-react';
import { LogoMark, NodeConstellation } from './Logo';

interface WelcomeScreenProps {
  onStart: () => void;
  onExplore: () => void;
  onClose: () => void;
}

const PILLARS = [
  { icon: Compass, title: 'Jalur belajar terarah', text: '23 jalur dari nol sampai mahir, selangkah demi selangkah.' },
  { icon: Network, title: 'Peta pengetahuan', text: 'Lihat bagaimana konsep bisnis, ekonomi, dan keuangan saling terhubung.' },
  { icon: Wrench, title: 'Alat & latihan keputusan', text: 'Kalkulator, studi kasus, dan kuis harian agar ilmu jadi kemampuan.' },
];

/** Layar sambutan bermerek. Tampil sekali di kunjungan pertama; bisa dibuka lagi dari logo di header. */
export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onExplore, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label="Selamat datang di NODUS" className="fixed inset-0 z-[80] overflow-y-auto bg-[#151517] text-[#FBF9F5] animate-fade-in">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(227,166,58,0.20),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(227,166,58,0.10),transparent_50%)]" />
      <NodeConstellation className="pointer-events-none absolute -right-16 top-10 w-[520px] max-w-none opacity-70 sm:right-0 sm:top-16 sm:w-[640px] sm:opacity-50" />

      <button onClick={onClose} aria-label="Tutup" className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#FBF9F5] transition-colors hover:bg-white/20">
        <X className="h-5 w-5" />
      </button>

      <div className="relative mx-auto flex min-h-full max-w-3xl flex-col justify-center px-6 py-14 sm:py-20">
        <div className="animate-sheet-up">
          <LogoMark size={72} />
          <p className="mt-6 font-serif text-sm font-semibold tracking-[0.32em] text-[#E3A63A]">NODUS</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-[1.1] sm:text-6xl">
            Hubungkan pengetahuan.<br />
            <span className="text-[#E3A63A]">Bangun kemampuan bisnis.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#FBF9F5]/70 sm:text-lg">
            Belajar bisnis, ekonomi, dan keuangan dalam bahasa Indonesia. Bukan sekadar membaca materi, tetapi memahami hubungan antar konsep lalu berlatih mengambil keputusan.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={onStart} className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base">
              Mulai belajar <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={onExplore} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-[#FBF9F5] transition-colors hover:bg-white/10">
              Lihat semua kurikulum
            </button>
          </div>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <Icon className="h-5 w-5 text-[#E3A63A]" />
              <p className="mt-3 text-sm font-bold">{title}</p>
              <p className="mt-1 text-[13px] leading-relaxed text-[#FBF9F5]/60">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs text-[#FBF9F5]/40">Hubungkan · Pahami · Putuskan</p>
      </div>
    </div>
  );
};
