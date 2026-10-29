import React from 'react';
import { X, Network, Sparkles } from 'lucide-react';

interface HelpModalProps {
  onClose: () => void;
}

export const HelpModal: React.FC<HelpModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B0F19] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col transition-colors duration-300">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-4 bg-slate-50 dark:bg-[#0F172A]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
              <Network className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Panduan NODUS</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Connect the Dots to Wealth & Business Mastery</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-slate-700 dark:text-slate-300">

          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-500/10 p-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              Filosofi Sistem NODUS
            </h4>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-200">
              Belajar mandiri sering gagal karena teori terserak tanpa hubungan kausal. NODUS menghubungkan ilmu <strong>Bisnis, Ekonomi, Keuangan, Psikologi Perilaku, dan Geopolitik</strong> ke dalam satu jejaring graf pikiran yang terintegrasi.
            </p>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              4 Langkah Penguasaan (The 4-Tier Loop):
            </h4>

            {/* Step 1 */}
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                1
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 dark:text-white mb-0.5">Eksplorasi Knowledge Graph (Mindmap)</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Geser, zoom, atau seret simpul di kanvas. Garis berpendar menghubungkan bagaimana suatu konsep bisnis dipengaruhi oleh psikologi atau ekonomi makro.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                2
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 dark:text-white mb-0.5">Micro-Reading Sheet</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Buka simpul untuk membaca intisari cepat: analogi sederhana (&lt;150 kata), koneksi lintas bidang ilmu, dan 3 daftar centang tindakan nyata hari ini.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-xs">
                3
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 dark:text-white mb-0.5">Decision Simulator</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Uji intuisi eksekutif Anda dalam simulasi dilema bisnis dunia nyata dengan konsekuensi langsung.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 p-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-500/20 text-rose-600 dark:text-rose-400 font-bold text-xs">
                4
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900 dark:text-white mb-0.5">Gamified Timed Quiz (30s)</p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Jawab pertanyaan penalaran dengan timer 30 detik untuk mengunci retensi memori jangka panjang, mengumpulkan Rank Points (RP), dan membuka cabang simpul berikutnya!
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/30 p-3 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-200">Tips Kanvas:</span> Gunakan mouse wheel atau tombol zoom di kiri bawah untuk memperbesar/memperkecil kanvas graf secara leluasa.
          </div>

        </div>

      </div>
    </div>
  );
};
