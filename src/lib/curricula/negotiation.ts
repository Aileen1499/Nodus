import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const NEGOTIATION_CURRICULUM = buildPath({
  id: 'curriculum-negosiasi-penjualan-b2b',
  topic: 'Negosiasi, Penjualan B2B & Kepemimpinan Tim',
  description:
    'Menyiapkan negosiasi (BATNA, ZOPA), menjual ke bisnis lain, menangani keberatan, menutup kesepakatan, dan memimpin tim kecil. Setiap pelajaran berisi simulasi keputusan.',
  stages: [
    {
      title: 'Fondasi Negosiasi',
      lessons: [
        {
          id: 'ng-1-batna',
          label: 'BATNA, ZOPA, dan Persiapan',
          domain: 'Komunikasi',
          summary: 'Negosiasi dimenangkan sebelum meja dibuka. Ketahui alternatif terbaik Anda dan batas wajar kedua pihak.',
          model: 'BATNA & ZOPA (Fisher, Ury; Harvard Negotiation Project)',
          analogy: 'Anda menawar mobil bekas: jika punya dua penawaran lain, Anda tenang menolak harga buruk. Jika tak punya alternatif, Anda cenderung menerima apa pun. Kekuatan tawar datang dari alternatif yang nyata.',
          insight: 'BATNA (Best Alternative To a Negotiated Agreement) adalah alternatif terbaik jika tak ada kesepakatan. ZOPA (Zone of Possible Agreement) adalah rentang di mana kedua pihak masih untung. Persiapan mencakup memperkirakan BATNA lawan, menentukan titik keluar (walk-away), target, dan variabel selain harga yang bisa dipertukarkan.',
          cross: { text: 'Negosiasi x Ekonomi Perilaku', domains: ['Komunikasi', 'Psikologi'], insight: 'Penawaran pertama berfungsi sebagai jangkar. Pihak yang membuat tawaran awal yang wajar namun ambisius sering mengarahkan hasil akhir.' },
          story: { who: 'Negosiasi Sewa Ruko (ilustrasi)', story: 'Penyewa mengunjungi tiga ruko serupa sehingga punya BATNA kuat. Ia menawar sewa 15% lebih rendah dengan kontrak dua tahun sebagai imbalan. Pemilik yang tahu ruko kosong tiga bulan menyetujui. Tanpa BATNA, penyewa kemungkinan menerima harga awal.', takeaway: 'Perkuat alternatif Anda sebelum bernegosiasi.' },
          actions: ['Tuliskan BATNA, titik keluar, dan target untuk negosiasi terdekat Anda.', 'Perkirakan BATNA pihak lawan dan kepentingan sebenarnya di balik posisinya.', 'Daftar tiga variabel selain harga (termin, volume, waktu, layanan) yang bisa ditukar.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Pelanggan Besar Menekan Harga',
            context: 'Pelanggan terbesar (40% omzet) meminta diskon 15% atau akan pindah.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Nilai BATNA kedua pihak, tawarkan pertukaran (volume lebih besar, kontrak lebih panjang, pembayaran lebih cepat) untuk diskon lebih kecil, dan siapkan titik keluar.', consequence: 'Anda menutup dengan diskon 7% dan kontrak setahun dengan termin lebih baik.', explanation: 'Perdagangan variabel menciptakan nilai dibanding sekadar menyerah.', best: true },
              { text: 'Setujui 15% agar tidak kehilangan.', consequence: 'Margin anjlok dan pelanggan lain menuntut sama.', explanation: 'Menyerah tanpa pertukaran menetapkan preseden buruk.' },
              { text: 'Tolak keras tanpa alternatif.', consequence: 'Pelanggan pindah dan omzet 40% hilang.', explanation: 'Tanpa BATNA kuat, sikap keras berisiko besar.' }
            ]
          },
          quiz: [
            { q: 'Apa itu BATNA?', options: ['Harga akhir', 'Alternatif terbaik bila tak ada kesepakatan', 'Nama kontrak', 'Jenis pajak'], answer: 1, why: 'BATNA adalah alternatif terbaik tanpa kesepakatan.' },
            { q: 'ZOPA adalah...', options: ['Rentang kesepakatan yang masih menguntungkan kedua pihak', 'Titik keluar sepihak', 'Nama perusahaan', 'Diskon maksimal'], answer: 0, why: 'ZOPA menunjukkan wilayah tumpang tindih kepentingan.' }
          ]
        },
        {
          id: 'ng-2-kepentingan',
          label: 'Posisi vs Kepentingan: Menciptakan Nilai',
          domain: 'Komunikasi',
          summary: 'Tanyakan mengapa di balik tuntutan. Kepentingan yang berbeda membuka kesepakatan yang menguntungkan keduanya.',
          model: 'Interest-Based Negotiation (Getting to Yes)',
          analogy: 'Dua anak berebut satu jeruk. Satu butuh kulitnya untuk kue, satu butuh buahnya untuk jus. Jika mereka hanya berdebat posisi "aku mau jerukku", mereka membelah dua dan keduanya rugi. Menanyakan alasan membuat keduanya puas.',
          insight: 'Posisi adalah apa yang diminta, kepentingan adalah mengapa. Negosiasi integratif mencari pertukaran di mana tiap pihak memberikan yang murah bagi dirinya tetapi berharga bagi lawan. Pertanyaan terbuka dan mendengar aktif adalah alat utama.',
          cross: { text: 'Negosiasi x Psikologi Empati', domains: ['Komunikasi', 'Psikologi'], insight: 'Orang yang merasa didengar lebih fleksibel. Merangkum ulang kepentingan lawan menurunkan resistensi.' },
          story: { who: 'Negosiasi Pemasok dan Kafe (ilustrasi)', story: 'Kafe menuntut harga biji kopi turun. Pemasok sebenarnya butuh kepastian pesanan untuk mengatur panen. Kafe menawarkan komitmen pembelian tiga bulan dengan jadwal tetap sebagai ganti harga lebih rendah. Keduanya diuntungkan.', takeaway: 'Kepastian sering lebih berharga bagi lawan daripada selisih harga kecil.' },
          actions: ['Pada negosiasi berikutnya ajukan tiga pertanyaan "mengapa" sebelum menawar.', 'Daftar apa yang murah bagi Anda tetapi berharga bagi lawan.', 'Rangkum ulang kebutuhan lawan dengan kata-kata Anda sebelum menyampaikan tawaran.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Mitra Menolak Semua Penawaran',
            context: 'Mitra terus menolak tawaran harga Anda tanpa alasan jelas.',
            dilemma: 'Apa langkah selanjutnya?',
            choices: [
              { text: 'Tanyakan apa yang paling penting baginya (waktu, risiko, kepastian), lalu susun paket yang menjawab kepentingan itu.', consequence: 'Ternyata ia khawatir keterlambatan. Anda menjamin jadwal dan harga tetap.', explanation: 'Menggali kepentingan membuka solusi yang tak terlihat dari posisi.', best: true },
              { text: 'Turunkan harga terus sampai ia setuju.', consequence: 'Margin habis dan ia tetap minta lebih.', explanation: 'Konsesi tanpa pertukaran mengajari lawan menuntut lebih.' },
              { text: 'Akhiri pembicaraan.', consequence: 'Anda kehilangan kesepakatan yang mungkin saling menguntungkan.', explanation: 'Menggali dulu lebih murah daripada pergi.' }
            ]
          },
          quiz: [
            { q: 'Perbedaan posisi dan kepentingan?', options: ['Sama saja', 'Posisi adalah apa yang diminta, kepentingan adalah mengapa', 'Kepentingan adalah harga', 'Posisi adalah alasan'], answer: 1, why: 'Kepentingan adalah motivasi di balik tuntutan.' },
            { q: 'Alat utama negosiasi integratif?', options: ['Mengancam', 'Pertanyaan terbuka dan mendengar aktif', 'Menaikkan suara', 'Menunda'], answer: 1, why: 'Pertanyaan dan mendengar membuka kepentingan sebenarnya.' }
          ]
        },
        {
          id: 'ng-3-kontrak',
          label: 'Menuangkan Kesepakatan ke Kontrak yang Jelas',
          domain: 'Hukum',
          summary: 'Kesepakatan lisan mudah dilupakan. Pastikan harga, jadwal, kualitas, sanksi, dan penyelesaian sengketa tertulis.',
          model: 'Contract Essentials (Para Pihak, Objek, Harga, Waktu, Sanksi)',
          analogy: 'Kontrak seperti rambu lalu lintas: saat semuanya lancar tak terasa, tetapi saat terjadi benturan, rambu menentukan siapa yang benar. Menulisnya saat hubungan baik jauh lebih mudah daripada saat berselisih.',
          insight: 'Unsur penting kontrak: identitas para pihak, objek dan spesifikasi, harga dan termin, jangka waktu, kewajiban masing-masing, sanksi keterlambatan atau wanprestasi, force majeure, dan mekanisme penyelesaian sengketa. Hukum yang berlaku dapat berbeda per situasi, sehingga untuk kontrak bernilai besar konsultasikan ke penasihat hukum.',
          cross: { text: 'Kontrak x Manajemen Risiko', domains: ['Hukum', 'Keuangan'], insight: 'Kontrak membagi risiko. Klausul pembayaran dan sanksi adalah alat arus kas sekaligus perlindungan hukum.' },
          story: { who: 'Proyek Desain Interior (ilustrasi)', story: 'Tanpa kontrak tertulis, klien meminta revisi tak terbatas dan menunda pembayaran. Pada proyek berikutnya, kontrak menyebut tiga kali revisi, termin 50-30-20, dan sanksi keterlambatan. Sengketa hampir hilang.', takeaway: 'Batas dan termin yang jelas melindungi kedua pihak.' },
          actions: ['Buat templat kontrak sederhana dengan semua unsur penting.', 'Tambahkan batas revisi, termin pembayaran, dan sanksi keterlambatan.', 'Konsultasikan templat dengan penasihat hukum sebelum dipakai untuk kontrak besar.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Klien Minta Mulai Dulu, Kontrak Nanti',
            context: 'Klien baru ingin proyek Rp 80 juta dimulai besok, kontrak menyusul.',
            dilemma: 'Bagaimana menyikapi?',
            choices: [
              { text: 'Minta kontrak singkat dan uang muka sebelum mulai, atau mulai tahap kecil yang sudah dibayar sambil menyelesaikan kontrak.', consequence: 'Anda terlindungi dan klien melihat profesionalisme.', explanation: 'Kesepakatan tertulis dan uang muka mengurangi risiko tidak dibayar.', best: true },
              { text: 'Mulai penuh tanpa dokumen.', consequence: 'Perselisihan lingkup muncul dan pembayaran tertunda.', explanation: 'Tanpa dokumen, Anda tak punya dasar menuntut.' },
              { text: 'Tolak proyek karena tak ada kontrak.', consequence: 'Anda kehilangan peluang yang bisa diatur dengan syarat.', explanation: 'Ada solusi tengah yang melindungi tanpa menolak.' }
            ]
          },
          quiz: [
            { q: 'Unsur penting kontrak?', options: ['Hanya harga', 'Para pihak, objek, harga, waktu, sanksi, penyelesaian sengketa', 'Hanya tanda tangan', 'Hanya tanggal'], answer: 1, why: 'Unsur lengkap mengurangi ruang sengketa.' },
            { q: 'Untuk kontrak bernilai besar sebaiknya...', options: ['Tanpa tinjauan', 'Konsultasi penasihat hukum', 'Menyalin kontrak orang lain', 'Hanya lisan'], answer: 1, why: 'Ketentuan hukum bergantung pada kasusnya.' }
          ]
        }
      ]
    },
    {
      title: 'Penjualan B2B',
      lessons: [
        {
          id: 'ng-4-prospek',
          label: 'Menemukan dan Mengkualifikasi Prospek',
          domain: 'Bisnis',
          summary: 'Waktu penjualan terbatas. Pilih prospek yang punya kebutuhan, anggaran, wewenang, dan waktu.',
          model: 'BANT & Ideal Customer Profile',
          analogy: 'Penjual yang baik seperti dokter triase di IGD: ia memprioritaskan pasien yang paling membutuhkan dan paling mungkin tertolong, bukan yang paling berisik.',
          insight: 'BANT (Budget, Authority, Need, Timeline) membantu menilai prospek. Ideal Customer Profile mendeskripsikan perusahaan yang paling cocok dan menguntungkan. Prospek tak berkualitas menghabiskan waktu dan menurunkan konversi. Pelacakan tahap pipeline membuat perkiraan penjualan lebih realistis.',
          cross: { text: 'Prospek x Analitik Data', domains: ['Bisnis', 'Data & Analitik'], insight: 'Analisis pelanggan terbaik masa lalu mengungkap ciri-ciri prospek ideal berikutnya.' },
          story: { who: 'Penyedia Jasa Cetak (ilustrasi)', story: 'Tim menghubungi 200 perusahaan acak dengan konversi 1%. Setelah menyaring perusahaan yang rutin butuh cetak kemasan (ICP), mereka menghubungi 60 prospek dan konversi naik jadi 8%.', takeaway: 'Lebih sedikit prospek yang tepat mengalahkan banyak prospek yang salah.' },
          actions: ['Tuliskan ICP: industri, ukuran, masalah, anggaran.', 'Buat checklist BANT sederhana untuk setiap prospek.', 'Lacak jumlah prospek di tiap tahap pipeline mingguan.'],
          level: 'Menengah', time: '5 min', tool: 'unit',
          scenario: {
            title: 'Dilema Prospek Antusias tapi Tanpa Anggaran',
            context: 'Calon pelanggan sangat antusias tetapi belum punya anggaran dan bukan pengambil keputusan.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Tanyakan proses pengambilan keputusan, minta dikenalkan pada pengambil keputusan, dan beri bobot rendah di pipeline sampai ada anggaran.', consequence: 'Waktu terfokus pada prospek yang siap membeli.', explanation: 'Antusiasme tanpa wewenang dan anggaran jarang jadi penjualan.', best: true },
              { text: 'Habiskan berminggu-minggu menyiapkan penawaran besar.', consequence: 'Proposal tak pernah disetujui.', explanation: 'Investasi waktu harus proporsional dengan peluang.' },
              { text: 'Abaikan sepenuhnya.', consequence: 'Anda melewatkan pembeli potensial jangka panjang.', explanation: 'Beri perhatian ringan, bukan investasi besar.' }
            ]
          },
          quiz: [
            { q: 'Kepanjangan BANT?', options: ['Budget, Authority, Need, Timeline', 'Brand, Ads, Network, Trust', 'Buy, Ask, Negotiate, Tell', 'Bank, Asset, Note, Tax'], answer: 0, why: 'BANT: anggaran, wewenang, kebutuhan, waktu.' },
            { q: 'Tujuan Ideal Customer Profile?', options: ['Menentukan perusahaan yang paling cocok dan menguntungkan', 'Menentukan logo', 'Menghitung pajak', 'Menentukan gaji'], answer: 0, why: 'ICP memfokuskan penjualan pada pelanggan terbaik.' }
          ]
        },
        {
          id: 'ng-5-keberatan',
          label: 'Menangani Keberatan dan Menutup Penjualan',
          domain: 'Komunikasi',
          summary: 'Keberatan adalah sinyal minat. Dengarkan, klarifikasi, jawab dengan bukti, lalu minta langkah berikutnya.',
          model: 'Objection Handling (Dengar, Klarifikasi, Jawab, Konfirmasi)',
          analogy: 'Keberatan seperti rambu kuning, bukan lampu merah. Calon pembeli yang bertanya soal harga atau risiko sedang menimbang serius, bukan menolak.',
          insight: 'Keberatan umum: harga, waktu, risiko, dan kepercayaan. Alurnya: dengarkan penuh, klarifikasi akar keberatan, jawab dengan bukti (studi kasus, garansi, uji coba), konfirmasi apakah terjawab. Penutupan efektif meminta langkah konkret berikutnya, bukan menunggu.',
          cross: { text: 'Penjualan x Psikologi Risiko', domains: ['Komunikasi', 'Psikologi'], insight: 'Pembeli menghindari kerugian lebih kuat daripada mengejar keuntungan. Garansi dan uji coba menurunkan risiko yang dirasakan.' },
          story: { who: 'Penjual Perangkat Lunak Kasir (ilustrasi)', story: 'Pemilik toko keberatan karena "mahal". Penjual bertanya lebih lanjut dan ternyata ia takut stafnya sulit belajar. Penjual menawarkan pelatihan satu hari dan uji coba 14 hari. Kesepakatan tercapai tanpa diskon.', takeaway: 'Keberatan harga sering menutupi ketakutan lain.' },
          actions: ['Tulis lima keberatan yang paling sering Anda dengar dan jawab berbasis bukti.', 'Latih pertanyaan klarifikasi: "Apa yang paling Anda khawatirkan?"', 'Akhiri tiap pertemuan dengan langkah berikutnya yang konkret dan tanggal.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema "Harganya Terlalu Mahal"',
            context: 'Calon pelanggan berkata harga Anda terlalu mahal dibanding pesaing.',
            dilemma: 'Bagaimana menjawab?',
            choices: [
              { text: 'Tanyakan apa yang dibandingkan, gali nilai dan risiko yang paling penting baginya, lalu tunjukkan bukti nilai atau tawarkan uji coba kecil.', consequence: 'Ternyata layanan purna jual jadi prioritas. Anda menang tanpa diskon.', explanation: 'Keberatan harga biasanya soal nilai atau risiko.', best: true },
              { text: 'Langsung beri diskon 20%.', consequence: 'Margin terkikis dan ia tetap menawar.', explanation: 'Diskon dini menandakan harga Anda mudah ditawar.' },
              { text: 'Berdebat bahwa pesaing lebih buruk.', consequence: 'Ia merasa didesak dan menutup percakapan.', explanation: 'Menjelekkan pesaing mengurangi kepercayaan.' }
            ]
          },
          quiz: [
            { q: 'Langkah pertama menangani keberatan?', options: ['Membantah', 'Mendengar dan mengklarifikasi akar keberatan', 'Memberi diskon', 'Mengakhiri'], answer: 1, why: 'Memahami akar keberatan menentukan jawaban yang tepat.' },
            { q: 'Penutupan yang efektif...', options: ['Menunggu pelanggan menghubungi', 'Meminta langkah berikutnya yang konkret', 'Menghilang', 'Mengirim spam'], answer: 1, why: 'Langkah konkret menjaga momentum.' }
          ]
        }
      ]
    },
    {
      title: 'Memimpin Tim Kecil',
      lessons: [
        {
          id: 'ng-6-delegasi',
          label: 'Delegasi dan Ekspektasi yang Jelas',
          domain: 'Komunikasi',
          summary: 'Pemilik yang mengerjakan semuanya menjadi hambatan pertumbuhan. Delegasikan hasil, bukan hanya tugas.',
          model: 'Delegation Ladder & Outcome-Based Briefing',
          analogy: 'Delegasi seperti mengajari anak naik sepeda: awalnya Anda memegangi, lalu melepas perlahan. Terlalu cepat melepas membuatnya jatuh, terlalu lama memegang membuatnya tak pernah bisa.',
          insight: 'Delegasi efektif menyebut hasil yang diharapkan, batas wewenang, tenggat, dan cara pelaporan. Tingkat delegasi naik bertahap seiring kepercayaan. Mengecek hasil lebih penting daripada mengawasi proses. Pemilik perlu mengidentifikasi pekerjaan bernilai tertinggi dan menyerahkan sisanya.',
          cross: { text: 'Delegasi x Ekonomi Waktu', domains: ['Komunikasi', 'Bisnis'], insight: 'Nilai jam kerja pemilik jauh lebih tinggi untuk strategi dan penjualan daripada tugas administratif yang bisa diserahkan.' },
          story: { who: 'Pemilik Studio Foto (ilustrasi)', story: 'Pemilik mengedit semua foto sendiri hingga malam. Setelah melatih editor dengan panduan hasil jelas dan contoh acuan, ia menggunakan waktu itu untuk mencari klien korporat dan omzet naik.', takeaway: 'Serahkan pekerjaan berharga rendah bagi waktu Anda agar bisa mengerjakan yang berharga tinggi.' },
          actions: ['Daftar semua tugas mingguan dan tandai yang bisa didelegasikan.', 'Tulis brief hasil, batas wewenang, tenggat, dan format laporan untuk satu tugas.', 'Jadwalkan tinjauan singkat berkala, bukan pengawasan harian.'],
          level: 'Pemula', time: '4 min',
          scenario: {
            title: 'Dilema Karyawan Mengerjakan Tak Sesuai Harapan',
            context: 'Hasil kerja karyawan baru tidak sesuai standar Anda, dan Anda tergoda mengerjakan ulang sendiri.',
            dilemma: 'Apa yang paling tepat?',
            choices: [
              { text: 'Beri umpan balik spesifik, tunjukkan contoh hasil yang diharapkan, dan perbaiki briefing, lalu beri kesempatan mengulang.', consequence: 'Mutu naik dan Anda tak lagi jadi hambatan.', explanation: 'Sebagian besar masalah delegasi berasal dari brief yang kabur.', best: true },
              { text: 'Kerjakan ulang sendiri agar cepat.', consequence: 'Anda kelelahan dan tim tak berkembang.', explanation: 'Mengambil alih mengajarkan tim bahwa tugas akan Anda ambil kembali.' },
              { text: 'Marahi dan tak beri tugas lagi.', consequence: 'Moral turun dan karyawan bertahan hanya sedikit.', explanation: 'Kritik tanpa panduan tidak memperbaiki mutu.' }
            ]
          },
          quiz: [
            { q: 'Apa yang sebaiknya didelegasikan?', options: ['Hanya hasil tanpa batas', 'Hasil, wewenang, tenggat, dan pelaporan yang jelas', 'Tidak ada', 'Semua tanpa kontrol'], answer: 1, why: 'Brief jelas membuat delegasi berhasil.' },
            { q: 'Mengapa pemilik perlu mendelegasikan?', options: ['Agar malas', 'Agar fokus pada pekerjaan bernilai tertinggi', 'Karena wajib', 'Agar rugi'], answer: 1, why: 'Waktu pemilik paling berharga untuk strategi dan penjualan.' }
          ]
        },
        {
          id: 'ng-7-umpanbalik',
          label: 'Umpan Balik, Insentif, dan Budaya Tim',
          domain: 'Psikologi',
          summary: 'Umpan balik yang spesifik dan insentif yang selaras mengarahkan perilaku tim lebih kuat daripada pengawasan.',
          model: 'SBI Feedback (Situation-Behavior-Impact) & Incentive Alignment',
          analogy: 'Tim seperti kapal dayung: jika semua mendayung ke arah berbeda, kapal berputar di tempat. Umpan balik dan insentif adalah komando yang menyamakan arah dayung.',
          insight: 'Umpan balik SBI menyebut situasi, perilaku teramati, dan dampaknya tanpa menghakimi. Insentif memengaruhi apa yang diprioritaskan: bonus berbasis volume semata bisa menurunkan mutu. Rancang ukuran yang menyeimbangkan kuantitas, mutu, dan kepuasan pelanggan. Kepercayaan dan kejelasan peran membentuk budaya.',
          cross: { text: 'Insentif x Ekonomi Perilaku', domains: ['Psikologi', 'Ekonomi'], insight: 'Orang mengoptimalkan apa yang diukur. Ukuran yang salah menghasilkan perilaku yang salah (hukum Goodhart).' },
          story: { who: 'Tim Penjualan Toko Elektronik (ilustrasi)', story: 'Bonus hanya berdasarkan jumlah unit terjual. Tim menjual cepat dengan diskon besar dan margin merosot. Setelah bonus dikaitkan dengan margin dan kepuasan pelanggan, perilaku berubah.', takeaway: 'Insentif harus mengukur hasil yang benar-benar Anda inginkan.' },
          actions: ['Latih satu umpan balik SBI minggu ini kepada anggota tim.', 'Tinjau ukuran kinerja dan insentif: apakah mendorong perilaku yang Anda mau?', 'Adakan pertemuan satu-satu rutin 15 menit setiap dua minggu.'],
          level: 'Menengah', time: '5 min', tool: 'margin',
          scenario: {
            title: 'Dilema Bonus Berdasarkan Volume',
            context: 'Tim penjualan mengejar volume dengan diskon besar demi bonus, margin merosot.',
            dilemma: 'Bagaimana memperbaiki?',
            choices: [
              { text: 'Ubah dasar bonus ke laba kotor atau margin dengan batas diskon, dan jelaskan alasannya.', consequence: 'Tim mulai menjual nilai, margin pulih.', explanation: 'Selaraskan insentif dengan hasil yang diinginkan perusahaan.', best: true },
              { text: 'Hapus bonus sama sekali.', consequence: 'Motivasi turun dan penjualan melemah.', explanation: 'Insentif perlu diperbaiki, bukan dihapus.' },
              { text: 'Biarkan, asalkan omzet naik.', consequence: 'Laba tergerus meski omzet tinggi.', explanation: 'Omzet tanpa margin tidak menghasilkan laba.' }
            ]
          },
          quiz: [
            { q: 'Apa isi umpan balik SBI?', options: ['Situasi, Perilaku, Dampak', 'Saran, Bonus, Insentif', 'Strategi, Bisnis, Industri', 'Stok, Beli, Jual'], answer: 0, why: 'SBI menjelaskan situasi, perilaku teramati, dan dampaknya.' },
            { q: 'Mengapa insentif berbasis volume saja berbahaya?', options: ['Mendorong penjualan murah yang menurunkan margin dan mutu', 'Terlalu mahal', 'Dilarang', 'Tidak berpengaruh'], answer: 0, why: 'Orang mengoptimalkan apa yang diukur.' }
          ]
        }
      ]
    }
  ]
});
