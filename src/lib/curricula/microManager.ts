import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const MICRO_MANAGER_CURRICULUM = buildPath({
  id: 'curriculum-mikroekonomi-manajer',
  topic: 'Mikroekonomi untuk Manajer & Pebisnis',
  description:
    'Biaya peluang, analisis marginal, elastisitas, skala ekonomis, struktur pasar, teori permainan, informasi asimetris, dan ekonomi platform. Mikroekonomi yang dipakai langsung untuk menetapkan harga, memilih strategi, dan membaca pasar.',
  stages: [
    {
      title: 'Dasar Keputusan Ekonomis',
      lessons: [
        {
          id: 'mi-1-marginal',
          label: 'Biaya Peluang dan Analisis Marginal',
          domain: 'Ekonomi',
          summary: 'Keputusan yang baik membandingkan tambahan manfaat dengan tambahan biaya, bukan rata-rata atau biaya yang sudah hangus.',
          model: 'Opportunity Cost dan Marginal Analysis',
          analogy: 'Anda sudah makan tiga piring di prasmanan. Piring keempat ditimbang dari nikmat tambahan dan rasa kenyang tambahan, bukan dari harga buffet yang sudah dibayar.',
          insight: 'Biaya peluang adalah nilai alternatif terbaik yang dikorbankan. Prinsip marginal: lakukan suatu kegiatan selama manfaat marginal lebih besar daripada biaya marginal. Biaya hangus (sunk cost) tidak boleh memengaruhi keputusan ke depan karena tidak dapat diubah.',
          cross: { text: 'Ekonomi x Psikologi', domains: ['Ekonomi', 'Psikologi'], insight: 'Sunk cost fallacy membuat orang meneruskan proyek gagal hanya karena sudah banyak mengeluarkan uang.' },
          story: { who: 'Pabrik Roti Menambah Shift (ilustrasi)', story: 'Menambah shift malam menambah biaya Rp 12 juta per bulan dan menambah penjualan Rp 18 juta dengan margin kontribusi 50% (Rp 9 juta). Manfaat marginal Rp 9 juta lebih kecil dari biaya marginal Rp 12 juta, sehingga shift malam tidak layak walaupun omzet naik.', takeaway: 'Omzet naik belum berarti keputusan benar.' },
          actions: ['Tulis satu keputusan terbaru dan daftar biaya marginal serta manfaat marginalnya.', 'Coret semua biaya hangus dari pertimbangan.', 'Sebutkan alternatif terbaik yang dikorbankan.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Proyek yang Sudah Menghabiskan Rp 200 Juta',
            context: 'Aplikasi internal sudah menghabiskan Rp 200 juta. Menyelesaikannya butuh Rp 80 juta lagi, dan manfaat yang diperkirakan hanya Rp 50 juta.',
            dilemma: 'Teruskan atau hentikan?',
            choices: [
              { text: 'Hentikan: Rp 200 juta sudah hangus; tambahan Rp 80 juta hanya menghasilkan Rp 50 juta.', consequence: 'Anda menyelamatkan Rp 30 juta dan mengalihkan tim ke proyek lain.', explanation: 'Putuskan dari biaya dan manfaat ke depan.', best: true },
              { text: 'Teruskan karena sudah terlanjur mengeluarkan banyak.', consequence: 'Anda menambah kerugian Rp 30 juta.', explanation: 'Sunk cost tidak seharusnya memengaruhi keputusan.' },
              { text: 'Teruskan separuh jalan agar kompromi.', consequence: 'Hasilnya setengah jadi tanpa manfaat.', explanation: 'Kompromi tanpa hitungan marginal tidak menolong.' }
            ]
          },
          quiz: [
            { q: 'Biaya peluang adalah...', options: ['Nilai alternatif terbaik yang dikorbankan', 'Biaya yang sudah dibayar', 'Biaya tetap bulanan', 'Pajak atas proyek'], answer: 0, why: 'Biaya peluang adalah nilai pilihan terbaik yang tidak diambil.' },
            { q: 'Mana yang harus diabaikan dalam keputusan ke depan?', options: ['Biaya hangus (sunk cost)', 'Biaya marginal', 'Manfaat marginal', 'Biaya peluang'], answer: 0, why: 'Biaya hangus tidak bisa diubah oleh keputusan apa pun.' }
          ]
        },
        {
          id: 'mi-2-elastisitas',
          label: 'Elastisitas Permintaan dan Keputusan Harga',
          domain: 'Ekonomi',
          summary: 'Seberapa sensitif pembeli terhadap harga menentukan apakah menaikkan atau menurunkan harga menambah pendapatan.',
          model: 'Price Elasticity of Demand',
          analogy: 'Garam dan tiket konser. Harga garam naik 20% hampir tak mengubah belanja Anda, tetapi harga tiket naik 20% bisa membuat Anda batal pergi.',
          insight: 'Elastisitas harga = % perubahan kuantitas / % perubahan harga. Jika nilai mutlaknya lebih dari 1 (elastis), kenaikan harga menurunkan pendapatan; jika kurang dari 1 (inelastis), kenaikan harga menaikkan pendapatan. Faktor penentu: ketersediaan pengganti, porsi dalam anggaran, urgensi, dan jangka waktu.',
          cross: { text: 'Harga x Pemasaran', domains: ['Ekonomi', 'Bisnis'], insight: 'Diferensiasi dan merek mengurangi elastisitas karena pembeli tidak mudah beralih ke pengganti.' },
          story: { who: 'Kedai Kopi Menaikkan Harga (ilustrasi)', story: 'Harga naik 10% dan penjualan turun 15%. Elastisitas sekitar −1,5 (elastis): pendapatan turun dari 100 menjadi 1,10 × 0,85 = 93,5 atau turun 6,5%. Di kedai lain dengan pelanggan setia, harga naik 10% hanya menurunkan penjualan 4%, dan pendapatan naik.', takeaway: 'Uji harga pada segmen yang berbeda, jangan menyamaratakan.' },
          actions: ['Naikkan harga kecil pada satu produk untuk seminggu dan catat perubahan kuantitas.', 'Hitung elastisitas dari hasilnya.', 'Pakai kalkulator Harga & Diskon di tab Alat untuk menguji skenario.'],
          level: 'Menengah', time: '6 min', tool: 'pricing',
          scenario: {
            title: 'Dilema Menaikkan Harga Produk Andalan',
            context: 'Biaya bahan naik 8%. Produk andalan Anda punya banyak pengganti di pasar.',
            dilemma: 'Bagaimana menyesuaikan harga?',
            choices: [
              { text: 'Uji kenaikan kecil bertahap, ukur elastisitas, dan pertimbangkan membuat varian premium yang kurang elastis.', consequence: 'Anda menemukan batas harga yang aman dan varian premium menyerap kenaikan biaya.', explanation: 'Elastisitas tinggi menuntut pendekatan hati-hati dan diferensiasi.', best: true },
              { text: 'Naikkan 20% sekaligus agar aman.', consequence: 'Pelanggan beralih ke pengganti dan pendapatan turun.', explanation: 'Pada pasar elastis kenaikan besar merugikan.' },
              { text: 'Tahan harga selamanya.', consequence: 'Margin terkikis tiap bulan.', explanation: 'Biaya naik tanpa penyesuaian menggerus laba.' }
            ]
          },
          quiz: [
            { q: 'Permintaan elastis (|E| > 1). Jika harga naik, pendapatan...', options: ['Turun', 'Naik', 'Tetap', 'Tidak bisa diketahui'], answer: 0, why: 'Penurunan kuantitas lebih besar daripada kenaikan harga.' },
            { q: 'Faktor yang membuat permintaan lebih inelastis?', options: ['Tidak banyak barang pengganti', 'Banyak pesaing', 'Harga murah sekali', 'Produk tidak dibutuhkan'], answer: 0, why: 'Sedikit pengganti membuat pembeli tetap membeli.' }
          ]
        },
        {
          id: 'mi-3-skala',
          label: 'Struktur Biaya dan Skala Ekonomis',
          domain: 'Ekonomi',
          summary: 'Mengapa biaya per unit turun saat volume naik, dan kapan skala justru menjadi beban.',
          model: 'Economies of Scale dan Cost Curves',
          analogy: 'Memasak untuk 4 orang dan memasak untuk 40 orang memakai dapur yang sama. Biaya per porsi turun, tetapi di titik tertentu butuh dapur kedua dan koordinasi menjadi rumit.',
          insight: 'Biaya tetap tersebar pada lebih banyak unit sehingga biaya rata-rata turun (skala ekonomis). Di titik tertentu muncul diseconomies of scale: koordinasi, birokrasi, dan kapasitas penuh menaikkan biaya per unit. Skala efisien minimum (MES) menentukan seberapa besar pemain harus berukuran agar kompetitif.',
          cross: { text: 'Skala x Strategi', domains: ['Ekonomi', 'Bisnis'], insight: 'Keunggulan biaya dari skala adalah salah satu sumber moat, tetapi hanya bila volume benar-benar bisa dicapai.' },
          story: { who: 'Percetakan Menambah Mesin (ilustrasi)', story: 'Percetakan dengan biaya tetap Rp 60 juta per bulan dan biaya variabel Rp 500 per lembar. Pada 100 ribu lembar biaya rata-rata Rp 1.100; pada 300 ribu lembar Rp 700. Namun setelah 400 ribu lembar kapasitas penuh, lembur dan perbaikan membuat biaya per lembar naik lagi.', takeaway: 'Ada rentang volume optimum, bukan makin besar makin baik.' },
          actions: ['Pisahkan biaya tetap dan variabel usaha Anda.', 'Hitung biaya rata-rata pada tiga tingkat volume.', 'Tandai volume saat biaya per unit mulai naik lagi.'],
          level: 'Menengah', time: '6 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Memperbesar Kapasitas',
            context: 'Permintaan naik 30%. Menambah gudang dan mesin menaikkan biaya tetap 50%.',
            dilemma: 'Apakah memperbesar kapasitas?',
            choices: [
              { text: 'Hitung biaya rata-rata pada volume proyeksi dan titik impas baru sebelum memutuskan; bila volume stabil, perbesar bertahap.', consequence: 'Anda memperbesar kapasitas separuh dahulu dan menambah sisanya setelah permintaan terbukti.', explanation: 'Skala menguntungkan hanya bila volume terisi.', best: true },
              { text: 'Perbesar penuh sekarang karena skala selalu menguntungkan.', consequence: 'Permintaan turun dan biaya tetap membebani.', explanation: 'Biaya tetap tinggi berisiko bila volume tak tercapai.' },
              { text: 'Jangan berkembang sama sekali.', consequence: 'Pesaing merebut permintaan yang tidak terlayani.', explanation: 'Menghindari skala sepenuhnya juga mahal.' }
            ]
          },
          quiz: [
            { q: 'Mengapa biaya rata-rata turun saat volume naik?', options: ['Biaya tetap terbagi ke lebih banyak unit', 'Biaya variabel menjadi nol', 'Harga bahan selalu turun', 'Pajak berkurang'], answer: 0, why: 'Biaya tetap tersebar sehingga biaya per unit turun.' },
            { q: 'Diseconomies of scale berarti...', options: ['Biaya per unit naik karena koordinasi dan kapasitas terlalu besar', 'Biaya selalu turun', 'Harga selalu naik', 'Pajak lebih tinggi'], answer: 0, why: 'Organisasi yang terlalu besar kehilangan efisiensi.' }
          ]
        }
      ]
    },
    {
      title: 'Struktur Pasar dan Strategi',
      lessons: [
        {
          id: 'mi-4-pasar',
          label: 'Struktur Pasar dan Daya Tentukan Harga',
          domain: 'Ekonomi',
          summary: 'Persaingan sempurna, monopoli, oligopoli, dan persaingan monopolistik menentukan seberapa besar kendali Anda atas harga.',
          model: 'Market Structures',
          analogy: 'Pedagang cabai di pasar tradisional hampir tidak bisa menaikkan harga sendiri, sedangkan satu-satunya apotek di desa terpencil punya kendali besar.',
          insight: 'Di persaingan sempurna, pelaku menerima harga pasar dan laba ekonomi cenderung nol dalam jangka panjang. Monopoli dan oligopoli punya daya harga karena hambatan masuk. Persaingan monopolistik (banyak penjual dengan produk terdiferensiasi, seperti kafe dan salon) memungkinkan harga sedikit di atas biaya marginal selama diferensiasi bertahan.',
          cross: { text: 'Pasar x Regulasi', domains: ['Ekonomi', 'Hukum'], insight: 'Aturan persaingan usaha membatasi praktik yang menutup pasar atau mengatur harga bersama.' },
          story: { who: 'Salon di Kompleks Ramai (ilustrasi)', story: 'Lima salon di satu kompleks bersaing dengan harga mirip. Salon yang membangun spesialisasi kerudung dan perawatan pengantin dapat menaikkan harga 25% karena pelanggannya tidak membandingkan dengan salon biasa.', takeaway: 'Diferensiasi menciptakan daya harga di pasar ramai.' },
          actions: ['Tentukan struktur pasar tempat usaha Anda beroperasi.', 'Daftar tiga hambatan masuk yang melindungi atau justru tidak melindungi usaha Anda.', 'Pilih satu bentuk diferensiasi untuk diperkuat.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Pasar yang Penuh Pesaing Serupa',
            context: 'Produk Anda nyaris sama dengan lima pesaing dan harga saling menekan.',
            dilemma: 'Bagaimana keluar dari perang harga?',
            choices: [
              { text: 'Pilih segmen khusus dan bangun diferensiasi yang sulit ditiru (layanan, spesialisasi, merek), lalu tetapkan harga sesuai nilai.', consequence: 'Margin Anda membaik karena pelanggan tak lagi membandingkan harga murni.', explanation: 'Diferensiasi mengurangi elastisitas dan menciptakan daya harga.', best: true },
              { text: 'Turunkan harga terus agar menang.', consequence: 'Semua pesaing ikut turun dan margin habis.', explanation: 'Perang harga pada produk serupa merugikan semua.' },
              { text: 'Tiru semua yang dilakukan pesaing.', consequence: 'Anda tak punya alasan unik dipilih.', explanation: 'Meniru tidak menciptakan keunggulan.' }
            ]
          },
          quiz: [
            { q: 'Di persaingan sempurna, pelaku usaha...', options: ['Menerima harga pasar', 'Menentukan harga sendiri', 'Selalu untung besar', 'Punya hambatan masuk tinggi'], answer: 0, why: 'Banyak penjual dengan produk sama membuat harga ditentukan pasar.' },
            { q: 'Apa yang memberi daya harga pada persaingan monopolistik?', options: ['Diferensiasi produk', 'Banyaknya pesaing', 'Harga yang sama', 'Pajak rendah'], answer: 0, why: 'Produk yang terdiferensiasi mengurangi substitusi langsung.' }
          ]
        },
        {
          id: 'mi-5-game',
          label: 'Teori Permainan: Perang Harga dan Kerja Sama',
          domain: 'Ekonomi',
          summary: 'Keputusan Anda bergantung pada reaksi pesaing. Teori permainan membantu memprediksi dan memilih respons.',
          model: 'Game Theory dan Prisoner’s Dilemma',
          analogy: 'Dua penjual bakso di jalan yang sama. Jika keduanya menurunkan harga, keduanya rugi; jika keduanya tahan harga, keduanya untung. Namun masing-masing tergoda memotong harga lebih dulu.',
          insight: 'Dalam dilema tahanan, strategi dominan (memotong harga) menghasilkan hasil yang lebih buruk bagi semua. Dalam permainan berulang, strategi seperti tit-for-tat (mulai bekerja sama, lalu meniru langkah lawan) dapat mempertahankan harga stabil. Sinyal harga, komitmen yang kredibel, dan reputasi mengubah insentif. Catatan: kesepakatan harga antar pesaing ilegal menurut hukum persaingan usaha.',
          cross: { text: 'Strategi x Hukum Persaingan', domains: ['Ekonomi', 'Hukum'], insight: 'Koordinasi harga secara eksplisit melanggar hukum; yang sah adalah memperhatikan reaksi pesaing secara independen.' },
          story: { who: 'Dua Toko Elektronik (ilustrasi)', story: 'Toko A memotong harga 10% untuk merebut pelanggan. Toko B membalas hari yang sama. Akhirnya pelanggan tak berpindah, margin keduanya turun 10 poin. Toko A kemudian beralih ke garansi dan layanan purna jual sebagai pembeda.', takeaway: 'Pikirkan reaksi lawan sebelum bergerak.' },
          actions: ['Gambar tabel hasil sederhana dua pihak: potong harga atau tahan.', 'Perkirakan respons pesaing utama Anda.', 'Cari langkah yang tidak mudah dibalas (layanan, kontrak, spesialisasi).'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Pesaing Memotong Harga Duluan',
            context: 'Pesaing utama memotong harga 15% untuk merebut pasar.',
            dilemma: 'Apa respons Anda?',
            choices: [
              { text: 'Analisis dampaknya pada pelanggan kunci, pertahankan harga bila nilai Anda berbeda, dan beri penawaran terarah ke segmen yang berisiko pindah.', consequence: 'Pelanggan setia bertahan dan margin terlindungi.', explanation: 'Respons selektif lebih murah daripada mengikuti semua pemotongan harga.', best: true },
              { text: 'Ikuti potongan harga sepenuhnya.', consequence: 'Kedua pihak rugi dan perang harga berlanjut.', explanation: 'Mengikuti tanpa hitungan memperburuk hasil kolektif.' },
              { text: 'Hubungi pesaing untuk sepakat menaikkan harga bersama.', consequence: 'Itu pelanggaran hukum persaingan usaha dan berisiko sanksi.', explanation: 'Kesepakatan harga antar pesaing dilarang.' }
            ]
          },
          quiz: [
            { q: 'Pada dilema tahanan, strategi dominan masing-masing pihak...', options: ['Menghasilkan hasil yang lebih buruk bagi keduanya', 'Selalu menguntungkan keduanya', 'Tidak punya dampak', 'Menghapus pesaing'], answer: 0, why: 'Individu rasional menghasilkan hasil kolektif yang lebih buruk.' },
            { q: 'Strategi yang dapat menjaga kerja sama pada permainan berulang?', options: ['Tit-for-tat', 'Selalu memotong harga', 'Menyembunyikan produk', 'Menaikkan iklan saja'], answer: 0, why: 'Tit-for-tat menghukum pengkhianatan dan memaafkan kerja sama.' }
          ]
        }
      ]
    },
    {
      title: 'Pasar yang Tidak Sempurna',
      lessons: [
        {
          id: 'mi-6-info',
          label: 'Informasi Asimetris: Adverse Selection dan Moral Hazard',
          domain: 'Ekonomi',
          summary: 'Ketika satu pihak tahu lebih banyak, pasar bisa rusak. Cara bisnis menanganinya lewat sinyal, garansi, dan insentif.',
          model: 'Asymmetric Information (Akerlof, Spence)',
          analogy: 'Pasar mobil bekas: penjual tahu mobilnya mulus atau tidak, pembeli tidak. Pembeli hanya mau membayar harga rata-rata, sehingga penjual mobil bagus menarik diri dan tinggal yang buruk.',
          insight: 'Adverse selection terjadi sebelum transaksi, saat pihak berisiko tinggi lebih mungkin ikut (misalnya pemohon pinjaman berisiko). Moral hazard terjadi sesudah transaksi, saat pihak yang terlindungi berperilaku lebih berisiko. Solusi: sinyal (sertifikat, garansi), penyaringan (verifikasi, riwayat), dan penyelarasan insentif (deductible, bagi hasil).',
          cross: { text: 'Informasi x Kepercayaan', domains: ['Ekonomi', 'Psikologi'], insight: 'Ulasan, reputasi, dan jaminan platform menurunkan asimetri sehingga transaksi dengan orang asing menjadi mungkin.' },
          story: { who: 'Platform Pinjaman Mikro (ilustrasi)', story: 'Platform meminjamkan tanpa verifikasi dan gagal bayar 18%. Setelah menambah verifikasi usaha dan riwayat pembayaran, gagal bayar turun menjadi 7% sehingga bunga bisa diturunkan, yang menarik peminjam baik.', takeaway: 'Mengurangi asimetri informasi menurunkan biaya dan menyehatkan pasar.' },
          actions: ['Tentukan informasi apa yang pelanggan atau mitra Anda tidak bisa verifikasi.', 'Tambahkan satu sinyal kepercayaan (garansi, bukti kerja, ulasan).', 'Rancang satu insentif agar mitra berperilaku sesuai kepentingan bersama.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Penjual Baru Tanpa Reputasi',
            context: 'Anda menjual jasa mahal dan calon klien ragu karena tidak bisa menilai kualitas sebelum membeli.',
            dilemma: 'Bagaimana meyakinkan mereka?',
            choices: [
              { text: 'Berikan sinyal kredibel: portofolio terverifikasi, garansi hasil terbatas, pembayaran bertahap per tahap kerja.', consequence: 'Klien merasa risikonya terbagi dan menandatangani kontrak.', explanation: 'Sinyal dan garansi memindahkan sebagian risiko kepada penjual.', best: true },
              { text: 'Klaim terbaik di kota tanpa bukti.', consequence: 'Klien tidak percaya karena semua orang mengatakan hal yang sama.', explanation: 'Sinyal murah tidak kredibel.' },
              { text: 'Turunkan harga sebesar mungkin.', consequence: 'Harga rendah justru dianggap sinyal kualitas buruk.', explanation: 'Harga sangat rendah dapat memperkuat kecurigaan.' }
            ]
          },
          quiz: [
            { q: 'Moral hazard adalah...', options: ['Perilaku lebih berisiko setelah terlindungi dari akibatnya', 'Penolakan transaksi sebelum terjadi', 'Pajak tambahan', 'Kenaikan harga bahan'], answer: 0, why: 'Moral hazard muncul setelah transaksi saat insentif berubah.' },
            { q: 'Contoh sinyal kredibel bagi pembeli?', options: ['Garansi yang mahal bila produk buruk', 'Slogan menarik', 'Warna logo', 'Diskon acak'], answer: 0, why: 'Garansi mahal hanya masuk akal bagi penjual dengan kualitas bagus.' }
          ]
        },
        {
          id: 'mi-7-eksternal',
          label: 'Eksternalitas, Regulasi, dan Barang Publik',
          domain: 'Ekonomi',
          summary: 'Biaya atau manfaat yang jatuh pada pihak lain memengaruhi regulasi, pajak, dan peluang bisnis.',
          model: 'Externalities dan Coase Theorem',
          analogy: 'Pabrik membuang limbah ke sungai. Biaya pencemaran ditanggung warga hilir, bukan pabrik, sehingga pabrik berproduksi lebih banyak dari yang sebaiknya.',
          insight: 'Eksternalitas negatif (polusi) membuat produksi berlebih; eksternalitas positif (pendidikan, vaksin) membuat produksi kurang. Solusi: pajak atau subsidi (pigouvian), regulasi, atau pasar hak (perdagangan karbon). Barang publik dan sumber daya bersama menimbulkan masalah free rider dan tragedy of the commons. Bisnis perlu mengantisipasi arah regulasi dan peluang dari internalisasi biaya.',
          cross: { text: 'Ekonomi x Kebijakan', domains: ['Ekonomi', 'Hukum'], insight: 'Regulasi lingkungan dan standar keberlanjutan menciptakan biaya baru bagi sebagian pemain dan peluang bagi pemain lain.' },
          story: { who: 'Pabrik Tekstil dan IPAL (ilustrasi)', story: 'Pabrik membangun pengolah limbah dengan biaya Rp 2 miliar sebelum regulasi mengetat. Pesaing yang menunda terkena denda dan penutupan sementara, sementara pabrik tadi memenangkan kontrak merek global yang mensyaratkan kepatuhan.', takeaway: 'Internalisasi biaya lebih awal dapat menjadi keunggulan.' },
          actions: ['Identifikasi satu eksternalitas dari usaha Anda (positif atau negatif).', 'Tinjau regulasi yang mungkin menyasar eksternalitas itu.', 'Cari peluang bisnis dari menyelesaikan eksternalitas tersebut.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Biaya Kepatuhan yang Belum Diwajibkan',
            context: 'Anda dapat berinvestasi pada pengelolaan limbah sekarang, padahal regulasi belum mewajibkannya.',
            dilemma: 'Apakah berinvestasi lebih awal?',
            choices: [
              { text: 'Nilai biaya, risiko regulasi, dan peluang kontrak dengan pembeli yang menuntut kepatuhan, lalu investasikan bertahap.', consequence: 'Anda siap saat aturan datang dan membuka akses ke pelanggan baru.', explanation: 'Antisipasi regulasi mengurangi biaya mendadak dan membuka peluang.', best: true },
              { text: 'Tunggu sampai ada denda.', consequence: 'Biaya darurat lebih mahal dan reputasi tercoreng.', explanation: 'Menunda membuat biaya mendadak lebih tinggi.' },
              { text: 'Abaikan karena bukan tanggung jawab bisnis.', consequence: 'Anda berisiko sanksi dan kehilangan pelanggan.', explanation: 'Eksternalitas pada akhirnya kembali menjadi biaya.' }
            ]
          },
          quiz: [
            { q: 'Eksternalitas negatif cenderung menyebabkan...', options: ['Produksi berlebih dibanding yang optimal bagi masyarakat', 'Produksi kurang', 'Harga turun otomatis', 'Laba nol'], answer: 0, why: 'Produsen tidak menanggung seluruh biaya sehingga memproduksi terlalu banyak.' },
            { q: 'Masalah free rider muncul pada...', options: ['Barang publik', 'Barang mewah', 'Barang pribadi', 'Barang impor'], answer: 0, why: 'Orang menikmati tanpa membayar sehingga penyediaan kurang.' }
          ]
        },
        {
          id: 'mi-8-platform',
          label: 'Ekonomi Platform dan Efek Jaringan',
          domain: 'Bisnis',
          summary: 'Mengapa marketplace dan aplikasi dapat tumbuh eksplosif, dan bagaimana mengatasi masalah ayam dan telur.',
          model: 'Network Effects dan Two-Sided Markets',
          analogy: 'Pasar tradisional baru: pembeli datang bila banyak penjual, penjual datang bila banyak pembeli. Pasar yang sudah ramai makin ramai, pasar sepi makin sepi.',
          insight: 'Efek jaringan langsung: nilai naik saat lebih banyak orang memakai (aplikasi pesan). Efek tidak langsung: dua sisi saling menarik (pembeli dan penjual). Tantangannya adalah cold start: mulai dari satu sisi atau satu kota dengan subsidi. Risiko: multihoming, persaingan komisi, dan tekanan regulasi. Metrik penting: likuiditas pasar dan rasio take rate terhadap nilai yang diberikan.',
          cross: { text: 'Platform x Perilaku', domains: ['Bisnis', 'Psikologi'], insight: 'Kebiasaan dan biaya beralih membuat pengguna bertahan; kepercayaan pada ulasan dan sistem pembayaran menjadi pondasi.' },
          story: { who: 'Marketplace Jasa Lokal (ilustrasi)', story: 'Marketplace jasa servis AC memulai dari satu kota dengan 30 teknisi terverifikasi dan jaminan pekerjaan, baru membuka pembeli. Setelah likuiditas tercapai (pesanan terlayani dalam 2 jam), mereka meluas ke kota kedua.', takeaway: 'Bangun likuiditas di ruang kecil sebelum meluas.' },
          actions: ['Tentukan dua sisi pasar yang Anda pertemukan.', 'Pilih satu segmen kecil untuk mencapai likuiditas dahulu.', 'Hitung take rate yang adil bagi kedua sisi.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Marketplace Baru yang Sepi',
            context: 'Penjual enggan bergabung karena belum ada pembeli, dan pembeli enggan datang karena pilihan terbatas.',
            dilemma: 'Dari mana memulai?',
            choices: [
              { text: 'Fokus satu kota dan satu kategori, rekrut sisi yang paling sulit dengan insentif, lalu buka sisi lainnya setelah pasokan cukup.', consequence: 'Likuiditas tercapai di area kecil dan pertumbuhan lebih sehat.', explanation: 'Memulai sempit mengatasi masalah ayam dan telur.', best: true },
              { text: 'Luncurkan nasional dan berharap orang datang.', consequence: 'Pasar sepi di mana-mana dan pengguna pergi.', explanation: 'Likuiditas tipis tidak cukup untuk menahan pengguna.' },
              { text: 'Pungut komisi tinggi dari awal.', consequence: 'Penjual menolak bergabung.', explanation: 'Komisi tinggi di awal mempersulit pertumbuhan.' }
            ]
          },
          quiz: [
            { q: 'Efek jaringan berarti...', options: ['Nilai produk naik saat lebih banyak orang memakainya', 'Harga selalu turun', 'Biaya iklan meningkat', 'Produk lebih mudah ditiru'], answer: 0, why: 'Setiap pengguna baru menambah nilai bagi pengguna lain.' },
            { q: 'Masalah cold start pada marketplace adalah...', options: ['Kesulitan menarik satu sisi tanpa sisi lain', 'Server lambat', 'Pajak tinggi', 'Biaya kantor mahal'], answer: 0, why: 'Dua sisi saling bergantung sehingga sulit memulai.' }
          ]
        }
      ]
    }
  ]
});
