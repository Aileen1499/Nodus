import React, { useState } from 'react';
import { ArrowLeft, BellRing, Building2, Check, ChevronDown, Crown, GraduationCap, ShieldCheck, Users, X } from 'lucide-react';
import { syncWaitlist, getWaitlistEmail, isValidEmail, WaitlistResult } from '../../lib/waitlist';
import { InviteCard } from '../growth/InviteCard';
import { allMaps } from '../../lib/nodeIndex';
import { TOOLS } from '../tools/ToolkitView';
import { useUser } from '../../context/UserContext';
import { useAuth } from '../../context/AuthContext';
import { BILLING_LIVE, OTHER_PLANS, OtherPlanId, SUPPORT_EMAIL, PRICING, idr, yearlyPerMonth, yearlySavingPercent, yearlyAsMonthly, yearlySavingAmount, yearlyPerDay, PaywallReason, FREE_TOOL_IDS, FREE_PREVIEW_LESSONS } from '../../lib/plans';
import { PlanId, startCheckout, restorePurchases } from '../../lib/billing';
import { useModal } from '../../lib/useModal';

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
  case: { title: 'Buka semua simulasi bisnis', text: 'Jalankan lebih banyak bisnis ilustrasi dan lihat faktor yang menentukan hidup atau matinya.' },
  story: { title: 'Buka semua kisah bisnis', text: 'Baca lebih banyak cerita nyata perusahaan yang tumbuh dan jatuh, lengkap dengan konsep di baliknya.' },
  manual: { title: 'Belajar bisnis sampai bisa menerapkan', text: 'Semua jalur, semua alat, dan latihan yang membuat ilmu benar-benar menempel.' },
};

const FAQ: { q: string; a: string }[] = [
  { q: 'Bisa batal kapan saja?', a: 'Bisa. Langganan dikelola lewat akun toko aplikasi atau penyedia pembayaranmu, dan tetap aktif sampai akhir periode yang sudah dibayar.' },
  { q: 'Bagaimana uji coba gratis 7 hari?', a: 'Paket tahunan diawali 7 hari uji coba. Kamu baru ditagih setelah uji coba berakhir, dan bisa membatalkannya sebelum itu.' },
  { q: 'Apakah progres belajarku hilang jika berhenti?', a: 'Tidak. Progres, stabilo, dan catatanmu tetap tersimpan. Hanya akses ke pelajaran dan alat Pro yang berhenti.' },
  { q: 'Apakah ini nasihat investasi atau keuangan?', a: 'Bukan. NODUS adalah materi belajar. Angka kasus bersifat ilustrasi, dan keputusan keuanganmu tetap tanggung jawabmu.' },
];

const PLAN_ICON = { student: GraduationCap, family: Users, team: Building2 } as const;

type Stats = { paths: number; lessons: number; tools: number };
type Val = true | false | string;
const COMPARE: { label: string; free: (s: Stats) => Val; pro: (s: Stats) => Val }[] = [
  { label: 'Jalur belajar', free: () => `1 penuh + ${FREE_PREVIEW_LESSONS} pelajaran pertama tiap jalur lain`, pro: (s) => `${s.paths} jalur sampai tuntas` },
  { label: 'Pelajaran', free: () => 'Pelajaran pembuka', pro: (s) => `${s.lessons} pelajaran` },
  { label: 'Alat bisnis', free: () => `${FREE_TOOL_IDS.length} alat dasar`, pro: (s) => `${s.tools} alat lengkap` },
  { label: 'Simulasi studi kasus', free: () => '2 kasus', pro: () => 'Semua kasus' },
  { label: 'Latihan pengulangan & streak', free: () => true, pro: () => true },
  { label: 'Sertifikat jalur', free: () => false, pro: () => true },
  { label: 'Mentor AI', free: () => 'Kuota harian dasar', pro: () => 'Kuota lebih besar' },
  { label: 'Jalur & fitur baru', free: () => false, pro: () => 'Tiap bulan, tanpa biaya tambahan' },
];
const Cell: React.FC<{ v: Val; pro?: boolean }> = ({ v, pro }) => {
  if (v === true) return <span className="flex justify-center"><span className={`flex h-5 w-5 items-center justify-center rounded-full ${pro ? 'bg-[#E3A63A] text-[#151517]' : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300'}`}><Check className="h-3 w-3" strokeWidth={3} /></span></span>;
  if (v === false) return <span className="flex justify-center text-slate-300 dark:text-slate-600"><X className="h-4 w-4" /></span>;
  return <span className={`text-center text-[11.5px] font-semibold leading-snug ${pro ? 'text-[#7A4D0A] dark:text-[#E9C06B]' : 'text-slate-500 dark:text-slate-400'}`}>{v}</span>;
};

