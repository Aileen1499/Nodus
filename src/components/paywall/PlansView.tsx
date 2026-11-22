import React, { useState } from 'react';
import { ArrowLeft, Check, ChevronDown, Crown, Minus, ShieldCheck } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { useAuth } from '../../context/AuthContext';
import { BILLING_LIVE, OTHER_PLANS, OtherPlanId, SUPPORT_EMAIL, PRICING, idr, yearlyPerMonth, yearlySavingPercent, yearlyAsMonthly, yearlySavingAmount, yearlyPerDay, PaywallReason } from '../../lib/plans';
import { PlanId, startCheckout, restorePurchases } from '../../lib/billing';

interface PlansViewProps {
  onClose: () => void;
  reason?: PaywallReason;
  onOpenLegal?: (kind: 'privacy' | 'terms') => void;
  onOpenAuth?: () => void;
}

const HEADLINE: Record<PaywallReason, { title: string; text: string }> = {
  lesson: { title: 'Lanjutkan sampai tuntas', text: 'Pelajaran ini bagian dari jalur Pro. Buka semua jalur dan belajar tanpa terhenti.' },
  tool: { title: 'Buka semua alat bisnis', text: 'Hitung arus kas, stok, unit economics, dan investasi dengan alat yang siap pakai.' },
  ai: { title: 'Tanya mentor lebih banyak', text: 'Kuota harian gratis habis. Pro memperluas kuota AI untuk bedah topik dan tanya jawab.' },
  welcome: { title: 'Belajar bisnis yang benar-benar terpakai', text: 'Satu langganan untuk semua jalur, semua alat, dan latihan yang menjaga ilmumu tetap ingat.' },
  manual: { title: 'Belajar bisnis sampai bisa menerapkan', text: 'Semua jalur, semua alat, dan latihan yang membuat ilmu benar-benar menempel.' },
};

const ROWS: { label: string; free: string | boolean; pro: string | boolean }[] = [
  { label: 'Jalur Mulai dari Nol', free: 'Lengkap', pro: 'Lengkap' },
  { label: 'Jalur belajar lainnya', free: '2 pelajaran pertama', pro: 'Semua jalur' },
  { label: 'Alat bisnis', free: '3 alat dasar', pro: 'Semua 7 alat' },
  { label: 'Kuis, simulasi, latihan harian', free: true, pro: true },
  { label: 'Brankas, stabilo, catatan', free: true, pro: true },
  { label: 'Sertifikat penyelesaian jalur', free: 'Jalur gratis', pro: 'Semua jalur' },
  { label: 'Mentor AI', free: '3 per hari', pro: 'Kuota diperluas' },
  { label: 'Jalur dan fitur baru', free: false, pro: true },
];

const FAQ: { q: string; a: string }[] = [
  { q: 'Bisa batal kapan saja?', a: 'Bisa. Langganan dikelola lewat akun toko aplikasi atau penyedia pembayaranmu, dan tetap aktif sampai akhir periode yang sudah dibayar.' },
  { q: 'Bagaimana uji coba gratis 7 hari?', a: 'Paket tahunan diawali 7 hari uji coba. Kamu baru ditagih setelah uji coba berakhir, dan bisa membatalkannya sebelum itu.' },
  { q: 'Apakah progres belajarku hilang jika berhenti?', a: 'Tidak. Progres, stabilo, dan catatanmu tetap tersimpan. Hanya akses ke pelajaran dan alat Pro yang berhenti.' },
  { q: 'Apakah ini nasihat investasi atau keuangan?', a: 'Bukan. NODUS adalah materi belajar. Angka kasus bersifat ilustrasi, dan keputusan keuanganmu tetap tanggung jawabmu.' },
];

