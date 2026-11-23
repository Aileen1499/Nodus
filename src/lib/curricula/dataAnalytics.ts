import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data nyata.
export const DATA_ANALYTICS_CURRICULUM = buildPath({
  id: 'curriculum-analisis-data-keputusan',
  topic: 'Analisis Data untuk Keputusan Bisnis',
  description:
    'Memilih metrik yang benar, membaca rata-rata dan sebaran, memahami sampel dan ketidakpastian, membedakan korelasi dan sebab-akibat, menjalankan A/B test, membaca kohort dan retensi, meramal sederhana, serta menyajikan data agar memicu keputusan.',
  stages: [
    {
      title: 'Membaca Data dengan Benar',
      lessons: [
        {
          id: 'da-1-metrik',
          label: 'Metrik yang Benar: Vanity vs Actionable',
          domain: 'Data & Analitik',
          summary: 'Angka yang enak dilihat belum tentu berguna. Pilih metrik yang berubah ketika Anda bertindak dan terkait dengan hasil bisnis.',
          model: 'Actionable Metrics dan North Star Metric',
          analogy: 'Jumlah penonton di stadion bagi klub bola bukan ukuran kualitas permainan. Yang menentukan adalah kemenangan, penguasaan bola, dan peluang tercipta.',
          insight: 'Vanity metric (total unduhan, jumlah pengikut, kunjungan kotor) naik tanpa memberi arah keputusan. Actionable metric (konversi per tahap, retensi minggu ke-4, margin per pesanan) terkait perilaku yang bisa diubah. North Star Metric adalah satu ukuran yang paling mencerminkan nilai yang diterima pelanggan. Pasangkan metrik hasil dengan metrik pengendali (leading indicator).',
          cross: { text: 'Metrik x Psikologi Insentif', domains: ['Data & Analitik', 'Psikologi'], insight: 'Hukum Goodhart: ketika ukuran menjadi target, ia berhenti menjadi ukuran yang baik. Tim akan mengoptimalkan angkanya, bukan tujuannya.' },
          story: { who: 'Toko Online Mengejar Kunjungan (ilustrasi)', story: 'Toko memasang iklan sehingga kunjungan naik 80% tetapi pesanan hanya naik 5% dan margin turun karena biaya iklan. Setelah beralih memantau biaya per pesanan dan konversi per tahap, mereka memangkas iklan yang tidak mengonversi dan laba naik.', takeaway: 'Ukur hasil yang menggerakkan uang, bukan sekadar keramaian.' },
          actions: ['Daftar lima metrik yang Anda pantau dan tandai mana yang vanity.', 'Tentukan satu North Star Metric untuk usaha Anda.', 'Untuk tiap metrik, tulis tindakan apa yang akan Anda ambil bila angkanya berubah.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Laporan Penuh Angka yang Menggembirakan',
            context: 'Laporan bulanan menunjukkan pengikut naik 30% dan kunjungan naik 50%, tetapi omzet datar.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Pecah funnel dari kunjungan sampai pembayaran, tentukan metrik pengendali per tahap, dan fokus pada tahap yang paling bocor.', consequence: 'Anda menemukan banyak pengunjung berhenti di halaman pembayaran dan memperbaikinya, omzet naik.', explanation: 'Metrik tahap menunjukkan di mana tindakan berdampak.', best: true },
              { text: 'Rayakan pertumbuhan pengikut dan tambah anggaran iklan.', consequence: 'Biaya naik, omzet tetap.', explanation: 'Menambah volume tanpa memperbaiki konversi memboroskan uang.' },
              { text: 'Hentikan semua pelaporan.', consequence: 'Anda kehilangan arah keputusan.', explanation: 'Masalahnya pemilihan metrik, bukan keberadaan data.' }
            ]
          },
          quiz: [
            { q: 'Apa ciri actionable metric?', options: ['Berubah ketika Anda bertindak dan terkait dengan hasil bisnis', 'Selalu naik', 'Mudah dipamerkan', 'Sulit dihitung'], answer: 0, why: 'Metrik berguna menunjukkan tindakan yang perlu diambil.' },
            { q: 'Hukum Goodhart menyatakan...', options: ['Ukuran yang dijadikan target kehilangan nilai sebagai ukuran', 'Data selalu benar', 'Target harus dihapus', 'Metrik harus banyak'], answer: 0, why: 'Orang mengoptimalkan angka, bukan tujuannya.' }
          ]
        },
        {
          id: 'da-2-sebaran',
          label: 'Rata-rata, Median, dan Sebaran',
          domain: 'Data & Analitik',
          summary: 'Rata-rata bisa menipu. Median dan sebaran menunjukkan kondisi nyata, terutama saat ada nilai ekstrem.',
          model: 'Descriptive Statistics',
          analogy: 'Jika satu orang miliarder masuk warung, rata-rata kekayaan pengunjung melonjak tetapi tidak ada orang lain yang menjadi lebih kaya.',
          insight: 'Rata-rata (mean) sensitif terhadap nilai ekstrem. Median (nilai tengah) lebih tahan. Sebaran (rentang, simpangan baku, persentil) menunjukkan variasi. Untuk data berekor panjang seperti pendapatan pelanggan atau waktu pengiriman, laporkan median dan persentil ke-90, bukan hanya rata-rata.',
          cross: { text: 'Statistik x Operasi', domains: ['Data & Analitik', 'Bisnis'], insight: 'Pelanggan mengingat pengiriman terlama, bukan rata-rata. Persentil tinggi sering lebih menentukan kepuasan.' },
          story: { who: 'Kurir Lokal (ilustrasi)', story: 'Rata-rata waktu kirim dilaporkan 2 hari, tampak bagus. Namun 10% paket memerlukan 7 hari dan menghasilkan sebagian besar komplain. Median 1,5 hari menyembunyikan masalah, sedangkan persentil ke-90 sebesar 7 hari membuka masalahnya.', takeaway: 'Lihat sebaran, bukan satu angka rata-rata.' },
          actions: ['Ambil 30 transaksi terakhir dan hitung rata-rata serta median nilainya.', 'Cari nilai ekstrem dan tentukan apakah mewakili pola atau pengecualian.', 'Laporkan persentil ke-90 untuk waktu layanan Anda.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Rata-rata Pembelian yang Menyesatkan',
            context: 'Rata-rata nilai pesanan Rp 400 ribu, tetapi satu pelanggan grosir menyumbang pesanan Rp 20 juta.',
            dilemma: 'Bagaimana menentukan strategi harga?',
            choices: [
              { text: 'Lihat median dan distribusi, pisahkan segmen grosir dan eceran, lalu rancang strategi per segmen.', consequence: 'Anda menemukan median pesanan eceran Rp 150 ribu dan membuat paket yang tepat.', explanation: 'Distribusi mengungkap kelompok yang berbeda.', best: true },
              { text: 'Gunakan rata-rata Rp 400 ribu sebagai patokan semua pelanggan.', consequence: 'Paket terlalu mahal bagi sebagian besar pelanggan.', explanation: 'Rata-rata terdistorsi oleh nilai ekstrem.' },
              { text: 'Hapus pelanggan grosir dari data.', consequence: 'Anda kehilangan pemahaman tentang segmen bernilai tinggi.', explanation: 'Nilai ekstrem perlu dipahami, bukan dibuang.' }
            ]
          },
          quiz: [
            { q: 'Data 10, 12, 11, 13, 100. Mana yang lebih mewakili kondisi tipikal?', options: ['Median (12)', 'Rata-rata (29,2)', 'Nilai maksimum', 'Jumlah'], answer: 0, why: 'Median tidak terpengaruh nilai ekstrem 100.' },
            { q: 'Persentil ke-90 waktu pengiriman 7 hari berarti...', options: ['90% paket tiba dalam 7 hari atau kurang', '10% paket tiba dalam 7 hari', 'Rata-rata 7 hari', 'Semua paket 7 hari'], answer: 0, why: 'Persentil ke-90 adalah batas bagi 90% data.' }
          ]
        },
        {
          id: 'da-3-sampel',
          label: 'Sampel, Ketidakpastian, dan Margin Kesalahan',
          domain: 'Data & Analitik',
          summary: 'Hasil dari sampel kecil bersifat tidak pasti. Pahami seberapa besar keraguan sebelum mengambil keputusan besar.',
          model: 'Sampling dan Confidence Interval',
          analogy: 'Mencicipi satu sendok sup dari panci yang diaduk merata cukup mewakili, tetapi satu sendok dari permukaan yang tidak diaduk bisa menyesatkan.',
          insight: 'Sampel acak dan representatif mengurangi bias; sampel besar mengurangi galat acak. Untuk proporsi, margin kesalahan 95% kira-kira ±1,96 × akar(p(1−p)/n). Pada n = 400 dan p = 50%, margin sekitar ±4,9 poin persentase. Bias seleksi (hanya responden yang aktif menjawab) tidak hilang walau sampel besar.',
          cross: { text: 'Sampel x Riset Pasar', domains: ['Data & Analitik', 'Bisnis'], insight: 'Survei kepuasan yang hanya diisi pelanggan yang sangat puas atau sangat marah memberikan gambaran yang tidak representatif.' },
          story: { who: 'Survei Kedai Kopi (ilustrasi)', story: 'Dari 40 responden, 60% menyukai menu baru. Margin kesalahan sekitar ±15 poin, jadi tingkat suka sebenarnya bisa 45% sampai 75%. Pemilik menunda investasi besar dan memperluas survei menjadi 400 responden, sehingga rentangnya menyempit menjadi sekitar ±5 poin.', takeaway: 'Sampel kecil memberi arah, bukan kepastian.' },
          actions: ['Tentukan berapa responden yang dibutuhkan untuk margin ±5 poin pada survei Anda.', 'Periksa apakah sampel Anda mewakili pelanggan sebenarnya.', 'Laporkan hasil dengan rentang, bukan satu angka tunggal.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Keputusan dari 20 Ulasan',
            context: 'Dari 20 ulasan, 14 menyukai produk baru dan Anda ingin segera memproduksi besar-besaran.',
            dilemma: 'Apa langkah Anda?',
            choices: [
              { text: 'Perluas sampel secara acak atau uji produksi kecil dahulu, sambil menyadari margin kesalahan yang besar pada 20 ulasan.', consequence: 'Uji 200 pelanggan menunjukkan tingkat suka 55%, sehingga Anda memproduksi lebih moderat.', explanation: 'Sampel kecil tidak cukup untuk komitmen besar.', best: true },
              { text: 'Produksi besar karena 70% menyukai.', consequence: 'Stok menumpuk karena tingkat suka sebenarnya lebih rendah.', explanation: 'Persentase dari sampel kecil sangat berfluktuasi.' },
              { text: 'Abaikan ulasan sepenuhnya.', consequence: 'Anda kehilangan sinyal awal yang berguna.', explanation: 'Sampel kecil tetap memberi petunjuk.' }
            ]
          },
          quiz: [
            { q: 'Pada n = 400 dan p = 50%, margin kesalahan 95% sekitar...', options: ['±4,9 poin persentase', '±0,5 poin', '±25 poin', '±49 poin'], answer: 0, why: '1,96 × akar(0,25/400) ≈ 0,049.' },
            { q: 'Sampel besar tetapi hanya diisi responden yang aktif menjawab masih mengandung...', options: ['Bias seleksi', 'Tidak ada masalah', 'Margin kesalahan nol', 'Data pasti benar'], answer: 0, why: 'Bias seleksi tidak hilang hanya dengan memperbesar sampel.' }
          ]
        }
      ]
    },
    {
      title: 'Menarik Kesimpulan',
      lessons: [
        {
          id: 'da-4-kausal',
          label: 'Korelasi Bukan Sebab-Akibat',
          domain: 'Data & Analitik',
          summary: 'Dua hal bergerak bersama belum berarti yang satu menyebabkan yang lain. Cari penyebab tersembunyi sebelum bertindak.',
          model: 'Correlation vs Causation, Confounders, Simpson’s Paradox',
          analogy: 'Penjualan es krim dan kasus tenggelam sama-sama naik di musim panas. Es krim tidak menenggelamkan orang; cuaca panas menyebabkan keduanya.',
          insight: 'Korelasi bisa muncul dari kebetulan, kausalitas terbalik, atau variabel pengganggu (confounder). Untuk menyimpulkan sebab-akibat, gunakan eksperimen terkontrol atau desain yang mengendalikan confounder. Paradoks Simpson: tren yang terlihat pada gabungan data dapat terbalik di tiap subkelompok.',
          cross: { text: 'Kausalitas x Pemasaran', domains: ['Data & Analitik', 'Bisnis'], insight: 'Pelanggan yang melihat iklan mungkin memang sudah berniat membeli. Atribusi iklan tanpa kontrol melebih-lebihkan dampaknya.' },
          story: { who: 'Program Loyalitas Kafe (ilustrasi)', story: 'Anggota loyalitas belanja 3 kali lebih banyak daripada non-anggota. Pemilik ingin mendaftarkan semua orang. Namun yang mendaftar memang pelanggan paling setia. Uji coba pada kelompok acak menunjukkan program hanya menambah kunjungan 8%, bukan 200%.', takeaway: 'Bedakan pelanggan yang memang setia dari dampak program.' },
          actions: ['Pilih satu korelasi yang Anda percayai dan tulis tiga penjelasan alternatif.', 'Rancang uji acak sederhana untuk menguji sebab-akibatnya.', 'Cek apakah tren berubah bila dipecah per segmen.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Anggota Loyalitas Belanja Lebih Banyak',
            context: 'Data menunjukkan anggota loyalitas belanja jauh lebih banyak. Tim meminta anggaran besar untuk mendaftarkan semua pelanggan.',
            dilemma: 'Bagaimana menyikapi?',
            choices: [
              { text: 'Uji dengan kelompok acak yang ditawari program dan kelompok kontrol, lalu ukur perbedaan perilaku sebelum menggelontorkan anggaran.', consequence: 'Dampak sebenarnya jauh lebih kecil dan Anda menyesuaikan anggaran.', explanation: 'Eksperimen terkontrol memisahkan dampak dari seleksi.', best: true },
              { text: 'Simpulkan program menaikkan belanja 3 kali lipat dan perluas besar-besaran.', consequence: 'Anggaran besar tidak menghasilkan kenaikan sebesar harapan.', explanation: 'Korelasi karena seleksi disalahartikan sebagai dampak.' },
              { text: 'Abaikan data sepenuhnya.', consequence: 'Anda kehilangan peluang menguji program yang mungkin efektif.', explanation: 'Data tetap berguna bila ditafsirkan hati-hati.' }
            ]
          },
          quiz: [
            { q: 'Penjualan es krim dan kasus tenggelam naik bersamaan karena...', options: ['Cuaca panas (confounder)', 'Es krim menyebabkan tenggelam', 'Tenggelam menaikkan penjualan', 'Kebetulan mutlak'], answer: 0, why: 'Variabel pengganggu memengaruhi keduanya.' },
            { q: 'Cara paling kuat menguji sebab-akibat?', options: ['Eksperimen acak terkontrol', 'Melihat grafik', 'Menanyakan teman', 'Mengambil rata-rata'], answer: 0, why: 'Pengacakan memisahkan efek perlakuan dari seleksi.' }
          ]
        },
        {
          id: 'da-5-abtest',
          label: 'A/B Test: Desain, Ukuran Sampel, dan Kesimpulan',
          domain: 'Data & Analitik',
          summary: 'Menguji dua versi secara adil agar keputusan perubahan berdasar bukti, bukan selera.',
          model: 'A/B Testing dan Statistical Significance',
          analogy: 'Membandingkan dua resep dengan memberi pelanggan yang dipilih acak. Jika hasilnya jauh berbeda dan konsisten, kita yakin perbedaan itu nyata.',
          insight: 'Tetapkan hipotesis dan metrik utama sebelum mulai. Bagi pengunjung secara acak. Tentukan ukuran sampel di awal: untuk mendeteksi kenaikan konversi dari 4% ke 5% dengan kepercayaan 95% dan daya 80%, dibutuhkan sekitar 6.900 pengunjung per versi. Jangan berhenti saat hasil tampak bagus (peeking) karena menaikkan positif palsu. Signifikan secara statistik belum tentu bermakna bagi bisnis.',
          cross: { text: 'Eksperimen x Budaya Organisasi', domains: ['Data & Analitik', 'Psikologi'], insight: 'Organisasi yang menghargai bukti dibanding pendapat atasan memutuskan lebih cepat dan lebih sedikit berdebat.' },
          story: { who: 'Halaman Produk Toko Online (ilustrasi)', story: 'Setelah 3 hari, versi B unggul 20% dengan 300 pengunjung per versi dan tim ingin menghentikan tes. Dengan sampel sekecil itu hasilnya belum meyakinkan. Mereka menunggu hingga ukuran sampel tercapai dan selisih menyusut menjadi 4% dan tidak signifikan, sehingga perubahan batal.', takeaway: 'Tunggu sampel cukup sebelum menyimpulkan.' },
          actions: ['Tulis hipotesis dan metrik utama untuk satu perubahan yang ingin Anda uji.', 'Hitung perkiraan sampel yang dibutuhkan.', 'Tetapkan tanggal berakhir tes dan jangan menghentikannya lebih awal.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Hasil Menjanjikan di Hari Kedua',
            context: 'Versi baru tombol beli tampak unggul 25% setelah dua hari dengan sampel sangat kecil.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Lanjutkan sampai ukuran sampel yang ditetapkan tercapai, lalu putuskan berdasarkan hasil akhir dan dampak bisnisnya.', consequence: 'Selisih akhirnya 3% dan tidak signifikan sehingga perubahan tidak diluncurkan.', explanation: 'Menghentikan tes lebih awal meningkatkan risiko kesimpulan keliru.', best: true },
              { text: 'Hentikan sekarang dan luncurkan versi baru.', consequence: 'Setelah diluncurkan, konversi tidak membaik.', explanation: 'Fluktuasi awal sering menipu.' },
              { text: 'Batalkan semua tes karena tidak bisa dipercaya.', consequence: 'Anda kehilangan alat belajar yang berharga.', explanation: 'Tes yang dirancang benar sangat berguna.' }
            ]
          },
          quiz: [
            { q: 'Mengapa menentukan ukuran sampel sebelum tes?', options: ['Agar tidak berhenti saat hasil kebetulan tampak bagus', 'Agar tes lebih mahal', 'Karena aturan hukum', 'Agar hasil selalu signifikan'], answer: 0, why: 'Peeking meningkatkan positif palsu.' },
            { q: 'Hasil signifikan secara statistik berarti...', options: ['Perbedaan tidak mungkin sekadar kebetulan pada tingkat tertentu, belum tentu besar bagi bisnis', 'Perbedaan pasti besar', 'Bisnis pasti untung', 'Sampel pasti benar'], answer: 0, why: 'Signifikansi dan dampak bisnis adalah dua hal berbeda.' }
          ]
        }
      ]
    },
    {
      title: 'Menggerakkan Keputusan',
      lessons: [
        {
          id: 'da-6-kohort',
          label: 'Analisis Kohort dan Retensi',
          domain: 'Data & Analitik',
          summary: 'Pantau kelompok pelanggan menurut waktu bergabung untuk melihat apakah bisnis benar-benar membaik atau hanya terlihat membaik.',
          model: 'Cohort Analysis dan Retention Curves',
          analogy: 'Menilai kualitas angkatan murid dengan melacak tiap angkatan dari tahun ke tahun, bukan hanya menghitung total murid sekolah yang bisa naik karena banyak murid baru.',
          insight: 'Kohort mengelompokkan pelanggan berdasarkan periode akuisisi dan melacak perilakunya (retensi, pembelian ulang) dari waktu ke waktu. Total pelanggan aktif dapat naik karena akuisisi walau retensi buruk. Kurva retensi yang mendatar menandakan produk menemukan kecocokan; kurva yang terus turun menandakan "ember bocor". Perbaiki retensi sebelum mempercepat akuisisi.',
          cross: { text: 'Kohort x Unit Economics', domains: ['Data & Analitik', 'Keuangan'], insight: 'LTV dihitung dari retensi dan margin kohort. Retensi buruk membuat biaya akuisisi tak pernah kembali.' },
          story: { who: 'Aplikasi Langganan Resep (ilustrasi)', story: 'Jumlah pelanggan aktif naik tiap bulan sehingga tim optimis. Analisis kohort menunjukkan hanya 20% pelanggan bertahan setelah 3 bulan, dan angkatan terbaru lebih buruk. Pertumbuhan hanya ditopang iklan. Setelah memperbaiki onboarding, retensi angkatan baru naik menjadi 35%.', takeaway: 'Kohort mengungkap kesehatan yang tersembunyi di total.' },
          actions: ['Kelompokkan pelanggan Anda per bulan bergabung dan hitung persentase yang membeli lagi.', 'Bandingkan kohort lama dan baru.', 'Tentukan satu perubahan untuk meningkatkan retensi bulan pertama.'],
          level: 'Menengah', time: '6 min', tool: 'unit',
          scenario: {
            title: 'Dilema Pelanggan Aktif Naik, Omzet Tidak',
            context: 'Pelanggan baru terus bertambah tetapi pembelian ulang menurun.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Analisis kohort untuk melihat retensi tiap angkatan dan perbaiki pengalaman awal sebelum menambah anggaran akuisisi.', consequence: 'Retensi naik dan biaya akuisisi kembali lebih cepat.', explanation: 'Menambal ember bocor lebih murah daripada menuang air lebih deras.', best: true },
              { text: 'Gandakan iklan untuk mendapat pelanggan baru lebih banyak.', consequence: 'Biaya naik dan pelanggan tetap cepat pergi.', explanation: 'Akuisisi tanpa retensi memboroskan uang.' },
              { text: 'Berhenti melacak pelanggan.', consequence: 'Masalah makin tersembunyi.', explanation: 'Data justru dibutuhkan untuk menemukan sumber kebocoran.' }
            ]
          },
          quiz: [
            { q: 'Analisis kohort mengelompokkan pelanggan berdasarkan...', options: ['Periode bergabung', 'Warna logo', 'Nama produk', 'Jumlah karyawan'], answer: 0, why: 'Kohort adalah kelompok dengan waktu akuisisi sama.' },
            { q: 'Kurva retensi yang terus menurun tanpa mendatar menandakan...', options: ['Produk belum menemukan kecocokan yang menahan pelanggan', 'Bisnis sehat', 'Harga terlalu murah', 'Tidak ada masalah'], answer: 0, why: 'Pelanggan terus pergi, tidak ada inti yang bertahan.' }
          ]
        },
        {
          id: 'da-7-ramal',
          label: 'Peramalan Sederhana dan Bias',
          domain: 'Data & Analitik',
          summary: 'Ramalan bukan kepastian. Buat rentang, uji dengan skenario, dan waspadai bias optimisme.',
          model: 'Simple Forecasting dan Scenario Planning',
          analogy: 'Prakiraan cuaca menyebut peluang hujan, bukan kepastian. Pelaku yang cerdas membawa payung bila peluangnya tinggi dan biaya membawa payung rendah.',
          insight: 'Metode sederhana: rata-rata bergerak, tren linear, dan penyesuaian musiman. Terapkan tiga skenario (pesimis, dasar, optimis) dan tetapkan pemicu untuk tiap skenario. Ukur akurasi ramalan sebelumnya (misalnya MAPE) agar belajar dari galat. Waspadai bias optimisme dan planning fallacy yang membuat proyeksi terlalu cerah.',
          cross: { text: 'Peramalan x Psikologi', domains: ['Data & Analitik', 'Psikologi'], insight: 'Planning fallacy: kita meremehkan waktu dan biaya serta melebih-lebihkan hasil walau pernah mengalami keterlambatan sebelumnya.' },
          story: { who: 'Toko Kue Musiman (ilustrasi)', story: 'Penjualan kue lebaran biasanya naik 3 kali lipat. Pemilik meramal dengan tiga skenario (2x, 3x, 3,5x) dan menyiapkan stok untuk 2,5x serta rencana tambahan bila pesanan di minggu pertama melampaui 3x. Hasilnya stok tidak berlebih dan tidak kehabisan.', takeaway: 'Skenario dan pemicu membuat ramalan bisa ditindaklanjuti.' },
          actions: ['Buat ramalan penjualan tiga bulan dengan tiga skenario.', 'Tetapkan angka pemicu untuk mengubah rencana stok atau biaya.', 'Bandingkan ramalan lama dengan realisasi dan catat galatnya.'],
          level: 'Menengah', time: '6 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Ramalan Tunggal yang Terlalu Optimis',
            context: 'Tim menyajikan satu ramalan pertumbuhan 40% dan meminta Anda menandatangani pengadaan besar.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Minta rentang skenario, tingkat akurasi ramalan sebelumnya, dan rencana bertahap dengan pemicu sebelum menyetujui.', consequence: 'Pengadaan dibagi dua tahap dan terhindar dari kelebihan stok saat pertumbuhan hanya 15%.', explanation: 'Skenario dan pemicu mengurangi risiko keputusan.', best: true },
              { text: 'Setujui karena angka tampak meyakinkan.', consequence: 'Pertumbuhan hanya 15% dan stok menumpuk.', explanation: 'Ramalan tunggal menyembunyikan ketidakpastian.' },
              { text: 'Tolak semua pengadaan.', consequence: 'Anda kehabisan stok saat permintaan naik.', explanation: 'Menolak total juga berisiko.' }
            ]
          },
          quiz: [
            { q: 'Mengapa memakai tiga skenario?', options: ['Memperlihatkan rentang kemungkinan dan menyiapkan respons', 'Agar laporan lebih panjang', 'Karena aturan akuntansi', 'Agar ramalan pasti benar'], answer: 0, why: 'Skenario mengakui ketidakpastian dan menyiapkan tindakan.' },
            { q: 'Planning fallacy adalah...', options: ['Kecenderungan meremehkan waktu dan biaya serta terlalu optimis pada hasil', 'Mengabaikan data', 'Memakai terlalu banyak data', 'Menunda rapat'], answer: 0, why: 'Bias umum dalam proyeksi proyek.' }
          ]
        },
        {
          id: 'da-8-cerita',
          label: 'Bercerita dengan Data dan Dashboard yang Memicu Keputusan',
          domain: 'Komunikasi',
          summary: 'Analisis yang tidak dipahami tidak mengubah apa pun. Sajikan satu pesan, satu bukti, dan satu tindakan.',
          model: 'Data Storytelling dan Decision-Oriented Dashboards',
          analogy: 'Pemandu wisata yang baik tidak membacakan seluruh ensiklopedia, tetapi mengarahkan perhatian ke tiga hal terpenting lalu menyarankan rute.',
          insight: 'Mulai dari kesimpulan dan tindakan yang disarankan, kemudian bukti. Pilih grafik sesuai pertanyaan (garis untuk tren, batang untuk perbandingan). Kurangi hiasan, beri judul yang menyatakan temuan, dan sorot angka kunci. Dashboard yang baik menjawab pertanyaan keputusan tertentu dan memiliki pemilik serta jadwal tinjau.',
          cross: { text: 'Data x Persuasi', domains: ['Komunikasi', 'Data & Analitik'], insight: 'Orang bertindak bila cerita jelas dan relevan bagi tujuan mereka, bukan karena jumlah grafik.' },
          story: { who: 'Laporan Bulanan Tim Penjualan (ilustrasi)', story: 'Laporan 30 slide tidak pernah memicu keputusan. Analis mengubahnya menjadi satu halaman: "Konversi di Surabaya turun 6 poin karena waktu respons 4 jam; usul: tambah satu admin, estimasi tambahan omzet Rp 90 juta per bulan." Disetujui dalam rapat itu juga.', takeaway: 'Satu pesan dengan tindakan lebih ampuh daripada banyak halaman.' },
          actions: ['Tulis kesimpulan satu kalimat dan tindakan yang Anda sarankan untuk laporan berikutnya.', 'Ganti judul grafik dengan temuan, bukan label.', 'Tentukan siapa pemilik tiap dashboard dan kapan ditinjau.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Presentasi Data yang Membingungkan Pimpinan',
            context: 'Anda memiliki analisis lengkap tetapi pimpinan hanya punya 5 menit.',
            dilemma: 'Bagaimana menyajikannya?',
            choices: [
              { text: 'Buka dengan rekomendasi dan dampaknya, tunjukkan satu sampai tiga bukti utama, dan siapkan lampiran untuk detail.', consequence: 'Pimpinan menyetujui rekomendasi saat itu juga.', explanation: 'Pesan utama dan tindakan lebih dulu memudahkan keputusan.', best: true },
              { text: 'Tampilkan semua grafik secara kronologis.', consequence: 'Waktu habis sebelum sampai ke kesimpulan.', explanation: 'Urutan kronologis menyembunyikan inti.' },
              { text: 'Kirim file mentah tanpa penjelasan.', consequence: 'Tidak ada yang membukanya.', explanation: 'Data tanpa cerita jarang ditindaklanjuti.' }
            ]
          },
          quiz: [
            { q: 'Apa yang sebaiknya dimulai dalam presentasi keputusan?', options: ['Kesimpulan dan tindakan yang disarankan', 'Seluruh data mentah', 'Biodata penyaji', 'Daftar alat yang dipakai'], answer: 0, why: 'Audiens perlu tahu intinya lebih dulu.' },
            { q: 'Judul grafik yang baik...', options: ['Menyatakan temuan utama', 'Hanya menulis nama kolom', 'Dikosongkan', 'Sepanjang paragraf'], answer: 0, why: 'Judul temuan mengarahkan pembaca pada pesan.' }
          ]
        }
      ]
    }
  ]
});
