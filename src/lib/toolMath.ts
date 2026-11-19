// Fungsi murni untuk kalkulator di Alat bisnis. Tanpa React, mudah diuji.

export const MAX_INPUT = 1e15;

// ---------- parsing ----------
/**
 * Membaca angka gaya Indonesia: "1.000.000" -> 1000000, "12,5" -> 12.5,
 * "1.250,75" -> 1250.75, "Rp 60.000" -> 60000, "1,000.5" -> 1000.5.
 * Satu titik dengan tepat 3 digit di belakangnya ("1.500") dibaca sebagai ribuan.
 * Mengembalikan NaN bila kosong atau tidak valid.
 */
export function parseNum(raw: string): number {
  if (typeof raw !== 'string') return NaN;
  let s = raw.trim().replace(/^rp\.?/i, '').replace(/[%\s ]/g, '');
  if (!s) return NaN;
  let sign = 1;
  if (s[0] === '-') { sign = -1; s = s.slice(1); } else if (s[0] === '+') { s = s.slice(1); }
  if (!/^[\d.,]+$/.test(s) || !/\d/.test(s)) return NaN;
  const dots = (s.match(/\./g) || []).length;
  const commas = (s.match(/,/g) || []).length;
  if (dots && commas) {
    const lastC = s.lastIndexOf(',');
    const lastD = s.lastIndexOf('.');
    if (lastC > lastD) {
      // gaya Indonesia: titik = ribuan, koma = desimal
      if (!/^\d{1,3}(\.\d{3})*,\d+$/.test(s)) return NaN;
      s = s.replace(/\./g, '').replace(',', '.');
    } else {
      // gaya Inggris: koma = ribuan, titik = desimal
      if (!/^\d{1,3}(,\d{3})*\.\d+$/.test(s)) return NaN;
      s = s.replace(/,/g, '');
    }
  } else if (commas) {
    if (commas > 1) {
      if (!/^\d{1,3}(,\d{3})+$/.test(s)) return NaN;
      s = s.replace(/,/g, '');
    } else s = s.replace(',', '.');
  } else if (dots > 1) {
    if (!/^\d{1,3}(\.\d{3})+$/.test(s)) return NaN;
    s = s.replace(/\./g, '');
  } else if (dots === 1 && /^[1-9]\d{0,2}\.\d{3}$/.test(s)) {
    s = s.replace('.', '');
  }
  const n = Number(s);
  if (!Number.isFinite(n)) return NaN;
  return n === 0 ? 0 : sign * n; // hindari -0
}

/** Kolom opsional: kosong dianggap 0. */
export function parseOpt(raw: string): number {
  return raw.trim() === '' ? 0 : parseNum(raw);
}

// ---------- format ----------
const group = (i: string): string => i.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export function fmtNum(n: number, maxDec = 1): string {
  if (!Number.isFinite(n)) return '-';
  if (Math.abs(n) >= 1e15) return n < 0 ? 'sangat kecil' : 'sangat besar';
  const fixed = Math.abs(n).toFixed(maxDec);
  const [i, f = ''] = fixed.split('.');
  const frac = f.replace(/0+$/, '');
  const sign = n < 0 && Number(fixed) !== 0 ? '-' : '';
  return `${sign}${group(i)}${frac ? ',' + frac : ''}`;
}

export function idr(n: number): string {
  if (!Number.isFinite(n)) return '-';
  if (n >= 1e15) return 'Lebih dari Rp 1 kuadriliun';
  if (n <= -1e15) return 'Kurang dari -Rp 1 kuadriliun';
  const r = Math.round(Math.abs(n));
  return `${n < 0 && r !== 0 ? '-' : ''}Rp ${group(String(r))}`;
}

export function pct(n: number, d = 1): string {
  return Number.isFinite(n) ? `${fmtNum(n, d)}%` : '-';
}

export function months(n: number): string {
  if (!Number.isFinite(n)) return '-';
  if (n >= 120) return 'lebih dari 10 tahun';
  return `${fmtNum(n, 1)} bulan`;
}

// ---------- validasi ----------
interface Rule { min?: number; max?: number; gt?: number }
export function check(label: string, v: number, rule: Rule = {}): string | null {
  if (!Number.isFinite(v)) return `Isi ${label} dengan angka yang valid.`;
  if (Math.abs(v) > MAX_INPUT) return `${label} terlalu besar.`;
  if (rule.gt !== undefined && v <= rule.gt) return `${label} harus lebih dari ${fmtNum(rule.gt, 2)}.`;
  if (rule.min !== undefined && v < rule.min) return rule.min === 0 ? `${label} tidak boleh negatif.` : `${label} minimal ${fmtNum(rule.min, 2)}.`;
  if (rule.max !== undefined && v > rule.max) return `${label} maksimal ${fmtNum(rule.max, 2)}.`;
  return null;
}
const firstError = (list: Array<string | null>): string | null => list.find((e) => e) || null;

export type Fail = { ok: false; error: string };
const fail = (error: string): Fail => ({ ok: false, error });

