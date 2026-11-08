import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Calculator, Tag, Wallet, Package, Users, PiggyBank, Scale, Info } from 'lucide-react';
import type { ToolId } from '../../lib/curriculumBuilder';

interface ToolkitViewProps {
  onClose: () => void;
  initialTool?: ToolId | null;
}

interface ToolMeta {
  id: ToolId;
  title: string;
  tagline: string;
  icon: React.ElementType;
}

export const TOOLS: ToolMeta[] = [
  { id: 'margin', title: 'Margin & Markup', tagline: 'Laba per unit, margin vs markup, dan harga untuk target margin.', icon: Tag },
  { id: 'breakeven', title: 'Titik Impas', tagline: 'Berapa unit harus terjual agar tidak rugi, dan seberapa aman posisi Anda.', icon: Scale },
  { id: 'pricing', title: 'Harga & Diskon', tagline: 'Batas diskon aman dan tambahan volume yang dibutuhkan untuk menutupnya.', icon: Calculator },
  { id: 'cashflow', title: 'Arus Kas & Runway', tagline: 'Berapa bulan kas bertahan dan proyeksi saldo 6 bulan ke depan.', icon: Wallet },
  { id: 'inventory', title: 'Stok & MOQ', tagline: 'Modal yang tertahan di stok minimum order dan kapan kembali jadi kas.', icon: Package },
  { id: 'unit', title: 'CAC, LTV & Churn', tagline: 'Apakah biaya mendapat pelanggan sebanding dengan nilai yang dibawanya.', icon: Users },
  { id: 'compound', title: 'Bunga Majemuk', tagline: 'Proyeksi investasi rutin dengan koreksi inflasi (nilai riil).', icon: PiggyBank },
];

export const toolTitle = (id: string): string => TOOLS.find((t) => t.id === id)?.title || 'Alat';

// ---------- helpers ----------
const num = (v: string): number => {
  const n = parseFloat(v.replace(/,/g, '.'));
  return Number.isFinite(n) ? n : 0;
};
const idr = (n: number): string => {
  if (!Number.isFinite(n)) return '-';
  const sign = n < 0 ? '-' : '';
  return `${sign}Rp ${Math.round(Math.abs(n)).toLocaleString('id-ID')}`;
};
const pct = (n: number, d = 1): string => (Number.isFinite(n) ? `${n.toLocaleString('id-ID', { maximumFractionDigits: d })}%` : '-');
const dec = (n: number, d = 1): string => (Number.isFinite(n) ? n.toLocaleString('id-ID', { maximumFractionDigits: d }) : '-');

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void; suffix?: string; prefix?: string; hint?: string }> = ({ label, value, onChange, suffix, prefix, hint }) => (
  <label className="block">
    <span className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">{label}</span>
    <span className="flex items-center rounded-2xl border border-slate-200 bg-white px-3.5 focus-within:border-[#CF8E1F] focus-within:ring-2 focus-within:ring-[#E3A63A]/30 dark:border-slate-700 dark:bg-[#1F1F23]">
      {prefix && <span className="mr-2 text-sm font-semibold text-slate-400">{prefix}</span>}
      <input
        type="number"
        inputMode="decimal"
        min="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full min-w-0 bg-transparent py-3 text-sm font-semibold text-slate-900 focus:outline-none dark:text-white"
      />
      {suffix && <span className="ml-2 shrink-0 text-xs font-semibold text-slate-400">{suffix}</span>}
    </span>
    {hint && <span className="mt-1 block text-[11px] text-slate-500 dark:text-slate-400">{hint}</span>}
  </label>
);

const Stat: React.FC<{ label: string; value: string; tone?: 'good' | 'bad' | 'neutral'; big?: boolean }> = ({ label, value, tone = 'neutral', big }) => (
  <div className={`rounded-2xl p-3.5 ${tone === 'good' ? 'bg-emerald-50 dark:bg-emerald-500/10' : tone === 'bad' ? 'bg-rose-50 dark:bg-rose-500/10' : 'bg-slate-50 dark:bg-slate-800/60'}`}>
    <p className="text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500 dark:text-slate-400">{label}</p>
    <p className={`mt-1 font-extrabold ${big ? 'text-2xl' : 'text-lg'} ${tone === 'good' ? 'text-emerald-700 dark:text-emerald-300' : tone === 'bad' ? 'text-rose-700 dark:text-rose-300' : 'text-slate-900 dark:text-white'}`}>{value}</p>
  </div>
);

