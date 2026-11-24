import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { getMapById } from '../../lib/nodeIndex';
import type { MindmapData } from '../../types';
import { useModal } from '../../lib/useModal';

interface Goal { label: string; hint: string; paths: string[] }

const GOALS: Goal[] = [
  { label: 'Memulai usaha dari nol', hint: 'Belum punya bisnis, ingin tahu langkah pertama', paths: ['curriculum-zero-to-hero-owner', 'curriculum-akuntansi-pemilik-usaha'] },
  { label: 'Menaikkan untung usaha yang berjalan', hint: 'Sudah jualan, ingin harga dan margin yang sehat', paths: ['curriculum-unit-economics-harga', 'curriculum-pemasaran-brand'] },
  { label: 'Mengatur stok dan operasional', hint: 'Barang, pemasok, dan arus kas harian', paths: ['curriculum-operasi-stok-rantai-pasok', 'curriculum-akuntansi-pemilik-usaha'] },
  { label: 'Menjual dan bernegosiasi lebih baik', hint: 'Klien, mitra, dan penawaran B2B', paths: ['curriculum-negosiasi-penjualan-b2b', 'curriculum-psikologi-perilaku-keputusan'] },
  { label: 'Mulai berinvestasi dan paham ekonomi', hint: 'Uang pribadi, inflasi, bunga, dan pasar', paths: ['curriculum-investasi-dasar', 'curriculum-ekonomi-makro-keuangan'] },
  { label: 'Menambah penghasilan dari keahlian bisnis', hint: 'Konsultan, freelance, atau jasa profesional', paths: ['curriculum-monetisasi-keahlian', 'curriculum-unit-economics-harga'] },
  { label: 'Melamar kerja di keuangan atau konsultasi', hint: 'CV, case interview, dan negosiasi gaji', paths: ['curriculum-karier-keuangan-konsultasi', 'curriculum-valuasi-keuangan-korporasi'] },
  { label: 'Mengambil keputusan dari data dan angka biaya', hint: 'Statistik bisnis, A/B test, anggaran, dan varians', paths: ['curriculum-analisis-data-keputusan', 'curriculum-akuntansi-manajemen'] },
  { label: 'Kuliah MBA, ekonomi, atau keuangan', hint: 'Valuasi, mikroekonomi, dan keputusan korporasi', paths: ['curriculum-valuasi-keuangan-korporasi', 'curriculum-mikroekonomi-manajer'] },
  { label: 'Merapikan keuangan pribadi dan dana pensiun', hint: 'Dana darurat, utang, proteksi, dan tujuan jangka panjang', paths: ['curriculum-keuangan-pribadi', 'curriculum-investasi-dasar'] },
  { label: 'Memimpin tim dan mengelola karyawan', hint: 'Delegasi, umpan balik, OKR, dan budaya', paths: ['curriculum-kepemimpinan-sdm', 'curriculum-negosiasi-penjualan-b2b'] },
  { label: 'Berjualan online dengan untung', hint: 'Margin marketplace, ROAS, dan retensi', paths: ['curriculum-bisnis-digital-ecommerce', 'curriculum-unit-economics-harga'] },
  { label: 'Paham pajak usaha dan tidak kena denda', hint: 'PPh Final, PPN, pembukuan, dan SPT', paths: ['curriculum-pajak-praktis', 'curriculum-akuntansi-pemilik-usaha'] },
  { label: 'Berpikir strategis seperti pemimpin bisnis', hint: 'Keunggulan bersaing dan keputusan besar', paths: ['curriculum-bisnis-strategi-moat', 'curriculum-kasus-bisnis-indonesia'] },
];

interface Props { onClose: () => void; onPick: (map: MindmapData) => void }

/** Pencari jalur: satu pertanyaan, dua rekomendasi. Menghilangkan kebingungan "mulai dari mana". */
export const PathFinder: React.FC<Props> = ({ onClose, onPick }) => {
  useModal(onClose);
  const [goal, setGoal] = useState<Goal | null>(null);
  const maps = goal ? goal.paths.map((id) => getMapById(id)).filter(Boolean) as MindmapData[] : [];

  return (
    <div className="fixed inset-0 z-[85] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Cari jalur yang cocok">
      <button aria-label="Tutup" onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />
      <div className="relative flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[28px] border border-white/10 bg-[#18202D] text-[#FBF9F5] shadow-2xl animate-sheet-up sm:rounded-[28px]">
        <div className="flex items-start gap-3 px-5 pb-3 pt-5">
          <div className="min-w-0 flex-1">
            <p className="eyebrow !text-[#E3A63A]">Cari jalur yang cocok</p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold leading-tight">{goal ? 'Mulai dari sini' : 'Apa yang ingin kamu capai?'}</h3>
          </div>
          <button onClick={onClose} aria-label="Tutup" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"><X className="h-4 w-4" /></button>
        </div>
        <div className="min-h-0 flex-1 space-y-2.5 overflow-y-auto px-5 pb-6">
          {!goal ? GOALS.map((g) => (
            <button key={g.label} onClick={() => setGoal(g)} className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition-colors hover:border-[#E3A63A]/50">
              <span className="min-w-0 flex-1"><span className="block text-[15px] font-bold">{g.label}</span><span className="mt-0.5 block text-[12px] text-[#FBF9F5]/60">{g.hint}</span></span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#E3A63A]" />
            </button>
          )) : (
            <>
              <p className="text-sm text-[#FBF9F5]/70">Untuk "{goal.label.toLowerCase()}", urutan belajar yang kami sarankan:</p>
              {maps.map((m, i) => (
                <button key={m.id} onClick={() => onPick(m)} className="flex w-full items-center gap-3 rounded-2xl border border-[#E3A63A]/30 bg-[#E3A63A]/[0.07] p-4 text-left">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3A63A] text-sm font-extrabold text-[#151517]">{i + 1}</span>
                  <span className="min-w-0 flex-1"><span className="block text-[15px] font-bold leading-snug">{m.topic}</span><span className="mt-0.5 block text-[12px] text-[#FBF9F5]/60">{m.nodes.length} pelajaran{i === 0 ? ' · mulai di sini' : ''}</span></span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#E3A63A]" />
                </button>
              ))}
              <button onClick={() => setGoal(null)} className="w-full py-2 text-sm font-bold text-[#FBF9F5]/60 hover:text-white">Ganti tujuan</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
