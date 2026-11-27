export type StoryKind = 'sukses' | 'bangkrut' | 'model';

export interface Story {
  id: string;
  title: string;
  tagline: string;
  kind: StoryKind;
  company: string;
  minutes: number;
  /** Pertanyaan tebak-dulu sebelum cerita dibuka. */
  guess: { q: string; options: string[]; answer: number; reveal: string };
  chapters: { h: string; p: string[] }[];
  takeaways: string[];
  /** Pelajaran NODUS yang menjelaskan konsep di balik kisahnya. */
  lessons: { id: string; why: string }[];
  sources: string[];
}

export const STORY_NOTICE =
  'Kisah ini dirangkum dari sumber publik (laporan perusahaan, dokumen pengadilan, dan media) untuk belajar, bukan nasihat bisnis, hukum, atau investasi. Angka dan status bisa berubah. Penyebab nyata biasanya banyak, jadi anggap ini penyederhanaan.';

export const STORIES: Story[] = [
  {
    id: 'kfc',
    title: 'KFC: dari pom bensin ke 150 negara',
    tagline: 'Bagaimana satu resep ayam digandakan oleh orang lain, bukan oleh pemiliknya sendiri.',
    kind: 'sukses',
    company: 'KFC',
    minutes: 4,
    guess: {
      q: 'Menurutmu, apa yang paling membuat KFC menyebar ke ribuan lokasi?',
      options: ['Harga ayam paling murah', 'Sistem waralaba: pemilik gerai lain yang membuka dan membiayai', 'Iklan televisi besar-besaran sejak awal'],
      answer: 1,
      reveal: 'Pertumbuhan awalnya bertumpu pada waralaba: orang lain memakai resep dan nama, lalu membayar royalti per ayam.',
    },
    chapters: [
      { h: 'Awal: ayam untuk pengendara', p: [
        'Harland Sanders (1890–1980) mulai menyajikan makanan di sebuah pom bensin Shell di North Corbin, Kentucky, sekitar 1930. Orang yang berhenti untuk isi bensin ternyata mau makan juga.',
        'Ia terus memperbaiki cara memasak. Sekitar 1939–1940 ia memodifikasi pressure cooker menjadi pressure fryer supaya ayam matang lebih cepat dan tetap juicy. Gelar "Kentucky Colonel" yang melekat padanya adalah gelar kehormatan negara bagian, bukan pangkat militer.',
      ] },
      { h: 'Titik balik: menjual sistem, bukan hanya ayam', p: [
        'Pada 1952 Sanders menjalin waralaba pertama dengan Pete Harman di Utah. Menurut catatan perusahaan, penjualan gerai itu naik lebih dari tiga kali lipat di tahun pertama.',
        'Skemanya sederhana: pemilik gerai memakai resep dan nama, Sanders menerima royalti sekitar 4 sen per ayam. Nama "Kentucky Fried Chicken" konon dari seorang pelukis papan bernama Don Anderson. Satu orang tidak perlu membuka ratusan dapur; ia cukup membuat sistem yang bisa ditiru.',
        'Sekitar 1963 jaringannya mencapai kira-kira 600 gerai. Pada 1964 Sanders menjual perusahaan seharga US$2 juta kepada grup John Y. Brown Jr. dan Jack Massey, lalu tetap menjadi wajah merek.',
      ] },
      { h: 'Hari ini', p: [
        'Pada 2025 KFC tercatat memiliki sekitar 31.981 lokasi di lebih dari 150 negara. Wajahnya masih sama: sosok Kolonel di logo.',
      ] },
    ],
    takeaways: [
      'Sistem yang bisa ditiru tumbuh lebih cepat daripada kerja satu orang.',
      'Merek bekerja sebagai janji yang sama di mana pun kamu membelinya.',
      'Waralaba memindahkan modal dan risiko gerai ke pemilik gerai, dengan imbalan royalti.',
    ],
    lessons: [
      { id: 'mk-6-brand', why: 'Kenapa merek yang konsisten membuat orang percaya sebelum mencoba.' },
      { id: 'hukum-hki-paten', why: 'Cara melindungi merek dan rahasia dagang secara sah.' },
    ],
    sources: ['Situs resmi KFC dan Yum! Brands (sejarah, jumlah lokasi 2025)', 'Arsip sejarah Kentucky Colonel dan paten pressure fryer (1962)'],
  },
  {
    id: 'kodak',
    title: 'Kodak: menemukan kamera digital, lalu kalah olehnya',
    tagline: 'Penemu teknologinya sendiri bisa tersapu oleh teknologi itu.',
    kind: 'bangkrut',
    company: 'Eastman Kodak',
    minutes: 5,
    guess: {
      q: 'Kodak bangkrut karena apa?',
      options: ['Tidak pernah tahu soal kamera digital', 'Menyembunyikan penemuannya dan lalai', 'Tahu, tetapi bisnis lamanya terlalu menguntungkan untuk ditinggalkan'],
      answer: 2,
      reveal: 'Kodak sendiri yang menemukan kamera digital. Masalahnya lebih rumit: bisnis film sangat menguntungkan, sehingga berpindah terasa seperti merusak mesin uang sendiri.',
    },
    chapters: [
      { h: 'Penemuan yang lahir di rumah sendiri', p: [
        'Insinyur Kodak, Steven Sasson, membuat kamera digital portabel pada Desember 1975. Ukurannya kasar menurut standar sekarang: resolusi 100x100 piksel, berat sekitar 3,6 kg, dan butuh sekitar 23 detik untuk satu gambar. Patennya keluar 1978.',
        'Kodak juga tidak "bodoh" soal ini. Pada 1991 mereka sudah menjual sistem digital profesional seharga sekitar US$20.000. Klaim bahwa Kodak "menyembunyikan" kamera digital dinilai terlalu sederhana, antara lain oleh pengecek fakta Snopes.',
      ] },
      { h: 'Mesin uang lama yang menahan langkah', p: [
        'Kodak hidup dari film dan kimia pencetakannya. Pegawainya mencapai puncak sekitar 145.300 orang pada 1988, dan penjualannya sekitar US$14,5 miliar pada 1997.',
        'Pada 2003, penjualan film konsumen di AS turun sekitar 18% dalam setahun. Penjualan menyusut ke US$6,25 miliar pada 2009 dan sekitar US$2,72 miliar pada 2012. Jumlah pegawai turun menjadi sekitar 18.800 pada awal 2012.',
      ] },
      { h: 'Akhir: Chapter 11', p: [
        'Kodak mengajukan perlindungan kebangkrutan Chapter 11 pada 19 Januari 2012. Sekitar 1.100 patennya kemudian dijual seharga sekitar US$525 juta (Desember 2012), jauh di bawah harapan awal yang disebut-sebut minimal US$2 miliar.',
        'Kodak keluar dari Chapter 11 pada 3 September 2013 dengan utang sekitar US$4,1 miliar dihapus, dan berfokus pada percetakan komersial. Perusahaannya masih ada, tetapi jauh lebih kecil.',
      ] },
    ],
    takeaways: [
      'Mengetahui teknologi baru belum cukup; yang sulit adalah mau memotong bisnis lama yang masih untung.',
      'Penyebab kejatuhan hampir tidak pernah tunggal. Kisah satu kalimat biasanya menyederhanakan.',
      'Bisnis yang sehat hari ini bisa tampak sehat sampai tepat sebelum pasarnya bergeser.',
    ],
    lessons: [
      { id: 'st-6-disruption', why: 'Dilema inovator: kenapa perusahaan besar sulit meninggalkan produk lamanya.' },
      { id: 'st-4-moat', why: 'Kenapa keunggulan yang tampak kuat bisa menghilang saat teknologinya berganti.' },
    ],
    sources: ['Dokumen Chapter 11 Eastman Kodak (SDNY, Jan 2012) dan laporan tahunan perusahaan', 'Pemberitaan penjualan paten Kodak (Des 2012) dan keluar Chapter 11 (Sep 2013)', 'Snopes: penelusuran klaim "Kodak menyembunyikan kamera digital"'],
  },
  {
    id: 'wingstop',
    title: 'Wingstop: menjual sayap saja, dan memusatkan pesanan di ponsel',
    tagline: 'Menu sempit, mayoritas gerai dimiliki franchisee, dan penjualan digital yang dominan.',
    kind: 'sukses',
    company: 'Wingstop',
    minutes: 4,
    guess: {
      q: 'Mana yang paling menggambarkan cara Wingstop berkembang cepat?',
      options: ['Membuka gerai sendiri sebanyak mungkin', 'Memakai menu sempit dan menyerahkan hampir semua gerai ke franchisee', 'Menurunkan harga sayap terus-menerus'],
      answer: 1,
      reveal: 'Sekitar 98% restorannya dimiliki franchisee. Menu yang sempit membuat dapur sederhana dan mudah ditiru.',
    },
    chapters: [
      { h: 'Awal yang kecil', p: [
        'Wingstop berdiri pada 1994 di Garland, Texas, oleh Antonio Swad dan Bernadette Fiaschetti. Waralabanya mulai dijual pada 1997. Fokusnya menu sayap ayam, dengan sedikit pendamping.',
        'Fokus sempit punya efek praktis: bahan lebih sedikit, pelatihan lebih mudah, dapur kecil, dan kualitas lebih seragam antar gerai.',
      ] },
      { h: 'Skala lewat franchisee', p: [
        'Perusahaan dibeli Gemini (2003) lalu Roark (2010), kemudian melantai di bursa Nasdaq pada Juni 2015 dengan harga US$19 per saham (sekitar US$110 juta terkumpul).',
        'Hampir semua restorannya (sekitar 98%) dimiliki franchisee. Menurut laporan tahunan (10-K) untuk tahun fiskal 2025, jaringannya mencapai 3.056 restoran, dengan penjualan seluruh sistem sekitar US$5,3 miliar dan pertumbuhan unit 19,2%.',
      ] },
      { h: 'Peran pesanan digital', p: [
        'Pada kuartal IV 2025, sekitar 73,2% penjualan datang dari pesanan digital (kuartal IV 2024: 70,3%). Pesanan digital membuat dapur bisa lebih kecil dan antreannya terukur.',
        'Ceritanya tidak mulus terus. Penjualan gerai yang sama (SSS) domestik naik sekitar 19,9% pada 2024, lalu turun sekitar 3,3% pada 2025. Angka sebesar ini wajar naik-turun, dan itulah sebabnya pertumbuhan jumlah gerai dan pertumbuhan penjualan per gerai perlu dibaca terpisah.',
      ] },
      { h: 'Kenapa franchisee mau', p: [
        'Dalam laporan tahunannya, Wingstop menyebut investasi awal rata-rata sekitar US$580 ribu, penjualan rata-rata per gerai sekitar US$2,0 juta setahun, dan target pengembalian tunai sekitar 70% atau lebih pada tahun kedua. Itu target manajemen, bukan jaminan untuk siapa pun.',
      ] },
    ],
    takeaways: [
      'Menu sempit membuat operasi mudah diulang di banyak tempat.',
      'Waralaba menumbuhkan jaringan tanpa modal besar dari pusat.',
      'Bedakan "jumlah gerai naik" dari "penjualan per gerai naik"; keduanya cerita yang berbeda.',
    ],
    lessons: [
      { id: 'st-3-generic', why: 'Strategi fokus: kenapa memilih sedikit hal bisa lebih kuat.' },
      { id: 'mi-3-skala', why: 'Bagaimana skala mengubah struktur biaya per unit.' },
    ],
    sources: ['Wingstop Inc., laporan tahunan 10-K tahun fiskal 2025', 'Dokumen IPO Wingstop (Juni 2015)'],
  },
  {
    id: 'blockbuster',
    title: 'Blockbuster: 9.000 gerai, lalu hilang',
    tagline: 'Raksasa sewa video yang terlambat menyadari bahwa pelanggannya tidak lagi mau datang ke toko.',
    kind: 'bangkrut',
    company: 'Blockbuster',
    minutes: 5,
    guess: {
      q: 'Kira-kira apa yang paling sering disebut sebagai satu-satunya penyebab Blockbuster tumbang?',
      options: ['Denda keterlambatan', 'Kalah bersaing harga dengan bioskop', 'Film yang kurang lengkap'],
      answer: 0,
      reveal: 'Denda keterlambatan memang sering disebut. Tetapi sumbernya menunjukkan gambaran lebih ramai: utang, perubahan perilaku, dan keputusan yang datang terlambat.',
    },
    chapters: [
      { h: 'Puncak', p: [
        'Akhir 2004 Blockbuster punya 9.094 gerai (9.042 di akhir 2005), dengan pendapatan sekitar US$6,05 miliar pada 2004 dan rugi bersih sekitar US$1,25 miliar pada tahun yang sama.',
        'Denda keterlambatan (late fee) menyumbang porsi yang besar. Menurut hitungan penulis dari laporan 10-K, nilainya sekitar US$622–739 juta per tahun pada 2002–2004, kira-kira 10% dari pendapatan 2004.',
      ] },
      { h: 'Pelanggan bergeser', p: [
        'Netflix tumbuh dari sekitar 1 juta pelanggan (2002) menjadi sekitar 15 juta (2010). Blockbuster menghapus denda keterlambatan pada 1 Januari 2005, dengan proyeksi kehilangan laba operasi sekitar US$250–300 juta.',
        'Satu cerita populer menyebut pendiri Netflix pernah menawarkan diri dijual kepada Blockbuster seharga US$50 juta. Itu pernyataan pihak Netflix, dan John Antioco (mantan CEO Blockbuster) membantahnya. Tahun kejadiannya pun tidak pasti, jadi anggap ini cerita, bukan fakta yang sudah terbukti.',
      ] },
      { h: 'Akhir', p: [
        'Blockbuster mengajukan Chapter 11 pada 23 September 2010, dengan utang sekitar US$1,46 miliar dan sekitar 3.300 gerai di AS. Dish Network membeli asetnya pada April 2011 seharga sekitar US$320 juta (sekitar 1.700 gerai), dan menutup gerai-gerai miliknya pada 2013.',
      ] },
    ],
    takeaways: [
      'Pendapatan yang terasa tidak adil bagi pelanggan bisa jadi jurang yang dimanfaatkan pesaing.',
      'Utang besar mengecilkan ruang untuk berputar arah.',
      'Satu penjelasan yang enak diceritakan (late fee!) jarang menjelaskan seluruh kejatuhan.',
    ],
    lessons: [
      { id: 'st-6-disruption', why: 'Kenapa model baru bisa menang justru karena lebih nyaman, bukan lebih canggih.' },
      { id: 'val-6-struktur', why: 'Bagaimana utang membatasi keputusan perusahaan saat pasar berubah.' },
    ],
    sources: ['Blockbuster Inc., laporan 10-K 2004–2005', 'Dokumen Chapter 11 Blockbuster (SDNY, Sep 2010)', 'Pemberitaan pembelian aset oleh Dish Network (Apr 2011)'],
  },
  {
    id: 'pagani',
    title: 'Pagani: sengaja dibuat sedikit',
    tagline: 'Pabrik mobil kecil di Italia yang memilih membuat puluhan unit, bukan ribuan.',
    kind: 'sukses',
    company: 'Pagani Automobili',
    minutes: 4,
    guess: {
      q: 'Kenapa Pagani justru membatasi produksinya?',
      options: ['Karena tidak mampu membuat lebih banyak', 'Karena kelangkaan dan personalisasi adalah bagian dari nilai yang dijual', 'Karena aturan pemerintah Italia'],
      answer: 1,
      reveal: 'Unit yang sedikit, dibuat nyaris custom, dan dijual dengan cerita pembuatnya sendiri. Nilainya ada di kelangkaan dan craftsmanship.',
    },
    chapters: [
      { h: 'Dari Argentina ke Italia', p: [
        'Horacio Pagani lahir di Argentina. Ia pindah ke Italia pada usia sekitar 28 tahun dengan rekomendasi Juan Manuel Fangio, lalu bekerja di Lamborghini, tempat ia terlibat di departemen material komposit (serat karbon).',
        'Pada akhir 1980-an ia mendirikan perusahaan komposit sendiri, lalu Pagani Automobili pada 1992. Keahlian bahan jadi modal utamanya, bukan modal uang.',
      ] },
      { h: 'Mobil pertama', p: [
        'Pagani Zonda C12 diperkenalkan di Geneva pada 1999, bermesin V12 6,0 liter berdaya sekitar 402 hp. Mesinnya dipasok oleh divisi AMG milik Mercedes, jadi Pagani tidak perlu membangun pabrik mesin sendiri.',
        'Prinsip ini penting: fokus pada yang membedakan (desain dan bodi komposit), lalu membeli bagian lain dari pemasok terbaik.',
      ] },
      { h: 'Sengaja langka', p: [
        'Huayra dibuat hanya 100 unit (versi "100" dengan 740 PS dan material "carbotanium"). Utopia diungkap pada September 2022 dengan 99 unit, harga mulai sekitar US$2,19 juta, dan pengiriman pertama Oktober 2023.',
        'Menurut Christopher Pagani, produksi sekitar 50 mobil per tahun. Pembeli ikut menentukan banyak detail, sehingga setiap mobil terasa seperti karya yang dipesan.',
      ] },
    ],
    takeaways: [
      'Di pasar mewah, kelangkaan dan cerita pembuat adalah bagian dari produknya.',
      'Fokus pada satu keahlian inti; beli sisanya dari pemasok.',
      'Skala bukan satu-satunya jalan; margin per unit yang tinggi juga bisa menghidupi bisnis.',
    ],
    lessons: [
      { id: 'ec-8-merek', why: 'Kenapa merek yang dipercaya bisa menahan harga premium.' },
      { id: 'beh-2-2', why: 'Bagaimana kelangkaan memengaruhi keinginan orang membeli.' },
    ],
    sources: ['Situs resmi Pagani Automobili (sejarah, Zonda, Huayra, Utopia)', 'Siaran pers peluncuran Utopia (Sep 2022) dan wawancara Christopher Pagani'],
  },
  {
    id: 'gacoan',
    title: 'Mie Gacoan: mi murah yang selalu antre',
    tagline: 'Apa yang bisa kita pelajari dari restoran mi yang tumbuh cepat dari Malang, termasuk satu persoalan hukumnya.',
    kind: 'sukses',
    company: 'PT Pesta Pora Abadi',
    minutes: 4,
    guess: {
      q: 'Apa yang paling mungkin membuat gerai makanan murah bisa tumbuh cepat?',
      options: ['Resep rahasia yang tidak ada di tempat lain', 'Menu terbatas, SOP seragam, dan gerai luas yang bisa menampung banyak orang', 'Iklan selebritas'],
      answer: 1,
      reveal: 'Alasan nyata pasti banyak. Tetapi pola umum bisnis mi murah adalah menu sempit, proses terstandar, dan volume besar.',
    },
    chapters: [
      { h: 'Awal dan arti namanya', p: [
        'Mie Gacoan dikelola PT Pesta Pora Abadi dan mulai berdiri awal 2016 di Malang. "Gacoan" berarti andalan.',
        'Mi-nya mulai dari sekitar Rp10.000, sehingga pelajar dan pekerja muda bisa makan di sana tanpa berpikir panjang.',
      ] },
      { h: 'Rancangan yang membuatnya ramai', p: [
        'Dua hal sering dibahas: gerai yang luas dan terpisah dari ruko kecil, sehingga bisa menampung banyak pengunjung, dan SOP memasak yang seragam sehingga rasa dan kecepatan terjaga.',
        'Menu yang sempit dengan harga rendah berarti perputaran tinggi: margin per mangkuk kecil, tetapi jumlah mangkuk banyak. Angka pasti untung dan rugi mereka tidak dipublikasikan, jadi kita hanya bisa membaca polanya.',
      ] },
      { h: 'Persoalan hukum soal musik', p: [
        'Di Bali, SELMI (lembaga kolektif royalti musik) melaporkan masalah pemutaran musik ke Polda Bali pada 26 Agustus 2024. Pada Juli 2025 direktur PT Mitra Bali Sukses (mitra yang mengelola gerai di Bali) ditetapkan sebagai tersangka, dan pada 8 Agustus 2025 tercapai perdamaian dengan pembayaran Rp2,2 miliar. Status pidananya belum final menurut sumber yang kami baca.',
        'Pelajarannya netral dan berlaku untuk semua usaha: memutar musik di tempat usaha adalah penggunaan komersial, dan lisensinya perlu diurus. Ini kasus satu mitra, bukan penilaian atas seluruh perusahaan.',
      ] },
    ],
    takeaways: [
      'Menu sempit, SOP seragam, dan volume tinggi adalah resep umum bisnis harga murah.',
      'Margin tipis bukan masalah selama perputarannya besar dan biayanya terkendali.',
      'Izin dan lisensi (termasuk royalti musik) adalah biaya usaha yang sering terlupa.',
    ],
    lessons: [
      { id: 'id-2-kedai', why: 'Cara menghitung HPP dan margin resep untuk usaha F&B.' },
      { id: 'ue-3-harga', why: 'Kapan harga rendah masuk akal, dan kapan jadi jebakan.' },
    ],
    sources: ['Profil perusahaan dan pemberitaan nasional tentang Mie Gacoan', 'Pemberitaan kasus royalti musik di Bali (Agu 2024 – Agu 2025)'],
  },
  {
    id: 'tupperware',
    title: 'Tupperware: wadah legendaris yang kehilangan penjualnya',
    tagline: 'Pesta rumahan yang pernah jadi mesin penjualan, lalu mesin itu berhenti berputar.',
    kind: 'bangkrut',
    company: 'Tupperware Brands',
    minutes: 4,
    guess: {
      q: 'Apa yang paling membuat Tupperware sulit beradaptasi?',
      options: ['Produknya buruk', 'Hampir seluruh penjualannya bergantung pada satu cara jual yang menyusut', 'Tidak ada yang mau membeli plastik lagi'],
      answer: 1,
      reveal: 'Sekitar 90% pendapatan 2023 datang dari penjualan langsung (pesta rumahan). Saat penjualnya berkurang, hampir tidak ada penopang lain.',
    },
    chapters: [
      { h: 'Mesin penjualannya', p: [
        'Tupperware dikenal lewat pesta rumahan: penjual mengundang teman, mendemonstrasikan produk, dan mendapat komisi. Sekitar 90% pendapatan 2023 datang dari model penjualan langsung.',
        'Model ini hemat iklan: pemasarannya sekitar 1% dari penjualan. Tetapi seluruh bisnisnya bertumpu pada jumlah penjual aktif.',
      ] },
      { h: 'Tanda-tanda melemah', p: [
        'Pendapatan 2022 sekitar US$1,3 miliar, turun sekitar 42% dibanding lima tahun sebelumnya. Peringatan "keraguan atas kelangsungan usaha" (going concern) pertama muncul sekitar April 2023.',
        'Menurut dokumen pengadilan yang dikutip media, penyebabnya antara lain adaptasi e-commerce yang lambat, sentimen anti-plastik, inefisiensi internal, dan penjual yang menyusut.',
      ] },
      { h: 'Chapter 11', p: [
        'Tupperware mengajukan Chapter 11 pada 17 September 2024 di Delaware, dengan utang berbunga sekitar US$811,8 juta, sekitar 5.450 pegawai, dan lebih dari 465.000 penjual di sekitar 70 negara.',
        'Pada 29 Oktober 2024 asetnya dijual kepada para pemberi pinjaman, dengan nilai sekitar US$23,5 juta tunai ditambah pembebasan utang lebih dari US$63 juta.',
      ] },
    ],
    takeaways: [
      'Ketergantungan pada satu saluran penjualan adalah risiko tersembunyi.',
      'Merek yang dikenal luas tidak otomatis menjamin penjualan jika kebiasaan pelanggan berubah.',
      'Utang yang tinggi saat pendapatan menurun mempercepat jatuhnya perusahaan.',
    ],
    lessons: [
      { id: 'st-6-disruption', why: 'Kenapa perubahan saluran dan kebiasaan pelanggan bisa menggerus perusahaan mapan.' },
      { id: 'acc-4-arus-kas', why: 'Kenapa perusahaan dengan merek kuat bisa tetap kehabisan kas.' },
    ],
    sources: ['Dokumen Chapter 11 Tupperware Brands (D. Del., Sep 2024)', 'Laporan tahunan 10-K 2022 dan 2023', 'Pemberitaan penjualan aset (Okt 2024)'],
  },
  {
    id: 'aw',
    title: 'A&W: kenapa gerainya tampak sepi tapi tetap jalan?',
    tagline: 'Kisah yang jujur: sebagian pertanyaan tidak punya jawaban publik, dan itu pelajarannya.',
    kind: 'model',
    company: 'A&W',
    minutes: 4,
    guess: {
      q: 'Kalau sebuah gerai tampak sepi, apa kesimpulan paling aman dari luar?',
      options: ['Pasti rugi dan akan tutup', 'Pasti ada rahasia di baliknya', 'Kita belum bisa menyimpulkan tanpa melihat datanya'],
      answer: 2,
      reveal: 'Kesan ramai-sepi tidak sama dengan untung-rugi. Datanya ada di laporan keuangan, dan sering tidak dibuka ke publik.',
    },
    chapters: [
      { h: 'Merek tua', p: [
        'A&W didirikan pada 1919 di Lodi, California oleh Roy Allen (nama A&W berasal dari Allen dan Wright, sejak 1922). Waralabanya dimulai sekitar 1925; Yum! Brands pernah menyebutnya waralaba restoran cepat saji tertua yang masih berjalan di Amerika.',
        'Di AS, A&W dijual Yum! pada Desember 2011 kepada A Great American Brand bersama para franchisee. Sekarang ada lebih dari 850 restoran, dengan penjualan seluruh sistem sekitar US$261 juta pada 2023. Di Kanada, A&W adalah perusahaan terpisah dengan 1.073 restoran di akhir tahun fiskal 2024 dan penjualan sistem sekitar C$1,87 miliar; pendapatan utamanya berasal dari biaya waralaba.',
      ] },
      { h: 'Di Indonesia', p: [
        'Menurut satu media, gerai A&W Indonesia pertama dibuka pada 21 April 1985 di Melawai. Situs resminya menyebut PT Prima Usaha Era Mandiri sebagai operator, sementara ada media lain yang menyebut nama perusahaan berbeda; kami tidak bisa memastikan mana yang terkini.',
      ] },
      { h: 'Jadi, kenapa tampak sepi namun tetap jalan?', p: [
        'Kami tidak menemukan sumber yang kuat untuk menjelaskan kondisi gerai tertentu di Indonesia, dan kami memilih tidak mengarang alasan. Banyak dugaan di internet tentang sewa, kepemilikan, atau keuangannya, tetapi tanpa dokumen, itu tetap dugaan.',
        'Yang bisa kita pelajari adalah cara berpikirnya. Sebuah gerai bisa bertahan walau terlihat sepi karena beberapa hal yang memang masuk akal secara umum: pesanan antar (delivery), jam sibuk yang tidak terlihat dari luar, pemilik yang mengelola beberapa gerai, atau biaya yang rendah. Semua itu hipotesis untuk diuji dengan data, bukan fakta tentang A&W.',
      ] },
    ],
    takeaways: [
      'Ramai atau sepi di mata kita bukan ukuran untung atau rugi; arus kas dan margin yang menentukan.',
      'Waralaba bisa tetap berjalan walau tiap gerai terlihat biasa, karena pusat hidup dari fee.',
      'Kalau sumber tidak ada, jawaban jujurnya adalah "belum tahu", bukan teori yang terdengar pintar.',
    ],
    lessons: [
      { id: 'acc-4-arus-kas', why: 'Kenapa laba, kas, dan keramaian adalah tiga hal yang berbeda.' },
      { id: 'st-4-moat', why: 'Kenapa merek tua tetap punya daya tahan walau tidak tampak mencolok.' },
    ],
    sources: ['Yum! Brands (2011) dan siaran penjualan A&W ke A Great American Brand', 'A&W Food Services of Canada, laporan tahun fiskal 2024', 'Situs resmi A&W Indonesia dan pemberitaan nasional (tanggal pembukaan, operator tidak sepenuhnya seragam)'],
  },
  {
    id: 'tanpa-stok',
    title: 'Jualan tanpa stok: kenapa banyak orang memilihnya',
    tagline: 'Dropship, reseller, dan pre-order: menukar margin dengan risiko yang lebih kecil.',
    kind: 'model',
    company: 'Model bisnis',
    minutes: 4,
    guess: {
      q: 'Apa risiko utama menjual barang yang belum kamu pegang stoknya?',
      options: ['Tidak ada, justru paling aman', 'Barang kosong, kualitas tak terkontrol, dan reputasi tetap kamu yang tanggung', 'Pajaknya lebih besar'],
      answer: 1,
      reveal: 'Risiko stok berpindah, bukan hilang: kamu tetap yang ditanya pembeli ketika barang telat atau salah.',
    },
    chapters: [
      { h: 'Kenapa orang takut menumpuk stok', p: [
        'Membeli barang dulu berarti modal terkunci. Kalau tidak laku, uangnya mengendap, dan barang bisa jadi "dead stock". Wajar kalau pemula takut. Karena itu banyak orang memilih bentuk usaha yang tidak menahan stok.',
      ] },
      { h: 'Tiga cara umum', p: [
        'Dropship: kamu menawarkan barang, pemasok mengirim langsung ke pembeli. Menurut DHL, kelebihannya modal minim; kekurangannya risiko stok kosong, kualitas, reputasi, dan logistik antarpulau.',
        'Pre-order: barang dibuat atau dibeli setelah ada pesanan. Konsinyasi: barang dititip dan baru dibayar setelah laku. Keduanya menggeser risiko stok, tetapi butuh kepercayaan dan aturan yang jelas.',
      ] },
      { h: 'Harga yang dibayar', p: [
        'Kompetisinya padat. McKinsey memperkirakan sekitar 85% pedagang e-commerce Indonesia adalah reseller (data 2018). Karena banyak orang menjual barang yang sama, harganya tertekan dan margin menipis.',
        'Beberapa penyedia layanan menyebut angka margin yang menarik, tetapi angka seperti itu biasanya datang dari pihak yang menjual layanannya, jadi perlakukan sebagai klaim, bukan kepastian.',
      ] },
    ],
    takeaways: [
      'Tanpa stok bukan tanpa risiko; risikonya pindah ke reputasi, kualitas, dan margin.',
      'Margin tipis dan banyak pesaing adalah ciri model yang mudah ditiru.',
      'Mulai dengan menghitung margin bersih setelah semua potongan, bukan harga jual saja.',
    ],
    lessons: [
      { id: 'ec-5-stok', why: 'Kenapa stok mengikat modal, dan cara menghindari dead stock.' },
      { id: 'ec-1-margin', why: 'Menghitung margin sebenarnya setelah biaya marketplace.' },
    ],
    sources: ['DHL: panduan dropshipping', 'McKinsey & Company: laporan e-commerce Indonesia (2018)'],
  },
  {
    id: 'direct-selling',
    title: 'Penjualan langsung dan skema piramida: apa bedanya?',
    tagline: 'Dua hal yang sering dianggap sama. Hukum Indonesia membedakannya dengan kriteria yang bisa dicek.',
    kind: 'model',
    company: 'Model bisnis',
    minutes: 5,
    guess: {
      q: 'Apa yang paling membedakan penjualan langsung yang sah dari skema piramida?',
      options: ['Jumlah levelnya', 'Dari mana uang berasal: penjualan produk ke konsumen, atau uang perekrutan anggota baru', 'Merek produknya'],
      answer: 1,
      reveal: 'Intinya sumber penghasilan: penjualan barang yang nyata, atau biaya dan setoran dari anggota baru.',
    },
    chapters: [
      { h: 'Apa itu penjualan langsung', p: [
        'Penjualan langsung (direct selling) adalah menjual barang langsung ke konsumen lewat jaringan penjual, tanpa toko. Ada yang berjenjang (multi level marketing, MLM), ada yang tidak.',
        'Di Indonesia, aturan utamanya adalah Permendag 70/2019 (tentang distribusi barang secara langsung). Ia juga menyebut sejumlah kewajiban bagi penyelenggara, misalnya masa pertimbangan 10 hari kerja dan jaminan pembelian kembali barang.',
      ] },
      { h: 'Garis batas dengan piramida', p: [
        'Permendag 70/2019 menyebut tiga kriteria skema piramida pada Pasal 30, dan UU 7/2014 tentang Perdagangan (Pasal 9) melarang skema piramida. Karena detail pasal dan sanksinya terus bisa berubah, cek peraturan terbaru sebelum mengambil keputusan.',
        'Pertanyaan yang aman untuk diajukan ke diri sendiri: apakah penghasilannya terutama dari menjual barang ke konsumen, atau dari merekrut orang yang membayar untuk bergabung?',
      ] },
      { h: 'Angka dari luar negeri', p: [
        'Data FTC (Amerika Serikat) 2024 dari 70 pernyataan pendapatan 79 perusahaan MLM menunjukkan mayoritas penjual menerima kurang lebih US$1.000 per tahun atau lebih rendah (sekitar US$84 per bulan), dan itu adalah pendapatan kotor, belum dikurangi biaya.',
        'Data ini dari AS, bukan Indonesia, dan tidak berarti setiap perusahaan sama. Gunanya satu: mengingatkan agar kamu meminta angka penghasilan nyata sebelum bergabung.',
      ] },
    ],
    takeaways: [
      'Tanyakan sumber uangnya: penjualan nyata ke konsumen atau biaya dari anggota baru.',
      'Minta data penghasilan anggota yang nyata, dan hitung setelah biaya.',
      'Cek legalitas penyelenggara dan aturan terbaru, jangan hanya mendengar dari yang mengajak.',
    ],
    lessons: [
      { id: 'ec-1-margin', why: 'Cara menghitung untung bersih dari pendapatan kotor.' },
      { id: 'corp-1-2', why: 'Dasar legalitas usaha dan cara memeriksa izin.' },
    ],
    sources: ['Permendag 70/2019 tentang Distribusi Barang Secara Langsung', 'UU 7/2014 tentang Perdagangan', 'FTC (AS): analisis pernyataan pendapatan perusahaan MLM, 2024'],
  },
];

const KEY = 'nodus_stories_v1';

export const readStoriesRead = (): Record<string, number> => {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; }
};

export const markStoryRead = (id: string): void => {
  try {
    const r = readStoriesRead();
    r[id] = Date.now();
    localStorage.setItem(KEY, JSON.stringify(r));
  } catch { /* abaikan */ }
};
