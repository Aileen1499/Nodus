// ==============================================================================
// NODUS — DYNAMIC TOPIC & DOMAIN ROUTING ENGINE
// ==============================================================================

import { MindmapData } from '../types';

/**
 * 5 DOMAIN UTAMA DENGAN DATASET MENDALAM, UNIK, DAN BERBASIS FAKTA REAL-WORLD
 */

// ------------------------------------------------------------------------------
// 1. DOMAIN: BISNIS & STRATEGI
// Topik: Unit Economics, CAC vs LTV, Flywheel Effect, Competitive Moat, Pricing Strategy
// ------------------------------------------------------------------------------
const BUSINESS_STRATEGY_MAP: MindmapData = {
  id: 'domain-bisnis-strategi',
  topic: 'Bisnis & Strategi Skala Global',
  rootId: 'biz-root',
  description: 'Membedah arsitektur parit pertahanan ekonomi (Moat), Unit Economics, dan Flywheel penentu valuasi miliaran dolar.',
  nodes: [
    {
      id: 'biz-root',
      label: 'Strategi & Parit Bisnis',
      domain: 'Bisnis',
      summary: 'Fondasi keunggulan bersaing berkelanjutan dan efisiensi alokasi modal.',
      x: 400,
      y: 280,
      level: 0,
      microContent: {
        analogy: 'Membangun bisnis tanpa keunggulan kompetitif bagaikan menyewa rumah di pinggir jurang; satu embusan tren bisa meruntuhkannya. Parit pertahanan (Economic Moat) adalah dinding kastil yang membuat modal Anda menghasilkan laba di atas rata-rata industri secara konsisten.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Psikologi Perilaku',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'Moat sejati bukan cuma teknologi, melainkan Switching Cost di otak konsumen yang membuat berpindah ke pesaing terasa menyakitkan.',
        },
        caseStudy: {
          companyOrFigure: 'Berkshire Hathaway (Warren Buffett)',
          story: 'Buffett menolak membeli perusahaan yang tidak memiliki "moat" kuat. Investasinya di See\'s Candies membuktikan daya tahan pricing power tanpa kehilangan pelanggan.',
          takeaway: 'Jika bisnis bisa menaikkan harga tanpa kehilangan pangsa pasar, bisnis itu punya parit pertahanan sejati.'
        },
        actionableSteps: [
          'Audit parit bisnis Anda: apakah bertumpu pada skala biaya, efek jaringan, atau biaya peralihan (switching costs)?',
          'Ukur Pricing Power: uji kenaikan harga 5% pada sampel 10% pelanggan setia.',
          'Hilangkan lini produk dengan margin kontribusi negatif dalam 30 hari.'
        ],
        difficulty: 'Menengah',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Parit Bisnis: Invasi Pesaing Modal Ventura',
        context: 'Pesaing baru menyuntikkan subsidi harga 40% lebih murah di segmen pasar Anda.',
        dilemma: 'Bagaimana merespons perang harga ini tanpa merusak neraca kas perusahaan?',
        choices: [
          {
            id: 'c1',
            text: 'Ikut memotong harga 45% dan membakar kas untuk mempertahankan pangsa pasar.',
            consequence: 'Kas menipis dalam 4 bulan, margin tergerus dan persepsi kualitas produk anjlok.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Perang bakar uang hanya menguntungkan pihak dengan modal tak terbatas.'
          },
          {
            id: 'c2',
            text: 'Kunci pelanggan dengan ekosistem bernilai tinggi dan naikan switching costs.',
            consequence: 'Margin tetap sehat, retensi pelanggan setia mencapai 92%, dan pesaing kehabisan nafas subsidi.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Membangun biaya peralihan (switching cost) melindungi laba riil dari gertakan subsidi.'
          }
        ]
      },
      quiz: [
        {
          id: 'biz-q-1',
          question: 'Menurut Warren Buffett, apa indikator tunggal paling presisi bahwa sebuah bisnis memiliki Competitive Moat yang kuat?',
          options: [
            'Jumlah pengikut media sosial dan kampanye influencer viral',
            'Kemampuan menaikkan harga produk tanpa kehilangan volume pelanggan (Pricing Power)',
            'Gedung kantor megah dan jumlah karyawan ribuan',
            'Frekuensi peluncuran produk baru setiap minggu'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pricing Power membuktikan pelanggan tidak menemukan substitusi yang sepadan, mencerminkan adanya parit pertahanan ekonomi.'
        }
      ]
    },
    {
      id: 'biz-unit-econ',
      label: 'Unit Economics & Margin',
      domain: 'Bisnis',
      summary: 'Perhitungan profitabilitas per unit barang/jasa sebelum scaling.',
      x: 210,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Unit Economics adalah sel darah merah bisnis. Jika setiap transaksi menghasilkan rugi Rp 5.000, melipatgandakan omzet 10x hanya akan mempercepat kebangkrutan 10x lebih kilat.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Keuangan Mikro',
          domains: ['Bisnis', 'Keuangan'],
          insight: 'Menjual barang dengan margin tipis menuntut perputaran modal (working capital velocity) yang sangat ketat untuk menghindari krisis solvabilitas.',
        },
        caseStudy: {
          companyOrFigure: 'Costco Wholesale',
          story: 'Costco membatasi margin kotor produk maksimal 14-15%, namun menghasilkan 70%+ laba operasionalnya murni dari iuran keanggotaan tahunan (Membership Fee).',
          takeaway: 'Model unit economics cerdas memisahkan sumber likuiditas barang dengan sumber laba bersih konsisten.'
        },
        actionableSteps: [
          'Hitung Gross Margin aktual per produk setelah dikurangi ongkir, packing, dan retur barang.',
          'Identifikasi Contribution Margin per pesanan: pastikan bernilai positif sebelum belanja iklan diperbesar.',
          'Pisahkan fixed cost operasional dari variable cost per unit transaksi.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Unit Economics: Penawaran Grosir Super Murah',
        context: 'Distributor besar memesan 50.000 unit tetapi meminta diskon harga yang membuat margin kontribusi tersisa 1%.',
        dilemma: 'Apakah Anda menerima pesanan untuk mengejar volume atau menolaknya?',
        choices: [
          {
            id: 'c1',
            text: 'Terima seluruh pesanan demi mendongkrak angka omzet laporan tahunan.',
            consequence: 'Kapasitas produksi macet, keterlambatan pengiriman ke klien retail bermargin tinggi, dan arus kas defisit saat ada retur.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Omzet adalah vanity metric; arus kas dan margin kontribusi adalah sanitas nyata bisnis.'
          },
          {
            id: 'c2',
            text: 'Negosiasikan syarat pembayaran di muka 50% atau tolak dan prioritaskan pesanan bermargin 25%.',
            consequence: 'Arus kas tetap cair dan kapasitas pabrik terlindungi untuk klien loyal bermargin tinggi.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menjaga kapasitas untuk transaksi bermargin sehat jauh lebih aman daripada mengejar ilusi volume.'
          }
        ]
      },
      quiz: [
        {
          id: 'biz-q-2',
          question: 'Sebuah startup memiliki margin kontribusi -15% per pesanan. Apa dampak langsung jika tim marketing menggandakan anggaran iklan?',
          options: [
            'Perusahaan akan langsung mencapai titik impas (break-even)',
            'Tingkat pembakaran kas (burn rate) justru semakin cepat dan mempercepat kebangkrutan',
            'Valuasi perusahaan otomatis naik 5x lipat',
            'Harga pokok penjualan (HPP) otomatis turun drastis tanpa negosiasi pabrik'
          ],
          correctAnswerIndex: 1,
          explanation: 'Jika per unit rugi, memperbesar volume transaksi hanya memperbesar total kerugian kas operasional.'
        }
      ]
    },
    {
      id: 'biz-cac-ltv',
      label: 'Rasio CAC vs LTV',
      domain: 'Bisnis',
      summary: 'Keseimbangan biaya akuisisi pengguna terhadap total nilai seumur hidup.',
      x: 600,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'CAC (Customer Acquisition Cost) adalah harga tiket memancing ikan, sedangkan LTV (Customer Lifetime Value) adalah total daging ikan yang didapat. Jika tiket pancing Rp 100.000 tapi ikan hanya menghasilkan Rp 50.000, kolam itu adalah mesin pencetak utang.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Psikologi Retensi',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'LTV bukan cuma soal produk bagus, tetapi sejauh mana produk menancap menjadi kebiasaan tak sadar (habit-forming loops).',
        },
        caseStudy: {
          companyOrFigure: 'Netflix Streaming',
          story: 'Netflix berani mengeluarkan CAC hingga $100 per pelanggan di pasar baru karena churn rate mereka di bawah 2.5%, memastikan LTV melampaui $300 (rasio 3:1).',
          takeaway: 'Rasio emas LTV : CAC minimal adalah 3:1 dengan payback period di bawah 12 bulan.'
        },
        actionableSteps: [
          'Hitung Blended CAC vs Paid CAC: jangan campurkan traffic organik yang menyamarkan inefisiensi iklan.',
          'Hitung Churn Rate bulanan untuk menemukan batas realistis umur pelanggan (1 / Churn).',
          'Fokuskan 30% sumber daya ke program retention dan loyalty daripada terus menambah anggaran ads baru.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Akuisisi: Kenaikan Biaya Iklan Meta & Google',
        context: 'CAC iklan digital Anda melonjak 75% dalam 3 bulan, membuat rasio LTV:CAC anjlok dari 3.5:1 menjadi 1.2:1.',
        dilemma: 'Tindakan strategis apa yang harus dieksekusi minggu ini?',
        choices: [
          {
            id: 'c1',
            text: 'Terus suntik dana iklan lebih besar dengan harapan algoritma akan beradaptasi sendiri.',
            consequence: 'Kas operasional habis terbakar dalam 60 hari tanpa perbaikan retensi.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mengandalkan harapan pada kenaikan biaya lelang iklan adalah resep kegagalan.'
          },
          {
            id: 'c2',
            text: 'Diversifikasi ke referral loops, perbaiki email onboarding, dan naikkan Average Order Value (AOV).',
            consequence: 'CAC efektif turun 40%, LTV naik dari repeat order, dan rasio kembali sehat ke 3.2:1.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menaikkan LTV lewat retensi dan AOV adalah bantalan paling aman melawan inflasi biaya iklan.'
          }
        ]
      },
      quiz: [
        {
          id: 'biz-q-3',
          question: 'Berapakah rasio ideal LTV terhadap CAC yang diakui secara global untuk model bisnis yang sehat dan scalable?',
          options: [
            '1 : 1 (Balik modal pas-pasan)',
            'Minimal 3 : 1 dengan payback period di bawah 12 bulan',
            '0.5 : 1 (Rugi demi market share)',
            '100 : 1 tanpa perlu marketing'
          ],
          correctAnswerIndex: 1,
          explanation: 'Rasio 3:1 memberikan margin penyangga untuk biaya overhead, riset, dan fluktuasi pasar.'
        }
      ]
    },
    {
      id: 'biz-flywheel',
      label: 'Flywheel Effect (Roda Gila)',
      domain: 'Bisnis',
      summary: 'Dinamika pertumbuhan mandiri di mana setiap perputaran mempercepat siklus berikutnya.',
      x: 210,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Mendorong Flywheel seberat 5 ton di awal terasa melelahkan tanpa hasil kasat mata. Namun begitu momentum terbangun, bobot roda itu sendiri yang berputar kencang tanpa perlu lagi dorongan sekuat tenaga awal.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Geometri Sistem',
          domains: ['Bisnis', 'Geopolitik'],
          insight: 'Ekosistem yang terintegrasi secara modular menciptakan efek gravitasi ekonomi yang sulit ditembus kompetitor.',
        },
        caseStudy: {
          companyOrFigure: 'Amazon Flywheel (Jeff Bezos)',
          story: 'Bezos mencoret flywheel di atas serbet: Harga Murah -> Lebih Banyak Pelanggan -> Lebih Banyak Penjual -> Skala Ekonomi -> Struktur Biaya Lebih Rendah -> Harga Lebih Murah Lagi.',
          takeaway: 'Pastikan setiap elemen bisnis Anda menjadi bahan bakar bagi elemen berikutnya, bukan berdiri sendiri-sendiri.'
        },
        actionableSteps: [
          'Gambarkan 4-5 simpul roda gila bisnis Anda: simpul A harus memicu simpul B secara otomatis.',
          'Identifikasi friksi utama: hilangkan hambatan yang memperlambat rotasi pelanggan.',
          'Investasikan laba ke penurunan biaya struktural untuk mempercepat putaran flywheel.'
        ],
        difficulty: 'Menengah',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Flywheel: Mengambil Laba Cepat atau Putar Roda?',
        context: 'Perusahaan mencatatkan surplus kas Rp 2 miliar dari efisiensi rantai pasok kuartal ini.',
        dilemma: 'Bagaimana mengalokasikan surplus ini untuk jangka panjang?',
        choices: [
          {
            id: 'c1',
            text: 'Bagikan 100% sebagai dividen tunai dan nikmati keuntungan jangka pendek.',
            consequence: 'Pesaing menyusul keunggulan teknologi Anda di kuartal berikutnya.',
            scoreBonus: 20,
            isOptimal: false,
            explanation: 'Menarik seluruh surplus mematikan momentum akselerasi roda gila bisnis.'
          },
          {
            id: 'c2',
            text: 'Reinvestasikan 70% untuk menurunkan harga ke konsumen dan mempercepat pengiriman.',
            consequence: 'Volume transaksi naik 45%, menarik penjual baru, dan parit pertahanan semakin tak terkejar.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Memasukkan kembali efisiensi ke pelanggan adalah rahasia flywheel Amazon dan Walmart.'
          }
        ]
      },
      quiz: [
        {
          id: 'biz-q-4',
          question: 'Apa perbedaan mendasar antara model corong konvensional (Funnel) dan Flywheel Effect dalam pertumbuhan bisnis?',
          options: [
            'Funnel hanya menggunakan media cetak, sedangkan Flywheel hanya internet',
            'Funnel membuang energi pelanggan setelah transaksi, sedangkan Flywheel memanfaatkan kepuasan pelanggan sebagai tenaga penggerak pertumbuhan berikutnya',
            'Funnel tidak memerlukan modal, sedangkan Flywheel butuh izin pemerintah',
            'Flywheel selalu merugi, sedangkan Funnel selalu untung'
          ],
          correctAnswerIndex: 1,
          explanation: 'Flywheel menyimpan energi kinetik pelanggan untuk mendatangkan pelanggan baru secara eksponensial.'
        }
      ]
    },
    {
      id: 'biz-pricing',
      label: 'Pricing Strategy & Surplus',
      domain: 'Bisnis',
      summary: 'Ekstraksi nilai psikologis pasar melalui diferensiasi harga berbasis persepsi.',
      x: 600,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Harga bukan angka akuntansi penutup biaya, melainkan deklarasi psikologis nilai. Air di minimarket berharga Rp 3.000, di bioskop Rp 25.000, di lounge bandara Rp 60.000. Komposisi airnya sama, konteks persepsinya yang berbeda 20 kali lipat.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Psikologi Perilaku',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'Value-based pricing menangkap consumer surplus tanpa perlu menambah biaya produksi barang fisik.',
        },
        caseStudy: {
          companyOrFigure: 'Apple iPhone (Tim Cook)',
          story: 'Apple hanya menguasai sekitar 20% pangsa pasar unit ponsel dunia, namun meraup lebih dari 85% seluruh laba industri smartphone global berkat strategi tiered pricing dan ekosistem tertutup.',
          takeaway: 'Jangan bersaing pada harga terendah jika Anda bisa mendominasi persepsi nilai tertinggi.'
        },
        actionableSteps: [
          'Ganti Cost-Plus Pricing dengan Value-Based Pricing: ukur berapa uang yang Anda hematkan untuk klien.',
          'Terapkan 3 Tiering Opsi (Starter, Growth, Enterprise) dengan opsi tengah sebagai decoy paling atraktif.',
          'Hentikan memberi diskon tanpa kompensasi (misal: kurangi fitur atau minta pembayaran termin di muka).'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Penentuan Harga Produk Baru B2B',
        context: 'Software baru Anda menghematkan biaya klien sebesar Rp 500 juta per tahun. Biaya server Anda hanya Rp 5 juta per bulan.',
        dilemma: 'Berapa harga lisensi yang seharusnya Anda tetapkan?',
        choices: [
          {
            id: 'c1',
            text: 'Rp 7,5 juta per bulan (Cost plus 50% margin).',
            consequence: 'Klien memandang software Anda murahan dan ragu akan keandalannya, sementara Anda kehilangan potensi laba ratusan juta.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Cost-plus pricing membuang surplus nilai raksasa yang sudah Anda ciptakan untuk klien.'
          },
          {
            id: 'c2',
            text: 'Rp 25 - 35 juta per bulan (Value-based: mengambil hanya 60-70% dari nilai penghematan riil klien).',
            consequence: 'Klien senang karena masih untung Rp 200 juta+, margin laba Anda mencapai 85%, dan posisi brand prestisius.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menetapkan harga berdasarkan ROI yang dinikmati pembeli adalah seni monetisasi tertinggi.'
          }
        ]
      },
      quiz: [
        {
          id: 'biz-q-5',
          question: 'Mengapa perusahaan yang menerapkan Value-Based Pricing jauh lebih menguntungkan dibanding Cost-Plus Pricing?',
          options: [
            'Karena mereka tidak perlu membayar pajak penghasilan',
            'Karena harga ditentukan berdasarkan nilai ekonomis & emosional yang dirasakan pelanggan, bukan sekadar ongkos produksi',
            'Karena bahan baku yang digunakan gratis dari alam',
            'Karena mereka memonopoli seluruh media iklan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Value-Based Pricing mengonversi kelebihan nilai (consumer surplus) menjadi laba bersih operasional.'
        }
      ]
    }
  ],
  edges: [
    { id: 'e1', from: 'biz-root', to: 'biz-unit-econ', label: 'Fondasi Efisiensi', domains: ['Bisnis', 'Keuangan'] },
    { id: 'e2', from: 'biz-root', to: 'biz-cac-ltv', label: 'Mesin Skala', domains: ['Bisnis', 'Psikologi'] },
    { id: 'e3', from: 'biz-root', to: 'biz-flywheel', label: 'Akselerasi Momentum', domains: ['Bisnis', 'Geopolitik'] },
    { id: 'e4', from: 'biz-root', to: 'biz-pricing', label: 'Ekstraksi Nilai', domains: ['Bisnis', 'Psikologi'] },
  ]
};

