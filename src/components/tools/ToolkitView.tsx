import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Calculator, Tag, Wallet, Package, Users, PiggyBank, Scale, Info } from 'lucide-react';
import type { ToolId } from '../../lib/curriculumBuilder';
import { calcBreakeven, calcCashflow, calcCompound, calcInventory, calcMargin, calcPricing, calcUnit, fmtNum, idr, months, parseNum, parseOpt, pct } from '../../lib/toolMath';

interface ToolkitViewProps {
  onClose: () => void;
  initialTool?: ToolId | null;
  /** Alat yang terkunci paket; mengetuknya memanggil onLockedTool. */
  lockedTools?: readonly ToolId[];
  onLockedTool?: (tool: ToolId) => void;
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
const dec = (n: number, d = 1): string => fmtNum(n, d);

const Field: React.FC<{ label: string; value: string; onChange: (v: string) => void; suffix?: string; prefix?: string; hint?: string; invalid?: boolean }> = ({ label, value, onChange, suffix, prefix, hint, invalid }) => (
  <label className="block">
    <span className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">{label}</span>
    <span className={`flex items-center rounded-2xl border bg-white px-3.5 focus-within:border-[#CF8E1F] focus-within:ring-2 focus-within:ring-[#E3A63A]/30 dark:bg-[#18202D] ${invalid ? 'border-rose-300 dark:border-rose-500/60' : 'border-slate-200 dark:border-slate-700'}`}>
      {prefix && <span className="mr-2 text-sm font-semibold text-slate-400">{prefix}</span>}
      <input
        type="text"
        inputMode="decimal"
        autoComplete="off"
        spellCheck={false}
        aria-invalid={invalid || undefined}
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
    <p className={`mt-1 break-words font-extrabold ${big ? 'text-2xl' : 'text-lg'} ${tone === 'good' ? 'text-emerald-700 dark:text-emerald-300' : tone === 'bad' ? 'text-rose-700 dark:text-rose-300' : 'text-slate-900 dark:text-white'}`}>{value}</p>
  </div>
);

const Verdict: React.FC<{ tone: 'good' | 'bad' | 'warn'; children: React.ReactNode }> = ({ tone, children }) => (
  <p className={`rounded-2xl px-4 py-3 text-sm font-medium leading-relaxed ${tone === 'good' ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200' : tone === 'bad' ? 'bg-rose-50 text-rose-800 dark:bg-rose-500/10 dark:text-rose-200' : 'bg-[#FDF0D5] text-[#7A4D0A] dark:bg-[#E3A63A]/10 dark:text-[#E9C06B]'}`}>{children}</p>
);

const ErrorBox: React.FC<{ message: string }> = ({ message }) => (
  <p role="alert" className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium leading-relaxed text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">{message}</p>
);

const Hint: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="rounded-2xl border border-slate-200 px-4 py-3 dark:border-slate-700">
    <p className="eyebrow">Cara membaca hasil</p>
    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{children}</p>
  </div>
);

