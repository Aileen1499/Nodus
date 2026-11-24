import { buildPath } from '../curriculumBuilder';

// PENTING: aturan pajak berubah. Angka tarif/batas di materi ini adalah gambaran umum per akhir 2026
// (mis. PPh Final UMKM 0,5% dan batas Rp4,8 miliar, PP 20/2026). Contoh hitung bertanda "ilustrasi".
// Bukan nasihat pajak; setiap pelajaran mengarahkan pembaca memverifikasi ke DJP (pajak.go.id) atau konsultan pajak.
export const TAX_CURRICULUM = buildPath({
  id: 'curriculum-pajak-praktis',
  topic: 'Pajak Praktis untuk Pemilik Usaha',
  description:
    'Memahami pajak usaha tanpa jargon: PPh Final UMKM, tarif progresif, PPN masukan dan keluaran, pembukuan yang rapi, dan kepatuhan. Memilih skema yang sah dan hemat, bukan menghindar secara ilegal.',
  stages: [
    {
      title: 'Peta Pajak Usaha',
      lessons: [
        {
          id: 'px-1-peta',
          label: 'Peta Pajak: Apa yang Harus Anda Bayar dan Lapor',
          domain: 'Pajak',
          summary: 'Kenali jenis pajak utama usaha: pajak atas penghasilan, pajak atas penjualan (PPN), dan pajak yang dipotong dari gaji.',
          model: 'Peta Kewajiban Pajak',
          analogy: 'Seperti rambu lalu lintas: tidak perlu hafal semuanya, tetapi harus tahu rambu mana yang berlaku untuk jalan yang Anda lewati.',
          insight: 'Tiga kelompok besar: (1) pajak atas penghasilan usaha (PPh, bisa final atau tidak final), (2) PPN atas penyerahan barang/jasa bagi pengusaha yang dikukuhkan sebagai PKP, dan (3) pajak yang Anda potong dari pihak lain, misalnya PPh 21 atas gaji karyawan. Langkah dasar: punya NPWP, mencatat omzet, membayar dan melaporkan tepat waktu. Aturan dapat berubah, jadi periksa ketentuan terkini di situs resmi DJP.',
          cross: { text: 'Pajak x Hukum Usaha', domains: ['Pajak', 'Hukum'], insight: 'Bentuk usaha (perorangan, CV, PT) memengaruhi kewajiban dan cara pajak dihitung.' },
          story: { who: 'Penjual Kue Rumahan (ilustrasi)', story: 'Ia berjualan dua tahun tanpa mencatat omzet dan baru bingung saat diminta bukti penghasilan untuk pinjaman. Setelah memisahkan rekening usaha dan mencatat omzet bulanan, ia langsung tahu posisi pajaknya dan mudah mengajukan pembiayaan.', takeaway: 'Catatan omzet adalah fondasi semua urusan pajak.' },
          actions: ['Pastikan Anda punya NPWP dan akses ke akun pajak daring.', 'Catat omzet bulanan di satu tempat.', 'Daftar jenis pajak yang mungkin berlaku untuk bentuk usaha Anda.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Usaha Baru Belum Tahu Kewajiban Pajak',
            context: 'Anda baru berjualan daring dengan omzet yang mulai stabil dan belum pernah mengurus pajak.',
            dilemma: 'Apa langkah pertama?',
            choices: [
              { text: 'Siapkan NPWP, catat omzet rapi, lalu pelajari skema pajak yang berlaku dan bila perlu konsultasi ke DJP atau konsultan.', consequence: 'Anda tahu kewajiban sejak awal dan terhindar dari denda.', explanation: 'Mulai dari pencatatan dan kepatuhan dasar.', best: true },
              { text: 'Menunggu sampai ditegur kantor pajak.', consequence: 'Anda menghadapi tagihan menumpuk dan sanksi.', explanation: 'Menunda memperbesar risiko.' },
              { text: 'Menyembunyikan sebagian omzet agar pajak kecil.', consequence: 'Risiko sanksi serius dan masalah pembiayaan.', explanation: 'Penggelapan berbeda dari perencanaan pajak yang sah.' }
            ]
          },
          quiz: [
            { q: 'Pajak yang Anda potong dari gaji karyawan adalah...', options: ['PPh 21', 'PPN', 'PBB', 'Bea materai'], answer: 0, why: 'PPh 21 dipotong dari penghasilan karyawan.' },
            { q: 'Fondasi paling penting untuk urusan pajak usaha?', options: ['Pencatatan omzet yang rapi', 'Menghindari semua pajak', 'Menunda pelaporan', 'Mengganti nama usaha'], answer: 0, why: 'Tanpa catatan, pajak tidak bisa dihitung dengan benar.' }
          ]
        },
        {
          id: 'px-2-final',
          label: 'PPh Final UMKM 0,5%: Menghitung dan Syaratnya',
          domain: 'Pajak',
          summary: 'Skema sederhana: persentase tetap dari omzet. Pelajari batas, bagian omzet yang tidak kena pajak, dan siapa yang berhak.',
          model: 'PPh Final atas Peredaran Bruto',
          analogy: 'Seperti tarif parkir flat: Anda bayar sesuai jam tanpa peduli berapa isi bagasi. Mudah, tetapi bukan selalu yang termurah.',
          insight: 'Menurut ringkasan ketentuan terbaru (PP 20/2026, berlaku sejak 22 April 2026), PPh Final UMKM sebesar 0,5% dari peredaran bruto, dengan batas peredaran bruto Rp4,8 miliar per tahun. Untuk wajib pajak orang pribadi, omzet sampai Rp500 juta per tahun tidak dikenai pajak; pajak dihitung atas omzet di atas itu. Hak atas skema ini bergantung pada bentuk dan syarat tertentu, misalnya badan seperti koperasi dan perseroan perorangan dengan ketentuan khusus. Verifikasi kelayakan Anda di pajak.go.id atau konsultan, karena aturan dapat berubah.',
          cross: { text: 'Pajak Final x Arus Kas', domains: ['Pajak', 'Keuangan'], insight: 'Pajak final dihitung dari omzet, bukan laba. Saat margin tipis, bebannya terasa lebih berat.' },
          story: { who: 'Pemilik Toko Daring Orang Pribadi (ilustrasi)', story: 'Omzet setahun Rp900 juta. Bagian yang kena pajak adalah Rp900 juta dikurangi Rp500 juta sama dengan Rp400 juta, sehingga PPh Final = 0,5% x Rp400 juta = Rp2 juta setahun. Bila omzet Rp1,2 miliar, pajaknya Rp3,5 juta.', takeaway: 'Hitung pajak final dari omzet di atas bagian yang dibebaskan.' },
          actions: ['Hitung omzet setahun terakhir dan bandingkan dengan batas Rp4,8 miliar.', 'Hitung pajak final dengan rumus 0,5% x (omzet minus Rp500 juta) bila Anda orang pribadi.', 'Periksa apakah bentuk usaha Anda memenuhi syarat di situs DJP.'],
          level: 'Pemula', time: '6 min',
          scenario: {
            title: 'Dilema Omzet Mendekati Batas Skema Final',
            context: 'Omzet orang pribadi Anda mendekati batas tahunan skema final dan terus tumbuh.',
            dilemma: 'Apa yang Anda lakukan?',
            choices: [
              { text: 'Pantau omzet kumulatif tiap bulan, pahami konsekuensi bila melewati batas, dan rencanakan pembukuan dengan bantuan konsultan.', consequence: 'Anda siap beralih tanpa kejutan tagihan pajak.', explanation: 'Perencanaan dini menghindari kejutan.', best: true },
              { text: 'Menahan pencatatan penjualan agar tetap di bawah batas.', consequence: 'Itu pelanggaran dan berisiko sanksi.', explanation: 'Mengecilkan omzet adalah penggelapan.' },
              { text: 'Mengabaikan karena merasa kecil.', consequence: 'Anda tidak sadar telah melewati batas.', explanation: 'Batas dihitung dari omzet nyata.' }
            ]
          },
          quiz: [
            { q: 'Omzet orang pribadi Rp900 juta. Dengan tarif 0,5% dan omzet Rp500 juta bebas pajak, PPh final setahun?', options: ['Rp2 juta', 'Rp4,5 juta', 'Rp0', 'Rp9 juta'], answer: 0, why: '(900 - 500) x 0,5% = Rp2 juta.' },
            { q: 'PPh final dihitung dari...', options: ['Peredaran bruto (omzet)', 'Laba bersih', 'Aset', 'Modal'], answer: 0, why: 'Dasarnya omzet, bukan laba.' }
          ]
        }
      ]
    },
    {
      title: 'Memilih Skema dan PPN',
      lessons: [
        {
          id: 'px-3-skema',
          label: 'Final atau Pembukuan: Mana yang Lebih Hemat?',
          domain: 'Pajak',
          summary: 'Margin menentukan skema yang lebih menguntungkan. Usaha bermargin tipis bisa lebih hemat dengan pembukuan, bermargin tebal sering lebih hemat dengan final.',
          model: 'Perbandingan Tarif Progresif vs Tarif Final',
          analogy: 'Tarif flat taksi vs argo: untuk jarak jauh flat murah, untuk jarak dekat argo lebih hemat. Margin Anda adalah jaraknya.',
          insight: 'Dengan pembukuan, pajak dihitung dari penghasilan neto dikurangi PTKP lalu dikenai tarif progresif (UU HPP: 5% sampai Rp60 juta, 15% sampai Rp250 juta, 25% sampai Rp500 juta, dan seterusnya). PTKP orang pribadi tidak kawin tanpa tanggungan Rp54 juta. Pada skema final, beban tidak peduli margin. Karena itu bandingkan keduanya dengan angka riil. Ada ketentuan pemilihan dan pemberitahuan skema, jadi konsultasikan sebelum berpindah.',
          cross: { text: 'Pajak x Struktur Margin', domains: ['Pajak', 'Keuangan'], insight: 'Margin rendah berarti penghasilan kena pajak kecil, sehingga pajak progresif bisa nol.' },
          story: { who: 'Dua Pedagang dengan Omzet Rp1 Miliar (ilustrasi)', story: 'Pedagang A bermargin 5% (neto Rp50 juta): setelah PTKP Rp54 juta, penghasilan kena pajak nol, sehingga pajak progresif nol, sedangkan final Rp2,5 juta. Pedagang B bermargin 40% (neto Rp400 juta, PKP Rp346 juta): pajak progresif sekitar Rp55,5 juta, sedangkan final hanya Rp2,5 juta.', takeaway: 'Bandingkan skema dengan angka margin Anda, bukan ikut-ikutan.' },
          actions: ['Hitung penghasilan neto perkiraan setahun dari margin Anda.', 'Hitung pajak di kedua skema dengan contoh ini.', 'Konsultasikan hasilnya sebelum memilih skema.'],
          level: 'Menengah', time: '7 min',
          scenario: {
            title: 'Dilema Memilih Skema untuk Usaha Bermargin Tipis',
            context: 'Omzet Rp1 miliar dengan margin hanya 5% karena persaingan harga.',
            dilemma: 'Bagaimana memutuskan?',
            choices: [
              { text: 'Bandingkan hitungan kedua skema dengan angka riil, pahami syarat pemilihan skema, dan putuskan bersama konsultan pajak.', consequence: 'Anda menemukan skema yang lebih hemat dan sah.', explanation: 'Pilih berdasarkan hitungan, patuhi prosedur.', best: true },
              { text: 'Selalu pilih final karena paling sederhana.', consequence: 'Anda membayar lebih dari yang perlu.', explanation: 'Sederhana tidak selalu hemat.' },
              { text: 'Memalsukan biaya agar neto lebih kecil.', consequence: 'Risiko sanksi berat.', explanation: 'Memalsukan bukti adalah pelanggaran.' }
            ]
          },
          quiz: [
            { q: 'Usaha bermargin tipis dengan pembukuan berpotensi...', options: ['Pajak progresif nol atau kecil', 'Selalu lebih mahal', 'Tidak bisa dihitung', 'Kena tarif tertinggi'], answer: 0, why: 'Penghasilan neto kecil bisa di bawah PTKP.' },
            { q: 'Penghasilan neto Rp300 juta, PTKP Rp54 juta. Penghasilan kena pajak?', options: ['Rp246 juta', 'Rp300 juta', 'Rp54 juta', 'Rp354 juta'], answer: 0, why: '300 - 54 = 246.' }
          ]
        },
        {
          id: 'px-4-ppn',
          label: 'PPN: Pajak Masukan, Pajak Keluaran, dan PKP',
          domain: 'Pajak',
          summary: 'PPN adalah pajak atas konsumsi yang Anda pungut dari pembeli dan setor ke negara, dikurangi PPN yang Anda bayar saat membeli.',
          model: 'Mekanisme PPN: Keluaran minus Masukan',
          analogy: 'Anda hanya perantara: memungut dari pembeli, mengurangi yang sudah Anda bayar ke pemasok, dan menyetor selisihnya.',
          insight: 'Pengusaha yang melewati batas peredaran bruto (umumnya Rp4,8 miliar per tahun) wajib dikukuhkan sebagai Pengusaha Kena Pajak (PKP). PPN yang disetor = PPN keluaran (dari penjualan) dikurangi PPN masukan (dari pembelian yang sah dengan faktur pajak). Karena PPN dipungut dari pembeli, ia bukan biaya usaha Anda, tetapi harus dipisahkan dari kas operasional agar tidak terpakai. Tarif PPN dapat berubah, cek ketentuan terkini; contoh di bawah memakai tarif ilustrasi 10%.',
          cross: { text: 'PPN x Arus Kas', domains: ['Pajak', 'Keuangan'], insight: 'PPN yang sudah dipungut tetapi belum disetor adalah uang negara. Memakainya untuk operasional menimbulkan masalah kas.' },
          story: { who: 'Distributor Peralatan Dapur (ilustrasi)', story: 'Tarif ilustrasi 10%. Bulan ini penjualan Rp100 juta (PPN keluaran Rp10 juta) dan pembelian Rp60 juta (PPN masukan Rp6 juta). PPN yang disetor Rp10 juta - Rp6 juta = Rp4 juta. Ia menyisihkan PPN di rekening terpisah sehingga tidak kekurangan saat jatuh tempo.', takeaway: 'Setor selisih PPN keluaran dan masukan, dan pisahkan dananya.' },
          actions: ['Cek omzet tahunan terhadap batas PKP.', 'Pisahkan rekening untuk PPN yang dipungut.', 'Simpan faktur pajak pembelian dengan rapi.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Memakai Dana PPN untuk Menutup Operasional',
            context: 'Kas menipis menjelang bulan sepi, dan ada dana PPN yang sudah dipungut dari pembeli tetapi belum disetor.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Jangan sentuh dana PPN; cari sumber lain seperti menunda pembelian atau menagih piutang, dan pisahkan dana PPN sejak diterima.', consequence: 'Setoran tepat waktu dan kas operasional diatur dengan cara lain.', explanation: 'PPN yang dipungut bukan milik usaha.', best: true },
              { text: 'Pakai dana PPN dulu dan setor belakangan.', consequence: 'Terlambat setor dan terkena sanksi.', explanation: 'Keterlambatan menimbulkan denda dan bunga.' },
              { text: 'Tidak memungut PPN agar harga lebih murah.', consequence: 'Anda melanggar ketentuan bila sudah PKP.', explanation: 'PKP wajib memungut PPN.' }
            ]
          },
          quiz: [
            { q: 'Penjualan Rp100 juta dan pembelian Rp60 juta, tarif ilustrasi 10%. PPN yang disetor?', options: ['Rp4 juta', 'Rp10 juta', 'Rp6 juta', 'Rp16 juta'], answer: 0, why: '10 juta - 6 juta = 4 juta.' },
            { q: 'PKP adalah...', options: ['Pengusaha yang wajib memungut PPN', 'Pegawai kantor pajak', 'Pajak khusus perorangan', 'Jenis rekening'], answer: 0, why: 'Pengusaha Kena Pajak wajib memungut dan menyetor PPN.' }
          ]
        }
      ]
    },
    {
      title: 'Pembukuan dan Kepatuhan',
      lessons: [
        {
          id: 'px-5-biaya',
          label: 'Pembukuan Rapi dan Biaya yang Sah',
          domain: 'Pajak',
          summary: 'Pisahkan keuangan pribadi dan usaha, simpan bukti, dan kenali biaya usaha yang sah untuk mengurangi penghasilan kena pajak.',
          model: 'Biaya Fiskal dan Bukti Pendukung',
          analogy: 'Seperti ujian dengan buku terbuka: jawaban benar pun tidak dihitung jika Anda tidak bisa menunjukkan sumbernya.',
          insight: 'Biaya yang dapat dikurangkan umumnya berkaitan langsung dengan mendapatkan, menagih, dan memelihara penghasilan, dan harus didukung bukti. Pengeluaran pribadi tidak boleh dicampur. Aset berumur panjang disusutkan, bukan dibiayakan sekaligus. Pembukuan yang konsisten juga membuka akses pembiayaan. Perencanaan pajak yang sah memanfaatkan aturan, sedangkan penggelapan menyembunyikan fakta.',
          cross: { text: 'Pembukuan x Akses Modal', domains: ['Pajak', 'Keuangan'], insight: 'Bank menilai kelayakan dari laporan usaha yang rapi, sehingga pembukuan baik juga menurunkan biaya pinjaman.' },
          story: { who: 'Pemilik Bengkel Kecil (ilustrasi)', story: 'Ia mencampur belanja pribadi dan bengkel dalam satu rekening sehingga tidak bisa menunjukkan biaya usaha sebenarnya. Setelah memisahkan rekening dan menyimpan nota, ia mengetahui biaya riil, menetapkan harga lebih tepat, dan lulus pengajuan kredit usaha.', takeaway: 'Pisahkan rekening dan simpan bukti.' },
          actions: ['Buka rekening khusus usaha.', 'Foto dan arsipkan setiap nota usaha.', 'Buat daftar aset beserta tanggal dan harga perolehannya.'],
          level: 'Pemula', time: '6 min',
          scenario: {
            title: 'Dilema Biaya Pribadi Ingin Dimasukkan sebagai Biaya Usaha',
            context: 'Anda tergoda memasukkan belanja keluarga sebagai biaya usaha agar pajak lebih kecil.',
            dilemma: 'Apa yang sebaiknya Anda lakukan?',
            choices: [
              { text: 'Hanya masukkan biaya yang benar-benar terkait usaha dan berbukti, dan gunakan insentif atau skema sah untuk menghemat pajak.', consequence: 'Laporan Anda bersih dan aman diperiksa.', explanation: 'Perencanaan sah lebih aman daripada manipulasi.', best: true },
              { text: 'Masukkan semua agar neto kecil.', consequence: 'Risiko koreksi dan sanksi saat pemeriksaan.', explanation: 'Biaya pribadi tidak boleh dibiayakan.' },
              { text: 'Tidak mencatat apa pun.', consequence: 'Tidak ada dasar perhitungan dan pembelaan.', explanation: 'Pencatatan penting untuk kepatuhan.' }
            ]
          },
          quiz: [
            { q: 'Biaya usaha yang sah harus...', options: ['Terkait usaha dan berbukti', 'Apa saja yang dibayar pemilik', 'Tanpa nota', 'Hanya yang besar'], answer: 0, why: 'Hubungan dengan usaha dan bukti dibutuhkan.' },
            { q: 'Manfaat memisahkan rekening usaha dan pribadi?', options: ['Pencatatan jelas dan akses pembiayaan lebih mudah', 'Pajak otomatis nol', 'Tidak perlu laporan', 'Bank memberi hadiah'], answer: 0, why: 'Rekening terpisah memudahkan pembukuan dan menilai kelayakan.' }
          ]
        },
        {
          id: 'px-6-patuh',
          label: 'Kepatuhan: SPT, Tenggat, dan Kapan Memakai Konsultan',
          domain: 'Pajak',
          summary: 'Lapor tepat waktu, pahami sanksi, bedakan penghindaran sah dengan penggelapan, dan tahu kapan butuh ahli.',
          model: 'Kalender Kepatuhan dan Tax Planning Sah',
          analogy: 'Servis rutin kendaraan: murah bila dilakukan terjadwal, mahal bila menunggu mesin rusak.',
          insight: 'Buat kalender pajak: setoran bulanan sesuai skema dan pelaporan SPT Tahunan (umumnya orang pribadi paling lambat akhir Maret dan badan akhir April; periksa ketentuan terkini). Keterlambatan dapat dikenai sanksi administrasi. Gunakan konsultan pajak saat omzet membesar, ada transaksi kompleks, memilih skema, atau menghadapi pemeriksaan. Prinsip: boleh meminimalkan pajak lewat cara yang diatur undang-undang, tidak boleh menyembunyikan penghasilan atau memalsukan bukti.',
          cross: { text: 'Kepatuhan x Reputasi', domains: ['Pajak', 'Hukum'], insight: 'Rekam jejak patuh memudahkan tender, kemitraan, dan pembiayaan.' },
          story: { who: 'Kontraktor Interior (ilustrasi)', story: 'Setelah terlambat lapor dua tahun berturut-turut dan terkena sanksi, ia membuat kalender pajak dan menyewa konsultan paruh waktu. Biaya konsultan jauh lebih kecil daripada sanksi sebelumnya dan ia berhasil memenangkan proyek yang mensyaratkan kepatuhan pajak.', takeaway: 'Jadwalkan kepatuhan dan gunakan ahli pada titik yang tepat.' },
          actions: ['Masukkan tenggat setoran dan SPT ke kalender dengan pengingat.', 'Tentukan kondisi yang memicu Anda memakai konsultan.', 'Simpan semua bukti setor dan lapor minimal sesuai batas penyimpanan yang berlaku.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Tenggat SPT Sudah Dekat tetapi Data Belum Lengkap',
            context: 'Tenggat pelaporan tinggal beberapa hari dan catatan Anda belum rapi.',
            dilemma: 'Apa langkah terbaik?',
            choices: [
              { text: 'Segera rapikan data, minta bantuan konsultan bila perlu, dan manfaatkan prosedur resmi untuk perpanjangan atau pembetulan sesuai aturan.', consequence: 'Laporan tepat waktu dan akurat tanpa melanggar.', explanation: 'Gunakan jalur resmi, bukan jalan pintas.', best: true },
              { text: 'Mengisi angka perkiraan seadanya.', consequence: 'Berpotensi salah dan perlu pembetulan dengan sanksi.', explanation: 'Laporan harus akurat.' },
              { text: 'Tidak melapor sama sekali.', consequence: 'Sanksi administrasi menumpuk.', explanation: 'Tidak melapor memperburuk posisi.' }
            ]
          },
          quiz: [
            { q: 'Perbedaan perencanaan pajak sah dan penggelapan?', options: ['Sah memakai aturan, penggelapan menyembunyikan fakta', 'Tidak ada bedanya', 'Penggelapan lebih murah dan legal', 'Perencanaan harus ilegal'], answer: 0, why: 'Perencanaan sah berada dalam koridor hukum.' },
            { q: 'Kapan konsultan pajak paling berguna?', options: ['Saat memilih skema, transaksi kompleks, atau pemeriksaan', 'Tidak pernah', 'Hanya saat untung besar', 'Hanya untuk perusahaan besar'], answer: 0, why: 'Ahli bernilai pada keputusan dan risiko tinggi.' }
          ]
        }
      ]
    }
  ]
});
