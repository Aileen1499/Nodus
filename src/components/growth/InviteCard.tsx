import React, { useEffect, useState } from 'react';
import { Check, Copy, Gift, Link2, MessageCircle, Share2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { ClaimResult, REFERRAL_MAX_MONTHS, claimReferral, fetchReferralCount, getIncomingReferral, getMyReferralCode, registerMyCode, shareUrl } from '../../lib/referral';

const STEPS = [
  'Bagikan tautan atau kode milikmu ke teman.',
  'Teman membuka tautan dan mulai belajar di NODUS.',
  `Kalian berdua dapat 1 bulan Pro gratis saat Pro dibuka (maksimal ${REFERRAL_MAX_MONTHS} bulan dari undangan).`,
];

/** Kartu "Undang teman": kode pribadi, salin tautan, bagikan, dan penjelasan hadiah. */
export const InviteCard: React.FC = () => {
  const { user } = useAuth();
  const [copied, setCopied] = useState<'code' | 'link' | null>(null);
  const code = getMyReferralCode(user?.uid);
  const url = shareUrl(code);
  const incoming = getIncomingReferral();
  const [count, setCount] = useState<number | null>(null);
  const [entry, setEntry] = useState('');
  const [entryMsg, setEntryMsg] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    registerMyCode(code);
    void fetchReferralCount(code).then(setCount);
  }, [code]);
  const MSG: Record<ClaimResult, string> = {
    ok: 'Kode dipakai. Bonus 1 bulan Pro menunggumu saat Pro dibuka.',
    invalid: 'Format kode belum benar. Contoh: N-ABC123.',
    own: 'Itu kodemu sendiri. Bagikan ke teman, ya.',
    already: 'Perangkat ini sudah memakai kode undangan.',
    unknown: 'Kode tidak ditemukan. Cek lagi dengan temanmu.',
    error: 'Koneksi bermasalah. Coba lagi sebentar lagi.',
  };
  const redeem = async () => {
    if (!entry.trim()) return;
    setBusy(true);
    const r = await claimReferral(entry);
    setEntryMsg(MSG[r]);
    setBusy(false);
  };
  const text = `Aku belajar bisnis, ekonomi, dan keuangan di NODUS: jalur terarah, kalkulator, dan latihan keputusan. Pakai kodeku ${code} supaya kita sama-sama dapat 1 bulan Pro gratis:`;

  const flash = (k: 'code' | 'link') => { setCopied(k); setTimeout(() => setCopied(null), 2000); };
  const copyText = async (value: string, k: 'code' | 'link') => {
    try { await navigator.clipboard.writeText(value); flash(k); }
    catch {
      try {
        const ta = document.createElement('textarea');
        ta.value = value; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); document.body.removeChild(ta);
        flash(k);
      } catch { /* abaikan */ }
    }
  };
  const share = async () => {
    try {
      if (navigator.share) { await navigator.share({ title: 'NODUS', text, url }); return; }
    } catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return;
    }
    copyText(`${text} ${url}`, 'link');
  };
  const whatsapp = () => window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, '_blank', 'noopener');

  return (
    <div className="p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]"><Gift className="h-5 w-5" /></span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-semibold text-slate-900 dark:text-white">Undang teman, sama-sama untung</p>
          <p className="mt-0.5 text-[13px] leading-snug text-slate-500 dark:text-slate-400">1 bulan Pro gratis untukmu dan untuk setiap teman yang bergabung.</p>
        </div>
      </div>

      <ol className="mt-3 space-y-2">
        {STEPS.map((s, i) => (
          <li key={s} className="flex items-start gap-2.5 text-[13px] leading-snug text-slate-700 dark:text-slate-200">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#151517] text-[11px] font-bold text-[#FBF9F5] dark:bg-[#E3A63A] dark:text-[#121214]">{i + 1}</span>{s}
          </li>
        ))}
      </ol>

      <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Kode undanganmu</p>
      <div className="mt-1.5 flex items-center gap-2 rounded-2xl border border-dashed border-[#CF8E1F]/60 bg-[#FDF0D5]/50 px-4 py-2.5 dark:bg-[#E3A63A]/10">
        <span className="min-w-0 flex-1 truncate font-mono text-base font-bold tracking-wider text-slate-900 dark:text-white">{code}</span>
        <button onClick={() => copyText(code, 'code')} className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-[#7A4D0A] hover:bg-[#FDF0D5] dark:text-[#E9C06B] dark:hover:bg-white/10">
          {copied === 'code' ? <><Check className="h-3.5 w-3.5" />Tersalin</> : <><Copy className="h-3.5 w-3.5" />Salin kode</>}
        </button>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button onClick={() => copyText(`${text} ${url}`, 'link')} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/10">
          {copied === 'link' ? <><Check className="h-4 w-4 text-emerald-600" />Tautan tersalin</> : <><Link2 className="h-4 w-4" />Salin tautan</>}
        </button>
        <button onClick={whatsapp} className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 dark:border-white/15 dark:text-white dark:hover:bg-white/10"><MessageCircle className="h-4 w-4" />WhatsApp</button>
      </div>
      <button onClick={share} className="btn-gold mt-2 w-full"><Share2 className="h-4 w-4" />Bagikan ke teman</button>

      {count !== null && (
        <p className="mt-3 rounded-xl bg-[#FDF0D5]/70 px-3 py-2 text-[13px] font-semibold text-[#7A4D0A] dark:bg-[#E3A63A]/10 dark:text-[#E9C06B]">
          {count === 0 ? 'Belum ada teman yang memakai kodemu.' : `${count} teman sudah bergabung lewat kodemu.`}
        </p>
      )}

      <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Punya kode dari teman?</p>
      <div className="mt-1.5 flex gap-2">
        <input value={entry} onChange={(e) => { setEntry(e.target.value); setEntryMsg(null); }} placeholder="N-ABC123" autoCapitalize="characters" autoComplete="off"
          className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 font-mono text-base uppercase text-slate-900 placeholder-slate-400 focus:border-[#CF8E1F] focus:outline-none dark:border-white/15 dark:bg-[#121214] dark:text-white" />
        <button onClick={redeem} disabled={busy || !entry.trim()} className="btn-ink shrink-0 !px-5 text-sm">{busy ? '…' : 'Pakai'}</button>
      </div>
      {entryMsg && <p role="status" className="mt-2 text-[12px] font-semibold text-slate-600 dark:text-slate-300">{entryMsg}</p>}

      <p className="mt-3 text-[12px] leading-snug text-slate-500 dark:text-slate-400">
        Hadiahnya 1 bulan Pro gratis (bukan potongan persen), untuk kamu dan setiap teman, maksimal {REFERRAL_MAX_MONTHS} bulan. Hadiah masuk otomatis setelah Pro dibuka; kodemu sudah tercatat sejak sekarang.
        {incoming && <> Kamu diundang lewat kode <span className="font-mono font-bold">{incoming}</span>, jadi bonusmu ikut menunggu.</>}
      </p>
    </div>
  );
};
