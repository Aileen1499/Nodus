import { buildPath } from '../curriculumBuilder';

// Angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data nyata.
export const ECOMMERCE_CURRICULUM = buildPath({
  id: 'curriculum-bisnis-digital-ecommerce',
  topic: 'Bisnis Digital & E-commerce',
  description:
    'Ekonomi unit toko daring: margin setelah biaya marketplace, ROAS impas, CAC vs LTV, konversi, retensi, dan logistik, agar iklan dan diskon tidak menggerus laba.',
  stages: [
    {
      title: 'Ekonomi Toko Daring',
      lessons: [
        {
          id: 'ec-1-margin',
          label: 'Margin Sebenarnya Setelah Biaya Marketplace',
          domain: 'Keuangan',
          summary: 'Harga jual bukan laba. Kurangi HPP, komisi, biaya layanan, ongkir subsidi, dan retur untuk melihat margin sebenarnya.',
          model: 'Contribution Margin per Pesanan',
          analogy: 'Gaji kotor dan gaji bersih berbeda. Penjualan Rp 100.000 yang terlihat besar bisa menyisakan Rp 12.000 setelah semua potongan.',
          insight: 'Hitung per pesanan: harga jual dikurangi HPP, komisi dan biaya layanan platform, biaya pembayaran, subsidi ongkir, kemasan, biaya iklan, dan rata-rata kerugian retur. Hasilnya adalah margin kontribusi. Jangan menetapkan harga hanya dari HPP ditambah persentase tetap.',
          cross: { text: 'E-commerce x Akuntansi Biaya', domains: ['Bisnis', 'Keuangan'], insight: 'Biaya variabel per pesanan menentukan harga minimum. Biaya tetap ditutup dari total margin kontribusi.' },
          story: { who: 'Penjual Aksesori Ponsel (ilustrasi)', story: 'Harga jual Rp 100.000, HPP Rp 45.000, komisi dan biaya layanan Rp 14.000, kemasan Rp 3.000, subsidi ongkir Rp 8.000, retur rata-rata Rp 3.000. Margin kontribusi hanya Rp 27.000 (27%) sebelum iklan, bukan 55% seperti yang ia kira dari HPP.', takeaway: 'Hitung margin setelah semua biaya per pesanan.' },
          actions: ['Buat tabel biaya per pesanan untuk produk terlaris.', 'Hitung margin kontribusi sebelum dan sesudah iklan.', 'Tinjau produk dengan margin di bawah 15%.'],
          level: 'Pemula', time: '5 min', tool: 'margin',
          scenario: {
            title: 'Dilema Diskon Besar di Hari Promo',
            context: 'Marketplace mengajak ikut promo dengan potongan harga 20%. Margin kontribusi normal Anda 27%.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Hitung ulang margin kontribusi dengan harga promo dan biaya promo; ikut hanya bila margin tetap positif dan volume tambahan menutup.', consequence: 'Anda ikut pada produk bermargin tebal dan melewatkan yang tipis, laba bulan itu naik.', explanation: 'Keputusan promo harus berbasis margin kontribusi.', best: true },
              { text: 'Ikut semua demi ranking.', consequence: 'Penjualan naik tetapi sebagian produk merugi.', explanation: 'Volume tanpa margin menggerus kas.' },
              { text: 'Menolak semua promo.', consequence: 'Anda kehilangan peluang pada produk yang sebenarnya sanggup.', explanation: 'Penolakan menyeluruh juga tidak berbasis angka.' }
            ]
          },
          quiz: [
            { q: 'Margin kontribusi per pesanan dihitung dari...', options: ['Harga jual dikurangi semua biaya variabel per pesanan', 'Harga jual dikurangi HPP saja', 'Total omzet', 'Jumlah pesanan'], answer: 0, why: 'Semua biaya variabel harus dihitung.' },
            { q: 'Penetapan harga hanya dari HPP plus persentase tetap berisiko karena...', options: ['Mengabaikan komisi, ongkir, dan retur', 'Terlalu rumit', 'Selalu terlalu murah', 'Dilarang'], answer: 0, why: 'Biaya platform dan logistik menggerus margin.' }
          ]
        },
        {
          id: 'ec-2-roas',
          label: 'ROAS Impas dan Batas Iklan',
          domain: 'Keuangan',
          summary: 'ROAS impas adalah 1 dibagi margin kontribusi. Di bawah angka itu setiap iklan merugi.',
          model: 'Break-even ROAS',
          analogy: 'Jika setiap Rp 1 penjualan menyisakan Rp 0,40, maka Anda harus mendapat Rp 2,50 penjualan untuk setiap Rp 1 iklan agar impas.',
          insight: 'ROAS impas = 1 / margin kontribusi sebelum iklan. Margin 40% memberi ROAS impas 2,5. ROAS target laba harus di atasnya. Perhatikan juga efek pesanan ulang yang tidak tercatat di ROAS awal dan perbedaan ROAS platform dengan penjualan bersih setelah retur.',
          cross: { text: 'Iklan x Ekonomi Marginal', domains: ['Bisnis', 'Ekonomi'], insight: 'Tambahan belanja iklan biasanya menghasilkan ROAS marginal yang makin turun. Berhenti saat ROAS marginal mendekati impas.' },
          story: { who: 'Toko Pakaian Daring (ilustrasi)', story: 'Margin kontribusi sebelum iklan 40%, sehingga ROAS impas 2,5. Iklan berjalan di ROAS 2,1 dan terasa ramai karena omzet naik, padahal setiap Rp 1 juta iklan menghasilkan rugi sekitar Rp 160.000. Setelah mematikan kampanye di bawah 2,5, laba bulanan naik.', takeaway: 'Omzet dari iklan belum tentu laba. Ketahui ROAS impas.' },
          actions: ['Hitung ROAS impas tiap kategori produk.', 'Matikan atau perbaiki kampanye di bawah ROAS impas.', 'Tetapkan ROAS target laba, misalnya 20% di atas impas.'],
          level: 'Menengah', time: '6 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Kampanye Ramai Tetapi Tidak Untung',
            context: 'Kampanye menghasilkan ROAS 2,1, sedangkan ROAS impas 2,5.',
            dilemma: 'Apa tindakan Anda?',
            choices: [
              { text: 'Perbaiki kreatif, penargetan, atau halaman produk, dan hentikan bila ROAS tetap di bawah impas setelah uji singkat.', consequence: 'Satu variasi mencapai ROAS 3 dan sisanya dihentikan.', explanation: 'Uji perbaikan, lalu hentikan yang merugi.', best: true },
              { text: 'Naikkan anggaran agar skala lebih besar.', consequence: 'Kerugian membesar.', explanation: 'Skala memperbesar kerugian bila ekonominya negatif.' },
              { text: 'Biarkan karena omzet naik.', consequence: 'Kas tergerus tanpa terasa.', explanation: 'Omzet bukan laba.' }
            ]
          },
          quiz: [
            { q: 'Margin kontribusi sebelum iklan 40%. ROAS impas?', options: ['2,5', '0,4', '4', '1'], answer: 0, why: '1 / 0,40 = 2,5.' },
            { q: 'ROAS di bawah impas berarti...', options: ['Iklan merugi', 'Iklan untung', 'Tidak ada efek', 'Perlu naikkan harga otomatis'], answer: 0, why: 'Penjualan tidak menutup biaya iklan dan biaya variabel.' }
          ]
        },
        {
          id: 'ec-3-cac',
          label: 'CAC, LTV, dan Pelanggan yang Kembali',
          domain: 'Bisnis',
          summary: 'Biaya mendapatkan pelanggan boleh tinggi bila ia membeli berulang dan margin kumulatifnya lebih besar.',
          model: 'CAC, LTV, dan Payback',
          analogy: 'Membeli sapi perah lebih mahal dari membeli sekali susu, tetapi pendapatan berulangnya melampaui harga sapi.',
          insight: 'CAC adalah total biaya akuisisi dibagi jumlah pelanggan baru. LTV (berbasis margin) adalah margin kontribusi rata-rata per pesanan dikali jumlah pesanan selama masa hidup pelanggan. Rasio LTV:CAC yang sehat sering disebut sekitar 3:1, dan periode balik modal (payback) sebaiknya pendek agar kas aman. Gunakan margin, bukan omzet, saat menghitung LTV.',
          cross: { text: 'Retensi x Kas', domains: ['Bisnis', 'Keuangan'], insight: 'LTV tinggi yang baru kembali setelah 18 bulan tidak menolong kas hari ini. Payback tetap penting.' },
          story: { who: 'Toko Perawatan Kulit (ilustrasi)', story: 'CAC Rp 60.000 dan pesanan pertama hanya menghasilkan margin Rp 40.000, tampak rugi. Namun 35% pelanggan membeli ulang rata-rata tiga kali lagi dengan margin Rp 40.000. Setelah menambah pesan pengingat isi ulang, margin kumulatif per pelanggan melampaui CAC dalam empat bulan.', takeaway: 'Nilai pelanggan dihitung lintas pesanan, tetapi awasi waktu balik modal.' },
          actions: ['Hitung CAC dan margin pesanan pertama.', 'Hitung persentase pembelian ulang dan margin rata-rata per pelanggan.', 'Tentukan target payback dalam bulan.'],
          level: 'Menengah', time: '6 min', tool: 'unit',
          scenario: {
            title: 'Dilema CAC Lebih Tinggi dari Margin Pesanan Pertama',
            context: 'CAC Rp 60.000 sedangkan margin pesanan pertama Rp 40.000, namun pembelian ulang sering terjadi.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Hitung LTV berbasis margin dan payback; lanjut bila rasio sehat dan kas mampu menanggung masa balik modal, sambil menaikkan pembelian ulang.', consequence: 'Anda tumbuh terkendali dan kas aman.', explanation: 'Keputusan akuisisi harus melihat LTV dan payback.', best: true },
              { text: 'Hentikan semua iklan karena CAC lebih tinggi dari margin awal.', consequence: 'Pertumbuhan terhenti padahal ekonominya positif.', explanation: 'Mengabaikan pembelian ulang menyesatkan.' },
              { text: 'Gunakan omzet, bukan margin, untuk menghitung LTV.', consequence: 'LTV tampak besar dan Anda berlebihan membelanjakan iklan.', explanation: 'LTV harus berbasis margin.' }
            ]
          },
          quiz: [
            { q: 'LTV sebaiknya dihitung dari...', options: ['Margin kontribusi', 'Omzet', 'Jumlah pengikut', 'Jumlah klik'], answer: 0, why: 'Margin mencerminkan nilai sebenarnya bagi bisnis.' },
            { q: 'Mengapa payback penting?', options: ['Menentukan kapan kas akuisisi kembali', 'Menentukan harga produk', 'Menghitung pajak', 'Mengukur kepuasan'], answer: 0, why: 'Kas harus mampu menanggung masa tunggu.' }
          ]
        }
      ]
    },
    {
      title: 'Pertumbuhan dan Operasional',
      lessons: [
        {
          id: 'ec-4-konversi',
          label: 'Funnel Konversi dan Halaman Produk',
          domain: 'Data & Analitik',
          summary: 'Naikkan konversi dari 1% ke 2% sama dengan menggandakan penjualan tanpa tambahan biaya iklan.',
          model: 'Conversion Funnel dan A/B Testing',
          analogy: 'Ember bocor: menambah air lebih banyak kurang efektif dibanding menambal lubang yang paling besar.',
          insight: 'Pecah funnel: kunjungan, lihat produk, masukkan keranjang, checkout, bayar. Cari tahap dengan penurunan terbesar. Perbaiki foto, judul, harga, ulasan, ongkir, dan opsi pembayaran. Uji satu perubahan pada satu waktu dengan sampel cukup agar hasil tidak kebetulan. Pantau juga laju pengabaian keranjang.',
          cross: { text: 'Konversi x Psikologi Keputusan', domains: ['Data & Analitik', 'Psikologi'], insight: 'Bukti sosial, kejelasan, dan pengurangan hambatan meningkatkan kemungkinan membeli.' },
          story: { who: 'Toko Furnitur Kecil (ilustrasi)', story: 'Dari 10.000 kunjungan, 300 masuk keranjang dan 100 membayar. Pengabaian keranjang tinggi karena ongkir baru terlihat di akhir. Setelah menampilkan estimasi ongkir di halaman produk, pembayaran naik menjadi 140 pesanan dari kunjungan yang sama.', takeaway: 'Perbaiki titik bocor terbesar dahulu.' },
          actions: ['Petakan angka tiap tahap funnel bulan lalu.', 'Tentukan satu tahap dengan penurunan terbesar.', 'Rancang satu uji A/B untuk tahap itu.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Lalu Lintas Tinggi tetapi Penjualan Rendah',
            context: 'Kunjungan naik 50% tetapi pesanan hampir tidak berubah.',
            dilemma: 'Apa langkah Anda?',
            choices: [
              { text: 'Periksa funnel untuk menemukan tahap bocor dan uji perbaikan, sambil memeriksa kualitas sumber kunjungan.', consequence: 'Ditemukan bahwa checkout menyulitkan pengguna ponsel; perbaikan menaikkan pesanan.', explanation: 'Data funnel mengarahkan perbaikan.', best: true },
              { text: 'Tambah iklan untuk menaikkan lalu lintas lebih banyak.', consequence: 'Biaya naik tanpa penjualan.', explanation: 'Menambah kunjungan tidak memperbaiki kebocoran.' },
              { text: 'Ubah banyak hal sekaligus.', consequence: 'Anda tidak tahu perubahan mana yang berpengaruh.', explanation: 'Uji satu variabel agar belajar.' }
            ]
          },
          quiz: [
            { q: 'Langkah pertama menaikkan konversi?', options: ['Cari tahap funnel dengan penurunan terbesar', 'Naikkan anggaran iklan', 'Turunkan harga', 'Ganti nama toko'], answer: 0, why: 'Fokus pada kebocoran terbesar.' },
            { q: 'Mengapa uji A/B mengubah satu hal pada satu waktu?', options: ['Agar dampaknya dapat diketahui', 'Agar lebih murah selalu', 'Agar lebih cepat selalu', 'Tidak ada alasan'], answer: 0, why: 'Isolasi variabel memungkinkan belajar.' }
          ]
        },
        {
          id: 'ec-5-stok',
          label: 'Stok, Perputaran, dan Dead Stock',
          domain: 'Keuangan',
          summary: 'Stok yang menumpuk adalah kas yang tidur. Atur titik pemesanan ulang dan bersihkan barang lambat.',
          model: 'Inventory Turnover dan Reorder Point',
          analogy: 'Gudang penuh barang lambat seperti kulkas penuh makanan kedaluwarsa: terlihat banyak, tetapi tidak berguna.',
          insight: 'Perputaran stok = HPP periode / rata-rata persediaan. Hari persediaan = 365 / perputaran. Titik pesan ulang = permintaan harian x waktu tunggu + stok pengaman. Klasifikasikan produk dengan analisis ABC dan tangani barang lambat dengan paket, diskon terarah, atau likuidasi sebelum nilainya turun.',
          cross: { text: 'Stok x Modal Kerja', domains: ['Keuangan', 'Bisnis'], insight: 'Stok lambat mengikat modal kerja yang bisa dipakai untuk produk cepat laku.' },
          story: { who: 'Toko Perlengkapan Olahraga (ilustrasi)', story: 'HPP tahunan Rp 1,2 miliar dengan rata-rata persediaan Rp 400 juta, perputaran 3 kali atau sekitar 122 hari. Setelah melikuidasi barang lambat dan memesan produk cepat lebih sering dengan jumlah kecil, persediaan turun menjadi Rp 300 juta dan kas membaik.', takeaway: 'Kurangi stok lambat untuk melepas kas.' },
          actions: ['Hitung perputaran dan hari persediaan.', 'Klasifikasikan produk ABC.', 'Tetapkan titik pesan ulang untuk lima produk teratas.'],
          level: 'Menengah', time: '6 min', tool: 'inventory',
          scenario: {
            title: 'Dilema Diskon Pemasok untuk Pembelian Massal',
            context: 'Pemasok menawarkan diskon 10% bila membeli stok enam bulan sekaligus.',
            dilemma: 'Apa pertimbangan Anda?',
            choices: [
              { text: 'Bandingkan penghematan dengan biaya modal, risiko stok lambat, dan ruang gudang; beli secukupnya untuk produk yang pasti laku.', consequence: 'Anda mengambil diskon hanya untuk produk cepat dan menjaga kas.', explanation: 'Diskon massal harus ditimbang terhadap biaya tertahan dan risiko.', best: true },
              { text: 'Selalu ambil diskon terbesar.', consequence: 'Stok menumpuk dan kas macet.', explanation: 'Diskon bukan satu-satunya faktor.' },
              { text: 'Selalu tolak diskon.', consequence: 'Anda melewatkan penghematan nyata pada produk cepat.', explanation: 'Perlu analisis, bukan kebiasaan.' }
            ]
          },
          quiz: [
            { q: 'Perputaran stok = ...', options: ['HPP / rata-rata persediaan', 'Penjualan / kas', 'Laba / stok', 'Stok / HPP'], answer: 0, why: 'Rumus standar perputaran persediaan.' },
            { q: 'Stok yang menumpuk berarti...', options: ['Modal kerja tertahan', 'Kas bertambah', 'Margin naik', 'Pajak turun'], answer: 0, why: 'Barang menumpuk mengikat kas.' }
          ]
        },
        {
          id: 'ec-6-logistik',
          label: 'Logistik, Ongkir, dan Retur',
          domain: 'Bisnis',
          summary: 'Pengiriman dan retur sering menjadi pos biaya tersembunyi terbesar. Rancang kebijakan dengan angka.',
          model: 'Fulfillment Cost dan Reverse Logistics',
          analogy: 'Pengiriman gratis ibarat traktir makan: menarik pelanggan, tetapi harus sudah masuk dalam hitungan harga.',
          insight: 'Hitung biaya per pesanan: kemasan, tenaga, ongkir, dan biaya cod atau gagal kirim. Tetapkan ambang gratis ongkir di atas rata-rata nilai pesanan untuk menaikkan ukuran keranjang. Turunkan retur dengan deskripsi akurat, panduan ukuran, dan foto jujur. Pelajari alasan retur dan perbaiki penyebabnya.',
          cross: { text: 'Logistik x Pengalaman Pelanggan', domains: ['Bisnis', 'Psikologi'], insight: 'Kecepatan dan kejelasan pengiriman membentuk kepercayaan dan ulasan.' },
          story: { who: 'Toko Pakaian dengan Retur Tinggi (ilustrasi)', story: 'Retur 18% terutama karena ukuran tidak sesuai. Setelah menambah tabel ukuran dan foto dengan model berbagai ukuran, retur turun ke 10% dan biaya retur per bulan turun hampir separuh.', takeaway: 'Perbaiki penyebab retur, bukan hanya menanggung biayanya.' },
          actions: ['Catat alasan retur sebulan terakhir.', 'Hitung biaya fulfillment per pesanan.', 'Uji ambang gratis ongkir di atas rata-rata nilai pesanan.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Gratis Ongkir untuk Semua Pesanan',
            context: 'Pesaing menawarkan gratis ongkir tanpa minimum belanja.',
            dilemma: 'Apa respons Anda?',
            choices: [
              { text: 'Tawarkan gratis ongkir dengan ambang belanja sedikit di atas rata-rata nilai pesanan dan pastikan biayanya masuk dalam hitungan margin.', consequence: 'Rata-rata nilai pesanan naik dan margin tetap terjaga.', explanation: 'Ambang menaikkan keranjang sambil menjaga margin.', best: true },
              { text: 'Gratis ongkir tanpa batas.', consequence: 'Pesanan kecil merugi.', explanation: 'Biaya pengiriman tidak hilang, hanya berpindah.' },
              { text: 'Abaikan dan biarkan pelanggan pergi.', consequence: 'Konversi turun.', explanation: 'Perlu respons berbasis angka.' }
            ]
          },
          quiz: [
            { q: 'Ambang gratis ongkir sebaiknya...', options: ['Sedikit di atas rata-rata nilai pesanan', 'Nol', 'Jauh di bawah rata-rata', 'Tidak pernah ada'], answer: 0, why: 'Mendorong keranjang lebih besar.' },
            { q: 'Cara menurunkan retur?', options: ['Deskripsi, foto, dan panduan ukuran akurat', 'Menyembunyikan kebijakan retur', 'Menaikkan harga', 'Mengurangi stok'], answer: 0, why: 'Ekspektasi yang tepat mengurangi retur.' }
          ]
        }
      ]
    },
    {
      title: 'Skala dan Merek',
      lessons: [
        {
          id: 'ec-7-kanal',
          label: 'Mengurangi Ketergantungan pada Satu Platform',
          domain: 'Bisnis',
          summary: 'Kanal tunggal berisiko. Bangun daftar pelanggan sendiri dan beberapa kanal penjualan.',
          model: 'Channel Diversification dan Owned Audience',
          analogy: 'Menyewa lapak di satu pasar: aturan sewa bisa berubah kapan saja. Toko sendiri memberi kendali lebih.',
          insight: 'Platform dapat mengubah komisi, algoritme, atau aturan. Bangun aset milik sendiri: daftar kontak pelanggan (dengan persetujuan sesuai aturan pelindungan data pribadi), situs atau katalog sendiri, dan komunitas. Tambahkan kanal bertahap sambil menjaga margin per kanal. Hitung ketergantungan: porsi omzet dan laba dari kanal terbesar.',
          cross: { text: 'Kanal x Strategi Risiko', domains: ['Bisnis', 'Ekonomi'], insight: 'Konsentrasi pendapatan pada satu pihak meningkatkan risiko dan menurunkan daya tawar.' },
          story: { who: 'Penjual Kopi Daring (ilustrasi)', story: '90% omzet dari satu marketplace. Setelah perubahan komisi, margin turun tajam. Ia membangun grup pelanggan dan katalog sendiri dengan program isi ulang, sehingga dalam setahun porsi kanal sendiri naik menjadi 30% dengan margin lebih tebal.', takeaway: 'Miliki hubungan langsung dengan pelanggan Anda.' },
          actions: ['Hitung porsi omzet dan laba per kanal.', 'Mulai kumpulkan kontak pelanggan dengan persetujuan jelas.', 'Pilih satu kanal tambahan untuk diuji.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Komisi Platform Naik',
            context: 'Platform utama menaikkan komisi dan 85% omzet Anda berasal dari sana.',
            dilemma: 'Apa strategi Anda?',
            choices: [
              { text: 'Sesuaikan harga atau paket secara terarah, dan bangun kanal sendiri bertahap (pelanggan langsung, katalog, program ulang) untuk menurunkan ketergantungan.', consequence: 'Margin pulih sebagian dan ketergantungan turun tahun demi tahun.', explanation: 'Diversifikasi bertahap mengurangi risiko tanpa mengorbankan kas.', best: true },
              { text: 'Keluar dari platform seketika.', consequence: 'Omzet runtuh.', explanation: 'Transisi mendadak terlalu berisiko.' },
              { text: 'Tidak berbuat apa-apa.', consequence: 'Margin terus tertekan.', explanation: 'Risiko konsentrasi dibiarkan.' }
            ]
          },
          quiz: [
            { q: 'Risiko utama bergantung pada satu platform?', options: ['Aturan dan komisi dapat berubah sepihak', 'Terlalu murah', 'Terlalu banyak pelanggan', 'Tidak ada risiko'], answer: 0, why: 'Daya tawar rendah saat konsentrasi tinggi.' },
            { q: 'Contoh aset milik sendiri?', options: ['Daftar pelanggan dengan persetujuan', 'Peringkat di platform', 'Algoritme platform', 'Komisi platform'], answer: 0, why: 'Daftar pelanggan dapat dihubungi langsung.' }
          ]
        },
        {
          id: 'ec-8-merek',
          label: 'Merek, Harga Premium, dan Pelanggan Setia',
          domain: 'Bisnis',
          summary: 'Merek yang dipercaya dapat menjual dengan harga lebih tinggi dan mengurangi ketergantungan pada diskon.',
          model: 'Brand Equity dan Net Promoter Score',
          analogy: 'Dua botol air identik, satu dengan merek yang dipercaya, bisa dijual dengan harga berbeda karena kepercayaan.',
          insight: 'Merek dibangun dari konsistensi janji, kualitas, pengalaman, dan cerita yang jelas. Ukur kesetiaan dengan NPS (persentase promotor dikurangi detraktor) dan tingkat pembelian ulang. Pelanggan setia membeli lebih sering, lebih tahan terhadap diskon pesaing, dan merekomendasikan. Investasi merek menaikkan LTV dan menurunkan CAC dalam jangka panjang.',
          cross: { text: 'Merek x Psikologi Kepercayaan', domains: ['Bisnis', 'Psikologi'], insight: 'Kepercayaan mengurangi persepsi risiko, sehingga pembeli bersedia membayar lebih.' },
          story: { who: 'Merek Sambal Rumahan (ilustrasi)', story: 'Alih-alih berperang harga, pemilik berfokus pada rasa konsisten, kemasan jelas, dan balasan cepat atas ulasan. Pembelian ulang naik dari 20% ke 35% dan ia mampu menaikkan harga 8% tanpa penurunan penjualan berarti.', takeaway: 'Kepercayaan yang konsisten memberi kekuatan harga.' },
          actions: ['Tulis janji merek dalam satu kalimat.', 'Ukur NPS dengan satu pertanyaan singkat.', 'Balas semua ulasan dalam 24 jam.'],
          level: 'Menengah', time: '6 min', tool: 'pricing',
          scenario: {
            title: 'Dilema Perang Harga dengan Pesaing',
            context: 'Pesaing menurunkan harga 15% dan penjualan Anda menurun.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Pertahankan harga, perkuat nilai (kualitas, layanan, cerita), dan tawarkan paket atau program loyalitas, sambil memantau margin dan pangsa.', consequence: 'Pelanggan setia bertahan dan margin terjaga, sementara pesaing tertekan labanya.', explanation: 'Diferensiasi mengurangi tekanan harga.', best: true },
              { text: 'Ikut menurunkan harga 15%.', consequence: 'Margin anjlok dan perang harga berlanjut.', explanation: 'Perang harga tanpa keunggulan biaya merusak laba.' },
              { text: 'Mengabaikan dan tidak mengukur dampaknya.', consequence: 'Anda tidak tahu apa yang berubah.', explanation: 'Pantau pangsa dan margin.' }
            ]
          },
          quiz: [
            { q: 'NPS mengukur...', options: ['Kemungkinan pelanggan merekomendasikan', 'Margin laba', 'Jumlah stok', 'Pajak'], answer: 0, why: 'Promotor dikurangi detraktor.' },
            { q: 'Manfaat merek kuat?', options: ['Kekuatan harga dan pembelian ulang lebih tinggi', 'Tidak butuh kualitas', 'Biaya selalu nol', 'Pesaing hilang'], answer: 0, why: 'Kepercayaan mendukung loyalitas dan harga.' }
          ]
        }
      ]
    }
  ]
});
