import React, { useState } from 'react';
import { Check, Copy, Gift, Share2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { getMyReferralCode, shareUrl } from '../../lib/referral';

/** Kartu "Undang teman": bagikan tautan berkode. Hadiah diaktifkan setelah Pro dibuka. */
export const InviteCard: React.FC = () => {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);
  const code = getMyReferralCode(user?.uid);
  const url = shareUrl(code);
  const text = 'Aku belajar bisnis, ekonomi, dan keuangan di NODUS: jalur terarah, kalkulator, dan latihan keputusan. Coba juga:';

  const share = async () => {
    try {
      if (navigator.share) { await navigator.share({ title: 'NODUS', text, url }); return; }
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return;
    }
    copy();
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(`${text} ${url}`); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* abaikan */ }
  };

  return (
    <div className="p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]"><Gift className="h-4 w-4" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-semibold text-slate-900 dark:text-white">Undang teman belajar</p>
          <p className="mt-0.5 text-[13px] leading-snug text-slate-500 dark:text-slate-400">Bagikan tautanmu. Hadiah undangan (bulan Pro gratis untuk kalian berdua) aktif saat Pro dibuka, dan kodemu sudah tercatat.</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-2.5 dark:bg-white/5">
        <span className="min-w-0 flex-1 truncate font-mono text-sm font-bold tracking-wider text-slate-900 dark:text-white">{code}</span>
        <button onClick={copy} aria-label="Salin kode dan tautan" className="flex h-9 w-9 items-center justify-center rounded-full text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-white/10">{copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}</button>
      </div>
      <button onClick={share} className="btn-gold mt-3 w-full"><Share2 className="h-4 w-4" />Bagikan tautan</button>
    </div>
  );
};
