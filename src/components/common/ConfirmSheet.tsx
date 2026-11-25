import React, { useEffect } from 'react';
import { Portal } from './Portal';
import { LogOut } from 'lucide-react';

interface ConfirmSheetProps {
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
}

/** Konfirmasi bertema NODUS sebagai pengganti dialog bawaan sistem. Batal adalah aksi utama (aman). */
export const ConfirmSheet: React.FC<ConfirmSheetProps> = ({ title, message, confirmLabel, cancelLabel, onConfirm, onCancel }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.stopPropagation(); onCancel(); } };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onCancel]);

  return (
    <Portal>
    <div className="fixed inset-0 z-[120] flex items-end justify-center sm:items-center" role="alertdialog" aria-modal="true" aria-label={title}>
      <button aria-label={cancelLabel} onClick={onCancel} className="absolute inset-0 touch-none bg-black/55 backdrop-blur-sm animate-fade-in" />
      <div className="relative w-full max-w-sm rounded-t-[28px] border border-slate-200/70 bg-[#FBF9F5] p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-center shadow-2xl animate-sheet-up dark:border-white/10 dark:bg-[#18202D] sm:rounded-[28px]">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]"><LogOut className="h-5 w-5" /></span>
        <h3 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{message}</p>
        <div className="mt-6 space-y-2.5">
          <button autoFocus onClick={onCancel} className="btn-gold w-full !py-3.5 text-base">{cancelLabel}</button>
          <button onClick={onConfirm} className="w-full rounded-2xl py-3 text-sm font-bold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white">{confirmLabel}</button>
        </div>
      </div>
    </div>
    </Portal>
  );
};
