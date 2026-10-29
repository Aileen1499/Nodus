// ==============================================================================
// NODUS — MACROECONOMICS, MONETARY CYCLES, VALUATION & RISK HEDGING MODULE
// ==============================================================================

import { MindmapData } from '../types';

export const ADVANCED_MACRO_FINANCE_CURRICULUM: MindmapData = {
  id: 'curriculum-ekonomi-makro-keuangan',
  topic: 'Ekonomi Makro, Siklus Moneter & Valuasi Korporat Lanjutan',
  rootId: 'macro-1-1',
  description: 'Masterclass eksekutif makroekonomi: Siklus kredit Ray Dalio, peran The Fed & BI, transmisi inflasi & likuiditas global, valuasi intrinsik DCF & WACC, hingga manajemen solvabilitas dan hedging derivatif.',
  nodes: [
    // --------------------------------------------------------------------------
    // TAHAP 1: MESIN EKONOMI & SIKLUS KREDIT (DEBT CYCLES)
    // --------------------------------------------------------------------------
    {
      id: 'macro-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'TAHAP 1: Mesin Ekonomi & Siklus Kredit',
      label: 'Anatomi Mesin Ekonomi & Transaksi Fundamental',
      domain: 'Ekonomi',
      summary: 'Bagaimana agregasi transaksi membentuk pengeluaran total PDB dan mengapa kredit bertindak sebagai pembeli pertama yang meminjam daya beli masa depan.',
      x: 180,
      y: 120,
      level: 0,
      microContent: {
        mentalModel: 'Transaction-Based Economic Machine (Ray Dalio & Irving Fisher)',
        analogy: 'Ekonomi bukanlah mesin mekanis rumit yang tak terduga, melainkan pengulangan miliaran transaksi sederhana yang identik. Setiap kali Anda membeli secangkir kopi seharga Rp 35.000 dengan uang tunai atau kartu kredit, Anda menukarkan uang/kredit dengan barang. Pengeluaran Anda ($Total Spending = Uang + Kredit$) secara otomatis menjadi pendapatan bagi sang barista. Karena pengeluaran satu orang adalah pendapatan orang lain, setiap rupiah yang dibelanjakan menggerakkan pendapatan pihak berikutnya dalam rantai tanpa akhir.',
        academicInsight: 'Produk Domestik Bruto (PDB) dihitung melalui pendekatan pengeluaran: $GDP = C + I + G + (X - M)$. Kredit memperbesar daya beli secara instan melampaui produktivitas riil saat ini. Namun, saat meminjam, Anda bukan hanya meminjam uang dari bank, melainkan meminjam daya beli dari diri Anda sendiri di masa depan. Akibatnya, pada periode pelunasan pokok plus bunga, pengeluaran Anda di masa depan terpaksa ditekan di bawah pendapatan Anda, menciptakan siklus naik-turun alami.',
        crossDisciplinary: {
          connectionText: 'Makroekonomi x Psikologi Optimisme Kolektif',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Animal Spirits (John Maynard Keynes): Keputusan mengambil kredit sering kali didorong oleh euforia psikologis jangka pendek bahwa pendapatan masa depan akan terus meningkat tanpa hambatan.',
        },
        caseStudy: {
          companyOrFigure: 'Ledakan Konsumsi Kredit Konsumer AS Pasca-PD II (1950-1970)',
          story: 'Pengenalan kartu kredit modern (Diners Club 1950 & BankAmericard 1958) memicu lonjakan belanja rumah tangga AS hingga 300%. PDB AS tumbuh pesat bukan hanya karena kenaikan produktivitas pabrik, melainkan karena percepatan kecepatan perputaran uang (Velocity of Money) yang didorong oleh injeksi kredit konsumsi.',
          takeaway: 'Kredit menciptakan ilusi kemakmuran instan di awal siklus, namun pada akhirnya kemampuan membayar utang harus ditopang oleh pertumbuhan produktivitas riil.'
        },
        actionableSteps: [
          'Audit rasio leverage pribadi/bisnis: pastikan beban pembayaran utang bulanan (Debt Service Ratio) tidak melampaui 30% dari arus kas operasional bersih.',
          'Pisahkan antara kredit produktif (menghasilkan pendapatan di atas bunga pinjaman) dan kredit konsumtif (membeli aset depresiasi).',
          'Pantau indikator leading PDB domestik dan indeks keyakinan konsumen sebelum mengeksekusi ekspansi belanja modal berskala besar.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Ekspansi Bisnis: Ledakan Permintaan Konsumen vs Risiko Utang',
        context: 'Perusahaan ritel Anda mengalami lonjakan penjualan 40% tahun ini seiring booming kredit konsumsi perbankan. Bank menawarkan fasilitas pinjaman modal kerja Rp 20 miliar dengan bunga 10% untuk membangun gudang baru.',
        dilemma: 'Bagaimana merespons tawaran kredit perbankan saat siklus pengeluaran ekonomi nasional sedang berada di puncak akselerasi?',
        choices: [
          {
            id: 'c1',
            text: 'Ambil pinjaman penuh Rp 20 miliar dan bangun fasilitas gudang terbesar untuk mengantisipasi pertumbuhan 50% tahun depan.',
            consequence: 'Ketika siklus kredit mengetat dan konsumsi melambat, beban bunga tetap Rp 2 miliar/tahun menekan arus kas dan memicu krisis likuiditas.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Mengasumsikan siklus ekspansi kredit berlangsung selamanya tanpa menyiapkan bantalan kas adalah kesalahan klasik ekspansi berlebih.'
          },
          {
            id: 'c2',
            text: 'Tolak total semua pinjaman bank dan hanya berekspansi jika laba bersih terakumulasi 3 tahun lagi mencukupi secara kas tunai.',
            consequence: 'Pesaing mengambil alih pangsa pasar Anda selama masa lonjakan permintaan, perusahaan kehilangan momentum skala ekonomi.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Sikap terlalu menghindari risiko (zero leverage) mengabaikan potensi nilai waktu uang dan keunggulan momentum pasar.'
          },
          {
            id: 'c3',
            text: 'Ambil pinjaman moderat Rp 8 miliar yang didukung rasio penutupan bunga (ICR > 4x), sewa gudang fleksibel daripada membangun aset tetap.',
            consequence: 'Kapasitas logistik terpenuhi, beban utang terkelola dengan aman, dan perusahaan memiliki fleksibilitas menurunkan biaya sewa saat ekonomi mendingin.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Kombinasi rasio utang terukur dengan struktur biaya variabel (sewa fleksibel) memitigasi risiko saat siklus ekonomi berbalik arah.'
          },
          {
            id: 'c4',
            text: 'Gunakan seluruh cadangan kas likuid operasional saat ini tanpa utang bank untuk membangun gudang fisik.',
            consequence: 'Modal kerja terkuras habis ke aset tidak likuid (tanah dan beton), perusahaan rentan gagal bayar saat terjadi keterlambatan pembayaran piutang.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Mengorbankan bantalan likuiditas kas operasional demi belanja modal aset tetap menimbulkan risiko kebangkrutan likuiditas akut.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-1',
          question: 'Menurut teori mesin ekonomi Ray Dalio, mengapa ekspansi kredit selalu memicu siklus penurunan ekonomi di masa depan?',
          options: [
            'Karena kredit menambah pasokan emas di bank sentral secara permanen.',
            'Karena meminjam kredit berarti meminjam daya beli dari diri sendiri di masa depan, sehingga pengeluaran masa depan harus dipangkas untuk membayar pokok dan bunga.',
            'Karena suku bunga pinjaman selalu diturunkan oleh bank sentral saat utang menumpuk.',
            'Karena uang kertas mengalami devaluasi fisik setiap 5 tahun sekali.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Kredit memperbesar pengeluaran saat ini melampaui produktivitas, namun kewajiban membayar utang dan bunga di masa depan memaksa pengeluaran ditekan di bawah pendapatan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 1.2: SIKLUS UTANG JANGKA PENDEK & JANGKA PANJANG
    // --------------------------------------------------------------------------
    {
      id: 'macro-1-2',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'TAHAP 1: Mesin Ekonomi & Siklus Kredit',
      label: 'Siklus Utang Jangka Pendek & Jangka Panjang (Ray Dalio)',
      domain: 'Ekonomi',
      summary: 'Dinamika siklus bisnis 5-8 tahun vs akumulasi *Debt Supercycle* 50-75 tahun hingga batas suku bunga 0% dan proses *Deleveraging* besar.',
      x: 180,
      y: 270,
      level: 1,
      prerequisiteId: 'macro-1-1',
      microContent: {
        mentalModel: 'Debt Supercycle & The 4 Levers of Deleveraging (Ray Dalio)',
        analogy: 'Siklus utang jangka pendek bagaikan tarikan dan embusan napas pelari cepat (naik turun setiap beberapa tahun diatur oleh suku bunga). Namun, siklus utang jangka panjang adalah proses penuaan tubuh sang pelari: seiring dekade berlalu, tumpukan asam laktat dan utang total tumbuh lebih cepat daripada pendapatan, hingga sendi-sendinya kaku dan suku bunga menyentuh angka 0% (Zero Lower Bound). Ketika ini terjadi, bank sentral tak lagi bisa memotong bunga dan ekonomi terpaksa memasuki fase Deleveraging.',
        academicInsight: 'Siklus jangka pendek (5-8 tahun) dikendalikan melalui mekanisme moneter standar: saat ekonomi overheating dan inflasi naik, bank sentral menaikkan suku bunga untuk memperketat pinjaman; saat resesi datang, suku bunga dipotong. Namun, di setiap siklus, puncak dan lembah utang selalu lebih tinggi dari siklus sebelumnya karena manusia secara psikologis lebih suka meminjam daripada membayar utang. Setelah 50-75 tahun, rasio utang terhadap PDB mencapai batas kritis. Deleveraging yang sehat (A Beautiful Deleveraging) menyeimbangkan 4 tuas: (1) Pengetatan anggaran (Austerity - deflasi), (2) Restrukturisasi/Write-down utang (deflasi), (3) Redistribusi kekayaan via pajak progresif (deflasi), dan (4) Pencetakan uang bank sentral (inflasi).',
        crossDisciplinary: {
          connectionText: 'Siklus Utang Makro x Sosiologi & Politik',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Polarisasi Politik saat Akhir Siklus Utang: Ketika jurang ketimpangan melebar di puncak siklus utang jangka panjang dan ekonomi mandek, populisme politik radikal dari sayap kiri maupun kanan selalu meningkat secara historis.',
        },
        caseStudy: {
          companyOrFigure: 'Depresi Besar 1929 vs Krisis Finansial Global 2008',
          story: 'Pada tahun 1929 dan 2008, rasio total utang terhadap PDB AS sama-sama menembus 300% dan suku bunga sentral menyentuh 0%. Pada 1930-1932, pembuat kebijakan melakukan kesalahan fatal dengan memaksakan Austerity keras tanpa pencetakan uang yang cukup, memicu deflasi Depresi Besar. Pada 2008, Chairman The Fed Ben Bernanke mencetak uang triliunan dolar via Quantitative Easing (QE) untuk mengimbangi deflasi kredit, menghasilkan pemulihan yang jauh lebih stabil (Beautiful Deleveraging).',
          takeaway: 'Memahami di fase mana siklus utang berada melindungi Anda dari jebakan ekspansi utang berlebih saat gelembung aset sedang menuju titik pecah.'
        },
        actionableSteps: [
          'Evaluasi posisi makroekonomi: pantau apakah suku bunga acuan bank sentral sedang mendekati 0% atau rasio utang nasional terhadap PDB sedang berada di rekor tertinggi historis.',
          'Uji ketahanan portofolio (stress-test): pastikan aset bisnis mampu bertahan dalam skenario deflasi pendapatan 30% selama 18 bulan berturut-turut.',
          'Pindahkan simpanan dari aset spekulatif yang ditopang utang (leveraged real estate/overvalued equity) ke aset berkualitas tinggi tanpa beban leverage.'
        ],
        difficulty: 'Menengah',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Makroekonomi: Menavigasi Gelembung Aset di Puncak Siklus Utang',
        context: 'Pasar properti dan saham komersial telah naik 5 tahun berturut-turut. Rasio utang swasta terhadap PDB berada di level tertinggi sepanjang masa, inflasi mulai merangkak, dan bank sentral memberi sinyal pengetatan likuiditas moneter.',
        dilemma: 'Bagaimana restrukturisasi neraca perusahaan Anda sebelum gelembung kredit meletus?',
        choices: [
          {
            id: 'c1',
            text: 'Manfaatkan suku bunga yang belum naik untuk menerbitkan obligasi jangka panjang bertenor 10 tahun dan melunasi seluruh utang jatuh tempo jangka pendek.',
            consequence: 'Perusahaan mengunci biaya utang tetap jangka panjang, menghilangkan risiko refinancing saat krisis likuiditas kredit melanda.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Memperpanjang durasi utang dan mengunci bunga tetap saat puncak siklus adalah strategi defensif terbaik korporat dunia.'
          },
          {
            id: 'c2',
            text: 'Gunakan pinjaman bank berbunga mengambang (floating rate) jangka pendek karena biaya bunganya saat ini masih paling murah.',
            consequence: 'Ketika bank sentral menaikkan suku bunga 400 bps, beban bunga floating melonjak 2 kali lipat dan menggerus habis laba operasional.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menggunakan utang jangka pendek berbunga mengambang di akhir siklus utang adalah penyebab nomor satu kebangkrutan korporat.'
          },
          {
            id: 'c3',
            text: 'Beli sebanyak mungkin properti komersial dengan uang muka minimal karena harga aset diyakini akan terus naik selamanya.',
            consequence: 'Gelembung pecah, nilai agunan properti turun 35% di bawah nilai pokok utang (negative equity), bank melakukan margin call.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Mengejar aset spekulatif berbasis leverage di puncak gelembung utang adalah resep kehancuran modal.'
          },
          {
            id: 'c4',
            text: 'Jual seluruh aset produktif perusahaan dan pegang 100% uang tunai di tabungan biasa.',
            consequence: 'Perusahaan kehilangan pangsa pasar dan daya saing operasional; jika inflasi berlanjut, daya beli kas tergerus secara permanen.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Likuidasi total mengabaikan kelangsungan bisnis; yang dibutuhkan adalah perpanjangan durasi utang dan seleksi aset tangguh.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-2',
          question: 'Apa karakteristik utama yang membedakan akhir siklus utang jangka panjang (Long-Term Debt Cycle) dengan siklus jangka pendek?',
          options: [
            'Suku bunga bank sentral tidak bisa lagi dipotong karena sudah menyentuh batas bawah nol persen (Zero Lower Bound).',
            'Harga beras dan komoditas pangan mengalami kenaikan 500% dalam sehari.',
            'Jumlah uang kartal fisik ditarik seluruhnya dari peredaran oleh pemerintah.',
            'Mata uang otomatis dikonversi menjadi mata uang kripto secara paksa.'
          ],
          correctAnswerIndex: 0,
          explanation: 'Pada akhir siklus utang jangka panjang, beban utang begitu besar sehingga pemotongan suku bunga konvensional tak lagi mampu menstimulasi pinjaman baru (Zero Lower Bound), menuntut restrukturisasi atau pencetakan uang QE.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 1.3: PERAN BANK SENTRAL & KEBIJAKAN SUKU BUNGA
    // --------------------------------------------------------------------------
    {
      id: 'macro-1-3',
      stepNumber: 'Langkah 1.3',
      stageTitle: 'TAHAP 1: Mesin Ekonomi & Siklus Kredit',
      label: 'Peran Bank Sentral & Transmisi Kebijakan Moneter',
      domain: 'Ekonomi',
      summary: 'Mekanisme transmisi suku bunga acuan (The Fed Funds Rate & BI 7-Day RR) terhadap inflasi, nilai tukar, belanja modal, dan valuasi aset.',
      x: 180,
      y: 420,
      level: 2,
      prerequisiteId: 'macro-1-2',
      microContent: {
        mentalModel: 'Taylor Rule & Monetary Policy Transmission Channels',
        analogy: 'Bank Sentral bertindak seperti termostat pendingin ruangan di sebuah gedung pencakar langit. Ketika aktivitas ekonomi terlalu panas (inflasi melonjak di atas target), bank sentral memutar kenop suhu ke posisi dingin dengan menaikkan suku bunga acuan. Suku bunga yang tinggi bertindak seperti rem hidrolik: bunga KPR dan kredit modal kerja naik, memicu masyarakat dan pengusaha menunda belanja serta menaruh uang di deposito. Akibatnya, perputaran uang melambat dan harga-harga barang mendingin.',
        academicInsight: 'Bank Sentral beroperasi dengan mandat ganda (Dual Mandate): menjaga stabilitas harga (inflasi sekitar 2-3%) dan memaksimalkan kesempatan kerja berkelanjutan. Rumus Taylor Rule ($r = p + 0.5y + 0.5(p - 2) + 2$) memodelkan bagaimana suku bunga nominal harus disesuaikan terhadap deviasi inflasi dan output gap. Jalur transmisi moneter bekerja melalui 4 kanal utama: (1) Kanal suku bunga (biaya pinjaman langsung), (2) Kanal harga aset (saham dan properti turun karena diskonto naik), (3) Kanal nilai tukar (kenaikan suku bunga domestik menarik *capital inflow* dan memperkuat kurs), dan (4) Kanal ekspektasi inflasi.',
        crossDisciplinary: {
          connectionText: 'Kebijakan Moneter x Valuasi Keuangan Perusahaan',
          domains: ['Ekonomi', 'Keuangan'],
          insight: 'Hukum Gravitasi Finansial (Warren Buffett): Suku bunga bebas risiko (Risk-Free Rate) adalah gravitasi bagi valuasi semua aset finansial. Semakin tinggi suku bunga, semakin kuat daya tarik ke bawah terhadap harga saham dan properti.',
        },
        caseStudy: {
          companyOrFigure: 'Volcker Shock (1979-1981): Mematahkan Ekspektasi Inflasi AS',
          story: 'Menghadapi inflasi AS yang menembus 14.8% akibat guncangan minyak dan kebijakan moneter longgar tahun 1970-an, Chairman The Fed Paul Volcker secara drastis menaikkan Fed Funds Rate hingga menyentuh 20%. Langkah ekstrem ini memicu resesi ganda dan pengangguran di atas 10%, namun berhasil membasmi ekspektasi inflasi dan meletakkan fondasi ekspansi ekonomi stabil selama dua dekade berikutnya.',
          takeaway: 'Bank sentral yang kredibel lebih memilih memicu resesi singkat daripada membiarkan inflasi mengakar permanen dalam ekspektasi masyarakat.'
        },
        actionableSteps: [
          'Pantau rilis data dot-plot The Fed dan keputusan Rapat Dewan Gubernur (RDG) Bank Indonesia setiap bulan.',
          'Hitung dampak kenaikan 100 bps suku bunga pinjaman terhadap margin laba bersih operasional bisnis Anda.',
          'Posisikan investasi kas korporat pada instrumen pasar uang berdurasi pendek saat tren suku bunga sedang dalam fase kenaikan (*rate hike cycle*).'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema CFO: Merespons Siklus Kenaikan Suku Bunga Agresif (+250 bps)',
        context: 'Bank Indonesia dan The Fed mengumumkan percepatan pengetatan moneter dengan memproyeksikan kenaikan suku bunga acuan total 250 bps dalam 6 bulan ke depan untuk meredam inflasi energi. Perusahaan Anda memiliki utang bank modal kerja Rp 30 miliar berbunga mengambang (saat ini 8.5%).',
        dilemma: 'Langkah taktis apa yang harus diambil divisi keuangan untuk mengamankan solvabilitas perusahaan?',
        choices: [
          {
            id: 'c1',
            text: 'Segera lakukan negosiasi konversi ke pinjaman suku bunga tetap (fixed rate) atau gunakan fasilitas Interest Rate Swap (IRS) untuk mengunci bunga di angka 9.5%.',
            consequence: 'Ketika suku bunga mengambang pasar meroket ke 11%, perusahaan Anda terlindungi dan menghemat beban bunga miliaran rupiah.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Mengunci suku bunga tetap (hedging bunga) sebelum siklus pengetatan agresif terjadi melindungi margin laba dari erosi biaya keuangan.'
          },
          {
            id: 'c2',
            text: 'Biarkan utang tetap berada pada bunga mengambang karena berharap bank sentral akan berubah pikiran dan membatalkan kenaikan suku bunga.',
            consequence: 'Beban bunga bulanan melonjak Rp 62,5 juta per bulan, arus kas tertekan dan melanggar rasio kovenan utang bank.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Bertaruh melawan komitmen bank sentral saat inflasi tinggi adalah tindakan spekulatif yang membahayakan neraca perusahaan.'
          },
          {
            id: 'c3',
            text: 'Gunakan seluruh kas darurat untuk melunasi utang pokok Rp 30 miliar seketika tanpa menyisakan saldo di rekening bank.',
            consequence: 'Beban bunga hilang, namun perusahaan mengalami krisis likuiditas mendadak dan tak mampu membayar gaji karyawan bulan berikutnya.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Melunasi utang dengan mengorbankan likuiditas operasional kas menciptakan risiko kematian bisnis akibat gagal bayar jangka pendek.'
          },
          {
            id: 'c4',
            text: 'Tambah utang baru sebesar Rp 20 miliar lagi untuk membeli saham-saham dividen tinggi di bursa.',
            consequence: 'Pasar saham anjlok akibat kenaikan suku bunga diskonto, nilai portofolio menyusut drastis sementara beban bunga utang berlipat ganda.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Mengambil leverage utang untuk berspekulasi di pasar ekuitas saat siklus kenaikan suku bunga adalah bunuh diri finansial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-3',
          question: 'Bagaimana kenaikan suku bunga acuan bank sentral secara teoritis memengaruhi valuasi harga saham perusahaan di bursa efek?',
          options: [
            'Menaikkan valuasi saham karena laba bunga tabungan perusahaan meningkat drastis.',
            'Menurunkan valuasi saham karena tingkat diskonto (WACC) masa depan meningkat dan biaya bunga pinjaman menekan laba bersih.',
            'Tidak berpengaruh karena harga saham hanya ditentukan oleh tren media sosial.',
            'Membuat seluruh obligasi korporasi otomatis berubah status menjadi ekuitas.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Kenaikan suku bunga menaikkan Risk-Free Rate, yang otomatis meningkatkan tingkat diskonto arus kas masa depan dan menaikkan beban bunga pinjaman, menekan valuasi saham.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 2: INFLASI, NILAI TUKAR, & LIKUIDITAS GLOBAL
    // --------------------------------------------------------------------------
    {
      id: 'macro-2-1',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'TAHAP 2: Inflasi, Nilai Tukar & Likuiditas Global',
      label: 'Akar Penyebab Inflasi: Cost-Push vs Demand-Pull',
      domain: 'Ekonomi',
      summary: 'Diferensiasi fundamental antara guncangan biaya produksi sisi penawaran vs lonjakan daya beli moneter sisi permintaan, serta mekanisme erosi nilai kas fiat.',
      x: 480,
      y: 120,
      level: 1,
      prerequisiteId: 'macro-1-3',
      microContent: {
        mentalModel: 'Quantity Theory of Money ($M \\cdot V = P \\cdot Y$) & Supply-Demand Elasticity',
        analogy: 'Bayangkan Anda berada di sebuah pasar ikan di pulau kecil. Jika para nelayan gagal melaut karena badai topan dan tangkapan ikan berkurang 70%, harga ikan melonjak karena kelangkaan fisik barang — ini adalah Cost-Push Inflation (kejutan pasokan). Sebaliknya, jika cuaca cerah dan tangkapan ikan normal, tetapi helikopter pemerintah tiba-tiba membagikan uang tunai Rp 10 juta ke setiap warga pulau, harga lelang ikan tetap melonjak karena semua orang berebut membeli ikan dengan uang baru — ini adalah Demand-Pull Inflation (ekspansi uang mengejar barang yang sama).',
        academicInsight: 'Milton Friedman menegaskan: "Inflation is always and everywhere a monetary phenomenon." Persamaan moneter Irving Fisher $M \\cdot V = P \\cdot Y$ menunjukkan bahwa jika jumlah uang beredar ($M$) tumbuh lebih cepat daripada pertumbuhan output riil ($Y$), tingkat harga umum ($P$) niscaya naik kecuali jika terjadi keruntuhan kecepatan perputaran uang ($V$). Bahaya terbesar inflasi adalah Wage-Price Spiral: kenaikan harga barang memicu tuntutan kenaikan upah buruh, yang kemudian dibebankan pengusaha kembali ke harga barang, menciptakan lingkaran setan inflasi kronis.',
        crossDisciplinary: {
          connectionText: 'Makroekonomi Moneter x Psikologi Ilusi Uang',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Money Illusion (Irving Fisher): Manusia cenderung merayakan kenaikan gaji nominal 10% di rekening bank mereka, tanpa menyadari bahwa inflasi 12% secara diam-diam memiskinkan daya beli riil mereka.',
        },
        caseStudy: {
          companyOrFigure: 'Hiperinflasi Republik Weimar (1923) vs Zimbabwe (2008)',
          story: 'Ketika Republik Weimar mencetak uang kertas Mark untuk membayar ganti rugi Perang Dunia I dan mendanai pemogokan buruh Ruhr, nilai mata uang hancur total. Harga secangkir kopi naik dari ribuan Mark menjadi milyaran Mark dalam hitungan jam. Uang tunai kehilangan fungsinya sebagai penyimpan nilai dan alat tukar, memaksa masyarakat kembali ke sistem barter fisik.',
          takeaway: 'Menyimpan kekayaan jangka panjang dalam kas fiat murni di luar dana operasional adalah taruhan pasti terhadap kepunahan daya beli riil.'
        },
        actionableSteps: [
          'Ukur Personal & Business CPI: lacak inflasi riil pos biaya terbesar Anda (sewa, gaji, bahan baku, energi) bukan sekadar inflasi statistik umum.',
          'Terapkan kontrak harga dinamis dengan klausul eskalasi harga otomatis pada kontrak klien jangka panjang.',
          'Konversikan cadangan kas menganggur jangka panjang ke dalam aset produktif berdaya tahan inflasi (*pricing power equities* atau properti produktif).'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Penetapan Harga: Menghadapi Kenaikan Biaya Bahan Baku 18%',
        context: 'Perusahaan F&B Anda dihantam lonjakan harga gandum dan minyak nabati impor sebesar 18% akibat perang geopolitik dan kekeringan global. Margin kotor perusahaan menipis dari 35% menjadi 17%.',
        dilemma: 'Strategi harga dan operasional apa yang harus diterapkan tanpa kehilangan pangsa pasar ke pesaing?',
        choices: [
          {
            id: 'c1',
            text: 'Langsung naikkan harga jual eceran 25% seketika tanpa mengubah kemasan atau nilai tambah produk.',
            consequence: 'Volume penjualan anjlok 40% karena konsumen kaget dan berpindah ke merek alternatif yang belum menaikkan harga.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Kenaikan harga mendadak tanpa strategi komunikasi atau modifikasi penawaran memicu resistensi konsumen elastis.'
          },
          {
            id: 'c2',
            text: 'Pertahankan harga lama 100% dan tanggung seluruh kerugian margin dari kantong kas perusahaan demi loyalitas pelanggan.',
            consequence: 'Dalam 6 bulan, cadangan kas habis tergerus dan perusahaan terpaksa melakukan PHK massal karyawan.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menyerap inflasi bahan baku struktural dengan membakar kas operasional adalah strategi menuju kebangkrutan.'
          },
          {
            id: 'c3',
            text: 'Terapkan strategi Shrinkflation (kurangi gramatur 10% dengan harga tetap), luncurkan paket bundling premium bernilai tinggi, dan kunci kontrak bahan baku 6 bulan ke depan.',
            consequence: 'Margin kotor pulih ke 30%, persepsi harga konsumen tetap terjaga stabil, dan risiko pasokan bahan baku terkunci aman.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Menggabungkan rekayasa ukuran produk (shrinkflation), diversifikasi portofolio harga, dan kontrak lindung pasokan adalah respon terbaik menghadapi inflasi biaya.'
          },
          {
            id: 'c4',
            text: 'Ganti 100% bahan baku utama dengan bahan berkualitas rendah yang murah tanpa menguji kelayakan rasa.',
            consequence: 'Kualitas rasa rusak fatal, pelanggan setia merasa dikhianati dan reputasi merek hancur di ulasan publik.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Menghancurkan kualitas inti produk demi efisiensi biaya merusak parit pertahanan ekonomi (brand moat) jangka panjang.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-4',
          question: 'Apa perbedaan mendasar antara Demand-Pull Inflation dan Cost-Push Inflation dalam analisis makroekonomi?',
          options: [
            'Demand-Pull dipicu oleh defisit neraca dagang, sedangkan Cost-Push dipicu oleh suku bunga deposito tinggi.',
            'Demand-Pull terjadi ketika agregat permintaan uang mengejar barang melebihi kapasitas produksi, sedangkan Cost-Push terjadi akibat lonjakan biaya produksi atau gangguan pasokan.',
            'Demand-Pull hanya terjadi di negara maju, sedangkan Cost-Push hanya terjadi di negara berkembang.',
            'Demand-Pull menurunkan harga barang, sedangkan Cost-Push menaikkan jumlah uang beredar fisik.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Demand-pull inflation ditarik oleh lonjakan permintaan belanja moneter ($Aggregate Demand > Aggregate Supply$), sedangkan cost-push inflation didorong oleh kenaikan biaya input produksi di sisi penawaran.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 2.2: MEKANISME NILAI TUKAR & DEVALUASI RUPIAH
    // --------------------------------------------------------------------------
    {
      id: 'macro-2-2',
      stepNumber: 'Langkah 2.2',
      stageTitle: 'TAHAP 2: Inflasi, Nilai Tukar & Likuiditas Global',
      label: 'Mekanisme Nilai Tukar (Forex) & Devaluasi Mata Uang',
      domain: 'Ekonomi',
      summary: 'Dinamika pergerakan kurs Rupiah terhadap USD: Neraca pembayaran, selisih suku bunga riil (*Interest Rate Parity*), dan trilema kebijakan Mundell-Fleming.',
      x: 480,
      y: 270,
      level: 2,
      prerequisiteId: 'macro-2-1',
      microContent: {
        mentalModel: 'Uncovered Interest Rate Parity & The Mundell-Fleming Impossible Trinity',
        analogy: 'Nilai tukar mata uang sebuah negara bagaikan harga saham dari kinerja perekonomian negara tersebut. Jika investor global melihat sebuah negara memiliki pertumbuhan ekonomi solid, neraca dagang surplus, dan suku bunga obligasi riil yang menarik, modal asing akan membanjiri masuk (*capital inflow*), menukar dolar mereka ke mata uang lokal dan memperkuat kurs. Sebaliknya, jika suku bunga AS naik tinggi dan risiko domestik meningkat, modal asing berbalik keluar (*capital outflow*), melemahkan mata uang lokal bagaikan pemegang saham menjual kepemilikan mereka.',
        academicInsight: 'Nilai tukar ditentukan oleh interaksi Neraca Transaksi Berjalan (Current Account), Neraca Modal & Finansial, serta selisih suku bunga riil (*Real Interest Rate Differential*). Konsep Mundell-Fleming Impossible Trinity membuktikan bahwa suatu negara tidak dapat secara simultan memiliki tiga hal: (1) Nilai tukar tetap, (2) Arus modal bebas, dan (3) Kebijakan moneter independen. Indonesia memilih nilai tukar mengambang terkendali (*managed floating*) dengan arus modal bebas, sehingga Bank Indonesia harus menggunakan cadangan devisa dan suku bunga acuan untuk mencegah volatilitas liar kurs Rupiah.',
        crossDisciplinary: {
          connectionText: 'Geopolitik Mata Uang x Neraca Korporat',
          domains: ['Ekonomi', 'Geopolitik'],
          insight: 'Hegemoni Petrodollar: Selama komoditas energi global dan perdagangan dunia mayoritas ditransaksikan dalam USD, permintaan struktural terhadap Dolar AS akan selalu memberikan kekuatan *exorbitant privilege* bagi Amerika Serikat.',
        },
        caseStudy: {
          companyOrFigure: 'Krisis Moneter Asia 1997/1998 (Kejatuhan Rupiah)',
          story: 'Sebelum 1997, Rupiah dipatok secara merayap (*crawling peg*) terhadap USD di kisaran Rp 2.500. Banyak korporasi Indonesia mengambil utang valas USD berbunga rendah tanpa lindung nilai (hedging) karena mengira kurs akan stabil selamanya. Ketika spekulan menyerang mata uang Baht Thailand dan merembet ke Indonesia, cadangan devisa BI terkuras dan pasak kurs dilepas. Rupiah runtuh hingga Rp 16.800 per USD. Korporasi yang berpenghasilan Rupiah namun berutang USD mengalami kebangkrutan massal seketika.',
          takeaway: 'Mencampur pendapatan mata uang lokal dengan utang tanpa lindung nilai dalam mata uang asing adalah resep instan menuju kebangkrutan saat krisis kurs.'
        },
        actionableSteps: [
          'Audit eksposur valuta asing (FX Exposure): hitung persentase bahan baku impor vs proporsi pendapatan dalam mata uang asing.',
          'Buka rekening multi-currency (USD/CNY) untuk menampung pendapatan ekspor guna memitigasi biaya konversi berulang (*spread valas*).',
          'Terapkan lindung nilai alami (Natural Hedging): imbangi kewajiban pembayaran valas dengan pendapatan valas atau instrumen lindung nilai perbankan.'
        ],
        difficulty: 'Menengah',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Valas Manufaktur: Depresiasi Rupiah dari Rp 15.500 ke Rp 16.500 per USD',
        context: 'Pabrik farmasi Anda mengimpor 70% bahan aktif obat dalam USD, namun seluruh produk obat jadi dijual dalam Rupiah di pasar domestik dengan batas harga eceran tertinggi regulasi pemerintah. Dolar AS menguat tajam terhadap Rupiah sebesar 6.5% dalam 3 bulan.',
        dilemma: 'Langkah taktis apa yang harus diambil untuk mencegah kerugian operasional akibat selisih kurs?',
        choices: [
          {
            id: 'c1',
            text: 'Lakukan kontrak Forward Valas 6 bulan ke depan dengan perbankan untuk mengunci kurs USD di angka saat ini dan negosiasikan substitusi bahan baku lokal.',
            consequence: 'Kepastian harga pokok produksi terkunci aman, margin laba terlindungi dari pelemahan lanjutan Rupiah, dan ketergantungan impor berkurang.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Hedging instrumen forward valas dikombinasikan dengan substitusi rantai pasok lokal adalah pertahanan terbaik melawan volatilitas forex.'
          },
          {
            id: 'c2',
            text: 'Tunda seluruh pembayaran invoice impor bahan baku selama 6 bulan ke depan dengan harapan Rupiah akan menguat kembali ke Rp 14.000.',
            consequence: 'Pemasok luar negeri menghentikan pengiriman bahan baku karena wanprestasi, pabrik berhenti beroperasi, dan penalti denda membengkak.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Menunda utang jatuh tempo valas secara sepihak berdasarkan harapan spekulatif kurs merusak rantai pasok dan reputasi internasional.'
          },
          {
            id: 'c3',
            text: 'Hentikan total produksi obat domestik dan simpan seluruh modal kerja tunai dalam bentuk mata uang kripto yang volatil.',
            consequence: 'Perusahaan kehilangan izin edar dari otoritas kesehatan dan modal kerja tergerus oleh kejatuhan harga pasar kripto.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Menyerahkan modal kerja bisnis nyata ke aset spekulatif berisiko tinggi saat krisis adalah kecerobohan fatal manajemen.'
          },
          {
            id: 'c4',
            text: 'Langsung langgar ketentuan harga regulasi pemerintah dan jual obat di atas batas eceran tertinggi.',
            consequence: 'Produk disita oleh pihak berwajib, perusahaan dikenai denda pidana dan izin usaha dicabut.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Melanggar regulasi kepatuhan hukum menciptakan risiko pidana yang menghancurkan kelangsungan hidup badan usaha.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-5',
          question: 'Menurut teori The Impossible Trinity (Mundell-Fleming), opsi kebijakan moneter mana yang tidak mungkin dicapai secara bersamaan oleh sebuah negara?',
          options: [
            'Pajak rendah, surplus anggaran belanja, dan cadangan devisa emas.',
            'Nilai tukar tetap, arus modal bebas lintas batas, dan kebijakan moneter domestik yang independen.',
            'Tingkat pengangguran nol, inflasi nol, dan suku bunga deposito nol.',
            'Ekspor mineral mentah, impor barang mewah, dan upah minimum tinggi.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Impossible Trinity membuktikan bahwa pembuat kebijakan hanya bisa memilih 2 dari 3 pilar: Nilai tukar tetap, Aliran modal bebas, atau Kebijakan moneter independen.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 2.3: QUANTITATIVE EASING & PENCETAKAN UANG
    // --------------------------------------------------------------------------
    {
      id: 'macro-2-3',
      stepNumber: 'Langkah 2.3',
      stageTitle: 'TAHAP 2: Inflasi, Nilai Tukar & Likuiditas Global',
      label: 'Quantitative Easing (QE) & Ekspansi Likuiditas Global',
      domain: 'Ekonomi',
      summary: 'Bagaimana bank sentral mencetak uang secara elektronik via pembelian obligasi, memicu inflasi harga aset finansial, dan fenomena Efek Cantillon.',
      x: 480,
      y: 420,
      level: 2,
      prerequisiteId: 'macro-2-2',
      microContent: {
        mentalModel: 'Cantillon Effect & Central Bank Asset Purchases (QE vs QT)',
        analogy: 'Quantitative Easing (QE) sering disalahpahami sebagai helikopter yang menjatuhkan uang fisik ke halaman rumah warga. Faktanya, QE adalah proses di mana bank sentral menciptakan cadangan uang elektronik baru dari ketiadaan (out of thin air) untuk membeli surat utang negara dan obligasi hipotek bernilai triliunan dolar dari bank-bank investasi dan institusi keuangan raksasa. Bank-bank tersebut kini memegang tumpukan kas likuid raksasa dan menyalurkannya ke pasar modal, mendongkrak harga saham, obligasi korporat, properti mewah, dan venture capital.',
        academicInsight: 'Ketika suku bunga jangka pendek telah mencapai batas nol (Zero Lower Bound), kebijakan moneter konvensional lumpuh. QE bekerja dengan menekan yield obligasi jangka panjang dan premi risiko (*term premium*). Mekanisme ini memaksa investor mencari imbal hasil lebih tinggi pada aset berisiko (*Portfolio Rebalancing Channel*). Namun, QE memicu efek samping struktural yang dijelaskan oleh Richard Cantillon (Cantillon Effect): pihak yang menerima uang baru pertama kali (institusi keuangan, pemilik aset saham dan properti) menikmati kekayaan berlipat ganda sebelum harga barang konsumen naik, sedangkan masyarakat kelas pekerja yang menerima uang terakhir mengalami pemiskinan daya beli riil.',
        crossDisciplinary: {
          connectionText: 'Injeksi Likuiditas x Ketimpangan Sosial',
          domains: ['Ekonomi', 'Psikologi'],
          insight: 'Asset Wealth Gap: QE secara langsung memperlebar jurang kekayaan antara pemilik aset modal (kapitalis) dengan pekerja upahan, karena aset finansial melesat jauh melampaui pertumbuhan gaji riil.',
        },
        caseStudy: {
          companyOrFigure: 'Injeksi Likuiditas Darurat COVID-19 The Fed (Maret 2020)',
          story: 'Saat pasar finansial global beku akibat kepanikan pandemi pada Maret 2020, The Fed mengumumkan program QE tanpa batas (Unlimited QE). Neraca The Fed membengkak hampir $5 triliun hanya dalam hitungan minggu. Likuiditas melimpah ini memicu reli pasar saham paling cepat dalam sejarah: indeks Nasdaq dan S&P 500 mencetak rekor tertinggi sepanjang masa di tengah kondisi ekonomi riil yang lumpuh dan angka pengangguran jutaan orang.',
          takeaway: 'Harga aset finansial sering kali lebih ditentukan oleh kondisi pasokan likuiditas moneter global daripada kesehatan ekonomi riil jangka pendek.'
        },
        actionableSteps: [
          'Pantau ukuran neraca The Fed (Total Assets) dan tren Reverse Repo Facility (RRP) sebagai barometer likuiditas global.',
          'Pahami transisi dari QE (ekspansi likuiditas) ke QT (Quantitative Tightening - penarikan likuiditas) untuk menyesuaikan alokasi portofolio investasi.',
          'Miliki aset modal berdaya tahan inflasi aset (ekuitas perusahaan berparit kokoh, properti strategis, emas fisik).'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Alokasi Portofolio: Transisi Kebijakan dari QE ke Quantitative Tightening (QT)',
        context: 'Bank sentral global mengumumkan penghentian program QE dan mulai menjual obligasi dari neracanya (Quantitative Tightening senilai $95 miliar/bulan) untuk menyerap likuiditas dan menekan inflasi yang membandel. Pasar saham dan kripto telah terkoreksi 15%.',
        dilemma: 'Bagaimana restrukturisasi portofolio investasi dan kas perusahaan menghadapi fase penarikan likuiditas global?',
        choices: [
          {
            id: 'c1',
            text: 'Alihkan modal dari saham-saham teknologi bertumbuh tinggi tanpa laba (unprofitable growth) ke obligasi negara bertenor pendek dan saham bernilai (value stocks) berarus kas positif kuat.',
            consequence: 'Portofolio terlindungi dari guncangan kontraksi likuiditas, menghasilkan pendapatan bunga tinggi bebas risiko, dan siap menampung aset murah saat dasar pasar terbentuk.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Saat likuiditas ditarik (QT), aset spekulatif bervaluasi tinggi tanpa arus kas riil adalah yang paling menderita; kas berimbal hasil dan saham bernilai menjadi pemenang.'
          },
          {
            id: 'c2',
            text: 'Gunakan seluruh sisa kas untuk membeli opsi leverage call pada saham-saham spekulatif yang paling anjlok dengan harapan rebound seketika.',
            consequence: 'Pengetatan likuiditas terus berlanjut, saham spekulatif turun lebih dalam 50%, seluruh modal opsi hangus kedaluwarsa.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Melawan arah penarikan likuiditas bank sentral (Don’t fight the Fed) dengan instrumen leverage berisiko adalah spekulasi bunuh diri.'
          },
          {
            id: 'c3',
            text: 'Tarik seluruh uang dari perbankan dan simpan uang tunai fisik di brankas kantor tanpa instrumen bunga sama sekali.',
            consequence: 'Uang tunai fisik mengendap tanpa menghasilkan imbal hasil di tengah inflasi tinggi dan menghadapi risiko keamanan pencurian fisik.',
            scoreBonus: -10,
            isOptimal: false,
            explanation: 'Menyimpan kas fisik mengabaikan imbal hasil instrumen pasar uang berisiko nol yang sedang menawarkan yield tinggi saat pengetatan moneter.'
          },
          {
            id: 'c4',
            text: 'Beli properti di daerah terpencil tanpa akses infrastruktur hanya karena harganya murah.',
            consequence: 'Aset tidak likuid, sulit disewakan, dan membebani arus kas dengan biaya pemeliharaan dan pajak bumi bangunan.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Membeli aset tidak likuid tanpa arus kas sewa di tengah kenaikan biaya modal memperburuk fleksibilitas finansial.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-6',
          question: 'Bagaimana fenomena Efek Cantillon (Cantillon Effect) menjelaskan dampak pencetakan uang bank sentral (QE) terhadap ketimpangan ekonomi?',
          options: [
            'Uang baru dibagikan secara merata kepada seluruh penduduk miskin sehingga kesenjangan sosial lenyap.',
            'Pihak yang menerima uang baru pertama kali (institusi finansial dan pemilik aset) dapat membeli aset pada harga lama sebelum inflasi merebak, sementara penerima terakhir mengalami erosi daya beli riil.',
            'Pencetakan uang otomatis menurunkan harga seluruh rumah mewah dan perhiasan.',
            'Uang baru langsung diserap oleh sektor pertanian tradisional tanpa melewati sistem perbankan.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Efek Cantillon menjelaskan bahwa injeksi uang tidak netral; entitas yang paling dekat dengan sumber pencetakan uang membelanjakannya sebelum harga-harga naik, memperkaya pemilik aset modal dengan mengorbankan penerima upah tetap.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 3: VALUASI KORPORAT & INVESTASI LANJUTAN (VALUATION & DCF)
    // --------------------------------------------------------------------------
    {
      id: 'macro-3-1',
      stepNumber: 'Langkah 3.1',
      stageTitle: 'TAHAP 3: Valuasi Korporat & Investasi Lanjutan',
      label: 'Nilai Waktu Uang & Hurdle Rate (WACC)',
      domain: 'Keuangan',
      summary: 'Konsep fundamental Time Value of Money dan formulasi Weighted Average Cost of Capital (WACC) sebagai batas minimal pengembalian investasi.',
      x: 780,
      y: 120,
      level: 2,
      prerequisiteId: 'macro-2-3',
      microContent: {
        mentalModel: 'Time Value of Money ($PV = FV / (1+r)^t$) & Hurdle Rate of Capital',
        analogy: 'Uang Rp 100 juta hari ini jauh lebih berharga daripada uang Rp 100 juta yang dijanjikan 5 tahun lagi, karena uang hari ini dapat diinvestasikan untuk menghasilkan bunga, bebas dari risiko gagal bayar, dan terlindung dari pengikisan inflasi. Biaya Modal Rata-Rata Tertimbang (WACC) bertindak seperti batas mistar loncat tinggi atletik bagi seorang CEO: setiap proyek bisnis baru yang menghasilkan pengembalian modal di bawah mistar WACC sebenarnya sedang menghancurkan kekayaan pemegang saham secara diam-diam.',
        academicInsight: 'Formulasi WACC menggabungkan biaya ekuitas dan biaya utang setelah pajak: $WACC = (E/V \\cdot K_e) + (D/V \\cdot K_d \\cdot (1 - T))$. Biaya ekuitas ($K_e$) dihitung via Capital Asset Pricing Model (CAPM): $K_e = R_f + \\beta(R_m - R_f)$. Nilai $R_f$ adalah suku bunga obligasi pemerintah bebas risiko, $\\beta$ mengukur volatilitas saham terhadap pasar, dan $(R_m - R_f)$ adalah premi risiko ekuitas. Penghematan pajak bunga utang ($1 - T$) memberikan keuntungan perisai pajak (*tax shield*), namun leverage utang yang berlebihan akan menaikkan risiko gagal bayar dan melontarkan WACC ke atas.',
        crossDisciplinary: {
          connectionText: 'Keuangan Korporat x Akuntabilitas Manajemen',
          domains: ['Keuangan', 'Bisnis'],
          insight: 'Economic Value Added (EVA): Laba akuntansi positif bukanlah jaminan kesuksesan. Jika laba operasional setelah pajak (NOPAT) lebih kecil daripada biaya modal total ($Capital \\times WACC$), perusahaan tersebut sedang merusak nilai riil pemegang saham.',
        },
        caseStudy: {
          companyOrFigure: 'Kehancuran Modal Perusahaan Telekomunikasi Global saat Bubble Dot-Com (2000)',
          story: 'Pada akhir 1990-an, raksasa telekomunikasi seperti WorldCom dan Nortel meminjam ratusan miliar dolar untuk menggelar jaringan serat optik bawah laut dengan asumsi trafik internet berlipat 10x setiap tahun. Pengembalian riil (ROIC) proyek-proyek tersebut hanya 3-4%, sementara WACC mereka di atas 11%. Jurang negatif penghancur nilai modal ini memicu kebangkrutan telekomunikasi terbesar dalam sejarah.',
          takeaway: 'Pertumbuhan omzet tanpa pengembalian modal di atas WACC hanyalah akselerasi menuju kehancuran modal.'
        },
        actionableSteps: [
          'Hitung WACC aktual bisnis Anda: masukkan biaya bunga riil pinjaman bank dan ekspektasi imbal hasil minimum ekuitas pemilik modal.',
          'Gunakan WACC sebagai tingkat diskonto (Hurdle Rate) sebelum menyetujui anggaran belanja modal (Capex) mesin atau cabang baru.',
          'Hentikan unit bisnis atau lini produk yang menghasilkan pengembalian modal di bawah biaya WACC perusahaan.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Alokasi Capex: Menilai Proyek Pabrik Baru Rp 50 Miliar',
        context: 'Direksi mengusulkan pembangunan pabrik baru senilai Rp 50 miliar dengan estimasi pengembalian internal (IRR) sebesar 10.5% per tahun. Struktur modal perusahaan terdiri dari 60% utang (bunga 9%, pajak 22%) dan 40% ekuitas (ekspektasi imbal hasil pemegang saham 16%).',
        dilemma: 'Berdasarkan analisis WACC dan penciptaan nilai, apakah proyek ekspansi ini layak disetujui?',
        choices: [
          {
            id: 'c1',
            text: 'Tolak proyek ekspansi karena WACC perusahaan adalah 10.61% ($0.60 \\times 9\\% \\times 0.78 + 0.40 \\times 16\\%$), sehingga proyek dengan IRR 10.5% menghancurkan nilai pemegang saham.',
            consequence: 'Perusahaan terhindar dari pemborosan modal, mempertahankan likuiditas kas, dan mengalokasikan dana ke proyek alternatif ber-IRR lebih tinggi.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Keputusan finansial yang disiplin menolak proyek yang tidak mampu melampaui hurdle rate (IRR < WACC), menjaga kekayaan modal pemegang saham.'
          },
          {
            id: 'c2',
            text: 'Setujui proyek segera karena IRR 10.5% masih lebih tinggi daripada bunga deposito bank 5%.',
            consequence: 'Perusahaan mengorbankan modal ekuitas; pemegang saham tidak mendapatkan kompensasi risiko yang layak dan nilai perusahaan terdiskon di pasar.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Membandingkan proyek berisiko operasional dengan deposito perbankan adalah kesalahan fatal pemahaman biaya modal.'
          },
          {
            id: 'c3',
            text: 'Biayai proyek dengan menambah utang bank 100% tanpa ekuitas agar biaya modal terlihat lebih murah.',
            consequence: 'Rasio utang terhadap ekuitas (DER) melesat membahayakan, rating kredit perusahaan diturunkan, dan bank memberlakukan kovenan ketat.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Menambah utang secara berlebihan meningkatkan risiko kebangkrutan finansial dan melesatkan biaya modal utang berikutnya.'
          },
          {
            id: 'c4',
            text: 'Manipulasi angka proyeksi penjualan di lembar presentasi Excel agar IRR naik menjadi 18% untuk menyenangkan komisaris.',
            consequence: 'Ketika pabrik beroperasi dan target tidak tercapai, perusahaan mengalami arus kas negatif kronis dan direksi terancam gugatan hukum.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Memanipulasi asumsi kelayakan finansial adalah pelanggaran etika fiduciary duty yang berujung pada kerugian katastropik.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-7',
          question: 'Mengapa dalam rumus WACC biaya utang (Cost of Debt) dikalikan dengan faktor (1 - Tax Rate)?',
          options: [
            'Karena pemerintah memungut pajak langsung dari setiap pembayaran dividen pemegang saham.',
            'Karena beban bunga pinjaman diperlakukan sebagai pengurang penghasilan kena pajak dalam laporan keuangan (Interest Tax Shield).',
            'Karena bank komersial wajib menyetor bunga pinjaman ke kas negara.',
            'Karena utang tidak memiliki risiko gagal bayar jika dikurangi faktor pajak.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Beban bunga pinjaman merupakan biaya yang mengurangi penghasilan kena pajak (tax-deductible expense), sehingga biaya riil utang bagi perusahaan setelah penghematan pajak menjadi $K_d \\times (1 - T)$.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 3.2: VALUASI DISCOUNTED CASH FLOW (DCF)
    // --------------------------------------------------------------------------
    {
      id: 'macro-3-2',
      stepNumber: 'Langkah 3.2',
      stageTitle: 'TAHAP 3: Valuasi Korporat & Investasi Lanjutan',
      label: 'Valuasi Discounted Cash Flow (DCF) & Nilai Intrinsik',
      domain: 'Keuangan',
      summary: 'Proyeksi Free Cash Flow to Firm (FCFF), diskonto menggunakan WACC, estimasi Terminal Value Gordon Growth, dan Margin of Safety.',
      x: 780,
      y: 270,
      level: 3,
      prerequisiteId: 'macro-3-1',
      microContent: {
        mentalModel: 'Intrinsic Value, Discounted Cash Flow & Margin of Safety (Warren Buffett)',
        analogy: 'Membeli sebuah bisnis atau saham perusahaan sama persis seperti membeli seekor angsa petelur emas. Anda tidak menilai angsa tersebut dari kilau bulunya atau opini orang di pasar burung, melainkan dari berapa banyak telur emas murni (Free Cash Flow) yang bisa ia hasilkan selama sisa hidupnya, didiskontokan ke nilai hari ini dengan memperhitungkan faktor risiko angsa itu sakit. Jika nilai sekarang dari semua telur emas masa depan tersebut adalah Rp 10 juta, dan pemiliknya rela menjual angsa itu di harga Rp 6 juta di pasar, Anda memiliki Margin of Safety sebesar 40%.',
        academicInsight: 'Model Valuasi DCF menghitung Enterprise Value ($EV$) sebagai jumlah arus kas bebas masa depan yang didiskontokan dengan WACC ditambah Terminal Value ($TV$): $EV = \\sum_{t=1}^{n} \\frac{FCFF_t}{(1+WACC)^t} + \\frac{TV}{(1+WACC)^n}$. Arus kas bebas perusahaan dihitung sebagai: $FCFF = EBIT(1-T) + Depresiasi - \\Delta NWC - Capex$. Terminal Value umumnya diestimasi menggunakan Gordon Growth Model: $TV = \\frac{FCFF_{n+1}}{WACC - g}$, di mana $g$ adalah tingkat pertumbuhan abadi yang tidak boleh melebihi pertumbuhan PDB jangka panjang (biasanya 2-3%). Nilai ekuitas diperoleh dengan mengurangkan total utang bersih dari Enterprise Value.',
        crossDisciplinary: {
          connectionText: 'Valuasi Finansial x Psikologi Keserakahan Pasar',
          domains: ['Keuangan', 'Psikologi'],
          insight: 'Mr. Market (Benjamin Graham): Pasar saham adalah mitra bisnis yang emosional. Kadang ia terlalu antusias dan mematok harga jauh di atas nilai intrinsik DCF, kadang ia depresi dan menawarkan saham di harga obral jauh di bawah nilai wajar.',
        },
        caseStudy: {
          companyOrFigure: 'Akuisisi Beats Electronics oleh Apple ($3 Miliar - 2014) vs Gelembung WeWork ($47 Miliar - 2019)',
          story: 'Apple mengakuisisi Beats berdasarkan valuasi DCF konservatif dari arus kas langganan streaming musik dan margin kotor perangkat keras premiumnya, yang terbukti melipatgandakan layanan Apple Music. Sebaliknya, investor SoftBank memompa valuasi WeWork hingga $47 miliar berdasarkan metrik fiktif "Community Adjusted EBITDA" tanpa ada arus kas riil. Saat prospektus IPO membongkar komitmen sewa jangka panjang raksasa tanpa laba, valuasi WeWork runtuh 95% hingga akhirnya pailit.',
          takeaway: 'Laba akuntansi dan metriks buatan bisa dimanipulasi, tetapi Arus Kas Bebas (Free Cash Flow) yang masuk ke rekening bank adalah kebenaran absolut.'
        },
        actionableSteps: [
          'Bangun model 3-statement financial model untuk memproyeksikan Free Cash Flow to Firm (FCFF) 5 tahun ke depan.',
          'Lakukan analisis sensitivitas (Sensitivity Table) terhadap variabel WACC dan Terminal Growth Rate ($g$).',
          'Terapkan Margin of Safety minimal 25-30% di bawah nilai intrinsik DCF sebelum melakukan aksi beli saham atau akuisisi bisnis.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema M&A: Valuasi Target Akuisisi Rp 80 Miliar vs Ekspektasi Penjual Rp 110 Miliar',
        context: 'Perusahaan Anda berencana mengakuisisi kompetitor rantai logistik. Hasil pemodelan DCF konservatif Anda menghasilkan nilai wajar intrinsik Rp 80 miliar (WACC 11%, Terminal Growth 2.5%). Namun, pemilik perusahaan target bersikukuh meminta harga Rp 110 miliar berdasarkan kelipatan valuasi pasar startup yang sedang hype.',
        dilemma: 'Langkah negosiasi dan penilaian apa yang harus diambil oleh komite investasi?',
        choices: [
          {
            id: 'c1',
            text: 'Tolak penawaran Rp 110 miliar, tawarkan struktur pembayaran earn-out: Rp 75 miliar tunai di depan + bonus kontingen hingga Rp 25 miliar jika target EBITDA 2 tahun tercapai.',
            consequence: 'Risiko valuasi overvalued terisolasi, kas perusahaan aman, dan pemilik target termotivasi membuktikan proyeksi labanya pasca-akuisisi.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Struktur earn-out menjembatani jurang ekspektasi valuasi DCF dan melindungi pembeli dari optimisme palsu penjual.'
          },
          {
            id: 'c2',
            text: 'Langsung setujui harga Rp 110 miliar dengan menerbitkan utang baru karena takut kompetitor lain merebut target.',
            consequence: 'Perusahaan mencatat goodwill raksasa yang rentan impairment, terbebani cicilan utang, dan pengembalian investasi berada di bawah biaya modal.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Membayar harga di atas nilai intrinsik DCF akibat emosi FOMO (Fear of Missing Out) adalah penyebab utama kegagalan M&A.'
          },
          {
            id: 'c3',
            text: 'Ubah tingkat diskonto WACC dalam model DCF Anda secara sepihak dari 11% menjadi 7% agar nilai intrinsik melonjak menjadi Rp 115 miliar.',
            consequence: 'Model finansial menjadi bias dan tidak valid, membohongi dewan komisaris dan menjustifikasi investasi berisiko tinggi.',
            scoreBonus: -30,
            isOptimal: false,
            explanation: 'Memanipulasi tingkat diskonto untuk menyesuaikan harga penjual adalah pelanggaran integritas analisis finansial.'
          },
          {
            id: 'c4',
            text: 'Batalkan negosiasi seketika dengan menghina penjual tanpa menawarkan alternatif struktur kesepakatan.',
            consequence: 'Hubungan bisnis rusak, perusahaan kehilangan peluang sinergi strategis yang sebenarnya bisa diselesaikan lewat skema earn-out.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Menutup pintu negosiasi tanpa eksplorasi skema pembayaran kontingen membuang potensi nilai sinergi bisnis.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-8',
          question: 'Mengapa tingkat pertumbuhan terminal (Terminal Growth Rate - g) dalam model Gordon Growth DCF tidak boleh melampaui pertumbuhan PDB jangka panjang?',
          options: [
            'Karena peraturan Otoritas Jasa Keuangan melarang perusahaan bertumbuh lebih cepat daripada inflasi.',
            'Karena secara matematis jika sebuah perusahaan bertumbuh lebih cepat daripada PDB selamanya, pada akhirnya ukuran perusahaan tersebut akan melampaui seluruh perekonomian dunia, yang merupakan asumsi mustahil.',
            'Karena pajak korporasi otomatis naik menjadi 50% jika pertumbuhan di atas PDB.',
            'Karena rumus Gordon Growth Model menghasilkan angka negatif jika $g > WACC$.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Asumsi tingkat pertumbuhan abadi ($g$) harus realistis dan dibatasi di bawah atau setara pertumbuhan ekonomi makro jangka panjang (PDB sekitar 2-3%), jika tidak model mengasumsikan perusahaan akan menguasai seluruh dunia.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 3.3: RASIO KEUANGAN EKSEKUTIF (P/E, EV/EBITDA, ROIC)
    // --------------------------------------------------------------------------
    {
      id: 'macro-3-3',
      stepNumber: 'Langkah 3.3',
      stageTitle: 'TAHAP 3: Valuasi Korporat & Investasi Lanjutan',
      label: 'Rasio Keuangan Eksekutif: P/E, EV/EBITDA, & ROIC',
      domain: 'Keuangan',
      summary: 'Diferensiasi evaluasi kelipatan valuasi pasar (P/E vs EV/EBITDA) dan metrik efisiensi alokasi modal Return on Invested Capital (ROIC).',
      x: 780,
      y: 420,
      level: 3,
      prerequisiteId: 'macro-3-2',
      microContent: {
        mentalModel: 'Capital Efficiency Triad & DuPont Analysis Framework',
        analogy: 'Mengevaluasi perusahaan hanya dengan rasio Price-to-Earnings (P/E) bagaikan menilai kecepatan mobil balap hanya dari speedometer tanpa memeriksa apakah tangki bensinnya bocor atau mesinnya kepanasan. Laba akuntansi bersih (Earnings) sangat mudah dipoles lewat trik akuntansi dan utang leverage. Sebaliknya, Return on Invested Capital (ROIC) memeriksa seberapa efisien mesin mobil tersebut mengubah setiap liter bensin modal yang disuntikkan pemegang saham dan kreditur menjadi tenaga laba riil.',
        academicInsight: 'Price-to-Earnings ($P/E = Market Cap / Net Income$) mencerminkan berapa rupiah yang bersedia dibayar investor untuk setiap rupiah laba bersih saat ini. Namun, P/E mendistorsi perbandingan antarperusahaan karena tidak memperhitungkan struktur utang dan beban bunga. Rasio Enterprise Value to EBITDA ($EV/EBITDA$) menetralkan perbedaan struktur modal dan tarif pajak. Namun, metrik penentu kekayaan jangka panjang adalah $ROIC = NOPAT / Invested Capital$. Jika sebuah perusahaan memiliki ROIC 25% dan mampu mereinvestasikan 80% labanya pada tingkat pengembalian tersebut, labanya akan berlipat ganda setiap beberapa tahun tanpa membutuhkan suntikan utang baru (Compounder Machine).',
        crossDisciplinary: {
          connectionText: 'Analisis Rasio x Insentif Kompensasi Eksekutif',
          domains: ['Keuangan', 'Bisnis'],
          insight: 'Goodhart\'s Law: Ketika metrik EPS (Earnings Per Share) dijadikan satu-satunya target bonus CEO, eksekutif cenderung meminjam utang untuk buyback saham demi mendongkrak EPS sesaat dengan mengorbankan ROIC jangka panjang.',
        },
        caseStudy: {
          companyOrFigure: 'Microsoft vs General Electric (2000-2023): Kemenangan Disiplin ROIC Tinggi',
          story: 'Di bawah Jack Welch dan Jeffrey Immelt, General Electric mengejar pertumbuhan laba akuntansi agresif lewat rekayasa keuangan GE Capital dan utang masif, namun ROIC operasional industri dasarnya sangat rendah. Saat krisis 2008 menghantam, GE nyaris runtuh. Sebaliknya, Microsoft di bawah Satya Nadella memfokuskan alokasi modal pada layanan Cloud Azure dengan ROIC di atas 30%, melipatgandakan kapitalisasi pasar Microsoft hingga menembus $3 triliun.',
          takeaway: 'Perusahaan dengan ROIC tinggi dan peluang reinvestasi besar adalah pencipta kekayaan pemegang saham paling tangguh di dunia.'
        },
        actionableSteps: [
          'Hitung ROIC bisnis Anda: bagi NOPAT (Laba operasional setelah pajak) dengan Invested Capital (Total Ekuitas + Total Utang Berbunga - Kas Berlebih).',
          'Bandingkan kelipatan EV/EBITDA perusahaan dengan rata-rata 5 kompetitor terdekat di industri sejenis.',
          'Waspadai perusahaan dengan P/E rendah (Value Trap) jika penurunan tersebut disebabkan oleh penurunan struktural ROIC dan margin laba kotor.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Investasi Eksekutif: Memilih Antara Dua Kandidat Saham Target',
        context: 'Komite investasi perusahaan Anda harus memilih salah satu dari dua target investasi strategis: Perusahaan Alpha (P/E 7x, EV/EBITDA 5x, ROIC 5%, utang tinggi, industri komoditas siklikal) vs Perusahaan Beta (P/E 24x, EV/EBITDA 15x, ROIC 28%, utang nol, perangkat lunak B2B dengan parit switching cost kokoh).',
        dilemma: 'Saham mana yang memberikan nilai pengembalian risiko-terkoreksi (risk-adjusted return) terbaik untuk jangka panjang?',
        choices: [
          {
            id: 'c1',
            text: 'Pilih Perusahaan Beta meskipun kelipatan valuasi P/E-nya terlihat lebih mahal, karena ROIC 28% dan parit ekonomi kuat memastikan kemampuan compounding kekayaan jangka panjang.',
            consequence: 'Dalam 5 tahun, laba riil Perusahaan Beta tumbuh 300% dan nilai investasi berlipat ganda, membuktikan bahwa bisnis berkualitas tinggi layak dihargai premium.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Seperti ajaran Warren Buffett: "Jauh lebih baik membeli perusahaan luar biasa pada harga wajar, daripada membeli perusahaan biasa-biasa saja pada harga obral."'
          },
          {
            id: 'c2',
            text: 'Pilih Perusahaan Alpha semata-mata karena P/E 7x terlihat sangat murah (undervalued) di layar saham.',
            consequence: 'Harga komoditas turun, laba Perusahaan Alpha lenyap, utang menumpuk dan saham turun lebih dalam 60% (jebakan Value Trap).',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'P/E rendah pada perusahaan dengan ROIC buruk dan utang tinggi adalah jebakan nilai klasik (Value Trap) yang merusak modal.'
          },
          {
            id: 'c3',
            text: 'Bagi modal 50:50 secara acak tanpa menganalisis neraca kas dan kemampuan reinvestasi kedua perusahaan.',
            consequence: 'Portofolio terbebani oleh kinerja buruk Perusahaan Alpha yang menghapus keuntungan dari Perusahaan Beta.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Diversifikasi naif tanpa analisis kualitas alokasi modal adalah bentuk pelepasan tanggung jawab analitis.'
          },
          {
            id: 'c4',
            text: 'Gunakan seluruh dana untuk meminjamkan uang ke fintech ilegal dengan imbal hasil janji 5% per bulan.',
            consequence: 'Fintech kabur, pokok dana investasi hilang 100% dan tim manajemen terjerat kasus kelalaian perdata.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Tergiur skema ponzi imbal hasil tidak masuk akal adalah kegagalan paling mendasar dalam tata kelola keuangan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-9',
          question: 'Mengapa para manajer investasi kelas dunia lebih memprioritaskan metrik ROIC (Return on Invested Capital) daripada sekadar pertumbuhan laba bersih (Net Income Growth)?',
          options: [
            'Karena laba bersih tidak tercatat di laporan laba rugi tahunan.',
            'Karena pertumbuhan laba bersih bisa dicapai dengan menyuntikkan utang raksasa yang tidak efisien, sedangkan ROIC mengukur efisiensi riil setiap rupiah modal dalam menghasilkan laba operasional.',
            'Karena ROIC selalu membebaskan perusahaan dari kewajiban pajak badan.',
            'Karena metrik ROIC ditentukan langsung oleh bursa efek tanpa perlu dihitung.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pertumbuhan laba bersih yang membutuhkan suntikan modal sangat besar dengan pengembalian di bawah biaya modal justru menghancurkan nilai; ROIC mengukur efisiensi alokasi modal yang sebenarnya.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 4: MANAJEMEN RISIKO KEUANGAN & HEDGING
    // --------------------------------------------------------------------------
    {
      id: 'macro-4-1',
      stepNumber: 'Langkah 4.1',
      stageTitle: 'TAHAP 4: Manajemen Risiko Keuangan & Hedging',
      label: 'Likuiditas vs Solvabilitas & Cash Conversion Cycle',
      domain: 'Keuangan',
      summary: 'Diferensiasi krusial antara laba akuntansi di atas kertas vs ketersediaan kas riil, bahaya jebakan modal kerja, dan pengelolaan Cash Conversion Cycle (CCC).',
      x: 1080,
      y: 120,
      level: 3,
      prerequisiteId: 'macro-3-3',
      microContent: {
        mentalModel: 'Cash Conversion Cycle ($CCC = DIO + DSO - DPO$) & Liquidity Squeeze',
        analogy: 'Sebuah kapal tanker samudera bisa memiliki lambung baja raksasa bernilai puluhan triliun rupiah (Solvent), namun jika kapal tersebut kehabisan beberapa drum minyak bahan bakar untuk menyalakan mesinnya di tengah badai, kapal itu akan terombang-ambing dan tenggelam (Illiquid). Banyak pebisnis bangkrut bukan karena bisnis mereka merugi, melainkan karena kehabisan kas riil untuk membayar gaji dan utang jatuh tempo esok pagi sementara piutang mereka masih tertahan berbulan-bulan di tangan pelanggan.',
        academicInsight: 'Solvabilitas mengukur apakah Total Aset perusahaan melampaui Total Liabilitas ($Aset > Utang$). Likuiditas mengukur ketersediaan kas dan setara kas untuk melunasi liabilitas jangka pendek saat jatuh tempo (*Current Ratio & Quick Ratio*). Pengelolaan modal kerja dikendalikan oleh Cash Conversion Cycle: $CCC = DIO (Days\\ Inventory\\ Outstanding) + DSO (Days\\ Sales\\ Outstanding) - DPO (Days\\ Payable\\ Outstanding)$. Semakin pendek atau negatif angka CCC (seperti model Dell atau Amazon di mana kas pelanggan diterima sebelum pemasok dibayar), semakin banyak kas gratis yang dihasilkan bisnis untuk mendanai pertumbuhannya tanpa utang perbankan.',
        crossDisciplinary: {
          connectionText: 'Manajemen Arus Kas x Psikologi Persepsi Akuntansi',
          domains: ['Keuangan', 'Psikologi'],
          insight: 'Accrual Accounting Trap: Otak manusia mudah terbius oleh laporan laba rugi yang menunjukkan laba miliaran rupiah, padahal laba tersebut baru berupa klaim piutang belum tertagih (IOU) yang berisiko gagal bayar.',
        },
        caseStudy: {
          companyOrFigure: 'Runtuhnya Silicon Valley Bank (SVB - Maret 2023)',
          story: 'SVB memegang neraca lebih dari $200 miliar dan memiliki ekuitas tercatat positif. Namun, SVB mengunci dana deposito likuid nasabah ke dalam obligasi pemerintah jangka panjang bertenor 10 tahun. Saat suku bunga The Fed meroket, nilai pasar obligasi tersebut jatuh dan nasabah startup serentak menarik simpanan mereka ($42 miliar dalam satu hari). SVB mengalami krisis likuiditas akut dan kolaps dalam waktu 48 jam.',
          takeaway: 'Perusahaan tidak pernah mati karena ketiadaan laba di atas kertas; perusahaan mati seketika saat kehabisan kas tunai likuid.'
        },
        actionableSteps: [
          'Hitung Cash Conversion Cycle (CCC) bulanan: perpendek DSO penagihan piutang dan optimalkan DPO pembayaran pemasok tanpa merusak hubungan kemitraan.',
          'Pertahankan Quick Ratio (Kas + Efek Pasar + Piutang Lancar / Liabilitas Lancar) minimal di atas level 1.2x.',
          'Buat simulasi Rolling Cash Flow Forecast 13 minggu (13-Week Cash Flow) untuk mendeteksi potensi jurang defisit kas likuid sedini mungkin.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Likuiditas CFO: Jurang Arus Kas Menjelang Pembayaran THR & Pajak',
        context: 'Laporan laba rugi kuartal ini mencatat laba bersih Rp 12 miliar. Namun, pelanggan korporat utama terlambat melunasi piutang senilai Rp 20 miliar (DSO melonjak dari 45 hari menjadi 110 hari). Dalam 14 hari ke depan, perusahaan wajib membayar THR karyawan dan cicilan utang bank senilai total Rp 15 miliar, sementara saldo kas bank hanya tersisa Rp 4 miliar.',
        dilemma: 'Tindakan darurat apa yang harus dieksekusi CFO untuk menyelamatkan perusahaan dari gagal bayar likuiditas?',
        choices: [
          {
            id: 'c1',
            text: 'Segera lakukan Invoice Factoring (anjak piutang) dengan diskon 3% kepada lembaga keuangan untuk mencairkan Rp 18 miliar kas instan dalam 3 hari, dan tawarkan diskon pelunasan cepat 2% kepada pelanggan lain.',
            consequence: 'Kas segar Rp 18 miliar masuk tepat waktu, kewajiban THR dan bank lunas aman, reputasi perusahaan terjaga tanpa penalti wanprestasi.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Mengorbankan sedikit margin laba via anjak piutang (factoring) demi likuiditas kas darurat adalah keputusan penyelamatan solvabilitas yang tepat.'
          },
          {
            id: 'c2',
            text: 'Tunda pembayaran THR karyawan dan biarkan bunga denda bank menumpuk sambil menunggu pelanggan melunasi piutang secara sukarela.',
            consequence: 'Terjadi mogok kerja massal karyawan, operasional lumpuh total, bank memasukkan perusahaan ke dalam daftar debitur macet (Kolektibilitas 4).',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Mengorbankan hak dasar karyawan dan kovenan perbankan merusak fondasi operasional dan legalitas perusahaan.'
          },
          {
            id: 'c3',
            text: 'Ambil pinjaman online ilegal berbunga 1% per hari atas nama pribadi direksi.',
            consequence: 'Perusahaan terjerat lintah darat, bunga majemuk melesat tak terkendali, dan aset pribadi direksi terancam disita penagih.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Menggunakan pinjaman ilegal dengan bunga predatory menghancurkan tata kelola dan membawa bencana finansial berkelanjutan.'
          },
          {
            id: 'c4',
            text: 'Kirim surat somasi dan gugat pailit pelanggan utama ke Pengadilan Niaga hari ini juga.',
            consequence: 'Pelanggan membekukan seluruh proses pembayaran selama proses hukum berjalan bertahun-tahun, likuiditas perusahaan seketika tamat.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Gugatan hukum memakan waktu lama dan mematikan negosiasi komersial yang dibutuhkan untuk likuiditas darurat 14 hari.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-10',
          question: 'Apa implikasi finansial strategis jika sebuah perusahaan berhasil mencapai angka Cash Conversion Cycle (CCC) yang negatif?',
          options: [
            'Perusahaan tersebut pasti mengalami kebangkrutan karena kasnya bernilai minus.',
            'Perusahaan menerima pembayaran kas dari pelanggan sebelum harus membayar kewajiban kepada pemasok, sehingga pemasok mendanai modal kerja perusahaan secara cuma-cuma.',
            'Perusahaan wajib membayar denda pajak tambahan kepada kantor pelayanan pajak.',
            'Nilai inventori barang di gudang otomatis disusutkan menjadi nol rupiah.'
          ],
          correctAnswerIndex: 1,
          explanation: 'CCC negatif berarti kas dari penjualan telah dikumpulkan sebelum uang harus dibayarkan ke pemasok barang, menghasilkan sumber pendanaan modal kerja gratis dari rantai pasok.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 4.2: HEDGING RISIKO FINANSIAL
    // --------------------------------------------------------------------------
    {
      id: 'macro-4-2',
      stepNumber: 'Langkah 4.2',
      stageTitle: 'TAHAP 4: Manajemen Risiko Keuangan & Hedging',
      label: 'Hedging Finansial & Perlindungan Derivatif Korporat',
      domain: 'Keuangan',
      summary: 'Penggunaan instrumen derivatif (FX Forward, Futures, Options & Commodity Swaps) untuk mengeliminasi risiko tail-risk volatilitas harga.',
      x: 1080,
      y: 270,
      level: 4,
      prerequisiteId: 'macro-4-1',
      microContent: {
        mentalModel: 'Asymmetric Risk Transfer & Tail-Risk Hedging',
        analogy: 'Membeli instrumen lindung nilai (Hedging) sama persis seperti membeli asuransi kebakaran untuk pabrik Anda. Anda tidak membeli asuransi dengan harapan pabrik Anda terbakar agar mendapatkan uang ganti rugi, melainkan agar Anda bisa tidur nyenyak mengetahui bahwa seburuk apa pun musibah kebakaran terjadi, kelangsungan bisnis Anda tidak akan musnah. Hedging korporat bukan alat untuk mencari keuntungan spekulasi, melainkan alat untuk mengunci kepastian biaya operasional.',
        academicInsight: 'Derivatif keuangan adalah kontrak bilateral yang nilainya diturunkan dari aset acuan (*underlying asset* seperti mata uang valas, suku bunga, atau komoditas). Tiga instrumen utama hedging adalah: (1) Kontrak Forward/Futures (kewajiban mengikat untuk membeli/menjual aset pada harga yang disepakati di masa depan), (2) Opsi Put/Call (hak, bukan kewajiban, untuk menjual/membeli pada harga kesepakatan dengan membayar premi di muka), dan (3) Swaps (pertukaran arus kas suku bunga atau valuta asing). Melalui lindung nilai, deviasi volatilitas arus kas dapat ditekan mendekati nol, menurunkan biaya kebangkrutan (*cost of financial distress*) dan mengamankan rating kredit korporasi.',
        crossDisciplinary: {
          connectionText: 'Keuangan Derivatif x Psikologi Keserakahan Spekulatif',
          domains: ['Keuangan', 'Psikologi'],
          insight: 'The Speculation Pitfall: Jebakan terbesar bendahara korporat adalah mengubah fungsi lindung nilai menjadi spekulasi mencari laba (misal: menjual Naked Options untuk memburu premi kecil namun menanggung risiko kehancuran tak terbatas).',
        },
        caseStudy: {
          companyOrFigure: 'Southwest Airlines Hedging Avtur Minyak (2000-2008)',
          story: 'Menjelang lonjakan harga minyak global pada 2000-an, Southwest Airlines secara disiplin mengunci kontrak opsi dan futures minyak bumi pada kisaran harga $25-$50 per barel. Ketika harga minyak dunia meroket hingga menyentuh rekor $147 per barel pada 2008 dan seluruh maskapai penerbangan dunia membukukan kerugian triliunan rupiah, Southwest tetap mencetak laba bersih miliaran dolar dan memenangkan pangsa pasar penerbangan AS.',
          takeaway: 'Disiplin lindung nilai pada komponen biaya paling volatil memberikan keunggulan kompetitif bertahan hidup saat krisis industri melanda.'
        },
        actionableSteps: [
          'Identifikasi pos biaya atau pendapatan yang menyumbang lebih dari 20% volatilitas laba bersih Anda (misal: kurs USD, harga solar, atau harga minyak sawit).',
          'Tetapkan Corporate Hedging Policy yang ketat: larang keras aktivitas trading spekulatif pada akun treasury perusahaan.',
          'Gunakan kombinasi Vanilla FX Forward atau Collars (membeli Put dan menjual Call pada rentang harga aman) untuk melindungi anggaran kas tahunan.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Lindung Nilai Treasury: Menghadapi Volatilitas Ekstrem Bahan Baku Komoditas',
        context: 'Perusahaan manufaktur kabel listrik Anda membutuhkan 500 ton tembaga dalam 6 bulan ke depan. Harga tembaga dunia saat ini berada di level $8.500/ton. Analis memperkirakan konflik pertambangan di Amerika Latin berpotensi melontarkan harga tembaga ke $11.000/ton (kenaikan biaya Rp 20 miliar yang dapat mematikan margin kontrak proyek Anda).',
        dilemma: 'Strategi instrumen keuangan apa yang harus dieksekusi komite treasury?',
        choices: [
          {
            id: 'c1',
            text: 'Beli kontrak Commodity Futures atau Call Option tembaga di bursa berjangka untuk 80% dari total kebutuhan volume 500 ton pada harga kesepakatan $8.500/ton.',
            consequence: 'Ketika harga tembaga meroket ke $10.800/ton, keuntungan dari kontrak derivatif menutup penuh lonjakan biaya fisik pembelian tembaga, anggaran proyek selamat.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Hedging 80% volume kebutuhan dengan instrumen futures/opsi mengunci biaya bahan baku tanpa terjebak over-hedging jika volume proyek berubah.'
          },
          {
            id: 'c2',
            text: 'Jangan lakukan tindakan apa pun di pasar finansial dan beli tembaga secara spot harian saat dibutuhkan nanti karena yakin harga tembaga akan turun.',
            consequence: 'Harga tembaga melonjak sesuai prediksi, biaya produksi membengkak Rp 18 miliar, perusahaan mencatat rugi bersih terbesar dalam sejarah.',
            scoreBonus: -25,
            isOptimal: false,
            explanation: 'Membiarkan eksposur risiko bahan baku utama terbuka tanpa perlindungan saat volatilitas tinggi adalah kelalaian manajemen risiko.'
          },
          {
            id: 'c3',
            text: 'Beli kontrak futures tembaga untuk volume 5.000 ton (10x lipat dari kebutuhan riil) dengan menggunakan seluruh saldo kas perusahaan sebagai leverage spekulasi.',
            consequence: 'Ketika harga tembaga berfluktuasi sesaat turun 5%, perusahaan mengalami margin call dari bursa berjangka dan modal kas terhapus habis.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Menyalahgunakan akun hedging untuk berspekulasi leverage di luar kebutuhan riil adalah pelanggaran berat tata kelola korporasi.'
          },
          {
            id: 'c4',
            text: 'Ganti bahan baku tembaga kabel dengan kawat besi biasa tanpa memberitahu klien pengguna.',
            consequence: 'Kabel meledak dan memicu kebakaran gedung, perusahaan digugat pidana dan dituntut ganti rugi ratusan miliar rupiah.',
            scoreBonus: -40,
            isOptimal: false,
            explanation: 'Tindakan penipuan spesifikasi teknis membahayakan nyawa publik dan berujung pada konsekuensi pidana mutlak.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-11',
          question: 'Apa perbedaan fundamental antara fungsi Hedging (Lindung Nilai) dengan Spekulasi di pasar derivatif finansial?',
          options: [
            'Hedging dilakukan di bank pemerintah, sedangkan spekulasi dilakukan di bank swasta.',
            'Hedging bertujuan mengurangi atau mengeliminasi risiko fluktuasi harga yang sudah ada pada bisnis riil, sedangkan spekulasi sengaja mengambil risiko baru demi mengejar keuntungan dari pergerakan harga.',
            'Hedging tidak memerlukan modal uang sama sekali, sedangkan spekulasi selalu menggunakan uang tunai fisik.',
            'Hedging hanya berlaku untuk saham teknologi, sedangkan spekulasi hanya berlaku untuk minyak bumi.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Hedging mentransfer risiko yang sudah ada pada operasi riil agar arus kas stabil, sedangkan spekulasi adalah tindakan sukarela menanggung risiko pasar demi memburu imbal hasil keuntungan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // LANGKAH 4.3: PORTOFOLIO ALL-WEATHER & ASSET ALLOCATION
    // --------------------------------------------------------------------------
    {
      id: 'macro-4-3',
      stepNumber: 'Langkah 4.3',
      stageTitle: 'TAHAP 4: Manajemen Risiko Keuangan & Hedging',
      label: 'Portofolio All-Weather & Alokasi Aset Tahan Krisis',
      domain: 'Keuangan',
      summary: 'Prinsip alokasi risiko berimbang (*Risk Parity*) Ray Dalio untuk bertahan dan bertumbuh melintasi 4 musim ekonomi makro.',
      x: 1080,
      y: 420,
      level: 4,
      prerequisiteId: 'macro-4-2',
      microContent: {
        mentalModel: 'The 4 Economic Seasons Matrix & Risk Parity Allocation (Ray Dalio)',
        analogy: 'Sebagian besar investor membangun portofolio yang hanya bisa melaju kencang di cuaca cerah (musim panas ekonomi: pertumbuhan tinggi dan inflasi rendah yang menguntungkan saham). Namun ketika badai salju resesi atau badai pasir inflasi menerjang, kendaraan mereka tergelincir dan hancur. Portofolio All-Weather (Segala Cuaca) dirancang seperti kendaraan amfibi serbaguna militer: kendaraan ini mungkin bukan yang tercepat di lintasan balap mulus, namun mampu melaju stabil melintasi rawa-rawa inflasi, lumpur resesi, maupun salju deflasi tanpa pernah mogok.',
        academicInsight: 'Kerangka kerja All-Weather membagi dunia ekonomi makro ke dalam matriks 4 kuadran berdasarkan 2 pendorong utama: Pertumbuhan Ekonomi (Lebih tinggi vs Lebih rendah dari ekspektasi) dan Inflasi (Lebih tinggi vs Lebih rendah dari ekspektasi). Masing-masing kuadran memiliki kelas aset yang secara historis unggul: (1) Pertumbuhan Tinggi: Saham Ekuitas, Komoditas, Obligasi Korporasi; (2) Pertumbuhan Rendah: Obligasi Pemerintah Jangka Panjang, Kas; (3) Inflasi Tinggi: Komoditas, Emas, Surat Utang Terindeks Inflasi (TIPS); (4) Inflasi Rendah (Deflasi): Obligasi Pemerintah Kupon Tetap, Saham Ekuitas Tertentu. Alih-alih membagi uang 50:50, strategi Risk Parity menyeimbangkan bobot risiko volatilitas dari masing-masing kuadran sehingga tidak ada satu pun musim makro yang mampu menghancurkan portofolio.',
        crossDisciplinary: {
          connectionText: 'Alokasi Aset x Teori Probabilitas & Kerendahan Hati',
          domains: ['Keuangan', 'Psikologi'],
          insight: 'Epistemic Humility: All-Weather dibangun atas dasar kesadaran bahwa tidak ada manusia yang mampu memprediksi masa depan secara konsisten. Solusinya bukan menebak cuaca berikutnya, melainkan memiliki portofolio yang tahan terhadap segala kemungkinan cuaca.',
        },
        caseStudy: {
          companyOrFigure: 'Ketahanan All-Weather Bridgewater Associates Selama Krisis Finansial 2008',
          story: 'Pada tahun 2008, ketika indeks pasar saham S&P 500 terjun bebas -37% dan menghancurkan triliunan dolar dana pensiun global, portofolio All-Weather Ray Dalio di Bridgewater Associates mencatatkan kinerja nyaris impas (+0.3%) sebelum membukukan reli positif di tahun-tahun berikutnya. Keseimbangan alokasi pada obligasi pemerintah jangka panjang dan emas menyerap seluruh guncangan kejatuhan ekuitas.',
          takeaway: 'Tujuan utama investasi kekayaan jangka panjang adalah bertahan dari kehancuran modal (capital preservation) agar efek bunga majemuk tidak pernah terputus.'
        },
        actionableSteps: [
          'Audit korelasi antar-aset dalam portofolio pribadi/treasury perusahaan Anda: hindari ilusi diversifikasi (memiliki 10 saham berbeda yang semuanya sama-sama anjlok saat resesi).',
          'Terapkan formula All-Weather dasar: 30% Saham Global Berkualitas, 40% Obligasi Negara Jangka Panjang, 15% Obligasi Jangka Menengah, 7.5% Emas Fisik, dan 7.5% Komoditas Produktif.',
          'Lakukan penyeimbangan ulang berkala (Annual Rebalancing) untuk secara otomatis menjual aset yang sedang berada di puncak dan membeli aset yang sedang undervalued.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Alokasi Dana Abadi (Endowment Fund): Restrukturisasi Menghadapi Stagflasi',
        context: 'Dana abadi korporat keluarga Anda sebesar Rp 100 miliar saat ini terkonsentrasi 90% pada saham properti dan ekuitas domestik. Indikator makroekonomi menunjukkan sinyal kuat datangnya fase Stagflasi (Pertumbuhan ekonomi mandek diiringi inflasi bahan pangan dan energi berkepanjangan).',
        dilemma: 'Bagaimana restrukturisasi portofolio aset abadi agar daya beli modal terlindungi dan tetap menghasilkan likuiditas?',
        choices: [
          {
            id: 'c1',
            text: 'Terapkan kerangka All-Weather Risk Parity: kurangi ekuitas menjadi 35%, alokasikan 25% ke Obligasi Negara Berindeks Inflasi/Surat Utang Jangka Pendek, 20% ke Emas Fisik & Komoditas Energi, dan 20% Kas Likuid Pasar Uang.',
            consequence: 'Ketika stagflasi menghantam pasar ekuitas, lonjakan harga emas, komoditas, dan yield pasar uang mengimbangi koreksi saham; daya beli riil portofolio terjaga 100%.',
            scoreBonus: 30,
            isOptimal: true,
            explanation: 'Alokasi ke aset penyerap inflasi (emas, komoditas, pasar uang) melindungi kekayaan riil di saat pertumbuhan melambat dan inflasi tinggi.'
          },
          {
            id: 'c2',
            text: 'Pertahankan 90% saham properti dan ekuitas karena percaya harga properti selalu naik dalam kondisi apa pun.',
            consequence: 'Suku bunga tinggi menekan daya beli properti, volume transaksi beku, valuasi saham properti anjlok 45% dan dividen dipangkas drastis.',
            scoreBonus: -20,
            isOptimal: false,
            explanation: 'Keyakinan buta bahwa satu kelas aset kebal terhadap hukum makroekonomi adalah penyebab utama keruntuhan dinasti kekayaan.'
          },
          {
            id: 'c3',
            text: 'Pindahkan seluruh Rp 100 miliar ke rekening tabungan biasa di bank tanpa instrumen bunga.',
            consequence: 'Dalam 5 tahun fase stagflasi dengan inflasi tahunan 8%, daya beli riil dana abadi tersebut menguap lebih dari 35% tanpa sisa pemulihan.',
            scoreBonus: -15,
            isOptimal: false,
            explanation: 'Memegang uang tunai murni selama rezim stagflasi adalah jaminan pasti pengikisan daya beli riil modal.'
          },
          {
            id: 'c4',
            text: 'Gunakan seluruh dana abadi untuk membeli mata uang negara berkembang yang sedang mengalami krisis perang karena nilai tukarnya murah.',
            consequence: 'Negara tersebut mengalami default utang, mata uangnya terdevaluasi 80% lebih lanjut, dan modal dana abadi hilang hampir tak bersisa.',
            scoreBonus: -35,
            isOptimal: false,
            explanation: 'Menaruh dana abadi jangka panjang pada instrumen spekulasi risiko geopolitik ekstrem melanggar mandat preservasi modal.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-macro-12',
          question: 'Kelas aset manakah yang secara historis memberikan kinerja perlindungan terbaik dalam rezim makroekonomi Inflasi Tinggi di atas Ekspektasi (Rising Inflation Season)?',
          options: [
            'Obligasi pemerintah jangka panjang kupon tetap berbunga rendah.',
            'Komoditas fisik (energi, logam industri), emas murni, dan surat utang berindeks inflasi (TIPS).',
            'Saham-saham perbankan dengan kredit macet tinggi.',
            'Mata uang tunai kertas fiat di brankas kantor.'
          ],
          correctAnswerIndex: 1,
          explanation: 'Dalam lingkungan inflasi tinggi, komoditas riil dan emas mempertahankan daya beli intrinsiknya, sementara nilai obligasi kupon tetap dan uang tunai terdevaluasi oleh inflasi.'
        }
      ]
    }
  ],
  edges: [
    { id: 'me1', from: 'macro-1-1', to: 'macro-1-2', label: 'Akumulasi Utang', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'me2', from: 'macro-1-2', to: 'macro-1-3', label: 'Intervensi Bunga', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'me3', from: 'macro-1-3', to: 'macro-2-1', label: 'Transmisi Inflasi', domains: ['Ekonomi', 'Ekonomi'] },
    { id: 'me4', from: 'macro-2-1', to: 'macro-2-2', label: 'Tekanan Kurs FX', domains: ['Ekonomi', 'Geopolitik'] },
    { id: 'me5', from: 'macro-2-2', to: 'macro-2-3', label: 'Injeksi Likuiditas', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'me6', from: 'macro-2-3', to: 'macro-3-1', label: 'Biaya Modal (WACC)', domains: ['Keuangan', 'Keuangan'] },
    { id: 'me7', from: 'macro-3-1', to: 'macro-3-2', label: 'Tingkat Diskonto DCF', domains: ['Keuangan', 'Keuangan'] },
    { id: 'me8', from: 'macro-3-2', to: 'macro-3-3', label: 'Efisiensi ROIC', domains: ['Keuangan', 'Bisnis'] },
    { id: 'me9', from: 'macro-3-3', to: 'macro-4-1', label: 'Audit Solvabilitas', domains: ['Bisnis', 'Keuangan'] },
    { id: 'me10', from: 'macro-4-1', to: 'macro-4-2', label: 'Hedging Derivatif', domains: ['Keuangan', 'Keuangan'] },
    { id: 'me11', from: 'macro-4-2', to: 'macro-4-3', label: 'Risk Parity All-Weather', domains: ['Keuangan', 'Ekonomi'] },
    { id: 'me12', from: 'macro-1-3', to: 'macro-2-3', label: 'Zero Lower Bound -> QE', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'me13', from: 'macro-3-1', to: 'macro-4-1', label: 'Beban Bunga -> Likuiditas', domains: ['Keuangan', 'Keuangan'] }
  ]
};
