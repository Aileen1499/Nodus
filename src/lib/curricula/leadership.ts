import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data nyata.
// Aturan ketenagakerjaan berbeda menurut kondisi; pelajaran terkait menyarankan konsultasi dengan penasihat hukum.
export const LEADERSHIP_CURRICULUM = buildPath({
  id: 'curriculum-kepemimpinan-sdm',
  topic: 'Kepemimpinan & Manajemen SDM',
  description:
    'Dari kontributor individu menjadi pemimpin: merekrut dengan benar, mendelegasikan, memberi umpan balik, menetapkan sasaran (OKR), memotivasi, menangani konflik, dan membangun budaya yang menahan talenta.',
  stages: [
    {
      title: 'Menjadi Pemimpin',
      lessons: [
        {
          id: 'ld-1-peran',
          label: 'Dari Kontributor ke Pemimpin',
          domain: 'Bisnis',
          summary: 'Pekerjaan pemimpin bukan mengerjakan semuanya sendiri, tetapi membuat orang lain berhasil.',
          model: 'The Leadership Pipeline dan Manager Mindset',
          analogy: 'Pemain terbaik yang menjadi pelatih tidak lagi dinilai dari golnya, tetapi dari kemenangan tim. Pergeseran ukuran keberhasilan ini yang paling sulit.',
          insight: 'Pergeseran utama: dari keahlian pribadi ke hasil tim; dari mengerjakan ke memastikan terkerjakan; dari menjawab ke bertanya. Waktu pemimpin dialokasikan untuk arah, prioritas, penghapusan hambatan, dan pengembangan orang. Jebakan umum: terus mengerjakan tugas teknis karena nyaman (micromanagement atau menjadi pahlawan tunggal).',
          cross: { text: 'Kepemimpinan x Psikologi Identitas', domains: ['Bisnis', 'Psikologi'], insight: 'Kehilangan identitas sebagai ahli teknis menimbulkan keengganan melepaskan tugas. Mengenali ini membantu bertransisi.' },
          story: { who: 'Kepala Tim Penjualan Baru (ilustrasi)', story: 'Penjual terbaik diangkat menjadi kepala tim dan terus mengambil klien besar sendiri. Timnya stagnan dan ia kelelahan. Setelah menggeser waktu ke coaching dan peninjauan pipeline mingguan, penjualan tim naik 25% dalam dua kuartal.', takeaway: 'Ukur diri dari hasil tim, bukan kerja pribadi.' },
          actions: ['Catat bagaimana Anda menghabiskan waktu seminggu dan tandai yang bisa didelegasikan.', 'Tetapkan satu jam per minggu untuk coaching tiap anggota tim.', 'Tuliskan tiga hasil tim yang Anda tanggung jawabi.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Mengambil Alih Pekerjaan Anggota Tim',
            context: 'Anggota tim mengerjakan laporan lebih lambat dan kurang rapi dari yang akan Anda kerjakan.',
            dilemma: 'Apa respons Anda?',
            choices: [
              { text: 'Jelaskan standar hasil, beri contoh dan umpan balik, lalu biarkan ia memperbaiki sendiri agar kemampuannya tumbuh.', consequence: 'Kualitas laporan membaik dalam dua siklus dan Anda punya waktu untuk hal strategis.', explanation: 'Mengembangkan orang membebaskan waktu pemimpin dalam jangka panjang.', best: true },
              { text: 'Kerjakan sendiri agar cepat dan rapi.', consequence: 'Tim bergantung pada Anda dan Anda kewalahan.', explanation: 'Mengambil alih menghambat pertumbuhan tim.' },
              { text: 'Biarkan tanpa panduan.', consequence: 'Kualitas tidak membaik.', explanation: 'Mendelegasikan tanpa standar dan umpan balik tidak efektif.' }
            ]
          },
          quiz: [
            { q: 'Ukuran keberhasilan seorang pemimpin...', options: ['Hasil yang dicapai tim', 'Jam kerja pribadi', 'Jumlah laporan sendiri', 'Keahlian teknis semata'], answer: 0, why: 'Pemimpin berhasil melalui orang lain.' },
            { q: 'Jebakan umum pemimpin baru?', options: ['Terus mengerjakan tugas teknis sendiri', 'Terlalu banyak bertanya', 'Memberi umpan balik', 'Menetapkan sasaran'], answer: 0, why: 'Tugas teknis terasa nyaman tetapi menghambat tim.' }
          ]
        },
        {
          id: 'ld-2-rekrut',
          label: 'Merekrut dengan Benar: Wawancara Terstruktur',
          domain: 'Bisnis',
          summary: 'Salah merekrut sangat mahal. Wawancara terstruktur dengan kriteria jelas meningkatkan peluang memilih orang yang tepat.',
          model: 'Structured Interviewing dan Hiring Scorecard',
          analogy: 'Memilih pemain sepak bola bukan dari kesan pertama, tetapi dari kemampuan yang dibutuhkan posisi, diuji dengan latihan yang sama untuk semua calon.',
          insight: 'Mulai dari menentukan hasil yang diharapkan dan kompetensi inti. Gunakan pertanyaan perilaku yang sama untuk semua kandidat, tugas kerja singkat yang mencerminkan pekerjaan sebenarnya, dan kartu penilaian dengan skala. Wawancara tidak terstruktur rentan bias kemiripan (menyukai orang yang mirip dengan kita) dan efek halo. Periksa referensi. Biaya salah rekrut bisa mencapai beberapa kali gaji tahunan, belum termasuk dampak pada tim.',
          cross: { text: 'Rekrutmen x Bias Kognitif', domains: ['Bisnis', 'Psikologi'], insight: 'Efek halo membuat satu kesan baik memengaruhi seluruh penilaian. Penilaian independen per kriteria mengurangi bias.' },
          story: { who: 'Toko Daring Merekrut Admin (ilustrasi)', story: 'Pemilik biasanya memilih kandidat yang paling enak diajak bicara dan dua kali salah pilih. Kali ketiga ia memakai kartu penilaian lima kriteria dan tugas kerja 30 menit menjawab keluhan pelanggan. Kandidat dengan skor tertinggi ternyata bukan yang paling luwes bicara dan bertahan lebih dari dua tahun.', takeaway: 'Kriteria dan tugas nyata mengalahkan kesan pertama.' },
          actions: ['Tulis hasil yang diharapkan dan lima kriteria untuk satu posisi.', 'Siapkan tiga pertanyaan perilaku yang sama untuk semua kandidat.', 'Rancang tugas kerja singkat yang mirip pekerjaan sebenarnya.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Kandidat Karismatik Tanpa Bukti Kemampuan',
            context: 'Seorang kandidat sangat menyenangkan saat wawancara tetapi tugas kerjanya biasa saja.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Putuskan berdasarkan kartu penilaian dan hasil tugas kerja, bukan kesan, dan periksa referensi sebelum menawarkan.', consequence: 'Anda memilih kandidat dengan bukti kemampuan lebih kuat dan hasilnya memuaskan.', explanation: 'Bukti terukur memprediksi kinerja lebih baik daripada kesan.', best: true },
              { text: 'Pilih yang paling karismatik.', consequence: 'Kinerja tidak sesuai harapan dan Anda harus merekrut ulang.', explanation: 'Efek halo menyesatkan.' },
              { text: 'Tunda rekrutmen tanpa batas.', consequence: 'Beban tim menumpuk.', explanation: 'Posisi kosong lama juga mahal.' }
            ]
          },
          quiz: [
            { q: 'Keunggulan wawancara terstruktur?', options: ['Pertanyaan dan kriteria sama sehingga perbandingan lebih adil', 'Lebih singkat selalu', 'Tidak memerlukan persiapan', 'Menghilangkan semua bias'], answer: 0, why: 'Struktur memudahkan perbandingan adil dan mengurangi bias.' },
            { q: 'Efek halo adalah...', options: ['Satu kesan baik memengaruhi seluruh penilaian', 'Penilaian terlalu keras', 'Penilaian berdasarkan referensi', 'Penilaian acak'], answer: 0, why: 'Satu sifat menonjol mewarnai penilaian lain.' }
          ]
        },
        {
          id: 'ld-3-delegasi',
          label: 'Mendelegasikan dengan Efektif',
          domain: 'Bisnis',
          summary: 'Delegasi yang baik menjelaskan hasil, batas wewenang, dan cara melapor, bukan sekadar melempar tugas.',
          model: 'Levels of Delegation dan Situational Leadership',
          analogy: 'Mengajari seseorang mengemudi: awalnya Anda duduk di sebelahnya, lalu pindah ke kursi belakang, dan akhirnya ia berkendara sendiri. Tingkat pengawasan disesuaikan dengan kesiapan.',
          insight: 'Tentukan tingkat delegasi: lakukan sesuai instruksi, cari opsi dan rekomendasikan, putuskan lalu laporkan, atau putuskan sepenuhnya. Jelaskan hasil yang diharapkan, tenggat, batas anggaran dan wewenang, serta titik pemeriksaan. Sesuaikan dengan kompetensi dan komitmen penerima tugas. Hindari delegasi terbalik, yaitu menerima kembali tugas saat mereka bertanya "bagaimana ini?".',
          cross: { text: 'Delegasi x Kepercayaan', domains: ['Bisnis', 'Psikologi'], insight: 'Kepercayaan tumbuh dengan memberi tanggung jawab bertahap dan menghargai keputusan yang diambil dalam batas wewenang.' },
          story: { who: 'Pemilik Kafe dan Manajer Baru (ilustrasi)', story: 'Pemilik menyerahkan pengaturan jadwal kepada manajer dengan batas anggaran lembur dan pertemuan mingguan. Manajer awalnya sering bertanya, tetapi setelah dua bulan keputusan jadwalnya akurat dan pemilik punya 8 jam per minggu untuk pengembangan menu.', takeaway: 'Delegasi bertahap dengan batas yang jelas melepaskan waktu pemimpin.' },
          actions: ['Pilih satu tugas untuk didelegasikan dan tentukan tingkat delegasinya.', 'Tulis hasil, tenggat, batas wewenang, dan titik pemeriksaan.', 'Jadwalkan pertemuan singkat mingguan untuk meninjau.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Anggota Tim Selalu Menanyakan Jawabannya',
            context: 'Anggota tim terus bertanya "bagaimana sebaiknya" untuk tugas yang sudah didelegasikan.',
            dilemma: 'Bagaimana menyikapinya?',
            choices: [
              { text: 'Minta ia membawa rekomendasi dan alasannya, beri umpan balik, dan tegaskan batas keputusan yang boleh ia ambil sendiri.', consequence: 'Ia mulai memutuskan sendiri dan hanya melapor hal penting.', explanation: 'Meminta rekomendasi melatih kemandirian.', best: true },
              { text: 'Selalu jawab langsung agar cepat.', consequence: 'Anda menjadi hambatan dan ia tidak berkembang.', explanation: 'Delegasi terbalik mengembalikan tugas ke pemimpin.' },
              { text: 'Tarik kembali tugasnya.', consequence: 'Anda kembali kelebihan beban.', explanation: 'Menarik tugas menghapus manfaat delegasi.' }
            ]
          },
          quiz: [
            { q: 'Delegasi yang baik harus menjelaskan...', options: ['Hasil, batas wewenang, dan titik pemeriksaan', 'Hanya tenggat', 'Cara menyelesaikan tiap langkah', 'Siapa yang disalahkan'], answer: 0, why: 'Kejelasan hasil dan batas membuat penerima mandiri.' },
            { q: 'Delegasi terbalik terjadi ketika...', options: ['Tugas dikembalikan kepada pemimpin', 'Pemimpin mendelegasikan lebih', 'Tim bekerja mandiri', 'Anggaran bertambah'], answer: 0, why: 'Pemimpin menerima kembali tugas yang telah didelegasikan.' }
          ]
        }
      ]
    },
    {
      title: 'Mengelola Kinerja',
      lessons: [
        {
          id: 'ld-4-umpan',
          label: 'Memberi Umpan Balik yang Mengubah Perilaku',
          domain: 'Komunikasi',
          summary: 'Umpan balik yang spesifik, segera, dan berfokus pada perilaku mengubah kinerja tanpa merusak hubungan.',
          model: 'SBI: Situation, Behavior, Impact',
          analogy: 'Pelatih yang berkata "bagus" setelah tiap latihan tidak membantu. Pelatih yang berkata "umpan silangmu terlambat satu detik sehingga penyerang offside" membantu.',
          insight: 'Gunakan SBI: sebutkan situasi spesifik, perilaku yang teramati (bukan penilaian watak), dan dampaknya. Beri umpan balik segera dan secara pribadi untuk koreksi, serta secara terbuka untuk pujian yang tulus. Akhiri dengan pertanyaan dan kesepakatan langkah ke depan. Rasio umpan balik positif dan korektif yang sehat dapat meningkatkan penerimaan.',
          cross: { text: 'Umpan Balik x Psikologi Ego', domains: ['Komunikasi', 'Psikologi'], insight: 'Kritik atas kepribadian memicu sikap bertahan. Kritik atas perilaku spesifik memberi sesuatu yang bisa diubah.' },
          story: { who: 'Supervisor Gudang (ilustrasi)', story: 'Alih-alih berkata "kamu ceroboh", supervisor berkata: "Kemarin saat pengemasan pukul 15.00 (situasi), label pesanan tertukar pada tiga paket (perilaku), sehingga dua pelanggan menerima barang salah (dampak). Bagaimana kita bisa mencegahnya?" Kesalahan turun dalam dua minggu.', takeaway: 'Spesifik tentang perilaku dan dampaknya, lalu ajak mencari solusi.' },
          actions: ['Tulis satu umpan balik dengan format SBI untuk seseorang di tim Anda.', 'Sampaikan dalam 48 jam setelah kejadian.', 'Akhiri dengan pertanyaan terbuka dan langkah yang disepakati.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Anggota Tim Sering Terlambat Menyerahkan Laporan',
            context: 'Anggota tim terlambat tiga kali menyerahkan laporan mingguan dan Anda mulai kesal.',
            dilemma: 'Bagaimana menyampaikan?',
            choices: [
              { text: 'Bicara pribadi dengan SBI: sebutkan tiga contoh, dampaknya pada rapat, tanyakan hambatannya, lalu sepakati langkah dan tenggat baru.', consequence: 'Ia mengungkap kendala data dan Anda menyelesaikannya bersama.', explanation: 'Spesifik dan ingin tahu menggali penyebab sebenarnya.', best: true },
              { text: 'Menegur di depan tim agar jera.', consequence: 'Ia malu dan kepercayaan menurun.', explanation: 'Koreksi di depan umum merusak hubungan.' },
              { text: 'Mengabaikan sampai menumpuk.', consequence: 'Masalah membesar dan rasa kesal memuncak.', explanation: 'Umpan balik ditunda kurang efektif.' }
            ]
          },
          quiz: [
            { q: 'SBI singkatan dari...', options: ['Situation, Behavior, Impact', 'Skill, Budget, Income', 'Speed, Balance, Insight', 'Start, Build, Improve'], answer: 0, why: 'Situasi, perilaku, dampak.' },
            { q: 'Umpan balik korektif sebaiknya disampaikan...', options: ['Segera dan secara pribadi', 'Di rapat besar', 'Setahun sekali', 'Melalui rumor'], answer: 0, why: 'Waktu dan tempat memengaruhi penerimaan.' }
          ]
        },
        {
          id: 'ld-5-okr',
          label: 'Menetapkan Sasaran dengan OKR',
          domain: 'Bisnis',
          summary: 'Selaraskan tim pada sedikit sasaran yang ambisius dan hasil kunci yang terukur.',
          model: 'Objectives and Key Results (OKR)',
          analogy: 'Kompas dan titik tengah rute: tujuan memberi arah, hasil kunci menunjukkan seberapa jauh Anda sudah melangkah.',
          insight: 'Objective menjawab "ke mana kita ingin pergi" (kualitatif dan memotivasi). Key Results menjawab "bagaimana kita tahu sudah sampai" (3 sampai 5 ukuran terukur). Batasi jumlah sasaran per kuartal. Pisahkan OKR dari penilaian gaji agar sasaran berani tidak dihindari. Tinjau mingguan dan nilai di akhir periode. Waspadai hasil kunci yang hanya berupa kegiatan (output) dan bukan dampak (outcome).',
          cross: { text: 'Sasaran x Psikologi Motivasi', domains: ['Bisnis', 'Psikologi'], insight: 'Sasaran yang spesifik dan menantang meningkatkan kinerja bila tim memahami dan menerimanya (teori penetapan tujuan).' },
          story: { who: 'Toko Roti Rantai Kecil (ilustrasi)', story: 'Sasaran: "Jadi toko pilihan sarapan di kompleks." Hasil kunci: pesanan pagi naik dari 80 ke 140 per hari, waktu tunggu rata-rata di bawah 4 menit, dan skor ulasan 4,7. Tim memilih kegiatan sendiri dan mencapai dua dari tiga hasil kunci dalam kuartal itu.', takeaway: 'Ukur dampak, biarkan tim memilih caranya.' },
          actions: ['Tulis satu objective dan tiga key results terukur untuk kuartal ini.', 'Periksa apakah tiap key result berupa dampak, bukan kegiatan.', 'Jadwalkan peninjauan mingguan 15 menit.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Hasil Kunci Berupa Daftar Kegiatan',
            context: 'Key results tim berbunyi "mengadakan 4 rapat" dan "membuat 10 unggahan".',
            dilemma: 'Bagaimana memperbaikinya?',
            choices: [
              { text: 'Ubah menjadi ukuran dampak: misalnya pertumbuhan pesanan atau konversi, lalu biarkan tim memilih kegiatan untuk mencapainya.', consequence: 'Tim fokus pada hasil dan mencoba cara yang lebih efektif.', explanation: 'Dampak terukur lebih penting daripada jumlah kegiatan.', best: true },
              { text: 'Biarkan kegiatan sebagai ukuran.', consequence: 'Tim sibuk tetapi hasil tak berubah.', explanation: 'Kegiatan tidak sama dengan hasil.' },
              { text: 'Tambah banyak sasaran agar semua tercakup.', consequence: 'Fokus tersebar.', explanation: 'Terlalu banyak sasaran melemahkan prioritas.' }
            ]
          },
          quiz: [
            { q: 'Key result yang baik...', options: ['Terukur dan berupa dampak', 'Berupa daftar kegiatan', 'Tidak punya angka', 'Rahasia'], answer: 0, why: 'Hasil kunci mengukur dampak yang dicapai.' },
            { q: 'Berapa jumlah key results per objective yang umum disarankan?', options: ['3 sampai 5', '20 sampai 30', '1 saja untuk seluruh perusahaan', '50'], answer: 0, why: 'Jumlah sedikit menjaga fokus.' }
          ]
        },
        {
          id: 'ld-6-motivasi',
          label: 'Motivasi dan Kompensasi yang Adil',
          domain: 'Psikologi',
          summary: 'Uang penting, tetapi otonomi, penguasaan, dan makna sering menentukan semangat jangka panjang.',
          model: 'Self-Determination Theory dan Equity Theory',
          analogy: 'Gaji seperti oksigen: kekurangannya menyiksa, tetapi kelebihannya tidak otomatis membuat orang bersemangat. Semangat datang dari tujuan dan kemajuan.',
          insight: 'Teori determinasi diri menekankan tiga kebutuhan: otonomi, kompetensi, dan keterhubungan. Gaji yang dirasa tidak adil menurunkan motivasi (teori ekuitas), sedangkan insentif yang terlalu sempit dapat mendorong perilaku yang tidak diinginkan. Rancang kompensasi yang adil secara internal dan kompetitif secara eksternal, dengan pengakuan yang tepat dan peluang berkembang.',
          cross: { text: 'Motivasi x Ekonomi', domains: ['Psikologi', 'Ekonomi'], insight: 'Insentif eksternal dapat mengurangi motivasi internal (efek overjustification) bila diberikan pada tugas yang sudah dinikmati.' },
          story: { who: 'Tim Layanan Pelanggan (ilustrasi)', story: 'Bonus per jumlah tiket yang ditutup membuat staf menutup tiket terburu-buru dan keluhan berulang meningkat. Setelah bonus dikaitkan dengan kepuasan pelanggan dan penyelesaian pada kontak pertama, kualitas membaik.', takeaway: 'Insentif harus mengukur hasil yang benar-benar diinginkan.' },
          actions: ['Periksa apakah ada ketimpangan gaji tidak berdasar di tim Anda.', 'Beri satu bentuk otonomi baru kepada tiap anggota.', 'Tinjau insentif untuk memastikan tidak mendorong perilaku keliru.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Anggaran Terbatas untuk Menahan Karyawan Berprestasi',
            context: 'Karyawan terbaik mempertimbangkan pindah, sedangkan anggaran kenaikan gaji terbatas.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Perbaiki gaji ke tingkat adil sesuai pasar semampunya, tambah otonomi, jalur pengembangan, dan pengakuan, serta bicarakan terbuka tentang rencana kariernya.', consequence: 'Ia memutuskan bertahan karena melihat jalur berkembang dan merasa dihargai.', explanation: 'Gaji adil ditambah makna dan pertumbuhan menahan talenta.', best: true },
              { text: 'Menunggu sampai ia mengundurkan diri.', consequence: 'Anda kehilangan talenta penting.', explanation: 'Reaktif lebih mahal daripada proaktif.' },
              { text: 'Menjanjikan hal yang tidak bisa dipenuhi.', consequence: 'Kepercayaan hancur saat janji tak terwujud.', explanation: 'Janji kosong merusak hubungan.' }
            ]
          },
          quiz: [
            { q: 'Tiga kebutuhan dalam teori determinasi diri?', options: ['Otonomi, kompetensi, keterhubungan', 'Gaji, jabatan, ruang kerja', 'Waktu, tempat, alat', 'Kuasa, kekayaan, ketenaran'], answer: 0, why: 'Ketiganya menopang motivasi internal.' },
            { q: 'Bonus yang hanya menghitung jumlah tiket dapat menyebabkan...', options: ['Kualitas layanan menurun', 'Kepuasan selalu naik', 'Biaya selalu turun', 'Tidak ada efek'], answer: 0, why: 'Insentif sempit mendorong perilaku sempit.' }
          ]
        }
      ]
    },
    {
      title: 'Budaya dan Konflik',
      lessons: [
        {
          id: 'ld-7-konflik',
          label: 'Menangani Konflik dan Percakapan Sulit',
          domain: 'Komunikasi',
          summary: 'Konflik yang dihindari membesar. Hadapi dengan fokus pada kepentingan, fakta, dan solusi.',
          model: 'Crucial Conversations dan Interest-Based Resolution',
          analogy: 'Bara kecil di dapur: dipadamkan segera tidak jadi masalah, dibiarkan bisa membakar seluruh rumah.',
          insight: 'Persiapkan: tujuan percakapan, fakta yang dapat diverifikasi, dan perspektif pihak lain. Mulailah dengan niat bersama, sampaikan fakta, tanyakan sudut pandang mereka, dan cari solusi yang memenuhi kepentingan kedua pihak. Kelola emosi sendiri dan jeda bila perlu. Untuk pelanggaran serius atau masalah hukum ketenagakerjaan, libatkan HR dan penasihat hukum.',
          cross: { text: 'Konflik x Negosiasi', domains: ['Komunikasi', 'Bisnis'], insight: 'Banyak konflik tim adalah negosiasi kepentingan yang tidak diucapkan. Menggali kepentingan membuka solusi.' },
          story: { who: 'Dua Kepala Divisi Berselisih Soal Prioritas (ilustrasi)', story: 'Divisi penjualan dan produksi saling menyalahkan soal keterlambatan. Pemimpin mengumpulkan data, menanyakan kepentingan masing-masing (kepastian jadwal vs efisiensi batch), dan menyepakati jadwal pesanan mendesak dua kali seminggu. Konflik reda.', takeaway: 'Kepentingan yang digali menghasilkan solusi bersama.' },
          actions: ['Pilih satu percakapan sulit yang tertunda dan tulis tujuan serta faktanya.', 'Siapkan tiga pertanyaan untuk memahami sudut pandang pihak lain.', 'Tentukan kapan memerlukan HR atau bantuan hukum.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Dua Anggota Tim Tidak Mau Bekerja Sama',
            context: 'Dua anggota tim saling menghindar dan proyek terhambat.',
            dilemma: 'Apa langkah Anda?',
            choices: [
              { text: 'Bicara dengan masing-masing, gali kepentingan dan fakta, lalu fasilitasi pertemuan untuk menyepakati cara kerja dan tanggung jawab.', consequence: 'Kesalahpahaman peran terungkap dan mereka menyepakati pembagian kerja baru.', explanation: 'Fasilitasi berbasis kepentingan menyelesaikan akar konflik.', best: true },
              { text: 'Menunggu mereka menyelesaikan sendiri.', consequence: 'Proyek makin terhambat dan suasana memburuk.', explanation: 'Konflik tidak otomatis reda.' },
              { text: 'Memihak salah satu tanpa mendengar yang lain.', consequence: 'Pihak lain merasa tidak adil.', explanation: 'Keputusan sepihak menimbulkan ketidakpercayaan.' }
            ]
          },
          quiz: [
            { q: 'Pendekatan yang paling membantu dalam konflik?', options: ['Menggali kepentingan dan fakta', 'Mencari siapa yang salah', 'Menghindar', 'Menekan suara'], answer: 0, why: 'Kepentingan membuka solusi yang saling menguntungkan.' },
            { q: 'Kapan melibatkan HR atau penasihat hukum?', options: ['Untuk pelanggaran serius atau isu hukum ketenagakerjaan', 'Untuk semua perbedaan pendapat kecil', 'Tidak pernah', 'Hanya saat gaji'], answer: 0, why: 'Masalah serius memerlukan proses yang tepat.' }
          ]
        },
        {
          id: 'ld-8-budaya',
          label: 'Membangun Budaya dan Menahan Talenta',
          domain: 'Bisnis',
          summary: 'Budaya adalah apa yang terjadi saat pemimpin tidak ada. Bentuk lewat perilaku yang dihargai dan ditoleransi.',
          model: 'Organizational Culture dan Psychological Safety',
          analogy: 'Budaya seperti iklim di sebuah kota: tak terlihat tetapi memengaruhi cara orang berpakaian, berbicara, dan berperilaku setiap hari.',
          insight: 'Budaya terbentuk oleh apa yang pemimpin teladani, hargai, dan toleransi, bukan oleh poster nilai. Keamanan psikologis (berani bertanya, mengaku salah, memberi masukan tanpa takut dipermalukan) berkaitan dengan pembelajaran dan kinerja tim. Tinjau tiga hal: bagaimana keputusan diambil, bagaimana kesalahan ditangani, dan siapa yang dipromosikan. Pantau retensi dan alasan keluar.',
          cross: { text: 'Budaya x Strategi', domains: ['Bisnis', 'Psikologi'], insight: 'Strategi yang bagus gagal jika budaya tidak mendukung perilaku yang dibutuhkan.' },
          story: { who: 'Perusahaan Distribusi dengan Perputaran Tinggi (ilustrasi)', story: 'Karyawan sering keluar dalam setahun. Wawancara keluar menunjukkan mereka takut melaporkan kesalahan karena sering dimarahi. Pemimpin mulai berterima kasih atas pelaporan dini dan membahas akar masalah tanpa mencari kambing hitam. Dalam setahun perputaran turun dari 35% menjadi 20%.', takeaway: 'Cara pemimpin menanggapi kesalahan membentuk budaya.' },
          actions: ['Tulis tiga perilaku yang Anda inginkan dari tim dan bagaimana Anda meneladaninya.', 'Lakukan survei anonim singkat tentang keamanan psikologis.', 'Tinjau alasan karyawan keluar dalam setahun terakhir.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Karyawan Menyembunyikan Kesalahan',
            context: 'Anda mengetahui bahwa beberapa kesalahan operasional baru terungkap setelah menjadi besar.',
            dilemma: 'Bagaimana memperbaiki budaya?',
            choices: [
              { text: 'Tanggapi pelaporan dengan apresiasi, fokus pada akar masalah dan perbaikan sistem, dan pastikan tidak ada hukuman atas pelaporan jujur.', consequence: 'Masalah dilaporkan lebih dini dan kerugian turun.', explanation: 'Keamanan psikologis mendorong keterbukaan.', best: true },
              { text: 'Hukum keras setiap kesalahan agar jera.', consequence: 'Orang makin menyembunyikan masalah.', explanation: 'Hukuman membungkam pelaporan.' },
              { text: 'Abaikan karena sibuk.', consequence: 'Kesalahan terus membesar.', explanation: 'Pembiaran menormalkan masalah.' }
            ]
          },
          quiz: [
            { q: 'Budaya terbentuk terutama oleh...', options: ['Perilaku yang diteladani, dihargai, dan ditoleransi', 'Poster nilai di dinding', 'Kebijakan tertulis saja', 'Nama perusahaan'], answer: 0, why: 'Tindakan pemimpin lebih kuat daripada slogan.' },
            { q: 'Keamanan psikologis berarti...', options: ['Orang berani bertanya dan mengaku salah tanpa takut dipermalukan', 'Tidak ada target', 'Semua orang selalu setuju', 'Tidak ada evaluasi'], answer: 0, why: 'Lingkungan aman mendorong belajar dan keterbukaan.' }
          ]
        }
      ]
    }
  ]
});
