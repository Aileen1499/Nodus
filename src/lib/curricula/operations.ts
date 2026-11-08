import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const OPERATIONS_CURRICULUM = buildPath({
  id: 'curriculum-operasi-stok-rantai-pasok',
  topic: 'Operasi, Stok & Rantai Pasok untuk Pemilik Usaha',
  description:
    'Kelola pemasok, stok, MOQ, dan distribusi tanpa menjebak kas. Dari memilih pemasok, menghitung stok pengaman, sampai menegosiasikan termin dan mengelola risiko pasokan.',
  stages: [
    {
      title: 'Pemasok & Pembelian',
      lessons: [
        {
          id: 'op-1-pemasok',
          label: 'Memilih dan Menilai Pemasok',
          domain: 'Bisnis',
          summary: 'Harga termurah bukan pemasok terbaik. Nilai pemasok dari kualitas, keandalan, termin, dan risiko ketergantungan.',
          model: 'Total Cost of Ownership & Supplier Scorecard',
          analogy: 'Memilih pemasok seperti memilih pasangan bisnis jangka panjang: harga murah di awal tak berarti jika sering telat, cacat, atau menghilang saat Anda paling butuh.',
          insight: 'Total cost of ownership mencakup harga beli, ongkos kirim, cacat dan retur, keterlambatan, serta biaya modal akibat termin. Scorecard sederhana (kualitas, ketepatan waktu, harga, fleksibilitas, komunikasi) membuat perbandingan objektif. Memiliki minimal satu pemasok cadangan mengurangi risiko tunggal.',
          cross: { text: 'Pemasok x Manajemen Risiko', domains: ['Bisnis', 'Keuangan'], insight: 'Ketergantungan pada satu pemasok adalah risiko konsentrasi, seperti menaruh semua dana di satu saham.' },
          story: { who: 'Toko Bahan Kue (ilustrasi)', story: 'Pemasok A menawarkan tepung 5% lebih murah tetapi 20% pengirimannya terlambat sehingga produksi berhenti dua kali sebulan. Setelah dihitung kerugian pesanan batal, pemasok B yang lebih mahal 5% justru lebih murah secara total.', takeaway: 'Hitung total biaya termasuk kerugian akibat keterlambatan, bukan hanya harga per unit.' },
          actions: ['Buat scorecard 5 kriteria untuk pemasok utama Anda dan beri nilai 1-5.', 'Hitung total biaya per unit termasuk ongkir, retur, dan keterlambatan.', 'Identifikasi satu pemasok cadangan dan lakukan pesanan percobaan kecil.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Pemasok Murah tapi Tak Konsisten',
            context: 'Pemasok baru menawarkan harga 8% lebih murah dari pemasok lama yang andal.',
            dilemma: 'Apa yang dilakukan?',
            choices: [
              { text: 'Pesan percobaan kecil dari pemasok baru, nilai dengan scorecard, dan pertahankan pemasok lama sebagai cadangan.', consequence: 'Anda mendapat data nyata dan tidak mempertaruhkan pasokan.', explanation: 'Uji kecil sebelum beralih mengurangi risiko dan memberi daya tawar.', best: true },
              { text: 'Pindah seluruh pesanan ke pemasok baru.', consequence: 'Pengiriman pertama telat dan produksi terganggu.', explanation: 'Beralih total tanpa bukti menumbuhkan risiko pasokan.' },
              { text: 'Abaikan tawaran karena sudah nyaman.', consequence: 'Anda kehilangan peluang efisiensi dan daya tawar.', explanation: 'Alternatif yang diuji menjaga pemasok lama tetap kompetitif.' }
            ]
          },
          quiz: [
            { q: 'Apa yang termasuk total cost of ownership pemasok?', options: ['Hanya harga per unit', 'Harga, ongkir, cacat/retur, keterlambatan, dan biaya modal', 'Hanya merek', 'Hanya jarak'], answer: 1, why: 'Biaya total mencakup semua biaya yang timbul dari memakai pemasok itu.' },
            { q: 'Mengapa punya pemasok cadangan penting?', options: ['Agar tampak profesional', 'Mengurangi risiko ketergantungan tunggal', 'Karena wajib hukum', 'Agar harga naik'], answer: 1, why: 'Pemasok cadangan melindungi kelangsungan produksi.' }
          ]
        },
        {
          id: 'op-2-moq',
          label: 'MOQ, Modal Tertahan, dan Negosiasi Pesanan',
          domain: 'Keuangan',
          summary: 'Minimum order yang besar mengikat kas dalam stok. Hitung dampaknya dan negosiasikan alternatifnya.',
          model: 'Working Capital Tied in Inventory',
          analogy: 'MOQ seperti membeli tiket paket seminggu padahal Anda cuma butuh dua hari: harga per hari lebih murah, tetapi uang Anda terkunci untuk hari yang tak terpakai.',
          insight: 'Diskon volume menurunkan biaya per unit tetapi menaikkan modal tertahan dan risiko usang. Titik optimal ditentukan oleh perbandingan penghematan harga dengan biaya modal dan risiko. Alternatif: konsinyasi, pre-order, pembelian bersama, pengiriman bertahap dengan harga terkunci.',
          cross: { text: 'MOQ x Negosiasi', domains: ['Keuangan', 'Komunikasi'], insight: 'Banyak pemasok fleksibel pada struktur (jadwal kirim, termin) bila Anda menawarkan komitmen jangka panjang sebagai imbalan.' },
          story: { who: 'Distributor AC Kecil (ilustrasi)', story: 'Distributor meminta pembelian minimum 20 unit AC senilai Rp 70 juta, padahal penjualan hanya 6 unit per bulan, stok baru habis 3,3 bulan. Dengan menegosiasikan pengiriman dua tahap dengan harga yang sama, modal tertahan turun setengahnya.', takeaway: 'Minta struktur yang menyesuaikan arus kas Anda, bukan hanya diskon harga.' },
          actions: ['Hitung modal tertahan dan lama stok habis untuk MOQ terbesar Anda di tab Alat.', 'Ajukan tiga alternatif ke pemasok: kirim bertahap, konsinyasi, atau pre-order.', 'Bandingkan penghematan harga dengan biaya modal 3 bulan.'],
          level: 'Menengah', time: '5 min', tool: 'inventory',
          scenario: {
            title: 'Dilema Diskon 12% untuk Order Dua Kali Lipat',
            context: 'Pemasok menawarkan diskon 12% jika Anda membeli dua kali lipat dari biasa. Kas Anda terbatas.',
            dilemma: 'Ambil atau tolak?',
            choices: [
              { text: 'Hitung dulu modal tertahan dan biaya modalnya. Ambil hanya jika stok habis cepat dan kas operasional tetap aman, atau minta pengiriman bertahap.', consequence: 'Anda hanya mengambil diskon bila nilai penghematan melebihi biaya menahan stok.', explanation: 'Diskon volume layak jika perputaran stok cukup cepat.', best: true },
              { text: 'Ambil karena diskon besar.', consequence: 'Kas menipis dan sebagian stok lambat laku.', explanation: 'Diskon bukan laba sampai barang terjual.' },
              { text: 'Tolak tanpa menawar.', consequence: 'Anda melewatkan peluang struktur yang lebih baik.', explanation: 'Negosiasi bisa menghasilkan diskon sebagian dengan risiko lebih rendah.' }
            ]
          },
          quiz: [
            { q: 'Risiko utama MOQ besar?', options: ['Harga naik', 'Modal tertahan dan stok usang', 'Pajak naik', 'Kualitas turun otomatis'], answer: 1, why: 'Stok besar mengikat kas dan berisiko tak terjual.' },
            { q: 'Alternatif selain membeli MOQ penuh?', options: ['Konsinyasi atau pengiriman bertahap', 'Menutup usaha', 'Menurunkan kualitas', 'Mengabaikan pemasok'], answer: 0, why: 'Struktur alternatif menyelaraskan pembelian dengan penjualan.' }
          ]
        },
        {
          id: 'op-3-termin',
          label: 'Termin Pembayaran dan Hubungan Pemasok',
          domain: 'Keuangan',
          summary: 'Termin bayar (TOP) adalah pinjaman tanpa bunga dari pemasok. Kelola sebagai alat arus kas, bukan celah.',
          model: 'Trade Credit & Days Payable Outstanding',
          analogy: 'Termin bayar 30 hari seperti pinjaman tanpa bunga selama sebulan. Anda memakai uang pemasok untuk berjualan, lalu melunasi dari hasil penjualan. Selama dilunasi tepat waktu, hubungan ini menguntungkan kedua pihak.',
          insight: 'Memperpanjang DPO mengurangi kebutuhan modal kerja. Namun terlambat bayar merusak reputasi dan bisa membatalkan kredit. Diskon pembayaran dini (misalnya 2/10 net 30) setara bunga tahunan yang sangat tinggi sehingga layak diambil jika kas ada.',
          cross: { text: 'Termin x Psikologi Kepercayaan', domains: ['Keuangan', 'Psikologi'], insight: 'Kredit dagang dibangun lewat rekam jejak. Satu keterlambatan kecil yang dikomunikasikan lebih dulu lebih dimaafkan daripada diam.' },
          story: { who: 'Toko Material Bangunan (ilustrasi)', story: 'Pemasok memberi termin 30 hari. Pemilik menjual cepat dalam 20 hari dan memutar uangnya, sehingga hampir tak butuh modal tambahan. Saat satu bulan lambat, ia menelepon pemasok lebih dulu dan mendapat perpanjangan seminggu.', takeaway: 'Komunikasi proaktif mengubah masalah kas jadi negosiasi, bukan pelanggaran.' },
          actions: ['Catat termin bayar tiap pemasok dan hari rata-rata Anda membayar.', 'Hitung apakah ada diskon pembayaran dini yang layak diambil.', 'Buat kalender jatuh tempo dan bayar tepat waktu selama tiga bulan untuk membangun rekam jejak.'],
          level: 'Menengah', time: '5 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Tak Mampu Bayar Tepat Waktu',
            context: 'Dua hari lagi jatuh tempo utang Rp 30 juta, tetapi pembayaran pelanggan baru masuk minggu depan.',
            dilemma: 'Apa langkah paling baik?',
            choices: [
              { text: 'Hubungi pemasok hari ini, jelaskan jadwal tagihan masuk, dan tawarkan pembayaran sebagian sekarang plus sisanya terjadwal.', consequence: 'Pemasok menghargai transparansi dan menyetujui jadwal baru.', explanation: 'Komunikasi lebih awal menjaga kepercayaan dan kredit.', best: true },
              { text: 'Diam dan berharap tidak ditagih.', consequence: 'Pesanan berikutnya ditahan dan kredit dicabut.', explanation: 'Keterlambatan tanpa kabar dianggap tidak dapat diandalkan.' },
              { text: 'Pinjam harian bunga tinggi untuk membayar.', consequence: 'Biaya bunga menggerus margin bulan ini.', explanation: 'Negosiasi jadwal jauh lebih murah daripada pinjaman darurat.' }
            ]
          },
          quiz: [
            { q: 'Termin bayar pemasok 30 hari secara ekonomi mirip...', options: ['Pinjaman tanpa bunga dari pemasok', 'Hibah', 'Pajak', 'Asuransi'], answer: 0, why: 'Anda memakai dana pemasok selama 30 hari tanpa bunga.' },
            { q: 'Apa yang sebaiknya dilakukan bila akan telat bayar?', options: ['Diam', 'Menghubungi pemasok lebih awal dengan rencana', 'Memblokir pemasok', 'Mengganti nomor'], answer: 1, why: 'Transparansi menjaga kepercayaan.' }
          ]
        }
      ]
    },
    {
      title: 'Mengelola Stok',
      lessons: [
        {
          id: 'op-4-abc',
          label: 'Analisis ABC dan Stok Pengaman',
          domain: 'Data & Analitik',
          summary: 'Tidak semua barang sama pentingnya. Fokuskan perhatian dan modal pada barang yang menyumbang paling banyak nilai.',
          model: 'ABC Analysis (Pareto) & Safety Stock',
          analogy: 'Mirip merapikan lemari: sedikit baju yang Anda pakai hampir tiap hari harus mudah dijangkau, sisanya boleh di rak atas. ABC memisahkan barang yang harus selalu tersedia dari yang cukup dipantau.',
          insight: 'Prinsip Pareto: sekitar 20% barang sering menyumbang 80% nilai penjualan. Kelas A butuh pemantauan ketat dan stok pengaman, kelas C cukup aturan sederhana. Stok pengaman melindungi dari lonjakan permintaan dan keterlambatan pasokan: semakin tidak pasti pasokan atau permintaan, semakin besar.',
          cross: { text: 'ABC x Statistika', domains: ['Data & Analitik', 'Bisnis'], insight: 'Variabilitas permintaan menentukan stok pengaman. Data penjualan historis lebih dapat dipercaya daripada perasaan.' },
          story: { who: 'Toko Suku Cadang (ilustrasi)', story: 'Dari 500 SKU, 60 SKU menyumbang 78% omzet. Pemilik memastikan 60 SKU itu tidak pernah kosong dan memangkas stok SKU lambat. Kas yang bebas dipakai membeli stok barang laris.', takeaway: 'Fokus pada yang paling bernilai menaikkan layanan sekaligus membebaskan kas.' },
          actions: ['Urutkan produk berdasarkan omzet 6 bulan dan tandai kelas A, B, C.', 'Tentukan stok pengaman minimal untuk kelas A.', 'Kurangi pembelian ulang kelas C yang bergerak lambat.'],
          level: 'Menengah', time: '5 min', tool: 'inventory',
          scenario: {
            title: 'Dilema Stok Barang Laris Sering Kosong',
            context: 'Barang laris sering kosong sementara gudang penuh barang lambat laku.',
            dilemma: 'Apa tindakan paling tepat?',
            choices: [
              { text: 'Klasifikasi ABC, tambah stok pengaman kelas A, dan likuidasi bertahap barang lambat untuk membebaskan kas.', consequence: 'Ketersediaan barang laris naik dan kas lebih sehat.', explanation: 'Realokasi modal dari barang lambat ke barang cepat menaikkan imbal modal.', best: true },
              { text: 'Tambah semua stok sebanyak mungkin.', consequence: 'Kas terkuras dan barang lambat makin menumpuk.', explanation: 'Menambah stok tanpa prioritas memperburuk modal tertahan.' },
              { text: 'Kurangi seluruh stok sama rata.', consequence: 'Barang laris tetap kosong.', explanation: 'Pemotongan seragam mengabaikan perbedaan nilai.' }
            ]
          },
          quiz: [
            { q: 'Apa isi prinsip Pareto dalam stok?', options: ['Semua barang sama penting', 'Sedikit barang sering menyumbang sebagian besar nilai', 'Barang murah paling penting', 'Stok harus nol'], answer: 1, why: 'Sebagian kecil barang menyumbang sebagian besar nilai penjualan.' },
            { q: 'Stok pengaman berfungsi untuk...', options: ['Menghias gudang', 'Melindungi dari lonjakan permintaan dan keterlambatan pasokan', 'Menurunkan pajak', 'Menaikkan harga'], answer: 1, why: 'Stok pengaman menyerap ketidakpastian.' }
          ]
        },
        {
          id: 'op-5-perputaran',
          label: 'Perputaran Stok dan Barang Mati',
          domain: 'Keuangan',
          summary: 'Seberapa cepat stok berubah menjadi uang, dan cara menangani barang yang tak lagi laku.',
          model: 'Inventory Turnover & Dead Stock Management',
          analogy: 'Stok seperti buah di pasar: perputaran tinggi berarti buah selalu segar dan cepat jadi uang. Stok yang lama diam akan membusuk (usang) dan memakan ruang yang bisa dipakai barang laku.',
          insight: 'Perputaran stok = HPP / rata-rata persediaan. Hari persediaan (DIO) = 365 / perputaran. Perputaran rendah menandakan modal tertahan. Barang mati sebaiknya diidentifikasi tiap kuartal dan ditangani dengan bundling, diskon terarah, donasi, atau retur ke pemasok.',
          cross: { text: 'Stok x Pemasaran', domains: ['Keuangan', 'Bisnis'], insight: 'Promosi terarah pada stok lambat sering lebih efektif daripada diskon umum.' },
          story: { who: 'Butik Pakaian (ilustrasi)', story: 'Perputaran stok 3 kali per tahun (DIO sekitar 120 hari). Dengan memangkas koleksi lambat dan memesan lebih sering dalam jumlah kecil, perputaran naik jadi 5 kali (DIO 73 hari), membebaskan kas puluhan juta.', takeaway: 'Pesanan lebih kecil dan sering menaikkan perputaran dan mengurangi risiko usang.' },
          actions: ['Hitung perputaran dan hari persediaan Anda tiga bulan terakhir.', 'Daftar barang tanpa penjualan 90 hari dan beri rencana penanganan.', 'Tetapkan batas usia stok sebelum ditinjau ulang.'],
          level: 'Menengah', time: '5 min', tool: 'inventory',
          scenario: {
            title: 'Dilema Barang Mati Senilai Rp 20 Juta',
            context: 'Anda menemukan stok Rp 20 juta yang tak laku sembilan bulan.',
            dilemma: 'Bagaimana menanganinya?',
            choices: [
              { text: 'Bundel dengan barang laris, diskon terarah, atau retur ke pemasok, dengan batas harga minimal dan tenggat jelas.', consequence: 'Sebagian besar kas kembali dan Anda belajar memperbaiki pembelian.', explanation: 'Mengakui barang mati dan bertindak cepat meminimalkan kerugian.', best: true },
              { text: 'Biarkan sambil berharap tren kembali.', consequence: 'Nilai terus turun dan ruang terbuang.', explanation: 'Harapan tidak mengembalikan kas.' },
              { text: 'Buang semuanya tanpa mencoba.', consequence: 'Seluruh Rp 20 juta hangus.', explanation: 'Masih ada opsi pemulihan nilai sebagian.' }
            ]
          },
          quiz: [
            { q: 'HPP setahun Rp 360 juta, rata-rata stok Rp 90 juta. Berapa perputaran stok?', options: ['2', '4', '8', '0,25'], answer: 1, why: '360 / 90 = 4 kali setahun.' },
            { q: 'Perputaran 4 kali setahun berarti hari persediaan kira-kira...', options: ['365', '91', '30', '4'], answer: 1, why: '365 / 4 = sekitar 91 hari.' }
          ]
        }
      ]
    },
    {
      title: 'Distribusi & Ketahanan',
      lessons: [
        {
          id: 'op-6-distribusi',
          label: 'Saluran Distribusi dan Margin Perantara',
          domain: 'Bisnis',
          summary: 'Langsung, reseller, distributor, atau marketplace: tiap saluran punya margin, jangkauan, dan kontrol yang berbeda.',
          model: 'Channel Economics & Margin Stacking',
          analogy: 'Rantai distribusi seperti estafet: tiap pelari mengambil bagian waktu. Makin banyak pelari, makin jauh jangkauan, tetapi tiap pelari menuntut bagian dari hadiah.',
          insight: 'Setiap perantara menambah margin sehingga harga akhir naik atau margin produsen turun (margin stacking). Saluran langsung memberi margin dan data pelanggan lebih besar tetapi menuntut biaya jual lebih tinggi. Pilih saluran menurut kemampuan jangkauan dan margin yang tersisa setelah biaya.',
          cross: { text: 'Distribusi x Strategi Harga', domains: ['Bisnis', 'Keuangan'], insight: 'Harga ke konsumen harus konsisten lintas saluran agar tidak terjadi konflik antar mitra.' },
          story: { who: 'Produsen Sambal Rumahan (ilustrasi)', story: 'Harga produksi Rp 12.000, harga konsumen Rp 30.000. Distributor meminta 20%, toko 25%. Setelah semua bagian, margin produsen hanya Rp 5.000. Menjual langsung online menaikkan margin tetapi menambah biaya iklan dan kirim; produsen memadukan keduanya.', takeaway: 'Hitung margin bersih tiap saluran setelah semua biaya, baru putuskan komposisinya.' },
          actions: ['Hitung margin bersih produk Anda untuk tiap saluran penjualan.', 'Tentukan harga eceran yang konsisten di semua saluran.', 'Uji satu saluran baru dengan volume kecil sebelum komitmen besar.'],
          level: 'Menengah', time: '5 min', tool: 'margin',
          scenario: {
            title: 'Dilema Distributor Menuntut Margin 30%',
            context: 'Distributor besar menuntut margin 30% dengan jangkauan luas. Margin Anda saat ini 35% jika jual sendiri.',
            dilemma: 'Apa langkah terbaik?',
            choices: [
              { text: 'Hitung margin bersih setelah margin distributor dan biaya, negosiasikan volume minimum dan eksklusivitas wilayah, lalu putuskan dengan angka.', consequence: 'Anda hanya menerima bila volume tambahan menutup penurunan margin per unit.', explanation: 'Volume besar dengan margin kecil bisa lebih menguntungkan jika biaya tetap tersebar.', best: true },
              { text: 'Terima semua syarat karena jangkauannya luas.', consequence: 'Margin terkikis dan Anda tergantung satu saluran.', explanation: 'Jangkauan tanpa perhitungan margin adalah risiko.' },
              { text: 'Tolak dan hanya jual sendiri selamanya.', consequence: 'Pertumbuhan terbatas pada kapasitas penjualan Anda.', explanation: 'Perantara bisa jadi pengganda bila angkanya benar.' }
            ]
          },
          quiz: [
            { q: 'Apa itu margin stacking?', options: ['Penumpukan margin perantara yang menaikkan harga akhir atau menekan margin produsen', 'Penumpukan stok', 'Jenis pajak', 'Strategi iklan'], answer: 0, why: 'Setiap perantara mengambil margin sehingga memengaruhi harga atau margin produsen.' },
            { q: 'Mengapa harga konsisten antar saluran penting?', options: ['Agar mudah diingat saja', 'Mencegah konflik antar mitra dan erosi merek', 'Tidak penting', 'Untuk pajak'], answer: 1, why: 'Perbedaan harga besar memicu konflik dan merusak merek.' }
          ]
        },
        {
          id: 'op-7-risiko',
          label: 'Risiko Pasokan dan Rencana Cadangan',
          domain: 'Geopolitik',
          summary: 'Gangguan pasokan, kenaikan kurs, dan keterlambatan logistik adalah keniscayaan. Siapkan rencana sebelum terjadi.',
          model: 'Supply Chain Resilience (Redundancy, Buffer, Visibility)',
          analogy: 'Rencana cadangan pasokan seperti ban serep: Anda berharap tak pernah memakainya, tetapi saat bocor di jalan tol, ia menyelamatkan perjalanan.',
          insight: 'Ketahanan rantai pasok dibangun dari tiga hal: redundansi (pemasok alternatif), penyangga (stok pengaman), dan visibilitas (pemantauan lead time dan harga). Untuk bahan impor, risiko kurs dan kebijakan perdagangan perlu dipantau. Kontrak dan klausul harga membantu membagi risiko.',
          cross: { text: 'Pasokan x Geopolitik & Kurs', domains: ['Geopolitik', 'Ekonomi'], insight: 'Pelemahan rupiah menaikkan biaya bahan impor. Lindung nilai sederhana: harga jual yang dapat disesuaikan dan stok bahan strategis.' },
          story: { who: 'Pabrik Kemasan (ilustrasi)', story: 'Bahan baku impor naik 15% karena kurs dan hambatan logistik. Pabrik yang sudah punya pemasok lokal alternatif dan klausul penyesuaian harga bertahan, sedangkan kompetitor dengan satu pemasok harus menghentikan produksi dua minggu.', takeaway: 'Ketahanan murah saat dibangun sebelum krisis dan mahal setelahnya.' },
          actions: ['Petakan bahan dan pemasok kritis yang tak punya pengganti.', 'Tentukan lead time dan stok pengaman minimum untuk bahan kritis.', 'Susun daftar tindakan jika pemasok utama gagal kirim dua minggu.'],
          level: 'Mahir', time: '6 min',
          scenario: {
            title: 'Dilema Bahan Impor Naik 15%',
            context: 'Bahan baku impor naik 15% karena kurs. Pelanggan sensitif harga.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Kombinasikan: cari pemasok lokal alternatif, sesuaikan harga bertahap dengan komunikasi jelas, dan perbaiki efisiensi bahan.', consequence: 'Margin terjaga tanpa mengejutkan pelanggan, dan ketergantungan impor berkurang.', explanation: 'Respons berlapis lebih tahan daripada satu tindakan ekstrem.', best: true },
              { text: 'Telan seluruh kenaikan agar harga tetap.', consequence: 'Margin merosot dan tak berkelanjutan.', explanation: 'Menanggung biaya sendiri selamanya menggerus usaha.' },
              { text: 'Naikkan harga 15% mendadak tanpa penjelasan.', consequence: 'Pelanggan pergi ke pesaing.', explanation: 'Penyesuaian tanpa komunikasi merusak kepercayaan.' }
            ]
          },
          quiz: [
            { q: 'Tiga pilar ketahanan rantai pasok?', options: ['Redundansi, penyangga, visibilitas', 'Harga, merek, logo', 'Pajak, kurs, bunga', 'Iklan, diskon, bonus'], answer: 0, why: 'Redundansi, penyangga, dan visibilitas membuat rantai pasok lebih tahan.' },
            { q: 'Cara mengurangi risiko satu pemasok?', options: ['Menambah pemasok alternatif', 'Menghapus stok', 'Menaikkan harga saja', 'Menunggu'], answer: 0, why: 'Pemasok alternatif mengurangi risiko konsentrasi.' }
          ]
        }
      ]
    }
  ]
});
