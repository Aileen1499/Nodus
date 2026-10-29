// ==============================================================================
// NODUS — STRUCTURED STEP-BY-STEP CURRICULUM DATA (BASIC TO ADVANCED)
// ==============================================================================

import { MindmapData } from '../types';

// ==============================================================================
// 1. DOMAIN: DASAR-DASAR INVESTASI & KEUANGAN
// ==============================================================================
export const INVESTING_FUNDAMENTALS_CURRICULUM: MindmapData = {
  id: 'curriculum-investasi-keuangan',
  topic: 'Dasar-Dasar Investasi & Keuangan',
  rootId: 'inv-1-1',
  description: 'Panduan berjenjang dari fondasi nilai uang, mekanisme compounding, hingga diversifikasi portofolio tahan krisis.',
  nodes: [
    // --------------------------------------------------------------------------
    // TAHAP 1: Fondasi & Kesadaran Nilai Uang
    // --------------------------------------------------------------------------
    {
      id: 'inv-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'TAHAP 1: Fondasi & Kesadaran Nilai Uang',
      label: 'Inflasi Menggerogoti Uang Diam',
      domain: 'Ekonomi',
      summary: 'Mengapa membiarkan uang mengendap di rekening tunai adalah jaminan pasti kehilangan daya beli.',
      x: 180,
      y: 140,
      level: 0,
      microContent: {
        analogy: 'Menyimpan uang tunai di bawah bantal bagaikan memegang balok es di tengah hari terik. Nominal angkanya tetap sama, namun ukuran daya beli riilnya terus meleleh 5% hingga 8% setiap tahun tanpa suara.',
        crossDisciplinary: {
          connectionText: 'Ekonomi Makro x Psikologi Keamanan Semu',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Rasa aman memegang uang tunai adalah ilusi psikologis (Money Illusion); otak merasa aman karena nominalnya utuh padahal kapasitas belinya terpangkas.',
        },
        caseStudy: {
          companyOrFigure: 'Sejarah Harga Semangkuk Bakso (1995 vs 2025)',
          story: 'Tahun 1995, uang Rp 1.000 bisa membeli semangkuk bakso lengkap. Tiga dekade kemudian, mangkuk yang sama berharga Rp 25.000. Uang Rp 1.000 fisik tidak rusak, namun daya belinya lenyap 96% akibat laju inflasi.',
          takeaway: 'Tujuan utama investasi tahap awal bukan langsung menjadi kaya mendadak, melainkan mempertahankan daya beli uang hasil keringat Anda.'
        },
        actionableSteps: [
          'Audit seluruh rekening tabungan: pisahkan dana darurat 6 bulan pengeluaran dari modal investasi.',
          'Hitung pengeluaran bulanan Anda dan tambahkan estimasi inflasi 6% untuk tahun depan.',
          'Buka akun sekuritas atau platform reksa dana terdaftar OJK dalam 24 jam ke depan.'
        ],
        difficulty: 'Pemula',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Dana Mengendap: Simpan Tunai atau Investasi?',
        context: 'Anda memiliki tabungan Rp 50 juta dari bonus tahunan. Anda merasa takut rugi jika menaruhnya di instrumen investasi.',
        dilemma: 'Apa keputusan paling rasional untuk mengamankan nilai uang tersebut dalam 5 tahun ke depan?',
        choices: [
          {
            id: 'c1',
            text: 'Biarkan 100% uang tetap di tabungan biasa dengan bunga 0.5% per tahun.',
            consequence: 'Dalam 5 tahun, daya beli uang Anda tergerus lebih dari Rp 12 juta akibat inflasi.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Keputusan ini menjamin kepastian kehilangan daya beli riil setiap tahun.'
          },
          {
            id: 'c2',
            text: 'Sisihkan Rp 15 juta untuk dana darurat cair, dan alokasikan Rp 35 juta ke Reksadana Pendapatan Tetap/SBN.',
            consequence: 'Daya beli terlindungi, menghasilkan imbal hasil 6-7% per tahun yang mengalahkan inflasi.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Memisahkan dana darurat dengan modal pelindung inflasi adalah fondasi awal kecerdasan finansial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-1-1',
          question: 'Jika rata-rata inflasi tahunan adalah 6% dan uang Anda disimpan di celengan tanpa bunga, berapakah perkiraan daya beli riil uang Anda setelah 12 tahun menggunakan "Rule of 72"?',
          options: [
            'Daya beli uang Anda naik dua kali lipat',
            'Daya beli uang Anda terpangkas menjadi separuh (50%) dari nilai aslinya',
            'Daya beli uang Anda tetap persis sama',
            'Uang Anda otomatis hilang dari celengan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Rumus Rule of 72: 72 dibagi inflasi 6% = 12 tahun. Dalam 12 tahun, daya beli uang tunai tanpa imbal hasil berkurang 50%.'
        }
      ]
    },
    {
      id: 'inv-1-2',
      prerequisiteId: 'inv-1-1',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'TAHAP 1: Fondasi & Kesadaran Nilai Uang',
      label: 'Imbal Hasil Melawan Inflasi',
      domain: 'Keuangan',
      summary: 'Konsep Return Riil: bagaimana memastikan aset Anda bertumbuh lebih cepat daripada kenaikan harga barang.',
      x: 180,
      y: 290,
      level: 1,
      microContent: {
        analogy: 'Imbal hasil investasi bagaikan Anda sedang berjalan di atas eskalator yang bergerak turun (inflasi). Jika Anda diam, Anda terdorong ke bawah; jika berjalan santai, Anda hanya jalan di tempat. Anda harus melangkah lebih cepat agar bisa naik ke lantai atas.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Matematika Realitas',
          domains: ['Keuangan', 'Ekonomi'],
          insight: 'Return Nominal hanyalah ilusi angka; yang menentukan kemakmuran Anda di masa tua adalah Return Riil (Nominal minus Inflasi minus Pajak).',
        },
        caseStudy: {
          companyOrFigure: 'Perbandingan Deposito vs Surat Berharga Negara (SBN)',
          story: 'Tahun 2022, deposito bank umum memberi bunga 3.5% (pajak 20% = nett 2.8%), saat inflasi 5.5%. Pemilik deposito riilnya rugi 2.7%. Sementara investor SBN ritel berkupon 6.8% (pajak 10% = nett 6.12%) sukses mengamankan surplus riil.',
          takeaway: 'Jangan tertipu angka bunga sebelum menghitung potongan pajak dan laju inflasi aktual.'
        },
        actionableSteps: [
          'Gunakan rumus: Return Riil = Return Nominal - Laju Inflasi - Potongan Pajak.',
          'Bandingkan yield instrumen yang Anda miliki hari ini dengan data inflasi BPS terbaru.',
          'Pindahkan simpanan berbunga rendah ke instrumen pasar uang atau obligasi negara.'
        ],
        difficulty: 'Pemula',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Tawaran Investasi: 12% Per Tahun vs 7% Pemerintah',
        context: 'Teman menawarkan titip dana di koperasi tidak berizin dengan janji pasti 12% per bulan, sementara SBN resmi memberi 6.8% per tahun.',
        dilemma: 'Bagaimana mengevaluasi risiko imbal hasil ini?',
        choices: [
          {
            id: 'c1',
            text: 'Taruh seluruh tabungan di koperasi teman karena tergiur janji imbal hasil fantastis.',
            consequence: 'Koperasi gagal bayar dalam 6 bulan dan seluruh pokok tabungan Anda hilang tanpa perlindungan hukum.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Imbal hasil yang terlalu muluk di luar akal sehat (High Return Low Risk) adalah tanda utama skema Ponzi.'
          },
          {
            id: 'c2',
            text: 'Tolak tawaran tidak berizin, pilih instrumen legal yang dijamin undang-undang dengan return di atas inflasi.',
            consequence: 'Modal aman 100%, kupon dibayar tepat waktu setiap bulan ke rekening, dan tidur nyenyak.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Perlindungan pokok modal (Capital Preservation) jauh lebih krusial daripada mengejar imbal hasil spekulatif.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-1-2',
          question: 'Jika sebuah instrumen memberikan imbal hasil nominal 8% per tahun, pajak final 10%, dan inflasi tahun itu 5%, berapakah imbal hasil riil (Real Return) bersih Anda?',
          options: [
            '+2.2% per tahun (8% - 0.8% pajak - 5% inflasi)',
            '+13% per tahun',
            '-1.5% per tahun',
            'Tepat 0%'
          ],
          correctAnswerIndex: 0,
          explanation: 'Return bersih = 8% - (10% x 8%) = 7.2%. Return riil = 7.2% - 5% = +2.2% di atas inflasi.'
        }
      ]
    },
    {
      id: 'inv-1-3',
      prerequisiteId: 'inv-1-2',
      stepNumber: 'Langkah 1.3',
      stageTitle: 'TAHAP 1: Fondasi & Kesadaran Nilai Uang',
      label: 'Efek Compounding (Bunga Berbunga)',
      domain: 'Keuangan',
      summary: 'Keajaiban eksponensial di mana keuntungan Anda mulai menghasilkan keuntungan baru miliknya sendiri.',
      x: 180,
      y: 440,
      level: 1,
      microContent: {
        analogy: 'Menggulung bola salju kecil dari puncak bukit. Di meter-meter awal, gulungan terlihat lambat dan kecil. Namun saat bola mencapai setengah bukit, setiap putaran menggandakan ukurannya secara masif menjadi raksasa yang tak terbendung.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Psikologi Waktu & Kesabaran',
          domains: ['Keuangan', 'Psikologi'],
          insight: 'Otak manusia terbiasa berpikir linier (1 + 1 = 2), sehingga sangat sulit membayangkan kekuatan eksponensial jangka panjang secara intuitif.',
        },
        caseStudy: {
          companyOrFigure: 'Portofolio Kekayaan Warren Buffett',
          story: 'Lebih dari 99% total kekayaan Warren Buffett senilai $130+ miliar dihasilkan setelah ia berusia 50 tahun. Rahasianya bukan return ajaib dalam semalam, melainkan membiarkan modal berlipat ganda selama lebih dari 6 dekade.',
          takeaway: 'Faktor penentu terbesar dalam compounding bukanlah seberapa agresif Anda mengambil risiko, melainkan berapa lama waktu Anda bertahan di pasar.'
        },
        actionableSteps: [
          'Aktifkan fitur Auto-Debit / Dollar Cost Averaging (DCA) setiap tanggal gajian.',
          'Reinvestasikan setiap dividen dan kupon yang diterima kembali ke instrumen produktif.',
          'Tolak godaan mencairkan pokok investasi untuk konsumsi gaya hidup sebelum target waktu tercapai.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Reinvestasi Dividen: Foya-foya vs Gulung Modal',
        context: 'Saham dividen Anda menghasilkan pasif income Rp 5 juta kuartal ini.',
        dilemma: 'Apa yang sebaiknya dilakukan dengan kas dividen tersebut?',
        choices: [
          {
            id: 'c1',
            text: 'Gunakan seluruhnya untuk membeli gadget baru yang sedang tren.',
            consequence: 'Efek bola salju terputus dan modal Anda kembali berjalan di garis linier.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Menarik keuntungan dividen di awal mematikan potensi pertumbuhan bunga berbunga.'
          },
          {
            id: 'c2',
            text: 'Reinvestasikan seluruh dividen untuk membeli lot saham tambahan di harga wajar.',
            consequence: 'Kepemilikan lembar saham bertambah, dividen kuartal berikutnya semakin besar secara eksponensial.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Reinvesting dividends adalah kunci akselerasi kurva compounding portofolio.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-1-3',
          question: 'Albert Einstein dikabarkan menyebut Bunga Majemuk (Compounding Interest) sebagai "Keajaiban Dunia ke-8". Mengapa?',
          options: [
            'Karena hanya bisa dihitung menggunakan komputer tercanggih',
            'Karena siapa yang memahaminya akan memperolehnya, dan siapa yang tidak memahaminya akan membayarnya (lewat utang)',
            'Karena bunga majemuk menghapus semua utang negara seketika',
            'Karena bunga majemuk tidak memerlukan modal sama sekali'
          ],
          correctAnswerIndex: 1,
          explanation: 'Bunga majemuk bekerja dua arah: memperkaya investor yang sabar, atau memiskinkan penghutang konsumtif.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 2: Cara Uang Bertambah & Aset
    // --------------------------------------------------------------------------
    {
      id: 'inv-2-1',
      prerequisiteId: 'inv-1-3',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'TAHAP 2: Cara Uang Bertambah & Aset',
      label: 'Cashflow vs Capital Gain',
      domain: 'Keuangan',
      summary: 'Dua mesin penambah kekayaan: pendapatan mengalir rutin versus kenaikan harga aset saat dijual.',
      x: 480,
      y: 140,
      level: 1,
      microContent: {
        analogy: 'Memiliki sapi perah: Cashflow adalah susu segar yang diperah setiap pagi tanpa perlu menyembelih sapi. Capital Gain adalah menjual sapi utuh tersebut saat harganya melambung tinggi di pasar kurban.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Ketahanan Finansial',
          domains: ['Keuangan', 'Bisnis'],
          insight: 'Orang yang hanya mengejar Capital Gain rentan terpaksa menjual di harga rugi saat butuh uang darurat; Cashflow memberi nafas likuiditas tanpa mengorbankan aset.',
        },
        caseStudy: {
          companyOrFigure: 'Robert Kiyosaki (Rich Dad Poor Dad)',
          story: 'Mendefinisikan aset secara radikal: "Aset adalah sesuatu yang memasukkan uang ke kantong Anda, liabilitas adalah sesuatu yang mengeluarkan uang dari kantong Anda."',
          takeaway: 'Jangan beli aset yang menuntut biaya perawatan besar tanpa menghasilkan arus kas positif.'
        },
        actionableSteps: [
          'Klasifikasikan aset Anda: mana yang menghasilkan Cashflow bulanan dan mana yang murni spekulasi Capital Gain.',
          'Pastikan Cashflow pasif Anda cukup untuk menutupi biaya operasional portofolio.',
          'Hindari portofolio yang 100% terkunci pada aset tidak likuid tanpa dividen/sewa.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Pembelian Properti Pertama: Rumah Tinggal vs Ruko Sewa',
        context: 'Anda memiliki tabungan Rp 300 juta untuk uang muka properti.',
        dilemma: 'Ke mana modal ini dialokasikan untuk fondasi aset?',
        choices: [
          {
            id: 'c1',
            text: 'Beli rumah mewah di pinggiran kota yang menguras 50% gaji bulanan untuk cicilan KPR tanpa disewakan.',
            consequence: 'Arus kas bulanan tercekik, jika kehilangan pekerjaan properti terancam disita bank.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Rumah tinggal pribadi yang menguras arus kas bertindak sebagai liabilitas dalam neraca pribadi.'
          },
          {
            id: 'c2',
            text: 'Beli ruko strategis yang langsung disewa minimarket/kantor ekspedisi dengan yield sewa menutup cicilan.',
            consequence: 'Cicilan terbayar sendiri oleh penyewa (self-liquidating), aset menghasilkan cashflow positif sejak tahun pertama.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Aset yang menghasilkan arus kas mandiri melindungi pemilik dari tekanan finansial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-2-1',
          question: 'Manakah di bawah ini yang merupakan contoh murni instrumen penghasil Cashflow (Arus Kas Rutin)?',
          options: [
            'Lukisan seni antik yang disimpan di gudang',
            'Dividen tunai saham perbankan dan kupon obligasi negara yang cair setiap bulan/kuartal',
            'Tanah kosong tanpa tanaman yang menunggu pembeli 10 tahun lagi',
            'Emas batangan yang disimpan di kotak brankas'
          ],
          correctAnswerIndex: 1,
          explanation: 'Dividen dan kupon menyetor kas langsung ke rekening Anda tanpa perlu menjual instrumen pokoknya.'
        }
      ]
    },
    {
      id: 'inv-2-2',
      prerequisiteId: 'inv-2-1',
      stepNumber: 'Langkah 2.2',
      stageTitle: 'TAHAP 2: Cara Uang Bertambah & Aset',
      label: 'Bunga Berbunga & Dividen Saham',
      domain: 'Keuangan',
      summary: 'Strategi Dividend Aristocrats: membangun mesin pasif income dari perusahaan yang rutin membagikan laba.',
      x: 480,
      y: 290,
      level: 1,
      microContent: {
        analogy: 'Menjadi mitra tidur pemilik jalan tol atau bank raksasa. Anda tidak perlu repot menjaga gardu tol atau memarahi karyawan; setiap kali jutaan orang bertransaksi, sebagian laba bersih ditransfer otomatis ke rekening Anda sebagai dividen.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Hukum Perseroan Terbatas',
          domains: ['Keuangan', 'Hukum'],
          insight: 'Sebagai pemegang saham publik, hak atas pembagian dividen dilindungi undang-undang melalui keputusan RUPS (Rapat Umum Pemegang Saham).',
        },
        caseStudy: {
          companyOrFigure: 'Saham Big Banks Indonesia (BBCA & BBRI)',
          story: 'Investor yang memegang saham bank tier-1 selama 15 tahun menikmati Dividend Yield on Cost lebih dari 30% per tahun dari modal awal mereka, di luar apresiasi harga saham yang melonjak ribuan persen.',
          takeaway: 'Carilah perusahaan dengan rekam jejak pembagian dividen konsisten dan pertumbuhan laba di atas rata-rata PDB.'
        },
        actionableSteps: [
          'Pantau Dividend Payout Ratio (DPR): idealnya antara 30% hingga 70% dari laba bersih.',
          'Hitung Dividend Yield: Pembagian dividen tahunan dibagi harga beli saham.',
          'Gunakan jadwal Cum Date dan Ex Date untuk mengoptimalkan timing pembelian.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Jebakan Dividen (Dividend Trap)',
        context: 'Sebuah saham tambang batu bara membagikan dividen yield 22%, namun labanya diproyeksikan anjlok 80% tahun depan karena harga komoditas jatuh.',
        dilemma: 'Apakah Anda memborong saham tersebut menjelang cum-date?',
        choices: [
          {
            id: 'c1',
            text: 'Borong semua modal demi dividen 22% tanpa memperhitungkan potensi kejatuhan harga saham di ex-date.',
            consequence: 'Setelah dividen cair, harga saham anjlok 35% dan Anda mengalami kerugian modal jauh melebihi dividen yang didapat.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Dividend Trap adalah jebakan klasik saat pasar mengabaikan keberlanjutan laba di masa depan.'
          },
          {
            id: 'c2',
            text: 'Fokus pada perusahaan dengan pertumbuhan dividen stabil (Dividend Growth) 10-15% per tahun dari bisnis berkelanjutan.',
            consequence: 'Modal terjaga aman, dividen terus meningkat setiap tahun, dan total return konsisten mengalahkan IHSG.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Keberlanjutan laba (earnings sustainability) jauh lebih berharga daripada dividen besar sesaat.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-2-2',
          question: 'Apa risiko terbesar dari "Dividend Trap" di pasar saham?',
          options: [
            'Perusahaan dilarang beroperasi oleh bursa efek',
            'Investor tergiur dividen sesaat yang tinggi padahal harga saham pasca-dividen (ex-date) ambles lebih dalam daripada dividen yang diterima',
            'Pajak dividen dinaikkan menjadi 100%',
            'Dividen dibayarkan dalam bentuk mata uang asing kuno'
          ],
          correctAnswerIndex: 1,
          explanation: 'Dividend Trap terjadi ketika penurunan harga saham pasca ex-date melenyapkan seluruh keuntungan dividen.'
        }
      ]
    },
    {
      id: 'inv-2-3',
      prerequisiteId: 'inv-2-2',
      stepNumber: 'Langkah 2.3',
      stageTitle: 'TAHAP 2: Cara Uang Bertambah & Aset',
      label: 'Kenaikan Nilai Real Estate & Bisnis',
      domain: 'Bisnis',
      summary: 'Mengapa tanah strategis dan ekuitas bisnis swasta menjadi penyimpan nilai terbaik orang terkaya di dunia.',
      x: 480,
      y: 440,
      level: 1,
      microContent: {
        analogy: 'Mark Twain pernah berkata: "Belilah tanah, mereka tidak memproduksinya lagi." Sementara bank sentral bisa mencetak triliunan uang kertas baru setiap hari, luas tanah strategis di muka bumi bernilai tetap: kelangkaan fisik menciptakan apresiasi tak terbendung.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Geografi & Demografi',
          domains: ['Bisnis', 'Ekonomi'],
          insight: 'Nilai tanah dan properti bergerak seiring dengan pertumbuhan kepadatan populasi dan proyek infrastruktur transportasi pemerintah.',
        },
        caseStudy: {
          companyOrFigure: 'McDonald\'s Bukan Bisnis Burger tapi Real Estate',
          story: 'Harry Sonneborn, CFO legendaris McDonald\'s, merumuskan: "Bisnis kami sebenarnya adalah real estate. Kami menjual hamburger hanya untuk membiayai sewa tanah bagi franchisee kami."',
          takeaway: 'Kombinasikan operasi bisnis yang menghasilkan cashflow dengan kepemilikan aset riil yang terdepresiasi lambat.'
        },
        actionableSteps: [
          'Pelajari Rencana Tata Ruang Wilayah (RTRW) sebelum memutuskan membeli properti investasi.',
          'Pilih lokasi dengan potensi pembangunan jalan tol, stasiun MRT/LRT, atau pusat ekonomi baru.',
          'Gunakan prinsip Forced Appreciation: tingkatkan nilai sewa dengan renovasi cerdas berbiaya terukur.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Lokasi Properti: Pusat Kota Mahal vs Pinggiran Potensial',
        context: 'Anda memiliki modal untuk membeli satu unit tanah komersial.',
        dilemma: 'Lokasi mana yang menghasilkan Risk-to-Reward paling optimal?',
        choices: [
          {
            id: 'c1',
            text: 'Beli tanah di lokasi yang sudah sangat jenuh dengan harga puncak tanpa rencana infrastruktur baru.',
            consequence: 'Kenaikan nilai melambat di bawah inflasi dan imbal hasil sewa hanya 2% per tahun.',
            scoreBonus: 20,
            isOptimal: false,
            explanation: 'Membeli di puncak siklus harga membatasi ruang apresiasi modal (capital gain).'
          },
          {
            id: 'c2',
            text: 'Beli di koridor jalan lingkar luar yang sedang dikerjakan pintu tol pemerintah dalam 18 bulan ke depan.',
            consequence: 'Nilai tanah melonjak 80% saat pintu tol diresmikan, menarik penyewa komersial skala nasional.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Mengantisipasi efek infrastruktur publik adalah strategi percepatan apresiasi properti paling teruji.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-2-3',
          question: 'Mengapa model bisnis McDonald\'s sering disebut sebagai imperium real estate terselubung?',
          options: [
            'Karena McDonald\'s hanya menjual tanah kavling, bukan makanan cepat saji',
            'Karena McDonald\'s Corporation memiliki tanah dan bangunan di setiap lokasi gerai utama dan memungut sewa dari pemilik waralaba (franchisee)',
            'Karena seluruh pegawainya adalah agen properti berlisensi',
            'Karena gedung McDonald\'s dibangun dari emas murni'
          ],
          correctAnswerIndex: 1,
          explanation: 'McDonald\'s mengontrol properti strategis dan menyewakannya kembali dengan margin keuntungan sangat tinggi.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 3: Manajemen Risiko & Diversifikasi
    // --------------------------------------------------------------------------
    {
      id: 'inv-3-1',
      prerequisiteId: 'inv-2-3',
      stepNumber: 'Langkah 3.1',
      stageTitle: 'TAHAP 3: Manajemen Risiko & Diversifikasi',
      label: 'Menyebar Risiko untuk Meredam Kerugian',
      domain: 'Keuangan',
      summary: 'Alokasi Aset Modern: cara membangun portofolio kebal badai yang tidak akan hancur oleh satu krisis.',
      x: 780,
      y: 200,
      level: 1,
      microContent: {
        analogy: 'Jangan menaruh semua telur di dalam satu keranjang yang sama. Jika keranjang itu jatuh terantuk batu, seluruh telur Anda pecah seketika. Bagi telur ke dalam beberapa wadah dengan pelindung berbeda.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Teori Probabilitas Matematika',
          domains: ['Keuangan', 'Data & Analitik'],
          insight: 'Harry Markowitz meraih Nobel Ekonomi atas Modern Portfolio Theory: menggabungkan aset dengan korelasi negatif memangkas volatilitas tanpa mengurangi imbal hasil yang diharapkan.',
        },
        caseStudy: {
          companyOrFigure: 'All-Weather Portfolio (Ray Dalio)',
          story: 'Merancang portofolio yang terbukti bertahan selama 80 tahun perang, inflasi gila-gilaan, dan depresi ekonomi: 30% Saham, 40% Obligasi Jangka Panjang, 15% Obligasi Menengah, 7.5% Emas, 7.5% Komoditas.',
          takeaway: 'Anda tidak perlu menjadi peramal masa depan jika portofolio Anda sudah dirancang untuk segala musim cuaca ekonomi.'
        },
        actionableSteps: [
          'Evaluasi korelasi aset: pastikan tidak seluruh modal terkonsentrasi di satu sektor industri.',
          'Lakukan Rebalancing berkala setiap 6 atau 12 bulan untuk mengunci keuntungan.',
          'Pegang alokasi emas fisik 5-10% sebagai polis asuransi terhadap ketidakpastian geopolitik.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Krisis Pasar Global: Panik Jual atau Rebalance?',
        context: 'Perang pecah di Timur Tengah, bursa saham rontok 15% dalam 3 hari sementara harga emas melonjak 12%.',
        dilemma: 'Langkah taktis apa yang harus dieksekusi investor bijak?',
        choices: [
          {
            id: 'c1',
            text: 'Jual seluruh saham dalam kondisi panik dan simpan uang tunai di bawah kasur.',
            consequence: 'Anda merealisasikan kerugian di titik terendah (bottom) dan ketinggalan reli pemulihan ekonomi berikutnya.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menjual dalam kepanikan emosional adalah musuh nomor satu kesuksesan investasi jangka panjang.'
          },
          {
            id: 'c2',
            text: 'Rebalancing: Ambil sebagian profit dari emas yang melambung untuk memborong saham berfundamental prima di harga diskon.',
            consequence: 'Portofolio kembali ke rasio ideal, membeli murah dan menjual mahal secara terstruktur tanpa emosi.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Rebalancing otomatis memaksa investor mematuhi prinsip beli murah dan jual mahal.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-3-1',
          question: 'Menurut teori Modern Portfolio karya Harry Markowitz, apa syarat utama agar diversifikasi aset benar-benar efektif meredam risiko?',
          options: [
            'Aset yang dipilih harus memiliki korelasi yang rendah atau negatif satu sama lain',
            'Semua aset harus dibeli di bank yang sama persis',
            'Seluruh uang harus dimasukkan ke satu saham terfavorit',
            'Investasi hanya boleh dilakukan saat cuaca cerah'
          ],
          correctAnswerIndex: 0,
          explanation: 'Korelasi rendah berarti ketika satu aset turun (misal: saham saat krisis), aset lain (misal: emas/obligasi) naik atau stabil.'
        }
      ]
    },
    {
      id: 'inv-3-2',
      prerequisiteId: 'inv-3-1',
      stepNumber: 'Langkah 3.2',
      stageTitle: 'TAHAP 3: Manajemen Risiko & Diversifikasi',
      label: 'Instrument Profiling: Emas, SBN, Saham',
      domain: 'Keuangan',
      summary: 'Memetakan spektrum instrumen sesuai horizon waktu, profil risiko, dan likuiditas pribadi Anda.',
      x: 780,
      y: 380,
      level: 1,
      microContent: {
        analogy: 'Membentuk tim sepak bola. Anda butuh striker haus gol (Saham untuk pertumbuhan), gelandang pengatur ritme (SBN/Obligasi untuk arus kas rutin), dan bek serta kiper kokoh (Pasar Uang & Emas untuk benteng pertahanan). Tim yang isinya 11 striker akan dibantai saat lawan menyerang balik.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Psikologi Profil Risiko',
          domains: ['Keuangan', 'Psikologi'],
          insight: 'Instrumen terbaik bukanlah yang paling tinggi return-nya di atas kertas, melainkan yang membuat Anda tetap bisa tidur nyenyak di tengah badai krisis.',
        },
        caseStudy: {
          companyOrFigure: 'Piramida Alokasi Kekayaan Keluarga Rothschild',
          story: 'Imperium perbankan keluarga tertua di Eropa membagi kekayaan mereka ke dalam 4 pilar: Kas Operasional, Logam Mulia, Properti Riil, dan Saham Bisnis Produktif, bertahan melintasi 2 perang dunia.',
          takeaway: 'Sesuaikan durasi instrumen dengan tujuan hidup Anda: uang jangka pendek (<1 tahun) dilarang ditaruh di aset berfluktuasi tinggi.'
        },
        actionableSteps: [
          'Tentukan profil risiko Anda: Konservatif, Moderat, atau Agresif.',
          'Petakan Bucket 1 (Kebutuhan <1 tahun: Deposito/Pasar Uang), Bucket 2 (1-5 tahun: SBN/Obligasi), Bucket 3 (>5 tahun: Saham/Properti).',
          'Tinjau kembali alokasi instrumen Anda minimal setahun sekali.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Dana Menikah 6 Bulan Lagi: Saham atau Pasar Uang?',
        context: 'Anda memiliki uang tabungan pernikahan Rp 80 juta yang akan dipakai 6 bulan ke depan.',
        dilemma: 'Instrumen apa yang harus dipilih untuk memarkir dana ini?',
        choices: [
          {
            id: 'c1',
            text: 'Taruh di saham spekulatif karena teman menjanjikan kenaikan 30% dalam 2 bulan.',
            consequence: 'Pasar saham terkoreksi 20% tepat sebelum hari pernikahan dan Anda terpaksa berutang untuk menutupi biaya katering.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menempatkan dana jangka sangat pendek pada aset fluktuatif tinggi adalah perjudian berbahaya.'
          },
          {
            id: 'c2',
            text: 'Simpan di Reksadana Pasar Uang atau Deposito Bank Digital berpenjaminan LPS.',
            consequence: 'Pokok modal utuh 100%, mendapat imbal hasil pasti tanpa risiko penurunan nilai saat hari pernikahan tiba.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Horizon waktu di bawah 1 tahun menuntut likuiditas dan kepastian modal absolut.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-inv-3-2',
          question: 'Untuk tujuan keuangan yang wajib dicairkan dalam waktu kurang dari 6 bulan ke depan, instrumen manakah yang paling tepat dan aman?',
          options: [
            'Saham gorengan berkapitalisasi mikro',
            'Reksadana Pasar Uang atau Deposito tenor pendek yang dijamin LPS',
            'Membeli tanah di pelosok desa yang belum ada sertifikat',
            'Koleksi barang hobi yang sulit dijual'
          ],
          correctAnswerIndex: 1,
          explanation: 'Reksadana Pasar Uang bebas fluktuasi penurunan pokok dan dapat dicairkan dalam hitungan hari kerja tanpa penalti.'
        }
      ]
    }
  ],
  edges: [
    // Jalur Tahap 1
    { id: 'ie1', from: 'inv-1-1', to: 'inv-1-2', label: 'Langkah Lanjutan', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'ie2', from: 'inv-1-2', to: 'inv-1-3', label: 'Eksponensial', domains: ['Keuangan', 'Keuangan'] },
    // Transisi Tahap 1 -> Tahap 2
    { id: 'ie3', from: 'inv-1-3', to: 'inv-2-1', label: 'Penciptaan Aset', domains: ['Keuangan', 'Bisnis'] },
    // Jalur Tahap 2
    { id: 'ie4', from: 'inv-2-1', to: 'inv-2-2', label: 'Aliran Kas Rutin', domains: ['Keuangan', 'Keuangan'] },
    { id: 'ie5', from: 'inv-2-2', to: 'inv-2-3', label: 'Apresiasi Fisik', domains: ['Keuangan', 'Bisnis'] },
    // Transisi Tahap 2 -> Tahap 3
    { id: 'ie6', from: 'inv-2-3', to: 'inv-3-1', label: 'Benteng Portofolio', domains: ['Bisnis', 'Keuangan'] },
    // Jalur Tahap 3
    { id: 'ie7', from: 'inv-3-1', to: 'inv-3-2', label: 'Profil Spektrum', domains: ['Keuangan', 'Keuangan'] },
  ]
};

// ==============================================================================
// 2. DOMAIN: STRATEGI BISNIS & EKONOMI PERUSAHAAN
// ==============================================================================
export const BUSINESS_ENTERPRISE_CURRICULUM: MindmapData = {
  id: 'curriculum-bisnis-perusahaan',
  topic: 'Strategi Bisnis & Ekonomi Perusahaan',
  rootId: 'biz-1-1',
  description: 'Memahami cara kerja valuasi korporasi, perbedaan kekayaan kertas vs likuid, unit economics, dan parit pertahanan kompetitif.',
  nodes: [
    // --------------------------------------------------------------------------
    // TAHAP 1: Valuasi & Cara Kerja Bisnis Besar
    // --------------------------------------------------------------------------
    {
      id: 'biz-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'TAHAP 1: Valuasi & Cara Kerja Bisnis Besar',
      label: 'Saham & Kepemilikan Perusahaan',
      domain: 'Bisnis',
      summary: 'Membedah hakikat saham sebagai sertifikat kepemilikan riil atas mesin pencetak laba masa depan.',
      x: 180,
      y: 140,
      level: 0,
      microContent: {
        analogy: 'Membeli pizza raksasa bersama 8 kawan. Anda memegang 1 potong segitiga. Jika pizza itu menjadi semakin lezat dan digemari ribuan orang, harga sepotong pizza yang Anda pegang ikut melambung tinggi tanpa Anda harus memegang seluruh loyang.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Hukum Perjanjian Korporasi',
          domains: ['Bisnis', 'Hukum'],
          insight: 'Saham memberi pemegangnya 3 hak fundamental: Hak suara di RUPS, hak atas pembagian dividen, dan hak atas sisa likuidasi aset.',
        },
        caseStudy: {
          companyOrFigure: 'Kisah Pendirian VOC (1602)',
          story: 'Perusahaan Hindia Timur Belanda (VOC) menerbitkan saham publik pertama di dunia di bursa Amsterdam untuk membiayai armada kapal rempah-rempah yang terlalu mahal dibiayai satu saudagar saja.',
          takeaway: 'Saham diciptakan untuk mengumpulkan modal kolektif dan membagi risiko ekspansi berskala raksasa.'
        },
        actionableSteps: [
          'Pahami istilah Nilai Nominal (Par Value) vs Nilai Buku (Book Value) vs Harga Pasar (Market Price).',
          'Baca laporan tahunan (Annual Report) perusahaan publik: pelajari siapa pemegang saham pengendali (PSP).',
          'Pikirkan pembelian saham sebagai kemitraan bisnis sejati, bukan sekadar judi tiket lotre.'
        ],
        difficulty: 'Pemula',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Pembagian Saham Founder di Awal Startup',
        context: 'Anda mendirikan perusahaan rintisan bersama teman yang menyumbang ide tetapi tidak mau bekerja penuh waktu.',
        dilemma: 'Bagaimana menstruktur kepemilikan saham agar tidak menjadi bumerang?',
        choices: [
          {
            id: 'c1',
            text: 'Bagi saham 50:50 di muka tanpa klausul pelepasan bertahap (Vesting Period).',
            consequence: 'Teman Anda berhenti setelah 3 bulan tapi tetap memegang 50% saham perusahaan selamanya, membuat investor baru enggan mendanai.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Membagikan saham tanpa vesting schedule adalah salah satu penyebab utama kematian startup pemula.'
          },
          {
            id: 'c2',
            text: 'Terapkan 4-Year Vesting dengan 1-Year Cliff: saham baru sah menjadi milik pribadi setelah membuktikan komitmen kerja riil.',
            consequence: 'Hak kepemilikan terlindungi adil, investor institusi percaya, dan insentif kerja terjaga kuat.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Vesting schedule menyelaraskan kepemilikan ekuitas dengan kontribusi jangka panjang.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-biz-1-1',
          question: 'Apa fungsi utama dari klausul "Vesting Schedule" (pelepasan saham bertahap) dalam perjanjian pemegang saham startup?',
          options: [
            'Menghindari pembayaran pajak penghasilan karyawan',
            'Memastikan pendiri hanya mendapatkan porsi kepemilikan saham penuh jika mereka tetap bekerja dan berkontribusi dalam jangka waktu tertentu (misal: 4 tahun)',
            'Memaksa pendiri menjual saham ke pemerintah',
            'Melarang pendiri mengambil cuti liburan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Vesting melindungi perusahaan dari pendiri yang keluar lebih awal namun membawa kabur porsi ekuitas besar.'
        }
      ]
    },
    {
      id: 'biz-1-2',
      prerequisiteId: 'biz-1-1',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'TAHAP 1: Valuasi & Cara Kerja Bisnis Besar',
      label: 'Kekayaan Kertas vs Kas Likuid',
      domain: 'Keuangan',
      summary: 'Mengapa kekayaan miliarder $200 miliar tidak bisa dipakai belanja tunai tanpa meruntuhkan harga pasar.',
      x: 180,
      y: 290,
      level: 1,
      microContent: {
        analogy: 'Anda memiliki 1.000 patung batu langka. Seseorang membeli 1 patung seharga Rp 1 miliar di pelelangan. Di atas kertas, Anda adalah miliarder dengan kekayaan Rp 1 triliun. Namun jika Anda mencoba menjual 999 patung sisanya sore ini, pasar akan banjir penawaran dan harga patung anjlok ke Rp 10 juta.',
        crossDisciplinary: {
          connectionText: 'Keuangan x Psikologi Likuiditas Pasar',
          domains: ['Keuangan', 'Ekonomi'],
          insight: 'Net Worth di majalah Forbes adalah nilai mark-to-market dari lembar saham terakhir yang diperdagangkan di bursa, bukan uang tunai di brankas.',
        },
        caseStudy: {
          companyOrFigure: 'Elon Musk Menjual Saham Tesla untuk Beli Twitter (2022)',
          story: 'Ketika Elon Musk harus menyediakan $44 miliar tunai untuk membeli Twitter, ia terpaksa menjual bertahap puluhan juta lembar saham Tesla. Penjualan massal ini memicu kepanikan pasar dan membuat kapitalisasi Tesla anjlok lebih dari 50% dalam setahun.',
          takeaway: 'Mencairkan kekayaan ekuitas dalam volume raksasa selalu menimbulkan friksi depresiasi harga (Market Impact Cost).'
        },
        actionableSteps: [
          'Pahami perbedaan Neraca Kekayaan (Net Worth) dengan Arus Kas Operasional Bersih (Cash Flow).',
          'Jangan gunakan valuasi valuasi di atas kertas sebagai dasar mengambil utang konsumtif.',
          'Pelajari strategi "Buy, Borrow, Die": bagaimana konglomerat meminjam uang dengan jaminan saham untuk menghindari pajak penjualan modal.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Valuasi Startup: Valuasi Rp 100 Miliar Tapi Kas Tersisa 2 Bulan',
        context: 'Perusahaan Anda memiliki valuasi di atas kertas Rp 100 miliar dari putaran pendanaan terakhir, tetapi kas rekening tersisa Rp 200 juta.',
        dilemma: 'Tindakan apa yang harus diambil sebelum kas operasional habis?',
        choices: [
          {
            id: 'c1',
            text: 'Bangga dengan gelar miliarder kertas dan menyewa kantor mewah baru untuk gengsi.',
            consequence: 'Kas habis dalam 45 hari, perusahaan bangkrut dan valuasi Rp 100 miliar menguap menjadi Rp 0.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Valuasi adalah ilusi; kas operasional adalah kenyataan hidup mati sebuah bisnis.'
          },
          {
            id: 'c2',
            text: 'Segera lakukan audit efisiensi biaya, perbaiki unit economics, dan capai status default alive (arus kas positif).',
            consequence: 'Perusahaan selamat mandiri tanpa ketergantungan belas kasihan suntikan modal luar.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Mencapai kemandirian arus kas (cashflow positivity) adalah pertahanan mutlak pendiri bisnis.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-biz-1-2',
          question: 'Mengapa seorang miliarder dengan kekayaan tercatat $100 miliar di bursa saham sering kali tidak bisa langsung mencairkan seluruh uangnya ke rekening tunai?',
          options: [
            'Karena bank menolak menyimpan uang lebih dari Rp 100 juta',
            'Karena menjual saham dalam jumlah masif akan membanjiri pasar dan membuat harga saham tersebut anjlok drastis (Market Impact)',
            'Karena presiden harus menandatangani setiap struk penarikan uang',
            'Karena seluruh uang miliarder berbentuk koin perak kuno'
          ],
          correctAnswerIndex: 1,
          explanation: 'Hukum penawaran dan permintaan: pasokan lembar saham yang dijual berlebihan secara mendadak akan membanting harga pasar.'
        }
      ]
    },
    {
      id: 'biz-1-3',
      prerequisiteId: 'biz-1-2',
      stepNumber: 'Langkah 1.3',
      stageTitle: 'TAHAP 1: Valuasi & Cara Kerja Bisnis Besar',
      label: 'Mengapa Valuasi SpaceX Meroket',
      domain: 'Bisnis',
      summary: 'Studi kasus First Principles: bagaimana memangkas biaya 10x lipat dan menciptakan monopoli industri baru.',
      x: 180,
      y: 440,
      level: 1,
      microContent: {
        analogy: 'Bayangkan maskapai penerbangan komersial yang membuang pesawat Boeing 737 ke laut setiap kali selesai satu kali penerbangan dari Jakarta ke Bali. Tiket pesawat akan berharga Rp 50 miliar per orang! SpaceX membalik logika ini dengan menciptakan roket yang bisa mendarat dan dipakai kembali 20 kali.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Fisika First Principles',
          domains: ['Bisnis', 'Geopolitik'],
          insight: 'Elon Musk membedah biaya bahan baku roket (aluminium, titanium, tembaga) yang ternyata hanya 2% dari harga jual roket konvensional warisan birokrasi kontraktor militer.',
        },
        caseStudy: {
          companyOrFigure: 'SpaceX Falcon 9 & Starlink',
          story: 'Dengan roket yang bisa dipakai ulang (reusable), biaya peluncuran ke orbit terpangkas dari $65.000 per kg (era Space Shuttle NASA) menjadi di bawah $1.500 per kg. Valuasi SpaceX melonjak dari $0 menjadi lebih dari $180 miliar.',
          takeaway: 'Jika Anda bisa menurunkan struktur biaya industri hingga 80% lewat First Principles, Anda tidak lagi bersaing; Anda mendefinisikan ulang seluruh pasar.'
        },
        actionableSteps: [
          'Gunakan kerangka First Principles: bedah masalah ke komponen kimia/fisik paling mendasar.',
          'Hilangkan perantara (middlemen) dan lakukan vertikalisasi integrasi manufaktur.',
          'Rancang produk agar dapat digunakan berulang-ulang untuk membagi biaya modal ke jutaan siklus.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Biaya Produksi: Vendor Mahal vs R&D In-House',
        context: 'Pemasok luar menagih Anda Rp 500.000 untuk komponen penting yang bahan mentahnya hanya bernilai Rp 35.000.',
        dilemma: 'Bagaimana langkah eksekutif Anda?',
        choices: [
          {
            id: 'c1',
            text: 'Terus bayar vendor Rp 500.000 karena malas repot melakukan riset manufaktur mandiri.',
            consequence: 'Margin produk tercekik dan bisnis Anda rentan diperas saat vendor menaikkan harga sepihak.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Ketergantungan kronis pada vendor monopoli mematikan parit keunggulan biaya perusahaan.'
          },
          {
            id: 'c2',
            text: 'Rekrut engineer berbakat untuk merancang alat cetak komponen in-house dengan First Principles.',
            consequence: 'Biaya per unit terpangkas menjadi Rp 60.000, margin melonjak, dan kompetitor tidak bisa meniru efisiensi Anda.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menguasai teknologi manufaktur inti menghasilkan keunggulan parit biaya struktural (Moat).'
          }
        ]
      },
      quiz: [
        {
          id: 'q-biz-1-3',
          question: 'Inovasi teknis paling mendasar apa yang membuat SpaceX mampu memangkas biaya peluncuran antariksa dan meroketkan valuasinya hingga ratusan miliar dolar?',
          options: [
            'Menggunakan bahan bakar bensin murah dari SPBU',
            'Menciptakan roket pendorong (booster) yang dapat mendarat kembali secara vertikal dan digunakan berulang kali (reusable)',
            'Membayar astronot dengan mata uang kripto',
            'Menghapus seluruh pemeriksaan keselamatan penerbangan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Kemampuan menggunakan kembali roket hingga puluhan kali membagi biaya produksi roket ke banyak misi, memangkas biaya drastis.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 2: Unit Economics & Scale
    // --------------------------------------------------------------------------
    {
      id: 'biz-2-1',
      prerequisiteId: 'biz-1-3',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'TAHAP 2: Unit Economics & Scale',
      label: 'Margins, COGS, dan Cash Cycle',
      domain: 'Bisnis',
      summary: 'Membedah anatomi laba kotor, HPP riil, dan siklus konversi kas agar bisnis tidak mati kehabisan nafas likuiditas.',
      x: 480,
      y: 180,
      level: 1,
      microContent: {
        analogy: 'Cash Conversion Cycle (CCC) adalah jeda waktu antara saat Anda mengeluarkan uang tunai untuk membeli tepung terigu, hingga saat pembeli roti menyerahkan uang kembali ke kasir Anda. Semakin pendek jeda ini—atau bahkan bernilai negatif—bisnis Anda dibiayai oleh uang orang lain secara gratis.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Manajemen Modal Kerja',
          domains: ['Bisnis', 'Keuangan'],
          insight: 'Banyak bisnis bangkrut bukan karena tidak memiliki pesanan, tetapi karena modal kerjanya terkunci di piutang pelanggan yang belum dibayar.',
        },
        caseStudy: {
          companyOrFigure: 'Amazon Negative Working Capital',
          story: 'Amazon menjual buku ke konsumen dan menerima uang tunai dalam 1 hari, tetapi membayar penerbit buku dalam termin 60-90 hari. Selama 89 hari, Amazon memegang miliaran dolar kas mengendap gratis untuk ekspansi gudang tanpa perlu pinjam bank.',
          takeaway: 'Model bisnis terbaik adalah yang didanai langsung oleh perputaran modal rantai pasoknya sendiri.'
        },
        actionableSteps: [
          'Hitung Days Sales Outstanding (DSO): percepat penagihan piutang dari klien.',
          'Negosiasikan Days Payable Outstanding (DPO): perpanjang termin pembayaran ke supplier terpercaya.',
          'Pangkas Days Inventory Outstanding (DIO): hilangkan stok barang mati yang mengendap di gudang lebih dari 60 hari.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Piutang Macet Klien Korporat Besar',
        context: 'Perusahaan ritel besar ingin memesan produk Anda senilai Rp 1 miliar namun menuntut termin pembayaran tempo 120 hari.',
        dilemma: 'Bagaimana merespons pesanan ini dengan kas modal kerja terbatas?',
        choices: [
          {
            id: 'c1',
            text: 'Terima tanpa syarat demi gengsi nama besar, dan bayar pemasok bahan baku dengan kas operasional.',
            consequence: 'Kas operasional habis di bulan kedua, gaji karyawan tertunda, dan pabrik macet total.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Pertumbuhan penjualan tanpa jaminan perputaran kas sehat adalah jalan tol menuju kebangkrutan.'
          },
          {
            id: 'c2',
            text: 'Gunakan fasilitas Invoice Financing (Factoring) atau negosiasikan uang muka 40% untuk mengunci pasokan.',
            consequence: 'Arus kas produksi tetap cair, margin terjaga, dan risiko gagal bayar terisolasi rapi.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Manajemen perputaran modal kerja melindungi kelangsungan likuiditas perusahaan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-biz-2-1',
          question: 'Apa arti dari siklus konversi kas bernilai negatif (Negative Cash Conversion Cycle) seperti yang dimiliki Amazon dan Dell?',
          options: [
            'Perusahaan selalu rugi dalam setiap transaksi barang',
            'Perusahaan menerima uang tunai dari pembeli lebih cepat daripada saat mereka harus membayar tagihan ke pemasok, sehingga menikmati modal kerja gratis',
            'Perusahaan tidak boleh menggunakan mata uang kertas',
            'Kasir dilarang mencatat laporan keuangan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Negative CCC berarti operasional perusahaan dibiayai oleh kredit tanpa bunga dari para pemasoknya.'
        }
      ]
    },
    {
      id: 'biz-2-2',
      prerequisiteId: 'biz-2-1',
      stepNumber: 'Langkah 2.2',
      stageTitle: 'TAHAP 2: Unit Economics & Scale',
      label: 'Network Effects & Parit Pertahanan (Moat)',
      domain: 'Bisnis',
      summary: 'Mengapa setiap pengguna baru membuat produk Anda semakin berharga dan mustahil ditiru pesaing.',
      x: 480,
      y: 380,
      level: 1,
      microContent: {
        analogy: 'Telepon pertama di dunia yang dipegang Alexander Graham Bell bernilai Rp 0 karena tidak ada orang lain yang bisa dihubungi. Ketika 1.000 orang memiliki telepon, nilainya mulai berlipat ganda. Ketika 1 miliar orang memakainya (seperti WhatsApp), nilai jaringan itu menjadi tak tergantikan: berpindah ke aplikasi lain berarti Anda kehilangan seluruh lingkaran pertemanan.',
        crossDisciplinary: {
          connectionText: 'Bisnis x Matematika Hukum Metcalfe',
          domains: ['Bisnis', 'Data & Analitik'],
          insight: 'Hukum Metcalfe menyatakan bahwa nilai jaringan telekomunikasi berbanding lurus dengan kuadrat jumlah penggunanya ($V \\propto N^2$).',
        },
        caseStudy: {
          companyOrFigure: 'Visa, Mastercard & WhatsApp',
          story: 'Bank tidak bisa membuat jaringan kartu baru karena tidak ada toko yang memasang mesin EDC-nya; toko tidak mau pasang EDC baru karena pembeli memegang Visa/Mastercard. Efek jaringan dua sisi (Two-Sided Network Effect) mengunci pasar selama lebih dari 50 tahun.',
          takeaway: 'Bangun produk di mana nilai bagi pengguna lama meningkat secara otomatis setiap kali ada pengguna baru yang mendaftar.'
        },
        actionableSteps: [
          'Identifikasi jenis parit bisnis Anda: Network Effect, Switching Costs, Cost Advantages, atau Intangible Assets (Paten/Merek).',
          'Sematkan fitur kolaborasi multi-user ke dalam produk digital Anda.',
          'Ukur Net Promoter Score (NPS) secara berkala untuk memantau kekuatan daya tahan loyalitas konsumen.'
        ],
        difficulty: 'Mahir',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Fitur Kolaborasi Produk: Single User vs Multi-User',
        context: 'Software manajemen tugas Anda saat ini hanya dipakai secara individual oleh freelancer.',
        dilemma: 'Bagaimana merancang ulang arsitektur produk untuk memicu Network Effects?',
        choices: [
          {
            id: 'c1',
            text: 'Tetap fokus pada single-user dan naikkan biaya langganan bulanan 50%.',
            consequence: 'Pengguna beralih ke aplikasi gratis lain karena tidak ada keterikatan ekosistem tim.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Produk single-user memiliki switching cost rendah dan rentan ditinggalkan.'
          },
          {
            id: 'c2',
            text: 'Ubah produk menjadi Workspace Kolaboratif di mana 1 user bisa mengundang seluruh departemen perusahaannya gratis.',
            consequence: 'Pengguna bertambah eksponensial di dalam korporat, switching cost melonjak, dan konversi ke paket berbayar naik 400%.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Kolaborasi antar-pengguna menciptakan parit pertahanan jaringan yang sangat sulit digantikan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-biz-2-2',
          question: 'Menurut Hukum Metcalfe, bagaimana pertumbuhan nilai suatu jaringan (Network Effect) jika jumlah penggunanya berlipat ganda?',
          options: [
            'Nilainya tetap sama tanpa perubahan',
            'Nilainya bertumbuh secara kuadratik ($N^2$) seiring dengan melonjaknya kemungkinan interaksi antar-pengguna',
            'Nilainya justru berkurang karena server menjadi lambat',
            'Nilainya diatur oleh ketetapan harga kementerian'
          ],
          correctAnswerIndex: 1,
          explanation: 'Setiap anggota baru menambah koneksi potensial ke semua anggota yang sudah ada, menghasilkan pertumbuhan nilai eksponensial.'
        }
      ]
    }
  ],
  edges: [
    { id: 'be1', from: 'biz-1-1', to: 'biz-1-2', label: 'Likuiditas Nilai', domains: ['Bisnis', 'Keuangan'] },
    { id: 'be2', from: 'biz-1-2', to: 'biz-1-3', label: 'Evolusi Biaya', domains: ['Keuangan', 'Bisnis'] },
    { id: 'be3', from: 'biz-1-3', to: 'biz-2-1', label: 'Efisiensi Kas', domains: ['Bisnis', 'Keuangan'] },
    { id: 'be4', from: 'biz-2-1', to: 'biz-2-2', label: 'Daya Tahan Parit', domains: ['Bisnis', 'Data & Analitik'] },
  ]
};

// ==============================================================================
// 3. DOMAIN: PSIKOLOGI PERILAKU & KEPUTUSAN (BEHAVIORAL ECONOMICS)
// ==============================================================================
export const BEHAVIORAL_PSYCHOLOGY_CURRICULUM: MindmapData = {
  id: 'curriculum-psikologi-perilaku',
  topic: 'Psikologi Perilaku & Arsitektur Keputusan',
  rootId: 'psy-1-1',
  description: 'Membongkar bias bawah sadar, ilusi persepsi harga, bukti sosial, dan pemicu dopamin dalam pengambilan keputusan manusia.',
  nodes: [
    // --------------------------------------------------------------------------
    // TAHAP 1: Bias Kognitif dalam Keuangan & Bisnis
    // --------------------------------------------------------------------------
    {
      id: 'psy-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'TAHAP 1: Bias Kognitif dalam Keuangan & Bisnis',
      label: 'Loss Aversion: Takut Rugi Membunuh Peluang',
      domain: 'Psikologi',
      summary: 'Mengapa kepedihan kehilangan Rp 1 juta terasa 2x lipat lebih menusuk dibanding kenikmatan memperoleh Rp 1 juta.',
      x: 180,
      y: 140,
      level: 0,
      microContent: {
        analogy: 'Di alam liar purba, nenek moyang yang kehilangan cadangan makanan di gua berisiko mati kelaparan; sementara yang melewatkan surplus mangsa tambahan hanya tetap hidup seperti biasa. Otak kita dirancang secara evolusioner untuk memprioritaskan pencegahan kehilangan di atas segalanya.',
        crossDisciplinary: {
          connectionText: 'Psikologi Evolusioner x Strategi Copywriting',
          domains: ['Psikologi', 'Komunikasi'],
          insight: 'Menunjukkan kepada pelanggan berapa uang yang bocor dari kantong mereka setiap hari mengonversi 3x lebih tinggi daripada menjanjikan potensi laba di masa depan.',
        },
        caseStudy: {
          companyOrFigure: 'Eksperimen Mug Daniel Kahneman (Nobel Prize)',
          story: 'Kahneman memberi mug gratis ke separuh mahasiswa di kelas, lalu meminta mereka menjualnya. Pemilik mug menolak menjual di bawah $7.12, sementara pembeli hanya mau menawar $2.87. Begitu sesuatu menjadi milik kita, otak menilai barang itu 2.5x lebih berharga.',
          takeaway: 'Beri kepemilikan semu (free trial 30 hari) agar calon pelanggan merasa rugi jika tidak melanjutkan langganan.'
        },
        actionableSteps: [
          'Ubah framing penawaran Anda dari Menambah Keuntungan menjadi Menghentikan Kebocoran Kas.',
          'Gunakan garansi 100% uang kembali (Risk Reversal) untuk menetralkan rasa takut rugi pembeli.',
          'Hitung Cost of Inaction: tunjukkan konsekuensi biaya riil jika calon klien menunda mengambil keputusan.'
        ],
        difficulty: 'Pemula',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Portofolio Saham Merugi: Cut Loss atau Tahan Terus?',
        context: 'Saham spekulatif yang Anda beli turun 35% karena fundamental bisnisnya hancur.',
        dilemma: 'Tindakan rasional apa yang harus diambil?',
        choices: [
          {
            id: 'c1',
            text: 'Tahan terus dan tolak menjual karena tidak mau mengakui kerugian di buku catatan (Disposition Effect).',
            consequence: 'Perusahaan tersebut akhirnya pailit, saham di-suspend bursa, dan kerugian menjadi 100% total.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Loss aversion membuat orang menahan aset busuk demi menghindari rasa sakit mengakui kesalahan.'
          },
          {
            id: 'c2',
            text: 'Disiplin Cut Loss: Akui kesalahan analisa, selamatkan 65% modal sisa, dan alihkan ke saham berfundamental prima.',
            consequence: 'Modal sisa bertumbuh kembali di perusahaan sehat dan psikologis Anda bebas dari beban penyesalan.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Memotong kerugian sejak dini adalah syarat mutlak bertahan hidup di pasar finansial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-psy-1-1',
          question: 'Menurut temuan Daniel Kahneman dan Amos Tversky dalam Prospect Theory, berapa kali lipat bobot rasa sakit emosional akibat kerugian dibanding kebahagiaan atas keuntungan dengan nilai yang sama?',
          options: [
            'Sama persis (1 : 1)',
            'Sekitar 2.0 hingga 2.5 kali lipat lebih menyakitkan',
            '100 kali lipat',
            'Manusia tidak peduli pada kerugian'
          ],
          correctAnswerIndex: 1,
          explanation: 'Rasio asimetris rasa sakit kehilangan vs nikmat keuntungan terbukti secara konsisten di kisaran 2 hingga 2.5 kali lipat.'
        }
      ]
    },
    {
      id: 'psy-1-2',
      prerequisiteId: 'psy-1-1',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'TAHAP 1: Bias Kognitif dalam Keuangan & Bisnis',
      label: 'Anchoring Effect dalam Pricing Strategy',
      domain: 'Psikologi',
      summary: 'Bagaimana angka pertama yang dilihat pikiran menjadi jangkar tak sadar yang membatasi penilaian berikutnya.',
      x: 180,
      y: 290,
      level: 1,
      microContent: {
        analogy: 'Ketika nakhoda kapal melempar jangkar besi ke dasar laut, kapal hanya bisa berayun dalam batas tali jangkar tersebut. Demikian pula pikiran kita: angka pertama yang diucapkan dalam rapat atau terpampang di etalase mengikat seluruh spektrum persepsi harga kita.',
        crossDisciplinary: {
          connectionText: 'Psikologi Persepsi x Taktik Negosiasi B2B',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Pihak yang pertama kali melempar angka jangkar dengan argumen logis memenangkan 70% selisih kesepakatan akhir negosiasi.',
        },
        caseStudy: {
          companyOrFigure: 'Steve Jobs dan Angka $999 (Peluncuran iPad)',
          story: 'Di atas panggung peluncuran iPad 2010, Jobs menampilkan tulisan raksasa "$999" dan membahas mengapa banyak analis mengira harga itu wajar. Beberapa menit kemudian, ia mencoret angka $999 dan menampilkan harga riil: "$499". Seketika iPad terasa sangat murah.',
          takeaway: 'Tetapkan ekspektasi jangkar tinggi terlebih dahulu sebelum menyajikan harga aktual Anda.'
        },
        actionableSteps: [
          'Pajang paket Enterprise termahal di sebelah kiri halaman agar paket Standard terlihat sangat terjangkau.',
          'Coret harga normal sebelum diskon dengan kontras visual yang jelas.',
          'Saat mengajukan proposal jasa, buka penawaran dengan paket terlengkap bernilai tertinggi.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Desain Daftar Menu Kafe Premium',
        context: 'Anda ingin memaksimalkan penjualan kopi spesial seharga Rp 45.000.',
        dilemma: 'Bagaimana menyusun tata letak harga menu?',
        choices: [
          {
            id: 'c1',
            text: 'Urutkan dari menu termurah es teh manis Rp 15.000 di bagian atas menu.',
            consequence: 'Pelanggan terpatok pada harga Rp 15.000 sehingga kopi Rp 45.000 terasa kemahalan.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Jangkar rendah membuat semua harga di bawahnya terlihat mahal.'
          },
          {
            id: 'c2',
            text: 'Taruh Kopi Luwak Eksklusif seharga Rp 150.000 di bagian paling atas halaman muka menu.',
            consequence: 'Kopi spesial Rp 45.000 terasa sangat ramah di kantong dan menjadi pilihan terpopuler.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Jangkar premium menaikkan ambang toleransi harga pelanggan secara instan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-psy-1-2',
          question: 'Bagaimana mekanisme kerja Anchoring Effect mempengaruhi keputusan pembeli di toko ritel?',
          options: [
            'Membuat pembeli menghafal semua angka di struk belanja',
            'Informasi angka awal (jangkar) secara tidak sadar dijadikan titik acuan absolut untuk menilai apakah harga berikutnya murah atau mahal',
            'Menghilangkan kemampuan berhitung pembeli',
            'Memaksa pembeli membayar dengan uang pas'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pikiran manusia menggunakan angka pertama yang dilihat sebagai tolok ukur perbandingan nilai berikutnya.'
        }
      ]
    },
    {
      id: 'psy-1-3',
      prerequisiteId: 'psy-1-2',
      stepNumber: 'Langkah 1.3',
      stageTitle: 'TAHAP 1: Bias Kognitif dalam Keuangan & Bisnis',
      label: 'Social Proof & Herd Mentality di Pasar',
      domain: 'Psikologi',
      summary: 'Mengapa manusia cenderung mengikuti kerumunan massa saat ragu, memicu euforia gelembung dan kepanikan pasar.',
      x: 180,
      y: 440,
      level: 1,
      microContent: {
        analogy: 'Ketika Anda berada di stasiun asing yang penuh kabut asap dan melihat 500 orang tiba-tiba berlari kencang menuju pintu timur. Tanpa sempat bertanya ada apa, kaki Anda secara naluriah ikut berlari bersama mereka: kawanan sosial adalah mekanisme pertahanan hidup purba manusia.',
        crossDisciplinary: {
          connectionText: 'Psikologi Massa x Siklus Gelembung Ekonomi (Bubble)',
          domains: ['Psikologi', 'Ekonomi'],
          insight: 'Gelembung pasar (seperti Tulip Mania 1637 atau Bubble Dotcom 2000) selalu dipicu oleh kepanikan takut tertinggal (FOMO) melihat orang lain mendadak kaya.',
        },
        caseStudy: {
          companyOrFigure: 'Robert Cialdini (Influence: The Psychology of Persuasion)',
          story: 'Meneliti mengapa hotel yang memasang tanda: "75% tamu di kamar ini menggunakan kembali handuk mereka" meningkatkan kepatuhan daur ulang jauh lebih tinggi daripada tanda "Lindungi Lingkungan Hidup".',
          takeaway: 'Tunjukkan bukti nyata bahwa orang-orang yang serupa dengan mereka telah mengambil tindakan tersebut.'
        },
        actionableSteps: [
          'Sematkan ulasan bintang lima dan logo klien ternama di bagian muka website Anda.',
          'Gunakan angka agregat: "Bergabung bersama 40.000+ eksekutif yang telah berlangganan."',
          'Disiplin diri saat di pasar modal: jangan membeli saham hanya karena semua orang di grup WhatsApp sedang membicarakannya.'
        ],
        difficulty: 'Menengah',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Gelembung Koin Spekulatif Viral',
        context: 'Sebuah koin kripto baru naik 500% dalam 3 hari dan semua teman kantor Anda pamer keuntungan di media sosial.',
        dilemma: 'Apakah Anda ikut memasukkan uang tabungan Anda ke koin tersebut?',
        choices: [
          {
            id: 'c1',
            text: 'Ikut memborong di puncak harga karena takut menjadi satu-satunya orang yang tertinggal (FOMO).',
            consequence: 'Dua hari kemudian bandar melakukan dump, harga anjlok 90% dan uang tabungan Anda amblas.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Membeli di puncak euforia kawanan massa (Herd Mentality) adalah jaminan menjadi korban terakhir likuidasi.'
          },
          {
            id: 'c2',
            text: 'Tahan godaan, patuhi rencana alokasi aset awal, dan investasikan hanya pada aset yang Anda pahami nilai fundamentalnya.',
            consequence: 'Selamat dari kejatuhan gelembung, modal terlindungi, dan mental tetap tenang.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Kemandirian berpikir melawan arus kerumunan massa (Contrarian Thinking) adalah kunci ketahanan portofolio.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-psy-1-3',
          question: 'Apa bahaya terbesar dari Herd Mentality (mentalitas kawanan) bagi seorang investor di pasar modal?',
          options: [
            'Bursa efek akan ditutup selamanya',
            'Mendorong investor membeli aset di harga puncak akibat FOMO dan menjual di dasar jurang akibat kepanikan massal',
            'Membuat seluruh komputer bursa rusak',
            'Pemerintah menyita dividen saham'
          ],
          correctAnswerIndex: 1,
          explanation: 'Herd mentality memicu pembelian di puncak euforia dan penjualan massal saat kepanikan mencapai titik terendah.'
        }
      ]
    }
  ],
  edges: [
    { id: 'pe1', from: 'psy-1-1', to: 'psy-1-2', label: 'Jalan Pintas Pikiran', domains: ['Psikologi', 'Bisnis'] },
    { id: 'pe2', from: 'psy-1-2', to: 'psy-1-3', label: 'Tekanan Kawanan', domains: ['Psikologi', 'Ekonomi'] },
  ]
};

// ==============================================================================
// REGISTRY KURIKULUM BERJENJANG TERSTRUKTUR
// ==============================================================================
export const STRUCTURED_CURRICULA: Record<string, MindmapData> = {
  // Domain Investasi & Keuangan
  'investasi': INVESTING_FUNDAMENTALS_CURRICULUM,
  'keuangan': INVESTING_FUNDAMENTALS_CURRICULUM,
  'dasar investasi': INVESTING_FUNDAMENTALS_CURRICULUM,
  'dasar-dasar investasi & keuangan': INVESTING_FUNDAMENTALS_CURRICULUM,
  'ekonomi & keuangan': INVESTING_FUNDAMENTALS_CURRICULUM,
  'inflasi': INVESTING_FUNDAMENTALS_CURRICULUM,

  // Domain Bisnis & Strategi
  'bisnis': BUSINESS_ENTERPRISE_CURRICULUM,
  'strategi': BUSINESS_ENTERPRISE_CURRICULUM,
  'strategi bisnis & ekonomi perusahaan': BUSINESS_ENTERPRISE_CURRICULUM,
  'bisnis & strategi': BUSINESS_ENTERPRISE_CURRICULUM,
  'valuasi': BUSINESS_ENTERPRISE_CURRICULUM,
  'spacex': BUSINESS_ENTERPRISE_CURRICULUM,

  // Domain Psikologi Perilaku
  'psikologi': BEHAVIORAL_PSYCHOLOGY_CURRICULUM,
  'psikologi perilaku': BEHAVIORAL_PSYCHOLOGY_CURRICULUM,
  'psikologi perilaku & arsitektur keputusan': BEHAVIORAL_PSYCHOLOGY_CURRICULUM,
  'bias kognitif': BEHAVIORAL_PSYCHOLOGY_CURRICULUM,
};

export function getCurriculumForQuery(query: string): MindmapData | null {
  const normalized = query.trim().toLowerCase();
  
  // 1. Direct match
  if (STRUCTURED_CURRICULA[normalized]) {
    return JSON.parse(JSON.stringify(STRUCTURED_CURRICULA[normalized]));
  }

  // 2. Keyword match
  if (normalized.includes('invest') || normalized.includes('keuangan') || normalized.includes('inflasi') || normalized.includes('compounding') || normalized.includes('dividen') || normalized.includes('aset') || normalized.includes('uang')) {
    return JSON.parse(JSON.stringify(INVESTING_FUNDAMENTALS_CURRICULUM));
  }

  if (normalized.includes('bisnis') || normalized.includes('saham') || normalized.includes('valuasi') || normalized.includes('cogs') || normalized.includes('spacex') || normalized.includes('moat') || normalized.includes('perusahaan')) {
    return JSON.parse(JSON.stringify(BUSINESS_ENTERPRISE_CURRICULUM));
  }

  if (normalized.includes('psikologi') || normalized.includes('bias') || normalized.includes('loss aversion') || normalized.includes('anchoring') || normalized.includes('proof') || normalized.includes('perilaku')) {
    return JSON.parse(JSON.stringify(BEHAVIORAL_PSYCHOLOGY_CURRICULUM));
  }

  return null;
}