const Grid: React.FC<{ children: React.ReactNode; cols?: number }> = ({ children, cols = 2 }) => (
  <div className={`grid grid-cols-1 gap-3 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>{children}</div>
);

const bad = (v: number): boolean => !Number.isFinite(v);

// ---------- calculators ----------
const MarginTool: React.FC = () => {
  const [cost, setCost] = useState('60000');
  const [price, setPrice] = useState('100000');
  const [target, setTarget] = useState('45');
  const c = parseNum(cost), p = parseNum(price), t = parseNum(target);
  const r = calcMargin(c, p, t);
  return (
    <div className="space-y-4">
      <Grid cols={3}>
        <Field label="Harga pokok (HPP) per unit" prefix="Rp" value={cost} onChange={setCost} invalid={bad(c)} />
        <Field label="Harga jual per unit" prefix="Rp" value={price} onChange={setPrice} invalid={bad(p)} />
        <Field label="Target margin" suffix="%" value={target} onChange={setTarget} invalid={bad(t)} />
      </Grid>
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <Grid cols={3}>
            <Stat label="Laba kotor / unit" value={idr(r.profit)} tone={r.profit >= 0 ? 'good' : 'bad'} />
            <Stat label="Margin (dari harga jual)" value={pct(r.margin)} big tone={r.margin < 0 ? 'bad' : 'neutral'} />
            <Stat label="Markup (dari HPP)" value={r.markup === null ? 'Tidak terhingga (HPP 0)' : pct(r.markup)} big tone={r.markup !== null && r.markup < 0 ? 'bad' : 'neutral'} />
          </Grid>
          {'error' in r.target ? (
            <ErrorBox message={r.target.error} />
          ) : (
            <Grid>
              <Stat label={`Harga jual agar margin ${pct(t, 1)}`} value={idr(r.target.price)} />
              <Stat label="Markup yang setara" value={pct(r.target.markup)} />
            </Grid>
          )}
          {r.profit < 0 && <Verdict tone="bad">Harga jual di bawah HPP: Anda rugi {idr(-r.profit)} pada setiap unit.</Verdict>}
          <Verdict tone="warn">Margin dan markup sering tertukar. Markup 100% hanya setara margin 50%. Hitung harga dari margin yang Anda inginkan, bukan dari markup.</Verdict>
          <Hint>Margin = laba dibagi harga jual. Markup = laba dibagi HPP. Keduanya menunjukkan laba yang sama, hanya pembaginya berbeda. Harga target dihitung dari HPP / (1 - target margin).</Hint>
        </>
      )}
    </div>
  );
};

const BreakevenTool: React.FC = () => {
  const [fixed, setFixed] = useState('6000000');
  const [price, setPrice] = useState('15000');
  const [variable, setVariable] = useState('9000');
  const [actual, setActual] = useState('1500');
  const f = parseNum(fixed), p = parseNum(price), v = parseNum(variable), a = parseOpt(actual);
  const r = calcBreakeven(f, p, v, a);
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="Biaya tetap per bulan" prefix="Rp" value={fixed} onChange={setFixed} invalid={bad(f)} hint="Sewa, gaji tetap, listrik dasar, cicilan" />
        <Field label="Harga jual per unit" prefix="Rp" value={price} onChange={setPrice} invalid={bad(p)} />
        <Field label="Biaya variabel per unit" prefix="Rp" value={variable} onChange={setVariable} invalid={bad(v)} hint="Bahan, kemasan, komisi" />
        <Field label="Penjualan aktual per bulan" suffix="unit" value={actual} onChange={setActual} invalid={bad(a)} hint="Boleh dikosongkan" />
      </Grid>
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <Grid cols={3}>
            <Stat label="Margin kontribusi / unit" value={idr(r.contribution)} />
            <Stat label="Titik impas (unit)" value={`${dec(r.units, 0)} unit`} big />
            <Stat label="Titik impas (omzet)" value={idr(r.revenue)} big />
          </Grid>
          <Grid>
            <Stat label="Laba/rugi bulanan" value={a > 0 ? idr(r.profit) : '-'} tone={a > 0 ? (r.profit >= 0 ? 'good' : 'bad') : 'neutral'} />
            <Stat label="Margin of safety" value={r.mos === null ? '-' : pct(r.mos, 0)} tone={r.mos === null ? 'neutral' : r.mos >= 20 ? 'good' : r.mos >= 0 ? 'neutral' : 'bad'} />
          </Grid>
          {r.mos === null ? (
            <Verdict tone="warn">Isi penjualan aktual untuk melihat laba/rugi dan margin of safety.</Verdict>
          ) : r.gap > 0 ? (
            <Verdict tone="bad">Penjualan aktual masih {dec(r.gap, 0)} unit di bawah titik impas. Uji empat tuas: harga, volume, biaya variabel, biaya tetap.</Verdict>
          ) : (
            <Verdict tone={r.mos >= 20 ? 'good' : 'warn'}>Penjualan boleh turun sekitar {pct(r.mos, 0)} sebelum Anda mulai rugi. {r.mos < 20 ? 'Ruang amannya tipis.' : 'Ruang amannya cukup nyaman.'}</Verdict>
          )}
          <Hint>Titik impas = biaya tetap / (harga - biaya variabel), dibulatkan ke atas. Margin of safety = seberapa persen penjualan aktual boleh turun sebelum rugi; di bawah 20% dianggap tipis.</Hint>
        </>
      )}
    </div>
  );
};

const PricingTool: React.FC = () => {
  const [cost, setCost] = useState('60000');
  const [margin, setMargin] = useState('40');
  const [discount, setDiscount] = useState('20');
  const [discount2, setDiscount2] = useState('');
  const c = parseNum(cost), m = parseNum(margin), d = parseNum(discount), d2 = parseOpt(discount2);
  const r = calcPricing(c, m, d, d2);
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="HPP per unit" prefix="Rp" value={cost} onChange={setCost} invalid={bad(c)} />
        <Field label="Margin normal" suffix="%" value={margin} onChange={setMargin} invalid={bad(m)} />
        <Field label="Diskon yang dipertimbangkan" suffix="%" value={discount} onChange={setDiscount} invalid={bad(d)} />
        <Field label="Diskon kedua (opsional)" suffix="%" value={discount2} onChange={setDiscount2} invalid={bad(d2)} hint="Dihitung berurutan dari harga setelah diskon pertama" />
      </Grid>
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <Grid cols={3}>
            <Stat label="Harga normal" value={idr(r.price)} />
            <Stat label="Harga setelah diskon" value={idr(r.discounted)} />
            <Stat label="Margin setelah diskon" value={pct(r.newMargin)} tone={r.newMargin > 0 ? 'neutral' : 'bad'} />
          </Grid>
          <Grid>
            <Stat label="Tambahan volume agar laba sama" value={r.extraVolume === null ? 'Mustahil (tidak ada laba per unit)' : `+${dec(r.extraVolume, 0)}%`} tone={r.extraVolume !== null && r.extraVolume < 60 ? 'neutral' : 'bad'} big />
            <Stat label="Diskon maksimum (jual impas HPP)" value={pct(r.maxDiscount, 0)} />
          </Grid>
          {d2 > 0 && d > 0 && <Verdict tone="warn">Dua diskon berurutan ({pct(d, 0)} lalu {pct(d2, 0)}) setara satu diskon {pct(r.totalDiscount)}, bukan {pct(d + d2, 0)}.</Verdict>}
          <Verdict tone={r.state === 'ok' && r.extraVolume !== null && r.extraVolume < 60 ? 'warn' : 'bad'}>
            {r.state === 'loss'
              ? 'Pada diskon ini Anda menjual di bawah atau tepat di HPP. Setiap unit tambahan tidak menambah laba.'
              : r.state === 'nomargin'
              ? 'Margin normal 0%, jadi tidak ada laba yang bisa dipertahankan. Naikkan margin normal lebih dulu.'
              : r.totalDiscount <= 1e-9
              ? 'Tidak ada diskon, laba per unit tetap sama.'
              : `Diskon total ${pct(r.totalDiscount, 0)} hanya masuk akal jika volume naik minimal ${dec(r.extraVolume ?? 0, 0)}% hanya untuk mempertahankan laba yang sama. Biaya operasional belum dihitung.`}
          </Verdict>
          <Hint>Tambahan volume = laba per unit normal / laba per unit setelah diskon - 1. Angka besar berarti diskon itu mahal. Diskon maksimum adalah batas sebelum Anda menjual tepat di HPP.</Hint>
        </>
      )}
    </div>
  );
};

const CashflowTool: React.FC = () => {
  const [cash, setCash] = useState('40000000');
  const [inflow, setInflow] = useState('30000000');
  const [outflow, setOutflow] = useState('50000000');
  const k = parseNum(cash), i = parseOpt(inflow), o = parseNum(outflow);
  const r = calcCashflow(k, i, o);
  return (
    <div className="space-y-4">
      <Grid cols={3}>
        <Field label="Kas tersedia sekarang" prefix="Rp" value={cash} onChange={setCash} invalid={bad(k)} hint="Isi 0 bila saldo kosong" />
        <Field label="Uang masuk per bulan" prefix="Rp" value={inflow} onChange={setInflow} invalid={bad(i)} />
        <Field label="Uang keluar per bulan" prefix="Rp" value={outflow} onChange={setOutflow} invalid={bad(o)} hint="Termasuk gaji pemilik dan cicilan" />
      </Grid>
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <Grid>
            <Stat label="Arus kas bersih / bulan" value={idr(r.net)} tone={r.net >= 0 ? 'good' : 'bad'} />
            <Stat label="Runway" value={Number.isFinite(r.runway) ? months(r.runway) : 'Tidak terbatas (kas tidak berkurang)'} tone={r.runway < 3 ? 'bad' : 'good'} big />
          </Grid>
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-left text-[11px] uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-400">
                <tr><th className="px-4 py-2">Bulan</th><th className="px-4 py-2 text-right">Saldo kas</th></tr>
              </thead>
              <tbody>
                {r.rows.map((row) => (
                  <tr key={row.month} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-2 font-medium text-slate-700 dark:text-slate-300">Bulan {row.month}</td>
                    <td className={`px-4 py-2 text-right font-bold ${row.bal < 0 ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>{idr(row.bal)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Verdict tone={r.runway < 3 ? 'bad' : 'good'}>
            {k === 0 && r.net < 0
              ? 'Kas sudah kosong dan arus kas bersih negatif. Setiap bulan Anda membutuhkan tambahan dana.'
              : r.runway < 3
              ? 'Runway di bawah 3 bulan. Potong biaya tak kritis, percepat tagihan, dan siapkan pendanaan sebelum kas kritis.'
              : 'Posisi kas masih aman. Tetap jaga cadangan minimal 2 bulan biaya tetap.'}
          </Verdict>
          <Hint>Runway = kas / (uang keluar - uang masuk) saat kas berkurang tiap bulan. Tabel mengandaikan angka bulanan tetap; saldo merah berarti kas habis pada bulan itu{r.firstNegativeMonth ? ` (mulai bulan ${r.firstNegativeMonth})` : ''}.</Hint>
        </>
      )}
    </div>
  );
};

