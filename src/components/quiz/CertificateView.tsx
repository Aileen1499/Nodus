import React, { useState } from 'react';
import { LogoMark } from '../brand/Logo';
import { ArrowLeft, Printer } from 'lucide-react';
import { MindmapData } from '../../types';
import { useAuth } from '../../context/AuthContext';

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

  return (
    <div className="fixed inset-0 z-[65] flex flex-col bg-[#FBF9F5] dark:bg-[#151517]" role="dialog" aria-label="Sertifikat penyelesaian">
      <div className="flex items-center gap-3 border-b border-slate-200/80 px-4 py-3 dark:border-slate-800 sm:px-8 print:hidden">
        <button onClick={onClose} aria-label="Kembali" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <p className="eyebrow">Sertifikat</p>
          <h2 className="truncate font-serif text-xl font-semibold text-slate-900 dark:text-white">Jalur tuntas</h2>
        </div>
        <button onClick={() => window.print()} className="btn-gold !px-4 !py-2.5 text-sm"><Printer className="h-4 w-4" />Cetak / PDF</button>
      </div>

      <div className="flex-1 overflow-y-auto pb-10">
        <div className="mx-auto w-full max-w-3xl space-y-5 px-4 py-6 sm:px-8">
          <label className="block print:hidden">
            <span className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">Nama pada sertifikat</span>
            <input value={name} onChange={(e) => updateName(e.target.value)} placeholder="Tulis nama Anda" maxLength={60} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 focus:border-[#CF8E1F] focus:outline-none focus:ring-2 focus:ring-[#E3A63A]/30 dark:border-slate-700 dark:bg-[#1F1F23] dark:text-white" />
          </label>

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
            <p className="mx-auto mt-8 max-w-md border-t border-slate-200 pt-4 text-[11px] leading-relaxed text-slate-400">
              Sertifikat penyelesaian internal NODUS sebagai catatan belajar pribadi. Bukan sertifikasi profesi atau gelar akademik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
