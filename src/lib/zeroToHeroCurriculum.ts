// ==============================================================================
// NODUS — ZERO-TO-HERO: PANDUAN DARI NOL MENJADI BUSINESS OWNER
// ==============================================================================

import { MindmapData } from '../types';

export const ZERO_TO_HERO_OWNER_CURRICULUM: MindmapData = {
  id: 'curriculum-zero-to-hero-owner',
  topic: 'Zero-to-Hero: Dari Nol Menjadi Business Owner',
  rootId: 'zhero-0-1',
  description: 'Kurikulum panduan langkah demi langkah paling membumi: Dari membentuk mentalitas pemilik (Owner Mindset), mendirikan PT/CV sendiri di OSS, maklon pabrik tanpa modal beli mesin, negosiasi MOQ, hingga tembus ke rak supermarket.',
  nodes: [
    // --------------------------------------------------------------------------
    // TAHAP 0: THE ABSOLUTE ZERO (FONDASI & MENTALITAS PEMILIK)
    // --------------------------------------------------------------------------
    {
      id: 'zhero-0-1',
      stepNumber: 'Langkah 0.1',
      stageTitle: 'LEVEL 0: The Absolute Zero (Mentalitas Pemilik)',
      label: 'Owner Mindset vs Employee Trap',
      domain: 'Bisnis',
      summary: 'Mengapa menukar waktu dengan uang memiliki batas fisik absolut, dan bagaimana mengubah cara pandang dari pekerja bayaran menjadi perancang sistem berdaya ungkit (*Leverage*).',
      x: 180,
      y: 120,
      level: 0,
      microContent: {
        mentalModel: 'Permissionless Leverage & Equity Ownership (Naval Ravikant)',
        analogy: 'Bekerja demi gaji bulanan bagaikan menimba air sumur dengan ember: sebanyak apa pun air yang Anda angkat hari ini, jika besok Anda sakit atau tangan Anda lelah, aliran air seketika terhenti menjadi nol. Seorang pemilik bisnis (Owner) menghabiskan waktu luangnya bukan untuk menimba ember lebih cepat, melainkan merancang pipa paralon otomatis. Begitu pipa terpasang dari mata air ke bak penampungan, air terus mengalir deras bahkan saat sang pemilik sedang terlelap tidur.',
        academicInsight: 'Robert Kiyosaki (Cashflow Quadrant) dan Naval Ravikant merumuskan bahwa kekayaan sejati tidak pernah diciptakan secara linear ($Penghasilan = Jam \\times Tarif$). Manusia hanya memiliki 24 jam sehari. Untuk membangun kekayaan yang lepas dari batasan fisik, Anda harus memiliki ekuitas (Equity) pada sistem yang memanfaatkan 4 tuas leverage: Modal, Tenaga Kerja, Kode/Software, dan Media. Dimulai dengan menyadari bahwa Anda berhak menjadi arsitek sistem, bukan sekadar roda gigi mekanis di sistem orang lain.',
        crossDisciplinary: {
          connectionText: 'Psikologi Identitas Diri x Keuangan Ekuitas',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Identity Shift: Langkah tersulit menjadi pengusaha bukanlah menghafal istilah akuntansi, melainkan melepaskan ketergantungan psikologis pada ilusi rasa aman slip gaji bulanan.',
        },
        caseStudy: {
          companyOrFigure: 'Transformasi Pekerja Pabrik Menjadi Pemilik Merek (Indomie & FMCG Lokal)',
          story: 'Banyak pengusaha sukses Indonesia mengawali karier sebagai staf sales atau teknisi mesin. Mereka tidak langsung resign sembrono; di malam hari setelah jam kerja, mereka mempelajari formula bahan, rantai distribusi, dan margin keuntungan produk tempat mereka bekerja. Begitu memahami celah inefisiensi pasar, mereka merilis merek sendiri dengan sistem maklon pabrik.',
          takeaway: 'Jangan hanya bekerja untuk menghasilkan uang di tempat kerja Anda; bekerjalah untuk menyerap cara kerja sistem bisnisnya.'
        },
        actionableSteps: [
          'Audit alokasi waktu mingguan: sisihkan minimal 10 jam per minggu di luar jam kerja murni untuk merancang ide dan validasi bisnis Anda.',
          'Ubah orientasi finansial: alokasikan 20% gaji bulanan Anda ke dalam "Pos Modal Eksperimen Bisnis" yang siap diuji.',
          'Tuliskan satu keahlian unik atau pengetahuan mendalam yang Anda miliki saat ini yang belum dipahami oleh 90% orang awam.'
        ],
        difficulty: 'Pemula',
        readTime: '3 min'
      },
      decisionScenario: {
        title: 'Dilema Awal Transisi: Kenaikan Gaji Lembur vs Membangun Bisnis Sampingan',
        context: 'Perusahaan tempat Anda bekerja menawarkan proyek lembur akhir pekan dengan tambahan gaji Rp 4 juta per bulan (menyita 16 jam tiap Sabtu-Minggu). Di sisi lain, Anda baru saja menemukan ide produk cemilan sehat lokal dengan margin 45%.',
        dilemma: 'Bagaimana mengalokasikan waktu dan energi Anda untuk 1 tahun ke depan?',
        choices: [
          {
            id: 'c1',
            text: 'Tolak lembur akhir pekan, gunakan 16 jam tersebut untuk memvalidasi resep cemilan, riset kemasan, dan menguji penjualan ke 30 rekan kerja.',
            consequence: 'Dalam 6 bulan produk Anda terbukti laku, menghasilkan omzet Rp 15 juta per bulan dengan sistem yang mulai otomatis.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Menginvestasikan waktu pada kepemilikan aset ekuitas sendiri menghasilkan pengembalian majemuk (compounding) yang mengalahkan gaji lembur linear.'
          },
          {
            id: 'c2',
            text: 'Ambil lembur akhir pekan penuh dan habiskan uang Rp 4 juta tersebut untuk mencicil gadget baru.',
            consequence: 'Tubuh Anda kelelahan kronis, waktu untuk membangun bisnis habis, dan Anda tetap terperangkap di posisi pekerja selamanya.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Menukar seluruh waktu luang demi konsumsi gaya hidup memperdalam jebakan ketergantungan gaji.'
          },
          {
            id: 'c3',
            text: 'Langsung keluar kerja (resign) besok pagi tanpa tabungan darurat dan tanpa menguji apakah produk cemilan laku.',
            consequence: 'Tabungan habis dalam 2 bulan, panik karena tidak ada uang sewa rumah, terpaksa melamar kerja kembali di posisi yang lebih rendah.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Resign nekat tanpa validasi pasar dan bantalan kas darurat adalah kecerobohan emosional.'
          },
          {
            id: 'c4',
            text: 'Beli franchise mahal Rp 80 juta menggunakan pinjaman online bunga tinggi.',
            consequence: 'Franchise sepi pembeli, Anda terjerat utang bunga harian dan bangkrut.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Menggunakan utang berbunga predator untuk bisnis pemula yang belum teruji adalah bunuh diri finansial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-0-1',
          question: 'Menurut konsep "Permissionless Leverage" (Naval Ravikant), tuas manakah yang memungkinkan seorang pemula membangun bisnis berskala besar tanpa perlu meminta izin investor atau modal miliaran?',
          options: [
            'Produk media digital dan kode/software (karena biaya distribusi tambahannya mendekati nol rupiah).',
            'Izin khusus dari kementerian perdagangan luar negeri.',
            'Surat rekomendasi dari bank swasta nasional.',
            'Pinjaman jaminan sertifikat tanah keluarga.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Media dan Software adalah bentuk leverage tanpa izin (permissionless); Anda bisa membuat konten atau sistem online malam ini juga dengan laptop dan koneksi internet.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 0.2: VALIDASI MASALAH & PELUANG
    // --------------------------------------------------------------------------
    {
      id: 'zhero-0-2',
      stepNumber: 'Langkah 0.2',
      stageTitle: 'LEVEL 0: The Absolute Zero (Mentalitas Pemilik)',
      label: 'Validasi Masalah & Minimum Viable Offer',
      domain: 'Bisnis',
      summary: 'Cara menemukan masalah nyata di sekitar yang orang rela bayar untuk diselesaikan, merancang penawaran Minimum Viable Offer (MVO) tanpa modal besar.',
      x: 180,
      y: 270,
      level: 1,
      prerequisiteId: 'zhero-0-1',
      microContent: {
        mentalModel: 'Painkiller vs Vitamin & Minimum Viable Offer (Eric Ries)',
        analogy: 'Jangan menjual obat vitamin jika orang di sekitar Anda sedang menderita sakit gigi hebat. Vitamin itu "bagus untuk dimiliki" (*Nice-to-have*), namun obat pereda sakit gigi (*Painkiller*) adalah kebutuhan darurat yang dicari di tengah malam tanpa tawar-menawar harga. Bisnis terbaik bukanlah ide yang Anda anggap keren di lamunan kamar mandi, melainkan solusi nyata yang mematikan rasa sakit akut yang dialami sekelompok orang tertentu hari ini.',
        academicInsight: 'Buku The Lean Startup (Eric Ries) dan The Mom Test (Rob Fitzpatrick) membuktikan bahwa 90% bisnis baru gagal bukan karena produknya jelek, melainkan karena membangun sesuatu yang tidak diinginkan siapa pun (*Building nobody wants*). Minimum Viable Offer (MVO) adalah bentuk penawaran paling sederhana yang berfokus langsung pada solusi masalah inti, tanpa embel-embel kemasan mewah atau kantor megah terlebih dahulu.',
        crossDisciplinary: {
          connectionText: 'Empati Psikologis Konsumen x Riset Pasar Taktis',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'The Mom Test Rule: Jangan pernah bertanya "Apakah Anda suka ide bisnis saya?" karena orang akan berbohong demi bersikap sopan. Tanyakan: "Berapa banyak uang dan waktu yang sudah Anda habiskan bulan lalu untuk mengatasi masalah ini?".',
        },
        caseStudy: {
          companyOrFigure: 'Awal Mula Dropbox (Demo Video Tanpa Menulis Kode Rumit)',
          story: 'Drew Houston tidak membangun infrastruktur cloud server jutaan dolar terlebih dahulu untuk Dropbox. Ia hanya membuat video animasi sederhana berdurasi 3 menit yang memperlihatkan bagaimana file otomatis tersinkronisasi antar-komputer. Video itu viral dan menghasilkan 75.000 email pendaftar daftar tunggu dalam satu malam. Permintaan pasar tervalidasi 100% sebelum ia menghabiskan modal besar.',
          takeaway: 'Validasi permintaan pasar terlebih dahulu dengan bukti komitmen nyata, baru bangun produknya kemudian.'
        },
        actionableSteps: [
          'Wawancarai 10 calon pelanggan potensial: fokus tanyakan masalah terbesar mereka dalam pekerjaan atau kehidupan sehari-hari.',
          'Rumuskan penawaran dalam 1 kalimat: "Saya membantu [Target Konsumen] mencapai [Hasil Spesifik] dalam [Waktu Singkat] tanpa [Rasa Sakit Terbesar]".',
          'Uji coba penawaran secara manual (Concierge MVP) sebelum menyewa tempat atau membeli alat produksi massal.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Validasi Produk: Sewa Ruko Rp 50 Juta vs Pengujian Pre-Order',
        context: 'Anda memiliki resep sambal kemasan unik warisan keluarga. Tabungan Anda hanya tersisa Rp 20 juta. Seorang teman menyarankan meminjam Rp 50 juta untuk menyewa ruko kios di pinggir jalan raya.',
        dilemma: 'Bagaimana metode pengujian pasar paling hemat risiko yang harus dilakukan?',
        choices: [
          {
            id: 'c1',
            text: 'Buat 50 toples sampel sambal di dapur rumah sendiri dengan modal Rp 500 ribu, pasang foto memikat di media sosial, dan uji sistem pre-order ke komunitas lokal.',
            consequence: 'Dalam 3 hari 50 toples habis terjual, Anda mendapat ulasan rasa konkret, dan modal awal balik 2x lipat tanpa beban sewa ruko.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Metode Lean MVP menguji daya beli nyata konsumen dengan risiko modal mendekati nol rupiah.'
          },
          {
            id: 'c2',
            text: 'Langsung pinjam Rp 50 juta, sewa ruko 1 tahun, dan beli plang neon box besar sebelum ada 1 orang pun yang mencicipi sambal Anda.',
            consequence: 'Ruko sepi pengunjung, sambal basi di etalase, Anda terbebani cicilan utang bulanan yang mencekik.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menghabiskan modal pada aset tetap sebelum validasi produk adalah kesalahan pemula paling umum.'
          },
          {
            id: 'c3',
            text: 'Bagikan 1.000 toples gratis kepada tetangga tanpa meminta kontak atau komitmen pembelian ulang.',
            consequence: 'Modal Rp 10 juta habis cuma-cuma; orang mengambil barang gratisan bukan berarti mereka bersedia membayar uang asli nanti.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Barang gratis tidak memvalidasi kesediaan membayar (willingness to pay).'
          },
          {
            id: 'c4',
            text: 'Tunda jualan selama 2 tahun untuk mendesain logo sambal yang sempurna.',
            consequence: 'Momentum hilang dan ide Anda keduluan kompetitor lain.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Perfeksionisme tanpa aksi adalah bentuk penundaan ketakutan menghadapi penolakan pasar.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-0-2',
          question: 'Menurut buku The Mom Test (Rob Fitzpatrick), pertanyaan manakah yang paling valid untuk menguji kelayakan ide bisnis baru?',
          options: [
            '"Apakah Anda merasa ide bisnis saya ini bagus dan keren?"',
            '"Kapan terakhir kali Anda mengalami masalah ini, dan langkah/biaya apa yang sudah Anda keluarkan untuk mengatasinya?"',
            '"Berapa harga yang Anda inginkan jika saya membuatkan produk ini?"',
            '"Apakah Anda mau berinvestasi di perusahaan startup saya?"'
          ],
          correctAnswerIndex: 1,
          explanation: 'Fokus pada perilaku masa lalu yang nyata (uang dan waktu yang sudah dikeluarkan), bukan pada opini sopan atau janji hipotetis di masa depan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 0.3: PRESELLING & 10 PEMBELI PERTAMA
    // --------------------------------------------------------------------------
    {
      id: 'zhero-0-3',
      stepNumber: 'Langkah 0.3',
      stageTitle: 'LEVEL 0: The Absolute Zero (Mentalitas Pemilik)',
      label: 'Preselling & First 10 Paying Customers',
      domain: 'Bisnis',
      summary: 'Seni mendapatkan 10 pelanggan pertama yang membayar di muka (Preselling) untuk mendanai produksi pertama dari uang konsumen, bukan kantong pribadi.',
      x: 180,
      y: 420,
      level: 1,
      prerequisiteId: 'zhero-0-2',
      microContent: {
        mentalModel: 'Customer-Funded Business Model (John Mullins)',
        analogy: 'Jika Anda ingin membangun kapal penyeberangan antarpulau, cara terburuk adalah menebang hutan, membeli kayu dengan utang, lalu berharap ada penumpang yang datang. Cara terbaik adalah membuka loket tiket di dermaga: tawarkan diskon 30% bagi 20 penumpang pertama yang membeli tiket perjalanan perdana bulan depan. Uang penjualan tiket di muka itulah yang Anda gunakan untuk menyewa kapal dan bahan bakar. Anda memulai bisnis menggunakan uang pelanggan, bukan modal pribadi!',
        academicInsight: 'Buku The Customer-Funded Business (John Mullins - London Business School) memetakan 5 model pendanaan pelanggan: (1) Matchmaker, (2) Pay-in-Advance / Preselling, (3) Subscription, (4) Scarcity, dan (5) Service-to-Product. Mendapatkan 10 pembeli pertama yang rela membayar uang riil membuktikan adanya *Product-Market Fit* mikro. Uang di rekening bank adalah satu-satunya bentuk validasi yang jujur.',
        crossDisciplinary: {
          connectionText: 'Psikologi Komitmen Penjualan x Manajemen Arus Kas Bebas Utang',
          domains: ['Psikologi', 'Keuangan'],
          insight: 'Skin in the Game: Pujian calon pembeli bernilai nol rupiah. Namun saat mereka menyerahkan lembaran uang tunai atau mentransfer DP, mereka memiliki komitmen nyata yang menjadi modal operasional gratis bagi bisnis Anda.',
        },
        caseStudy: {
          companyOrFigure: 'Michael Dell Memulai Komputer Dell dari Kamar Asrama (1984)',
          story: 'Michael Dell tidak memiliki pabrik rakitan komputer saat mahasiswa. Ia memasang iklan penawaran komputer rakitan custom di majalah lokal. Pembeli membayar lunas di depan. Dengan uang kas pembeli tersebut, Dell baru membeli suku cadang ke toko grosir, merakitnya di kamar asrama pada malam hari, dan mengirimkannya. Dell bertumbuh menjadi raksasa bernilai puluhan miliar dolar tanpa modal ventura awal.',
          takeaway: 'Jual sebelum memproduksi; gunakan kas pembayaran pelanggan sebagai bahan bakar modal kerja Anda.'
        },
        actionableSteps: [
          'Buat penawaran Preselling dengan insentif eksklusif: diskon harga perdana + bonus personal bagi 10 orang pembeli pertama.',
          'Lakukan penawaran langsung (Direct Outreach) lewat pesan pribadi kepada 30 prospek hangat di jaringan kontak Anda.',
          'Gunakan kas dari 10 pembeli pertama untuk membiayai batch produksi perdana secara tunai tanpa utang.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Batch Produksi Pertama: Menunggu Tabungan Rp 10 Juta vs Preselling',
        context: 'Anda ingin memproduksi 100 potong kaos dengan desain sablon tipografi eksklusif. Biaya vendor sablon menuntut modal Rp 6 juta di depan. Tabungan Anda saat ini hanya Rp 1.5 juta.',
        dilemma: 'Langkah penggalangan modal produksi apa yang paling cerdas dan aman?',
        choices: [
          {
            id: 'c1',
            text: 'Bikin mockup desain 3D yang realistis, buka preselling terbatas 50 potong dengan harga khusus Rp 120.000 (diskon dari Rp 160.000) dengan tanggal kirim transparan 14 hari.',
            consequence: 'Dalam 4 hari terjual 50 potong, terkumpul kas segar Rp 6 juta di muka; Anda membayar vendor sablon tanpa utang dan masih memegang sisa laba.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Strategi preselling customer-funded mendanai biaya produksi dari arus kas pembeli tanpa risiko stok mati di gudang.'
          },
          {
            id: 'c2',
            text: 'Gadaikan BPKB motor orang tua untuk meminjam Rp 6 juta demi memproduksi kaos tanpa ada pesanan masuk sama sekali.',
            consequence: 'Desain ternyata kurang diminati pasar, kaos menumpuk di kamar tidur, motor terancam disita penagih.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Menggadaikan aset kebutuhan hidup demi spekulasi stok barang yang belum terbukti laku adalah kesalahan fatal.'
          },
          {
            id: 'c3',
            text: 'Tunggu 18 bulan ke depan sampai tabungan dari sisa gaji terkumpul Rp 6 juta.',
            consequence: 'Tren desain sudah basi saat Anda baru mulai berproduksi, momentum pasar hilang.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Menunda eksekusi terlalu lama mematikan kepekaan terhadap tren pasar.'
          },
          {
            id: 'c4',
            text: 'Minta-minta sumbangan donasi di jalanan dengan kotak kardus.',
            consequence: 'Menghancurkan kredibilitas pribadi dan bisnis Anda di mata publik.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Bisnis adalah pertukaran nilai komersial yang bermartabat, bukan belas kasihan sosial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-0-3',
          question: 'Apa keunggulan terbesar dari model bisnis yang didanai pelanggan (Customer-Funded Model / Preselling) bagi pengusaha pemula?',
          options: [
            'Menghilangkan risiko inventori mati dan tidak memerlukan modal utang luar, karena biaya produksi ditanggung langsung oleh kas pembayaran pembeli di muka.',
            'Membebaskan produk dari kewajiban pengiriman tepat waktu.',
            'Membuat produk otomatis tidak perlu mematuhi standar kualitas.',
            'Menghapus kewajiban pembayaran pajak seumur hidup.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Preselling mengeliminasi risiko terbesar bisnis pemula: memproduksi barang yang tidak laku dan kehabisan kas operasional.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 1: LEGALITAS DARI NOL (MENDIRIKAN BADAN USAHA SAH)
    // --------------------------------------------------------------------------
    {
      id: 'zhero-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'LEVEL 1: Legalitas dari Nol (Badan Usaha Sah)',
      label: 'Memilih Badan Usaha: PT Perorangan vs PT Biasa vs CV',
      domain: 'Hukum',
      summary: 'Panduan praktis memilih baju hukum usaha tanpa perlu kuliah hukum: perbedaan mendasar tanggung jawab terbatas PT vs tanggung jawab renteng CV.',
      x: 480,
      y: 120,
      level: 1,
      prerequisiteId: 'zhero-0-3',
      microContent: {
        mentalModel: 'Corporate Shield & Limited Liability (UU No. 40/2007 & UU Cipta Kerja)',
        analogy: 'Menjalankan bisnis tanpa badan usaha berbadan hukum bagaikan berlayar di samudra badai dengan mengikat perahu Anda langsung ke rumah tinggal keluarga Anda. Jika perahu Anda karam dan dituntut utang miliaran rupiah, rumah tinggal dan tabungan pribadi Anda ikut terseret tenggelam disita juru sita. Perseroan Terbatas (PT) bertindak seperti baju zirah pelindung: jika perahu karam, kerugian Anda dibatasi hanya sebesar modal yang disetor ke perahu tersebut, harta pribadi keluarga Anda tetap aman terlindungi di daratan.',
        academicInsight: 'Berdasarkan UU Cipta Kerja No. 11/2020 jo. PP No. 8/2021, kini pelaku usaha mikro dan kecil (UMK) dapat mendirikan PT Perorangan hanya dengan 1 orang pendiri tanpa akta notaris dan biaya PNBP murah (Rp 50.000). Sebaliknya, CV (Commanditaire Vennootschap) bukan badan hukum terpisah; sekutu aktif (Direktur CV) bertanggung jawab secara renteng hingga seluruh harta pribadi mereka untuk melunasi utang CV (Pasal 19 KUHD).',
        crossDisciplinary: {
          connectionText: 'Hukum Bisnis x Manajemen Risiko Finansial Keluarga',
          domains: ['Hukum', 'Keuangan'],
          insight: 'Asset Protection Ring-Fencing: Memilih PT sejak dini mengisolasi risiko tuntutan ganti rugi pelanggan atau gagal bayar vendor agar tidak menyentuh rumah, kendaraan, dan tabungan pendidikan anak pemilik bisnis.',
        },
        caseStudy: {
          companyOrFigure: 'Peralihan Usaha Kuliner Katering dari Perorangan ke PT Perorangan',
          story: 'Ibu Ratna memulai katering rumahan atas nama pribadi. Saat melayani pesanan 500 kotak untuk pesta pernikahan, terjadi keracunan massal akibat bahan dari pemasok telur. Keluarga pengantin menuntut ganti rugi Rp 400 juta. Karena belum berbadan hukum PT, rumah tinggal Ibu Ratna terancam disita pengadilan. Sejak kasus itu selesai lewat mediasi berat, ia segera mendaftarkan usahanya sebagai PT Perorangan resmi lewat Kemenkumham untuk membatasi tanggung jawab hukum.',
          takeaway: 'Jangan menunggu datangnya tuntutan hukum untuk memisahkan harta pribadi Anda dari risiko operasional bisnis.'
        },
        actionableSteps: [
          'Tentukan pilihan badan usaha: jika pendiri tunggal dengan modal di bawah Rp 1 miliar, pilih PT Perorangan; jika memiliki rekan kongsi modal, pilih PT Persekutuan Modal biasa.',
          'Siapkan KTP, NPWP pribadi, dan nama usaha yang terdiri dari minimal 3 kata berbahasa Indonesia yang belum pernah dipakai di AHU Kemenkumham.',
          'Daftarkan nama usaha secara online melalui portal resmi ahu.go.id tanpa calo mahal.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pemilihan Badan Usaha: PT Perorangan Modal Rp 50 Ribu vs CV Konvensional',
        context: 'Anda memiliki usaha toko perkakas teknik online dengan omzet Rp 40 juta/bulan. Rekan bisnis menyarankan membuat CV ke notaris dengan biaya Rp 5 juta karena merasa CV terdengar lebih familiar.',
        dilemma: 'Badan usaha apa yang paling aman secara hukum dan efisien bagi modal Anda?',
        choices: [
          {
            id: 'c1',
            text: 'Daftarkan PT Perorangan sendiri via portal AHU Online Kemenkumham dengan biaya resmi Rp 50.000; Anda mendapatkan status badan hukum sah dengan tanggung jawab terbatas.',
            consequence: 'Legalitas PT terbit dalam 15 menit, harta pribadi Anda terlindungi 100%, dan Anda menghemat Rp 4.950.000 untuk modal belanja inventori.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'PT Perorangan memberikan status badan hukum berstatus limited liability dengan biaya sangat murah dan proses instan tanpa notaris.'
          },
          {
            id: 'c2',
            text: 'Bayar calo Rp 7 juta untuk membuat CV yang membuat harta pribadi Anda tetap terancam tanggung jawab renteng.',
            consequence: 'Menghabiskan modal berharga untuk struktur badan usaha yang tidak memberikan perlindungan pemisahan harta pribadi.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'CV tidak memisahkan harta kekayaan pribadi sekutu aktif dari utang usaha.'
          },
          {
            id: 'c3',
            text: 'Tetap berjualan tanpa badan usaha sama sekali dan gunakan rekening bank tabungan pribadi selamanya.',
            consequence: 'Usaha sulit dipercaya oleh supplier distributor besar dan rentan tersandung masalah pajak pribadi yang kacau.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Ketiadaan badan usaha membatasi skala pertumbuhan dan kredibilitas bisnis.'
          },
          {
            id: 'c4',
            text: 'Palsukan dokumen akta notaris menggunakan aplikasi Photoshop.',
            consequence: 'Tindak pidana pemalsuan dokumen otentik (Pasal 263 KUHP) dengan ancaman penjara 6 tahun.',
            scoreBonus: -40,
            isOptimal: false,
            explanation: 'Pemalsuan dokumen hukum berujung pada sanksi pidana penjara mutlak.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-1-1',
          question: 'Apa perbedaan hukum paling fundamental antara Perseroan Terbatas (PT) dengan Persekutuan Komanditer (CV) jika usaha mengalami kebangkrutan utang?',
          options: [
            'Pada PT tanggung jawab pemegang saham terbatas hanya sebesar modal yang disetor (Limited Liability), sedangkan pada CV sekutu aktif bertanggung jawab secara renteng hingga seluruh harta pribadinya disita.',
            'Pada CV tidak boleh ada karyawan, sedangkan PT wajib punya minimal 1.000 karyawan.',
            'PT dilarang memiliki rekening bank atas nama badan usaha.',
            'CV selalu dibebaskan dari seluruh kewajiban membayar utang dagang.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Status badan hukum PT memisahkan kekayaan perseroan dari harta pribadi organ PT; sedangkan CV bukan badan hukum sehingga harta pribadi pengurusnya dapat disita pengadilan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 1.2: URUS NIB & IZIN USAHA VIA OSS RBA
    // --------------------------------------------------------------------------
    {
      id: 'zhero-1-2',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'LEVEL 1: Legalitas dari Nol (Badan Usaha Sah)',
      label: 'Urus NIB & Izin Usaha Kilat via OSS RBA',
      domain: 'Hukum',
      summary: 'Langkah taktis memilih kode KBLI 5-digit yang tepat, memproses Nomor Induk Berusaha (NIB) secara online, dan memahami perizinan berbasis risiko (PP No. 5/2021).',
      x: 480,
      y: 270,
      level: 2,
      prerequisiteId: 'zhero-1-1',
      microContent: {
        mentalModel: 'Risk-Based Licensing Framework (PP No. 5/2021 & OSS RBA)',
        analogy: 'Dulu di era lama, jika Anda ingin membuka usaha katering atau bengkel, Anda harus berkeliling ke belasan meja dinas: minta surat domisili RT/RW, urus SIUP di dinas perdagangan, urus TDP di dinas perizinan, dan bayar pungutan liar berbulan-bulan. Sistem OSS RBA (Online Single Submission) modern bekerja seperti mesin check-in otomatis di bandara: Anda cukup memindai KTP, memilih kode aktivitas bisnis Anda (KBLI), dan sistem otomatis menerbitkan pas boarding (NIB) yang berlaku sebagai identitas legal tunggal dalam hitungan menit.',
        academicInsight: 'Berdasarkan Peraturan Pemerintah No. 5/2021 tentang Penyelenggaraan Perizinan Berusaha Berbasis Risiko, kegiatan usaha diklasifikasikan ke dalam 4 tingkat risiko: (1) Risiko Rendah (Cukup NIB langsung operasional), (2) Risiko Menengah Rendah (NIB + Sertifikat Standar pernyataan mandiri), (3) Risiko Menengah Tinggi (NIB + Sertifikat Standar terverifikasi dinas), dan (4) Risiko Tinggi (NIB + Izin AMDAL/inspeksi khusus). Memilih kode KBLI 5-digit yang tepat adalah kunci menghindari penolakan sistem.',
        crossDisciplinary: {
          connectionText: 'Kepatuhan Regulasi Pemerintah x Akses Pembiayaan Perbankan',
          domains: ['Hukum', 'Keuangan'],
          insight: 'Bankable Identity: NIB bukan sekadar formalitas kertas izin, melainkan syarat mutlak agar badan usaha Anda bisa membuka rekening giro korporat dan mengakses fasilitas pinjaman Kredit Usaha Rakyat (KUR) berbunga rendah.',
        },
        caseStudy: {
          companyOrFigure: 'Produsen Minuman Herbal UMKM Tembus Pasar Ekspor dengan NIB',
          story: 'Pak Budi memproduksi jamu herbal di Sukoharjo. Selama bertahun-tahun ia hanya menjual jamu secara offline lokal karena tidak punya izin. Saat mengikuti program pendampingan, ia mendaftarkan usahanya di oss.go.id dengan KBLI 10799 (Industri Produk Makanan Lainnya). NIB terbit hari itu juga. Dengan NIB tersebut, ia berhasil mengurus sertifikat halal BPJPH dan izin edar BPOM, membuka jalan ekspor produknya ke toko kelontong Asia di Australia.',
          takeaway: 'Izin usaha resmi adalah pintu gerbang yang mengubah usaha rumahan informal menjadi entitas bisnis berskala internasional.'
        },
        actionableSteps: [
          'Buka situs resmi oss.go.id dan buat akun menggunakan NIK KTP serta alamat email aktif.',
          'Cari kode KBLI 5-digit yang paling presisi dengan aktivitas bisnis utama Anda (gunakan panduan kamus KBLI di portal OSS).',
          'Unduh dokumen NIB resmi ber-QR Code dari sistem OSS dan cetak sebagai dokumen legalitas utama operasional bisnis Anda.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pengurusan Izin Usaha: Menggunakan Jasa Calo Rp 3 Juta vs OSS Mandiri',
        context: 'Anda membutuhkan NIB untuk toko kue online Anda guna membuka rekening bank usaha. Seorang calo perizinan menawarkan jasa kilat seharga Rp 3.000.000 dengan janji selesai 3 hari.',
        dilemma: 'Langkah apa yang harus diambil untuk mengurus legalitas usaha ini?',
        choices: [
          {
            id: 'c1',
            text: 'Masuk sendiri ke portal resmi oss.go.id, ikuti panduan pendaftaran akun UMK mandiri secara gratis tanpa biaya apa pun (Rp 0).',
            consequence: 'Dalam 25 menit NIB ber-QR Code resmi terbit langsung ke email Anda; Anda menghemat Rp 3 juta dan memahami sistem izin usaha Anda sendiri.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Sistem OSS RBA pemerintah dirancang untuk dapat diakses secara mandiri dan 100% gratis untuk kategori Usaha Mikro dan Kecil (UMK).'
          },
          {
            id: 'c2',
            text: 'Bayar calo Rp 3 juta dan berikan data password akun email pribadi Anda tanpa pengawasan.',
            consequence: 'Calo mendaftarkan kode KBLI yang salah, data akun email Anda bocor, dan uang Rp 3 juta terbuang percuma.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menggunakan calo untuk sistem online yang gratis menimbulkan risiko kebocoran data dan salah klasifikasi KBLI.'
          },
          {
            id: 'c3',
            text: 'Gunakan izin usaha milik tetangga dan edit namanya menggunakan aplikasi pengedit gambar.',
            consequence: 'Terdeteksi saat verifikasi rekening bank, bank menolak dan melaporkan rekening Anda atas indikasi penipuan dokumen.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Memalsukan dokumen izin usaha adalah tindak pidana perbankan berat.'
          },
          {
            id: 'c4',
            text: 'Batalkan membuka toko kue karena menganggap semua izin usaha itu rumit dan tidak berguna.',
            consequence: 'Mimpi wirausaha kandas hanya karena rasa malas membaca panduan sistem yang sebenarnya sangat mudah.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Sikap mudah menyerah pada administrasi dasar menghambat potensi kesuksesan wirausaha.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-1-2',
          question: 'Untuk kategori usaha dengan Tingkat Risiko Rendah (Low Risk) pada sistem OSS RBA (PP No. 5/2021), dokumen apa yang berlaku sebagai izin tunggal operasional dan komersial?',
          options: [
            'Nomor Induk Berusaha (NIB) langsung berlaku sebagai legalitas tunggal tanpa memerlukan izin lanjutan dinas.',
            'Surat Rekomendasi Khusus dari Interpol.',
            'Sertifikat AMDAL tingkat provinsi yang ditandatangani gubernur.',
            'Izin gangguan (HO) dari seluruh tetangga radius 5 kilometer.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Bagi kegiatan usaha risiko rendah, NIB berfungsi sebagai legalitas operasional dan komersial tunggal yang langsung berlaku efektif sejak diterbitkan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 1.3: ADMINISTRASI PAJAK & REKENING KAS
    // --------------------------------------------------------------------------
    {
      id: 'zhero-1-3',
      stepNumber: 'Langkah 1.3',
      stageTitle: 'LEVEL 1: Legalitas dari Nol (Badan Usaha Sah)',
      label: 'Fondasi Pajak Usaha & Rekening Bank Anti-Campur',
      domain: 'Pajak',
      summary: 'Menerapkan tarif PPh Final 0.5% (PP No. 55/2022), membuka rekening bank resmi atas nama perusahaan, dan bahaya commingling of funds.',
      x: 480,
      y: 420,
      level: 2,
      prerequisiteId: 'zhero-1-2',
      microContent: {
        mentalModel: 'Separation of Financial Entities & PP No. 55/2022 Tax Incentive',
        analogy: 'Mencampur uang kas bisnis dengan rekening pribadi Anda bagaikan menyambungkan pipa tangki bensin mobil Anda langsung ke bak mandi rumah Anda. Awalnya Anda merasa praktis karena semuanya ada di satu tempat; namun saat terjadi percikan api atau kebocoran, seluruh rumah Anda ikut meledak terbakar. Begitu bisnis Anda beroperasi, Anda harus memperlakukan bisnis Anda sebagai entitas yang mandiri: ia memiliki rekening bank sendiri, dan Anda digaji secara profesional dari rekening tersebut.',
        academicInsight: 'Berdasarkan Peraturan Pemerintah No. 55/2022, wajib pajak badan (PT) dengan omzet bruto tidak melebihi Rp 4.8 miliar per tahun berhak menggunakan tarif PPh Final UMKM sebesar 0.5% dari peredaran bruto (selama 3-4 tahun pertama). Di sisi hukum korporasi, doktrin *Piercing the Corporate Veil* menegaskan: jika pemilik mencampuradukkan rekening pribadi dengan rekening perusahaan (*Commingling of Funds*), hakim berhak membatalkan perlindungan tanggung jawab terbatas PT dan menyita seluruh harta pribadi pemilik untuk melunasi utang usaha.',
        crossDisciplinary: {
          connectionText: 'Kepatuhan Pajak Badan x Disiplin Akuntansi Keuangan',
          domains: ['Pajak', 'Keuangan'],
          insight: 'Audit Readiness: Menjaga pemisahan rekening kas bank sejak transaksi hari pertama membuat pencatatan buku kas Anda bersih, memudahkan pembuatan SPT Tahunan Badan, dan mencegah sanksi denda pajak di masa depan.',
        },
        caseStudy: {
          companyOrFigure: 'Kasus Pemeriksaan Pajak UMKM Mode Busana di Bandung',
          story: 'Seorang pemilik butik online meraup omzet Rp 2 miliar per tahun menggunakan rekening tabungan BCA pribadi. Saat kantor pajak (KPP) melakukan pencocokan data rekening perbankan (Automatic Exchange of Information), seluruh aliran dana masuk dianggap sebagai penghasilan pribadi orang pribadi dengan tarif pajak progresif hingga 30% plus denda keterlambatan Rp 250 juta. Jika ia menggunakan badan usaha PT sejak awal dengan tarif PPh Final 0.5%, pajaknya hanya Rp 10 juta per tahun dan sah secara hukum.',
          takeaway: 'Gunakan rekening bank resmi atas nama perusahaan dan manfaatkan insentif PPh Final 0.5% untuk menghemat pajak secara legal.'
        },
        actionableSteps: [
          'Setelah NIB terbit, bawa Akta/Sertifikat Kemenkumham, NIB, dan NPWP PT ke bank untuk membuka rekening giro resmi atas nama perusahaan.',
          'Gunakan rekening perusahaan murni untuk seluruh transaksi jual-beli bisnis; tarik pendapatan pribadi Anda hanya dalam bentuk transfer gaji resmi atau dividen.',
          'Bayar PPh Final 0.5% setiap tanggal 15 bulan berikutnya atas total omzet bulanan menggunakan kode billing pajak (KAP 411128 KJS 420).'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Rekening Kas Usaha: Menggunakan Rekening Pribadi vs Rekening Giro PT',
        context: 'Pelanggan korporat memesan seragam senilai Rp 80 juta. Mereka meminta nomor rekening atas nama PT untuk pembayaran termin pertama. Anda belum sempat membuka rekening giro PT karena malas antre di bank.',
        dilemma: 'Langkah finansial dan operasional apa yang harus diambil?',
        choices: [
          {
            id: 'c1',
            text: 'Segera luangkan waktu hari ini ke kantor cabang bank terdekat membawa NIB dan berkas PT untuk membuka rekening giro perusahaan dalam 24 jam.',
            consequence: 'Rekening PT aktif, invoice resmi diterbitkan, klien korporat mentransfer dana Rp 80 juta dengan lancar tanpa kendala administrasi perpajakan.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Rekening atas nama badan usaha adalah prasyarat mutlak dalam transaksi komersial bernilai puluhan hingga ratusan juta rupiah.'
          },
          {
            id: 'c2',
            text: 'Paksa klien mentransfer dana Rp 80 juta ke rekening bank tabungan pribadi atas nama pasangan Anda.',
            consequence: 'Departemen keuangan klien menolak karena melanggar prosedur audit perusahaan (SOP Anti-Fraud), kontrak dibatalkan sepihak.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Klien korporat tidak akan pernah mentransfer dana proyek ke rekening pribadi perorangan.'
          },
          {
            id: 'c3',
            text: 'Gunakan rekening bank teman dan bayar komisi 5% kepada teman Anda.',
            consequence: 'Teman Anda membawa kabur uang Rp 80 juta tersebut dan Anda tidak bisa menuntut bank karena rekening tersebut sah milik orang lain.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Menitipkan kas usaha kepada pihak ketiga tanpa kontrak adalah kecerobohan fatal.'
          },
          {
            id: 'c4',
            text: 'Minta klien membayar menggunakan kartu hadiah voucher belanja supermarket.',
            consequence: 'Klien menganggap perusahaan Anda tidak profesional dan membatalkan pesanan.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Metode pembayaran tidak lazim merusak reputasi kredibilitas komersial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-1-3',
          question: 'Berapakah tarif Pajak Penghasilan (PPh) Final yang berlaku bagi pelaku Usaha Mikro, Kecil, dan Menengah (UMKM) berbentuk PT beromzet di bawah Rp 4.8 miliar per tahun berdasarkan PP No. 55/2022?',
          options: [
            '0.5% dari total peredaran bruto (omzet kotor bulanan).',
            '25% dari seluruh total modal disetor.',
            '10% dari gaji seluruh karyawan.',
            '0% selamanya tanpa batas waktu dan tanpa perlu lapor SPT.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Berdasarkan PP No. 55/2022, tarif PPh Final UMKM adalah 0.5% dari peredaran bruto bulanan yang sangat terjangkau bagi pelaku usaha rintisan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 2: EKSEKUSI PABRIK, RANTAI PASOK & DISTRIBUSI
    // --------------------------------------------------------------------------
    {
      id: 'zhero-2-1',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'LEVEL 2: Eksekusi Pabrik & Rantai Pasok',
      label: 'Mencari Supplier Utama & Maklon Pabrik (OEM/ODM)',
      domain: 'Bisnis',
      summary: 'Cara memiliki produk bermerek sendiri dengan standar pabrik bersertifikasi BPOM/ISO tanpa harus berutang miliaran rupiah membeli mesin industri sendiri.',
      x: 780,
      y: 120,
      level: 2,
      prerequisiteId: 'zhero-1-3',
      microContent: {
        mentalModel: 'Asset-Light Manufacturing & Contract Manufacturing (OEM vs ODM)',
        analogy: 'Apakah Apple memiliki pabrik peleburan aluminium dan lini perakitan sendiri untuk memproduksi iPhone? Tidak! Apple merancang desain sistem, chip prosesor, dan perangkat lunaknya di California, lalu menyerahkan seluruh proses produksi fisik kepada Foxconn (pabrik maklon manufaktur terbesar di dunia). Foxconn memiliki pabrik bernilai triliunan rupiah, sementara Apple memegang margin laba terbesar karena memegang merek dan paten. Sebagai pemilik bisnis modern, Anda tidak perlu membeli mesin pabrik mahal; sewa kapasitas mesin pabrik orang lain lewat skema Maklon (Contract Manufacturing).',
        academicInsight: 'Model Asset-Light Manufacturing membagi dua skema maklon: (1) OEM (Original Equipment Manufacturer): Anda membawa formula/desain eksklusif sendiri dan pabrik hanya memproduksinya secara massal; (2) ODM (Original Design Manufacturer): Pabrik sudah memiliki formula/katalog produk yang telah lolos uji klinis dan izin BPOM/Halal, Anda cukup memilih produk dan menempelkan merek/kemasan Anda sendiri (White Label). Skema ini memangkas waktu peluncuran produk dari 2 tahun menjadi hanya 6-8 minggu.',
        crossDisciplinary: {
          connectionText: 'Manajemen Operasi Rantai Pasok x Efisiensi Alokasi Modal (ROIC)',
          domains: ['Bisnis', 'Keuangan'],
          insight: 'ROIC Optimization: Dengan tidak mengunci modal miliaran rupiah ke dalam mesin depresiasi dan tanah pabrik, Return on Invested Capital (ROIC) bisnis Anda melesat tinggi karena seluruh kas difokuskan pada pemasaran dan penjualan.',
        },
        caseStudy: {
          companyOrFigure: 'Ledakan Industri Skincare dan Minuman Kolagen Lokal Indonesia',
          story: 'Merek-merek kecantikan lokal bernilai ratusan miliar rupiah (seperti Scarlett Whitening, Somethinc, atau Erha) mayoritas tidak membangun pabrik kimia sendiri di awal berdirinya. Mereka bermitra dengan pabrik maklon kosmetik terakreditasi (seperti PT Cedefindo, PT Paragon, atau PT Cosmax). Pabrik maklon mengurus formula, uji stabilitas, dan perizinan BPOM, sementara sang pendiri fokus membangun komunitas pelanggan dan strategi pemasaran digital.',
          takeaway: 'Kekayaan di era modern berada pada kepemilikan merek, distribusi, dan loyalitas pelanggan, bukan pada kepemilikan mesin pabrik fisik.'
        },
        actionableSteps: [
          'Cari direktori pabrik maklon resmi terakreditasi BPOM dan Halal di asosiasi industri terkait (misal: Perkosmi untuk kosmetik atau Gapmmi untuk makanan/minuman).',
          'Minta sampel produk (Sample Batch) dari minimal 3 pabrik maklon berbeda untuk membandingkan tekstur, rasa, dan uji ketahanan mutu.',
          'Pastikan kontrak kerjasama maklon mencantumkan klausul kerahasiaan formula (Non-Disclosure Agreement / NDA) agar formula produk Anda tidak dijual ke kompetitor.'
        ],
        difficulty: 'Menengah',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Produksi Skincare: Beli Mesin Sendiri Rp 800 Juta vs Maklon ODM Rp 40 Juta',
        context: 'Anda memiliki tabungan Rp 60 juta dan ingin meluncurkan serum wajah bermerek sendiri. Seorang sales mesin menawarkan mesin pengisi cairan otomatis seharga Rp 800 juta dengan cicilan leasing Rp 25 juta/bulan.',
        dilemma: 'Strategi produksi mana yang paling rasional secara finansial?',
        choices: [
          {
            id: 'c1',
            text: 'Bermitra dengan pabrik maklon kosmetik bersertifikat CPKB dan BPOM: pesan batch awal 1.000 botol dengan modal Rp 35 juta menggunakan skema formula ODM siap edar.',
            consequence: 'Serum Anda mengantongi izin BPOM resmi dalam 6 minggu, modal kas Anda selamat, dan produk siap dijual ke pasar dengan margin 65%.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Maklon pabrik bersertifikasi memberikan produk legal berkualitas tinggi dengan modal terjangkau tanpa beban utang aset tetap.'
          },
          {
            id: 'c2',
            text: 'Ambil utang leasing Rp 800 juta untuk membeli mesin pabrik dan sewa gudang industri sebelum memiliki izin BPOM.',
            consequence: 'Pabrik Anda digerebek aparat karena tidak memiliki izin edar kosmetik, cicilan mesin menunggak dan Anda jatuh pailit.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Membeli mesin tanpa memahami regulasi perizinan farmasi/kosmetik adalah kecerobohan modal fatal.'
          },
          {
            id: 'c3',
            text: 'Campur serum sendiri di ember kamar mandi rumah tanpa sarung tangan dan jual via WhatsApp tanpa izin BPOM.',
            consequence: 'Konsumen mengalami iritasi kulit melepuh, Anda ditangkap polisi atas pelanggaran UU Kesehatan dengan ancaman penjara 10 tahun.',
            scoreBonus: -45,
            isOptimal: false,
            explanation: 'Produksi kosmetik ilegal tanpa standar keamanan adalah kejahatan berat yang membahayakan nyawa masyarakat.'
          },
          {
            id: 'c4',
            text: 'Beli serum jadi dari pasar loak lalu ganti botolnya secara sembunyi-sembunyi.',
            consequence: 'Kualitas rusak, produk berjamur dan reputasi Anda hancur seketika.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Praktik tidak higienis dan tidak etis merusak fondasi bisnis jangka panjang.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-2-1',
          question: 'Apa perbedaan mendasar antara skema manufaktur OEM (Original Equipment Manufacturer) dan ODM (Original Design Manufacturer) saat bekerja sama dengan pabrik maklon?',
          options: [
            'OEM memproduksi barang berdasarkan desain/formula spesifik yang dibawa oleh pemesan, sedangkan ODM menyediakan produk/formula jadi dari katalog pabrik yang siap diberi merek pemesan.',
            'OEM hanya berlaku untuk makanan, sedangkan ODM hanya berlaku untuk pakaian militer.',
            'OEM tidak memerlukan pembayaran uang muka sama sekali.',
            'ODM mewajibkan pemesan membeli saham pabrik sebesar 51%.'
          ],
          correctAnswerIndex: 0,
          explanation: 'OEM memproduksi spesifikasi eksklusif milik pemesan, sedangkan ODM menawarkan formula atau desain siap pakai dari pabrik yang tinggal diberi label merek pemesan (White Label).'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 2.2: NEGOSIASI MOQ & TERMIN PEMBAYARAN
    // --------------------------------------------------------------------------
    {
      id: 'zhero-2-2',
      stepNumber: 'Langkah 2.2',
      stageTitle: 'LEVEL 2: Eksekusi Pabrik & Rantai Pasok',
      label: 'Seni Negosiasi MOQ & Syarat Pembayaran (TOP)',
      domain: 'Bisnis',
      summary: 'Teknik taktis menurunkan batas pesanan minimum (Minimum Order Quantity) di pabrik dan menegosiasikan tempo pembayaran (Terms of Payment) agar arus kas tetap surplus.',
      x: 780,
      y: 270,
      level: 3,
      prerequisiteId: 'zhero-2-1',
      microContent: {
        mentalModel: 'Cash Conversion Cycle & Batch Size Flexibility',
        analogy: 'Ketika Anda datang ke pabrik konveksi besar dan meminta membuat 100 potong kemeja, manajer pabrik akan menolak dan berkata: "MOQ kami minimal 5.000 potong!". Manajer pabrik menolak bukan karena benci pada Anda, melainkan karena menyiapkan rol kain baru dan menyetel ulang mesin jahit membutuhkan biaya persiapan (*Set-up Cost*) yang mahal. Namun jika Anda cerdik dan berkata: "Kain warna biru dongker apa yang saat ini sedang diproduksi massal di mesin Anda untuk pesanan klien besar lain? Bisakah pesanan 200 potong saya diselipkan ke sisa gulungan kain tersebut?", pabrik akan dengan senang hati menyetujuinya!',
        academicInsight: 'Batas Minimum Order Quantity (MOQ) adalah fungsi dari skala ekonomis pabrik. Jika kas modal Anda tersedot seluruhnya ke dalam persediaan barang mati (*Cash Trap*), perputaran kas Anda akan terhenti. Kunci negosiasi MOQ adalah: (1) Menumpang pada siklus produksi bahan baku yang sedang berjalan (*Piggybacking on running materials*), (2) Menawarkan harga beli per unit yang sedikit lebih tinggi untuk volume batch pertama yang kecil, atau (3) Membayar biaya cetak pelat/silinder kemasan di muka agar pabrik tidak menanggung risiko kerugian bahan.',
        crossDisciplinary: {
          connectionText: 'Psikologi Negosiasi Pembelian x Manajemen Likuiditas Kas',
          domains: ['Psikologi', 'Keuangan'],
          insight: 'Terms of Payment (TOP): Mengamankan tempo pembayaran 30-45 hari dari pemasok sementara Anda menerima pembayaran tunai dari pembeli menciptakan Cash Conversion Cycle negatif (pemasok membiayai modal kerja Anda secara gratis).',
        },
        caseStudy: {
          companyOrFigure: 'Negosiasi Batch Pertama Merek Kopi Kemasan Lokal',
          story: 'Seorang pendiri merek kopi cold brew membutuhkan 10.000 botol kaca khusus. Pabrik botol menetapkan MOQ 50.000 botol (senilai Rp 150 juta yang melebihi modal kasnya). Pendiri tersebut bernegosiasi: ia setuju membeli 50.000 botol, namun dengan komitmen kontrak pengiriman bertahap (Call-Off Order): 10.000 botol dikirim dan dibayar bulan ini, dan sisanya disimpan di gudang pabrik untuk dikirim setiap kuartal. Pabrik menyetujui karena volume kontrak tahunannya tercapai, dan pendiri tersebut selamat dari jebakan kehabisan kas likuid.',
          takeaway: 'Fleksibilitas MOQ dan tempo pembayaran dapat dicapai jika Anda memahami struktur biaya dan kapasitas gudang pihak pemasok.'
        },
        actionableSteps: [
          'Saat negosiasi ke pabrik: tanyakan bahan baku atau botol kemasan apa yang paling sering dipesan oleh klien besar mereka agar Anda bisa menumpang di batch tersebut.',
          'Tawarkan skema harga berjenjang: "Beri kami MOQ 500 unit untuk uji pasar bulan ini dengan harga Rp 25.000/unit; bulan depan kami naikkan ke 5.000 unit di harga Rp 18.000/unit".',
          'Setelah 3 kali transaksi pertama dengan pembayaran tepat waktu, selalu ajukan peningkatan Terms of Payment (TOP) dari bayar tunai di muka (Cash Before Delivery) menjadi tempo 30 hari.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema MOQ Pabrik Kemasan: Menyetujui MOQ 10.000 Pcs vs Negosiasi Batch Kecil',
        context: 'Pabrik kemasan sachet menetapkan MOQ minimal 10.000 pcs (total biaya Rp 30 juta). Anggaran kas modal kerja Anda saat ini hanya Rp 35 juta. Jika Anda menyetujui, kas Anda tersisa Rp 5 juta dan tidak ada uang tersisa untuk biaya iklan dan promosi.',
        dilemma: 'Bagaimana negosiasi taktis yang harus diajukan kepada manajemen pabrik?',
        choices: [
          {
            id: 'c1',
            text: 'Tawarkan membayar biaya silinder cetak master di muka Rp 4 juta, namun minta pengiriman fisik tahap pertama dibatasi 2.500 pcs dengan komitmen sisa 7.500 pcs diambil dalam 90 hari.',
            consequence: 'Pabrik menerima karena risiko pelat cetak sudah Anda bayar lunas; kas Anda masih tersisa Rp 23 juta untuk mendanai promosi dan penjualan.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Menyerap biaya tetap awal pabrik (silinder pelat cetak) membebaskan batas MOQ dan melindungi likuiditas kas operasional Anda.'
          },
          {
            id: 'c2',
            text: 'Langsung bayar lunas Rp 30 juta untuk 10.000 kemasan sachet dan habiskan seluruh kas perusahaan.',
            consequence: 'Kemasan menumpuk di kamar tidur, Anda kehabisan uang untuk iklan, produk tidak dikenal pasar dan kas mati total (Cash Trap).',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Mengunci seluruh likuiditas kas ke dalam inventori kemasan tanpa anggaran promosi adalah kesalahan fatal likuiditas.'
          },
          {
            id: 'c3',
            text: 'Ancam akan membakar pabrik kemasan tersebut jika mereka tidak mau melayani pesanan 50 pcs.',
            consequence: 'Pihak pabrik melapor ke kepolisian, Anda ditangkap atas tindak pidana pemerasan dan pengancaman.',
            scoreBonus: -40,
            isOptimal: false,
            explanation: 'Pengancaman adalah tindak kriminal berat yang memusnahkan eksistensi usaha.'
          },
          {
            id: 'c4',
            text: 'Gunakan kantong kresek bekas dari pasar tradisional sebagai kemasan sachet tanpa dicuci.',
            consequence: 'Produk tercemar bakteri, konsumen keracunan dan izin usaha dicabut aparat.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Mengabaikan standar higienitas pangan membahayakan kesehatan publik.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-2-2',
          question: 'Mengapa pengusaha pemula sangat disarankan untuk menghindari mengunci seluruh kas modalnya ke dalam pesanan persediaan barang dalam jumlah MOQ yang terlalu besar (Cash Trap)?',
          options: [
            'Karena jika uang tunai habis tersedot ke stok barang yang belum tentu laku, perusahaan tidak memiliki likuiditas untuk membiayai iklan, gaji, dan biaya operasional harian.',
            'Karena bank melarang gudang menyimpan barang lebih dari 10 kardus.',
            'Karena barang di gudang otomatis berubah status menjadi aset milik negara setelah 30 hari.',
            'Karena pajak perizinan pabrik dihitung berdasarkan luas kardus di gudang.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Cash Trap mengunci likuiditas hidup bisnis ke tumpukan barang mati; jika produk lambat berputar, bisnis akan mati kehabisan kas tunai likuid.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 2.3: DISTRIBUSI & TEMBUS JARINGAN RETAILER
    // --------------------------------------------------------------------------
    {
      id: 'zhero-2-3',
      stepNumber: 'Langkah 2.3',
      stageTitle: 'LEVEL 2: Eksekusi Pabrik & Rantai Pasok',
      label: 'Jalur Distribusi & Tembus Jaringan Retailer',
      domain: 'Bisnis',
      summary: 'Struktur margin bertingkat (*Margin Stacking*), syarat Listing Fee di minimarket/supermarket modern, dan strategi masuk ke jaringan toko kelontong daerah.',
      x: 780,
      y: 420,
      level: 3,
      prerequisiteId: 'zhero-2-2',
      microContent: {
        mentalModel: 'Margin Stacking Structure & Modern Trade Listing Dynamics',
        analogy: 'Membayangkan rantai distribusi barang bagaikan tangga bertingkat dari puncak gunung ke lembah pasar: jika harga jual eceran produk Anda di tangan konsumen akhir adalah Rp 10.000, Anda tidak bisa menjualnya ke supermarket seharga Rp 9.500. Setiap anak tangga menuntut bagian margin keuntungan untuk bertahan hidup: Retailer menuntut margin 25-35%, Sub-Distributor menuntut 10-15%, dan Distributor Utama menuntut 10-12%. Jika dari awal Anda tidak memperhitungkan struktur tumpukan margin (*Margin Stacking*), Anda akan bangkrut saat produk Anda laku keras di rak toko!',
        academicInsight: 'Berdasarkan Permendag No. 24/2021 tentang Distribusi Barang, terdapat pemisahan antara saluran Pasar Tradisional (General Trade / GT: toko kelontong, pasar becek) dan Pasar Modern (Modern Trade / MT: minimarket Indomaret/Alfamart, hypermarket). Menembus jaringan Modern Trade menuntut kesiapan biaya Listing Fee (biaya sewa slot rak per SKU per toko), Terms of Payment (TOP 45-60 hari), dan biaya potongan promosi (Trading Terms). Bisnis pemula yang bijak menguasai pasar General Trade lokal terlebih dahulu untuk membangun perputaran kas cepat sebelum masuk ke Modern Trade.',
        crossDisciplinary: {
          connectionText: 'Strategi Rantai Distribusi Komersial x Matematika Struktur Biaya HPP',
          domains: ['Bisnis', 'Keuangan'],
          insight: 'HPP Multiplier Rule: Agar sebuah produk FMCG dapat masuk ke jaringan distribusi nasional, Harga Pokok Produksi (HPP) fisik barang maksimal hanya boleh 30-35% dari Harga Jual Konsumen (HET) di rak toko.',
        },
        caseStudy: {
          companyOrFigure: 'Strategi Distribusi Akar Rumput Minuman RTD Lokal (Teh Botol Sosro & Le Minerale)',
          story: 'Sebelum mendominasi supermarket modern, Sosro menguasai warung-warung makan tenda pinggir jalan dan terminal bus dengan menitipkan krat botol kaca secara konsinyasi cepat. Mayora dengan Le Minerale mendobrak dominasi Danone Aqua bukan dengan perang iklan semata, melainkan dengan memberikan margin keuntungan eceran yang 15% lebih tebal kepada para pemilik warung kelontong tradisional, membuat pedagang warung secara sukarela merekomendasikan produk mereka ke pembeli.',
          takeaway: 'Rantai distribusi dimenangkan oleh produk yang memberikan keuntungan paling pasti dan perputaran kas tercepat bagi para pedagang perantara.'
        },
        actionableSteps: [
          'Hitung Margin Stacking sebelum menetapkan harga: HPP (35%) $\rightarrow$ Harga ke Distributor (+15%) $\rightarrow$ Harga ke Agen (+15%) $\rightarrow$ Harga ke Retailer Toko (+25%) $\rightarrow$ Harga Konsumen (HET 100%).',
          'Kuasai 50 warung kelontong atau kafe lokal di kota Anda terlebih dahulu sebelum bermimpi masuk ke jaringan minimarket waralaba nasional.',
          'Siapkan cadangan kas modal kerja minimal 3 bulan penjualan sebelum menandatangani kontrak Modern Trade yang memberlakukan tempo pembayaran (TOP) 60 hari.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Ekspansi Retail: Kontrak Minimarket Nasional 2.000 Gerai vs General Trade Lokal',
        context: 'Jaringan minimarket nasional menawarkan slot listing untuk produk keripik Anda di 2.000 gerai mereka. Syaratnya: Listing Fee Rp 50 juta di depan, tempo pembayaran (TOP) 60 hari, dan margin minimarket dipotong 32%. Modal kas kerja Anda saat ini Rp 80 juta.',
        dilemma: 'Langkah kemitraan ritel apa yang paling aman bagi kelangsungan hidup bisnis?',
        choices: [
          {
            id: 'c1',
            text: 'Tolak penawaran 2.000 gerai nasional saat ini; negosiasikan uji coba regional di 100 gerai terdekat terlebih dahulu, sambil terus memperkuat penetrasi di 200 toko kelontong lokal bertempo pembayaran tunai.',
            consequence: 'Kas operasional aman dari risiko piutang macet TOP 60 hari, perputaran stok di 100 gerai terbukti tinggi, dan kas dari warung lokal mendanai pertumbuhan secara sehat.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Menguji coba skala kecil regional (piloting) melindungi pemula dari krisis kebangkrutan likuiditas modal kerja di jaringan ritel raksasa.'
          },
          {
            id: 'c2',
            text: 'Langsung tanda tangani kontrak 2.000 gerai nasional dan bayar Listing Fee Rp 50 juta dari total kas Rp 80 juta.',
            consequence: 'Sisa kas Rp 30 juta tidak cukup membiayai produksi 2.000 gerai; minimarket memberlakukan denda penalti keterlambatan kirim (OOS Penalty) dan perusahaan Anda bangkrut.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Ekspansi kapasitas ritel yang melampaui kemampuan modal kerja tunai adalah penyebab umum kehancuran produsen pemula.'
          },
          {
            id: 'c3',
            text: 'Kirim barang palsu yang isinya angin kosong ke 2.000 gerai minimarket.',
            consequence: 'Dituntut ganti rugi miliaran rupiah dan izin usaha dicabut kementerian perdagangan.',
            scoreBonus: -45,
            isOptimal: false,
            explanation: 'Penipuan komersial adalah tindak pidana fatal.'
          },
          {
            id: 'c4',
            text: 'Hentikan seluruh produksi keripik dan beralih menjadi sopir angkot.',
            consequence: 'Menyerah tanpa mengoptimalkan peluang pasar lokal yang sebenarnya sangat menguntungkan.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Menghindari peluang terukur karena takut mengambil risiko disiplin.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-zh-2-3',
          question: 'Mengapa produsen produk konsumen (FMCG) wajib menerapkan prinsip Margin Stacking (struktur margin bertingkat) sebelum menetapkan harga jual produk ke pasar?',
          options: [
            'Agar tersedia ruang margin keuntungan yang cukup bagi seluruh perantara rantai pasok (Distributor, Agen Grosir, dan Toko Retailer) tanpa merugikan margin laba produsen.',
            'Karena pemerintah mewajibkan harga barang harus naik 10% setiap hari.',
            'Agar seluruh keuntungan produk diserahkan kepada kasir toko.',
            'Karena distributor dilarang mengambil margin keuntungan di atas 1%.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Margin Stacking memastikan bahwa setiap entitas di sepanjang jalur distribusi mendapatkan persentase keuntungan yang layak, sehingga mereka termotivasi memajang dan menjual produk Anda ke konsumen akhir.'
        }
      ]
    }
  ],
  edges: [
    // Tahap 0: Absolute Zero
    { id: 'ze1', from: 'zhero-0-1', to: 'zhero-0-2', label: 'Mindset ke Validasi', domains: ['Bisnis', 'Bisnis'] },
    { id: 'ze2', from: 'zhero-0-2', to: 'zhero-0-3', label: 'Validasi ke Pembeli Pertama', domains: ['Bisnis', 'Keuangan'] },
    // Tahap 0 -> Tahap 1
    { id: 'ze3', from: 'zhero-0-3', to: 'zhero-1-1', label: 'Penjualan ke Legalitas PT', domains: ['Bisnis', 'Hukum'] },
    // Tahap 1: Legalitas dari Nol
    { id: 'ze4', from: 'zhero-1-1', to: 'zhero-1-2', label: 'Baju Hukum ke NIB OSS', domains: ['Hukum', 'Hukum'] },
    { id: 'ze5', from: 'zhero-1-2', to: 'zhero-1-3', label: 'Perizinan ke Rekening & Pajak', domains: ['Hukum', 'Pajak'] },
    // Tahap 1 -> Tahap 2
    { id: 'ze6', from: 'zhero-1-3', to: 'zhero-2-1', label: 'Legal PT ke Maklon Pabrik', domains: ['Pajak', 'Bisnis'] },
    // Tahap 2: Eksekusi Pabrik & Rantai Pasok
    { id: 'ze7', from: 'zhero-2-1', to: 'zhero-2-2', label: 'Maklon ke Negosiasi MOQ', domains: ['Bisnis', 'Keuangan'] },
    { id: 'ze8', from: 'zhero-2-2', to: 'zhero-2-3', label: 'Kontrol Kas ke Rak Retailer', domains: ['Keuangan', 'Bisnis'] },

    // Cross-Domain Synergies
    { id: 'ze-syn-1', from: 'zhero-0-3', to: 'zhero-2-2', label: 'Preselling -> Negosiasi MOQ', domains: ['Bisnis', 'Keuangan'] },
    { id: 'ze-syn-2', from: 'zhero-1-3', to: 'zhero-2-3', label: 'Rekening PT -> Kontrak Retailer', domains: ['Pajak', 'Bisnis'] }
  ]
};

