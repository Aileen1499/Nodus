import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { X, Key, Trash2, CheckCircle2, Cpu } from 'lucide-react';

interface SettingsModalProps {
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose }) => {
  const { progress, saveApiKey, resetProgress } = useUser();
  const [apiKeyInput, setApiKeyInput] = useState(progress.apiKey || '');
  const [modelSelect, setModelSelect] = useState(progress.aiModel || 'gemini-1.5-flash');
  const [savedStatus, setSavedStatus] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveApiKey(apiKeyInput, modelSelect);
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
              <Key className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Pengaturan Sistem & AI</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Konfigurasi Gemini API & Data Lokal</p>
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
            {/* Gemini API Key input */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Google Gemini API Key (Opsional)
              </label>
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3.5 py-2.5 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <p className="mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                💡 <span className="font-semibold text-slate-700 dark:text-slate-300">Tanpa API key pun aplikasi tetap 100% aktif</span> menggunakan curated high-density mock graphs dan generator cadangan cerdas bawaan.
              </p>
            </div>

            {/* Model Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-indigo-500" />
                <span>Pilihan Model Gemini</span>
              </label>
              <select
                value={modelSelect}
                onChange={(e) => setModelSelect(e.target.value)}
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none"
              >
                <option value="gemini-1.5-flash">Gemini 1.5 Flash (Sangat Cepat & Efisien)</option>
                <option value="gemini-2.0-flash">Gemini 2.0 Flash (Next-Gen Reasoning)</option>
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Deep Multi-Disciplinary Synthesis)</option>
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
                    <span>Tersimpan di Penyimpanan Lokal</span>
                  </>
                ) : (
                  <span>Simpan Konfigurasi</span>
                )}
              </button>
            </div>
          </form>

          {/* Local Storage Mastery Management */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Manajemen Data Kemajuan
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mb-3">
              Semua Rank Points (RP), status simpul yang telah dikuasai, dan streak tersimpan secara aman di peramban (Local Storage).
            </p>

            {!showConfirmReset ? (
              <button
                onClick={() => setShowConfirmReset(true)}
                className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
              >
                <Trash2 className="h-3.5 w-3.5" />
                <span>Reset Ulang Kemajuan Belajar</span>
              </button>
            ) : (
              <div className="rounded-xl border border-rose-500/30 bg-rose-50 dark:bg-rose-500/10 p-3 space-y-2">
                <p className="text-xs text-rose-700 dark:text-rose-200">
                  Yakin ingin mereset RP dan simpul yang telah dikuasai? Tindakan ini tidak dapat dibatalkan.
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-rose-700"
                  >
                    Ya, Reset Sekarang
                  </button>
                  <button
                    onClick={() => setShowConfirmReset(false)}
                    className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white"
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