const InventoryTool: React.FC = () => {
  const [cost, setCost] = useState('3500000');
  const [moq, setMoq] = useState('20');
  const [price, setPrice] = useState('4300000');
  const [sold, setSold] = useState('6');
  const [lead, setLead] = useState('14');
  const c = parseNum(cost), q = parseNum(moq), p = parseNum(price), s = parseOpt(sold), l = parseOpt(lead);
  const r = calcInventory(c, q, p, s, l);
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="Harga beli per unit" prefix="Rp" value={cost} onChange={setCost} invalid={bad(c)} hint="Contoh bawaan: unit AC dari distributor" />
        <Field label="Minimum order (MOQ)" suffix="unit" value={moq} onChange={setMoq} invalid={bad(q)} />
        <Field label="Harga jual per unit" prefix="Rp" value={price} onChange={setPrice} invalid={bad(p)} />
        <Field label="Penjualan per bulan" suffix="unit" value={sold} onChange={setSold} invalid={bad(s)} />
        <Field label="Waktu tunggu pengiriman" suffix="hari" value={lead} onChange={setLead} invalid={bad(l)} hint="Untuk titik pesan ulang" />
      </Grid>
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <Grid cols={3}>
            <Stat label="Modal tertahan di stok" value={idr(r.capital)} big />
            <Stat label="Waktu stok habis" value={r.months === null ? '-' : months(r.months)} tone={r.months !== null && r.months > 4 ? 'bad' : 'neutral'} big />
            <Stat label="Laba kotor satu siklus" value={idr(r.profit)} tone={r.profit >= 0 ? 'good' : 'bad'} big />
          </Grid>
          <Grid cols={3}>
            <Stat label="Imbal modal per siklus" value={r.roiCycle === null ? '-' : pct(r.roiCycle)} />
            <Stat label="Imbal modal setahun (disetahunkan)" value={r.roiYear === null ? '-' : pct(r.roiYear, 0)} />
            <Stat label="Titik pesan ulang" value={s > 0 ? `${dec(r.reorderPoint, 0)} unit` : '-'} />
          </Grid>
          <Verdict tone={r.months === null || r.months > 4 || r.profit < 0 ? 'bad' : 'warn'}>
            {r.months === null
              ? 'Penjualan per bulan 0, jadi stok tidak pernah habis dan waktu putar tidak bisa dihitung. Isi perkiraan penjualan Anda.'
              : r.profit < 0
              ? 'Harga jual di bawah harga beli, setiap siklus stok menggerus modal.'
              : r.months > 4
              ? 'Stok butuh lebih dari 4 bulan untuk habis. Modal Anda tertidur. Negosiasikan MOQ lebih kecil, konsinyasi, atau pre-order sebelum menebus stok.'
              : 'Bandingkan imbal modal ini dengan alternatif lain dan pastikan kas operasional tetap cukup setelah menebus MOQ. Biaya simpan dan risiko barang usang belum dihitung.'}
          </Verdict>
          <Hint>Modal tertahan = harga beli x MOQ. Waktu stok habis = MOQ / penjualan per bulan. Imbal setahun hanya mengalikan imbal per siklus dengan jumlah siklus per tahun. Titik pesan ulang = penjualan harian x waktu tunggu, tanpa stok pengaman.</Hint>
        </>
      )}
    </div>
  );
};

