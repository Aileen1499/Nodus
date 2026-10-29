import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { X, Trash2, CheckCircle2, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

interface SettingsModalProps {
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const { progress, saveApiKey, resetProgress } = useUser();
  const [modelSelect, setModelSelect] = useState(progress.aiModel || 'gemini-1.5-flash');
  const [savedStatus, setSavedStatus] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveApiKey(progress.apiKey || '', modelSelect);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2500);
  };

  const handleReset = () => {
    resetProgress();
    setShowConfirmReset(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#0B0F19] shadow-2xl overflow-hidden transition-colors duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-4 bg-slate-50 dark:bg-[#0F172A]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/15 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
              <Cpu className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Pengaturan Sistem & Model AI</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Konfigurasi Mesin Pengetahuan & Data Lokal</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-6">
          <form onSubmit={handleSave} className="space-y-4">
            
            {/* Server-Managed AI Status Banner (No user API key required) */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Mesin AI Terintegrasi Otomatis (Server-Managed)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Aplikasi terhubung langsung ke kredensial Gemini AI tingkat eksekutif. Anda dapat langsung membedah topik apapun tanpa perlu mengatur kunci API secara manual.
              </p>
            </div>

            {/* Model Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                <span>Arsitektur Model Gemini</span>
              </label>
              <select
                value={modelSelect}
                onChange={(e) => setModelSelect(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="gemini-1.5-flash">Gemini 1.5 Flash (Sangat Cepat, Efisien, & Responsif)</option>
                <option value="gemini-2.0-flash">Gemini 2.0 Flash (Next-Gen Multidisciplinary Reasoning)</option>
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Deep Synthesis & Long-Context Analysis)</option>
              </select>
            </div>

            {/* Save Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 hover:bg-indigo-700 transition-colors"
              >
                {savedStatus ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    <span>Preferensi Model Tersimpan</span>
                  </>
                ) : (
                  <span>Simpan Pengaturan</span>
                )}
              </button>
            </div>
          </form>

          {/* Reset Progress Section */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200">
              Reset Data Pembelajaran Lokal
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Mengembalikan Rank Points, status penguasaan materi, dan catatan stabilo ke kondisi awal.
            </p>

            {!showConfirmReset ? (
              <button
                type="button"
                onClick={() => setShowConfirmReset(true)}
                className="flex items-center gap-2 rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/20 px-3.5 py-2 text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/40 transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Reset Seluruh Progres</span>
              </button>
            ) : (
              <div className="rounded-2xl border border-rose-500/40 bg-rose-50 dark:bg-rose-950/30 p-3.5 space-y-2.5">
                <p className="text-xs font-bold text-rose-700 dark:text-rose-300">
                  Yakin ingin mereset seluruh progres dan catatan stabilo?
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700 transition-colors"
                  >
                    Ya, Reset
                  </button>
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