export const PlansView: React.FC<PlansViewProps> = ({ onClose, reason = 'manual', onOpenLegal, onOpenAuth }) => {
  useModal(onClose);
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
    if (wanted.includes(id)) {
      const rest = wanted.filter((w) => w !== id);
      setWanted(rest);
      try { localStorage.setItem('nodus_plan_interest_v2', JSON.stringify(rest)); } catch { /* penyimpanan tidak tersedia */ }
      void push(rest, interested);
      return;
    }
    const next = [...wanted, id];
    setWanted(next);
    try { localStorage.setItem('nodus_plan_interest_v2', JSON.stringify(next)); } catch { /* penyimpanan tidak tersedia */ }
    void push(next, interested);
    if (SUPPORT_EMAIL) window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`Minat paket ${title} NODUS`)}`;
  };
  const [synced, setSynced] = useState<WaitlistResult>('local');
  const [emailDraft, setEmailDraft] = useState<string>(() => getWaitlistEmail());
  const [emailMsg, setEmailMsg] = useState<string | null>(null);
  const allInterests = (list: string[], pro: boolean) => (pro ? ['pro', ...list] : list);
  const push = async (list: string[], pro: boolean, extraEmail?: string) => {
    const r = await syncWaitlist(allInterests(list, pro), user?.uid ?? null, user?.email ?? null, extraEmail);
    setSynced(r);
    return r;
  };
  const saveEmail = async () => {
    if (!isValidEmail(emailDraft)) { setEmailMsg('Alamat email belum valid.'); return; }
    setEmailMsg(null);
    const r = await push(wanted, interested, emailDraft);
    setEmailMsg(r === 'synced' ? 'Email tersimpan di daftar tunggu. Tidak ada email konfirmasi sekarang; kabar dikirim saat paket dibuka.' : 'Koneksi bermasalah, email baru tersimpan di perangkat ini. Coba simpan lagi nanti.');
  };
  const head = HEADLINE[reason];
  const stats = React.useMemo(() => {
    const maps = allMaps().filter((m) => m.nodes.length > 0);
    return { paths: maps.length, lessons: maps.reduce((n, m) => n + m.nodes.length, 0), tools: TOOLS.length };
  }, []);
  const leaveInterest = () => {
    try { localStorage.removeItem('nodus_pro_interest_v1'); } catch { /* abaikan */ }
    setInterested(false);
    void push(wanted, false);
  };
  const price = plan === 'yearly' ? PRICING.yearly.price : PRICING.monthly.price;

  const act = async () => {
    setMessage(null);
    if (!BILLING_LIVE) {
      try { localStorage.setItem('nodus_pro_interest_v1', '1'); } catch { /* storage unavailable */ }
      setInterested(true);
      void push(wanted, true);
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

  const cta = isPro ? 'Pro sudah aktif' : !BILLING_LIVE ? (interested ? 'Kabari saya' : 'Kabari saya saat Pro dibuka') : plan === 'yearly' ? `Mulai ${PRICING.yearly.trialDays} hari gratis` : 'Berlangganan bulanan';

  return (
    <div className="fixed inset-0 z-[75] pt-[env(safe-area-inset-top)] flex flex-col bg-[#FBF9F5] dark:bg-[#121214] animate-fade-in" role="dialog" aria-modal="true" aria-label="Paket NODUS">
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
          </section>

          <div className="mt-5 grid grid-cols-2 gap-3" role="radiogroup" aria-label="Pilih periode">
            {(['yearly', 'monthly'] as PlanId[]).map((p) => {
              const on = plan === p;
              return (
                <button key={p} role="radio" aria-checked={on} onClick={() => setPlan(p)}
                  className={`relative rounded-2xl border-2 p-4 text-left transition-colors ${on ? 'border-[#E3A63A] bg-[#FDF0D5]/60 dark:bg-[#E3A63A]/10' : 'border-slate-200 bg-white hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03]'}`}>
                  {p === 'yearly' && <span className="absolute -top-2.5 left-3 rounded-full bg-[#E3A63A] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[#151517]">Hemat {yearlySavingPercent}%</span>}
                  <span className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-slate-600 dark:text-slate-300">{PRICING[p].label}</span>
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${on ? 'border-[#E3A63A] bg-[#E3A63A] text-[#151517]' : 'border-slate-300 dark:border-white/20'}`}>{on && <Check className="h-3 w-3" strokeWidth={3} />}</span>
                  </span>
                  <span className="mt-1 block font-serif text-[22px] font-medium leading-tight text-slate-900 dark:text-white" style={{ fontVariantNumeric: 'lining-nums' }}>{idr(PRICING[p].price)}</span>
                  <span className="block text-[12px] text-slate-500 dark:text-slate-400">{p === 'yearly' ? `${idr(yearlyPerMonth)} per bulan` : 'per bulan'}</span>
                </button>
              );
            })}
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
                  <div className="rounded-xl bg-white/5 px-2 py-2.5"><p className="text-[10px] font-bold uppercase tracking-wider text-[#FBF9F5]/70">Hemat</p><p className="mt-0.5 whitespace-nowrap text-[13px] font-extrabold text-[#E9C06B]">{idr(yearlySavingAmount)}</p></div>
                  <div className="rounded-xl bg-white/5 px-2 py-2.5"><p className="text-[10px] font-bold uppercase tracking-wider text-[#FBF9F5]/70">Per bulan</p><p className="mt-0.5 whitespace-nowrap text-[13px] font-extrabold">{idr(yearlyPerMonth)}</p></div>
                  <div className="rounded-xl bg-white/5 px-2 py-2.5"><p className="text-[10px] font-bold uppercase tracking-wider text-[#FBF9F5]/70">Per hari</p><p className="mt-0.5 whitespace-nowrap text-[13px] font-extrabold">{idr(yearlyPerDay)}</p></div>
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#FBF9F5]/60">Fleksibel, berhenti kapan saja. Paket tahunan jauh lebih hemat.</p>
              )}
              {plan === 'yearly' && <p className="mt-4 text-[13px] font-semibold text-[#E9C06B]">Mulai dengan uji coba gratis {PRICING.yearly.trialDays} hari. Batal kapan saja sebelum ditagih.</p>}
            </div>
          </div>

          <h2 className="mt-9 font-serif text-2xl font-medium text-slate-900 dark:text-white">Gratis untuk mulai, Pro untuk mahir</h2>
          <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">Yang berhenti di tengah jalan jarang sampai bisa menerapkan. Pro menghapus batas itu.</p>
          <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#1C1C1F]">
            <div className="grid grid-cols-[1.3fr_1fr_1fr] items-end gap-2 border-b border-slate-200/80 px-4 py-3 text-[11px] font-bold uppercase tracking-wider dark:border-white/10">
              <span className="text-slate-400">Fitur</span>
              <span className="text-center text-slate-500 dark:text-slate-400">Gratis</span>
              <span className="flex items-center justify-center gap-1 text-center text-[#9A6410] dark:text-[#E9C06B]"><Crown className="h-3.5 w-3.5" />Pro</span>
            </div>
            <ul className="divide-y divide-slate-100 dark:divide-white/5">
              {COMPARE.map((r) => (
                <li key={r.label} className="grid grid-cols-[1.3fr_1fr_1fr] items-center gap-2 px-4 py-3">
                  <span className="text-[13px] font-semibold leading-snug text-slate-800 dark:text-slate-100">{r.label}</span>
                  <Cell v={r.free(stats)} />
                  <Cell v={r.pro(stats)} pro />
                </li>
              ))}
            </ul>
            <button onClick={onClose} className="w-full border-t border-slate-200/80 px-4 py-3.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5">
              Lanjut belajar dengan paket Gratis
            </button>
          </div>
          <p className="mt-3 rounded-2xl bg-[#FDF0D5] px-4 py-3 text-[13px] font-semibold leading-snug text-[#7A4D0A] dark:bg-[#E3A63A]/10 dark:text-[#E9C06B]">
            Paket tahunan setara {idr(yearlyPerDay)} per hari, kurang dari segelas es teh.
          </p>

          <h2 className="mt-9 font-serif text-2xl font-medium text-slate-900 dark:text-white">Paket lain</h2>
          <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400">Belum dibuka untuk dibeli. Masuk daftar tunggu, dan kamu dikabari lebih dulu saat siap.</p>
          <ul className="mt-3 space-y-3">
            {OTHER_PLANS.map((o) => {
              const Icon = PLAN_ICON[o.id];
              const joined = wanted.includes(o.id);
              return (
                <li key={o.id} className={`rounded-3xl border bg-white p-4 transition-colors dark:bg-[#1C1C1F] ${joined ? 'border-emerald-500/50' : 'border-slate-200/80 dark:border-white/10'}`}>
                  <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]"><Icon className="h-5 w-5" /></span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[15px] font-bold text-slate-900 dark:text-white">{o.title}</p>
                      <p className="text-[12px] text-slate-500 dark:text-slate-400">{o.note}</p>
                    </div>
                    <p className="shrink-0 text-right font-serif text-xl font-medium text-slate-900 dark:text-white" style={{ fontVariantNumeric: 'lining-nums' }}>
                      {o.price ? <>{idr(o.price)}<span className="block font-sans text-[11px] font-semibold text-slate-500 dark:text-slate-400">per {o.per}</span></> : <span className="text-base">Hubungi kami</span>}
                    </p>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {o.perks.map((k) => <li key={k} className="flex items-start gap-2 text-[13px] text-slate-600 dark:text-slate-300"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9A6410] dark:text-[#E9C06B]" />{k}</li>)}
                  </ul>
                  {joined ? (
                    <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl bg-slate-100 px-4 py-3 dark:bg-white/5">
                      <p className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-100"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E3A63A] text-[#151517]"><Check className="h-3 w-3" strokeWidth={3} /></span>Terdaftar</p>
                      <button onClick={() => want(o.id, o.title)} className="text-[12px] font-bold text-slate-500 underline underline-offset-4 dark:text-slate-400">Batalkan</button>
                    </div>
                  ) : (
                    <button onClick={() => want(o.id, o.title)} className="btn-ink mt-3 flex w-full items-center justify-center gap-2 !py-3 text-sm">
                      <BellRing className="h-4 w-4" />{o.price ? 'Kabari saya' : 'Tanya paket tim'}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>

          {(wanted.length > 0 || (interested && !BILLING_LIVE)) && !user?.email && (
            <div className="mt-4 rounded-3xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-[#1C1C1F]">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Ke mana kami mengabarimu?</p>
              <p className="mt-0.5 text-[12px] text-slate-500 dark:text-slate-400">Opsional. Kami belum mengirim email otomatis. Alamat ini disimpan, dan kamu dikabari sekali saat paket dibuka. Email hanya untuk itu.</p>
              <div className="mt-3 flex gap-2">
                <input type="email" inputMode="email" autoComplete="email" value={emailDraft} onChange={(e) => { setEmailDraft(e.target.value); setEmailMsg(null); }} placeholder="nama@email.com"
                  className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:border-[#CF8E1F] focus:outline-none focus:ring-2 focus:ring-[#E3A63A]/30 dark:border-white/15 dark:bg-[#121214] dark:text-white" />
                <button onClick={saveEmail} className="btn-ink shrink-0 !px-5 text-sm">Simpan</button>
              </div>
              {emailMsg && <p role="status" className="mt-2 text-[12px] font-semibold text-slate-600 dark:text-slate-300">{emailMsg}</p>}
            </div>
          )}

          <h2 className="mt-9 font-serif text-2xl font-medium text-slate-900 dark:text-white">Dapat Pro lebih cepat</h2>
          <div className="mt-3 overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-[#1C1C1F]"><InviteCard /></div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-[13px] leading-relaxed text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
            <p>Progres, stabilo, dan catatanmu selalu milikmu dan tidak dihapus saat langganan berhenti.</p>
          </div>

          <h2 className="mt-9 font-serif text-2xl font-medium text-slate-900 dark:text-white">Pertanyaan umum</h2>
          <ul className="mt-3 divide-y divide-slate-200/80 overflow-hidden rounded-2xl border border-slate-200/80 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#1C1C1F]">
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

      <div className="absolute inset-x-0 bottom-0 border-t border-slate-200/80 bg-[#FBF9F5]/95 px-5 pb-6 pt-4 backdrop-blur dark:border-white/10 dark:bg-[#121214]/95">
        <div className="mx-auto max-w-2xl">
          {message && <p role="status" className="mb-2 text-center text-[13px] font-semibold text-rose-600 dark:text-rose-300">{message}</p>}
          {!BILLING_LIVE && interested && !isPro ? (
            <div className="flex items-center gap-3 rounded-2xl border border-[#E3A63A]/40 bg-[#FDF0D5]/60 px-4 py-3 dark:bg-[#E3A63A]/10">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E3A63A] text-[#151517]"><Check className="h-4 w-4" strokeWidth={3} /></span>
              <p className="min-w-0 flex-1 text-[13px] leading-snug text-slate-700 dark:text-slate-200"><span className="block font-bold text-slate-900 dark:text-white">Kamu sudah terdaftar</span>{synced === 'synced' ? 'Kami kabari saat Pro dibuka' : 'Tersimpan di perangkat ini'}{user?.email ? `, lewat ${user.email}` : ''}.</p>
              <button onClick={leaveInterest} className="shrink-0 text-[12px] font-bold text-slate-500 underline underline-offset-4 dark:text-slate-400">Batalkan</button>
            </div>
          ) : (
            <button onClick={act} disabled={busy || isPro} className="btn-gold w-full py-3.5 text-base">
              {busy ? 'Memproses…' : cta}
            </button>
          )}
          {!BILLING_LIVE && !interested && <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">Pro belum dibuka. Daftar untuk dikabari lebih dulu.</p>}
          {BILLING_LIVE && <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">Diperpanjang otomatis. Batalkan kapan saja di akun toko aplikasimu.</p>}
        </div>
      </div>
    </div>
  );
};
