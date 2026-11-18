import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const STRATEGY_CURRICULUM = buildPath({
  id: 'curriculum-bisnis-strategi-moat',
  topic: 'Strategi Bisnis & Parit Pertahanan Korporat',
  description:
    'Dari membaca industri, memilih posisi bersaing, membangun parit ekonomi, sampai menghadapi disrupsi dan mengeksekusi strategi dengan target terukur.',
  stages: [
    {
      title: 'Membaca Medan',
      lessons: [
        {
          id: 'st-1-five-forces',
          label: 'Lima Kekuatan Porter: Seberapa Menarik Industri Anda',
          domain: 'Bisnis',
          summary: 'Laba industri ditentukan oleh lima tekanan: pesaing, pendatang baru, pembeli, pemasok, dan produk pengganti. Pilih medan sebelum memilih strategi.',
          model: 'Porter\'s Five Forces (Michael Porter)',
          analogy: 'Industri seperti sungai: ada yang arusnya tenang sehingga perahu kecil pun lancar, ada yang berarus deras penuh batu. Sebelum mendayung lebih keras, tanyakan dulu apakah Anda berada di sungai yang tepat.',
          insight: 'Lima kekuatan Porter menjelaskan mengapa sebagian industri secara struktural lebih menguntungkan: ancaman pendatang baru, daya tawar pemasok, daya tawar pembeli, ancaman substitusi, dan persaingan antar pemain. Semakin kuat kelimanya, semakin tipis laba rata-rata industri. Strategi yang baik menempatkan perusahaan di posisi yang dapat bertahan terhadap tekanan itu atau mengubah strukturnya.',
          cross: { text: 'Strategi x Ekonomi Industri', domains: ['Bisnis', 'Ekonomi'], insight: 'Hambatan masuk dan biaya beralih adalah alat ekonomi yang menentukan seberapa lama laba di atas normal bertahan.' },
          story: { who: 'Warung Kopi vs Pabrik Semen (ilustrasi)', story: 'Kedai kopi punya hambatan masuk rendah (modal kecil), pembeli mudah pindah, dan substitusi banyak sehingga margin tipis. Pabrik semen regional punya hambatan masuk tinggi (modal besar, izin, logistik) sehingga pemain yang ada lebih terlindungi. Keduanya bisa dikelola baik, tetapi struktur industri berbeda.', takeaway: 'Eksekusi hebat di industri yang strukturnya buruk tetap sulit. Pilih dan pahami medan.' },
          actions: ['Beri nilai tinggi/sedang/rendah untuk tiap dari lima kekuatan pada industri Anda.', 'Tandai satu kekuatan yang paling menekan margin Anda.', 'Tuliskan satu langkah konkret untuk melemahkan tekanan itu.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Masuk Pasar yang Ramai',
            context: 'Anda mempertimbangkan membuka usaha di kategori yang hambatan masuknya rendah dan pembelinya mudah berpindah.',
            dilemma: 'Bagaimana memutuskan?',
            choices: [
              { text: 'Analisis lima kekuatan, cari segmen atau model yang menaikkan biaya beralih atau hambatan masuk, baru putuskan masuk.', consequence: 'Anda menemukan ceruk langganan korporat yang lebih lengket dan masuk dengan posisi jelas.', explanation: 'Memilih posisi dalam struktur industri lebih menentukan daripada sekadar bekerja lebih keras.', best: true },
              { text: 'Masuk dan bersaing lewat harga termurah.', consequence: 'Perang harga menggerus margin dan Anda kalah dari pemain bermodal besar.', explanation: 'Kompetisi harga di industri tanpa hambatan masuk merugikan pemain kecil.' },
              { text: 'Menunggu sampai pasarnya sepi tanpa analisis.', consequence: 'Anda kehilangan waktu tanpa pemahaman yang lebih baik.', explanation: 'Menunda tanpa analisis tidak mengurangi ketidakpastian.' }
            ]
          },
          quiz: [
            { q: 'Mana yang BUKAN salah satu dari lima kekuatan Porter?', options: ['Ancaman pendatang baru', 'Daya tawar pemasok', 'Tingkat pendidikan CEO', 'Ancaman produk substitusi'], answer: 2, why: 'Lima kekuatan: pesaing, pendatang baru, pembeli, pemasok, dan substitusi.' },
            { q: 'Hambatan masuk yang tinggi umumnya membuat industri...', options: ['Lebih terlindungi bagi pemain yang sudah ada', 'Lebih mudah dimasuki', 'Tidak menguntungkan', 'Tanpa pesaing'], answer: 0, why: 'Hambatan masuk melindungi laba pemain yang sudah ada dari pendatang baru.' }
          ]
        },
        {
          id: 'st-2-business-model',
          label: 'Model Bisnis: Dari Mana Uang Datang dan Pergi',
          domain: 'Bisnis',
          summary: 'Memetakan segmen, proposisi nilai, saluran, pendapatan, dan biaya dalam satu halaman agar strategi bisa dibahas konkret.',
          model: 'Business Model Canvas (Osterwalder)',
          analogy: 'Model bisnis adalah denah rumah: bukan tentang warna cat, tetapi di mana dapur, kamar, dan pintu. Strategi yang bagus tanpa denah jelas akan membuat orang tersesat di dalam rumahnya sendiri.',
          insight: 'Business Model Canvas memecah bisnis jadi sembilan blok: segmen pelanggan, proposisi nilai, saluran, hubungan pelanggan, aliran pendapatan, sumber daya utama, aktivitas utama, mitra utama, dan struktur biaya. Menguji tiap blok sebagai hipotesis mempercepat pembelajaran dibanding menulis rencana bisnis panjang.',
          cross: { text: 'Model Bisnis x Akuntansi', domains: ['Bisnis', 'Keuangan'], insight: 'Aliran pendapatan dan struktur biaya pada kanvas adalah versi sederhana dari laba rugi masa depan Anda.' },
          story: { who: 'Pindah dari Jual Putus ke Langganan (ilustrasi)', story: 'Sebuah usaha perangkat lunak akuntansi menjual lisensi sekali bayar. Dengan mengubah aliran pendapatan menjadi langganan bulanan, pendapatan lebih terprediksi dan hubungan pelanggan lebih panjang, tetapi arus kas awal lebih kecil sehingga perlu modal kerja.', takeaway: 'Mengubah satu blok model bisnis memengaruhi blok lain. Pikirkan dampak berantainya.' },
          actions: ['Isi sembilan blok kanvas untuk usaha Anda dalam satu halaman.', 'Tandai tiga asumsi paling berisiko dan rancang uji kecil.', 'Hubungkan struktur biaya dan pendapatan ke angka bulan lalu.'],
          level: 'Pemula', time: '5 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Langganan atau Jual Putus',
            context: 'Pelanggan Anda nyaman membeli sekali bayar, tetapi pendapatan Anda naik turun.',
            dilemma: 'Apakah beralih ke langganan?',
            choices: [
              { text: 'Uji langganan pada sebagian pelanggan baru, hitung dampak arus kas dan churn, lalu perluas bila angkanya masuk.', consequence: 'Anda belajar tanpa mempertaruhkan seluruh bisnis.', explanation: 'Eksperimen kecil pada satu blok model bisnis menurunkan risiko transisi.', best: true },
              { text: 'Ubah semua pelanggan sekaligus.', consequence: 'Pelanggan lama protes dan arus kas awal anjlok.', explanation: 'Transisi besar tanpa uji mengabaikan risiko arus kas.' },
              { text: 'Tidak berubah apa pun.', consequence: 'Pendapatan tetap tak terprediksi.', explanation: 'Masalah struktural perlu pengujian solusi.' }
            ]
          },
          quiz: [
            { q: 'Berapa blok dalam Business Model Canvas klasik?', options: ['5', '7', '9', '12'], answer: 2, why: 'Kanvas memiliki sembilan blok dari segmen pelanggan hingga struktur biaya.' },
            { q: 'Mengapa model bisnis diperlakukan sebagai hipotesis?', options: ['Agar tampak ilmiah', 'Karena asumsi perlu diuji cepat dan murah sebelum diskalakan', 'Karena tidak penting', 'Karena sudah pasti benar'], answer: 1, why: 'Menguji asumsi lebih cepat mengurangi risiko salah arah.' }
          ]
        },
        {
          id: 'st-3-generic',
          label: 'Biaya Terendah, Diferensiasi, atau Fokus',
          domain: 'Bisnis',
          summary: 'Tiga posisi bersaing dasar. Terjebak di tengah tanpa pilihan jelas adalah risiko terbesar.',
          model: 'Generic Strategies (Porter)',
          analogy: 'Dalam balapan ada yang menang karena mesin paling hemat, ada yang karena mesin paling bertenaga, dan ada yang memilih lintasan khusus yang hanya ia kuasai. Mencoba menjadi yang termurah, terbagus, dan serba bisa sekaligus biasanya membuat kehabisan bahan bakar.',
          insight: 'Porter merumuskan tiga strategi generik: kepemimpinan biaya, diferensiasi, dan fokus (pada ceruk tertentu dengan biaya atau diferensiasi). Posisi jelas membuat seluruh aktivitas perusahaan saling menguatkan. Perusahaan yang "terjebak di tengah" tidak punya keunggulan biaya maupun keunikan yang diakui pelanggan.',
          cross: { text: 'Strategi x Pemasaran', domains: ['Bisnis', 'Komunikasi'], insight: 'Positioning pemasaran adalah wajah luar dari pilihan strategi generik. Pesan harus konsisten dengan pilihan biaya atau diferensiasi.' },
          story: { who: 'Warung Grosir vs Toko Premium (ilustrasi)', story: 'Grosir bersaing dengan biaya terendah: stok besar, margin tipis, perputaran cepat. Toko premium bersaing dengan diferensiasi: kurasi, layanan, pengalaman, dan harga lebih tinggi. Toko yang menaikkan harga tetapi tak menawarkan keunikan, sambil tak mampu menandingi harga grosir, kehilangan keduanya.', takeaway: 'Pilih posisi, lalu selaraskan seluruh keputusan dengan posisi itu.' },
          actions: ['Tentukan apakah strategi utama Anda biaya, diferensiasi, atau fokus.', 'Daftar tiga aktivitas yang mendukung pilihan itu dan tiga yang bertentangan.', 'Hentikan atau kurangi satu aktivitas yang bertentangan.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Ingin Murah dan Premium Sekaligus',
            context: 'Tim ingin menurunkan harga untuk bersaing sekaligus menawarkan layanan mewah.',
            dilemma: 'Bagaimana menyikapinya?',
            choices: [
              { text: 'Pilih satu posisi utama. Jika diferensiasi, pertahankan harga dan perkuat layanan, tawarkan lini ekonomis terpisah bila perlu.', consequence: 'Pesan dan operasi menjadi selaras dan margin terjaga.', explanation: 'Posisi jelas lebih kuat daripada kompromi di tengah.', best: true },
              { text: 'Lakukan keduanya sepenuhnya.', consequence: 'Biaya naik, harga turun, margin runtuh.', explanation: 'Menggabungkan dua posisi yang saling bertentangan menggerus laba.' },
              { text: 'Ikuti apa pun yang dilakukan pesaing.', consequence: 'Anda tak punya identitas dan kalah di semua sisi.', explanation: 'Imitasi tanpa posisi sendiri tidak menciptakan keunggulan.' }
            ]
          },
          quiz: [
            { q: 'Tiga strategi generik Porter adalah...', options: ['Biaya, diferensiasi, fokus', 'Harga, tempat, promosi', 'Kuat, lemah, peluang', 'Beli, jual, tahan'], answer: 0, why: 'Kepemimpinan biaya, diferensiasi, dan fokus.' },
            { q: 'Apa risiko "terjebak di tengah"?', options: ['Tidak punya keunggulan biaya maupun keunikan yang jelas', 'Terlalu banyak laba', 'Tidak punya pelanggan sama sekali', 'Pajak naik'], answer: 0, why: 'Tanpa posisi jelas, perusahaan lemah dibanding yang fokus pada biaya atau diferensiasi.' }
          ]
        }
      ]
    },
    {
      title: 'Membangun Parit',
      lessons: [
        {
          id: 'st-4-moat',
          label: 'Parit Ekonomi: Mengapa Laba Tinggi Bisa Bertahan',
          domain: 'Bisnis',
          summary: 'Keunggulan yang sulit ditiru: biaya beralih, efek jaringan, skala, dan merek. Laba tinggi tanpa parit akan dikikis pesaing.',
          model: 'Economic Moat (Warren Buffett, Pat Dorsey)',
          analogy: 'Kastil megah dikelilingi parit air dalam berisi buaya: parit itulah yang membuat musuh berpikir dua kali. Laba tinggi menarik pesaing seperti madu menarik lalat. Tanpa parit, madu itu cepat habis.',
          insight: 'Sumber parit yang umum: biaya beralih pelanggan, efek jaringan (nilai naik seiring pengguna), keunggulan biaya karena skala atau proses, aset tak berwujud (merek, paten, izin), dan skala efisien di pasar kecil. Biaya beralih sering lebih bersifat psikologis dan operasional daripada kontrak: orang enggan mempelajari ulang sistem baru.',
          cross: { text: 'Parit x Psikologi Kebiasaan', domains: ['Bisnis', 'Psikologi'], insight: 'Kebiasaan dan keakraban membuat pelanggan bertahan. Pengalaman yang nyaman adalah bagian dari parit.' },
          story: { who: 'Perangkat Lunak Kasir untuk Toko (ilustrasi)', story: 'Setelah pemilik toko memasukkan ribuan produk, riwayat penjualan, dan melatih staf pada satu aplikasi kasir, pindah ke aplikasi lain terasa berat meski ada yang lebih murah. Itulah biaya beralih yang menjadi parit.', takeaway: 'Rancang produk agar nilai bertambah dan keluar terasa mahal secara wajar, bukan lewat jebakan kontrak.' },
          actions: ['Tulis parit apa yang Anda miliki hari ini dan buktikan dengan data (retensi, harga premium).', 'Pilih satu parit untuk diperkuat dalam enam bulan.', 'Periksa apakah parit Anda bergantung pada satu faktor yang rapuh.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Laba Tinggi Mengundang Pesaing',
            context: 'Margin Anda tinggi dan dua pesaing baru masuk dengan harga lebih murah.',
            dilemma: 'Bagaimana mempertahankan posisi?',
            choices: [
              { text: 'Perkuat parit: tingkatkan integrasi dan nilai jangka panjang bagi pelanggan, bangun komunitas, dan jaga mutu, bukan hanya turunkan harga.', consequence: 'Retensi bertahan dan pelanggan baru dari pesaing murah akhirnya mencari alternatif lebih andal.', explanation: 'Parit yang kuat membuat pelanggan tidak mudah pergi karena harga saja.', best: true },
              { text: 'Turunkan harga sampai sama dengan pesaing.', consequence: 'Margin menyusut tanpa menambah alasan untuk bertahan.', explanation: 'Perang harga tanpa parit merugikan pemain yang margin tinggi.' },
              { text: 'Abaikan pesaing baru.', consequence: 'Pelanggan sensitif harga pindah satu per satu.', explanation: 'Mengabaikan tanpa memperkuat parit membuat posisi terkikis.' }
            ]
          },
          quiz: [
            { q: 'Apa itu efek jaringan sebagai parit?', options: ['Nilai produk naik seiring bertambahnya pengguna', 'Harga turun otomatis', 'Pajak berkurang', 'Pesaing dilarang'], answer: 0, why: 'Semakin banyak pengguna, semakin besar nilai bagi tiap pengguna, sulit ditandingi pendatang baru.' },
            { q: 'Mana yang bukan sumber parit?', options: ['Biaya beralih tinggi', 'Merek kuat', 'Banyaknya diskon', 'Skala efisien'], answer: 2, why: 'Diskon bukan parit karena mudah ditiru dan menggerus margin.' }
          ]
        },
        {
          id: 'st-5-flywheel',
          label: 'Flywheel dan Efek Pertumbuhan Majemuk',
          domain: 'Bisnis',
          summary: 'Bisnis hebat menyusun siklus yang saling memperkuat: tiap putaran menghasilkan momentum untuk putaran berikutnya.',
          model: 'Flywheel Effect (Jim Collins)',
          analogy: 'Roda gila raksasa butuh dorongan keras di awal, tetapi setelah berputar, dorongan kecil terus menambah kecepatan. Tidak ada satu dorongan ajaib, hanya konsistensi yang menumpuk.',
          insight: 'Flywheel menyusun mata rantai sebab-akibat: misalnya pelanggan lebih puas membuat ulasan dan rujukan naik, yang menurunkan biaya akuisisi, yang membiayai layanan lebih baik. Menemukan lingkaran yang menguatkan diri lebih penting daripada mengejar lonjakan sesaat. Setiap bisnis punya putaran berbeda, tugas pimpinan adalah mengurangi gesekan.',
          cross: { text: 'Flywheel x Dinamika Sistem', domains: ['Bisnis', 'Data & Analitik'], insight: 'Lingkaran umpan balik positif menumbuhkan secara eksponensial sementara yang negatif meredam. Memetakan keduanya membantu menyingkap penyebab stagnasi.' },
          story: { who: 'Toko Daring Perawatan Kulit (ilustrasi)', story: 'Layanan yang baik meningkatkan ulasan, ulasan menaikkan konversi, konversi memberi volume yang menurunkan biaya per unit, dan penghematan dipakai memperbaiki layanan. Pemilik berhenti mengejar kampanye besar dan memfokuskan sumber daya untuk memperlancar siklus ini.', takeaway: 'Cari dan lancarkan siklus yang menguatkan diri, bukan hanya aksi satu kali.' },
          actions: ['Gambar lima mata rantai flywheel bisnis Anda dalam urutan sebab-akibat.', 'Tandai mata rantai dengan gesekan terbesar.', 'Rancang satu perbaikan di sana selama sebulan dan ukur dampaknya.'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema Kampanye Besar atau Perbaikan Siklus',
            context: 'Anggaran terbatas. Tim ingin kampanye besar sekali jalan, sementara ulasan pelanggan menunjukkan layanan perlu dibenahi.',
            dilemma: 'Mana yang didahulukan?',
            choices: [
              { text: 'Perbaiki mata rantai yang paling bergesekan (layanan) terlebih dahulu agar tiap pelanggan baru memperkuat siklus.', consequence: 'Rujukan dan ulasan naik, biaya akuisisi turun bertahap.', explanation: 'Memperlancar siklus menghasilkan hasil yang berlipat ganda dibanding dorongan sekali.', best: true },
              { text: 'Habiskan anggaran untuk kampanye besar.', consequence: 'Lonjakan sesaat lalu turun kembali.', explanation: 'Dorongan tunggal tanpa siklus tidak mempertahankan momentum.' },
              { text: 'Menunda semua tindakan.', consequence: 'Gesekan tetap dan momentum tak terbentuk.', explanation: 'Flywheel butuh dorongan konsisten.' }
            ]
          },
          quiz: [
            { q: 'Inti flywheel adalah...', options: ['Lingkaran sebab-akibat yang saling menguatkan', 'Satu kampanye besar', 'Diskon permanen', 'Mengurangi karyawan'], answer: 0, why: 'Tiap putaran menghasilkan momentum untuk putaran berikutnya.' },
            { q: 'Apa tugas utama pimpinan pada flywheel?', options: ['Mengurangi gesekan di mata rantai', 'Menambah birokrasi', 'Menghilangkan pelanggan', 'Menaikkan harga tiap hari'], answer: 0, why: 'Gesekan memperlambat putaran sehingga mengurangi gesekan menjaga momentum.' }
          ]
        }
      ]
    },
    {
      title: 'Bertahan & Mengeksekusi',
      lessons: [
        {
          id: 'st-6-disruption',
          label: 'Disrupsi dan Dilema Inovator',
          domain: 'Bisnis',
          summary: 'Pemain besar sering kalah bukan karena lalai, tetapi karena rasional melayani pelanggan terbaik sementara pendatang menyerang dari bawah.',
          model: 'Disruptive Innovation (Clayton Christensen)',
          analogy: 'Gelombang kecil di pantai tampak tak berbahaya, tetapi saat ia membesar bertahap, tiba-tiba ia menjadi ombak yang menyapu rumah. Disrupsi bermula dari produk sederhana dan murah untuk pelanggan yang diabaikan, lalu naik ke pasar utama.',
          insight: 'Teori Christensen membedakan inovasi berkelanjutan (memperbaiki produk untuk pelanggan terbaik) dari inovasi disruptif (lebih sederhana, murah, atau mudah dijangkau yang awalnya kurang memuaskan pasar utama). Pemain mapan secara rasional mengabaikan segmen margin rendah, sehingga pendatang tumbuh tanpa perlawanan hingga kualitasnya cukup baik.',
          cross: { text: 'Disrupsi x Teknologi', domains: ['Bisnis', 'Ekonomi'], insight: 'Teknologi baru yang menurunkan biaya produksi atau distribusi sering menjadi pemicu disrupsi, terutama bila membuka akses bagi segmen yang sebelumnya tak terlayani.' },
          story: { who: 'Aplikasi Pembayaran Mikro (ilustrasi)', story: 'Bank besar fokus pada nasabah kaya karena margin tinggi. Layanan pembayaran sederhana untuk pedagang kecil awalnya dianggap tidak menarik. Setelah menguasai jutaan pedagang dan menambah fitur, layanan itu mulai melayani segmen lebih besar.', takeaway: 'Perhatikan segmen yang diabaikan dan pendatang yang "terlalu sederhana".' },
          actions: ['Daftar tiga pendatang kecil di industri Anda yang melayani segmen yang Anda abaikan.', 'Tentukan satu eksperimen kecil di unit terpisah untuk model yang lebih sederhana dan murah.', 'Tinjau setiap kuartal metrik yang mengukur ancaman dari bawah.'],
          level: 'Mahir', time: '6 min',
          scenario: {
            title: 'Dilema Pendatang Murah yang Meremehkan Anda',
            context: 'Startup menawarkan versi sederhana produk Anda dengan harga sepertiganya ke segmen usaha kecil yang selama ini Anda abaikan.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Pantau dan buat eksperimen terpisah untuk melayani segmen itu dengan model biaya berbeda tanpa merusak produk utama.', consequence: 'Anda belajar tentang segmen baru dan memiliki opsi jika pendatang naik kelas.', explanation: 'Unit terpisah menghindari konflik dengan model margin tinggi sambil menjaga opsi.', best: true },
              { text: 'Abaikan karena segmennya kecil dan margin rendah.', consequence: 'Pendatang tumbuh dan kemudian menyerang segmen utama.', explanation: 'Mengabaikan adalah pola khas dilema inovator.' },
              { text: 'Turunkan seluruh harga produk utama.', consequence: 'Margin utama runtuh tanpa menyelesaikan masalah segmen.', explanation: 'Respons menyeluruh menghancurkan keunggulan yang masih ada.' }
            ]
          },
          quiz: [
            { q: 'Inovasi disruptif umumnya dimulai dari...', options: ['Produk yang lebih sederhana atau murah untuk segmen yang diabaikan', 'Produk paling mewah', 'Iklan terbesar', 'Pasar utama langsung'], answer: 0, why: 'Disrupsi bergerak naik dari ceruk yang kurang dilayani.' },
            { q: 'Mengapa pemain besar sering kalah oleh disrupsi?', options: ['Karena rasional mengutamakan pelanggan terbaik dan margin tertinggi', 'Karena malas', 'Karena tidak punya uang', 'Karena melanggar hukum'], answer: 0, why: 'Keputusan rasional jangka pendek membuat segmen bawah terabaikan.' }
          ]
        },
        {
          id: 'st-7-blue-ocean',
          label: 'Samudra Biru: Menciptakan Ruang Pasar Baru',
          domain: 'Bisnis',
          summary: 'Alih-alih bertarung di pasar penuh pesaing, ubah faktor yang dihapus, dikurangi, ditingkatkan, dan diciptakan agar persaingan menjadi tak relevan.',
          model: 'Blue Ocean Strategy (Kim & Mauborgne)',
          analogy: 'Pasar yang penuh pesaing seperti kolam merah berdarah penuh ikan hiu. Samudra biru adalah perairan luas yang belum terjamah karena Anda mengubah apa yang ditawarkan, bukan sekadar bertarung lebih keras.',
          insight: 'Kerangka ERRC (Eliminate, Reduce, Raise, Create) mendorong perusahaan menghapus faktor yang industri anggap wajib tetapi pelanggan tak menghargai, mengurangi yang berlebihan, meningkatkan yang pelanggan inginkan, dan menciptakan yang belum pernah ditawarkan. Tujuannya inovasi nilai: biaya turun sekaligus nilai bagi pelanggan naik.',
          cross: { text: 'Samudra Biru x Perilaku Konsumen', domains: ['Bisnis', 'Psikologi'], insight: 'Non-pelanggan sering menyimpan peluang terbesar. Pahami alasan mereka tidak membeli, bukan hanya mengejar pelanggan pesaing.' },
          story: { who: 'Gym Harian Singkat (ilustrasi)', story: 'Banyak gym bersaing lewat fasilitas lengkap dan kontrak panjang. Sebuah studio memilih menghapus kolam dan sauna, mengurangi peralatan, meningkatkan kualitas pelatih untuk sesi 30 menit, dan menciptakan jadwal fleksibel. Biaya turun dan segmen pekerja sibuk terlayani.', takeaway: 'Ubah penawaran, bukan hanya intensitas persaingan.' },
          actions: ['Tulis faktor yang industri Anda anggap wajib. Tandai mana yang tak dihargai pelanggan.', 'Isi kuadran ERRC untuk produk Anda.', 'Wawancarai tiga non-pelanggan: apa yang menghalangi mereka membeli?'],
          level: 'Mahir', time: '6 min',
          scenario: {
            title: 'Dilema Fitur Tambahan Demi Mengalahkan Pesaing',
            context: 'Pesaing terus menambah fitur dan harga naik. Pelanggan baru banyak mengeluh produk terlalu rumit.',
            dilemma: 'Apa pendekatan paling cerdas?',
            choices: [
              { text: 'Gunakan ERRC: hapus dan kurangi fitur yang jarang dipakai, tingkatkan yang paling dihargai, dan ciptakan satu elemen baru yang menyelesaikan keluhan non-pelanggan.', consequence: 'Produk lebih sederhana, biaya turun, dan segmen baru terbuka.', explanation: 'Inovasi nilai menaikkan nilai sambil menurunkan biaya.', best: true },
              { text: 'Tambah fitur sebanyak pesaing.', consequence: 'Biaya dan kerumitan naik, perang fitur berlanjut.', explanation: 'Mengikuti pesaing menjebak Anda di samudra merah.' },
              { text: 'Berhenti berinovasi.', consequence: 'Anda kehilangan relevansi secara perlahan.', explanation: 'Diam bukan strategi bila pasar bergerak.' }
            ]
          },
          quiz: [
            { q: 'Apa kepanjangan ERRC?', options: ['Eliminate, Reduce, Raise, Create', 'Earn, Retain, Rebuild, Choose', 'Expand, Run, Review, Close', 'Estimate, Record, Report, Check'], answer: 0, why: 'ERRC: hapus, kurangi, tingkatkan, ciptakan.' },
            { q: 'Tujuan inovasi nilai?', options: ['Menaikkan nilai bagi pelanggan sambil menurunkan biaya', 'Menaikkan harga saja', 'Menambah fitur sebanyak mungkin', 'Meniru pesaing'], answer: 0, why: 'Inovasi nilai memutus tukar-tambah antara nilai dan biaya.' }
          ]
        },
        {
          id: 'st-8-okr',
          label: 'Mengeksekusi Strategi: OKR, KPI, dan Ritme Tinjauan',
          domain: 'Bisnis',
          summary: 'Strategi tanpa eksekusi hanyalah presentasi. Terjemahkan pilihan ke tujuan terukur, ukuran kemajuan, dan ritme tinjauan yang konsisten.',
          model: 'OKR (Objectives and Key Results) & Cadence',
          analogy: 'Strategi adalah peta, OKR adalah koordinat per etape, dan ritme tinjauan adalah GPS yang berbunyi bila Anda keluar jalur. Tanpa ketiganya, tim berkendara dengan semangat tetapi tanpa arah pasti.',
          insight: 'OKR memasangkan Objective (kualitatif dan menginspirasi) dengan 2-4 Key Results (terukur). KPI memantau kesehatan rutin, OKR mendorong perubahan. Prinsip kunci: sedikit prioritas, hasil bukan aktivitas, transparan, dan ditinjau tiap pekan atau bulan. Terlalu banyak target membuat tidak ada yang tercapai.',
          cross: { text: 'Eksekusi x Psikologi Motivasi', domains: ['Bisnis', 'Psikologi'], insight: 'Tujuan yang spesifik dan menantang meningkatkan kinerja bila disertai umpan balik. Ukuran yang salah mendorong perilaku yang salah.' },
          story: { who: 'Toko Daring 8 Orang (ilustrasi)', story: 'Tim memiliki 14 prioritas dan tak ada yang selesai. Setelah memilih satu objektif kuartal "pelanggan beli lagi" dengan tiga hasil kunci (tingkat pembelian ulang, waktu respons, ulasan), tim fokus dan hasilnya terlihat.', takeaway: 'Kurangi prioritas dan ukur hasil, bukan kesibukan.' },
          actions: ['Tulis satu Objective kuartal dan tiga Key Results terukur.', 'Pisahkan KPI rutin dari OKR perubahan.', 'Jadwalkan tinjauan 30 menit tiap pekan dengan satu pertanyaan: apa yang menghalangi?'],
          level: 'Menengah', time: '5 min',
          scenario: {
            title: 'Dilema 12 Prioritas Sekaligus',
            context: 'Tim punya dua belas inisiatif yang semuanya dianggap penting dan hampir tak ada yang selesai.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Pilih satu sampai tiga objektif yang paling mendukung strategi, tulis hasil kunci terukur, dan tunda sisanya secara terbuka.', consequence: 'Tim fokus dan kemajuan terlihat tiap pekan.', explanation: 'Fokus menciptakan hasil, banyak prioritas menciptakan kesibukan.', best: true },
              { text: 'Pertahankan semuanya dan tuntut kerja lebih keras.', consequence: 'Kelelahan naik dan kualitas turun.', explanation: 'Menambah tekanan tanpa memangkas prioritas tidak efektif.' },
              { text: 'Batalkan seluruh target.', consequence: 'Tim kehilangan arah.', explanation: 'Target tetap diperlukan, hanya perlu lebih sedikit dan terukur.' }
            ]
          },
          quiz: [
            { q: 'Key Results yang baik bersifat...', options: ['Terukur dan berorientasi hasil', 'Abstrak', 'Banyak sekali', 'Berupa daftar aktivitas'], answer: 0, why: 'Hasil kunci mengukur kemajuan nyata, bukan sekadar kesibukan.' },
            { q: 'Mengapa tinjauan rutin penting?', options: ['Mendeteksi penyimpangan lebih awal dan mengatasi hambatan', 'Agar rapat banyak', 'Untuk mengganti tim', 'Tidak penting'], answer: 0, why: 'Ritme tinjauan menjaga strategi tetap hidup.' }
          ]
        }
      ]
    }
  ]
});
