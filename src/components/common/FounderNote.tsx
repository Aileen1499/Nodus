import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Portal } from './Portal';
import { useModal } from '../../lib/useModal';
import { sendFeedback } from '../../lib/feedback';
import { getName } from '../../lib/profileName';

/** Catatan dari pembuat + kotak masukan yang dibaca langsung oleh pembuatnya. */
export const FounderNote: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useModal(onClose);
  const [msg, setMsg] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const send = async () => {
    if (msg.trim().length < 3) return;
    setState('sending');
    setState((await sendFeedback(msg, getName())) ? 'sent' : 'error');
  };
  return (
    <Portal>
      <div className="fixed inset-0 z-[96] flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Catatan dari pembuat">
        <button aria-label="Tutup" onClick={onClose} className="absolute inset-0 touch-none bg-black/55 backdrop-blur-sm animate-fade-in" />
        <div className="relative flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-[28px] bg-[#FBF9F5] shadow-2xl animate-sheet-up dark:bg-[#1C1C1F] sm:rounded-[28px]">
          <div className="flex items-start justify-between gap-3 px-5 pb-2 pt-5">
            <div><p className="eyebrow">Dari pembuat NODUS</p><h2 className="mt-1 font-serif text-2xl font-semibold text-slate-900 dark:text-white">Satu orang, bukan perusahaan besar</h2></div>
            <button onClick={onClose} aria-label="Tutup" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 dark:bg-white/10 dark:text-slate-200"><X className="h-5 w-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 pb-5">
            <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">NODUS dibuat dan dirawat oleh satu orang. Tujuannya sederhana: belajar bisnis, ekonomi, dan keuangan tidak harus terasa seperti hafalan teori yang sulit dipakai.</p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">Karena masih tumbuh, pasti ada yang kurang pas, membingungkan, atau salah. Tulis saja di bawah. Pesanmu dibaca langsung oleh pembuatnya, dan sering jadi alasan sebuah perbaikan dibuat.</p>
            {state === 'sent' ? (
              <p role="status" className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">Terkirim. Terima kasih sudah meluangkan waktu menulis.</p>
            ) : (
              <>
                <textarea value={msg} onChange={(e) => { setMsg(e.target.value); if (state === 'error') setState('idle'); }} rows={5} maxLength={2000} placeholder="Apa yang membingungkan, kurang, atau ingin kamu lihat di NODUS?"
                  className="mt-5 w-full resize-none rounded-2xl border border-slate-200 bg-white p-4 text-base text-slate-900 placeholder-slate-400 focus:border-[#CF8E1F] focus:outline-none dark:border-white/15 dark:bg-[#121214] dark:text-white" />
                {state === 'error' && <p role="alert" className="mt-2 text-[13px] font-semibold text-rose-600 dark:text-rose-300">Belum terkirim. Periksa koneksi lalu coba lagi.</p>}
                <button onClick={send} disabled={state === 'sending' || msg.trim().length < 3} className="btn-gold mt-3 w-full py-3.5 text-base">{state === 'sending' ? 'Mengirim…' : 'Kirim ke pembuat'}</button>
              </>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
};