// ------------------------------------------------------------------------------
// 2. DOMAIN: PSIKOLOGI PERILAKU
// Topik: Cognitive Biases (Loss Aversion, Anchoring Effect), Social Proof, Dopamine Loops, FOMO
// ------------------------------------------------------------------------------
const BEHAVIORAL_PSYCHOLOGY_MAP: MindmapData = {
  id: 'domain-psikologi-perilaku',
  topic: 'Psikologi Perilaku & Arsitektur Keputusan',
  rootId: 'psy-root',
  description: 'Membedah bias kognitif bawah sadar yang mengontrol 95% keputusan pembelian, investasi, dan loyalitas manusia.',
  nodes: [
    {
      id: 'psy-root',
      label: 'Arsitektur Kognitif Manusia',
      domain: 'Psikologi',
      summary: 'Sistem 1 (Cepat/Emosional) vs Sistem 2 (Lambat/Rasional) dalam pengambilan keputusan.',
      x: 400,
      y: 280,
      level: 0,
      microContent: {
        analogy: 'Otak manusia adalah komputer biologis kuno era berburu yang dipaksa hidup di pasar modern. 95% keputusan harian dijalankan oleh autopilot (Sistem 1) untuk menghemat kalori. Siapa yang menguasai pemicu autopilot ini, menguasai pasar.',
        crossDisciplinary: {
          connectionText: 'Psikologi x Ekonomi Perilaku',
          domains: ['Psikologi', 'Ekonomi'],
          insight: 'Model ekonomi klasik mengasumsikan manusia rasional (Homo Economicus); psikologi modern membuktikan manusia sangat irasional namun polanya dapat diprediksi.',
        },
        caseStudy: {
          companyOrFigure: 'Daniel Kahneman & Amos Tversky',
          story: 'Meraih Nobel Ekonomi atas riset "Thinking, Fast and Slow", membuktikan otak mengorbankan akurasi demi kecepatan lewat bias jalan pintas (heuristik).',
          takeaway: 'Jangan meminta audiens berpikir keras; rancang antarmuka keputusan yang ramah bagi Sistem 1.'
        },
        actionableSteps: [
          'Kurangi beban kognitif (cognitive load) pada penawaran produk Anda menjadi 1 pilihan paling jelas.',
          'Gunakan analogi visual instan daripada grafik angka rumit pada halaman pendaratan.',
          'Posisikan default option ke opsi yang paling menguntungkan pelanggan dan bisnis.'
        ],
        difficulty: 'Pemula',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Desain Formulir Pembelian Produk',
        context: 'Tingkat drop-off pengguna pada form checkout website Anda mencapai 68% karena terlalu banyak kolom input.',
        dilemma: 'Bagaimana merancang ulang alur agar tingkat konversi melonjak?',
        choices: [
          {
            id: 'c1',
            text: 'Tambahkan 5 pertanyaan survei riset pasar lagi agar data pengguna semakin lengkap.',
            consequence: 'Drop-off naik ke 82%, calon pembeli frustrasi dan beralih ke toko kompetitor.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Beban kognitif tinggi memicu resistensi Sistem 2 dan membuat orang menunda tindakan.'
          },
          {
            id: 'c2',
            text: 'Potong kolom input menjadi 1-Click Checkout dengan integrasi dompet digital otomatis.',
            consequence: 'Konversi pembayaran naik 42% seketika karena friksi Sistem 1 ditekan seminimal mungkin.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Meniadakan friksi fisik dan mental adalah kunci konversi tertinggi di era digital.'
          }
        ]
      },
      quiz: [
        {
          id: 'psy-q-1',
          question: 'Berdasarkan teori Kahneman, manakah karakteristik utama dari Sistem 1 dalam otak manusia?',
          options: [
            'Bekerja lambat, membutuhkan kalkulasi matematika sadar dan energi tinggi',
            'Bekerja otomatis, cepat, dipandu emosi dan asosiasi bawah sadar dengan konsumsi energi rendah',
            'Hanya aktif saat seseorang sedang tidur nyenyak',
            'Mampu membaca kode komputer dalam sekejap tanpa belajar'
          ],
          correctAnswerIndex: 1,
          explanation: 'Sistem 1 bertindak sebagai penghemat energi evolusioner yang mengambil 95% keputusan harian.'
        }
      ]
    },
    {
      id: 'psy-loss-aversion',
      label: 'Loss Aversion (Kehilangan > Keuntungan)',
      domain: 'Psikologi',
      summary: 'Rasa sakit kehilangan Rp 1 juta bernilai 2x lipat lebih tajam dibanding kenikmatan mendapat Rp 1 juta.',
      x: 210,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Secara evolusi, nenek moyang kita yang kehilangan makanan berisiko mati kelaparan, sedangkan yang melewatkan surplus makanan hanya tetap hidup seperti biasa. Otak kita diprogram secara genetik untuk membenci kehilangan jauh lebih dalam daripada mencintai kemenangan.',
        crossDisciplinary: {
          connectionText: 'Psikologi x Strategi Copywriting',
          domains: ['Psikologi', 'Komunikasi'],
          insight: 'Memberitahu calon pembeli berapa uang yang mereka boroskan setiap hari mengonversi 2-3x lebih tinggi daripada menjanjikan potensi laba di masa depan.',
        },
        caseStudy: {
          companyOrFigure: 'Dropbox & Freemium Trials',
          story: 'Layanan cloud memberi trial 30 hari gratis. Saat user sudah menaruh file foto keluarga, mereka akan membayar karena otak merasa "sedang kehilangan aset pribadi" jika langganan disetop.',
          takeaway: 'Beri kepemilikan semu (endowment effect) terlebih dahulu agar user merasa takut kehilangan hak miliknya.'
        },
        actionableSteps: [
          'Ubah headline penawaran dari "Dapatkan Rp 10 Juta Tambahan" menjadi "Hentikan Kebocoran Kas Rp 10 Juta Anda Hari Ini".',
          'Terapkan program garansi 30 hari tanpa risiko (Risk Reversal).',
          'Tunjukkan biaya kelambanan (Cost of Inaction) yang ditanggung calon klien jika tidak mengambil tindakan.'
        ],
        difficulty: 'Menengah',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Kampanye Penjualan: Gain Framing vs Loss Framing',
        context: 'Perusahaan Anda menjual alat audit efisiensi pajak legal untuk pengusaha UKM.',
        dilemma: 'Pesan utama mana yang akan Anda jadikan pilar iklan berbayar?',
        choices: [
          {
            id: 'c1',
            text: '"Optimalkan Laba Anda Hingga 15% dengan Software Akuntansi Baru Ini."',
            consequence: 'Audiens merasa itu cuma opsi tambahan yang tidak mendesak; CTR iklan standar 0.8%.',
            scoreBonus: 20,
            isOptimal: false,
            explanation: 'Gain framing memicu respons Sistem 2 yang menunda evaluasi karena merasa tidak ada ancaman.'
          },
          {
            id: 'c2',
            text: '"Anda Membayar Lebih Rp 45 Juta Pajak Tanpa Sadar Tiap Tahun. Hitung Kebocoran Kas Anda Sekarang."',
            consequence: 'CTR melonjak ke 3.8%, lead acquisition membludak karena rasa sakit kehilangan uang riil terpicu.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Loss framing membangkitkan urgensi emosional purba yang menuntut tindakan segera.'
          }
        ]
      },
      quiz: [
        {
          id: 'psy-q-2',
          question: 'Menurut eksperimen empiris Kahneman dan Tversky, berapa kali lipat bobot rasa sakit emosional akibat kehilangan dibanding kenikmatan mendapat nilai yang sama?',
          options: [
            'Sama persis (1x lipat)',
            'Sekitar 2 hingga 2.5 kali lipat lebih menyakitkan',
            '100 kali lipat',
            'Kehilangan tidak berpengaruh pada emosi manusia'
          ],
          correctAnswerIndex: 1,
          explanation: 'Rasio rasa sakit kehilangan vs nikmat keuntungan terbukti secara konsisten berada di kisaran 2.0x hingga 2.5x.'
        }
      ]
    },
    {
      id: 'psy-anchoring',
      label: 'Anchoring Effect (Jangkar Persepsi)',
      domain: 'Psikologi',
      summary: 'Angka pertama yang dilihat pikiran menjadi acuan tidak sadar untuk menilai semua hal berikutnya.',
      x: 600,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Ketika kapten melempar jangkar kapal di dasar laut, kapal hanya bisa berayun dalam radius tali jangkar tersebut. Begitu pula pikiran kita: angka pertama yang diajukan dalam negosiasi membatasi spektrum penawaran selanjutnya secara permanen.',
        crossDisciplinary: {
          connectionText: 'Psikologi x Negosiasi Bisnis',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Dalam negosiasi gaji atau merger akuisisi, pihak yang melempar jangkar pertama yang beralasan sering kali memenangkan 70% selisih harga akhir.',
        },
        caseStudy: {
          companyOrFigure: 'Steve Jobs (Peluncuran iPad 2010)',
          story: 'Jobs menampilkan angka raksasa "$999" di layar besar dan membahas kenapa para analis mengira iPad pantas di harga itu, lalu mencoretnya dan mengumumkan harga "$499". Seketika iPad terasa sangat murah.',
          takeaway: 'Tetapkan ekspektasi jangkar tinggi terlebih dahulu sebelum menyajikan harga aktual Anda.'
        },
        actionableSteps: [
          'Selalu cantumkan harga normal yang dicoret berdampingan dengan harga penawaran khusus.',
          'Pajang paket paling mahal (Enterprise Rp 50 Juta) di halaman muka agar paket Rp 15 Juta terlihat sangat terjangkau.',
          'Buka negosiasi dengan batas atas yang ambisius namun didukung data logis.'
        ],
        difficulty: 'Menengah',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Penetapan Harga Menu Restoran',
        context: 'Anda meluncurkan menu steak wagyu baru di restoran Anda dan ingin memaksimalkan pesanan steak tenderloin lokal Rp 180.000.',
        dilemma: 'Bagaimana menyusun tata letak menu agar tenderloin laku keras?',
        choices: [
          {
            id: 'c1',
            text: 'Urutkan menu dari yang paling murah Rp 45.000 di atas hingga tenderloin di paling bawah.',
            consequence: 'Konsumen terpatok pada harga Rp 45.000 sehingga tenderloin Rp 180.000 terasa kemahalan.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Jangkar rendah membuat semua harga di bawahnya terlihat boros.'
          },
          {
            id: 'c2',
            text: 'Taruh steak Wagyu A5 Jepang seharga Rp 850.000 di bagian atas menu sebagai jangkar utama.',
            consequence: 'Tenderloin Rp 180.000 terlihat sangat masuk akal dan pesanan tenderloin melonjak 65%.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Jangkar Rp 850.000 menormalisasi harga ratusan ribu di benak pelanggan.'
          }
        ]
      },
      quiz: [
        {
          id: 'psy-q-3',
          question: 'Bagaimana Steve Jobs mengeksploitasi Anchoring Effect pada peluncuran iPad pertama tahun 2010?',
          options: [
            'Dengan membagikan iPad gratis ke semua jurnalis di ruangan',
            'Menampilkan angka jangkar $999 di layar selama beberapa menit sebelum memangkasnya ke harga $499',
            'Menyuruh penonton menebak harga dengan kuis berhadiah mobil',
            'Menyatakan bahwa Apple tidak peduli pada keuntungan uang'
          ],
          correctAnswerIndex: 1,
          explanation: 'Jangkar $999 membuat audiens merasa harga $499 adalah diskon fantastis senilai 50%.'
        }
      ]
    },
    {
      id: 'psy-social-proof',
      label: 'Social Proof & Validasi Massa',
      domain: 'Psikologi',
      summary: 'Ketika ragu, manusia mengamati dan meniru perilaku mayoritas untuk meminimalkan risiko salah.',
      x: 210,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Jika Anda berjalan di kota asing yang sepi dan melihat dua restoran berdampingan: yang satu kosong melompong, yang satu lagi antre 20 orang. Tanpa membaca menu, otak Anda langsung menyimpulkan restoran yang ramai pasti lebih enak dan aman.',
        crossDisciplinary: {
          connectionText: 'Psikologi x Pemasaran Digital',
          domains: ['Psikologi', 'Komunikasi'],
          insight: 'Testimoni spesifik dengan foto wajah dan nama perusahaan mengeliminasi ketakutan bertransaksi jauh lebih kuat daripada klaim fitur.',
        },
        caseStudy: {
          companyOrFigure: 'Booking.com & Agoda',
          story: 'Menampilkan pesan real-time: "Kamar ini dipesan 14 kali dalam 6 jam terakhir" dan "3 orang sedang melihat properti ini". Angka ini memicu kepastian bahwa properti tersebut diminati massa.',
          takeaway: 'Tunjukkan bukti nyata bahwa orang lain sudah mempercayai dan menggunakan solusi Anda.'
        },
        actionableSteps: [
          'Sematkan logo klien ternama atau jumlah pengguna aktif di bagian atas (above the fold) landing page Anda.',
          'Kumpulkan ulasan berbasis cerita: tampilkan situasi sebelum vs sesudah memakai produk Anda.',
          'Tunjukkan metrik agregat: "Bergabung bersama 45.000+ profesional yang sudah mendaftar".'
        ],
        difficulty: 'Pemula',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Peluncuran Kursus Online Baru',
        context: 'Anda memiliki kursus baru dengan materi berkualitas tinggi namun belum memiliki pembeli pertama di website.',
        dilemma: 'Langkah taktis apa yang paling cepat memicu Social Proof awal?',
        choices: [
          {
            id: 'c1',
            text: 'Langsung pasang iklan ratusan juta tanpa menyertakan ulasan atau studi kasus sama sekali.',
            consequence: 'Angka konversi sangat rendah karena calon pembeli ragu menjadi "kelinci percobaan" pertama.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Ketiadaan Social Proof menimbulkan friksi risiko penipuan di benak pembeli.'
          },
          {
            id: 'c2',
            text: 'Beri akses eksklusif ke 25 beta-tester terpilih dengan komitmen video testimoni mendalam sebelum peluncuran resmi.',
            consequence: 'Website rilis lengkap dengan 25 testimoni berbobot, memicu konversi peluncuran hingga 5x lipat.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Mengamankan bukti sosial autentik sebelum peluncuran masif memangkas biaya keraguan pasar.'
          }
        ]
      },
      quiz: [
        {
          id: 'psy-q-4',
          question: 'Mengapa Social Proof (Bukti Sosial) menjadi salah satu senjata konversi paling ampuh dalam psikologi penjualan?',
          options: [
            'Karena manusia memiliki sifat dasar ingin berbeda dari semua orang lain di bumi',
            'Karena manusia secara evolusioner menggunakan perilaku kawanan sebagai jalan pintas keselamatan saat menghadapi ketidakpastian',
            'Karena mesin pencari Google mengharuskan adanya testimoni di website',
            'Karena bukti sosial selalu menurunkan harga jual produk'
          ],
          correctAnswerIndex: 1,
          explanation: 'Mengikuti tindakan mayoritas adalah mekanisme survival purba untuk menghindari kerugian.'
        }
      ]
    },
    {
      id: 'psy-dopamine-fomo',
      label: 'Dopamine Loops & FOMO',
      domain: 'Psikologi',
      summary: 'Pemicu kelangkaan waktu dan antisipasi reward variabel yang mengunci keterikatan pengguna.',
      x: 600,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Dopamin bukan hormon kenikmatan, melainkan hormon pengejaran (desire & anticipation). Seperti pemain mesin jackpot di kasino yang terus menarik tuas karena tidak pernah tahu kapan koin akan berhamburan keluar: ketidakpastian adalah candu biologis terkuat.',
        crossDisciplinary: {
          connectionText: 'Psikologi x Retensi Produk PWA',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Gamifikasi yang menyajikan imbalan variabel (Variable Reward) dan Daily Streak menciptakan kebiasaan retensi yang sulit ditinggalkan pengguna.',
        },
        caseStudy: {
          companyOrFigure: 'Duolingo (Daily Streak Engine)',
          story: 'Duolingo menempatkan ikon api Streak di tengah layar. Notifikasi burung hantu hijau yang memperingatkan "Jangan biarkan streak 40 harimu putus!" berhasil meningkatkan DAU (Daily Active Users) hingga ratusan juta.',
          takeaway: 'Kombinasikan antisipasi reward tak terduga dengan ketakutan kehilangan pencapaian masa lalu.'
        },
        actionableSteps: [
          'Rancang sistem Reward Acak (Mystery Box / Poin Bonus Tak Terduga) setelah user menyelesaikan tugas.',
          'Terapkan batas kelangkaan nyata: kuota batch terbatas atau batas waktu countdown 24 jam.',
          'Gunakan indikator kemajuan (Progress Bar) yang sudah terisi sebagian untuk memicu hasrat menuntaskan.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Fitur Retensi Aplikasi Edukasi',
        context: 'Aplikasi Anda memiliki retensi minggu ke-2 (Day 14 Retention) yang drop drastis di bawah 15%.',
        dilemma: 'Mekanisme perilaku apa yang harus disematkan ke dalam produk?',
        choices: [
          {
            id: 'c1',
            text: 'Kirimkan email panjang berisi rekap teori setiap malam pukul 2 pagi.',
            consequence: 'Pengguna menandai email sebagai spam dan tingkat uninstal aplikasi meningkat.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Informasi pasif tanpa umpan balik interaktif tidak memicu lonjakan dopamin retensi.'
          },
          {
            id: 'c2',
            text: 'Terapkan mekanisme Daily Streak, lencana rank points, dan notifikasi mikro sebelum streak hangus.',
            consequence: 'Retensi Day 14 melonjak ke 48%, pengguna merasa memiliki taruhan psikologis pada konsistensi mereka.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menggabungkan dopamin pencapaian dan loss aversion streak mengunci loyalitas harian.'
          }
        ]
      },
      quiz: [
        {
          id: 'psy-q-5',
          question: 'Eksperimen kotak Skinner membuktikan bahwa jenis jadwal imbalan (reward schedule) manakah yang paling adiktif bagi makhluk hidup?',
          options: [
            'Imbalan yang jumlah dan waktunya sudah pasti setiap jam (Fixed Ratio)',
            'Imbalan variabel acak yang tidak dapat diprediksi kapan datangnya (Variable Ratio)',
            'Tidak pernah ada imbalan sama sekali',
            'Imbalan yang hanya diberikan setahun sekali'
          ],
          correctAnswerIndex: 1,
          explanation: 'Variable Ratio schedule memicu pelepasan dopamin antisipatif konstan seperti pada mesin slot kasino dan media sosial.'
        }
      ]
    }
  ],
  edges: [
    { id: 'pe1', from: 'psy-root', to: 'psy-loss-aversion', label: 'Evolusi Ketakutan', domains: ['Psikologi', 'Ekonomi'] },
    { id: 'pe2', from: 'psy-root', to: 'psy-anchoring', label: 'Jalan Pintas Pikiran', domains: ['Psikologi', 'Bisnis'] },
    { id: 'pe3', from: 'psy-root', to: 'psy-social-proof', label: 'Kawanan Sosial', domains: ['Psikologi', 'Komunikasi'] },
    { id: 'pe4', from: 'psy-root', to: 'psy-dopamine-fomo', label: 'Loop Kimia Otak', domains: ['Psikologi', 'Bisnis'] },
  ]
};

