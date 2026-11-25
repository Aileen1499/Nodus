import { SITE_URL } from '../../lib/site';
import React, { useState } from 'react';
import { Portal } from '../common/Portal';
import { LogoMark } from '../brand/Logo';
import { ArrowLeft, Download, Printer, Share2 } from 'lucide-react';
import { MindmapData } from '../../types';
import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../lib/useModal';

interface CertificateViewProps {
  data: MindmapData;
  onClose: () => void;
}

const NAME_KEY = 'nodus_certificate_name_v1';
const readName = (): string => {
  try {
    return localStorage.getItem(NAME_KEY) || '';
  } catch {
    return '';
  }
};

/** Sertifikat penyelesaian jalur. Dicetak/disimpan sebagai PDF lewat dialog cetak browser. */
export const CertificateView: React.FC<CertificateViewProps> = ({ data, onClose }) => {
  useModal(onClose);
  const { user } = useAuth();
  const [name, setName] = useState<string>(() => readName() || user?.displayName || '');
  const date = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  const updateName = (v: string) => {
    setName(v);
    try {
      localStorage.setItem(NAME_KEY, v);
    } catch {
      /* abaikan */
    }
  };

  const [shareMsg, setShareMsg] = useState<string | null>(null);

  /** Gambar sertifikat ke kanvas (1200x850) agar bisa dibagikan atau diunduh sebagai PNG. */
  const renderPng = async (): Promise<Blob | null> => {
    const W = 1200, H = 850;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    if (!g) return null;
    try { await document.fonts?.ready; } catch { /* abaikan */ }
    const serif = 'Newsreader, Georgia, serif';
    const sans = '"Plus Jakarta Sans", system-ui, sans-serif';
    g.fillStyle = '#FBF9F5'; g.fillRect(0, 0, W, H);
    g.strokeStyle = '#CF8E1F'; g.lineWidth = 6; g.strokeRect(40, 40, W - 80, H - 80);
    g.lineWidth = 2; g.strokeRect(56, 56, W - 112, H - 112);
    g.textAlign = 'center';
    const wrap = (text: string, y: number, font: string, color: string, max: number, lh: number) => {
      g.font = font; g.fillStyle = color;
      const words = text.split(/\s+/); let line = ''; let yy = y;
      for (const w of words) {
        const t = line ? line + ' ' + w : w;
        if (g.measureText(t).width > max && line) { g.fillText(line, W / 2, yy); line = w; yy += lh; } else line = t;
      }
      g.fillText(line, W / 2, yy); return yy;
    };
    g.fillStyle = '#151517'; g.beginPath(); g.roundRect(W / 2 - 34, 100, 68, 68, 16); g.fill();
    g.fillStyle = '#E3A63A'; g.font = `700 40px ${serif}`; g.fillText('N', W / 2, 150);
    g.font = `700 15px ${sans}`; g.fillStyle = '#9A6410';
    g.fillText('N O D U S   ·   S E R T I F I K A T   P E N Y E L E S A I A N', W / 2, 220);
    g.font = `400 20px ${sans}`; g.fillStyle = '#6E695E'; g.fillText('Diberikan kepada', W / 2, 290);
    g.font = `600 64px ${serif}`; g.fillStyle = '#151517'; g.fillText((name.trim() || 'Nama Anda').slice(0, 40), W / 2, 372);
    wrap(`yang telah menyelesaikan seluruh ${data.nodes.length} pelajaran dan lulus evaluasi pada jalur belajar`, 440, `400 22px ${sans}`, '#55514A', 760, 32);
    const last = wrap(data.topic, 520, `600 44px ${serif}`, '#151517', 900, 54);
    g.font = `600 20px ${sans}`; g.fillStyle = '#3F3C37'; g.fillText(date, W / 2, Math.max(last + 70, 660));
    g.font = `400 15px ${sans}`; g.fillStyle = '#918C80';
    g.fillText('Catatan belajar pribadi NODUS. Bukan sertifikasi profesi atau gelar akademik.', W / 2, H - 90);
    return new Promise((res) => c.toBlob((b) => res(b), 'image/png'));
  };

  const fileName = `sertifikat-nodus-${data.id}.png`;
  const shareText = `Saya baru menyelesaikan jalur "${data.topic}" di NODUS. Coba: ${SITE_URL}`;

  const share = async () => {
    setShareMsg(null);
    const blob = await renderPng();
    if (!blob) { setShareMsg('Gambar sertifikat gagal dibuat.'); return; }
    const file = new File([blob], fileName, { type: 'image/png' });
    try {
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: shareText, title: 'Sertifikat NODUS' });
        return;
      }
      if (navigator.share) { await navigator.share({ text: shareText, url: SITE_URL }); return; }
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return;
    }
    download(blob);
  };

  const download = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = fileName; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    setShareMsg('Gambar tersimpan. Unggah ke LinkedIn atau Instagram.');
  };

  const save = async () => { const b = await renderPng(); if (b) download(b); else setShareMsg('Gambar sertifikat gagal dibuat.'); };

  return (
    <Portal>
    <div className="fixed inset-0 z-[65] pt-[env(safe-area-inset-top)] flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520]" role="dialog" aria-label="Sertifikat penyelesaian">
      <div className="flex items-center gap-3 border-b border-slate-200/80 px-4 py-3 dark:border-slate-800 sm:px-8 print:hidden">
        <button onClick={onClose} aria-label="Kembali" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="eyebrow">Sertifikat</p>
          <h2 className="truncate font-serif text-xl font-semibold text-slate-900 dark:text-white">Jalur tuntas</h2>
        </div>
        <button onClick={() => window.print()} aria-label="Cetak atau simpan PDF" className="hidden h-10 items-center gap-1.5 rounded-full border border-slate-200 px-3.5 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:inline-flex"><Printer className="h-4 w-4" />PDF</button>
        <button onClick={share} className="btn-gold !px-4 !py-2.5 text-sm"><Share2 className="h-4 w-4" />Bagikan</button>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        <div className="mx-auto w-full max-w-3xl space-y-5 px-4 py-6 sm:px-8">
          <label className="block print:hidden">
            <span className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">Nama pada sertifikat</span>
            <input value={name} onChange={(e) => updateName(e.target.value)} placeholder="Tulis nama Anda" maxLength={60} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-[#CF8E1F] focus:outline-none focus:ring-2 focus:ring-[#E3A63A]/30 dark:border-slate-700 dark:bg-[#18202D] dark:text-white" />
          </label>

          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <button onClick={save} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"><Download className="h-4 w-4" />Simpan gambar</button>
            <button onClick={() => window.print()} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800 sm:hidden"><Printer className="h-4 w-4" />Cetak / PDF</button>
            {shareMsg && <p role="status" className="text-[13px] font-semibold text-emerald-700 dark:text-emerald-300">{shareMsg}</p>}
          </div>

          <div id="nodus-certificate" className="rounded-[28px] border-[6px] border-double border-[#CF8E1F] bg-white p-8 text-center shadow-float sm:p-12">
            <LogoMark size={52} className="mx-auto" />
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9A6410]">NODUS · Sertifikat Penyelesaian</p>
            <p className="mt-8 text-sm text-slate-500">Diberikan kepada</p>
            <p className="mt-2 font-serif text-3xl font-semibold text-slate-900 sm:text-5xl">{name.trim() || 'Nama Anda'}</p>
            <p className="mx-auto mt-8 max-w-md text-sm leading-relaxed text-slate-600">
              yang telah menyelesaikan seluruh {data.nodes.length} pelajaran dan lulus evaluasi pada jalur belajar
            </p>
            <p className="mx-auto mt-3 max-w-lg font-serif text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">{data.topic}</p>
            <p className="mt-8 text-sm font-semibold text-slate-700">{date}</p>
            <p className="mx-auto mt-8 max-w-md border-t border-slate-200 pt-4 text-[11px] leading-relaxed text-slate-500">
              Sertifikat penyelesaian internal NODUS sebagai catatan belajar pribadi. Bukan sertifikasi profesi atau gelar akademik.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Portal>
  );
};
