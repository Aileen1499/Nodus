import { MindmapData } from '../types';

export const PRESET_QUERIES = [
  'Strategi Bisnis & Model Mental Miliarder',
  'Valuasi Saham, Trading & Makroekonomi',
  'Ekspor-Impor, Rantai Pasok & Geopolitik',
  'Seni Negosiasi & Komunikasi Eksekutif',
  'Financial Modeling, Excel & Data Analytics',
  'Hukum Bisnis, Kontrak & Efisiensi Pajak',
  'Psikologi Marketing & Arsitektur Keputusan F&B',
];

export const MOCK_MINDMAPS: Record<string, MindmapData> = {
  // ============================================================================
  // 1. STRATEGI BISNIS & MODEL MENTAL MILIARDER
  // ============================================================================
  'Strategi Bisnis & Model Mental Miliarder': {
    id: 'mindmap-miliarder-mental-models',
    topic: 'Strategi Bisnis & Model Mental Miliarder',
    rootId: 'miliarder-root',
    description: 'Sintesis multi-disiplin: Dari Parit Ekonomi Warren Buffett, First Principles Elon Musk, Flywheel Jeff Bezos, hingga Siklus Ray Dalio.',
    nodes: [
      {
        id: 'miliarder-root',
        label: 'Arsitektur Kapitalisme & Ekuitas',
        domain: 'Bisnis',
        summary: 'Kekayaan generasi miliarder sejati diciptakan melalui kepemilikan ekuitas pada mesin produktif yang scalable, bukan penukaran jam kerja fisik.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Bekerja demi gaji bagaikan menimba air sumur dengan ember: saat tangan Anda lelah atau sakit, aliran air seketika terhenti. Para miliarder menghabiskan tahun-tahun awal mereka bukan untuk menimba air, melainkan merancang sistem pipa saluran air otomatis. Begitu pipa terpasang, air terus mengalir deras bahkan ketika mereka sedang terlelap tidur.',
          crossDisciplinary: {
            connectionText: 'Keuangan Korporat x Psikologi Leverage',
            domains: ['Keuangan', 'Psikologi'],
            insight:
              'Memahami "Leverage" (modal, sistem software, media, dan SDM) memungkinkan satu keputusan tepat melipatgandakan dampak finansial hingga jutaan kali lipat tanpa batas jam fisik harian.',
          },
          actionableSteps: [
            'Audit pendapatan Anda: Berapa persen pemasukan yang murni berasal dari jam kerja fisik (linear) vs kepemilikan aset/sistem (leverage)?',
            'Identifikasi 1 aset produktif yang bisa Anda bangun atau miliki (ekuitas bisnis, software, royalti hak cipta, atau portofolio investasi).',
            'Tingkatkan "Judgment" eksekutif Anda: baca laporan tahunan emiten dan keputusan modal para CEO terbaik dunia.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Pilihan Alokasi Waktu & Modal',
          context: 'Anda memiliki tabungan Rp 100 Juta dan waktu luang 15 jam per minggu setelah jam kerja.',
          dilemma: 'Bagaimana mengalokasikan sumber daya ini untuk 3 tahun ke depan?',
          choices: [
            {
              id: 'c1',
              text: 'Mengambil lembur sampingan ojek online atau freelance ketik manual untuk pendapatan tunai instan.',
              consequence: 'Uang tunai bertambah harian, namun begitu Anda berhenti mengemudi, pendapatan kembali nol tanpa ada aset yang terbangun.',
              scoreBonus: 15,
              isOptimal: false,
              explanation: 'Ini adalah perangkap pertukaran waktu linear yang tidak menciptakan efek multiplikasi kekayaan jangka panjang.',
            },
            {
              id: 'c2',
              text: 'Investasikan waktu untuk membangun produk digital/agensi berbasis sistem otomatis dan investasikan modal ke ekuitas bisnis bertumbuh.',
              consequence: 'Tahun pertama mungkin terasa lambat, namun tahun ke-3 Anda memiliki mesin arus kas mandiri dengan nilai valuasi tinggi.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Prinsip penciptaan ekuitas: membangun sistem ber-leverage yang menghasilkan nilai tanpa keterikatan fisik konstan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-mil-1',
            question: 'Apa faktor pembeda utama antara cara orang kaya mengumpulkan modal dibandingkan pekerja berpenghasilan tinggi?',
            options: [
              'Pekerja berpenghasilan tinggi menabung uang tunai di tabungan bank, sementara orang kaya menaruhnya di obligasi pemerintah',
              'Orang kaya berfokus mengakumulasi dan melipatgandakan kepemilikan aset ekuitas produktif (equity ownership), bukan mengandalkan upah per jam',
              'Orang kaya menghindari segala bentuk risiko dan tidak pernah mempekerjakan karyawan',
              'Pekerja berpenghasilan tinggi menghabiskan waktu lebih sedikit untuk belajar',
            ],
            correctAnswerIndex: 1,
            explanation: 'Kekayaan sejati dibangun di atas kepemilikan atas mesin ekonomi yang menghasilkan arus kas (bisnis, saham, hak kekayaan intelektual).',
          },
        ],
      },
      {
        id: 'buffett-moat',
        label: 'Warren Buffett & Charlie Munger',
        domain: 'Keuangan',
        summary: 'Economic Moats (Parit Pertahanan), Circle of Competence, dan kekuatan eksponensial Compounding Interest.',
        x: 180,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Bayangkan bisnis Anda adalah kastil di abad pertengahan. Pesaing Anda adalah pasukan musuh yang ingin merebut benteng itu. Warren Buffett tidak tertarik seberapa megah kastil Anda di luar; ia hanya peduli seberapa lebar dan dalam parit pertahanan (Economic Moat) di sekeliling benteng tersebut: apakah ada buaya switching-cost, network effect, atau kekuatan brand yang membuat pesaing mustahil mendekat.',
          crossDisciplinary: {
            connectionText: 'Keuangan Nilai x Psikologi Emosi Investor',
            domains: ['Keuangan', 'Psikologi'],
            insight:
              'Munger mengajarkan "Inversion" (membalik masalah): alih-alih mencari cara agar sukses cepat, cari tahu apa yang pasti membuat Anda bangkrut dan hindari hal tersebut seumur hidup.',
          },
          actionableSteps: [
            'Tentukan "Circle of Competence" Anda: tuliskan 3 industri yang benar-benar Anda pahami mekanismenya dan tolak berinvestasi di luar itu.',
            'Analisis parit pertahanan bisnis Anda: Apakah Anda punya Pricing Power, Network Effect, atau Cost Advantage?',
            'Praktikkan aturan Charlie Munger: "Pembalikan Masalah" (Inversion) sebelum menandatangani kontrak kerja sama penting.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Evaluasi Akuisisi Bisnis Waralaba Minuman',
          context: 'Ada tawaran membeli bisnis minuman boba viral yang saat ini sedang ramai antreannya.',
          dilemma: 'Harganya Rp 300 Juta dengan proyeksi balik modal dalam 8 bulan.',
          choices: [
            {
              id: 'c1',
              text: 'Beli langsung karena melihat tren media sosial saat ini sedang viral tanpa mengecek parit pertahanannya.',
              consequence: 'Dalam 6 bulan tren meredup, kompetitor membuka gerai serupa di seberang jalan, modal Anda terjebak deadstock.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Bisnis berbasis hype musiman tidak memiliki parit ekonomi (moat) dan mudah digantikan dalam semalam.',
            },
            {
              id: 'c2',
              text: 'Tolak tawaran tersebut dan alokasikan modal ke bisnis distributor barang primer yang memiliki kontrak eksklusif pasokan dan switching cost tinggi.',
              consequence: 'Pertumbuhan mungkin lebih bertahap, namun arus kas stabil selama 10 tahun dan kebal dari tren musiman.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Pendekatan Buffett-Munger mengutamakan daya tahan parit ekonomi (predictable moat) di atas lonjakan sesaat.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-buf-1',
            question: 'Apa definisi "Circle of Competence" (Lingkaran Kompetensi) menurut Charlie Munger?',
            options: [
              'Mengetahui sedikit tentang semua hal agar bisa berbicara di setiap topik seminar',
              'Memahami batasan yang jelas mengenai apa yang benar-benar Anda pahami secara mendalam dan berdisiplin menolak bertindak di luar batasan itu',
              'Memperluas gelar akademis formal sebanyak mungkin',
              'Mengikuti rekomendasi saham dari forum media sosial yang paling populer',
            ],
            correctAnswerIndex: 1,
            explanation: 'Mengetahui batasan pengetahuan Anda jauh lebih berharga daripada merasa tahu segalanya. Kesalahan fatal terjadi saat orang berspekulasi di luar lingkaran pemahamannya.',
          },
        ],
      },
      {
        id: 'musk-first-principles',
        label: 'Elon Musk: First Principles',
        domain: 'Bisnis',
        summary: 'Membongkar masalah ke hukum fisika dasar alih-alih meniru tradisi industri (Reasoning by Analogy).',
        x: 620,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Koki biasa memasak dengan meniru resep orang lain (Reasoning by Analogy): jika restoran sebelah menjual kue Rp 500.000, ia ikut menjual Rp 480.000. Koki First Principles membedah bahan dasarnya: tepung Rp 10.000, telur Rp 15.000, gula Rp 12.000. Total Rp 37.000. Ia menciptakan kue dengan biaya 90% lebih murah dan kualitas lebih terkontrol.',
          crossDisciplinary: {
            connectionText: 'Inovasi Manufaktur x Psikologi Bias Status Quo',
            domains: ['Bisnis', 'Psikologi'],
            insight:
              'Bias "Social Proof" membuat 95% industri membayar biaya perantara yang mahal karena "dari dulu memang begitu". First Principles meruntuhkan batas markup industri tersebut.',
          },
          actionableSteps: [
            'Pilih 1 pos biaya terbesar dalam proyek Anda dan bedah menjadi komponen atomik bahan dasarnya.',
            'Tanyakan: "Apakah aturan ini hukum alam yang tak terbantahkan, atau hanya konvensi lama yang belum diuji ulang?"',
            'Lakukan negosiasi ulang dengan vendor berdasarkan harga komponen bahan mentah riil.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Efisiensi Biaya Produksi Software Perusahaan',
          context: 'Vendor cloud enterprise menagih Rp 45 Juta/bulan untuk lisensi software database.',
          dilemma: 'Tim teknik Anda melaporkan 80% fitur canggih vendor tersebut sebenarnya tidak pernah dipakai.',
          choices: [
            {
              id: 'c1',
              text: 'Tetap bayar lisensi mahal demi rasa aman dan formalitas kepatuhan.',
              consequence: 'Biaya operasional membengkak Rp 540 Juta per tahun untuk fitur yang sia-sia.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Mengabaikan bedah biaya atomik membebani margin bisnis Anda secara berkepanjangan.',
            },
            {
              id: 'c2',
              text: 'Gunakan arsitektur open-source terverifikasi dengan server mandiri yang hanya memproses fitur inti yang dibutuhkan.',
              consequence: 'Biaya turun menjadi Rp 3 Juta/bulan, kontrol data 100% in-house, dan menghemat Rp 500 Juta per tahun.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Langkah otentik First Principles: membayar nilai riil fungsi fungsional, bukan markup nama vendor.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-musk-1',
            question: 'Ketika Elon Musk menghitung harga pembuatan roket SpaceX pertama kali, apa dasar kalkulasi First Principles yang ia gunakan?',
            options: [
              'Membeli roket bekas dari Rusia dengan diskon diplomatik',
              'Menghitung harga pasar bahan mentah (aluminium, titanium, tembaga, serat karbon) yang ternyata hanya ~2% dari harga jual roket konvensional',
              'Meminta subsidi penuh dari anggaran pemerintah daerah',
              'Meniru cetak biru pabrikan pertahanan Boeing tanpa perubahan desain',
            ],
            correctAnswerIndex: 1,
            explanation: 'Musk menyadari bahwa harga roket mahal bukan karena harga bahan kimianya, melainkan karena inefisiensi birokrasi dan rantai perantara industri kontraktor pertahanan.',
          },
        ],
      },
      {
        id: 'bezos-flywheel',
        label: 'Jeff Bezos: Flywheel & Day 1',
        domain: 'Bisnis',
        summary: 'Efek roda gila (Flywheel Effect), Customer Obsession, dan doktrin Day 1 Culture untuk mencegah stagnasi korporasi.',
        x: 180,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Bayangkan sebuah roda besi raksasa berbobot 5 ton. Mendorongnya pertama kali sangat melelahkan dan roda nyaris tidak bergerak. Namun setiap kali Anda terus mendorong ke arah yang sama secara konsisten, momentum terkumpul. Di putaran ke-100, bobot roda itu sendiri yang meluncur kencang dan melindas semua rintangan di depannya. Inilah Amazon Flywheel.',
          crossDisciplinary: {
            connectionText: 'Skalabilitas Operasional x Psikologi Konsumen',
            domains: ['Bisnis', 'Psikologi'],
            insight:
              'Obsesi pada kepuasan konsumen (Customer Obsession) mengalahkan obsesi pada kompetitor, karena konsumen selalu menginginkan hal yang sama 20 tahun ke depan: harga lebih murah, pilihan lebih banyak, dan pengiriman lebih cepat.',
          },
          actionableSteps: [
            'Petakan "Flywheel" bisnis Anda: Aksi A apa yang memicu B, B memicu C, dan C memperkuat A kembali?',
            'Terapkan doktrin "Day 1": hindari rapat birokratis tanpa pengambil keputusan yang jelas di ruangan.',
            'Tulis memo 6 halaman terstruktur (Six-Page Narrative Memo) alih-alih slide PowerPoint untuk keputusan strategis.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Menghadapi Keluhan Retur Pelanggan',
          context: 'Tingkat pengembalian barang di toko online Anda mencapai 4% karena pelanggan salah memilih ukuran pakaian.',
          dilemma: 'Manajer keuangan menyarankan mempersulit proses retur untuk menghemat biaya pengiriman ekspedisi.',
          choices: [
            {
              id: 'c1',
              text: 'Setujui saran manajer: buat syarat retur berbelit-belit agar konsumen enggan komplain.',
              consequence: 'Anda menghemat sedikit biaya logistik, namun konsumen merasa terjebak, ulasan anjlok, dan 80% pelanggan tidak pernah kembali belanja.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Mengorbankan kepercayaan jangka panjang demi penghematan kecil menghancurkan momentum roda gila.',
            },
            {
              id: 'c2',
              text: 'Sediakan retur gratis instan 1-klik tanpa tanya, dan gunakan data ukuran tersebut untuk memperbaiki tabel panduan fitting AI.',
              consequence: 'Loyalitas konsumen melesat, frekuensi belanja berulang naik 3x lipat, dan retensi jangka panjang mendominasi pasar.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Customer Obsession Bezos: kepercayaan pelanggan adalah aset flywheel paling berharga yang tak bisa dibeli iklan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-bez-1',
            question: 'Dalam filosofi manajemen Jeff Bezos di Amazon, apa arti dari menjaga kondisi "Day 1"?',
            options: [
              'Memulai kembali anggaran keuangan perusahaan ke angka nol setiap awal bulan',
              'Mempertahankan rasa lapar, kecepatan inovasi, eksperimen cepat, dan obsesi pelanggan seperti startup baru agar terhindar dari kematian birokrasi (Day 2)',
              'Membatasi jam kerja karyawan hanya di hari pertama setiap minggu',
              'Menolak mempekerjakan karyawan eksekutif berpengalaman',
            ],
            correctAnswerIndex: 1,
            explanation: 'Bezos menyatakan bahwa "Day 2 is stasis, followed by irrelevance, followed by excruciating decline, followed by death." Day 1 adalah disiplin menjaga kelincahan dan relevansi.',
          },
        ],
      },
      {
        id: 'dalio-arnault',
        label: 'Ray Dalio & Bernard Arnault',
        domain: 'Ekonomi',
        summary: 'Siklus Mesin Ekonomi Ray Dalio dan Monopoli Hasrat Barang Mewah (Veblen Moat) Bernard Arnault (LVMH).',
        x: 620,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Bernard Arnault tidak menjual tas kulit; ia menjual sertifikat status keanggotaan aristokrasi modern. Saat ekonomi lesu dan produsen mobil menurunkan harga, LVMH justru menaikkan harga tas Louis Vuitton 12%. Semakin mahal harganya, semakin orang kaya berebut membelinya karena hukum permintaan Veblen: nilai barang terletak pada ketidakterjangkauannya bagi orang banyak.',
          crossDisciplinary: {
            connectionText: 'Makroekonomi Siklikal x Sosiologi Status Simbolik',
            domains: ['Ekonomi', 'Psikologi'],
            insight:
              'Ray Dalio mengajarkan bahwa transaksi adalah atom dari ekonomi: pengeluaran satu orang adalah pendapatan orang lain. Mengombinasikan pemahaman siklus kredit dengan aset anti-inflasi Veblen menghasilkan portofolio kekal.',
          },
          actionableSteps: [
            'Pelajari 3 mesin pendorong ekonomi makro karya Ray Dalio: Pertumbuhan Produktivitas, Siklus Utang Jangka Pendek (5-8 tahun), dan Siklus Utang Jangka Panjang (50-75 tahun).',
            'Analisis strategi diferensiasi Anda: Apakah Anda bersaing di zona komoditas harga murah atau zona nilai prestise eksklusif?',
            'Bangun "All Weather Portfolio" yang tahan terhadap inflasi tinggi maupun deflasi.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Strategi Harga Saat Inflasi Global Naik',
          context: 'Biaya bahan baku produk fashion premium lokal Anda naik 18% akibat pelemahan kurs mata uang.',
          dilemma: 'Bagaimana merespons kenaikan biaya tanpa merusak persepsi pasar?',
          choices: [
            {
              id: 'c1',
              text: 'Gunakan bahan sintetis murahan dan pasang label diskon 50% di etalase.',
              consequence: 'Pelanggan elit merasa kualitas turun dan status produk Anda terdegradasi menjadi barang murahan pasar loak.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Menurunkan persepsi prestise menghancurkan parit emosional produk premium.',
            },
            {
              id: 'c2',
              text: 'Pertahankan bahan baku terbaik, naikkan harga 20%, rilis edisi bernomor seri terbatas (limited numbered batch) dengan sertifikat keaslian fisik.',
              consequence: 'Konsumen kolektor berebut membeli karena unsur kelangkaan dan prestise status sosial kian mengkilap.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Prinsip Arnault: barang dengan nilai simbolik tinggi kebal dari elastisitas harga tradisional jika kelangkaannya terjaga.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-dal-1',
            question: 'Dalam hukum ekonomi, apa yang dimaksud dengan "Barang Veblen" (Veblen Good) seperti produk LVMH, Hermès, atau Rolex?',
            options: [
              'Barang kebutuhan pokok yang harganya dikontrol ketat oleh subsidi pemerintah',
              'Barang yang jumlah permintaannya justru meningkat ketika harganya semakin mahal karena dipandang sebagai simbol status sosial',
              'Barang bekas yang diperdagangkan secara ilegal di pasar gelap',
              'Barang yang hanya boleh dibeli dengan mata uang kripto',
            ],
            correctAnswerIndex: 1,
            explanation: 'Dinamakan dari sosiolog Thorstein Veblen. Barang Veblen membalikkan kurva permintaan umum: semakin tinggi harganya, semakin tinggi daya tarik psikologis kepemilikannya.',
          },
        ],
      },
    ],
    edges: [
      { id: 'me1', from: 'miliarder-root', to: 'buffett-moat', label: 'Parit Pertahanan & Modal', domains: ['Bisnis', 'Keuangan'] },
      { id: 'me2', from: 'miliarder-root', to: 'musk-first-principles', label: 'Rekayasa Inovasi Radikal', domains: ['Bisnis', 'Psikologi'] },
      { id: 'me3', from: 'miliarder-root', to: 'bezos-flywheel', label: 'Mesin Skala Jangka Panjang', domains: ['Bisnis', 'Psikologi'] },
      { id: 'me4', from: 'miliarder-root', to: 'dalio-arnault', label: 'Siklus Makro & Pricing Power', domains: ['Bisnis', 'Ekonomi'] },
      { id: 'me5', from: 'buffett-moat', to: 'dalio-arnault', label: 'Alokasi Modal Tahan Krisis', domains: ['Keuangan', 'Ekonomi'] },
      { id: 'me6', from: 'musk-first-principles', to: 'bezos-flywheel', label: 'Kecepatan Iterasi Sistem', domains: ['Bisnis', 'Psikologi'] },
    ],
  },

  // ============================================================================
  // 2. VALUASI SAHAM, TRADING & MAKROEKONOMI
  // ============================================================================
  'Valuasi Saham, Trading & Makroekonomi': {
    id: 'mindmap-saham-trading-makro',
    topic: 'Valuasi Saham, Trading & Makroekonomi',
    rootId: 'saham-root',
    description: 'Bongkar gravitasi pasar modal: Model DCF, Suku Bunga The Fed, Analisis Siklus Likuiditas, Forex DXY, dan Psikologi Risk/Reward.',
    nodes: [
      {
        id: 'saham-root',
        label: 'Gravitasi Pasar Modal & Arus Kas',
        domain: 'Keuangan',
        summary: 'Harga saham dalam jangka pendek adalah mesin pemungut suara (voting machine), namun dalam jangka panjang adalah timbangan bobot arus kas sejati (weighing machine).',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Pasar saham bagaikan anjing energetik yang diikat tali kekang oleh majikannya saat berjalan-jalan di taman. Anjing itu bisa melompat 10 meter ke kiri (hype/euforia) atau berlari ke selokan di kanan (panik krisis), namun pada akhirnya ke mana pun anjing itu melompat, ia terikat tali gravitasi pada langkah sang majikan. Sang majikan adalah arus kas riil perusahaan.',
          crossDisciplinary: {
            connectionText: 'Keuangan Kuantitatif x Psikologi Kerumunan',
            domains: ['Keuangan', 'Psikologi'],
            insight:
              'Volatilitas harga adalah sahabat bagi investor berdisiplin nilai karena memberikan peluang membeli bisnis hebat di harga diskon ekstrim saat pasar histeris.',
          },
          actionableSteps: [
            'Buka laporan keuangan emiten: fokus pada baris "Free Cash Flow" (Arus Kas Bebas), bukan sekadar Laba Bersih akuntansi.',
            'Hitung Nilai Intrinsik sederhana sebelum memutuskan menekan tombol beli di aplikasi sekuritas.',
            'Pisahkan rekening investasi jangka panjang (weighing) dengan rekening eksperimen trading jangka pendek (tactical).',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Saham Bluechip Turun 30% Akibat Berita Sentimen',
          context: 'Emiten perbankan terbesar dengan laba bertumbuh 14% tiba-tiba terkoreksi 30% karena kekhawatiran geopolitik regional.',
          dilemma: 'Portofolio Anda sedang minus sementara analis media sosial menyarankan jual semua aset.',
          choices: [
            {
              id: 'c1',
              text: 'Panik dan jual seluruh saham di titik terendah agar bisa tidur nyenyak malam ini.',
              consequence: 'Anda mengunci kerugian permanen dan melewatkan rebound pemulihan terbesar saat fundamental kembali dihargai pasar.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Menjual berdasarkan ketakutan berita sesaat adalah kesalahan psikologis paling mematikan bagi investor ritel.',
            },
            {
              id: 'c2',
              text: 'Verifikasi neraca: pastikan NPL (kredit macet) bank tetap rendah, lalu lakukan akumulasi bertahap (DCA) di valuasi murah.',
              consequence: 'Rata-rata harga beli Anda sangat menguntungkan, menghasilkan capital gain dan dividend yield luar biasa dalam 2 tahun ke depan.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Prinsip Benjamin Graham: jadikan ketakutan pasar sebagai diskon berharga untuk mengoleksi aset bernilai tinggi.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-sh-1',
            question: 'Mengapa "Free Cash Flow" (Arus Kas Bebas) sering dianggap indikator yang lebih jujur dibanding "Net Income" (Laba Bersih Akuntansi)?',
            options: [
              'Karena Free Cash Flow tidak dilaporkan ke kantor pajak',
              'Karena laba bersih dapat dimanipulasi dengan metode akuntansi akrual, sedangkan Free Cash Flow mengukur uang kas dingin yang benar-benar tersisa di rekening perusahaan setelah belanja modal',
              'Karena Free Cash Flow selalu bernilai lebih besar dari omzet',
              'Karena bursa efek melarang perusahaan menghitung dividen dari laba bersih',
            ],
            correctAnswerIndex: 1,
            explanation: 'Uang kas tidak bisa dipalsukan dengan pencatatan akrual. Free Cash Flow adalah darah hidup sejati untuk ekspansi, dividen, dan pembayaran utang.',
          },
        ],
      },
      {
        id: 'saham-dcf',
        label: 'Discounted Cash Flow (DCF)',
        domain: 'Keuangan',
        summary: 'Menghitung nilai sekarang (Present Value) dari seluruh arus kas masa depan yang didiskontokan dengan biaya modal.',
        x: 180,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Uang Rp 1 Juta yang akan Anda terima 5 tahun lagi tidak sama nilainya dengan Rp 1 Juta di tangan Anda hari ini. Kenapa? Karena Rp 1 Juta hari ini bisa diinvestasikan berbunga dan terbebas dari erosi inflasi 5 tahun. Model DCF adalah mesin waktu matematika yang menarik seluruh uang masa depan sebuah perusahaan ke nilai rupiah hari ini.',
          crossDisciplinary: {
            connectionText: 'Matematika Finansial x Teori Peluang',
            domains: ['Keuangan', 'Ekonomi'],
            insight:
              'Tingkat diskonto (Discount Rate/WACC) sangat dipengaruhi oleh suku bunga bank sentral. Suku bunga naik = pembagi semakin besar = valuasi saham menyusut.',
          },
          actionableSteps: [
            'Pahami komponen WACC: Cost of Equity + Cost of Debt setelah pajak.',
            'Gunakan Margin of Safety minimal 25-30% di bawah nilai intrinsik DCF Anda.',
            'Hindari asumsi pertumbuhan abadi (terminal growth rate) yang melebihi pertumbuhan PDB nasional.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Menaksir Valuasi Perusahaan SaaS',
          context: 'Sebuah startup software berlangganan memproyeksikan Free Cash Flow Rp 10 Miliar tahun depan dan tumbuh 20% per tahun.',
          dilemma: 'Berapa harga wajar yang berani Anda tawarkan untuk mengakuisisi 10% sahamnya?',
          choices: [
            {
              id: 'c1',
              text: 'Bayar 50x lipat omzet karena percaya pada presentasi pitchdeck pendiri yang menjanjikan monopoli pasar.',
              consequence: 'Valuasi terlalu mahal (overpaying), saat pertumbuhan melambat sedikit saja, nilai investasi Anda jatuh bebas.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Membayar valuasi euforia tanpa diskonto arus kas riil mengabaikan risiko eksekusi bisnis.',
            },
            {
              id: 'c2',
              text: 'Gunakan kalkulasi DCF dengan tingkat diskonto 12% dan terapkan Margin of Safety 30% dari hasil hitungan wajar.',
              consequence: 'Anda masuk di valuasi yang memberikan perlindungan modal kuat bahkan jika target pertumbuhan perusahaan meleset.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Margin of Safety adalah jaring pengaman paling mendasar dalam manajemen risiko investasi profesional.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-dcf-1',
            question: 'Jika suku bunga acuan bank sentral naik dari 2% menjadi 6%, apa dampak matematis langsung terhadap hasil valuasi model DCF saham teknologi?',
            options: [
              'Valuasi DCF otomatis melonjak naik dua kali lipat',
              'Valuasi DCF saham menyusut drastis karena tingkat diskonto (penyebut pecahan) meningkat, mengurangi nilai sekarang dari arus kas masa depan',
              'Model DCF tidak dapat dihitung lagi di komputer',
              'Dividen saham teknologi dibebaskan dari pajak',
            ],
            correctAnswerIndex: 1,
            explanation: 'Suku bunga bertindak sebagai gravitasi: semakin tinggi suku bunga, semakin mahal biaya modal dan semakin kecil nilai sekarang dari laba masa depan.',
          },
        ],
      },
      {
        id: 'saham-monetary',
        label: 'Kebijakan Moneter & Suku Bunga',
        domain: 'Ekonomi',
        summary: 'Bagaimana siklus likuiditas The Fed, Quantitative Easing (QE), dan Quantitative Tightening (QT) mengendalikan harga aset global.',
        x: 620,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Bank sentral (The Fed / Bank Indonesia) adalah pengatur kran pasokan air di kolam renang global. Ketika kran dibuka penuh (QE / suku bunga 0%), air likuiditas meluap membanjiri kolam: semua perahu bebek plastik (aset kripto spekulatif, saham rugi, obligasi sampah) ikut terapung tinggi. Saat kran ditutup dan air disedot kembali (QT / suku bunga dinaikkan), kolam mengering dan terlihat siapa yang berenang telanjang tanpa celana.',
          crossDisciplinary: {
            connectionText: 'Makroekonomi Moneter x Aliran Modal Global',
            domains: ['Ekonomi', 'Keuangan'],
            insight:
              '"Don\'t fight the Fed" — bertaruh melawan arah arus likuiditas bank sentral seperti mendayung sampan melawan arus air terjun.',
          },
          actionableSteps: [
            'Catat kalender pertemuan FOMC The Fed dan RDG Bank Indonesia setiap kuartal.',
            'Pantau kurva imbal hasil obligasi (Inverted Yield Curve) sebagai sinyal awal resesi ekonomi.',
            'Rebalancing alokasi kas dan obligasi saat siklus pengetatan moneter dimulai.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: The Fed Mengumumkan Siklus Suku Bunga Naik (Rate Hike)',
          context: 'Inflasi Amerika mencapai 8.5% dan The Fed bersiap menaikkan suku bunga 75 bps secara agresif.',
          dilemma: 'Portofolio Anda saat ini didominasi saham pertumbuhan yang sarat utang obligasi berbunga mengambang.',
          choices: [
            {
              id: 'c1',
              text: 'Abaikan pengumuman dan tambah leverage pinjaman margin untuk spekulasi.',
              consequence: 'Biaya bunga pinjaman melonjak tinggi dan nilai portofolio Anda terkena margin call paksa.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Menentang siklus pengetatan moneter dengan leverage adalah resep kebangkrutan paling cepat.',
            },
            {
              id: 'c2',
              text: 'Kurangi saham dengan utang tinggi berbunga mengambang, alihkan porsi ke instrumen pasar uang berimbal hasil tinggi dan emiten kaya kas bersih.',
              consequence: 'Modal terlindungi dari kehancuran pasar, sekaligus menikmati bunga tabungan tinggi yang bebas risiko.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Perusahaan berlimpah kas justru diuntungkan di era suku bunga tinggi karena pendapatan bunganya meningkat.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-mon-1',
            question: 'Apa fenomena yang ditandai ketika imbal hasil (yield) obligasi pemerintah jangka pendek (2 tahun) lebih tinggi daripada jangka panjang (10 tahun)?',
            options: [
              'Normal Yield Curve yang menandakan pertumbuhan ekonomi super pesat',
              'Inverted Yield Curve (Kurva Imbal Hasil Terbalik) yang secara historis menjadi prediktor kuat akan terjadinya resesi ekonomi',
              'Kenaikan dividen saham secara serentak di bursa',
              'Penutupan bursa efek internasional',
            ],
            correctAnswerIndex: 1,
            explanation: 'Kurva imbal hasil terbalik mencerminkan ekspektasi pelaku pasar bahwa bank sentral akan terpaksa memotong suku bunga di masa depan akibat perlambatan ekonomi tajam.',
          },
        ],
      },
      {
        id: 'saham-forex-dxy',
        label: 'Forex, DXY & Perang Mata Uang',
        domain: 'Keuangan',
        summary: 'Kekuatan Indeks Dolar AS (DXY), mekanisme Foreign Exchange, Carry Trade, dan dampaknya pada emiten importir lokal.',
        x: 180,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Indeks Dolar AS (DXY) bagaikan monster gravitasi raksasa di tata surya keuangan dunia. Ketika Dolar menguat perkasa (DXY > 105), ia menyedot modal likuid dari seluruh planet berkembang (termasuk Indonesia) kembali ke New York. Mata uang lokal terdepresiasi, biaya utang luar negeri membengkak, dan harga gandum serta minyak mentah menjadi mahal seketika.',
          crossDisciplinary: {
            connectionText: 'Keuangan Internasional x Geopolitik Valas',
            domains: ['Keuangan', 'Geopolitik'],
            insight:
              'Mekanisme "Yen Carry Trade": meminjam uang di negara bersuku bunga 0% (Jepang) untuk diinvestasikan di aset berimbal hasil tinggi (AS/Emerging Markets). Ketika suku bunga Jepang naik sedikit saja, pembalikan modal (unwinding) mengguncang bursa global.',
          },
          actionableSteps: [
            'Simak pergerakan DXY di TradingView sebagai indikator awal tekanan nilai tukar Rupiah.',
            'Koleksi saham emiten eksportir komoditas yang membukukan pendapatan dalam USD saat tren Dolar menguat.',
            'Hindari perusahaan dengan utang berdenominasi USD tinggi jika pendapatannya 100% dalam Rupiah tanpa hedging.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Pilihan Portofolio Saat Kurs USD/IDR Melemah Tajam',
          context: 'Kurs Rupiah tertekan dari Rp 15.000 menjadi Rp 16.500 per Dolar AS dalam hitungan bulan.',
          dilemma: 'Anda harus memilih antara emiten farmasi pengimpor bahan baku obat vs emiten tambang batubara eksportir.',
          choices: [
            {
              id: 'c1',
              text: 'Beli saham farmasi pengimpor karena mengira bisnis obat-obatan selalu kebal krisis.',
              consequence: 'Biaya pembelian bahan baku impor dalam USD membengkak sementara harga jual obat diatur regulasi, laba emiten anjlok 50%.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Emiten importir tanpa kemampuan meneruskan kenaikan kurs valas akan tergerus margin keuntungannya.',
            },
            {
              id: 'c2',
              text: 'Pilih saham emiten eksportir yang mencatat pendapatan dalam mata uang USD namun biaya operasionalnya dalam Rupiah.',
              consequence: 'Emiten menikmati windfall keuntungan ganda dari selisih konversi kurs valuta asing dan membagikan dividen jumbo.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Keuntungan struktural eksportir: pendapatan USD menguat sementara struktur biaya domestik tetap terlindungi.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-dxy-1',
            question: 'Apa risiko terbesar dari transaksi spekulatif "Carry Trade" di pasar keuangan internasional?',
            options: [
              'Pemberian dividen tunai yang terlalu cepat',
              'Volatilitas nilai tukar yang dapat memicu penguatan mendadak mata uang pinjaman, memaksa investor melikuidasi aset secara panik untuk menutup utang',
              'Larangan transaksi valas oleh Perserikatan Bangsa-Bangsa (PBB)',
              'Penyusutan nilai emas batangan',
            ],
            correctAnswerIndex: 1,
            explanation: 'Carry Trade sangat rentan terhadap guncangan kurs valas. Jika mata uang yang dipinjam menguat mendadak, biaya pelunasan utang meledak seketika.',
          },
        ],
      },
      {
        id: 'saham-trading-psychology',
        label: 'Psikologi Trading & Risk/Reward',
        domain: 'Psikologi',
        summary: 'Disiplin Cut-Loss, Posisi Sizing (Kelly Criterion), Risk-to-Reward Ratio 1:3, dan Mengatasi Bias FOMO.',
        x: 620,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Seorang petinju juara dunia tidak menang karena pukulannya paling keras, melainkan karena ia tahu kapan harus menaikkan sarung tinju melindungi dagunya. Di pasar modal, trader amatir selalu memikirkan: "Berapa banyak uang yang bisa kudapat hari ini?" Sementara trader profesional selalu bertanya: "Berapa batas maksimal kerugian yang rela kutanggung jika analisaku salah?"',
          crossDisciplinary: {
            connectionText: 'Psikologi Manajemen Emosi x Teori Probabilitas',
            domains: ['Psikologi', 'Keuangan'],
            insight:
              'Dengan Risk/Reward Ratio 1:3, Anda bisa salah dalam 6 dari 10 perdagangan (hanya 40% akurasi), namun portofolio Anda tetap menghasilkan keuntungan bersih yang substansial.',
          },
          actionableSteps: [
            'Tentukan Stop Loss sebelum menyentuh tombol beli, dan jangan pernah menggeser Stop Loss ke bawah saat harga turun.',
            'Batasi risiko maksimal per transaksi pada angka 1% hingga 2% dari total modal portofolio Anda.',
            'Tulis Jurnal Trading harian yang mendokumentasikan emosi Anda saat membuka dan menutup posisi.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Posisi Trading Minus 7% Menyentuh Garis Stop Loss',
          context: 'Saham yang Anda beli untuk swing trade jangka pendek menembus batas support dan menyentuh stop loss Rp 1.500.',
          dilemma: 'Otak Anda berbisik: "Tahan sebentar lagi, siapa tahu besok membal balik ke harga modal."',
          choices: [
            {
              id: 'c1',
              text: 'Geser stop loss ke bawah dan lakukan average down menggunakan sisa modal tabungan.',
              consequence: 'Harga saham terus longsor hingga minus 45%, modal Anda terkunci berbulan-bulan dalam posisi rugi telak.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Melanggar stop loss adalah penyebab nomor satu kehancuran modal trader ritel di seluruh dunia.',
            },
            {
              id: 'c2',
              text: 'Eksekusi cut loss tanpa ragu sesuai rencana awal: kunci risiko pada -7% dan amankan sisa 93% modal untuk peluang berikutnya.',
              consequence: 'Kerugian terkendali kecil, modal tetap cair, dan psikologi Anda terbebas dari stres mental yang melelahkan.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Disiplin manajemen risiko: memotong kerugian kecil sedini mungkin adalah kunci bertahan hidup di pasar modal.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-tr-1',
            question: 'Dalam manajemen risiko trading, mengapa rasio Risk-to-Reward minimal 1:3 sangat direkomendasikan?',
            options: [
              'Karena bursa efek akan menolak order jika rasionya di bawah 1:3',
              'Karena memungkinkan portofolio tetap untung secara matematis meskipun tingkat kemenangan (win rate) transaksi hanya sebesar 35%-40%',
              'Karena dividen perusahaan dibagikan 3 kali dalam setahun',
              'Karena dapat menghilangkan kewajiban membayar komisi broker',
            ],
            correctAnswerIndex: 1,
            explanation: 'Rasio asimetris (rugi 1 unit jika salah, untung 3 unit jika benar) melindungi trader dari keharusan menebak pasar secara benar sepanjang waktu.',
          },
        ],
      },
    ],
    edges: [
      { id: 'se1', from: 'saham-root', to: 'saham-dcf', label: 'Nilai Intrinsik Arus Kas', domains: ['Keuangan', 'Keuangan'] },
      { id: 'se2', from: 'saham-root', to: 'saham-monetary', label: 'Gravitasi Suku Bunga Makro', domains: ['Keuangan', 'Ekonomi'] },
      { id: 'se3', from: 'saham-root', to: 'saham-forex-dxy', label: 'Likuiditas Mata Uang Dunia', domains: ['Keuangan', 'Keuangan'] },
      { id: 'se4', from: 'saham-root', to: 'saham-trading-psychology', label: 'Disiplin Asimetris Risiko', domains: ['Keuangan', 'Psikologi'] },
      { id: 'se5', from: 'saham-monetary', to: 'saham-forex-dxy', label: 'Divergensi Suku Bunga & Valas', domains: ['Ekonomi', 'Keuangan'] },
      { id: 'se6', from: 'saham-dcf', to: 'saham-trading-psychology', label: 'Margin of Safety', domains: ['Keuangan', 'Psikologi'] },
    ],
  },

  // ============================================================================
  // 3. EKSPOR-IMPOR, RANTAI PASOK & GEOPOLITIK
  // ============================================================================
  'Ekspor-Impor, Rantai Pasok & Geopolitik': {
    id: 'mindmap-ekspor-impor-geopolitik',
    topic: 'Ekspor-Impor, Rantai Pasok & Geopolitik',
    rootId: 'ekspor-root',
    description: 'Kuasai Incoterms 2020, HS Code & Regulasi Bea Cukai, Chokepoints Maritim Global, Perang Tarif, dan Skema Dedolarisasi LCS.',
    nodes: [
      {
        id: 'ekspor-root',
        label: 'Arsitektur Perdagangan & Rantai Pasok',
        domain: 'Geopolitik',
        summary: 'Perdagangan lintas batas bukan sekadar pergerakan kontainer besi, melainkan sintesis hukum kontrak internasional, kepatuhan bea cukai, dan navigasi selat strategis.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Dunia perdagangan global bagaikan peredaran darah di tubuh manusia. Kapal-kapal kargo adalah sel darah merah yang mengangkut oksigen komoditas. Jika ada penyumbatan kolesterol di satu arteri kecil (misal kapal tersangkut di Terusan Suez atau perang tarif di perbatasan), seluruh organ tubuh di belahan bumi lain mengalami serangan jantung inflasi mendadak.',
          crossDisciplinary: {
            connectionText: 'Geopolitik Maritim x Logistik Global',
            domains: ['Geopolitik', 'Ekonomi'],
            insight:
              'Menguasai regulasi ekspor-impor dan rantai pasok memungkinkan pengusaha memindahkan barang melintasi benua dengan biaya terendah dan perlindungan hukum terkuat.',
          },
          actionableSteps: [
            'Cek Harmonized System (HS Code) produk unggulan Anda di portal INSW (Indonesia National Single Window).',
            'Kuasai perbedaan hak dan kewajiban antara Incoterms FOB (Free on Board) vs CIF (Cost, Insurance, Freight).',
            'Manfaatkan fasilitas Certificate of Origin (Form D / Form E) untuk menikmati tarif bea masuk 0% di kawasan FTA.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Kontrak Ekspor Perdana Kopi ke Eropa',
          context: 'Pembeli di Hamburg ingin membeli 2 kontainer biji kopi arabika senilai $80.000.',
          dilemma: 'Pembeli meminta klausul pengiriman DDP (Delivered Duty Paid), sedangkan Anda belum memiliki izin impor di Jerman.',
          choices: [
            {
              id: 'c1',
              text: 'Setujui klausul DDP tanpa memahami risikonya demi mengamankan kesepakatan penjualan.',
              consequence: 'Barang tertahan di pelabuhan Hamburg karena Anda tidak terdaftar membayar pajak PPN/Bea Masuk Eropa; denda demurrage ribuan euro memakan habis modal Anda.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'DDP membebankan seluruh izin dan bea masuk negara tujuan kepada eksportir; sangat berbahaya bagi pemula tanpa entitas lokal.',
            },
            {
              id: 'c2',
              text: 'Negosiasikan ulang ke syarat FOB (Pelabuhan Tanjung Priok) atau CIF (Hamburg Port) sehingga tanggung jawab izin pabean Jerman ditanggung pembeli.',
              consequence: 'Risiko kepatuhan berada di pihak pembeli, pembayaran LC Anda aman saat barang termuat di kapal, dan margin profit terlindungi utuh.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Penggunaan Incoterms yang tepat melindungi eksportir dari risiko regulasi pabean asing yang tidak dikuasai.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-exp-1',
            question: 'Dalam Incoterms 2020, apa perbedaan kritis antara FOB (Free on Board) dan CIF (Cost, Insurance, Freight)?',
            options: [
              'Pada FOB, eksportir menanggung biaya asuransi dan pengapalan sampai ke pelabuhan tujuan pembeli',
              'Pada FOB, risiko dan biaya berpindah ke pembeli seketika barang dimuat di atas kapal di pelabuhan muat; sedangkan pada CIF, penjual wajib membiayai pengangkutan dan asuransi hingga pelabuhan tujuan',
              'FOB hanya berlaku untuk angkutan udara, sedangkan CIF hanya untuk kereta api',
              'FOB membebaskan pembeli dari kewajiban membayar bea cukai domestik',
            ],
            correctAnswerIndex: 1,
            explanation: 'FOB membatasi kewajiban penjual sampai barang berada di atas kapal di pelabuhan asal, sedangkan CIF mewajibkan penjual membayar ongkos kapal dan premi asuransi perjalanan laut.',
          },
        ],
      },
      {
        id: 'ekspor-hs-customs',
        label: 'HS Code & Kepatuhan Bea Cukai',
        domain: 'Hukum',
        summary: 'Klasifikasi 8 digit HS Code, Tarif Bea Masuk MFN vs FTA, Jalur Merah/Kuning/Hijau, dan Larangan Terbatas (Lartas).',
        x: 180,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'HS Code adalah paspor genetik bagi setiap barang fisik di muka bumi. Jika Anda salah menuliskan satu digit kode paspor di dokumen manifest kargo, petugas bea cukai di pelabuhan akan menghentikan kontainer Anda di "Jalur Merah". Setiap hari kontainer Anda tertahan di dermaga, arloji denda penumpukan (demurrage & detention) berputar jutaan rupiah.',
          crossDisciplinary: {
            connectionText: 'Hukum Kepabeanan x Manajemen Arus Kas',
            domains: ['Hukum', 'Keuangan'],
            insight:
              'Pemanfaatan perjanjian dagang (seperti RCEP atau ACFTA) dengan menyertakan Surat Keterangan Asal (SKA) yang sah dapat memangkas bea masuk dari 15% menjadi 0% secara legal.',
          },
          actionableSteps: [
            'Ajukan permohonan Penetapan Klasifikasi Sebelum Impor (PKSI) ke Direktorat Jenderal Bea Cukai jika kode barang meragukan.',
            'Lengkapi dokumen perizinan instansi teknis (BPOM, Karantina, Kemendag) sebelum kapal berangkat dari negara asal.',
            'Audit kesesuaian antara Invoice, Packing List, dan Bill of Lading (B/L) hingga ke koma desimal berat tonase.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Kesalahan Klasifikasi HS Code Mesin Industri',
          context: 'Importir mengira mesin perakitan yang diimpor masuk kategori bebas bea masuk (0%).',
          dilemma: 'Pemeriksa Bea Cukai menetapkan mesin tersebut masuk pos tarif berbeda yang terkena bea masuk 10% dan denda administrasi.',
          choices: [
            {
              id: 'c1',
              text: 'Mencoba menyuap oknum petugas di lapangan agar kontainer diloloskan cepat.',
              consequence: 'Terjerat pidana suap korupsi kepabeanan, izin NIB perusahaan dibekukan permanen, barang disita negara.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Pelanggaran pidana menghancurkan kelangsungan hidup bisnis selamanya.',
            },
            {
              id: 'c2',
              text: 'Ajukan mekanisme Keberatan Resmi ke Kepala Kantor Bea Cukai dengan menyertakan dokumen spesifikasi teknis pabrikan resmi (Product Technical Datasheet).',
              consequence: 'Klasifikasi disesuaikan secara sah berdasarkan fakta teknis, denda dibatalkan, dan reputasi kepatuhan perusahaan tetap bersih di sistem pabean.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Jalur keberatan pabean berbasis bukti teknis adalah hak hukum importir yang sah dan aman.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-hs-1',
            question: 'Apa fungsi utama dari portal INSW (Indonesia National Single Window) dalam proses kepabeanan ekspor-impor?',
            options: [
              'Untuk memesan tiket kapal pesiar secara online',
              'Mengintegrasikan sistem informasi dan validasi perizinan antara Bea Cukai dengan seluruh kementerian teknis (Karantina, BPOM, Perdagangan, Perindustrian) secara terpadu',
              'Menyimpan uang kas devisa eksportir secara rahasia',
              'Menghitung kurs valas kripto per detik',
            ],
            correctAnswerIndex: 1,
            explanation: 'INSW adalah pintu gerbang nasional yang memastikan bahwa barang yang masuk/keluar telah memenuhi aturan Larangan dan Pembatasan (Lartas) dari kementerian terkait secara elektronik.',
          },
        ],
      },
      {
        id: 'ekspor-chokepoints',
        label: 'Maritime Chokepoints & Geopolitik',
        domain: 'Geopolitik',
        summary: 'Selat Malaka, Selat Hormuz, Terusan Suez, Terusan Panama, serta Risiko Freight Rate & Premi Asuransi Perang.',
        x: 620,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Selat Hormuz dan Selat Malaka bagaikan leher pipa bensin untuk mobil seluruh dunia. Jika ada gesekan militer di leher selat yang lebarnya hanya belasan mil laut itu, seperlima pasokan energi dunia tertahan. Biaya premi asuransi kapal melonjak 10x lipat dalam 24 jam, dan biaya pengiriman kontainer (Freight Rate) melesat dari $1.500 menjadi $6.000 per FEU.',
          crossDisciplinary: {
            connectionText: 'Geostrategi Militer x Inflasi Rantai Pasok',
            domains: ['Geopolitik', 'Ekonomi'],
            insight:
              'Krisis rute maritim mendorong tren "Nearshoring" dan "Friendshoring": memindahkan pabrik manufaktur ke negara tetangga yang dekat demi menghindari rute selat rawan konflik.',
          },
          actionableSteps: [
            'Pantau Shanghai Containerized Freight Index (SCFI) untuk mengantisipasi lonjakan tarif pengapalan kontainer global.',
            'Siapkan rute logistik alternatif multimodal (jalur darat kereta kargo atau pergudangan regional penyangga).',
            'Pertahankan safety stock inventaris bahan baku impor minimal 45-60 hari cadangan.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Blokade Rute Laut Merah & Terusan Suez',
          context: 'Serangan milisi di Selat Bab el-Mandeb memaksa kapal kargo memutar lewat Tanjung Harapan Afrika Selatan (+14 hari pelayaran).',
          dilemma: 'Tarif kontainer naik 200% dan bahan baku pabrik Anda terancam habis sebelum kapal tiba.',
          choices: [
            {
              id: 'c1',
              text: 'Tutup pabrik dan liburkan pekerja sambil menunggu situasi perang mereda tanpa tindakan.',
              consequence: 'Kontrak pembeli hangus karena gagal kirim, biaya tetap pabrik terus berjalan, bisnis merugi miliaran rupiah.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Sikap pasif terhadap syok geopolitik melenyapkan pangsa pasar bisnis Anda secara permanen.',
            },
            {
              id: 'c2',
              text: 'Kirim sebagian komponen penting via kargo udara (air freight) untuk menjaga lini pabrik tetap menyala, sambil mencari pemasok lokal alternatif.',
              consequence: 'Operasional pabrik terselamatkan, komitmen kontrak pelanggan terpenuhi, dan resiliensi pasokan bisnis Anda teruji unggul.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Logistik multimodal dan diversifikasi pasokan darurat adalah kunci bertahan di era ketidakpastian geopolitik global.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-chk-1',
            question: 'Mengapa Selat Malaka memiliki posisi tawar geopolitik yang luar biasa krusial bagi perekonomian Asia Timur (China, Jepang, Korea Selatan)?',
            options: [
              'Karena selat tersebut menghasilkan seluruh pasokan garam laut dunia',
              'Karena lebih dari 80% impor minyak mentah dan energi ke Asia Timur serta sepertiga perdagangan maritim global harus melintasi selat sempit ini',
              'Karena tidak ada kapal yang boleh berlayar di Samudra Pasifik',
              'Karena selat tersebut dimiliki oleh satu perusahaan multinasional swasta',
            ],
            correctAnswerIndex: 1,
            explanation: 'Dikenal sebagai "Malacca Dilemma": ketergantungan energi negara-negara raksasa industri Asia Timur pada selat sempit ini menjadikannya titik genting maritim dunia.',
          },
        ],
      },
      {
        id: 'ekspor-lcs-dedolarisasi',
        label: 'Dedolarisasi & Skema LCS',
        domain: 'Keuangan',
        summary: 'Local Currency Settlement (LCS) Bank Indonesia, Pembayaran Lintas Batas Non-SWIFT, dan Mengeliminasi Risiko Konversi Valas USD.',
        x: 180,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Jika Anda membeli barang dari tetangga sebelah rumah, mengapa Anda berdua harus menukar uang Rupiah ke Dolar Amerika terlebih dahulu hanya untuk membayar kue tetangga? Skema Local Currency Settlement (LCS) dari Bank Indonesia bagaikan jembatan langsung: pengusaha Indonesia dan mitra di China/Jepang/Thailand dapat bertransaksi langsung menggunakan Rupiah dan Yuan/Yen tanpa perantara Dolar New York.',
          crossDisciplinary: {
            connectionText: 'Kedaulatan Devisa Moneter x Efisiensi Biaya Transaksi',
            domains: ['Keuangan', 'Geopolitik'],
            insight:
              'LCS memangkas biaya selisih kurs valas ganda (double conversion fee) hingga 2-4% dan melindungi eksportir dari sanksi pembekuan sistem kliring valuta asing negara ketiga.',
          },
          actionableSteps: [
            'Buka rekening mata uang lokal (CNY, JPY, MYR, THB) di bank devisa terakreditasi Appointed Cross Currency Dealer (ACCD).',
            'Tawarkan klausul pembayaran LCS langsung kepada pembeli atau pemasok di negara mitra kerja sama Bank Indonesia.',
            'Hindari eksposur konversi USD saat bertransaksi bilateral dengan mitra Asia.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Transaksi Mesin Pabrik Senilai 5 Juta Renminbi (RMB)',
          context: 'Pemasok di Shanghai menyetujui kontrak pembelian mesin senilai 5 Juta RMB.',
          dilemma: 'Bank konvensional Anda menyarankan membayar dengan mengonversi Rupiah ke USD, lalu USD dikonversi ke RMB di China.',
          choices: [
            {
              id: 'c1',
              text: 'Gunakan skema konversi ganda via USD karena menganggap itu prosedur lama yang paling biasa dilakukan.',
              consequence: 'Anda terkena dua kali spread kurs valas dan menanggung beban tambahan biaya administrasi kliring sekitar Rp 120 Juta.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Ketergantungan buta pada satu mata uang pihak ketiga menambah friksi biaya yang seharusnya bisa dieliminasi.',
            },
            {
              id: 'c2',
              text: 'Gunakan fasilitas Local Currency Settlement (LCS) langsung IDR-to-RMB via bank devisa mitra resmi Bank Indonesia.',
              consequence: 'Hemat biaya konversi kurs hingga Rp 120 Juta, settlement selesai hari yang sama (same-day), dan hubungan dagang kian kokoh.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Pemanfaatan LCS secara langsung mengoptimalkan efisiensi arus kas dan memangkas risiko volatilitas kurs mata uang ketiga.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-lcs-1',
            question: 'Apa keunggulan strategis utama bagi pelaku usaha di Indonesia yang memanfaatkan kerangka kerja Local Currency Settlement (LCS)?',
            options: [
              'Mendapatkan pinjaman modal tanpa bunga dari Bank Indonesia',
              'Memangkas biaya konversi valas ganda (Rupiah -> USD -> Mata Uang Mitra) dan mengurangi ketergantungan risiko nilai tukar Dolar AS',
              'Terbebas dari kewajiban membuat laporan audit tahunan',
              'Mempercepat proses bongkar muat kontainer di pelabuhan tanpa inspeksi',
            ],
            correctAnswerIndex: 1,
            explanation: 'LCS memungkinkan penyelesaian transaksi perdagangan bilateral langsung menggunakan mata uang lokal masing-masing negara mitra tanpa perlu melalui konversi Dolar AS terlebih dahulu.',
          },
        ],
      },
      {
        id: 'ekspor-tariffs-nearshoring',
        label: 'Perang Tarif & Proteksionisme',
        domain: 'Ekonomi',
        summary: 'Strategi Menghadapi Tarif Bea Masuk Antidumping, Sertifikasi TKDN Lokal, dan Relokasi Pabrik (Nearshoring).',
        x: 620,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Ketika suatu negara mengenakan tarif bea masuk 40% untuk produk impor, mereka tidak sedang membuat produk itu musnah. Mereka sedang menempelkan ransel berisi batu seberat 40 kg di punggung produk impor tersebut agar produk buatan pabrik domestik yang jalannya lambat bisa memenangkan perlombaan di pasar lokal. Pemenang sejati adalah produsen cerdas yang memindahkan sebagian perakitan akhir ke dalam negeri agar terbebas dari ransel batu tersebut.',
          crossDisciplinary: {
            connectionText: 'Kebijakan Perdagangan Publik x Strategi Manufaktur',
            domains: ['Ekonomi', 'Bisnis'],
            insight:
              'Memenuhi sertifikasi Tingkat Komponen Dalam Negeri (TKDN) di atas 40% membuka akses eksklusif ke tender pengadaan barang instansi pemerintah senilai ratusan triliun rupiah.',
          },
          actionableSteps: [
            'Audit struktur komponen produk Anda untuk memaksimalkan kandungan bahan baku dan tenaga kerja lokal (TKDN).',
            'Manfaatkan Kawasan Berikat (Kawasan Ekonomi Khusus/KEK) untuk mendapatkan penangguhan bea masuk atas bahan baku re-ekspor.',
            'Cermati penyelidikan Komite Anti Dumping Indonesia (KADI) terhadap barang pesaing impor yang dijual di bawah harga pasar.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Penerapan Kebijakan Wajib TKDN 40% untuk Tender BUMN',
          context: 'Pemerintah menetapkan pengadaan alat kelistrikan wajib memenuhi sertifikasi TKDN minimal 40%.',
          dilemma: 'Pesaing Anda memilih pasrah dan mengundurkan diri dari lelang pengadaan tender senilai Rp 50 Miliar.',
          choices: [
            {
              id: 'c1',
              text: 'Ikut mengundurkan diri dan mengeluh di forum asosiasi tentang sulitnya regulasi pemerintah.',
              consequence: 'Peluang pendapatan Rp 50 Miliar hangus dan kapasitas pabrik Anda menganggur sepanjang tahun.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Menyerah pada kebijakan proteksionisme lokal melenyapkan akses ke ceruk pasar terbesar di dalam negeri.',
            },
            {
              id: 'c2',
              text: 'Bermitra dengan bengkel perakitan lokal untuk proses perakitan casing dan kabel kabeling, hingga sertifikasi TKDN tembus 43%.',
              consequence: 'Lolos kualifikasi tunggal tender BUMN, memenangkan kontrak tahunan bernilai puluhan miliar rupiah tanpa saingan berarti.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Adaptasi cerdas terhadap regulasi TKDN mengubah hambatan proteksionisme menjadi parit keunggulan bisnis yang sangat profitable.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-trf-1',
            question: 'Apa tujuan utama pemerintah memberlakukan instrumen Bea Masuk Tindakan Pengamanan (Safeguard) atau Bea Masuk Anti-Dumping (BMAD)?',
            options: [
              'Membatasi masyarakat berbelanja online di akhir pekan',
              'Melindungi industri dalam negeri dari lonjakan produk impor yang dijual di bawah harga wajar (predatory pricing) yang dapat mematikan produsen lokal',
              'Menghapuskan peredaran mata uang kertas di pelabuhan',
              'Memaksa semua kapal asing berganti bendera kebangsaan',
            ],
            correctAnswerIndex: 1,
            explanation: 'BMAD dan Safeguard adalah instrumen sah di bawah aturan WTO untuk mencegah praktik banting harga dumping yang merugikan industri nasional.',
          },
        ],
      },
    ],
    edges: [
      { id: 'ee1', from: 'ekspor-root', to: 'ekspor-hs-customs', label: 'Klasifikasi & Pabean', domains: ['Geopolitik', 'Hukum'] },
      { id: 'ee2', from: 'ekspor-root', to: 'ekspor-chokepoints', label: 'Rute Maritim Kritis', domains: ['Geopolitik', 'Geopolitik'] },
      { id: 'ee3', from: 'ekspor-root', to: 'ekspor-lcs-dedolarisasi', label: 'Penyelesaian Valas Bilateral', domains: ['Geopolitik', 'Keuangan'] },
      { id: 'ee4', from: 'ekspor-root', to: 'ekspor-tariffs-nearshoring', label: 'Regulasi Proteksionisme', domains: ['Geopolitik', 'Ekonomi'] },
      { id: 'ee5', from: 'ekspor-chokepoints', to: 'ekspor-tariffs-nearshoring', label: 'Nearshoring & Freight Syok', domains: ['Geopolitik', 'Ekonomi'] },
      { id: 'ee6', from: 'ekspor-hs-customs', to: 'ekspor-lcs-dedolarisasi', label: 'Kepatuhan Devisa Hasil Ekspor', domains: ['Hukum', 'Keuangan'] },
    ],
  },

  // ============================================================================
  // 4. SENI NEGOSIASI & KOMUNIKASI EKSEKUTIF
  // ============================================================================
  'Seni Negosiasi & Komunikasi Eksekutif': {
    id: 'mindmap-negosiasi-komunikasi',
    topic: 'Seni Negosiasi & Komunikasi Eksekutif',
    rootId: 'nego-root',
    description: 'Kuasai Tactical Empathy Chris Voss (FBI), BATNA, Piramida Minto, Artikulasi Berbicara C-Suite, dan Framing Psikologis.',
    nodes: [
      {
        id: 'nego-root',
        label: 'Arsitektur Negosiasi & Artikulasi',
        domain: 'Komunikasi',
        summary: 'Negosiasi tingkat tinggi bukan tentang berdebat atau membagi selisih di tengah; ini tentang menguasai persepsi, menemukan motif emosional tersembunyi (Black Swans), dan mengendalikan frame percakapan.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Negosiator amatir masuk ke meja perundingan seperti pemain catur pemula yang sibuk memikirkan apa yang ingin ia ucapkan berikutnya. Negosiator ulung masuk seperti psikiater berpengalaman: ia mendengarkan secara intensif nada suara, jeda helaan napas, dan ketakutan terpendam lawan bicaranya. Kunci negosiasi bukan apa yang Anda katakan, melainkan apa yang berhasil Anda buat mereka rasakan aman untuk dikatakan.',
          crossDisciplinary: {
            connectionText: 'Psikologi Perilaku x Ilmu Komunikasi Persuasif',
            domains: ['Psikologi', 'Komunikasi'],
            insight:
              'Manusia adalah makhluk emosional yang mencari pembenaran rasional. Ketika Anda meredakan kecemasan amygdala di otak lawan bicara, pertahanan logika mereka otomatis terbuka.',
          },
          actionableSteps: [
            'Gunakan "Late-Night FM DJ Voice": turunkan nada bicara Anda menjadi tenang, lambat, dan penuh kendali saat situasi memanas.',
            'Terapkan teknik "Mirroring": ulangi 1 hingga 3 kata kunci terakhir yang diucapkan lawan bicara dengan intonasi bertanya.',
            'Sebelum negosiasi, petakan: Apa ketakutan terbesar yang ingin dihindari oleh pihak lawan?',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Klien Menuntut Penurunan Harga 40%',
          context: 'Klien korporat penting mengancam akan membatalkan kontrak pembaruan software kecuali Anda memberi diskon 40%.',
          dilemma: 'Jika diskon diberikan, profit margin Anda habis; jika ditolak mentah-mentah, kontrak melayang.',
          choices: [
            {
              id: 'c1',
              text: 'Langsung tawarkan kompromi di tengah: "Bagaimana kalau diskon 20%?"',
              consequence: 'Klien menyadari Anda mudah ditekan dan terus menekan Anda untuk konsesi ekstra di klausul berikutnya.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Membagi selisih di tengah (splitting the difference) menunjukkan kepanikan dan merusak kredibilitas harga Anda.',
            },
            {
              id: 'c2',
              text: 'Gunakan Tactical Empathy & Pertanyaan Terbuka: "Kelihatannya Anda berada di bawah tekanan anggaran dewan direksi yang ketat. Bagaimana saya bisa memberikan kualitas layanan penuh jika anggaran dipotong 40%?"',
              consequence: 'Klien merasa dipahami secara emosional, menyadari ketidakmasukakalan tuntutannya, dan bersedia mencari solusi alternatif (seperti penyesuaian jadwal pembayaran).',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Metode Chris Voss: melontarkan pertanyaan terkalibrasi "Bagaimana saya bisa melakukan itu?" mengalihkan beban pemecahan masalah ke pundak lawan secara elegan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-neg-1',
            question: 'Menurut mantan negosiator sandera FBI Chris Voss, apa tujuan utama dari teknik "Mirroring" dalam percakapan menegangkan?',
            options: [
              'Mengejek lawan bicara agar mereka kehilangan kendali emosi',
              'Mengulangi 1-3 kata terakhir untuk mendorong lawan bicara mengelaborasi pemikirannya lebih dalam sekaligus membangun koneksi bawah sadar tanpa terkesan agresif',
              'Meniru gerakan tangan dan gaya berpakaian lawan secara persis',
              'Memaksa lawan menandatangani draf kontrak seketika',
            ],
            correctAnswerIndex: 1,
            explanation: 'Mirroring adalah teknik sederhana namun luar biasa ampuh: mengulangi kata kunci memicu lawan bicara untuk merasa didengarkan dan otomatis menjelaskan konteksnya lebih jauh.',
          },
        ],
      },
      {
        id: 'nego-batna',
        label: 'BATNA & Daya Tawar Walk-Away',
        domain: 'Komunikasi',
        summary: 'Best Alternative to a Negotiated Agreement (BATNA): Kekuatan negosiasi sejati bukan terletak pada kelihaian lidah, melainkan keberanian berjalan pergi (Walk Away).',
        x: 180,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Jika Anda kelaparan di padang pasir dan ada satu-satunya penjual roti kering, penjual itu bisa mematok harga seharga mobil sport Anda karena Anda tidak punya pilihan lain. Namun jika di ransel Anda ada 10 kaleng makanan bergizi cadangan (BATNA Anda kuat), Anda bisa tersenyum ramah dan berkata: "Terima kasih, tapi tawaran Anda tidak masuk akal," lalu melangkah pergi dengan tenang.',
          crossDisciplinary: {
            connectionText: 'Teori Permainan (Game Theory) x Manajemen Posisi Tawar',
            domains: ['Komunikasi', 'Bisnis'],
            insight:
              'Siapa yang paling tidak membutuhkan kesepakatan tersebut di dalam ruangan adalah pihak yang memegang kendali penuh atas hasil akhir negosiasi.',
          },
          actionableSteps: [
            'Jangan pernah duduk di meja negosiasi sebelum memiliki minimal 2 alternatif cadangan konkret yang siap dieksekusi jika kesepakatan gagal.',
            'Tingkatkan BATNA Anda sebelum negosiasi dimulai (misal: dapatkan tawaran pekerjaan lain atau supplier cadangan).',
            'Cari tahu apa BATNA pihak lawan untuk memperkirakan batas titik jenuh (Reservation Price) mereka.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Negosiasi Kenaikan Gaji Eksekutif',
          context: 'Anda merasa kontribusi Anda setara dengan posisi VP, namun atasan terkenal pelit menaikkan kompensasi.',
          dilemma: 'Bagaimana mengajukan kenaikan gaji tanpa terlihat memohon atau mengancam kosong?',
          choices: [
            {
              id: 'c1',
              text: 'Masuk ke ruangan atasan dan mengancam akan resign besok pagi tanpa memiliki tawaran kerja dari perusahaan lain.',
              consequence: 'Atasan menguji gertakan Anda dan menerima pengunduran diri Anda; Anda menganggur tanpa penghasilan.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Menggertak tanpa BATNA nyata adalah bunuh diri karier.',
            },
            {
              id: 'c2',
              text: 'Lakukan wawancara diam-diam dan amankan 1 tawaran konkret (BATNA) dari kompetitor, lalu ajukan data pencapaian metrik ROI Anda secara tenang ke atasan.',
              consequence: 'Ketenangan Anda mencerminkan wibawa tinggi; perusahaan menyadari nilai penggantian Anda mahal dan menyetujui paket promosi.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Kekuatan BATNA memberikan ketenangan batin yang memancar dalam artikulasi negosiasi Anda.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-bat-1',
            question: 'Dalam konsep Harvard Negotiation Project, apa kepanjangan dan arti dari istilah "BATNA"?',
            options: [
              'Business Agreement Total Net Asset (Nilai bersih aset bisnis)',
              'Best Alternative to a Negotiated Agreement (Tindakan alternatif terbaik yang akan diambil jika kesepakatan di meja perundingan tidak tercapai)',
              'Basic Account Target Number Analysis (Analisis angka target rekening)',
              'Board Authorization To Nullify Action (Wewenang dewan untuk membatalkan aksi)',
            ],
            correctAnswerIndex: 1,
            explanation: 'BATNA adalah jangkar kekuatan Anda: semakin kuat alternatif yang Anda miliki di luar meja perundingan, semakin besar daya tawar Anda.',
          },
        ],
      },
      {
        id: 'nego-minto-pyramid',
        label: 'Artikulasi Berbicara & Piramida Minto',
        domain: 'Komunikasi',
        summary: 'Struktur Komunikasi Eksekutif McKinsey: Bottom-Line First (Kesimpulan di Awal), Menghilangkan Filler Words, dan Mengendalikan Ruangan.',
        x: 620,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Komunikator amatir bercerita seperti novel misteri: menjelaskan cuaca pagi hari, latar belakang pohon, detail perdebatan, dan baru di halaman 300 mengungkapkan siapa pembunuhnya. Para CEO dan direktur tidak punya waktu 300 halaman. Prinsip Piramida Minto (Barbara Minto) membalik struktur itu: sebutkan siapa pembunuhnya di kalimat pertama, lalu jelaskan 3 bukti terkuat di bawahnya.',
          crossDisciplinary: {
            connectionText: 'Efisiensi Kognitif Otak x Pengambilan Keputusan Dewan Direksi',
            domains: ['Komunikasi', 'Psikologi'],
            insight:
              'Struktur "Answer First" (BLUF - Bottom Line Up Front) menghargai rentang atensi eksekutif dan langsung memposisikan Anda sebagai pemikir strategis yang matang.',
          },
          actionableSteps: [
            'Mulai setiap update rapat dengan kesimpulan/rekomendasi: "Rekomendasi saya adalah opsi B karena 3 alasan: efisiensi biaya, kecepatan, dan kepatuhan hukum."',
            'Eliminasi kata pengisi (filler words seperti "umm", "aaa", "kayak gitu"): gantikan dengan jeda hening selama 2 detik.',
            'Gunakan kerangka SCQA: Situation (Situasi), Complication (Komplikasi Masalah), Question (Pertanyaan Kunci), Answer (Solusi).',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Presentasi Krisis di Depan Dewan Direksi (Board of Directors)',
          context: 'Server utama aplikasi down selama 3 jam di hari gajian, direksi mengadakan rapat darurat.',
          dilemma: 'Bagaimana menyampaikan laporan status saat para direktur sedang marah dan panik?',
          choices: [
            {
              id: 'c1',
              text: 'Jelaskan riwayat kronologis teknis dari kabel optik, kesalahan vendor hosting, dan detail log server selama 20 menit.',
              consequence: 'Direksi memotong pembicaraan Anda dengan geram: "Jadi solusinya apa dan kapan sistem menyala kembali?!" Reputasi kepemimpinan Anda tercoreng.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Menyajikan rincian teknis berbelit di masa krisis memicu frustrasi para pengambil keputusan.',
            },
            {
              id: 'c2',
              text: 'Gunakan Piramida Minto: "Sistem telah pulih 100% per 15 menit lalu tanpa kebocoran data. Ada 2 langkah mitigasi permanen yang sedang kami pasang agar insiden ini tidak terulang."',
              consequence: 'Kepanikan seketika reda, direksi merasa situasi terkendali penuh, dan wibawa Anda sebagai eksekutif kepemimpinan terbukti solid.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Menjawab inti kekhawatiran utama terlebih dahulu menenangkan kecemasan ruangan secara instan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-min-1',
            question: 'Dalam Prinsip Piramida Minto (Minto Pyramid Principle), mengapa kita harus selalu menaruh kesimpulan atau rekomendasi di awal kalimat?',
            options: [
              'Agar presentasi selesai dalam waktu 5 detik saja',
              'Karena otak manusia memproses logika hierarki dari atas ke bawah: mengetahui kesimpulan utama memudahkan pendengar mengkategorikan argumen pendukung secara teratur',
              'Karena aturan tata bahasa Inggris mewajibkan hal tersebut',
              'Agar audiens tidak perlu mengajukan pertanyaan lagi',
            ],
            correctAnswerIndex: 1,
            explanation: 'Metode Top-Down / Answer First menghemat energi mental audiens dan memungkinkan diskusi langsung berfokus pada validasi solusi strategis.',
          },
        ],
      },
      {
        id: 'nego-framing-anchoring',
        label: 'Framing Psikologis & Anchoring',
        domain: 'Psikologi',
        summary: 'Anchor Pricing, Framing Kehilangan vs Keuntungan (Loss Aversion Framing), dan Mengubah Penolakan ("Tidak") Menjadi Awal Kerja Sama.',
        x: 180,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Jika Anda menjual mobil seharga Rp 500 Juta dan langsung menawarkannya, pembeli merasa angka itu mahal. Namun jika Anda terlebih dahulu menunjukkan versi mobil mewah edisi terbatas seharga Rp 1,2 Miliar, tiba-tiba mobil Rp 500 Juta terasa sangat terjangkau. Angka pertama yang diucapkan di meja perundingan bertindak sebagai jangkar magnetik (Anchor) yang menarik seluruh persepsi angka berikutnya.',
          crossDisciplinary: {
            connectionText: 'Ekonomi Perilaku (Behavioral Economics) x Taktik Penetapan Harga',
            domains: ['Psikologi', 'Keuangan'],
            insight:
              'Daniel Kahneman membuktikan dalam Prospek Teori: rasa sakit kehilangan Rp 10 Juta dirasakan 2,5 kali lebih menyakitkan daripada rasa senang mendapatkan Rp 10 Juta yang sama. Frame risiko kerugian selalu lebih memotivasi aksi.',
          },
          actionableSteps: [
            'Gunakan "Range Anchoring" dengan batas bawah angka target Anda (misal: "Proyek skala ini biasanya berada di rentang Rp 120-150 Juta").',
            'Sajikan penawaran dengan frame pencegahan kerugian: "Menggunakan solusi ini mencegah risiko kebocoran kas Rp 50 Juta per bulan."',
            'Jangan takut mendengar kata "Tidak": kata tidak adalah momen saat negosiasi sejati baru dimulai, karena orang merasa aman saat memiliki kendali menolak.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Menawarkan Jasa Konsultasi Keamanan Siber',
          context: 'Perusahaan ritel ragu mengeluarkan anggaran Rp 150 Juta untuk audit keamanan database mereka.',
          dilemma: 'Bagaimana membingkai (frame) penawaran agar dewan direksi menyetujui anggaran?',
          choices: [
            {
              id: 'c1',
              text: 'Fokus memamerkan 50 sertifikasi teknis tim Anda dan betapa canggihnya software monitoring Anda.',
              consequence: 'Klien memandang penawaran Anda sebagai beban biaya teknis tambahan yang tidak mendesak dan menunda keputusan berbulan-bulan.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Menjual fitur teknis tanpa mengaitkannya dengan risiko bisnis nyata gagal menciptakan urgensi.',
            },
            {
              id: 'c2',
              text: 'Gunakan Loss Aversion Framing: "UU PDP terbaru mengenakan sanksi denda 2% dari omzet tahunan (Rp 4 Miliar) jika data pelanggan bocor. Investasi Rp 150 Juta ini mengamankan proteksi hukum dan reputasi publik Anda."',
              consequence: 'Direksi menyadari Rp 150 Juta adalah asuransi yang sangat murah dibanding risiko denda Rp 4 Miliar; proposal disetujui dalam 48 jam.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Membingkai biaya sebagai proteksi dari kerugian katastropik memicu insting pertahanan eksekutif secara efektif.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-frm-1',
            question: 'Mengapa negosiator ulung sering kali sengaja memancing kata "Tidak" di awal percakapan (misal: "Apakah sekarang waktu yang buruk untuk berbicara?")?',
            options: [
              'Karena mereka ingin percakapan segera diakhiri',
              'Karena mengatakan "Tidak" membuat lawan bicara merasa memegang kendali dan terlindungi, meruntuhkan sikap defensif mereka dibanding dipaksa mengatakan "Ya" palsu',
              'Karena kata tidak berarti penolakan mutlak selamanya',
              'Karena dilarang oleh etika bisnis',
            ],
            correctAnswerIndex: 1,
            explanation: 'Kata "Ya" sering kali merupakan komitmen palsu yang diucapkan orang agar percakapan cepat usai. Mengizinkan lawan berkata "Tidak" menciptakan rasa aman dan otonomi psikologis.',
          },
        ],
      },
      {
        id: 'nego-csuite-pitch',
        label: 'Pitching C-Suite & Storytelling Finansial',
        domain: 'Bisnis',
        summary: 'Mengubah Ide Teknis Menjadi Arus Kas, Menghubungkan Inovasi dengan ROE / EBITDA, dan Menguasai Bahasa Dewan Direksi.',
        x: 620,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Para direktur dan pemodal ventura tidak membeli ide teknologi Anda; mereka membeli proyeksi pengembalian modal atas risiko (Risk-Adjusted Return). Jika Anda berbicara bahasa teknis coding di depan CFO, Anda seperti turis yang berbicara bahasa asing di pasar lokal. Bicaralah dalam dialek asli mereka: EBITDA, Working Capital, Payback Period, dan Risiko Kepatuhan.',
          crossDisciplinary: {
            connectionText: 'Keuangan Korporat x Komunikasi Strategis',
            domains: ['Bisnis', 'Keuangan'],
            insight:
              'Penyajian cerita bisnis (Storytelling) yang hebat bukanlah dongeng fiksi, melainkan alur sebab-akibat yang menghubungkan masalah pasar, solusi produk, dan multiplikasi laba bersih di laporan neraca.',
          },
          actionableSteps: [
            'Terjemahkan setiap fitur produk ke dampak finansial: "Fitur ini memangkas waktu kerja 4 jam = menghemat Rp 80 Juta biaya lembur per bulan."',
            'Siapkan 1 halaman Executive Summary yang memuat: Masalah, Solusi, Biaya Investasi, dan Proyeksi Balik Modal (Payback Period).',
            'Latih pitching 2 menit (Elevator Pitch) yang memikat tanpa bergantung pada slide proyektor.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Meminta Anggaran Riset AI Senilai Rp 500 Juta ke CFO',
          context: 'Tim R&D Anda ingin mengimplementasikan model AI internal untuk otomatisasi customer support.',
          dilemma: 'CFO terkenal sangat ketat memotong anggaran belanja non-esensial.',
          choices: [
            {
              id: 'c1',
              text: 'Jelaskan betapa kerennya arsitektur transformer AI dan parameter miliaran token algoritma tersebut.',
              consequence: 'CFO menguap bosan dan menolak proposal: "Kita bukan universitas riset teoritis, anggarannya ditolak."',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Berbicara jargon teknis kepada pengambil keputusan finansial adalah kesalahan fatal komunikasi.',
            },
            {
              id: 'c2',
              text: 'Sajikan kalkulasi finansial: "Investasi Rp 500 Juta ini memangkas biaya operasional call center Rp 60 Juta/bulan. Titik balik modal (Break-Even) tercapai dalam 8,5 bulan, dan tahun ke-2 menghasilkan efisiensi bersih Rp 720 Juta per tahun."',
              consequence: 'CFO melihat ROI dan Payback Period yang jelas dan terukur; anggaran disetujui dengan pujian atas kedewasaan finansial tim Anda.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Menghubungkan inovasi langsung ke kalkulasi pengembalian modal (ROI) adalah bahasa universal para eksekutif senior.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-pit-1',
            question: 'Ketika melakukan pitching proyek baru di depan Chief Financial Officer (CFO), metrik apa yang paling mereka prioritaskan?',
            options: [
              'Berapa banyak slide animasi warna-warni yang ada di dokumen presentasi',
              'Berapa Return on Investment (ROI), Payback Period, dan dampaknya terhadap Free Cash Flow perusahaan',
              'Nama merek laptop yang digunakan saat presentasi',
              'Berapa banyak foto selfie tim pengembang produk',
            ],
            correctAnswerIndex: 1,
            explanation: 'CFO bertanggung jawab atas alokasi modal dan likuiditas perusahaan. Mereka mengevaluasi setiap pengeluaran berdasarkan rasio risiko dan potensi pengembalian arus kas riil.',
          },
        ],
      },
    ],
    edges: [
      { id: 'ne1', from: 'nego-root', to: 'nego-batna', label: 'Daya Tawar & Alternatif', domains: ['Komunikasi', 'Komunikasi'] },
      { id: 'ne2', from: 'nego-root', to: 'nego-minto-pyramid', label: 'Artikulasi Bottom-Line First', domains: ['Komunikasi', 'Komunikasi'] },
      { id: 'ne3', from: 'nego-root', to: 'nego-framing-anchoring', label: 'Jangkar Persepsi Angka', domains: ['Komunikasi', 'Psikologi'] },
      { id: 'ne4', from: 'nego-root', to: 'nego-csuite-pitch', label: 'Storytelling Arus Kas', domains: ['Komunikasi', 'Bisnis'] },
      { id: 'ne5', from: 'nego-batna', to: 'nego-framing-anchoring', label: 'Kekuatan Berani Walk Away', domains: ['Komunikasi', 'Psikologi'] },
      { id: 'ne6', from: 'nego-minto-pyramid', to: 'nego-csuite-pitch', label: 'Struktur Laporan Dewan Direksi', domains: ['Komunikasi', 'Bisnis'] },
    ],
  },

  // ============================================================================
  // 5. FINANCIAL MODELING, EXCEL & DATA ANALYTICS
  // ============================================================================
  'Financial Modeling, Excel & Data Analytics': {
    id: 'mindmap-financial-modeling-excel',
    topic: 'Financial Modeling, Excel & Data Analytics',
    rootId: 'excel-root',
    description: 'Kuasai Model Finansial Tiga Laporan Terintegrasi (3-Statement), Formula Mahir Excel, Analisis Kohort LTV/CAC, SQL, dan Stres Testing.',
    nodes: [
      {
        id: 'excel-root',
        label: 'Arsitektur Data & Model Finansial',
        domain: 'Data & Analitik',
        summary: 'Model finansial adalah simulasi digital atas masa depan bisnis. Angka di spreadsheet bukan sekadar catatan masa lalu, melainkan kompas pengambilan keputusan alokasi modal bernilai miliaran rupiah.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Menjalankan bisnis tanpa model finansial yang dinamis bagaikan menerbangkan pesawat jet komersial di tengah badai malam hari tanpa panel instrumen kokpit. Anda mungkin merasa sedang melaju kencang, namun Anda tidak tahu apakah ketinggian Anda turun mendekati tebing atau bahan bakar cadangan tinggal 10 menit lagi. Spreadsheet finansial adalah instrumen altimeter dan radar navigasi Anda.',
          crossDisciplinary: {
            connectionText: 'Kuantitatif Keuangan x Arsitektur Logika Sistem',
            domains: ['Data & Analitik', 'Keuangan'],
            insight:
              'Kecakapan menghubungkan Laba Rugi, Neraca, dan Arus Kas secara otomatis membedakan antara staf pembukuan administratif dengan analis strategi kelas Wall Street.',
          },
          actionableSteps: [
            'Bangun kebiasaan "Dynamic Driver": jangan pernah mengetik angka mentah (hardcoded) di dalam formula kalkulasi.',
            'Warnai sel spreadsheet secara standar industri: Biru untuk input/asumsi, Hitam untuk kalkulasi formula, Hijau untuk referensi lembar lain.',
            'Latih formula pencarian modern: kuasai XLOOKUP dan INDEX-MATCH untuk menggantikan VLOOKUP yang rentan error saat kolom bergeser.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Proyeksi Ekspansi Pabrik dengan Hardcoded Cell',
          context: 'Analis magang membuat model finansial ekspansi pabrik namun mengetik angka inflasi 5% langsung di dalam formula.',
          dilemma: 'Direksi ingin melihat apa yang terjadi jika inflasi melonjak menjadi 9% dalam skenario krisis.',
          choices: [
            {
              id: 'c1',
              text: 'Biarkan model hardcoded dan ubah angka di 80 sel spreadsheet satu per satu secara manual.',
              consequence: 'Butuh waktu 4 jam, ada 5 sel yang terlewat salah ketik, laporan menghasilkan proyeksi laba palsu yang menyesatkan direksi.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Hardcoding di dalam formula adalah dosa terbesar dalam pemodelan finansial profesional.',
            },
            {
              id: 'c2',
              text: 'Restrukturisasi model: buat satu sel "Assumption Driver Table" khusus di pojok atas, lalu hubungkan semua formula ke sel tersebut.',
              consequence: 'Dalam 2 detik seluruh proyeksi 5 tahun ke depan otomatis berubah saat angka inflasi diubah; direksi terkesan dengan ketepatan simulasi Anda.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Prinsip Best Practice FAST: model finansial harus fleksibel, transparan, dan terhubung secara dinamis.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-mod-1',
            question: 'Dalam standar pemodelan keuangan profesional (Wall Street Prep / Financial Modeling Institute), mengapa sel berisi angka input asumsi diwarnai dengan teks Biru?',
            options: [
              'Karena tinta printer warna biru lebih murah dari warna hitam',
              'Sebagai konvensi visual standar internasional: teks Biru menandakan input manual yang boleh diubah pengguna, sedangkan teks Hitam menandakan formula kalkulasi yang tidak boleh disentuh',
              'Hanya sekadar preferensi estetika desainer template',
              'Menandakan sel tersebut mengandung link ke situs web eksternal',
            ],
            correctAnswerIndex: 1,
            explanation: 'Standar pewarnaan font (Biru untuk input/asumsi, Hitam untuk formula, Hijau untuk lembar lain) mencegah pengguna salah menimpa rumus penting dalam spreadsheet korporat.',
          },
        ],
      },
      {
        id: 'excel-3statement',
        label: 'Integrated 3-Statement Model',
        domain: 'Keuangan',
        summary: 'Menghubungkan Laporan Laba Rugi (Income Statement), Neraca (Balance Sheet), dan Arus Kas (Cash Flow) Tanpa Selisih (Zero Discrepancy).',
        x: 180,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Ketiga laporan keuangan bagaikan organ tubuh yang saling memompa darah: Laporan Laba Rugi adalah detak jantung omzet dan biaya; Arus Kas adalah darah segar yang mengalir ke seluruh urat nadi; dan Neraca adalah kerangka tulang yang menyangga seluruh bobot tubuh. Laba bersih mengalir ke Saldo Laba (Retained Earnings) di Neraca dan menjadi titik awal di Laporan Arus Kas.',
          crossDisciplinary: {
            connectionText: 'Akuntansi Korporat x Dinamika Modal Kerja',
            domains: ['Keuangan', 'Data & Analitik'],
            insight:
              'Kunci integrasi: Kas akhir di Laporan Arus Kas wajib sama persis dengan baris Kas di Neraca, dan Neraca harus seimbang (Total Aset = Total Liabilitas + Ekuitas) tanpa selisih 1 rupiah pun.',
          },
          actionableSteps: [
            'Buat baris "Check Balance" di bagian bawah Neraca: Formula `= Total Aset - (Liabilitas + Ekuitas)` harus selalu menghasilkan nilai 0.',
            'Pahami hubungan Depresiasi: mengurangi Laba Kotor di Laba Rugi, diakumulasikan mengurangi Aset Tetap di Neraca, dan ditambahkan kembali di Arus Kas Operasional.',
            'Petakan dampak kenaikan Piutang Usaha (Accounts Receivable): omzet tercatat di Laba Rugi namun arus kas riil berkurang karena uang belum diterima tunai.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Neraca Keuangan Selisih (Unbalanced) Rp 50 Juta',
          context: 'Menjelang rapat investor pukul 14.00, neraca finansial model Anda menunjukkan selisih Rp 50 Juta.',
          dilemma: 'Bagaimana melacak dan memperbaiki selisih tersebut dengan cepat?',
          choices: [
            {
              id: 'c1',
              text: 'Masukkan angka "Penyesuaian Lain-lain" (Plug Cell) sebesar Rp 50 Juta di baris ekuitas agar neraca seimbang secara paksa.',
              consequence: 'Auditor investor memeriksa formula dan menemukan manipulasi plug cell; integritas analisis Anda runtuh dan pendanaan dibatalkan.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Membuat "plug cell" fiktif untuk menyeimbangkan neraca adalah pelanggaran etika dan kepatuhan finansial fatal.',
            },
            {
              id: 'c2',
              text: 'Telusuri baris Belanja Modal (CapEx) dan Depresiasi: periksa apakah arus kas investasi telah dikurangi dari nilai buku aset tetap di neraca secara konsisten.',
              consequence: 'Ditemukan ada rumus depresiasi yang belum terhubung ke akumulasi penyusutan; neraca seimbang murni dan model lolos uji due-diligence.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Melacak aliran mekanis akuntansi secara teliti menyelesaikan akar masalah ketidakseimbangan neraca secara permanen.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-3st-1',
            question: 'Ketika sebuah perusahaan membeli mesin baru seharga Rp 100 Juta secara tunai, bagaimana transaksi ini tercermin di dalam 3 Laporan Keuangan secara bersamaan?',
            options: [
              'Laba bersih langsung turun Rp 100 Juta di Laporan Laba Rugi hari itu juga',
              'Di Neraca: Kas berkurang Rp 100 Juta dan Aset Tetap bertambah Rp 100 Juta (Total Aset tetap sama); di Laporan Arus Kas tercatat sebagai pengeluaran Cash Flow from Investing; Laba Rugi belum terpengaruh hingga beban depresiasi berjalan',
              'Liabilitas utang bank otomatis bertambah Rp 100 Juta',
              'Modal saham pemegang saham disita oleh bank',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pembelian aset modal (CapEx) tidak langsung memotong laba rugi sekaligus, melainkan dikapitalisasi di neraca sebagai aset tetap dan dialokasikan secara berkala melalui biaya penyusutan (depresiasi).',
          },
        ],
      },
      {
        id: 'excel-unit-economics',
        label: 'Unit Economics & Analisis Kohort',
        domain: 'Data & Analitik',
        summary: 'Customer Lifetime Value (LTV), Customer Acquisition Cost (CAC), Payback Period, Churn Rate, dan Tabel Kohort Retensi Pengguna.',
        x: 620,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Bayangkan bisnis Anda adalah sebuah ember air. CAC adalah biaya untuk membeli gayung air untuk dituangkan ke dalam ember. LTV adalah berapa banyak air yang bisa ditampung dan diminum dari ember tersebut. Jika dasar ember Anda berlubang bocor parah (Churn Rate tinggi), menuangkan lebih banyak air iklan hanya membakar modal tanpa pernah mengisi ember sampai penuh.',
          crossDisciplinary: {
            connectionText: 'Analitika Data Pengguna x Kesehatan Fundamental Startup',
            domains: ['Data & Analitik', 'Bisnis'],
            insight:
              'Benchmark bisnis sehat: Rasio LTV / CAC minimal harus di atas 3:1 dan Payback Period CAC idealnya di bawah 12 bulan.',
          },
          actionableSteps: [
            'Buat Matriks Tabel Kohort bulanan: lacak berapa persen pengguna bulan Januari yang masih aktif bertransaksi di bulan ke-6 dan ke-12.',
            'Hitung CAC Riil: (Total Biaya Pemasaran + Gaji Tim Sales) dibagi Jumlah Pengguna Baru yang Didapat.',
            'Lacak Net Revenue Retention (NRR): pastikan pendapatan dari pelanggan lama bertumbuh (ekspansi) mengalahkan pelanggan yang churn.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Pilihan Alokasi Anggaran Marketing Rp 200 Juta',
          context: 'Rasio LTV / CAC bisnis e-commerce Anda saat ini adalah 1.2:1 dengan tingkat retensi bulan ke-3 hanya 15%.',
          dilemma: 'Tim marketing mengusulkan membakar Rp 200 Juta untuk iklan diskon TikTok demi mengejar pertumbuhan pengguna baru.',
          choices: [
            {
              id: 'c1',
              text: 'Setujui belanja iklan Rp 200 Juta agar grafik pertumbuhan pengguna baru terlihat meroket di mata publik.',
              consequence: 'Pengguna baru datang hanya untuk berburu diskon, setelah itu pergi (churn); kas habis dan bisnis terancam kolaps.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Mempercepat pertumbuhan di atas unit economics yang bocor sama dengan mempercepat kebangkrutan.',
            },
            {
              id: 'c2',
              text: 'Tahan belanja iklan masif, alokasikan anggaran untuk riset produk, onboarding pengguna, dan program loyalitas hingga retensi naik dan LTV/CAC mencapai >3:1.',
              consequence: 'Ember diperbaiki, pengguna lama terus berbelanja berulang (repeat order), dan begitu iklan dinyalakan kembali, bisnis mencetak profit eksponensial.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Menyelaraskan unit economics sebelum melakukan scaling adalah hukum gravitasi bisnis yang tidak bisa dilanggar.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-ue-1',
            question: 'Jika biaya Customer Acquisition Cost (CAC) Anda adalah Rp 50.000 dan rata-rata laba kotor yang dihasilkan pelanggan seumur hidup (LTV) adalah Rp 200.000, berapa rasio LTV / CAC dan apa kesimpulannya?',
            options: [
              'Rasio 1:4 (Bisnis merugi parah dan harus ditutup)',
              'Rasio 4:1 (Unit economics sangat sehat dan memiliki potensi skalabilitas yang sangat menguntungkan)',
              'Rasio 0.25 (Pajak perusahaan terlalu tinggi)',
              'Rasio 10:1 (Harus memecat tim sales)',
            ],
            correctAnswerIndex: 1,
            explanation: 'Rasio LTV/CAC 4:1 berada di atas benchmark emas (3:1). Setiap Rp 1 modal pemasaran yang diinvestasikan menghasilkan Rp 4 nilai kembali bagi bisnis.',
          },
        ],
      },
      {
        id: 'excel-sql-database',
        label: 'SQL & Database Query Eksekutif',
        domain: 'Data & Analitik',
        summary: 'Perintah SELECT, JOIN, GROUP BY, Window Functions, dan Menarik Data Transaksi Langsung dari PostgreSQL / BigQuery.',
        x: 180,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Mengandalkan tim data analis untuk setiap pertanyaan bisnis kecil bagaikan harus memesan penerjemah setiap kali ingin berbicara dengan pelanggan. Eksekutif yang menguasai dasar SQL (Structured Query Language) dapat langsung membuka gudang data mentah perusahaan, menyaring jutaan baris transaksi dalam 3 detik, dan mengambil keputusan berbasis fakta saat itu juga.',
          crossDisciplinary: {
            connectionText: 'Ilmu Komputer Relasional x Kecepatan Keputusan Manajemen',
            domains: ['Data & Analitik', 'Bisnis'],
            insight:
              'Data yang tertinggal seminggu adalah sejarah; data yang ditarik via SQL query hari ini adalah keunggulan kompetitif yang dapat ditindaklanjuti seketika.',
          },
          actionableSteps: [
            'Kuasai sintaks dasar: `SELECT customer_id, SUM(amount) FROM orders WHERE status = \'completed\' GROUP BY customer_id ORDER BY 2 DESC;`',
            'Pahami perbedaan INNER JOIN vs LEFT JOIN saat menggabungkan tabel pengguna dengan tabel pembayaran.',
            'Gunakan fungsi jendela (Window Function seperti `ROW_NUMBER()` dan `LEAD/LAG`) untuk menghitung pertumbuhan dari bulan ke bulan.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Perbedaan Angka Penjualan Antara Tim Sales vs Akuntansi',
          context: 'Tim sales mengklaim omzet bulan ini Rp 1,5 Miliar, namun akuntansi mencatat hanya Rp 1,1 Miliar.',
          dilemma: 'Rapat evaluasi dimulai dalam 30 menit dan kedua belah pihak saling menyalahkan.',
          choices: [
            {
              id: 'c1',
              text: 'Percaya begitu saja pada klaim tim sales tanpa memeriksa database mentah.',
              consequence: 'Ternyata ada transaksi pending fiktif yang belum dibayar pembeli; keputusan belanja modal Anda meleset dan kas tekor.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Mengambil keputusan berbasis opini verbal tanpa verifikasi data mentah sangat berbahaya.',
            },
            {
              id: 'c2',
              text: 'Buka query tool database dan jalankan query: pisahkan transaksi dengan status `PAID` vs status `PENDING` atau `REFUND`.',
              consequence: 'Dalam 5 menit fakta objektif tersaji di layar proyektor: selisih Rp 400 Juta adalah pesanan yang belum dibayar transfer; perdebatan selesai dan tindakan penagihan langsung dijalankan.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Kemampuan query data secara mandiri menghadirkan kebenaran faktual objektif di tengah konflik opini internal.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-sql-1',
            question: 'Dalam perintah SQL database, klausul mana yang digunakan untuk mengelompokkan data penjualan berdasarkan kategori produk dan menghitung total omzetnya?',
            options: [
              'WHERE kategori = \'all\'',
              'GROUP BY kategori dengan fungsi agregat SUM(omzet)',
              'DROP TABLE kategori',
              'DELETE FROM omzet',
            ],
            correctAnswerIndex: 1,
            explanation: '`GROUP BY` mengelompokkan baris-baris data yang memiliki nilai kolom serupa sehingga fungsi agregasi seperti `SUM()`, `AVG()`, atau `COUNT()` dapat menghitung nilai total per kelompok.',
          },
        ],
      },
      {
        id: 'excel-stress-testing',
        label: 'Analisis Sensitivitas & Stres Testing',
        domain: 'Data & Analitik',
        summary: 'Data Tables (1 & 2 Dimensi), Goal Seek, Scenario Manager, dan Simulasi Skenario Terburuk (Worst-Case Shock Analysis).',
        x: 620,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Insinyur jembatan gantung tidak mendesain kabel baja hanya untuk menahan beban mobil di hari yang cerah dan sepoi-sepoi; mereka menguji apakah jembatan itu tetap kokoh saat dihantam badai angin topan 150 km/jam bersamaan dengan gempa bumi berkekuatan 8 skala Richter. Analisis Sensitivitas di Excel menguji apakah bisnis Anda tetap hidup jika omzet turun 30% dan suku bunga utang melonjak 300 bps secara simultan.',
          crossDisciplinary: {
            connectionText: 'Statistika Probabilitas x Manajemen Kelangsungan Bisnis',
            domains: ['Data & Analitik', 'Keuangan'],
            insight:
              'Mengetahui titik impas kritis (Breakeven Threshold) memberi Anda ketenangan eksekutif: Anda tahu persis berapa lama cadangan kas bertahan sebelum tindakan darurat harus dieksekusi.',
          },
          actionableSteps: [
            'Gunakan fitur Excel Data Table 2 Dimensi untuk memetakan laba bersih terhadap variasi Harga Jual (sumbu X) dan Biaya Bahan Baku (sumbu Y).',
            'Buat 3 skenario resmi di model Anda: Base Case (Realistis), Bull Case (Optimis), dan Bear Case (Krisis Parah).',
            'Gunakan "Goal Seek" untuk menghitung berapa minimal unit produk yang wajib terjual per hari agar operasional tidak merugi.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Negosiasi Pinjaman Bank untuk Proyek Properti',
          context: 'Bank menawarkan kredit konstruksi Rp 5 Miliar dengan asumsi bunga mengambang (floating rate).',
          dilemma: 'Bagaimana membuktikan kepada komite risiko bahwa proyek Anda kebal dari gejolak suku bunga?',
          choices: [
            {
              id: 'c1',
              text: 'Sajikan satu lembar proyeksi statis tunggal dengan asumsi suku bunga bunga flat 6% selamanya.',
              consequence: 'Komite bank menolak proposal karena model dianggap naif dan tidak memperhitungkan risiko volatilitas makro.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Model deterministik tanpa stres test mencerminkan ketidaksiapan manajemen menghadapi realitas pasar.',
            },
            {
              id: 'c2',
              text: 'Sajikan Data Table Sensitivitas yang menguji Debt Service Coverage Ratio (DSCR) pada skenario suku bunga naik ke 8%, 10%, hingga 12% disertai mitigasi cadangan kas escrow.',
              consequence: 'Komite risiko bank terkesan dengan kedalaman perencanaan manajemen Anda; pinjaman disetujui dengan suku bunga preferensial.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Transparansi uji stres membangun kredibilitas tak terbantahkan di mata institusi keuangan profesional.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-st-1',
            question: 'Apa fungsi utama dari fitur "Data Table" dua variabel di Microsoft Excel dalam pemodelan keuangan?',
            options: [
              'Untuk mengganti jenis font dan warna sel secara otomatis',
              'Menampilkan matriks hasil keluaran (output) secara dinamis terhadap kombinasi perubahan dua variabel input yang berbeda secara bersamaan',
              'Menghapus baris yang mengandung sel kosong',
              'Mengirim email otomatis ke dewan direksi',
            ],
            correctAnswerIndex: 1,
            explanation: 'Data Table 2 Dimensi sangat efektif untuk analisis sensitivitas: Anda bisa melihat seketika bagaimana kombinasi perubahan harga jual dan volume mempengaruhi laba bersih dalam satu tabel ringkas.',
          },
        ],
      },
    ],
    edges: [
      { id: 'xe1', from: 'excel-root', to: 'excel-3statement', label: 'Integritas 3 Laporan Keuangan', domains: ['Data & Analitik', 'Keuangan'] },
      { id: 'xe2', from: 'excel-root', to: 'excel-unit-economics', label: 'Metrik LTV / CAC', domains: ['Data & Analitik', 'Bisnis'] },
      { id: 'xe3', from: 'excel-root', to: 'excel-sql-database', label: 'Pengambilan Data Mentah', domains: ['Data & Analitik', 'Data & Analitik'] },
      { id: 'xe4', from: 'excel-root', to: 'excel-stress-testing', label: 'Simulasi Skenario Krisis', domains: ['Data & Analitik', 'Keuangan'] },
      { id: 'xe5', from: 'excel-3statement', to: 'excel-stress-testing', label: 'Uji Ketahanan Arus Kas', domains: ['Keuangan', 'Data & Analitik'] },
      { id: 'xe6', from: 'excel-unit-economics', to: 'excel-sql-database', label: 'Kueri Kohort Retensi', domains: ['Bisnis', 'Data & Analitik'] },
    ],
  },

  // ============================================================================
  // 6. HUKUM BISNIS, KONTRAK & EFISIENSI PAJAK
  // ============================================================================
  'Hukum Bisnis, Kontrak & Efisiensi Pajak': {
    id: 'mindmap-hukum-bisnis-pajak',
    topic: 'Hukum Bisnis, Kontrak & Efisiensi Pajak',
    rootId: 'hukum-root',
    description: 'Bongkar Struktur PT, Perjanjian Pemegang Saham (SHA), Klausul Drag/Tag-Along, Vesting, Perlindungan HKI, dan Tax Avoidance Legal vs Tax Evasion.',
    nodes: [
      {
        id: 'hukum-root',
        label: 'Fondasi Legalitas & Optimalisasi Pajak',
        domain: 'Hukum',
        summary: 'Hukum dan perpajakan bukan beban administratif yang harus dihindari secara sembunyi-sembunyi, melainkan aturan permainan kapitalisme resmi yang jika dikuasai dengan cerdas menjadi perisai aset terbesar Anda.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Memulai bisnis tanpa struktur hukum dan kontrak yang jelas bagaikan membangun gedung pencakar langit 40 lantai di atas fondasi pasir basah. Di masa damai saat matahari cerah, bangunan terlihat megah. Namun begitu terjadi gempa sengketa antar-pendiri atau badai pemeriksaan pajak, seluruh gedung runtuh menimpa pemiliknya. Kontrak yang kokoh adalah beton bertulang yang mengunci kekayaan Anda.',
          crossDisciplinary: {
            connectionText: 'Hukum Perdata Korporat x Perencanaan Pajak Strategis',
            domains: ['Hukum', 'Pajak'],
            insight:
              'Hakim legendaris Learned Hand menyatakan: "Setiap orang berhak mengatur urusan keuangannya agar pajaknya serendah mungkin menurut hukum yang berlaku. Tidak ada kewajiban moral untuk membayar pajak lebih dari yang diwajibkan undang-undang."',
          },
          actionableSteps: [
            'Pisahkan rekening dan aset pribadi dari aset perusahaan (PT) untuk menjaga prinsip "Tanggung Jawab Terbatas" (Limited Liability).',
            'Pastikan setiap kemitraan bisnis memiliki Perjanjian Pemegang Saham (Shareholders Agreement) tertulis di depan notaris.',
            'Kuasai perbedaan antara Tax Planning/Avoidance (Legal & Cerdas) dengan Tax Evasion (Ilegal & Pidana Penjara).',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Mendirikan Bisnis dengan Teman Akrab Tanpa Akta Perjanjian',
          context: 'Anda dan sahabat karib sepakat mendirikan agensi digital dengan modal 50:50 hanya berdasarkan saling percaya secara lisan.',
          dilemma: 'Tahun kedua bisnis menghasilkan laba Rp 1 Miliar dan teman Anda mulai malas bekerja namun tetap menuntut bagi hasil 50%.',
          choices: [
            {
              id: 'c1',
              text: 'Biarkan situasi berjalan tanpa kontrak formal karena merasa tidak enak hati menegur sahabat lama.',
              consequence: 'Konflik memuncak menjadi perseteruan sengit, kas bisnis dibekukan, klien kabur, dan persahabatan hancur lebur.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Mengandalkan rasa tidak enak dalam urusan modal adalah resep kehancuran bisnis paling umum di dunia.',
            },
            {
              id: 'c2',
              text: 'Sejak hari pertama buat Shareholders Agreement resmi dengan klausul Vesting 4 tahun dan Key Performance Indicators (KPI) keaktifan operasional.',
              consequence: 'Hak kepemilikan saham diperoleh secara bertahap sejalan dengan kontribusi nyata; bisnis terlindungi dan persahabatan tetap terjaga profesional.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Klausul Vesting memastikan bahwa pemegang saham yang tidak berkontribusi tidak dapat membawa kabur ekuitas perusahaan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-law-1',
            question: 'Apa perbedaan hukum mendasar antara Perseroan Terbatas (PT) dengan Usaha Perorangan atau CV terkait tanggung jawab finansial pemegang saham?',
            options: [
              'PT tidak perlu membayar pajak ke negara',
              'Pada PT berlaku prinsip Tanggung Jawab Terbatas (Limited Liability): tanggung jawab pemegang saham hanya sebatas modal saham yang disetorkan, sehingga harta pribadi terpisah dan terlindungi dari kebangkrutan perusahaan',
              'CV memiliki wewenang menerbitkan obligasi di bursa efek internasional',
              'Semua utang PT wajib dilunasi menggunakan rumah dan mobil pribadi direktur',
            ],
            correctAnswerIndex: 1,
            explanation: 'Limited Liability adalah penemuan terbesar hukum korporat modern: membatasi risiko kerugian pemodal hanya pada modal yang disetor, memisahkan harta pribadi dari tuntutan kreditor bisnis.',
          },
        ],
      },
      {
        id: 'hukum-sha-vesting',
        label: 'Shareholders Agreement (SHA) & Vesting',
        domain: 'Hukum',
        summary: 'Klausul Drag-Along, Tag-Along, Right of First Refusal (ROFR), Anti-Dilusi, Deadlock Resolution, dan Reverse Vesting 4 Tahun dengan 1-Year Cliff.',
        x: 180,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Klausul Vesting 4 Tahun dengan 1-Year Cliff bagaikan masa pertunangan sebelum pernikahan resmi. Jika seorang pendiri bisnis menjanjikan komitmen 4 tahun namun kabur di bulan ke-8, klausul 1-Year Cliff memastikan ia pulang dengan tangan kosong tanpa membawa selembar saham pun. Ekuitas bisnis hanya diberikan kepada mereka yang membuktikan keringat dan kesetiaannya.',
          crossDisciplinary: {
            connectionText: 'Hukum Kontrak Korporat x Psikologi Insentif Pendiri',
            domains: ['Hukum', 'Bisnis'],
            insight:
              'Klausul "Drag-Along" melindungi pemegang saham mayoritas agar dapat menjual seluruh perusahaan ke pembeli akuisisi tanpa bisa disandera oleh pemegang saham minoritas yang menolak tanda tangan.',
          },
          actionableSteps: [
            'Terapkan standar Vesting Schedule: 4 tahun masa vesting dengan 1-year cliff (25% terbuka di akhir tahun pertama, sisanya bertahap tiap bulan).',
            'Sertakan klausul "Bad Leaver": pendiri yang dipecat karena kecurangan pidana wajib menjual kembali sahamnya ke perseroan di harga nominal (par value).',
            'Gunakan klausul "Right of First Refusal (ROFR)" agar pemegang saham lama berhak membeli saham terlebih dahulu sebelum ditawarkan ke pihak luar asing.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Tawaran Akuisisi $5 Juta vs Pemegang Saham 2% yang Membangkang',
          context: 'Korporasi global ingin mengakuisisi 100% saham startup Anda senilai $5 Juta tunai.',
          dilemma: 'Satu investor malaikat minoritas yang hanya memegang 2% saham menolak menandatangani perjanjian jual beli karena motif dendam pribadi.',
          choices: [
            {
              id: 'c1',
              text: 'Batalkan kesepakatan akuisisi $5 Juta karena mengira semua pemegang saham harus sepakat 100% tanpa pengecualian.',
              consequence: 'Peluang exit bernilai puluhan miliar rupiah lenyap sia-sia akibat ulah satu orang pemegang saham 2%.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Ketiadaan klausul Drag-Along dalam perjanjian pemegang saham menyandera masa depan seluruh pemodal mayoritas.',
            },
            {
              id: 'c2',
              text: 'Aktifkan klausul "Drag-Along" (Hak Menyeret) yang telah disepakati di SHA: pemegang saham mayoritas berhak memaksa minoritas ikut menjual saham di syarat dan harga yang sama.',
              consequence: 'Akuisisi $5 Juta selesai tepat waktu, seluruh pemegang saham menerima bagian tunai secara proporsional dan sah secara hukum.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Klausul Drag-Along dirancang khusus untuk mencegah pemegang saham minoritas menyandera transaksi penjualan perusahaan yang menguntungkan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-vst-1',
            question: 'Dalam struktur pendanaan startup dan korporasi modern, apa fungsi dari klausul "Tag-Along Right" bagi pemegang saham minoritas?',
            options: [
              'Memaksa pendiri bekerja lembur di hari libur',
              'Melindungi pemegang saham minoritas: jika pemegang saham mayoritas menjual sahamnya ke pihak pembeli baru, minoritas berhak ikut menjual saham mereka dengan harga dan syarat yang sama menguntungkannya',
              'Menghilangkan hak suara pemegang saham minoritas di RUPS',
              'Mengalihkan seluruh dividen ke kas negara',
            ],
            correctAnswerIndex: 1,
            explanation: 'Tag-Along (Hak Ikut Serta) mencegah investor mayoritas meninggalkan investor minoritas sendirian bersama pemilik baru yang tidak dikenal dengan harga yang berbeda.',
          },
        ],
      },
      {
        id: 'hukum-pajak-efisiensi',
        label: 'Optimalisasi Pajak Legal (Tax Avoidance)',
        domain: 'Pajak',
        summary: 'Perbedaan Tax Avoidance (Legal & Terstruktur) vs Tax Evasion (Pidana), Biaya Pengurang Pajak (Deductible Expenses), Dividen Bebas PPh, dan Natura.',
        x: 620,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Pajak bagaikan jalan tol bertingkat. Tax Evasion (Penggelapan Pajak) bagaikan menerobos palang pintu tol tanpa membayar: Anda dikejar polisi sirene dan berakhir di balik jeruji besi. Tax Avoidance (Perencanaan Pajak Legal) bagaikan memilih rute alternatif resmi yang disediakan undang-undang: memanfaatkan diskon tarif, insentif investasi industri hijau, dan biaya operasional yang sah untuk meminimalkan beban tagihan secara legal.',
          crossDisciplinary: {
            connectionText: 'Hukum Perpajakan Positif x Strategi Struktur Neraca',
            domains: ['Pajak', 'Keuangan'],
            insight:
              'Berdasarkan UU Harmonisasi Peraturan Perpajakan (HPP), dividen yang diterima oleh wajib pajak orang pribadi dalam negeri dibebaskan dari objek PPh jika diinvestasikan kembali di wilayah NKRI selama minimal 3 tahun.',
          },
          actionableSteps: [
            'Manfaatkan fasilitas Dividen Bebas Pajak dengan menginvestasikan kembali dividen ke instrumen produktif di Indonesia.',
            'Maksimalkan pos "Deductible Expenses" (biaya yang dapat dikurangkan dari penghasilan bruto perusahaan) sesuai aturan fiskal resmi.',
            'Gunakan fasilitas natura (benefit in kind) yang dikecualikan dari objek pajak untuk kesejahteraan karyawan.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Penarikan Keuntungan Perusahaan Rp 500 Juta',
          context: 'PT Anda mencetak laba bersih setelah PPh Badan dan Anda ingin menarik Rp 500 Juta untuk diinvestasikan kembali.',
          dilemma: 'Teman Anda menyarankan menyamarkan penarikan sebagai transaksi palsu tanpa pelaporan resmi.',
          choices: [
            {
              id: 'c1',
              text: 'Ikuti saran teman: transfer diam-diam tanpa pencatatan pembukuan dividen resmi.',
              consequence: 'Terdeteksi algoritma sistem Core Tax DJP; terkena surat SP2DK, denda bunga 200%, dan ancaman pidana perpajakan.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Menyembunyikan penghasilan adalah tindak pidana Tax Evasion yang pasti terendus integrasi data perbankan modern.',
            },
            {
              id: 'c2',
              text: 'Tarik resmi sebagai Dividen Sah melalui RUPS, lalu laporkan dalam SPT dan investasikan kembali ke instrumen SBN/Reksadana/Aset Produktif selama minimal 3 tahun sesuai UU HPP.',
              consequence: 'Beban PPh Dividen menjadi 0% (Bebas Pajak Resmi), uang aman, dan neraca kepatuhan Anda mendapatkan status Wajib Pajak Patuh.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Memanfaatkan celah insentif re-investasi dividen UU HPP adalah contoh nyata kejeniusan perencanaan pajak legal.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-tax-1',
            question: 'Di bawah undang-undang perpajakan Indonesia yang berlaku saat ini (UU HPP), syarat utama agar dividen yang diterima orang pribadi bebas dari pengenaan PPh adalah:',
            options: [
              'Dividen disumbangkan ke partai politik',
              'Dividen diinvestasikan kembali di wilayah Negara Kesatuan Republik Indonesia (NKRI) dalam jangka waktu minimal 3 tahun dan dilaporkan dalam laporan realisasi investasi',
              'Dividen ditarik tunai dan disimpan di rumah',
              'Dividen ditukarkan ke mata uang kripto luar negeri',
            ],
            correctAnswerIndex: 1,
            explanation: 'Sesuai UU HPP Pasal 4 ayat (3) huruf f, dividen dalam negeri yang diinvestasikan kembali di instrumen keuangan atau sektor riil NKRI selama paling singkat 3 tahun dikecualikan dari objek pajak penghasilan.',
          },
        ],
      },
      {
        id: 'hukum-hki-paten',
        label: 'Perlindungan HKI, Merek & Rahasia Dagang',
        domain: 'Hukum',
        summary: 'Pendaftaran Hak Merek (First-to-File Principle), Paten Teknologi, Hak Cipta, dan Perjanjian Kerahasiaan (Non-Disclosure Agreement / NDA).',
        x: 180,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Di Indonesia dan sebagian besar dunia, hukum merek menganut prinsip "First-to-File", bukan "First-to-Use". Anda bisa saja sudah merintis warung bakso selama 15 tahun dan terkenal seantero kota, namun jika kompetitor licik mendaftarkan nama merek itu ke Dirjen Kekayaan Intelektual (DJKI) satu hari lebih dulu dari Anda, secara hukum Anda yang dilarang menggunakan nama warung Anda sendiri dan bisa digugat ganti rugi miliaran rupiah.',
          crossDisciplinary: {
            connectionText: 'Hukum Hak Kekayaan Intelektual x Perlindungan Valuasi Brand',
            domains: ['Hukum', 'Bisnis'],
            insight:
              'Merek dagang dan rahasia dagang (Trade Secret seperti formula Coca-Cola) adalah aset tak berwujud (intangible asset) yang valuasinya sering kali melampaui nilai fisik gedung kantor perusahaan.',
          },
          actionableSteps: [
            'Daftarkan Hak Merek produk Anda di portal e-Status DJKI Kemenkumham sebelum meluncurkan kampanye pemasaran publik.',
            'Wajibkan seluruh karyawan inti dan mitra eksternal menandatangani Non-Disclosure Agreement (NDA) dengan klausul denda liquidated damages.',
            'Lindungi resep atau algoritma proprietary sebagai "Rahasia Dagang" dengan prosedur akses terbatas dan enkripsi berlapis.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Brand Produk Viral Belum Terdaftar di DJKI',
          context: 'Produk skincare herbal Anda viral di TikTok dan menghasilkan omzet Rp 300 Juta/bulan.',
          dilemma: 'Anda menunda mendaftarkan hak merek seharga Rp 1,8 Juta karena merasa prosesnya memakan waktu.',
          choices: [
            {
              id: 'c1',
              text: 'Biarkan tidak terdaftar dulu sampai omzet mencapai Rp 1 Miliar baru mengurus legalitas.',
              consequence: 'Pihak calo merek mendaftarkan nama brand Anda duluan; akun TikTok Shop Anda di-takedown permanen atas laporan pelanggaran merek, bisnis lumpuh total.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Prinsip First-to-File tidak memedulikan siapa yang pertama membuat produk, melainkan siapa yang pertama mendaftar resmi ke negara.',
            },
            {
              id: 'c2',
              text: 'Daftarkan kelas merek (Kelas 3 kosmetik) hari ini juga melalui konsultan HKI terdaftar dan amankan bukti tanda terima pengajuan pendaftaran.',
              consequence: 'Hak monopoli nama merek terlindungi sejak tanggal penerimaan pendaftaran, akun marketplace kebal takedown, dan aset brand aman selamanya.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Perlindungan HKI sedini mungkin mengamankan valuasi aset tak berwujud dari pembajakan kompetitor.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-hki-1',
            question: 'Sistem pendaftaran Hak Merek di Indonesia menganut prinsip "First-to-File". Apa makna hukum dari prinsip ini?',
            options: [
              'Siapa yang pertama kali menggunakan merek di media sosial adalah pemilik sah merek tersebut',
              'Pihak yang pertama kali mengajukan permohonan pendaftaran resmi ke DJKI yang akan diberikan hak eksklusif atas merek tersebut, tanpa mempedulikan siapa yang pertama kali menggunakan merek secara de facto di pasar',
              'Pendaftaran merek hanya berlaku untuk perusahaan asing',
              'Semua merek secara otomatis menjadi milik negara setelah 1 tahun',
            ],
            correctAnswerIndex: 1,
            explanation: 'Prinsip First-to-File memberikan kepastian hukum: hak eksklusif diberikan kepada pemohon pertama yang dokumen pendaftarannya diterima secara lengkap oleh kantor pendaftaran merek negara.',
          },
        ],
      },
      {
        id: 'hukum-kontrak-mitigasi',
        label: 'Anatomi Kontrak & Klausul Proteksi',
        domain: 'Hukum',
        summary: 'Klausul Force Majeure, Indemnifikasi, Pembatasan Tanggung Jawab (Limitation of Liability), dan Penyelesaian Sengketa Arbitrase (BANI).',
        x: 620,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Menandatangani kontrak bisnis tanpa membaca klausul "Limitation of Liability" bagaikan menandatangani cek kosong dengan nominal tak terhingga kepada pihak lain. Jika software Anda mengalami bug kecil senilai Rp 5 Juta namun menyebabkan klien merugi Rp 10 Miliar, tanpa klausul pembatasan tanggung jawab, pengadilan dapat menyita seluruh aset bisnis Anda untuk menutupi seluruh kerugian Rp 10 Miliar tersebut.',
          crossDisciplinary: {
            connectionText: 'Hukum Perjanjian Perdata x Mitigasi Risiko Eksistensial',
            domains: ['Hukum', 'Keuangan'],
            insight:
              'Klausul "Limitation of Liability" wajib membatasi ganti rugi maksimal sebesar nilai kontrak yang telah dibayarkan klien dalam 12 bulan terakhir.',
          },
          actionableSteps: [
            'Selalu masukkan klausul "Limitation of Liability" yang membatasi tanggung jawab ganti rugi pada nilai total kontrak yang diterima.',
            'Pilih klausul penyelesaian sengketa melalui Arbitrase (BANI) yang bersifat tertutup dan rahasia, alih-alih pengadilan negeri terbuka yang merusak publisitas brand.',
            'Definisikan keadaan memaksa (Force Majeure) secara rinci mencakup bencana alam, perang, pandemi, dan perubahan mendadak regulasi pemerintah.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Draf Kontrak Pengadaan Vendor Senilai Rp 200 Juta',
          context: 'Klien korporat menyodorkan draf kontrak standar mereka yang menyatakan vendor bertanggung jawab atas "segala bentuk kerugian langsung maupun tidak langsung tanpa batas nominal".',
          dilemma: 'Apakah menandatangani demi kecepatan kontrak atau meminta revisi klausul tanggung jawab?',
          choices: [
            {
              id: 'c1',
              text: 'Langsung tanda tangan tanpa revisi karena takut klien membatalkan proyek pengadaan.',
              consequence: 'Terjadi keterlambatan pengiriman pihak ketiga; klien menuntut ganti rugi kerugian tidak langsung Rp 3 Miliar yang membuat perusahaan Anda bangkrut.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Menerima tanggung jawab tak terbatas (unlimited liability) adalah risiko asimetris yang dapat membunuh bisnis dalam semalam.',
            },
            {
              id: 'c2',
              text: 'Ajukan revisi klausul: batasi ganti rugi maksimal sebesar total nilai kontrak yang diterima (Rp 200 Juta) dan kecualikan kerugian konsekuensial (consequential damages).',
              consequence: 'Klien menyetujui revisi karena hal itu adalah standar umum industri profesional; risiko terbatasi dan kontrak tetap berjalan aman.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Pembatasan tanggung jawab finansial melindungi eksistensi perusahaan dari klaim kerugian di luar kendali wajar.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-ktr-1',
            question: 'Mengapa dalam kontrak bisnis korporat, klausul pemilihan forum penyelesaian sengketa lewat Arbitrase (seperti BANI atau SIAC) sering dipilih dibanding Pengadilan Negeri konvensional?',
            options: [
              'Karena proses arbitrase sepenuhnya gratis tanpa biaya pendaftaran',
              'Karena persidangan arbitrase bersifat rahasia (confidential/tertutup untuk publik), pemeriksa perkaranya adalah para ahli industri yang kompeten, dan putusannya bersifat final serta mengikat',
              'Karena arbitrase dipimpin langsung oleh kepolisian daerah',
              'Karena putusan arbitrase selalu memenangkan pihak yang lebih kaya',
            ],
            correctAnswerIndex: 1,
            explanation: 'Kerahasiaan arbitrase menjaga sengketa internal tidak terekspos media dan merusak harga saham atau reputasi bisnis di mata publik, dipimpin oleh arbiter yang memahami teknis komersial bisnis.',
          },
        ],
      },
    ],
    edges: [
      { id: 'he1', from: 'hukum-root', to: 'hukum-sha-vesting', label: 'Struktur Kepemilikan Saham', domains: ['Hukum', 'Hukum'] },
      { id: 'he2', from: 'hukum-root', to: 'hukum-pajak-efisiensi', label: 'Optimalisasi Pajak Legal', domains: ['Hukum', 'Pajak'] },
      { id: 'he3', from: 'hukum-root', to: 'hukum-hki-paten', label: 'Perlindungan Aset Intelektual', domains: ['Hukum', 'Hukum'] },
      { id: 'he4', from: 'hukum-root', to: 'hukum-kontrak-mitigasi', label: 'Benteng Pembatasan Tanggung Jawab', domains: ['Hukum', 'Keuangan'] },
      { id: 'he5', from: 'hukum-sha-vesting', to: 'hukum-hki-paten', label: 'Pengalihan HKI Pendiri ke PT', domains: ['Hukum', 'Hukum'] },
      { id: 'he6', from: 'hukum-pajak-efisiensi', to: 'hukum-kontrak-mitigasi', label: 'Klausul Beban Pajak Kontrak', domains: ['Pajak', 'Hukum'] },
    ],
  },

  // ============================================================================
  // 7. PSIKOLOGI MARKETING & ARSITEKTUR KEPUTUSAN F&B
  // ============================================================================
  'Psikologi Marketing & Arsitektur Keputusan F&B': {
    id: 'mindmap-psikologi-fnb',
    topic: 'Psikologi Marketing & Arsitektur Keputusan F&B',
    rootId: 'fnb-root',
    description: 'Bagaimana restoran dan brand ritel merekayasa persepsi harga, rasa, aroma mentega, dan kenyamanan tanpa disadari konsumen.',
    nodes: [
      {
        id: 'fnb-root',
        label: 'Arsitektur Keputusan Konsumen F&B',
        domain: 'Psikologi',
        summary: 'Makan di kafe modern bukan sekadar nutrisi kalori, melainkan pemenuhan identitas sosial dan pemicu dopamin.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Anda bisa menyeduh kopi hitam di dapur rumah seharga Rp 2.000 dengan rasa yang identik. Namun Anda rela membayar Rp 55.000 di kedai berlogo hijau karena Anda membeli meja kerja dengan colokan listrik, musik jazz yang menenangkan, wangi aromaterapi, dan cangkir kertas dengan nama Anda yang bisa difoto untuk Instagram Stories.',
          crossDisciplinary: {
            connectionText: 'Psikologi Perilaku x Ekonomi Pengalaman',
            domains: ['Psikologi', 'Bisnis'],
            insight:
              'Dalam piramida utilitas modern, komoditas fisik bernilai termurah; transformasi identitas diri dan pengalaman emosional menghasilkan margin keuntungan tertinggi.',
          },
          actionableSteps: [
            'Audit menu restoran Anda: Hilangkan lambang mata uang "Rp" dari daftar harga untuk mengurangi "Pain of Paying".',
            'Sediakan 3 varian ukuran (Small, Medium, Large) dengan rekayasa Decoy Effect.',
            'Ciptakan 1 elemen penyajian yang "Instagrammable" (misal: lelehan keju atau kepulan asap nitrogen).',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Desain Menu Kopi Baru',
          context: 'Anda meluncurkan minuman matcha artisan baru di kedai Anda.',
          dilemma: 'Bagaimana mematok harga menu agar memaksimalkan laba kotor?',
          choices: [
            {
              id: 'c1',
              text: 'Pasang hanya 1 ukuran tunggal seharga Rp 35.000.',
              consequence: 'Konsumen membandingkan harga langsung dengan warung sebelah dan merasa Rp 35.000 itu mahal.',
              scoreBonus: 15,
              isOptimal: false,
              explanation: 'Tanpa jangkar perbandingan, otak konsumen mencari pembanding terdekat di luar kedai Anda.',
            },
            {
              id: 'c2',
              text: 'Sediakan Reguler (Rp 32.000), Large (Rp 38.000), dan Varian Supreme Gold (Rp 55.000).',
              consequence: 'Ukuran Large terasa sangat hemat dibanding Supreme, 75% konsumen memilih Large dan average order value Anda melesat naik.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Prinsip Decoy Effect & Price Anchoring: varian termahal membuat varian tengah terlihat sangat menguntungkan pembeli.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-fnb-1',
            question: 'Mengapa restoran mewah sering menghilangkan simbol mata uang (seperti "Rp" atau "$") pada daftar buku menunya?',
            options: [
              'Untuk menghemat tinta cetak kertas menu',
              'Untuk meredam reaksi rasa sakit psikologis saat membayar (Pain of Paying) di amygdala otak konsumen',
              'Karena dilarang oleh asosiasi perhotelan internasional',
              'Agar pelayan restoran bisa menagih harga sesuka hati',
            ],
            correctAnswerIndex: 1,
            explanation: 'Riset neuro-ekonomi membuktikan bahwa melihat simbol mata uang mengaktifkan reseptor sakit di otak; menghilangkannya membuat konsumen lebih relaks berbelanja.',
          },
        ],
      },
      {
        id: 'fnb-decoy-effect',
        label: 'Decoy Effect & Price Anchoring',
        domain: 'Psikologi',
        summary: 'Memanipulasi preferensi konsumen dengan menghadirkan opsi umpan yang membuat opsi target tampak murah.',
        x: 180,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Bioskop menjual Popcorn Kecil Rp 40.000 dan Popcorn Besar Rp 70.000. Kebanyakan orang beli yang kecil. Lalu bioskop menyelipkan Popcorn Sedang seharga Rp 65.000. Tiba-tiba semua orang berkata: "Wah, cuma nambah Rp 5.000 lagi sudah dapat yang Besar!" Padahal modal jagung bioskop hanya Rp 2.000.',
          crossDisciplinary: {
            connectionText: 'Psikologi Keputusan x Maksimasi Average Order Value',
            domains: ['Psikologi', 'Keuangan'],
            insight:
              'Otak manusia tidak mampu mengevaluasi nilai absolut secara mandiri; otak selalu memerlukan perbandingan komparatif terdekat.',
          },
          actionableSteps: [
            'Buat paket bundling di bisnis Anda dengan opsi "umpan asimetris".',
            'Letakkan produk berharga paling mahal di urutan paling atas menu sebagai jangkar psikologis (Anchor).',
            'Tulis selisih penambahan harga alih-alih harga total.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Pilihan Paket Popcorn Bioskop',
          context: 'Anda ditugaskan mendongkrak penjualan popcorn jumbo berukuran 120 gram.',
          dilemma: 'Struktur harga saat ini: Kecil Rp 30.000, Jumbo Rp 60.000.',
          choices: [
            {
              id: 'c1',
              text: 'Diskon harga Jumbo menjadi Rp 45.000.',
              consequence: 'Pendapatan kotor per transaksi turun drastis dan konsumen terbiasa menunggu diskon.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Diskon langsung memotong margin tanpa mendidik persepsi nilai.',
            },
            {
              id: 'c2',
              text: 'Tambahkan ukuran Sedang seharga Rp 55.000.',
              consequence: 'Konsumen merasa rugi jika membeli ukuran sedang dan berbondong-bondong memilih Jumbo Rp 60.000.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Ukuran sedang berfungsi murni sebagai "umpan mati" untuk mendorong penjualan jumbo.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-dec-1',
            question: 'Dalam eksperimen "Decoy Effect", peran utama dari produk umpan (decoy) adalah:',
            options: [
              'Menjadi produk yang paling laris terjual di toko',
              'Membuat produk target yang lebih menguntungkan terlihat jauh lebih menarik secara komparatif',
              'Mengurangi persediaan barang di gudang secepat mungkin',
              'Menipu pembeli dengan memberikan barang kadaluarsa',
            ],
            correctAnswerIndex: 1,
            explanation: 'Produk umpan didesain sengaja agar tidak dipilih, melainkan untuk mengubah tolok ukur perbandingan rasional pembeli.',
          },
        ],
      },
      {
        id: 'fnb-sensory-branding',
        label: 'Sensory Branding & Olfactory Cue',
        domain: 'Bisnis',
        summary: 'Menggunakan aroma mentega dan pencahayaan hangat untuk memicu lapar artifisial di gerai.',
        x: 620,
        y: 130,
        level: 1,
        microContent: {
          analogy:
            'Mengapa gerai roti di stasiun kereta selalu menempatkan oven pemanggang tepat di pintu masuk depan dengan kipas angin yang meniupkan aroma roti mocca ke lorong stasiun? Hidung manusia terhubung langsung ke sistem limbik otak emosi tanpa filter logika. Sebelum Anda sadar sedang buru-buru naik kereta, air liur Anda sudah menuntut membeli sepotong roti.',
          crossDisciplinary: {
            connectionText: 'Biologi Neurologis x Desain Ruang Ritel',
            domains: ['Psikologi', 'Bisnis'],
            insight:
              'Memori penciuman (olfactory memory) bertahan 100x lebih kuat dan tahan lama dibanding stimulasi visual atau suara.',
          },
          actionableSteps: [
            'Rancang "Signature Scent" yang konsisten di seluruh cabang toko atau kantor Anda.',
            'Gunakan pencahayaan kuning hangat (2700K–3000K) pada area makanan agar warna daging dan keju terlihat berkilau menggiurkan.',
            'Sesuaikan tempo musik latar: musik santai membuat pelanggan tinggal lebih lama dan memesan dessert tambahan.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Renovasi Kedai Roti Stasiun',
          context: 'Arsitek mengusulkan menempatkan dapur pemanggang di belakang basement agar ruang depan luas.',
          dilemma: 'Apakah menyetujui efisiensi ruangan atau mempertahankan aroma di pintu depan?',
          choices: [
            {
              id: 'c1',
              text: 'Pindahkan dapur ke basement demi ruangan depan yang rapi dan sunyi.',
              consequence: 'Aroma wangi roti hilang dari lorong stasiun, pejalan kaki lalu lalang tanpa melirik, penjualan anjlok 40%.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Aroma panggangan segar adalah corong sales terkuat bagi industri bakery transit.',
            },
            {
              id: 'c2',
              text: 'Pertahankan oven di etalase kaca depan dengan ventilasi yang mengarah langsung ke jalur pejalan kaki.',
              consequence: 'Aroma mentega hangat memancing pejalan kaki yang lelah pulang kerja, antrean kasir selalu mengular.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Pemanfaatan indra penciuman sebagai magnet konversi instan tanpa biaya iklan media.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-sns-1',
            question: 'Mengapa stimulasi aroma (penciuman) lebih cepat memicu dorongan impulsif dibanding iklan tulisan?',
            options: [
              'Karena saraf penciuman diproses langsung oleh sistem limbik dan amigdala yang mengatur emosi dan memori primer tanpa filter prefrontal cortex',
              'Karena manusia tidak bisa membaca teks iklan di tempat umum',
              'Karena indra penciuman tidak memerlukan oksigen untuk bekerja',
              'Karena aroma makanan mengandung kalori yang langsung diserap kulit',
            ],
            correctAnswerIndex: 0,
            explanation: 'Sistem limbik adalah bagian otak tempat emosi dan impuls instingtual bersemayam tanpa hambatan logika prefrontal korteks.',
          },
        ],
      },
      {
        id: 'fnb-social-proof',
        label: 'Social Proof & Artificial Scarcity',
        domain: 'Psikologi',
        summary: 'Antrean sengaja diperlambat dan batch harian dibatasi untuk menciptakan ilusi kelangkaan prestise.',
        x: 400,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Jika ada dua restoran mie bersebelahan: yang satu kosong melompong dengan pelayan melamun, yang satu lagi antreannya 20 orang berdiri di trotoar. Secara otomatis otak Anda menyimpulkan restoran kedua pasti enak dan bersih, padahal Anda belum mencicipi kuahnya sama sekali. Kelangkaan dan kerumunan adalah sertifikat validasi instan.',
          crossDisciplinary: {
            connectionText: 'Sosiologi Kerumunan x Teori Permintaan Ekonomi',
            domains: ['Psikologi', 'Ekonomi'],
            insight:
              'Ketika pasokan dibatasi secara vokal ("Hanya 50 porsi per hari"), barang biasa bermutasi menjadi barang Veblen yang mendongkrak status ego pembelinya.',
          },
          actionableSteps: [
            'Batasi jam rilis produk spesial Anda untuk menciptakan sensasi "Waiting List".',
            'Tampilkan testimoni autentik dan video reaksi konsumen sungguhan di etalase kasir.',
            'Beri tahu pelanggan saat stok tinggal sedikit dengan penanda visual transparan.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Grand Opening Restoran Baru',
          context: 'Anda memiliki kapasitas 100 kursi dan pelayan Anda siap melayani 100 orang sekaligus.',
          dilemma: 'Bagaimana mengatur alur masuk tamu di hari pembukaan?',
          choices: [
            {
              id: 'c1',
              text: 'Masukkan 100 orang sekaligus ke dalam ruangan tertutup agar jalanan luar tetap sepi.',
              consequence: 'Dapur kelabakan, makanan terlambat keluar, dan orang di luar mengira restoran Anda sepi peminat.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Memasukkan semua orang sekaligus membebani kapasitas operasional dan menghilangkan efek display antrean.',
            },
            {
              id: 'c2',
              text: 'Lepas tamu secara bertahap 20 orang per 15 menit, biarkan antrean tertib di luar ruangan terlihat oleh jalan raya.',
              consequence: 'Operasional dapur mulus teratur, antrean di pinggir jalan menarik perhatian media sosial lokal dan ratusan pengendara yang lewat.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Antrean fisik yang teratur menjadi billboard iklan gratis paling kredibel di mata publik sekitar.',
            },
          ],
        },
        quiz: [
          {
            id: 'q-prf-1',
            question: 'Dalam psikologi perilaku konsumen, fenomena "Social Proof" (Bukti Sosial) menyatakan bahwa:',
            options: [
              'Orang cenderung menentukan tindakan yang benar dengan melihat apa yang dilakukan oleh orang lain saat menghadapi situasi ambigu',
              'Konsumen selalu memilih barang yang paling murah tanpa mempedulikan reputasi',
              'Pemerintah harus membuktikan keaslian izin usaha restoran di depan umum',
              'Restoran harus memberikan voucher gratis kepada semua orang di media sosial',
            ],
            correctAnswerIndex: 0,
            explanation: 'Robert Cialdini membuktikan bahwa kerumunan orang lain adalah jalan pintas kognitif (heuristic) untuk menilai kualitas tanpa riset mendalam.',
          },
        ],
      },
    ],
    edges: [
      { id: 'fe1', from: 'fnb-root', to: 'fnb-decoy-effect', label: 'Struktur Harga Menu', domains: ['Psikologi', 'Keuangan'] },
      { id: 'fe2', from: 'fnb-root', to: 'fnb-sensory-branding', label: 'Stimulasi Fisik Gerai', domains: ['Psikologi', 'Bisnis'] },
      { id: 'fe3', from: 'fnb-root', to: 'fnb-social-proof', label: 'Validasi Sosial & Antrean', domains: ['Psikologi', 'Ekonomi'] },
      { id: 'fe4', from: 'fnb-decoy-effect', to: 'fnb-social-proof', label: 'Justifikasi Nilai', domains: ['Psikologi', 'Ekonomi'] },
    ],
  },
};
