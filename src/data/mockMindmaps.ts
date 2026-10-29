import { MindmapData } from '../types';

export const PRESET_QUERIES = [
  'Kenapa Elon Musk Bisa Kaya?',
  'Dasar-Dasar Inflasi & Saham',
  'Psikologi Marketing F&B',
  'Geopolitik Impor Ekspor',
];

export const MOCK_MINDMAPS: Record<string, MindmapData> = {
  'Kenapa Elon Musk Bisa Kaya?': {
    id: 'mindmap-elon-musk',
    topic: 'Kenapa Elon Musk Bisa Kaya?',
    rootId: 'musk-root',
    description: 'Dekonstruksi multi-disiplin: Dari First Principles Engineering, Asymmetric Risk, Narrative Capital, hingga Vertical Integration.',
    nodes: [
      {
        id: 'musk-root',
        label: 'Arsitektur Kekayaan Elon Musk',
        domain: 'Bisnis',
        summary: 'Kekayaan Musk bukan dari gaji likuid, melainkan multiplikasi valuasi ekuitas via kepemilikan saham di industri frontier.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Bayangkan Anda tidak dibayar dengan sembako harian, melainkan Anda menanam pohon beringin langka di tanah yang belum dijamah. Setiap kali dunia menyadari pohon itu menghasilkan buah ajaib, seluruh investor berebut membeli selembar daun pohon Anda seharga miliaran rupiah. Musk kaya karena ia pemilik tanah dan penanam benih ekuitasnya.',
          crossDisciplinary: {
            connectionText: 'Keuangan x Psikologi Massa',
            domains: ['Keuangan', 'Psikologi'],
            insight:
              'Valuasi pasar saham Tesla dan SpaceX digerakkan oleh "Narrative Economics" — keyakinan psikologis massa bahwa Musk akan memimpin masa depan peradaban, yang melipatgandakan Price-to-Earnings (P/E) ratio jauh melampaui pabrikan otomotif warisan.',
          },
          actionableSteps: [
            'Audit portofolio pendapatan Anda: Hitung berapa persen pemasukan dari keringat per jam (linear) vs kepemilikan aset/ekuitas (multiplikatif).',
            'Pelajari struktur Employee Stock Option Plan (ESOP) atau kepemilikan persentase bisnis sebelum menegosiasikan kompensasi karier.',
            'Identifikasi 1 keahlian inti yang memiliki "leverage tinggi" (software, media, atau modal) agar output Anda tidak terikat jam fisik.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Pilihan Kompensasi di Startup Frontier',
          context: 'Anda memimpin tim R&D untuk terobosan baterai baru. Valuasi perusahaan saat ini masih kecil.',
          dilemma: 'Manajemen menawarkan Anda dua opsi kompensasi untuk 4 tahun ke depan.',
          choices: [
            {
              id: 'c1',
              text: 'Gaji tunai Rp 120 Juta/bulan tetap tanpa opsi saham sama sekali.',
              consequence: 'Finansial Anda aman dan stabil saat ini, tetapi jika teknologi baterai ini meledak global senilai $10 Miliar, kekayaan Anda tetap datar tanpa apresiasi modal.',
              scoreBonus: 20,
              isOptimal: false,
              explanation: 'Kurang optimal untuk menciptakan "step-function wealth". Musk selalu memilih kompensasi 100% berbasis milestone ekuitas performa.',
            },
            {
              id: 'c2',
              text: 'Gaji tunai cukup untuk biaya hidup layak (Rp 40 Juta/bulan) + 3.5% Kepemilikan Ekuitas berbasis Milestone.',
              consequence: 'Anda menanggung risiko volatilitas jangka pendek, namun memiliki upside tak terbatas jika target produksi dan valuasi perusahaan melonjak 50x lipat.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Inilah prinsip "Asymmetric Payoff": risiko terbatasi oleh biaya hidup dasar, tetapi potensi kekayaan sejalan dengan multiplikasi aset kepemilikan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Faktor primer manakah yang membuat kekayaan bersih (Net Worth) Elon Musk melonjak dari ~$2 Miliar menjadi >$200 Miliar dalam satu dekade?',
            options: [
              'Dividen tunai bulanan yang ditransfer langsung ke rekening bank pribadinya',
              'Multiplikasi valuasi kapitalisasi pasar ekuitas saham Tesla dan SpaceX yang dimilikinya',
              'Penjualan royalti buku dan tiket seminar motivasi wirausaha',
              'Gaji pokok eksekutif tertinggi di dunia yang dibayarkan dewan direksi',
            ],
            correctAnswerIndex: 1,
            explanation: 'Musk tidak menerima gaji tunai konvensional di Tesla. Kekayaannya terkonsentrasi pada kepemilikan saham dan stock option yang valuasinya meroket ratusan kali lipat di bursa saham.',
          },
          {
            id: 'q2',
            question: 'Dalam konsep "Narrative Capital", mengapa saham Tesla dihargai dengan multiplier rasio P/E yang jauh lebih tinggi dibanding Toyota atau Ford?',
            options: [
              'Tesla memproduksi volume mobil lebih banyak dari gabungan seluruh produsen dunia',
              'Toyota memiliki utang yang jauh lebih rendah sehingga dihukum pasar saham',
              'Pasar memperlakukan Tesla sebagai platform ekosistem AI, robotika, dan energi masa depan, bukan sekadar perakit pelat besi',
              'Tesla menggunakan promosi iklan televisi konvensional dengan budget terbesar',
            ],
            correctAnswerIndex: 2,
            explanation: 'Pasar modal menilai ekspektasi arus kas masa depan dan narasi disrupsi AI/Software otonom, bukan sekadar margin manufaktur fisik saat ini.',
          },
          {
            id: 'q3',
            question: 'Jika seseorang ingin meniru prinsip akumulasi kekayaan Musk di tingkat personal, langkah fundamental apa yang paling relevan?',
            options: [
              'Bekerja lembur 100 jam seminggu hanya untuk menaikkan upah per jam di sektor yang tidak scalable',
              'Membangun atau memiliki aset yang memiliki leverage (kepemilikan bisnis, sistem otomatis, atau ekuitas) yang nilainya dapat diapresiasi pasar',
              'Menyimpan seluruh tabungan dalam uang kartal di brankas rumah demi menghindari pajak',
              'Mengikuti tren spekulasi koin baru tanpa memahami teknologi dasarnya',
            ],
            correctAnswerIndex: 1,
            explanation: 'Kekayaan masif mensyaratkan "leverage" dan kepemilikan hak atas arus kas masa depan (equity ownership), bukan pertukaran waktu linear.',
          },
        ],
      },
      {
        id: 'musk-first-principles',
        label: 'First Principles Thinking',
        domain: 'Psikologi',
        summary: 'Membongkar masalah ke hukum fisika dasar alih-alih meniru konvensi pasar (Reasoning by Analogy).',
        x: 180,
        y: 140,
        level: 1,
        microContent: {
          analogy:
            'Koki pembuat kue biasa (reasoning by analogy) selalu membeli resep kue jadi di supermarket seharga Rp 500.000 karena "begitulah orang lain bikin kue". Koki First Principles membedah bahan dasarnya: tepung Rp 10.000, telur Rp 15.000, gula Rp 12.000. Total Rp 37.000. Ia menciptakan kue dengan biaya 90% lebih murah dan kualitas lebih terkontrol.',
          crossDisciplinary: {
            connectionText: 'Psikologi Kognitif x Efisiensi Ekonomi',
            domains: ['Psikologi', 'Ekonomi'],
            insight:
              'Bias psikologis "Social Proof" dan "Status Quo Bias" membuat mayoritas industri membayar biaya perantara yang mahal. First Principles meruntuhkan batas markup industri tersebut.',
          },
          actionableSteps: [
            'Pilih 1 pos pengeluaran bisnis terbesar Anda, dekonstruksi menjadi komponen atomik bahan mentahnya.',
            'Tanyakan 3 kali: "Apakah aturan ini adalah hukum alam/fisika, atau sekadar kebiasaan lama orang sebelumnya?"',
            'Buat kalkulasi "Cost of Raw Materials" sebelum menerima penawaran vendor ketiga.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Pengadaan Komponen Satelit Dirgantara',
          context: 'Vendor tradisional menjual komponen baterai penerbangan antariksa seharga $120.000 per unit.',
          dilemma: 'Waktu peluncuran mendesak dan tim insinyur Anda ragu membuat sendiri.',
          choices: [
            {
              id: 'c1',
              text: 'Beli langsung dari vendor terverifikasi agar aman dari tuntutan birokrasi.',
              consequence: 'Margin profit perusahaan Anda tergerus dan struktur biaya roket tetap setinggi para pesaing mapan.',
              scoreBonus: 15,
              isOptimal: false,
              explanation: 'Meniru tradisi industri (analogy) membuat biaya peluncuran tetap mahal dan membatasi frekuensi terbang.',
            },
            {
              id: 'c2',
              text: 'Beli sel baterai komersial kelas konsumen di pasar bebas seharga $3.000 lalu rancang sistem pendingin & pelindung radiasi sendiri.',
              consequence: 'Anda memangkas biaya 95%, menguasai hak paten arsitektur termal, dan memicu revolusi efisiensi industri.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Metode otentik SpaceX: komponen dasar baterai sama saja, rekayasa pelindungnyalah yang perlu dirancang cerdas.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Apa perbedaan mendasar antara "Reasoning by First Principles" dengan "Reasoning by Analogy"?',
            options: [
              'First Principles berlandaskan peniruan praktik terbaik kompetitor, Analogy berlandaskan riset laboratorium',
              'First Principles membedah masalah hingga kebenaran paling mendasar yang tidak bisa disangkal lagi, Analogy meniru apa yang sudah lazim dilakukan orang lain',
              'First Principles hanya berlaku untuk ilmu matematika teoritis, Analogy berlaku untuk bisnis',
              'Analogy selalu menghasilkan produk lebih murah daripada First Principles',
            ],
            correctAnswerIndex: 1,
            explanation: 'First Principles menolak argumen "karena dari dulu sudah begitu", melainkan menganalisis fakta dasar fisika/kimia/ekonomi secara murni.',
          },
          {
            id: 'q2',
            question: 'Ketika Musk menganalisis biaya roket luar angkasa pertama kali, apa temuan mengejutkan dari First Principles?',
            options: [
              'Harga bahan mentah (aluminium, titanium, tembaga) roket ternyata hanya sekitar 2% dari harga jual roket konvensional',
              'Bahan bakar roket menghabiskan 95% dari total anggaran peluncuran',
              'Besi roket tidak bisa diproduksi tanpa izin khusus militer',
              'Roket lebih murah jika dibeli second-hand dari negara lain',
            ],
            correctAnswerIndex: 0,
            explanation: 'Musk menyadari bahwa 98% harga roket adalah biaya inefisiensi manufaktur, perantara berlapis, dan margin kontraktor pertahanan.',
          },
        ],
      },
      {
        id: 'musk-vertical-integration',
        label: 'Integrasi Vertikal & Rantai Pasok',
        domain: 'Ekonomi',
        summary: 'Mengontrol pasokan dari hulu ke hilir untuk memangkas margin perantara dan mempercepat iterasi produk.',
        x: 640,
        y: 150,
        level: 1,
        microContent: {
          analogy:
            'Jika Anda membuka restoran steak dan bergantung pada calo daging, calo arang, dan kurir luar, Anda terus diperas saat ada kelangkaan. Jika Anda punya peternakan sapi sendiri dan pabrik bumbu sendiri, Anda bisa menjual daging kualitas dewa dengan harga separuh harga pasar, kapan pun Anda mau.',
          crossDisciplinary: {
            connectionText: 'Mikroekonomi x Dinamika Manufaktur',
            domains: ['Ekonomi', 'Bisnis'],
            insight:
              'Integrasi vertikal membalikkan doktrin "outsourcing total" dekade 1990-an. Dengan memproduksi 80% komponen in-house (seperti chip giga-casting Tesla), kecepatan siklus pembaruan software-hardware melonjak harian bukan tahunan.',
          },
          actionableSteps: [
            'Petakan 3 ketergantungan paling rentan pada pihak ketiga yang bisa melumpuhkan operasi bisnis Anda.',
            'Hitung Margin Markup yang diambil supplier utama Anda dalam 1 tahun.',
            'Lakukan eksperimen "insourcing" pada 1 bottleneck operasional terkecil.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Krisis Kelangkaan Semikonduktor Global',
          context: 'Pemasok chip global menghentikan pengiriman kontroler kemudi mobil selama 6 bulan.',
          dilemma: 'Pesaing memilih menghentikan pabrik dan meliburkan buruh.',
          choices: [
            {
              id: 'c1',
              text: 'Hentikan jalur perakitan dan klaim asuransi force majeure sampai rantai pasok pulih.',
              consequence: 'Pengiriman unit nol, arus kas berdarah-darah, dan antrean pembeli membatalkan pesanan.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Pasif terhadap disrupsi rantai pasok menghancurkan momentum pertumbuhan dan kepercayaan investor.',
            },
            {
              id: 'c2',
              text: 'Kumpulkan insinyur in-house malam ini: beli microchip alternatif yang masih ada di pasaran, lalu tulis ulang firmware mobil dalam 2 minggu.',
              consequence: 'Pabrik tetap memproduksi rekor mobil tertinggi di industri saat kompetitor lumpuh total.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Langkah nyata Tesla saat chip crisis 2021: kemampuan integrasi vertikal hardware & software menyelamatkan bisnis dari kebangkrutan.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Mengapa integrasi vertikal ekstrem (membuat komponen sendiri) memberikan keunggulan kompetitif pada kecepatan inovasi?',
            options: [
              'Karena perusahaan tidak perlu lagi membayar pajak daerah',
              'Karena modifikasi desain komponen bisa langsung diuji di pabrik sendiri dalam hitungan jam tanpa menunggu siklus negosiasi kontrak vendor berbulan-bulan',
              'Karena buruh in-house selalu bersedia dibayar lebih rendah dari buruh vendor',
              'Karena pemerintah melarang perusahaan membeli komponen luar negeri',
            ],
            correctAnswerIndex: 1,
            explanation: 'Siklus feedback loop menjadi luar biasa cepat ketika insinyur desain dan operator manufaktur bekerja di bawah satu atap yang sama.',
          },
        ],
      },
      {
        id: 'musk-asymmetric-bets',
        label: 'Taruhan Asimetris & Reinvestasi Modal',
        domain: 'Keuangan',
        summary: 'Menginvestasikan 100% modal hasil exit (PayPal) ke risiko terhitung dengan upside 100x lipat.',
        x: 230,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Mayoritas penjudi melempar koin: menang dapat Rp 100, kalah hilang Rp 100 (simetris). Investor asimetris bertaruh: jika kalah hilang Rp 10 (terbatas), tapi jika menang dapat Rp 1.000. Setelah PayPal dibeli eBay seharga $1.5 Miliar, Musk membawa $180 Juta bersih dan mempertaruhkan seluruhnya: $100M ke SpaceX, $70M ke Tesla, $10M ke SolarCity sampai harus meminjam uang sewa rumah.',
          crossDisciplinary: {
            connectionText: 'Keuangan Kuantitatif x Psikologi Toleransi Risiko',
            domains: ['Keuangan', 'Psikologi'],
            insight:
              'Konsep "Antifragility" karya Nassim Taleb: dengan menerima kemungkinan gagal jangka pendek demi potensi payoff yang tak terbatas, portofolio modal berkembang secara eksponensial bukan linier.',
          },
          actionableSteps: [
            'Alokasikan "Barbell Strategy": 80% aset di instrumen super aman, 20% di eksperimen bernilai upside sangat tinggi.',
            'Pastikan risiko kegagalan terburuk tidak membuat Anda bangkrut secara eksistensial.',
            'Hindari taruhan simetris yang risikonya sama besar dengan potensi keuntungannya.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Reinvestasi Arus Kas Usaha Pertama',
          context: 'Bisnis pertama Anda baru saja menghasilkan profit bersih Rp 500 Juta tunai.',
          dilemma: 'Bagaimana mengalokasikan modal ini untuk fase dekade berikutnya?',
          choices: [
            {
              id: 'c1',
              text: 'Beli mobil mewah baru untuk flexing status sosial dan konsumsi hedonik.',
              consequence: 'Depresiasi aset 20% per tahun, biaya pemeliharaan tinggi, dan modal ekspansi Anda lenyap.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Konsumsi status sebelum memiliki fondasi aset produktif adalah perangkap psikologis kelas menengah.',
            },
            {
              id: 'c2',
              text: 'Kunci dana darurat 6 bulan, lalu gunakan sisanya untuk mendanai otomatisasi software dan penetrasi pasar baru.',
              consequence: 'Bisnis Anda meningkatkan kapasitas skalabilitas dan melipatgandakan valuasi perusahaan tahun depan.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Compound interest modal bisnis terjadi ketika arus kas diumpankan kembali ke mesin pencipta nilai.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Apa definisi dari "Asymmetric Risk-Reward" dalam strategi alokasi modal tingkat tinggi?',
            options: [
              'Kerugian yang mungkin terjadi tidak terbatas sementara keuntungannya kecil',
              'Potensi penurunan (downside) telah dibatasi atau dipahami, sementara potensi kenaikan (upside) berkali-kali lipat lebih besar',
              'Menaruh seluruh uang pada satu instrumen lotre tanpa analisa dasar',
              'Menghindari segala bentuk risiko bisnis dengan menyimpan uang di bawah kasur',
            ],
            correctAnswerIndex: 1,
            explanation: 'Taruhan asimetris yang sehat membatasi total modal yang bisa hilang pada angka pasti, tetapi potensi apresiasinya bersifat eksponensial.',
          },
        ],
      },
      {
        id: 'musk-narrative-capital',
        label: 'Narrative Capital & Meme Efficiency',
        domain: 'Psikologi',
        summary: 'Mengubah atensi publik menjadi modal likuid tanpa belanja iklan konvensional.',
        x: 600,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Kompetitor otomotif menghabiskan Rp 50 Triliun per tahun untuk memasang spanduk di stadion bola dan iklan komersial TV. Musk hanya mengetik satu tweet jenaka di akun pribadinya sambil menembakkan roket ke Mars. Siapa yang lebih diperbincangkan di meja makan keluarga sedunia? Atensi organik adalah mata uang termahal di era internet.',
          crossDisciplinary: {
            connectionText: 'Psikologi Massa x Biaya Akuisisi Konsumen (CAC)',
            domains: ['Psikologi', 'Bisnis'],
            insight:
              'Biaya Customer Acquisition Cost (CAC) Tesla secara efektif mendekati $0 per kendaraan karena pendiri bertindak sebagai saluran media langsung (Direct-to-Consumer Distribution Channel).',
          },
          actionableSteps: [
            'Bangun "Personal Monopoly": bagikan proses kerja dan visi Anda secara transparan di platform media sosial profesional.',
            'Kurangi ketergantungan pada iklan berbayar (paid ads) dengan menciptakan produk yang memiliki faktor pembicaraan (Word-of-Mouth viral).',
            'Sampaikan narasi misi yang lebih besar dari sekadar menjual komoditas (misal: akselerasi energi terbarukan).',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Peluncuran Produk Baru dengan Budget Iklan Terbatas',
          context: 'Anda memiliki produk minuman probiotik lokal dengan modal pemasaran hanya Rp 5 Juta.',
          dilemma: 'Bagaimana menarik 10.000 pelanggan pertama?',
          choices: [
            {
              id: 'c1',
              text: 'Bakar uang Rp 5 Juta untuk pasang Google Ads acak tanpa diferensiasi konten.',
              consequence: 'Budget habis dalam 3 hari, hanya mendapat segelintir klik tanpa konversi emosional yang loyal.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Uang iklan kecil yang disebar tipis akan ditelan oleh algoritma raksasa korporasi.',
            },
            {
              id: 'c2',
              text: 'Dokumentasikan uji coba lab independen di video pendek: tunjukkan secara transparan kadar gula kompetitor vs kultur bakteri asli Anda.',
              consequence: 'Konten otentik viral, ditonton jutaan kali karena unsur edukasi & keberanian, pesanan pre-order meledak.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Keaslian dan narasi transparansi mengalahkan budget spanduk konvensional.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Apa dampak finansial langsung dari strategi "Zero Ad Spend" Tesla terhadap margin bisnisnya?',
            options: [
              'Tesla terpaksa menurunkan harga saham karena dianggap tidak profesional',
              'Menghemat miliaran dolar anggaran marketing yang bisa dialihkan langsung ke anggaran R&D dan pabrik giga-casting',
              'Mobil Tesla tidak dikenal oleh konsumen di luar Amerika Serikat',
              'Penyalur diler mobil menuntut Tesla ke pengadilan perdata',
            ],
            correctAnswerIndex: 1,
            explanation: 'Dengan memotong beban iklan tradisional, Tesla mengalihkan dana kas langsung untuk keunggulan teknis baterai dan perangkat lunak otonom.',
          },
        ],
      },
    ],
    edges: [
      { id: 'e1', from: 'musk-root', to: 'musk-first-principles', label: 'Fondasi Logika', domains: ['Bisnis', 'Psikologi'] },
      { id: 'e2', from: 'musk-root', to: 'musk-vertical-integration', label: 'Struktur Operasi', domains: ['Bisnis', 'Ekonomi'] },
      { id: 'e3', from: 'musk-root', to: 'musk-asymmetric-bets', label: 'Mesin Multiplikasi', domains: ['Bisnis', 'Keuangan'] },
      { id: 'e4', from: 'musk-root', to: 'musk-narrative-capital', label: 'Kekuatan Atensi', domains: ['Bisnis', 'Psikologi'] },
      { id: 'e5', from: 'musk-first-principles', to: 'musk-vertical-integration', label: 'Biaya Bahan vs Vendor', domains: ['Psikologi', 'Ekonomi'] },
      { id: 'e6', from: 'musk-asymmetric-bets', to: 'musk-narrative-capital', label: 'Sentimen Menggerakkan Valuasi', domains: ['Keuangan', 'Psikologi'] },
    ],
  },

  'Dasar-Dasar Inflasi & Saham': {
    id: 'mindmap-inflasi-saham',
    topic: 'Dasar-Dasar Inflasi & Saham',
    rootId: 'inflasi-root',
    description: 'Bagaimana uang kertas tergerus waktu dan bagaimana kepemilikan bisnis riil (saham) menjadi tameng daya beli.',
    nodes: [
      {
        id: 'inflasi-root',
        label: 'Dinamika Inflasi & Ekuitas Saham',
        domain: 'Ekonomi',
        summary: 'Inflasi adalah pencuri tak kasat mata atas daya beli uang fiat. Saham adalah instrumen kepemilikan mesin bisnis yang memiliki pricing power.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Bayangkan Anda menyimpan 10 karung beras di lumbung. Setiap tahun ada tikus tak terlihat yang memakan 5% dari isi karung tanpa Anda sadari. Sepuluh tahun kemudian, fisik karungnya masih 10 buah, tetapi isinya tinggal separuh. Saham bukan karung beras pasif, melainkan kepemilikan sawah yang bisa menaikkan harga jual padinya kapan saja tikus datang.',
          crossDisciplinary: {
            connectionText: 'Makroekonomi x Psikologi Tabungan',
            domains: ['Ekonomi', 'Psikologi'],
            insight:
              '"Money Illusion" membuat orang merasa kaya saat saldo tabungan di rekening tetap sama, padahal daya beli riil terhadap telur, tanah, dan layanan kesehatan telah anjlok drastis.',
          },
          actionableSteps: [
            'Hitung "Real Return" portofolio Anda: Bunga Tabungan dikurangi Angka Inflasi Riil = Pendapatan Bersih Sejati.',
            'Alihkan dana darurat berlebih di atas 6 bulan ke instrumen produktif penyerap inflasi.',
            'Koleksi saham perusahaan yang memproduksi barang kebutuhan primer yang tidak bisa ditinggalkan masyarakat.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Mengamankan Tabungan Pensiun Rp 100 Juta',
          context: 'Tingkat inflasi tahunan diperkirakan melonjak menjadi 7% akibat kenaikan harga energi dunia.',
          dilemma: 'Teman Anda menyarankan mendiamkan seluruh uang di deposito bank dengan bunga 3%.',
          choices: [
            {
              id: 'c1',
              text: 'Ikuti saran teman: taruh 100% di deposito 3% karena tidak ada risiko fluktuasi angka di buku tabungan.',
              consequence: 'Secara nominal uang Anda bertambah Rp 3 Juta, namun harga barang naik Rp 7 Juta. Anda tekor 4% daya beli setiap tahun.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Menghindari volatilitas pasar saham justru menjerumuskan Anda ke dalam kepastian kehilangan daya beli.',
            },
            {
              id: 'c2',
              text: 'Pertahankan dana darurat di deposito/pasar uang, sisanya investasikan secara bertahap ke ETF indeks saham perusahaan berkualitas.',
              consequence: 'Dalam jangka menengah dan panjang, dividen dan pertumbuhan laba perusahaan bertindak sebagai eskalator di atas laju inflasi.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Perusahaan hebat menaikkan harga jual produknya saat inflasi naik, mengalirkan proteksi langsung ke pemegang sahamnya.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Jika inflasi tahun ini adalah 6% dan bunga tabungan bank Anda 2%, berapakah "Real Return" uang Anda?',
            options: ['+4%', '-4%', '+8%', '0%'],
            correctAnswerIndex: 1,
            explanation: 'Return Riil = Return Nominal (2%) dikurangi Inflasi (6%) = -4%. Daya beli riil Anda menyusut 4% dalam setahun.',
          },
          {
            id: 'q2',
            question: 'Mengapa saham perusahaan dengan "Pricing Power" kuat menjadi lindung nilai (hedge) terbaik terhadap inflasi?',
            options: [
              'Karena perusahaan tersebut diwajibkan pemerintah membagikan bantuan tunai',
              'Karena mereka dapat menaikkan harga jual produk ke konsumen tanpa kehilangan pangsa pasar yang signifikan',
              'Karena saham tidak terpengaruh oleh kebijakan suku bunga bank sentral',
              'Karena harga saham dipatok dengan emas murni',
            ],
            correctAnswerIndex: 1,
            explanation: 'Pricing power memungkinkan bisnis mentransfer kenaikan biaya bahan mentah ke harga jual akhir, menjaga margin laba tetap tebal.',
          },
        ],
      },
      {
        id: 'inflasi-purchasing-power',
        label: 'Erosi Daya Beli & Uang Fiat',
        domain: 'Keuangan',
        summary: 'Uang kertas dicetak bank sentral; kelimpahan pasokan uang mendilusi nilai tukar setiap unitnya.',
        x: 180,
        y: 160,
        level: 1,
        microContent: {
          analogy:
            'Tahun 1995, selembar uang Rp 10.000 bisa mentraktir satu keluarga makan bakso lengkap dengan es teh. Hari ini, Rp 10.000 bahkan tidak cukup untuk parkir mobil di mall dua jam. Kertasnya sama, tintanya sama, tetapi daya tawar atomiknya telah menguap ke udara.',
          crossDisciplinary: {
            connectionText: 'Kebijakan Moneter x Nilai Riil Barang',
            domains: ['Keuangan', 'Ekonomi'],
            insight:
              'Kuantitas uang beredar (M2 Money Supply) yang bertambah lebih cepat dari pertumbuhan barang fisik selalu berujung pada devaluasi mata uang.',
          },
          actionableSteps: [
            'Bandingkan harga makanan favorit Anda 5 tahun lalu vs hari ini untuk mengukur inflasi personal riil Anda.',
            'Jangan pernah mengukur kekayaan dari lembaran nominal uang, ukurlah dari berapa banyak aset produktif yang Anda miliki.',
            'Diversifikasi sebagian kekayaan ke aset hard-asset.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Pilihan Menahan Uang Kas Dingin',
          context: 'Anda memiliki sisa uang tunai yang menganggur selama 3 tahun tanpa rencana belanja.',
          dilemma: 'Apakah membiarkannya di rekening giro tanpa bunga?',
          choices: [
            {
              id: 'c1',
              text: 'Biarkan di rekening giro bank demi kemudahan transfer belanja online sewaktu-waktu.',
              consequence: 'Uang Anda tergerus biaya administrasi bulanan dan inflasi gabungan 15% selama 3 tahun.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Uang menganggur adalah pekerja malas yang terus dipotong gajinya oleh waktu.',
            },
            {
              id: 'c2',
              text: 'Pindahkan ke instrumen Reksadana Pasar Uang atau Obligasi Ritel Negara yang memberikan imbal hasil di atas inflasi.',
              consequence: 'Uang tetap likuid bisa ditarik kapan saja, namun modal Anda bertumbuh mengimbangi biaya hidup.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Prinsip efisiensi kas: setiap rupiah harus menghasilkan bunga minimal sama dengan laju kenaikan harga.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Fenomena apa yang terjadi saat jumlah uang beredar meningkat drastis tanpa diimbangi peningkatan produksi barang di pasar?',
            options: [
              'Deflasi dan apresiasi mata uang',
              'Inflasi akibat tarikan permintaan (Demand-pull inflation) dan penurunan daya beli uang',
              'Kenaikan upah buruh tanpa batas',
              'Pengurangan utang negara secara otomatis',
            ],
            correctAnswerIndex: 1,
            explanation: 'Lebih banyak uang memperebutkan jumlah barang yang sama, sehingga harga barang terdorong naik.',
          },
        ],
      },
      {
        id: 'inflasi-pricing-power',
        label: 'Pricing Power & Economic Moats',
        domain: 'Bisnis',
        summary: 'Karakteristik bisnis unggulan (Warren Buffett): kemampuan menaikkan harga tanpa ditinggal konsumen.',
        x: 620,
        y: 160,
        level: 1,
        microContent: {
          analogy:
            'Jika tukang sayur di gang menaikkan harga wortel 20%, Anda langsung pindah ke tukang sayur sebelah. Tetapi ketika Apple menaikkan harga iPhone sebesar 15%, jutaan penggemar tetap mengantre di mall sejak subuh. Apple memiliki parit pelindung (Economic Moat) berupa keterikatan ekosistem dan prestise psikologis.',
          crossDisciplinary: {
            connectionText: 'Strategi Bisnis x Loyalitas Psikologis',
            domains: ['Bisnis', 'Psikologi'],
            insight:
              'Biaya peralihan (Switching Costs) dan kekuatan brand emosional adalah perisai paling sakti melawan tekanan inflasi.',
          },
          actionableSteps: [
            'Analisis bisnis Anda: Jika Anda menaikkan harga 10% besok pagi, berapa persen pelanggan yang akan benar-benar pergi?',
            'Bangun keunikan nilai tambah yang tidak dimiliki kompetitor agar tidak terjebak perang harga komoditas.',
            'Pilih saham yang memiliki Gross Margin tebal (>40%) saat menyeleksi emiten di bursa.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Kenaikan Biaya Bahan Baku 25%',
          context: 'Biaya kopi dan susu di kafe Anda melonjak 25% akibat cuaca buruk global.',
          dilemma: 'Bagaimana merespons kenaikan biaya ini agar bisnis tidak bangkrut?',
          choices: [
            {
              id: 'c1',
              text: 'Ganti biji kopi dengan kualitas murah yang rasanya hambar demi mempertahankan harga lama.',
              consequence: 'Pelanggan setia merasa dibohongi, ulasan Google Maps drop ke bintang 2, omzet hancur.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Mengorbankan integritas produk merusak reputasi jangka panjang yang sulit dipulihkan.',
            },
            {
              id: 'c2',
              text: 'Pertahankan kualitas biji kopi terbaik, naikkan harga 15% disertai peluncuran menu seasonal eksklusif beraroma khas.',
              consequence: 'Pelanggan loyal memahami kualitas, citra kafe tetap premium, dan margin operasional terselamatkan.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Bisnis dengan diferensiasi kuat mampu membebankan biaya secara elegan tanpa merusak persepsi rasa.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Menurut investor legendaris Warren Buffett, indikator tunggal paling penting dalam mengevaluasi kekuatan bisnis adalah:',
            options: [
              'Berapa banyak gedung kantor megah yang dimiliki perusahaan',
              'Kemampuan penetapan harga (Pricing Power) tanpa takut kehilangan bisnis ke kompetitor',
              'Jumlah follower di akun media sosial korporat',
              'Hubungan kedekatan direksi dengan politisi lokal',
            ],
            correctAnswerIndex: 1,
            explanation: 'Jika sebuah perusahaan memiliki pricing power, mereka terlindungi dari inflasi dan memiliki margin profit yang sustainable.',
          },
        ],
      },
      {
        id: 'inflasi-interest-rates',
        label: 'Suku Bunga & Gravitasi Valuasi',
        domain: 'Ekonomi',
        summary: 'Kenaikan suku bunga oleh The Fed atau Bank Indonesia bertindak sebagai rem bagi valuasi aset berisiko.',
        x: 250,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Suku bunga bank sentral bagaikan gravitasi bumi bagi harga saham. Ketika suku bunga 0%, gravitasi menghilang, saham teknologi melayang tinggi ke angkasa. Saat inflasi mengamuk dan bank sentral menaikkan suku bunga ke 6%, gravitasi menjadi sangat berat: semua aset yang tidak punya arus kas nyata akan terhempas keras ke tanah.',
          crossDisciplinary: {
            connectionText: 'Kebijakan Moneter x Matematika Diskon Kas',
            domains: ['Ekonomi', 'Keuangan'],
            insight:
              'Dalam rumus Discounted Cash Flow (DCF), kenaikan suku bunga risk-free menaikkan denominator (penyebut), sehingga nilai sekarang (present value) dari arus kas masa depan otomatis menyusut.',
          },
          actionableSteps: [
            'Cermati jadwal pengumuman suku bunga BI 7-Day Reverse Repo Rate setiap bulan.',
            'Kurangi kepemilikan saham spekulatif yang masih membakar uang (cash burning) saat era suku bunga tinggi.',
            'Manfaatkan yield obligasi pemerintah yang sedang tinggi sebagai instrumen pendapatan pasif bebas risiko kredit.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Bank Sentral Mengumumkan Kenaikan Suku Bunga 100 bps',
          context: 'Anda memegang 80% portofolio di saham startup teknologi yang belum mencatat profit.',
          dilemma: 'Pasar mulai panik dan harga saham teknologi mulai berjatuhan.',
          choices: [
            {
              id: 'c1',
              text: 'Tutup mata dan berharap saham bakar uang akan pulih dalam beberapa minggu.',
              consequence: 'Valuasi saham terus tertekan hingga -60% karena biaya modal (cost of capital) menjadi sangat mahal.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Era uang murah telah berakhir; perusahaan tanpa laba riil paling menderita di rezim suku bunga tinggi.',
            },
            {
              id: 'c2',
              text: 'Rebalancing portofolio: alihkan porsi saham ke emiten yang memiliki kas melimpah, utang minim, dan dividend yield solid.',
              consequence: 'Portofolio Anda terlindungi dari badai suku bunga dan menerima aliran dividen tunai yang stabil.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Perusahaan berlimpah kas justru diuntungkan karena pendapatan bunga atas saldo kasnya meningkat di bank.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Mengapa kenaikan suku bunga acuan bank sentral cenderung menekan harga saham di bursa?',
            options: [
              'Karena bursa efek akan ditutup paksa oleh pemerintah',
              'Karena biaya pinjaman perusahaan meningkat dan investor dapat beralih ke obligasi bebas risiko yang menawarkan yield menarik',
              'Karena dividen perusahaan secara otomatis disita oleh bank sentral',
              'Karena masyarakat berhenti mengonsumsi semua jenis makanan',
            ],
            correctAnswerIndex: 1,
            explanation: 'Suku bunga tinggi menaikkan biaya bunga utang emiten sekaligus menaikkan daya tarik imbal hasil surat utang negara.',
          },
        ],
      },
      {
        id: 'inflasi-dca',
        label: 'Disiplin Dollar-Cost Averaging (DCA)',
        domain: 'Psikologi',
        summary: 'Menjinakkan kecemasan psikologis pasar dengan akumulasi berkala tanpa menebak puncak atau dasar lembah.',
        x: 620,
        y: 430,
        level: 1,
        microContent: {
          analogy:
            'Menebak dasar harga saham (market timing) bagaikan mencoba menangkap pisau yang sedang jatuh dari lantai 10 dengan mata tertutup: kemungkinan besar tangan Anda berdarah. Metode Dollar-Cost Averaging (DCA) bagaikan memasang ember di bawah talang hujan secara teratur: saat badai harga murah Anda dapat banyak tetesan, saat reda Anda memanen hasilnya dengan tenang.',
          crossDisciplinary: {
            connectionText: 'Psikologi Perilaku x Akumulasi Modal',
            domains: ['Psikologi', 'Keuangan'],
            insight:
              'DCA mengeliminasi dua bias emosional paling merusak: FOMO (Fear of Missing Out) di pucuk harga dan Panic Selling di lembah krisis.',
          },
          actionableSteps: [
            'Atur autodebet investasi rutin di tanggal gajian setiap bulan tanpa memedulikan berita harian.',
            'Hapus aplikasi trading yang sering memicu kecemasan memeriksa pergerakan grafik per menit.',
            'Rayakan penurunan harga saham sebagai momen diskon belanja aset hebat, bukan sebagai bencana.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Indeks Saham Anjlok 15% Dalam Sepekan',
          context: 'Berita di televisi penuh dengan headline kiamat ekonomi dan kepanikan massal.',
          dilemma: 'Hari ini adalah jadwal autodebet bulanan investasi rutin Anda.',
          choices: [
            {
              id: 'c1',
              text: 'Batalkan autodebet dan jual semua saham di harga rugi karena takut uangnya hilang total.',
              consequence: 'Anda merealisasikan kerugian di titik terendah dan melewatkan rebound pemulihan terbesar sejarah.',
              scoreBonus: 0,
              isOptimal: false,
              explanation: 'Menjual karena panik berita adalah penyebab 90% investor ritel gagal mengalahkan inflasi.',
            },
            {
              id: 'c2',
              text: 'Tetap jalankan jadwal DCA bulanan: dapatkan lebih banyak lembar saham di harga diskon besar-besaran.',
              consequence: 'Rata-rata harga beli Anda turun drastis, memposisikan portofolio Anda untuk lonjakan return saat pasar pulih.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Kedisiplinan psikologis di masa panik adalah rahasia terbesar investor legendaris.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Keuntungan psikologis utama dari strategi Dollar-Cost Averaging (DCA) adalah:',
            options: [
              'Memastikan investor selalu membeli di titik paling dasar setiap saat tanpa cela',
              'Menghilangkan stres emosional menebak waktu pasar (market timing) dan mendisiplinkan akumulasi modal jangka panjang',
              'Membuat return investasi pasti berlipat ganda dalam waktu semalam',
              'Membebaskan investor dari kewajiban riset kualitas bisnis',
            ],
            correctAnswerIndex: 1,
            explanation: 'DCA membiasakan disiplin sistematis dan menetralisir rasa takut maupun keserakahan manusiawi.',
          },
        ],
      },
    ],
    edges: [
      { id: 'ie1', from: 'inflasi-root', to: 'inflasi-purchasing-power', label: 'Erosi Nilai Nyata', domains: ['Ekonomi', 'Keuangan'] },
      { id: 'ie2', from: 'inflasi-root', to: 'inflasi-pricing-power', label: 'Perisai Bisnis Riil', domains: ['Ekonomi', 'Bisnis'] },
      { id: 'ie3', from: 'inflasi-root', to: 'inflasi-interest-rates', label: 'Respon Bank Sentral', domains: ['Ekonomi', 'Keuangan'] },
      { id: 'ie4', from: 'inflasi-root', to: 'inflasi-dca', label: 'Strategi Eksekusi Ritel', domains: ['Ekonomi', 'Psikologi'] },
      { id: 'ie5', from: 'inflasi-purchasing-power', to: 'inflasi-pricing-power', label: 'Transfer Biaya', domains: ['Keuangan', 'Bisnis'] },
      { id: 'ie6', from: 'inflasi-interest-rates', to: 'inflasi-dca', label: 'Menjinakkan Volatilitas', domains: ['Keuangan', 'Psikologi'] },
    ],
  },

  'Psikologi Marketing F&B': {
    id: 'mindmap-psikologi-fnb',
    topic: 'Psikologi Marketing F&B',
    rootId: 'fnb-root',
    description: 'Bagaimana restoran dan brand kuliner merekayasa persepsi harga, rasa, dan kenyamanan tanpa Anda sadari.',
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
            id: 'q1',
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
        y: 150,
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
            id: 'q1',
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
        y: 150,
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
            id: 'q1',
            question: 'Mengapa stimulasi aroma (penciuman) lebih cepat memicu dorongan impulsif dibanding iklan tulisan?',
            options: [
              'Karena saraf penciuman diproses langsung oleh sistem limbik dan amigdala yang mengatur emosi dan memori primer',
              'Karena manusia tidak bisa membaca teks iklan di tempat umum',
              'Karena indra penciuman tidak memerlukan oksigen untuk bekerja',
              'Karena aroma makanan mengandung kalori yang langsung diserap kulit',
            ],
            correctAnswerIndex: 0,
            explanation: 'Sistem limbik adalah bagian otak reptil/primitif tempat emosi dan impuls instingtual bersemayam tanpa hambatan logika prefrontal korteks.',
          },
        ],
      },
      {
        id: 'fnb-social-proof',
        label: 'Social Proof & Artificial Scarcity',
        domain: 'Psikologi',
        summary: 'Antrean sengaja diperlambat dan batch harian dibatasi untuk menciptakan ilusi kelangkaan prestise.',
        x: 400,
        y: 440,
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
            id: 'q1',
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

  'Geopolitik Impor Ekspor': {
    id: 'mindmap-geopolitik-perdagangan',
    topic: 'Geopolitik Impor Ekspor',
    rootId: 'geo-root',
    description: 'Bagaimana selat sempit, perang tarif, dan hegemoni mata uang mendikte harga barang di warung tetangga Anda.',
    nodes: [
      {
        id: 'geo-root',
        label: 'Anatomi Perdagangan Global & Geopolitik',
        domain: 'Geopolitik',
        summary: 'Perdagangan internasional bukan sekadar hukum ekonomi komparatif Ricardo, melainkan proyeksi kekuatan militer, kendali rute pelayaran, dan cadangan devisa.',
        x: 400,
        y: 280,
        level: 0,
        microContent: {
          analogy:
            'Bayangkan ada pasar desa besar yang dikelilingi pagar kawat berduri. Hanya ada satu pintu gerbang sempit yang dijaga oleh petugas bersenjata lengkap. Siapa pun pedagang yang ingin menjual beras atau membeli pupuk harus menunduk patuh pada aturan sang penjaga pintu dan membayar dengan kupon khusus yang dicetak sang penjaga. Geopolitik perdagangan adalah pertarungan siapa yang memegang kunci gerbang selat dan siapa yang mencetak kupon mata uangnya.',
          crossDisciplinary: {
            connectionText: 'Geopolitik Strategis x Rantai Pasok Makro',
            domains: ['Geopolitik', 'Ekonomi'],
            insight:
              'Sebuah kapal kontainer yang terhambat 6 hari di Terusan Suez atau Selat Malaka dapat memicu kenaikan inflasi manufaktur 10.000 km jauhnya dalam 3 minggu.',
          },
          actionableSteps: [
            'Petakan rantai pasok bisnis Anda: cari tahu negara asal bahan baku terdalam dari produk unggulan Anda.',
            'Lakukan hedging (lindung nilai) mata uang jika bisnis Anda terpapar transaksi USD atau EUR dalam jumlah signifikan.',
            'Diversifikasi vendor minimal dari dua benua berbeda untuk menghindari risiko blokade regional.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Krisis Blokade Selat Strategis',
          context: 'Konflik bersenjata meletus di rute pelayaran Laut Merah dan Selat Bab el-Mandeb.',
          dilemma: 'Waktu tempuh kapal logistik bertambah 14 hari karena harus memutar Tanjung Harapan Afrika dan tarif kontainer naik 300%.',
          choices: [
            {
              id: 'c1',
              text: 'Batalkan seluruh pesanan bahan baku luar negeri dan tutup operasional pabrik sampai selat dibuka kembali.',
              consequence: 'Klien beralih ke produsen lain yang siap, pabrik Anda kehilangan reputasi dan kontrak tahunan hangus.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Menyerah pada disrupsi rute geopolitik melenyapkan pangsa pasar bisnis Anda secara permanen.',
            },
            {
              id: 'c2',
              text: 'Aktifkan jalur darat alternatif (kereta kontainer trans-Eurasia) dan alihkan pengadaan parsial ke produsen lokal regional.',
              consequence: 'Pabrik tetap beroperasi tepat waktu, pasokan terjamin, dan Anda diakui sebagai partner bisnis paling andal saat krisis.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Resiliensi logistik multimodal adalah kunci bertahan hidup di era ketidakpastian geopolitik global.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Mengapa Selat Malaka disebut sebagai salah satu "Maritime Chokepoint" paling vital di planet bumi?',
            options: [
              'Karena selat tersebut menghasilkan seluruh pasokan mutiara dunia',
              'Karena lebih dari 60% perdagangan maritim dunia dan pasokan energi minyak ke Asia Timur melintasi selat sempit ini',
              'Karena tidak ada selat lain yang memiliki air asin di Samudra Hindia',
              'Karena seluruh kabel internet bawah laut dilarang melintas di sana',
            ],
            correctAnswerIndex: 1,
            explanation: 'Selat Malaka adalah urat nadi perdagangan Asia-Eropa; gangguan keamanan di sana melumpuhkan arus energi dan komoditas global.',
          },
        ],
      },
      {
        id: 'geo-chokepoints',
        label: 'Maritime Chokepoints & Jalur Rentan',
        domain: 'Geopolitik',
        summary: 'Titik genting selat dunia (Malaka, Hormuz, Suez, Panama) yang mengendalikan 80% tonase barang fisik.',
        x: 180,
        y: 160,
        level: 1,
        microContent: {
          analogy:
            'Selat Hormuz bagaikan leher pipa bensin untuk mobil seluruh dunia. Jika seseorang memasang kran penutup di leher selat yang lebarnya hanya puluhan mil laut itu, seperlima pasokan minyak dunia langsung terhenti. Harga bensin di pom bensin dekat rumah Anda akan melonjak sebelum matahari terbenam.',
          crossDisciplinary: {
            connectionText: 'Geografi Maritim x Volatilitas Harga Energi',
            domains: ['Geopolitik', 'Ekonomi'],
            insight:
              'Biaya premi asuransi kapal kargo melonjak 10x lipat seketika saat kapal melewati zona maritim yang berstatus risiko konflik bersenjata.',
          },
          actionableSteps: [
            'Simak indeks Baltic Dry Index untuk memantau tren tarif kargo kapal curah global.',
            'Bangun cadangan penyangga (Buffer Stock) persediaan inventaris minimal 45 hari untuk bahan impor.',
            'Cari alternatif jalur logistik kargo udara untuk barang berbobot ringan dengan nilai tambah tinggi.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Kekeringan Air di Terusan Panama',
          context: 'Penurunan debit danau air tawar membatasi draft kapal yang melintasi Terusan Panama hingga 50%.',
          dilemma: 'Barang impor Anda tertahan di antrean dermaga selama 30 hari.',
          choices: [
            {
              id: 'c1',
              text: 'Tunggu antrean sambil mengeluh di media sosial tanpa mencari opsi lain.',
              consequence: 'Barang datang terlambat melewati musim belanja, barang menjadi deadstock di gudang.',
              scoreBonus: 5,
              isOptimal: false,
              explanation: 'Pasif terhadap fenomena cuaca dan pembatasan infrastruktur menggerus modal kerja.',
            },
            {
              id: 'c2',
              text: 'Bongkar kontainer di pelabuhan pesisir barat dan sewa kereta api darat (land-bridge) untuk menyeberangi benua ke tujuan.',
              consequence: 'Biaya sedikit bertambah tetapi barang tiba tepat waktu sebelum puncak musim belanja konsumen.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Strategi logistik intermodal mengatasi hambatan infrastruktur air dengan efisiensi waktu.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Apa dampak ekonomi paling langsung jika Selat Hormuz ditutup akibat ketegangan militer?',
            options: [
              'Penurunan drastis harga emas batangan di seluruh dunia',
              'Lonjakan tajam harga minyak mentah global dan kenaikan biaya logistik penerbangan internasional',
              'Kelebihan pasokan gandum di benua Eropa',
              'Penutupan bursa saham teknologi di Silicon Valley selamanya',
            ],
            correctAnswerIndex: 1,
            explanation: 'Selat Hormuz mengalirkan sekitar 20% minyak bumi konsumsi dunia setiap hari; penutupannya memicu syok pasokan energi langsung.',
          },
        ],
      },
      {
        id: 'geo-currency-wars',
        label: 'Dedolarisasi & Hegemoni Mata Uang',
        domain: 'Keuangan',
        summary: 'Peran US Dollar sebagai mata uang cadangan dunia dan pergeseran menuju penyelesaian mata uang lokal (LCS).',
        x: 620,
        y: 160,
        level: 1,
        microContent: {
          analogy:
            'Jika Anda dan tetangga Anda bertransaksi sayur dan beras di desa, Anda berdua tidak boleh menggunakan koin desa sendiri, melainkan wajib menukar dulu ke kupon khusus milik Pak RT. Pak RT bisa mencetak kupon itu sesuka hati tanpa modal, dan jika Anda tidak patuh, Pak RT bisa membekukan tabungan kupon Anda di bank desa. Inilah yang disebut "Exorbitant Privilege" dari dolar AS.',
          crossDisciplinary: {
            connectionText: 'Keuangan Internasional x Kedaulatan Negara',
            domains: ['Keuangan', 'Geopolitik'],
            insight:
              'Sanksi pembekuan cadangan devisa Rusia pada 2022 mempercepat negara-negara BRICS untuk membangun sistem pembayaran non-SWIFT dan beralih ke Local Currency Settlement (LCS).',
          },
          actionableSteps: [
            'Manfaatkan fasilitas Local Currency Settlement (LCS) dari Bank Indonesia saat bertransaksi dengan partner di China, Jepang, Malaysia, atau Thailand.',
            'Kurangi eksposur konversi ganda (Rupiah -> USD -> Mata Uang Mitra) untuk memangkas biaya selisih kurs.',
            'Pantau pergerakan Dollar Index (DXY) sebagai barometer kekuatan modal global.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Impor Mesin Pabrik dari Mitra Shanghai',
          context: 'Kurs USD/IDR sedang melonjak tinggi dan volatil.',
          dilemma: 'Mitra pabrik menawarkan pembayaran via kuotasi Renminbi (RMB) langsung via skema LCS.',
          choices: [
            {
              id: 'c1',
              text: 'Tolak skema LCS dan tetap bayar menggunakan USD karena merasa lebih familiar dengan konvensi lama.',
              consequence: 'Anda terkena dua kali fee konversi valas dan menanggung risiko depresiasi Rupiah terhadap Dolar yang sedang meroket.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Ketergantungan buta pada satu mata uang pihak ketiga menambah biaya transaksi yang tidak perlu.',
            },
            {
              id: 'c2',
              text: 'Gunakan skema Local Currency Settlement (LCS) langsung Rupiah ke Yuan via bank devisa terdaftar.',
              consequence: 'Hemat biaya konversi kurs hingga 3.5%, penyelesaian transfer lebih cepat, dan hubungan dagang kian kokoh.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'LCS memangkas ketergantungan pada kliring perbankan New York dan mengurangi paparan fluktuasi mata uang ketiga.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Apa manfaat strategis utama bagi eksportir/importir Indonesia yang menggunakan skema Local Currency Settlement (LCS)?',
            options: [
              'Mendapatkan subsidi modal gratis dari bank dunia',
              'Mengurangi ketergantungan pada US Dollar dan memangkas biaya konversi ganda valas secara langsung',
              'Terbebas dari kewajiban membayar pajak bea cukai di pelabuhan',
              'Mempercepat kecepatan kapal kargo di lautan',
            ],
            correctAnswerIndex: 1,
            explanation: 'LCS memungkinkan penyelesaian transaksi bilateral menggunakan mata uang lokal masing-masing negara mitra tanpa perlu melalui konversi USD terlebih dahulu.',
          },
        ],
      },
      {
        id: 'geo-tariffs',
        label: 'Perang Tarif & Proteksionisme',
        domain: 'Ekonomi',
        summary: 'Bagaimana bea masuk impor digunakan sebagai senjata proteksi industri domestik dan alat negosiasi diplomatik.',
        x: 400,
        y: 440,
        level: 1,
        microContent: {
          analogy:
            'Ketika suatu negara mengenakan tarif bea masuk 50% untuk mobil impor, mereka tidak sedang membuat mobil impor itu lenyap. Mereka sedang menempelkan beban batu di punggung mobil impor agar mobil buatan pabrik dalam negeri yang lebih lambat bisa menang balapan di pasar. Ujung-ujungnya, yang membayar harga batu itu adalah konsumen biasa yang kehilangan pilihan murah.',
          crossDisciplinary: {
            connectionText: 'Kebijakan Perdagangan x Beban Kesejahteraan Konsumen (Deadweight Loss)',
            domains: ['Ekonomi', 'Geopolitik'],
            insight:
              'Dalam teori ekonomi publik, tarif impor menciptakan "Deadweight Loss" — kerugian kesejahteraan riil bagi masyarakat yang melebihi pendapatan pajak yang dipungut negara.',
          },
          actionableSteps: [
            'Cek Harmonized System (HS Code) produk Anda di portal INSW Bea Cukai untuk mengetahui tarif bea masuk dan larangan terbatas (Lartas).',
            'Manfaatkan perjanjian perdagangan bebas (FTA seperti RCEP atau ATIGA) untuk mendapatkan tarif preferensial 0%.',
            'Pertimbangkan perakitan lokal (Completely Knocked Down/CKD) jika tarif impor barang jadi utuh terlalu tinggi.',
          ],
        },
        decisionScenario: {
          title: 'Kasus: Kenaikan Tarif Impor Komponen Elektronik 20%',
          context: 'Pemerintah menetapkan bea masuk baru 20% untuk komponen impor utuh demi mendorong TKDN.',
          dilemma: 'Bagaimana merestrukturisasi perakitan produk Anda?',
          choices: [
            {
              id: 'c1',
              text: 'Tetap impor utuh dan bebankan seluruh kenaikan 20% ke harga eceran konsumen tanpa nilai tambah.',
              consequence: 'Daya saing produk Anda kalah telak dari kompetitor yang sudah memiliki sertifikasi TKDN lokal.',
              scoreBonus: 10,
              isOptimal: false,
              explanation: 'Pasif terhadap regulasi tarif membuat produk Anda terlempar dari pengadaan tender pemerintah dan pasar massal.',
            },
            {
              id: 'c2',
              text: 'Gandeng mitra perakitan lokal untuk proses pengelasan dan packaging agar memenuhi syarat TKDN di atas 40%.',
              consequence: 'Lolos bea masuk tarif preferensial 0%, memenuhi syarat tender instansi pemerintah, dan mengamankan kontrak volume besar.',
              scoreBonus: 50,
              isOptimal: true,
              explanation: 'Adaptasi cerdas terhadap proteksionisme lokal membuka akses ke pasar pengadaan resmi yang eksklusif.',
            },
          ],
        },
        quiz: [
          {
            id: 'q1',
            question: 'Siapakah pihak yang pada akhirnya menanggung beban finansial riil terbesar dari pengenaan tarif impor barang komoditas?',
            options: [
              'Pemerintah negara pengekspor',
              'Konsumen dan industri hilir di negara pengimpor yang membeli produk tersebut di pasar domestik',
              'Perusahaan ekspedisi kapal kargo di lautan lepas',
              'Organisasi Perdagangan Dunia (WTO)',
            ],
            correctAnswerIndex: 1,
            explanation: 'Secara empiris, tarif impor dibayarkan oleh perusahaan pengimpor di pelabuhan dan diteruskan ke harga jual akhir yang dibayar konsumen domestik.',
          },
        ],
      },
    ],
    edges: [
      { id: 'ge1', from: 'geo-root', to: 'geo-chokepoints', label: 'Urat Nadi Maritim', domains: ['Geopolitik', 'Ekonomi'] },
      { id: 'ge2', from: 'geo-root', to: 'geo-currency-wars', label: 'Hegemoni Finansial', domains: ['Geopolitik', 'Keuangan'] },
      { id: 'ge3', from: 'geo-root', to: 'geo-tariffs', label: 'Hambatan Tarif Regulasi', domains: ['Geopolitik', 'Ekonomi'] },
      { id: 'ge4', from: 'geo-chokepoints', to: 'geo-tariffs', label: 'Risiko Biaya Rantai Pasok', domains: ['Geopolitik', 'Ekonomi'] },
    ],
  },
};