// ------------------------------------------------------------------------------
// 3. DOMAIN: EKONOMI & KEUANGAN
// Topik: Inflasi & Purchasing Power, Suku Bunga & Central Banks, Fractional Reserve Banking, Valuation (P/E Ratio, DCF)
// ------------------------------------------------------------------------------
const ECONOMICS_FINANCE_MAP: MindmapData = {
  id: 'domain-ekonomi-keuangan',
  topic: 'Ekonomi Makro & Keuangan Strategis',
  rootId: 'eco-root',
  description: 'Arsitektur peredaran uang global, siklus suku bunga bank sentral, dan valuasi aset riil tahan inflasi.',
  nodes: [
    {
      id: 'eco-root',
      label: 'Siklus Kredit & Uang Makro',
      domain: 'Ekonomi',
      summary: 'Bagaimana mesin perekonomian bekerja melalui transaksi, produktivitas, dan siklus utang jangka panjang.',
      x: 400,
      y: 280,
      level: 0,
      microContent: {
        analogy: 'Ekonomi bukanlah hukum alam seperti gravitasi, melainkan transaksi jutaan manusia yang didorong oleh siklus kredit. Pengeluaran satu orang adalah pendapatan orang lain. Ketika kredit mengembang, pesta dimulai; ketika kredit ditarik, kontraksi tak terhindarkan.',
        crossDisciplinary: {
          connectionText: 'Ekonomi x Psikologi Massa',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Siklus boom dan bust dipicu oleh euforia dan ketakutan manusia yang meminjam lebih banyak dari kapasitas produktivitas riil.',
        },
        caseStudy: {
          companyOrFigure: 'Ray Dalio (Bridgewater Associates)',
          story: 'Menyusun kerangka "How The Economic Machine Works", memprediksi Krisis Finansial 2008 dengan melacak deleveraging siklus utang jangka panjang 75 tahunan.',
          takeaway: 'Jangan biarkan utang tumbuh lebih cepat dari pendapatan, dan jangan biarkan pendapatan tumbuh lebih cepat dari produktivitas.'
        },
        actionableSteps: [
          'Petakan posisi siklus ekonomi saat ini: apakah fase ekspansi moneter longgar atau pengetatan suku bunga?',
          'Amankan kas cadangan likuid minimal 6-12 bulan operasional sebelum ekspansi agresif berutang.',
          'Pantau yield curve obligasi pemerintah 10-tahun vs 2-tahun sebagai indikator resesi awal.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Ekspansi Saat Bank Sentral Menaikkan Suku Bunga',
        context: 'Bank sentral menaikkan suku bunga acuan 250 bps untuk meredam inflasi, bunga pinjaman bank Anda naik menjadi 14%.',
        dilemma: 'Bagaimana merestrukturisasi neraca modal perusahaan?',
        choices: [
          {
            id: 'c1',
            text: 'Terus mengambil pinjaman bunga mengambang (floating rate) demi memperluas cabang fisik baru.',
            consequence: 'Beban bunga mencekik arus kas, laba bersih menjadi negatif, dan terancam default utang.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Berutang bunga tinggi di puncak siklus pengetatan moneter adalah jebakan likuiditas mematikan.'
          },
          {
            id: 'c2',
            text: 'Hentikan utang baru, percepat pelunasan utang berbunga mahal, dan fokus pada efisiensi operasional kas riil.',
            consequence: 'Neraca keuangan kokoh, kas cadangan melimpah, dan siap membeli aset kompetitor yang kolaps di harga diskon.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Likuiditas adalah raja saat pengetatan moneter; perusahaan sehat memborong aset murah saat krisis.'
          }
        ]
      },
      quiz: [
        {
          id: 'eco-q-1',
          question: 'Menurut kerangka Ray Dalio, apa yang menyebabkan terjadinya siklus ekonomi jangka pendek (5-8 tahun)?',
          options: [
            'Perubahan iklim bumi dan cuaca global',
            'Ekspansi dan kontraksi ketersediaan kredit yang dikendalikan oleh suku bunga bank sentral',
            'Hasil pemilihan umum presiden di setiap negara',
            'Pencetakan uang logam tembaga oleh pabrik swasta'
          ],
          correctAnswerIndex: 1,
          explanation: 'Kemudahan meminjam kredit mendorong belanja lebih cepat dari produksi barang, memicu inflasi dan pengetatan suku bunga.'
        }
      ]
    },
    {
      id: 'eco-inflation',
      label: 'Inflasi & Purchasing Power',
      domain: 'Ekonomi',
      summary: 'Erosi daya beli uang tunai dan mekanisme proteksi kekayaan melalui aset produktif.',
      x: 210,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Menyimpan seluruh kekayaan dalam bentuk uang tunai di tabungan bagaikan menaruh es batu di bawah terik matahari. Angka nominal di buku bank tidak berubah, tetapi volume daya belinya mencair tanpa bersuara sebesar 5-8% setiap tahun.',
        crossDisciplinary: {
          connectionText: 'Ekonomi x Keuangan Investasi',
          domains: ['Ekonomi', 'Keuangan'],
          insight: 'Hanya aset produktif yang memiliki pricing power (saham berkualitas, properti strategis) yang mampu mengalahkan laju pencetakan mata uang fiat.',
        },
        caseStudy: {
          companyOrFigure: 'Milton Friedman & Moneterisme',
          story: '"Inflasi selalu dan di mana saja adalah fenomena moneter", terjadi ketika pasokan uang beredar tumbuh jauh melampaui pertumbuhan output barang dan jasa riil.',
          takeaway: 'Ukur imbal hasil investasi Anda secara riil (Return Bersih minus Laju Inflasi Riil), bukan nominal.'
        },
        actionableSteps: [
          'Alihkan kelebihan kas di atas dana darurat ke instrumen aset produktif yang menghasilkan arus kas (dividenden saham/properti sewa).',
          'Tinjau kontrak suplai jangka panjang dengan klausul penyesuaian inflasi tahunan.',
          'Hindari memegang instrumen obligasi jangka panjang berkupon tetap rendah saat inflasi meninggi.'
        ],
        difficulty: 'Pemula',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Kas Mengendap di Rekening Giro',
        context: 'Perusahaan memiliki saldo mengendap Rp 10 miliar di rekening koran bunga 1% sementara inflasi mencapai 6.5%.',
        dilemma: 'Tindakan treasury apa yang harus diambil untuk menghentikan pengikisan nilai riil modal?',
        choices: [
          {
            id: 'c1',
            text: 'Biarkan tetap di rekening koran selamanya karena merasa aman tidak ada risiko fluktuasi pasar.',
            consequence: 'Dalam 5 tahun, daya beli kas riil menyusut lebih dari Rp 2.8 miliar tanpa disadari komisaris.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Diam menyimpan kas fiat adalah jaminan pasti kehilangan daya beli akibat inflasi majemuk.'
          },
          {
            id: 'c2',
            text: 'Terapkan strategi Cash Sweeping: alokasikan kebutuhan operasional 3 bulan, sisanya ke Reksadana Pasar Uang dan SBN tenor pendek.',
            consequence: 'Kas terlindungi, imbal hasil mengimbangi inflasi, dan likuiditas tetap bisa ditarik dalam T+1 hari kerja.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Treasury manajemen modern memutar kelebihan kas pada instrumen likuid bebas risiko suku bunga tinggi.'
          }
        ]
      },
      quiz: [
        {
          id: 'eco-q-2',
          question: 'Jika inflasi tahunan sebesar 7% dan bunga deposito bank 4%, berapakah imbal hasil riil (Real Return) tahunan pemegang deposito sebelum pajak?',
          options: [
            '+11% keuntungan bersih',
            '-3% kerugian daya beli riil',
            '+3% keuntungan di atas inflasi',
            '0% impas sempurna'
          ],
          correctAnswerIndex: 1,
          explanation: 'Real Return = Bunga Nominal (4%) - Inflasi (7%) = -3% pengikisan daya beli setiap tahun.'
        }
      ]
    },
    {
      id: 'eco-interest-rates',
      label: 'Suku Bunga & Kebijakan The Fed',
      domain: 'Ekonomi',
      summary: 'Peran suku bunga acuan sebagai gravitasi penentu valuasi seluruh kelas aset di dunia.',
      x: 600,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Warren Buffett mengibaratkan suku bunga seperti gravitasi bagi dunia finansial: semakin tinggi suku bunga, semakin kuat tarikan ke bawah terhadap harga semua aset (saham, obligasi, properti, startup). Ketika suku bunga nol, aset melayang tinggi tak masuk akal.',
        crossDisciplinary: {
          connectionText: 'Ekonomi x Valuasi Saham',
          domains: ['Ekonomi', 'Keuangan'],
          insight: 'Discount rate dalam rumus valuasi DCF langsung melonjak ketika suku bunga naik, memangkas nilai kini (Present Value) arus kas masa depan.',
        },
        caseStudy: {
          companyOrFigure: 'Paul Volcker & Suku Bunga 20% (1980)',
          story: 'Ketua The Fed Paul Volcker menaikkan suku bunga AS hingga 20% untuk mematahkan leher inflasi gila-gilaan, membuktikan suku bunga adalah tuas pamungkas moneter.',
          takeaway: 'Jangan pernah melawan arah kebijakan suku bunga bank sentral ("Don\'t fight the Fed").'
        },
        actionableSteps: [
          'Pantau hasil rapat FOMC The Fed dan RDG Bank Indonesia setiap bulan.',
          'Kurangi eksposur pada saham startup teknologi yang belum mencetak laba saat suku bunga tinggi.',
          'Gunakan instrumen deposito atau instrumen pasar uang berimbal hasil tinggi saat puncak siklus bunga.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Alokasi Portofolio Menjelang Kenaikan Suku Bunga Agresif',
        context: 'Bank sentral mengumumkan akan menaikkan suku bunga acuan secara beruntun dalam 12 bulan ke depan.',
        dilemma: 'Instrumen investasi mana yang paling diuntungkan dari skenario ini?',
        choices: [
          {
            id: 'c1',
            text: 'Membeli obligasi korporasi jangka panjang 20 tahun dengan kupon bunga tetap rendah.',
            consequence: 'Harga modal obligasi tersebut anjlok tajam di pasar sekunder begitu suku bunga baru yang lebih tinggi rilis.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Harga obligasi berbanding terbalik dengan arah suku bunga; durasi panjang paling menderita rugi modal.'
          },
          {
            id: 'c2',
            text: 'Pindahkan alokasi ke saham perbankan bermargin bunga bersih (NIM) lebar dan instrumen pasar uang berdurasi pendek.',
            consequence: 'Pendapatan bunga perbankan melonjak, portofolio kebal terhadap penurunan harga obligasi, dan yield optimal.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Bank bermodal kuat memetik margin bunga pinjaman lebih tinggi saat era suku bunga naik.'
          }
        ]
      },
      quiz: [
        {
          id: 'eco-q-3',
          question: 'Mengapa valuasi saham teknologi berorientasi masa depan (growth stocks) cenderung anjlok drastis saat suku bunga bank sentral dinaikkan?',
          options: [
            'Karena pemilik saham teknologi tidak boleh menggunakan internet saat bunga naik',
            'Karena arus kas masa depan yang dijanjikan 10 tahun lagi di-diskon dengan suku bunga lebih tinggi, sehingga Nilai Kini (Present Value)-nya menjadi jauh lebih kecil',
            'Karena semua karyawan teknologi otomatis dipecat oleh pemerintah',
            'Karena komputer tidak memerlukan aliran listrik'
          ],
          correctAnswerIndex: 1,
          explanation: 'Discount rate yang lebih tinggi menurunkan nilai sekarang dari proyeksi arus kas masa depan secara matematis.'
        }
      ]
    },
    {
      id: 'eco-fractional-banking',
      label: 'Fractional Reserve & Multiplier Kas',
      domain: 'Keuangan',
      summary: 'Mekanisme perbankan menciptakan uang baru dari udara tipis melalui sistem cadangan fraksional.',
      x: 210,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Ketika Anda menabung Rp 100 juta di bank, uang itu tidak disimpan di brankas fisik. Bank hanya menahan Rp 10 juta sebagai cadangan (GWM 10%), dan meminjamkan Rp 90 juta ke pengusaha lain. Rp 90 juta itu disetor ke bank lain, lalu dipinjamkan lagi Rp 81 juta. Satu setoran awal berubah menjadi Rp 1 miliar kredit beredar.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Manajemen Risiko Sistemik',
          domains: ['Keuangan', 'Ekonomi'],
          insight: 'Sistem ini memicu ledakan produktivitas ekonomi, namun sangat rentan terhadap kepanikan penarikan massal (Bank Run).',
        },
        caseStudy: {
          companyOrFigure: 'Kolaps Silicon Valley Bank (SVB 2023)',
          story: 'SVB mengalami penarikan dana $42 miliar dalam 10 jam melalui mobile banking. Karena dana nasabah terkunci di obligasi jangka panjang, SVB bangkrut seketika.',
          takeaway: 'Pahami bahwa bank Anda tidak menyimpan uang Anda secara tunai; diversifikasikan simpanan institusi Anda di beberapa bank tier-1.'
        },
        actionableSteps: [
          'Pastikan saldo tabungan Anda di setiap rekening bank berada dalam batas penjaminan LPS (Lembaga Penjamin Simpanan).',
          'Untuk kas korporasi besar, gunakan fasilitas split bank dan overnight repo pasar uang.',
          'Pelajari rasio kecukupan modal (CAR) dan LDR (Loan to Deposit Ratio) bank tempat Anda menyimpan dana.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Kas Perusahaan Saat Isu Kebangkrutan Bank Menengah',
        context: 'Bank menengah tempat Anda menaruh 90% saldo operasional perusahaan (Rp 25 miliar) mengalami rumor krisis solvabilitas obligasi.',
        dilemma: 'Tindakan mitigasi apa yang wajib dieksekusi pagi ini?',
        choices: [
          {
            id: 'c1',
            text: 'Diam dan menunggu pengumuman klarifikasi resmi di koran minggu depan.',
            consequence: 'Bank di-suspend oleh regulator, rekening perusahaan dibekukan, dan gaji karyawan gagal bayar.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Dalam krisis likuiditas perbankan, kecepatan mengamankan kas operasional menentukan kelangsungan hidup bisnis.'
          },
          {
            id: 'c2',
            text: 'Segera pecah dan transfer dana ke bank buku IV (BUMN/Swasta Sistemik) dalam batas penjaminan legal.',
            consequence: 'Kas 100% selamat, operasional penggajian aman, dan risiko sistemik terisolasi sempurna.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Keamanan modal dan likuiditas operasional selalu berada di atas iming-iming bunga simpanan tinggi.'
          }
        ]
      },
      quiz: [
        {
          id: 'eco-q-4',
          question: 'Jika Giro Wajib Minimum (GWM) yang ditetapkan bank sentral adalah 10%, berapa potensi penciptaan uang maksimal dari setoran awal Rp 10 juta melalui Money Multiplier?',
          options: [
            'Tetap Rp 10 juta tanpa penambahan',
            'Rp 100 juta (1 / 0.10 = 10x pengganda)',
            'Rp 1 miliar',
            'Rp 0 rupiah'
          ],
          correctAnswerIndex: 1,
          explanation: 'Rumus Money Multiplier adalah 1 / Persentase Cadangan. 1 / 0.10 = 10x, sehingga Rp 10 juta bisa melipat jadi Rp 100 juta kredit.'
        }
      ]
    },
    {
      id: 'eco-valuation-dcf',
      label: 'Valuasi Fundamental: DCF & P/E',
      domain: 'Keuangan',
      summary: 'Menghitung nilai intrinsik wajar bisnis melalui proyeksi Discounted Cash Flow dan perbandingan kelipatan laba.',
      x: 600,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Membeli saham adalah membeli kepemilikan riil atas pohon uang. Valuasi DCF menghitung berapa total kantong buah yang akan dihasilkan pohon ini selama 20 tahun ke depan, lalu menghitung nilainya jika dibayar tunai hari ini dengan memperhitungkan risiko badai.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Matematika Investasi',
          domains: ['Keuangan', 'Bisnis'],
          insight: 'Harga adalah apa yang Anda bayar; Nilai adalah apa yang Anda dapatkan (Warren Buffett).',
        },
        caseStudy: {
          companyOrFigure: 'Aswath Damodaran (Dean of Valuation)',
          story: 'Profesor NYU Stern yang membedah valuasi korporasi dunia secara open-source. Ia mengajarkan bahwa narasi tanpa angka adalah dongeng, dan angka tanpa narasi adalah fatamorgana.',
          takeaway: 'Hanya beli aset saat harga pasar berada di bawah nilai intrinsik konservatif dengan batas aman (Margin of Safety minimal 25-30%).'
        },
        actionableSteps: [
          'Hitung Free Cash Flow to Firm (FCFF): Arus kas operasi dikurangi belanja modal riil (CapEx).',
          'Terapkan Margin of Safety: jangan beli saham dengan valuasi penuh tanpa diskon risiko.',
          'Bandingkan rasio P/E (Price to Earnings) dengan rata-rata historis 5 tahun industri sejenis.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Akuisisi Saham: Perusahaan Viral vs Perusahaan Fundamental',
        context: 'Anda memiliki modal untuk membeli satu dari dua perusahaan: Perusahaan A (hype medsos, rugi operasional, P/S 40x) vs Perusahaan B (monopoli industri komponen, FCF positif 18% per tahun, P/E 9x).',
        dilemma: 'Ke mana modal institusi dialokasikan?',
        choices: [
          {
            id: 'c1',
            text: 'Beli seluruh saham Perusahaan A karena sedang trending di timeline media sosial.',
            consequence: 'Begitu tren reda dan investor menuntut pembagian dividen, harga saham anjlok 75%.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mengejar tren tanpa dukungan arus kas bebas adalah spekulasi berisiko kehancuran modal permanen.'
          },
          {
            id: 'c2',
            text: 'Beli saham Perusahaan B dengan valuasi diskon P/E 9x dan nikmati dividen arus kas riil.',
            consequence: 'Menerima dividen konsisten 8% per tahun dan apresiasi modal 120% saat pasar menyadari nilai intrinsiknya.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Membeli dolar seharga 60 sen (Margin of Safety) adalah esensi investasi nilai legendaris.'
          }
        ]
      },
      quiz: [
        {
          id: 'eco-q-5',
          question: 'Dalam pemodelan keuangan Discounted Cash Flow (DCF), apa yang dimaksud dengan "Margin of Safety"?',
          options: [
            'Batas asuransi kebakaran gedung kantor pusat',
            'Selisih diskon antara nilai intrinsik wajar hasil kalkulasi dengan harga pasar aktual yang dibayar untuk meredam risiko kesalahan estimasi',
            'Jumlah petugas keamanan yang menjaga brankas uang tunai',
            'Diskon harga barang cuci gudang akhir tahun'
          ],
          correctAnswerIndex: 1,
          explanation: 'Margin of Safety melindungi modal investor dari proyeksi masa depan yang tidak sesuai ekspektasi.'
        }
      ]
    }
  ],
  edges: [
    { id: 'ee1', from: 'eco-root', to: 'eco-inflation', label: 'Erosi Daya Beli', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'ee2', from: 'eco-root', to: 'eco-interest-rates', label: 'Gravitasi Aset', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'ee3', from: 'eco-root', to: 'eco-fractional-banking', label: 'Pengganda Kredit', domains: ['Keuangan', 'Ekonomi'] },
    { id: 'ee4', from: 'eco-root', to: 'eco-valuation-dcf', label: 'Nilai Intrinsik', domains: ['Keuangan', 'Bisnis'] },
  ]
};

