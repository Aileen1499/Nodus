// ==============================================================================
// NODUS — TEMPLATE EXCEL
// Satu lembar kerja per alat, dengan rumus hidup yang sejajar dengan kalkulator
// di aplikasi. Sel biru berlatar krem adalah isian; sisanya dihitung otomatis.
// ==============================================================================

import { buildXlsx, Cell, Row } from './xlsx';
import type { ToolId } from './curriculumBuilder';

const T = (v: string): Row => [{ v, style: 'title' }];
const H = (a: string, b: string, c: string): Row => [{ v: a, style: 'head' }, { v: b, style: 'head' }, { v: c, style: 'head' }];
const IN = (label: string, v: number, note: string, money = false): Row => [{ v: label }, { v, style: money ? 'inputMoney' : 'input' }, { v: note, style: 'note' }];
const OUT = (label: string, f: string, note = '', money = false): Row => [{ v: label }, { f, style: money ? 'money' : 'result' }, { v: note, style: 'note' }];
const GAP: Row = [];
const FOOT: Row[] = [GAP, [{ v: 'Isi hanya sel biru. Hasil adalah perhitungan sederhana untuk edukasi, bukan nasihat keuangan, pajak, atau hukum.', style: 'note' } as Cell]];

type Sheet = { name: string; rows: Row[] };

