// NODUS — Studi Kasus Simulasi: mengapa bisnis bertahan atau bangkrut.
// Semua tokoh dan angka adalah ILUSTRASI untuk melatih mekanisme keputusan, bukan data perusahaan nyata.

export interface CaseChoice {
  text: string;
  dKas: number;      // perubahan kas (Rp juta)
  dRep: number;      // perubahan reputasi/posisi pasar (poin)
  result: string;    // apa yang terjadi
  why: string;       // faktor penentu di balik hasil
  good: boolean;     // keputusan yang sehat
}

export interface CaseRound {
  title: string;
  factor: string;    // faktor bisnis yang diuji (ditampilkan di bedah kasus)
  situation: string;
  lessonId?: string; // pelajaran terkait
  choices: CaseChoice[];
}

export interface BusinessCase {
  id: string;
  title: string;
  tagline: string;
  emoji?: string;
  industry: string;
  startKas: number;
  startRep: number;
  growKas: number;   // kas minimal untuk "tumbuh sehat"
  growRep: number;   // reputasi minimal untuk "tumbuh sehat"
  intro: string;
  rounds: CaseRound[];
}

export const CASES: BusinessCase[] = [
  {
    id: 'case-kedai-kopi',
    title: 'Kedai Kopi Sudut',
    tagline: 'Ramai belum tentu untung. Temukan mengapa banyak kedai tutup dalam setahun.',
    industry: 'Makanan & minuman',
    startKas: 150, startRep: 50, growKas: 165, growRep: 70,
    intro: 'Kamu membuka kedai kopi dengan modal Rp150 juta. HPP per gelas sekitar Rp9.000. Bertahan satu tahun berarti kas tetap positif dan pelanggan setia bertambah.',
    rounds: [
      { title: 'Memilih Lokasi', factor: 'Biaya tetap & lokasi', lessonId: 'id-2-kedai',
        situation: 'Tiga pilihan tempat. Sewa adalah biaya tetap yang harus dibayar walau sepi.',
        choices: [
          { text: 'Gerai di mal, sewa Rp25 juta per bulan', dKas: -60, dRep: 10, good: false, result: 'Ramai, tetapi sewa menelan hampir separuh omzet bulanan.', why: 'Biaya tetap terlalu besar untuk volume yang belum terbukti.' },
          { text: 'Ruko dekat kampus, sewa Rp6 juta per bulan', dKas: -15, dRep: 10, good: true, result: 'Pelanggan mahasiswa stabil dan sewa terjangkau.', why: 'Biaya tetap rendah memberi napas panjang sebelum untung.' },
          { text: 'Garasi rumah di gang sepi', dKas: -5, dRep: -10, good: false, result: 'Hemat sewa, tetapi sedikit yang lewat.', why: 'Biaya murah tidak berguna bila tidak ada lalu lintas pelanggan.' }
        ] },
      { title: 'Menentukan Harga', factor: 'Harga & margin', lessonId: 'ue-3-harga',
        situation: 'HPP per gelas Rp9.000. Kedai di seberang menjual Rp12.000.',
        choices: [
          { text: 'Jual Rp12.000 agar menyaingi', dKas: -10, dRep: 5, good: false, result: 'Antrean panjang, tetapi margin tipis dan gaji barista tak tertutup.', why: 'Perang harga tanpa keunggulan biaya menggerus laba.' },
          { text: 'Jual Rp18.000 dengan kualitas dan pengalaman yang jelas', dKas: 25, dRep: 5, good: true, result: 'Margin sekitar 50%, pelanggan menghargai kualitas.', why: 'Harga ditetapkan dari nilai dan margin, bukan hanya pesaing.' },
          { text: 'Jual Rp22.000 sebagai kopi mewah', dKas: 5, dRep: -10, good: false, result: 'Margin tebal, tetapi volume jatuh di area mahasiswa.', why: 'Harga harus sesuai kemampuan bayar pasar sasaran.' }
        ] },
      { title: 'Saat Mulai Ramai', factor: 'Ekspansi & retensi', lessonId: 'ue-5-retensi',
        situation: 'Kedai ramai. Kas sudah menipis dan ada godaan untuk cepat membesar.',
        choices: [
          { text: 'Buka cabang kedua memakai hampir semua kas', dKas: -70, dRep: 0, good: false, result: 'Dua gerai sama-sama belum matang dan kas hampir habis.', why: 'Ekspansi sebelum model terbukti dan kas aman mempercepat kebangkrutan.' },
          { text: 'Pasang iklan influencer Rp15 juta tanpa mengukur hasil', dKas: -15, dRep: 5, good: false, result: 'Ada lonjakan sesaat, tetapi sulit diketahui efeknya.', why: 'Pengeluaran pemasaran harus bisa diukur.' },
          { text: 'Buat kartu langganan dan program stempel untuk pelanggan tetap', dKas: 10, dRep: 15, good: true, result: 'Pembelian ulang naik dan pemasukan lebih terduga.', why: 'Retensi lebih murah daripada mencari pelanggan baru.' }
        ] },
      { title: 'Harga Susu Naik 20%', factor: 'Ketahanan biaya', lessonId: 'ue-1-biaya',
        situation: 'Pemasok menaikkan harga susu 20%. Margin kamu terancam.',
        choices: [
          { text: 'Tahan harga jual dan tanggung selisihnya', dKas: -25, dRep: 0, good: false, result: 'Pelanggan senang, tetapi margin tergerus tiap gelas.', why: 'Menyerap kenaikan biaya tanpa batas menghabiskan kas.' },
          { text: 'Naikkan harga sedikit dan efisienkan resep dan menu', dKas: 5, dRep: -3, good: true, result: 'Margin pulih dan pelanggan setia tetap bertahan.', why: 'Respons seimbang antara harga dan efisiensi menjaga margin.' },
          { text: 'Kurangi kualitas bahan agar murah', dKas: 10, dRep: -25, good: false, result: 'Biaya turun, tetapi ulasan memburuk.', why: 'Memangkas kualitas merusak aset terpenting: reputasi.' }
        ] }
    ]
  },
  {
    id: 'case-fashion-online',
    title: 'Toko Fashion Online',
    tagline: 'Omzet naik tetapi kas tipis. Di mana laba menghilang?',
    industry: 'E-commerce',
    startKas: 100, startRep: 50, growKas: 115, growRep: 60,
    intro: 'Kamu menjual pakaian lewat marketplace dengan modal Rp100 juta. Margin kontribusi sebelum iklan sekitar 40%, sehingga ROAS impas sekitar 2,5.',
    rounds: [
      { title: 'Stok Awal', factor: 'Stok & modal kerja', lessonId: 'ec-5-stok',
        situation: 'Pemasok menawarkan harga murah untuk pembelian besar.',
        choices: [
          { text: 'Beli 1.000 potong sekaligus agar murah', dKas: -60, dRep: 0, good: false, result: 'Sebagian model tidak laku dan kas tertahan di gudang.', why: 'Stok lambat mengikat modal kerja.' },
          { text: 'Pesan 200 potong untuk uji, restock bagi yang laku', dKas: -20, dRep: 0, good: true, result: 'Kamu tahu model laris sebelum menambah stok.', why: 'Uji kecil mengurangi risiko stok mati.' },
          { text: 'Dropship tanpa kontrol kualitas', dKas: -5, dRep: -10, good: false, result: 'Keluhan keterlambatan dan kualitas bermunculan.', why: 'Mengabaikan kualitas dan pengiriman merusak ulasan.' }
        ] },
      { title: 'Belanja Iklan', factor: 'ROAS & margin kontribusi', lessonId: 'ec-2-roas',
        situation: 'Iklan menghasilkan ROAS rata-rata 1,8, sedangkan ROAS impas 2,5.',
        choices: [
          { text: 'Teruskan semua kampanye karena omzet naik', dKas: -30, dRep: 5, good: false, result: 'Omzet naik, tetapi setiap iklan merugi.', why: 'Omzet dari iklan di bawah ROAS impas bukan laba.' },
          { text: 'Hentikan kampanye di bawah 2,5, perbesar yang di atasnya', dKas: 20, dRep: 5, good: true, result: 'Belanja iklan berkurang dan laba muncul.', why: 'Pantau ROAS impas untuk mengalokasikan anggaran.' },
          { text: 'Hentikan iklan sepenuhnya', dKas: 0, dRep: -10, good: false, result: 'Biaya iklan hilang, tetapi pesanan juga menurun drastis.', why: 'Berhenti total mengorbankan pertumbuhan yang mungkin untung.' }
        ] },
      { title: 'Promo Besar', factor: 'Diskon & margin', lessonId: 'ec-1-margin',
        situation: 'Marketplace mengajak promo. Stok lambat masih menumpuk.',
        choices: [
          { text: 'Diskon 50% untuk semua produk', dKas: -25, dRep: 5, good: false, result: 'Banyak terjual, tetapi banyak yang rugi.', why: 'Diskon tanpa menghitung margin kontribusi merugikan.' },
          { text: 'Diskon terarah untuk stok lambat dengan batas margin', dKas: 10, dRep: 0, good: true, result: 'Stok lambat berkurang dan kas bebas.', why: 'Promo terarah melepas kas tanpa menghancurkan margin.' },
          { text: 'Tidak ikut promo apa pun', dKas: -5, dRep: -5, good: false, result: 'Stok lambat tetap menumpuk.', why: 'Menghindari promo sepenuhnya melewatkan likuidasi stok.' }
        ] },
      { title: 'Retur dan Komisi Naik', factor: 'Konsentrasi kanal', lessonId: 'ec-7-kanal',
        situation: 'Retur 18% karena ukuran tidak sesuai, dan komisi platform naik.',
        choices: [
          { text: 'Tetap di satu platform dan terima biayanya', dKas: -10, dRep: 0, good: false, result: 'Margin terus menipis.', why: 'Ketergantungan satu kanal melemahkan daya tawar.' },
          { text: 'Tambah tabel ukuran dan foto jujur, dan kumpulkan kontak pelanggan dengan izin', dKas: 15, dRep: 10, good: true, result: 'Retur turun dan pembelian ulang langsung meningkat.', why: 'Mengatasi penyebab retur dan membangun aset pelanggan sendiri.' },
          { text: 'Abaikan retur', dKas: -15, dRep: -10, good: false, result: 'Ulasan jelek dan biaya retur membesar.', why: 'Retur tinggi adalah kebocoran yang harus ditambal.' }
        ] }
    ]
  },
  {
    id: 'case-startup-antar',
    title: 'Startup Antar Jasa',
    tagline: 'Pengguna melonjak, tetapi dana habis. Mengapa "bakar uang" bisa berakhir buruk?',
    industry: 'Startup layanan',
    startKas: 500, startRep: 50, growKas: 400, growRep: 65,
    intro: 'Startup layanan antar kamu mendapat pendanaan awal Rp500 juta. Setiap pesanan saat ini rugi sekitar Rp8.000 setelah biaya kurir dan komisi.',
    rounds: [
      { title: 'Mencari Pengguna', factor: 'Akuisisi (CAC)', lessonId: 'ue-4-cac-ltv',
        situation: 'Pesaing besar memberi promo gila-gilaan.',
        choices: [
          { text: 'Gratis ongkir dan diskon besar ke semua pengguna', dKas: -200, dRep: 10, good: false, result: 'Unduhan melonjak, tetapi sebagian besar tidak pernah kembali.', why: 'Akuisisi mahal tanpa retensi membakar kas.' },
          { text: 'Promo terbatas pada satu segmen yang sering membeli ulang', dKas: -80, dRep: 10, good: true, result: 'Pengguna lebih sedikit, tetapi lebih setia.', why: 'Fokus segmen menekan CAC dan meningkatkan LTV.' },
          { text: 'Tanpa promo sama sekali', dKas: -10, dRep: -10, good: false, result: 'Hemat, tetapi pertumbuhan hampir tidak ada.', why: 'Tanpa akuisisi, tidak ada basis pelanggan untuk diuji.' }
        ] },
      { title: 'Rugi per Pesanan', factor: 'Unit economics', lessonId: 'ue-1-biaya',
        situation: 'Setiap pesanan merugi Rp8.000. Investor menanyakan jalan menuju untung.',
        choices: [
          { text: 'Kejar volume dulu, margin belakangan', dKas: -150, dRep: 5, good: false, result: 'Semakin besar volume, semakin besar rugi.', why: 'Skala tidak menyelamatkan unit economics yang negatif.' },
          { text: 'Perbaiki biaya kurir dan komisi sampai margin kontribusi positif', dKas: -40, dRep: 5, good: true, result: 'Rugi per pesanan berubah menjadi untung tipis.', why: 'Margin kontribusi positif adalah syarat skala yang sehat.' },
          { text: 'Naikkan harga 50% mendadak', dKas: 30, dRep: -20, good: false, result: 'Sebagian pengguna pergi.', why: 'Kenaikan drastis tanpa nilai tambahan memicu churn.' }
        ] },
      { title: 'Dana Mulai Menipis', factor: 'Runway & fokus', lessonId: 'ue-7-runway',
        situation: 'Kas menyusut. Ada ajakan membuka kota baru.',
        choices: [
          { text: 'Ekspansi ke kota baru dengan sisa dana', dKas: -150, dRep: 0, good: false, result: 'Dua kota belum untung dan dana mendekati nol.', why: 'Ekspansi saat model belum terbukti memperpendek runway.' },
          { text: 'Fokus kota inti dan jaga runway minimal 12 bulan', dKas: -20, dRep: 0, good: true, result: 'Operasi stabil dan ada waktu memperbaiki metrik.', why: 'Runway memberi waktu untuk belajar sebelum kehabisan uang.' },
          { text: 'Cari investor baru tanpa memperbaiki metrik', dKas: -30, dRep: 0, good: false, result: 'Presentasi gagal karena angka belum membaik.', why: 'Investor menilai metrik, bukan janji.' }
        ] },
      { title: 'Pengguna Tidak Kembali', factor: 'Retensi', lessonId: 'ue-5-retensi',
        situation: 'Banyak pengguna hanya memesan sekali.',
        choices: [
          { text: 'Tambah banyak fitur baru', dKas: -60, dRep: 0, good: false, result: 'Biaya pengembangan naik, retensi tidak berubah.', why: 'Fitur tidak menyelesaikan masalah yang tidak diukur.' },
          { text: 'Buat langganan dan loyalitas, serta ukur kohort pengguna', dKas: 60, dRep: 15, good: true, result: 'Pembelian ulang naik dan pendapatan lebih terduga.', why: 'Retensi mengubah akuisisi menjadi nilai jangka panjang.' },
          { text: 'Perbanyak iklan pengguna baru', dKas: -40, dRep: 0, good: false, result: 'Pengguna baru datang dan pergi seperti sebelumnya.', why: 'Menambah pengguna baru tanpa retensi memperbesar kebocoran.' }
        ] }
    ]
  },
  {
    id: 'case-keripik',
    title: 'Pabrik Keripik',
    tagline: 'Pesanan besar datang, tetapi uangnya cair 90 hari lagi. Apa yang terjadi pada kas?',
    industry: 'Manufaktur kecil',
    startKas: 200, startRep: 50, growKas: 190, growRep: 65,
    intro: 'Pabrik keripik rumahan kamu bermodal Rp200 juta. Peluang besar datang, tetapi masalah kas sering lebih mematikan daripada masalah penjualan.',
    rounds: [
      { title: 'Pesanan Supermarket', factor: 'Modal kerja & piutang', lessonId: 'ue-6-modal-kerja',
        situation: 'Jaringan supermarket memesan besar, dengan pembayaran 90 hari setelah barang diterima.',
        choices: [
          { text: 'Terima semuanya tanpa menghitung kebutuhan modal kerja', dKas: -70, dRep: 10, good: false, result: 'Bahan baku dan gaji harus dibayar sekarang, uang masuk 3 bulan lagi.', why: 'Penjualan besar bisa mematikan kas bila pembayarannya lama.' },
          { text: 'Terima dengan uang muka, batas volume bertahap, dan hitung kebutuhan kas', dKas: -10, dRep: 10, good: true, result: 'Kas aman dan pesanan terpenuhi bertahap.', why: 'Mengelola siklus kas menjaga bisnis hidup saat tumbuh.' },
          { text: 'Tolak karena takut', dKas: 0, dRep: -5, good: false, result: 'Aman, tetapi melewatkan peluang tumbuh.', why: 'Menolak tanpa menghitung opsi pendanaan kehilangan peluang.' }
        ] },
      { title: 'Kapasitas Produksi', factor: 'Investasi aset', lessonId: 'op-5-perputaran',
        situation: 'Permintaan naik dan mesin lama kewalahan.',
        choices: [
          { text: 'Beli mesin besar dengan cicilan berat', dKas: -90, dRep: 0, good: false, result: 'Cicilan membebani kas saat permintaan belum stabil.', why: 'Investasi besar di muka mengunci kas dan menambah risiko.' },
          { text: 'Sewa atau leasing bertahap mengikuti pesanan', dKas: -25, dRep: 0, good: true, result: 'Kapasitas naik sesuai permintaan tanpa menguras kas.', why: 'Fleksibilitas biaya cocok untuk permintaan yang belum pasti.' },
          { text: 'Tidak menambah kapasitas', dKas: 0, dRep: -5, good: false, result: 'Pesanan terlambat dan pelanggan kecewa.', why: 'Kapasitas yang tak cukup merusak kepercayaan.' }
        ] },
      { title: 'Pelanggan Telat Bayar', factor: 'Manajemen piutang', lessonId: 'id-4-piutang',
        situation: 'Salah satu pelanggan besar menunda pembayaran dua bulan.',
        choices: [
          { text: 'Diam saja dan menunggu', dKas: -40, dRep: 0, good: false, result: 'Kas kosong dan gaji terancam telat.', why: 'Piutang yang tak dikelola menjadi kas yang hilang.' },
          { text: 'Penagihan terjadwal dan tetapkan batas kredit per pelanggan', dKas: 25, dRep: 0, good: true, result: 'Pembayaran masuk dan risiko berikutnya terkendali.', why: 'Kebijakan kredit dan penagihan menjaga arus kas.' },
          { text: 'Hentikan pasokan seketika tanpa komunikasi', dKas: -10, dRep: -10, good: false, result: 'Hubungan memburuk dan pesanan hilang.', why: 'Tindakan keras tanpa proses merusak hubungan.' }
        ] },
      { title: 'Pembukuan dan Pajak', factor: 'Kepatuhan & pembukuan', lessonId: 'px-5-biaya',
        situation: 'Pembukuan masih campur aduk dan pajak belum tertata.',
        choices: [
          { text: 'Abaikan sampai ada masalah', dKas: -30, dRep: 0, good: false, result: 'Terkena sanksi dan sulit mengajukan pembiayaan.', why: 'Pembukuan buruk menyulitkan pembiayaan dan kepatuhan.' },
          { text: 'Rapikan pembukuan dan pilih skema pajak yang sah bersama konsultan', dKas: 10, dRep: 10, good: true, result: 'Laporan jelas, biaya terkendali, dan bank lebih percaya.', why: 'Pembukuan rapi membuka akses modal dan mengurangi risiko.' },
          { text: 'Sembunyikan sebagian omzet', dKas: -20, dRep: -10, good: false, result: 'Risiko pemeriksaan dan sanksi meningkat.', why: 'Menyembunyikan omzet adalah penggelapan, bukan perencanaan.' }
        ] }
    ]
  }
];

export type CaseVerdict = 'tumbuh' | 'bertahan' | 'bangkrut';

export const verdictOf = (c: BusinessCase, kas: number, rep: number): CaseVerdict =>
  kas <= 0 ? 'bangkrut' : kas >= c.growKas && rep >= c.growRep ? 'tumbuh' : 'bertahan';

const KEY = 'nodus_cases_v1';
export const readCaseResults = (): Record<string, CaseVerdict> => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, CaseVerdict>) : {};
  } catch {
    return {};
  }
};
const RANK: Record<CaseVerdict, number> = { bangkrut: 0, bertahan: 1, tumbuh: 2 };
export const saveCaseResult = (id: string, v: CaseVerdict) => {
  try {
    const cur = readCaseResults();
    if (cur[id] === undefined || RANK[v] > RANK[cur[id]]) {
      cur[id] = v;
      localStorage.setItem(KEY, JSON.stringify(cur));
    }
  } catch {
    // abaikan bila penyimpanan tidak tersedia
  }
};
