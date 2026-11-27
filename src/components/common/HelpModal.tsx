import React from 'react';
import { BookOpen, Calculator, Compass, Lock, Repeat, Target, X, Zap } from 'lucide-react';
import { Portal } from './Portal';
import { useModal } from '../../lib/useModal';

interface HelpModalProps {
  onClose: () => void;
}

const STEPS = [
  { icon: Compass, title: 'Pilih satu jalur', text: 'Jalur adalah rangkaian pelajaran berurutan tentang satu topik, misalnya "Arus Kas" atau "Harga & Margin". Belum tahu pilih yang mana? Buka tab Kurikulum lalu ketuk "Cari jalur yang cocok".' },
  { icon: BookOpen, title: 'Baca satu pelajaran', text: 'Ketuk pelajaran di peta. Isinya pendek, sekitar 3 menit: ide utamanya, perumpamaan sehari-hari, lalu 3 langkah kecil yang bisa kamu lakukan hari ini.' },
  { icon: Target, title: 'Cek paham', text: 'Setelah membaca, jawab satu kasus keputusan dan beberapa soal. Tidak ada hukuman kalau salah; penjelasannya muncul. Kalau lulus, pelajaran berikutnya terbuka.' },
  { icon: Repeat, title: 'Ulangi sebentar tiap hari', text: 'Tab Arena menyiapkan latihan singkat dari pelajaran yang mulai terlupa. Belajar sedikit tiap hari menjaga streak-mu tetap menyala.' },
  { icon: Calculator, title: 'Pakai di dunia nyata', text: 'Tab Alat berisi kalkulator untuk bisnismu (margin, titik impas, arus kas). Di Arena ada Kisah Bisnis (cerita nyata perusahaan yang tumbuh atau jatuh) dan simulasi bisnis ilustrasi.' },
];

const WORDS = [
  ['Jalur', 'Satu topik belajar yang terdiri dari beberapa pelajaran berurutan.'],
  ['Pelajaran', 'Satu konsep, dibaca sekitar 3 menit.'],
  ['Dikuasai', 'Pelajaran yang cek pahamnya sudah kamu lulus.'],
  ['Brankas', 'Tempat semua stabilo, catatan, dan progresmu tersimpan.'],
];

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  useModal(onClose);
  return (
    <Portal>
      <div className="fixed inset-0 z-[96] flex items-end justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label="Cara pakai NODUS">
        <button aria-label="Tutup" onClick={onClose} className="absolute inset-0 cursor-default" tabIndex={-1} />
        <div className="relative flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[28px] bg-[#FBF9F5] shadow-2xl dark:bg-[#1C1C1F] sm:rounded-[28px]">
          <div className="flex items-start justify-between gap-3 px-5 pb-3 pt-5">
            <div>
              <p className="eyebrow">Panduan singkat</p>
              <h2 className="mt-1 font-serif text-2xl font-semibold leading-tight text-slate-900 dark:text-white">Cara belajar di NODUS</h2>
              <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">Lima langkah. Mulai dari yang pertama saja.</p>
            </div>
            <button onClick={onClose} aria-label="Tutup panduan" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200"><X className="h-5 w-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-4">
            <ol className="space-y-3">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="flex gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 dark:border-white/10 dark:bg-[#121214]/60">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FDF0D5] font-serif text-lg font-semibold text-[#7A4D0A] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-1.5 text-[15px] font-bold text-slate-900 dark:text-white"><Icon className="h-4 w-4 text-[#9A6410] dark:text-[#E9C06B]" />{s.title}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300">{s.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-4 rounded-2xl bg-[#FDF0D5] p-4 dark:bg-[#E3A63A]/10">
              <p className="flex items-center gap-1.5 text-sm font-bold text-[#7A4D0A] dark:text-[#E9C06B]"><Zap className="h-4 w-4" />Mulai sekarang</p>
              <p className="mt-1 text-[13.5px] leading-relaxed text-[#5E3A08] dark:text-[#F1D8A0]">Buka tab Peta, ketuk satu pelajaran yang menyala, dan baca. Itu saja untuk hari pertama.</p>
            </div>

            <h3 className="mt-5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Istilah yang sering muncul</h3>
            <dl className="mt-2 divide-y divide-slate-200/70 rounded-2xl border border-slate-200/80 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#121214]/60">
              {WORDS.map(([w, d]) => (
                <div key={w} className="flex gap-3 px-4 py-2.5 text-[13px]">
                  <dt className="w-20 shrink-0 font-bold text-slate-900 dark:text-white">{w}</dt>
                  <dd className="text-slate-600 dark:text-slate-300">{d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex items-start gap-2 text-[12px] leading-relaxed text-slate-500 dark:text-slate-400"><Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />Progres tersimpan di perangkatmu. Masuk dengan akun supaya ikut tersimpan di cloud.</p>
          </div>

          <div className="border-t border-slate-200/80 px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 dark:border-white/10">
            <button onClick={onClose} className="btn-ink w-full py-3.5 text-base">Mengerti, mulai belajar</button>
          </div>
        </div>
      </div>
    </Portal>
  );
};
