import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data nyata.
// Ketentuan pajak berubah; semua pelajaran pajak menyarankan memeriksa aturan terbaru dengan konsultan pajak.
export const MONETIZE_CURRICULUM = buildPath({
  id: 'curriculum-monetisasi-keahlian',
  topic: 'Monetisasi Keahlian: Konsultan, Freelance & Jasa Profesional',
  description:
    'Mengubah ilmu bisnis, keuangan, atau ekonomi menjadi penghasilan tambahan: merancang penawaran, menetapkan tarif, mendapat klien, menulis proposal, mengelola kapasitas, urusan pajak dan kontrak, pendapatan berulang, hingga membangun tim.',
  stages: [
    {
      title: 'Merancang Penawaran',
      lessons: [
        {
          id: 'ms-1-penawaran',
          label: 'Dari Keahlian ke Penawaran yang Dibeli',
          domain: 'Bisnis',
          summary: 'Klien tidak membeli ilmu Anda, mereka membeli hasil yang mereka inginkan. Rumuskan penawaran berbasis hasil untuk siapa dan masalah apa.',
          model: 'Value Proposition dan Productized Service',
          analogy: 'Dokter spesialis dibayar mahal bukan karena membaca buku kedokteran, tetapi karena menyelesaikan satu masalah tertentu dengan cepat dan dapat diandalkan.',
          insight: 'Penawaran yang kuat menyebutkan siapa yang dilayani, masalah spesifik, hasil yang terukur, dan batas lingkup. Jasa terproduktisasi (paket tetap dengan lingkup dan harga jelas, misalnya "Audit Margin Produk 2 Minggu") lebih mudah dijual dan diulang daripada "konsultasi apa saja". Spesialisasi sempit membuat Anda dianggap ahli dan mengurangi persaingan harga.',
          cross: { text: 'Penawaran x Psikologi Keputusan', domains: ['Bisnis', 'Psikologi'], insight: 'Pilihan yang jelas dan terbatas lebih mudah diputuskan. Tiga paket dengan nama dan hasil spesifik mengurangi kelumpuhan memilih.' },
          story: { who: 'Mahasiswa Akuntansi Membantu UMKM (ilustrasi)', story: 'Seorang mahasiswa menawarkan "bantuan keuangan" dan sulit mendapat klien. Setelah mengubahnya menjadi "Rapikan pembukuan toko online dalam 7 hari: laporan laba rugi dan arus kas bulanan, Rp 1,5 juta", ia mendapat enam klien dalam sebulan.', takeaway: 'Penawaran spesifik dengan hasil dan harga jelas lebih mudah dibeli.' },
          actions: ['Tulis kalimat: "Saya membantu [siapa] mencapai [hasil] dalam [waktu]."', 'Rancang satu paket tetap dengan lingkup dan harga.', 'Tuliskan apa yang tidak termasuk dalam paket.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Penawaran yang Terlalu Luas',
            context: 'Anda menawarkan "konsultasi bisnis dan keuangan" tetapi calon klien bingung apa yang Anda kerjakan.',
            dilemma: 'Bagaimana memperbaikinya?',
            choices: [
              { text: 'Pilih satu segmen dan satu masalah, tulis hasil terukur dan paket tetap, lalu uji ke 5 calon klien.', consequence: 'Dua dari lima calon klien langsung bertanya harga dan jadwal.', explanation: 'Kejelasan hasil dan lingkup memudahkan keputusan membeli.', best: true },
              { text: 'Tambahkan lebih banyak layanan agar menarik semua orang.', consequence: 'Penawaran makin kabur dan tidak ada yang membeli.', explanation: 'Terlalu luas menurunkan kredibilitas.' },
              { text: 'Tunggu sampai punya sertifikasi lengkap.', consequence: 'Anda menunda berbulan-bulan tanpa umpan balik pasar.', explanation: 'Pasar memberi umpan balik lebih cepat daripada persiapan tanpa batas.' }
            ]
          },
          quiz: [
            { q: 'Apa yang membuat jasa terproduktisasi mudah dijual?', options: ['Lingkup, hasil, dan harga yang jelas', 'Harga yang selalu murah', 'Deskripsi yang panjang', 'Menawarkan semuanya'], answer: 0, why: 'Paket jelas mengurangi ketidakpastian pembeli.' },
            { q: 'Klien sebenarnya membeli...', options: ['Hasil yang mereka inginkan', 'Jam kerja Anda', 'Gelar Anda', 'Dokumen Anda'], answer: 0, why: 'Nilai ada pada hasil, bukan usaha.' }
          ]
        },
        {
          id: 'ms-2-tarif',
          label: 'Menetapkan Tarif: Per Jam, Per Proyek, atau Berbasis Nilai',
          domain: 'Bisnis',
          summary: 'Tarif yang terlalu rendah menarik klien yang salah dan membuat Anda kelelahan. Hitung tarif dari target penghasilan dan nilai hasil.',
          model: 'Cost-Plus, Hourly Rate, dan Value-Based Pricing',
          analogy: 'Tukang kunci yang membuka pintu dalam dua menit tetap meminta tarif tetap, karena klien membeli kemampuan menyelesaikan masalah, bukan lamanya waktu.',
          insight: 'Tarif per jam dasar = (target penghasilan bulanan + biaya usaha) / jam yang benar-benar bisa ditagih. Tarif per proyek menggeser risiko waktu kepada Anda tetapi menguntungkan bila Anda efisien. Tarif berbasis nilai mengaitkan harga dengan hasil bagi klien (misalnya berbagi dari penghematan atau tambahan laba). Beri tiga pilihan paket agar klien memilih di antara pilihan, bukan antara membeli dan tidak.',
          cross: { text: 'Tarif x Jangkar Harga', domains: ['Bisnis', 'Psikologi'], insight: 'Paket tertinggi berfungsi sebagai jangkar sehingga paket menengah terasa wajar.' },
          story: { who: 'Konsultan Keuangan Paruh Waktu (ilustrasi)', story: 'Target penghasilan Rp 15 juta per bulan, biaya usaha Rp 3 juta, jam tertagih 80 per bulan: tarif dasar (15 + 3) / 80 = Rp 225 ribu per jam. Untuk proyek yang menghemat klien Rp 60 juta setahun, ia mengusulkan tarif proyek Rp 12 juta, jauh di atas tarif jam namun kecil dibanding nilai yang diterima klien.', takeaway: 'Tarif jam adalah lantai; nilai bagi klien adalah langit-langitnya.' },
          actions: ['Hitung tarif dasar per jam Anda dengan rumus di atas.', 'Rancang tiga paket (dasar, standar, lengkap) untuk satu jasa.', 'Pakai kalkulator Harga & Diskon di tab Alat untuk menguji margin tiap paket.'],
          level: 'Menengah', time: '6 min', tool: 'pricing',
          scenario: {
            title: 'Dilema Klien Menawar Tarif Setengah',
            context: 'Klien meminta tarif separuh dengan alasan "projek pertama".',
            dilemma: 'Bagaimana menanggapi?',
            choices: [
              { text: 'Pertahankan tarif, tawarkan lingkup lebih kecil atau paket lebih ringan untuk menyesuaikan anggaran, dan tunjukkan nilai hasilnya.', consequence: 'Klien memilih paket dasar dengan tarif penuh dan menambah paket di bulan berikutnya.', explanation: 'Menyesuaikan lingkup, bukan merendahkan tarif, melindungi nilai Anda.', best: true },
              { text: 'Setujui separuh agar klien senang.', consequence: 'Klien mengharapkan tarif itu selamanya dan Anda kelelahan.', explanation: 'Diskon tanpa pertukaran menetapkan ekspektasi harga rendah.' },
              { text: 'Tolak tanpa alternatif.', consequence: 'Anda kehilangan peluang membangun hubungan.', explanation: 'Alternatif lingkup memberi jalan tengah.' }
            ]
          },
          quiz: [
            { q: 'Target Rp 12 juta per bulan, biaya Rp 3 juta, jam tertagih 60. Tarif dasar per jam?', options: ['Rp 250 ribu', 'Rp 200 ribu', 'Rp 150 ribu', 'Rp 300 ribu'], answer: 0, why: '(12 + 3) juta / 60 jam = Rp 250 ribu.' },
            { q: 'Mengapa menawarkan tiga paket membantu penjualan?', options: ['Klien memilih di antara pilihan, bukan antara beli dan tidak', 'Paket selalu lebih murah', 'Lebih sedikit pekerjaan', 'Klien tidak perlu membandingkan'], answer: 0, why: 'Pilihan terstruktur mengubah pertanyaan keputusan.' }
          ]
        },
        {
          id: 'ms-3-klien',
          label: 'Mendapatkan Klien Pertama dan Berikutnya',
          domain: 'Bisnis',
          summary: 'Klien pertama datang dari jaringan, bukan iklan. Bangun rutinitas pencarian klien yang dapat diulang.',
          model: 'Sales Pipeline untuk Jasa',
          analogy: 'Mencari klien seperti menanam sawah bertahap: sebagian bibit baru ditanam, sebagian sedang tumbuh, sebagian siap panen. Berhenti menanam saat panen membuat panen berikutnya kosong.',
          insight: 'Sumber klien awal paling efektif: orang yang sudah mengenal Anda, rujukan, dan komunitas spesifik. Bangun pipeline dengan tahap jelas (kontak, percakapan, proposal, tutup) dan target aktivitas mingguan. Bukti sosial (studi kasus, testimoni) memperpendek siklus penjualan. Hubungi orang dengan masalah spesifik yang Anda selesaikan, bukan menawarkan diri secara umum.',
          cross: { text: 'Penjualan x Psikologi Sosial', domains: ['Bisnis', 'Psikologi'], insight: 'Orang lebih percaya rekomendasi sesama daripada iklan. Satu klien puas yang merekomendasikan lebih berharga dari ratusan unggahan.' },
          story: { who: 'Mahasiswa MBA Menjadi Konsultan Pajak Usaha Kecil (ilustrasi)', story: 'Ia mengirim 10 pesan personal per minggu kepada pemilik usaha yang ia kenal, menawarkan tinjauan kepatuhan gratis 30 menit. Dalam enam minggu didapat 14 percakapan, 5 proposal, dan 3 klien berbayar, salah satunya merujuk dua klien lagi.', takeaway: 'Aktivitas konsisten pada jaringan hangat mengalahkan promosi sporadis.' },
          actions: ['Daftar 30 orang di jaringan Anda yang mungkin punya masalah yang Anda selesaikan.', 'Kirim 5 pesan personal minggu ini dengan tawaran spesifik.', 'Catat tiap kontak di pipeline sederhana dengan tahap jelas.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Belum Ada Klien dan Portofolio',
            context: 'Anda belum punya testimoni dan ragu memulai menjual.',
            dilemma: 'Apa langkah awal?',
            choices: [
              { text: 'Tawarkan 2 sampai 3 proyek percontohan kepada orang yang sudah dikenal dengan syarat testimoni dan izin menjadikannya studi kasus.', consequence: 'Anda mendapatkan bukti nyata dan referensi untuk penjualan berikutnya.', explanation: 'Proyek awal membeli bukti sosial yang menutup keraguan klien baru.', best: true },
              { text: 'Habiskan dana untuk iklan sebelum punya bukti.', consequence: 'Iklan tidak mengonversi karena belum ada kepercayaan.', explanation: 'Tanpa bukti, iklan mahal dan lemah.' },
              { text: 'Tunggu sampai merasa siap sempurna.', consequence: 'Berbulan-bulan berlalu tanpa pendapatan.', explanation: 'Siap sempurna tidak pernah datang.' }
            ]
          },
          quiz: [
            { q: 'Sumber klien awal paling efektif untuk jasa profesional?', options: ['Jaringan dan rujukan', 'Spanduk', 'Undian berhadiah', 'Diskon besar-besaran'], answer: 0, why: 'Kepercayaan sudah ada pada jaringan hangat.' },
            { q: 'Mengapa pipeline penting?', options: ['Agar pencarian klien berkelanjutan, bukan sesekali', 'Agar laporan lebih tebal', 'Karena aturan pajak', 'Untuk menaikkan harga'], answer: 0, why: 'Pipeline menjaga aliran klien stabil.' }
          ]
        }
      ]
    },
    {
      title: 'Mengelola Klien dan Kapasitas',
      lessons: [
        {
          id: 'ms-4-proposal',
          label: 'Proposal, Lingkup Kerja, dan Mencegah Scope Creep',
          domain: 'Hukum',
          summary: 'Lingkup yang kabur membuat pekerjaan melebar tanpa bayaran. Tulis proposal yang menutup ambiguitas.',
          model: 'Statement of Work dan Change Control',
          analogy: 'Kontrak renovasi yang tidak menyebut jumlah stopkontak akan berakhir dengan perdebatan. Setiap hal yang tidak ditulis menjadi ruang sengketa.',
          insight: 'Proposal yang baik memuat masalah, hasil yang dijanjikan, lingkup dan batasan, jadwal, harga, termin pembayaran, jumlah revisi, tanggung jawab klien (data, persetujuan), dan mekanisme perubahan (change request dengan biaya tambahan). Pembayaran di muka sebagian (misalnya 30 sampai 50 persen) mengurangi risiko dan menunjukkan komitmen klien. Konsultasikan klausul hukum penting dengan penasihat hukum.',
          cross: { text: 'Kontrak x Psikologi Hubungan', domains: ['Hukum', 'Psikologi'], insight: 'Kejelasan di awal menjaga hubungan baik. Kebanyakan konflik berasal dari harapan yang tidak sama, bukan niat buruk.' },
          story: { who: 'Konsultan Strategi dan Revisi Tanpa Batas (ilustrasi)', story: 'Proyek Rp 8 juta berubah menjadi tujuh putaran revisi dan 40 jam tambahan karena kontrak tidak membatasi revisi. Pada proyek berikutnya ia menulis dua putaran revisi termasuk dan biaya per revisi tambahan. Konflik hilang dan margin naik.', takeaway: 'Batas yang tertulis melindungi hubungan dan margin.' },
          actions: ['Buat templat proposal satu halaman dengan semua unsur di atas.', 'Tentukan jumlah revisi yang termasuk dan tarif revisi tambahan.', 'Tetapkan uang muka sebelum memulai pekerjaan.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Klien Meminta Tambahan di Tengah Proyek',
            context: 'Klien meminta tambahan analisis yang tidak ada di proposal dan menganggapnya "sekalian".',
            dilemma: 'Apa respons Anda?',
            choices: [
              { text: 'Akui permintaan, rujuk lingkup tertulis, dan tawarkan change request dengan estimasi biaya dan waktu tambahan.', consequence: 'Klien menyetujui tambahan berbayar dan hubungan tetap baik.', explanation: 'Mekanisme perubahan membuat tambahan menjadi pesanan, bukan hadiah.', best: true },
              { text: 'Kerjakan saja agar klien senang.', consequence: 'Permintaan terus bertambah tanpa bayaran.', explanation: 'Scope creep gratis menggerus margin.' },
              { text: 'Tolak dengan nada keras.', consequence: 'Hubungan memburuk tanpa solusi.', explanation: 'Penolakan tanpa opsi merusak kepercayaan.' }
            ]
          },
          quiz: [
            { q: 'Scope creep adalah...', options: ['Pekerjaan melebar di luar lingkup tanpa penyesuaian biaya', 'Pengurangan harga', 'Kenaikan pajak', 'Pembatalan kontrak'], answer: 0, why: 'Permintaan tambahan tanpa kompensasi.' },
            { q: 'Cara terbaik menangani tambahan permintaan?', options: ['Change request dengan estimasi biaya dan waktu', 'Mengerjakan diam-diam', 'Mengabaikan', 'Menaikkan harga seluruh proyek tanpa bicara'], answer: 0, why: 'Perubahan dicatat dan dibayar.' }
          ]
        },
        {
          id: 'ms-5-kapasitas',
          label: 'Kapasitas, Utilisasi, dan Tarif Efektif',
          domain: 'Keuangan',
          summary: 'Jam kerja Anda terbatas. Utilisasi dan tarif efektif menentukan penghasilan nyata, bukan tarif yang tertulis.',
          model: 'Utilization Rate dan Effective Hourly Rate',
          analogy: 'Taksi dengan tarif tinggi tetapi hanya mengangkut penumpang 30 persen waktunya akan kalah dari taksi bertarif sedang yang selalu terisi.',
          insight: 'Utilisasi = jam tertagih / jam kerja total. Banyak profesional mandiri hanya 40 sampai 60 persen karena waktu mencari klien, administrasi, dan belajar. Tarif efektif = pendapatan / seluruh jam kerja (termasuk non-tagih). Meningkatkan penghasilan dapat lewat tarif, utilisasi, atau mengurangi jam tidak produktif; pilih tuas yang paling murah.',
          cross: { text: 'Kapasitas x Operasi', domains: ['Keuangan', 'Bisnis'], insight: 'Kapasitas adalah kendala utama jasa. Konsep teori kendala berlaku: perbaiki hambatan terbesar lebih dulu.' },
          story: { who: 'Auditor Lepas (ilustrasi)', story: 'Auditor lepas bertarif Rp 300 ribu per jam tetapi hanya 25 jam tertagih dari 100 jam kerja per minggu bulan itu. Tarif efektif Rp 75 ribu per jam. Dengan paket tetap, templat, dan jadwal pemasaran tetap, utilisasinya naik menjadi 55% dan tarif efektif naik lebih dari dua kali lipat tanpa menaikkan tarif.', takeaway: 'Utilisasi sering menjadi tuas termurah.' },
          actions: ['Catat jam kerja selama dua minggu dalam kategori tagih, pemasaran, administrasi.', 'Hitung utilisasi dan tarif efektif.', 'Pilih satu kegiatan non-tagih untuk diotomatisasi atau dibatasi.'],
          level: 'Menengah', time: '6 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Terlalu Sibuk Tetapi Penghasilan Tidak Naik',
            context: 'Anda bekerja 60 jam per minggu tetapi penghasilan stagnan.',
            dilemma: 'Apa yang dilakukan pertama?',
            choices: [
              { text: 'Ukur utilisasi dan tarif efektif, temukan jam yang bocor ke pekerjaan tidak tertagih, lalu perbaiki tuas termurah.', consequence: 'Anda menemukan 12 jam per minggu hilang pada revisi dan rapat tak berbayar, lalu membatasinya.', explanation: 'Data jam kerja memperlihatkan kebocoran sebenarnya.', best: true },
              { text: 'Terima lebih banyak klien tanpa menghitung.', consequence: 'Kelelahan dan kualitas turun.', explanation: 'Menambah beban pada sistem bocor memperburuk keadaan.' },
              { text: 'Turunkan tarif agar lebih banyak klien.', consequence: 'Penghasilan per jam makin turun.', explanation: 'Menurunkan tarif memperburuk tarif efektif.' }
            ]
          },
          quiz: [
            { q: 'Jam tertagih 30 dari 60 jam kerja. Utilisasi?', options: ['50%', '30%', '60%', '25%'], answer: 0, why: '30 / 60 = 50%.' },
            { q: 'Tarif efektif dihitung dari...', options: ['Pendapatan dibagi seluruh jam kerja', 'Tarif tertulis', 'Pendapatan dibagi jam tertagih saja', 'Jumlah klien'], answer: 0, why: 'Tarif efektif memasukkan jam tidak tertagih.' }
          ]
        }
      ]
    },
    {
      title: 'Kepatuhan, Pendapatan Berulang, dan Skala',
      lessons: [
        {
          id: 'ms-6-kepatuhan',
          label: 'Pembukuan, Faktur, dan Kepatuhan Pajak Freelancer',
          domain: 'Pajak',
          summary: 'Pendapatan jasa tetap perlu dicatat, ditagih dengan faktur yang rapi, dan dilaporkan sesuai ketentuan pajak yang berlaku.',
          model: 'Bookkeeping dan Tax Compliance Basics',
          analogy: 'Lalu lintas di jalan tol lebih lancar bila semua kendaraan punya plat dan mengikuti aturan. Pendapatan yang tercatat rapi memudahkan Anda mengajukan pinjaman, kontrak, dan visa.',
          insight: 'Praktik dasar: pisahkan rekening usaha dan pribadi, catat setiap pendapatan dan biaya, terbitkan faktur dengan nomor, tanggal, rincian, dan jatuh tempo, serta simpan bukti potong dari klien. Ketentuan pajak penghasilan bagi pekerja mandiri dan usaha kecil (termasuk tarif, batas omzet, dan kewajiban NPWP) dapat berubah; periksa aturan terbaru di situs Direktorat Jenderal Pajak atau tanyakan konsultan pajak sebelum memilih skema.',
          cross: { text: 'Kepatuhan x Reputasi', domains: ['Pajak', 'Bisnis'], insight: 'Klien perusahaan umumnya mewajibkan faktur dan identitas pajak yang sah; kepatuhan membuka akses ke klien yang lebih besar.' },
          story: { who: 'Desainer Lepas yang Ditolak Perusahaan Besar (ilustrasi)', story: 'Seorang desainer kehilangan kontrak Rp 40 juta dari perusahaan besar karena tidak bisa menerbitkan faktur resmi dan tidak punya identitas pajak. Setelah merapikan pembukuan dan administrasi, ia memenangkan kontrak yang sama dari klien lain.', takeaway: 'Administrasi rapi adalah syarat masuk klien bernilai besar.' },
          actions: ['Buka rekening terpisah untuk pendapatan jasa.', 'Buat templat faktur dengan nomor urut dan jatuh tempo.', 'Jadwalkan konsultasi singkat dengan konsultan pajak untuk memilih skema yang sesuai.'],
          level: 'Menengah', time: '6 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Klien Perusahaan Meminta Faktur dan Bukti Potong',
            context: 'Klien perusahaan akan membayar Rp 25 juta tetapi mensyaratkan faktur resmi dan administrasi pajak yang tertib.',
            dilemma: 'Bagaimana menyikapinya?',
            choices: [
              { text: 'Siapkan faktur rapi dan identitas pajak, tanyakan skema yang berlaku kepada konsultan pajak, lalu catat dan laporkan pendapatan sesuai aturan.', consequence: 'Pembayaran lancar dan klien menawarkan kontrak berulang.', explanation: 'Kepatuhan membangun kepercayaan dan membuka kerja sama jangka panjang.', best: true },
              { text: 'Minta dibayar tunai tanpa dokumen.', consequence: 'Klien menolak dan Anda kehilangan kontrak.', explanation: 'Perusahaan perlu dokumen untuk pembukuan dan pajaknya.' },
              { text: 'Abaikan pelaporan karena nilainya kecil.', consequence: 'Risiko sanksi dan kesulitan saat mengajukan pinjaman.', explanation: 'Pendapatan tidak dilaporkan menimbulkan risiko hukum.' }
            ]
          },
          quiz: [
            { q: 'Mengapa memisahkan rekening usaha dan pribadi penting?', options: ['Memudahkan pencatatan dan bukti pendapatan', 'Menghindari semua pajak', 'Menaikkan bunga', 'Karena aturan toko online'], answer: 0, why: 'Pemisahan membuat catatan bersih dan dapat diverifikasi.' },
            { q: 'Sebelum memilih skema pajak, langkah terbaik?', options: ['Memeriksa aturan terbaru dan bertanya ke konsultan pajak', 'Menebak berdasarkan teman', 'Menunggu sanksi', 'Mengabaikan'], answer: 0, why: 'Aturan pajak berubah sehingga perlu diverifikasi.' }
          ]
        },
        {
          id: 'ms-7-berulang',
          label: 'Retainer dan Pendapatan Berulang',
          domain: 'Bisnis',
          summary: 'Pendapatan proyek naik turun. Retainer bulanan mengubah proyek sekali jadi arus kas yang dapat diprediksi.',
          model: 'Recurring Revenue dan Retainer',
          analogy: 'Warung yang pembelinya berlangganan harian lebih tenang daripada warung yang menunggu pembeli acak. Anda tahu sebagian omzet sudah pasti sebelum bulan dimulai.',
          insight: 'Retainer adalah biaya bulanan tetap untuk akses atau hasil berkelanjutan (laporan bulanan, tinjauan keuangan, konsultasi terjadwal). Keuntungannya: arus kas stabil, perencanaan kapasitas lebih mudah, dan nilai bisnis lebih tinggi. Kunci: definisikan hasil bulanan yang jelas, bukan "jam tersedia", dan evaluasi berkala agar klien merasakan nilai. Metrik: Monthly Recurring Revenue dan churn.',
          cross: { text: 'Pendapatan Berulang x Valuasi', domains: ['Bisnis', 'Keuangan'], insight: 'Pendapatan berulang dinilai dengan multiple lebih tinggi daripada pendapatan proyek karena lebih dapat diprediksi.' },
          story: { who: 'Konsultan Keuangan UMKM (ilustrasi)', story: 'Konsultan mengubah proyek pembukuan satu kali Rp 3 juta menjadi paket bulanan Rp 1,5 juta berisi laporan, tinjauan 30 menit, dan pengingat pajak. Dengan 12 klien, pendapatan berulang Rp 18 juta per bulan memberi stabilitas untuk mengambil proyek besar.', takeaway: 'Pendapatan berulang menopang proyek yang berisiko.' },
          actions: ['Rancang satu paket bulanan dengan hasil jelas.', 'Tawarkan ke klien yang sudah puas dengan proyek sebelumnya.', 'Pantau jumlah klien aktif dan yang berhenti tiap bulan.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Klien Puas Tetapi Berhenti Setelah Proyek',
            context: 'Banyak klien puas namun tidak kembali setelah proyek selesai.',
            dilemma: 'Bagaimana membangun pendapatan berulang?',
            choices: [
              { text: 'Tawarkan paket pemeliharaan bulanan dengan hasil terukur (laporan, tinjauan, rekomendasi) sebagai kelanjutan proyek.', consequence: 'Sebagian klien berlangganan dan arus kas menjadi stabil.', explanation: 'Paket bulanan yang menghasilkan nilai berkelanjutan mudah dibeli oleh klien puas.', best: true },
              { text: 'Berharap klien menghubungi lagi.', consequence: 'Pendapatan tetap naik turun.', explanation: 'Berharap bukan strategi.' },
              { text: 'Turunkan harga proyek berikutnya.', consequence: 'Margin berkurang tanpa membangun kebiasaan berlangganan.', explanation: 'Diskon tidak menciptakan pendapatan berulang.' }
            ]
          },
          quiz: [
            { q: 'Keuntungan utama retainer?', options: ['Arus kas yang lebih dapat diprediksi', 'Tidak perlu bekerja', 'Tidak ada pajak', 'Klien selalu setuju'], answer: 0, why: 'Pendapatan tetap bulanan lebih stabil.' },
            { q: 'Retainer sebaiknya dirancang berdasarkan...', options: ['Hasil bulanan yang jelas', 'Jam tersedia tanpa batas', 'Hanya sapaan', 'Harga paling murah'], answer: 0, why: 'Hasil jelas membuat klien merasakan nilai.' }
          ]
        },
        {
          id: 'ms-8-skala',
          label: 'Dari Solo ke Tim: Menskalakan Jasa',
          domain: 'Bisnis',
          summary: 'Pendapatan yang hanya bergantung pada jam Anda ada batasnya. Skalakan lewat sistem, templat, dan tim.',
          model: 'Leverage in Professional Services',
          analogy: 'Koki yang memasak semua pesanan sendiri berhenti tumbuh saat dapur penuh. Resep tertulis dan asisten membuatnya menjual lebih banyak tanpa kehilangan rasa.',
          insight: 'Cara skala: dokumentasikan proses (SOP), buat templat dan alat, delegasikan pekerjaan berulang kepada junior atau mitra, lalu fokus pada penjualan dan kualitas. Margin kontribusi per delegasi harus positif: tarif ke klien dikurangi biaya tim. Risiko: kualitas turun, ketergantungan pada pendiri, dan kebutuhan manajemen. Mulai dari mendelegasikan tugas yang paling berulang dan berisiko rendah.',
          cross: { text: 'Skala x Kepemimpinan', domains: ['Bisnis', 'Psikologi'], insight: 'Mendelegasikan menuntut melepaskan kendali dan membangun kepercayaan lewat standar yang jelas.' },
          story: { who: 'Konsultan Menjadi Boutique (ilustrasi)', story: 'Konsultan menagih Rp 10 juta per laporan dan mengerjakan sendiri 20 jam. Setelah SOP dan templat, analis junior dibayar Rp 3 juta mengerjakan 12 jam, dan konsultan hanya meninjau 3 jam. Margin kontribusi Rp 7 juta per laporan, dan kapasitas naik tiga kali lipat.', takeaway: 'Sistem dan delegasi memisahkan pendapatan dari jam pribadi.' },
          actions: ['Tulis SOP untuk satu pekerjaan yang paling sering berulang.', 'Hitung margin kontribusi bila pekerjaan itu didelegasikan.', 'Tetapkan standar mutu dan cara memeriksa hasil.'],
          level: 'Mahir', time: '7 min', tool: 'unit',
          scenario: {
            title: 'Dilema Permintaan Melebihi Kapasitas',
            context: 'Permintaan klien melebihi kemampuan Anda mengerjakan sendiri.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Dokumentasikan proses, rekrut satu asisten untuk pekerjaan berulang, tinjau kualitas, dan hitung margin per proyek.', consequence: 'Kapasitas naik dan kualitas terjaga karena ada standar.', explanation: 'Sistem dan delegasi menskalakan tanpa mengorbankan mutu.', best: true },
              { text: 'Tolak semua klien tambahan selamanya.', consequence: 'Pertumbuhan berhenti dan klien beralih.', explanation: 'Membatasi diri sepenuhnya menutup peluang.' },
              { text: 'Terima semua dan kerjakan sendiri hingga kelelahan.', consequence: 'Kualitas turun dan klien kecewa.', explanation: 'Tanpa sistem, skala merusak kualitas.' }
            ]
          },
          quiz: [
            { q: 'Langkah awal menskalakan jasa?', options: ['Mendokumentasikan proses dan mendelegasikan pekerjaan berulang', 'Menaikkan jam kerja sendiri', 'Menurunkan harga', 'Menghentikan pemasaran'], answer: 0, why: 'SOP dan delegasi memisahkan hasil dari jam pribadi.' },
            { q: 'Margin kontribusi per laporan: tarif Rp 10 juta, biaya asisten Rp 3 juta. Besarnya?', options: ['Rp 7 juta', 'Rp 13 juta', 'Rp 3 juta', 'Rp 10 juta'], answer: 0, why: '10 − 3 = 7 juta (sebelum biaya lain).' }
          ]
        }
      ]
    }
  ]
});
