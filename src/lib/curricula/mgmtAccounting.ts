import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const MGMT_ACCOUNTING_CURRICULUM = buildPath({
  id: 'curriculum-akuntansi-manajemen',
  topic: 'Akuntansi Manajemen & Anggaran',
  description:
    'Klasifikasi biaya, harga pokok produk, analisis biaya-volume-laba, anggaran, analisis varians, keputusan biaya relevan, pengukuran kinerja (ROI dan residual income), dan transfer pricing. Alat yang dipakai manajer untuk mengendalikan biaya dan mengambil keputusan.',
  stages: [
    {
      title: 'Memahami Biaya',
      lessons: [
        {
          id: 'am-1-biaya',
          label: 'Klasifikasi Biaya: Langsung, Tidak Langsung, Tetap, Variabel',
          domain: 'Keuangan',
          summary: 'Biaya yang salah digolongkan menghasilkan keputusan yang salah. Kenali perilaku tiap biaya terhadap volume.',
          model: 'Cost Classification dan Cost Behavior',
          analogy: 'Sewa dapur restoran tetap sama baik ada 10 atau 100 tamu, sedangkan bahan makanan bertambah mengikuti jumlah tamu. Keduanya biaya, tetapi berperilaku berbeda.',
          insight: 'Biaya langsung dapat ditelusuri ke produk (bahan baku, upah langsung); biaya tidak langsung (overhead) perlu dialokasikan. Biaya tetap tidak berubah dalam rentang volume tertentu; biaya variabel berubah proporsional; biaya semi-variabel memiliki keduanya. Biaya tetap per unit turun ketika volume naik, tetapi total biaya tetap tidak berubah.',
          cross: { text: 'Biaya x Keputusan Harga', domains: ['Keuangan', 'Bisnis'], insight: 'Harga minimum jangka pendek sering ditentukan oleh biaya variabel, sedangkan harga jangka panjang harus menutup seluruh biaya.' },
          story: { who: 'Bengkel Motor (ilustrasi)', story: 'Bengkel menganggap listrik dan sewa sebagai biaya per servis dan menaikkan tarif saat servis sepi. Padahal sewa tetap sama. Setelah memisahkan biaya tetap dan variabel, mereka sadar bahwa menambah servis dengan promo yang menutup biaya variabel sudah menambah laba kontribusi.', takeaway: 'Pisahkan biaya menurut perilakunya sebelum memutuskan.' },
          actions: ['Daftar semua biaya bulanan usaha Anda dan golongkan tetap, variabel, atau semi-variabel.', 'Hitung total biaya tetap dan biaya variabel per unit.', 'Tandai biaya yang bisa ditelusuri langsung ke produk.'],
          level: 'Pemula', time: '5 min', tool: 'margin',
          scenario: {
            title: 'Dilema Biaya Tetap Dibebankan Per Unit',
            context: 'Sewa Rp 20 juta dibagi rata ke 1.000 unit sehingga biaya per unit tampak Rp 20 ribu. Penjualan turun menjadi 500 unit.',
            dilemma: 'Bagaimana membaca situasi ini?',
            choices: [
              { text: 'Sadari total sewa tetap Rp 20 juta, sehingga biaya per unit naik menjadi Rp 40 ribu; fokus pada margin kontribusi per unit dan cara menaikkan volume.', consequence: 'Anda memahami bahwa penurunan volume yang membuat biaya per unit naik, bukan sewa yang berubah.', explanation: 'Biaya tetap per unit berubah mengikuti volume.', best: true },
              { text: 'Naikkan harga per unit sebesar Rp 20 ribu agar biaya per unit tertutup.', consequence: 'Pelanggan pergi dan volume turun lagi.', explanation: 'Menaikkan harga untuk menutup biaya tetap bisa menurunkan volume lebih lanjut.' },
              { text: 'Pangkas bahan baku agar biaya turun.', consequence: 'Kualitas turun dan penjualan merosot.', explanation: 'Biaya yang tepat sasaran perlu dipilih, bukan sembarang dipangkas.' }
            ]
          },
          quiz: [
            { q: 'Sewa gedung yang sama berapa pun produksi tergolong...', options: ['Biaya tetap', 'Biaya variabel', 'Biaya langsung', 'Biaya hangus'], answer: 0, why: 'Totalnya tidak berubah pada rentang volume tertentu.' },
            { q: 'Ketika volume naik, biaya tetap per unit...', options: ['Turun', 'Naik', 'Tetap', 'Nol'], answer: 0, why: 'Biaya tetap terbagi ke lebih banyak unit.' }
          ]
        },
        {
          id: 'am-2-pokok',
          label: 'Harga Pokok Produk: Absorption, Variable Costing, dan ABC',
          domain: 'Keuangan',
          summary: 'Cara membebankan overhead memengaruhi laba yang dilaporkan dan keputusan harga. Pilih metode sesuai tujuan.',
          model: 'Absorption Costing, Variable Costing, Activity-Based Costing',
          analogy: 'Biaya listrik pabrik dibagi rata ke semua produk seperti membagi tagihan makan malam rata padahal satu orang memesan makanan jauh lebih mahal. ABC membagi sesuai pemakaian masing-masing.',
          insight: 'Absorption costing memasukkan overhead tetap ke harga pokok produk (diperlukan untuk laporan eksternal). Variable costing hanya memasukkan biaya variabel dan memperlakukan overhead tetap sebagai biaya periode, lebih berguna untuk keputusan internal. Saat produksi melebihi penjualan, laba absorption lebih tinggi karena sebagian overhead tetap tertahan di persediaan. ABC mengalokasikan overhead berdasarkan aktivitas (jumlah pengaturan mesin, pemeriksaan mutu) sehingga produk kecil bervariasi tidak tampak lebih menguntungkan dari kenyataan.',
          cross: { text: 'Costing x Perilaku Manajer', domains: ['Keuangan', 'Psikologi'], insight: 'Dengan absorption costing, manajer dapat menaikkan laba sementara dengan memproduksi berlebih. Insentif perlu dirancang hati-hati.' },
          story: { who: 'Pabrik Plastik dengan Dua Lini (ilustrasi)', story: 'Overhead dibagi rata per jam mesin sehingga produk massal tampak untung kecil dan produk pesanan khusus tampak sangat untung. Setelah ABC, ternyata produk pesanan khusus menyerap banyak waktu pengaturan mesin dan pemeriksaan sehingga hanya impas. Pabrik menaikkan harga pesanan khusus.', takeaway: 'Alokasi overhead yang tepat bisa membalik gambaran profitabilitas.' },
          actions: ['Identifikasi tiga aktivitas yang memicu overhead di usaha Anda.', 'Hitung tarif overhead per aktivitas.', 'Bandingkan profitabilitas produk dengan alokasi lama dan ABC.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Produk Kecil Tampak Sangat Menguntungkan',
            context: 'Laporan menunjukkan produk pesanan khusus margin tinggi, tetapi tim produksi mengeluh pekerjaannya merepotkan.',
            dilemma: 'Apa langkah berikutnya?',
            choices: [
              { text: 'Telusuri aktivitas yang dipakai pesanan khusus (pengaturan, inspeksi, penanganan) dan alokasikan overhead berdasarkan aktivitas.', consequence: 'Anda menemukan margin sebenarnya tipis dan menyesuaikan harga serta minimum pesanan.', explanation: 'ABC mengungkap biaya tersembunyi dari produk bervolume kecil.', best: true },
              { text: 'Tambah promosi pesanan khusus karena laporan menunjukkan untung besar.', consequence: 'Beban kerja naik dan laba nyata tidak bertambah.', explanation: 'Keputusan berdasar alokasi yang menyesatkan memperburuk keadaan.' },
              { text: 'Abaikan keluhan produksi.', consequence: 'Biaya tersembunyi tetap tidak terlihat.', explanation: 'Keluhan lapangan sering menandakan biaya tersembunyi.' }
            ]
          },
          quiz: [
            { q: 'Variable costing memperlakukan overhead tetap sebagai...', options: ['Biaya periode', 'Bagian harga pokok produk', 'Aset', 'Pendapatan'], answer: 0, why: 'Overhead tetap dibebankan pada periode terjadi.' },
            { q: 'ABC mengalokasikan overhead berdasarkan...', options: ['Aktivitas yang memicu biaya', 'Jumlah karyawan saja', 'Harga jual', 'Warna produk'], answer: 0, why: 'Biaya dikaitkan dengan penggerak aktivitas.' }
          ]
        },
        {
          id: 'am-3-cvp',
          label: 'Biaya-Volume-Laba dan Margin Pengaman',
          domain: 'Keuangan',
          summary: 'Hitung titik impas dan seberapa jauh penjualan boleh turun sebelum Anda rugi.',
          model: 'Cost-Volume-Profit Analysis',
          analogy: 'Kapal bocor dengan pompa. Titik impas adalah saat kecepatan pompa sama dengan kebocoran; margin pengaman adalah seberapa banyak air boleh bertambah sebelum kapal tenggelam.',
          insight: 'Titik impas (unit) = biaya tetap / margin kontribusi per unit. Margin kontribusi = harga − biaya variabel per unit. Margin pengaman = (penjualan aktual − penjualan impas) / penjualan aktual. Derajat leverage operasi menunjukkan seberapa sensitif laba terhadap perubahan volume; biaya tetap tinggi memperbesar sensitivitas.',
          cross: { text: 'CVP x Strategi Biaya', domains: ['Keuangan', 'Bisnis'], insight: 'Struktur biaya tetap tinggi menguntungkan saat volume naik tetapi berbahaya saat volume turun.' },
          story: { who: 'Kedai dengan Harga Rp 50 Ribu (ilustrasi)', story: 'Harga Rp 50 ribu, biaya variabel Rp 30 ribu, biaya tetap Rp 40 juta per bulan. Margin kontribusi Rp 20 ribu sehingga impas 40.000.000 / 20.000 = 2.000 unit. Pada penjualan 2.500 unit, margin pengaman (2.500 − 2.000) / 2.500 = 20%.', takeaway: 'Margin pengaman menunjukkan seberapa jauh penjualan boleh turun.' },
          actions: ['Hitung titik impas usaha Anda dalam unit dan rupiah.', 'Hitung margin pengaman bulan ini.', 'Pakai kalkulator Titik Impas di tab Alat untuk menguji skenario harga dan biaya.'],
          level: 'Menengah', time: '6 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Menurunkan Harga untuk Mengejar Volume',
            context: 'Harga Rp 50 ribu, biaya variabel Rp 30 ribu, biaya tetap Rp 40 juta. Anda ingin menurunkan harga menjadi Rp 45 ribu dengan harapan volume naik.',
            dilemma: 'Apakah rencana layak?',
            choices: [
              { text: 'Hitung titik impas baru: margin kontribusi turun menjadi Rp 15 ribu, impas 2.667 unit, lalu nilai apakah volume tambahan realistis.', consequence: 'Anda menyadari titik impas naik lebih dari 33% dan menunda rencana.', explanation: 'Penurunan harga menaikkan titik impas secara besar.', best: true },
              { text: 'Turunkan harga karena volume pasti naik.', consequence: 'Volume tidak naik sebanyak yang dibutuhkan dan laba turun.', explanation: 'Volume tidak otomatis naik.' },
              { text: 'Naikkan biaya tetap agar terlihat premium.', consequence: 'Titik impas naik tanpa tambahan pendapatan.', explanation: 'Biaya tetap yang tidak menambah nilai membebani.' }
            ]
          },
          quiz: [
            { q: 'Harga Rp 80 ribu, biaya variabel Rp 50 ribu, biaya tetap Rp 30 juta. Titik impas?', options: ['1.000 unit', '600 unit', '2.000 unit', '375 unit'], answer: 0, why: '30.000.000 / 30.000 = 1.000 unit.' },
            { q: 'Margin pengaman menunjukkan...', options: ['Seberapa jauh penjualan dapat turun sebelum rugi', 'Total laba', 'Biaya tetap', 'Harga minimum'], answer: 0, why: 'Selisih penjualan aktual dari titik impas dibagi penjualan aktual.' }
          ]
        }
      ]
    },
    {
      title: 'Merencanakan dan Mengendalikan',
      lessons: [
        {
          id: 'am-4-anggaran',
          label: 'Anggaran: Master Budget dan Rolling Forecast',
          domain: 'Keuangan',
          summary: 'Anggaran bukan hanya batas pengeluaran, tetapi alat menyelaraskan target, sumber daya, dan tanggung jawab.',
          model: 'Master Budget dan Rolling Forecast',
          analogy: 'Rencana perjalanan: tujuan, rute, bensin, penginapan, dan cadangan darurat dihitung sebelum berangkat, lalu disesuaikan bila ada jalan tutup.',
          insight: 'Master budget dimulai dari anggaran penjualan, lalu produksi, bahan, tenaga kerja, overhead, dan berakhir pada proyeksi laba rugi, neraca, dan arus kas. Rolling forecast menyegarkan proyeksi tiap bulan atau kuartal untuk 12 bulan ke depan sehingga tidak terjebak pada angka lama. Anggaran partisipatif meningkatkan komitmen, tetapi hati-hati terhadap budgetary slack (target sengaja dibuat longgar).',
          cross: { text: 'Anggaran x Psikologi Target', domains: ['Keuangan', 'Psikologi'], insight: 'Target yang dirasa tidak adil memicu penggelembungan anggaran dan perilaku menghabiskan sisa dana.' },
          story: { who: 'Distributor Makanan Ringan (ilustrasi)', story: 'Anggaran tahunan disusun Januari dan tidak diubah. Pada Juni harga bahan naik dan pesaing masuk, tetapi tim tetap mengikuti angka lama. Dengan rolling forecast kuartalan, mereka menyesuaikan promosi dan stok lebih cepat, menghindari kelebihan stok.', takeaway: 'Anggaran yang kaku cepat kedaluwarsa.' },
          actions: ['Susun anggaran penjualan dan arus kas tiga bulan untuk usaha Anda.', 'Tetapkan jadwal tinjau bulanan dan pemicu revisi.', 'Sisihkan cadangan 5 sampai 10 persen untuk ketidakpastian.'],
          level: 'Menengah', time: '6 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Anggaran Tahunan Tidak Lagi Relevan',
            context: 'Pada pertengahan tahun kondisi pasar berubah drastis, tetapi tim bersikeras mengikuti anggaran awal.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Terapkan rolling forecast: perbarui asumsi, sesuaikan alokasi, dan komunikasikan perubahan beserta alasannya.', consequence: 'Sumber daya dialihkan ke area yang tumbuh dan pemborosan berkurang.', explanation: 'Anggaran adalah alat yang perlu diperbarui.', best: true },
              { text: 'Pertahankan anggaran awal demi disiplin.', consequence: 'Sumber daya tersangkut di area yang tidak relevan.', explanation: 'Disiplin pada angka usang menghasilkan keputusan buruk.' },
              { text: 'Hapus anggaran sama sekali.', consequence: 'Tidak ada pegangan pengendalian biaya.', explanation: 'Tanpa anggaran, pengeluaran sulit dikendalikan.' }
            ]
          },
          quiz: [
            { q: 'Titik awal master budget biasanya...', options: ['Anggaran penjualan', 'Anggaran kas', 'Neraca akhir', 'Pajak'], answer: 0, why: 'Penjualan menentukan produksi dan biaya turunannya.' },
            { q: 'Budgetary slack adalah...', options: ['Target yang sengaja dibuat longgar agar mudah dicapai', 'Cadangan kas resmi', 'Pajak tambahan', 'Anggaran iklan'], answer: 0, why: 'Slack mengurangi ketepatan dan tantangan target.' }
          ]
        },
        {
          id: 'am-5-varians',
          label: 'Analisis Varians: Harga dan Kuantitas',
          domain: 'Keuangan',
          summary: 'Bandingkan biaya sebenarnya dengan standar untuk menemukan sumber penyimpangan.',
          model: 'Standard Costing dan Variance Analysis',
          analogy: 'Tagihan belanja bulanan membengkak. Penyebabnya bisa harga barang naik (varians harga) atau Anda membeli lebih banyak dari rencana (varians kuantitas). Obatnya berbeda.',
          insight: 'Varians harga bahan = (harga aktual − harga standar) × kuantitas aktual. Varians kuantitas = (kuantitas aktual − kuantitas standar untuk output aktual) × harga standar. Varians negatif atau positif perlu dibaca sebagai merugikan atau menguntungkan. Selidiki penyebab, bukan mencari kambing hitam: harga naik karena pasar, atau karena pembelian mendadak? Limbah lebih banyak karena mesin atau pelatihan?',
          cross: { text: 'Varians x Budaya Perbaikan', domains: ['Keuangan', 'Psikologi'], insight: 'Varians yang dipakai untuk menghukum menyebabkan penyembunyian masalah. Gunakan sebagai sinyal belajar.' },
          story: { who: 'Pabrik Roti (ilustrasi)', story: 'Standar: 1.000 kg tepung per output aktual dengan harga Rp 10.000/kg. Aktual: 1.200 kg dengan harga Rp 11.000/kg. Varians harga = (11.000 − 10.000) × 1.200 = Rp 1.200.000 merugikan. Varians kuantitas = (1.200 − 1.000) × 10.000 = Rp 2.000.000 merugikan. Penyebab: pemasok naik harga dan adonan terbuang karena oven bermasalah.', takeaway: 'Pisahkan penyebab harga dari penyebab pemakaian.' },
          actions: ['Tetapkan standar bahan per unit untuk satu produk Anda.', 'Hitung varians harga dan kuantitas bulan lalu.', 'Selidiki satu varians terbesar sampai akar penyebabnya.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Biaya Bahan Membengkak',
            context: 'Biaya bahan baku 15% di atas anggaran. Manajer pembelian menyalahkan produksi dan sebaliknya.',
            dilemma: 'Bagaimana menyelesaikan?',
            choices: [
              { text: 'Pecah menjadi varians harga dan varians kuantitas, lalu telusuri penyebab masing-masing bersama kedua tim.', consequence: 'Ternyata 70% karena limbah produksi dan 30% karena kenaikan harga; tindakan perbaikan jadi tepat sasaran.', explanation: 'Pemisahan menunjukkan siapa dan apa yang perlu diperbaiki.', best: true },
              { text: 'Pangkas anggaran bahan tahun depan.', consequence: 'Produksi kekurangan bahan dan kualitas turun.', explanation: 'Memangkas tanpa tahu penyebab merusak operasi.' },
              { text: 'Hukum manajer pembelian.', consequence: 'Tim menyembunyikan informasi di masa depan.', explanation: 'Hukuman tanpa analisis menghambat transparansi.' }
            ]
          },
          quiz: [
            { q: 'Varians kuantitas bahan dihitung memakai harga...', options: ['Standar', 'Aktual', 'Rata-rata pasar', 'Nol'], answer: 0, why: 'Varians kuantitas mengisolasi pengaruh pemakaian dengan harga standar.' },
            { q: 'Harga aktual lebih tinggi dari standar menghasilkan varians harga...', options: ['Merugikan', 'Menguntungkan', 'Nol', 'Tidak dapat dihitung'], answer: 0, why: 'Biaya lebih tinggi dari standar merugikan.' }
          ]
        }
      ]
    },
    {
      title: 'Keputusan dan Kinerja',
      lessons: [
        {
          id: 'am-6-relevan',
          label: 'Keputusan Biaya Relevan: Make-or-Buy, Pesanan Khusus, Hentikan Lini',
          domain: 'Keuangan',
          summary: 'Dalam keputusan, hanya biaya dan pendapatan yang berbeda antar pilihan yang relevan.',
          model: 'Relevant Costing',
          analogy: 'Memutuskan naik taksi atau motor sendiri: cicilan motor yang tetap harus dibayar tidak relevan; yang relevan adalah bensin, parkir, dan waktu.',
          insight: 'Biaya relevan adalah biaya masa depan yang berbeda antar alternatif. Biaya hangus dan biaya tetap yang tidak berubah diabaikan. Pesanan khusus pada kapasitas menganggur layak jika harga melebihi biaya variabel tambahan. Make-or-buy: bandingkan biaya yang dapat dihindari bila membeli dengan harga beli, ditambah nilai penggunaan alternatif kapasitas. Menghentikan lini: bandingkan margin kontribusi lini dengan biaya tetap yang benar-benar bisa dihindari.',
          cross: { text: 'Biaya Relevan x Strategi', domains: ['Keuangan', 'Bisnis'], insight: 'Keputusan jangka pendek berdasarkan biaya relevan harus dicek terhadap dampak jangka panjang, seperti preseden harga dan reputasi.' },
          story: { who: 'Konveksi Menerima Pesanan Seragam (ilustrasi)', story: 'Konveksi punya kapasitas menganggur. Pesanan seragam 1.000 potong ditawar Rp 35 ribu, biaya variabel Rp 30 ribu. Tambahan laba kontribusi Rp 5 ribu × 1.000 = Rp 5 juta. Syaratnya pesanan tidak mengganggu pelanggan reguler dan tidak menjadi patokan harga baru.', takeaway: 'Pada kapasitas menganggur, harga di atas biaya variabel menambah laba, selama tidak merusak harga pasar.' },
          actions: ['Pilih satu keputusan terbuka dan daftar hanya biaya yang berbeda antar pilihan.', 'Hitung dampak laba tambahan dari tiap alternatif.', 'Tambahkan pertimbangan strategis yang tidak tercermin dalam angka.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Pesanan Besar dengan Harga Rendah',
            context: 'Pembeli memesan 2.000 unit dengan harga Rp 35 ribu. Biaya variabel Rp 30 ribu, harga reguler Rp 50 ribu, kapasitas menganggur cukup.',
            dilemma: 'Terima atau tolak?',
            choices: [
              { text: 'Hitung laba kontribusi tambahan (Rp 5 ribu × 2.000 = Rp 10 juta), pastikan tidak mengorbankan penjualan reguler atau menciptakan preseden harga, lalu terima dengan syarat tertulis.', consequence: 'Anda menambah laba Rp 10 juta tanpa mengganggu pelanggan reguler.', explanation: 'Biaya relevan menunjukkan manfaat tambahan nyata.', best: true },
              { text: 'Tolak karena harga di bawah harga penuh.', consequence: 'Anda kehilangan laba tambahan yang sebenarnya tersedia.', explanation: 'Harga penuh tidak relevan pada kapasitas menganggur.' },
              { text: 'Terima tanpa membatasi dan tawarkan harga sama ke semua pelanggan.', consequence: 'Pelanggan reguler menuntut harga yang sama.', explanation: 'Preseden harga dapat merusak margin.' }
            ]
          },
          quiz: [
            { q: 'Mana yang tidak relevan dalam keputusan?', options: ['Biaya hangus', 'Biaya variabel tambahan', 'Pendapatan tambahan', 'Biaya yang dapat dihindari'], answer: 0, why: 'Biaya hangus tidak berubah oleh keputusan.' },
            { q: 'Pesanan khusus pada kapasitas menganggur layak bila harga...', options: ['Melebihi biaya variabel tambahan', 'Sama dengan harga reguler', 'Di bawah biaya tetap', 'Nol'], answer: 0, why: 'Selisih positif menambah laba kontribusi.' }
          ]
        },
        {
          id: 'am-7-kinerja',
          label: 'Pengukuran Kinerja: ROI, Residual Income, Balanced Scorecard',
          domain: 'Keuangan',
          summary: 'Ukuran kinerja membentuk perilaku. Pilih ukuran yang mendorong keputusan yang baik bagi seluruh perusahaan.',
          model: 'ROI, Residual Income, dan Balanced Scorecard',
          analogy: 'Jika koki dinilai hanya dari kecepatan keluar piring, ia mengorbankan rasa. Ukuran yang timpang mengarahkan perilaku yang timpang.',
          insight: 'ROI = laba operasi / aset operasi. Residual income (RI) = laba operasi − (biaya modal × aset operasi) dan mendorong menerima proyek yang menambah nilai, bukan hanya meningkatkan persentase. Contoh: laba Rp 120 juta, aset Rp 800 juta, biaya modal 12%: ROI 15%, RI = 120 − 96 = Rp 24 juta. Balanced scorecard memadukan perspektif keuangan, pelanggan, proses internal, serta belajar dan bertumbuh.',
          cross: { text: 'Kinerja x Insentif', domains: ['Keuangan', 'Psikologi'], insight: 'Manajer yang dinilai ROI dapat menolak proyek bagus yang menurunkan rata-rata ROI mereka. RI mengurangi masalah ini.' },
          story: { who: 'Divisi Distribusi (ilustrasi)', story: 'Divisi dengan ROI 15% menolak proyek berimbal 13% karena menurunkan ROI-nya, padahal biaya modal perusahaan 10%. Setelah beralih ke residual income, proyek itu diterima karena menambah Rp 3 juta per Rp 100 juta modal.', takeaway: 'Ukuran yang salah menolak proyek yang menambah nilai.' },
          actions: ['Hitung ROI dan residual income usaha atau divisi Anda.', 'Tambahkan satu ukuran dari perspektif pelanggan dan satu dari proses.', 'Periksa perilaku yang mungkin didorong oleh ukuran yang ada.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Manajer Menolak Proyek Bernilai',
            context: 'Manajer divisi dinilai dari ROI dan menolak proyek berimbal 13% padahal biaya modal 10%.',
            dilemma: 'Bagaimana memperbaikinya?',
            choices: [
              { text: 'Tambahkan residual income sebagai ukuran, sehingga proyek di atas biaya modal tampak menambah nilai bagi manajer.', consequence: 'Proyek diterima dan nilai perusahaan bertambah.', explanation: 'RI menyelaraskan keputusan divisi dengan kepentingan perusahaan.', best: true },
              { text: 'Paksa manajer menerima semua proyek.', consequence: 'Manajer merasa tidak adil dan motivasi turun.', explanation: 'Memaksa tanpa mengubah insentif tidak berkelanjutan.' },
              { text: 'Biarkan manajer menolak.', consequence: 'Perusahaan kehilangan nilai.', explanation: 'Ukuran yang buruk dibiarkan merugikan perusahaan.' }
            ]
          },
          quiz: [
            { q: 'Laba operasi Rp 120 juta, aset Rp 800 juta. ROI?', options: ['15%', '12%', '6,7%', '24%'], answer: 0, why: '120 / 800 = 15%.' },
            { q: 'Residual income = laba operasi dikurangi...', options: ['Biaya modal × aset operasi', 'Biaya tetap', 'Pajak', 'Penyusutan saja'], answer: 0, why: 'RI menghitung laba setelah beban modal.' }
          ]
        },
        {
          id: 'am-8-transfer',
          label: 'Transfer Pricing dan Pusat Tanggung Jawab',
          domain: 'Bisnis',
          summary: 'Ketika satu divisi menjual ke divisi lain, harga internal memengaruhi keputusan dan penilaian kinerja.',
          model: 'Transfer Pricing dan Responsibility Centers',
          analogy: 'Dapur dan restoran dalam satu grup: jika dapur menjual terlalu mahal ke restoran, restoran membeli dari luar padahal kapasitas dapur menganggur dan grup rugi.',
          insight: 'Pusat tanggung jawab: biaya, pendapatan, laba, atau investasi. Transfer price dapat berbasis biaya, pasar, atau hasil negosiasi. Aturan umum: harga transfer antara biaya variabel (batas bawah penjual) dan harga pasar (batas atas pembeli). Jika ada kapasitas menganggur, biaya variabel adalah batas bawah; jika penuh, harga pasar. Untuk transfer lintas yurisdiksi, aturan pajak mensyaratkan harga wajar (arm’s length).',
          cross: { text: 'Transfer Pricing x Pajak', domains: ['Bisnis', 'Pajak'], insight: 'Harga transfer antar entitas dalam grup memengaruhi laba kena pajak sehingga diawasi otoritas pajak.' },
          story: { who: 'Grup Usaha Makanan (ilustrasi)', story: 'Divisi pengolahan menjual bahan setengah jadi ke divisi ritel dengan harga Rp 60 ribu, padahal pasar Rp 55 ribu dan biaya variabel Rp 40 ribu, dengan kapasitas menganggur. Ritel membeli dari luar dengan Rp 55 ribu sehingga pengolahan kehilangan Rp 15 ribu per unit margin kontribusi. Grup menyepakati harga Rp 50 ribu.', takeaway: 'Harga transfer harus mendorong keputusan terbaik bagi grup.' },
          actions: ['Daftar transaksi antar bagian dalam usaha Anda.', 'Tentukan batas bawah dan batas atas harga transfer yang wajar.', 'Periksa apakah ada perilaku membeli dari luar yang merugikan grup.'],
          level: 'Mahir', time: '7 min',
          scenario: {
            title: 'Dilema Divisi Menolak Membeli dari Divisi Saudara',
            context: 'Divisi A punya kapasitas menganggur dan biaya variabel Rp 40 ribu. Divisi B bisa membeli dari luar Rp 55 ribu, tetapi A menuntut Rp 60 ribu.',
            dilemma: 'Apa solusi bagi perusahaan?',
            choices: [
              { text: 'Tetapkan harga transfer antara Rp 40 ribu dan Rp 55 ribu agar A tetap berproduksi dan B membeli internal, menambah laba grup.', consequence: 'Grup menambah laba Rp 15 ribu per unit dan kedua divisi mendapat bagian yang wajar.', explanation: 'Harga di antara batas bawah dan atas menyelaraskan insentif.', best: true },
              { text: 'Biarkan B membeli dari luar.', consequence: 'Kapasitas A menganggur dan grup kehilangan laba.', explanation: 'Keputusan divisi tidak optimal bagi grup.' },
              { text: 'Paksa B membeli Rp 60 ribu.', consequence: 'B rugi dan kinerjanya tampak buruk.', explanation: 'Harga di atas pasar menekan divisi pembeli.' }
            ]
          },
          quiz: [
            { q: 'Dengan kapasitas menganggur, batas bawah harga transfer adalah...', options: ['Biaya variabel penjual', 'Harga pasar', 'Biaya total plus laba', 'Nol'], answer: 0, why: 'Penjual tidak rugi bila harga menutup biaya variabel.' },
            { q: 'Harga transfer lintas yurisdiksi harus mengikuti prinsip...', options: ['Harga wajar (arm’s length)', 'Harga termurah', 'Harga tertinggi', 'Harga acak'], answer: 0, why: 'Otoritas pajak mensyaratkan harga seperti antar pihak independen.' }
          ]
        }
      ]
    }
  ]
});