// ------------------------------------------------------------------------------
// 4. DOMAIN: PEMASARAN & SALES
// Topik: Cold Outreach, Copywriting Psychology, Viral Coefficient, Brand Equity
// ------------------------------------------------------------------------------
const MARKETING_SALES_MAP: MindmapData = {
  id: 'domain-pemasaran-sales',
  topic: 'Pemasaran & Sales Konversi Tinggi',
  rootId: 'mkt-root',
  description: 'Arsitektur penawaran tak tertolak, psikologi persuasif copywriting, dan formula viralitas organik.',
  nodes: [
    {
      id: 'mkt-root',
      label: 'Mesin Penawaran & Permintaan',
      domain: 'Bisnis',
      summary: 'Mengubah perhatian (attention) orang asing menjadi transaksi dan loyalitas jangka panjang.',
      x: 400,
      y: 280,
      level: 0,
      microContent: {
        analogy: 'Produk terbaik di dunia yang disimpan di ruang bawah tanah gelap bernilai Rp 0 bagi pasar. Pemasaran bukan sekadar mengiklankan apa yang Anda miliki, melainkan membangun jembatan persepsi bahwa solusi Anda adalah jawaban paling masuk akal atas penderitaan mereka.',
        crossDisciplinary: {
          connectionText: 'Pemasaran x Psikologi Evolusioner',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'Orang tidak membeli produk fisik; mereka membeli versi diri mereka yang lebih berstatus, lebih aman, dan lebih bahagia setelah memiliki produk tersebut.',
        },
        caseStudy: {
          companyOrFigure: 'Alex Hormozi ($100M Offers)',
          story: 'Membangun konsep "Grand Slam Offer": membuat penawaran yang begitu bernilai tinggi dan minim risiko sehingga calon pembeli merasa bodoh jika menolaknya.',
          takeaway: 'Tingkatkan Dream Outcome dan Persepsi Kepastian, perkecil Waktu Tunggu dan Usaha yang dibutuhkan konsumen.'
        },
        actionableSteps: [
          'Evaluasi Value Equation: Naikkan hasil impian (Dream Outcome) dan minimalkan pengorbanan usaha klien.',
          'Terapkan jaminan keberhasilan tanpa syarat (Money Back Guarantee + Bonus Kompensasi).',
          'Sederhanakan Call-to-Action (CTA) menjadi satu aksi tunggal yang sangat mudah dieksekusi.'
        ],
        difficulty: 'Pemula',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Penawaran Jasa Konsultasi B2B',
        context: 'Proposal Anda sering ditolak karena klien ragu akan hasil riil dan takut membuang anggaran Rp 50 juta.',
        dilemma: 'Bagaimana merestrukturisasi penawaran agar klien langsung menyepakatinya?',
        choices: [
          {
            id: 'c1',
            text: 'Turunkan harga menjadi Rp 10 juta tapi hilangkan komitmen hasil apapun.',
            consequence: 'Klien memandang kualitas Anda rendah, Anda kelelahan mengerjakan proyek murah dengan margin tipis.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Perang harga ke bawah hanya menarik klien paling rewel dengan anggaran paling sedikit.'
          },
          {
            id: 'c2',
            text: 'Tetap di harga Rp 50 juta namun gunakan model "Pay-for-Performance": DP operasional 20%, sisanya dibayar jika target KPI kenaikan omzet 30% tercapai.',
            consequence: 'Klien merasa risikonya nol, proposal disetujui dalam 24 jam, dan Anda mengantongi bayaran penuh plus bonus kepuasan.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menyerap risiko klien adalah magnet konversi paling kuat dalam penjualan bernilai tinggi.'
          }
        ]
      },
      quiz: [
        {
          id: 'mkt-q-1',
          question: 'Menurut formula Value Equation Alex Hormozi, dua variabel manakah yang harus diminimalkan sekecil mungkin untuk meroketkan nilai sebuah penawaran?',
          options: [
            'Harga produk dan jumlah halaman brosur',
            'Waktu tunggu pencapaian hasil (Time Delay) dan usaha/pengorbanan klien (Effort & Sacrifice)',
            'Pajak pertambahan nilai dan biaya sewa kantor',
            'Jumlah warna pada logo perusahaan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Semakin instan hasil didapat dengan usaha paling minim, semakin bernilai penawaran tersebut di mata manusia.'
        }
      ]
    },
    {
      id: 'mkt-copywriting',
      label: 'Copywriting Psikologis & Hook',
      domain: 'Komunikasi',
      summary: 'Seni merangkai kata yang menghentikan scroll jari dan memicu tindakan beli seketika.',
      x: 210,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Di era rentang atensi 3 detik (Goldfish Economy), headline Anda adalah penjaga pintu gerbang. Jika headline membosankan, 80% calon pembeli menekan tombol back sebelum sempat membaca kehebatan produk Anda di baris kedua.',
        crossDisciplinary: {
          connectionText: 'Komunikasi x Neurosains',
          domains: ['Komunikasi', 'Psikologi'],
          insight: 'Kata-kata sensorik yang memicu rasa ingin tahu (Curiosity Gap) melepaskan dopamin yang memaksa pembaca terus menggulir ke bawah.',
        },
        caseStudy: {
          companyOrFigure: 'Eugene Schwartz (Breakthrough Advertising)',
          story: 'Menyusun "5 Stages of Customer Awareness": dari Unaware -> Problem Aware -> Solution Aware -> Product Aware -> Most Aware. Menjual ke orang Unaware dengan bahasa Most Aware adalah pemborosan iklan 100%.',
          takeaway: 'Cocokkan tingkat kesadaran audiens dengan sudut pesan pertama yang Anda sajikan.'
        },
        actionableSteps: [
          'Tulis 20 variasi Hook headline sebelum memilih 1 terbaik untuk iklan Anda.',
          'Gunakan rumus PAS: Problem (Senggol masalahnya), Agitation (Perdalam rasa sakitnya), Solution (Tawarkan jalan keluarnya).',
          'Ganti kata sifat abstrak ("Software Hebat") dengan fakta konkret ("Pangkas 4 Jam Waktu Buat Laporan Excel").'
        ],
        difficulty: 'Menengah',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Sudut Pesan Iklan Kursus Speaking',
        context: 'Iklan Anda menargetkan manajer korporat yang sering grogi saat presentasi di depan direksi.',
        dilemma: 'Headline mana yang menghasilkan rasio klik (CTR) dan pendaftaran tertinggi?',
        choices: [
          {
            id: 'c1',
            text: '"Pelatihan Public Speaking Terbaik Berakreditasi Nasional Batch Ke-12."',
            consequence: 'CTR rendah 0.4% karena audiens merasa itu brosur formal biasa yang membosankan.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menjual fitur dan akreditasi tidak menyentuh penderitaan emosional nyata calon klien.'
          },
          {
            id: 'c2',
            text: '"Jantung Berdebar Tiap Diminta Presentasi ke Direksi? Kuasai Struktur 3-Menit Ini Agar Ide Anda Disetujui Tanpa Dibantah."',
            consequence: 'CTR melonjak ke 4.1%, pendaftaran kelas penuh dalam 48 jam karena menyenggol penderitaan spesifik.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menggambarkan penderitaan audiens lebih akurat daripada yang bisa mereka jelaskan sendiri membangun kepercayaan instan.'
          }
        ]
      },
      quiz: [
        {
          id: 'mkt-q-2',
          question: 'Menurut Eugene Schwartz, apa kesalahan fatal seorang copywriter saat beriklan ke audiens pada tahap "Problem Aware"?',
          options: [
            'Menggunakan huruf kapital pada judul',
            'Langsung menjajakan nama produk dan diskon harga tanpa memvalidasi masalah yang sedang dialami audiens',
            'Menulis copywriting lebih dari 50 kata',
            'Mencantumkan nomor customer service'
          ],
          correctAnswerIndex: 1,
          explanation: 'Audiens yang baru sadar masalah butuh empati dan edukasi solusi sebelum mereka siap mendengar nama brand Anda.'
        }
      ]
    },
    {
      id: 'mkt-viral-k-factor',
      label: 'Koefisien Viral (K-Factor) & Loop',
      domain: 'Bisnis',
      summary: 'Mekanisme pertumbuhan organik di mana setiap 1 pengguna aktif mengundang lebih dari 1 pengguna baru.',
      x: 600,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Pertumbuhan iklan berbayar seperti membeli bensin per liter; saat dompet ditutup, mobil berhenti melaju. Viral Loop adalah virus menular yang baik: produk dirancang sedemikian rupa sehingga pemakaian normal oleh satu orang secara otomatis memamerkannya ke 3 orang lain.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Matematika Epidemiologi',
          domains: ['Bisnis', 'Data & Analitik'],
          insight: 'Jika K-factor > 1, produk tumbuh secara eksponensial tanpa perlu mengeluarkan biaya iklan sepeser pun.',
        },
        caseStudy: {
          companyOrFigure: 'Hotmail & Dropbox Referral Loop',
          story: 'Hotmail menyematkan signature legendaris: "PS: I love you. Get your free email at Hotmail" di setiap email keluar. Dropbox memberi ekstra 500MB cloud gratis jika mengajak teman, melipatgandakan pengguna 39x lipat dalam 15 bulan.',
          takeaway: 'Jadikan proses berbagi sebagai bagian alami dari utilitas produk itu sendiri.'
        },
        actionableSteps: [
          'Hitung K-Factor: K = (Jumlah Undangan terkirim per user) x (Persentase konversi undangan menjadi user baru).',
          'Sematkan watermarking atau lencana produk yang elegan pada dokumen yang di-share pengguna ke pihak luar.',
          'Beri insentif dua arah (Double-Sided Reward): pengundang dan yang diundang sama-sama mendapat keuntungan nyata.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Desain Program Referral Fintech',
        context: 'Aplikasi transfer antar bank gratis Anda ingin menambah 100.000 pengguna baru dengan anggaran terbatas.',
        dilemma: 'Skema referral mana yang menghasilkan K-Factor di atas 1?',
        choices: [
          {
            id: 'c1',
            text: 'Beri kupon undian berhadiah 1 unit sepeda motor yang diundi akhir tahun untuk 1 orang beruntung.',
            consequence: 'User merasa peluang menangnya mustahil, tidak ada motivasi untuk mengundang teman; K-factor anjlok ke 0.05.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Hadiah abstrak dengan peluang minim tidak memicu tindakan spontan di era digital.'
          },
          {
            id: 'c2',
            text: 'Skema Dobel Tunai Pasti: Ajak 1 teman, Anda dapat saldo Rp 25.000 dan teman Anda langsung dapat saldo Rp 25.000 setelah transaksi pertama.',
            consequence: 'K-factor menembus 1.35, pengguna berebut membagikan link ke grup WhatsApp keluarga, pengguna tembus 100.000 dalam 6 minggu.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Insentif dua arah yang pasti dan instan menciptakan dorongan sosial tanpa rasa malu membagikan link.'
          }
        ]
      },
      quiz: [
        {
          id: 'mkt-q-3',
          question: 'Kapan sebuah produk digital secara matematis mengalami pertumbuhan viral eksponensial murni tanpa bantuan iklan?',
          options: [
            'Ketika K-Factor bernilai tepat 0',
            'Ketika K-Factor (Viral Coefficient) lebih besar dari 1.0 (K > 1)',
            'Ketika perusahaan memiliki 1 juta subscriber YouTube',
            'Ketika biaya server menjadi gratis'
          ],
          correctAnswerIndex: 1,
          explanation: 'Jika K > 1, setiap 100 pengguna rata-rata menghasilkan lebih dari 100 pengguna baru berikutnya secara swasembada.'
        }
      ]
    },
    {
      id: 'mkt-brand-equity',
      label: 'Ekuitas Merek & Parit Persepsi',
      domain: 'Bisnis',
      summary: 'Mengubah komoditas umum menjadi simbol identitas yang kebal terhadap perang harga.',
      x: 210,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Kopi hitam murni adalah komoditas dengan harga biji Rp 500 per cangkir. Di warung sederhana dihargai Rp 4.000. Begitu diberi gelas hijau bertuliskan nama Anda dan logo putri duyung Starbucks, orang dengan rela membayar Rp 65.000. Selisih Rp 60.000 itu murni adalah Ekuitas Merek (Brand Equity).',
        crossDisciplinary: {
          connectionText: 'Bisnis x Psikologi Status Sosial',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'Brand mewah tidak menjual fungsionalitas; mereka menjual status, kepemilikan kelompok elit, dan ketenangan pikiran.',
        },
        caseStudy: {
          companyOrFigure: 'LVMH (Bernard Arnault)',
          story: 'Arnault membangun imperium Louis Vuitton dan Dior dengan aturan ketat: tidak pernah mendiskon barang mewah. Barang yang tidak laku ditarik, bukan diobral murah, demi melindungi prestise jangka panjang.',
          takeaway: 'Diskon jangka pendek merusak reputasi harga merek selamanya di mata pembeli berdaya beli tinggi.'
        },
        actionableSteps: [
          'Tentukan "Musuh Bersama" (The Enemy) yang diperangi brand Anda (misal: "Kami melawan birokrasi berbelit-belit").',
          'Pertahankan konsistensi visual dan standar layanan tanpa kompromi.',
          'Hentikan promo diskon banting harga; gantikan dengan penambahan nilai (Value-Add Bundling).'
        ],
        difficulty: 'Menengah',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Penjualan Menurun: Diskon atau Re-Branding?',
        context: 'Brand pakaian lokal premium Anda mengalami penurunan penjualan 20% akibat pelemahan daya beli pasar.',
        dilemma: 'Tindakan apa yang mempertahankan kelangsungan merek jangka panjang?',
        choices: [
          {
            id: 'c1',
            text: 'Obral diskon 70% di marketplace dengan banner warna-warni heboh.',
            consequence: 'Stok habis sementara, namun pelanggan premium merasa jijik dan berhenti membeli; brand Anda kini dipandang brand murahan selamanya.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Diskon ekstrem merusak ekuitas harga dan memusnahkan persepsi prestise yang dibangun bertahun-tahun.'
          },
          {
            id: 'c2',
            text: 'Keluarkan lini edisi terbatas berkolaborasi dengan seniman ternama, kemas dengan pengalaman unboxing eksklusif, dan pertahankan harga.',
            consequence: 'Produk ludes terjual ke kolektor, margin terjaga 75%, dan posisi merek semakin kokoh di segmen atas.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Kelangkaan dan diferensiasi kultural melindungi nilai merek dari tekanan inflasi komoditas.'
          }
        ]
      },
      quiz: [
        {
          id: 'mkt-q-4',
          question: 'Mengapa konglomerat barang mewah LVMH melarang keras pemberian diskon harga pada tas Louis Vuitton?',
          options: [
            'Karena undang-undang di Prancis melarang diskon',
            'Karena diskon akan menghancurkan persepsi eksklusivitas dan nilai status sosial yang menjadi esensi parit merek mereka',
            'Karena tas mereka terbuat dari plastik daur ulang murah',
            'Karena kasir mereka tidak bisa menghitung persentase diskon'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pelanggan barang mewah membeli kelangkaan dan status; diskon merusak ilusi prestise tersebut seketika.'
        }
      ]
    },
    {
      id: 'mkt-cold-outreach',
      label: 'Cold Outreach & Penjualan B2B',
      domain: 'Komunikasi',
      summary: 'Metodologi sistematis menghubungi pengambil keputusan tingkat C-Level tanpa koneksi orang dalam.',
      x: 600,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Mengirimkan pesan template massal ke 1.000 CEO bagaikan menembak meriam ke udara dengan mata tertutup: berisik, mahal, dan tidak mengenai siapa-siapa. Cold outreach berkelas adalah tembakan penembak jitu (sniper): 1 email hiper-personal yang membuktikan Anda memahami masalah terdalam mereka.',
        crossDisciplinary: {
          connectionText: 'Komunikasi x Psikologi Kekuasaan',
          domains: ['Komunikasi', 'Bisnis'],
          insight: 'Para eksekutif sibuk hanya merespons orang yang menghormati waktu mereka dan menawarkan solusi instan atas KPI kuartal mereka.',
        },
        caseStudy: {
          companyOrFigure: 'Aaron Ross (Predictable Revenue / Salesforce)',
          story: 'Menciptakan formula "Cold Calling 2.0" di Salesforce yang menghasilkan $100 juta tambahan ARR tanpa melakukan cold call telepon konvensional, murni lewat email referensi hierarki organisasi.',
          takeaway: 'Jangan langsung menjual di email pertama; minta rujukan kepada orang yang tepat di departemen terkait.'
        },
        actionableSteps: [
          'Riset 1 insight spesifik tentang perusahaan prospek sebelum menulis baris pertama email.',
          'Batasi panjang email maksimal 75-100 kata yang bisa dibaca tuntas dalam 20 detik di layar smartphone.',
          'Gunakan Call-to-Action dengan komitmen rendah: "Apakah Anda terbuka untuk bertukar pikiran 10 menit minggu ini?".'
        ],
        difficulty: 'Menengah',
        readTime: '2 min'
      },
      decisionScenario: {
        title: 'Dilema Email Cold Outreach ke Direktur Operasional',
        context: 'Anda ingin menawarkan software otomasi logistik ke COO perusahaan ekspedisi besar nasional.',
        dilemma: 'Format pembuka email mana yang akan Anda kirimkan?',
        choices: [
          {
            id: 'c1',
            text: 'Email sepanjang 5 paragraf menjelaskan sejarah berdirinya perusahaan Anda, profil direksi, dan lampiran brosur PDF 15 MB.',
            consequence: 'Email langsung masuk folder Spam atau dihapus dalam 2 detik karena merepotkan pembaca.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Eksekutif C-level tidak peduli sejarah Anda; mereka hanya peduli waktu dan target angka mereka.'
          },
          {
            id: 'c2',
            text: 'Email 3 kalimat: Mengapresiasi ekspansi rute baru mereka, menyebutkan 1 bottleneck umum di rute tersebut, dan menawarkan studi kasus singkat bagaimana kompetitor memangkas 18% biaya bahan bakar.',
            consequence: 'COO membalas dalam 4 jam dan mengarahkan ke Kepala Tim Pengadaan untuk demo teknis minggu ini.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Email ringkas, berbasis riset, dan berfokus pada hasil ROI selalu mendapatkan respons eksekutif.'
          }
        ]
      },
      quiz: [
        {
          id: 'mkt-q-5',
          question: 'Menurut metodologi Predictable Revenue karya Aaron Ross, apa tujuan utama dari email kontak dingin pertama ke perusahaan target?',
          options: [
            'Memaksa calon klien langsung mentransfer uang muka pembayaran kontrak',
            'Memulai percakapan ringkas dan mendapatkan rujukan ke pengambil keputusan yang tepat di dalam organisasi',
            'Menceritakan biografi lengkap seluruh founder dari masa kecil',
            'Mengirimkan surat somasi hukum'
          ],
          correctAnswerIndex: 1,
          explanation: 'Email pertama bertujuan membangun kontak dan rujukan internal, bukan langsung menutup transaksi kompleks.'
        }
      ]
    }
  ],
  edges: [
    { id: 'me1', from: 'mkt-root', to: 'mkt-copywriting', label: 'Psikologi Kata', domains: ['Bisnis', 'Komunikasi'] },
    { id: 'me2', from: 'mkt-root', to: 'mkt-viral-k-factor', label: 'Loop Pertumbuhan', domains: ['Bisnis', 'Data & Analitik'] },
    { id: 'me3', from: 'mkt-root', to: 'mkt-brand-equity', label: 'Parit Persepsi', domains: ['Bisnis', 'Psikologi'] },
    { id: 'me4', from: 'mkt-root', to: 'mkt-cold-outreach', label: 'Eksekusi B2B', domains: ['Komunikasi', 'Bisnis'] },
  ]
};