const Verdict: React.FC<{ tone: 'good' | 'bad' | 'warn'; children: React.ReactNode }> = ({ tone, children }) => (
  <p className={`rounded-2xl px-4 py-3 text-sm font-medium leading-relaxed ${tone === 'good' ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200' : tone === 'bad' ? 'bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-200' : 'bg-[#FDF0D5] text-[#7A4D0A] dark:bg-[#E3A63A]/10 dark:text-[#E9C06B]'}`}>{children}</p>
);

const Grid: React.FC<{ children: React.ReactNode; cols?: number }> = ({ children, cols = 2 }) => (
  <div className={`grid grid-cols-1 gap-3 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>{children}</div>
);

// ---------- calculators ----------
const MarginTool: React.FC = () => {
  const [cost, setCost] = useState('60000');
  const [price, setPrice] = useState('100000');
  const [target, setTarget] = useState('45');
  const c = num(cost), p = num(price), t = num(target);
  const profit = p - c;
  const margin = p > 0 ? (profit / p) * 100 : 0;
  const markup = c > 0 ? (profit / c) * 100 : 0;
  const needed = t < 100 ? c / (1 - t / 100) : 0;
  return (
    <div className="space-y-4">
      <Grid cols={3}>
        <Field label="Harga pokok (HPP) per unit" prefix="Rp" value={cost} onChange={setCost} />
        <Field label="Harga jual per unit" prefix="Rp" value={price} onChange={setPrice} />
        <Field label="Target margin" suffix="%" value={target} onChange={setTarget} />
      </Grid>
      <Grid cols={3}>
        <Stat label="Laba kotor / unit" value={idr(profit)} tone={profit >= 0 ? 'good' : 'bad'} />
        <Stat label="Margin (dari harga jual)" value={pct(margin)} big />
        <Stat label="Markup (dari HPP)" value={pct(markup)} big />
      </Grid>
      <Stat label={`Harga jual agar margin ${pct(t, 0)}`} value={idr(needed)} />
      <Verdict tone="warn">Margin dan markup sering tertukar. Markup 100% hanya setara margin 50%. Hitung harga dari margin yang Anda inginkan, bukan dari markup.</Verdict>
    </div>
  );
};

const BreakevenTool: React.FC = () => {
  const [fixed, setFixed] = useState('6000000');
  const [price, setPrice] = useState('15000');
  const [variable, setVariable] = useState('9000');
  const [actual, setActual] = useState('1500');
  const f = num(fixed), p = num(price), v = num(variable), a = num(actual);
  const contribution = p - v;
  const be = contribution > 0 ? f / contribution : NaN;
  const mos = a > 0 && Number.isFinite(be) ? ((a - be) / a) * 100 : NaN;
  const profit = a * contribution - f;
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="Biaya tetap per bulan" prefix="Rp" value={fixed} onChange={setFixed} hint="Sewa, gaji tetap, listrik dasar, cicilan" />
        <Field label="Harga jual per unit" prefix="Rp" value={price} onChange={setPrice} />
        <Field label="Biaya variabel per unit" prefix="Rp" value={variable} onChange={setVariable} hint="Bahan, kemasan, komisi" />
        <Field label="Penjualan aktual per bulan" suffix="unit" value={actual} onChange={setActual} />
      </Grid>
      {contribution <= 0 ? (
        <Verdict tone="bad">Harga jual tidak melebihi biaya variabel, sehingga setiap penjualan menambah rugi. Naikkan harga atau turunkan biaya variabel.</Verdict>
      ) : (
        <>
          <Grid cols={3}>
            <Stat label="Margin kontribusi / unit" value={idr(contribution)} />
            <Stat label="Titik impas (unit)" value={`${dec(Math.ceil(be), 0)} unit`} big />
            <Stat label="Titik impas (omzet)" value={idr(be * p)} big />
          </Grid>
          <Grid>
            <Stat label="Laba/rugi bulanan" value={idr(profit)} tone={profit >= 0 ? 'good' : 'bad'} />
            <Stat label="Margin of safety" value={pct(mos, 0)} tone={mos >= 20 ? 'good' : mos >= 0 ? 'neutral' : 'bad'} />
          </Grid>
          {a < be ? (
            <Verdict tone="bad">Penjualan aktual masih {dec(Math.ceil(be - a), 0)} unit di bawah titik impas. Uji empat tuas: harga, volume, biaya variabel, biaya tetap.</Verdict>
          ) : (
            <Verdict tone={mos >= 20 ? 'good' : 'warn'}>Penjualan boleh turun sekitar {pct(mos, 0)} sebelum Anda mulai rugi. {mos < 20 ? 'Ruang amannya tipis.' : 'Ruang amannya cukup nyaman.'}</Verdict>
          )}
        </>
      )}
    </div>
  );
};

const PricingTool: React.FC = () => {
  const [cost, setCost] = useState('60000');
  const [margin, setMargin] = useState('40');
  const [discount, setDiscount] = useState('20');
  const c = num(cost), m = num(margin), d = num(discount);
  const price = m < 100 ? c / (1 - m / 100) : 0;
  const discounted = price * (1 - d / 100);
  const newMargin = discounted > 0 ? ((discounted - c) / discounted) * 100 : 0;
  const unitProfit = price - c;
  const newUnitProfit = discounted - c;
  const extra = newUnitProfit > 0 ? (unitProfit / newUnitProfit - 1) * 100 : NaN;
  const maxDiscountAtFloor = price > 0 ? (1 - c / price) * 100 : 0;
  return (
    <div className="space-y-4">
      <Grid cols={3}>
        <Field label="HPP per unit" prefix="Rp" value={cost} onChange={setCost} />
        <Field label="Margin normal" suffix="%" value={margin} onChange={setMargin} />
        <Field label="Diskon yang dipertimbangkan" suffix="%" value={discount} onChange={setDiscount} />
      </Grid>
      <Grid cols={3}>
        <Stat label="Harga normal" value={idr(price)} />
        <Stat label="Harga setelah diskon" value={idr(discounted)} />
        <Stat label="Margin setelah diskon" value={pct(newMargin)} tone={newMargin > 0 ? 'neutral' : 'bad'} />
      </Grid>
      <Grid>
        <Stat label="Tambahan volume agar laba sama" value={Number.isFinite(extra) ? `+${dec(extra, 0)}%` : 'Mustahil (rugi per unit)'} tone={Number.isFinite(extra) && extra < 60 ? 'neutral' : 'bad'} big />
        <Stat label="Diskon maksimum (jual impas HPP)" value={pct(maxDiscountAtFloor, 0)} />
      </Grid>
      <Verdict tone={Number.isFinite(extra) && extra < 60 ? 'warn' : 'bad'}>
        {Number.isFinite(extra)
          ? `Diskon ${pct(d, 0)} hanya masuk akal jika volume naik minimal ${dec(extra, 0)}% hanya untuk mempertahankan laba yang sama. Biaya operasional belum dihitung.`
          : 'Pada diskon ini Anda menjual di bawah HPP. Setiap unit tambahan menambah rugi.'}
      </Verdict>
    </div>
  );
};

const CashflowTool: React.FC = () => {
  const [cash, setCash] = useState('40000000');
  const [inflow, setInflow] = useState('30000000');
  const [outflow, setOutflow] = useState('50000000');
  const k = num(cash), i = num(inflow), o = num(outflow);
  const net = i - o;
  const runway = net < 0 ? k / -net : Infinity;
  const rows = useMemo(() => {
    let bal = k;
    return Array.from({ length: 6 }, (_, idx) => { bal += net; return { month: idx + 1, bal }; });
  }, [k, net]);
  return (
    <div className="space-y-4">
      <Grid cols={3}>
        <Field label="Kas tersedia sekarang" prefix="Rp" value={cash} onChange={setCash} />
        <Field label="Uang masuk per bulan" prefix="Rp" value={inflow} onChange={setInflow} />
        <Field label="Uang keluar per bulan" prefix="Rp" value={outflow} onChange={setOutflow} hint="Termasuk gaji pemilik dan cicilan" />
      </Grid>
      <Grid>
        <Stat label="Arus kas bersih / bulan" value={idr(net)} tone={net >= 0 ? 'good' : 'bad'} />
        <Stat label="Runway" value={Number.isFinite(runway) ? `${dec(runway, 1)} bulan` : 'Tidak terbatas (kas bertambah)'} tone={runway < 3 ? 'bad' : 'good'} big />
      </Grid>
      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
            <tr><th className="px-4 py-2">Bulan</th><th className="px-4 py-2 text-right">Saldo kas</th></tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.month} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-4 py-2 font-medium text-slate-700 dark:text-slate-300">Bulan {r.month}</td>
                <td className={`px-4 py-2 text-right font-bold ${r.bal < 0 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>{idr(r.bal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Verdict tone={runway < 3 ? 'bad' : 'good'}>
        {runway < 3 ? 'Runway di bawah 3 bulan. Potong biaya tak kritis, percepat tagihan, dan siapkan pendanaan sebelum kas kritis.' : 'Posisi kas masih aman. Tetap jaga cadangan minimal 2 bulan biaya tetap.'}
      </Verdict>
    </div>
  );
};

const InventoryTool: React.FC = () => {
  const [cost, setCost] = useState('3500000');
  const [moq, setMoq] = useState('20');
  const [price, setPrice] = useState('4300000');
  const [sold, setSold] = useState('6');
  const c = num(cost), q = num(moq), p = num(price), s = num(sold);
  const capital = c * q;
  const months = s > 0 ? q / s : NaN;
  const profit = (p - c) * q;
  const roiCycle = capital > 0 ? (profit / capital) * 100 : 0;
  const roiYear = Number.isFinite(months) && months > 0 ? roiCycle * (12 / months) : NaN;
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="Harga beli per unit" prefix="Rp" value={cost} onChange={setCost} hint="Contoh bawaan: unit AC dari distributor" />
        <Field label="Minimum order (MOQ)" suffix="unit" value={moq} onChange={setMoq} />
        <Field label="Harga jual per unit" prefix="Rp" value={price} onChange={setPrice} />
        <Field label="Penjualan per bulan" suffix="unit" value={sold} onChange={setSold} />
      </Grid>
      <Grid cols={3}>
        <Stat label="Modal tertahan di stok" value={idr(capital)} big />
        <Stat label="Waktu stok habis" value={Number.isFinite(months) ? `${dec(months, 1)} bulan` : '-'} tone={months > 4 ? 'bad' : 'neutral'} big />
        <Stat label="Laba kotor satu siklus" value={idr(profit)} tone={profit >= 0 ? 'good' : 'bad'} big />
      </Grid>
      <Grid>
        <Stat label="Imbal modal per siklus" value={pct(roiCycle)} />
        <Stat label="Imbal modal setahun (disetahunkan)" value={Number.isFinite(roiYear) ? pct(roiYear, 0) : '-'} />
      </Grid>
      <Verdict tone={months > 4 ? 'bad' : 'warn'}>
        {months > 4
          ? 'Stok butuh lebih dari 4 bulan untuk habis. Modal Anda tertidur. Negosiasikan MOQ lebih kecil, konsinyasi, atau pre-order sebelum menebus stok.'
          : 'Bandingkan imbal modal ini dengan alternatif lain dan pastikan kas operasional tetap cukup setelah menebus MOQ. Biaya simpan dan risiko barang usang belum dihitung.'}
      </Verdict>
    </div>
  );
};

const UnitTool: React.FC = () => {
  const [cac, setCac] = useState('100000');
  const [arpu, setArpu] = useState('80000');
  const [gm, setGm] = useState('50');
  const [churn, setChurn] = useState('8');
  const cacV = num(cac), a = num(arpu), g = num(gm), ch = num(churn);
  const monthlyMargin = (a * g) / 100;
  const life = ch > 0 ? 100 / ch : NaN;
  const ltv = Number.isFinite(life) ? monthlyMargin * life : NaN;
  const ratio = cacV > 0 && Number.isFinite(ltv) ? ltv / cacV : NaN;
  const payback = monthlyMargin > 0 ? cacV / monthlyMargin : NaN;
  const tone = ratio >= 3 ? 'good' : ratio >= 1.5 ? 'warn' : 'bad';
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="CAC (biaya per pelanggan baru)" prefix="Rp" value={cac} onChange={setCac} />
        <Field label="Pendapatan per pelanggan / bulan" prefix="Rp" value={arpu} onChange={setArpu} />
        <Field label="Margin kotor" suffix="%" value={gm} onChange={setGm} />
        <Field label="Churn bulanan" suffix="%" value={churn} onChange={setChurn} />
      </Grid>
      <Grid cols={3}>
        <Stat label="LTV" value={Number.isFinite(ltv) ? idr(ltv) : '-'} big />
        <Stat label="LTV : CAC" value={Number.isFinite(ratio) ? `${dec(ratio, 1)} : 1` : '-'} tone={ratio >= 3 ? 'good' : ratio < 1.5 ? 'bad' : 'neutral'} big />
        <Stat label="Payback CAC" value={Number.isFinite(payback) ? `${dec(payback, 1)} bulan` : '-'} tone={payback <= 12 ? 'good' : 'bad'} big />
      </Grid>
      <Verdict tone={tone}>
        {!Number.isFinite(ratio)
          ? 'Isi churn lebih dari 0 untuk menghitung umur pelanggan.'
          : ratio >= 3
          ? 'Rasio sehat menurut aturan praktis umum (sekitar 3:1). Pertimbangkan menaikkan anggaran akuisisi secara bertahap.'
          : ratio >= 1.5
          ? 'Masih positif tetapi tipis. Perbaiki retensi dan margin sebelum menaikkan anggaran iklan.'
          : 'Biaya mendapat pelanggan hampir menyamai nilainya. Skala akan memperbesar kerugian. Perbaiki unit economics lebih dulu.'}
      </Verdict>
      <p className="text-[11px] text-slate-500 dark:text-slate-400">Umur pelanggan = 100 / churn. Ambang 3:1 dan payback 12 bulan adalah heuristik populer, bukan hukum.</p>
    </div>
  );
};

const CompoundTool: React.FC = () => {
  const [initial, setInitial] = useState('10000000');
  const [monthly, setMonthly] = useState('1000000');
  const [rate, setRate] = useState('8');
  const [years, setYears] = useState('20');
  const [inflation, setInflation] = useState('3');
  const P = num(initial), M = num(monthly), r = num(rate) / 100, y = Math.min(Math.max(num(years), 0), 60), inf = num(inflation) / 100;
  const rm = r / 12;
  const n = Math.round(y * 12);
  const fv = rm === 0 ? P + M * n : P * Math.pow(1 + rm, n) + M * ((Math.pow(1 + rm, n) - 1) / rm);
  const deposits = P + M * n;
  const real = fv / Math.pow(1 + inf, y);
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="Dana awal" prefix="Rp" value={initial} onChange={setInitial} />
        <Field label="Setoran bulanan" prefix="Rp" value={monthly} onChange={setMonthly} />
        <Field label="Asumsi imbal hasil per tahun" suffix="%" value={rate} onChange={setRate} hint="Asumsi, bukan janji hasil" />
        <Field label="Jangka waktu" suffix="tahun" value={years} onChange={setYears} />
        <Field label="Asumsi inflasi per tahun" suffix="%" value={inflation} onChange={setInflation} />
      </Grid>
      <Grid cols={3}>
        <Stat label="Nilai akhir (nominal)" value={idr(fv)} big />
        <Stat label="Total setoran Anda" value={idr(deposits)} />
        <Stat label="Pertumbuhan" value={idr(fv - deposits)} tone="good" />
      </Grid>
      <Stat label="Nilai akhir dalam daya beli hari ini (riil)" value={idr(real)} big />
      <Verdict tone="warn">Ini simulasi matematis dengan imbal hasil tetap. Investasi nyata berfluktuasi dan bisa merugi. Alat ini bersifat edukasi, bukan rekomendasi produk investasi.</Verdict>
    </div>
  );
};