const UnitTool: React.FC = () => {
  const [cac, setCac] = useState('100000');
  const [arpu, setArpu] = useState('80000');
  const [gm, setGm] = useState('50');
  const [churn, setChurn] = useState('8');
  const cacV = parseNum(cac), a = parseNum(arpu), g = parseNum(gm), ch = parseNum(churn);
  const r = calcUnit(cacV, a, g, ch);
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="CAC (biaya per pelanggan baru)" prefix="Rp" value={cac} onChange={setCac} invalid={bad(cacV)} />
        <Field label="Pendapatan per pelanggan / bulan" prefix="Rp" value={arpu} onChange={setArpu} invalid={bad(a)} />
        <Field label="Margin kotor" suffix="%" value={gm} onChange={setGm} invalid={bad(g)} />
        <Field label="Churn bulanan" suffix="%" value={churn} onChange={setChurn} invalid={bad(ch)} />
      </Grid>
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <Grid cols={3}>
            <Stat label="LTV" value={r.ltv === null ? 'Tak terbatas (churn 0%)' : idr(r.ltv)} big />
            <Stat label="LTV : CAC" value={r.ratio === null ? '-' : `${dec(r.ratio, 1)} : 1`} tone={r.ratio === null ? 'neutral' : r.ratio >= 3 ? 'good' : r.ratio < 1.5 ? 'bad' : 'neutral'} big />
            <Stat label="Payback CAC" value={r.payback === null ? 'Tidak balik modal' : months(r.payback)} tone={r.payback !== null && r.payback <= 12 ? 'good' : 'bad'} big />
          </Grid>
          <Verdict tone={r.ratio === null ? 'warn' : r.ratio >= 3 ? 'good' : r.ratio >= 1.5 ? 'warn' : 'bad'}>
            {r.lifetime === null
              ? 'Churn 0% berarti pelanggan tidak pernah pergi, LTV tidak terhingga. Itu jarang realistis, coba isi churn yang lebih konservatif.'
              : r.ratio === null
              ? 'CAC 0, jadi rasio LTV : CAC tidak terdefinisi.'
              : r.ratio >= 3
              ? 'Rasio sehat menurut aturan praktis umum (sekitar 3:1). Pertimbangkan menaikkan anggaran akuisisi secara bertahap.'
              : r.ratio >= 1.5
              ? 'Masih positif tetapi tipis. Perbaiki retensi dan margin sebelum menaikkan anggaran iklan.'
              : 'Biaya mendapat pelanggan hampir menyamai nilainya. Skala akan memperbesar kerugian. Perbaiki unit economics lebih dulu.'}
          </Verdict>
          <Hint>Umur pelanggan = 100 / churn{r.lifetime !== null ? ` (sekitar ${months(r.lifetime)})` : ''}. LTV = pendapatan x margin kotor x umur. Payback = CAC / laba kotor per bulan. Ambang 3:1 dan payback 12 bulan adalah heuristik populer, bukan hukum.</Hint>
        </>
      )}
    </div>
  );
};

