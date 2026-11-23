import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const VALUATION_CURRICULUM = buildPath({
  id: 'curriculum-valuasi-keuangan-korporasi',
  topic: 'Valuasi & Keuangan Korporasi (Level Mahasiswa MBA)',
  description:
    'Nilai waktu uang, free cash flow, WACC, valuasi DCF dan multiple, struktur modal, capital budgeting, hingga akuisisi. Kerangka yang dipakai analis, konsultan, dan CFO untuk memutuskan kapan sebuah bisnis atau proyek layak dibeli atau dijalankan.',
  stages: [
    {
      title: 'Fondasi Nilai',
      lessons: [
        {
          id: 'val-1-tvm',
          label: 'Nilai Waktu Uang dan NPV',
          domain: 'Keuangan',
          summary: 'Rp 100 juta hari ini lebih berharga daripada Rp 100 juta setahun lagi. NPV mengubah arus kas masa depan menjadi nilai hari ini.',
          model: 'Time Value of Money dan Net Present Value',
          analogy: 'Menerima uang hari ini seperti memegang bibit yang bisa ditanam dan berbuah. Menerima uang setahun lagi berarti menunda tanam. Karena itu uang masa depan "didiskon" agar sebanding dengan uang hari ini.',
          insight: 'Nilai sekarang (PV) = arus kas / (1 + r)^t, dengan r tingkat diskonto dan t periode. NPV adalah jumlah PV semua arus kas masuk dikurangi investasi awal. Proyek dengan NPV positif menambah nilai pada tingkat imbal hasil yang disyaratkan; NPV negatif menghancurkannya. Tingkat diskonto mencerminkan biaya peluang dan risiko.',
          cross: { text: 'Valuasi x Ekonomi Perilaku', domains: ['Keuangan', 'Psikologi'], insight: 'Manusia cenderung terlalu menyukai hadiah sekarang (hyperbolic discounting). NPV memaksa keputusan memakai tingkat diskonto yang eksplisit, bukan perasaan.' },
          story: { who: 'Tawaran Pelunasan Piutang (ilustrasi)', story: 'Pelanggan menawar membayar Rp 95 juta tunai hari ini untuk tagihan Rp 100 juta yang jatuh tempo setahun lagi. Jika biaya modal usaha 12% per tahun, nilai sekarang Rp 100 juta setahun lagi sekitar Rp 89,3 juta. Menerima Rp 95 juta tunai justru lebih baik.', takeaway: 'Bandingkan uang di waktu berbeda hanya setelah didiskon ke waktu yang sama.' },
          actions: ['Hitung PV satu tagihan Anda yang jatuh tempo 3 bulan lagi dengan tingkat diskonto Anda.', 'Pakai kalkulator Bunga Majemuk di tab Alat untuk membandingkan dua skenario.', 'Tentukan tingkat diskonto minimum yang Anda syaratkan untuk proyek usaha.'],
          level: 'Menengah', time: '6 min', tool: 'compound',
          scenario: {
            title: 'Dilema Dua Tawaran Pembayaran',
            context: 'Klien menawarkan dua opsi: Rp 90 juta tunai sekarang, atau Rp 100 juta dalam 12 bulan. Biaya modal Anda 10% per tahun.',
            dilemma: 'Mana yang dipilih?',
            choices: [
              { text: 'Diskon Rp 100 juta setahun ke nilai sekarang (sekitar Rp 90,9 juta) lalu bandingkan dengan Rp 90 juta, sambil menilai risiko klien tidak membayar.', consequence: 'Selisihnya tipis, dan risiko gagal bayar membuat Anda memilih tunai.', explanation: 'Keputusan berbasis PV dan risiko, bukan angka nominal.', best: true },
              { text: 'Pilih Rp 100 juta karena angkanya lebih besar.', consequence: 'Anda menunggu setahun dan klien terlambat tiga bulan.', explanation: 'Nominal yang lebih besar belum tentu bernilai lebih tinggi hari ini.' },
              { text: 'Pilih yang cairnya lebih cepat tanpa menghitung.', consequence: 'Keputusannya mungkin benar, tetapi tanpa dasar Anda tidak bisa mengulanginya.', explanation: 'Hitung agar keputusan bisa dipertanggungjawabkan.' }
            ]
          },
          quiz: [
            { q: 'Dengan tingkat diskonto 10%, berapa nilai sekarang dari Rp 110 juta yang diterima setahun lagi?', options: ['Rp 100 juta', 'Rp 99 juta', 'Rp 121 juta', 'Rp 110 juta'], answer: 0, why: '110 / 1,10 = 100.' },
            { q: 'Proyek dengan NPV positif berarti...', options: ['Proyek menambah nilai pada tingkat diskonto yang dipakai', 'Proyek pasti tanpa risiko', 'Arus kas selalu positif tiap tahun', 'Proyek balik modal paling cepat'], answer: 0, why: 'NPV positif berarti imbal hasil melebihi yang disyaratkan.' }
          ]
        },
        {
          id: 'val-2-fcf',
          label: 'Free Cash Flow dan Tiga Laporan yang Terhubung',
          domain: 'Keuangan',
          summary: 'Laba bukan kas. Free cash flow adalah uang yang benar-benar bisa dibagikan kepada pemilik dan pemberi pinjaman.',
          model: 'Three-Statement Model dan Free Cash Flow to Firm',
          analogy: 'Laba seperti nilai pekerjaan di kontrak, sedangkan kas seperti uang di dompet. Anda bisa punya banyak kontrak besar tetapi dompet kosong karena pelanggan belum bayar dan stok menumpuk.',
          insight: 'Tiga laporan saling terkait: laba bersih dari laporan laba rugi masuk ke ekuitas di neraca dan menjadi titik awal laporan arus kas. FCFF ≈ EBIT × (1 − pajak) + penyusutan − belanja modal − kenaikan modal kerja. Perusahaan bertumbuh bisa laba besar tetapi FCF negatif karena investasi dan piutang.',
          cross: { text: 'Valuasi x Akuntansi', domains: ['Keuangan', 'Bisnis'], insight: 'Pilihan kebijakan akuntansi (penyusutan, pengakuan pendapatan) mengubah laba tetapi tidak mengubah kas. Analis yang baik menelusuri kas.' },
          story: { who: 'Toko Grosir yang Cepat Tumbuh (ilustrasi)', story: 'Toko mencatat laba Rp 200 juta, tetapi piutang pelanggan naik Rp 150 juta dan stok naik Rp 120 juta. Kas dari operasi justru negatif. Pemilik baru sadar mengapa rekening kosong padahal laporan laba bagus.', takeaway: 'Pertumbuhan menyerap kas; FCF menunjukkan kemampuan bertahan.' },
          actions: ['Ambil laporan laba rugi dan neraca usaha Anda, hitung perubahan piutang dan stok setahun terakhir.', 'Hitung FCF sederhana: kas operasi dikurangi belanja modal.', 'Bandingkan FCF dengan laba bersih dan jelaskan selisihnya.'],
          level: 'Menengah', time: '6 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Laba Tinggi Tetapi Kas Menipis',
            context: 'Laba naik 40% tetapi saldo kas turun tiga bulan berturut-turut.',
            dilemma: 'Apa yang pertama diperiksa?',
            choices: [
              { text: 'Telusuri perubahan modal kerja: piutang, stok, dan utang dagang, lalu hitung FCF.', consequence: 'Piutang membengkak karena tempo bayar diperlonggar. Anda memperketat penagihan.', explanation: 'Selisih laba dan kas hampir selalu ada di modal kerja dan belanja modal.', best: true },
              { text: 'Rayakan laba dan tambah stok agar tidak kehabisan.', consequence: 'Kas makin tipis dan Anda berutang untuk gaji.', explanation: 'Laba tidak bisa membayar gaji; kas yang bisa.' },
              { text: 'Ubah kebijakan akuntansi agar laba terlihat lebih kecil.', consequence: 'Laporan berubah tetapi kas tetap sama.', explanation: 'Akuntansi tidak menciptakan kas.' }
            ]
          },
          quiz: [
            { q: 'Mengapa perusahaan laba besar bisa kehabisan kas?', options: ['Piutang dan stok yang naik menyerap kas', 'Pajak selalu lebih besar dari laba', 'Penyusutan mengurangi kas', 'Laba selalu palsu'], answer: 0, why: 'Kenaikan modal kerja menyerap kas walau laba tercatat.' },
            { q: 'Laba bersih dari laporan laba rugi masuk ke neraca sebagai...', options: ['Tambahan ekuitas (laba ditahan)', 'Tambahan utang', 'Pengurang aset', 'Pendapatan diterima di muka'], answer: 0, why: 'Laba bersih menambah laba ditahan dalam ekuitas.' }
          ]
        },
        {
          id: 'val-3-wacc',
          label: 'Biaya Modal dan WACC',
          domain: 'Keuangan',
          summary: 'Modal tidak gratis. WACC adalah imbal hasil minimum yang harus dihasilkan bisnis agar pemodal tidak rugi.',
          model: 'WACC dan CAPM',
          analogy: 'Anda membeli ruko separuh dengan uang sendiri dan separuh dengan KPR. Biaya "rata-rata" ruko itu adalah campuran bunga KPR dan imbal hasil yang Anda harapkan dari uang sendiri.',
          insight: 'WACC = E/V × Re + D/V × Rd × (1 − pajak). Biaya ekuitas Re dapat diperkirakan dengan CAPM: Re = Rf + β × (Rm − Rf). Beta mengukur sensitivitas terhadap pasar. Bunga utang mengurangi pajak, sehingga biaya utang setelah pajak lebih rendah, tetapi utang berlebih menaikkan risiko dan biaya ekuitas.',
          cross: { text: 'Biaya Modal x Makroekonomi', domains: ['Keuangan', 'Ekonomi'], insight: 'Suku bunga acuan dan premi risiko pasar menggeser WACC. Saat suku bunga naik, nilai proyek jangka panjang turun karena didiskon lebih tinggi.' },
          story: { who: 'Pabrik Kemasan Mengambil Pinjaman (ilustrasi)', story: 'Pabrik didanai 60% ekuitas dengan harapan imbal 16% dan 40% pinjaman bunga 10% pajak 22%. WACC = 0,6×16% + 0,4×10%×0,78 = 9,6% + 3,12% = 12,72%. Proyek yang hanya menjanjikan imbal 11% akan menghancurkan nilai.', takeaway: 'Imbal proyek harus melampaui WACC.' },
          actions: ['Tulis proporsi modal sendiri dan utang usaha Anda.', 'Tentukan imbal hasil minimum yang Anda harapkan dari modal sendiri.', 'Hitung WACC kasar dan jadikan batas bawah untuk proyek baru.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Proyek Imbal Hasil 12%',
            context: 'WACC usaha Anda sekitar 13%. Ada proyek ekspansi dengan imbal hasil diperkirakan 12%.',
            dilemma: 'Apakah dijalankan?',
            choices: [
              { text: 'Tolak atau perbaiki proyek hingga imbal hasilnya melampaui WACC, atau cari pendanaan yang lebih murah.', consequence: 'Anda merevisi desain biaya dan imbal naik menjadi 15%, baru dijalankan.', explanation: 'Proyek di bawah WACC mengurangi nilai walau terlihat untung.', best: true },
              { text: 'Jalankan karena 12% masih positif.', consequence: 'Laba akuntansi ada, tetapi pemodal sebenarnya dirugikan secara ekonomi.', explanation: 'Laba positif belum tentu menutup biaya modal.' },
              { text: 'Jalankan dengan utang lebih banyak agar murah.', consequence: 'Risiko naik dan bank menaikkan bunga.', explanation: 'Utang berlebih menaikkan biaya ekuitas dan risiko.' }
            ]
          },
          quiz: [
            { q: 'Mengapa biaya utang dihitung setelah pajak dalam WACC?', options: ['Bunga dapat mengurangi pajak', 'Bank mengurangi bunga', 'Utang tidak berisiko', 'Karena aturan akuntansi saja'], answer: 0, why: 'Bunga bersifat pengurang pajak sehingga biaya efektif lebih kecil.' },
            { q: 'Dalam CAPM, beta yang tinggi berarti...', options: ['Saham lebih sensitif terhadap pasar sehingga imbal hasil yang disyaratkan lebih tinggi', 'Perusahaan pasti untung', 'Utang rendah', 'Dividen besar'], answer: 0, why: 'Beta tinggi berarti risiko pasar lebih besar.' }
          ]
        }
      ]
    },
    {
      title: 'Menilai Bisnis',
      lessons: [
        {
          id: 'val-4-dcf',
          label: 'Valuasi DCF dan Terminal Value',
          domain: 'Keuangan',
          summary: 'Nilai bisnis adalah nilai sekarang dari seluruh kas yang akan dihasilkannya. Sebagian besar nilai biasanya ada di nilai akhir.',
          model: 'Discounted Cash Flow',
          analogy: 'Menilai pohon durian dengan memperkirakan hasil panennya setiap tahun, didiskon ke hari ini, ditambah nilai pohon itu setelah tahun-tahun yang Anda proyeksikan.',
          insight: 'Langkahnya: proyeksikan FCF 5 sampai 10 tahun, hitung terminal value (misalnya Gordon: FCF berikutnya / (WACC − g)), diskon semuanya dengan WACC, lalu kurangi utang untuk memperoleh nilai ekuitas. Terminal value sering 60 sampai 80 persen dari total nilai, sehingga sensitif terhadap g dan WACC. Selalu lakukan analisis sensitivitas.',
          cross: { text: 'DCF x Strategi', domains: ['Keuangan', 'Bisnis'], insight: 'Asumsi pertumbuhan dan margin harus selaras dengan keunggulan bersaing. Pertumbuhan tinggi tanpa moat tidak bertahan lama.' },
          story: { who: 'Menilai Kedai Waralaba Kecil (ilustrasi)', story: 'FCF tahun depan Rp 100 juta, tumbuh 5% selama lima tahun lalu 3% selamanya, WACC 12%. Perubahan WACC dari 12% menjadi 14% menurunkan nilai bisnis sekitar 18%. Pembeli yang tidak menguji sensitivitas membayar terlalu mahal.', takeaway: 'Nilai bisnis adalah rentang, bukan satu angka.' },
          actions: ['Buat proyeksi FCF 5 tahun untuk satu bisnis yang Anda pahami.', 'Hitung nilai dengan tiga skenario: pesimis, dasar, optimis.', 'Uji perubahan WACC dan g sebesar satu poin persentase.'],
          level: 'Mahir', time: '8 min',
          scenario: {
            title: 'Dilema Pembeli Mengajukan Harga Tinggi',
            context: 'Calon pembeli menawar bisnis Anda 10 kali laba berdasarkan proyeksi pertumbuhan optimis.',
            dilemma: 'Bagaimana menilai tawaran?',
            choices: [
              { text: 'Bangun DCF sendiri dengan beberapa skenario dan bandingkan dengan tawaran sebelum menjawab.', consequence: 'Anda menemukan tawaran wajar di skenario dasar, lalu menegosiasikan struktur pembayaran bertahap.', explanation: 'Penilaian sendiri memberi dasar tawar yang kuat.', best: true },
              { text: 'Terima karena angkanya terdengar besar.', consequence: 'Belakangan Anda sadar bisnis dihargai di bawah potensi.', explanation: 'Tanpa model, Anda tidak tahu apakah harga wajar.' },
              { text: 'Tolak tanpa menghitung.', consequence: 'Anda melewatkan tawaran yang sebenarnya menguntungkan.', explanation: 'Penolakan perlu dasar hitungan.' }
            ]
          },
          quiz: [
            { q: 'Mengapa analisis sensitivitas penting pada DCF?', options: ['Terminal value sangat peka terhadap WACC dan pertumbuhan', 'Untuk memperbanyak halaman laporan', 'Karena pajak berubah tiap hari', 'DCF tidak memerlukan asumsi'], answer: 0, why: 'Perubahan kecil pada WACC dan g mengubah nilai secara besar.' },
            { q: 'Dari nilai perusahaan (enterprise value) menuju nilai ekuitas, kita...', options: ['Mengurangi utang bersih', 'Menambah utang', 'Mengalikan dengan beta', 'Menghapus kas'], answer: 0, why: 'Nilai ekuitas = nilai perusahaan − utang bersih.' }
          ]
        },
        {
          id: 'val-5-multiples',
          label: 'Valuasi Relatif: Multiple dan Pembanding',
          domain: 'Keuangan',
          summary: 'Cara cepat menilai: bandingkan dengan perusahaan serupa memakai rasio seperti P/E dan EV/EBITDA.',
          model: 'Comparable Company Analysis',
          analogy: 'Menaksir harga rumah dengan melihat harga jual rumah mirip di kompleks yang sama, disesuaikan luas dan kondisi.',
          insight: 'Multiple umum: P/E (harga per laba), EV/EBITDA (nilai perusahaan per EBITDA), EV/Sales, P/B. Pilih pembanding sejenis dalam sektor, ukuran, dan pertumbuhan. Multiple yang tinggi bisa mencerminkan pertumbuhan atau kualitas yang lebih baik, atau sekadar kemahalan. Gunakan sebagai pemeriksa silang bagi DCF, bukan satu-satunya dasar.',
          cross: { text: 'Valuasi x Psikologi Pasar', domains: ['Keuangan', 'Psikologi'], insight: 'Multiple sektor ikut naik turun mengikuti sentimen. Membeli saat euforia berarti membayar multiple tinggi untuk pertumbuhan yang sudah dihargai.' },
          story: { who: 'Menjual Toko Online (ilustrasi)', story: 'Toko online dengan EBITDA Rp 400 juta dibandingkan dengan transaksi sejenis di kisaran 3 sampai 4 kali EBITDA. Rentang nilai Rp 1,2 sampai 1,6 miliar. Pemilik yang menuntut 8 kali tidak menemukan pembeli selama setahun.', takeaway: 'Pembanding menahan ekspektasi agar realistis.' },
          actions: ['Kumpulkan 3 pembanding sejenis dan hitung multiple-nya.', 'Terapkan rentang multiple pada angka bisnis Anda.', 'Bandingkan hasilnya dengan DCF dan jelaskan perbedaannya.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Startup dengan Multiple Selangit',
            context: 'Anda diminta menilai startup yang meminta harga 20 kali penjualan, sementara pembanding sektor 4 kali.',
            dilemma: 'Bagaimana menyikapi?',
            choices: [
              { text: 'Bedah apa yang membenarkan premi (pertumbuhan, margin, moat), lalu uji dengan DCF sebelum menyetujui.', consequence: 'Premi hanya sebagian terbenarkan; Anda menawar di tengah.', explanation: 'Premi perlu dibuktikan oleh fundamental.', best: true },
              { text: 'Setuju karena semua orang membicarakannya.', consequence: 'Anda membeli di puncak sentimen.', explanation: 'Mengikuti keramaian bukan penilaian.' },
              { text: 'Abaikan pembanding karena startup itu unik.', consequence: 'Tanpa jangkar, Anda mudah dibujuk.', explanation: 'Selalu ada pembanding terdekat.' }
            ]
          },
          quiz: [
            { q: 'EV/EBITDA membandingkan...', options: ['Nilai perusahaan dengan laba operasi sebelum bunga, pajak, penyusutan, amortisasi', 'Harga saham dengan dividen', 'Utang dengan ekuitas', 'Kas dengan piutang'], answer: 0, why: 'EV dibagi EBITDA.' },
            { q: 'Syarat utama pembanding yang baik?', options: ['Sektor, ukuran, dan profil pertumbuhan serupa', 'Nama mirip', 'Kantor di kota sama', 'Logo mirip'], answer: 0, why: 'Pembanding harus sebanding secara fundamental.' }
          ]
        },
        {
          id: 'val-6-struktur',
          label: 'Struktur Modal dan Leverage',
          domain: 'Keuangan',
          summary: 'Utang memperbesar imbal hasil saat untung dan memperbesar kerugian saat rugi. Cari keseimbangannya.',
          model: 'Trade-off Theory dan Leverage',
          analogy: 'Utang seperti tuas panjang: tenaga kecil mengangkat beban besar, tetapi tuas yang terlalu panjang mudah patah.',
          insight: 'Utang murah karena bunga mengurangi pajak, tetapi menambah risiko kebangkrutan. Modigliani-Miller menunjukkan dalam pasar sempurna struktur modal tidak mengubah nilai; di dunia nyata pajak dan biaya kesulitan keuangan membuat ada rentang optimal. Pantau Debt/EBITDA dan interest coverage (EBIT / beban bunga).',
          cross: { text: 'Leverage x Siklus Ekonomi', domains: ['Keuangan', 'Ekonomi'], insight: 'Saat ekonomi melambat, pendapatan turun tetapi bunga tetap. Perusahaan dengan leverage tinggi paling rentan.' },
          story: { who: 'Dua Distributor di Tahun Sulit (ilustrasi)', story: 'Dua distributor sama-sama untung. Satu tanpa utang, satu berutang 5 kali EBITDA. Saat penjualan turun 25%, yang pertama bertahan, yang kedua gagal membayar bunga dan menjual aset dengan harga rendah.', takeaway: 'Leverage meningkatkan hasil di masa baik dan bahaya di masa buruk.' },
          actions: ['Hitung interest coverage usaha Anda.', 'Simulasikan penurunan penjualan 20%: apakah bunga masih tertutup?', 'Tetapkan batas atas utang yang nyaman dibayar.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Pinjaman untuk Ekspansi',
            context: 'Bank menawarkan pinjaman besar. Cicilan akan menghabiskan 70% EBIT saat ini.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Uji skenario penjualan turun, ambil pinjaman lebih kecil atau bertahap sehingga coverage tetap aman.', consequence: 'Ekspansi berjalan lebih lambat tetapi bisnis tahan saat musim sepi.', explanation: 'Ukur leverage dengan skenario buruk, bukan skenario rata-rata.', best: true },
              { text: 'Ambil penuh karena bunga terdengar kecil.', consequence: 'Musim sepi datang dan cicilan mencekik.', explanation: 'Bunga tetap harus dibayar saat pendapatan turun.' },
              { text: 'Tolak semua utang apa pun alasannya.', consequence: 'Bisnis tumbuh lambat dan kalah oleh pesaing.', explanation: 'Utang terkendali dapat menambah nilai.' }
            ]
          },
          quiz: [
            { q: 'Interest coverage ratio dihitung sebagai...', options: ['EBIT dibagi beban bunga', 'Utang dibagi ekuitas', 'Kas dibagi laba', 'Penjualan dibagi stok'], answer: 0, why: 'Rasio ini menunjukkan kemampuan menutup bunga dari laba operasi.' },
            { q: 'Risiko utama leverage tinggi?', options: ['Kesulitan membayar bunga saat pendapatan turun', 'Pajak naik otomatis', 'Beta turun', 'Laba pasti naik'], answer: 0, why: 'Beban tetap membesar risiko saat pendapatan turun.' }
          ]
        }
      ]
    },
    {
      title: 'Keputusan Investasi dan Akuisisi',
      lessons: [
        {
          id: 'val-7-capbud',
          label: 'Capital Budgeting: NPV, IRR, dan Payback',
          domain: 'Keuangan',
          summary: 'Memilih proyek yang layak dengan alat yang tepat dan menyadari kelemahan tiap metode.',
          model: 'Capital Budgeting',
          analogy: 'Memilih mesin mana yang dibeli: bukan hanya mana yang balik modal tercepat, tetapi mana yang menambah nilai terbesar sepanjang umurnya.',
          insight: 'NPV menunjukkan tambahan nilai dalam rupiah dan konsisten. IRR adalah tingkat diskonto yang membuat NPV nol; mudah dipahami tetapi bisa menyesatkan pada proyek tidak konvensional atau saat membandingkan skala berbeda. Payback sederhana tetapi mengabaikan nilai waktu dan arus setelah balik modal. Untuk proyek saling eksklusif, utamakan NPV.',
          cross: { text: 'Penganggaran x Operasi', domains: ['Keuangan', 'Bisnis'], insight: 'Estimasi arus kas yang buruk merusak metode apa pun. Libatkan tim operasi untuk asumsi volume, biaya, dan umur aset.' },
          story: { who: 'Memilih Mesin Produksi (ilustrasi)', story: 'Mesin A balik modal 2 tahun dengan NPV Rp 80 juta. Mesin B balik modal 3 tahun tetapi NPV Rp 210 juta karena umurnya lebih panjang. Pemilik yang hanya melihat payback memilih A dan kehilangan nilai Rp 130 juta.', takeaway: 'Payback cepat bukan berarti nilai terbesar.' },
          actions: ['Susun arus kas dua proyek yang sedang Anda pertimbangkan.', 'Hitung NPV dan payback untuk keduanya.', 'Bila hasil berbeda, putuskan berdasarkan NPV dan jelaskan alasannya.'],
          level: 'Mahir', time: '7 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Dua Proyek Saling Eksklusif',
            context: 'Proyek X: payback 18 bulan, NPV kecil. Proyek Y: payback 30 bulan, NPV jauh lebih besar. Dana hanya cukup untuk satu.',
            dilemma: 'Pilih yang mana?',
            choices: [
              { text: 'Pilih Y bila NPV-nya lebih besar dan likuiditas masih aman selama masa payback yang lebih panjang.', consequence: 'Anda menjaga kas cadangan dan memperoleh nilai tambah lebih besar.', explanation: 'NPV mengukur nilai total; likuiditas dicek terpisah.', best: true },
              { text: 'Pilih X karena balik modal lebih cepat.', consequence: 'Nilai yang hilang baru terlihat bertahun-tahun kemudian.', explanation: 'Payback mengabaikan arus kas setelah balik modal.' },
              { text: 'Pilih keduanya dengan utang besar.', consequence: 'Arus kas tertekan dan risiko meningkat.', explanation: 'Dana terbatas harus dialokasikan secara disiplin.' }
            ]
          },
          quiz: [
            { q: 'IRR adalah...', options: ['Tingkat diskonto yang membuat NPV sama dengan nol', 'Rata-rata laba', 'Suku bunga bank', 'Rasio utang'], answer: 0, why: 'IRR membuat NPV nol.' },
            { q: 'Kelemahan utama metode payback?', options: ['Mengabaikan nilai waktu uang dan arus setelah balik modal', 'Terlalu rumit', 'Tidak bisa dihitung', 'Selalu terlalu optimis'], answer: 0, why: 'Payback hanya melihat kapan modal kembali.' }
          ]
        },
        {
          id: 'val-8-ma',
          label: 'Merger, Akuisisi, dan Sinergi',
          domain: 'Bisnis',
          summary: 'Membeli bisnis lain dapat mempercepat pertumbuhan, tetapi sebagian besar nilai sering hilang di harga dan integrasi.',
          model: 'M&A Value Creation',
          analogy: 'Menikahkan dua keluarga: yang menentukan bukan hanya mahar, tetapi seberapa baik kebiasaan keduanya menyatu setelah menikah.',
          insight: 'Nilai dari akuisisi = nilai gabungan − nilai berdiri sendiri − premi yang dibayar − biaya transaksi dan integrasi. Sinergi biaya lebih bisa diandalkan daripada sinergi pendapatan. Uji tuntas (due diligence) mencakup keuangan, hukum, pajak, pelanggan, dan budaya. Banyak akuisisi merusak nilai karena membayar premi lebih besar daripada sinergi yang tercapai.',
          cross: { text: 'Akuisisi x Psikologi Organisasi', domains: ['Bisnis', 'Psikologi'], insight: 'Winner’s curse: pihak yang menawar tertinggi cenderung yang paling optimistis, sehingga sering kelebihan bayar.' },
          story: { who: 'Akuisisi Kompetitor Lokal (ilustrasi)', story: 'Distributor membeli pesaing dengan premi 40% dengan harapan sinergi Rp 2 miliar per tahun. Setelah integrasi, hanya Rp 700 juta tercapai karena pelanggan kunci pergi bersama pendiri. Premi tidak tertutup.', takeaway: 'Sinergi harus dibuktikan dan premi tidak boleh melebihi yang realistis.' },
          actions: ['Untuk target akuisisi hipotetis, tulis sumber sinergi dan nilai realistisnya.', 'Batasi premi maksimum yang bersedia dibayar sesuai sinergi yang dapat dibuktikan.', 'Buat daftar uji tuntas pada pelanggan inti dan ketergantungan pada pendiri.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Tawaran Akuisisi yang Menggoda',
            context: 'Pesaing menjual diri dengan harga premi. Pendiri akan keluar setelah transaksi dan pelanggan terkonsentrasi pada dua klien.',
            dilemma: 'Bagaimana melanjutkan?',
            choices: [
              { text: 'Lakukan uji tuntas, bangun skenario sinergi konservatif, dan negosiasikan pembayaran bertahap yang dikaitkan dengan retensi klien (earn-out).', consequence: 'Risiko dibagi: Anda membayar penuh hanya jika klien bertahan.', explanation: 'Struktur pembayaran dapat menggeser risiko kepada penjual.', best: true },
              { text: 'Bayar penuh di muka agar cepat tuntas.', consequence: 'Dua klien pergi dan nilai akuisisi runtuh.', explanation: 'Risiko tertinggi ada pada konsentrasi klien.' },
              { text: 'Batalkan semua akuisisi selamanya.', consequence: 'Anda kehilangan peluang tumbuh yang bisa disusun dengan aman.', explanation: 'Akuisisi bisa baik bila disiplin.' }
            ]
          },
          quiz: [
            { q: 'Kapan akuisisi menghancurkan nilai?', options: ['Saat premi yang dibayar melebihi sinergi yang tercapai', 'Saat target berlaba', 'Saat memakai uji tuntas', 'Saat dibayar bertahap'], answer: 0, why: 'Nilai bersih turun bila premi melebihi sinergi.' },
            { q: 'Earn-out berarti...', options: ['Sebagian harga dibayar bila target kinerja tercapai', 'Pembayaran tunai penuh', 'Pembatalan kontrak', 'Pinjaman bank'], answer: 0, why: 'Earn-out mengaitkan pembayaran dengan kinerja pasca akuisisi.' }
          ]
        }
      ]
    }
  ]
});
