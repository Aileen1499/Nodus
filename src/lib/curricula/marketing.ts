import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const MARKETING_CURRICULUM = buildPath({
  id: 'curriculum-pemasaran-brand',
  topic: 'Pemasaran, Brand & Pertumbuhan Pelanggan',
  description:
    'Dari memahami pelanggan, merumuskan posisi merek, memilih saluran, sampai mengukur hasil. Kerangka pemasaran yang bisa langsung dipraktikkan usaha kecil dan menengah.',
  stages: [
    {
      title: 'Memahami Pasar',
      lessons: [
        {
          id: 'mk-1-segmentasi',
          label: 'Segmentasi, Targeting, Positioning (STP)',
          domain: 'Bisnis',
          summary: 'Memilih siapa yang Anda layani dan bagaimana Anda ingin diingat. Mencoba melayani semua orang berarti tidak menarik bagi siapa pun.',
          model: 'STP Framework (Segmentation, Targeting, Positioning)',
          analogy: 'Memancing dengan jaring besar di laut luas mungkin menangkap banyak ikan, tetapi tak ada yang Anda inginkan. Memilih ikan target dan umpan yang tepat menghasilkan tangkapan lebih sedikit tapi bernilai tinggi.',
          insight: 'Segmentasi membagi pasar berdasar kebutuhan, perilaku, atau demografi. Targeting memilih segmen yang paling menarik dan terjangkau. Positioning menentukan tempat unik di benak target. Segmen yang baik terukur, terjangkau, cukup besar, dan berbeda responsnya.',
          cross: { text: 'Pemasaran x Psikologi Persepsi', domains: ['Bisnis', 'Psikologi'], insight: 'Positioning terjadi di pikiran pelanggan, bukan di brosur. Satu kata yang melekat sering lebih kuat daripada daftar fitur.' },
          story: { who: 'Katering Sehat Pekerja Kantoran (ilustrasi)', story: 'Katering umum bersaing harga dengan puluhan pesaing. Setelah memilih segmen "pekerja kantor yang diet rendah gula" dan menawarkan menu mingguan dengan label kalori, harga bisa 25% lebih tinggi dan pelanggan lebih setia.', takeaway: 'Menyempit ke segmen yang jelas sering menaikkan harga yang berani Anda patok dan menurunkan biaya pemasaran.' },
          actions: ['Tuliskan tiga segmen pelanggan potensial dengan kebutuhan masing-masing.', 'Pilih satu segmen utama berdasar ukuran, daya beli, dan keterjangkauan.', 'Rumuskan positioning satu kalimat: Untuk [segmen] yang [kebutuhan], kami adalah [kategori] yang [manfaat unik].'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Semua Orang Adalah Pelanggan',
            context: 'Toko kopi Anda baru buka. Mitra menyarankan menargetkan semua kalangan agar ramai.',
            dilemma: 'Bagaimana menentukan target?',
            choices: [
              { text: 'Pilih satu segmen inti (misalnya pekerja remote di area ini) dan rancang pengalaman, harga, dan promosi untuk mereka lebih dulu.', consequence: 'Pesan jelas, mudah dibicarakan, dan komunitas inti terbentuk.', explanation: 'Fokus awal memperkuat pesan. Segmen lain bisa dilayani kemudian.', best: true },
              { text: 'Targetkan semua orang dengan pesan umum.', consequence: 'Pesan hambar, kalah dari pesaing yang spesifik.', explanation: 'Tanpa fokus, tak ada alasan kuat untuk dipilih.' },
              { text: 'Tiru target pesaing terbesar.', consequence: 'Anda berperang di wilayah mereka dengan sumber daya lebih kecil.', explanation: 'Positioning harus menemukan celah, bukan menyerang di kekuatan lawan.' }
            ]
          },
          quiz: [
            { q: 'Apa tujuan positioning?', options: ['Menurunkan harga', 'Menempati tempat unik di benak target pelanggan', 'Mengurangi biaya produksi', 'Menambah karyawan'], answer: 1, why: 'Positioning menentukan bagaimana target mengingat dan membedakan merek Anda.' },
            { q: 'Mana yang merupakan ciri segmen yang baik?', options: ['Terlalu kecil untuk diukur', 'Responsnya sama dengan segmen lain', 'Terukur, terjangkau, dan berbeda responsnya', 'Tidak bisa dijangkau'], answer: 2, why: 'Segmen berguna jika bisa diukur, dijangkau, dan memiliki respons yang berbeda.' }
          ]
        },
        {
          id: 'mk-2-jtbd',
          label: 'Jobs To Be Done: Mengapa Orang Membeli',
          domain: 'Bisnis',
          summary: 'Pelanggan tidak membeli produk, mereka "mempekerjakan" produk untuk menyelesaikan tugas. Memahami tugas itu membuka ide produk dan pesan yang tepat.',
          model: 'Jobs To Be Done (Clayton Christensen)',
          analogy: 'Orang tidak membeli bor, mereka butuh lubang di dinding, bahkan lebih jauh: rak yang tergantung rapi. Jika Anda tahu tugas sebenarnya, Anda bisa menawarkan solusi yang lebih baik daripada bor, misalnya jasa pemasangan.',
          insight: 'Kerangka JTBD menggali tugas fungsional, emosional, dan sosial yang ingin diselesaikan pelanggan. Pesaing sejati bukan hanya produk sejenis, melainkan semua cara lain menyelesaikan tugas yang sama, termasuk tidak melakukan apa-apa.',
          cross: { text: 'JTBD x Riset Kualitatif', domains: ['Bisnis', 'Psikologi'], insight: 'Wawancara tentang momen pembelian terakhir (apa yang terjadi, apa yang dicoba sebelumnya) lebih jujur daripada survei opini.' },
          story: { who: 'Milkshake di Jalur Pagi (ilustrasi populer dari studi Christensen)', story: 'Sebuah restoran cepat saji menemukan banyak milkshake terjual pagi hari. Pelanggan "mempekerjakan" milkshake untuk menemani perjalanan panjang yang membosankan dan menahan lapar. Perbaikan: lebih kental dan tahan lama diminum, bukan rasa baru.', takeaway: 'Perbaikan terbesar datang dari memahami tugas, bukan dari menebak preferensi.' },
          actions: ['Wawancarai lima pelanggan: apa yang terjadi sebelum mereka membeli dari Anda?', 'Tuliskan tugas fungsional, emosional, dan sosial yang diselesaikan produk Anda.', 'Daftar tiga alternatif non-produk yang bersaing dengan Anda.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Fitur Baru',
            context: 'Pelanggan meminta banyak fitur tambahan. Tim ingin menambahkan semuanya.',
            dilemma: 'Bagaimana memutuskan?',
            choices: [
              { text: 'Kembali ke tugas utama pelanggan, lalu hanya bangun fitur yang membantu tugas itu lebih tuntas.', consequence: 'Produk tetap fokus dan pengalaman utama membaik.', explanation: 'Fitur diukur dari kontribusinya pada tugas, bukan jumlah permintaan.', best: true },
              { text: 'Tambah semua fitur yang diminta.', consequence: 'Produk kompleks, biaya naik, inti kabur.', explanation: 'Menuruti semua permintaan tanpa kerangka menghasilkan produk tak fokus.' },
              { text: 'Abaikan seluruh masukan.', consequence: 'Anda kehilangan sinyal tentang kebutuhan nyata.', explanation: 'Masukan penting, tetapi perlu ditafsirkan melalui tugas.' }
            ]
          },
          quiz: [
            { q: 'Dalam JTBD, apa yang dilakukan pelanggan terhadap produk?', options: ['Mengoleksi', 'Mempekerjakan untuk menyelesaikan tugas', 'Membandingkan harga saja', 'Menghindari'], answer: 1, why: 'Pelanggan memakai produk untuk menyelesaikan tugas tertentu.' },
            { q: 'Siapa pesaing sejati menurut JTBD?', options: ['Hanya produk sejenis', 'Semua cara menyelesaikan tugas yang sama', 'Pemerintah', 'Tidak ada'], answer: 1, why: 'Termasuk alternatif non-produk dan tidak melakukan apa pun.' }
          ]
        },
        {
          id: 'mk-3-proposisi',
          label: 'Proposisi Nilai dan Pesan yang Jelas',
          domain: 'Komunikasi',
          summary: 'Merumuskan alasan singkat dan meyakinkan mengapa pelanggan harus memilih Anda, dalam bahasa pelanggan.',
          model: 'Value Proposition Canvas',
          analogy: 'Proposisi nilai adalah kunci yang pas untuk gembok pelanggan. Gembok punya bentuk (masalah, keinginan), kunci Anda harus punya gerigi yang sesuai (pereda masalah, penambah manfaat). Kunci bagus tapi tak cocok tetap tak membuka.',
          insight: 'Canvas ini memasangkan profil pelanggan (tugas, rasa sakit, keuntungan) dengan peta nilai (produk, pereda rasa sakit, penambah keuntungan). Pesan efektif konkret, spesifik, dan menggunakan bahasa pelanggan, bukan istilah internal.',
          cross: { text: 'Pesan x Retorika', domains: ['Komunikasi', 'Bisnis'], insight: 'Kejelasan mengalahkan kecerdikan. Pelanggan memutuskan dalam hitungan detik apakah pesan relevan baginya.' },
          story: { who: 'Jasa Laundry Kos-kosan (ilustrasi)', story: 'Slogan awal "Laundry Berkualitas" tak bergerak. Diganti "Cucian kembali bersih dalam 24 jam, antar jemput ke kamar kos" dan tingkat pemesanan naik signifikan karena menjawab rasa sakit nyata anak kos.', takeaway: 'Pesan spesifik dan terukur lebih meyakinkan daripada kata sifat umum.' },
          actions: ['Tuliskan tiga rasa sakit utama pelanggan Anda dengan kata-kata mereka.', 'Tulis satu kalimat proposisi nilai yang menyebut hasil dan jangka waktu.', 'Uji dua versi pesan pada 20 orang dan catat yang lebih jelas.'],
          level: 'Pemula', time: '4 min',
          scenario: {
            title: 'Dilema Slogan Indah tapi Kabur',
            context: 'Agensi menawarkan slogan elegan: "Menginspirasi Hidup Anda". Pesaing memakai pesan konkret.',
            dilemma: 'Mana yang dipilih?',
            choices: [
              { text: 'Uji pesan konkret yang menyebut hasil nyata bagi pelanggan dan pilih berdasarkan respons.', consequence: 'Pesan konkret menghasilkan klik dan pertanyaan lebih banyak.', explanation: 'Pesan yang bisa dibuktikan menang atas pesan yang hanya terdengar bagus.', best: true },
              { text: 'Pakai slogan elegan karena terdengar premium.', consequence: 'Pelanggan baru tidak paham apa yang Anda jual.', explanation: 'Kejelasan mendahului estetika.' },
              { text: 'Pasang semua pesan sekaligus.', consequence: 'Pesan kacau dan tak ada pelajaran yang bisa diambil.', explanation: 'Tanpa pengujian terpisah, tak bisa tahu mana yang efektif.' }
            ]
          },
          quiz: [
            { q: 'Pesan pemasaran yang efektif umumnya...', options: ['Abstrak dan puitis', 'Konkret, spesifik, dalam bahasa pelanggan', 'Panjang dan teknis', 'Menyebut semua fitur'], answer: 1, why: 'Kejelasan dan kekonkretan membuat pesan cepat dipahami.' },
            { q: 'Apa yang dipasangkan dalam Value Proposition Canvas?', options: ['Harga dan biaya', 'Profil pelanggan dan peta nilai', 'Laba dan rugi', 'Merek dan logo'], answer: 1, why: 'Canvas mencocokkan kebutuhan pelanggan dengan apa yang ditawarkan.' }
          ]
        }
      ]
    },
    {
      title: 'Menjangkau & Meyakinkan',
      lessons: [
        {
          id: 'mk-4-funnel',
          label: 'Funnel Pelanggan: Dari Sadar sampai Beli Ulang',
          domain: 'Bisnis',
          summary: 'Memetakan perjalanan pelanggan agar Anda tahu di tahap mana calon pelanggan paling banyak hilang.',
          model: 'AARRR (Acquisition, Activation, Retention, Revenue, Referral)',
          analogy: 'Funnel seperti corong air: lebar di atas, sempit di bawah. Kebocoran di tengah corong lebih merugikan daripada air yang kurang di atas. Menambal kebocoran membuat setiap tetes iklan lebih berharga.',
          insight: 'Mengukur konversi tiap tahap menunjukkan titik penyempitan terbesar. Perbaikan di tahap dengan kehilangan terbesar biasanya memberi dampak terbesar. Fokus pada satu metrik utama per tahap mencegah kebingungan data.',
          cross: { text: 'Funnel x Analitik Data', domains: ['Bisnis', 'Data & Analitik'], insight: 'Data konversi per tahap lebih berguna daripada total pengunjung. Keputusan berbasis tahap, bukan total.' },
          story: { who: 'Toko Online Skincare (ilustrasi)', story: '1.000 pengunjung, 100 memasukkan ke keranjang, 20 membeli. Tahap terbesar bocor: keranjang ke pembayaran (20%). Menyederhanakan checkout dan menambah opsi bayar menaikkan menjadi 35% tanpa menambah iklan.', takeaway: 'Memperbaiki titik paling bocor lebih murah daripada membeli lebih banyak pengunjung.' },
          actions: ['Gambar funnel Anda dalam 5 tahap dan beri angka tiap tahap bulan lalu.', 'Tandai tahap dengan penurunan terbesar.', 'Rancang satu eksperimen mingguan untuk tahap tersebut.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Tambah Iklan atau Perbaiki Konversi',
            context: 'Pengunjung 1.000 per bulan, konversi 2%. Anggaran iklan bisa dinaikkan dua kali lipat.',
            dilemma: 'Mana langkah pertama?',
            choices: [
              { text: 'Periksa funnel dan perbaiki tahap yang paling bocor sebelum menambah lalu lintas.', consequence: 'Konversi naik ke 3%, setara 50% lebih banyak pesanan tanpa tambahan biaya iklan.', explanation: 'Menambah lalu lintas ke funnel bocor memboroskan anggaran.', best: true },
              { text: 'Gandakan iklan langsung.', consequence: 'Pesanan naik tetapi CAC tetap tinggi.', explanation: 'Masalah konversi memperbesar biaya dengan skala.' },
              { text: 'Turunkan harga tanpa mengetahui penyebab.', consequence: 'Margin turun tanpa menyelesaikan akar masalah.', explanation: 'Tanpa diagnosis, solusi acak.' }
            ]
          },
          quiz: [
            { q: '1.000 pengunjung, 20 pembeli. Berapa konversi?', options: ['0,2%', '2%', '20%', '5%'], answer: 1, why: '20 / 1.000 = 2%.' },
            { q: 'Di mana sebaiknya perbaikan funnel dimulai?', options: ['Tahap dengan kehilangan terbesar', 'Tahap yang paling mudah dilihat', 'Logo', 'Selalu tahap awal'], answer: 0, why: 'Tahap yang paling bocor menawarkan dampak terbesar.' }
          ]
        },
        {
          id: 'mk-5-konten',
          label: 'Pemasaran Konten dan Kepercayaan',
          domain: 'Komunikasi',
          summary: 'Membangun kepercayaan lewat konten yang berguna sehingga pelanggan datang karena percaya, bukan karena didorong iklan.',
          model: 'Trust Equation & Content Flywheel',
          analogy: 'Konten yang baik seperti toko yang memberi sampel gratis: pembeli mencicipi dulu, percaya, lalu kembali membeli. Iklan terus menerus tanpa kepercayaan seperti pedagang yang berteriak di pasar ramai.',
          insight: 'Kepercayaan tumbuh dari kredibilitas, keandalan, keakraban, dan rendahnya kepentingan diri yang terlihat. Konten yang menyelesaikan masalah nyata pelanggan menumpuk nilai (aset), berbeda dengan iklan berbayar yang berhenti saat anggaran habis.',
          cross: { text: 'Konten x Psikologi Reciprocity', domains: ['Komunikasi', 'Psikologi'], insight: 'Memberi manfaat lebih dulu memicu keinginan membalas. Panduan gratis yang berguna menumbuhkan niat membeli.' },
          story: { who: 'Toko Alat Kebun (ilustrasi)', story: 'Toko membuat video pendek perawatan tanaman tiap minggu. Setelah enam bulan, 40% pelanggan baru datang dari pencarian dan video. Biaya akuisisi turun karena konten lama tetap bekerja.', takeaway: 'Konten adalah aset yang berbunga, iklan adalah sewa.' },
          actions: ['Catat 10 pertanyaan paling sering dari pelanggan.', 'Buat satu konten jawaban untuk tiap pertanyaan dalam sebulan.', 'Pasang ajakan bertindak sederhana di akhir setiap konten.'],
          level: 'Pemula', time: '4 min',
          scenario: {
            title: 'Dilema Konten Viral vs Konten Berguna',
            context: 'Tim ingin mengejar tren viral. Pelanggan sebenarnya sering menanyakan hal praktis.',
            dilemma: 'Mana prioritasnya?',
            choices: [
              { text: 'Prioritaskan konten yang menjawab pertanyaan pelanggan, sisipkan tren hanya bila relevan dengan target.', consequence: 'Penonton lebih sedikit tapi konversi tinggi dan konten bertahan lama.', explanation: 'Relevansi bagi target lebih bernilai daripada jangkauan yang tak berkonversi.', best: true },
              { text: 'Kejar viral setiap minggu.', consequence: 'Jangkauan besar, penjualan tidak bergerak.', explanation: 'Perhatian tidak sama dengan niat membeli.' },
              { text: 'Tidak membuat konten sama sekali.', consequence: 'Anda bergantung penuh pada iklan berbayar.', explanation: 'Tanpa aset konten, biaya akuisisi cenderung naik.' }
            ]
          },
          quiz: [
            { q: 'Mengapa konten berguna dianggap aset?', options: ['Karena gratis', 'Karena terus bekerja mendatangkan pelanggan setelah dibuat', 'Karena wajib', 'Karena viral'], answer: 1, why: 'Konten tetap ditemukan dan memberi manfaat lama setelah dipublikasikan.' },
            { q: 'Unsur apa yang membangun kepercayaan?', options: ['Kredibilitas dan keandalan', 'Diskon besar', 'Slogan panjang', 'Logo berwarna'], answer: 0, why: 'Kredibilitas dan keandalan inti kepercayaan.' }
          ]
        }
      ]
    },
    {
      title: 'Membangun Merek yang Bertahan',
      lessons: [
        {
          id: 'mk-6-brand',
          label: 'Ekuitas Merek dan Konsistensi',
          domain: 'Bisnis',
          summary: 'Merek adalah janji yang konsisten ditepati. Ekuitas merek memungkinkan harga lebih tinggi dan loyalitas lebih kuat.',
          model: 'Brand Equity (Keller) & Brand Promise',
          analogy: 'Merek seperti reputasi orang: dibangun lewat ribuan tindakan kecil yang konsisten, dan bisa runtuh karena satu tindakan buruk. Logo hanya nama panggilan, reputasi adalah merek sebenarnya.',
          insight: 'Ekuitas merek tumbuh dari kesadaran, asosiasi unik, kualitas yang dipersepsikan, dan loyalitas. Konsistensi pesan dan pengalaman di setiap titik temu lebih penting daripada kampanye besar sesaat.',
          cross: { text: 'Merek x Ekonomi Harga', domains: ['Bisnis', 'Ekonomi'], insight: 'Merek kuat menurunkan elastisitas harga: pelanggan bersedia membayar lebih karena mengurangi risiko dan ketidakpastian.' },
          story: { who: 'Kedai Kopi Lokal Konsisten (ilustrasi)', story: 'Dua kedai kopi menjual rasa serupa. Kedai A selalu cepat, ramah, dan rapi di semua cabang. Kedai B bervariasi tiap hari. Pelanggan membayar lebih untuk A karena tahu apa yang didapat.', takeaway: 'Prediktabilitas pengalaman adalah inti nilai merek.' },
          actions: ['Tulis tiga janji merek Anda dan periksa apakah ditepati setiap hari.', 'Buat panduan singkat gaya (warna, nada bicara, standar layanan).', 'Audit lima titik temu pelanggan dan temukan satu yang tidak konsisten.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Janji yang Tak Bisa Ditepati',
            context: 'Anda menjanjikan pengiriman 24 jam, tetapi saat ramai sering terlambat.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Sesuaikan janji agar bisa selalu ditepati (misal 48 jam) sambil menaikkan kapasitas, lalu tepati kembali.', consequence: 'Kepercayaan terjaga karena janji realistis dipenuhi.', explanation: 'Lebih baik janji sederhana yang selalu ditepati daripada janji muluk yang sering gagal.', best: true },
              { text: 'Pertahankan janji 24 jam dan minta maaf tiap terlambat.', consequence: 'Keluhan menumpuk dan ulasan buruk muncul.', explanation: 'Permintaan maaf berulang menggerus kepercayaan.' },
              { text: 'Hapus semua janji pengiriman.', consequence: 'Pelanggan ragu dan beralih ke yang memberi kepastian.', explanation: 'Kepastian adalah bagian dari nilai.' }
            ]
          },
          quiz: [
            { q: 'Apa inti ekuitas merek?', options: ['Logo yang bagus', 'Janji yang konsisten ditepati', 'Banyaknya iklan', 'Harga murah'], answer: 1, why: 'Kepercayaan terbentuk dari janji yang konsisten dipenuhi.' },
            { q: 'Manfaat ekonomi merek kuat?', options: ['Harga lebih tinggi dan loyalitas lebih besar', 'Biaya selalu nol', 'Tidak perlu produk bagus', 'Pelanggan tidak pernah pergi'], answer: 0, why: 'Merek kuat mengurangi sensitivitas harga dan mendorong loyalitas.' }
          ]
        },
        {
          id: 'mk-7-ukur',
          label: 'Mengukur Pemasaran: ROI, ROAS, dan Eksperimen',
          domain: 'Data & Analitik',
          summary: 'Menjalankan eksperimen kecil, mengukur ROAS dan ROI, dan menghentikan yang tak bekerja sebelum anggaran terkuras.',
          model: 'ROAS, Marketing ROI, and A/B Testing',
          analogy: 'Pemasaran tanpa pengukuran seperti menembak di ruang gelap: sesekali kena, tetapi tidak tahu yang mana. Pengukuran menyalakan lampu agar tembakan berikutnya lebih tepat.',
          insight: 'ROAS = Pendapatan dari iklan / Biaya iklan. ROAS tinggi belum tentu untung jika margin tipis. Titik impas ROAS = 1 / margin kotor. A/B test membandingkan dua versi pada kelompok serupa dalam waktu yang sama; hasil perlu sampel cukup agar bukan kebetulan.',
          cross: { text: 'Pemasaran x Statistika', domains: ['Data & Analitik', 'Bisnis'], insight: 'Perbedaan kecil pada sampel kecil sering hanya noise. Menunggu sampel cukup mencegah keputusan salah.' },
          story: { who: 'Iklan Sepatu Online (ilustrasi)', story: 'ROAS iklan 3x tampak bagus, tetapi margin kotor hanya 30% sehingga impas ROAS = 1/0,3 = 3,3. Iklan itu sebenarnya rugi. Setelah menaikkan margin lewat bundel, iklan menjadi untung.', takeaway: 'ROAS harus dibaca bersama margin, bukan sendirian.' },
          actions: ['Hitung titik impas ROAS Anda dari margin kotor.', 'Jalankan satu A/B test sederhana dengan satu perubahan saja.', 'Tetapkan aturan berhenti: kapan iklan dihentikan jika di bawah impas.'],
          level: 'Mahir', time: '6 min', tool: 'margin',
          scenario: {
            title: 'Dilema Iklan yang Tampak Berhasil',
            context: 'ROAS 2,5x, margin kotor 35%. Tim ingin menaikkan anggaran.',
            dilemma: 'Apa langkah tepat?',
            choices: [
              { text: 'Hitung titik impas ROAS (1/0,35 = 2,86). Karena 2,5 di bawahnya, perbaiki margin atau konversi dahulu.', consequence: 'Anda menghindari pembesaran anggaran pada iklan yang sebenarnya rugi.', explanation: 'Keputusan skala harus berbasis margin, bukan ROAS mentah.', best: true },
              { text: 'Naikkan anggaran karena ROAS di atas 2.', consequence: 'Rugi membesar seiring belanja.', explanation: 'ROAS di bawah impas berarti setiap rupiah iklan menggerus laba.' },
              { text: 'Hentikan semua iklan.', consequence: 'Anda kehilangan saluran yang bisa diperbaiki.', explanation: 'Perbaiki variabel yang bisa diubah dulu.' }
            ]
          },
          quiz: [
            { q: 'Pendapatan dari iklan Rp 30 juta, biaya iklan Rp 10 juta. Berapa ROAS?', options: ['0,33', '3', '20', '1'], answer: 1, why: '30 / 10 = 3.' },
            { q: 'Margin kotor 25%. Berapa titik impas ROAS?', options: ['2', '4', '0,25', '25'], answer: 1, why: '1 / 0,25 = 4.' }
          ]
        }
      ]
    }
  ]
});
