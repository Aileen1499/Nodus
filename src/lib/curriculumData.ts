// ==============================================================================
// NODUS — ELITE MASTERCLASS CURRICULUM DATA (FOUNDATIONAL TO ADVANCED)
// ==============================================================================

import { MindmapData } from '../types';
import { CORPORATE_STRATEGY_WEALTH_CURRICULUM } from './corporateCurriculum';
import { ADVANCED_MACRO_FINANCE_CURRICULUM } from './macroCurriculum';
import { ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM } from './behavioralCurriculum';
export { CORPORATE_STRATEGY_WEALTH_CURRICULUM, ADVANCED_MACRO_FINANCE_CURRICULUM, ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM };

// Legacy variable alias retained for backwards compatibility
export const DEPRECATED_MACRO_FINANCE_CURRICULUM: MindmapData = {
  id: 'curriculum-ekonomi-makro-keuangan',
  topic: 'Ekonomi Makro, Moneter & Keuangan Lanjutan',
  rootId: 'macro-1-1',
  description: 'Masterclass multi-tahap: Dari inflasi & suku bunga, siklus kredit Ray Dalio, WACC, hingga Quantitative Easing & Valuasi DCF.',
  nodes: [
    // --------------------------------------------------------------------------
    // LEVEL 1: FOUNDATIONAL
    // --------------------------------------------------------------------------
    {
      id: 'macro-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'LEVEL 1 (FOUNDATIONAL): Anatomi Nilai Uang & Waktu',
      label: 'Inflasi & Purchasing Power Degradation',
      domain: 'Ekonomi',
      summary: 'Mekanisme moneter bagaimana ekspansi uang beredar mendegradasi daya beli riil tabungan fiat.',
      x: 180,
      y: 130,
      level: 0,
      microContent: {
        mentalModel: 'Quantity Theory of Money ($M \\cdot V = P \\cdot Y$ - Milton Friedman)',
        analogy: 'Membayangkan lelang 100 butir telur di sebuah pulau tertutup dengan total uang beredar Rp 100.000 (harga Rp 1.000/butir). Jika helikopter pemerintah menjatuhkan uang tunai baru Rp 900.000 ke pulau itu tanpa menambah sebutir pun telur ayam baru, harga lelang telur otomatis meroket 10x lipat menjadi Rp 10.000/butir. Inflasi bukanlah kenaikan harga barang, melainkan penurunan nilai mata uang itu sendiri.',
        academicInsight: 'Riset empiris Milton Friedman membuktikan bahwa inflasi selalu merupakan fenomena moneter. Ketika suplai uang (M2) bertumbuh melampaui pertumbuhan output riil (GDP), surplus likuiditas akan mengejar jumlah barang yang terbatas (Demand-Pull Inflation) dan merambat ke ekspektasi upah (Wage-Price Spiral).',
        crossDisciplinary: {
          connectionText: 'Makroekonomi Moneter x Psikologi Ilusi Uang',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Money Illusion (Irving Fisher): Manusia cenderung melihat nominal uang di rekening tanpa mengoreksi daya beli riilnya terhadap sekeranjang barang konsumsi (CPI).',
        },
        caseStudy: {
          companyOrFigure: 'Erosi Daya Beli Dolar AS (1971 vs 2024)',
          story: 'Sejak Presiden Richard Nixon mencabut standar emas (Nixon Shock 1971), pasokan M2 Dolar AS mengembang lebih dari 2.400%. Akibatnya, uang $100 tahun 1971 kini hanya memiliki daya beli setara $12 di tahun 2024. Pemegang kas murni kehilangan 88% kekayaan riil tanpa pernah mengalami perampokan fisik.',
          takeaway: 'Memegang uang tunai jangka panjang di luar dana darurat likuid adalah keputusan investasi dengan jaminan rugi riil 100%.'
        },
        actionableSteps: [
          'Audit batas dana darurat: batasi kas murni maksimal 6 bulan biaya hidup pada instrumen pasar uang bebas risiko.',
          'Hitung inflasi gaya hidup pribadi (Personal CPI): bandingkan pengeluaran belanja bahan makanan, kesehatan, dan energi tahun ini vs tahun lalu.',
          'Alihkan ekses kas ke aset produktif penyerap inflasi (productive capital assets).'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Treasury Korporat: Alokasi Kas Mengendap Rp 50 Miliar',
        context: 'Perusahaan Anda memegang saldo kas idle Rp 50 miliar dari laba ditahan saat inflasi tahunan diproyeksikan melonjak ke 7.2%.',
        dilemma: 'Instrumen alokasi kas mana yang mengamankan daya beli riil tanpa mengorbankan solvabilitas operasional?',
        choices: [
          {
            id: 'c1',
            text: 'Biarkan 100% di rekening giro bank demi keamanan total dan kemudahan transfer.',
            consequence: 'Dalam 3 tahun daya beli modal tergerus lebih dari Rp 10 miliar secara riil.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Giro dengan bunga mendekati 0% membakar nilai kapital perusahaan di tengah inflasi tinggi.'
          },
          {
            id: 'c2',
            text: 'Spekulasikan seluruh kas ke komoditas minyak mentah berjangka (Futures) dengan leverage.',
            consequence: 'Jika harga minyak berbalik arah, perusahaan menghadapi margin call yang mengancam penggajian karyawan.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Mengorbankan keamanan modal kerja untuk spekulasi komoditas melanggar prinsip treasury korporat.'
          },
          {
            id: 'c3',
            text: 'Terapkan Cash Sweeping: 20% di pasar uang cair T+0, 80% di Surat Berharga Negara (SBN) tenor pendek berimbal hasil 6.8%.',
            consequence: 'Likuiditas harian terjaga, pokok modal terlindungi penuh penjaminan negara, dan return mengimbangi laju inflasi.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Kombinasi tenor pendek dan instrumen berdaulat (sovereign) memberikan proteksi inflasi optimal dengan risiko likuiditas minimal.'
          },
          {
            id: 'c4',
            text: 'Beli seluruh saham kompetitor secara acak di pasar modal reguler tanpa analisis fundamental.',
            consequence: 'Volatilitas pasar saham menekan neraca kuartalan dan memperburuk rasio likuiditas lancar (Current Ratio).',
            scoreBonus: 20,
            isOptimal: false,
            explanation: 'Saham memiliki volatilitas harga jangka pendek yang tidak cocok untuk penempatan kas modal kerja operasional.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-1-1',
          question: 'Menurut persamaan kuantitas uang Milton Friedman ($M \\cdot V = P \\cdot Y$), jika kecepatan peredaran uang ($V$) dan output riil ($Y$) dianggap konstan, apa yang terjadi jika bank sentral menggandakan jumlah uang beredar ($M$)?',
          options: [
            'Tingkat suku bunga riil turun menjadi negatif selamanya',
            'Tingkat harga umum ($P$) akan berlipat ganda persis sebesar penggandaan uang beredar',
            'Seluruh masyarakat otomatis menjadi dua kali lebih kaya secara riil',
            'Produksi pabrik meningkat dua kali lipat dalam satu malam'
          ],
          correctAnswerIndex: 1,
          explanation: 'Dalam kondisi kapasitas output dan kecepatan peredaran stabil, peningkatan pasokan uang murni bermutasi menjadi kenaikan tingkat harga (inflasi nominal).'
        }
      ]
    },
    {
      id: 'macro-1-2',
      prerequisiteId: 'macro-1-1',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'LEVEL 1 (FOUNDATIONAL): Anatomi Nilai Uang & Waktu',
      label: 'Suku Bunga Acuan & Time Value of Money',
      domain: 'Keuangan',
      summary: 'Peran suku bunga bank sentral sebagai gravitasi nilai waktu dari uang (Time Value of Money).',
      x: 180,
      y: 280,
      level: 1,
      microContent: {
        mentalModel: 'Time Value of Money & Discounting ($PV = \\frac{FV}{(1 + r)^t}$)',
        analogy: 'Uang Rp 100 juta hari ini bernilai lebih tinggi daripada Rp 100 juta 5 tahun lagi, karena uang hari ini memiliki kapasitas produktif untuk diinvestasikan dan menghasilkan imbal hasil majemuk. Suku bunga acuan adalah "harga dari waktu" itu sendiri.',
        academicInsight: 'Konsep Time Preference (Ludwig von Mises): Manusia secara alami lebih menghargai kepuasan konsumsi saat ini dibanding masa depan. Suku bunga adalah kompensasi ekuilibrium yang harus dibayar kepada pemilik modal agar mereka rela menunda konsumsi saat ini.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Kebijakan Moneter Bank Sentral',
          domains: ['Keuangan', 'Ekonomi'],
          insight: 'Ketika bank sentral menaikkan Federal Funds Rate / BI-Rate, biaya modal (Cost of Capital) seluruh perekonomian naik, memicu perlambatan kredit konsumsi dan investasi.',
        },
        caseStudy: {
          companyOrFigure: 'Dampak Kenaikan Bunga The Fed 2022-2023 terhadap Startup',
          story: 'Ketika The Fed menaikkan suku bunga dari 0.25% ke 5.50% dalam 18 bulan, modal ventura mengering drastis. Startup yang valuasinya bertumpu pada proyeksi laba 10 tahun ke depan mengalami koreksi valuasi hingga 70-80% karena faktor diskonto ($r$) melonjak.',
          takeaway: 'Tingkat suku bunga adalah gravitasi pasar modal: saat suku bunga naik, valuasi semua aset spekulatif ditarik jatuh ke bumi.'
        },
        actionableSteps: [
          'Gunakan rumus Present Value untuk menghitung apakah tawaran komitmen kas di masa depan layak diterima hari ini.',
          'Audit liabilitas: konversi utang berbunga mengambang (floating rate) menjadi bunga tetap (fixed rate) sebelum siklus kenaikan bunga dimulai.',
          'Pahami bahwa penurunan suku bunga memicu reli harga obligasi dan aset pertumbuhan.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pembayaran Kontrak: Bayar Tunai Hari Ini vs Termin 3 Tahun',
        context: 'Klien menawarkan dua opsi pembayaran untuk lisensi software: Opsi A: Rp 1 Miliar tunai hari ini; Opsi B: Rp 1.25 Miliar dicicil Rp 416 Juta/tahun selama 3 tahun. Suku bunga acuan saat ini adalah 8% per tahun.',
        dilemma: 'Opsi mana yang menghasilkan Nilai Sekarang (Present Value) tertinggi secara finansial?',
        choices: [
          {
            id: 'c1',
            text: 'Pilih Opsi B karena nominal totalnya lebih besar Rp 250 juta di atas kertas.',
            consequence: 'Nilai sekarang dari cicilan 3 tahun tersebut setelah di-diskon 8% hanya bernilai sekitar Rp 1.072 Miliar, dengan risiko gagal bayar klien di tahun ke-2 atau ke-3.',
            scoreBonus: 20,
            isOptimal: false,
            explanation: 'Mengabaikan risiko kredit dan nilai waktu uang sering membuat pebisnis terjebak ilusi nominal.'
          },
          {
            id: 'c2',
            text: 'Pilih Opsi A (Rp 1 Miliar tunai hari ini) dan investasikan kas tersebut pada obligasi kupon 8.5%.',
            consequence: 'Kas di tangan bebas risiko gagal bayar, dan nilai akhirnya di tahun ke-3 tumbuh menjadi Rp 1.277 Miliar (melampaui Opsi B).',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Memegang kas tunai di muka menghilangkan risiko gagal bayar klien dan memungkinkan perputaran modal majemuk seketika.'
          },
          {
            id: 'c3',
            text: 'Tolak kedua opsi dan minta dibayar menggunakan mata uang kripto yang tidak stabil.',
            consequence: 'Volatilitas ekstrem menghancurkan margin laba operasional dan memicu sengketa akuntansi pajak.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menambah volatilitas spekulatif ke dalam piutang dagang inti adalah kesalahan fatal manajemen risiko.'
          },
          {
            id: 'c4',
            text: 'Minta klien membayar seluruh Rp 1.25 Miliar di tahun ke-5 tanpa cicilan tahunan.',
            consequence: 'Present Value anjlok di bawah Rp 850 juta akibat diskonto majemuk 5 tahun dan risiko likuiditas parah.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menunda arus kas lebih lama dengan tingkat diskonto tinggi menghancurkan nilai riil modal perusahaan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-1-2',
          question: 'Jika tingkat suku bunga diskonto pasar ($r$) naik dari 5% menjadi 10%, apa yang terjadi secara matematis terhadap Nilai Sekarang (Present Value) dari arus kas Rp 1 miliar yang baru akan diterima 5 tahun lagi?',
          options: [
            'Present Value melonjak menjadi dua kali lipat',
            'Present Value menyusut secara signifikan karena faktor pembagi diskonto $(1+r)^t$ menjadi jauh lebih besar',
            'Present Value tidak berubah karena nominal di masa depan tetap Rp 1 miliar',
            'Present Value menjadi bernilai negatif'
          ],
          correctAnswerIndex: 1,
          explanation: 'Peningkatan suku bunga diskonto menaikkan penyebut rumus PV, sehingga nilai sekarang dari arus kas masa depan menjadi jauh lebih kecil.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LEVEL 2: INTERMEDIATE
    // --------------------------------------------------------------------------
    {
      id: 'macro-2-1',
      prerequisiteId: 'macro-1-2',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'LEVEL 2 (INTERMEDIATE): Mekanisme Mesin Ekonomi & Siklus',
      label: 'Siklus Kredit Ray Dalio & Deleveraging',
      domain: 'Ekonomi',
      summary: 'Kerangka kerja "How The Economic Machine Works": siklus utang jangka pendek (5-8 tahun) dan siklus utang jangka panjang (75 tahun).',
      x: 480,
      y: 130,
      level: 1,
      microContent: {
        mentalModel: 'Dalio Credit Cycle Framework (Belanja = Uang Tunai + Kredit)',
        analogy: 'Ketika Anda meminjam uang dari bank, Anda tidak sekadar meminjam dari bank; Anda meminjam dari "diri Anda di masa depan". Anda menciptakan periode belanja di atas pendapatan Anda hari ini, yang mau tidak mau harus dibayar dengan periode belanja di bawah pendapatan Anda di kemudian hari.',
        academicInsight: 'Pengeluaran seseorang adalah pendapatan orang lain ($Spending = Income$). Ketika kredit mengembang secara mudah, pengeluaran melonjak lebih cepat dari pertumbuhan kapasitas produksi barang, memicu inflasi harga aset. Saat beban pelunasan utang melampaui pendapatan, bank memperketat pinjaman, memicu kontraksi berantai (Deleveraging).',
        crossDisciplinary: {
          connectionText: 'Ekonomi Makro x Psikologi Euforia Pasar',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Hyman Minsky Financial Instability Hypothesis: "Stabilitas melahirkan ketidakstabilan." Periode makro yang tenang membuat pelaku pasar terlalu berani mengambil utang berlebih.',
        },
        caseStudy: {
          companyOrFigure: 'Krisis Keuangan Global 2008 & Beautiful Deleveraging',
          story: 'Tahun 2008, beban utang subprime mortgage AS mencapai puncak siklus 75 tahun. Dalio memetakan Beautiful Deleveraging: keseimbangan antara penghematan (austerity), restrukturisasi utang, transfer kekayaan, dan pencetakan uang bank sentral (QE) untuk mencegah deflasi depresif.',
          takeaway: 'Jangan biarkan beban utang Anda tumbuh melampaui kemampuan pendapatan kas riil untuk melayaninya.'
        },
        actionableSteps: [
          'Pantau rasio Total Debt to Income (DTI) pribadi dan korporat: pertahankan DTI di bawah 30%.',
          'Identifikasi fase siklus: amati apakah bank sedang melonggarkan kriteria kredit (fase ekspansi) atau memperketat agunan (fase kontraksi).',
          'Siapkan likuiditas cadangan tunai tinggi saat berada di ujung akhir fase ekspansi kredit.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Ekspansi Leverage di Puncak Siklus Ekonomi',
        context: 'Perusahaan logistik Anda sedang menikmati pertumbuhan omzet 30%. Bank menawarkan pinjaman sindikasi Rp 100 miliar berbunga mengambang untuk memborong armada truk baru saat indikator inflasi dan suku bunga mulai merangkak naik.',
        dilemma: 'Apakah Anda mengambil leverage utang maksimal ini?',
        choices: [
          {
            id: 'c1',
            text: 'Ambil pinjaman 100% dan langsung belanjakan seluruhnya tanpa lindung nilai (hedging).',
            consequence: 'Dua tahun kemudian siklus kredit mengetat, bunga pinjaman melonjak dari 8% ke 14%, pendapatan logistik melambat dan beban cicilan memicu kebangkrutan insolvensi.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mengambil utang mengambang masif di akhir siklus ekspansi adalah penyebab utama kepailitan korporat.'
          },
          {
            id: 'c2',
            text: 'Batasi pinjaman maksimal 30-40% dari kapasitas arus kas operasional dengan opsi suku bunga tetap (fixed rate), dan biayai sisanya dari laba ditahan.',
            consequence: 'Struktur modal tetap kuat saat resesi melanda, perusahaan bertahan dan mampu mengakuisisi truk pesaing yang pailit dengan harga obral.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Mempertahankan fleksibilitas neraca (balance sheet resilience) adalah keunggulan kompetitif terbesar saat krisis kredit.'
          },
          {
            id: 'c3',
            text: 'Hentikan seluruh operasional bisnis dan jual seluruh aset truk saat ini juga.',
            consequence: 'Perusahaan kehilangan pangsa pasar dan klien setia beralih ke kompetitor.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Reaksi kepanikan berlebihan merusak nilai intrinsik operasional perusahaan yang sedang bertumbuh sehat.'
          },
          {
            id: 'c4',
            text: 'Gunakan dana pinjaman bank untuk membeli saham di bursa efek secara spekulatif.',
            consequence: 'Melanggar ketentuan perjanjian kredit (covenant), bank menarik pinjaman seketika dan izin usaha dicabut.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Menyalahgunakan pinjaman modal kerja untuk spekulasi pasar sekunder adalah pelanggaran hukum berat.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-2-1',
          question: 'Menurut Ray Dalio, apa perbedaan mendasar antara resesi biasa dalam siklus utang jangka pendek dengan depresi dalam siklus utang jangka panjang?',
          options: [
            'Resesi biasa hanya terjadi di negara berkembang, depresi hanya di negara maju',
            'Pada resesi biasa bank sentral dapat memulihkan ekonomi cukup dengan menurunkan suku bunga; pada depresi jangka panjang suku bunga sudah menyentuh 0% sehingga penurunan bunga tidak lagi efektif',
            'Depresi jangka panjang disebabkan oleh letusan gunung berapi',
            'Tidak ada perbedaan, keduanya hanya istilah marketing'
          ],
          correctAnswerIndex: 1,
          explanation: 'Ketika suku bunga sudah mencapai batas bawah nol (Zero Lower Bound), kebijakan moneter konvensional lumpuh, menuntut kebijakan kuantitatif (QE) dan restrukturisasi utang masif.'
        }
      ]
    },
    {
      id: 'macro-2-2',
      prerequisiteId: 'macro-2-1',
      stepNumber: 'Langkah 2.2',
      stageTitle: 'LEVEL 2 (INTERMEDIATE): Mekanisme Mesin Ekonomi & Siklus',
      label: 'Yield Curve Inversion & Sinyal Resesi',
      domain: 'Ekonomi',
      summary: 'Mengapa kurva imbal hasil terbalik (Inverted Yield Curve) menjadi prediktor resesi paling akurat dalam sejarah modern.',
      x: 480,
      y: 280,
      level: 1,
      microContent: {
        mentalModel: 'Bond Yield Curve Term Structure ($Yield_{10Y} - Yield_{2Y}$)',
        analogy: 'Dalam kondisi normal, meminjamkan uang selama 10 tahun harus memberi bunga lebih tinggi daripada meminjamkan uang selama 3 bulan karena risiko ketidakpastian jangka panjang. Ketika obligasi jangka pendek justru memberi bunga lebih tinggi daripada jangka panjang (kurva terbalik), pasar keuangan sedang berteriak bahwa badai ekonomi sudah di depan mata.',
        academicInsight: 'Inversi Yield Curve (khususnya spread US Treasury 10-Tahun minus 2-Tahun) berhasil memprediksi setiap resesi ekonomi di Amerika Serikat sejak tahun 1955 dengan hanya satu false positive. Inversi mencerminkan ekspektasi konsensus bahwa bank sentral akan terpaksa memangkas bunga agresif di masa depan akibat kejatuhan ekonomi.',
        crossDisciplinary: {
          connectionText: 'Pasar Obligasi Global x Valuasi Ekuitas Saham',
          domains: ['Ekonomi', 'Keuangan'],
          insight: 'Inversi yield curve menandakan likuiditas perbankan tercekik karena bank meminjam dana jangka pendek berbiaya mahal dan menyalurkannya ke pinjaman jangka panjang berimbal hasil rendah.',
        },
        caseStudy: {
          companyOrFigure: 'Inversi Yield Curve 2006-2007 Menjelang GFC 2008',
          story: 'Kurva imbal hasil obligasi AS terinversi mendalam pada awal 2006. Sebagian besar analis saham mengabaikannya karena bursa Wall Street masih mencetak All-Time High. Tepat 18 bulan kemudian, krisis perbankan terbesar sejak Great Depression meletus.',
          takeaway: 'Pasar obligasi (Smart Money) hampir selalu lebih cerdas dan realistis mendeteksi risiko daripada euforia pasar saham ritel.'
        },
        actionableSteps: [
          'Pantau indikator spread obligasi $T10Y2Y$ di portal ekonomi (seperti FRED St. Louis Fed) setiap bulan.',
          'Jika kurva terinversi lebih dari 6 bulan, bersiaplah menghadapi kontraksi ekonomi dalam 12-24 bulan ke depan.',
          'Pindahkan eksposur portofolio dari saham siklikal berutang tinggi ke perusahaan defensif dengan arus kas bebas kuat.'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Alokasi Investasi Saat Kurva Obligasi Terinversi Mendalam',
        context: 'Spread obligasi 10Y-2Y terinversi negatif -60 bps selama 7 bulan berturut-turut, namun indeks saham sedang mencetak rekor reli jangka pendek.',
        dilemma: 'Strategi portofolio apa yang paling bijak diterapkan?',
        choices: [
          {
            id: 'c1',
            text: 'Gunakan pinjaman margin 2x lipat untuk membeli saham siklikal properti dan otomotif.',
            consequence: 'Saat resesi tiba setahun kemudian, penjualan otomotif anjlok dan margin call memusnahkan portofolio Anda.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mengabaikan sinyal inversi yield curve dengan menambah utang spekulatif adalah jebakan klasik di puncak siklus.'
          },
          {
            id: 'c2',
            text: 'Rebalancing: Amankan keuntungan dari saham siklikal, naikkan alokasi kas/pasar uang yield tinggi dan saham defensif (F&B/Kesehatan).',
            consequence: 'Portofolio kebal terhadap penurunan bursa saat krisis, dan Anda memegang kas likuid melimpah untuk memborong aset diskon di dasar resesi.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menyesuaikan alokasi ke aset defensif dan kas likuid saat yield curve terinversi melindungi modal dari kehancuran resesi.'
          },
          {
            id: 'c3',
            text: 'Tutup seluruh rekening bank dan pindahkan kekayaan ke mata uang negara yang sedang mengalami hiperinflasi.',
            consequence: 'Nilai kekayaan Anda terdepresiasi hancur lebur dalam hitungan minggu.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Membeli mata uang hiperinflasi adalah tindakan yang bertentangan dengan prinsip pelestarian kekayaan.'
          },
          {
            id: 'c4',
            text: 'Beli seluruh opsi beli (Call Options) saham berisiko tinggi dengan jatuh tempo 1 bulan.',
            consequence: 'Premi opsi hangus tak bernilai akibat pembusukan waktu (theta decay).',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Opsi jangka sangat pendek adalah instrumen spekulasi berisiko tinggi tanpa nilai lindung nilai fundamental.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-2-2',
          question: 'Mengapa kurva imbal hasil terbalik (Inverted Yield Curve) menjadi indikator peringatan dini resesi yang paling ditakuti oleh para ekonom dunia?',
          options: [
            'Karena menandakan bahwa pemerintah telah kehabisan tinta pencetak uang kertas',
            'Karena mencerminkan bahwa investor institusi berebut mengunci obligasi jangka panjang demi keamanan dan memperkirakan pemotongan suku bunga darurat akibat pelemahan ekonomi di masa depan',
            'Karena bursa saham wajib libur selama kurva terinversi',
            'Karena nilai tukar mata uang asing dihapuskan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Permintaan masif pada obligasi jangka panjang menekan yield-nya di bawah yield jangka pendek, mencerminkan pesimisme mendalam terhadap prospek ekonomi jangka menengah.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LEVEL 3: ADVANCED / MASTERCLASS
    // --------------------------------------------------------------------------
    {
      id: 'macro-3-1',
      prerequisiteId: 'macro-2-2',
      stepNumber: 'Langkah 3.1',
      stageTitle: 'LEVEL 3 (ADVANCED/MASTERCLASS): Arsitektur Kebijakan & Valuasi',
      label: 'Quantitative Easing & Ekspansi Neraca Sentral',
      domain: 'Ekonomi',
      summary: 'Mekanisme transmisi pelonggaran kuantitatif (QE), inflasi harga aset keuangan, dan siklus Quantitative Tightening (QT).',
      x: 780,
      y: 130,
      level: 1,
      microContent: {
        mentalModel: 'Central Bank Balance Sheet Mechanics (Monetary Base vs Asset Inflation)',
        analogy: 'Ketika suku bunga sudah mencapai 0% dan mesin ekonomi masih mogok, bank sentral tidak lagi hanya memutar kenop bunga. Mereka menyalakan pompa hidrolik raksasa: mencetak cadangan devisa digital baru untuk memborong obligasi pemerintah dan sekuritas KPR langsung dari bank komersial. Uang segar membanjiri sistem perbankan, memaksa bank meminjamkan modal atau membelanjakannya ke pasar modal.',
        academicInsight: 'Portfolio Balance Channel (Ben Bernanke): Dengan memborong obligasi jangka panjang bebas risiko, bank sentral menekan imbal hasil obligasi hingga sangat rendah, memaksa para pengelola dana pensiun dan institusi beralih memburu aset berisiko lebih tinggi (saham, kredit korporasi, modal ventura) demi mendapatkan return minimum.',
        crossDisciplinary: {
          connectionText: 'Kebijakan Moneter Makro x Kesenjangan Kekayaan Sosial',
          domains: ['Ekonomi', 'Geopolitik'],
          insight: 'QE secara inheren memperlebar kesenjangan kekayaan: pemilik aset finansial (top 10%) menikmati lonjakan harga saham dan properti, sementara pekerja bergaji tetap menderita inflasi harga pangan dan hunian.',
        },
        caseStudy: {
          companyOrFigure: 'Respons Moneter Pandemi 2020 (The Fed Balance Sheet $9 Triliun)',
          story: 'Dalam hitungan bulan di tahun 2020, The Fed memperluas neracanya dari $4.2 triliun menjadi hampir $9 triliun. Likuiditas masif ini memicu salah satu reli bursa saham tercepat dalam sejarah manusia (S&P 500 naik lebih dari 100% dari dasar pandemi).',
          takeaway: '"Don\'t fight the Fed" — saat bank sentral menjalankan QE agresif, jangan bertaruh melawan harga aset keuangan; saat QT dimulai, lindungi likuiditas.'
        },
        actionableSteps: [
          'Pantau ukuran neraca bank sentral (Federal Reserve Balance Sheet Assets) mingguan.',
          'Pahami korelasi: Ekspansi neraca bank sentral berkorelasi positif 85%+ dengan pergerakan indeks saham global.',
          'Waspadai fase Quantitative Tightening (QT): saat bank sentral menyedot likuiditas keluar dari sistem keuangan.'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Transisi Siklus: QE Berakhir Menuju Quantitative Tightening (QT)',
        context: 'Bank sentral mengumumkan akan menghentikan pembelian obligasi (Tapering) dan mulai menyedot likuiditas sebesar $95 miliar per bulan dari sistem keuangan melalui Quantitative Tightening (QT).',
        dilemma: 'Bagaimana restrukturisasi portofolio institusi Anda?',
        choices: [
          {
            id: 'c1',
            text: 'Tetap mempertahankan portofolio saham startup teknologi dengan valuasi rasio P/S di atas 30x.',
            consequence: 'Penyedotan likuiditas global memicu kompresi kelipatan valuasi (multiple compression) dan portofolio Anda anjlok 60-75%.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Saham dengan valuasi kelipatan tinggi tanpa laba riil adalah korban pertama dari siklus QT.'
          },
          {
            id: 'c2',
            text: 'Rebalancing ke perusahaan bernilai intrinsik kuat dengan Free Cash Flow melimpah, dividen konsisten, dan tingkat utang mendekati nol.',
            consequence: 'Portofolio membuktikan daya tahan superior, menghasilkan arus kas dividen stabil saat pasar terkoreksi, dan siap membeli di harga murah.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Arus kas bebas positif dan neraca bebas utang adalah tameng terbaik saat likuiditas moneter global disedot bank sentral.'
          },
          {
            id: 'c3',
            text: 'Ambil pinjaman bank dengan suku bunga harian untuk memborong aset kripto spekulatif.',
            consequence: 'Likuiditas mengering memicu de-leveraging berantai yang memusnahkan agunan modal Anda.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Menggunakan utang mahal saat bank sentral melakukan QT adalah resep bencana keuangan instan.'
          },
          {
            id: 'c4',
            text: 'Tukarkan seluruh portofolio ke barang koleksi fisik yang tidak likuid.',
            consequence: 'Biaya penyimpanan tinggi, tidak menghasilkan dividen, dan sulit dijual kembali saat membutuhkan uang tunai mendesak.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Aset tidak likuid menyandera fleksibilitas modal Anda saat krisis likuiditas moneter berlangsung.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-3-1',
          question: 'Bagaimana mekanisme transmisi Quantitative Easing (QE) oleh bank sentral mampu mendongkrak harga saham dan properti secara masif?',
          options: [
            'Bank sentral membagikan sertifikat rumah gratis ke seluruh rakyat',
            'Bank sentral membeli obligasi dalam jumlah raksasa sehingga menekan yield obligasi ke level sangat rendah, memaksa modal institusi mengalir ke aset berisiko seperti saham demi mencari imbal hasil (Portfolio Balance Effect)',
            'Pemerintah mewajibkan semua warga negara membeli saham',
            'Sistem perbankan dilarang meminjamkan uang kepada pengusaha'
          ],
          correctAnswerIndex: 1,
          explanation: 'Penekanan yield obligasi oleh pembelian bank sentral memaksa modal raksasa mencari imbal hasil di pasar saham dan aset riil.'
        }
      ]
    },
    {
      id: 'macro-3-2',
      prerequisiteId: 'macro-3-1',
      stepNumber: 'Langkah 3.2',
      stageTitle: 'LEVEL 3 (ADVANCED/MASTERCLASS): Arsitektur Kebijakan & Valuasi',
      label: 'Valuasi Fundamental DCF & WACC Korporat',
      domain: 'Keuangan',
      summary: 'Menghitung nilai intrinsik wajar perusahaan melalui proyeksi Discounted Free Cash Flow dan Weighted Average Cost of Capital.',
      x: 780,
      y: 280,
      level: 1,
      microContent: {
        mentalModel: 'DCF Intrinsic Valuation ($V_0 = \\sum_{t=1}^{n} \\frac{FCFF_t}{(1 + WACC)^t} + \\frac{Terminal\\,Value}{(1 + WACC)^n}$)',
        analogy: 'Sebuah pohon apel bernilai sebesar seluruh apel yang akan dipetik dari pohon itu sampai mati, dihitung nilainya jika dibeli tunai hari ini. Dalam bisnis, apel itu adalah Arus Kas Bebas (Free Cash Flow to Firm), dan risiko pohon tumbang tertiup badai adalah WACC.',
        academicInsight: 'Aswath Damodaran (NYU Stern): Valuasi bukanlah sains pasti melainkan jembatan antara angka dan narasi bisnis. Weighted Average Cost of Capital (WACC) menimbang proporsi ekuitas (Capital Asset Pricing Model / CAPM: $R_e = R_f + \\beta(R_m - R_f)$) dan utang setelah pajak ($R_d(1-T)$).',
        crossDisciplinary: {
          connectionText: 'Keuangan Korporat x Akuntansi Forensik',
          domains: ['Keuangan', 'Bisnis'],
          insight: 'Laba bersih akuntansi (Net Income) mudah dimanipulasi dengan trik akrual; Arus Kas Bebas Riil (FCF = Operating Cash Flow - CapEx) tidak bisa dipalsukan.',
        },
        caseStudy: {
          companyOrFigure: 'Warren Buffett Membeli BNSF Railway (2009)',
          story: 'Buffett menggunakan model DCF konservatif untuk menilai jalur rel kereta Burlington Northern Santa Fe. Ia mengidentifikasi parit pertahanan monopoli fisik yang mampu menghasilkan arus kas bebas konsisten selama 50 tahun ke depan, dan membelinya dengan diskon Margin of Safety 30%.',
          takeaway: 'Jangan pernah membeli saham tanpa menghitung estimasi nilai intrinsik arus kas bebasnya dengan batas aman yang lebar.'
        },
        actionableSteps: [
          'Hitung Free Cash Flow to Firm (FCFF): $EBIT(1 - t) + Depresiasi - CapEx - \\Delta NWC$.',
          'Tentukan tingkat WACC konservatif (minimal 10-12% untuk pasar berkembang).',
          'Terapkan Margin of Safety minimal 25-30% di bawah estimasi nilai intrinsik DCF sebelum memutuskan membeli.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Akuisisi Saham Perusahaan Berdasarkan Model DCF',
        context: 'Perusahaan manufaktur komponen dievaluasi menggunakan DCF. Nilai intrinsik wajar per lembar saham adalah Rp 2.400. Harga pasar saat ini sedang anjlok ke Rp 1.550 akibat sentimen kepanikan geopolitik jangka pendek.',
        dilemma: 'Langkah alokasi modal apa yang diambil fund manager profesional?',
        choices: [
          {
            id: 'c1',
            text: 'Ikut panik menjual saham karena takut harga turun lebih dalam mengikuti ramalan analis berita tv.',
            consequence: 'Anda menjual di bawah nilai wajar dan melewatkan potensi keuntungan modal 55% saat pasar pulih rasional.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menjual aset berkualitas jauh di bawah nilai intrinsik DCF karena kepanikan berita adalah kesalahan emosional amatir.'
          },
          {
            id: 'c2',
            text: 'Akumulasi bertahap: Harga Rp 1.550 mencerminkan diskon Margin of Safety 35% di bawah nilai intrinsik Rp 2.400.',
            consequence: 'Menikmati perlindungan modal tinggi dari margin of safety dan membukukan capital gain substansial saat harga kembali konvergen ke nilai wajar.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Membeli saham berkualitas dengan diskon lebar di bawah nilai intrinsik DCF adalah esensi investasi nilai legendaris.'
          },
          {
            id: 'c3',
            text: 'Tunggu sampai harga saham naik kembali ke Rp 2.500 baru membeli.',
            consequence: 'Anda membeli di atas nilai wajar tanpa batas aman dan margin keuntungan tereliminasi.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Membeli saat harga sudah pulih menghilangkan keunggulan diskon margin of safety.'
          },
          {
            id: 'c4',
            text: 'Beli seluruh saham menggunakan pinjaman berbunga 25% per tahun.',
            consequence: 'Beban bunga pinjaman memakan seluruh potensi laba investasi sebelum harga pasar sempat pulih.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menggunakan utang mahal untuk investasi nilai menghancurkan keunggulan kesabaran waktu (holding power).'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-3-2',
          question: 'Dalam rumus pemodelan Discounted Cash Flow (DCF), apa dampak matematis langsung jika nilai WACC (Weighted Average Cost of Capital) sebuah perusahaan meningkat akibat kenaikan suku bunga acuan dunia?',
          options: [
            'Estimasi nilai intrinsik wajar perusahaan akan otomatis turun karena tingkat diskonto pada penyebut menjadi lebih besar',
            'Nilai intrinsik perusahaan melonjak naik dua kali lipat',
            'Arus kas bebas operasional perusahaan langsung menjadi nol rupiah',
            'Model DCF tidak dapat dihitung lagi'
          ],
          correctAnswerIndex: 0,
          explanation: 'WACC berfungsi sebagai tingkat diskonto penyebut dalam rumus DCF; semakin tinggi WACC, semakin kecil nilai sekarang (Present Value) dari arus kas masa depan perusahaan.'
        }
      ]
    }
  ],
  edges: [
    { id: 'me1', from: 'macro-1-1', to: 'macro-1-2', label: 'Waktu & Diskon', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'me2', from: 'macro-1-2', to: 'macro-2-1', label: 'Dinamika Kredit', domains: ['Keuangan', 'Ekonomi'] },
    { id: 'me3', from: 'macro-2-1', to: 'macro-2-2', label: 'Struktur Kurva', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'me4', from: 'macro-2-2', to: 'macro-3-1', label: 'Intervensi Neraca', domains: ['Ekonomi', 'Geopolitik'] },
    { id: 'me5', from: 'macro-3-1', to: 'macro-3-2', label: 'Valuasi Intrinsik', domains: ['Ekonomi', 'Keuangan'] },
  ]
};

// ==============================================================================
// 2. DOMAIN: STRATEGI BISNIS & MOAT KORPORAT
// ==============================================================================
export const ADVANCED_BUSINESS_STRATEGY_CURRICULUM: MindmapData = {
  id: 'curriculum-bisnis-strategi-moat',
  topic: 'Strategi Bisnis & Parit Pertahanan Korporat',
  rootId: 'corp-1-1',
  description: 'Masterclass eksekutif: Dari kepemilikan saham, unit economics, Competitive Advantage Porter, hingga Disruptive Innovation Clayton Christensen.',
  nodes: [
    // LEVEL 1: FOUNDATIONAL
    {
      id: 'corp-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'LEVEL 1 (FOUNDATIONAL): Anatomi Kepemilikan & Struktur Korporasi',
      label: 'Struktur Saham & Hak Kepemilikan Korporat',
      domain: 'Bisnis',
      summary: 'Prinsip kepemilikan ekuitas, pemisahan kepemilikan dan kendali manajemen, serta tata kelola perseroan.',
      x: 180,
      y: 130,
      level: 0,
      microContent: {
        mentalModel: 'Principal-Agent Theory & Residual Claimancy',
        analogy: 'Ketika Anda menyewa sopir taksi, sopir adalah Agen dan Anda adalah Prinsipal. Sopir hanya ingin mengemudi santai dan menghemat tenaga, sementara Anda ingin tiba di tujuan secepat mungkin. Dalam korporasi, pemegang saham adalah pemilik sejati (Prinsipal) yang menunjuk Direksi (Agen) untuk mengelola kapal bisnis.',
        academicInsight: 'Adolf Berle dan Gardiner Means (1932): Pemisahan antara kepemilikan modal (shareholders) dan kontrol operasional (management) melahirkan masalah keagenan (Agency Problem). Opsi saham (ESOP) dan kompensasi berbasis kinerja diciptakan untuk menyelaraskan insentif direksi dengan pemegang saham.',
        crossDisciplinary: {
          connectionText: 'Hukum Perseroan Terbatas x Teori Insentif Ekonomi',
          domains: ['Bisnis', 'Hukum'],
          insight: 'Pemegang saham biasa memiliki hak Residual Claimant: hak menerima laba paling akhir setelah gaji pegawai, tagihan vendor, bunga obligasi, dan pajak negara dilunasi tuntas.',
        },
        caseStudy: {
          companyOrFigure: 'Dual-Class Share Structure (Google Alphabet & Meta)',
          story: 'Larry Page, Sergey Brin, dan Mark Zuckerberg menerbitkan saham Kelas B yang memiliki 10 hak suara per lembar, sementara saham publik Kelas A hanya 1 suara. Ini melindungi visi inovasi jangka panjang dari tekanan tuntutan laba kuartalan Wall Street.',
          takeaway: 'Struktur permodalan menentukan siapa yang memegang kendali strategis arah kapal korporasi saat badai tiba.'
        },
        actionableSteps: [
          'Pahami struktur permodalan: Saham Biasa (Common Stock) vs Saham Preferen (Preferred Stock).',
          'Cermati tata kelola perseroan (Good Corporate Governance) dan komposisi komisaris independen.',
          'Pelajari hak veto dan kuorum keputusan strategis dalam Anggaran Dasar (Articles of Association).'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pendanaan Ekuitas: Valuasi Tinggi Tapi Kehilangan Hak Suara',
        context: 'Investor VC menawarkan pendanaan $10 juta dengan syarat mengambil 3 dari 5 kursi dewan direksi dan hak veto atas seluruh keputusan merger.',
        dilemma: 'Apakah Anda menerima suntikan modal ini?',
        choices: [
          {
            id: 'c1',
            text: 'Terima tanpa negosiasi demi nominal $10 juta yang besar.',
            consequence: 'Enam bulan kemudian dewan direksi memecat Anda dari posisi CEO di perusahaan yang Anda dirikan sendiri.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menyerahkan kendali mayoritas dewan direksi sama dengan menyerahkan nasib kelangsungan visi bisnis Anda.'
          },
          {
            id: 'c2',
            text: 'Negosiasikan struktur saham atau batasi kursi dewan direksi investor maksimal 1 kursi minoritas tanpa hak veto operasional.',
            consequence: 'Modal tetap masuk, Anda mempertahankan kendali kendali visi strategis, dan tata kelola tetap seimbang.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menjaga kontrol dewan direksi dan hak suara adalah prioritas nomor satu pendiri bisnis.'
          },
          {
            id: 'c3',
            text: 'Tolak seluruh pendanaan dan tutup perusahaan seketika.',
            consequence: 'Potensi inovasi terhenti padahal produk memiliki product-market fit yang sangat kuat.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Menyerah tanpa negosiasi adalah respons non-eksekutif yang mematikan nilai bisnis.'
          },
          {
            id: 'c4',
            text: 'Bohongi investor dengan menyetujui kontrak palsu di luar akta notaris.',
            consequence: 'Gugatan hukum perdata dan pidana penipuan yang menghancurkan reputasi bisnis selamanya.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Melanggar integritas hukum korporasi berujung pada sanksi pidana dan pembatalan sepihak kontrak.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-1-1',
          question: 'Dalam teori keuangan korporasi, mengapa pemegang saham biasa (common shareholders) disebut sebagai "Residual Claimant"?',
          options: [
            'Karena pemegang saham hanya boleh tinggal di kantor perusahaan',
            'Karena mereka hanya berhak atas sisa arus kas dan aset setelah seluruh kewajiban gaji karyawan, vendor, kreditor bank, dan pajak pemerintah dilunasi',
            'Karena mereka dibebaskan dari seluruh risiko kerugian bisnis',
            'Karena saham mereka tidak memiliki nilai jual di pasar'
          ],
          correctAnswerIndex: 1,
          explanation: 'Sebagai penanggung risiko tertinggi, pemegang saham berada di antrean paling akhir (residual) pembagian kas, namun menikmati potensi keuntungan tak terbatas (upside) jika bisnis sukses besar.'
        }
      ]
    },

    // LEVEL 2: INTERMEDIATE
    {
      id: 'corp-2-1',
      prerequisiteId: 'corp-1-1',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'LEVEL 2 (INTERMEDIATE): Unit Economics & Keunggulan Bersaing',
      label: 'Unit Economics & Rasio LTV:CAC',
      domain: 'Bisnis',
      summary: 'Kalkulasi profitabilitas unit: Contribution Margin, Payback Period, dan skala rasio LTV terhadap CAC.',
      x: 480,
      y: 130,
      level: 1,
      microContent: {
        mentalModel: 'Unit Economics Scalability ($LTV = \\frac{ARPU \\times Gross\\,Margin}{Churn\\,Rate}$)',
        analogy: 'Membeli bibit pohon mangga seharga Rp 100.000 (CAC). Jika selama 10 tahun pohon itu menghasilkan mangga senilai Rp 500.000 setelah dipotong biaya pupuk (LTV), Anda memiliki rasio 5:1. Jika biaya pancingan bibit Rp 600.000 dan mangga yang dipetik cuma Rp 100.000, semakin luas kebun mangga yang Anda tanam, semakin cepat Anda bangkrut.',
        academicInsight: 'Bessemer Venture Partners SaaS Benchmarks: Rasio LTV:CAC sehat adalah minimal 3:1 dengan Payback Period (waktu balik modal akuisisi) di bawah 12 bulan. Jika LTV:CAC di bawah 1:1, setiap pertumbuhan transaksi adalah pembakaran modal kas riil secara sia-sia.',
        crossDisciplinary: {
          connectionText: 'Strategi Akuisisi Bisnis x Psikologi Retensi',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'Menaikkan retensi pelanggan sebesar 5% mampu mendongkrak laba perusahaan hingga 25-95% (Frederick Reichheld - Bain & Company) karena menekan laju Churn di penyebut rumus LTV.',
        },
        caseStudy: {
          companyOrFigure: 'Strategi Retensi Pelanggan Netflix',
          story: 'Netflix rela mengeluarkan biaya CAC tinggi untuk konten orisinal eksklusif karena tingkat churn bulanannya sangat rendah (di bawah 2.5%). Hal ini menghasilkan masa hidup pelanggan rata-rata di atas 40 bulan, membuat LTV melesat menjadi $400+ per pelanggan.',
          takeaway: 'Keberhasilan skala bisnis digital ditentukan oleh kekuatan retensi di pintu belakang, bukan cuma ramainya iklan di pintu depan.'
        },
        actionableSteps: [
          'Hitung Paid CAC murni tanpa mencampurkan traffic organik yang menyamarkan inefisiensi iklan.',
          'Ukur Contribution Margin per unit transaksi: kurangi COGS, biaya logistik, payment gateway, dan retur barang.',
          'Percepat Payback Period menjadi di bawah 9 bulan dengan menerapkan penagihan tahunan di muka (annual billing upfront).'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pemasaran Digital: Skala Iklan atau Perbaiki Retensi?',
        context: 'Data analitik startup Anda menunjukkan rasio LTV:CAC saat ini hanya 1.2:1 dengan tingkat pembatalan langganan (Churn) 12% per bulan. Investor mendesak untuk menggandakan anggaran iklan Google & Meta.',
        dilemma: 'Tindakan strategis apa yang harus diambil?',
        choices: [
          {
            id: 'c1',
            text: 'Turuti desakan investor dan bakar kas iklan 3x lipat untuk mengejar pertumbuhan pengguna baru.',
            consequence: 'Pengguna baru masuk namun keluar melalui pintu belakang dalam 60 hari; kas habis terbakar dan startup tutup.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menuangkan air ke ember yang bocor (High Churn) hanya menghabiskan modal kas tanpa menciptakan nilai ekonomis.'
          },
          {
            id: 'c2',
            text: 'Tahan ekspansi iklan: Fokuskan seluruh tim produk memperbaiki onboarding, menurunkan churn ke bawah 3%, dan naikkan rasio LTV:CAC ke minimal 3.5:1 sebelum scaling.',
            consequence: 'Produk menancap kuat menjadi kebiasaan, LTV melonjak 3x lipat, dan ketika iklan dinaikkan, perusahaan langsung mencetak laba bersih konsisten.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Memperbaiki unit economics dan retensi adalah prasyarat mutlak sebelum memperbesar skala belanja pemasaran.'
          },
          {
            id: 'c3',
            text: 'Hapus seluruh sistem customer service untuk menghemat biaya operasional.',
            consequence: 'Komplain membludak di media sosial, churn melonjak ke 25%, dan reputasi merek hancur seketika.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Menghancurkan kepuasan pelanggan mempercepat kematian bisnis.'
          },
          {
            id: 'c4',
            text: 'Ubah model bisnis menjadi gratis selamanya tanpa ada monetisasi apapun.',
            consequence: 'Biaya server membengkak tanpa ada aliran kas masuk; perusahaan bangkrut dalam 30 hari.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Bisnis tanpa model monetisasi yang sehat bukanlah bisnis, melainkan kegiatan amal yang tidak berkelanjutan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-2-1',
          question: 'Sebuah perusahaan e-commerce memiliki Customer Acquisition Cost (CAC) sebesar Rp 200.000 dan Customer Lifetime Value (LTV) sebesar Rp 180.000. Apa konsekuensi finansial jangka panjang jika perusahaan melipatgandakan anggaran pemasaran 5 kali lipat?',
          options: [
            'Perusahaan akan langsung mencapai profitabilitas tinggi',
            'Perusahaan akan mempercepat kebangkrutannya karena setiap akuisisi pelanggan baru menghasilkan defisit kas bersih Rp 20.000',
            'Harga saham perusahaan otomatis naik 500%',
            'Biaya pokok penjualan otomatis menjadi gratis'
          ],
          correctAnswerIndex: 1,
          explanation: 'Jika unit economics bernilai negatif (LTV < CAC), memperbesar skala transaksi hanya mempercepat laju pembakaran kas operasional menuju kebangkrutan.'
        }
      ]
    },

    // LEVEL 3: ADVANCED / MASTERCLASS
    {
      id: 'corp-3-1',
      prerequisiteId: 'corp-2-1',
      stepNumber: 'Langkah 3.1',
      stageTitle: 'LEVEL 3 (ADVANCED/MASTERCLASS): Parit Ekonomi & Disruptive Innovation',
      label: 'Economic Moat ala Warren Buffett & Inovasi Disrupsi',
      domain: 'Bisnis',
      summary: 'Membangun parit pertahanan ekonomi (Moat) tahan gempuran kompetitor dan navigasi teori Inovasi Disrupsi Clayton Christensen.',
      x: 780,
      y: 130,
      level: 1,
      microContent: {
        mentalModel: 'Buffett Economic Moat & Christensen Disruptive Innovation',
        analogy: 'Kastil megah di abad pertengahan yang dikelilingi parit air dalam berisi buaya lapar. Parit itu melindungi kastil dari serbuan ribuan musuh bersenjata. Dalam bisnis, laba yang tinggi seperti madu yang menarik jutaan lalat kompetitor. Tanpa parit pertahanan ekonomi (Moat), laba Anda akan digerogoti kompetitor hingga margin menjadi 0%.',
        academicInsight: 'Clayton Christensen (Harvard Business School): Inovasi disrupsi terjadi ketika pendatang baru memasuki pasar dari segmen terbawah (low-end foothold) dengan produk yang lebih sederhana, lebih murah, dan nyaman, yang awalnya diabaikan oleh raksasa petahana karena marginnya kecil, hingga akhirnya menyapu bersih seluruh industri.',
        crossDisciplinary: {
          connectionText: 'Strategi Kompetitif Porter x Psikologi Biaya Peralihan (Switching Cost)',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'Parit Switching Cost bukan sekadar kontrak hukum, melainkan keengganan psikologis manusia untuk mempelajari ulang sistem baru dari awal.',
        },
        caseStudy: {
          companyOrFigure: 'Netflix Mendisrupsi Blockbuster Video (2000-2010)',
          story: 'Blockbuster menertawakan Netflix yang menyewakan DVD lewat pos tanpa denda keterlambatan karena laba Blockbuster bertumpu pada denda telat kembali (Late Fees). Ketika Netflix beralih ke streaming digital, Blockbuster yang memiliki 9.000 gerai fisik bangkrut total.',
          takeaway: 'Jangan biarkan ketergantungan pada model laba lama membutakan Anda dari gelombang disrupsi teknologi baru.'
        },
        actionableSteps: [
          'Audit 4 sumber parit bisnis: Intangible Assets (Merek/Paten), Switching Costs, Network Effects, Cost Advantages.',
          'Ciptakan "Low-End Foothold": luncurkan produk alternatif yang lebih simpel dan terjangkau sebelum kompetitor melakukannya.',
          'Lakukan Alokasi Modal Eksekutif: alihkan laba dari produk mapan ke riset inovasi kurva kedua (Second Curve Growth).'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Petahana: Menghadapi Inovasi Disrupsi Murah dari Pendatang Baru',
        context: 'Perusahaan software akuntansi enterprise Anda (seharga Rp 200 juta/lisensi) mulai digerogoti oleh startup kecil yang menawarkan software akuntansi berbasis AI di cloud seharga Rp 150 ribu/bulan untuk segmen UMKM.',
        dilemma: 'Bagaimana merespons ancaman disrupsi ini sesuai teori Clayton Christensen?',
        choices: [
          {
            id: 'c1',
            text: 'Abaikan startup tersebut karena margin keuntungan segmen UMKM terlalu kecil dan tidak menarik.',
            consequence: 'Dalam 4 tahun software AI tersebut semakin canggih, naik kelas ke segmen enterprise, dan merebut seluruh klien korporat Anda hingga perusahaan Anda bangkrut.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Sikap meremehkan produk low-end adalah jebakan fatal petahana dalam Dilema Inovator (The Innovator\'s Dilemma).'
          },
          {
            id: 'c2',
            text: 'Bentuk unit bisnis otonom terpisah (Spin-off Unit) dengan tim independen untuk meluncurkan produk SaaS berbasis AI yang siap mendisrupsi produk lama Anda sendiri.',
            consequence: 'Unit baru berhasil menguasai pasar cloud modern, menjaga relevansi perusahaan di masa depan, dan mentransisikan basis klien dengan mulus.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Membentuk unit independen yang bebas dari kultur lama adalah rekomendasi utama Christensen untuk memenangkan disrupsi.'
          },
          {
            id: 'c3',
            text: 'Gugat startup tersebut ke pengadilan dengan tuduhan persaingan tidak sehat.',
            consequence: 'Biaya pengacara membengkak dan publik mencap perusahaan Anda sebagai dinosaurus anti-inovasi.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menggunakan litigasi hukum untuk menghambat inovasi teknologi hampir tidak pernah berhasil menyelamatkan bisnis lapuk.'
          },
          {
            id: 'c4',
            text: 'Naikkan harga produk lama menjadi Rp 500 juta untuk memeras sisa klien yang tersisa.',
            consequence: 'Klien lama merasa diperas dan berbondong-bondong migrasi ke software pesaing lebih cepat.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menaikkan harga tanpa nilai tambah di tengah ancaman disrupsi mempercepat eksodus pelanggan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-3-1',
          question: 'Menurut teori "The Innovator\'s Dilemma" karya Profesor Clayton Christensen, mengapa perusahaan-perusahaan raksasa yang dikelola oleh manajer-manajer hebat sering kali gagal dan bangkrut saat menghadapi inovasi disrupsi?',
          options: [
            'Karena manajer mereka tidak pernah lulus universitas',
            'Karena mereka mengambil keputusan yang sepenuhnya logis dan rasional untuk terus melayani pelanggan paling menguntungkan mereka saat ini, sehingga mengabaikan inovasi baru berbiaya murah yang awalnya dianggap tidak penting',
            'Karena teknologi komputer selalu rusak setiap 5 tahun',
            'Karena seluruh paten perusahaan otomatis disita negara'
          ],
          correctAnswerIndex: 1,
          explanation: 'Tragedi The Innovator\'s Dilemma adalah bahwa mendengarkan pelanggan terbaik dan mengejar margin tertinggi justru menjadi penyebab utama kehancuran perusahaan saat teknologi disrupsi muncul dari bawah.'
        }
      ]
    }
  ],
  edges: [
    { id: 'be1', from: 'corp-1-1', to: 'corp-2-1', label: 'Struktur ke Profitabilitas', domains: ['Bisnis', 'Keuangan'] },
    { id: 'be2', from: 'corp-2-1', to: 'corp-3-1', label: 'Skala ke Parit Abadi', domains: ['Bisnis', 'Psikologi'] },
  ]
};

// ==============================================================================
// 3. DOMAIN: PSIKOLOGI PERILAKU & BEHAVIORAL ECONOMICS (LEGACY ALIAS)
// ==============================================================================
export const DEPRECATED_BEHAVIORAL_CURRICULUM: MindmapData = {
  id: 'curriculum-psikologi-perilaku-advanced',
  topic: 'Psikologi Perilaku & Behavioral Economics',
  rootId: 'beh-1-1',
  description: 'Masterclass penalaran: Dari Loss Aversion & Anchoring, Prospect Theory Kahneman, hingga Mental Accounting Thaler dan Decoy Effect.',
  nodes: [
    // LEVEL 1: FOUNDATIONAL
    {
      id: 'beh-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'LEVEL 1 (FOUNDATIONAL): Bias Kognitif Fundamental',
      label: 'Loss Aversion & Asimetri Emosi Manusia',
      domain: 'Psikologi',
      summary: 'Mengapa rasa sakit akibat kerugian memiliki bobot psikologis 2.5x lebih tajam dibanding nikmatnya keuntungan sepadan.',
      x: 180,
      y: 130,
      level: 0,
      microContent: {
        mentalModel: 'Prospect Theory Value Function (S-Curve Asymmetry)',
        analogy: 'Kehilangan Rp 1 juta terasa seperti ditinju tepat di ulu hati; sementara menemukan uang Rp 1 juta di saku jaket lama hanya terasa seperti tepukan ringan di bahu. Kurva emosi manusia tidak simetris; rasa sakit berada di tebing yang jauh lebih curam daripada tanjakan kebahagiaan.',
        academicInsight: 'Daniel Kahneman & Amos Tversky (1979 - Nobel Memorial Prize): Kurva nilai Prospect Theory menunjukkan bahwa fungsi nilai lebih curam untuk kerugian daripada keuntungan ($Loss\\,Aversion\\,Coefficient\\,\\lambda \\approx 2.25$). Hal ini menjelaskan fenomena mengapa investor menahan saham rugi terlalu lama (Status Quo Bias) dan menjual saham untung terlalu dini (Disposition Effect).',
        crossDisciplinary: {
          connectionText: 'Psikologi Perilaku x Arsitektur Penawaran Bisnis',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Garansi Bebas Risiko (Risk Reversal) dan Free Trial 30 Hari memanipulasi endowment effect: calon pembeli merasa produk sudah menjadi hak miliknya sehingga menolak untuk kehilangan.',
        },
        caseStudy: {
          companyOrFigure: 'Strategi Free Return Zappos (Tony Hsieh)',
          story: 'Zappos menawarkan pengembalian gratis 365 hari untuk pembelian sepatu online. Kebijakan ini menetralkan ketakutan rugi konsumen yang ragu membeli sepatu tanpa mencoba ukuran fisik. Hasilnya, volume penjualan melonjak ribuan persen dan Zappos diakuisisi Amazon senilai $1.2 miliar.',
          takeaway: 'Hapus seluruh rasa takut rugi dari pundak konsumen dan pindahkan ke pundak bisnis Anda.'
        },
        actionableSteps: [
          'Rancang penawaran penawar rasa sakit: bingkai manfaat produk sebagai pelindung dari kerugian modal atau waktu yang sia-sia.',
          'Terapkan batas waktu Cut Loss otomatis di sistem trading/investasi agar emosi loss aversion tidak menyandera rasionalitas.',
          'Berikan garansi 100% uang kembali tanpa syarat untuk melipatgandakan rasio konversi penjualan.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Penjualan B2B: Garansi Uang Kembali atau Potongan Harga?',
        context: 'Calon klien korporat ragu menandatangani kontrak software otomasi senilai Rp 120 juta karena takut sistem tidak cocok dengan alur kerja internal mereka.',
        dilemma: 'Strategi penawaran mana yang paling cepat menutup transaksi?',
        choices: [
          {
            id: 'c1',
            text: 'Potong harga menjadi Rp 80 juta namun tanpa garansi keberhasilan sama sekali.',
            consequence: 'Klien tetap ragu karena risiko kegagalan implementasi masih berada di pihak mereka, dan margin laba Anda terpotong 33%.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Diskon harga tidak menyelesaikan akar masalah ketakutan risiko (Loss Aversion) klien.'
          },
          {
            id: 'c2',
            text: 'Pertahankan harga Rp 120 juta dan tambahkan klausul: "Jika efisiensi waktu 20% tidak tercapai dalam 90 hari, uang kembali 100% plus Rp 10 juta kompensasi waktu Anda".',
            consequence: 'Risiko di benak klien menjadi nol absolut, kontrak disetujui dalam 48 jam, dan margin keuntungan tetap utuh 100%.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Risk Reversal radikal menyerap seluruh ketakutan loss aversion klien dan menjadi senjata konversi terkuat.'
          },
          {
            id: 'c3',
            text: 'Kirimkan surat ancaman bahwa harga akan naik dua kali lipat besok pagi.',
            consequence: 'Klien merasa ditekan secara manipulatif dan membatalkan kerja sama selamanya.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Urgensi palsu yang agresif menghancurkan kredibilitas profesional di ranah B2B.'
          },
          {
            id: 'c4',
            text: 'Tolak bernegosiasi dan suruh klien mencari vendor lain.',
            consequence: 'Perusahaan kehilangan potensi pendapatan Rp 120 juta dan klien beralih ke kompetitor.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Arogansi penjualan menutup peluang konversi yang sebenarnya bisa diselesaikan dengan arsitektur penawaran cerdas.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-1-1',
          question: 'Menurut Prospect Theory, mengapa fenomena "Disposition Effect" menyebabkan banyak investor ritel mengalami kerugian kronis di pasar modal?',
          options: [
            'Karena mereka tidak bisa membaca grafik harga saham',
            'Karena mereka terburu-buru menjual saham yang untung kecil demi mengamankan kepastian laba, namun menolak menjual saham yang merugi karena rasa sakit emosional mengakui kerugian riil',
            'Karena bursa efek mengenakan pajak 100% untuk saham yang merugi',
            'Karena bank menolak mentransfer keuntungan investasi'
          ],
          correctAnswerIndex: 1,
          explanation: 'Loss aversion memicu Disposition Effect: memotong keuntungan terlalu dini dan membiarkan kerugian membengkak tanpa batas.'
        }
      ]
    },

    // LEVEL 2: INTERMEDIATE
    {
      id: 'beh-2-1',
      prerequisiteId: 'beh-1-1',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'LEVEL 2 (INTERMEDIATE): Bias Kognitif Tingkat Lanjut',
      label: 'Confirmation Bias & Mental Accounting',
      domain: 'Psikologi',
      summary: 'Bagaimana otak memperlakukan uang secara terkotak-kotak irasional (Richard Thaler) dan menyaring fakta demi membenarkan keyakinan awal.',
      x: 480,
      y: 130,
      level: 1,
      microContent: {
        mentalModel: 'Mental Accounting (Richard Thaler) & Confirmation Bias',
        analogy: 'Uang Rp 10 juta hasil kerja keras sebulan diperlakukan sangat hati-hati untuk cicilan rumah, namun uang Rp 10 juta yang sama yang didapat dari lotre kasino dihamburkan untuk foya-foya dalam semalam. Secara ekonomi uang itu identik (Fungible), namun di otak kita, uang itu disimpan di laci mental yang berbeda.',
        academicInsight: 'Richard Thaler (Nobel Ekonomi 2017): Manusia melanggar prinsip Fungibility uang dengan membagi anggaran ke dalam pos-pos mental yang tidak rasional (misal: "Uang Gaji", "Uang Bonus", "Uang Panas"). Sementara Confirmation Bias (Peter Wason) membuat investor hanya membaca artikel berita yang memuji saham pilihannya dan menutup mata dari data risiko.',
        crossDisciplinary: {
          connectionText: 'Keuangan Perilaku x Desain FinTech Dompet Digital',
          domains: ['Psikologi', 'Keuangan'],
          insight: 'Fitur "Kantong" atau "Pocket Tabungan" di aplikasi bank digital memanfaatkan Mental Accounting untuk membantu pengguna mendisiplinkan alokasi anggaran.',
        },
        caseStudy: {
          companyOrFigure: 'Krisis Kehancuran Enron (2001) & Confirmation Bias Karyawan',
          story: 'Ribuan karyawan Enron menginvestasikan 100% dana pensiun mereka ke saham Enron. Ketika muncul laporan investigasi kecurangan akuntansi, karyawan menolak mempercayainya karena bias konfirmasi, hingga saham ambruk dari $90 ke $0 dan tabungan pensiun mereka musnah.',
          takeaway: 'Jangan pernah jatuh cinta pada investasi Anda; secara aktif carilah data dan argumen yang membantah keyakinan Anda (Red Teaming).'
        },
        actionableSteps: [
          'Terapkan aturan Fungibility: perlakukan setiap rupiah keuntungan tak terduga dengan disiplin yang sama seperti uang hasil keringat kerja keras.',
          'Lakukan Disconfirmation Exercise: sebelum membeli saham atau properti, tulis 3 alasan terkuat mengapa investasi ini bisa gagal total.',
          'Pisahkan akun trading spekulatif dari rekening dana pensiun jangka panjang.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Mental Accounting: Bonus Tahunan Rp 100 Juta',
        context: 'Anda menerima bonus akhir tahun Rp 100 juta di luar gaji rutin. Di saat yang sama, Anda memiliki utang kartu kredit bunga 24% per tahun senilai Rp 40 juta.',
        dilemma: 'Bagaimana mengalokasikan uang bonus ini secara rasional?',
        choices: [
          {
            id: 'c1',
            text: 'Gunakan seluruh Rp 100 juta untuk liburan mewah ke Eropa karena menganggap bonus adalah "uang senang-senang" yang terpisah dari utang.',
            consequence: 'Bunga kartu kredit 24% terus berbunga majemuk mencekik arus kas bulanan Anda sepanjang tahun depan.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Membiarkan utang bunga 24% demi foya-foya adalah contoh klasik irasionalitas Mental Accounting.'
          },
          {
            id: 'c2',
            text: 'Gunakan Rp 40 juta untuk melunasi tuntas utang kartu kredit seketika (menghasilkan imbal hasil pasti 24%), dan investasikan sisa Rp 60 juta ke portofolio produktif.',
            consequence: 'Beban bunga lenyap permanen, arus kas bulanan bebas, dan kekayaan bersih riil bertambah signifikan.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Melunasi utang bunga tinggi adalah investasi dengan jaminan imbal hasil pasti tanpa risiko pasar.'
          },
          {
            id: 'c3',
            text: 'Simpan seluruh bonus di bawah bantal tanpa melunasi utang.',
            consequence: 'Uang tergerus inflasi dan utang kartu kredit membengkak menjadi Rp 60 juta.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menyimpan kas nol imbal hasil sementara memiliki utang berbunga majemuk tinggi adalah inefisiensi modal parah.'
          },
          {
            id: 'c4',
            text: 'Gunakan seluruh uang untuk bermain judi bola online.',
            consequence: 'Uang bonus habis dalam hitungan jam dan beban utang semakin parah.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Perjudian adalah jalan pintas kehancuran finansial total.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-2-1',
          question: 'Menurut pemenang Nobel Richard Thaler, apa kesalahan logis paling umum dari konsep "Mental Accounting" dalam pengelolaan keuangan pribadi?',
          options: [
            'Manusia melanggar sifat fungibility uang (bahwa setiap rupiah bernilai identik) dengan memperlakukan uang dari sumber berbeda secara irasional',
            'Manusia selalu mencatat pengeluaran di buku akuntansi setiap hari',
            'Manusia menolak menggunakan kalkulator matematika',
            'Semua uang otomatis hangus jika tidak dibelanjakan'
          ],
          correctAnswerIndex: 0,
          explanation: 'Prinsip fungibility menyatakan uang tidak memiliki label asal-usul; memperlakukan uang bonus secara boros sementara membiarkan utang berbunga tinggi adalah kekeliruan mental accounting.'
        }
      ]
    },

    // LEVEL 3: ADVANCED / MASTERCLASS
    {
      id: 'beh-3-1',
      prerequisiteId: 'beh-2-1',
      stepNumber: 'Langkah 3.1',
      stageTitle: 'LEVEL 3 (ADVANCED/MASTERCLASS): Arsitektur Pilihan & Decoy Effect',
      label: 'Decoy Effect & Manipulasi Pilihan Asimetris',
      domain: 'Psikologi',
      summary: 'Mekanisme Asymmetric Dominance Effect: bagaimana menyisipkan opsi umpan ketiga untuk mengarahkan pilihan konsumen ke opsi termahal.',
      x: 780,
      y: 130,
      level: 1,
      microContent: {
        mentalModel: 'Asymmetric Dominance Effect (The Decoy Effect - Dan Ariely)',
        analogy: 'Jika ada dua orang pelamar kerja: Kandidat A tampan tapi kurang pintar, Kandidat B sangat pintar tapi kurang tampan. Sulit bagi juri memilih. Namun jika dihadirkan Kandidat C (Decoy): sedikit lebih jelek dari Kandidat B dan sedikit kurang pintar dari Kandidat B, seketika Kandidat B terlihat superior secara mutlak dan terpilih dengan mudah.',
        academicInsight: 'Dan Ariely (Predictably Irrational - MIT): Eksperimen legendaris The Economist Subscription. Opsi 1: Web Only $59 (16% pemilih). Opsi 2: Print Only $125 (0% pemilih - Decoy). Opsi 3: Print + Web $125 (84% pemilih). Saat opsi Decoy dihapus, mayoritas pembeli berbalik memilih paket termurah $59. Opsi umpan mengubah perilaku massa tanpa mengubah produk riil.',
        crossDisciplinary: {
          connectionText: 'Psikologi Keputusan x Strategi Monetisasi Produk',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Decoy Effect memanfaatkan ketidakmampuan otak manusia untuk menilai nilai absolut; otak hanya mampu menilai nilai relatif melalui perbandingan terdekat.',
        },
        caseStudy: {
          companyOrFigure: 'Ukuran Popcorn Bioskop (Small vs Medium vs Large)',
          story: 'Bioskop menjual Popcorn Small $3.00 dan Large $7.00; mayoritas orang memilih Small. Bioskop kemudian menyisipkan Medium $6.50 (Decoy). Seketika paket Large $7.00 terlihat seperti kesepakatan luar biasa (cuma tambah $0.50 dapat porsi jumbo!), melipatgandakan pendapatan kasir hingga 40%.',
          takeaway: 'Rancang opsi penawaran di mana opsi termahal terlihat sebagai pilihan paling masuk akal jika dibandingkan dengan opsi umpan terdekatnya.'
        },
        actionableSteps: [
          'Sematkan 3 Pilihan Harga: Opsi Dasar, Opsi Umpan (Decoy), dan Opsi Target yang ingin Anda jual.',
          'Pastikan Opsi Target mendominasi Opsi Umpan secara asimetris (fitur jauh lebih lengkap dengan selisih harga sangat tipis).',
          'Sebagai konsumen: selalu tutupi opsi tengah dan bandingkan apakah utilitas opsi termahal benar-benar Anda butuhkan secara mandiri.'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pricing Tiering SaaS B2B: Mendesain Opsi Decoy',
        context: 'Perusahaan software HR Anda ingin mendorong klien korporat membeli Paket Pro seharga Rp 1.500.000/bulan dibanding Paket Starter Rp 500.000/bulan.',
        dilemma: 'Struktur paket mana yang paling efektif memicu Decoy Effect?',
        choices: [
          {
            id: 'c1',
            text: 'Hanya sajikan dua opsi: Paket Starter Rp 500.000 dan Paket Pro Rp 1.500.000 tanpa opsi ketiga.',
            consequence: 'Mayoritas 75% calon klien memilih Paket Starter karena selisih Rp 1 juta terasa terlalu lebar tanpa pembanding.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Tanpa jangkar perantara yang asimetris, konsumen secara alami memilih opsi termurah.'
          },
          {
            id: 'c2',
            text: 'Sisipkan Paket Medium (Decoy) seharga Rp 1.350.000 dengan kuota karyawan terbatas, berdampingan dengan Paket Pro Rp 1.500.000 kuota tanpa batas.',
            consequence: 'Paket Medium membuat Paket Pro terlihat sangat murah (hanya selisih Rp 150 ribu dapat kuota tak terbatas); 82% klien memilih Paket Pro.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Paket Medium bertindak sebagai asymmetrically dominated decoy yang mengarahkan pembeli ke paket Pro.'
          },
          {
            id: 'c3',
            text: 'Gratiskan seluruh software untuk semua korporat selamanya.',
            consequence: 'Perusahaan kehabisan kas operasional dalam 2 bulan dan gulung tikar.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Menggratiskan produk tanpa model bisnis adalah bunuh diri komersial.'
          },
          {
            id: 'c4',
            text: 'Tetapkan harga Paket Pro menjadi Rp 20.000.000/bulan tanpa opsi lain.',
            consequence: 'Seluruh prospek menolak penawaran karena berada di luar anggaran pasar.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Harga ekstrem tanpa opsi perbandingan mematikan konversi penjualan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-3-1',
          question: 'Dalam eksperimen terkenal Dan Ariely mengenai langganan majalah The Economist, apa fungsi utama dari opsi "Print Subscription Only $125" yang tidak dipilih oleh satu orang pun pembaca?',
          options: [
            'Sebagai kesalahan cetak dari staf percetakan majalah',
            'Sebagai "Decoy" (umpan) yang secara asimetris membuat opsi "Print + Web $125" terlihat sebagai kesepakatan diskon yang sangat luar biasa dan tidak masuk akal untuk dilewatkan',
            'Untuk menghindari pajak pertambahan nilai dari kementerian keuangan',
            'Untuk melarang orang membaca berita online'
          ],
          correctAnswerIndex: 1,
          explanation: 'Opsi yang tidak dipilih siapapun itu adalah umpan psikologis yang mengarahkan 84% pembeli memilih paket bundling berharga $125.'
        }
      ]
    }
  ],
  edges: [
    { id: 'behe1', from: 'beh-1-1', to: 'beh-2-1', label: 'Emosi ke Laci Pikiran', domains: ['Psikologi', 'Keuangan'] },
    { id: 'behe2', from: 'beh-2-1', to: 'beh-3-1', label: 'Arsitektur Keputusan', domains: ['Psikologi', 'Bisnis'] },
  ]
};

// ==============================================================================
// REGISTRY MASTERCLASS: MEMETAKAN TOPIK KE KURIKULUM ELIT
// ==============================================================================
export const ALL_CURRICULA: Record<string, MindmapData> = {
  // Domain 1: Ekonomi, Makro & Keuangan Lanjutan
  'ekonomi makro, moneter & keuangan lanjutan': ADVANCED_MACRO_FINANCE_CURRICULUM,
  'dasar-dasar investasi & keuangan': ADVANCED_MACRO_FINANCE_CURRICULUM,
  'ekonomi': ADVANCED_MACRO_FINANCE_CURRICULUM,
  'keuangan': ADVANCED_MACRO_FINANCE_CURRICULUM,
  'makro': ADVANCED_MACRO_FINANCE_CURRICULUM,
  'investasi': ADVANCED_MACRO_FINANCE_CURRICULUM,
  'inflasi': ADVANCED_MACRO_FINANCE_CURRICULUM,

  // Domain 2: Strategi Bisnis & Moat Korporat
  'strategi bisnis & parit pertahanan korporat': ADVANCED_BUSINESS_STRATEGY_CURRICULUM,
  'strategi bisnis & ekonomi perusahaan': ADVANCED_BUSINESS_STRATEGY_CURRICULUM,
  'bisnis': ADVANCED_BUSINESS_STRATEGY_CURRICULUM,
  'strategi': ADVANCED_BUSINESS_STRATEGY_CURRICULUM,
  'moat': ADVANCED_BUSINESS_STRATEGY_CURRICULUM,
  'spacex': ADVANCED_BUSINESS_STRATEGY_CURRICULUM,

  // Domain 3: Psikologi Perilaku & Behavioral Economics
  'psikologi perilaku & behavioral economics': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'psikologi perilaku & arsitektur keputusan': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'psikologi perilaku, arsitektur keputusan & behavioral economics': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'psikologi': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'behavioral economics': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'bias kognitif': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'sistem 1 vs sistem 2': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'prospect theory & loss aversion': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'the decoy effect & pricing psychology': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'social proof, fomo & scarcity': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'nudge theory & choice architecture': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'psikologi negosiasi zopa & batna': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'gamifikasi, dopamine loops & retensi': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,
  'overconfidence bias & pre-mortem': ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM,

  // Domain 4: Strategi Korporat, Legalitas PT, Rantai Pasok & Arsitektur Kekayaan
  'strategi korporat, legalitas pt & arsitektur kekayaan': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'strategi korporat': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'legalitas pt': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'pt vs cv': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'hukum bisnis': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'distribusi': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'distributor': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'kontraktor': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'tender': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'pajak': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'pajak korporat': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'tax planning': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'holding company': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
  'proteksi aset': CORPORATE_STRATEGY_WEALTH_CURRICULUM,
};

export const STRUCTURED_CURRICULA = ALL_CURRICULA;

export function getCurriculumForQuery(query: string): MindmapData | null {
  const normalized = query.trim().toLowerCase();

  // 1. Direct match
  if (ALL_CURRICULA[normalized]) {
    return JSON.parse(JSON.stringify(ALL_CURRICULA[normalized]));
  }

  // 2. Keyword match - Corporate, Legal, Supply Chain, Contractor, Tax & Wealth Module
  if (
    normalized.includes('korporat') ||
    normalized.includes('legalitas') ||
    normalized.includes('pt') ||
    normalized.includes('cv') ||
    normalized.includes('oss') ||
    normalized.includes('kbli') ||
    normalized.includes('rups') ||
    normalized.includes('distribusi') ||
    normalized.includes('distributor') ||
    normalized.includes('kontraktor') ||
    normalized.includes('tender') ||
    normalized.includes('spk') ||
    normalized.includes('retensi') ||
    normalized.includes('pph') ||
    normalized.includes('ppn') ||
    normalized.includes('faktur') ||
    normalized.includes('tax') ||
    normalized.includes('pajak') ||
    normalized.includes('holding') ||
    normalized.includes('proteksi aset')
  ) {
    return JSON.parse(JSON.stringify(CORPORATE_STRATEGY_WEALTH_CURRICULUM));
  }

  // 2. Keyword match - Macroeconomics, Monetary Cycles, Valuation & Risk Hedging
  if (
    normalized.includes('makro') ||
    normalized.includes('moneter') ||
    normalized.includes('inflasi') ||
    normalized.includes('suku bunga') ||
    normalized.includes('bank sentral') ||
    normalized.includes('the fed') ||
    normalized.includes('dcf') ||
    normalized.includes('wacc') ||
    normalized.includes('invest') ||
    normalized.includes('keuangan') ||
    normalized.includes('dalio') ||
    normalized.includes('debt cycle') ||
    normalized.includes('siklus utang') ||
    normalized.includes('qe') ||
    normalized.includes('quantitative easing') ||
    normalized.includes('tightening') ||
    normalized.includes('forex') ||
    normalized.includes('kurs') ||
    normalized.includes('devaluasi') ||
    normalized.includes('rupiah') ||
    normalized.includes('hedging') ||
    normalized.includes('lindung nilai') ||
    normalized.includes('derivatif') ||
    normalized.includes('futures') ||
    normalized.includes('roic') ||
    normalized.includes('ev/ebitda') ||
    normalized.includes('all-weather') ||
    normalized.includes('risk parity') ||
    normalized.includes('solvabilitas') ||
    normalized.includes('likuiditas') ||
    normalized.includes('cash conversion cycle') ||
    normalized.includes('working capital')
  ) {
    return JSON.parse(JSON.stringify(ADVANCED_MACRO_FINANCE_CURRICULUM));
  }

  if (
    normalized.includes('bisnis') ||
    normalized.includes('strategi') ||
    normalized.includes('moat') ||
    normalized.includes('ltv') ||
    normalized.includes('cac') ||
    normalized.includes('disrupt') ||
    normalized.includes('christensen') ||
    normalized.includes('porter') ||
    normalized.includes('saham')
  ) {
    return JSON.parse(JSON.stringify(ADVANCED_BUSINESS_STRATEGY_CURRICULUM));
  }

  if (
    normalized.includes('psikologi') ||
    normalized.includes('bias') ||
    normalized.includes('prospect') ||
    normalized.includes('kahneman') ||
    normalized.includes('tversky') ||
    normalized.includes('sistem 1') ||
    normalized.includes('sistem 2') ||
    normalized.includes('loss aversion') ||
    normalized.includes('anchoring') ||
    normalized.includes('framing') ||
    normalized.includes('decoy') ||
    normalized.includes('social proof') ||
    normalized.includes('fomo') ||
    normalized.includes('scarcity') ||
    normalized.includes('kelangkaan') ||
    normalized.includes('thaler') ||
    normalized.includes('mental accounting') ||
    normalized.includes('frictionless') ||
    normalized.includes('dilema tahanan') ||
    normalized.includes('prisoner') ||
    normalized.includes('nudge') ||
    normalized.includes('negosiasi') ||
    normalized.includes('batna') ||
    normalized.includes('zopa') ||
    normalized.includes('gamifikasi') ||
    normalized.includes('dopamine') ||
    normalized.includes('streak') ||
    normalized.includes('overconfidence') ||
    normalized.includes('hubris') ||
    normalized.includes('dunning') ||
    normalized.includes('pre-mortem') ||
    normalized.includes('behavioral')
  ) {
    return JSON.parse(JSON.stringify(ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM));
  }

  return null;
}
