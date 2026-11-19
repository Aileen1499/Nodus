import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, Compass, Network, Repeat, ShieldCheck, Target, Wrench } from 'lucide-react';
import { LogoMark, NodeConstellation } from './Logo';
import { allMaps } from '../../lib/nodeIndex';
import { TOOLS } from '../tools/ToolkitView';

interface WelcomeScreenProps {
  /** Masuk ke aplikasi (peta belajar). */
  onStart: () => void;
  /** Buka lembar masuk/daftar. */
  onLogin: () => void;
}

const PILLARS = [
  { icon: Compass, title: 'Jalur belajar terarah', text: 'Dari nol sampai mahir, selangkah demi selangkah.' },
  { icon: Network, title: 'Peta pengetahuan', text: 'Lihat bagaimana konsep bisnis, ekonomi, dan keuangan saling terhubung.' },
  { icon: Wrench, title: 'Alat & latihan keputusan', text: 'Kalkulator, studi kasus, dan kuis harian agar ilmu jadi kemampuan.' },
];

const STEPS = [
  { icon: BookOpen, title: 'Baca ringkas', text: 'Pelajaran pendek dengan kerangka berpikir yang jelas.' },
  { icon: Target, title: 'Cek paham', text: 'Kuis dan simulasi keputusan. Lulus baru terbuka ke langkah berikutnya.' },
  { icon: Repeat, title: 'Ulangi tepat waktu', text: 'Latihan harian mengingatkan materi sebelum terlupa.' },
  { icon: ShieldCheck, title: 'Kuasai & simpan', text: 'Konsep, stabilo, dan catatanmu tersimpan rapi di Brankas.' },
];

/** Layar sambutan bermerek. Perkenalan, bukan gerbang login: tidak bisa ditutup dengan X, hanya lewat tombol. */
export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, onLogin }) => {
  const [view, setView] = useState<'intro' | 'preview'>('intro');
  const maps = useMemo(() => allMaps(), []);
  const lessons = maps.reduce((n, m) => n + m.nodes.length, 0);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Selamat datang di NODUS"
      className="fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto overscroll-x-none bg-[#151517] text-[#FBF9F5] animate-fade-in [touch-action:pan-y]"
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(227,166,58,0.20),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(227,166,58,0.10),transparent_50%)]" />
        <NodeConstellation className="absolute -right-24 top-10 w-[520px] max-w-none opacity-60 sm:right-0 sm:top-16 sm:w-[640px] sm:opacity-50" />
      </div>

      {view === 'intro' ? (
        <div className="relative mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center px-6 py-14 sm:py-20">
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
              <button onClick={() => setView('preview')} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base font-semibold text-[#FBF9F5] transition-colors hover:bg-white/10">
                Intip isi kurikulum
              </button>
            </div>
            <p className="mt-5 text-sm text-[#FBF9F5]/55">
              Sudah punya akun?{' '}
              <button onClick={onLogin} className="font-bold text-[#E3A63A] underline-offset-4 hover:underline">Masuk</button>
            </p>
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
        </div>
      ) : (
        <div className="relative mx-auto w-full max-w-3xl px-6 pb-40 pt-8 animate-sheet-up">
          <button onClick={() => setView('intro')} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/20">
            <ArrowLeft className="h-4 w-4" /> Kembali
          </button>

          <p className="eyebrow mt-8 !text-[#E3A63A]">Isi kurikulum</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold leading-tight sm:text-5xl">Satu platform, {maps.length} jalur belajar.</h2>

          <div className="mt-6 grid grid-cols-3 gap-2 text-center">
            {[[maps.length, 'jalur'], [lessons, 'pelajaran'], [TOOLS.length, 'alat bisnis']].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.04] py-4">
                <p className="font-serif text-3xl font-semibold text-[#E3A63A] tabular-nums">{n}</p>
                <p className="mt-1 text-xs text-[#FBF9F5]/60">{l}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.14em] text-[#FBF9F5]/60">Cara belajarnya</h3>
          <ol className="mt-3 grid gap-2 sm:grid-cols-2">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E3A63A]/15 text-[#E3A63A]"><Icon className="h-4 w-4" /></span>
                <div className="min-w-0">
                  <p className="text-sm font-bold">{i + 1}. {title}</p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-[#FBF9F5]/60">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-10 text-sm font-bold uppercase tracking-[0.14em] text-[#FBF9F5]/60">Jalur yang tersedia</h3>
          <ul className="mt-3 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            {maps.map((m) => (
              <li key={m.id} className="flex items-center gap-3 px-4 py-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#E3A63A]" />
                <span className="min-w-0 flex-1 truncate text-sm font-semibold">{m.topic}</span>
                <span className="shrink-0 text-xs tabular-nums text-[#FBF9F5]/50">{m.nodes.length} pelajaran</span>
              </li>
            ))}
          </ul>

          <div className="fixed inset-x-0 bottom-0 bg-gradient-to-t from-[#151517] via-[#151517]/95 to-transparent px-6 pb-6 pt-10">
            <div className="mx-auto max-w-3xl">
              <button onClick={onStart} className="btn-gold flex w-full items-center justify-center gap-2 px-6 py-3.5 text-base">
                Mulai belajar sekarang <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
