import { buildPath } from '../curriculumBuilder';

// Jalur ini ditulis ulang dengan kata-kata NODUS dari teori klasik yang lazim diajarkan di program bisnis dan
// ekonomi universitas. Bukan materi, studi kasus, atau kurikulum resmi institusi mana pun, dan tidak berafiliasi
// dengan mereka. Nama penemu dan tahun terbitan disebut supaya pembaca bisa menelusuri sumber aslinya.
// Edukasi, bukan rekomendasi investasi. Angka pada contoh bertanda "ilustrasi" hanyalah contoh hitung.
export const FRAMEWORKS_CURRICULUM = buildPath({
  id: 'curriculum-kerangka-ruang-kuliah',
  topic: 'Kerangka Klasik Ruang Kuliah Bisnis: Strategi, Ekonomi & Pasar Modal',
  description:
    'Sepuluh teori yang menjadi tulang punggung kuliah bisnis, ekonomi, dan keuangan, ditulis ulang dengan bahasa sehari-hari dan contoh yang dekat. Tiap pelajaran menyebut penemu dan karya aslinya. Bukan kurikulum resmi institusi mana pun.',
  stages: [
    {
      title: 'Strategi dan Sumber Keunggulan',
      lessons: [
        {
          id: 'fw-1-vrio',
          label: 'Keunggulan dari Sumber Daya: Kerangka VRIO',
          domain: 'Bisnis',
          summary: 'Keunggulan bersaing yang bertahan datang dari sumber daya yang bernilai, langka, sulit ditiru, dan dikelola dengan baik, bukan dari sekadar punya produk bagus.',
          model: 'Resource-Based View (Jay Barney, 1991) dan kerangka VRIO',
          analogy: 'Dua warung punya kompor dan panci yang sama. Yang satu ramai karena resep turun-temurun dan pelanggan yang sudah percaya puluhan tahun. Kompor bisa dibeli siapa saja, resep dan kepercayaan tidak.',
          insight: 'Jay Barney (Journal of Management, 1991) berargumen bahwa keunggulan bertahan berasal dari sumber daya internal perusahaan. Kerangka VRIO yang dikembangkan dari gagasan itu bertanya empat hal: Apakah sumber daya itu bernilai (Valuable), langka (Rare), sulit ditiru (Inimitable), dan apakah organisasi siap memanfaatkannya (Organized)? Bila hanya bernilai, ia sekadar menjaga kamu setara dengan pesaing. Keunggulan bertahan baru muncul bila keempatnya terpenuhi.',
          cross: { text: 'Strategi x Psikologi Pelanggan', domains: ['Bisnis', 'Psikologi'], insight: 'Sumber daya paling sulit ditiru sering tidak berwujud: reputasi, kepercayaan, budaya kerja. Semuanya bekerja lewat persepsi dan kebiasaan orang.' },
          story: { who: 'Dua Kedai Kopi di Satu Jalan (ilustrasi)', story: 'Kedai A dan B menjual kopi dengan harga sama dan mesin yang sama. Kedai A punya barista yang dikenal pelanggan dengan nama, dan komunitas pelanggan tetap yang saling kenal. Ketika kedai B meniru menu dan dekorasi, pelanggan A tidak ikut pindah karena yang mereka cari adalah hubungan itu, bukan menunya.', takeaway: 'Tanyakan pada usahamu: apa yang tidak bisa dibeli pesaing besok pagi? Itu yang layak dilindungi dan dikembangkan.' },
          actions: ['Tuliskan 5 sumber daya usahamu (orang, reputasi, data, lokasi, proses).', 'Beri tanda V, R, I, O untuk masing-masing dan lihat mana yang lolos semuanya.', 'Pilih satu yang hampir lolos dan tentukan satu langkah untuk memperkuatnya.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Menyalin Pesaing',
            context: 'Pesaing barumu viral dengan menu baru. Timmu ingin segera menyalinnya.',
            dilemma: 'Apa langkah paling masuk akal?',
            choices: [
              { text: 'Tanya dulu apakah menu itu sulit ditiru. Kalau mudah ditiru, jangan berlomba di situ; perdalam hal yang tidak bisa mereka salin.', consequence: 'Kamu menghemat tenaga dan memperkuat bagian yang membedakanmu.', explanation: 'Sumber daya yang mudah ditiru tidak memberi keunggulan bertahan.', best: true },
              { text: 'Salin persis dan turunkan harga.', consequence: 'Kamu terseret perang harga tanpa pembeda.', explanation: 'Meniru hal yang mudah ditiru membuat semua pihak setara dan margin tergerus.' },
              { text: 'Abaikan sepenuhnya karena kamu yakin produkmu lebih baik.', consequence: 'Kamu bisa kehilangan pelanggan yang tertarik hal baru tanpa belajar dari pesaing.', explanation: 'Pengamatan pesaing tetap perlu, hanya responsnya yang harus selektif.' }
            ]
          },
          quiz: [
            { q: 'Dalam VRIO, huruf I bertanya tentang...', options: ['Investasi', 'Apakah sumber daya itu sulit ditiru', 'Inovasi baru', 'Inflasi'], answer: 1, why: 'I = Inimitable: sulit ditiru pesaing.' },
            { q: 'Sumber daya yang bernilai tetapi tidak langka biasanya menghasilkan...', options: ['Keunggulan yang bertahan lama', 'Posisi setara dengan pesaing', 'Monopoli', 'Kerugian'], answer: 1, why: 'Bila banyak pesaing punya yang sama, kamu hanya setara.' }
          ]
        },
        {
          id: 'fw-2-jtbd',
          label: 'Pekerjaan yang Dibeli Pelanggan: Jobs to Be Done',
          domain: 'Bisnis',
          summary: 'Pelanggan tidak membeli produk; mereka "mempekerjakan" produk untuk menyelesaikan suatu urusan dalam hidupnya. Memahami urusan itu membuka peluang yang tidak terlihat dari data demografi.',
          model: 'Jobs to Be Done (Clayton Christensen dan rekan, dikembangkan sejak awal 2000-an)',
          analogy: 'Orang yang membeli bor sebenarnya tidak menginginkan bor; ia menginginkan lubang di dinding, atau lebih tepatnya rak yang terpasang rapi. Siapa yang paling cepat memberi "rak terpasang" memenangkan pembeli.',
          insight: 'Pendekatan Jobs to Be Done dipopulerkan Clayton Christensen dan rekan-rekannya. Intinya: kelompokkan pelanggan menurut urusan yang ingin diselesaikan (situasi, tujuan, hambatan), bukan menurut usia atau pekerjaan. Dua orang berbeda usia bisa punya urusan sama, dan satu orang bisa punya urusan berbeda di waktu berbeda. Pesaing sebenarnya adalah semua hal yang bisa menyelesaikan urusan itu, termasuk yang bukan produk sejenis.',
          cross: { text: 'Strategi x Perilaku Konsumen', domains: ['Bisnis', 'Psikologi'], insight: 'Keputusan membeli dipicu situasi, bukan sekadar karakter. Situasi memicu kebutuhan, dan kebutuhan itu memilih produknya.' },
          story: { who: 'Milkshake di Pagi Hari', story: 'Dalam kisah yang sering diceritakan Christensen dan rekan-rekannya, sebuah jaringan restoran cepat saji ingin menaikkan penjualan milkshake. Menanyakan selera rasa tidak banyak membantu. Setelah mengamati kapan dan mengapa orang membelinya, mereka mendapati banyak pembeli datang pagi hari, sendirian, untuk menemani perjalanan yang membosankan dan mengganjal lapar. Pesaingnya bukan milkshake lain, melainkan donat, pisang, atau bagel.', takeaway: 'Tanyakan "apa urusan yang sedang diselesaikan pelanggan saat membeli ini?" sebelum menambah fitur.' },
          actions: ['Wawancarai 3 pelanggan: kapan terakhir membeli, apa yang terjadi sebelumnya, apa alternatifnya.', 'Tuliskan satu kalimat: "Saat ___, saya ingin ___, supaya ___."', 'Cari satu pesaing non-produk (kebiasaan atau alternatif lain) untuk urusan itu.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Fitur Baru',
            context: 'Pelanggan meminta fitur tambahan, tetapi penjualan yang stagnan belum jelas sebabnya.',
            dilemma: 'Apa yang kamu lakukan lebih dulu?',
            choices: [
              { text: 'Menanyakan situasi pembelian terakhir beberapa pelanggan untuk menemukan urusan yang mereka selesaikan.', consequence: 'Kamu menemukan hambatan nyata dan menghindari fitur yang tidak dipakai.', explanation: 'Memahami urusan pelanggan lebih dulu mengarahkan fitur pada yang penting.', best: true },
              { text: 'Menambah semua fitur yang diminta.', consequence: 'Biaya naik dan produk makin rumit tanpa kepastian penjualan naik.', explanation: 'Permintaan fitur sering mengaburkan urusan sebenarnya.' },
              { text: 'Menurunkan harga untuk memancing pembelian.', consequence: 'Margin turun, sementara hambatan sebenarnya belum diselesaikan.', explanation: 'Harga bukan selalu alasan orang tidak membeli.' }
            ]
          },
          quiz: [
            { q: 'Dalam kerangka ini, pesaing sebenarnya adalah...', options: ['Hanya produk sejenis', 'Semua alternatif yang menyelesaikan urusan yang sama', 'Perusahaan terbesar', 'Pemerintah'], answer: 1, why: 'Pelanggan memilih apa pun yang menyelesaikan urusannya.' },
            { q: 'Mana yang lebih berguna untuk memahami pelanggan?', options: ['Usia dan pekerjaan saja', 'Situasi dan tujuan saat membeli', 'Warna favorit', 'Jumlah pengikut'], answer: 1, why: 'Situasi dan tujuan menjelaskan mengapa orang memilih produk tertentu.' }
          ]
        },
        {
          id: 'fw-3-value-chain',
          label: 'Rantai Nilai: Di Mana Margin Dibuat dan Bocor',
          domain: 'Bisnis',
          summary: 'Memecah usaha menjadi rangkaian aktivitas membantu melihat bagian mana yang menciptakan nilai, mana yang boros, dan mana yang sebaiknya dikerjakan sendiri atau dialihkan.',
          model: 'Value Chain (Michael Porter, Competitive Advantage, 1985)',
          analogy: 'Seperti jalur pipa air: bahan baku masuk, dialirkan lewat beberapa pos, dan keluar sebagai produk. Kebocoran kecil di satu sambungan bisa menghabiskan debit di ujung, padahal sumbernya melimpah.',
          insight: 'Michael Porter (Competitive Advantage, 1985) membagi aktivitas perusahaan menjadi aktivitas utama (logistik masuk, operasi, logistik keluar, pemasaran dan penjualan, layanan) dan aktivitas pendukung (infrastruktur perusahaan, SDM, pengembangan teknologi, pengadaan). Margin adalah selisih nilai yang dibayar pelanggan dan total biaya semua aktivitas. Keunggulan bisa datang dari menjalankan satu aktivitas lebih murah, lebih baik, atau dengan cara yang berbeda.',
          cross: { text: 'Strategi x Operasi', domains: ['Bisnis', 'Ekonomi'], insight: 'Keputusan buat sendiri atau beli dari luar (make or buy) bertumpu pada aktivitas mana yang memberi pembeda dan mana yang sekadar biaya.' },
          story: { who: 'Toko Kue Rumahan (ilustrasi)', story: 'Seorang pemilik toko kue memetakan aktivitasnya dan menyadari bahwa 30% waktunya habis mengantar pesanan kecil, sementara pembeda tokonya ada di resep dan dekorasi. Ia mengalihkan pengantaran ke kurir berbiaya per kiriman dan memakai waktu itu untuk mengembangkan menu pesanan khusus yang margin-nya lebih tinggi.', takeaway: 'Kerjakan sendiri hal yang membuatmu berbeda; alihkan atau sederhanakan hal yang sekadar biaya.' },
          actions: ['Gambar 5 aktivitas utama usahamu dan beri perkiraan biaya serta waktu masing-masing.', 'Tandai aktivitas yang pelanggan benar-benar bayar mahal untuknya.', 'Pilih satu aktivitas yang bisa disederhanakan atau dialihkan bulan ini.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Mengerjakan Semuanya Sendiri',
            context: 'Kamu mengerjakan produksi, pengemasan, pengiriman, dan pemasaran sendiri. Waktu habis tetapi pertumbuhan lambat.',
            dilemma: 'Mana yang paling masuk akal?',
            choices: [
              { text: 'Petakan aktivitas, pertahankan yang menjadi pembedamu, dan alihkan yang sekadar biaya ke pihak yang lebih efisien.', consequence: 'Waktumu pindah ke hal yang meningkatkan nilai dan margin.', explanation: 'Rantai nilai menunjukkan di mana tenagamu paling berharga.', best: true },
              { text: 'Tetap mengerjakan semuanya agar kontrol penuh.', consequence: 'Kamu kelelahan dan sulit tumbuh.', explanation: 'Kontrol penuh tidak selalu sebanding dengan biaya waktu.' },
              { text: 'Alihkan semuanya ke pihak luar.', consequence: 'Kamu kehilangan hal yang membedakan usahamu.', explanation: 'Aktivitas pembeda sebaiknya tetap dikuasai.' }
            ]
          },
          quiz: [
            { q: 'Termasuk aktivitas utama dalam rantai nilai Porter adalah...', options: ['Pengadaan', 'Operasi', 'Pengembangan teknologi', 'SDM'], answer: 1, why: 'Operasi adalah aktivitas utama; tiga lainnya aktivitas pendukung.' },
            { q: 'Margin dalam rantai nilai adalah selisih...', options: ['Harga dan pajak', 'Nilai yang dibayar pelanggan dan total biaya aktivitas', 'Laba dan gaji', 'Aset dan utang'], answer: 1, why: 'Margin = nilai yang dibayar pelanggan dikurangi biaya seluruh aktivitas.' }
          ]
        }
      ]
    },
    {
      title: 'Ekonomi di Balik Keputusan',
      lessons: [
        {
          id: 'fw-4-opportunity',
          label: 'Biaya Peluang dan Berpikir Marjinal',
          domain: 'Ekonomi',
          summary: 'Biaya sebenarnya dari suatu pilihan adalah hal terbaik yang kamu lepaskan, dan keputusan yang baik dilihat dari tambahan (marjinal), bukan rata-rata.',
          model: 'Opportunity Cost dan Marginal Analysis',
          analogy: 'Satu jam akhir pekan bisa dipakai lembur atau bersama keluarga. Upah lembur bukan keuntungan penuh; harganya termasuk jam yang tak lagi bisa dipakai untuk hal lain.',
          insight: 'Biaya peluang adalah nilai alternatif terbaik yang dikorbankan. Analisis marjinal bertanya: untuk satu unit tambahan, berapa tambahan manfaat dan tambahan biayanya? Lanjutkan selama manfaat marjinal lebih besar dari biaya marjinal. Biaya yang sudah terbenam (sunk cost) tidak boleh memengaruhi keputusan ke depan karena tidak bisa kembali apa pun yang kamu pilih.',
          cross: { text: 'Ekonomi x Psikologi', domains: ['Ekonomi', 'Psikologi'], insight: 'Sunk cost fallacy membuat orang meneruskan proyek yang jelas rugi hanya karena sudah terlanjur mengeluarkan banyak.' },
          story: { who: 'Pesanan Tambahan (ilustrasi)', story: 'Sebuah bengkel kecil punya kapasitas menganggur di sore hari. Pelanggan menawar pekerjaan dengan harga di bawah tarif biasa tetapi di atas biaya tambahan bahan dan listrik. Dilihat sebagai rata-rata, tawaran itu tampak rugi. Dilihat marjinal, ia menambah laba karena kapasitas itu tidak akan terpakai sama sekali.', takeaway: 'Tanyakan selalu: apa tambahan biaya dan manfaatnya, dan apa alternatif terbaik yang aku lepaskan?' },
          actions: ['Pilih satu keputusan besar bulan ini dan tuliskan alternatif terbaik yang kamu lepaskan.', 'Daftar biaya terbenam pada satu proyek, lalu coret dari pertimbangan.', 'Hitung biaya dan manfaat tambahan untuk satu unit lagi produksimu.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Proyek yang Sudah Terlanjur',
            context: 'Kamu sudah menghabiskan Rp 40 juta untuk aplikasi yang hasil ujinya jelas lemah. Perlu Rp 20 juta lagi tanpa jaminan membaik.',
            dilemma: 'Apa yang paling rasional?',
            choices: [
              { text: 'Abaikan Rp 40 juta yang sudah keluar, nilai Rp 20 juta berikutnya dengan manfaat yang realistis dan alternatif lain.', consequence: 'Kamu memutuskan berdasarkan hasil ke depan, bukan penyesalan.', explanation: 'Biaya terbenam tidak relevan untuk keputusan berikutnya.', best: true },
              { text: 'Lanjutkan agar uang sebelumnya tidak sia-sia.', consequence: 'Kamu menambah kerugian pada proyek yang lemah.', explanation: 'Ini sunk cost fallacy.' },
              { text: 'Hentikan karena sudah terlalu banyak keluar uang.', consequence: 'Keputusannya benar atau salah tergantung manfaat ke depan, bukan jumlah yang sudah keluar.', explanation: 'Alasan menghentikan pun harus berdasar prospek, bukan rasa kapok.' }
            ]
          },
          quiz: [
            { q: 'Biaya peluang adalah...', options: ['Biaya yang sudah dikeluarkan', 'Nilai alternatif terbaik yang dilepaskan', 'Pajak tambahan', 'Biaya tetap'], answer: 1, why: 'Yang dikorbankan ketika memilih satu opsi.' },
            { q: 'Biaya terbenam (sunk cost) sebaiknya...', options: ['Dijadikan alasan utama melanjutkan', 'Diabaikan dalam keputusan ke depan', 'Dilipatgandakan', 'Dihitung dua kali'], answer: 1, why: 'Tidak bisa kembali apa pun pilihannya.' }
          ]
        },
        {
          id: 'fw-5-lemons',
          label: 'Informasi Asimetris: Pasar Barang Bekas dan Kepercayaan',
          domain: 'Ekonomi',
          summary: 'Ketika penjual tahu kualitas barang lebih baik dari pembeli, pasar bisa rusak: pembeli menawar rendah dan barang bagus menghilang. Kepercayaan, garansi, dan reputasi adalah obatnya.',
          model: 'Adverse Selection (George Akerlof, "The Market for Lemons", 1970)',
          analogy: 'Mobil bekas dari luar tampak sama. Pembeli tahu sebagian akan bermasalah, jadi menawar rendah. Pemilik mobil bagus enggan menjual di harga itu dan menarik diri, sehingga yang tersisa makin banyak yang bermasalah.',
          insight: 'George Akerlof menunjukkan dalam makalah tahun 1970 (Quarterly Journal of Economics) bahwa ketika pembeli tidak bisa membedakan kualitas, harga turun ke rata-rata, penjual barang berkualitas keluar, dan kualitas rata-rata pasar memburuk. Ia berbagi Nobel Ekonomi 2001 atas kajian informasi asimetris. Solusi umum adalah sinyal (garansi, sertifikasi, ulasan), penyaringan, dan reputasi jangka panjang.',
          cross: { text: 'Ekonomi x Bisnis Digital', domains: ['Ekonomi', 'Bisnis'], insight: 'Marketplace dan sistem ulasan pada dasarnya mesin pengurang informasi asimetris antara penjual dan pembeli yang tidak saling kenal.' },
          story: { who: 'Penjual Sepatu Bekas Online (ilustrasi)', story: 'Penjual sepatu bekas asli sulit menjual karena pembeli takut tertipu barang palsu. Setelah ia menyertakan foto detail, bukti pembelian, jaminan retur 3 hari, dan ulasan pembeli lama, pembeli mulai mau membayar harga yang wajar.', takeaway: 'Jika pembeli ragu pada kualitas, jangan hanya turunkan harga. Kurangi ketidakpastiannya.' },
          actions: ['Tuliskan 3 hal yang membuat calon pembeli ragu pada produkmu.', 'Pilih satu sinyal kepercayaan (garansi, bukti, ulasan) dan pasang minggu ini.', 'Periksa apakah kamu juga bisa ditipu pemasok karena informasi yang tidak setara.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Pembeli yang Ragu',
            context: 'Calon pembeli terus menawar sangat rendah karena takut kualitasnya tidak sesuai.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Tambahkan bukti dan jaminan yang bisa diverifikasi agar risikonya turun, lalu pertahankan harga wajar.', consequence: 'Pembeli yang serius percaya dan margin terjaga.', explanation: 'Mengurangi asimetri informasi lebih sehat daripada menurunkan harga.', best: true },
              { text: 'Turuti tawaran terendah agar laku.', consequence: 'Kamu menjual rugi dan menarik pembeli yang hanya mengejar murah.', explanation: 'Harga rendah menandakan kualitas rendah dan menurunkan pasarmu.' },
              { text: 'Berdebat bahwa produkmu bagus tanpa bukti.', consequence: 'Klaim tanpa bukti tidak menenangkan keraguan.', explanation: 'Pembeli butuh sinyal yang bisa diperiksa.' }
            ]
          },
          quiz: [
            { q: 'Masalah utama dalam pasar "lemons" adalah...', options: ['Terlalu banyak pembeli', 'Pembeli tidak bisa membedakan kualitas sehingga barang bagus menghilang', 'Pajak tinggi', 'Harga terlalu mahal'], answer: 1, why: 'Informasi asimetris merusak pasar.' },
            { q: 'Contoh sinyal kualitas yang efektif adalah...', options: ['Klaim yang makin keras', 'Garansi dan ulasan yang bisa diverifikasi', 'Diskon besar terus-menerus', 'Menyembunyikan informasi'], answer: 1, why: 'Sinyal yang kredibel mengurangi ketidakpastian.' }
          ]
        },
        {
          id: 'fw-6-agency',
          label: 'Teori Agensi dan Biaya Transaksi: Mengapa Perusahaan Ada',
          domain: 'Ekonomi',
          summary: 'Setiap kali kamu menyerahkan pekerjaan kepada orang lain, kepentingan bisa tidak sejalan. Mengurangi selisih itu punya biaya, dan menentukan bentuk perusahaan.',
          model: 'Agency Theory (Jensen dan Meckling, 1976) dan Transaction Costs (Ronald Coase, 1937)',
          analogy: 'Kamu menyewa pengemudi untuk mengantar dagangan. Ia hanya dibayar per hari, tidak peduli apakah dagangan sampai cepat. Supaya kepentinganmu sejalan, kamu perlu mengawasi atau mengubah cara membayarnya, dan keduanya ada biayanya.',
          insight: 'Ronald Coase (The Nature of the Firm, 1937) menjelaskan bahwa perusahaan ada karena memakai pasar punya biaya (mencari, menawar, menegakkan kontrak), dan kadang mengorganisasi di dalam lebih murah. Michael Jensen dan William Meckling (1976) menunjukkan bahwa ketika pemilik (prinsipal) menyerahkan kerja kepada agen, kepentingan bisa berbeda sehingga muncul biaya agensi: pengawasan, insentif, dan sisa kerugian. Insentif yang selaras (bagi hasil, kepemilikan, target jelas) mengurangi biaya itu.',
          cross: { text: 'Ekonomi x Kepemimpinan', domains: ['Ekonomi', 'Bisnis'], insight: 'Cara kamu membayar dan menilai orang akan membentuk perilakunya. Insentif yang salah menghasilkan perilaku yang salah dengan rapi.' },
          story: { who: 'Sales Berkomisi Penjualan (ilustrasi)', story: 'Sebuah toko membayar sales hanya berdasarkan nilai penjualan. Sales mengejar transaksi besar dan sering memberi diskon berlebih sampai margin tipis, karena komisi dihitung dari omzet, bukan laba. Setelah komisi diubah menjadi persentase dari margin, perilaku diskon berlebihan menurun.', takeaway: 'Ukuran yang kamu bayar adalah perilaku yang kamu beli. Pilih ukuran yang sejalan dengan tujuan usahamu.' },
          actions: ['Daftar 3 orang atau pihak yang bekerja untukmu dan cara kamu menilai mereka.', 'Tanyakan: apakah ukuran itu mendorong hasil yang kamu inginkan, atau cuma yang mudah diukur?', 'Ubah satu ukuran atau insentif agar lebih selaras dengan laba atau kualitas.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Insentif Tim',
            context: 'Tim operasional dinilai dari jumlah pesanan yang dikirim per hari. Pengiriman naik, tetapi keluhan retur ikut naik.',
            dilemma: 'Apa yang kamu ubah?',
            choices: [
              { text: 'Kaitkan penilaian dengan pesanan yang sampai benar dan tanpa retur, bukan sekadar jumlah yang dikirim.', consequence: 'Tim mengutamakan ketepatan dan retur turun.', explanation: 'Insentif selaras dengan hasil akhir mengurangi biaya agensi.', best: true },
              { text: 'Tambah target jumlah pengiriman.', consequence: 'Kecepatan naik, kualitas turun lagi.', explanation: 'Ukuran yang sama mendorong perilaku yang sama.' },
              { text: 'Awasi setiap orang lebih ketat tanpa mengubah ukuran.', consequence: 'Biaya pengawasan naik dan moral turun.', explanation: 'Pengawasan mahal; menyelaraskan insentif lebih murah.' }
            ]
          },
          quiz: [
            { q: 'Menurut Coase, perusahaan ada terutama karena...', options: ['Pajak', 'Memakai pasar punya biaya transaksi', 'Peraturan pemerintah', 'Keinginan pemilik'], answer: 1, why: 'Kadang mengorganisasi di dalam lebih murah daripada lewat pasar.' },
            { q: 'Biaya agensi muncul ketika...', options: ['Pemilik bekerja sendiri', 'Pemilik menyerahkan kerja kepada pihak yang kepentingannya bisa berbeda', 'Harga naik', 'Pajak berubah'], answer: 1, why: 'Selisih kepentingan antara prinsipal dan agen menimbulkan biaya.' }
          ]
        }
      ]
    },
    {
      title: 'Pasar Modal dan Risiko',
      lessons: [
        {
          id: 'fw-7-mpt',
          label: 'Teori Portofolio Modern dan CAPM',
          domain: 'Keuangan',
          summary: 'Risiko sebuah aset tidak boleh dilihat sendirian; yang penting adalah sumbangannya pada seluruh portofolio. Risiko yang bisa dihilangkan lewat diversifikasi tidak diberi imbalan oleh pasar.',
          model: 'Modern Portfolio Theory (Harry Markowitz, 1952) dan CAPM (William Sharpe, 1964)',
          analogy: 'Penjual payung dan penjual es krim: saat hujan yang satu laku, saat panas yang lain. Bergabung, pendapatan keduanya lebih stabil daripada masing-masing sendirian.',
          insight: 'Harry Markowitz (Journal of Finance, 1952) menunjukkan bahwa risiko portofolio bergantung pada bagaimana aset bergerak satu sama lain (korelasi), bukan sekadar rata-rata risiko tiap aset. Menggabungkan aset yang tidak bergerak serempak menurunkan risiko tanpa harus menurunkan imbal hasil rata-rata. William Sharpe (1964) mengembangkan CAPM: imbal hasil yang diharapkan = suku bunga bebas risiko + beta x premi risiko pasar. Beta mengukur seberapa sensitif aset terhadap pasar secara keseluruhan. Keduanya meraih Nobel Ekonomi 1990. Model ini menyederhanakan banyak hal dan asumsinya sering diperdebatkan.',
          cross: { text: 'Keuangan x Psikologi', domains: ['Keuangan', 'Psikologi'], insight: 'Investor cenderung menumpuk di satu aset yang terasa akrab. Teori portofolio berlawanan dengan naluri itu.' },
          story: { who: 'Contoh Hitung CAPM (ilustrasi)', story: 'Misalkan suku bunga bebas risiko 5%, premi risiko pasar 6%, dan beta suatu saham 1,2. CAPM memberi imbal hasil yang diharapkan 5% + 1,2 x 6% = 12,2%. Angka ini hanya contoh hitung; bukan perkiraan imbal hasil saham mana pun.', takeaway: 'Beta di atas 1 berarti lebih fluktuatif dari pasar dan menuntut imbal hasil yang diharapkan lebih tinggi. Itu bukan jaminan.' },
          actions: ['Daftar aset yang kamu miliki dan lihat apakah semuanya tergantung pada satu hal yang sama.', 'Hitung contoh CAPM dengan angkamu sendiri untuk latihan, bukan untuk meramal.', 'Tentukan satu aset yang bergerak berbeda dari yang kamu miliki sekarang untuk dipelajari.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Semua Telur di Satu Keranjang',
            context: 'Sebagian besar tabunganmu ada di satu sektor yang sedang naik, dan temanmu menyarankan menambahkannya lagi.',
            dilemma: 'Apa pertimbangan utama?',
            choices: [
              { text: 'Periksa seberapa terkonsentrasi risikomu dan pertimbangkan aset yang bergerak berbeda, sesuai horizon dan toleransi risikomu.', consequence: 'Risiko keseluruhan lebih terkendali.', explanation: 'Diversifikasi mengurangi risiko spesifik tanpa harus mengorbankan imbal hasil rata-rata.', best: true },
              { text: 'Tambah lagi karena sedang naik.', consequence: 'Konsentrasi risiko makin besar.', explanation: 'Kenaikan masa lalu tidak menjamin kelanjutan, dan risiko terpusat.' },
              { text: 'Jual semua dan simpan tunai selamanya.', consequence: 'Kamu menghindari fluktuasi tetapi kehilangan potensi pertumbuhan dan menanggung inflasi.', explanation: 'Menghindari semua risiko juga punya biaya.' }
            ]
          },
          quiz: [
            { q: 'Menurut teori portofolio, risiko turun paling efektif bila aset-aset...', options: ['Bergerak serempak', 'Tidak bergerak serempak', 'Berasal dari satu sektor', 'Sama persis'], answer: 1, why: 'Korelasi yang rendah mengurangi risiko portofolio.' },
            { q: 'Dalam CAPM, beta mengukur...', options: ['Laba bersih', 'Sensitivitas aset terhadap pasar', 'Pajak', 'Dividen'], answer: 1, why: 'Beta adalah ukuran sensitivitas terhadap pergerakan pasar.' }
          ]
        },
        {
          id: 'fw-8-emh',
          label: 'Hipotesis Pasar Efisien dan Kritiknya',
          domain: 'Keuangan',
          summary: 'Jika harga sudah mencerminkan informasi yang tersedia, mengalahkan pasar secara konsisten sangat sulit. Gagasan ini dihormati sekaligus diperdebatkan.',
          model: 'Efficient Market Hypothesis (Eugene Fama, 1970) dan kritik perilaku (Robert Shiller)',
          analogy: 'Pasar seperti kerumunan yang menebak berat sapi: rata-rata tebakan sering sangat dekat. Tetapi bila kerumunannya panik atau euforia, rata-rata itu bisa jauh meleset.',
          insight: 'Eugene Fama (Journal of Finance, 1970) merumuskan tiga bentuk: lemah (harga lampau tidak membantu memprediksi), semi-kuat (informasi publik sudah tercermin), dan kuat (bahkan informasi orang dalam). Bukti bahwa banyak manajer aktif sulit mengalahkan indeks setelah biaya mendukung gagasan ini. Robert Shiller menunjukkan bukti gelembung dan fluktuasi harga yang tampak berlebihan; Fama dan Shiller berbagi Nobel Ekonomi 2013 meski berbeda pandangan. Pelajaran praktisnya bukan bahwa pasar sempurna, tetapi bahwa mengalahkannya sulit dan biaya serta pajak memakan hasil.',
          cross: { text: 'Keuangan x Psikologi', domains: ['Keuangan', 'Psikologi'], insight: 'Anomali pasar sering dikaitkan dengan bias perilaku: kawanan, terlalu percaya diri, dan menghindari kerugian.' },
          story: { who: 'Tip Saham dari Grup Chat (ilustrasi)', story: 'Seorang pemula menerima tip saham yang katanya akan naik. Saat tip itu tiba padanya, ribuan orang lain sudah membacanya, dan harga biasanya sudah bergerak. Ia membeli di harga tinggi dan baru mengetahui kenyataannya setelah turun.', takeaway: 'Jika informasi mudah didapat, sangat mungkin sudah tercermin di harga. Tanyakan: apa keunggulanku dibanding semua orang yang membaca hal yang sama?' },
          actions: ['Tuliskan alasan kamu yakin bisa mengalahkan pasar, dan keunggulan nyatamu.', 'Hitung biaya transaksi dan pajak pada strategi yang sering jual-beli.', 'Pelajari pilihan sederhana berbiaya rendah sebagai pembanding untuk strategi aktifmu.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Tip Panas',
            context: 'Sebuah grup mengatakan saham tertentu akan naik besar minggu ini. Kamu tertarik ikut.',
            dilemma: 'Apa yang paling masuk akal?',
            choices: [
              { text: 'Tanyakan apa keunggulan informasimu, cek fundamental, dan putuskan berdasarkan rencana dan toleransi risikomu, bukan desakan grup.', consequence: 'Keputusanmu lahir dari analisis, bukan keramaian.', explanation: 'Informasi yang beredar luas biasanya sudah tercermin di harga.', best: true },
              { text: 'Beli segera sebelum ketinggalan.', consequence: 'Kamu berisiko membeli di harga puncak.', explanation: 'FOMO mendorong keputusan impulsif.' },
              { text: 'Pinjam uang agar bisa membeli lebih banyak.', consequence: 'Kerugian bisa jauh melebihi modalmu.', explanation: 'Utang memperbesar risiko pada keputusan yang belum teruji.' }
            ]
          },
          quiz: [
            { q: 'Bentuk lemah hipotesis pasar efisien menyatakan bahwa...', options: ['Informasi orang dalam sudah tercermin', 'Harga lampau tidak membantu memprediksi harga', 'Tidak ada yang pernah untung', 'Pasar selalu naik'], answer: 1, why: 'Bentuk lemah hanya mengacu pada informasi harga historis.' },
            { q: 'Kritik utama dari sisi perilaku terhadap hipotesis ini adalah...', options: ['Pasar selalu benar', 'Harga bisa menyimpang akibat bias dan gelembung', 'Pajak terlalu tinggi', 'Tidak ada investor'], answer: 1, why: 'Bias perilaku dapat menyebabkan harga menyimpang dari nilai wajar.' }
          ]
        },
        {
          id: 'fw-9-mm',
          label: 'Struktur Modal: Gagasan Modigliani dan Miller',
          domain: 'Keuangan',
          summary: 'Dalam dunia ideal, cara perusahaan membiayai diri (utang atau modal sendiri) tidak mengubah nilainya. Pajak dan risiko kebangkrutan di dunia nyata yang membuat pilihannya penting.',
          model: 'Modigliani-Miller Theorem (1958)',
          analogy: 'Sebuah pizza bernilai sama baik dipotong 4 maupun 8 bagian. Cara memotong tidak menambah pizza, hanya mengubah siapa memegang potongan yang mana.',
          insight: 'Franco Modigliani dan Merton Miller (American Economic Review, 1958) menunjukkan bahwa tanpa pajak, biaya kebangkrutan, dan asimetri informasi, nilai perusahaan ditentukan oleh kemampuan menghasilkan arus kas, bukan oleh bauran utang dan modal. Dengan pajak, bunga utang yang dapat dikurangkan memberi keuntungan pajak. Namun utang menambah risiko gagal bayar. Pilihan struktur modal di dunia nyata adalah keseimbangan antara manfaat pajak dan biaya kesulitan keuangan. Keduanya kemudian menerima Nobel Ekonomi (Modigliani 1985, Miller 1990).',
          cross: { text: 'Keuangan x Manajemen Risiko', domains: ['Keuangan', 'Bisnis'], insight: 'Utang memperbesar hasil saat bisnis lancar dan memperparah saat bisnis seret. Itu sebabnya arus kas yang stabil menentukan seberapa besar utang aman.' },
          story: { who: 'Dua Pemilik Toko Bahan (ilustrasi)', story: 'Dua toko berpenghasilan sama. Toko A dibiayai penuh modal sendiri; toko B memakai pinjaman besar. Saat penjualan stabil, pemilik B mendapat pengembalian lebih tinggi atas modalnya. Saat penjualan turun 30%, cicilan tetap harus dibayar, dan B nyaris gagal bayar, sementara A hanya laba yang menurun.', takeaway: 'Utang bukan gratis. Ukur seberapa besar penurunan pendapatan yang sanggup kamu hadapi sebelum cicilan tak terbayar.' },
          actions: ['Hitung rasio cicilan terhadap arus kas operasional usahamu.', 'Simulasikan pendapatan turun 30%: apakah cicilan masih terbayar?', 'Tentukan batas maksimum utang yang masih aman menurut simulasimu.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Ekspansi dengan Pinjaman',
            context: 'Kamu ingin membuka cabang dengan pinjaman besar. Arus kas usaha saat ini bagus tetapi musiman.',
            dilemma: 'Apa pertimbanganmu?',
            choices: [
              { text: 'Uji skenario penjualan turun saat sepi musim, lalu sesuaikan ukuran pinjaman agar cicilan tetap terbayar.', consequence: 'Kamu tumbuh tanpa mempertaruhkan kelangsungan usaha.', explanation: 'Risiko kesulitan keuangan membatasi seberapa besar utang yang aman.', best: true },
              { text: 'Ambil pinjaman sebesar mungkin karena bunganya bisa mengurangi pajak.', consequence: 'Manfaat pajak kecil dibanding risiko gagal bayar.', explanation: 'Manfaat pajak tidak menutup risiko kebangkrutan.' },
              { text: 'Tidak pernah berutang apa pun.', consequence: 'Aman, tetapi bisa melewatkan peluang yang menguntungkan.', explanation: 'Utang yang terukur bisa wajar; yang berbahaya adalah yang berlebihan.' }
            ]
          },
          quiz: [
            { q: 'Dalam kondisi ideal tanpa pajak, menurut Modigliani-Miller nilai perusahaan ditentukan oleh...', options: ['Bauran utang dan modal', 'Kemampuan menghasilkan arus kas', 'Jumlah karyawan', 'Warna logo'], answer: 1, why: 'Struktur modal tidak mengubah nilai dalam kondisi ideal.' },
            { q: 'Dalam dunia nyata, utang punya manfaat dan biaya berupa...', options: ['Tidak ada keduanya', 'Manfaat pajak dan risiko kesulitan keuangan', 'Hanya manfaat', 'Hanya biaya promosi'], answer: 1, why: 'Bunga dapat mengurangi pajak, tetapi utang menambah risiko gagal bayar.' }
          ]
        },
        {
          id: 'fw-10-ev',
          label: 'Nilai Harapan dan Ukuran Posisi: Bertahan Dulu, Untung Kemudian',
          domain: 'Keuangan',
          summary: 'Keputusan berisiko dinilai dari nilai harapan dan dari seberapa besar kamu bertaruh. Strategi yang benar pun bisa membangkrutkan bila ukuran taruhannya terlalu besar.',
          model: 'Expected Value dan Position Sizing (kerangka umum manajemen risiko)',
          analogy: 'Pengemudi yang baik bukan yang paling kencang, tetapi yang selalu punya ruang untuk mengerem. Dalam investasi, ukuran posisi adalah ruang mengeremmu.',
          insight: 'Nilai harapan = (peluang menang x keuntungan) - (peluang kalah x kerugian). Strategi dengan nilai harapan positif tetap mengalami deretan kerugian. Jika setiap kali kamu mempertaruhkan porsi besar modal, deret kerugian yang wajar bisa menghabiskan modal sebelum nilai harapan sempat bekerja. Aturan praktis yang umum dikenal adalah membatasi risiko per posisi pada persentase kecil dari modal (sering disebut 1-2%) dan menentukan batas kerugian sebelum masuk. Ini aturan praktis untuk belajar, bukan rekomendasi atau jaminan, dan setiap orang punya kapasitas risiko berbeda.',
          cross: { text: 'Keuangan x Psikologi', domains: ['Keuangan', 'Psikologi'], insight: 'Setelah rugi, orang cenderung menaikkan taruhan untuk menutup kerugian. Aturan ukuran posisi dibuat sebelum emosi muncul.' },
          story: { who: 'Dua Trader Latihan (ilustrasi)', story: 'Dua orang memakai strategi yang sama dengan peluang menang 55% dan rasio untung-rugi 1:1. Orang A mempertaruhkan 2% modal per transaksi, orang B 30%. Setelah deretan lima kerugian berturut-turut, yang wajar terjadi, A kehilangan sekitar 10% dan tetap bermain; B kehilangan lebih dari separuh modal dan sulit pulih.', takeaway: 'Bertahan lebih dulu. Nilai harapan hanya bekerja bagi yang masih punya modal untuk terus bermain.' },
          actions: ['Hitung nilai harapan dari satu keputusan berisiko yang sedang kamu pertimbangkan.', 'Tentukan batas rugi maksimum per keputusan sebagai persentase modal sebelum bertindak.', 'Tuliskan aturan "berhenti" yang tidak boleh kamu langgar saat sedang emosional.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Mengejar Kerugian',
            context: 'Setelah tiga kerugian berturut-turut, kamu tergoda menaikkan ukuran posisi agar cepat kembali modal.',
            dilemma: 'Apa yang kamu lakukan?',
            choices: [
              { text: 'Tetap pada aturan ukuran posisi, tinjau apakah rencananya masih valid, dan berhenti sejenak bila terasa emosional.', consequence: 'Kerugian tetap terbatas dan keputusanmu tetap jernih.', explanation: 'Aturan dibuat untuk melindungi dari dirimu sendiri saat emosi.', best: true },
              { text: 'Gandakan ukuran posisi untuk menutup kerugian dengan cepat.', consequence: 'Satu kerugian lagi bisa menghabiskan sebagian besar modal.', explanation: 'Menaikkan taruhan setelah rugi memperbesar risiko kebangkrutan.' },
              { text: 'Berpindah ke aset yang jauh lebih berisiko.', consequence: 'Risiko melonjak tanpa dasar analisis.', explanation: 'Berganti ke aset yang lebih spekulatif karena frustrasi bukan strategi.' }
            ]
          },
          quiz: [
            { q: 'Strategi bernilai harapan positif tetap bisa menghabiskan modal bila...', options: ['Taruhan per transaksi terlalu besar', 'Pajaknya kecil', 'Dilakukan pagi hari', 'Menang lebih sering'], answer: 0, why: 'Deret kerugian wajar bisa menghabiskan modal bila ukuran taruhan terlalu besar.' },
            { q: 'Nilai harapan sebuah taruhan dihitung dari...', options: ['Peluang dan besar untung serta rugi', 'Hanya besar untung', 'Perasaan', 'Jumlah pengikut'], answer: 0, why: 'EV = peluang menang x untung - peluang kalah x rugi.' }
          ]
        }
      ]
    }
  ]
});
