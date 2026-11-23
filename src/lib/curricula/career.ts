import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data nyata.
export const CAREER_CURRICULUM = buildPath({
  id: 'curriculum-karier-keuangan-konsultasi',
  topic: 'Karier Keuangan & Konsultasi: Persiapan Wawancara',
  description:
    'Memahami peta karier bisnis dan keuangan, menulis CV berbasis hasil, menyelesaikan case interview dengan struktur MECE, estimasi pasar, pertanyaan teknis keuangan, wawancara perilaku, negosiasi gaji, dan membangun portofolio berkelanjutan.',
  stages: [
    {
      title: 'Menyiapkan Diri',
      lessons: [
        {
          id: 'kr-1-peta',
          label: 'Peta Karier Bisnis dan Keuangan',
          domain: 'Bisnis',
          summary: 'Kenali jalur umum, apa yang dikerjakan sehari-hari, dan keterampilan yang dinilai di tiap jalur sebelum memilih.',
          model: 'Career Landscape Mapping',
          analogy: 'Memilih jurusan tanpa tahu isi kuliahnya seperti membeli tiket tanpa tahu tujuan. Peta karier memberi gambaran sebelum Anda berangkat.',
          insight: 'Jalur umum: perbankan dan pasar modal (transaksi, riset, manajemen aset), keuangan korporasi (FP&A, treasuri, M&A internal), konsultasi manajemen dan strategi, audit dan pajak, manajemen produk dan operasi bisnis, serta perusahaan rintisan. Bandingkan berdasarkan ritme kerja, kurva belajar, keterampilan inti, dan jalur lanjutan. Wawancara informasional dengan 5 sampai 10 praktisi adalah cara termurah menguji kecocokan.',
          cross: { text: 'Karier x Psikologi Motivasi', domains: ['Bisnis', 'Psikologi'], insight: 'Kecocokan tugas harian dengan minat sering lebih menentukan kepuasan jangka panjang daripada gengsi nama jabatan.' },
          story: { who: 'Mahasiswa Manajemen Memilih Jalur (ilustrasi)', story: 'Ia tertarik konsultasi karena gengsi, namun setelah mewawancarai tiga konsultan dan dua analis FP&A, sadar ia lebih menyukai analisis mendalam satu perusahaan. Ia membidik FP&A dan mengisi portofolio dengan model anggaran.', takeaway: 'Bicara dengan praktisi sebelum memutuskan jalur.' },
          actions: ['Pilih tiga jalur karier dan wawancarai satu praktisi di masing-masing.', 'Tulis tugas harian dan keterampilan inti tiap jalur.', 'Tandai jalur yang paling cocok dengan minat dan kekuatan Anda.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Memilih Antara Gengsi dan Kecocokan',
            context: 'Anda menerima dua peluang: perusahaan konsultasi bergengsi dan posisi FP&A di perusahaan menengah dengan tugas yang lebih sesuai minat.',
            dilemma: 'Bagaimana memilih?',
            choices: [
              { text: 'Bandingkan tugas harian, kurva belajar, mentor, dan jalur lanjutan; bicara dengan orang di kedua posisi; lalu pilih yang paling selaras dengan tujuan lima tahun.', consequence: 'Anda memilih berdasarkan fakta dan merasa yakin dengan keputusan.', explanation: 'Keputusan karier sebaiknya berbasis informasi tugas nyata.', best: true },
              { text: 'Pilih yang paling bergengsi.', consequence: 'Anda cepat bosan dengan pekerjaan sehari-hari.', explanation: 'Gengsi tidak menggantikan kecocokan.' },
              { text: 'Pilih yang gajinya sedikit lebih tinggi tanpa membandingkan hal lain.', consequence: 'Anda kehilangan peluang belajar yang lebih bernilai.', explanation: 'Gaji awal hanya salah satu faktor.' }
            ]
          },
          quiz: [
            { q: 'Cara termurah menguji kecocokan karier?', options: ['Wawancara informasional dengan praktisi', 'Menebak dari judul jabatan', 'Membaca iklan lowongan saja', 'Memilih yang paling populer'], answer: 0, why: 'Praktisi memberi gambaran tugas harian yang nyata.' },
            { q: 'FP&A adalah...', options: ['Perencanaan dan analisis keuangan di dalam perusahaan', 'Audit eksternal', 'Penjualan ritel', 'Pajak internasional'], answer: 0, why: 'Financial Planning and Analysis mengurus anggaran dan analisis kinerja.' }
          ]
        },
        {
          id: 'kr-2-cv',
          label: 'CV dan Portofolio Berbasis Hasil',
          domain: 'Komunikasi',
          summary: 'Perekrut memindai CV dalam hitungan detik. Tunjukkan dampak terukur, bukan daftar tugas.',
          model: 'Achievement Bullets dan Proof of Work',
          analogy: 'Etalase toko yang menampilkan hasil terbaik menarik pembeli lebih cepat daripada daftar semua yang ada di gudang.',
          insight: 'Gunakan pola: kata kerja aksi + apa yang dilakukan + hasil terukur (angka, persentase, waktu). Contoh: "Menyusun model arus kas 13 minggu yang memangkas keterlambatan pembayaran vendor 30%." Sesuaikan CV dengan lowongan, pakai satu halaman untuk tahap awal, dan hindari klaim tanpa bukti. Portofolio (model Excel, studi kasus, analisis) menjadi bukti kemampuan bagi lulusan tanpa pengalaman panjang.',
          cross: { text: 'CV x Pemasaran Diri', domains: ['Komunikasi', 'Bisnis'], insight: 'Anda adalah produk dan perekrut adalah pembeli. Pesan harus jelas, spesifik, dan relevan dengan kebutuhan pembeli.' },
          story: { who: 'Lulusan Akuntansi Tanpa Pengalaman Kerja (ilustrasi)', story: 'CV awal berisi "aktif di organisasi, membantu kegiatan". Setelah diganti dengan "Mengelola dana Rp 80 juta untuk acara 400 peserta, menghemat 12% dari anggaran lewat negosiasi vendor" dan melampirkan model anggaran, tingkat panggilan wawancara meningkat.', takeaway: 'Angka dan bukti meyakinkan lebih dari klaim umum.' },
          actions: ['Ubah tiga poin CV Anda menjadi pola aksi, tindakan, hasil terukur.', 'Buat satu proyek portofolio, misalnya model keuangan atau studi kasus.', 'Minta satu orang membaca CV selama 10 detik dan tanyakan apa yang diingat.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema CV Penuh Tugas Tanpa Hasil',
            context: 'CV Anda berisi daftar tugas umum dan tidak ada angka, sedangkan pelamar lain tampak berpengalaman.',
            dilemma: 'Bagaimana memperbaikinya?',
            choices: [
              { text: 'Tulis ulang tiap poin dengan hasil terukur, lampirkan portofolio proyek, dan sesuaikan kata kunci dengan lowongan.', consequence: 'CV menonjol dan Anda dipanggil wawancara lebih sering.', explanation: 'Hasil terukur dan bukti kerja membangun kredibilitas.', best: true },
              { text: 'Perpanjang CV menjadi lima halaman.', consequence: 'Perekrut tidak membaca sampai habis.', explanation: 'Panjang tidak sama dengan kualitas.' },
              { text: 'Tambahkan klaim keterampilan tanpa bukti.', consequence: 'Anda dipertanyakan saat wawancara.', explanation: 'Klaim tanpa bukti berisiko merusak kepercayaan.' }
            ]
          },
          quiz: [
            { q: 'Pola poin CV yang kuat?', options: ['Kata kerja aksi + tindakan + hasil terukur', 'Daftar tugas panjang', 'Slogan motivasi', 'Biodata keluarga'], answer: 0, why: 'Hasil terukur menunjukkan dampak.' },
            { q: 'Portofolio berguna bagi lulusan baru karena...', options: ['Menjadi bukti kemampuan tanpa pengalaman panjang', 'Menggantikan ijazah', 'Menghindari wawancara', 'Menjamin diterima'], answer: 0, why: 'Proyek nyata memperlihatkan keterampilan.' }
          ]
        },
        {
          id: 'kr-3-casing',
          label: 'Case Interview: Struktur MECE dan Issue Tree',
          domain: 'Bisnis',
          summary: 'Memecah masalah bisnis menjadi bagian yang tidak tumpang tindih dan menyeluruh agar analisis terarah.',
          model: 'MECE dan Hypothesis-Driven Issue Tree',
          analogy: 'Mencari barang hilang di rumah dengan memeriksa ruangan satu per satu, bukan berpindah acak, sehingga tidak ada tempat terlewat atau diperiksa dua kali.',
          insight: 'MECE berarti Mutually Exclusive, Collectively Exhaustive: bagian tidak tumpang tindih dan bersama-sama mencakup seluruh masalah. Untuk masalah laba turun, pecah menjadi pendapatan (harga × volume) dan biaya (tetap dan variabel), lalu telusuri cabang paling mungkin. Mulai dengan hipotesis, klarifikasi tujuan, sampaikan struktur secara jelas, dan tanyakan data yang paling menguji hipotesis.',
          cross: { text: 'Struktur x Komunikasi', domains: ['Bisnis', 'Komunikasi'], insight: 'Pewawancara menilai cara Anda berpikir terstruktur dan mengomunikasikannya, bukan hanya jawaban akhir.' },
          story: { who: 'Kasus Laba Toko Roti Menurun (ilustrasi)', story: 'Kandidat memecah laba menjadi pendapatan dan biaya, lalu pendapatan menjadi harga dan volume. Ia meminta data tren dan menemukan volume stabil tetapi biaya bahan naik. Hipotesis dan struktur membuatnya menuju akar masalah dalam tiga pertanyaan.', takeaway: 'Struktur yang rapi mempercepat sampai ke akar masalah.' },
          actions: ['Latih memecah "laba turun" menjadi cabang MECE dalam dua menit.', 'Tulis hipotesis awal sebelum meminta data.', 'Rekam diri menjelaskan struktur dan dengarkan kejelasannya.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Kasus Penjualan Restoran Turun',
            context: 'Pewawancara berkata penjualan restoran turun 15% dan meminta Anda menemukan penyebab.',
            dilemma: 'Bagaimana memulai?',
            choices: [
              { text: 'Klarifikasi konteks, nyatakan struktur MECE (jumlah pelanggan × rata-rata belanja; internal vs eksternal), ajukan hipotesis, dan minta data untuk menguji.', consequence: 'Pewawancara melihat pola pikir terstruktur dan Anda cepat menemukan penurunan pelanggan akhir pekan.', explanation: 'Struktur dan hipotesis mengarahkan analisis.', best: true },
              { text: 'Langsung menyarankan diskon.', consequence: 'Anda melompat ke solusi tanpa memahami penyebab.', explanation: 'Solusi sebelum diagnosis berisiko meleset.' },
              { text: 'Meminta semua data lalu mencari pola.', consequence: 'Waktu habis tanpa arah.', explanation: 'Pencarian tanpa hipotesis tidak efisien.' }
            ]
          },
          quiz: [
            { q: 'MECE berarti...', options: ['Bagian tidak tumpang tindih dan mencakup seluruh masalah', 'Semua bagian sama besar', 'Jawaban tunggal', 'Daftar acak'], answer: 0, why: 'Mutually Exclusive, Collectively Exhaustive.' },
            { q: 'Pendekatan berbasis hipotesis berarti...', options: ['Mengajukan dugaan lalu mencari data yang menguji', 'Mengumpulkan semua data dulu', 'Menunggu pewawancara', 'Menghindari dugaan'], answer: 0, why: 'Hipotesis mengarahkan data yang dicari.' }
          ]
        }
      ]
    },
    {
      title: 'Menjawab Pertanyaan Teknis dan Perilaku',
      lessons: [
        {
          id: 'kr-4-estimasi',
          label: 'Market Sizing dan Estimasi Fermi',
          domain: 'Data & Analitik',
          summary: 'Memperkirakan ukuran pasar dari asumsi sederhana yang masuk akal, lalu menguji kewajarannya.',
          model: 'Fermi Estimation dan Top-Down vs Bottom-Up',
          analogy: 'Menebak jumlah kelereng dalam toples dengan menghitung satu lapisan, jumlah lapisan, lalu mengalikannya.',
          insight: 'Pecah pertanyaan menjadi faktor yang dapat diperkirakan, nyatakan asumsi secara terbuka, hitung, lalu uji kewajaran dengan pendekatan lain. Top-down mulai dari populasi dan menyaring; bottom-up mulai dari unit (jumlah kedai × penjualan per kedai). Keakuratan angka kurang penting dibanding logika dan kejelasan asumsi.',
          cross: { text: 'Estimasi x Kewirausahaan', domains: ['Data & Analitik', 'Bisnis'], insight: 'Ukuran pasar yang masuk akal menentukan apakah peluang layak dikejar dan berapa investasi yang masuk akal.' },
          story: { who: 'Ukuran Pasar Kedai Kopi di Kota Menengah (ilustrasi)', story: 'Kota 1 juta penduduk; 20% berusia 20 sampai 35 tahun = 200.000; 30% ke kedai kopi tiap minggu = 60.000; rata-rata 2 gelas per minggu = 120.000 gelas; harga Rp 25.000 = Rp 3 miliar per minggu, atau sekitar Rp 156 miliar per tahun. Pengecekan bottom-up dari jumlah kedai memberi angka sepadan.', takeaway: 'Asumsi eksplisit dan pengecekan silang membuat estimasi bisa dipercaya.' },
          actions: ['Estimasi ukuran pasar untuk produk Anda dengan pendekatan top-down.', 'Cek dengan pendekatan bottom-up dan bandingkan.', 'Tulis semua asumsi dan tandai yang paling tidak pasti.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Pertanyaan: Berapa Pasar Jasa Cuci Motor di Kota Ini?',
            context: 'Pewawancara meminta estimasi cepat tanpa data.',
            dilemma: 'Bagaimana menjawab?',
            choices: [
              { text: 'Nyatakan struktur (jumlah motor × frekuensi cuci × harga), tebak tiap angka dengan alasan, hitung, dan cek kewajaran.', consequence: 'Anda mendapat angka masuk akal dan pewawancara menilai logika Anda baik.', explanation: 'Struktur dan asumsi eksplisit lebih penting dari angka tepat.', best: true },
              { text: 'Mengatakan tidak punya data sehingga tidak bisa menjawab.', consequence: 'Anda gagal menunjukkan cara berpikir.', explanation: 'Estimasi memang dirancang tanpa data lengkap.' },
              { text: 'Menyebut angka acak dengan percaya diri.', consequence: 'Anda tidak bisa menjelaskan asalnya.', explanation: 'Angka tanpa logika tidak meyakinkan.' }
            ]
          },
          quiz: [
            { q: '120.000 gelas per minggu dengan harga Rp 25.000 menghasilkan per minggu...', options: ['Rp 3 miliar', 'Rp 300 juta', 'Rp 30 miliar', 'Rp 30 juta'], answer: 0, why: '120.000 × 25.000 = 3.000.000.000.' },
            { q: 'Hal terpenting dalam estimasi Fermi?', options: ['Logika dan asumsi yang jelas', 'Angka paling tepat', 'Kecepatan bicara', 'Jumlah rumus'], answer: 0, why: 'Penilai menilai cara berpikir dan kejelasan asumsi.' }
          ]
        },
        {
          id: 'kr-5-teknis',
          label: 'Wawancara Teknis Keuangan: Laporan, Valuasi, dan Pertanyaan Umum',
          domain: 'Keuangan',
          summary: 'Kuasai penjelasan ringkas tentang tiga laporan, DCF, dan pertanyaan klasik agar menjawab dengan tenang.',
          model: 'Technical Finance Interview Fundamentals',
          analogy: 'Atlet menguasai gerakan dasar sampai otomatis sehingga fokus pada strategi permainan. Pertanyaan teknis dasar harus dijawab tanpa ragu.',
          insight: 'Kuasai alur tiga laporan (laba bersih → ekuitas → kas), perbedaan laba dan kas, cara kerja DCF dan WACC secara ringkas, serta efek perubahan: misalnya penyusutan naik 10 menurunkan laba sebelum pajak, tetapi kas bertambah sebesar penghematan pajaknya. Latih jawaban 60 detik, mulai dengan kesimpulan, lalu penjelasan tiga langkah.',
          cross: { text: 'Teknis x Komunikasi', domains: ['Keuangan', 'Komunikasi'], insight: 'Penjelasan sederhana menunjukkan pemahaman. Jika tidak bisa menjelaskan dengan ringkas, konsepnya belum dikuasai.' },
          story: { who: 'Persiapan Wawancara FP&A (ilustrasi)', story: 'Kandidat menjawab "Walk me through the three statements" dengan satu kalimat inti lalu tiga langkah: laba bersih masuk laba ditahan, penyusutan ditambahkan kembali pada arus kas, dan perubahan modal kerja menyesuaikan kas. Ia lanjut menjawab contoh perubahan penyusutan tanpa kebingungan.', takeaway: 'Jawaban pendek dan terstruktur menunjukkan penguasaan.' },
          actions: ['Latih jawaban 60 detik untuk tiga laporan dan DCF.', 'Siapkan tiga contoh efek perubahan pada tiga laporan.', 'Rekam diri menjawab lalu perbaiki bagian yang berbelit.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Pertanyaan: Mana yang Lebih Penting, Laba atau Kas?',
            context: 'Pewawancara menanyakan mana yang lebih penting bagi kelangsungan perusahaan.',
            dilemma: 'Bagaimana menjawab?',
            choices: [
              { text: 'Jawab bahwa keduanya penting tetapi kas menjaga kelangsungan jangka pendek; beri contoh laba tinggi dengan piutang menumpuk; lalu hubungkan ke free cash flow.', consequence: 'Anda menunjukkan pemahaman dan contoh yang konkret.', explanation: 'Jawaban bernuansa dengan contoh lebih meyakinkan.', best: true },
              { text: 'Jawab laba saja.', consequence: 'Anda terlihat belum memahami risiko likuiditas.', explanation: 'Perusahaan laba bisa bangkrut karena kehabisan kas.' },
              { text: 'Jawab tidak tahu.', consequence: 'Anda kehilangan kesempatan menunjukkan kompetensi.', explanation: 'Pertanyaan ini bagian dasar.' }
            ]
          },
          quiz: [
            { q: 'Dalam laporan arus kas metode tidak langsung, penyusutan...', options: ['Ditambahkan kembali pada laba bersih karena bukan arus kas keluar', 'Dikurangkan dari laba', 'Diabaikan', 'Menjadi utang'], answer: 0, why: 'Penyusutan mengurangi laba tetapi tidak mengeluarkan kas.' },
            { q: 'Format jawaban wawancara 60 detik yang baik?', options: ['Kesimpulan dulu lalu tiga langkah penjelasan', 'Cerita panjang tanpa inti', 'Hanya istilah teknis', 'Menghindari contoh'], answer: 0, why: 'Struktur ringkas mudah diikuti.' }
          ]
        },
        {
          id: 'kr-6-perilaku',
          label: 'Wawancara Perilaku dan Bercerita dengan STAR',
          domain: 'Komunikasi',
          summary: 'Ceritakan pengalaman secara terstruktur untuk membuktikan kepemimpinan, kerja sama, dan pemecahan masalah.',
          model: 'STAR Method (Situation, Task, Action, Result)',
          analogy: 'Cerita yang baik seperti trailer film: singkat, jelas konfliknya, memperlihatkan peran Anda, dan berakhir dengan hasil.',
          insight: 'STAR: Situasi (konteks singkat), Tugas (tanggung jawab Anda), Aksi (apa yang Anda lakukan, fokus pada "saya"), Hasil (dampak terukur dan pelajaran). Siapkan 5 sampai 6 cerita yang bisa dipakai untuk berbagai pertanyaan: konflik, kegagalan, kepemimpinan, inisiatif, dan tenggat ketat. Jujur soal kegagalan dan tunjukkan pembelajaran.',
          cross: { text: 'Cerita x Psikologi Kesan', domains: ['Komunikasi', 'Psikologi'], insight: 'Pewawancara mengingat cerita lebih lama daripada daftar sifat. Detail konkret membuat Anda dipercaya.' },
          story: { who: 'Cerita Kegagalan Mahasiswa (ilustrasi)', story: 'Kandidat menceritakan proyek kelompok yang molor. Ia menjelaskan perannya menyusun jadwal ulang, membagi tugas dengan jelas, dan menyelesaikan proyek dengan nilai baik, lalu belajar membuat pemeriksaan mingguan. Pewawancara menilai kejujuran dan pembelajarannya.', takeaway: 'Kegagalan yang dijelaskan dengan pelajaran menunjukkan kematangan.' },
          actions: ['Tulis 5 cerita dalam format STAR dengan hasil terukur.', 'Latih tiap cerita selama dua menit.', 'Siapkan satu cerita kegagalan dengan pelajaran konkret.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Pertanyaan: Ceritakan Saat Anda Gagal',
            context: 'Pewawancara meminta contoh kegagalan dan Anda khawatir terlihat buruk.',
            dilemma: 'Bagaimana menjawab?',
            choices: [
              { text: 'Pilih kegagalan nyata yang bermakna, jelaskan peran Anda dengan STAR, akui kesalahan tanpa menyalahkan orang lain, dan tekankan perubahan yang Anda lakukan.', consequence: 'Pewawancara melihat kejujuran dan kemampuan belajar.', explanation: 'Akuntabilitas dan pembelajaran dinilai tinggi.', best: true },
              { text: 'Berkata tidak pernah gagal.', consequence: 'Pewawancara menilai Anda kurang jujur atau kurang refleksi.', explanation: 'Semua orang pernah gagal.' },
              { text: 'Menceritakan kegagalan yang disebabkan orang lain.', consequence: 'Anda terlihat menghindari tanggung jawab.', explanation: 'Fokus pada peran dan pembelajaran Anda.' }
            ]
          },
          quiz: [
            { q: 'Huruf R dalam STAR berarti...', options: ['Result (hasil)', 'Reaction', 'Role', 'Report'], answer: 0, why: 'Hasil terukur menutup cerita.' },
            { q: 'Dalam bagian Aksi, fokuskan pada...', options: ['Apa yang Anda lakukan sendiri', 'Apa yang dilakukan tim secara umum', 'Kesalahan orang lain', 'Latar tempat'], answer: 0, why: 'Pewawancara menilai kontribusi pribadi Anda.' }
          ]
        }
      ]
    },
    {
      title: 'Menutup dan Bertumbuh',
      lessons: [
        {
          id: 'kr-7-gaji',
          label: 'Negosiasi Gaji dan Paket Penawaran',
          domain: 'Komunikasi',
          summary: 'Persiapkan data pasar, rentang target, dan komponen selain gaji agar mendapat penawaran yang adil.',
          model: 'Salary Negotiation dengan BATNA dan Anchoring',
          analogy: 'Menawar rumah: Anda perlu tahu harga pasar sekitar, alternatif lain, dan batas terendah yang bisa diterima sebelum bertemu penjual.',
          insight: 'Riset rentang gaji pasar untuk peran dan kota Anda dari beberapa sumber. Tentukan target, batas bawah (walk-away), dan BATNA. Sebut rentang dengan batas bawah di atas target minimum Anda, dan kaitkan dengan nilai yang Anda bawa. Pertimbangkan paket total: bonus, tunjangan, cuti, pelatihan, fleksibilitas, dan peluang kenaikan. Negosiasikan setelah ada penawaran tertulis, dengan sikap kolaboratif.',
          cross: { text: 'Gaji x Ekonomi Perilaku', domains: ['Komunikasi', 'Psikologi'], insight: 'Angka pertama yang disebut menjadi jangkar. Siapkan angka yang ambisius namun dapat dibenarkan.' },
          story: { who: 'Lulusan Baru Menegosiasikan Tawaran (ilustrasi)', story: 'Ditawari Rp 8 juta, ia berterima kasih, menyampaikan data pasar Rp 8,5 sampai 10 juta untuk peran serupa dan proyek portofolio relevan, lalu meminta Rp 9,5 juta. Perusahaan menyetujui Rp 9 juta plus anggaran pelatihan sertifikasi.', takeaway: 'Data pasar dan nilai konkret mendukung permintaan yang wajar.' },
          actions: ['Kumpulkan data rentang gaji dari tiga sumber untuk peran incaran Anda.', 'Tentukan target, batas bawah, dan BATNA.', 'Latih kalimat negosiasi dengan teman atau mentor.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Tawaran di Bawah Ekspektasi',
            context: 'Perusahaan menawar gaji 12% di bawah rentang pasar yang Anda ketahui.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Ungkapkan antusias, sampaikan data pasar dan nilai yang Anda bawa, ajukan rentang target, dan buka opsi komponen lain seperti bonus atau pelatihan.', consequence: 'Perusahaan menaikkan tawaran dan menambah anggaran pelatihan.', explanation: 'Negosiasi kolaboratif berdasarkan data meningkatkan peluang kesepakatan.', best: true },
              { text: 'Terima langsung agar tidak kehilangan tawaran.', consequence: 'Anda menerima paket di bawah nilai pasar.', explanation: 'Tidak bernegosiasi sering meninggalkan nilai.' },
              { text: 'Menolak dengan marah.', consequence: 'Hubungan rusak dan peluang hilang.', explanation: 'Nada permusuhan merugikan.' }
            ]
          },
          quiz: [
            { q: 'Kapan sebaiknya negosiasi gaji dimulai?', options: ['Setelah ada penawaran tertulis', 'Sebelum wawancara pertama', 'Saat mengirim CV', 'Setelah resign'], answer: 0, why: 'Posisi tawar terkuat setelah perusahaan memutuskan memilih Anda.' },
            { q: 'Selain gaji pokok, komponen yang dapat dinegosiasikan?', options: ['Bonus, tunjangan, pelatihan, fleksibilitas', 'Hanya jam makan', 'Tidak ada', 'Nama kantor'], answer: 0, why: 'Paket total menentukan nilai penawaran.' }
          ]
        },
        {
          id: 'kr-8-bertumbuh',
          label: 'Belajar Berkelanjutan: Sertifikasi, Portofolio, dan Jaringan',
          domain: 'Bisnis',
          summary: 'Karier naik lewat keterampilan yang terbukti. Rancang rencana belajar 12 bulan dengan bukti yang dapat ditunjukkan.',
          model: 'Skill Stack dan Proof of Work',
          analogy: 'Tangga karier terbuat dari anak tangga kecil: satu keterampilan baru dan satu bukti baru tiap kuartal membawa Anda jauh dalam beberapa tahun.',
          insight: 'Gabungkan keterampilan teknis (Excel dan pemodelan, SQL, visualisasi data), bisnis (strategi, komunikasi), dan sertifikasi relevan (misalnya CFA, CMA, atau sertifikasi analitik) bila sesuai jalur. Sertifikat bernilai tinggi bila dibarengi proyek nyata. Bangun jaringan lewat kontribusi (berbagi analisis, menjawab pertanyaan) dan jadwal temu rutin dengan mentor. Evaluasi tiap kuartal.',
          cross: { text: 'Pertumbuhan x Kebiasaan', domains: ['Bisnis', 'Psikologi'], insight: 'Kebiasaan kecil yang konsisten (30 menit sehari) mengalahkan lonjakan belajar sesekali.' },
          story: { who: 'Analis Muda Membangun Reputasi (ilustrasi)', story: 'Seorang analis menerbitkan satu analisis ringkas tiap bulan tentang industri pilihannya dan membagikannya di komunitas. Dalam setahun ia dikenal sebagai rujukan dan menerima tawaran dari dua perusahaan tanpa melamar.', takeaway: 'Karya yang terlihat membangun peluang.' },
          actions: ['Tulis rencana belajar 12 bulan dengan target per kuartal.', 'Tentukan satu proyek portofolio per kuartal.', 'Jadwalkan pertemuan bulanan dengan satu mentor atau rekan sejawat.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Terlalu Banyak Hal untuk Dipelajari',
            context: 'Anda ingin mengambil banyak sertifikasi dan kursus sekaligus dan merasa kewalahan.',
            dilemma: 'Bagaimana memprioritaskan?',
            choices: [
              { text: 'Pilih satu keterampilan inti yang paling dibutuhkan jalur Anda, tetapkan proyek bukti per kuartal, dan jadwalkan belajar harian yang realistis.', consequence: 'Anda menyelesaikan satu keterampilan dengan bukti nyata dan memiliki momentum.', explanation: 'Fokus dan bukti lebih bernilai daripada daftar kursus yang tak tuntas.', best: true },
              { text: 'Daftar semua kursus sekaligus.', consequence: 'Anda kelelahan dan tidak menyelesaikan satu pun.', explanation: 'Fokus terpecah mengurangi hasil.' },
              { text: 'Menunda belajar sampai punya waktu luang.', consequence: 'Waktu luang tidak datang dan keterampilan stagnan.', explanation: 'Konsistensi kecil lebih efektif daripada menunggu.' }
            ]
          },
          quiz: [
            { q: 'Sertifikat paling bernilai bila...', options: ['Dibarengi proyek nyata sebagai bukti', 'Dipajang saja', 'Jumlahnya sangat banyak', 'Tidak relevan dengan jalur'], answer: 0, why: 'Bukti penerapan membuktikan kemampuan.' },
            { q: 'Cara membangun jaringan yang berkelanjutan?', options: ['Berkontribusi dan bertemu rutin dengan mentor', 'Mengirim pesan massal', 'Menunggu dihubungi', 'Mengumpulkan kartu nama saja'], answer: 0, why: 'Kontribusi membangun kepercayaan.' }
          ]
        }
      ]
    }
  ]
});
