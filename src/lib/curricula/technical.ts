import { buildPath } from '../curriculumBuilder';

// Edukasi, bukan rekomendasi membeli atau menjual efek apa pun, dan bukan ajakan trading. Analisis teknikal
// tidak menjamin hasil, dan bukti ilmiahnya campuran. Semua angka bertanda "ilustrasi" hanyalah contoh hitung.
export const TECHNICAL_CURRICULUM = buildPath({
  id: 'curriculum-trading-teknikal',
  topic: 'Trading Teknikal: Membaca Grafik dengan Kepala Dingin',
  description:
    'Cara membaca grafik harga (candlestick, tren, support-resistance, rata-rata bergerak, RSI, volatilitas) dan, yang lebih penting, cara menjaga modal: rencana, ukuran posisi, dan psikologi. Jujur soal batasnya: bukti ilmiahnya campuran dan mayoritas trader jangka pendek sulit konsisten untung. Edukasi, bukan rekomendasi.',
  stages: [
    {
      title: 'Membaca Grafik',
      lessons: [
        {
          id: 'ta-1-candle',
          label: 'Candlestick dan Volume: Apa yang Sebenarnya Terekam',
          domain: 'Keuangan',
          summary: 'Satu candle merangkum perebutan antara pembeli dan penjual dalam satu periode: harga buka, tertinggi, terendah, dan tutup. Volume menunjukkan seberapa banyak orang ikut terlibat.',
          model: 'OHLC dan Volume',
          analogy: 'Candle seperti catatan satu pertandingan tarik tambang: di mana tali mulai, sejauh mana tiap pihak sempat menarik, dan di mana akhirnya berhenti. Volume adalah jumlah orang yang ikut menarik.',
          insight: 'Satu candle memuat empat angka: Open, High, Low, Close. Badan candle adalah jarak antara buka dan tutup; sumbu (bayangan) adalah jarak ke harga tertinggi dan terendah. Candle dengan sumbu panjang menunjukkan harga sempat bergerak jauh lalu ditolak kembali. Volume memberi bobot: pergerakan besar dengan volume kecil lebih mudah berbalik daripada pergerakan dengan volume besar. Tidak ada satu bentuk candle yang menjamin arah berikutnya; ia hanya bukti tentang apa yang terjadi, bukan ramalan.',
          cross: { text: 'Teknikal x Psikologi Kerumunan', domains: ['Keuangan', 'Psikologi'], insight: 'Grafik adalah catatan keputusan ribuan orang yang dipengaruhi harapan dan ketakutan. Itu sebabnya pola emosi cenderung berulang, tetapi tidak persis sama.' },
          story: { who: 'Membaca Satu Hari Perdagangan (ilustrasi)', story: 'Sebuah saham dibuka di Rp 1.000, sempat turun ke Rp 940, naik ke Rp 1.040, lalu ditutup di Rp 1.030 dengan volume dua kali rata-rata. Ceritanya: penjual sempat mendorong turun, tetapi pembeli menolaknya dan mengambil alih. Itu informasi tentang hari itu, bukan janji bahwa besok akan naik.', takeaway: 'Baca candle sebagai laporan kejadian. Jangan memperlakukannya sebagai ramalan.' },
          actions: ['Pilih satu grafik harian dan tuliskan O, H, L, C dari tiga candle terakhir.', 'Untuk tiap candle, ceritakan dalam satu kalimat siapa yang unggul dan buktinya.', 'Bandingkan volume hari itu dengan rata-rata 20 hari terakhir.'],
          level: 'Pemula', time: '6 min',
          scenario: {
            title: 'Dilema Pola yang Terlihat Meyakinkan',
            context: 'Kamu melihat candle dengan sumbu bawah panjang dan teman bilang itu pasti tanda harga akan naik.',
            dilemma: 'Bagaimana kamu menyikapinya?',
            choices: [
              { text: 'Anggap sebagai satu bukti, cek volume dan konteks tren, lalu putuskan dengan rencana yang punya batas rugi.', consequence: 'Kamu memakai pola sebagai bahan pertimbangan, bukan pemicu emosi.', explanation: 'Satu candle tidak menjamin arah; konteks dan manajemen risiko yang menentukan.', best: true },
              { text: 'Langsung beli dengan seluruh dana karena polanya terkenal.', consequence: 'Jika polanya gagal, kerugian bisa besar.', explanation: 'Tidak ada pola yang pasti berhasil.' },
              { text: 'Mengabaikan grafik sama sekali dan menebak.', consequence: 'Kamu kehilangan informasi yang tersedia.', explanation: 'Informasi harga tetap berguna bila dibaca dengan realistis.' }
            ]
          },
          quiz: [
            { q: 'Empat angka dalam satu candle adalah...', options: ['Laba, rugi, pajak, biaya', 'Buka, tertinggi, terendah, tutup', 'Beli, jual, tahan, tunggu', 'Awal, tengah, akhir, selesai'], answer: 1, why: 'OHLC: Open, High, Low, Close.' },
            { q: 'Sumbu bawah yang panjang menunjukkan...', options: ['Harga pasti naik', 'Harga sempat turun jauh lalu ditolak kembali naik', 'Perusahaan rugi', 'Volume nol'], answer: 1, why: 'Ia merekam penolakan terhadap harga rendah, bukan jaminan arah.' }
          ]
        },
        {
          id: 'ta-2-support',
          label: 'Tren, Support, dan Resistance',
          domain: 'Keuangan',
          summary: 'Tren adalah arah umum harga. Support dan resistance adalah area (bukan garis tipis) tempat harga berulang kali berhenti atau berbalik.',
          model: 'Trend, Support, Resistance (dasar Dow Theory)',
          analogy: 'Seperti bola yang memantul di tangga: ada anak tangga tempat ia sering tertahan sebelum jatuh atau naik. Anak tangga itu bukan garis tipis, melainkan lebar.',
          insight: 'Tren naik ditandai puncak dan lembah yang makin tinggi; tren turun sebaliknya; mendatar bila tidak ada arah jelas. Support adalah area tempat minat beli cenderung muncul; resistance area tempat minat jual muncul. Area ini bekerja sebagian karena banyak orang memperhatikannya (efek harapan bersama), sehingga bisa meleset. Harga yang menembus area dengan volume besar sering dipandang sebagai tanda perubahan, tetapi penembusan palsu (false breakout) sangat umum. Karena itu area digambar sebagai zona dan keputusan dilindungi dengan batas rugi.',
          cross: { text: 'Teknikal x Perilaku', domains: ['Keuangan', 'Psikologi'], insight: 'Orang yang rugi di suatu harga cenderung ingin jual saat harga kembali ke sana. Itu salah satu penjelasan mengapa area tertentu sering jadi penghalang.' },
          story: { who: 'Harga yang Berkali-kali Tertahan (ilustrasi)', story: 'Sebuah saham tiga kali naik ke area Rp 1.500 lalu turun lagi. Trader yang sabar menunggu penembusan dengan volume besar. Pada percobaan keempat harga menembus lalu kembali di bawah dalam dua hari: penembusan palsu. Yang memasang batas rugi tepat di bawah area itu keluar dengan kerugian kecil; yang tidak, menanggung penurunan lebih dalam.', takeaway: 'Area adalah hipotesis. Pasang rencana untuk kemungkinan hipotesis itu salah.' },
          actions: ['Gambar 2 area support dan resistance pada satu grafik sebagai zona, bukan garis.', 'Tandai tiga kali harga menyentuh area itu dan apa yang terjadi sesudahnya.', 'Tentukan di harga mana hipotesismu dianggap salah.'],
          level: 'Pemula', time: '6 min',
          scenario: {
            title: 'Dilema Penembusan',
            context: 'Harga menembus resistance dan kamu ingin masuk saat itu juga.',
            dilemma: 'Apa pendekatan yang lebih hati-hati?',
            choices: [
              { text: 'Tunggu konfirmasi (volume, penutupan di atas area), tentukan batas rugi di bawah area, dan ukur posisi sesuai risiko.', consequence: 'Kamu mengurangi risiko terjebak penembusan palsu.', explanation: 'Konfirmasi dan batas rugi mengurangi dampak kegagalan.', best: true },
              { text: 'Masuk besar tanpa batas rugi agar tidak ketinggalan.', consequence: 'Jika penembusan palsu, kerugian membesar.', explanation: 'Tanpa batas rugi satu kesalahan bisa mahal.' },
              { text: 'Menunggu sampai harga naik jauh lebih tinggi agar yakin.', consequence: 'Harga masuk menjadi buruk dan risiko-imbalan memburuk.', explanation: 'Masuk terlambat menambah risiko dan mengurangi imbalan.' }
            ]
          },
          quiz: [
            { q: 'Support dan resistance sebaiknya dipandang sebagai...', options: ['Garis tepat yang pasti bertahan', 'Zona yang bisa gagal', 'Hukum alam', 'Jaminan pemerintah'], answer: 1, why: 'Mereka hipotesis tentang area, bukan kepastian.' },
            { q: 'Penembusan palsu (false breakout) adalah...', options: ['Harga menembus lalu kembali ke bawah area', 'Harga naik terus', 'Volume nol', 'Saham disuspensi'], answer: 0, why: 'Penembusan tampak meyakinkan tetapi gagal bertahan.' }
          ]
        },
        {
          id: 'ta-3-ma',
          label: 'Rata-rata Bergerak: Memuluskan, dengan Harga Ketertinggalan',
          domain: 'Keuangan',
          summary: 'Rata-rata bergerak meratakan harga agar tren lebih terlihat, tetapi karena dihitung dari data lampau, ia selalu terlambat.',
          model: 'Simple Moving Average (SMA) dan EMA',
          analogy: 'Seperti melihat ke kaca spion: kamu melihat jalan yang sudah dilewati dengan lebih halus, tetapi tidak melihat tikungan di depan.',
          insight: 'SMA n-periode adalah rata-rata harga tutup n periode terakhir. EMA memberi bobot lebih pada data terbaru sehingga lebih cepat bereaksi namun lebih mudah terpancing noise. Harga di atas rata-rata yang menanjak sering dibaca sebagai tren naik, dan sebaliknya. Persilangan dua rata-rata (misalnya jangka pendek memotong jangka panjang) sering dijadikan sinyal. Kelemahannya: pada pasar yang bergerak mendatar, persilangan sering menghasilkan sinyal palsu berulang (whipsaw). Karena menggunakan data lampau, ia mengikuti tren, bukan memprediksinya.',
          cross: { text: 'Teknikal x Statistik', domains: ['Keuangan', 'Ekonomi'], insight: 'Meratakan data mengurangi noise tetapi menambah keterlambatan. Selalu ada pertukaran antara kehalusan dan kecepatan.' },
          story: { who: 'Contoh Hitung SMA 5 (ilustrasi)', story: 'Penutupan lima hari: 100, 102, 101, 105, 107. SMA 5 = (100 + 102 + 101 + 105 + 107) / 5 = 103. Hari berikutnya harga tutup 110: jendela bergeser, SMA 5 = (102 + 101 + 105 + 107 + 110) / 5 = 105, sementara harga sudah 110. Rata-rata selalu tertinggal dari harga yang sedang naik.', takeaway: 'Rata-rata bergerak membantu melihat arah, bukan menentukan waktu masuk yang tepat.' },
          actions: ['Hitung SMA 5 untuk lima penutupan terakhir sebuah saham secara manual.', 'Pasang SMA 20 dan SMA 50, lalu hitung berapa kali persilangannya memberi sinyal salah dalam 6 bulan.', 'Tentukan apakah kamu mau mengikuti tren (lebih lambat, lebih sedikit sinyal) atau cepat (lebih banyak sinyal palsu).'],
          level: 'Menengah', time: '7 min',
          scenario: {
            title: 'Dilema Sinyal Persilangan',
            context: 'Dua rata-rata bersilangan naik, tetapi harga sedang bergerak mendatar selama berminggu-minggu.',
            dilemma: 'Apa yang kamu lakukan?',
            choices: [
              { text: 'Sadari bahwa pasar mendatar rawan sinyal palsu; tunggu konfirmasi tren atau kecilkan ukuran posisi dan pasang batas rugi.', consequence: 'Kamu menghindari terseret sinyal palsu yang berulang.', explanation: 'Rata-rata bergerak paling berguna saat ada tren jelas.', best: true },
              { text: 'Masuk besar karena sinyalnya baku.', consequence: 'Sinyal palsu berulang menggerus modalmu sedikit demi sedikit.', explanation: 'Whipsaw sering terjadi pada pasar mendatar.' },
              { text: 'Abaikan semua indikator karena tidak ada yang benar.', consequence: 'Kamu membuang alat yang berguna bila dipakai pada kondisi yang tepat.', explanation: 'Indikator punya kondisi di mana ia lebih dan kurang berguna.' }
            ]
          },
          quiz: [
            { q: 'Rata-rata bergerak selalu...', options: ['Memprediksi harga besok', 'Tertinggal dari harga karena memakai data lampau', 'Lebih cepat dari harga', 'Sama dengan volume'], answer: 1, why: 'Ia mengikuti tren, bukan memprediksinya.' },
            { q: 'EMA dibanding SMA...', options: ['Memberi bobot lebih pada data terbaru', 'Tidak memakai harga', 'Selalu lebih akurat', 'Hanya untuk emas'], answer: 0, why: 'EMA lebih responsif tetapi lebih rawan noise.' }
          ]
        }
      ]
    },
    {
      title: 'Indikator dan Bukti',
      lessons: [
        {
          id: 'ta-4-rsi',
          label: 'Momentum dan RSI: Jenuh Beli Bukan Perintah Jual',
          domain: 'Keuangan',
          summary: 'RSI mengukur kecepatan dan kekuatan kenaikan dibanding penurunan baru-baru ini. Angka tinggi menunjukkan momentum kuat, bukan otomatis tanda berbalik.',
          model: 'Relative Strength Index (J. Welles Wilder, 1978)',
          analogy: 'Seperti speedometer: kecepatan tinggi menunjukkan mobil melaju kencang, bukan bahwa ia akan berhenti. Pada tanjakan panjang, mobil bisa melaju kencang terus.',
          insight: 'J. Welles Wilder (New Concepts in Technical Trading Systems, 1978) memperkenalkan RSI, skala 0-100, lazimnya dihitung dari 14 periode. Pembacaan konvensional: di atas 70 disebut jenuh beli (overbought), di bawah 30 jenuh jual (oversold). Namun pada tren kuat, RSI bisa bertahan lama di zona itu sementara harga terus bergerak. Karena itu angka ini lebih berguna untuk mengukur kekuatan tren dan mencari divergensi (harga membuat puncak baru, RSI tidak) daripada sebagai perintah jual-beli otomatis.',
          cross: { text: 'Teknikal x Momentum Perilaku', domains: ['Keuangan', 'Psikologi'], insight: 'Studi akademik tentang momentum menemukan bahwa aset yang naik cenderung terus naik dalam jangka menengah, tetapi hasilnya berubah menurut waktu dan pasar. Jangan menjadikannya aturan pasti.' },
          story: { who: 'Jual Karena RSI 75 (ilustrasi)', story: 'Seorang pemula menjual saham begitu RSI melewati 70 karena bukunya menyebut jenuh beli. Harga terus naik 40% dalam tiga bulan sementara RSI bertahan di atas 70. Ia benar tentang indikatornya, tetapi salah menjadikannya perintah jual.', takeaway: 'Indikator memberi informasi, bukan perintah. Gabungkan dengan tren, rencana, dan batas rugi.' },
          actions: ['Lihat satu saham yang trennya kuat dan hitung berapa lama RSI bertahan di atas 70.', 'Cari satu contoh divergensi pada grafik masa lalu dan lihat hasilnya.', 'Tuliskan bagaimana kamu akan memakai RSI (bukan sebagai perintah) dalam rencanamu.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema RSI di Atas 70',
            context: 'Saham yang kamu pegang sedang naik kuat dan RSI melewati 70.',
            dilemma: 'Apa yang paling masuk akal?',
            choices: [
              { text: 'Tinjau rencanamu: tren, batas rugi, dan target. Pertimbangkan menaikkan batas rugi untuk mengunci sebagian hasil, bukan langsung jual hanya karena angka RSI.', consequence: 'Keputusanmu berdasarkan rencana dan bukan satu angka.', explanation: 'RSI tinggi pada tren kuat bisa bertahan lama.', best: true },
              { text: 'Jual semua karena RSI di atas 70.', consequence: 'Kamu bisa kehilangan sisa kenaikan tren kuat.', explanation: 'Jenuh beli bukan perintah jual.' },
              { text: 'Tambah posisi besar karena sedang naik.', consequence: 'Kamu menambah risiko di harga yang sudah tinggi tanpa rencana.', explanation: 'Tren kuat tidak menjamin kelanjutan.' }
            ]
          },
          quiz: [
            { q: 'RSI lazimnya dihitung dari berapa periode?', options: ['3', '14', '100', '365'], answer: 1, why: 'Pengaturan baku Wilder adalah 14 periode.' },
            { q: 'Pada tren naik yang kuat, RSI...', options: ['Selalu turun di bawah 30', 'Bisa bertahan lama di atas 70', 'Tidak bisa dihitung', 'Selalu 50'], answer: 1, why: 'Momentum kuat dapat menahan RSI tinggi dalam waktu lama.' }
          ]
        },
        {
          id: 'ta-5-volatilitas',
          label: 'Volatilitas: ATR, Bollinger, dan Menentukan Batas Rugi',
          domain: 'Keuangan',
          summary: 'Seberapa liar harga bergerak berbeda untuk tiap saham dan waktu. Batas rugi yang terlalu sempit akan terpicu oleh goyangan biasa; yang terlalu lebar membuat rugi besar.',
          model: 'Average True Range (Wilder, 1978) dan Bollinger Bands (John Bollinger, 1980-an)',
          analogy: 'Seperti mengukur tinggi ombak sebelum memutuskan seberapa jauh dari tepi kamu berdiri. Di ombak besar, berdiri terlalu dekat akan basah terus.',
          insight: 'ATR (Average True Range) mengukur rata-rata rentang pergerakan harga harian, termasuk celah antar hari. Ia membantu menetapkan batas rugi yang proporsional dengan volatilitas, misalnya satu sampai dua kali ATR dari titik masuk. Bollinger Bands menggambar pita di sekitar rata-rata dengan lebar berdasarkan simpangan baku; pita menyempit saat volatilitas rendah dan melebar saat tinggi. Harga di dekat pita atas bukan otomatis tanda jual; pada tren kuat harga bisa menyusuri pita atas. Jadikan volatilitas sebagai ukuran risiko, bukan sinyal.',
          cross: { text: 'Teknikal x Statistik Risiko', domains: ['Keuangan', 'Ekonomi'], insight: 'Volatilitas adalah ukuran ketidakpastian. Menyesuaikan ukuran posisi dengan volatilitas menjaga risiko per keputusan tetap kurang lebih sama.' },
          story: { who: 'Dua Saham, Dua Batas Rugi (ilustrasi)', story: 'Saham A bergerak rata-rata Rp 20 per hari, saham B Rp 100 per hari, keduanya di harga sekitar Rp 2.000. Batas rugi Rp 30 di bawah harga masuk wajar untuk A tetapi hampir pasti terpicu oleh goyangan biasa pada B. Menyamakan batas rugi tanpa melihat volatilitas membuat B keluar berulang kali sebelum idenya sempat terbukti.', takeaway: 'Batas rugi yang baik disesuaikan dengan volatilitas dan ditentukan sebelum masuk.' },
          actions: ['Hitung rata-rata rentang harian (high dikurangi low) 14 hari terakhir sebuah saham.', 'Tentukan batas rugi satu sampai dua kali rentang itu di bawah titik masuk.', 'Hitung ukuran posisi agar kerugian di batas itu sesuai persentase risiko yang kamu tetapkan.'],
          level: 'Menengah', time: '7 min',
          scenario: {
            title: 'Dilema Batas Rugi Terlalu Sempit',
            context: 'Batas rugimu terpicu berulang oleh pergerakan harian biasa, lalu harga naik tanpa kamu.',
            dilemma: 'Apa perbaikan yang masuk akal?',
            choices: [
              { text: 'Sesuaikan batas rugi dengan volatilitas (misalnya berdasarkan ATR) dan kecilkan ukuran posisi agar risiko rupiahnya tetap sama.', consequence: 'Kamu tidak mudah terpental dan risiko tetap terkendali.', explanation: 'Batas lebar dengan posisi kecil menjaga risiko tanpa terpicu goyangan biasa.', best: true },
              { text: 'Hapus batas rugi agar tidak terpicu.', consequence: 'Satu pergerakan buruk bisa menjadi kerugian besar.', explanation: 'Tanpa batas rugi, risiko tidak terbatas.' },
              { text: 'Pertahankan batas sempit dan tambah ukuran posisi agar tetap menguntungkan.', consequence: 'Risiko membesar dan tetap sering terpicu.', explanation: 'Memperbesar posisi tidak memperbaiki batas yang tidak realistis.' }
            ]
          },
          quiz: [
            { q: 'ATR digunakan terutama untuk...', options: ['Memprediksi arah harga', 'Mengukur rata-rata rentang pergerakan harga', 'Menghitung dividen', 'Menentukan pajak'], answer: 1, why: 'ATR mengukur volatilitas, bukan arah.' },
            { q: 'Pita Bollinger melebar berarti...', options: ['Volatilitas naik', 'Harga pasti turun', 'Volume nol', 'Saham disuspensi'], answer: 0, why: 'Lebar pita mengikuti simpangan baku harga.' }
          ]
        },
        {
          id: 'ta-6-bukti',
          label: 'Pola Grafik dan Bukti: Apa yang Sebenarnya Terbukti?',
          domain: 'Keuangan',
          summary: 'Banyak aturan teknikal tampak sangat berhasil pada data masa lalu. Namun ketelitian menguji menentukan apakah itu kemampuan nyata atau kebetulan.',
          model: 'Backtesting, Data Snooping, dan Survivorship Bias',
          analogy: 'Jika kamu mencoba seribu resep dan memamerkan satu yang kebetulan enak pada tamu pertama, itu bukan bukti resepnya hebat, melainkan bukti kamu mencoba terlalu banyak.',
          insight: 'Temuan akademik tentang analisis teknikal campuran. Brock, Lakonishok, dan LeBaron (Journal of Finance, 1992) menemukan beberapa aturan rata-rata bergerak punya daya prediksi pada data indeks Dow Jones lama. Namun kajian lanjutan seperti Sullivan, Timmermann, dan White (1999) menunjukkan bahwa setelah memperhitungkan data snooping (menguji banyak aturan lalu memilih yang terbaik), bukti itu melemah. Jebakan umum lain: overfitting (aturan terlalu pas dengan data lampau), survivorship bias (hanya menghitung saham yang selamat), dan mengabaikan biaya transaksi serta selisih harga. Kajian atas data bursa Taiwan oleh Barber, Odean, dan rekan menemukan hanya sebagian kecil pelaku day trading yang konsisten untung setelah biaya. Kesimpulan yang jujur: perlakukan teknikal sebagai alat yang tidak terbukti pasti, dan uji sendiri dengan data yang belum kamu lihat sebelumnya.',
          cross: { text: 'Teknikal x Metode Ilmiah', domains: ['Keuangan', 'Ekonomi'], insight: 'Pola yang ditemukan setelah melihat data hampir selalu tampak bagus. Ujian sebenarnya adalah data yang belum kamu pakai untuk membuat aturan itu.' },
          story: { who: 'Strategi yang Sempurna di Masa Lalu (ilustrasi)', story: 'Seorang pemula mencoba ratusan kombinasi indikator pada data tiga tahun dan menemukan satu yang menghasilkan 80% per tahun. Ketika dipakai dengan uang sungguhan, hasilnya mendatar lalu rugi. Aturan itu hanya cocok dengan kebisingan data lama, bukan menangkap pola yang bertahan.', takeaway: 'Bagi data menjadi dua: bangun aturan pada satu bagian, uji pada bagian lain yang belum disentuh. Hitung biaya transaksi.' },
          actions: ['Ambil satu aturan sederhana dan uji pada dua periode terpisah.', 'Kurangi hasil dengan biaya transaksi realistis dan lihat apakah masih menarik.', 'Catat berapa banyak aturan yang kamu coba sebelum menemukan yang tampak bagus.'],
          level: 'Mahir', time: '8 min',
          scenario: {
            title: 'Dilema Strategi Terlalu Bagus',
            context: 'Pengujianmu pada data lama menunjukkan hasil sangat tinggi dari aturan yang rumit.',
            dilemma: 'Apa yang kamu lakukan sebelum memakai uang sungguhan?',
            choices: [
              { text: 'Uji pada data terpisah yang belum dipakai, hitung biaya, lalu coba dengan modal sangat kecil atau simulasi dulu.', consequence: 'Kamu menemukan apakah hasilnya bertahan di luar data yang kamu kenal.', explanation: 'Uji di luar sampel adalah pertahanan utama terhadap overfitting.', best: true },
              { text: 'Langsung pakai seluruh modal karena hasilnya sangat tinggi.', consequence: 'Jika hanya cocok dengan data lama, kamu rugi besar.', explanation: 'Hasil masa lalu tidak menjamin hasil mendatang.' },
              { text: 'Tambah aturan sampai hasilnya lebih sempurna.', consequence: 'Kamu makin menyesuaikan dengan kebisingan data.', explanation: 'Menambah aturan memperparah overfitting.' }
            ]
          },
          quiz: [
            { q: 'Data snooping adalah...', options: ['Mengintip data pesaing', 'Menguji banyak aturan lalu memilih yang kebetulan terbaik', 'Menghapus data lama', 'Mengunduh data harga'], answer: 1, why: 'Bila menguji banyak aturan, sebagian akan tampak bagus karena kebetulan.' },
            { q: 'Cara terbaik menguji aturan adalah...', options: ['Memakai data yang sama untuk membuat dan menguji', 'Menguji pada data terpisah yang belum dipakai dan menghitung biaya', 'Percaya hasil masa lalu', 'Menambah indikator'], answer: 1, why: 'Uji di luar sampel dan biaya membuat hasil lebih jujur.' }
          ]
        }
      ]
    },
    {
      title: 'Disiplin dan Perlindungan Modal',
      lessons: [
        {
          id: 'ta-7-rencana',
          label: 'Rencana Trading: Titik Masuk, Batas Rugi, dan Rasio Risiko-Imbalan',
          domain: 'Keuangan',
          summary: 'Rencana yang ditulis sebelum masuk melindungimu dari keputusan emosional. Rasio risiko-imbalan dan ukuran posisi menentukan apakah kamu bertahan.',
          model: 'Trading Plan, Risk/Reward, dan Position Sizing',
          analogy: 'Pilot memakai daftar periksa sebelum terbang. Bukan karena tidak ahli, tetapi karena keputusan terbaik dibuat tenang di darat, bukan panik di udara.',
          insight: 'Rencana memuat: alasan masuk, titik masuk, batas rugi, target, dan ukuran posisi. Rasio risiko-imbalan membandingkan potensi rugi dengan potensi untung; dengan rasio 1:2, kamu hanya perlu menang sekitar sepertiga dari transaksi untuk impas sebelum biaya (1 / (1 + 2) = 33,3%). Ukuran posisi dihitung dari batas rugi: besar posisi = uang yang rela dirugikan dibagi jarak ke batas rugi per lembar. Aturan praktis yang lazim adalah membatasi risiko per transaksi pada 1-2% modal. Itu aturan belajar, bukan rekomendasi. Jurnal mencatat keputusan dan alasannya agar kamu belajar dari data sendiri.',
          cross: { text: 'Teknikal x Manajemen Risiko', domains: ['Keuangan', 'Bisnis'], insight: 'Trading berkelanjutan lebih mirip menjalankan usaha kecil dengan aturan risiko ketat daripada menebak arah.' },
          story: { who: 'Contoh Hitung Ukuran Posisi (ilustrasi)', story: 'Modal Rp 100 juta, risiko 1% per transaksi = Rp 1 juta. Rencana masuk di Rp 5.000 dengan batas rugi Rp 4.800 (jarak Rp 200 per lembar). Posisi = Rp 1.000.000 / Rp 200 = 5.000 lembar = 50 lot (1 lot = 100 lembar), nilai sekitar Rp 25 juta. Bila batas rugi terpicu, kerugian sekitar Rp 1 juta. Target Rp 5.400 memberi rasio 1:2.', takeaway: 'Tentukan kerugian yang rela kamu tanggung dulu, baru hitung ukuran posisi. Bukan sebaliknya.' },
          actions: ['Tulis rencana untuk satu skenario hipotetis: alasan, masuk, batas rugi, target, ukuran.', 'Hitung ukuran posisi dengan rumus di atas memakai modal dan risiko pilihanmu.', 'Mulai jurnal sederhana: tanggal, alasan, hasil, apa yang dipelajari.'],
          level: 'Menengah', time: '8 min',
          scenario: {
            title: 'Dilema Memindahkan Batas Rugi',
            context: 'Harga mendekati batas rugimu dan kamu tergoda menggesernya lebih jauh agar tidak terpicu.',
            dilemma: 'Apa yang kamu lakukan?',
            choices: [
              { text: 'Biarkan batas rugi terpicu sesuai rencana, catat di jurnal, dan evaluasi setelah tenang.', consequence: 'Kerugian tetap terbatas sesuai rencana dan kamu belajar dari catatan.', explanation: 'Batas rugi dibuat saat tenang agar dipatuhi saat emosional.', best: true },
              { text: 'Geser batas rugi lebih jauh dengan harapan harga berbalik.', consequence: 'Kerugian bisa jauh melebihi rencana.', explanation: 'Menggeser batas rugi mengubah kerugian kecil menjadi besar.' },
              { text: 'Tambah posisi agar rata-rata harga turun.', consequence: 'Risiko dan ukuran kerugian membesar pada ide yang sedang salah.', explanation: 'Menambah posisi yang rugi memperbesar risiko.' }
            ]
          },
          quiz: [
            { q: 'Dengan rasio risiko-imbalan 1:2, tingkat menang minimum untuk impas sebelum biaya sekitar...', options: ['10%', '33%', '50%', '90%'], answer: 1, why: '1 / (1 + 2) = sekitar 33%.' },
            { q: 'Ukuran posisi sebaiknya dihitung dari...', options: ['Perasaan yakin', 'Uang yang rela dirugikan dan jarak ke batas rugi', 'Saran teman', 'Harga terendah hari ini'], answer: 1, why: 'Besar posisi = risiko rupiah dibagi risiko per lembar.' }
          ]
        },
        {
          id: 'ta-8-psikologi',
          label: 'Psikologi, Leverage, dan Jebakan di Sekitar Trading',
          domain: 'Psikologi',
          summary: 'Musuh terbesar trader sering bukan grafik, tetapi emosi, utang, dan orang yang menjual janji. Mengenalinya lebih awal menyelamatkan modal.',
          model: 'Bias Perilaku, Leverage, dan Penipuan Berkedok Sinyal',
          analogy: 'Seperti naik motor di jalan licin: bukan hanya soal kemampuan, tetapi soal tidak memaksa tikungan saat tergoda mengejar waktu.',
          insight: 'Bias yang umum: FOMO (takut ketinggalan), menghindari kerugian (menahan yang rugi, menjual cepat yang untung), terlalu percaya diri setelah beberapa kali menang, dan balas dendam pada pasar setelah rugi (revenge trading). Overtrading menambah biaya dan kesalahan. Leverage (pinjaman atau margin) memperbesar untung dan rugi; kerugian bisa melebihi modal awal. Hati-hati dengan penawaran "sinyal pasti untung", grup yang menjanjikan hasil tetap, atau orang yang meminta dana untuk dikelola tanpa izin. Gunakan hanya perusahaan sekuritas dan produk yang berizin dan diawasi OJK, dan periksa daftar entitas legal di situs resmi OJK sebelum menyetor uang. Tidak ada yang bisa menjamin hasil.',
          cross: { text: 'Psikologi x Hukum Pasar Modal', domains: ['Psikologi', 'Hukum'], insight: 'Penipuan investasi bekerja dengan memanfaatkan bias yang sama: ketakutan ketinggalan dan keinginan cepat kaya.' },
          story: { who: 'Janji Hasil Harian (ilustrasi)', story: 'Seseorang masuk grup yang menjanjikan 3% per hari dan memperlihatkan tangkapan layar keuntungan. Ia menyetor sedikit lalu menambah setelah melihat "hasil". Saat ia ingin menarik dana, diminta biaya tambahan. Janji hasil tetap yang tinggi dan tidak masuk akal, tangkapan layar sebagai bukti, dan tekanan untuk segera menyetor adalah tanda bahaya klasik.', takeaway: 'Bila sesuatu menjanjikan hasil besar tanpa risiko, anggap itu tanda bahaya sampai terbukti sebaliknya, lalu periksa izinnya di sumber resmi.' },
          actions: ['Tuliskan tiga situasi emosional yang paling membuatmu menyimpang dari rencana.', 'Buat aturan berhenti: setelah dua kerugian berturut-turut, istirahat sehari.', 'Periksa status izin setiap platform atau penasihat sebelum menyetor dana.'],
          level: 'Menengah', time: '7 min',
          scenario: {
            title: 'Dilema Tawaran Hasil Tetap',
            context: 'Seseorang menawarkan "program" dengan hasil tetap 2% per hari dan meminta kamu menyetor dana lewat rekening pribadinya.',
            dilemma: 'Apa yang kamu lakukan?',
            choices: [
              { text: 'Tolak, periksa izin entitasnya di situs resmi OJK, dan laporkan jika terlihat mencurigakan.', consequence: 'Kamu melindungi dana dan membantu orang lain.', explanation: 'Hasil tetap tinggi dan setoran ke rekening pribadi adalah tanda bahaya.', best: true },
              { text: 'Setor sedikit dulu untuk mencoba.', consequence: 'Dana kecil bisa hilang dan kamu terdorong menambah setelah "hasil" palsu.', explanation: 'Skema semacam itu sering memberi hasil awal untuk menarik setoran lebih besar.' },
              { text: 'Setor besar agar hasil lebih besar.', consequence: 'Risiko kehilangan seluruh dana sangat tinggi.', explanation: 'Hasil tetap tinggi tanpa risiko tidak masuk akal.' }
            ]
          },
          quiz: [
            { q: 'Revenge trading adalah...', options: ['Berdagang dengan teman', 'Mencoba membalas kerugian dengan taruhan lebih besar', 'Menjual saat untung', 'Berdagang pagi hari'], answer: 1, why: 'Dorongan emosional mengejar kerugian meningkatkan risiko.' },
            { q: 'Tanda bahaya penawaran investasi adalah...', options: ['Izin resmi yang bisa diperiksa', 'Janji hasil tetap tinggi tanpa risiko', 'Risiko dijelaskan jelas', 'Laporan resmi'], answer: 1, why: 'Tidak ada investasi yang menjamin hasil tinggi tanpa risiko.' }
          ]
        }
      ]
    }
  ]
});
