import { buildPath } from '../curriculumBuilder';

// Catatan: seluruh angka pada studi kasus bertanda "ilustrasi" adalah contoh hitung, bukan data perusahaan nyata.
export const UNIT_ECONOMICS_CURRICULUM = buildPath({
  id: 'curriculum-unit-economics-harga',
  topic: 'Unit Economics, Harga & Arus Kas',
  description:
    'Tentukan harga yang menguntungkan, hitung titik impas, pahami CAC dan LTV, dan jaga arus kas tetap sehat. Setiap pelajaran terhubung ke kalkulator di tab Alat.',
  stages: [
    {
      title: 'Harga & Margin',
      lessons: [
        {
          id: 'ue-1-biaya',
          label: 'Biaya Tetap vs Biaya Variabel',
          domain: 'Bisnis',
          summary: 'Memisahkan biaya yang tetap sama berapa pun penjualan dari biaya yang naik seiring volume. Ini dasar semua keputusan harga dan target penjualan.',
          model: 'Cost Behavior (Fixed vs Variable Costs)',
          analogy: 'Sewa kios adalah tiket masuk bioskop: dibayar sama walau Anda nonton satu film atau lima. Bahan baku adalah popcorn: makin banyak yang Anda makan, makin banyak yang dibayar. Memahami mana tiket dan mana popcorn menentukan berapa penonton yang Anda perlukan agar bioskop tidak rugi.',
          insight: 'Biaya tetap per unit turun saat volume naik (operating leverage), sedangkan biaya variabel per unit relatif konstan. Struktur biaya yang didominasi biaya tetap membuat laba sangat sensitif terhadap volume: naik cepat saat ramai, tenggelam saat sepi. Mengetahui komposisi ini membantu menilai risiko.',
          cross: { text: 'Biaya x Ekonomi Skala', domains: ['Bisnis', 'Ekonomi'], insight: 'Skala ekonomi muncul karena biaya tetap dibagi ke unit yang lebih banyak. Itu sebabnya produsen besar bisa menjual lebih murah tanpa rugi.' },
          story: { who: 'Warung Makan Bu Tini (ilustrasi)', story: 'Sewa dan gaji Rp 15 juta per bulan (tetap). Bahan per porsi Rp 12.000 (variabel), harga jual Rp 25.000. Saat menjual 1.000 porsi, biaya tetap per porsi Rp 15.000. Saat 2.000 porsi, hanya Rp 7.500. Laba per porsi melonjak tanpa mengubah harga.', takeaway: 'Menambah volume pada struktur biaya tetap yang sama adalah cara paling cepat menaikkan laba per unit.' },
          actions: ['Daftar semua biaya bulanan Anda lalu beri label tetap atau variabel.', 'Hitung total biaya tetap bulanan dan biaya variabel per unit.', 'Tentukan satu biaya tetap yang bisa diubah jadi variabel (misal sewa bagi hasil, tenaga lepas).'],
          level: 'Pemula', time: '4 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Menyewa Tempat Lebih Besar',
            context: 'Warung Anda ramai. Pemilik gedung menawarkan tempat dua kali lebih luas, sewa naik dari Rp 6 juta menjadi Rp 14 juta per bulan.',
            dilemma: 'Pindah atau bertahan?',
            choices: [
              { text: 'Hitung dulu titik impas baru dan pastikan permintaan nyata (antrean, pesanan ditolak) mendukung volume tambahan.', consequence: 'Anda hanya pindah jika proyeksi volume melampaui titik impas baru dengan ruang aman.', explanation: 'Biaya tetap yang naik menaikkan titik impas. Keputusan harus berbasis angka.', best: true },
              { text: 'Pindah karena yakin pelanggan akan datang sendiri.', consequence: 'Volume tidak naik secepat sewa, laba bulanan negatif beberapa bulan.', explanation: 'Optimisme tanpa hitungan menaikkan risiko operating leverage.' },
              { text: 'Bertahan dan tidak pernah memikirkan kapasitas.', consequence: 'Pelanggan antre dan sebagian pergi ke pesaing.', explanation: 'Menolak pertumbuhan tanpa analisis juga mahal.' }
            ]
          },
          quiz: [
            { q: 'Mana yang termasuk biaya variabel warung makan?', options: ['Sewa tempat', 'Gaji tetap kasir', 'Bahan baku per porsi', 'Asuransi gedung'], answer: 2, why: 'Bahan baku naik turun mengikuti jumlah porsi.' },
            { q: 'Biaya tetap Rp 15 juta, penjualan 2.000 porsi. Berapa biaya tetap per porsi?', options: ['Rp 15.000', 'Rp 7.500', 'Rp 30.000', 'Rp 2.000'], answer: 1, why: '15.000.000 dibagi 2.000 = Rp 7.500.' }
          ]
        },
        {
          id: 'ue-2-breakeven',
          label: 'Titik Impas (Break-Even)',
          domain: 'Bisnis',
          summary: 'Berapa unit yang harus terjual agar tidak rugi, dan seberapa jauh penjualan Anda dari batas aman.',
          model: 'Break-Even Analysis & Margin of Safety',
          analogy: 'Titik impas seperti ambang pintu air: sampai level tertentu air hanya mengisi kolam sampai penuh, baru setelah itu mengalir jadi laba. Sebelum ambang, setiap penjualan hanya menutup biaya tetap.',
          insight: 'Break-even unit = Biaya Tetap / (Harga - Biaya Variabel per Unit). Selisih harga dan biaya variabel disebut margin kontribusi. Margin of safety = (Penjualan Aktual - Impas) / Penjualan Aktual menunjukkan seberapa besar penjualan boleh turun sebelum rugi.',
          cross: { text: 'Break-Even x Psikologi Target', domains: ['Bisnis', 'Psikologi'], insight: 'Target impas yang jelas mengubah "kerja keras tanpa arah" menjadi tujuan terukur bagi tim. Angka yang konkret memotivasi.' },
          story: { who: 'Usaha Roti Rumahan (ilustrasi)', story: 'Biaya tetap Rp 6 juta/bulan. Harga roti Rp 15.000, biaya variabel Rp 9.000, margin kontribusi Rp 6.000. Impas = 6.000.000 / 6.000 = 1.000 roti. Jika penjualan 1.500 roti, margin of safety = 33%.', takeaway: 'Setiap roti di atas 1.000 menyumbang Rp 6.000 laba bersih. Fokus harian: lewati ambang itu.' },
          actions: ['Hitung margin kontribusi produk utama Anda.', 'Hitung titik impas bulanan dalam unit dan rupiah.', 'Tuliskan margin of safety Anda dan tetapkan alarm jika penjualan mendekati batas.'],
          level: 'Pemula', time: '5 min', tool: 'breakeven',
          scenario: {
            title: 'Dilema Target Penjualan yang Mustahil',
            context: 'Impas Anda 1.000 unit, tetapi rata-rata penjualan hanya 700 unit.',
            dilemma: 'Apa langkah terbaik menutup gap?',
            choices: [
              { text: 'Uji tiga tuas sekaligus: naikkan harga sedikit, turunkan biaya variabel, dan kurangi biaya tetap, lalu hitung ulang impas.', consequence: 'Impas turun ke 800 dan lebih dekat dengan penjualan nyata.', explanation: 'Ada empat tuas laba: harga, volume, biaya variabel, biaya tetap. Mengandalkan satu tuas saja rapuh.', best: true },
              { text: 'Hanya menunggu volume naik sendiri.', consequence: 'Rugi berlanjut tiap bulan tanpa perubahan.', explanation: 'Harapan bukan strategi.' },
              { text: 'Turunkan harga 20% untuk mengejar volume.', consequence: 'Margin kontribusi anjlok, impas membengkak ke angka lebih sulit.', explanation: 'Diskon besar menaikkan impas secara tajam.' }
            ]
          },
          quiz: [
            { q: 'Biaya tetap Rp 6 juta, harga Rp 15.000, biaya variabel Rp 9.000. Berapa titik impas (unit)?', options: ['400', '667', '1.000', '1.500'], answer: 2, why: 'Margin kontribusi 6.000. Impas = 6.000.000 / 6.000 = 1.000 unit.' },
            { q: 'Penjualan aktual 1.500 unit, impas 1.000. Berapa margin of safety?', options: ['50%', '33%', '67%', '10%'], answer: 1, why: '(1.500 - 1.000) / 1.500 = 33%.' }
          ]
        },
        {
          id: 'ue-3-harga',
          label: 'Strategi Penetapan Harga',
          domain: 'Bisnis',
          summary: 'Tiga cara menetapkan harga (biaya, pesaing, nilai) dan kapan masing-masing layak dipakai.',
          model: 'Cost-Plus, Competitive, and Value-Based Pricing',
          analogy: 'Menetapkan harga seperti menyetel gitar: terlalu rendah suaranya sumbang (laba tipis), terlalu tinggi senarnya putus (pelanggan pergi). Anda mencari nada yang pas bagi pelanggan yang tepat.',
          insight: 'Cost-plus menjamin margin tetapi mengabaikan persepsi nilai. Harga berbasis pesaing aman tapi memicu perang harga. Harga berbasis nilai menangkap manfaat yang dirasakan pelanggan dan umumnya menghasilkan margin tertinggi, namun butuh pemahaman pelanggan. Elastisitas harga: produk dengan substitusi banyak sangat sensitif terhadap perubahan harga.',
          cross: { text: 'Harga x Psikologi Konsumen', domains: ['Bisnis', 'Psikologi'], insight: 'Efek penjangkaran (anchoring) membuat paket "mahal" di sebelah paket utama terlihat lebih wajar. Susunan penawaran memengaruhi pilihan.' },
          story: { who: 'Jasa Desain Kemasan (ilustrasi)', story: 'Seorang desainer menghitung biaya waktu Rp 500.000 per proyek dan memasang harga cost-plus Rp 750.000. Setelah melihat kemasan baru menaikkan penjualan klien 20%, ia menawarkan paket berbasis hasil Rp 2.500.000 dan klien setuju.', takeaway: 'Harga yang berbasis nilai dapat berkali lipat dari harga berbasis biaya, jika Anda bisa menunjukkan hasilnya.' },
          actions: ['Hitung harga cost-plus produk Anda dengan margin target.', 'Catat harga tiga pesaing terdekat dan posisikan harga Anda terhadap mereka dengan alasan jelas.', 'Tanyakan ke lima pelanggan: manfaat apa yang paling mereka rasakan, lalu uji harga baru pada satu paket.'],
          level: 'Menengah', time: '5 min', tool: 'pricing',
          scenario: {
            title: 'Dilema Pesaing Banting Harga',
            context: 'Pesaing menurunkan harga 15%. Penjualan Anda turun 10% dalam dua minggu.',
            dilemma: 'Bagaimana merespons?',
            choices: [
              { text: 'Pertahankan harga, perkuat nilai (layanan, garansi, bundel), dan tawarkan varian ekonomis terpisah untuk segmen sensitif harga.', consequence: 'Pelanggan setia bertahan, margin terjaga, segmen sensitif harga tetap terlayani.', explanation: 'Menanggapi perang harga dengan diferensiasi lebih berkelanjutan daripada ikut memangkas margin.', best: true },
              { text: 'Ikut turun 15% secara seragam.', consequence: 'Margin merosot dan pesaing menurunkan lagi.', explanation: 'Perang harga menguntungkan pihak dengan biaya terendah, belum tentu Anda.' },
              { text: 'Naikkan harga untuk menandakan premium tanpa perubahan apa pun.', consequence: 'Penjualan turun lebih tajam tanpa alasan nilai.', explanation: 'Harga premium harus ditopang nilai nyata.' }
            ]
          },
          quiz: [
            { q: 'Pendekatan harga mana yang menangkap manfaat yang dirasakan pelanggan?', options: ['Cost-plus', 'Harga mengikuti pesaing', 'Value-based pricing', 'Harga acak'], answer: 2, why: 'Value-based pricing menetapkan harga berdasar nilai bagi pelanggan.' },
            { q: 'Risiko utama menetapkan harga hanya dengan cost-plus?', options: ['Margin selalu negatif', 'Mengabaikan persepsi nilai pelanggan', 'Tidak bisa dihitung', 'Melanggar hukum'], answer: 1, why: 'Cost-plus tidak memperhitungkan seberapa besar nilai yang dirasakan pelanggan.' }
          ]
        }
      ]
    },
    {
      title: 'Ekonomi per Pelanggan',
      lessons: [
        {
          id: 'ue-4-cac-ltv',
          label: 'CAC, LTV, dan Rasio Sehat',
          domain: 'Bisnis',
          summary: 'Berapa biaya mendapatkan satu pelanggan dan berapa nilai yang ia bawa seumur hidup. Rasio keduanya menentukan apakah pertumbuhan menguntungkan.',
          model: 'Customer Acquisition Cost & Customer Lifetime Value',
          analogy: 'Pelanggan seperti sapi perah yang Anda beli: Anda bayar sekali di muka (CAC), lalu ia menghasilkan susu bulan demi bulan (LTV). Jika harganya Rp 10 juta dan susunya hanya menghasilkan Rp 8 juta seumur hidup, makin banyak beli makin bangkrut.',
          insight: 'CAC = Total biaya akuisisi / Jumlah pelanggan baru. LTV = Margin per periode x Lama berlangganan (atau ARPU x margin kotor / churn). Aturan praktis banyak praktisi: LTV:CAC sekitar 3:1 dan payback CAC di bawah 12 bulan. Angka ini heuristik, bukan hukum, dan berbeda antar industri.',
          cross: { text: 'Unit Economics x Strategi Pertumbuhan', domains: ['Bisnis', 'Keuangan'], insight: 'Startup yang membakar uang demi pertumbuhan sebenarnya berspekulasi bahwa LTV akan melampaui CAC. Jika asumsi itu keliru, pertumbuhan mempercepat kebangkrutan.' },
          story: { who: 'Langganan Kotak Camilan (ilustrasi)', story: 'Biaya iklan Rp 5 juta mendatangkan 50 pelanggan sehingga CAC Rp 100.000. Margin kotor per bulan Rp 40.000 dengan rata-rata bertahan 5 bulan, LTV Rp 200.000. Rasio 2:1, payback 2,5 bulan. Cukup sehat tapi belum ideal, fokus beralih ke retensi.', takeaway: 'Menaikkan retensi satu bulan sering lebih murah daripada menekan CAC dan langsung menaikkan LTV.' },
          actions: ['Hitung CAC bulan lalu dari seluruh biaya pemasaran dan penjualan dibagi pelanggan baru.', 'Hitung LTV dengan margin per bulan dikali rata-rata lama berlangganan.', 'Hitung rasio LTV:CAC dan payback, lalu tentukan satu tuas perbaikan.'],
          level: 'Menengah', time: '5 min', tool: 'unit',
          scenario: {
            title: 'Dilema Menggandakan Anggaran Iklan',
            context: 'Iklan efektif: CAC Rp 100.000 dan LTV Rp 180.000. Anda punya kas lebih dan ingin menggandakan anggaran iklan.',
            dilemma: 'Apa yang paling bijak?',
            choices: [
              { text: 'Naikkan bertahap sambil memantau CAC, dan paralel perbaiki retensi agar LTV naik sebelum skala besar.', consequence: 'Anda skala dengan data. Jika CAC naik, Anda berhenti sebelum rugi.', explanation: 'CAC cenderung naik saat skala. Retensi memperlebar margin keamanan.', best: true },
              { text: 'Gandakan langsung semua anggaran.', consequence: 'CAC melonjak ke Rp 160.000 dan margin hampir habis.', explanation: 'Pelanggan termudah sudah terjaring, sisanya lebih mahal.' },
              { text: 'Hentikan iklan karena rasio belum 3:1.', consequence: 'Pertumbuhan berhenti padahal masih untung.', explanation: 'Rasio 1,8:1 masih positif. Perlu diperbaiki, bukan dihentikan.' }
            ]
          },
          quiz: [
            { q: 'Biaya iklan Rp 5 juta mendapat 50 pelanggan baru. Berapa CAC?', options: ['Rp 50.000', 'Rp 100.000', 'Rp 250.000', 'Rp 5.000'], answer: 1, why: '5.000.000 / 50 = Rp 100.000.' },
            { q: 'Margin Rp 40.000/bulan, rata-rata 5 bulan berlangganan. Berapa LTV?', options: ['Rp 40.000', 'Rp 100.000', 'Rp 200.000', 'Rp 500.000'], answer: 2, why: '40.000 x 5 = Rp 200.000.' }
          ]
        },
        {
          id: 'ue-5-retensi',
          label: 'Retensi dan Churn',
          domain: 'Bisnis',
          summary: 'Mempertahankan pelanggan yang ada hampir selalu lebih murah daripada mencari yang baru, dan efeknya majemuk.',
          model: 'Retention Curve & Compounding Churn',
          analogy: 'Churn seperti ember bocor. Anda bisa terus mengisi air (akuisisi), tetapi jika lubangnya besar, ember tak pernah penuh. Menambal lubang sering lebih efektif daripada membeli keran lebih besar.',
          insight: 'Churn bulanan 5% berarti rata-rata pelanggan bertahan 1/0,05 = 20 bulan. Churn 10% berarti hanya 10 bulan. Selisih kecil pada churn memiliki dampak besar pada LTV. Analisis kohort (membandingkan kelompok pelanggan per bulan masuk) mengungkap apakah retensi membaik.',
          cross: { text: 'Retensi x Perilaku Konsumen', domains: ['Bisnis', 'Psikologi'], insight: 'Biaya perpindahan (switching cost) dan kebiasaan membentuk loyalitas lebih kuat daripada diskon. Pengalaman 30 hari pertama biasanya menentukan.' },
          story: { who: 'Aplikasi Kebugaran Lokal (ilustrasi)', story: 'Churn 12% per bulan. Setelah menambah panduan hari pertama dan pengingat mingguan, churn turun jadi 8%. Umur rata-rata naik dari 8,3 menjadi 12,5 bulan, LTV naik sekitar 50% tanpa menambah biaya iklan.', takeaway: 'Perbaikan onboarding dapat menjadi investasi dengan imbal hasil tertinggi.' },
          actions: ['Hitung churn bulanan: pelanggan yang pergi / pelanggan awal bulan.', 'Wawancarai tiga pelanggan yang pergi: alasan utamanya?', 'Rancang satu intervensi 30 hari pertama yang menaikkan keberhasilan awal pelanggan.'],
          level: 'Menengah', time: '5 min', tool: 'unit',
          scenario: {
            title: 'Dilema Diskon Penahan Pelanggan',
            context: 'Pelanggan lama banyak yang mau berhenti. Tim mengusulkan diskon 30% bagi yang membatalkan.',
            dilemma: 'Apakah diskon itu jawabannya?',
            choices: [
              { text: 'Gali alasan berhenti dulu, tawarkan solusi yang sesuai (jeda langganan, paket lebih kecil), diskon hanya sebagai opsi terakhir.', consequence: 'Sebagian besar mengaku jarang memakai, jeda langganan menyelamatkan banyak akun tanpa menurunkan harga.', explanation: 'Retensi yang berhasil menyelesaikan masalah, bukan hanya menyuap pelanggan.', best: true },
              { text: 'Berikan diskon 30% ke semua yang membatalkan.', consequence: 'Pelanggan belajar bahwa membatalkan = dapat diskon dan margin menurun.', explanation: 'Diskon otomatis melatih perilaku tak diinginkan.' },
              { text: 'Persulit proses berhenti.', consequence: 'Churn tampak turun, ulasan negatif naik, kepercayaan hilang.', explanation: 'Retensi paksa merusak merek.' }
            ]
          },
          quiz: [
            { q: 'Churn bulanan 5%. Berapa rata-rata umur pelanggan?', options: ['5 bulan', '10 bulan', '20 bulan', '50 bulan'], answer: 2, why: '1 / 0,05 = 20 bulan.' },
            { q: 'Mana yang paling cepat menaikkan LTV tanpa menambah biaya iklan?', options: ['Menurunkan churn', 'Menambah iklan', 'Mengganti logo', 'Menaikkan CAC'], answer: 0, why: 'Churn lebih rendah memperpanjang umur pelanggan dan menaikkan LTV.' }
          ]
        }
      ]
    },
    {
      title: 'Arus Kas & Modal Kerja',
      lessons: [
        {
          id: 'ue-6-modal-kerja',
          label: 'Modal Kerja dan Siklus Konversi Kas',
          domain: 'Keuangan',
          summary: 'Berapa lama uang Anda tertahan antara membeli bahan dan menerima pembayaran, serta cara memperpendeknya.',
          model: 'Cash Conversion Cycle (DIO + DSO - DPO)',
          analogy: 'Siklus kas seperti selang air dari tangki ke kebun. Makin panjang selang, makin lama air sampai dan makin banyak yang harus Anda isi dulu. Memperpendek selang berarti kas kembali lebih cepat.',
          insight: 'CCC = Hari persediaan (DIO) + Hari piutang (DSO) - Hari utang dagang (DPO). Makin pendek CCC makin sedikit modal kerja yang dibutuhkan. Cara memperpendek: perputaran stok lebih cepat, tagih lebih cepat, negosiasikan termin bayar pemasok yang lebih panjang.',
          cross: { text: 'Modal Kerja x Negosiasi', domains: ['Keuangan', 'Komunikasi'], insight: 'Termin pembayaran adalah variabel yang bisa dinegosiasikan, bukan takdir. Hubungan baik dengan pemasok adalah aset keuangan.' },
          story: { who: 'Grosir Elektronik Pak Andi (ilustrasi)', story: 'Stok bertahan 60 hari, piutang 45 hari, utang dagang 30 hari. CCC = 75 hari. Dengan mempercepat perputaran stok ke 40 hari dan meminta termin pemasok 45 hari, CCC jadi 40 hari, membebaskan kas senilai penjualan 35 hari.', takeaway: 'Mengurangi hari tertahan bisa membebaskan kas tanpa menambah penjualan atau berutang.' },
          actions: ['Hitung rata-rata hari stok, hari piutang, dan hari utang dagang Anda.', 'Hitung CCC dan tuliskan target pengurangan 10 hari.', 'Pilih satu tuas: tagih lebih cepat, kurangi stok lambat, atau negosiasi termin pemasok.'],
          level: 'Mahir', time: '6 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Pelanggan Besar Telat Bayar',
            context: 'Pelanggan terbesar (30% omzet) mulai membayar di hari ke-75 dari termin 30 hari.',
            dilemma: 'Bagaimana menyikapinya?',
            choices: [
              { text: 'Komunikasikan jadwal tegas, tawarkan diskon pelunasan dini, tetapkan batas kredit, dan diversifikasi pelanggan.', consequence: 'Pembayaran membaik, ketergantungan menurun, kas lebih stabil.', explanation: 'Mengelola kredit pelanggan dan konsentrasi risiko sama pentingnya dengan menjual.', best: true },
              { text: 'Diam saja agar hubungan tetap baik.', consequence: 'Keterlambatan menjadi kebiasaan, kas Anda mengering.', explanation: 'Pelanggan menyesuaikan diri dengan toleransi Anda.' },
              { text: 'Putus hubungan seketika.', consequence: 'Omzet turun 30% dan biaya tetap tetap berjalan.', explanation: 'Reaksi ekstrem tanpa rencana pengganti membahayakan bisnis.' }
            ]
          },
          quiz: [
            { q: 'DIO 60, DSO 45, DPO 30 hari. Berapa CCC?', options: ['15', '75', '135', '45'], answer: 1, why: '60 + 45 - 30 = 75 hari.' },
            { q: 'Cara yang memperpendek CCC?', options: ['Menaikkan stok', 'Memperpanjang termin tagih pelanggan', 'Memperpanjang termin bayar pemasok', 'Menunda penagihan'], answer: 2, why: 'Memperpanjang DPO mengurangi CCC.' }
          ]
        },
        {
          id: 'ue-7-runway',
          label: 'Proyeksi Kas dan Runway',
          domain: 'Keuangan',
          summary: 'Memproyeksikan kas 13 minggu ke depan dan menghitung berapa bulan bisnis bertahan jika pemasukan terhenti.',
          model: '13-Week Cash Forecast & Runway',
          analogy: 'Runway seperti bahan bakar pesawat: Anda tak mau tahu bensin habis saat di udara. Proyeksi kas adalah indikator bahan bakar yang memberi waktu untuk mendarat atau mengisi ulang.',
          insight: 'Runway = Kas tersedia / Pembakaran kas bersih bulanan. Proyeksi kas mingguan selama 13 minggu cukup untuk mengantisipasi guncangan musiman. Skenario pesimis, dasar, optimis memberi rentang keputusan, bukan satu angka palsu presisi.',
          cross: { text: 'Proyeksi x Manajemen Risiko', domains: ['Keuangan', 'Bisnis'], insight: 'Cadangan kas bukan kemalasan, melainkan asuransi terhadap ketidakpastian. Banyak bisnis sehat gagal karena guncangan satu kuartal.' },
          story: { who: 'Toko Oleh-Oleh Musiman (ilustrasi)', story: 'Penjualan puncak saat libur, sepi 4 bulan. Pemiliknya memproyeksikan kas mingguan dan menyadari kas habis di bulan ketiga masa sepi. Ia menabung 15% laba musim ramai dan membuka jalur pesanan daring untuk masa sepi.', takeaway: 'Proyeksi mengubah kejutan menjadi rencana.' },
          actions: ['Buat tabel 13 minggu: kas awal, perkiraan masuk, perkiraan keluar, kas akhir.', 'Hitung runway Anda dalam bulan dengan skenario pesimis.', 'Tetapkan dana cadangan minimal setara 2 bulan biaya tetap.'],
          level: 'Mahir', time: '6 min', tool: 'cashflow',
          scenario: {
            title: 'Dilema Kas Tersisa Dua Bulan',
            context: 'Pembakaran kas bersih Rp 20 juta per bulan, kas Rp 40 juta, penjualan stagnan.',
            dilemma: 'Apa langkah pertama?',
            choices: [
              { text: 'Hitung skenario, potong biaya tak kritis, percepat tagihan, dan siapkan sumber pendanaan sebelum kas kritis.', consequence: 'Runway melar jadi 4-5 bulan dan Anda punya waktu bernegosiasi.', explanation: 'Bertindak saat masih ada ruang jauh lebih murah daripada saat kas nol.', best: true },
              { text: 'Berharap bulan depan lebih ramai.', consequence: 'Dua bulan berlalu tanpa perubahan, opsi menyempit.', explanation: 'Harapan tidak menambah kas.' },
              { text: 'Tambah belanja iklan besar-besaran dengan sisa kas.', consequence: 'Jika tak berhasil, kas habis lebih cepat.', explanation: 'Taruhan terakhir tanpa data adalah risiko terbesar.' }
            ]
          },
          quiz: [
            { q: 'Kas Rp 40 juta, pembakaran bersih Rp 20 juta per bulan. Berapa runway?', options: ['1 bulan', '2 bulan', '4 bulan', '8 bulan'], answer: 1, why: '40 / 20 = 2 bulan.' },
            { q: 'Mengapa proyeksi kas dibuat dalam beberapa skenario?', options: ['Agar tampak rumit', 'Karena masa depan tidak pasti dan butuh rentang keputusan', 'Karena diwajibkan hukum', 'Agar kas bertambah'], answer: 1, why: 'Skenario memberi rentang yang realistis dibanding satu angka palsu presisi.' }
          ]
        }
      ]
    }
  ]
});