// ---------- 1. margin & markup ----------
export type MarginTarget = { error: string } | { price: number; markup: number; profit: number };
export type MarginResult = Fail | {
  ok: true;
  profit: number;
  margin: number;
  markup: number | null;
  target: MarginTarget;
};

export function calcMargin(cost: number, price: number, target: number): MarginResult {
  const e = firstError([check('HPP', cost, { min: 0 }), check('Harga jual', price, { min: 0 })]);
  if (e) return fail(e);
  if (price <= 0) return fail('Harga jual harus lebih dari 0, kalau tidak margin tidak bisa dihitung.');
  const profit = price - cost;
  const margin = (profit / price) * 100;
  const markup = cost > 0 ? (profit / cost) * 100 : null;
  let tgt: MarginTarget;
  const te = check('Target margin', target, { min: 0 });
  if (te) tgt = { error: te };
  else if (target >= 100) tgt = { error: 'Target margin harus di bawah 100%.' };
  else {
    const needed = cost / (1 - target / 100);
    tgt = { price: needed, markup: (target / (100 - target)) * 100, profit: needed - cost };
  }
  return { ok: true, profit, margin, markup, target: tgt };
}

// ---------- 2. titik impas ----------
export type BreakevenResult = Fail | {
  ok: true;
  contribution: number;
  contributionRatio: number;
  units: number;
  revenue: number;
  profit: number;
  mos: number | null;
  gap: number;
};

export function calcBreakeven(fixed: number, price: number, variable: number, actual: number): BreakevenResult {
  const e = firstError([
    check('Biaya tetap', fixed, { min: 0 }),
    check('Harga jual', price, { min: 0 }),
    check('Biaya variabel', variable, { min: 0 }),
    check('Penjualan aktual', actual, { min: 0 }),
  ]);
  if (e) return fail(e);
  if (price <= variable) return fail('Harga jual harus lebih besar dari biaya variabel. Kalau tidak, setiap penjualan justru menambah rugi, berapa pun volumenya.');
  const contribution = price - variable;
  const raw = fixed / contribution;
  const units = Math.max(0, Math.ceil(raw - 1e-9));
  const profit = actual * contribution - fixed;
  const mos = actual > 0 ? ((actual - units) / actual) * 100 : null;
  return { ok: true, contribution, contributionRatio: (contribution / price) * 100, units, revenue: units * price, profit, mos, gap: units - actual };
}

// ---------- 3. harga & diskon ----------
export type PricingResult = Fail | {
  ok: true;
  price: number;
  discounted: number;
  totalDiscount: number;
  newMargin: number;
  unitProfit: number;
  newUnitProfit: number;
  extraVolume: number | null; // persen; null = mustahil
  maxDiscount: number;
  state: 'ok' | 'loss' | 'nomargin';
};

export function calcPricing(cost: number, margin: number, d1: number, d2: number): PricingResult {
  const e = firstError([
    check('HPP', cost, { gt: 0 }),
    check('Margin normal', margin, { min: 0 }),
    check('Diskon', d1, { min: 0 }),
    check('Diskon kedua', d2, { min: 0 }),
  ]);
  if (e) return fail(e);
  if (margin >= 100) return fail('Margin normal harus di bawah 100%.');
  if (d1 >= 100 || d2 >= 100) return fail('Diskon harus di bawah 100%.');
  const price = cost / (1 - margin / 100);
  const totalDiscount = (1 - (1 - d1 / 100) * (1 - d2 / 100)) * 100;
  const discounted = price * (1 - totalDiscount / 100);
  const newMargin = discounted > 0 ? ((discounted - cost) / discounted) * 100 : 0;
  const unitProfit = price - cost;
  const newUnitProfit = discounted - cost;
  let extraVolume: number | null;
  let state: 'ok' | 'loss' | 'nomargin' = 'ok';
  if (totalDiscount <= 1e-9) extraVolume = 0;
  else if (unitProfit <= 0) { extraVolume = null; state = 'nomargin'; }
  else if (newUnitProfit <= 1e-9) { extraVolume = null; state = 'loss'; }
  else extraVolume = (unitProfit / newUnitProfit - 1) * 100;
  return { ok: true, price, discounted, totalDiscount, newMargin, unitProfit, newUnitProfit, extraVolume, maxDiscount: price > 0 ? (1 - cost / price) * 100 : 0, state };
}

// ---------- 4. arus kas & runway ----------
export type CashflowResult = Fail | {
  ok: true;
  net: number;
  runway: number; // Infinity bila kas tidak berkurang
  rows: Array<{ month: number; bal: number }>;
  firstNegativeMonth: number | null;
};

