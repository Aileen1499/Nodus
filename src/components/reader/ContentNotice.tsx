import React, { useState } from 'react';
import { Portal } from '../common/Portal';
import { Flag, Info, X } from 'lucide-react';
import { ReportKind, reportContent } from '../../lib/report';
import { useModal } from '../../lib/useModal';

const REGULATED: Record<string, string> = {
  Pajak: 'pajak',
  Hukum: 'hukum',
  Keuangan: 'keuangan atau investasi',
};

const KINDS: { id: ReportKind; label: string }[] = [
  { id: 'salah', label: 'Ada yang keliru' },
  { id: 'usang', label: 'Aturan atau angka sudah berubah' },
  { id: 'membingungkan', label: 'Membingungkan' },
  { id: 'lainnya', label: 'Lainnya' },
];

const ReportSheet: React.FC<{ nodeId: string; label: string; onClose: () => void }> = ({ nodeId, label, onClose }) => {
  useModal(onClose);
  const [kind, setKind] = useState<ReportKind>('salah');
  const [note, setNote] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'fail'>('idle');

  const send = async () => {
    setState('sending');
    setState((await reportContent(nodeId, kind, note)) ? 'done' : 'fail');
  };

  return (
    <div className="fixed inset-0 z-[130] flex items-end justify-center bg-black/50 animate-fade-in sm:items-center" onClick={onClose} role="dialog" aria-modal="true" aria-label="Laporkan kesalahan">
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-md animate-sheet-up rounded-t-3xl bg-[#FBF9F5] p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] dark:bg-[#18202D] sm:rounded-3xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="eyebrow">Laporkan</p>
            <h3 className="font-serif text-xl font-medium text-slate-900 dark:text-white">{label}</h3>
          </div>
          <button onClick={onClose} aria-label="Tutup" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-white/10 dark:text-slate-200"><X className="h-5 w-5" /></button>
        </div>

        {state === 'done' ? (
          <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900 dark:bg-emerald-500/15 dark:text-emerald-100">
            Terima kasih. Laporanmu sudah masuk dan akan kami periksa. Laporan tanpa data pribadi, hanya identitas perangkat acak.
            <button onClick={onClose} className="btn-ink mt-4 w-full rounded-2xl py-3 text-sm font-bold">Tutup</button>
          </div>
        ) : (
          <>
            <div className="mt-4 grid gap-2">
              {KINDS.map((k) => (
                <button key={k.id} onClick={() => setKind(k.id)} aria-pressed={kind === k.id} className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold ${kind === k.id ? 'border-[#E3A63A] bg-[#FDF0D5] text-[#7A4E0C] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]' : 'border-slate-200 bg-white text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-100'}`}>{k.label}</button>
              ))}
            </div>
            <textarea value={note} onChange={(e) => setNote(e.target.value.slice(0, 1000))} rows={3} placeholder="Jelaskan singkat (opsional). Jangan tulis data pribadi." aria-label="Catatan laporan" className="mt-3 w-full resize-none rounded-2xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#E3A63A]/50 dark:border-white/10 dark:bg-white/5 dark:text-white" />
            {state === 'fail' && <p className="mt-2 text-[13px] font-semibold text-rose-600">Belum terkirim. Periksa koneksi lalu coba lagi.</p>}
            <button onClick={send} disabled={state === 'sending'} className="btn-gold mt-3 w-full rounded-2xl py-3.5 text-sm font-bold disabled:opacity-60">{state === 'sending' ? 'Mengirim…' : 'Kirim laporan'}</button>
          </>
        )}
      </div>
    </div>
  );
};

/** Catatan transparansi di akhir tiap pelajaran + jalur untuk melaporkan kesalahan. */
export const ContentNotice: React.FC<{ nodeId: string; label: string; domain: string }> = ({ nodeId, label, domain }) => {
  const [open, setOpen] = useState(false);
  const area = REGULATED[domain];
  return (
    <aside className="rounded-2xl border border-slate-200/80 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5" aria-label="Catatan materi">
      <div className="flex gap-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400" />
        <p className="text-[12.5px] leading-relaxed text-slate-600 dark:text-slate-300">
          Materi ini untuk edukasi umum{area ? `, bukan nasihat ${area}` : ''}. Disusun dari rujukan publik dan belum ditinjau profesional berlisensi. Aturan dan angka dapat berubah; cek sumber resmi atau tanya ahli berlisensi sebelum mengambil keputusan.{' '}
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-1 font-bold text-[#9A6410] underline-offset-2 hover:underline dark:text-[#E9C06B]"><Flag className="h-3 w-3" />Laporkan kesalahan</button>
        </p>
      </div>
      {open && <Portal><ReportSheet nodeId={nodeId} label={label} onClose={() => setOpen(false)} /></Portal>}
    </aside>
  );
};
