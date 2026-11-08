import { buildPath } from '../curriculumBuilder';

// Konten bersifat edukasi, bukan rekomendasi investasi. Angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung.
export const INVESTING_CURRICULUM = buildPath({
  id: 'curriculum-investasi-dasar',
  topic: 'Investasi & Pasar Modal untuk Pemula',
  description:
    'Fondasi berinvestasi dengan kepala dingin: bunga majemuk, risiko vs imbal hasil, diversifikasi, instrumen utama, dan psikologi investor. Edukasi, bukan rekomendasi produk.',
  stages: [
    {
      title: 'Fondasi Berinvestasi',
      lessons: [
        {
          id: 'inv-1-majemuk',
          label: 'Bunga Majemuk dan Nilai Waktu Uang',
          domain: 'Keuangan',
          summary: 'Mengapa memulai lebih awal jauh lebih kuat daripada berinvestasi lebih besar belakangan, dan mengapa inflasi membuat uang diam menyusut.',
          model: 'Compound Interest & Time Value of Money',
          analogy: 'Bunga majemuk seperti bola salju yang menggelinding: makin besar, makin banyak salju yang menempel per putaran. Awalnya terasa lambat, tetapi ujungnya longsor besar.',
          insight: 'Nilai Masa Depan = Pokok x (1 + r)^n. Aturan 72: waktu menggandakan kira-kira 72 / suku bunga (%). Pada 8% per tahun uang menggandakan sekitar 9 tahun. Inflasi bekerja berkebalikan: daya beli uang tunai turun setiap tahun, sehingga imbal hasil riil = imbal hasil nominal - inflasi.',
          cross: { text: 'Majemuk x Ekonomi Makro', domains: ['Keuangan', 'Ekonomi'], insight: 'Suku bunga dan inflasi ditentukan kondisi makro. Imbal hasil yang tampak besar bisa nol secara riil bila inflasi sama tingginya.' },
          story: { who: 'Dua Penabung Bertemu Waktu (ilustrasi)', story: 'Ani menabung Rp 1 juta per bulan dari usia 25 sampai 35 lalu berhenti. Budi menabung Rp 1 juta per bulan dari usia 35 sampai 55. Dengan asumsi imbal hasil sama 8% per tahun, Ani bisa mengungguli Budi di usia 55 walau menyetor jauh lebih sedikit, karena uangnya bekerja lebih lama.', takeaway: 'Waktu adalah variabel paling berharga. Memulai kecil sekarang sering mengalahkan memulai besar nanti. Hasil riil tidak dijamin dan asumsi imbal hasil hanyalah ilustrasi.' },
          actions: ['Hitung nilai Rp 1 juta hari ini pada 8% selama 10, 20, dan 30 tahun.', 'Hitung imbal hasil riil tabungan Anda setelah dikurangi inflasi.', 'Tetapkan jumlah rutin bulanan yang kecil namun konsisten untuk mulai.'],
          level: 'Pemula', time: '5 min', tool: 'compound',
          scenario: {
            title: 'Dilema Menunggu Modal Besar',
            context: 'Anda ingin berinvestasi tetapi menunggu punya Rp 50 juta dulu agar "layak".',
            dilemma: 'Apa langkah paling masuk akal?',
            choices: [
              { text: 'Mulai sekarang dengan nominal kecil rutin, sambil terus belajar dan menaikkan setoran saat penghasilan naik.', consequence: 'Anda mendapat waktu majemuk dan kebiasaan investasi sejak dini.', explanation: 'Konsistensi dan waktu mengalahkan menunggu momen sempurna.', best: true },
              { text: 'Menunggu sampai modal besar terkumpul.', consequence: 'Bertahun-tahun waktu majemuk hilang, inflasi menggerus tabungan.', explanation: 'Menunda berarti kehilangan efek waktu yang tak bisa dikejar.' },
              { text: 'Pinjam uang untuk investasi besar agar cepat.', consequence: 'Cicilan dan risiko membesar. Penurunan pasar bisa memaksa Anda rugi.', explanation: 'Leverage pada investor pemula menambah risiko tanpa pengalaman.' }
            ]
          },
          quiz: [
            { q: 'Dengan aturan 72, pada 8% per tahun uang menggandakan sekitar...', options: ['3 tahun', '9 tahun', '20 tahun', '72 tahun'], answer: 1, why: '72 / 8 = 9 tahun.' },
            { q: 'Imbal hasil nominal 6% dan inflasi 4%. Imbal hasil riil kira-kira?', options: ['10%', '2%', '6%', '-4%'], answer: 1, why: '6% - 4% = sekitar 2%.' }
          ]
        },
        {
          id: 'inv-2-risiko',
          label: 'Risiko, Imbal Hasil, dan Profil Anda',
          domain: 'Keuangan',
          summary: 'Imbal hasil lebih tinggi hampir selalu datang dengan risiko lebih tinggi. Mengetahui toleransi dan kapasitas risiko Anda mencegah keputusan panik.',
          model: 'Risk-Return Tradeoff & Risk Profile',
          analogy: 'Risiko seperti kecepatan berkendara: makin cepat makin cepat sampai, tetapi makin parah akibat bila terjadi hal tak terduga. Anda memilih kecepatan sesuai kondisi jalan dan kemampuan menyetir, bukan sekadar ingin cepat.',
          insight: 'Toleransi risiko (psikologis) berbeda dari kapasitas risiko (finansial: seberapa besar rugi yang sanggup ditanggung). Horizon waktu penting: dana yang dibutuhkan dalam 1-2 tahun tak layak ditaruh di aset yang sangat berfluktuasi. Volatilitas bukan kerugian permanen, tetapi bisa menjadi kerugian nyata bila Anda terpaksa menjual saat turun.',
          cross: { text: 'Risiko x Psikologi Kerugian', domains: ['Keuangan', 'Psikologi'], insight: 'Teori prospek menunjukkan kerugian terasa sekitar dua kali lebih menyakitkan daripada keuntungan senilai. Itu mendorong menjual panik di titik rendah.' },
          story: { who: 'Investor yang Panik (ilustrasi)', story: 'Seorang investor menaruh dana darurat di aset berfluktuasi tinggi. Saat pasar turun 25% ia butuh uang mendesak dan terpaksa menjual rugi. Dengan dana darurat terpisah, ia bisa membiarkan investasi pulih.', takeaway: 'Pisahkan dana berdasarkan kapan dibutuhkan. Dana jangka pendek dan dana darurat tidak untuk aset berisiko.' },
          actions: ['Tuliskan kerugian maksimal (dalam rupiah) yang sanggup Anda tanggung tanpa mengubah gaya hidup.', 'Pisahkan dana: darurat, jangka pendek (<3 tahun), jangka panjang.', 'Tetapkan horizon waktu untuk setiap tujuan keuangan.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Pasar Turun 20%',
            context: 'Portofolio Anda turun 20% dalam sebulan. Teman menyarankan menjual semua sekarang.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Tinjau tujuan dan horizon. Jika dana jangka panjang dan rencana tidak berubah, tetap pada rencana dan lanjutkan setoran rutin.', consequence: 'Anda menghindari mengunci kerugian dan tetap membeli di harga lebih rendah.', explanation: 'Keputusan harus mengikuti rencana dan horizon, bukan emosi sesaat.', best: true },
              { text: 'Jual semua agar tak rugi lebih jauh.', consequence: 'Kerugian menjadi nyata dan Anda berisiko melewatkan pemulihan.', explanation: 'Menjual panik sering terjadi di titik terendah.' },
              { text: 'Pinjam uang untuk membeli lebih banyak karena murah.', consequence: 'Jika turun lagi, kerugian membesar dan Anda terjepit cicilan.', explanation: 'Utang menambah risiko pada saat paling tidak pasti.' }
            ]
          },
          quiz: [
            { q: 'Dana yang dibutuhkan dalam 1 tahun sebaiknya ditaruh di...', options: ['Aset sangat berfluktuasi', 'Instrumen yang stabil dan likuid', 'Saham gorengan', 'Tidak perlu dipisah'], answer: 1, why: 'Dana jangka pendek butuh kepastian nilai dan kemudahan dicairkan.' },
            { q: 'Apa beda toleransi dan kapasitas risiko?', options: ['Sama saja', 'Toleransi itu psikologis, kapasitas itu kemampuan finansial menanggung rugi', 'Kapasitas itu perasaan', 'Toleransi itu pajak'], answer: 1, why: 'Keduanya perlu dipertimbangkan bersama.' }
          ]
        },
        {
          id: 'inv-3-diversifikasi',
          label: 'Diversifikasi dan Alokasi Aset',
          domain: 'Keuangan',
          summary: 'Tidak menaruh semua telur di satu keranjang, dan mengapa pembagian antar kelas aset lebih menentukan hasil daripada memilih satu produk.',
          model: 'Modern Portfolio Theory & Asset Allocation',
          analogy: 'Diversifikasi seperti menu makan seimbang: Anda tidak hanya makan satu jenis makanan karena kekurangan satu zat bisa membahayakan. Aset yang berbeda bereaksi berbeda terhadap kondisi ekonomi.',
          insight: 'Teori portofolio modern (Markowitz) menunjukkan bahwa menggabungkan aset yang tidak bergerak identik menurunkan risiko total tanpa selalu menurunkan imbal hasil. Alokasi aset, yaitu proporsi saham, obligasi, kas, dan lainnya, menjelaskan sebagian besar variasi hasil portofolio. Rebalancing berkala menjaga proporsi sesuai rencana.',
          cross: { text: 'Diversifikasi x Teori Probabilitas', domains: ['Keuangan', 'Data & Analitik'], insight: 'Menggabungkan sumber ketidakpastian yang tak berkorelasi menurunkan variasi total, prinsip yang sama dengan asuransi.' },
          story: { who: 'Portofolio Satu Saham (ilustrasi)', story: 'Seorang investor menaruh 80% dana di satu saham favorit. Ketika perusahaan itu bermasalah, nilai portofolio turun jauh lebih dalam daripada pasar. Investor lain yang menyebar ke beberapa kelas aset mengalami penurunan yang lebih kecil.', takeaway: 'Risiko spesifik satu perusahaan bisa dikurangi lewat diversifikasi, sedangkan risiko pasar tidak.' },
          actions: ['Tuliskan alokasi saat ini: berapa persen di kas, obligasi/sukuk, saham, lainnya.', 'Tetapkan target alokasi sesuai horizon dan toleransi risiko Anda.', 'Jadwalkan tinjauan alokasi (rebalancing) sekali atau dua kali setahun.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Saham yang Sedang Naik Tajam',
            context: 'Satu saham di portofolio naik hingga porsinya 60% dari total dana.',
            dilemma: 'Apa tindakan paling disiplin?',
            choices: [
              { text: 'Lakukan rebalancing ke target alokasi dengan menjual sebagian dan mengalihkan ke aset lain sesuai rencana.', consequence: 'Risiko terkonsentrasi turun dan Anda mengunci sebagian keuntungan.', explanation: 'Rebalancing mengembalikan risiko ke tingkat yang Anda pilih.', best: true },
              { text: 'Tambah lagi karena sedang naik.', consequence: 'Konsentrasi makin tinggi dan satu kabar buruk bisa merusak portofolio.', explanation: 'Mengejar kenaikan menambah risiko spesifik.' },
              { text: 'Jual semuanya dan tinggalkan pasar.', consequence: 'Anda melewatkan potensi pertumbuhan dan bisa menanggung pajak serta biaya.', explanation: 'Tindakan ekstrem jarang sejalan dengan rencana.' }
            ]
          },
          quiz: [
            { q: 'Risiko apa yang bisa dikurangi dengan diversifikasi?', options: ['Risiko spesifik perusahaan', 'Seluruh risiko pasar', 'Inflasi', 'Pajak'], answer: 0, why: 'Risiko spesifik dapat tersebar, sementara risiko pasar tetap ada.' },
            { q: 'Apa itu rebalancing?', options: ['Menjual semua aset', 'Mengembalikan proporsi aset ke target', 'Membeli saham baru terus', 'Menutup rekening'], answer: 1, why: 'Rebalancing menjaga alokasi sesuai target.' }
          ]
        }
      ]
    },
    {
      title: 'Instrumen & Strategi',
      lessons: [
        {
          id: 'inv-4-instrumen',
          label: 'Instrumen Utama: Reksa Dana, Obligasi, Saham, Emas',
          domain: 'Keuangan',
          summary: 'Cara kerja, risiko, dan fungsi tiap instrumen sehingga Anda memilih sesuai tujuan, bukan karena ikut-ikutan.',
          model: 'Asset Class Characteristics (Return, Risk, Liquidity)',
          analogy: 'Instrumen investasi seperti perabot di rumah: ada yang kokoh dan stabil (obligasi), ada yang bertumbuh dan lincah tetapi bergoyang (saham), ada yang berfungsi sebagai penyimpan nilai (emas), dan ada kotak peralatan yang dikelola orang lain (reksa dana). Setiap perabot punya fungsi.',
          insight: 'Saham mewakili kepemilikan dan berfluktuasi tinggi dengan potensi pertumbuhan jangka panjang. Obligasi adalah surat utang dengan kupon dan risiko suku bunga serta gagal bayar. Reksa dana mengumpulkan dana banyak investor dan dikelola manajer investasi, biaya (expense ratio) perlu diperhatikan. Emas cenderung dipakai sebagai lindung nilai, tanpa arus kas. Cek legalitas produk dan penyelenggara pada situs resmi regulator sebelum membeli.',
          cross: { text: 'Instrumen x Regulasi', domains: ['Keuangan', 'Hukum'], insight: 'Produk legal diawasi regulator. Janji imbal hasil tinggi pasti dan "tanpa risiko" adalah tanda bahaya penipuan investasi.' },
          story: { who: 'Tawaran Imbal Hasil Fantastis (ilustrasi)', story: 'Seorang kenalan menawarkan "investasi" dengan imbal hasil tetap 10% per bulan tanpa risiko. Setelah beberapa bulan, pembayaran berhenti dan dana hilang. Pola ini cocok dengan skema ponzi: imbal hasil tinggi, jaminan pasti, dan rekrutmen anggota baru.', takeaway: 'Imbal hasil tinggi dan pasti secara bersamaan adalah sinyal bahaya. Verifikasi izin di regulator.' },
          actions: ['Buat tabel singkat: instrumen, fungsi, risiko utama, likuiditas.', 'Pilih satu instrumen sederhana dan biaya rendah untuk dipelajari dulu.', 'Periksa status izin produk dan penyelenggara pada situs resmi regulator.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Ajakan Investasi Imbal Hasil Tinggi',
            context: 'Teman mengajak investasi dengan imbal hasil 5% per minggu, dijamin, dengan bonus jika mengajak orang lain.',
            dilemma: 'Apa yang Anda lakukan?',
            choices: [
              { text: 'Tolak, periksa izin entitas pada situs regulator, dan laporkan jika tidak berizin.', consequence: 'Anda terhindar dari kemungkinan skema ponzi dan melindungi orang lain.', explanation: 'Imbal hasil tinggi pasti dan bonus rekrutmen adalah ciri umum penipuan.', best: true },
              { text: 'Ikut dengan nominal kecil sebagai percobaan.', consequence: 'Pembayaran awal lancar menumbuhkan keyakinan, lalu Anda menambah dana dan kehilangan semuanya.', explanation: 'Skema penipuan sengaja membayar di awal untuk membangun kepercayaan.' },
              { text: 'Ikut lalu ajak semua teman agar dapat bonus.', consequence: 'Anda membawa orang lain ke kerugian dan bisa menghadapi masalah hukum.', explanation: 'Merekrut ke skema ilegal menambah kerugian dan tanggung jawab.' }
            ]
          },
          quiz: [
            { q: 'Tanda bahaya penipuan investasi?', options: ['Memiliki izin regulator', 'Imbal hasil sangat tinggi dan dijamin pasti', 'Informasi risiko jelas', 'Laporan terbuka'], answer: 1, why: 'Tidak ada investasi sah yang menjamin imbal hasil tinggi tanpa risiko.' },
            { q: 'Obligasi pada dasarnya adalah...', options: ['Kepemilikan perusahaan', 'Surat utang yang membayar kupon', 'Emas batangan', 'Asuransi'], answer: 1, why: 'Penerbit meminjam dana dan membayar kupon serta pokok.' }
          ]
        },
        {
          id: 'inv-5-dca',
          label: 'Strategi Rutin: DCA dan Dana Darurat',
          domain: 'Keuangan',
          summary: 'Membeli secara berkala dalam jumlah tetap mengurangi tekanan menebak waktu pasar. Dana darurat dahulu, investasi kemudian.',
          model: 'Dollar-Cost Averaging & Emergency Fund First',
          analogy: 'DCA seperti mengisi bensin sedikit demi sedikit tiap minggu: sebagian saat harga tinggi, sebagian saat rendah. Anda tidak perlu menebak hari termurah dalam setahun.',
          insight: 'DCA mengubah investasi menjadi kebiasaan otomatis dan mengurangi risiko membeli seluruh dana di puncak. Ia tidak menjamin untung dan tidak selalu mengalahkan investasi sekaligus saat pasar naik terus, tetapi membantu disiplin dan menekan penyesalan. Dana darurat 3-6 bulan pengeluaran sebaiknya tersedia lebih dulu agar investasi tidak harus dicairkan saat darurat.',
          cross: { text: 'DCA x Ekonomi Perilaku', domains: ['Keuangan', 'Psikologi'], insight: 'Otomatisasi menyingkirkan keputusan emosional bulanan, melawan godaan menunda atau mengejar tren.' },
          story: { who: 'Investor Rutin (ilustrasi)', story: 'Seorang karyawan mengatur transfer otomatis Rp 1 juta tiap tanggal gajian ke reksa dana indeks. Ia tidak lagi mengecek pasar tiap hari, dan saat pasar jatuh ia terus membeli sesuai rencana.', takeaway: 'Sistem otomatis lebih tahan terhadap emosi daripada tekad.' },
          actions: ['Hitung pengeluaran bulanan wajib dan targetkan dana darurat 3-6 bulan.', 'Atur transfer otomatis ke instrumen investasi pilihan di tanggal gajian.', 'Evaluasi satu kali setahun, bukan setiap hari.'],
          level: 'Pemula', time: '4 min', tool: 'compound',
          scenario: {
            title: 'Dilema Dana Darurat atau Investasi',
            context: 'Anda punya Rp 10 juta, belum punya dana darurat, dan ada instrumen yang menarik.',
            dilemma: 'Mana yang didahulukan?',
            choices: [
              { text: 'Bangun dana darurat dahulu di instrumen likuid, lalu investasikan sisa dengan rutin.', consequence: 'Anda aman dari keharusan menjual investasi saat darurat.', explanation: 'Dana darurat adalah fondasi yang melindungi investasi jangka panjang.', best: true },
              { text: 'Semua ke investasi agar cepat berkembang.', consequence: 'Saat ada kebutuhan mendesak, Anda terpaksa menjual saat harga turun.', explanation: 'Tanpa bantalan, fluktuasi berubah menjadi kerugian nyata.' },
              { text: 'Biarkan seluruh uang di rekening tanpa rencana.', consequence: 'Aman tapi nilai riil tergerus inflasi.', explanation: 'Dana darurat saja tidak cukup untuk tujuan jangka panjang.' }
            ]
          },
          quiz: [
            { q: 'Dana darurat umumnya setara berapa bulan pengeluaran?', options: ['1 hari', '3-6 bulan', '5 tahun', 'Tidak perlu'], answer: 1, why: 'Praktik umum 3-6 bulan pengeluaran wajib.' },
            { q: 'Manfaat utama DCA?', options: ['Menjamin untung', 'Mengurangi tekanan menebak waktu dan membangun disiplin', 'Menghilangkan semua risiko', 'Menghindari pajak'], answer: 1, why: 'DCA membantu disiplin dan menyebar waktu pembelian.' }
          ]
        }
      ]
    },
    {
      title: 'Psikologi & Rencana',
      lessons: [
        {
          id: 'inv-6-bias',
          label: 'Bias Investor: FOMO, Overconfidence, dan Herding',
          domain: 'Psikologi',
          summary: 'Musuh terbesar investor sering berada di kepala sendiri. Mengenali bias membantu Anda membuat aturan sebelum emosi muncul.',
          model: 'Behavioral Finance (Kahneman, Thaler)',
          analogy: 'Bias seperti kabut saat mengemudi: Anda merasa melihat jalan jelas padahal jarak pandang pendek. Aturan tertulis adalah lampu kabut yang menjaga Anda tetap di jalur.',
          insight: 'Bias umum: FOMO (takut ketinggalan) mendorong membeli di harga puncak, overconfidence membuat terlalu sering bertransaksi, herding mengikuti kerumunan, loss aversion membuat menahan aset rugi dan menjual aset untung terlalu cepat (disposition effect). Riset menunjukkan investor yang sering bertransaksi cenderung berimbal hasil lebih rendah setelah biaya.',
          cross: { text: 'Bias x Neurosains', domains: ['Psikologi', 'Keuangan'], insight: 'Antisipasi keuntungan mengaktifkan sistem hadiah otak. Itulah mengapa lonjakan harga terasa menggoda dan mendorong keputusan impulsif.' },
          story: { who: 'Euforia Aset Viral (ilustrasi)', story: 'Sebuah aset melonjak 300% dalam sebulan dan semua orang membicarakannya. Seorang investor membeli karena FOMO di puncak. Saat harga turun 60%, ia menahan berharap kembali dan terjebak berbulan-bulan.', takeaway: 'Keramaian bukan analisis. Tulis alasan beli dan batas rugi sebelum membeli.' },
          actions: ['Tulis aturan pribadi: alasan beli, target, dan batas rugi sebelum setiap pembelian.', 'Tunda keputusan besar 48 jam setelah melihat berita yang membuat Anda bersemangat.', 'Catat jurnal keputusan investasi dan tinjau tiap kuartal.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Semua Orang Sedang Membeli',
            context: 'Grup chat ramai membahas aset yang naik tajam. Anda belum punya dan merasa tertinggal.',
            dilemma: 'Apa langkah yang disiplin?',
            choices: [
              { text: 'Terapkan jeda 48 jam, periksa apakah sesuai tujuan dan alokasi, dan hanya masuk dengan porsi kecil jika memang lolos kriteria.', consequence: 'Dorongan emosi mereda dan keputusan berbasis rencana.', explanation: 'Jeda memutus siklus impuls. Rencana tertulis menahan FOMO.', best: true },
              { text: 'Beli besar sekarang sebelum naik lagi.', consequence: 'Anda masuk di dekat puncak dengan porsi terlalu besar.', explanation: 'Mengejar harga yang sudah melonjak menaikkan risiko membeli mahal.' },
              { text: 'Abaikan semua informasi tanpa pernah menilai.', consequence: 'Anda aman dari impuls namun tak belajar apa pun.', explanation: 'Menilai dengan kriteria lebih baik daripada menutup mata.' }
            ]
          },
          quiz: [
            { q: 'FOMO dalam investasi adalah...', options: ['Rasa takut ketinggalan yang mendorong membeli impulsif', 'Strategi diversifikasi', 'Jenis obligasi', 'Pajak'], answer: 0, why: 'FOMO mendorong keputusan karena takut kehilangan peluang.' },
            { q: 'Cara efektif melawan bias?', options: ['Mengandalkan firasat', 'Aturan tertulis sebelum emosi muncul', 'Mengikuti kerumunan', 'Sering bertransaksi'], answer: 1, why: 'Aturan yang dibuat saat tenang membatasi keputusan impulsif.' }
          ]
        },
        {
          id: 'inv-7-rencana',
          label: 'Menyusun Rencana Keuangan Pribadi',
          domain: 'Keuangan',
          summary: 'Menghubungkan tujuan hidup, anggaran, dana darurat, proteksi, dan investasi menjadi satu rencana yang bisa dijalankan.',
          model: 'Goal-Based Financial Planning',
          analogy: 'Rencana keuangan seperti peta perjalanan: tanpa tujuan Anda hanya berkendara. Dengan tujuan, Anda tahu rute, bekal, dan kapan perlu mengisi bensin.',
          insight: 'Urutan umum yang banyak dipakai perencana: anggaran dan arus kas, dana darurat, proteksi (asuransi sesuai kebutuhan), pelunasan utang konsumtif berbunga tinggi, lalu investasi tujuan jangka menengah dan panjang. Setiap tujuan punya nilai, jangka waktu, dan instrumen sesuai horizon. Tinjau minimal setahun sekali dan setiap perubahan hidup besar.',
          cross: { text: 'Perencanaan x Hukum & Pajak', domains: ['Keuangan', 'Hukum', 'Pajak'], insight: 'Aturan pajak dan produk keuangan berubah. Periksa ketentuan terbaru pada sumber resmi atau konsultasikan ke perencana keuangan berlisensi untuk keputusan besar.' },
          story: { who: 'Pasangan Muda Menabung untuk Rumah (ilustrasi)', story: 'Pasangan menetapkan tujuan: uang muka rumah Rp 100 juta dalam 5 tahun, dana darurat 6 bulan, dan dana pensiun. Mereka membagi setoran per tujuan dan meninjau tiap tahun. Tujuan yang jelas membuat mereka menolak pengeluaran impulsif.', takeaway: 'Tujuan konkret dengan angka dan tanggal mengubah menabung dari beban jadi permainan yang terarah.' },
          actions: ['Tulis tiga tujuan keuangan dengan jumlah dan tanggal target.', 'Hitung setoran bulanan yang dibutuhkan per tujuan.', 'Jadwalkan tinjauan tahunan dan simpan di kalender.'],
          level: 'Menengah', time: '5 min', tool: 'compound',
          scenario: {
            title: 'Dilema Prioritas Saat Penghasilan Naik',
            context: 'Penghasilan Anda naik 20%. Ada keinginan upgrade gaya hidup dan juga target keuangan tertunda.',
            dilemma: 'Bagaimana membaginya?',
            choices: [
              { text: 'Alokasikan sebagian besar kenaikan ke tujuan dan investasi otomatis lebih dulu, sisanya untuk peningkatan gaya hidup.', consequence: 'Tujuan makin cepat tercapai tanpa merasa terkekang.', explanation: 'Membayar diri sendiri lebih dahulu mencegah gaya hidup menyerap seluruh kenaikan.', best: true },
              { text: 'Seluruh kenaikan untuk gaya hidup.', consequence: 'Tidak ada kemajuan tujuan dan rentan saat penghasilan turun.', explanation: 'Lifestyle creep menghapus manfaat kenaikan penghasilan.' },
              { text: 'Seluruh kenaikan ke investasi dan menahan semua kesenangan.', consequence: 'Sulit bertahan dan berisiko berhenti total.', explanation: 'Rencana yang tak berkelanjutan akan ditinggalkan.' }
            ]
          },
          quiz: [
            { q: 'Mana urutan yang umum dalam rencana keuangan?', options: ['Investasi dulu, anggaran belakangan', 'Anggaran, dana darurat, proteksi, lalu investasi', 'Hanya asuransi', 'Hanya utang'], answer: 1, why: 'Fondasi dahulu, baru pertumbuhan.' },
            { q: 'Mengapa tujuan perlu angka dan tanggal?', options: ['Agar rumit', 'Agar bisa dihitung setoran dan diukur kemajuannya', 'Tidak perlu', 'Supaya pajak turun'], answer: 1, why: 'Tujuan terukur memudahkan perencanaan dan evaluasi.' }
          ]
        }
      ]
    }
  ]
});
