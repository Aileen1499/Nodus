import { buildPath } from '../curriculumBuilder';

// Jalur: Akuntansi & Laporan Keuangan untuk Pemilik Usaha
// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const ACCOUNTING_CURRICULUM = buildPath({
  id: 'curriculum-akuntansi-pemilik-usaha',
  topic: 'Akuntansi & Laporan Keuangan untuk Pemilik Usaha',
  description:
    'Baca dan susun laporan keuangan tanpa gelar akuntan: persamaan akuntansi, laba rugi, neraca, arus kas, HPP, rasio kunci, dan pembukuan rapi untuk usaha kecil.',
  stages: [
    {
      title: 'Bahasa Akuntansi',
      lessons: [
        {
          id: 'acc-1-persamaan',
          label: 'Persamaan Akuntansi: Aset = Utang + Modal',
          domain: 'Keuangan',
          summary: 'Satu persamaan yang selalu seimbang dan menjadi dasar seluruh laporan keuangan. Memahaminya berarti memahami dari mana uang bisnis berasal dan ke mana ia pergi.',
          model: 'Persamaan Akuntansi Dasar (Double-Entry Bookkeeping, Luca Pacioli)',
          analogy: 'Bayangkan rumah yang dibeli dengan KPR. Rumah adalah aset. Sebagian dibiayai bank (utang), sisanya uang Anda sendiri (modal). Berapa pun harga rumah, bagian bank ditambah bagian Anda selalu sama dengan nilai rumah. Bisnis bekerja sama: setiap aset pasti dibiayai oleh utang, modal pemilik, atau keduanya.',
          insight: 'Akuntansi berpasangan (double-entry) dirumuskan secara tertulis oleh Luca Pacioli pada 1494 dan masih menjadi tulang punggung akuntansi modern. Setiap transaksi memengaruhi minimal dua akun sehingga persamaan tidak pernah timpang. Itu sebabnya kesalahan catat bisa dilacak: jika neraca tidak seimbang, pasti ada transaksi yang dicatat setengah.',
          cross: { text: 'Akuntansi x Hukum Bisnis', domains: ['Keuangan', 'Hukum'], insight: 'Pemisahan "utang" dan "modal" bukan hanya soal angka. Kreditur punya hak tagih tetap, sedangkan pemilik hanya berhak atas sisa. Struktur ini menentukan siapa yang menanggung rugi lebih dulu.' },
          story: { who: 'Toko Kelontong Bu Rina (ilustrasi)', story: 'Bu Rina memulai toko dengan modal sendiri Rp 50 juta dan pinjaman koperasi Rp 30 juta. Seluruh Rp 80 juta dipakai untuk stok barang dan rak. Aset Rp 80 juta, utang Rp 30 juta, modal Rp 50 juta. Setelah satu tahun stok dan kas naik jadi Rp 100 juta tanpa utang baru, maka modalnya kini Rp 70 juta, selisih yang tumbuh adalah laba yang ditahan.', takeaway: 'Pertumbuhan modal pemilik hanya datang dari laba yang tersisa di bisnis, bukan dari aset yang sekadar bertambah karena utang.' },
          actions: ['Tulis tiga angka usaha Anda hari ini: total aset (kas, stok, peralatan), total utang, dan hitung modal = aset - utang.', 'Periksa apakah ada aset yang sebenarnya dibeli dengan utang pribadi yang belum Anda catat.', 'Ulangi perhitungan yang sama bulan depan dan catat perubahan modal Anda.'],
          level: 'Pemula', time: '4 min',
          scenario: {
            title: 'Dilema Membiayai Mesin Baru',
            context: 'Usaha Anda punya aset Rp 100 juta, utang Rp 40 juta. Anda butuh mesin Rp 30 juta untuk menaikkan kapasitas produksi.',
            dilemma: 'Bagaimana mendanai mesin tanpa merusak struktur keuangan?',
            choices: [
              { text: 'Gunakan laba tahun berjalan yang sudah tertahan di kas sebesar Rp 30 juta.', consequence: 'Aset total tetap, utang tidak bertambah, modal tetap sehat. Kas berkurang tapi mesin menambah kapasitas.', explanation: 'Mengubah kas menjadi aset produktif tanpa menambah kewajiban adalah pilihan paling aman selama kas operasional masih cukup.', best: true },
              { text: 'Pinjam seluruh Rp 30 juta dari pinjaman online jangka pendek.', consequence: 'Utang naik jadi Rp 70 juta dengan cicilan harian yang menekan kas.', explanation: 'Aset produktif berumur panjang sebaiknya tidak dibiayai utang jangka pendek berbunga tinggi.' },
              { text: 'Ambil dana kas yang seharusnya untuk gaji dan bahan baku bulan depan.', consequence: 'Mesin terbeli, tetapi bulan depan Anda tidak bisa membayar pemasok dan karyawan.', explanation: 'Aset tetap naik, kas operasional ambruk. Persamaan tetap seimbang namun bisnis berhenti.' }
            ]
          },
          quiz: [
            { q: 'Sebuah usaha punya total aset Rp 100 juta dan total utang Rp 40 juta. Berapa modal pemilik?', options: ['Rp 140 juta', 'Rp 60 juta', 'Rp 40 juta', 'Rp 100 juta'], answer: 1, why: 'Aset = Utang + Modal, sehingga Modal = 100 - 40 = Rp 60 juta.' },
            { q: 'Pemilik menyetor tambahan modal Rp 10 juta tunai ke usaha. Apa dampaknya pada persamaan akuntansi?', options: ['Aset naik Rp 10 juta, modal naik Rp 10 juta', 'Aset naik, utang naik', 'Hanya utang yang naik', 'Tidak ada perubahan'], answer: 0, why: 'Kas (aset) bertambah dan ekuitas pemilik bertambah dengan jumlah yang sama, persamaan tetap seimbang.' }
          ]
        },
        {
          id: 'acc-2-laba-rugi',
          label: 'Laporan Laba Rugi: Dari Omzet ke Laba Bersih',
          domain: 'Keuangan',
          summary: 'Membaca tangga laba: omzet, HPP, laba kotor, biaya operasional, dan laba bersih, supaya Anda tahu persis di anak tangga mana uang bocor.',
          model: 'Income Statement Waterfall',
          analogy: 'Laba rugi seperti air terjun bertingkat. Air (omzet) jatuh dari puncak, lalu di setiap tingkat ada yang menyedotnya: bahan baku, gaji, sewa, bunga, pajak. Yang sampai di dasar kolam adalah laba bersih. Pemilik yang hanya melihat kolam di dasar tidak tahu tingkat mana yang bocor.',
          insight: 'Laba kotor menunjukkan efisiensi produk (apakah harga jual cukup menutup biaya langsung), laba usaha menunjukkan efisiensi operasional, dan laba bersih menunjukkan efisiensi keseluruhan setelah bunga dan pajak. Membandingkan persentase tiap tingkat terhadap omzet (common-size analysis) jauh lebih informatif daripada melihat angka rupiah mentah.',
          cross: { text: 'Akuntansi x Strategi Harga', domains: ['Keuangan', 'Bisnis'], insight: 'Margin laba kotor rendah biasanya masalah harga atau biaya produksi. Margin laba usaha rendah dengan laba kotor sehat biasanya masalah overhead. Diagnosis berbeda, obat berbeda.' },
          story: { who: 'Kedai Kopi Mas Dimas (ilustrasi)', story: 'Omzet Rp 50 juta per bulan, HPP biji kopi dan susu Rp 30 juta, sehingga laba kotor Rp 20 juta (40%). Gaji, sewa, listrik Rp 12 juta, sehingga laba usaha Rp 8 juta (16%). Dimas semula merasa untung besar karena kas selalu penuh, padahal setelah gaji dirinya sendiri dihitung wajar Rp 6 juta, laba nyata tinggal Rp 2 juta.', takeaway: 'Masukkan gaji pemilik sebagai biaya. Laba yang hanya muncul karena pemilik bekerja gratis bukan laba bisnis, melainkan upah yang tidak dibayar.' },
          actions: ['Susun laba rugi sederhana bulan lalu dengan lima baris: omzet, HPP, biaya operasional, gaji pemilik, laba bersih.', 'Hitung tiga persentase terhadap omzet: laba kotor, laba usaha, laba bersih.', 'Tandai satu baris biaya terbesar yang paling mungkin dinegosiasikan atau diefisienkan.'],
          level: 'Pemula', time: '5 min', tool: 'margin',
          scenario: {
            title: 'Dilema Omzet Naik, Laba Turun',
            context: 'Setelah promo besar, omzet Anda naik dari Rp 50 juta menjadi Rp 70 juta, tetapi laba bersih turun dari Rp 8 juta menjadi Rp 5 juta.',
            dilemma: 'Apa langkah pertama yang paling masuk akal?',
            choices: [
              { text: 'Bedah laba rugi baris demi baris: bandingkan persentase HPP dan biaya promo sebelum dan sesudah.', consequence: 'Anda menemukan diskon 20% menggerus laba kotor dari 40% menjadi 30% sementara volume tambahan tidak cukup menutupnya.', explanation: 'Diagnosis harus dimulai dari struktur persentase, bukan dari rasa "omzet naik berarti bagus".', best: true },
              { text: 'Lanjutkan promo yang sama bulan depan agar omzet makin besar.', consequence: 'Omzet naik lagi, laba makin tipis dan kas mulai tersendat.', explanation: 'Mengejar omzet tanpa melihat margin adalah jebakan klasik pertumbuhan tidak sehat.' },
              { text: 'Pangkas semua biaya operasional 30% tanpa analisis.', consequence: 'Kualitas layanan turun, pelanggan lama pergi, laba justru lebih buruk.', explanation: 'Pemangkasan buta merusak sumber pendapatan. Efisiensi harus tepat sasaran.' }
            ]
          },
          quiz: [
            { q: 'Omzet Rp 50 juta, HPP Rp 30 juta, biaya operasional Rp 12 juta. Berapa laba usaha?', options: ['Rp 20 juta', 'Rp 8 juta', 'Rp 12 juta', 'Rp 38 juta'], answer: 1, why: 'Laba kotor = 50 - 30 = 20. Laba usaha = 20 - 12 = Rp 8 juta.' },
            { q: 'Dari data yang sama, berapa margin laba kotor?', options: ['16%', '24%', '40%', '60%'], answer: 2, why: 'Laba kotor 20 dibagi omzet 50 = 40%.' }
          ]
        },
        {
          id: 'acc-3-neraca',
          label: 'Neraca: Foto Kondisi Bisnis pada Satu Tanggal',
          domain: 'Keuangan',
          summary: 'Neraca memotret apa yang dimiliki, apa yang diutang, dan berapa sisa milik pemilik pada satu titik waktu. Berbeda dari laba rugi yang mengukur satu periode.',
          model: 'Balance Sheet Snapshot (Lancar vs Tidak Lancar)',
          analogy: 'Laba rugi adalah film: menunjukkan apa yang terjadi selama sebulan. Neraca adalah foto: menunjukkan posisi pada hari terakhir bulan itu. Dua laporan ini saling melengkapi, dan bisnis bisa terlihat bagus di film namun buruk di foto, misalnya laba besar tetapi utang jatuh tempo menumpuk.',
          insight: 'Aset dan liabilitas dikelompokkan berdasarkan kecepatan berubah menjadi atau menuntut kas. Aset lancar (kas, piutang, persediaan) diharapkan terpakai atau tertagih dalam satu tahun. Liabilitas lancar (utang dagang, cicilan jatuh tempo) harus dibayar dalam satu tahun. Perbandingan keduanya menentukan kemampuan membayar kewajiban jangka pendek.',
          cross: { text: 'Akuntansi x Manajemen Risiko', domains: ['Keuangan', 'Bisnis'], insight: 'Banyak bisnis yang menguntungkan gagal bukan karena rugi, melainkan karena utang jangka pendek jatuh tempo sebelum piutang dan stok berubah menjadi kas.' },
          story: { who: 'Usaha Distribusi Pak Harun (ilustrasi)', story: 'Aset lancar Pak Harun Rp 80 juta terdiri dari kas Rp 5 juta, piutang Rp 45 juta, dan stok Rp 30 juta. Utang lancar Rp 70 juta jatuh tempo bulan ini. Di atas kertas ia untung, tetapi kas hanya Rp 5 juta sehingga ia harus menagih keras dan menunda pembelian.', takeaway: 'Komposisi aset lebih penting daripada jumlahnya. Rp 80 juta yang mayoritas piutang dan stok tidak bisa membayar listrik besok pagi.' },
          actions: ['Buat daftar aset Anda dan urutkan dari yang paling cepat menjadi uang tunai sampai yang paling lambat.', 'Daftar semua kewajiban 90 hari ke depan beserta tanggal jatuh temponya.', 'Hitung selisih kas tersedia dikurangi kewajiban 30 hari ke depan.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Utang Jatuh Tempo dengan Piutang Macet',
            context: 'Anda punya utang pemasok Rp 40 juta jatuh tempo 10 hari lagi. Kas hanya Rp 8 juta, piutang pelanggan Rp 50 juta namun sebagian besar belum jatuh tempo.',
            dilemma: 'Apa langkah paling sehat untuk menutup kewajiban?',
            choices: [
              { text: 'Tagih piutang yang sudah jatuh tempo, tawarkan diskon kecil untuk pelunasan cepat, dan negosiasikan jadwal bayar dengan pemasok.', consequence: 'Kas terkumpul tepat waktu dan hubungan dengan pemasok terjaga.', explanation: 'Mempercepat konversi aset lancar menjadi kas dan mengomunikasikan jadwal lebih sehat daripada berutang baru.', best: true },
              { text: 'Ambil pinjaman harian bunga tinggi untuk menutup seluruh Rp 40 juta.', consequence: 'Kewajiban lunas, namun biaya bunga menggerus laba beberapa bulan ke depan.', explanation: 'Utang mahal untuk menutup masalah kas sering menciptakan masalah kas berikutnya.' },
              { text: 'Abaikan dan berharap pemasok memaklumi.', consequence: 'Pemasok menahan pengiriman, stok kosong, penjualan turun.', explanation: 'Mengabaikan kewajiban jatuh tempo merusak reputasi dan rantai pasok.' }
            ]
          },
          quiz: [
            { q: 'Mana yang termasuk aset lancar?', options: ['Mesin produksi', 'Piutang dagang', 'Gedung kantor', 'Merek dagang'], answer: 1, why: 'Piutang dagang diharapkan tertagih dalam waktu dekat. Mesin, gedung, dan merek adalah aset tidak lancar.' },
            { q: 'Usaha membeli mesin Rp 20 juta secara tunai. Apa dampaknya pada total aset?', options: ['Naik Rp 20 juta', 'Turun Rp 20 juta', 'Tidak berubah, hanya komposisinya', 'Modal turun Rp 20 juta'], answer: 2, why: 'Kas turun Rp 20 juta dan aset tetap naik Rp 20 juta. Total aset dan modal tidak berubah.' }
          ]
        }
      ]
    },
    {
      title: 'Uang Tunai Adalah Raja',
      lessons: [
        {
          id: 'acc-4-arus-kas',
          label: 'Laba Bukan Kas: Membaca Laporan Arus Kas',
          domain: 'Keuangan',
          summary: 'Mengapa bisnis yang untung di kertas bisa kehabisan uang, dan bagaimana tiga arus kas (operasional, investasi, pendanaan) menjelaskan ke mana uang pergi.',
          model: 'Cash Flow Statement (Operasi, Investasi, Pendanaan)',
          analogy: 'Laba adalah nilai rapor, kas adalah uang jajan di saku. Seorang siswa bisa berprestasi tinggi tetapi tidak punya uang untuk naik angkot pulang. Bisnis butuh keduanya: laba membuktikan model bisnis bekerja, kas membuktikan bisnis bisa bertahan hidup hari ini.',
          insight: 'Laba dihitung dengan dasar akrual: penjualan dicatat saat terjadi walau uang belum diterima. Karena itu laba dapat naik sementara kas turun, terutama ketika piutang dan persediaan membengkak. Laporan arus kas mengurai kas ke tiga kegiatan sehingga pemilik bisa melihat apakah kas dihasilkan operasi inti atau sekadar dari utang baru.',
          cross: { text: 'Akuntansi x Psikologi Keputusan', domains: ['Keuangan', 'Psikologi'], insight: 'Otak menyukai angka laba yang positif sehingga pemilik cenderung merasa aman. Kas yang menipis jarang terasa sampai terlambat. Mengecek arus kas mingguan adalah disiplin yang melawan bias optimisme.' },
          story: { who: 'Fenomena Bisnis Menguntungkan yang Kehabisan Kas (ilustrasi)', story: 'Sebuah konveksi menerima pesanan seragam Rp 150 juta dengan termin bayar 60 hari. Ia membeli kain Rp 90 juta dan membayar penjahit Rp 30 juta di bulan pertama. Laba di atas kertas Rp 30 juta, tetapi kasnya negatif Rp 120 juta selama dua bulan. Tanpa modal kerja cadangan, pesanan sebesar apa pun justru menenggelamkannya.', takeaway: 'Pertumbuhan menyerap kas lebih dulu sebelum menghasilkan kas. Siapkan modal kerja sebelum menerima pesanan besar bertermin panjang.' },
          actions: ['Catat setiap minggu: kas awal, uang masuk, uang keluar, kas akhir. Lima menit cukup.', 'Pisahkan uang keluar menjadi tiga: operasional rutin, pembelian aset, dan pembayaran utang.', 'Hitung berapa hari bisnis Anda bisa bertahan hanya dengan kas yang ada, tanpa pemasukan baru.'],
          level: 'Menengah', time: '5 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Pesanan Besar Bertermin 60 Hari',
            context: 'Pelanggan korporat memesan Rp 150 juta dengan pembayaran 60 hari setelah barang diterima. Modal kerja Anda hanya Rp 60 juta.',
            dilemma: 'Bagaimana menyikapi pesanan ini?',
            choices: [
              { text: 'Negosiasikan uang muka 30-40% dan pembayaran bertahap, atau kurangi cakupan pesanan sesuai kemampuan modal kerja.', consequence: 'Pesanan tetap jalan, kas aman, dan Anda belajar menetapkan syarat bayar yang sehat.', explanation: 'Syarat pembayaran adalah bagian dari harga. Uang muka mengubah risiko pendanaan menjadi tanggung jawab bersama.', best: true },
              { text: 'Terima semua syarat apa adanya demi nama besar pelanggan.', consequence: 'Kas negatif, gaji terlambat, kualitas produksi turun di tengah jalan.', explanation: 'Prestise pelanggan tidak membayar tagihan pemasok.' },
              { text: 'Tolak mentah-mentah tanpa menawarkan alternatif.', consequence: 'Anda aman tetapi kehilangan peluang pertumbuhan yang sebenarnya bisa dikelola.', explanation: 'Penolakan tanpa negosiasi sering melewatkan solusi tengah yang menguntungkan kedua pihak.' }
            ]
          },
          quiz: [
            { q: 'Penjualan kredit Rp 30 juta dicatat bulan ini, pelanggan membayar bulan depan. Apa efeknya bulan ini?', options: ['Laba naik, kas belum naik', 'Kas naik Rp 30 juta', 'Laba dan kas sama-sama tidak berubah', 'Utang naik Rp 30 juta'], answer: 0, why: 'Pada akuntansi akrual penjualan diakui saat terjadi sehingga laba naik, tetapi kas baru masuk saat pelanggan membayar.' },
            { q: 'Membeli mesin produksi termasuk arus kas dari kegiatan apa?', options: ['Operasional', 'Investasi', 'Pendanaan', 'Tidak dicatat'], answer: 1, why: 'Pembelian aset tetap adalah kegiatan investasi.' }
          ]
        },
        {
          id: 'acc-5-hpp',
          label: 'HPP, Persediaan, dan Margin yang Sebenarnya',
          domain: 'Keuangan',
          summary: 'Menghitung harga pokok penjualan dengan benar, membedakan margin dari markup, dan mengapa stok yang menumpuk adalah uang yang tertidur.',
          model: 'Cost of Goods Sold & Gross Margin vs Markup',
          analogy: 'Stok barang seperti buah di gerobak. Buah yang terjual menjadi uang, buah yang membusuk menjadi kerugian, buah yang masih ada di gerobak adalah modal Anda yang tertahan. HPP hanyalah catatan buah mana yang benar-benar sudah laku bulan ini.',
          insight: 'HPP = Persediaan Awal + Pembelian - Persediaan Akhir. Margin dihitung terhadap harga jual (Laba Kotor / Harga Jual), sedangkan markup dihitung terhadap harga beli (Laba Kotor / Harga Beli). Keduanya sering tertukar. Markup 100% hanya setara margin 50%. Keliru menyamakan keduanya adalah sumber umum harga jual yang terlalu rendah.',
          cross: { text: 'Akuntansi x Operasi Rantai Pasok', domains: ['Keuangan', 'Bisnis'], insight: 'Persediaan berlebih menyerap kas, memakan biaya simpan, dan berisiko usang. Persediaan terlalu sedikit membuat penjualan hilang. Keseimbangan ini inti dari manajemen modal kerja.' },
          story: { who: 'Toko Pakaian Mbak Sari (ilustrasi)', story: 'Sari membeli kemeja Rp 60.000 dan menjualnya Rp 100.000. Ia mengira untungnya 40% sehingga mengatur diskon besar-besaran 35% di akhir musim. Margin sebenarnya terhadap harga jual 40%, tetapi setelah diskon 35% harga jual jadi Rp 65.000, margin tinggal sekitar 7,7% sebelum biaya lain. Setelah dikurangi biaya operasional, diskon itu merugikan.', takeaway: 'Hitung batas diskon dari margin yang tersisa, bukan dari rasa "masih untung". Diskon besar butuh volume yang jauh lebih besar untuk impas.' },
          actions: ['Hitung HPP bulan lalu: persediaan awal + pembelian - persediaan akhir.', 'Hitung margin dan markup untuk tiga produk terlaris Anda, lalu bandingkan keduanya.', 'Tentukan batas diskon maksimal per produk agar margin tidak di bawah biaya operasional per unit.'],
          level: 'Menengah', time: '5 min', tool: 'margin',
          scenario: {
            title: 'Dilema Cuci Gudang Akhir Musim',
            context: 'Stok senilai Rp 40 juta (harga beli) menumpuk. Harga jual normal 1,6 kali harga beli. Pemasok minggu depan menagih Rp 25 juta.',
            dilemma: 'Bagaimana menghabiskan stok tanpa menghancurkan margin?',
            choices: [
              { text: 'Diskon bertingkat untuk stok paling lambat laku, tetapi pertahankan harga di atas HPP, dan bundel dengan produk laris.', consequence: 'Kas terkumpul, kerugian terkendali, stok sehat kembali.', explanation: 'Diskon selektif dengan batas bawah HPP mengubah stok mati menjadi kas tanpa menjual rugi.', best: true },
              { text: 'Diskon seragam 50% untuk semua barang.', consequence: 'Barang laris terjual rugi, laba bulan ini hilang.', explanation: 'Diskon seragam mengorbankan margin barang yang sebenarnya laku normal.' },
              { text: 'Tahan stok sampai musim depan.', consequence: 'Kas kering, tagihan pemasok menumpuk, model baru membuat stok lama makin sulit dijual.', explanation: 'Menunda keputusan stok mahal ketika kas sedang menipis.' }
            ]
          },
          quiz: [
            { q: 'Persediaan awal Rp 10 juta, pembelian Rp 40 juta, persediaan akhir Rp 15 juta. Berapa HPP?', options: ['Rp 35 juta', 'Rp 45 juta', 'Rp 50 juta', 'Rp 25 juta'], answer: 0, why: 'HPP = 10 + 40 - 15 = Rp 35 juta.' },
            { q: 'Barang dibeli Rp 60.000 dan dijual Rp 100.000. Berapa margin terhadap harga jual?', options: ['66,7%', '40%', '60%', '30%'], answer: 1, why: 'Laba kotor Rp 40.000 dibagi harga jual Rp 100.000 = 40%. Angka 66,7% adalah markup terhadap harga beli.' }
          ]
        }
      ]
    },
    {
      title: 'Membaca Angka untuk Memutuskan',
      lessons: [
        {
          id: 'acc-6-rasio',
          label: 'Rasio Kunci: Likuiditas, Profitabilitas, Leverage',
          domain: 'Keuangan',
          summary: 'Tiga kelompok rasio sederhana yang menjawab tiga pertanyaan: apakah bisnis bisa membayar tagihan, apakah menguntungkan, dan seberapa berisiko pendanaannya.',
          model: 'Ratio Analysis (Liquidity, Profitability, Leverage)',
          analogy: 'Rasio seperti pemeriksaan kesehatan: tekanan darah, gula darah, kolesterol. Satu angka tidak menjelaskan semuanya, tetapi tiga angka bersama memberi gambaran apakah Anda perlu mengubah gaya hidup. Rasio keuangan adalah tanda vital bisnis.',
          insight: 'Current ratio = Aset Lancar / Utang Lancar mengukur kesanggupan membayar kewajiban jangka pendek. Net profit margin = Laba Bersih / Omzet mengukur profitabilitas. Debt-to-equity = Total Liabilitas / Ekuitas mengukur ketergantungan pada utang. Nilai ideal berbeda antar industri, sehingga rasio paling berguna jika dibandingkan dengan periode sebelumnya dan pesaing sejenis.',
          cross: { text: 'Akuntansi x Investasi', domains: ['Keuangan', 'Ekonomi'], insight: 'Rasio yang sama yang Anda gunakan untuk bisnis sendiri dipakai investor dan bank untuk menilai kelayakan Anda. Menguasainya berarti menguasai bahasa pemberi dana.' },
          story: { who: 'Dua Toko dengan Laba Sama (ilustrasi)', story: 'Toko A dan Toko B sama-sama laba Rp 10 juta. Toko A punya current ratio 2,0 dan utang rendah. Toko B current ratio 0,8 dan utang tinggi. Ketika penjualan turun sebulan, Toko A tenang. Toko B langsung gagal bayar. Laba yang sama menyembunyikan risiko yang sangat berbeda.', takeaway: 'Laba tidak sama dengan ketahanan. Rasio menunjukkan seberapa kuat bisnis menahan guncangan.' },
          actions: ['Hitung current ratio dan net profit margin usaha Anda dari data terbaru.', 'Bandingkan dengan tiga bulan lalu. Tandai apakah arahnya membaik atau memburuk.', 'Tetapkan target minimal rasio yang akan Anda jaga sebelum mengambil utang baru.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Pinjaman untuk Ekspansi',
            context: 'Bank menawarkan pinjaman Rp 100 juta untuk membuka cabang. Current ratio Anda 1,1 dan debt-to-equity 1,5.',
            dilemma: 'Apakah Anda sebaiknya mengambil pinjaman tersebut sekarang?',
            choices: [
              { text: 'Perbaiki rasio dulu (kurangi utang, percepat tagihan), lalu ambil pinjaman dengan proyeksi kas yang menunjukkan cicilan tertutup.', consequence: 'Anda mengambil pinjaman lebih kecil dari posisi lebih kuat, dengan risiko gagal bayar yang rendah.', explanation: 'Ekspansi dengan fondasi rasio yang lemah memperbesar kerentanan.', best: true },
              { text: 'Ambil seluruh pinjaman sekarang karena peluang lokasi bagus.', consequence: 'Cabang baru menyedot kas sebelum menghasilkan. Cicilan menekan cabang lama.', explanation: 'Leverage tinggi di atas margin keamanan tipis memperbesar risiko, bukan hanya peluang.' },
              { text: 'Tolak semua utang selamanya.', consequence: 'Aman, tetapi pertumbuhan lambat ketika peluang bagus datang.', explanation: 'Utang adalah alat. Masalahnya bukan utang itu sendiri, melainkan utang tanpa perhitungan.' }
            ]
          },
          quiz: [
            { q: 'Aset lancar Rp 80 juta dan utang lancar Rp 50 juta. Berapa current ratio?', options: ['0,63', '1,6', '30', '1,0'], answer: 1, why: '80 dibagi 50 = 1,6.' },
            { q: 'Total liabilitas Rp 40 juta dan ekuitas Rp 60 juta. Berapa debt-to-equity?', options: ['1,5', '0,4', '0,67', '1,0'], answer: 2, why: '40 dibagi 60 sama dengan 0,67, artinya setiap Rp 1 modal sendiri ada Rp 0,67 utang.' }
          ]
        },
        {
          id: 'acc-7-pembukuan',
          label: 'Pembukuan Rapi untuk Usaha Kecil',
          domain: 'Keuangan',
          summary: 'Sistem pembukuan sederhana yang konsisten: pisahkan uang pribadi dan usaha, catat rutin, rekonsiliasi, dan siapkan data untuk bank maupun pajak.',
          model: 'Separate Entity Principle & Simple Bookkeeping Cadence',
          analogy: 'Dapur restoran yang rapi bukan soal estetika, melainkan agar koki menemukan bahan dalam hitungan detik saat pesanan menumpuk. Pembukuan rapi sama: saat bank, investor, atau petugas pajak bertanya, Anda menjawab dalam menit, bukan dalam minggu.',
          insight: 'Prinsip entitas terpisah menyatakan bisnis dan pemiliknya adalah dua pihak berbeda secara akuntansi. Mencampur keduanya membuat laba tidak bisa diukur dan kinerja tidak bisa dibandingkan. Kebiasaan sederhana dan konsisten (rekening terpisah, gaji pemilik, pencatatan harian, rekonsiliasi bulanan) jauh lebih bernilai daripada perangkat lunak canggih yang jarang dipakai.',
          cross: { text: 'Akuntansi x Hukum & Pajak', domains: ['Keuangan', 'Hukum', 'Pajak'], insight: 'Pembukuan yang tertib memudahkan kepatuhan pajak dan memperkuat posisi hukum Anda jika terjadi sengketa. Aturan pajak berbeda menurut jenis usaha dan berubah dari waktu ke waktu, jadi verifikasi ketentuan terbaru dengan konsultan pajak atau situs resmi otoritas pajak.' },
          story: { who: 'Pengajuan Kredit Usaha yang Ditolak (ilustrasi)', story: 'Seorang pemilik katering mengajukan pinjaman usaha tetapi hanya punya catatan di buku tulis tercampur belanja rumah. Bank tidak bisa menilai arus kas sehingga pengajuan ditolak. Setelah enam bulan memisahkan rekening dan mencatat harian, pengajuan berikutnya disetujui dengan bunga lebih rendah.', takeaway: 'Pembukuan rapi adalah aset tak berwujud: ia menurunkan biaya modal Anda.' },
          actions: ['Buka rekening khusus usaha dan pindahkan seluruh transaksi usaha ke sana mulai bulan ini.', 'Tetapkan gaji pemilik tetap tiap bulan, lalu hanya ambil sebesar itu.', 'Jadwalkan 30 menit setiap akhir pekan untuk mencatat dan mencocokkan saldo rekening dengan catatan.'],
          level: 'Pemula', time: '4 min',
          scenario: {
            title: 'Dilema Uang Usaha untuk Kebutuhan Pribadi',
            context: 'Anak Anda butuh biaya sekolah Rp 5 juta mendadak. Kas usaha Rp 20 juta tersedia di rekening.',
            dilemma: 'Bagaimana menanganinya tanpa merusak pembukuan?',
            choices: [
              { text: 'Catat sebagai pengambilan pemilik (prive) atau pinjaman pemilik, lalu sesuaikan gaji bulan depan.', consequence: 'Kebutuhan terpenuhi, catatan tetap jelas, dan laba usaha tidak terdistorsi.', explanation: 'Pencatatan transparan menjaga ukuran kinerja usaha tetap benar walau pemilik mengambil dana.', best: true },
              { text: 'Ambil tunai tanpa mencatat. Nanti diingat saja.', consequence: 'Tiga bulan kemudian selisih kas tidak bisa dijelaskan dan laba tampak lebih kecil dari kenyataan.', explanation: 'Transaksi yang tidak dicatat adalah sumber kebocoran dan salah keputusan.' },
              { text: 'Tangguhkan pembayaran pemasok agar uangnya aman untuk keluarga.', consequence: 'Hubungan dengan pemasok memburuk dan kredit dagang diperketat.', explanation: 'Menggeser beban pribadi ke kewajiban usaha menciptakan masalah baru.' }
            ]
          },
          quiz: [
            { q: 'Mengapa uang pribadi dan uang usaha sebaiknya dipisah?', options: ['Agar laba usaha dapat diukur dan dibandingkan dengan benar', 'Supaya pajak otomatis nol', 'Karena bank melarang satu pemilik punya dua rekening', 'Agar usaha tidak perlu membayar gaji pemilik'], answer: 0, why: 'Tanpa pemisahan, biaya pribadi masuk ke usaha dan laba nyata tidak bisa diketahui.' },
            { q: 'Kebiasaan mana yang paling berdampak untuk pembukuan usaha kecil?', options: ['Memakai perangkat lunak termahal', 'Mencatat konsisten tiap minggu dan mencocokkan saldo rekening', 'Membuat laporan hanya saat akhir tahun', 'Mencatat hanya pemasukan'], answer: 1, why: 'Konsistensi dan rekonsiliasi rutin lebih penting daripada alat yang canggih.' }
          ]
        }
      ]
    }
  ]
});