// ------------------------------------------------------------------------------
// 5. DOMAIN: GEOPOLITIK & SISTEM
// Topik: Supply Chain Vulnerability, Petrodollar, Regulatory Risk in Global Import/Export
// ------------------------------------------------------------------------------
const GEOPOLITICS_SYSTEMS_MAP: MindmapData = {
  id: 'domain-geopolitik-sistem',
  topic: 'Geopolitik & Rantai Pasok Global',
  rootId: 'geo-root',
  description: 'Peta pergeseran hegemoni mata uang dunia, chokepoint logistik maritim, dan manajemen risiko rantai pasok global.',
  nodes: [
    {
      id: 'geo-root',
      label: 'Arsitektur Kekuatan Geopolitik',
      domain: 'Geopolitik',
      summary: 'Bagaimana geografi fisik, aliansi militer, dan aliran energi mendikte arus perdagangan dunia.',
      x: 400,
      y: 280,
      level: 0,
      microContent: {
        analogy: 'Perdagangan dunia bukanlah pasar bebas tanpa batas, melainkan papan catur raksasa di mana selat laut sempit dan pipa energi menjadi bidak penentu. Perusahaan yang mengabaikan peta geopolitik seperti nakhoda kapal yang berlayar di tengah badai tanpa kompas.',
        crossDisciplinary: {
          connectionText: 'Geopolitik x Ekonomi Makro',
          domains: ['Geopolitik', 'Ekonomi'],
          insight: 'Ketegangan perbatasan dan sanksi tarif perdagangan langsung menggelembungkan biaya inflasi kontainer dan menata ulang peta pabrik manufaktur dunia.',
        },
        caseStudy: {
          companyOrFigure: 'Perjanjian Petrodollar 1974 & BRICS',
          story: 'AS dan Arab Saudi menyepakati perdagangan minyak global wajib menggunakan Dolar AS, menciptakan permintaan buatan permanen terhadap mata uang fiat AS selama 50 tahun terakhir.',
          takeaway: 'Mata uang cadangan dunia didukung oleh supremasi perdagangan energi dan jaminan jalur maritim aman.'
        },
        actionableSteps: [
          'Identifikasi ketergantungan bahan baku bisnis Anda terhadap 1 negara adidaya tertentu.',
          'Petakan skenario alternatif jika terjadi perang dagang tarif impor mendadak.',
          'Diversifikasi mata uang transaksi internasional di luar monopoli tunggal jika memungkinkan.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Kebijakan Tarif Impor Baru Pemerintah',
        context: 'Pemerintah mendadak menetapkan kuota dan tarif impor tambahan 25% untuk bahan baku plastik yang Anda butuhkan dari luar negeri.',
        dilemma: 'Bagaimana mengamankan operasional pabrik tanpa kolaps margin?',
        choices: [
          {
            id: 'c1',
            text: 'Tetap impor seperti biasa dan menanggung seluruh beban tarif dari laba bersih Anda.',
            consequence: 'Margin operasional menjadi negatif dalam 3 bulan, cadangan kas terkuras habis.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menyerap kenaikan tarif permanen tanpa adaptasi rantai pasok adalah bunuh diri finansial.'
          },
          {
            id: 'c2',
            text: 'Beralih ke skema "China + 1": alihkan sourcing ke pemasok alternatif di Asia Tenggara yang memiliki perjanjian perdagangan bebas (FTA) tarif 0%.',
            consequence: 'Bebas dari tarif bea masuk tambahan, biaya logistik tetap terkontrol, dan pasokan aman jangka panjang.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Memanfaatkan perjanjian perdagangan bebas regional (FTA) adalah mitigasi risiko geopolitik paling efektif.'
          }
        ]
      },
      quiz: [
        {
          id: 'geo-q-1',
          question: 'Apa dampak paling fundamental dari sistem Petrodollar yang disepakati tahun 1974 terhadap ekonomi Amerika Serikat?',
          options: [
            'Amerika Serikat dilarang menggunakan mobil bertenaga bensin',
            'Seluruh negara di dunia wajib memegang cadangan devisa Dolar AS untuk membeli energi minyak, memberikan hak istimewa moneter raksasa bagi AS',
            'Harga minyak mentah di seluruh dunia otomatis menjadi gratis',
            'Semua bank di Timur Tengah dipimpin oleh presiden AS'
          ],
          correctAnswerIndex: 1,
          explanation: 'Kewajiban membeli minyak dengan Dolar menciptakan permintaan global buatan yang menopang nilai mata uang Dolar AS.'
        }
      ]
    },
    {
      id: 'geo-chokepoint',
      label: 'Kerentanan Rantai Pasok & Chokepoint',
      domain: 'Geopolitik',
      summary: 'Titik sempit jalur pelayaran maritim dunia (Selat Malaka, Suez, Bab el-Mandeb) penentu harga kontainer.',
      x: 210,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Lebih dari 80% volume barang fisik dunia diangkut lewat laut melalui segelintir jalur selebar beberapa mil laut saja. Jika satu jalur tersumbat konflik atau kapal karam, rantai pasok ribuan pabrik di seluruh benua terhenti serentak seperti arteri darah yang tersumbat kolesterol.',
        crossDisciplinary: {
          connectionText: 'Geopolitik x Manajemen Logistik',
          domains: ['Geopolitik', 'Bisnis'],
          insight: 'Model logistik "Just-In-Time" yang terlalu ramping sangat rapuh terhadap gangguan chokepoint laut; kini digantikan oleh strategi "Just-In-Case".',
        },
        caseStudy: {
          companyOrFigure: 'Insiden Terusan Suez (Ever Given 2021) & Laut Merah',
          story: 'Satu kapal kontainer yang tersangkut di Terusan Suez menahan perdagangan dunia senilai $9.6 miliar per hari, memicu lonjakan tarif kargo laut hingga 400% dalam seminggu.',
          takeaway: 'Jangan pernah bergantung pada satu jalur koridor logistik tanpa rute cadangan teruji.'
        },
        actionableSteps: [
          'Audit inventaris: ubah strategi buffer stock komponen kritis dari 2 minggu menjadi 60 hari.',
          'Gunakan kombinasi multi-modal (laut + kereta api/udara) untuk barang bernilai tinggi.',
          'Pastikan polis asuransi maritim mencakup klausul "War Risk" dan "General Average".'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Krisis Pengiriman Kontainer di Selat Kritis',
        context: 'Konflik bersenjata di Laut Merah memaksa kapal kargo memutar lewat Tanjung Harapan Afrika, menambah waktu kirim 18 hari dan biaya naik $2.500/kontainer.',
        dilemma: 'Tindakan apa yang harus diambil untuk pesanan akhir tahun?',
        choices: [
          {
            id: 'c1',
            text: 'Tunggu di pelabuhan sampai perang reda tanpa memberi tahu klien pembeli.',
            consequence: 'Klien membatalkan pesanan, mendenda keterlambatan ratusan juta rupiah, dan kontrak diputus.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menyembunyikan keterlambatan rantai pasok menghancurkan kepercayaan kredibilitas bisnis.'
          },
          {
            id: 'c2',
            text: 'Transparan ke klien, amankan slot pelayaran alternatif lebih awal, dan kirimkan sampel darurat via kargo udara.',
            consequence: 'Klien menghargai proaktifitas Anda, jadwal peluncuran tetap aman, dan hubungan kemitraan makin erat.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Transparansi operasional dan mitigasi cepat adalah tolok ukur kapabilitas logistik kelas dunia.'
          }
        ]
      },
      quiz: [
        {
          id: 'geo-q-2',
          question: 'Mengapa Selat Malaka dikategorikan sebagai salah satu Chokepoint Maritim paling strategis dan kritis di planet bumi?',
          options: [
            'Karena merupakan selat terlebar di dunia yang tidak pernah dilalui kapal',
            'Karena menjadi jalur utama pengiriman hampir sepertiga perdagangan maritim global dan 80% pasokan minyak ke Asia Timur',
            'Karena di dasar selat terdapat terowongan kereta api rahasia',
            'Karena tidak memerlukan bahan bakar untuk berlayar di sana'
          ],
          correctAnswerIndex: 1,
          explanation: 'Selat Malaka menghubungkan Samudra Hindia dan Pasifik; penutupan jalur ini akan memicu krisis energi instan di Asia Timur.'
        }
      ]
    },
    {
      id: 'geo-reshoring',
      label: 'Reshoring & Friendshoring Industri',
      domain: 'Geopolitik',
      summary: 'Relokasi pabrik dan rantai manufaktur ke negara sekutu untuk memangkas risiko politis.',
      x: 600,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Selama 30 tahun terakhir, dunia mengagungkan efisiensi: mencari negara dengan upah buruh termurah di mana pun lokasinya. Sekarang dunia beralih ke ketahanan (resilience): lebih baik membayar ongkos sedikit lebih mahal asalkan pabrik berada di negara sahabat yang tidak akan menyita aset Anda saat perang meletus.',
        crossDisciplinary: {
          connectionText: 'Geopolitik x Hukum Investasi Asing',
          domains: ['Geopolitik', 'Hukum'],
          insight: 'Kebijakan industri nasional kini diisi dengan insentif subsidi pajak raksasa untuk menarik pabrik chip semikonduktor kembali ke tanah air.',
        },
        caseStudy: {
          companyOrFigure: 'Apple & Relokasi ke India & Vietnam',
          story: 'Apple memindahkan target perakitan 25% iPhone dunia ke India dan MacBook ke Vietnam untuk memangkas ketergantungan 100% pada fasilitas Foxconn di Tiongkok.',
          takeaway: 'Diversifikasikan geografi manufaktur sebelum krisis diplomatik memaksa Anda melakukannya dalam kondisi panik.'
        },
        actionableSteps: [
          'Evaluasi rantai tier-1 dan tier-2 pemasok Anda terhadap risiko embargo atau sanksi politik.',
          'Eksplorasi pemasok lokal atau regional ASEAN yang memenuhi standar kualitas internasional.',
          'Manfaatkan insentif kawasan ekonomi khusus (KEK) pemerintah untuk relokasi fasilitas.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Lokasi Pabrik Komponen Semikonduktor',
        context: 'Perusahaan Anda ingin membangun lini produksi chip baru. Opsi A: Biaya sangat murah di negara bersengketa sanksi; Opsi B: Biaya 15% lebih mahal di negara mitra dagang stabil.',
        dilemma: 'Ke mana modal investasi $50 juta dialokasikan?',
        choices: [
          {
            id: 'c1',
            text: 'Pilih Opsi A murni demi penghematan biaya tenaga kerja jangka pendek.',
            consequence: 'Dua tahun kemudian negara tersebut dijatuhi embargo teknologi, pabrik Anda disegel dan investasi hangus.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mengabaikan risiko geopolitik demi selisih upah murah adalah pertaruhan yang membahayakan kelangsungan hidup perusahaan.'
          },
          {
            id: 'c2',
            text: 'Pilih Opsi B (Friendshoring) dengan kepastian hukum dan perlindungan hak kekayaan intelektual (HKI).',
            consequence: 'Pabrik beroperasi tanpa gangguan, menarik klien multinasional terkemuka, dan memenuhi syarat sertifikasi ekspor global.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Kepastian regulasi dan aliansi perdagangan adalah fondasi utama keberlanjutan rantai pasok modern.'
          }
        ]
      },
      quiz: [
        {
          id: 'geo-q-3',
          question: 'Apa definisi dari strategi "Friendshoring" dalam manajemen rantai pasok global masa kini?',
          options: [
            'Memberikan produk gratis kepada seluruh teman sekolah',
            'Membatasi operasional rantai pasok dan pasokan bahan baku hanya pada negara-negara dengan nilai-nilai politik dan aliansi yang selaras untuk meminimalkan risiko geopolitik',
            'Menghapus semua perjanjian dagang internasional',
            'Menutup seluruh pabrik dan beralih ke pertanian tradisional'
          ],
          correctAnswerIndex: 1,
          explanation: 'Friendshoring memprioritaskan keamanan politik dan keselarasan ideologis di atas efisiensi biaya terendah semata.'
        }
      ]
    },
    {
      id: 'geo-regulatory-risk',
      label: 'Risiko Regulasi Ekspor-Impor & Pabean',
      domain: 'Hukum',
      summary: 'Kepatuhan kode HS, lisensi perizinan pabean, dan aturan anti-dumping lintas negara.',
      x: 210,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Bea Cukai pelabuhan adalah penjaga pintu gerbang berkacamata pembesar hukum. Satu kesalahan kecil dalam mencantumkan digit HS Code (Harmonized System) pada dokumen Pemberitahuan Ekspor Barang (PEB) dapat menyebabkan kontainer Anda disita di pelabuhan, didenda ratusan juta, atau dilelang paksa.',
        crossDisciplinary: {
          connectionText: 'Hukum Dagang x Pajak Internasional',
          domains: ['Hukum', 'Pajak'],
          insight: 'Ketidaktahuan terhadap aturan pabean dan tarif non-tarif (Non-Tariff Barriers) adalah penyebab utama kegagalan 70% eksportir pemula.',
        },
        caseStudy: {
          companyOrFigure: 'Incoterms 2020 (ICC Paris)',
          story: 'Kamar Dagang Internasional menyusun aturan baku (FOB, CIF, DDP, EXW) yang membedakan secara tegas kapan risiko barang berpindah dari penjual ke pembeli di tengah samudera.',
          takeaway: 'Jangan pernah menandatangani kontrak ekspor sebelum memahami di titik mana tanggung jawab klaim asuransi Anda berakhir.'
        },
        actionableSteps: [
          'Verifikasi HS Code 8-digit barang Anda di portal INSW (Indonesia National Single Window).',
          'Pilih Incoterms yang tepat: hindari DDP jika Anda belum menguasai regulasi pabean negara tujuan.',
          'Gunakan jasa Freight Forwarder bereputasi dengan izin PPJK (Pengusaha Pengurusan Jasa Kepabeanan) resmi.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Pemilihan Incoterms Pengiriman Ekspor Pertama',
        context: 'Pembeli di Jerman meminta kontrak dengan syarat DDP (Delivered Duty Paid), di mana Anda menanggung seluruh pajak impor dan bea masuk di pelabuhan Hamburg.',
        dilemma: 'Apakah Anda menyetujui syarat pengiriman ini?',
        choices: [
          {
            id: 'c1',
            text: 'Langsung tanda tangani DDP tanpa mencari tahu regulasi pajak PPN dan standar sertifikasi Uni Eropa.',
            consequence: 'Barang tertahan di pelabuhan Jerman karena tidak memiliki sertifikasi CE, biaya demorage membengkak Rp 150 juta.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'DDP di negara dengan regulasi ketat tanpa perwakilan lokal adalah jebakan biaya liar bagi eksportir baru.'
          },
          {
            id: 'c2',
            text: 'Negosiasikan ke syarat FOB (Free on Board) atau CIF (Cost, Insurance, and Freight), sehingga urusan bea masuk lokal ditangani pembeli Jerman.',
            consequence: 'Risiko kepabeanan lokal dialihkan ke pembeli yang lebih memahami hukum negaranya, transaksi berjalan lancar dan aman.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Syarat FOB/CIF melindungi eksportir dari kerumitan regulasi pajak domestik di negara tujuan.'
          }
        ]
      },
      quiz: [
        {
          id: 'geo-q-4',
          question: 'Dalam klausul Incoterms 2020, apa perbedaan mendasar antara FOB (Free on Board) dan CIF (Cost, Insurance, and Freight)?',
          options: [
            'FOB hanya berlaku untuk pesawat terbang, CIF untuk kapal selam',
            'Pada FOB penjual hanya menanggung biaya hingga barang naik ke kapal di pelabuhan asal, sedangkan CIF mengharuskan penjual menanggung biaya tambang laut dan asuransi hingga pelabuhan tujuan',
            'FOB membebaskan pembeli dari membayar uang barang',
            'CIF melarang kapal bersandar di pelabuhan manapun'
          ],
          correctAnswerIndex: 1,
          explanation: 'CIF mewajibkan penjual membiayai pengangkutan utama dan polis asuransi pelayaran laut hingga pelabuhan tujuan.'
        }
      ]
    },
    {
      id: 'geo-petrodollar-brics',
      label: 'De-Dolarisasi & Sistem Moneter BRICS',
      domain: 'Ekonomi',
      summary: 'Diversifikasi cadangan devisa emas, mata uang lokal (LCT), dan alternatif sistem transfer SWIFT.',
      x: 600,
      y: 420,
      level: 1,
      microContent: {
        analogy: 'Ketika satu mata uang menguasai seluruh pembuluh darah sistem pembayaran dunia (SWIFT), pembekuan rekening negara lain bisa dilakukan hanya dengan satu ketukan tombol di Washington. Gelombang De-Dolarisasi adalah usaha negara-negara berkembang membangun sistem pipa cadangan paralel agar tidak bisa dimatikan sewaktu-waktu.',
        crossDisciplinary: {
          connectionText: 'Ekonomi Global x Geopolitik Digital',
          domains: ['Ekonomi', 'Geopolitik'],
          insight: 'Inovasi CBDC (Central Bank Digital Currency) antar-negara berpotensi memotong hegemoni perbankan koresponden barat dalam 1-2 dekade ke depan.',
        },
        caseStudy: {
          companyOrFigure: 'Pembekuan Cadangan Devisa Rusia ($300 Miliar 2022)',
          story: 'Penyitaan aset cadangan devisa bank sentral oleh G7 mengejutkan banyak negara berkembang. Bank sentral dunia (Tiongkok, India, Timur Tengah) seketika memborong cadangan emas fisik terbesar dalam 55 tahun terakhir.',
          takeaway: 'Emas fisik dan mata uang non-SWIFT menjadi aset lindung nilai kedaulatan utama saat polarisasi global menajam.'
        },
        actionableSteps: [
          'Pantau transaksi Local Currency Transaction (LCT) antara Bank Indonesia dengan mitra dagang (Tiongkok, Jepang, Malaysia, Korsel).',
          'Alokasikan sebagian cadangan nilai perusahaan ke emas fisik bersertifikat LBMA.',
          'Gunakan bank yang memiliki jaringan multi-currency hedging untuk perdagangan luar negeri.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Transaksi Impor Mesin Pabrik dari Tiongkok',
        context: 'Pemasok mesin pabrik di Shanghai menawarkan diskon 4% jika transaksi diselesaikan dalam mata uang Renminbi (Yuan) menggunakan mekanisme LCT Bank Indonesia.',
        dilemma: 'Apakah Anda beralih dari Dolar AS ke Yuan dalam kontrak ini?',
        choices: [
          {
            id: 'c1',
            text: 'Tolak mentah-mentah dan bersikeras hanya mau membayar dengan Dolar AS.',
            consequence: 'Anda harus menanggung spread konversi Rupiah-ke-Dolar-ke-Yuan ganda dan kehilangan diskon 4%.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Mengabaikan fasilitas Local Currency Settlement membuat perusahaan menanggung biaya selisih kurs yang tidak perlu.'
          },
          {
            id: 'c2',
            text: 'Gunakan fasilitas Local Currency Transaction (LCT) bank devisa resmi: konversi langsung Rupiah ke Yuan tanpa lewat Dolar.',
            consequence: 'Menghemat biaya konversi ganda, mendapat diskon 4%, dan memangkas risiko fluktuasi kurs USD/IDR.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Penyelesaian mata uang lokal (LCT) mengeliminasi risiko perantara mata uang ketiga secara efisien.'
          }
        ]
      },
      quiz: [
        {
          id: 'geo-q-5',
          question: 'Apa manfaat langsung bagi eksportir/importir Indonesia dalam menggunakan mekanisme Local Currency Transaction (LCT) Bank Indonesia?',
          options: [
            'Dilarang melakukan transaksi bisnis dengan negara asing',
            'Dapat bertransaksi langsung menggunakan mata uang lokal kedua negara tanpa perlu mengonversi terlebih dahulu ke Dolar AS, menghemat biaya selisih kurs dan menekan risiko nilai tukar',
            'Pemerintah akan membayar 100% biaya barang',
            'Semua barang impor otomatis dibebaskan dari cukai'
          ],
          correctAnswerIndex: 1,
          explanation: 'LCT memangkas ketergantungan pada Dolar AS dan meniadakan biaya konversi ganda dalam perdagangan bilateral.'
        }
      ]
    }
  ],
  edges: [
    { id: 'ge1', from: 'geo-root', to: 'geo-chokepoint', label: 'Arteri Maritim', domains: ['Geopolitik', 'Bisnis'] },
    { id: 'ge2', from: 'geo-root', to: 'geo-reshoring', label: 'Ketahanan Pabrik', domains: ['Geopolitik', 'Hukum'] },
    { id: 'ge3', from: 'geo-root', to: 'geo-regulatory-risk', label: 'Batas Pabean', domains: ['Hukum', 'Pajak'] },
    { id: 'ge4', from: 'geo-root', to: 'geo-petrodollar-brics', label: 'Arsitektur Moneter', domains: ['Ekonomi', 'Geopolitik'] },
  ]
};

// ------------------------------------------------------------------------------
// REGISTRY TOPIC ENGINE: MAPPER DARI DOMAIN KE DATASET KHUSUS
// ------------------------------------------------------------------------------
export const TOPIC_REGISTRY: Record<string, MindmapData> = {
  // Domain Utama
  'bisnis': BUSINESS_STRATEGY_MAP,
  'strategi': BUSINESS_STRATEGY_MAP,
  'bisnis & strategi': BUSINESS_STRATEGY_MAP,

  'psikologi': BEHAVIORAL_PSYCHOLOGY_MAP,
  'psikologi perilaku': BEHAVIORAL_PSYCHOLOGY_MAP,

  'ekonomi': ECONOMICS_FINANCE_MAP,
  'keuangan': ECONOMICS_FINANCE_MAP,
  'ekonomi & keuangan': ECONOMICS_FINANCE_MAP,

  'pemasaran': MARKETING_SALES_MAP,
  'sales': MARKETING_SALES_MAP,
  'pemasaran & sales': MARKETING_SALES_MAP,
  'marketing': MARKETING_SALES_MAP,

  'geopolitik': GEOPOLITICS_SYSTEMS_MAP,
  'sistem': GEOPOLITICS_SYSTEMS_MAP,
  'geopolitik & sistem': GEOPOLITICS_SYSTEMS_MAP,
};

/**
 * Mendapatkan Mindmap secara dinamis berdasarkan domain atau keyword.
 * Dijamin selalu mengembalikan dataset yang kaya, unik, dan tidak pernah tertukar!
 */
export function getMindmapForTopic(queryOrDomain: string): MindmapData | null {
  const normalized = queryOrDomain.trim().toLowerCase();

  // 1. Cek kecocokan langsung pada nama domain / topik utama
  if (TOPIC_REGISTRY[normalized]) {
    return JSON.parse(JSON.stringify(TOPIC_REGISTRY[normalized]));
  }

  // 2. Cek kecocokan kata kunci domain
  if (normalized.includes('psikologi') || normalized.includes('bias') || normalized.includes('perilaku') || normalized.includes('kahneman') || normalized.includes('loss aversion') || normalized.includes('anchoring') || normalized.includes('fomo')) {
    return JSON.parse(JSON.stringify(BEHAVIORAL_PSYCHOLOGY_MAP));
  }

  if (normalized.includes('ekonomi') || normalized.includes('keuangan') || normalized.includes('inflasi') || normalized.includes('bunga') || normalized.includes('the fed') || normalized.includes('dcf') || normalized.includes('valuasi') || normalized.includes('bank')) {
    return JSON.parse(JSON.stringify(ECONOMICS_FINANCE_MAP));
  }

  if (normalized.includes('pemasaran') || normalized.includes('sales') || normalized.includes('marketing') || normalized.includes('copywriting') || normalized.includes('viral') || normalized.includes('brand') || normalized.includes('outreach')) {
    return JSON.parse(JSON.stringify(MARKETING_SALES_MAP));
  }

  if (normalized.includes('geopolitik') || normalized.includes('impor') || normalized.includes('ekspor') || normalized.includes('chokepoint') || normalized.includes('petrodollar') || normalized.includes('rantai pasok') || normalized.includes('pabean')) {
    return JSON.parse(JSON.stringify(GEOPOLITICS_SYSTEMS_MAP));
  }

  if (normalized.includes('bisnis') || normalized.includes('strategi') || normalized.includes('unit economics') || normalized.includes('cac') || normalized.includes('ltv') || normalized.includes('flywheel') || normalized.includes('moat') || normalized.includes('pricing')) {
    return JSON.parse(JSON.stringify(BUSINESS_STRATEGY_MAP));
  }

  return null;
}

export const CORE_DOMAINS = [
  { id: 'bisnis', label: 'Bisnis & Strategi', icon: 'Briefcase', count: 5 },
  { id: 'psikologi', label: 'Psikologi Perilaku', icon: 'Brain', count: 5 },
  { id: 'ekonomi', label: 'Ekonomi & Keuangan', icon: 'TrendingUp', count: 5 },
  { id: 'pemasaran', label: 'Pemasaran & Sales', icon: 'Target', count: 5 },
  { id: 'geopolitik', label: 'Geopolitik & Sistem', icon: 'Globe', count: 5 },
];