export function calcCashflow(cash: number, inflow: number, outflow: number): CashflowResult {
  const e = firstError([
    check('Kas tersedia', cash, { min: 0 }),
    check('Uang masuk', inflow, { min: 0 }),
    check('Uang keluar', outflow, { min: 0 }),
  ]);
  if (e) return fail(e.replace('Kas tersedia tidak boleh negatif.', 'Kas tersedia tidak boleh negatif. Isi 0 bila saldo kosong.'));
  const net = inflow - outflow;
  const runway = net < 0 ? cash / -net : Infinity;
  let bal = cash;
  const rows = Array.from({ length: 6 }, (_, i) => { bal += net; return { month: i + 1, bal }; });
  const neg = rows.find((r) => r.bal < 0);
  return { ok: true, net, runway, rows, firstNegativeMonth: neg ? neg.month : null };
}

// ---------- 5. stok & MOQ ----------
export type InventoryResult = Fail | {
  ok: true;
  capital: number;
  months: number | null;
  profit: number;
  roiCycle: number | null;
  roiYear: number | null;
  cashBack: number;
  reorderPoint: number;
};

export function calcInventory(cost: number, moq: number, price: number, soldPerMonth: number, leadDays: number): InventoryResult {
  const e = firstError([
    check('Harga beli', cost, { min: 0 }),
    check('MOQ', moq, { gt: 0 }),
    check('Harga jual', price, { min: 0 }),
    check('Penjualan per bulan', soldPerMonth, { min: 0 }),
    check('Waktu tunggu pengiriman', leadDays, { min: 0 }),
  ]);
  if (e) return fail(e);
  const capital = cost * moq;
  const m = soldPerMonth > 0 ? moq / soldPerMonth : null;
  const profit = (price - cost) * moq;
  const roiCycle = capital > 0 ? (profit / capital) * 100 : null;
  const roiYear = roiCycle !== null && m !== null && m > 0 ? roiCycle * (12 / m) : null;
  return { ok: true, capital, months: m, profit, roiCycle, roiYear, cashBack: price * moq, reorderPoint: Math.max(0, Math.ceil((soldPerMonth / 30) * leadDays - 1e-9)) + 0 };
}

// ---------- 6. CAC / LTV / churn ----------
export type UnitResult = Fail | {
  ok: true;
  monthlyMargin: number;
  lifetime: number | null;
  ltv: number | null;
  ratio: number | null;
  payback: number | null; // null = tidak pernah balik modal
  paybackWithinLife: boolean | null;
};

export function calcUnit(cac: number, arpu: number, gm: number, churn: number): UnitResult {
  const e = firstError([
    check('CAC', cac, { min: 0 }),
    check('Pendapatan per pelanggan', arpu, { min: 0 }),
    check('Margin kotor', gm, { min: 0, max: 100 }),
    check('Churn bulanan', churn, { min: 0, max: 100 }),
  ]);
  if (e) return fail(e);
  const monthlyMargin = (arpu * gm) / 100;
  const lifetime = churn > 0 ? 100 / churn : null;
  const ltv = lifetime !== null ? monthlyMargin * lifetime : null;
  const ratio = ltv !== null && cac > 0 ? ltv / cac : null;
  const payback = monthlyMargin > 0 ? cac / monthlyMargin : null;
  const paybackWithinLife = payback !== null && lifetime !== null ? payback <= lifetime : null;
  return { ok: true, monthlyMargin, lifetime, ltv, ratio, payback, paybackWithinLife };
}

// ---------- 7. bunga majemuk ----------
export type CompoundResult = Fail | {
  ok: true;
  fv: number;
  deposits: number;
  growth: number;
  real: number;
  effectiveAnnual: number; // persen
  realAnnual: number; // persen
  months: number;
};

/** Bunga dimajemukkan bulanan (tingkat tahunan / 12). timing: setoran di awal atau akhir bulan. */
export function calcCompound(initial: number, monthly: number, ratePct: number, years: number, inflationPct: number, timing: 'end' | 'start'): CompoundResult {
  const e = firstError([
    check('Dana awal', initial, { min: 0 }),
    check('Setoran bulanan', monthly, { min: 0 }),
    check('Imbal hasil', ratePct, { min: 0, max: 100 }),
    check('Jangka waktu', years, { min: 0, max: 60 }),
    check('Inflasi', inflationPct, { min: 0, max: 100 }),
  ]);
  if (e) return fail(e);
  const n = Math.round(years * 12);
  const rm = ratePct / 100 / 12;
  const growthFactor = Math.exp(n * Math.log1p(rm));
  let annuity = rm === 0 ? n : Math.expm1(n * Math.log1p(rm)) / rm;
  if (timing === 'start') annuity *= 1 + rm;
  const fv = initial * growthFactor + monthly * annuity;
  if (!Number.isFinite(fv)) return fail('Hasil terlalu besar untuk ditampilkan. Kecilkan angka masukan.');
  const deposits = initial + monthly * n;
  const real = fv / Math.pow(1 + inflationPct / 100, n / 12);
  const effectiveAnnual = (Math.pow(1 + rm, 12) - 1) * 100;
  const realAnnual = ((1 + effectiveAnnual / 100) / (1 + inflationPct / 100) - 1) * 100;
  return { ok: true, fv, deposits, growth: fv - deposits, real, effectiveAnnual, realAnnual, months: n };
}