const CompoundTool: React.FC = () => {
  const [initial, setInitial] = useState('10000000');
  const [monthly, setMonthly] = useState('1000000');
  const [rate, setRate] = useState('8');
  const [years, setYears] = useState('20');
  const [inflation, setInflation] = useState('3');
  const [timing, setTiming] = useState<'end' | 'start'>('end');
  const P = parseOpt(initial), M = parseOpt(monthly), rt = parseNum(rate), y = parseNum(years), inf = parseOpt(inflation);
  const r = calcCompound(P, M, rt, y, inf, timing);
  return (
    <div className="space-y-4">
      <Grid>
        <Field label="Dana awal" prefix="Rp" value={initial} onChange={setInitial} invalid={bad(P)} />
        <Field label="Setoran bulanan" prefix="Rp" value={monthly} onChange={setMonthly} invalid={bad(M)} />
        <Field label="Asumsi imbal hasil per tahun" suffix="%" value={rate} onChange={setRate} invalid={bad(rt)} hint="Asumsi, bukan janji hasil" />
        <Field label="Jangka waktu" suffix="tahun" value={years} onChange={setYears} invalid={bad(y)} />
        <Field label="Asumsi inflasi per tahun" suffix="%" value={inflation} onChange={setInflation} invalid={bad(inf)} />
        <label className="block">
          <span className="mb-1 block text-xs font-bold text-slate-700 dark:text-slate-300">Waktu setoran</span>
          <select
            value={timing}
            onChange={(e) => setTiming(e.target.value === 'start' ? 'start' : 'end')}
            className="w-full rounded-2xl border border-slate-200 bg-white px-3.5 py-3 text-sm font-semibold text-slate-900 focus:border-[#CF8E1F] focus:outline-none focus:ring-2 focus:ring-[#E3A63A]/30 dark:border-slate-700 dark:bg-[#18202D] dark:text-white"
          >
            <option value="end">Akhir bulan</option>
            <option value="start">Awal bulan</option>
          </select>
        </label>
      </Grid>
      {!r.ok ? <ErrorBox message={r.error} /> : (
        <>
          <Grid cols={3}>
            <Stat label="Nilai akhir (nominal)" value={idr(r.fv)} big />
            <Stat label="Total setoran Anda" value={idr(r.deposits)} />
            <Stat label="Pertumbuhan" value={idr(r.growth)} tone={r.growth > 0 ? 'good' : 'neutral'} />
          </Grid>
          <Stat label="Nilai akhir dalam daya beli hari ini (riil)" value={idr(r.real)} big />
          <Grid>
            <Stat label="Imbal efektif per tahun" value={pct(r.effectiveAnnual, 2)} />
            <Stat label="Imbal riil per tahun (setelah inflasi)" value={pct(r.realAnnual, 2)} tone={r.realAnnual < 0 ? 'bad' : 'neutral'} />
          </Grid>
          <Verdict tone="warn">Ini simulasi matematis dengan imbal hasil tetap. Investasi nyata berfluktuasi dan bisa merugi. Alat ini bersifat edukasi, bukan rekomendasi produk investasi.</Verdict>
          <Hint>Bunga dihitung bulanan (imbal tahunan / 12) selama {r.months} bulan. Nilai nominal adalah angka rupiah di masa depan; nilai riil membaginya dengan inflasi sehingga setara daya beli hari ini.</Hint>
        </>
      )}
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

export const ToolkitView: React.FC<ToolkitViewProps> = ({ initialTool, lockedTools = [], onLockedTool }) => {
  const [active, setActive] = useState<ToolId | null>(initialTool || null);
  const meta = TOOLS.find((t) => t.id === active);
  const Active = active ? RENDER[active] : null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FBF9F5] dark:bg-[#0F1520] animate-fade-in" role="dialog" aria-label="Alat bisnis">
      <div className="flex items-center gap-3 border-b border-slate-200/80 bg-[#FBF9F5]/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-[#0F1520]/95 sm:px-8">
        {active && <button onClick={() => setActive(null)} aria-label="Kembali ke daftar alat" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          <ArrowLeft className="h-5 w-5" />
        </button>}
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
                    <button key={t.id} onClick={() => (lockedTools.includes(t.id) ? onLockedTool?.(t.id) : setActive(t.id))} className="surface group flex items-start gap-4 p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-float">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]"><Icon className="h-5 w-5" /></span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">{t.title}{lockedTools.includes(t.id) && <span className="rounded-full bg-[#E3A63A] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide text-[#151517]">Pro</span>}</span>
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