const Cell: React.FC<{ v: string | boolean; accent?: boolean }> = ({ v, accent }) =>
  v === true ? <Check className={`mx-auto h-4 w-4 ${accent ? 'text-[#9A6410] dark:text-[#E9C06B]' : 'text-emerald-600 dark:text-emerald-400'}`} aria-label="Ya" />
  : v === false ? <Minus className="mx-auto h-4 w-4 text-slate-300 dark:text-slate-600" aria-label="Tidak" />
  : <span className={`text-[12px] font-semibold leading-tight ${accent ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}>{v}</span>;

export const PlansView: React.FC<PlansViewProps> = ({ onClose, reason = 'manual', onOpenLegal, onOpenAuth }) => {
  const { isPro } = useUser();
  const { user } = useAuth();
  const [plan, setPlan] = useState<PlanId>('yearly');
  const [open, setOpen] = useState<number | null>(0);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [interested, setInterested] = useState<boolean>(() => {
    try { return localStorage.getItem('nodus_pro_interest_v1') === '1'; } catch { return false; }
  });
  const [wanted, setWanted] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem('nodus_plan_interest_v2') || '[]') as string[]; } catch { return []; }
  });
  const want = (id: OtherPlanId, title: string) => {
    const next = wanted.includes(id) ? wanted : [...wanted, id];
    setWanted(next);
    try { localStorage.setItem('nodus_plan_interest_v2', JSON.stringify(next)); } catch { /* penyimpanan tidak tersedia */ }
    if (SUPPORT_EMAIL) window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`Minat paket ${title} NODUS`)}`;
  };
  const head = HEADLINE[reason];
  const price = plan === 'yearly' ? PRICING.yearly.price : PRICING.monthly.price;

  const act = async () => {
    setMessage(null);
    if (!BILLING_LIVE) {
      try { localStorage.setItem('nodus_pro_interest_v1', '1'); } catch { /* storage unavailable */ }
      setInterested(true);
      return;
    }
    setBusy(true);
    try {
      const res = await startCheckout(plan, user?.uid ?? null);
      if (res === 'cancelled') setMessage('Pembelian dibatalkan.');
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Terjadi kesalahan. Coba lagi.');
    } finally {
      setBusy(false);
    }
  };

  const restore = async () => {
    setMessage(null);
    setBusy(true);
    try {
      const ok = await restorePurchases(user?.uid ?? null);
      setMessage(ok ? 'Pembelian dipulihkan.' : 'Tidak ada pembelian yang ditemukan.');
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Gagal memulihkan pembelian.');
    } finally {
      setBusy(false);
    }
  };

  const cta = isPro ? 'Pro sudah aktif' : !BILLING_LIVE ? (interested ? 'Tercatat. Terima kasih!' : 'Kabari saya saat Pro dibuka') : plan === 'yearly' ? `Mulai ${PRICING.yearly.trialDays} hari gratis` : 'Berlangganan bulanan';

  return (
    <div className="fixed inset-0 z-[75] flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520] animate-fade-in" role="dialog" aria-modal="true" aria-label="Paket NODUS">
      <div className="flex items-center gap-3 border-b border-slate-200/80 px-4 py-3 dark:border-white/10 sm:px-8">
        <button onClick={onClose} aria-label="Kembali" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <p className="eyebrow">Paket NODUS</p>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden pb-40">
        <div className="mx-auto w-full max-w-2xl px-5 sm:px-7">
          <section className="mt-4 overflow-hidden rounded-3xl bg-[#151517] p-5 text-[#FBF9F5] sm:p-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E3A63A]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E9C06B]">
              <Crown className="h-3.5 w-3.5" /> NODUS Pro
            </span>
            <h1 className="mt-3 font-serif text-[26px] font-semibold leading-tight sm:text-4xl">{head.title}</h1>
            <p className="mt-1.5 text-sm leading-relaxed text-[#FBF9F5]/70">{head.text}</p>
            {!BILLING_LIVE && (
              <p className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-xs leading-relaxed text-[#FBF9F5]/75">
                Masa pratinjau: semua konten masih gratis. Harga di bawah adalah rencana.
              </p>
            )}
          </section>

          <div className="mt-4 grid grid-cols-2 gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-white/5" role="tablist" aria-label="Pilih periode">
            {(['yearly', 'monthly'] as PlanId[]).map((p) => (
              <button key={p} role="tab" aria-selected={plan === p} onClick={() => setPlan(p)}
                className={`relative rounded-xl px-3 py-2.5 text-sm font-bold transition-colors ${plan === p ? 'bg-white text-slate-900 shadow-sm dark:bg-[#FBF9F5] dark:text-[#0F1520]' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white'}`}>
                {PRICING[p].label}
                {p === 'yearly' && <span className="ml-1.5 rounded-full bg-[#E3A63A] px-1.5 py-0.5 text-[10px] font-extrabold text-[#151517]">-{yearlySavingPercent}%</span>}
              </button>
            ))}
          </div>

          <div className="relative mt-4 overflow-hidden rounded-3xl bg-gradient-to-br from-[#E9C06B] via-[#E3A63A] to-[#9A6410] p-[1.5px] shadow-float">
            <div className="rounded-[22px] bg-[#151517] px-6 py-7 text-center text-[#FBF9F5]">
              {plan === 'yearly' && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E3A63A] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#151517]">
                  Paling hemat · -{yearlySavingPercent}%
                </span>
              )}
              {plan === 'yearly' && (
                <p className="mt-4 text-[15px] text-[#FBF9F5]/55">
                  <span className="line-through decoration-[#E3A63A] decoration-2">{idr(yearlyAsMonthly)}</span>
                  <span className="ml-2 text-xs font-semibold uppercase tracking-wide text-[#FBF9F5]/45">bila bayar bulanan</span>
                </p>
              )}
              <p className={`flex items-start justify-center gap-1.5 font-serif ${plan === 'yearly' ? 'mt-1' : 'mt-5'}`} style={{ fontVariantNumeric: 'lining-nums tabular-nums' }}>
                <span className="mt-3 text-xl font-medium text-[#E9C06B]">Rp</span>
                <span className="bg-gradient-to-b from-[#FFF3D6] to-[#E9C06B] bg-clip-text text-[64px] font-medium leading-none tracking-tight text-transparent">
                  {price.toLocaleString('id-ID')}
                </span>
              </p>
              <p className="mt-2 text-sm text-[#FBF9F5]/60">per {PRICING[plan].per}</p>
              {plan === 'yearly' ? (
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-xl bg-white/5 px-2 py-2.5"><p className="text-[10px] font-bold uppercase tracking-wider text-[#FBF9F5]/45">Hemat</p><p className="mt-0.5 whitespace-nowrap text-[13px] font-extrabold text-[#E9C06B]">{idr(yearlySavingAmount)}</p></div>
                  <div className="rounded-xl bg-white/5 px-2 py-2.5"><p className="text-[10px] font-bold uppercase tracking-wider text-[#FBF9F5]/45">Per bulan</p><p className="mt-0.5 whitespace-nowrap text-[13px] font-extrabold">{idr(yearlyPerMonth)}</p></div>
                  <div className="rounded-xl bg-white/5 px-2 py-2.5"><p className="text-[10px] font-bold uppercase tracking-wider text-[#FBF9F5]/45">Per hari</p><p className="mt-0.5 whitespace-nowrap text-[13px] font-extrabold">{idr(yearlyPerDay)}</p></div>
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#FBF9F5]/60">Fleksibel, berhenti kapan saja. Paket tahunan jauh lebih hemat.</p>
              )}
              {plan === 'yearly' && <p className="mt-4 text-[13px] font-semibold text-[#E9C06B]">Mulai dengan uji coba gratis {PRICING.yearly.trialDays} hari. Batal kapan saja sebelum ditagih.</p>}
            </div>
          </div>

          <h2 className="mt-9 font-serif text-2xl font-medium text-slate-900 dark:text-white">Paket lain</h2>
          <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">Belum dibuka untuk dibeli. Catat minatmu, kami kabari saat siap.</p>
          <ul className="mt-3 space-y-3">
            {OTHER_PLANS.map((o) => (
              <li key={o.id} className="rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-[#18202D]">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[15px] font-bold text-slate-900 dark:text-white">{o.title}</p>
                    <p className="text-[12px] text-slate-500 dark:text-slate-400">{o.note}</p>
                  </div>
                  <p className="shrink-0 text-right font-serif text-xl font-medium text-slate-900 dark:text-white" style={{ fontVariantNumeric: 'lining-nums' }}>
                    {o.price ? <>{idr(o.price)}<span className="block text-[11px] font-sans font-semibold text-slate-500 dark:text-slate-400">per {o.per}</span></> : <span className="text-base">Hubungi kami</span>}
                  </p>
                </div>
                <ul className="mt-2 space-y-1">
                  {o.perks.map((k) => <li key={k} className="flex items-start gap-2 text-[13px] text-slate-600 dark:text-slate-300"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" />{k}</li>)}
                </ul>
                <button onClick={() => want(o.id, o.title)} disabled={wanted.includes(o.id) && !SUPPORT_EMAIL} className="mt-3 w-full rounded-full border border-[#CF8E1F]/60 px-4 py-2.5 text-sm font-bold text-[#7A4D0A] transition-colors hover:bg-[#FDF0D5] disabled:opacity-60 dark:text-[#E9C06B] dark:hover:bg-[#E3A63A]/10">
                  {wanted.includes(o.id) ? 'Minat tercatat' : o.price ? 'Saya berminat' : 'Tanya paket tim'}
                </button>
              </li>
            ))}
          </ul>

          <h2 className="mt-9 font-serif text-2xl font-medium text-slate-900 dark:text-white">Gratis dan Pro</h2>
          <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#18202D]">
            <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-slate-200/80 bg-slate-50 px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
              <span />
              <span className="text-center">Gratis</span>
              <span className="text-center text-[#9A6410] dark:text-[#E9C06B]">Pro</span>
            </div>
            {ROWS.map((r) => (
              <div key={r.label} className="grid grid-cols-[1.4fr_1fr_1fr] items-center gap-2 border-b border-slate-100 px-4 py-3 last:border-0 dark:border-white/5">
                <span className="text-[13px] font-semibold text-slate-800 dark:text-slate-100">{r.label}</span>
                <div className="text-center"><Cell v={r.free} /></div>
                <div className="text-center"><Cell v={r.pro} accent /></div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-[13px] leading-relaxed text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
            <p>Progres, stabilo, dan catatanmu selalu milikmu dan tidak dihapus saat langganan berhenti.</p>
          </div>

          <h2 className="mt-9 font-serif text-2xl font-medium text-slate-900 dark:text-white">Pertanyaan umum</h2>
          <ul className="mt-3 divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#18202D]">
            {FAQ.map((f, i) => (
              <li key={f.q}>
                <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{f.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && <p className="px-4 pb-4 text-[13px] leading-relaxed text-slate-600 dark:text-slate-300">{f.a}</p>}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-slate-500 dark:text-slate-400">
            {BILLING_LIVE && <button onClick={restore} disabled={busy} className="font-semibold underline-offset-4 hover:underline">Pulihkan pembelian</button>}
            {!user && onOpenAuth && <button onClick={onOpenAuth} className="font-semibold underline-offset-4 hover:underline">Masuk</button>}
            <button onClick={() => onOpenLegal?.('terms')} className="underline-offset-4 hover:underline">Ketentuan</button>
            <button onClick={() => onOpenLegal?.('privacy')} className="underline-offset-4 hover:underline">Kebijakan Privasi</button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-slate-200/80 bg-[#FBF9F5]/95 px-5 pb-6 pt-4 backdrop-blur dark:border-white/10 dark:bg-[#0F1520]/95">
        <div className="mx-auto max-w-2xl">
          {message && <p role="status" className="mb-2 text-center text-[13px] font-semibold text-rose-600 dark:text-rose-300">{message}</p>}
          <button onClick={act} disabled={busy || isPro || (!BILLING_LIVE && interested)} className="btn-gold w-full py-3.5 text-base">
            {busy ? 'Memproses…' : cta}
          </button>
          {BILLING_LIVE && <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">Diperpanjang otomatis. Batalkan kapan saja di akun toko aplikasimu.</p>}
        </div>
      </div>
    </div>
  );
};
