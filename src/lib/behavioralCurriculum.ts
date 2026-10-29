// ==============================================================================
// NODUS — BEHAVIORAL ECONOMICS, COGNITIVE BIASES, PRICING & GAME THEORY MODULE
// ==============================================================================

import { MindmapData } from '../types';

export const ADVANCED_BEHAVIORAL_ECONOMICS_CURRICULUM: MindmapData = {
  id: 'curriculum-psikologi-perilaku-keputusan',
  topic: 'Psikologi Perilaku, Arsitektur Keputusan & Behavioral Economics',
  rootId: 'beh-1-1',
  description: 'Masterclass eksekutif psikologi perilaku: Dual-Process Theory Sistem 1 vs 2, Prospect Theory & Loss Aversion, Anchoring & Framing, Decoy Effect, Social Proof & Scarcity, Frictionless Payment, Dilema Tahanan, Nudge Theory, Negosiasi ZOPA & BATNA, hingga Gamifikasi Dopamine Loops.',
  nodes: [
    // --------------------------------------------------------------------------
    // TAHAP 1: ARSITEKTUR PIKIRAN & BIAS KOGNITIF FINANSIAL
    // --------------------------------------------------------------------------
    {
      id: 'beh-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'TAHAP 1: Arsitektur Pikiran & Bias Kognitif',
      label: 'Sistem 1 vs Sistem 2 (Dual-Process Theory)',
      domain: 'Psikologi',
      summary: 'Dua mode operasional otak manusia: Pikiran cepat, emosional, & heuristik (Sistem 1) vs Pikiran lambat, logis, & melelahkan (Sistem 2), serta bagaimana bisnis memanfaatkan kelelahan kognitif.',
      x: 180,
      y: 120,
      level: 0,
      microContent: {
        mentalModel: 'Dual-Process Theory (Daniel Kahneman - Thinking, Fast and Slow)',
        analogy: 'Bayangkan otak Anda adalah sebuah mobil dengan dua pengemudi: Sistem 1 adalah pengemudi autopilot instingtif yang langsung banting setir saat melihat bayangan kucing melintas (bekerja otomatis tanpa usaha sadar). Sistem 2 adalah instruktur mengemudi yang harus menghitung sudut parkir paralel sempit di tanjakan curam (membutuhkan konsentrasi tinggi, energi glukosa otak, dan cepat lelah). Karena Sistem 2 sangat boros energi, otak manusia secara default menyerahkan 95% keputusan harian dan transaksi belanja kepada autopilot Sistem 1.',
        academicInsight: 'Penelitian Daniel Kahneman dan Amos Tversky membuktikan bahwa manusia bukanlah Homo Economicus yang rasional seperti yang diasumsikan teori ekonomi klasik. Otak mengandalkan jalan pintas mental (Heuristics) yang rentan terhadap bias sistematis. Kelelahan ego (Ego Depletion) terjadi ketika Sistem 2 telah bekerja keras sepanjang hari, membuat pertahanan rasional runtuh di malam hari sehingga seseorang rentan melakukan pembelian impulsif (Impulse Buying).',
        crossDisciplinary: {
          connectionText: 'Psikologi Kognitif x Arsitektur Ritel & E-Commerce',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Desain Pengurangan Gesekan (Friction Reduction): Ritel modern dan platform checkout e-commerce (seperti 1-Click Buy Amazon) sengaja mematikan keterlibatan Sistem 2 agar transaksi selesai sebelum nalar kritis sempat bertanya "apakah saya benar-benar butuh barang ini?".',
        },
        caseStudy: {
          companyOrFigure: 'Arsitektur Tata Letak Supermarket & Desain Algoritma E-Commerce',
          story: 'Supermarket sengaja menaruh produk kebutuhan pokok (susu, telur) di sudut paling belakang gedung. Konsumen dipaksa menyusuri lorong yang dipenuhi aroma roti hangat, musik bertempo lambat, dan rak diskon visual warna-warni yang memanjakan Sistem 1. Di area kasir, saat Sistem 2 pelanggan sudah lelah mengantre, permen dan cokelat dipajang setinggi mata anak-anak (Checkout Aisle Impulse Traps), menyumbang margin laba kotor hingga puluhan persen.',
          takeaway: 'Bisnis yang memaksa konsumen berpikir keras dengan Sistem 2 akan kalah dari bisnis yang merancang pengalaman mulus dan intuitif bagi Sistem 1.'
        },
        actionableSteps: [
          'Terapkan "Aturan 24 Jam": tunda pembelian barang diskresioner di atas Rp 500 ribu selama 24 jam untuk memberi kesempatan Sistem 2 mengevaluasi secara logis.',
          'Audit alur checkout produk bisnis Anda: eliminasi setiap kolom formulir yang tidak esensial untuk menurunkan beban kognitif pelanggan.',
          'Jangan pernah mengambil keputusan investasi finansial atau negosiasi bisnis penting dalam kondisi lapar, lelah, atau larut malam.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Desain Checkout: Form Pendaftaran Lengkap vs 1-Click Checkout',
        context: 'Platform e-commerce B2C Anda mengalami rasio keranjang belanja ditinggalkan (Cart Abandonment Rate) sebesar 68%. Tim kepatuhan meminta formulir 12 kolom (termasuk survei demografi) sebelum pembayaran, sementara tim produk mengusulkan 1-Click Checkout via dompet digital instan.',
        dilemma: 'Bagaimana arsitektur alur pembayaran dirancang untuk mengoptimalkan konversi tanpa mengorbankan data penting?',
        choices: [
          {
            id: 'c1',
            text: 'Terapkan 1-Click Checkout instan untuk Sistem 1, dan pindahkan survei preferensi ke halaman "Terima Kasih" setelah pembayaran sukses dengan insentif kupon cashback.',
            consequence: 'Konversi penjualan melonjak 38%, gesekan kognitif hilang, dan 45% pelanggan tetap mengisi survei sukarela setelah transaksi selesai.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Mengamankan transaksi saat Sistem 1 terpicu adalah kunci konversi; data opsional dapat dikumpulkan setelah komitmen pembelian terkunci.'
          },
          {
            id: 'c2',
            text: 'Wajibkan pelanggan membuat kata sandi rumit 16 karakter dan memverifikasi email sebelum boleh melihat total tagihan.',
            consequence: 'Calon pembeli frustrasi, Sistem 2 menghentikan transaksi, rasio abandonment meroket ke 85%.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menambahkan beban kognitif berlebih sebelum checkout membunuh dorongan pembelian seketika.'
          },
          {
            id: 'c3',
            text: 'Hapus seluruh sistem pembayaran digital dan hanya terima transfer manual dengan konfirmasi bukti slip via WhatsApp.',
            consequence: 'Pelanggan modern enggan repot upload bukti struk, volume transaksi harian anjlok 70%.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Meningkatkan gesekan friksi operasional pembayaran adalah kemunduran fatal dalam perdagangan digital.'
          },
          {
            id: 'c4',
            text: 'Kirim spam notifikasi pop-up alarm suara keras setiap kali kursor pelanggan mendekati tombol silang browser.',
            consequence: 'Pengguna merasa diteror, reputasi brand hancur, dan situs web dilaporkan sebagai spam oleh komunitas online.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Taktik manipulatif agresif merusak kepercayaan jangka panjang konsumen terhadap brand.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-1-1',
          question: 'Menurut teori Dual-Process Daniel Kahneman, mengapa konsumen sangat rentan melakukan pembelian impulsif saat berada di lorong kasir supermarket?',
          options: [
            'Karena Sistem 2 mengalami kelelahan kognitif (Ego Depletion) setelah berkeliling berbelanja, sehingga Sistem 1 mengambil alih kendali tanpa pertimbangan matang.',
            'Karena harga permen di lorong kasir disubsidi penuh oleh pemerintah daerah.',
            'Karena Sistem 2 selalu tidur ketika melihat warna merah dan kuning.',
            'Karena kasir menolak melayani konsumen yang tidak mengambil barang di rak kasir.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Kelelahan kognitif (Ego Depletion) menguras energi Sistem 2 setelah memproses banyak keputusan di lorong belanja, membuat Sistem 1 yang impulsif mendominasi keputusan di meja kasir.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 1.2: PROSPECT THEORY & LOSS AVERSION
    // --------------------------------------------------------------------------
    {
      id: 'beh-1-2',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'TAHAP 1: Arsitektur Pikiran & Bias Kognitif',
      label: 'Prospect Theory & Loss Aversion (Asimetri Rasa Sakit Rugi)',
      domain: 'Psikologi',
      summary: 'Mengapa rasa sakit kehilangan Rp 1 juta secara psikologis 2x hingga 2.5x lebih menyengat daripada nikmatnya memperoleh Rp 1 juta, serta implikasinya pada penawaran bisnis.',
      x: 180,
      y: 270,
      level: 1,
      prerequisiteId: 'beh-1-1',
      microContent: {
        mentalModel: 'Prospect Theory Value Function & Loss Aversion Coefficient (Kahneman & Tversky)',
        analogy: 'Bagi otak manusia purba, kehilangan persediaan makanan berarti kematian kelaparan, sedangkan menemukan tambahan makanan hanya berarti kenyang beberapa jam lagi. Oleh karena itu, evolusi menanamkan kurva nilai asimetris: rasa sakit akibat kehilangan Rp 10 juta di dompet terasa seperti ditinju keras di ulu hati, sedangkan menemukan Rp 10 juta di saku celana lama hanya terasa seperti tepukan ringan di bahu. Koefisien rasa takut rugi ($\lambda$) berkisar antara 2.0 hingga 2.5.',
        academicInsight: 'Dalam makalah legendaris 1979 (Nobel Ekonomi 2002), Daniel Kahneman dan Amos Tversky membongkar Expected Utility Theory klasik. Fungsi nilai Prospect Theory berbentuk huruf S: cekung untuk keuntungan (risk-averse) dan cembung serta jauh lebih curam untuk kerugian (risk-seeking saat rugi). Inilah yang memicu Disposition Effect pada investor saham (terburu-buru menjual saham untung kecil, namun menahan saham rugi dalam waktu lama berharap impas), serta Sunk Cost Fallacy (terus membuang uang ke proyek gagal demi tidak mengakui kerugian).',
        crossDisciplinary: {
          connectionText: 'Psikologi Kerugian x Desain Strategi Penjualan SaaS',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Endowment Effect & Risk Reversal: Model langganan "Free Trial 14 Hari" memanfaatkan fakta bahwa begitu seseorang menggunakan software tersebut, otaknya menganggap software itu sudah menjadi "milik pribadinya". Menghentikan langganan terasa seperti kehilangan aset pribadi, bukan sekadar menolak membeli.',
        },
        caseStudy: {
          companyOrFigure: 'Garansi 365 Hari Bebas Retur Zappos (Tony Hsieh)',
          story: 'Pada awal era e-commerce, orang takut membeli sepatu online karena khawatir ukurannya salah dan uang mereka hilang. Zappos meruntuhkan tembok psikologis ini dengan menawarkan garansi retur gratis 365 hari ongkos kirim ditanggung perusahaan. Konsumen merasa risiko kerugian mereka menjadi nol absolut. Penjualan Zappos melesat hingga akhirnya diakuisisi Amazon senilai $1.2 miliar.',
          takeaway: 'Pindahkan seluruh rasa takut rugi (Loss Aversion) dari pundak calon pembeli ke pundak perusahaan Anda untuk melipatgandakan konversi.'
        },
        actionableSteps: [
          'Bingkai penawaran produk Anda sebagai solusi "Mencegah Kerugian" (Protection against loss) daripada sekadar "Mengejar Peluang Tambahan".',
          'Terapkan batas stop-loss kaku dan otomatis pada portofolio investasi untuk menetralkan bias emosi Disposition Effect.',
          'Tawarkan garansi uang kembali 100% tanpa syarat untuk menghancurkan friksi keraguan pembeli pertama.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Penjualan B2B: Diskon Harga 20% vs Garansi Uang Kembali 100%',
        context: 'Calon klien korporat ragu menandatangani kontrak software otomasi pergudangan senilai Rp 150 juta/tahun karena khawatir sistem baru akan membingungkan staf gudang dan mengganggu pengiriman harian.',
        dilemma: 'Arsitektur penawaran mana yang paling efektif melumpuhkan ketakutan rugi klien?',
        choices: [
          {
            id: 'c1',
            text: 'Pertahankan harga penuh Rp 150 juta dan berikan klausul: "Uji coba penuh 30 hari; jika efisiensi waktu tidak naik minimal 25%, batalkan kontrak dengan pengembalian uang 100% plus tim kami bantu migrasi data kembali secara gratis."',
            consequence: 'Klien menandatangani kontrak dalam 48 jam karena risiko di pihak mereka menjadi nol; implementasi berhasil dan margin perusahaan terjaga utuh.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Risk Reversal radikal menyerap seluruh loss aversion calon klien tanpa merusak nilai persepsi harga produk Anda.'
          },
          {
            id: 'c2',
            text: 'Langsung berikan diskon banting harga 35% menjadi Rp 97.5 juta namun tegaskan bahwa tidak ada garansi pengembalian jika sistem gagal diterapkan.',
            consequence: 'Klien tetap menolak karena diskon harga tidak menghapus ketakutan utama mereka bahwa operasi gudang mereka akan kacau balau.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Diskon nominal tidak menyelesaikan akar kecemasan loss aversion operasional calon pembeli.'
          },
          {
            id: 'c3',
            text: 'Kirim surat bahwa harga akan naik 50% besok pagi jika mereka tidak tanda tangan sekarang juga.',
            consequence: 'Klien merasa diperas dengan taktik murahan, hubungan diplomatik bisnis putus seketika.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Ancaman manipulatif merusak reputasi profesional dalam siklus penjualan korporat B2B.'
          },
          {
            id: 'c4',
            text: 'Tolak menjelaskan fitur mitigasi risiko dan katakan bahwa semua software pasti ada risikonya.',
            consequence: 'Klien memilih vendor pesaing yang menawarkan program onboarding dan garansi pendampingan.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Mengabaikan kekhawatiran valid klien menunjukkan ketiadaan empati komersial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-1-2',
          question: 'Menurut Prospect Theory (Kahneman & Tversky), mengapa investor cenderung mempertahankan saham yang sedang merugi terlalu lama (Disposition Effect)?',
          options: [
            'Karena rasa sakit mengakui kerugian secara riil berbobot 2-2.5x lebih berat daripada nikmatnya keuntungan, sehingga otak memilih berjudi dengan harapan harga akan balik ke modal awal.',
            'Karena bursa saham mengenakan denda administrasi kepada investor yang menjual saham saat harga turun.',
            'Karena nilai dividen saham yang merugi otomatis berlipat ganda setiap bulan.',
            'Karena investor selalu memiliki informasi orang dalam dari emiten terkait.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Loss Aversion membuat manusia membenci pengakuan kerugian pasti, mendorong mereka mengambil risiko spekulatif (risk-seeking in the loss domain) demi menghindari rasa sakit merealisasikan cut-loss.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 1.3: ANCHORING EFFECT & FRAMING PSYCHOLOGY
    // --------------------------------------------------------------------------
    {
      id: 'beh-1-3',
      stepNumber: 'Langkah 1.3',
      stageTitle: 'TAHAP 1: Arsitektur Pikiran & Bias Kognitif',
      label: 'Anchoring Effect & Framing Psychology',
      domain: 'Psikologi',
      summary: 'Bagaimana angka acuan pertama menancapkan persepsi nilai di benak manusia, serta seni mengubah persepsi tanpa mengubah produk fisik (*Framing Effect*).',
      x: 180,
      y: 420,
      level: 2,
      prerequisiteId: 'beh-1-2',
      microContent: {
        mentalModel: 'Anchoring-and-Adjustment Heuristic & Framing Bias (Tversky & Kahneman)',
        analogy: 'Ketika sebuah kapal menjatuhkan jangkar (Anchor) ke dasar laut, kapal tersebut hanya bisa berayun dalam radius rantai jangkar tersebut. Demikian pula nalar manusia: angka pertama yang Anda dengar bertindak sebagai jangkar gravitasi mental. Jika seorang penjual jam tangan mewah pertama kali menunjukkan jam seharga Rp 150 juta, maka jam tangan berikutnya seharga Rp 35 juta tiba-tiba terasa "sangat masuk akal dan murah", padahal keduanya adalah barang mewah non-primer.',
        academicInsight: 'Framing Effect membuktikan bahwa cara informasi disajikan secara dramatis mengubah keputusan manusia. Riset medis klasik Amos Tversky: pasien lebih memilih menjalani operasi ketika dokter mengatakan "Tingkat kelangsungan hidup 90%" daripada ketika dokter mengatakan "Tingkat kematian 10%", padahal secara matematis kedua pernyataan itu identik 100%. Framing positif mengaktifkan persepsi rasa aman Sistem 1, sedangkan framing negatif mengaktifkan alarm bahaya.',
        crossDisciplinary: {
          connectionText: 'Psikologi Persepsi x Peluncuran Produk Teknologi Global',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Value Architecture: Steve Jobs adalah maestro anchoring dan framing. Ia tidak pernah menyebut harga iPad sebagai "komputer tablet mahal", melainkan membandingkannya dengan netbook murahan yang lambat dan laptop tebal.',
        },
        caseStudy: {
          companyOrFigure: 'Peluncuran iPad Pertama oleh Steve Jobs (Keynote Apple 2010)',
          story: 'Di atas panggung peluncuran iPad 2010, Steve Jobs membahas spekulasi para analis: "Berapa harga yang pantas untuk perangkat ajaib ini? Jika Anda mendengarkan analis, mereka bilang harganya harus di bawah $1.000, yaitu $999." Jobs menampilkan angka raksasa "$999" di layar besar dan membiarkannya terdiam selama 60 detik (menancapkan jangkar psikologis). Lalu tiba-tiba grafik palu menghantam angka $999 hingga hancur dan digantikan angka "$499". Seketika seluruh ruangan bersorak riuh. iPad terasa seperti diskon $500, bukan pengeluaran $499.',
          takeaway: 'Sebelum Anda menyebutkan harga produk Anda, tancapkan jangkar pembanding yang jauh lebih mahal di benak calon pembeli.'
        },
        actionableSteps: [
          'Dalam proposal penawaran, selalu tampilkan paket enterprise bernilai tertinggi terlebih dahulu di sebelah kiri sebagai jangkar harga.',
          'Gunakan framing biaya per hari: pecah harga langganan Rp 300.000/bulan menjadi "hanya Rp 10.000 per hari, setara setengah cangkir kopi".',
          'Saat negosiasi gaji atau proyek, jadilah pihak pertama yang menyebutkan rentang angka awal yang tinggi namun beralasan rasional untuk mengendalikan jangkar tawar-menawar.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Presentasi Harga Software: Menyajikan Paket Pemula vs Paket Premium',
        context: 'Perusahaan SaaS Anda meluncurkan paket baru: Basic (Rp 250 ribu/bln), Pro (Rp 750 ribu/bln), dan Enterprise (Rp 3.5 juta/bln). Halaman penetapan harga (Pricing Page) saat ini menampilkan Basic di urutan paling kiri.',
        dilemma: 'Bagaimana restrukturisasi halaman harga untuk memaksimalkan langganan paket Pro dan Enterprise?',
        choices: [
          {
            id: 'c1',
            text: 'Posisikan paket Enterprise (Rp 3.5 juta) sebagai jangkar pertama di paling kiri, beri tanda "Paling Populer" pada paket Pro (Rp 750 ribu), dan tampilkan rincian biaya Pro sebagai "Hanya Rp 25 ribu/hari".',
            consequence: 'Paket Pro terasa sangat hemat dibandingkan paket Enterprise Rp 3.5 juta, rata-rata pendapatan per pengguna (ARPU) melonjak 52%.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Menggunakan paket mahal sebagai jangkar visual dan reframing harian membuat paket menengah terlihat bernilai luar biasa tinggi.'
          },
          {
            id: 'c2',
            text: 'Sembunyikan semua paket mahal dan hanya tampilkan paket Basic Rp 250 ribu karena takut pengunjung kabur melihat angka jutaan.',
            consequence: 'Mayoritas pengguna hanya memilih paket termurah, margin perusahaan tertekan dan biaya server membengkak.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Menghilangkan jangkar premium menurunkan persepsi kualitas brand dan mengikis potensi pendapatan rata-rata.'
          },
          {
            id: 'c3',
            text: 'Tampilkan harga dalam bentuk persamaan matematika aljabar rumit yang harus dihitung sendiri oleh calon pembeli.',
            consequence: 'Pengunjung meninggalkan situs web dalam 5 detik akibat kebingungan ekstrem.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Menyulitkan pemahaman harga membunuh konversi secara instan.'
          },
          {
            id: 'c4',
            text: 'Ganti seluruh harga dengan tulisan "Hubungi Sales via Surat Pos" untuk menciptakan misteri.',
            consequence: 'Siklus penjualan terhenti total karena konsumen digital menuntut transparansi cepat.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Menolak transparansi digital memindahkan prospek potensial ke tangan kompetitor.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-1-3',
          question: 'Bagaimana Steve Jobs memanfaatkan Anchoring Effect saat memperkenalkan iPad pertama kali pada tahun 2010?',
          options: [
            'Menampilkan angka $999 di layar selama 60 detik sebagai jangkar sebelum mengumumkan harga riil $499, sehingga harga $499 dipersepsikan sebagai penghematan besar.',
            'Memberikan iPad gratis kepada seluruh penonton di aula teater.',
            'Menjual iPad dengan sistem barter menggunakan komputer lama.',
            'Menyembunyikan harga iPad sampai dua tahun setelah peluncuran produk.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Dengan menancapkan ekspektasi di angka $999 terlebih dahulu, harga $499 secara psikologis diproses oleh Sistem 1 sebagai diskon fantastis sebesar $500.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 2: PSIKOLOGI HARGA & MEREK (PRICING & BRAND BEHAVIOR)
    // --------------------------------------------------------------------------
    {
      id: 'beh-2-1',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'TAHAP 2: Psikologi Harga & Perilaku Merek',
      label: 'The Decoy Effect (Efek Umpan / Asymmetric Dominance)',
      domain: 'Psikologi',
      summary: 'Bagaimana menyisipkan opsi ketiga yang dirancang cacat (*Decoy*) mampu mengarahkan pilihan konsumen secara massal menuju opsi target yang paling menguntungkan.',
      x: 480,
      y: 120,
      level: 1,
      prerequisiteId: 'beh-1-3',
      microContent: {
        mentalModel: 'Asymmetric Dominance Effect / The Decoy Effect (Dan Ariely)',
        analogy: 'Bayangkan Anda bingung memilih antara liburan ke Roma (tiket pesawat + hotel + sarapan gratis) vs liburan ke Paris (tiket pesawat + hotel + sarapan gratis). Keduanya sama-sama menarik dan sulit dibandingkan. Namun jika biro perjalanan memasukkan opsi ketiga: Liburan ke Roma (tiket pesawat + hotel, TANPA sarapan) dengan harga yang hampir sama dengan Roma komplit, seketika Roma komplit terlihat luar biasa superior! Opsi "Roma tanpa sarapan" adalah Decoy (umpan) yang bertugas membuat Roma komplit menang mutlak atas Paris.',
        academicInsight: 'Eksperimen legendaris Dan Ariely (MIT) menguji langganan majalah The Economist. Pilihan awal: (1) Internet $59 (dipilih 68 orang), (2) Cetak $125 (dipilih 32 orang). Ariely kemudian menyisipkan opsi umpan Decoy: (1) Internet $59, (2) Cetak saja $125, (3) Cetak + Internet $125. Tidak ada satu pun orang waras yang memilih opsi nomor 2 (Cetak saja), namun keberadaan opsi nomor 2 tersebut mengubah preferensi secara radikal: pemilih Cetak + Internet ($125) melonjak dari 32% menjadi 84%! Pendapatan The Economist naik 43% hanya dengan menambahkan satu baris teks umpan.',
        crossDisciplinary: {
          connectionText: 'Psikologi Keputusan x Strategi Menu Bisnis Ritel & F&B',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Menu Engineering: Jaringan bioskop global menggunakan Decoy popcorn (Small $3, Medium $6.5, Large $7). Selisih $0.5 antara Medium dan Large membuat ukuran Large terlihat seperti kesepakatan murah yang tidak boleh dilewatkan.',
        },
        caseStudy: {
          companyOrFigure: 'Strategi Harga Popcorn Bioskop & Langganan Media The Economist',
          story: 'Bioskop menjual popcorn Small seharga Rp 35.000, Medium seharga Rp 55.000, dan Large seharga Rp 60.000. Hampir tidak ada konsumen yang membeli ukuran Medium. Namun ukuran Medium sengaja diciptakan sebagai Decoy asimetris untuk memandu konsumen berpikir: "Hanya tambah Rp 5.000 saya dapat ukuran raksasa!". Bioskop berhasil menjual popcorn termahal dengan margin laba kotor 90% secara konsisten.',
          takeaway: 'Jangan biarkan konsumen membandingkan produk Anda dengan pesaing luar; buatlah struktur perbandingan internal yang memenangkan opsi target Anda.'
        },
        actionableSteps: [
          'Audit struktur harga produk Anda: jika Anda memiliki 2 opsi, ciptakan opsi ketiga sebagai Decoy yang sedikit lebih mahal dari opsi target namun fiturnya jauh lebih sedikit.',
          'Pastikan opsi target (opsi yang ingin Anda jual terbanyak) memiliki dominasi asimetris mutlak terhadap opsi Decoy.',
          'Gunakan label visual (seperti bingkai khusus atau lencana "Nilai Terbaik") untuk menonjolkan opsi target yang diuntungkan oleh Decoy.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pricing Menu Kopi: Memaksimalkan Penjualan Cup Terbesar',
        context: 'Kedai kopi Anda memiliki dua ukuran: Regular (Rp 25.000, margin Rp 12.000) dan Large (Rp 40.000, margin Rp 24.000). Saat ini 75% pelanggan hanya membeli ukuran Regular.',
        dilemma: 'Bagaimana merancang opsi ketiga (Decoy) agar mayoritas pembeli beralih ke ukuran Large?',
        choices: [
          {
            id: 'c1',
            text: 'Perkenalkan ukuran "Medium" seharga Rp 37.000 dengan volume hanya sedikit di atas Regular.',
            consequence: 'Ukuran Medium bertindak sebagai Decoy sempurna; selisih hanya Rp 3.000 membuat 68% pelanggan memilih Large seharga Rp 40.000, laba bersih kedai kopi melonjak 45%.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Decoy yang ditempatkan sangat dekat dengan opsi target membuat opsi target terlihat sangat murah dan menguntungkan bagi konsumen.'
          },
          {
            id: 'c2',
            text: 'Hapus ukuran Regular dan paksa semua orang membeli ukuran Large seharga Rp 40.000.',
            consequence: 'Pelanggan sensitif harga kabur ke kedai kopi sebelah, volume pengunjung harian anjlok drastis.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menghilangkan pilihan dasar memicu resistensi psikologis dan penolakan reaktansi konsumen.'
          },
          {
            id: 'c3',
            text: 'Banting harga ukuran Large menjadi Rp 26.000.',
            consequence: 'Margin laba tergerus habis, biaya susu dan kemasan membengkak tanpa kenaikan keuntungan bersih.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Perang banting harga merusak profitabilitas unit economics bisnis.'
          },
          {
            id: 'c4',
            text: 'Tutup kedai setiap hari Rabu untuk menghemat listrik.',
            consequence: 'Pendapatan mingguan hilang 14% tanpa manfaat peningkatan persepsi nilai produk.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Efisiensi konyol yang mematikan arus kas pendapatan bisnis.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-2-1',
          question: 'Dalam eksperimen penetapan harga majalah The Economist oleh Dan Ariely, apa fungsi utama dari opsi "Cetak saja $125" padahal opsi "Cetak + Internet" juga berharga $125?',
          options: [
            'Bertindak sebagai Decoy (umpan cacat) yang membuat opsi Cetak + Internet terlihat sangat menguntungkan, sehingga mayoritas orang beralih memilih opsi termahal.',
            'Memberikan subsidi bagi percetakan kertas konvensional.',
            'Memenuhi syarat audit perpajakan publikasi media cetak.',
            'Menipu calon pembeli agar tidak membaca versi digital.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Opsi Decoy didominasi secara asimetris oleh opsi target; keberadaannya bukan untuk dibeli, melainkan untuk menjadi tolok ukur perbandingan yang memenangkan opsi target.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 2.2: SOCIAL PROOF, FOMO, & SCARCITY
    // --------------------------------------------------------------------------
    {
      id: 'beh-2-2',
      stepNumber: 'Langkah 2.2',
      stageTitle: 'TAHAP 2: Psikologi Harga & Perilaku Merek',
      label: 'Social Proof, FOMO, & Scarcity (Kelangkaan Evolusioner)',
      domain: 'Psikologi',
      summary: 'Mekanisme evolusi kawanan (*Herd Mentality*) dan prinsip kelangkaan (*Scarcity*) yang memicu hormon urgensi tindakan tanpa manipulasi beracun.',
      x: 480,
      y: 270,
      level: 2,
      prerequisiteId: 'beh-2-1',
      microContent: {
        mentalModel: 'Social Proof (Robert Cialdini) & Scarcity Principle',
        analogy: 'Ketika Anda berada di kota asing dan mencari tempat makan malam, Anda melihat dua restoran yang bersebelahan: Restoran A penuh sesak dengan antrean mengular sampai ke trotoar, sedangkan Restoran B kosong melompong tanpa ada seorang pun tamu. Secara naluriah tanpa membaca menu, otak Sistem 1 Anda langsung menyimpulkan bahwa Restoran A lezat dan Restoran B tidak enak. Kita mengasumsikan bahwa tindakan orang banyak adalah cerminan kebenaran (Social Proof).',
        academicInsight: 'Robert Cialdini (Influence: The Psychology of Persuasion) merumuskan bahwa dalam kondisi ketidakpastian tinggi, manusia mencari petunjuk perilaku orang lain untuk mengurangi risiko salah langkah. Sementara itu, Scarcity Principle memanfaatkan reaktansi psikologis (Psychological Reactance): saat sebuah barang menjadi langka atau aksesnya dibatasi waktu, manusia merasa kebebasan memilihnya terancam, memicu dorongan emosional kuat untuk segera memilikinya (FOMO - Fear of Missing Out).',
        crossDisciplinary: {
          connectionText: 'Psikologi Evolusioner x Arsitektur Konversi Booking Online',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Real-Time Social Cues: Platform perhotelan dan maskapai penerbangan modern secara ilmiah memanfaatkan indikator sosial langsung: "Sedang dilihat 14 orang saat ini" dan "Tersisa 1 kamar di harga ini" untuk mengonversi keraguan menjadi tindakan seketika.',
        },
        caseStudy: {
          companyOrFigure: 'Sistem Notifikasi Booking.com & Peluncuran Koleksi Terbatas Supreme/Nike',
          story: 'Booking.com menguji ratusan variasi tampilan dan menemukan bahwa menambahkan notifikasi dinamis ("Pemesanan terakhir dilakukan 12 menit yang lalu oleh tamu dari Jakarta") meningkatkan konversi pemesanan kamar hotel hingga dua digit. Di ranah streetwear, Supreme dan Nike membatasi pasokan sepatu edisi terbatas (*Drop System*). Kelangkaan buatan ini memicu antrean fisik berhari-hari dan melontarkan harga di pasar sekunder hingga 10x lipat dari harga ritel resmi.',
          takeaway: 'Bukti sosial membunuh keraguan calon pembeli; kelangkaan membunuh penundaan pembelian.'
        },
        actionableSteps: [
          'Kumpulkan dan tampilkan testimoni spesifik yang relevan (seperti profesi, foto riil, dan angka hasil konkret) tepat di samping tombol pembelian.',
          'Gunakan Scarcity yang jujur dan autentik (misal: "Kapasitas kelas dibatasi 25 orang demi efektivitas mentoring pribadi"), jangan pernah memalsukan countdown timer palsu.',
          'Tampilkan metrik kerumunan: "Telah dipercaya oleh lebih dari 10.000+ profesional bisnis di Indonesia".'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Peluncuran Kursus Masterclass: Timer Countdown Palsu vs Kuota Terbatas Nyata',
        context: 'Perusahaan edukasi Anda akan meluncurkan program Masterclass Eksekutif. Tim marketing mengusulkan memasang timer mundur palsu yang otomatis me-reset setiap 15 menit untuk memicu kepanikan beli.',
        dilemma: 'Pendekatan bukti sosial dan kelangkaan mana yang membangun konversi tinggi sekaligus melindungi reputasi jangka panjang?',
        choices: [
          {
            id: 'c1',
            text: 'Batasi kuota secara nyata menjadi hanya 40 peserta per angkatan demi menjaga kualitas tanya jawab langsung, dan tampilkan nama/perusahaan pendaftar terbaru secara real-time di landing page.',
            consequence: 'Kursus habis terjual dalam 3 hari, tercipta daftar tunggu (waiting list) 120 orang untuk angkatan berikutnya, dan reputasi brand dinilai sangat prestisius.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Kelangkaan nyata yang dikombinasikan dengan bukti sosial transparan menciptakan status prestise dan efek jaringan yang kuat.'
          },
          {
            id: 'c2',
            text: 'Pasang timer countdown palsu 15 menit dan tulis "Hanya tersisa 1 slot!" padahal kuota sebenarnya tidak terbatas.',
            consequence: 'Calon pembeli menyadari timer me-reset saat mereka me-refresh halaman; trik terbongkar di media sosial dan brand dicap sebagai penipu murahan.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Scarcity palsu merusak kepercayaan konsumen dan melanggar etika periklanan modern.'
          },
          {
            id: 'c3',
            text: 'Jangan batasi kuota, jangan pasang testimoni, dan jangan sebutkan berapa orang yang sudah mendaftar.',
            consequence: 'Calon pembeli merasa sepi peminat dan ragu mengeluarkan uang untuk program yang terlihat belum teruji.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Ketiadaan bukti sosial memperbesar persepsi risiko di benak calon pembeli.'
          },
          {
            id: 'c4',
            text: 'Tulis ulasan palsu menggunakan foto model dari Google Images dan profil fiktif.',
            consequence: 'Terbongkar oleh netizen yang melacak sumber foto via Google Lens, perusahaan dilaporkan ke perlindungan konsumen.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Pemalsuan bukti sosial adalah kejahatan reputasi dan pelanggaran etika berat.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-2-2',
          question: 'Mengapa prinsip Kelangkaan (Scarcity) menurut Robert Cialdini sangat efektif menggerakkan keputusan pembelian konsumen secara cepat?',
          options: [
            'Karena kelangkaan memicu reaktansi psikologis di mana manusia merasa kebebasan memilihnya terancam hilang jika tidak bertindak seketika.',
            'Karena barang yang langka selalu disubsidi oleh asosiasi perdagangan dunia.',
            'Karena manusia secara genetis diprogram untuk tidak menyukai barang yang berlimpah.',
            'Karena semua toko online diwajibkan menutup tokonya setelah 24 jam.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Prinsip kelangkaan memicu rasa takut kehilangan kesempatan (FOMO) dan reaktansi psikologis, mendorong konsumen bertindak cepat sebelum opsi tersebut hilang.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 2.3: MENTAL ACCOUNTING & FRICTIONLESS PAYMENT
    // --------------------------------------------------------------------------
    {
      id: 'beh-2-3',
      stepNumber: 'Langkah 2.3',
      stageTitle: 'TAHAP 2: Psikologi Harga & Perilaku Merek',
      label: 'Mental Accounting & The Frictionless Payment Illusion',
      domain: 'Psikologi',
      summary: 'Bagaimana otak mengelompokkan uang ke dalam laci-laci mental secara irasional (Richard Thaler) dan ilusi pembayaran tanpa gesekan (QRIS, Kartu Kredit, & In-Game Tokens).',
      x: 480,
      y: 420,
      level: 2,
      prerequisiteId: 'beh-2-2',
      microContent: {
        mentalModel: 'Mental Accounting (Richard Thaler - Nobel Ekonomi 2017) & Pain of Paying',
        analogy: 'Secara matematis, satu lembar uang Rp 100.000 memiliki nilai yang sama persis entah didapat dari tetesan keringat kerja lembur 10 jam atau dari menang undian kupon berhadiah. Namun di otak manusia, uang tersebut dimasukkan ke dalam laci mental yang berbeda: uang lembur disimpan di laci "Uang Sakral Kebutuhan Pokok" yang dijaga sangat hemat, sedangkan uang undian dimasukkan ke laci "Uang Main-main" yang langsung dihambur-hamburkan untuk belanja foya-foya malam ini juga.',
        academicInsight: 'Richard Thaler membuktikan bahwa manusia melanggar hukum ekonomi Fungibility (bahwa uang bersifat netral dan dapat saling menggantikan). Selain itu, Drazen Prelec dan George Loewenstein mengidentifikasi fenomena "The Pain of Paying": ketika Anda membayar dengan uang kertas fisik, otak merasakan rasa sakit kehilangan fisik saat lembaran uang berpindah tangan. Pembayaran tanpa gesekan (*Frictionless Payment* seperti kartu kredit, Apple Pay, QRIS, e-wallet, atau koin chip kasino) memisahkan tindakan konsumsi dari rasa sakit pembayaran, memicu peningkatan belanja konsumen sebesar 30% hingga 100% dibanding uang tunai.',
        crossDisciplinary: {
          connectionText: 'Psikologi Finansial x Model Bisnis FinTech & Mobile Gaming',
          domains: ['Psikologi', 'Keuangan'],
          insight: 'Currency Decoupling: Game mobile seperti Genshin Impact atau Roblox mengonversi uang tunai rupiah menjadi "Diamonds" atau "Robux". Konversi mata uang virtual ini menumpulkan nalar matematis Sistem 2 sehingga pemain lupa berapa ratus ribu rupiah yang sudah mereka belanjakan untuk membeli kostum digital.',
        },
        caseStudy: {
          companyOrFigure: 'Chip Kasino Las Vegas & Ekosistem Saldo Tertutup Starbucks Card',
          story: 'Kasino tidak pernah membiarkan pejudi menaruh uang tunai di atas meja roulette; mereka mewajibkan konversi ke chip plastik berwarna-warni untuk menonaktifkan rasa sakit kehilangan uang riil. Di era modern, Starbucks merancang aplikasi loyalitas di mana pelanggan mengisi saldo terlebih dahulu ($1.6 miliar kas mengendap). Membayar dengan memindai barcode di layar ponsel terasa menyenangkan seperti bermain game, mendorong pelanggan membeli kopi dan kue mahal tanpa beban emosional.',
          takeaway: 'Semakin sedikit gesekan fisik dalam proses pembayaran, semakin deras dan mudah uang mengalir keluar dari dompet konsumen.'
        },
        actionableSteps: [
          'Dalam pengelolaan keuangan pribadi: gunakan sistem amplop atau rekening bank terpisah yang tidak terhubung kartu debit untuk mengendalikan pengeluaran gaya hidup.',
          'Untuk pemilik bisnis: integrasikan metode pembayaran 1-tap (QRIS, e-wallet, auto-debit kartu) untuk mengeliminasi rasa sakit membayar (Pain of Paying) pelanggan Anda.',
          'Jika Anda ingin berhemat: paksa diri Anda membayar belanjaan harian menggunakan uang tunai fisik selama 30 hari untuk menyalakan kembali kepekaan rasa sakit pengeluaran kas.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Integrasi Pembayaran Bisnis: Transfer Bank Manual vs Integrasi E-Wallet / QRIS Otomatis',
        context: 'Aplikasi belanja online Anda mewajibkan pelanggan mentransfer via ATM dan mengirimkan foto bukti transfer manual. Rata-rata nilai belanja per transaksi (Average Order Value) stagnan di angka Rp 85.000.',
        dilemma: 'Langkah apa yang harus diambil untuk mendongkrak transaksi dan volume belanja?',
        choices: [
          {
            id: 'c1',
            text: 'Integrasikan payment gateway dengan pembayaran 1-tap QRIS, e-wallet, dan fitur PayLater dengan cicilan transparan.',
            consequence: 'Gesekan psikologis membayar (pain of paying) hilang seketika, rata-rata nilai transaksi naik menjadi Rp 140.000 (+64%), dan retensi belanja mingguan melonjak.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Menghilangkan friksi pembayaran dan memisahkan momen kenikmatan barang dari rasa sakit pembayaran uang tunai mendongkrak volume belanja secara masif.'
          },
          {
            id: 'c2',
            text: 'Tetap gunakan transfer manual karena tidak ada biaya MDR perbankan 1.5% dari penyedia payment gateway.',
            consequence: 'Menghemat biaya MDR 1.5%, namun kehilangan 50% potensi omzet transaksi dari pelanggan yang malas transfer manual.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Hemat receh biaya MDR namun membuang peluang pertumbuhan omzet raksasa adalah kesalahan rabun finansial.'
          },
          {
            id: 'c3',
            text: 'Wajibkan pelanggan membayar menggunakan koin emas fisik yang harus dikirim via pos ekspres.',
            consequence: 'Operasional lumpuh total, tidak ada pelanggan yang bertransaksi sama sekali.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Menciptakan gesekan ekstrem mematikan bisnis dalam waktu singkat.'
          },
          {
            id: 'c4',
            text: 'Naikkan harga barang 50% tanpa mengubah sistem transfer manual.',
            consequence: 'Penjualan anjlok drastis karena pelanggan menghadapi harga mahal sekaligus proses bayar yang menyiksa.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Memperburuk produk tanpa memperbaiki pengalaman belanja merusak bisnis.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-2-3',
          question: 'Mengapa penggunaan kartu kredit, QRIS, atau koin virtual dalam game secara ilmiah membuat orang berbelanja jauh lebih banyak dibanding menggunakan uang tunai fisik?',
          options: [
            'Karena metode pembayaran digital menumpulkan "Pain of Paying" (rasa sakit psikologis melihat dan menyerahkan fisik uang kertas), memisahkan momen konsumsi dari rasa kehilangan uang.',
            'Karena bank secara otomatis menggandakan saldo tabungan setiap kali kartu kredit digesek.',
            'Karena uang tunai fisik dilarang oleh undang-undang moneter internasional.',
            'Karena pembayaran digital selalu membebaskan pembeli dari kewajiban melunasi tagihan.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pembayaran non-tunai memutus hubungan visual dan fisik kehilangan uang, mereduksi rasa sakit membayar (Pain of Paying) dan membuat Sistem 1 meremehkan total biaya riil.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 3: BEHAVIORAL GAME THEORY & NEGOSIASI PENJUALAN
    // --------------------------------------------------------------------------
    {
      id: 'beh-3-1',
      stepNumber: 'Langkah 3.1',
      stageTitle: 'TAHAP 3: Behavioral Game Theory & Negosiasi',
      label: 'Dilema Tahanan (Prisoner\'s Dilemma) & Perang Harga',
      domain: 'Psikologi',
      summary: 'Bagaimana dua entitas rasional yang saling tidak percaya justru mengambil keputusan yang merugikan keduanya (perang harga banting margin), serta strategi keluar via diferensiasi nilai & Tit-for-Tat.',
      x: 780,
      y: 120,
      level: 2,
      prerequisiteId: 'beh-2-3',
      microContent: {
        mentalModel: 'Nash Equilibrium & Repeated Prisoner\'s Dilemma (Robert Axelrod)',
        analogy: 'Dua orang penjahat tertangkap polisi dan diinterogasi di ruangan terpisah. Jika keduanya sama-sama diam bekerja sama, keduanya hanya dipenjara 1 tahun. Namun jika salah satu berkhianat mengaku sementara yang lain diam, si pengkhianat bebas dan yang diam dipenjara 10 tahun. Akibat rasa saling tidak percaya, secara rasional keduanya memilih saling berkhianat dan akhirnya keduanya dipenjara 5 tahun. Dalam bisnis, ini persis seperti dua toko sebelah-menyebelah yang saling banting diskon harga sampai keduanya bangkrut bersama.',
        academicInsight: 'John Nash (Nobel Ekonomi 1994) membuktikan konsep Nash Equilibrium: kondisi di mana tidak ada pemain yang dapat memperbaiki posisinya secara sepihak jika strategi lawan tidak berubah. Dalam satu putaran (One-Shot Game), saling berkhianat (perang harga) adalah ekuilibrium dominan. Namun, Robert Axelrod membuktikan bahwa dalam interaksi berulang (Iterated Prisoner\'s Dilemma), strategi terbaik bukanlah saling membunuh, melainkan strategi "Tit-for-Tat": (1) Mulai dengan bekerja sama, (2) Balas tindakan curang lawan sekali saja, (3) Segera memaafkan dan kembali bekerja sama begitu lawan berhenti berbuat curang.',
        crossDisciplinary: {
          connectionText: 'Teori Permainan x Strategi Persaingan Pasar Duopoli',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Non-Price Competition: Perusahaan kelas dunia keluar dari jebakan perang harga bukan dengan ikut memotong margin, melainkan dengan memindahkan medan pertempuran ke ranah diferensiasi parit ekonomi (kecepatan layanan, brand prestige, garansi purnajual, atau program loyalitas).',
        },
        caseStudy: {
          companyOrFigure: 'Perang Diskon Tarif Ojek Online (Gojek vs Grab) & Maskapai Penerbangan LCC',
          story: 'Pada periode 2017-2019, Gojek dan Grab terlibat perang subsidi ongkos kirim dan tarif penumpang hingga membakar dana modal ventura ratusan juta dolar setiap bulan. Konsumen berpindah-pindah demi tarif Rp 1.000 lebih murah, sementara kedua perusahaan membukukan kerugian operasional masif. Akhirnya, kedua raksasa ini menyadari jebakan Prisoner\'s Dilemma, memangkas subsidi bakar uang, dan mulai fokus pada profitabilitas layanan ekosistem finansial dan langganan premium.',
          takeaway: 'Dalam perang harga murni, pemenangnya bukanlah yang menjual paling murah, melainkan pihak ketiga yang menjadi penonton; para petarung hanya saling melukai margin.'
        },
        actionableSteps: [
          'Jangan pernah merespons pemotongan harga pesaing dengan ikut memotong harga; balaslah dengan melipatgandakan nilai tambah (bonus servis, kecepatan garansi, atau edukasi gratis).',
          'Terapkan strategi sinyal pasar yang jelas (Price-Matching Guarantee): beri sinyal kepada kompetitor bahwa memotong harga tidak akan memberi mereka keuntungan pangsa pasar.',
          'Bangun parit biaya peralihan (Switching Costs) agar pelanggan tidak mudah berpaling hanya karena selisih diskon kecil kompetitor.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Perang Harga Ritel: Pesaing Memotong Harga 25%',
        context: 'Kompetitor utama di seberang toko Anda memotong harga produk unggulan sebesar 25% dan memasang spanduk provokatif. Margin kotor Anda saat ini 30%. Jika Anda ikut memotong harga 25%, margin Anda tinggal 5% dan arus kas terancam negatif.',
        dilemma: 'Bagaimana merespons manuver pesaing tanpa terjebak dalam kehancuran Prisoner\'s Dilemma?',
        choices: [
          {
            id: 'c1',
            text: 'Pertahankan harga Anda, namun tawarkan bundling paket bernilai tinggi: sertakan garansi ganti unit baru 1 tahun, gratis konsultasi personal, dan voucher belanja mitra senilai Rp 50.000.',
            consequence: 'Pelanggan cerdas menyadari paket Anda jauh lebih bernilai; margin laba Anda selamat, dan ketika pesaing kehabisan modal menanggung diskon 25%, mereka terpaksa menaikkan harga kembali dengan reputasi yang sudah rusak.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Melawan perang harga dengan diferensiasi paket nilai (Value Bundling) melindungi margin kas dan memenangkan persepsi kualitas jangka panjang.'
          },
          {
            id: 'c2',
            text: 'Ikut memotong harga 30% (lebih murah dari pesaing) dan pinjam utang bank berbunga tinggi untuk membakar uang demi mematikan lawan.',
            consequence: 'Pesaing ternyata disuntik modal oleh konglomerat besar; kas Anda habis dalam 4 bulan dan perusahaan Anda kolaps mendahului lawan.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Bakar uang tanpa keunggulan kantong modal tanpa batas adalah bunuh diri komersial.'
          },
          {
            id: 'c3',
            text: 'Kirim preman untuk merusak spanduk toko kompetitor di malam hari.',
            consequence: 'Terekam kamera CCTV, pemilik toko ditangkap polisi dan bisnis ditutup paksa.',
            scoreBonus: -40,
            isOptimal: false,
            explanation: 'Tindakan kriminalitas melanggar hukum dan memusnahkan kelangsungan badan usaha.'
          },
          {
            id: 'c4',
            text: 'Pasrah dan tutup toko selama 3 bulan sambil berharap kompetitor pindah kota.',
            consequence: 'Seluruh pelanggan tetap beralih permanen ke kompetitor, bisnis bangkrut karena ketiadaan omzet.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menyerah tanpa perlawanan strategi membunuh eksistensi usaha.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-3-1',
          question: 'Dalam teori permainan Prisoner\'s Dilemma, mengapa perang harga antara dua perusahaan sering kali berakhir pada kehancuran margin kedua belah pihak?',
          options: [
            'Karena kedua pemain secara rasional mengejar kepentingan individu jangka pendek dalam kondisi saling tidak percaya, menghasilkan Nash Equilibrium yang merugikan kedua belah pihak.',
            'Karena pemerintah mewajibkan semua perusahaan memiliki harga produk yang sama persis.',
            'Karena konsumen selalu menolak membeli produk yang sedang diskon.',
            'Karena bursa efek internasional melarang promosi penjualan.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Nash Equilibrium pada Prisoner\'s Dilemma terjadi saat kedua pihak saling memotong harga demi mengamankan diri, yang justru menghasilkan hasil kolektif terburuk bagi margin kedua perusahaan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 3.2: ARSITEKTUR PILIHAN (NUDGE THEORY)
    // --------------------------------------------------------------------------
    {
      id: 'beh-3-2',
      stepNumber: 'Langkah 3.2',
      stageTitle: 'TAHAP 3: Behavioral Game Theory & Negosiasi',
      label: 'Arsitektur Pilihan & Nudge Theory (Richard Thaler)',
      domain: 'Psikologi',
      summary: 'Mengubah perilaku manusia secara dramatis tanpa melarang atau memberikan insentif finansial besar, cukup dengan mengubah cara opsi disajikan secara default (*Choice Architecture*).',
      x: 780,
      y: 270,
      level: 3,
      prerequisiteId: 'beh-3-1',
      microContent: {
        mentalModel: 'Nudge Theory & Libertarian Paternalism (Richard Thaler & Cass Sunstein)',
        analogy: 'Jika Anda ingin anak-anak di kantin sekolah makan lebih banyak buah apel dan mengurangi kue cokelat manis, Anda tidak perlu melarang kue cokelat atau mendenda anak-anak. Cukup letakkan keranjang buah apel merah yang segar dan mengilap tepat setinggi pandangan mata anak di depan kasir, dan sembunyikan kue cokelat di rak bawah paling belakang. Mengubah posisi fisik opsi mengubah perilaku tanpa mencabut kebebasan memilih siapa pun. Inilah yang disebut "Nudge" (dorongan halus).',
        academicInsight: 'Buku monumental Nudge (Nobel Ekonomi 2017) membuktikan kekuatan dahsyat dari Opsi Standar (*Default Option*). Karena Sistem 1 manusia memiliki bias inersia (Status Quo Bias), mayoritas orang akan memilih opsi yang sudah tercentang otomatis tanpa repot-repot mengubahnya. Di negara-negara Eropa dengan sistem donor organ "Opt-In" (warga harus mendaftar secara sukarela untuk jadi donor), rasio pendonor hanya 12-15%. Namun di negara tetangga dengan sistem "Opt-Out" (warga otomatis menjadi donor kecuali jika mereka mencentang formulir menolak), rasio pendonor melonjak hingga 99%!',
        crossDisciplinary: {
          connectionText: 'Kebijakan Publik x Otomasi Tabungan FinTech',
          domains: ['Psikologi', 'Keuangan'],
          insight: 'Save More Tomorrow (SMarT): Karyawan enggan memotong gaji saat ini untuk tabungan pensiun karena loss aversion. Richard Thaler merancang program di mana karyawan berkomitmen menaikkan porsi tabungan pensiun mereka otomatis hanya saat mereka menerima kenaikan gaji di masa depan.',
        },
        caseStudy: {
          companyOrFigure: 'Program Pendaftaran Organ Eropa & Fitur Auto-Debit Gajian FinTech',
          story: 'Austria menerapkan sistem Opt-Out di mana secara default setiap warga negara terdaftar sebagai pendonor organ saat membuat KTP (namun bebas mencentang keluar jika tidak berkenan). Tingkat partisipasi donor di Austria mencapai 99.98%, sementara di Jerman yang menggunakan sistem Opt-In sukarela, tingkat donor hanya 12%. Di dunia finansial, aplikasi perbankan modern mengaktifkan fitur auto-debit investasi 10% tepat 1 jam setelah tanggal transfer gaji, melipatgandakan aset tabungan nasabah tanpa terasa menyiksa.',
          takeaway: 'Opsi yang Anda tetapkan sebagai default (standar tanpa tindakan pengguna) adalah penentu 80% hasil perilaku manusia.'
        },
        actionableSteps: [
          'Dalam desain antarmuka produk: jadikan opsi yang paling bermanfaat bagi pelanggan dan bisnis Anda sebagai pilihan tercentang default.',
          'Otomatiskan keputusan baik pribadi: atur auto-investasi reksa dana/saham tepat di hari gajian agar uang tidak sempat mengendap di rekening belanja.',
          'Hormati etika Nudge: jangan pernah menggunakan "Dark Patterns" (menjebak konsumen berlangganan tersembunyi yang sulit dibatalkan) karena akan menghancurkan retensi jangka panjang.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Desain Langganan Software: Menentukan Opsi Default Tagihan',
        context: 'Perusahaan SaaS Anda memiliki dua model penagihan: Langganan Bulanan (Rp 120.000/bln) dan Langganan Tahunan (Rp 990.000/thn - hemat 31%). Saat ini opsi Bulanan terpilih sebagai default.',
        dilemma: 'Bagaimana arsitektur pilihan diatur untuk meningkatkan arus kas tahunan di muka (upfront cash flow)?',
        choices: [
          {
            id: 'c1',
            text: 'Jadikan opsi Langganan Tahunan sebagai default pilihan aktif, beri label visual "Paling Hemat (Diskon 31%)", dan cantumkan harga setara bulanannya: "Hanya Rp 82.500/bulan".',
            consequence: 'Sebanyak 64% pelanggan baru memilih paket Tahunan secara default; arus kas di muka melonjak 180% dan angka churn rate tahunan berkurang drastis.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Mengombinasikan default option tahunan dengan framing harga bulanan yang lebih murah memanfaatkan inersia pilihan secara etis dan menguntungkan kedua belah pihak.'
          },
          {
            id: 'c2',
            text: 'Sembunyikan tombol batal langganan dan jebak kartu kredit pengguna agar tidak bisa unsubscribe selamanya.',
            consequence: 'Platform Anda dilaporkan ke asosiasi konsumen dan Google Play/App Store membekukan akun pengembang Anda karena praktik Dark Patterns.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Dark patterns manipulatif merusak integritas hukum dan menghancurkan reputasi bisnis.'
          },
          {
            id: 'c3',
            text: 'Hapus paket tahunan dan hanya terima bayaran tunai harian di kantor pos.',
            consequence: 'Konversi pelanggan jatuh ke titik nol.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Mempersulit opsi transaksi membunuh pertumbuhan bisnis.'
          },
          {
            id: 'c4',
            text: 'Biarkan kedua tombol kosong tanpa ada yang terpilih, dan buat formulir pendaftaran 5 halaman.',
            consequence: 'Mayoritas calon pengguna bingung dan meninggalkan halaman sebelum memilih.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Ketiadaan panduan default meningkatkan beban kognitif yang memicu pembatalan transaksi.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-3-2',
          question: 'Mengapa tingkat partisipasi donor organ di Austria mencapai lebih dari 99% sementara di negara tetangganya hanya sekitar 12%?',
          options: [
            'Karena Austria menggunakan sistem Default "Opt-Out" (secara otomatis terdaftar kecuali jika secara sadar mencentang menolak), memanfaatkan bias inersia status quo manusia.',
            'Karena pemerintah Austria memberikan hadiah mobil kepada setiap donor.',
            'Karena warga Austria secara genetik tidak memiliki rasa takut operasi.',
            'Karena undang-undang Austria melarang pemakaman tanpa donor organ.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Kekuatan Opsi Default (Nudge Theory): Manusia secara alami mengikuti jalur resistensi terkecil (Status Quo Bias), sehingga opsi default menentukan hasil akhir mayoritas populasi.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 3.3: PSIKOLOGI NEGOSIASI (BATNA & ZOPA)
    // --------------------------------------------------------------------------
    {
      id: 'beh-3-3',
      stepNumber: 'Langkah 3.3',
      stageTitle: 'TAHAP 3: Behavioral Game Theory & Negosiasi',
      label: 'Psikologi Negosiasi: Batas ZOPA & Kekuatan BATNA',
      domain: 'Psikologi',
      summary: 'Fondasi negosiasi taktis tingkat tinggi: Mengidentifikasi Best Alternative to a Negotiated Agreement (BATNA), memetakan Zone of Possible Agreement (ZOPA), dan teknik empati taktis Chris Voss.',
      x: 780,
      y: 420,
      level: 3,
      prerequisiteId: 'beh-3-2',
      microContent: {
        mentalModel: 'BATNA (Fisher & Ury - Getting to Yes) & Tactical Empathy (Chris Voss)',
        analogy: 'Ketika Anda pergi ke pasar mobil bekas dengan berjalan kaki dan saldo rekening kosong, sang penjual tahu Anda putus asa membutuhkan tumpangan pulang; Anda tidak memiliki posisi tawar sama sekali. Namun jika Anda datang ke dealer dengan menyetir mobil sewa yang nyaman, dan Anda sudah memegang penawaran tertulis dari dealer lain di saku jaket Anda, Anda memiliki kekuatan mutlak untuk berdiri dan melenggang pergi kapan saja. Kekuatan negosiasi sejati bukan terletak pada kelihaian bersilat lidah, melainkan pada seberapa kuat alternatif Anda di luar meja perundingan (BATNA).',
        academicInsight: 'Harvard Negotiation Project merumuskan dua pilar utama negosiasi: (1) BATNA (*Best Alternative to a Negotiated Agreement*): alternatif terbaik yang Anda miliki jika negosiasi saat ini gagal total; (2) ZOPA (*Zone of Possible Agreement*): rentang irisan antara harga terendah yang bersedia diterima penjual (Reservation Price Penjual) dan harga tertinggi yang bersedia dibayar pembeli (Reservation Price Pembeli). Jika rentang ini tidak beririsan (Negative ZOPA), kesepakatan tidak akan pernah tercapai secara rasional. Mantan negosiator sandera FBI Chris Voss menambahkan dimensi psikologi perilaku: penggunaan pertanyaan sokratik terkalibrasi (*Calibrated Questions* diawali "Bagaimana" atau "Apa") untuk memicu lawan bicara berpikir mencari solusi bagi Anda tanpa merasa diserang.',
        crossDisciplinary: {
          connectionText: 'Psikologi Negosiasi x Merger & Akuisisi Bisnis Korporat',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'The Walk-Away Power: Dalam transaksi M&A miliaran dolar, pihak yang paling bersedia untuk berdiri dan membatalkan kesepakatan (Walk Away) adalah pihak yang selalu memenangkan sebagian besar nilai ekonomi di atas meja.',
        },
        caseStudy: {
          companyOrFigure: 'Negosiasi Kompensasi Eksekutif & Teknik Mirroring Chris Voss (Never Split the Difference)',
          story: 'Dalam negosiasi sandera internasional maupun akuisisi komersial, Chris Voss membuktikan bahwa mendengarkan secara aktif dan menggunakan teknik "Mirroring" (mengulang 1-3 kata kunci terakhir lawan dengan intonasi bertanya lembut) mengaktifkan refleks Sistem 1 lawan untuk menguraikan maksud sebenarnya. Ditambah dengan pertanyaan magis: "Bagaimana saya bisa menyetujui tawaran itu jika anggaran operasional kami dibatasi dewan komisaris?", lawan dipaksa memecahkan masalah Anda secara sukarela tanpa merasa terancam.',
          takeaway: 'Jangan pernah masuk ke ruang negosiasi tanpa mengetahui BATNA Anda sendiri dan memperkirakan BATNA pihak lawan.'
        },
        actionableSteps: [
          'Sebelum negosiasi apa pun (gaji, kontrak vendor, akuisisi): tuliskan secara konkret apa alternatif terbaik Anda jika kesepakatan batal 100%.',
          'Perkuat BATNA Anda sebelum bernegosiasi: miliki minimal 2 penawaran alternatif dari pihak lain agar Anda tidak memancarkan aura putus asa.',
          'Gunakan pertanyaan terkalibrasi: alih-alih mengatakan "Harga ini kemahalan!", tanyakan dengan tenang: "Bagaimana cara kita menyesuaikan angka ini agar tetap masuk dalam batas anggaran kami?".'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Negosiasi Kontrak Vendor: Menghadapi Kenaikan Harga Sepihak 20%',
        context: 'Pemasok bahan baku tunggal Anda tiba-tiba mengirimkan surat bahwa harga kontrak tahun depan naik 20% dan menuntut tanda tangan dalam 3 hari, atau pasokan diputus.',
        dilemma: 'Langkah taktis apa yang harus diambil untuk mengendalikan negosiasi tanpa memicu penghentian pasokan pabrik?',
        choices: [
          {
            id: 'c1',
            text: 'Gunakan jeda 24 jam untuk menghubungi 2 pemasok alternatif demi membangun BATNA darurat, lalu gelar pertemuan tatap muka dan ajukan pertanyaan terkalibrasi: "Bagaimana struktur biaya kenaikan ini dihitung, dan bagaimana kami bisa mempertahankan volume pesanan jika harga naik sebesar itu?".',
            consequence: 'Pemasok menyadari Anda tidak bisa diintimidasi, transparansi komponen biaya terbuka, dan disepakati kompromi kenaikan moderat 6% yang diimbangi perpanjangan tempo pembayaran (TOP).',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Membangun BATNA sebelum merespons dan menggunakan pertanyaan terkalibrasi Chris Voss membalikkan tekanan tanpa merusak hubungan kemitraan.'
          },
          {
            id: 'c2',
            text: 'Langsung tanda tangani kenaikan 20% tanpa tawar-menawar karena panik pabrik akan berhenti beroperasi besok pagi.',
            consequence: 'Pemasok melihat kelemahan Anda; margin perusahaan tergerus parah dan tahun depan pemasok akan menaikkan harga lebih tinggi lagi.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menyerah seketika pada tuntutan pertama tanpa memetakan BATNA mengikis otoritas komersial Anda selamanya.'
          },
          {
            id: 'c3',
            text: 'Balas dengan email makian kasar dan ancam akan melaporkan pemilik pemasok ke polisi.',
            consequence: 'Pemasok memutus pasokan hari itu juga, pabrik Anda berhenti beroperasi, dan kerugian harian membengkak ratusan juta.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Ledakan emosi merusak ZOPA dan memicu pembalasan irasional dari pihak lawan.'
          },
          {
            id: 'c4',
            text: 'Abaikan surat tersebut dan pura-pura tidak pernah menerimanya.',
            consequence: 'Tenggat waktu lewat, sistem pengiriman bahan baku terblokir otomatis di gudang pemasok.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Penghindaran pasif tidak menyelesaikan sengketa komersial yang memiliki batas waktu kritis.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-3-3',
          question: 'Apa fungsi mendasar dari BATNA (Best Alternative to a Negotiated Agreement) dalam negosiasi bisnis tingkat tinggi?',
          options: [
            'Sebagai tolok ukur kekuatan terkuat Anda: batas bawah di mana Anda berhak berdiri dan membatalkan negosiasi jika penawaran lawan lebih buruk daripada alternatif yang sudah Anda miliki di luar meja.',
            'Sebagai dokumen hukum rahasia yang wajib diserahkan kepada notaris sebelum rapat dimulai.',
            'Sebagai daftar kelemahan pribadi yang harus diakui di depan lawan bicara.',
            'Sebagai sistem diskon pembayaran tunai di muka.'
          ],
          correctAnswerIndex: 0,
          explanation: 'BATNA adalah kekuatan penawar sejati (walk-away power); negosiator dengan BATNA yang kuat tidak dapat dipaksa menerima kesepakatan buruk karena memiliki alternatif yang lebih baik di luar.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 4: PSIKOLOGI KEPEMIMPINAN & RETENSI MANUSIA
    // --------------------------------------------------------------------------
    {
      id: 'beh-4-1',
      stepNumber: 'Langkah 4.1',
      stageTitle: 'TAHAP 4: Psikologi Kepemimpinan & Retensi',
      label: 'Insentif, Dopamine Loops, & Gamifikasi Perilaku',
      domain: 'Psikologi',
      summary: 'Mekanisme biologis di balik pembentukan kebiasaan (*Habit Loops*): Pemicu (*Cue*), Rutinitas (*Routine*), dan Hadiah Tak Terduga (*Variable Rewards* ala B.F. Skinner).',
      x: 1080,
      y: 180,
      level: 3,
      prerequisiteId: 'beh-3-3',
      microContent: {
        mentalModel: 'The Hook Model (Nir Eyal) & Variable Ratio Schedule of Reinforcement (B.F. Skinner)',
        analogy: 'Jika sebuah mesin slot kasino memberikan uang Rp 50.000 setiap kali Anda menarik tuas secara teratur, Anda akan cepat bosan dan menganggapnya pekerjaan membosankan. Namun karena mesin slot memberikan hadiah acak yang tak terduga (kadang kalah, kadang menang kecil, kadang jackpot besar), otak melepaskan semburan dopamin intensif pada momen antisipasi ketidakpastian. Dopamin bukanlah hormon kenikmatan saat menerima hadiah, melainkan hormon gairah dan motivasi saat mengantisipasi kemungkinan hadiah.',
        academicInsight: 'B.F. Skinner menemukan bahwa hewan laboratorium bekerja paling giat dan terus-menerus menekan tombol saat diberi imbalan berbasis Variable Ratio Schedule (imbalan diberikan secara acak dan tidak terduga). Nir Eyal memformalkan ini ke dalam Hook Model (Cue $\rightarrow$ Action $\rightarrow$ Variable Reward $\rightarrow$ Investment). Platform teknologi raksasa (Instagram, TikTok, Duolingo) dan platform retensi belajar (seperti sistem Streak dan Rank Points di NODUS) memanfaatkan siklus dopamin ini untuk membangun kebiasaan belajar harian yang melekat kuat secara neurobiologis.',
        crossDisciplinary: {
          connectionText: 'Neurobiologi Perilaku x Retensi Pengguna Aplikasi Digital',
          domains: ['Psikologi', 'Data & Analitik'],
          insight: 'Loss Aversion on Streaks: Begitu pengguna membangun streak belajar 30 hari berturut-turut di Duolingo atau NODUS, motivasi terkuat mereka bukan lagi mengejar poin baru, melainkan ketakutan kehilangan (loss aversion) status streak yang sudah mereka bangun dengan susah payah.',
        },
        caseStudy: {
          companyOrFigure: 'Sistem Streak Gamifikasi Duolingo & Program Insentif Sales Tech Startup',
          story: 'Duolingo melipatgandakan metrik Daily Active Users (DAU) bukan dengan menambah tata bahasa rumit, melainkan dengan merombak sistem gamifikasi: fitur Streak harian dengan animasi burung Duo yang mengingatkan pengguna, peti harta karun acak (Variable Rewards), dan papan peringkat liga mingguan. Di ranah korporat, perusahaan sales modern mengganti komisi kaku bulanan dengan sistem "Spot Bonus" acak di depan seluruh tim, memicu antusiasme kompetitif tim penjualan.',
          takeaway: 'Produk dan tempat kerja yang memenangkan retensi manusia jangka panjang adalah sistem yang berhasil mengubah rutinitas menjadi petualangan pencapaian yang memuaskan dopamin.'
        },
        actionableSteps: [
          'Rancang sistem umpan balik instan: berikan visualisasi progres mikro (seperti progress bar atau checklist selesai) pada setiap pencapaian kecil pengguna/karyawan.',
          'Gunakan imbalan variatif tak terduga (surprise rewards) daripada sekadar jadwal bonus yang kaku dan mudah ditebak.',
          'Manfaatkan kekuatan investasi pengguna: dorong pengguna menaruh data, kustomisasi profil, atau riwayat karya agar switching costs mereka semakin tinggi.'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Retensi Aplikasi: Diskon Cashback Terus-Menerus vs Sistem Gamifikasi Streak & RP',
        context: 'Aplikasi edukasi profesional Anda mengalami penurunan retensi minggu kedua (D14 Retention hanya 18%). Tim marketing mengusulkan membakar anggaran kas dengan membagikan cashback Rp 10.000 per login harian.',
        dilemma: 'Mekanisme retensi mana yang terbukti berkelanjutan dan membangun kebiasaan intrinsik pengguna?',
        choices: [
          {
            id: 'c1',
            text: 'Bangun ekosistem gamifikasi psikologis: terapkan sistem Learning Streak harian, peringkat Rank Points (RP), lencana penguasaan materi, dan tantangan kasus taktis mingguan.',
            consequence: 'Retensi D14 melonjak ke 44% tanpa membakar anggaran kas operasional; pengguna belajar atas dasar motivasi intrinsik dan kebanggaan status penguasaan ilmu.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Gamifikasi dopamin berbasis pencapaian status dan streak memanfaatkan loss aversion dan variable rewards, menghasilkan retensi organik yang jauh lebih kuat daripada insentif uang tunai sesaat.'
          },
          {
            id: 'c2',
            text: 'Bakar uang kas dengan membagikan saldo cashback tunai Rp 10.000 setiap hari kepada semua yang login.',
            consequence: 'Pengguna hanya login 2 detik untuk klaim saldo tanpa membaca materi sama sekali; saat dana subsidi kas habis 2 bulan kemudian, seluruh pengguna seketika menghilang.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Membeli retensi dengan subsidi tunai menciptakan pemburu insentif oportunis (mercenaries) yang tidak memiliki loyalitas produk.'
          },
          {
            id: 'c3',
            text: 'Kirim notifikasi SMS dan email spam setiap 15 menit jika pengguna tidak membuka aplikasi.',
            consequence: 'Pengguna marah, menghapus aplikasi secara massal dan memberikan ulasan bintang 1 di App Store.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Spam agresif menghancurkan nilai pengalaman pengguna.'
          },
          {
            id: 'c4',
            text: 'Hapus seluruh materi aplikasi dan ubah platform menjadi situs judi roulette.',
            consequence: 'Aplikasi diblokir Kementerian Kominfo dan pemilik bisnis berhadapan dengan tuntutan pidana.',
            scoreBonus: -45,
            isOptimal: false,
            explanation: 'Melanggar hukum dan membelokkan esensi produk secara ilegal adalah bunuh diri bisnis total.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-4-1',
          question: 'Menurut riset B.F. Skinner dan The Hook Model (Nir Eyal), mengapa jadwal imbalan acak (Variable Rewards) jauh lebih adiktif dan efektif membentuk kebiasaan dibanding imbalan yang teratur dan pasti?',
          options: [
            'Karena lonjakan neurotransmitter dopamin di otak mencapai puncaknya pada saat mengantisipasi ketidakpastian hasil, bukan saat hadiah sudah diterima.',
            'Karena hadiah yang acak selalu bernilai jutaan dolar tunai.',
            'Karena otak manusia tidak menyukai kepastian gaji bulanan.',
            'Karena algoritma ponsel pintar hanya berfungsi saat menerima data acak.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Dopamin adalah pendorong motivasi dan pencarian; ketidakpastian hasil (Variable Rewards) memicu antisipasi intensif di sirkuit otak, membangun kebiasaan yang melekat kuat.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 4.2: OVERCONFIDENCE BIAS & FUNDAMENTAL ATTRIBUTION ERROR
    // --------------------------------------------------------------------------
    {
      id: 'beh-4-2',
      stepNumber: 'Langkah 4.2',
      stageTitle: 'TAHAP 4: Psikologi Kepemimpinan & Retensi',
      label: 'Overconfidence Bias & Fundamental Attribution Error',
      domain: 'Psikologi',
      summary: 'Mengapa 90% pebisnis pemula merasa di atas rata-rata (Dunning-Kruger), bahaya keangkuhan CEO (*CEO Hubris*) dalam alokasi modal, dan bias atribusi fundamental.',
      x: 1080,
      y: 360,
      level: 4,
      prerequisiteId: 'beh-4-1',
      microContent: {
        mentalModel: 'Dunning-Kruger Effect & Fundamental Attribution Error (FAE)',
        analogy: 'Ketika seorang pengemudi mobil berhasil menyalip kendaraan lain di jalan tol yang lancar, ia tersenyum bangga dan berpikir: "Saya memang pengemudi ulung berbakat alami!". Namun ketika mobilnya tergelincir menabrak pembatas jalan saat hujan, ia segera keluar dan memaki-maki dinas pekerjaan umum: "Aspal tol ini licin dan tidak beres!". Inilah Fundamental Attribution Error: kita mengaitkan keberhasilan kita pada kejeniusan internal diri sendiri, namun mengaitkan kegagalan kita pada nasib buruk atau kesalahan pihak luar.',
        academicInsight: 'Penelitian psikologi membuktikan bahwa lebih dari 90% pengemudi mobil menganggap kemampuan mengemudi mereka "di atas rata-rata" (Lake Wobegon Effect / Illusory Superiority) — sebuah kemustahilan statistik. Dunning-Kruger Effect membuktikan bahwa individu dengan kompetensi paling rendah di suatu bidang justru memiliki rasa percaya diri paling tinggi karena mereka belum memiliki cukup pengetahuan untuk menyadari betapa luasnya hal yang belum mereka ketahui. Dalam dunia korporasi, *CEO Hubris* (keangkuhan ego eksekutif) bertanggung jawab atas 70% kegagalan mega-akuisisi bernilai triliunan rupiah yang berujung pada kehancuran pemegang saham.',
        crossDisciplinary: {
          connectionText: 'Psikologi Kepemimpinan x Alokasi Modal & Tata Kelola Korporat',
          domains: ['Psikologi', 'Bisnis'],
          insight: 'Pre-Mortem Analysis (Gary Klein): Untuk menetralkan Overconfidence Bias sebelum meluncurkan proyek besar, kumpulkan tim dan katakan: "Bayangkan hari ini adalah 18 bulan ke depan, dan proyek kita gagal total secara memalukan. Sekarang tuliskan riwayat mengapa kegagalan itu bisa terjadi." Ini melegalkan kritik nalar sehat Sistem 2.',
        },
        caseStudy: {
          companyOrFigure: 'Bencana Mega-Akuisisi AOL dan Time Warner ($164 Miliar - 2000)',
          story: 'Pada puncak gelembung dot-com, CEO AOL Steve Case dan pimpinan Time Warner diliputi euforia overconfidence ekstrem bahwa penggabungan portal internet AOL dan media cetak Time Warner akan menciptakan monopoli media global abadi. Mereka mengabaikan benturan budaya kerja dan sinyal saturasi internet dial-up. Hanya dua tahun kemudian, merger tersebut mencatatkan kerugian write-off terbesar dalam sejarah bisnis dunia ($99 miliar) dan kedua perusahaan terpaksa bercerai dengan kehancuran nilai yang tragis.',
          takeaway: 'Musuh terbesar kesuksesan jangka panjang bukanlah kompetitor di luar sana, melainkan ego dan rasa kebal terhadap kesalahan di dalam kepala Anda sendiri.'
        },
        actionableSteps: [
          'Gunakan analisis Pre-Mortem sebelum menyetujui anggaran modal besar: asumsikan proyek telah gagal dan lacak penyebab potensialnya sejak dini.',
          'Bentuk "Komite Red Team" independen yang bertugas khusus mencari celah kelemahan dan risiko dari proposal ekspansi bisnis Anda.',
          'Terapkan kerendahan hati intelektual (Epistemic Humility): tanyakan pada diri sendiri setiap kuartal, "Keyakinan bisnis apa yang saya pegang teguh saat ini yang kemungkinan besar ternyata keliru?".'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Ekspansi Modal CEO: Mengakuisisi Kompetitor demi Dominasi Pasar',
        context: 'Perusahaan teknologi Anda baru saja mencatat pertumbuhan laba 200% tahun ini. Dewan direksi diliputi rasa percaya diri luar biasa dan mengusulkan mengambil pinjaman bank Rp 100 miliar untuk mengakuisisi perusahaan startup yang sedang rugi dengan valuasi premium 300%.',
        dilemma: 'Langkah kepemimpinan apa yang harus diambil untuk menguji kelayakan akuisisi dari bias CEO Hubris?',
        choices: [
          {
            id: 'c1',
            text: 'Perintahkan pelaksanaan sesi "Pre-Mortem Analysis" independen dan tugaskan tim keuangan menguji skenario terburuk jika sinergi pendapatan gagal terwujud 0%, serta batasi porsi pembayaran berbasis target kinerja (earn-out).',
            consequence: 'Analisis membongkar bahwa integrasi teknologi target membutuhkan biaya tersembunyi Rp 30 miliar; struktur kesepakatan direnegosiasi menjadi lebih murah dan perusahaan terhindar dari kehancuran modal.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Metode Pre-Mortem dan evaluasi skeptis adalah penawar terbaik terhadap racun Overconfidence Bias dan ego manajerial.'
          },
          {
            id: 'c2',
            text: 'Langsung setujui akuisisi seketika dan pecat setiap staf keuangan yang berani mempertanyakan keputusan Anda.',
            consequence: 'Integrasi gagal total, target startup terus merugi Rp 5 miliar per bulan, beban utang menenggelamkan kas perusahaan induk.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Arogansi kepemimpinan otoriter membungkam sinyal peringatan dini dan memicu kehancuran korporasi.'
          },
          {
            id: 'c3',
            text: 'Tolak mentah-mentah seluruh inovasi dan jangan pernah merekrut karyawan baru selamanya.',
            consequence: 'Perusahaan mengalami stagnasi operasional dan perlahan mati ditelan zaman.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Paranoia ekstrem tanpa analisis objektif menghambat pertumbuhan alami organisasi.'
          },
          {
            id: 'c4',
            text: 'Gunakan dana pinjaman untuk membeli jet pribadi direksi dengan alasan menaikkan prestise perusahaan.',
            consequence: 'Pemegang saham publik murka, harga saham anjlok dan dewan komisaris memecat seluruh dewan direksi secara memalukan.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Penyalahgunaan modal korporasi untuk kemewahan pribadi adalah pelanggaran berat fiduciary duty.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-beh-4-2',
          question: 'Bagaimana analisis Pre-Mortem (Gary Klein) secara efektif menetralkan bias Overconfidence sebelum sebuah proyek bisnis berskala besar dieksekusi?',
          options: [
            'Dengan memaksa tim berasumsi bahwa proyek telah gagal total di masa depan, sehingga memberi izin psikologis bagi anggota tim untuk membongkar celah kelemahan secara terbuka tanpa takut dicap pesimis.',
            'Dengan memotong anggaran proyek sebesar 90% secara sepihak.',
            'Dengan menunjuk konsultan eksternal untuk menggantikan seluruh tim manajemen.',
            'Dengan mendoakan proyek di tempat ibadah tanpa perlu membuat laporan risiko.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pre-Mortem membalikkan dinamika optimisme buta: daripada bertanya "apakah rencana ini akan berhasil?", tim ditugaskan mencari "mengapa rencana ini gagal?", melegalkan nalar kritis Sistem 2.'
        }
      ]
    }
  ],
  edges: [
    // Tahap 1: Arsitektur Pikiran
    { id: 'be1', from: 'beh-1-1', to: 'beh-1-2', label: 'Asimetri Nilai', domains: ['Psikologi', 'Psikologi'] },
    { id: 'be2', from: 'beh-1-2', to: 'beh-1-3', label: 'Jangkar Persepsi', domains: ['Psikologi', 'Bisnis'] },
    // Tahap 1 -> Tahap 2
    { id: 'be3', from: 'beh-1-3', to: 'beh-2-1', label: 'Dominasi Asimetris', domains: ['Psikologi', 'Bisnis'] },
    // Tahap 2: Harga & Merek
    { id: 'be4', from: 'beh-2-1', to: 'beh-2-2', label: 'Konversi Kerumunan', domains: ['Bisnis', 'Psikologi'] },
    { id: 'be5', from: 'beh-2-2', to: 'beh-2-3', label: 'Erosi Friksi Kas', domains: ['Psikologi', 'Keuangan'] },
    // Tahap 2 -> Tahap 3
    { id: 'be6', from: 'beh-2-3', to: 'beh-3-1', label: 'Interaksi Strategis', domains: ['Keuangan', 'Psikologi'] },
    // Tahap 3: Teori Permainan & Negosiasi
    { id: 'be7', from: 'beh-3-1', to: 'beh-3-2', label: 'Arsitektur Default', domains: ['Psikologi', 'Psikologi'] },
    { id: 'be8', from: 'beh-3-2', to: 'beh-3-3', label: 'Batas ZOPA & BATNA', domains: ['Psikologi', 'Bisnis'] },
    // Tahap 3 -> Tahap 4
    { id: 'be9', from: 'beh-3-3', to: 'beh-4-1', label: 'Retensi Dopamin', domains: ['Bisnis', 'Psikologi'] },
    // Tahap 4: Kepemimpinan & Retensi
    { id: 'be10', from: 'beh-4-1', to: 'beh-4-2', label: 'Kalibrasi Ego & FAE', domains: ['Psikologi', 'Bisnis'] },

    // Cross-Domain Synergies
    { id: 'be-syn-1', from: 'beh-1-2', to: 'beh-3-2', label: 'Loss Aversion -> Default Bias', domains: ['Psikologi', 'Ekonomi'] },
    { id: 'be-syn-2', from: 'beh-2-3', to: 'beh-4-1', label: 'Virtual Currency -> Dopamine Hook', domains: ['Psikologi', 'Data & Analitik'] }
  ]
};
