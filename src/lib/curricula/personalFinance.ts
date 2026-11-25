import { buildPath } from '../curriculumBuilder';

// Catatan: angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data nyata. Bukan nasihat investasi atau pajak personal.
export const PERSONAL_FINANCE_CURRICULUM = buildPath({
  id: 'curriculum-keuangan-pribadi',
  topic: 'Keuangan Pribadi & Perencanaan Kemapanan',
  description:
    'Anggaran dan arus kas pribadi, dana darurat, mengelola utang dan paylater, proteksi, tujuan keuangan, inflasi, dana pensiun, dan menaikkan penghasilan. Fondasi finansial yang membuat keputusan bisnis dan karier lebih tenang.',
  stages: [
    {
      title: 'Fondasi Arus Kas',
      lessons: [
        {
          id: 'kp-1-arus',
          label: 'Anggaran dan Arus Kas Pribadi',
          domain: 'Keuangan',
          summary: 'Kemapanan dimulai dari mengetahui ke mana uang pergi. Bayar diri sendiri lebih dulu, baru belanja.',
          model: 'Pay Yourself First dan Aturan 50/30/20 sebagai patokan awal',
          analogy: 'Rekening yang tidak diatur seperti ember bocor: Anda terus mengisi tetapi tidak tahu di mana lubangnya. Mencatat adalah menambal lubang pertama.',
          insight: 'Patokan awal 50/30/20: sekitar 50% kebutuhan, 30% keinginan, 20% tabungan dan pelunasan utang. Ini titik mulai, bukan aturan mutlak; di kota mahal proporsi kebutuhan bisa lebih besar. Otomatiskan transfer tabungan di hari gajian. Pisahkan rekening kebutuhan, tabungan, dan dana tujuan agar tidak tercampur.',
          cross: { text: 'Anggaran x Psikologi', domains: ['Keuangan', 'Psikologi'], insight: 'Otomatisasi mengurangi kebutuhan kemauan. Keputusan yang dibuat sekali lebih tahan godaan daripada keputusan yang diulang tiap hari.' },
          story: { who: 'Karyawan Baru Bergaji Rp 10 Juta (ilustrasi)', story: 'Dengan patokan 50/30/20, kebutuhan Rp 5 juta, keinginan Rp 3 juta, tabungan Rp 2 juta. Ia mengatur transfer otomatis Rp 2 juta pada tanggal gajian ke rekening terpisah, sehingga tabungan terjadi sebelum ia sempat membelanjakannya.', takeaway: 'Bayar diri sendiri lebih dulu dan otomatiskan.' },
          actions: ['Catat semua pengeluaran selama 30 hari.', 'Atur transfer otomatis ke tabungan di hari gajian.', 'Tandai tiga pengeluaran keinginan yang bisa dikurangi.'],
          level: 'Pemula', time: '5 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Gaji Habis Sebelum Akhir Bulan',
            context: 'Penghasilan Rp 10 juta tetapi hampir selalu habis tanpa tabungan dan Anda tidak tahu ke mana perginya.',
            dilemma: 'Apa langkah pertama?',
            choices: [
              { text: 'Catat pengeluaran 30 hari, kelompokkan, lalu atur transfer tabungan otomatis di hari gajian sebelum belanja.', consequence: 'Anda menemukan langganan dan jajan harian yang bocor dan mulai menabung Rp 1,5 juta per bulan.', explanation: 'Data dan otomatisasi mengubah kebiasaan tanpa mengandalkan niat.', best: true },
              { text: 'Berjanji akan lebih hemat bulan depan.', consequence: 'Tidak ada yang berubah karena tidak ada sistem.', explanation: 'Niat tanpa sistem jarang bertahan.' },
              { text: 'Mencari pinjaman untuk menutup kekurangan.', consequence: 'Cicilan menambah beban bulan berikutnya.', explanation: 'Utang konsumtif memperburuk arus kas.' }
            ]
          },
          quiz: [
            { q: 'Pay yourself first berarti...', options: ['Menyisihkan tabungan sebelum membelanjakan sisanya', 'Berbelanja dulu', 'Membayar utang terakhir', 'Menunda menabung'], answer: 0, why: 'Tabungan dipotong di awal, bukan dari sisa.' },
            { q: 'Dari gaji Rp 10 juta, porsi tabungan 20% sama dengan...', options: ['Rp 2 juta', 'Rp 5 juta', 'Rp 3 juta', 'Rp 1 juta'], answer: 0, why: '20% × 10 juta = 2 juta.' }
          ]
        },
        {
          id: 'kp-2-darurat',
          label: 'Dana Darurat',
          domain: 'Keuangan',
          summary: 'Bantalan kas untuk kejadian tak terduga agar Anda tidak terpaksa berutang atau menjual aset saat rugi.',
          model: 'Emergency Fund dan Liquidity',
          analogy: 'Ban serep di bagasi. Anda berharap tidak memakainya, tetapi ketika ban bocor di jalan tol, ia menyelamatkan perjalanan.',
          insight: 'Patokan umum: 3 sampai 6 kali pengeluaran bulanan untuk pekerja tetap; 6 sampai 12 kali untuk penghasilan tidak tetap seperti freelance dan pemilik usaha. Simpan di instrumen likuid dan aman (tabungan atau deposito mudah cair), terpisah dari rekening harian. Isi bertahap, dan ganti setelah dipakai.',
          cross: { text: 'Dana Darurat x Risiko', domains: ['Keuangan', 'Psikologi'], insight: 'Bantalan kas mengurangi stres dan memperbaiki kualitas keputusan karena Anda tidak membuat keputusan dalam keadaan terdesak.' },
          story: { who: 'Freelancer Kehilangan Dua Klien (ilustrasi)', story: 'Pengeluaran Rp 6 juta per bulan. Dana darurat 9 bulan senilai Rp 54 juta membuatnya bertahan empat bulan mencari klien baru tanpa berutang dan tanpa menerima proyek murah.', takeaway: 'Dana darurat membeli waktu dan daya tawar.' },
          actions: ['Hitung pengeluaran bulanan wajib Anda.', 'Tentukan target dana darurat sesuai kestabilan penghasilan.', 'Buat rekening terpisah dan isi otomatis tiap bulan.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Investasi Dulu atau Dana Darurat Dulu',
            context: 'Anda belum punya dana darurat tetapi ada ajakan investasi dengan janji imbal hasil tinggi.',
            dilemma: 'Apa urutan yang tepat?',
            choices: [
              { text: 'Bangun dana darurat minimal beberapa bulan dahulu, baru investasikan kelebihan sesuai profil risiko.', consequence: 'Saat kehilangan pekerjaan, Anda tidak terpaksa menjual investasi dengan rugi.', explanation: 'Likuiditas aman mendahului pengejaran imbal hasil.', best: true },
              { text: 'Masukkan semua dana ke investasi berimbal tinggi.', consequence: 'Saat butuh uang mendadak, Anda terpaksa menjual rugi atau berutang.', explanation: 'Investasi berisiko tidak cocok untuk kebutuhan darurat.' },
              { text: 'Tidak menyimpan apa pun karena bisa meminjam.', consequence: 'Bunga pinjaman menggerus keuangan Anda.', explanation: 'Utang darurat mahal.' }
            ]
          },
          quiz: [
            { q: 'Pengeluaran bulanan Rp 6 juta, target 6 bulan. Dana darurat?', options: ['Rp 36 juta', 'Rp 12 juta', 'Rp 60 juta', 'Rp 6 juta'], answer: 0, why: '6 × 6 juta = 36 juta.' },
            { q: 'Dana darurat sebaiknya disimpan di...', options: ['Instrumen aman dan mudah dicairkan', 'Saham spekulatif', 'Barang sulit dijual', 'Pinjaman ke teman'], answer: 0, why: 'Prioritasnya ketersediaan, bukan imbal hasil.' }
          ]
        },
        {
          id: 'kp-3-utang',
          label: 'Utang Konsumtif, Paylater, dan Rasio Cicilan',
          domain: 'Keuangan',
          summary: 'Bunga yang tampak kecil per bulan bisa sangat besar per tahun. Kenali biaya sebenarnya dan batas cicilan yang sehat.',
          model: 'Effective Interest Rate dan Debt Service Ratio',
          analogy: 'Utang konsumtif seperti eskalator turun: Anda terus berjalan hanya untuk tetap di tempat. Utang produktif seperti eskalator naik jika dipakai bijak.',
          insight: 'Bunga 3% per bulan secara majemuk setara sekitar 42,6% per tahun (1,03^12 − 1). Perhatikan biaya tersembunyi: denda, biaya admin, dan bunga flat versus efektif. Rasio cicilan terhadap penghasilan (DSR) yang sering dipakai sebagai batas aman adalah sekitar 30 sampai 35 persen. OJK juga membatasi rasio utang peminjam pinjaman daring (pindar) hingga sekitar 30% dari penghasilan secara bertahap mulai 2026; cek ketentuan terkini di OJK. Prioritaskan melunasi utang berbunga tertinggi lebih dulu (avalanche) atau saldo terkecil lebih dulu untuk motivasi (snowball).',
          cross: { text: 'Utang x Perilaku Konsumen', domains: ['Keuangan', 'Psikologi'], insight: 'Pembayaran ditunda mengurangi rasa sakit membayar sehingga orang cenderung membeli lebih banyak.' },
          story: { who: 'Pegawai dengan Tiga Cicilan (ilustrasi)', story: 'Penghasilan Rp 10 juta, cicilan Rp 4 juta (DSR 40%). Ia melunasi paylater berbunga tinggi lebih dulu dengan metode avalanche, menghentikan cicilan baru, dan menurunkan DSR menjadi 25% dalam setahun.', takeaway: 'Lunasi bunga tertinggi dan hentikan cicilan baru.' },
          actions: ['Daftar semua utang dengan bunga efektif dan saldo.', 'Hitung DSR Anda.', 'Pilih satu strategi pelunasan dan mulai bulan ini.'],
          level: 'Menengah', time: '6 min', tool: 'compound',
          scenario: {
            title: 'Dilema Tawaran Cicilan 0% yang Menggoda',
            context: 'Anda tertarik membeli gawai baru dengan paylater, padahal DSR Anda sudah 35%.',
            dilemma: 'Apa keputusan Anda?',
            choices: [
              { text: 'Tunda pembelian, lunasi utang berbunga tertinggi dulu, dan beli tunai setelah DSR turun serta dana darurat terisi.', consequence: 'Anda menghindari beban tambahan dan membeli lebih tenang beberapa bulan kemudian.', explanation: 'Menjaga DSR di batas aman melindungi arus kas.', best: true },
              { text: 'Ambil cicilan karena terlihat ringan.', consequence: 'DSR naik dan satu bulan terlambat membuat denda menumpuk.', explanation: 'Cicilan kecil tetap menambah total kewajiban.' },
              { text: 'Pinjam dari aplikasi lain untuk menutup cicilan.', consequence: 'Anda terjebak gali lubang tutup lubang.', explanation: 'Utang baru untuk menutup utang lama memperparah masalah.' }
            ]
          },
          quiz: [
            { q: 'Bunga 3% per bulan secara majemuk kira-kira setara per tahun...', options: ['42,6%', '36%', '3%', '12%'], answer: 0, why: '1,03^12 ≈ 1,426.' },
            { q: 'Metode avalanche melunasi utang...', options: ['Berbunga tertinggi lebih dulu', 'Saldo terkecil lebih dulu', 'Secara acak', 'Yang paling baru'], answer: 0, why: 'Meminimalkan total bunga yang dibayar.' }
          ]
        }
      ]
    },
    {
      title: 'Melindungi dan Merencanakan',
      lessons: [
        {
          id: 'kp-4-proteksi',
          label: 'Proteksi: Asuransi dan Pengelolaan Risiko',
          domain: 'Keuangan',
          summary: 'Asuransi memindahkan risiko besar yang tidak mampu ditanggung sendiri. Pilih yang perlu, bukan yang ditawarkan paling gencar.',
          model: 'Risk Transfer dan Insurance Needs Analysis',
          analogy: 'Payung dibawa karena hujan deras merusak rencana, bukan karena Anda ingin payung. Asuransi dibeli untuk kejadian yang akan menghancurkan keuangan jika terjadi.',
          insight: 'Prinsip: asuransikan risiko yang kecil kemungkinannya tetapi besar dampaknya (sakit berat, kehilangan penghasilan, kematian pencari nafkah). Jangan asuransikan risiko kecil yang dapat Anda tanggung sendiri. Pisahkan proteksi dan investasi: produk campuran sering lebih mahal dan sulit dinilai. Baca manfaat, pengecualian, masa tunggu, dan batas klaim. Periksa jaminan dari BPJS Kesehatan dan perusahaan sebagai dasar.',
          cross: { text: 'Proteksi x Perilaku', domains: ['Keuangan', 'Psikologi'], insight: 'Orang meremehkan risiko yang belum pernah dialami (optimism bias) dan membeli proteksi setelah kejadian, saat sudah terlambat.' },
          story: { who: 'Pencari Nafkah Tunggal (ilustrasi)', story: 'Ayah dengan dua anak dan cicilan rumah membeli asuransi jiwa berjangka dengan uang pertanggungan sekitar 10 kali penghasilan tahunan, ditambah asuransi kesehatan tambahan. Preminya sebagian kecil dari penghasilan tetapi menutup risiko terbesar keluarga.', takeaway: 'Asuransi berjangka murah untuk risiko terbesar adalah prioritas.' },
          actions: ['Daftar risiko yang akan menghancurkan keuangan Anda.', 'Periksa jaminan yang sudah ada (BPJS dan kantor).', 'Bandingkan dua penawaran dengan membaca pengecualian dan masa tunggu.'],
          level: 'Menengah', time: '6 min',
          scenario: {
            title: 'Dilema Agen Menawarkan Produk Campuran Mahal',
            context: 'Agen menawarkan produk asuransi dengan investasi, premi besar, dan penjelasan yang rumit.',
            dilemma: 'Bagaimana menyikapi?',
            choices: [
              { text: 'Minta rincian biaya, manfaat, pengecualian, dan bandingkan dengan asuransi berjangka ditambah investasi terpisah sebelum memutuskan.', consequence: 'Anda menemukan biaya produk campuran tinggi dan memilih opsi terpisah yang lebih jelas.', explanation: 'Memisahkan proteksi dan investasi memudahkan penilaian.', best: true },
              { text: 'Setuju agar agen senang.', consequence: 'Premi membebani arus kas dan manfaat tidak sesuai kebutuhan.', explanation: 'Keputusan tanpa pemahaman merugikan.' },
              { text: 'Menolak semua asuransi.', consequence: 'Sakit berat menguras seluruh tabungan.', explanation: 'Risiko besar tetap perlu dialihkan.' }
            ]
          },
          quiz: [
            { q: 'Risiko yang paling layak diasuransikan?', options: ['Kemungkinan kecil tetapi dampak sangat besar', 'Kemungkinan besar dan dampak kecil', 'Semua risiko kecil', 'Risiko yang tidak mungkin terjadi'], answer: 0, why: 'Asuransi berguna untuk kerugian yang tidak mampu ditanggung sendiri.' },
            { q: 'Mengapa memisahkan proteksi dan investasi membantu?', options: ['Biaya dan manfaat lebih mudah dinilai', 'Selalu lebih murah tanpa pengecualian', 'Menghapus pajak', 'Menjamin imbal hasil'], answer: 0, why: 'Produk tunggal lebih transparan.' }
          ]
        },
        {
          id: 'kp-5-tujuan',
          label: 'Tujuan Keuangan dan Jangka Waktu',
          domain: 'Keuangan',
          summary: 'Setiap tujuan punya jangka waktu, dan jangka waktu menentukan instrumen yang cocok.',
          model: 'Goal-Based Planning dan Time Horizon',
          analogy: 'Anda tidak memakai perahu kecil untuk menyeberangi samudra, dan tidak memakai kapal tanker untuk menyeberangi sungai. Alat harus sesuai jarak.',
          insight: 'Tujuan jangka pendek (di bawah 2 tahun) membutuhkan instrumen stabil dan likuid. Jangka menengah (2 sampai 5 tahun) memadukan stabilitas dan pertumbuhan moderat. Jangka panjang (di atas 5 sampai 10 tahun) mampu menanggung fluktuasi instrumen bertumbuh. Hitung jumlah yang dibutuhkan, tentukan tenggat, dan cicil bulanan. Tinjau tiap tahun.',
          cross: { text: 'Tujuan x Motivasi', domains: ['Keuangan', 'Psikologi'], insight: 'Tujuan konkret dengan angka dan tenggat lebih memotivasi daripada niat menabung secara umum.' },
          story: { who: 'Pasangan Muda Merencanakan Uang Muka (ilustrasi)', story: 'Target uang muka Rp 120 juta dalam 4 tahun berarti sekitar Rp 2,5 juta per bulan tanpa memperhitungkan imbal hasil. Mereka menempatkan dana di instrumen stabil karena tenggatnya dekat, bukan di instrumen yang naik turun tajam.', takeaway: 'Jangka waktu menentukan pilihan instrumen.' },
          actions: ['Tulis tiga tujuan keuangan dengan nominal dan tenggat.', 'Hitung setoran bulanan untuk tiap tujuan.', 'Cocokkan instrumen dengan jangka waktu.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Uang Kuliah Tiga Tahun Lagi di Instrumen Fluktuatif',
            context: 'Dana untuk biaya kuliah anak Anda butuhkan dalam tiga tahun, tetapi Anda tergoda menaruhnya di instrumen berisiko tinggi demi imbal tinggi.',
            dilemma: 'Bagaimana menempatkannya?',
            choices: [
              { text: 'Pilih instrumen yang lebih stabil karena jangka waktunya pendek dan nilainya tidak boleh turun tajam saat dibutuhkan.', consequence: 'Dana tersedia sesuai rencana ketika dibutuhkan.', explanation: 'Jangka pendek memerlukan stabilitas.', best: true },
              { text: 'Taruh seluruhnya di instrumen berisiko demi imbal tinggi.', consequence: 'Pasar turun menjelang tenggat dan dana kurang.', explanation: 'Fluktuasi jangka pendek bisa memukul tujuan yang tenggatnya dekat.' },
              { text: 'Tunda menabung sampai mendekati tenggat.', consequence: 'Setoran bulanan menjadi sangat besar.', explanation: 'Menabung lebih awal meringankan beban.' }
            ]
          },
          quiz: [
            { q: 'Target Rp 120 juta dalam 48 bulan tanpa imbal hasil. Setoran per bulan?', options: ['Rp 2,5 juta', 'Rp 1 juta', 'Rp 5 juta', 'Rp 12 juta'], answer: 0, why: '120 juta / 48 = 2,5 juta.' },
            { q: 'Tujuan di bawah dua tahun sebaiknya ditempatkan di...', options: ['Instrumen stabil dan likuid', 'Instrumen paling berisiko', 'Properti', 'Koleksi barang'], answer: 0, why: 'Waktu pendek tidak cukup untuk memulihkan penurunan tajam.' }
          ]
        },
        {
          id: 'kp-6-inflasi',
          label: 'Inflasi dan Imbal Hasil Riil',
          domain: 'Ekonomi',
          summary: 'Uang yang diam kehilangan daya beli. Yang penting adalah imbal hasil setelah dikurangi inflasi.',
          model: 'Real Return dan Purchasing Power',
          analogy: 'Berlari di treadmill: jika bergerak 4 km/jam sementara lantainya mundur 4 km/jam, Anda tetap di tempat walau kaki bergerak.',
          insight: 'Imbal hasil riil ≈ (1 + nominal) / (1 + inflasi) − 1. Imbal 6% dengan inflasi 4% menghasilkan sekitar 1,9% riil. Tabungan dengan bunga di bawah inflasi menggerus daya beli. Pajak dan biaya juga mengurangi imbal hasil bersih. Bandingkan instrumen berdasarkan imbal hasil riil, risiko, dan likuiditas.',
          cross: { text: 'Inflasi x Makroekonomi', domains: ['Ekonomi', 'Keuangan'], insight: 'Kebijakan suku bunga bank sentral berupaya menjaga inflasi, tetapi inflasi pribadi Anda bergantung pada keranjang belanja Anda.' },
          story: { who: 'Penabung Setia (ilustrasi)', story: 'Dana Rp 100 juta di tabungan berbunga 2% dengan inflasi 4%: setelah setahun nilainya Rp 102 juta, tetapi barang yang sama kini butuh Rp 104 juta. Daya belinya turun sekitar 1,9%.', takeaway: 'Nilai nominal naik bukan berarti kaya riil naik.' },
          actions: ['Bandingkan bunga tabungan Anda dengan inflasi terbaru.', 'Hitung imbal hasil riil dengan rumus di atas.', 'Pakai kalkulator Bunga Majemuk untuk melihat nilai riil jangka panjang.'],
          level: 'Menengah', time: '5 min', tool: 'compound',
          scenario: {
            title: 'Dilema Dana Menganggur di Tabungan Berbunga Rendah',
            context: 'Dana tujuan lima tahun Anda tersimpan di tabungan berbunga 2% sementara inflasi sekitar 4%.',
            dilemma: 'Apa langkah Anda?',
            choices: [
              { text: 'Pertimbangkan instrumen dengan imbal hasil riil positif sesuai profil risiko dan jangka waktu, sambil tetap menjaga dana darurat di tempat aman.', consequence: 'Daya beli dana lima tahun terjaga lebih baik tanpa mengorbankan likuiditas darurat.', explanation: 'Jangka panjang butuh imbal hasil di atas inflasi.', best: true },
              { text: 'Biarkan saja karena nominalnya aman.', consequence: 'Daya beli turun diam-diam.', explanation: 'Nominal aman tidak menjamin daya beli aman.' },
              { text: 'Pindahkan semua ke instrumen spekulatif.', consequence: 'Risiko melonjak dan tujuan terancam.', explanation: 'Mengejar imbal tinggi tanpa memperhitungkan risiko berbahaya.' }
            ]
          },
          quiz: [
            { q: 'Imbal nominal 6% dan inflasi 4%. Imbal riil kira-kira...', options: ['1,9%', '10%', '6%', '2,4%'], answer: 0, why: '(1,06 / 1,04) − 1 ≈ 1,9%.' },
            { q: 'Tabungan berbunga di bawah inflasi menyebabkan...', options: ['Daya beli menurun', 'Daya beli naik', 'Nilai nominal turun', 'Tidak ada efek'], answer: 0, why: 'Harga naik lebih cepat dari bunga.' }
          ]
        }
      ]
    },
    {
      title: 'Membangun Kemapanan',
      lessons: [
        {
          id: 'kp-7-pensiun',
          label: 'Dana Pensiun dan Kekuatan Waktu',
          domain: 'Keuangan',
          summary: 'Mulai lebih awal jauh lebih ampuh daripada menyetor lebih besar belakangan, karena bunga berbunga.',
          model: 'Compound Growth dan Retirement Planning',
          analogy: 'Bola salju yang digulirkan dari puncak panjang menjadi besar bukan karena didorong kuat, tetapi karena jalurnya panjang.',
          insight: 'Setoran Rp 1 juta per bulan dengan imbal hasil 8% per tahun selama 20 tahun bernilai sekitar Rp 589 juta dari setoran total Rp 240 juta. Jika baru mulai 10 tahun kemudian (10 tahun saja), nilainya sekitar Rp 183 juta. Selain program wajib seperti BPJS Ketenagakerjaan, pertimbangkan dana pensiun tambahan (misalnya DPLK) atau investasi jangka panjang. Angka di atas ilustrasi dengan asumsi imbal hasil tetap; kenyataan berfluktuasi.',
          cross: { text: 'Pensiun x Psikologi Waktu', domains: ['Keuangan', 'Psikologi'], insight: 'Bias present: manfaat jauh di masa depan terasa kurang nyata sehingga orang menunda. Otomatisasi mengatasi bias ini.' },
          story: { who: 'Dua Rekan Kerja (ilustrasi)', story: 'Rina mulai menyetor Rp 1 juta per bulan di usia 25 dan Dewi di usia 35, dengan asumsi imbal hasil sama 8% per tahun hingga usia 45. Rina mengumpulkan sekitar Rp 589 juta, Dewi sekitar Rp 183 juta. Selisih besar berasal dari 10 tahun tambahan.', takeaway: 'Waktu adalah aset terbesar investor muda.' },
          actions: ['Hitung berapa setoran bulanan yang Anda perlukan untuk target pensiun dengan kalkulator Bunga Majemuk.', 'Otomatiskan setoran pensiun setiap bulan.', 'Periksa kepesertaan BPJS Ketenagakerjaan Anda.'],
          level: 'Menengah', time: '6 min', tool: 'compound',
          scenario: {
            title: 'Dilema Menunda Menabung Pensiun Karena Masih Muda',
            context: 'Rekan Anda berkata pensiun masih jauh sehingga lebih baik menikmati uang sekarang.',
            dilemma: 'Apa pendapat Anda?',
            choices: [
              { text: 'Mulai dengan jumlah kecil yang otomatis sekarang, naikkan seiring penghasilan, karena waktu memberi bunga berbunga yang besar.', consequence: 'Anda membangun kebiasaan dan menikmati pertumbuhan jangka panjang tanpa mengorbankan gaya hidup.', explanation: 'Mulai awal dengan jumlah kecil lebih ampuh daripada menunda.', best: true },
              { text: 'Tunda sampai penghasilan besar.', consequence: 'Anda kehilangan tahun-tahun berharga untuk bertumbuh.', explanation: 'Penundaan mengurangi efek majemuk.' },
              { text: 'Mengandalkan hanya satu sumber pensiun tanpa menghitung.', consequence: 'Dana tidak cukup untuk kebutuhan pensiun.', explanation: 'Perhitungan diperlukan.' }
            ]
          },
          quiz: [
            { q: 'Mengapa mulai lebih awal sangat berpengaruh?', options: ['Bunga berbunga bekerja lebih lama', 'Imbal hasil otomatis lebih tinggi', 'Pajak hilang', 'Inflasi berhenti'], answer: 0, why: 'Efek majemuk bertambah seiring waktu.' },
            { q: 'Angka proyeksi pensiun dengan imbal tetap sebaiknya dipahami sebagai...', options: ['Ilustrasi karena kenyataan berfluktuasi', 'Jaminan', 'Janji pemerintah', 'Selalu terlalu rendah'], answer: 0, why: 'Imbal hasil riil tidak tetap.' }
          ]
        },
        {
          id: 'kp-8-penghasilan',
          label: 'Menaikkan Penghasilan dan Pajak Pribadi Dasar',
          domain: 'Pajak',
          summary: 'Ada batas seberapa jauh pengeluaran bisa ditekan, tetapi hampir tak ada batas atas penghasilan. Naikkan keterampilan dan patuhi kewajiban pajak.',
          model: 'Income Growth Levers dan Tax Basics',
          analogy: 'Menghemat adalah menutup keran bocor; menaikkan penghasilan adalah menambah debit air. Keduanya perlu, tetapi hanya yang kedua tak terbatas.',
          insight: 'Tuas penghasilan: keterampilan bernilai tinggi, negosiasi gaji, penghasilan sampingan dari keahlian, dan investasi. Kewajiban pajak dasar: memiliki NPWP bila memenuhi syarat dan melaporkan SPT tahunan. Ketentuan tarif dan batas berubah; periksa di situs Direktorat Jenderal Pajak atau tanyakan konsultan pajak. Catat semua penghasilan dan simpan bukti potong.',
          cross: { text: 'Penghasilan x Karier', domains: ['Pajak', 'Bisnis'], insight: 'Keterampilan yang langka dan relevan menaikkan daya tawar dan penghasilan jangka panjang lebih dari penghematan kecil.' },
          story: { who: 'Staf Administrasi Menambah Keahlian (ilustrasi)', story: 'Ia belajar analisis data dan membuat laporan dashboard untuk dua usaha kecil di luar jam kantor, menambah penghasilan Rp 3 juta per bulan. Ia mencatat penghasilan itu dan melaporkannya sesuai ketentuan pada SPT tahunan.', takeaway: 'Naikkan penghasilan dengan keterampilan dan tetap patuh.' },
          actions: ['Tulis tiga keterampilan yang paling meningkatkan nilai Anda dan rencana belajarnya.', 'Pastikan SPT tahunan dan NPWP Anda beres.', 'Catat semua sumber penghasilan dan bukti potong.'],
          level: 'Pemula', time: '5 min',
          scenario: {
            title: 'Dilema Penghasilan Tambahan Tidak Dilaporkan',
            context: 'Anda mendapat penghasilan sampingan dan ragu apakah perlu mencatat atau melaporkannya.',
            dilemma: 'Apa langkah terbaik?',
            choices: [
              { text: 'Catat semua penghasilan, periksa aturan terbaru, dan tanyakan konsultan pajak tentang pelaporan dan skema yang sesuai.', consequence: 'Anda patuh dan aman saat mengajukan pinjaman atau visa.', explanation: 'Kepatuhan dan pencatatan melindungi Anda dan membangun rekam jejak.', best: true },
              { text: 'Abaikan karena nilainya kecil.', consequence: 'Muncul masalah saat pengajuan pinjaman atau pemeriksaan.', explanation: 'Penghasilan yang tidak tercatat menimbulkan risiko.' },
              { text: 'Menyembunyikan seluruh transaksi.', consequence: 'Risiko sanksi meningkat.', explanation: 'Menyembunyikan penghasilan berbahaya secara hukum.' }
            ]
          },
          quiz: [
            { q: 'Mengapa menaikkan penghasilan sering lebih berdampak daripada hanya berhemat?', options: ['Penghematan ada batasnya, penghasilan tidak', 'Penghasilan selalu bebas pajak', 'Berhemat dilarang', 'Pengeluaran tidak penting'], answer: 0, why: 'Batas bawah pengeluaran ada, batas atas penghasilan hampir tidak.' },
            { q: 'Sebelum memilih skema pajak untuk penghasilan sampingan, lakukan...', options: ['Periksa aturan terbaru dan konsultasi', 'Menebak', 'Menunggu sanksi', 'Mengabaikan'], answer: 0, why: 'Aturan berubah dan perlu diverifikasi.' }
          ]
        }
      ]
    }
  ]
});
