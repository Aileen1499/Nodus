import { buildPath } from '../curriculumBuilder';

// Catatan: semua angka bertanda "ilustrasi" adalah contoh hitung, bukan data usaha nyata.
// Tarif pajak dan bea berubah menurut aturan dan jenis barang: selalu cek aturan resmi terbaru.
export const LOKAL_CURRICULUM = buildPath({
  id: 'curriculum-kasus-bisnis-indonesia',
  topic: 'Kasus Bisnis Indonesia: Warung, F&B, Marketplace & Ekspor-Impor',
  description:
    'Enam kasus dari usaha Indonesia sehari-hari: warung, kedai kopi, jualan di marketplace, piutang pemasok, impor barang, dan ekspor. Setiap pelajaran memadukan hitungan nyata dengan keputusan yang harus Anda ambil.',
  stages: [
    {
      title: 'Usaha Harian: Warung, Kedai & Toko Online',
      lessons: [
        {
          id: 'id-1-warung',
          label: 'Warung & Toko Kelontong: Perputaran Stok',
          domain: 'Bisnis',
          summary: 'Warung untung bukan karena margin per barang besar, tetapi karena stok cepat berputar dan modal tidak mengendap.',
          model: 'Perputaran persediaan & modal kerja',
          analogy: 'Rak warung seperti ban berjalan: barang yang cepat terjual membuat uang kembali dan bisa dipakai membeli lagi. Barang yang menumpuk adalah uang yang tertidur di rak.',
          insight: 'Laba tahunan = margin per barang x berapa kali modal berputar. Margin 10% dengan modal berputar 24 kali setahun menghasilkan lebih besar daripada margin 30% yang berputar 4 kali. Karena itu pemilik warung perlu tahu barang mana yang cepat, lambat, dan hampir kedaluwarsa, lalu menyesuaikan jumlah belinya.',
          cross: { text: 'Operasi x Keuangan', domains: ['Bisnis', 'Keuangan'], insight: 'Stok adalah aset yang berubah menjadi biaya bila kedaluwarsa atau tak laku. Menghitungnya sebagai modal tertahan membuat keputusan beli lebih disiplin.' },
          story: { who: 'Warung Bu Sari (ilustrasi)', story: 'Bu Sari memborong mi instan karena diskon pemasok: modal Rp 5 juta tertahan, padahal rak hanya laku sekitar Rp 1 juta per minggu. Di saat yang sama stok beras habis dan pelanggan pindah ke warung sebelah. Setelah mencatat penjualan mingguan, ia membeli barang cepat laku lebih sering dalam jumlah kecil dan menahan barang lambat.', takeaway: 'Beli sesuai kecepatan jual, bukan sesuai besarnya diskon.' },
          actions: ['Catat lima barang terlaris dan lima paling lambat selama dua minggu.', 'Hitung modal yang tertahan di barang yang tidak laku dalam 30 hari.', 'Tentukan jumlah beli minimum untuk tiap barang cepat agar tidak kehabisan.'],
          level: 'Pemula', time: '5 min', tool: 'inventory',
          scenario: {
            title: 'Dilema Diskon Pemasok',
            context: 'Pemasok menawarkan diskon 12% bila Anda membeli 10 dus sekaligus. Penjualan barang itu rata-rata 2 dus per bulan, dan masa kedaluwarsanya 6 bulan.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Ambil jumlah yang habis terjual sebelum kedaluwarsa (sekitar 3 dus), meski diskonnya lebih kecil atau tanpa diskon.', consequence: 'Modal tidak mengendap dan barang tidak kedaluwarsa. Uang bisa dipakai membeli barang cepat laku.', explanation: 'Diskon hanya menguntungkan bila barang terjual sebelum modal dan masa simpan habis.', best: true },
              { text: 'Ambil 10 dus karena diskonnya besar.', consequence: 'Hanya sekitar 6 dus terjual sebelum kedaluwarsa dan sisanya rugi, ditambah modal tertahan berbulan-bulan.', explanation: 'Penghematan 12% habis oleh barang tak laku dan modal yang tertahan.' },
              { text: 'Tolak semua tawaran pemasok.', consequence: 'Anda kehilangan peluang harga bagus yang sebenarnya bisa diambil dalam jumlah wajar.', explanation: 'Keputusan baiknya mencocokkan jumlah beli dengan kecepatan jual, bukan menolak total.' }
            ]
          },
          quiz: [
            { q: 'Mana yang biasanya lebih menguntungkan bagi warung?', options: ['Margin tinggi tetapi stok berputar sangat lambat', 'Margin lebih kecil tetapi stok berputar cepat', 'Menimbun stok sebanyak mungkin', 'Hanya menjual barang termurah'], answer: 1, why: 'Laba tahunan ditentukan margin dikali jumlah putaran modal.' },
            { q: 'Apa risiko utama membeli banyak karena diskon pemasok?', options: ['Pelanggan bertambah', 'Modal tertahan dan barang bisa kedaluwarsa', 'Pajak berkurang', 'Margin otomatis naik'], answer: 1, why: 'Stok berlebih menahan kas dan berisiko rugi.' }
          ]
        },
        {
          id: 'id-2-kedai',
          label: 'Kedai Kopi & F&B: HPP Resep dan Margin',
          domain: 'Bisnis',
          summary: 'Harga segelas kopi harus menutup bahan, tenaga, sewa, dan menyisakan laba. Itu dimulai dari HPP per resep yang dihitung benar.',
          model: 'HPP resep & margin kotor',
          analogy: 'Menghitung HPP seperti menimbang resep kue sebelum dijual: bila Anda lupa menghitung gula dan kemasan, kue terasa laris tetapi kasnya tipis.',
          insight: 'HPP per porsi mencakup bahan, takaran susut (tumpah, gagal), dan kemasan. Margin kotor yang sehat di F&B bergantung pada jenis usaha, tetapi prinsipnya sama: harga jual harus menutup HPP plus biaya tetap per porsi (sewa, gaji, listrik) dan laba. Menu dengan margin tinggi sebaiknya dipromosikan, menu margin rendah dijadikan penarik pelanggan.',
          cross: { text: 'Keuangan x Psikologi Harga', domains: ['Keuangan', 'Psikologi'], insight: 'Menu premium bisa menjadi jangkar yang membuat menu utama terasa wajar. Menu margin tinggi ditempatkan di posisi yang mudah dilihat.' },
          story: { who: 'Kedai Kopi Senja (ilustrasi)', story: 'Pemilik menjual es kopi susu Rp 18.000. Setelah menghitung biji, susu, gula, gelas, dan susut, HPP-nya Rp 9.500, margin kotor sekitar 47%. Namun setelah sewa dan gaji dibagi ke tiap gelas, laba bersih per gelas hanya Rp 1.500. Ia menaikkan harga Rp 2.000 untuk varian premium dan menambah menu camilan bermargin tinggi.', takeaway: 'Margin kotor yang terlihat besar bisa tipis setelah biaya tetap dihitung.' },
          actions: ['Hitung HPP lengkap satu menu terlaris, termasuk kemasan dan susut.', 'Bagi biaya tetap bulanan dengan jumlah porsi untuk melihat biaya tetap per porsi.', 'Pilih satu menu bermargin tinggi untuk dipromosikan minggu ini.'],
          level: 'Pemula', time: '5 min', tool: 'margin',
          scenario: {
            title: 'Dilema Harga Saat Bahan Naik',
            context: 'Harga biji kopi dan susu naik sehingga HPP segelas naik 10%. Pesaing sekitar belum menaikkan harga.',
            dilemma: 'Bagaimana menyesuaikan harga?',
            choices: [
              { text: 'Hitung ulang HPP dan margin, naikkan harga sedikit pada menu yang margin-nya tertekan, serta pertahankan menu penarik di harga lama.', consequence: 'Margin terjaga tanpa membuat semua pelanggan merasa harga melonjak.', explanation: 'Penyesuaian selektif berdasarkan margin per menu menjaga laba dan daya tarik.', best: true },
              { text: 'Biarkan harga tetap agar tidak kehilangan pelanggan.', consequence: 'Margin menyusut diam-diam dan laba bersih bisa menjadi nol.', explanation: 'Menyerap kenaikan biaya tanpa menghitung dampaknya menggerus laba.' },
              { text: 'Naikkan semua harga 30%.', consequence: 'Pelanggan setia kaget dan sebagian beralih ke pesaing.', explanation: 'Kenaikan besar tanpa dasar hitungan berisiko menurunkan volume.' }
            ]
          },
          quiz: [
            { q: 'Apa saja yang termasuk dalam HPP per porsi?', options: ['Hanya bahan utama', 'Bahan, susut, dan kemasan', 'Hanya sewa tempat', 'Hanya gaji'], answer: 1, why: 'HPP mencakup bahan, susut, dan kemasan per porsi.' },
            { q: 'Mengapa margin kotor yang besar belum berarti laba bersih besar?', options: ['Karena pajak selalu 50%', 'Karena biaya tetap seperti sewa dan gaji belum dihitung', 'Karena margin kotor tidak penting', 'Karena harga tak boleh naik'], answer: 1, why: 'Laba bersih baru muncul setelah biaya tetap dikurangkan.' }
          ]
        },
        {
          id: 'id-3-marketplace',
          label: 'Jualan di Marketplace: Harga Setelah Semua Potongan',
          domain: 'Bisnis',
          summary: 'Harga etalase belum tentu sama dengan uang yang masuk. Komisi, ongkir, promo, dan retur harus dihitung sebelum menetapkan harga.',
          model: 'Unit economics per pesanan',
          analogy: 'Menjual di marketplace seperti menyewa lapak di pusat perbelanjaan ramai: pembeli datang sendiri, tetapi Anda membayar sewa, komisi, dan ikut aturan promo mereka.',
          insight: 'Hitung laba per pesanan: harga jual dikurangi HPP, komisi platform, biaya layanan, subsidi ongkir atau promo, biaya pengemasan, dan rata-rata kerugian retur. Dari situ turunkan harga minimum agar tiap pesanan menyisakan laba. Persentase biaya berbeda-beda menurut platform dan kategori, jadi cek aturan resmi terbaru.',
          cross: { text: 'Pemasaran x Keuangan', domains: ['Bisnis', 'Keuangan'], insight: 'Promo menaikkan penjualan tetapi menekan margin. Volume tambahan harus cukup besar untuk menutup margin yang hilang.' },
          story: { who: 'Toko Hijab Online (ilustrasi)', story: 'Penjual memasang harga Rp 100.000 dengan HPP Rp 55.000 dan merasa untung Rp 45.000. Setelah komisi dan biaya layanan (total contoh 12%), subsidi ongkir Rp 6.000, kemasan Rp 3.000, dan rata-rata kerugian retur Rp 3.000, laba tinggal sekitar Rp 16.000 per pesanan. Ia lalu menaikkan harga sedikit dan menawarkan gratis ongkir hanya di atas jumlah belanja tertentu.', takeaway: 'Tetapkan harga dari laba bersih per pesanan, bukan dari harga etalase.' },
          actions: ['Daftar semua potongan untuk satu produk terlaris di platform Anda.', 'Hitung laba bersih per pesanan dan harga minimum agar tidak rugi.', 'Uji syarat gratis ongkir di atas nilai belanja tertentu untuk menaikkan nilai keranjang.'],
          level: 'Menengah', time: '6 min', tool: 'pricing',
          scenario: {
            title: 'Dilema Ikut Promo Platform',
            context: 'Platform mengajak Anda ikut promo diskon 20%. Margin normal produk 40%, dan pembeli diperkirakan naik cukup banyak.',
            dilemma: 'Apakah Anda ikut promo?',
            choices: [
              { text: 'Hitung dulu: margin baru dan tambahan volume yang dibutuhkan agar total laba tidak turun, lalu putuskan.', consequence: 'Anda tahu bahwa diskon 20% pada margin 40% hampir menggandakan volume yang dibutuhkan, sehingga ikut hanya pada produk bermargin lebih tebal.', explanation: 'Diskon besar memerlukan tambahan volume besar hanya untuk mempertahankan laba yang sama.', best: true },
              { text: 'Ikut semua produk karena promo pasti menaikkan penjualan.', consequence: 'Penjualan naik tetapi laba per unit tipis dan total laba bisa turun.', explanation: 'Volume naik tidak otomatis berarti laba naik.' },
              { text: 'Tidak pernah ikut promo apa pun.', consequence: 'Anda kehilangan eksposur yang bisa menguntungkan pada produk bermargin tebal.', explanation: 'Keputusan baiknya selektif berdasarkan hitungan.' }
            ]
          },
          quiz: [
            { q: 'Mengapa harga etalase tidak sama dengan uang yang Anda terima?', options: ['Karena komisi, ongkir, promo, dan retur mengurangi hasil', 'Karena pembeli membayar lebih', 'Karena HPP otomatis turun', 'Karena pajak dibayar pembeli'], answer: 0, why: 'Potongan platform dan biaya operasional mengurangi hasil bersih per pesanan.' },
            { q: 'Diskon besar pada margin tipis membutuhkan...', options: ['Tambahan volume yang jauh lebih besar untuk menjaga laba', 'Tidak ada perubahan', 'Pengurangan HPP otomatis', 'Pelanggan lebih sedikit'], answer: 0, why: 'Semakin kecil margin per unit, semakin banyak unit tambahan yang dibutuhkan.' }
          ]
        }
      ]
    },
    {
      title: 'Arus Kas, Impor & Ekspor',
      lessons: [
        {
          id: 'id-4-piutang',
          label: 'Pemasok UMKM: Piutang 30 Hari dan Arus Kas',
          domain: 'Keuangan',
          summary: 'Penjualan besar dengan termin bayar 30 hari bisa membuat usaha kehabisan kas padahal laporan labanya bagus.',
          model: 'Siklus konversi kas',
          analogy: 'Piutang seperti meminjamkan uang kepada pelanggan tanpa bunga: mereka senang, tetapi Anda yang menanggung biaya modal selama menunggu.',
          insight: 'Laba di atas kertas belum berarti uang di rekening. Bila Anda membayar bahan di muka sementara pelanggan membayar 30 hari kemudian, Anda perlu modal kerja untuk menutup jeda itu. Semakin besar pesanan dengan termin panjang, semakin besar kebutuhan kas. Karena itu pesanan besar perlu dihitung kebutuhan modal kerjanya sebelum diterima.',
          cross: { text: 'Keuangan x Negosiasi', domains: ['Keuangan', 'Komunikasi'], insight: 'Termin pembayaran bisa dinegosiasikan: uang muka, termin lebih pendek, atau diskon bayar cepat adalah alat menjaga kas.' },
          story: { who: 'Konveksi Seragam (ilustrasi)', story: 'Konveksi menerima pesanan besar senilai Rp 80 juta dengan pembayaran 30 hari setelah barang diterima. Bahan dan upah menelan Rp 55 juta di muka. Kas pemilik hanya Rp 30 juta, sehingga ia harus menunda gaji penjahit dan berutang untuk bahan. Pesanan itu menguntungkan, tetapi hampir membuat usahanya macet.', takeaway: 'Hitung kebutuhan modal kerja sebelum menerima pesanan dengan termin panjang.' },
          actions: ['Hitung kas yang harus dikeluarkan di muka untuk pesanan terbesar Anda.', 'Minta uang muka atau termin bertahap untuk pesanan besar.', 'Catat umur piutang dan tagih setiap yang melewati jatuh tempo.'],
          level: 'Menengah', time: '6 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Pesanan Besar dengan Termin 30 Hari',
            context: 'Pelanggan korporasi memesan senilai dua kali omzet bulanan Anda, dengan pembayaran 30 hari setelah barang diterima. Kas Anda tidak cukup membiayai produksi penuh.',
            dilemma: 'Apa yang Anda lakukan?',
            choices: [
              { text: 'Hitung kebutuhan modal kerja, lalu minta uang muka atau termin bertahap, dan terima hanya bila kas aman.', consequence: 'Kas terjaga selama produksi, dan pesanan tetap bisa dikerjakan tanpa menunda gaji.', explanation: 'Menegosiasikan termin menutup jeda antara biaya dan penerimaan.', best: true },
              { text: 'Terima begitu saja dan berharap kas cukup.', consequence: 'Kas habis di tengah produksi, utang mendadak, dan kualitas turun.', explanation: 'Laba di atas kertas tidak membayar bahan dan gaji hari ini.' },
              { text: 'Tolak pesanan besar apa pun.', consequence: 'Anda menutup peluang bertumbuh yang bisa dibiayai dengan termin lebih baik.', explanation: 'Menolak tanpa mencoba menegosiasikan termin melewatkan peluang.' }
            ]
          },
          quiz: [
            { q: 'Mengapa usaha yang berlaba bisa kehabisan kas?', options: ['Karena laba selalu salah', 'Karena uang tertahan di piutang atau stok sementara biaya harus dibayar dulu', 'Karena pajak terlalu besar', 'Karena pelanggan terlalu sedikit'], answer: 1, why: 'Jeda antara pengeluaran dan penerimaan membuat kas menipis meski laba ada.' },
            { q: 'Cara menjaga kas pada pesanan besar dengan termin panjang adalah...', options: ['Meminta uang muka atau termin bertahap', 'Menunda gaji', 'Menaikkan HPP', 'Menghentikan pencatatan'], answer: 0, why: 'Uang muka dan termin bertahap mempersempit jeda kas.' }
          ]
        },
        {
          id: 'id-5-impor',
          label: 'Impor Barang: Menghitung Biaya Sampai Gudang',
          domain: 'Ekonomi',
          summary: 'Harga barang di pabrik luar negeri hanyalah sebagian dari biaya. Ongkos kirim, bea masuk, pajak impor, kurs, dan biaya lain menentukan harga pokok sebenarnya.',
          model: 'Landed cost (biaya sampai gudang)',
          analogy: 'Membeli barang impor seperti membeli tiket pesawat yang harga dasarnya murah: pajak, bagasi, dan biaya layanan baru terlihat saat pembayaran akhir.',
          insight: 'Landed cost = harga barang + ongkos kirim + asuransi + bea masuk + pajak impor + biaya kepabeanan dan pelabuhan + biaya gudang, dikonversi dengan kurs. Tarif bea dan pajak bergantung pada jenis barang (kode HS), nilai pabean, dan aturan terbaru, jadi selalu verifikasi ke sumber resmi sebelum memesan. Kurs yang bergerak juga mengubah harga pokok antara saat pesan dan saat bayar.',
          cross: { text: 'Ekonomi x Operasi', domains: ['Ekonomi', 'Bisnis'], insight: 'Pelemahan rupiah menaikkan harga pokok barang impor. Menetapkan harga jual dengan cadangan kurs melindungi margin.' },
          story: { who: 'Importir Perkakas Kecil (ilustrasi)', story: 'Importir membeli perkakas senilai Rp 100 juta dan menetapkan harga jual dengan margin 30% hanya dari harga pabrik. Setelah ongkir, bea, pajak impor, biaya pelabuhan, dan kurs yang bergeser, total biaya menjadi sekitar Rp 140 juta. Margin yang ia kira 30% menjadi hampir 6%.', takeaway: 'Tetapkan harga jual dari landed cost, bukan dari harga pabrik.' },
          actions: ['Minta rincian biaya lengkap kepada penyedia jasa impor sebelum memesan.', 'Hitung landed cost per unit dan harga jual minimum untuk margin target.', 'Tambahkan cadangan kurs pada harga jual atau kunci harga dengan pemasok bila memungkinkan.'],
          level: 'Mahir', time: '7 min', tool: 'margin',
          scenario: {
            title: 'Dilema Menentukan Harga Jual Barang Impor',
            context: 'Anda akan mengimpor barang dari pabrik luar negeri. Harga pabrik tampak murah, tetapi biaya kirim, bea, pajak, dan kurs belum jelas.',
            dilemma: 'Bagaimana menetapkan harga jual?',
            choices: [
              { text: 'Hitung landed cost per unit dari rincian resmi, tambahkan cadangan kurs, lalu tetapkan harga untuk margin target.', consequence: 'Margin terlindungi walau kurs dan biaya bergeser sedikit.', explanation: 'Harga yang berdasar landed cost mencerminkan biaya sebenarnya.', best: true },
              { text: 'Pakai harga pabrik dikali margin yang diinginkan.', consequence: 'Biaya lain memakan margin sehingga laba menipis atau rugi.', explanation: 'Harga pabrik hanya sebagian dari biaya sampai gudang.' },
              { text: 'Tunggu sampai barang tiba baru menghitung biaya.', consequence: 'Anda terlanjur memesan dan baru tahu harga jual yang harus dipasang terlalu mahal untuk pasar.', explanation: 'Menghitung terlambat menghilangkan kesempatan membatalkan atau menyesuaikan.' }
            ]
          },
          quiz: [
            { q: 'Apa itu landed cost?', options: ['Harga pabrik saja', 'Total biaya barang sampai di gudang termasuk kirim, bea, dan pajak', 'Harga jual ke konsumen', 'Hanya biaya kurs'], answer: 1, why: 'Landed cost adalah semua biaya hingga barang siap dijual.' },
            { q: 'Mengapa kurs penting bagi importir?', options: ['Karena kurs tidak memengaruhi apa pun', 'Karena kurs yang bergerak mengubah harga pokok antara pesan dan bayar', 'Karena kurs menentukan warna barang', 'Karena kurs hanya memengaruhi eksportir'], answer: 1, why: 'Pelemahan rupiah menaikkan harga pokok barang impor.' }
          ]
        },
        {
          id: 'id-6-ekspor',
          label: 'Ekspor UMKM: Termin Pembayaran dan Risiko Kurs',
          domain: 'Ekonomi',
          summary: 'Menjual ke luar negeri membuka pasar baru, tetapi menambah risiko pembayaran dan kurs. Pilihan termin menentukan seberapa aman uang Anda.',
          model: 'Manajemen risiko pembayaran ekspor',
          analogy: 'Mengirim barang ke pembeli yang belum Anda kenal di negara lain seperti menitipkan paket ke orang asing: Anda perlu jaminan bahwa pembayaran benar-benar datang.',
          insight: 'Pilihan umum: bayar di muka (paling aman bagi eksportir), letter of credit melalui bank (aman bagi kedua pihak tetapi berbiaya), dan open account atau bayar belakangan (paling berisiko bagi eksportir). Pembeli baru sebaiknya dilayani dengan termin yang lebih aman, lalu dilonggarkan seiring kepercayaan. Hitung juga risiko kurs bila kontrak dalam mata uang asing, serta dokumen dan izin yang dibutuhkan.',
          cross: { text: 'Ekonomi x Hukum', domains: ['Ekonomi', 'Hukum'], insight: 'Kontrak ekspor yang jelas tentang termin, mata uang, dan penyelesaian sengketa mengurangi risiko pembayaran macet.' },
          story: { who: 'Perajin Rotan Ekspor (ilustrasi)', story: 'Perajin mendapat pembeli baru dari luar negeri yang meminta bayar 60 hari setelah barang tiba. Ia setuju tanpa jaminan, dan pembayaran tertunda hingga berbulan-bulan sehingga kas macet. Pada pesanan berikutnya ia meminta uang muka dan sisanya sebelum pengiriman, dan risikonya jauh lebih kecil.', takeaway: 'Pembeli baru layak dilayani dengan termin yang melindungi kas Anda.' },
          actions: ['Tulis termin standar untuk pembeli baru: uang muka dan pelunasan sebelum kirim.', 'Pelajari dokumen dan izin ekspor untuk produk Anda dari sumber resmi.', 'Tentukan mata uang kontrak dan cadangan kurs pada harga.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Pembeli Luar Negeri Baru',
            context: 'Pembeli baru dari luar negeri memesan dalam jumlah besar dan meminta pembayaran 60 hari setelah barang diterima. Anda belum pernah bertransaksi dengannya.',
            dilemma: 'Bagaimana menanggapi?',
            choices: [
              { text: 'Tawarkan uang muka dan pelunasan sebelum pengiriman, atau jaminan melalui bank, lalu longgarkan termin setelah ada riwayat baik.', consequence: 'Risiko gagal bayar kecil dan hubungan dagang bisa tumbuh bertahap.', explanation: 'Termin yang lebih aman untuk pembeli baru melindungi kas.', best: true },
              { text: 'Terima 60 hari tanpa jaminan agar pesanan tidak lepas.', consequence: 'Jika pembayaran macet, kas dan produksi berikutnya terganggu.', explanation: 'Menanggung seluruh risiko pada pembeli yang belum teruji berbahaya.' },
              { text: 'Tolak semua pembeli luar negeri.', consequence: 'Anda kehilangan pasar yang bisa digarap dengan termin aman.', explanation: 'Ada jalan tengah yang melindungi kedua pihak.' }
            ]
          },
          quiz: [
            { q: 'Termin ekspor paling berisiko bagi eksportir adalah...', options: ['Bayar di muka', 'Open account (bayar belakangan)', 'Uang muka plus pelunasan sebelum kirim', 'Letter of credit'], answer: 1, why: 'Open account membuat eksportir menanggung risiko tidak dibayar.' },
            { q: 'Pada pembeli baru yang belum dikenal, sebaiknya...', options: ['Memberi termin terpanjang', 'Memakai termin yang lebih aman lalu melonggarkan seiring kepercayaan', 'Mengabaikan kontrak', 'Mengirim tanpa dokumen'], answer: 1, why: 'Kepercayaan dibangun bertahap dengan perlindungan awal.' }
          ]
        }
      ]
    }
  ]
});