const SHEETS: Record<ToolId, Sheet> = {
  margin: {
    name: 'Margin & Markup',
    rows: [
      T('Margin & Markup'), GAP, H('Isian', 'Nilai', 'Catatan'),
      IN('HPP per unit', 60000, 'Biaya modal satu unit', true),
      IN('Harga jual per unit', 100000, 'Harga ke pelanggan', true),
      IN('Target margin (%)', 40, 'Margin yang Anda inginkan'),
      GAP, H('Hasil', 'Nilai', 'Cara membaca'),
      OUT('Laba kotor per unit', 'B5-B4', 'Harga jual dikurangi HPP', true),
      OUT('Margin (% dari harga jual)', 'IF(B5>0,(B5-B4)/B5*100,0)'),
      OUT('Markup (% dari HPP)', 'IF(B4>0,(B5-B4)/B4*100,0)', 'Selalu lebih besar dari margin'),
      OUT('Harga untuk target margin', 'IF(B6<100,B4/(1-B6/100),0)', 'HPP / (1 - target margin)', true),
      ...FOOT,
    ],
  },
  breakeven: {
    name: 'Titik Impas',
    rows: [
      T('Titik Impas (Break-even)'), GAP, H('Isian', 'Nilai', 'Catatan'),
      IN('Biaya tetap per bulan', 10000000, 'Sewa, gaji tetap, listrik dasar, cicilan', true),
      IN('Harga jual per unit', 50000, '', true),
      IN('Biaya variabel per unit', 30000, 'Bahan, kemasan, komisi', true),
      IN('Penjualan aktual (unit/bulan)', 800, 'Untuk menghitung margin keamanan'),
      GAP, H('Hasil', 'Nilai', 'Cara membaca'),
      OUT('Kontribusi per unit', 'B5-B6', 'Sisa tiap unit untuk menutup biaya tetap', true),
      OUT('Unit impas', 'IF(B5>B6,ROUNDUP(B4/(B5-B6),0),"Harga harus di atas biaya variabel")', 'Di bawah ini Anda rugi'),
      OUT('Omzet impas', 'IF(B5>B6,ROUNDUP(B4/(B5-B6),0)*B5,0)', '', true),
      OUT('Laba/rugi pada penjualan aktual', 'B7*(B5-B6)-B4', '', true),
      OUT('Margin keamanan (%)', 'IF(AND(B7>0,B5>B6),(B7-ROUNDUP(B4/(B5-B6),0))/B7*100,0)', 'Seberapa jauh penjualan di atas impas'),
      ...FOOT,
    ],
  },
  pricing: {
    name: 'Harga & Diskon',
    rows: [
      T('Harga & Diskon'), GAP, H('Isian', 'Nilai', 'Catatan'),
      IN('HPP per unit', 60000, '', true),
      IN('Margin normal (%)', 40, ''),
      IN('Diskon yang dipertimbangkan (%)', 10, ''),
      GAP, H('Hasil', 'Nilai', 'Cara membaca'),
      OUT('Harga normal', 'B4/(1-B5/100)', '', true),
      OUT('Harga setelah diskon', 'B9*(1-B6/100)', '', true),
      OUT('Margin baru (%)', 'IF(B10>0,(B10-B4)/B10*100,0)', 'Margin turun saat diskon'),
      OUT('Diskon maksimum tanpa rugi (%)', '(1-B4/B9)*100', 'Di atas ini Anda menjual rugi'),
      OUT('Tambahan volume yang dibutuhkan (%)', 'IF(B10-B4>0,((B9-B4)/(B10-B4)-1)*100,"Mustahil: rugi")', 'Agar total laba sama seperti sebelum diskon'),
      ...FOOT,
    ],
  },
  cashflow: {
    name: 'Arus Kas & Runway',
    rows: [
      T('Arus Kas & Runway'), GAP, H('Isian', 'Nilai', 'Catatan'),
      IN('Kas tersedia', 30000000, 'Isi 0 bila saldo kosong', true),
      IN('Uang masuk per bulan', 10000000, '', true),
      IN('Uang keluar per bulan', 15000000, 'Termasuk gaji pemilik dan cicilan', true),
      GAP, H('Hasil', 'Nilai', 'Cara membaca'),
      OUT('Arus kas bersih per bulan', 'B5-B6', '', true),
      OUT('Runway (bulan)', 'IF(B5-B6<0,B4/(B6-B5),"Kas tidak berkurang")', 'Berapa bulan kas bertahan'),
      GAP, H('Bulan', 'Saldo proyeksi', ''),
      ...[1, 2, 3, 4, 5, 6].map((m): Row => [{ v: `Bulan ${m}` }, { f: `$B$4+$B$9*${m}`, style: 'money' }]),
      ...FOOT,
    ],
  },
  inventory: {
    name: 'Stok & MOQ',
    rows: [
      T('Stok & MOQ'), GAP, H('Isian', 'Nilai', 'Catatan'),
      IN('Harga beli per unit', 50000, '', true),
      IN('Minimum order (MOQ, unit)', 500, ''),
      IN('Harga jual per unit', 80000, '', true),
      IN('Penjualan per bulan (unit)', 100, ''),
      IN('Waktu tunggu pengiriman (hari)', 14, ''),
      GAP, H('Hasil', 'Nilai', 'Cara membaca'),
      OUT('Modal tertahan', 'B4*B5', 'Kas yang terkunci di stok', true),
      OUT('Stok habis dalam (bulan)', 'IF(B7>0,B5/B7,"Tidak ada penjualan")'),
      OUT('Laba satu siklus', '(B6-B4)*B5', '', true),
      OUT('ROI per siklus (%)', 'IF(B4*B5>0,(B6-B4)*B5/(B4*B5)*100,0)'),
      OUT('ROI disetahunkan (%)', 'IF(AND(B7>0,B4*B5>0),(B6-B4)*B5/(B4*B5)*100*(12/(B5/B7)),0)'),
      OUT('Titik pesan ulang (unit)', 'ROUNDUP(B7/30*B8,0)', 'Pesan lagi saat stok tinggal segini'),
      ...FOOT,
    ],
  },
  unit: {
    name: 'CAC, LTV & Churn',
    rows: [
      T('CAC, LTV & Churn'), GAP, H('Isian', 'Nilai', 'Catatan'),
      IN('CAC (biaya dapat 1 pelanggan)', 200000, '', true),
      IN('Pendapatan per pelanggan / bulan', 100000, '', true),
      IN('Margin kotor (%)', 70, ''),
      IN('Churn bulanan (%)', 5, 'Pelanggan yang berhenti per bulan'),
      GAP, H('Hasil', 'Nilai', 'Cara membaca'),
      OUT('Margin per pelanggan / bulan', 'B5*B6/100', '', true),
      OUT('Umur pelanggan (bulan)', 'IF(B7>0,100/B7,"Tak terhingga")'),
      OUT('LTV', 'IF(B7>0,B10*100/B7,"-")', 'Nilai pelanggan sepanjang umur', true),
      OUT('LTV : CAC', 'IF(AND(B7>0,B4>0),B10*100/B7/B4,"-")', 'Sehat bila 3 atau lebih'),
      OUT('Balik modal (bulan)', 'IF(B10>0,B4/B10,"-")', 'Idealnya di bawah 12'),
      ...FOOT,
    ],
  },
  compound: {
    name: 'Bunga Majemuk',
    rows: [
      T('Bunga Majemuk'), GAP, H('Isian', 'Nilai', 'Catatan'),
      IN('Dana awal', 0, '', true),
      IN('Setoran bulanan', 1000000, 'Setoran di akhir bulan', true),
      IN('Imbal hasil per tahun (%)', 12, 'Asumsi, bukan janji hasil'),
      IN('Jangka waktu (tahun)', 10, ''),
      IN('Asumsi inflasi per tahun (%)', 4, ''),
      GAP, H('Hasil', 'Nilai', 'Cara membaca'),
      OUT('Total setoran', 'B4+B5*B7*12', '', true),
      OUT('Nilai akhir', 'IF(B6=0,B4+B5*B7*12,B4*(1+B6/100/12)^(B7*12)+B5*(((1+B6/100/12)^(B7*12)-1)/(B6/100/12)))', 'Bunga dimajemukkan bulanan', true),
      OUT('Pertumbuhan', 'B12-B11', 'Nilai akhir dikurangi setoran', true),
      OUT('Nilai riil (daya beli hari ini)', 'B12/(1+B8/100)^B7', 'Setelah koreksi inflasi', true),
      ...FOOT,
    ],
  },
};

export const templateFileName = (tool: ToolId): string => `nodus-template-${tool}.xlsx`;

export const downloadTemplate = (tool: ToolId): void => {
  const s = SHEETS[tool];
  const blob = buildXlsx(s.name, s.rows);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = templateFileName(tool);
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
};

/** Dipakai untuk uji: isi lembar kerja sebagai blob. */
export const templateBlob = (tool: ToolId): Blob => buildXlsx(SHEETS[tool].name, SHEETS[tool].rows);
export const TEMPLATE_TOOLS = Object.keys(SHEETS) as ToolId[];