const RENDER: Record<ToolId, React.FC> = {
  margin: MarginTool,
  breakeven: BreakevenTool,
  pricing: PricingTool,
  cashflow: CashflowTool,
  inventory: InventoryTool,
  unit: UnitTool,
  compound: CompoundTool,
};

export const ToolkitView: React.FC<ToolkitViewProps> = ({ onClose, initialTool }) => {
  const [active, setActive] = useState<ToolId | null>(initialTool || null);
  const meta = TOOLS.find((t) => t.id === active);
  const Active = active ? RENDER[active] : null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FBF9F5] dark:bg-[#151517] animate-fade-in" role="dialog" aria-label="Alat bisnis">
      <div className="flex items-center gap-3 border-b border-slate-200/80 bg-[#FBF9F5]/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-[#151517]/95 sm:px-8">
        <button onClick={() => (active ? setActive(null) : onClose())} aria-label={active ? 'Kembali ke daftar alat' : 'Kembali ke peta'} className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0">
          <p className="eyebrow">{active ? 'Alat' : 'Perangkat kerja'}</p>
          <h2 className="truncate font-serif text-xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-2xl">{meta ? meta.title : 'Alat bisnis'}</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="mx-auto w-full max-w-4xl space-y-5 px-4 py-6 sm:px-8 sm:py-8">
          {!active && (
            <>
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Tujuh kalkulator untuk keputusan nyata: harga, impas, arus kas, stok, pelanggan, dan investasi. Semua angka berjalan di perangkat Anda dan tidak disimpan.
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TOOLS.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button key={t.id} onClick={() => setActive(t.id)} className="surface group flex items-start gap-4 p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-float">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]"><Icon className="h-5 w-5" /></span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-bold text-slate-900 dark:text-white">{t.title}</span>
                        <span className="mt-0.5 block text-sm leading-snug text-slate-600 dark:text-slate-400">{t.tagline}</span>
                      </span>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {active && meta && Active && (
            <>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{meta.tagline}</p>
              <div className="surface p-4 sm:p-6"><Active /></div>
              <p className="flex items-start gap-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                Hasil adalah perhitungan sederhana dari angka yang Anda masukkan, untuk edukasi. Bukan nasihat keuangan, pajak, atau hukum.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
