// ==============================================================================
// NODUS — CORPORATE STRATEGY, LEGALITY, SUPPLY CHAIN, CONTRACTOR & WEALTH MODULE
// ==============================================================================

import { MindmapData } from '../types';

export const CORPORATE_STRATEGY_WEALTH_CURRICULUM: MindmapData = {
  id: 'curriculum-corporate-strategy-wealth',
  topic: 'Strategi Korporat, Legalitas PT & Arsitektur Kekayaan',
  rootId: 'corp-1-1',
  description: 'Masterclass eksekutif: Struktur badan usaha (PT vs CV), izin OSS & KBLI, rantai distribusi principal-retail, tender kontraktor & termin SPK, PPh Badan & e-Faktur, hingga Holding Company & proteksi aset.',
  nodes: [
    // --------------------------------------------------------------------------
    // TAHAP 1: LEGALITAS & STRUKTUR BADAN USAHA (PT vs CV vs Perorangan)
    // --------------------------------------------------------------------------
    {
      id: 'corp-1-1',
      stepNumber: 'Langkah 1.1',
      stageTitle: 'TAHAP 1: Legalitas & Struktur Badan Usaha',
      label: 'Anatomi Badan Usaha: PT, CV, & Perorangan',
      domain: 'Hukum',
      summary: 'Perbedaan fundamental limited liability PT vs tanggung jawab renteng pribadi CV & Perorangan berdasarkan UU PT No. 40/2007.',
      x: 180,
      y: 120,
      level: 0,
      microContent: {
        mentalModel: 'Corporate Veil & Limited Liability (UU No. 40 Tahun 2007 tentang Perseroan Terbatas)',
        analogy: 'Mendirikan PT bagaikan menciptakan "manusia buatan" yang sah secara hukum (Badan Hukum / Rechtspersoon). Jika kapal PT karam akibat utang bisnis murni, kreditor hanya bisa menyita aset di dalam kapal PT tersebut. Sebaliknya, CV atau Usaha Perorangan tidak memiliki dinding pemisah; kreditor berhak menyita rumah pribadi, mobil keluarga, dan tabungan pribadi Anda hingga lunas (tanggung jawab renteng tanpa batas).',
        academicInsight: 'Berdasarkan Pasal 3 ayat (1) UU PT No. 40/2007 dan UU Cipta Kerja No. 6/2023, pemegang saham Perseroan Terbatas tidak bertanggung jawab secara pribadi atas perikatan yang dibuat atas nama perseroan dan tidak bertanggung jawab atas kerugian perseroan melebihi saham yang dimiliki, kecuali terjadi percampuran harta (piercing the corporate veil) atau tindak pidana penggelapan direksi.',
        crossDisciplinary: {
          connectionText: 'Hukum Korporasi x Manajemen Risiko Insolvensi',
          domains: ['Hukum', 'Keuangan'],
          insight: 'Memilih CV saat omzet masih di bawah Rp 500 juta/tahun memberi efisiensi pajak prive bebas PPh dividen, namun saat skala bisnis melibatkan utang bank miliaran dan tender korporat BUMN, PT adalah syarat mutlak keselamatan aset pribadi.',
        },
        caseStudy: {
          companyOrFigure: 'Kasus Kepailitan Kontraktor CV di Jawa Timur (2019)',
          story: 'Sebuah CV konstruksi gagal menyelesaikan proyek jembatan akibat kenaikan harga besi dan dituntut ganti rugi Rp 4.5 miliar. Karena bentuknya CV (Bukan Badan Hukum), pengadilan negeri mengeksekusi lelang rumah tinggal dan tanah warisan milik sekutu komplementer (Direktur CV) karena tanggung jawab hukum CV mengikat hingga seluruh harta pribadi.',
          takeaway: 'Jangan pernah menandatangani kontrak bernilai miliaran dengan risiko liabilitas tinggi di bawah entitas CV atau Perorangan.'
        },
        actionableSteps: [
          'Evaluasi eksposur liabilitas bisnis Anda: jika potensi tuntutan utang melampaui kekayaan bersih pribadi, segera migrasi dari CV ke PT.',
          'Pahami pembagian sekutu CV: Sekutu Aktif (pengelola yang bertanggung jawab hingga harta pribadi) vs Sekutu Pasif (hanya setor modal).',
          'Untuk modal awal terbatas dan founder tunggal, manfaatkan fasilitas "PT Perorangan" skala mikro-kecil dengan biaya PNBP hanya Rp 50.000.'
        ],
        difficulty: 'Pemula',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pendirian Entitas: Langsung PT atau Mulai dengan CV?',
        context: 'Anda merintis bisnis agensi pemasaran digital dengan omzet awal Rp 40 juta per bulan bersama 1 mitra. Dua klien korporasi BUMN mensyaratkan rekening atas nama badan usaha resmi untuk menerbitkan Purchase Order (PO) Rp 300 juta.',
        dilemma: 'Bentuk badan usaha mana yang harus Anda dirikan minggu ini?',
        choices: [
          {
            id: 'c1',
            text: 'Tetap gunakan rekening bank perorangan pribadi dan minta klien transfer langsung.',
            consequence: 'Bagian kepatuhan (procurement) BUMN menolak menerbitkan PO dan membatalkan kontrak kerja sama seketika.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Korporasi besar dan instansi pemerintah terikat audit ketat yang melarang transfer ke rekening pribadi perorangan.'
          },
          {
            id: 'c2',
            text: 'Dirikan PT (Perseroan Terbatas) standar dengan Akta Notaris, SK Kemenkumham, dan NIB Berbadan Hukum.',
            consequence: 'Lolos uji tuntas (vendor due diligence) BUMN, rekening atas nama PT terbit, dan liabilitas hukum kedua founder terisolasi aman.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Mendirikan PT membuka gerbang tender korporasi menengah-besar sekaligus melindungi kekayaan pribadi founder sejak hari pertama.'
          },
          {
            id: 'c3',
            text: 'Dirikan Yayasan Sosial agar tidak perlu membayar pajak sama sekali.',
            consequence: 'Melanggar UU Yayasan karena menarik laba komersial untuk kepentingan pribadi; terancam sanksi pidana pembekuan aset.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Menggunakan kedok yayasan untuk aktivitas bisnis komersial adalah tindak pelanggaran hukum berat.'
          },
          {
            id: 'c4',
            text: 'Gunakan nama PT milik kenalan lain dengan sistem pinjam bendera (fee 5%).',
            consequence: 'Pembayaran PO masuk ke rekening kenalan, timbul sengketa pemotongan pajak PPh 23, dan arus kas kasbon tersandera.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Pinjam bendera menimbulkan ketergantungan fatal, sengketa pajak faktur, dan ketidakpastian pencairan kas.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-1-1',
          question: 'Apa perbedaan hukum paling mendasar antara Perseroan Terbatas (PT) dengan Persekutuan Komanditer (CV) di Indonesia?',
          options: [
            'PT diwajibkan memiliki karyawan minimal 1.000 orang, CV maksimal 5 orang',
            'PT berstatus Badan Hukum sehingga tanggung jawab pemegang saham terbatas hanya sebesar modal saham yang disetor, sedangkan CV bukan badan hukum sehingga pengurus aktif bertanggung jawab renteng hingga seluruh harta pribadinya',
            'CV tidak boleh beroperasi di luar pulau Jawa',
            'PT dibebaskan dari seluruh jenis pajak penghasilan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Status Badan Hukum pada PT memisahkan harta kekayaan perseroan dengan harta pribadi pendiri (Limited Liability), sedangkan pada CV harta pengurus aktif menyatu dengan liabilitas usaha.'
        }
      ]
    },
    {
      id: 'corp-1-2',
      prerequisiteId: 'corp-1-1',
      stepNumber: 'Langkah 1.2',
      stageTitle: 'TAHAP 1: Legalitas & Struktur Badan Usaha',
      label: 'Bedah Legalitas Formal: Akta, Kemenkumham, NIB, & OSS RBA',
      domain: 'Hukum',
      summary: 'Alur pendirian legal formal: Akta Notaris, SK Pengesahan Kemenkumham, NPWP Badan, serta perizinan berusaha berbasis risiko (OSS RBA & KBLI 5 Digit).',
      x: 180,
      y: 270,
      level: 1,
      microContent: {
        mentalModel: 'Regulatory Architecture & Risk-Based Licensing (PP No. 5 Tahun 2021 tentang OSS RBA)',
        analogy: 'Mendirikan PT tanpa perizinan yang tepat bagaikan mengemudikan bus pariwisata tanpa STNK dan SIM. Akta Notaris & SK Kemenkumham adalah "Akta Lahir", NPWP Badan adalah "KTP Pajak", sedangkan NIB (Nomor Induk Berusaha) dari sistem OSS adalah "SIM Operasional" yang menentukan jalur mana saja yang legal Anda lewati.',
        academicInsight: 'Berdasarkan PP No. 5/2021, sistem Online Single Submission Risk-Based Approach (OSS RBA) mengklasifikasikan kegiatan usaha ke dalam 4 tingkat risiko: Rendah (cukup NIB), Menengah Rendah (NIB + Sertifikat Standar Mandiri), Menengah Tinggi (NIB + Sertifikat Standar Verifikasi), dan Tinggi (NIB + Izin/AMDAL). Pemilihan KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) 5 digit yang keliru di Akta Notaris dapat membuat NIB terkunci dan tidak bisa beroperasi.',
        crossDisciplinary: {
          connectionText: 'Hukum Administrasi Negara x Efisiensi Waktu Perizinan',
          domains: ['Hukum', 'Bisnis'],
          insight: 'Mencantumkan terlalu banyak KBLI yang berbeda rumpun industri di satu PT dapat memicu benturan regulasi (misal: perdagangan ritel dilarang dicampur dengan konstruksi berat dalam satu izin OSS).',
        },
        caseStudy: {
          companyOrFigure: 'Kegagalan Tender Pengadaan Medis Rp 12 Miliar (Jakarta, 2022)',
          story: 'Sebuah PT penyedia alat kesehatan memenangkan lelang e-Katalog rumah sakit daerah senilai Rp 12 miliar. Namun saat verifikasi berkas kontrak akhir, KBLI di NIB perusahaan terdaftar sebagai KBLI 4659 (Perdagangan Mesin Kantor), bukan KBLI 46691 (Perdagangan Alat Laboratorium Farmasi & Kedokteran) yang membutuhkan Sertifikat Standar Distribusi Alkes (IDAK). Kemenangan dibatalkan seketika dan uang jaminan lelang disita negara.',
          takeaway: 'Sinkronisasi KBLI 5-digit di Akta Notaris dengan persyaratan izin sektoral di OSS RBA adalah fondasi legal tender bernilai tinggi.'
        },
        actionableSteps: [
          'Konsultasikan pemilihan kode KBLI 5-digit yang presisi di portal resmi oss.go.id sebelum menandatangani minuta akta notaris.',
          'Pastikan Modal Ditempatkan dan Disetor minimal 25% dari Modal Dasar telah dituangkan dalam bukti setor bank.',
          'Daftarkan akun Coretax / e-Billing DJP dan buka rekening koran bank devisa atas nama PT begitu SK Kemenkumham terbit.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pemilihan KBLI Akta Notaris: Borong Semua Kode atau Fokus?',
        context: 'Notaris bertanya apakah Anda ingin memasukkan 20 kode KBLI sekaligus ke dalam anggaran dasar PT (dari jasa katering, sewa mobil, hingga konstruksi jalan) agar "bisa mengerjakan proyek apa saja di masa depan".',
        dilemma: 'Bagaimana langkah eksekutif yang paling tepat?',
        choices: [
          {
            id: 'c1',
            text: 'Setujui memasukkan seluruh 20 KBLI lintas sektor yang tidak saling berhubungan ke dalam satu PT.',
            consequence: 'Sistem OSS menandai perusahaan sebagai multi-sektor berisiko tinggi; permohonan izin operasional tertahan karena Anda wajib memenuhi puluhan komitmen izin teknis dan AMDAL yang tidak relevan.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mencampuradukkan bidang usaha yang tidak serumpun memicu kewajiban komitmen regulasi OSS yang saling bertentangan.'
          },
          {
            id: 'c2',
            text: 'Pilih 3-5 KBLI 5-digit yang serumpun dan fokus pada lini bisnis inti yang akan dieksekusi dalam 12-24 bulan ke depan.',
            consequence: 'Proses verifikasi OSS instan dan lancar, NIB langsung efektif, dan perusahaan siap mengikuti tender tanpa hambatan kepatuhan perizinan.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Fokus pada KBLI serumpun memudahkan penerbitan izin operasional dan audit kepatuhan perbankan/pemberi tender.'
          },
          {
            id: 'c3',
            text: 'Tidak perlu memilih KBLI sama sekali dan biarkan notaris mengisinya secara acak.',
            consequence: 'KBLI yang muncul tidak sesuai bidang usaha, rekening giro bank ditolak, dan tender tidak bisa diikuti.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Ketidaktelitian KBLI mengunci kapabilitas operasional dan legalitas usaha sejak hari pertama.'
          },
          {
            id: 'c4',
            text: 'Beroperasi tanpa akta notaris dan gunakan dokumen izin palsu hasil editan software.',
            consequence: 'Tindak pidana pemalsuan dokumen negara (Pasal 263 KUHP) dengan ancaman kurungan 6 tahun penjara.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Pemalsuan dokumen perizinan adalah tindak kejahatan pidana berat yang memusnahkan kredibilitas bisnis.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-1-2',
          question: 'Dalam sistem perizinan berusaha berbasis risiko (OSS RBA) di Indonesia, fungsi utama dari kode KBLI (Klasifikasi Baku Lapangan Usaha Indonesia) 5-digit adalah:',
          options: [
            'Menentukan nomor rekening bank milik direktur utama',
            'Menentukan klasifikasi bidang usaha spesifik yang menjadi dasar penetapan tingkat risiko, jenis perizinan berusaha yang wajib dipenuhi, dan kelayakan mengikuti tender pengadaan',
            'Menghitung jumlah hari libur nasional perusahaan',
            'Menggantikan kartu tanda penduduk (KTP) seluruh karyawan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Kode KBLI 5 digit menentukan parameter regulasi, tingkat risiko (Rendah/Menengah/Tinggi), dan izin sektoral yang wajib dimiliki agar kegiatan bisnis sah di mata hukum.'
        }
      ]
    },
    {
      id: 'corp-1-3',
      prerequisiteId: 'corp-1-2',
      stepNumber: 'Langkah 1.3',
      stageTitle: 'TAHAP 1: Legalitas & Struktur Badan Usaha',
      label: 'Tata Kelola Perusahaan: RUPS, Direksi, & Dewan Komisaris',
      domain: 'Hukum',
      summary: 'Pembagian kekuasaan trias korporat: kewenangan mutlak RUPS, hak eksekutif Direksi, fungsi pengawasan Komisaris, dan perlindungan pemegang saham minoritas.',
      x: 180,
      y: 420,
      level: 1,
      microContent: {
        mentalModel: 'Corporate Governance Hierarchy & Fiduciary Duty',
        analogy: 'Kapal pesiar mewah: Pemegang Saham (RUPS) adalah pemilik kapal yang menentukan arah tujuan benua; Dewan Komisaris adalah pengawas navigasi yang memastikan kapal tidak melanggar rambu laut; Direksi adalah nakhoda kapal yang memutar kemudi operasional harian. Nakhoda tidak boleh menjual mesin kapal tanpa seizin pemilik di RUPS.',
        academicInsight: 'Doktrin Fiduciary Duty (Pasal 97 & Pasal 114 UU PT): Direksi dan Komisaris wajib menjalankan perseroan dengan itikad baik (good faith) dan penuh tanggung jawab untuk kepentingan perseroan. Jika Direksi mengambil keputusan ceroboh di luar batas kewenangan (Ultra Vires) yang merugikan perseroan, perlindungan limited liability gugur dan Direksi wajib bertanggung jawab secara pribadi hingga harta pribadinya.',
        crossDisciplinary: {
          connectionText: 'Hukum Perusahaan x Dinamika Kekuasaan Modal Ekuitas',
          domains: ['Hukum', 'Bisnis'],
          insight: 'Memegang jabatan Direktur Utama tidak menjamin kendali permanen; jika Anda hanya memegang 30% saham dan investor memegang 70%, investor dapat mencopot jabatan Anda kapan saja melalui RUPS Luar Biasa (RUPSLB).',
        },
        caseStudy: {
          companyOrFigure: 'Steve Jobs Dipecat dari Apple oleh Dewan Direksi (1985)',
          story: 'Steve Jobs mendatangkan John Sculley sebagai CEO Apple. Ketika terjadi perselisihan strategi Macintosh vs Apple II, Dewan Komisaris berpihak pada Sculley dan mencopot Jobs dari operasional Apple. Jobs baru kembali 12 tahun kemudian setelah mendirikan NeXT dan Pixar.',
          takeaway: 'Pisahkan kepemilikan saham ekuitas dengan jabatan manajemen; kendali sejati korporasi berakar pada hak suara di RUPS.'
        },
        actionableSteps: [
          'Susun Perjanjian Pemegang Saham (Shareholders Agreement / SHA) di luar anggaran dasar standar untuk mengatur hak penolakan pertama (Right of First Refusal).',
          'Terapkan aturan "Reserved Matters": tetapkan keputusan strategis (penerbitan saham baru, utang di atas plafon tertentu, merger) wajib disetujui 75%+ suara RUPS.',
          'Gelar RUPS Tahunan maksimal 6 bulan setelah tahun buku berakhir untuk mengesahkan laporan keuangan dan membebaskan direksi dari tanggung jawab hukum (Acquit et de Charge).'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Masuknya Investor Baru: Dilusi Saham vs Hak Suara',
        context: 'Investor malaikat (Angel Investor) menawarkan modal segar Rp 2 miliar dengan meminta 40% kepemilikan saham dan hak mencalonkan Direktur Keuangan (CFO). Kepemilikan Anda tersisa 60%.',
        dilemma: 'Klausul tata kelola apa yang wajib Anda kunci di perjanjian pemegang saham?',
        choices: [
          {
            id: 'c1',
            text: 'Terima seluruh syarat tanpa klausul proteksi pendiri karena Anda merasa 60% masih suara mayoritas mutlak.',
            consequence: 'Dua tahun kemudian saat putaran pendanaan Seri A, saham Anda terdelusi menjadi 35% dan investor lama berkoalisi dengan investor baru mendepak Anda dari kursi kepemimpinan.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mengabaikan klausul proteksi anti-dilusi dan batas kuorum membiarkan kendali founder terancam saat terjadi pendanaan berikutnya.'
          },
          {
            id: 'c2',
            text: 'Sematkan klausul "Founder Reserved Matters" dan "Pre-emptive Rights" di mana keputusan strategis mengangkat/memberhentikan CEO wajib persetujuan pendiri, serta hak mempertahankan persentase saham saat penerbitan lembar baru.',
            consequence: 'Modal Rp 2 miliar cair, perusahaan bertumbuh pesat, dan kendali founder atas visi jangka panjang terlindungi secara permanen.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Klausul reserved matters dan pre-emptive rights melindungi visi pendiri dari risiko kudeta investor di masa depan.'
          },
          {
            id: 'c3',
            text: 'Tolak mentah-mentah seluruh bentuk investasi luar dan biarkan perusahaan kehabisan kas dalam 3 bulan.',
            consequence: 'Perusahaan mati suri dan peluang merebut pasar hilang diambil kompetitor yang didanai modal kuat.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Takut terdelusi secara berlebihan tanpa mencari solusi hukum membuat perusahaan kehilangan momentum ekspansi.'
          },
          {
            id: 'c4',
            text: 'Keluarkan saham fiktif dari bawah meja tanpa mencatatkannya di SK Kemenkumham.',
            consequence: 'Tindak pidana penipuan korporat yang berakibat pembekuan rekening bank dan pembatalan status badan hukum perseroan.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Penerbitan saham tanpa persetujuan RUPS dan akta notaris Kemenkumham adalah tindakan ilegal batal demi hukum.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-1-3',
          question: 'Menurut Undang-Undang Perseroan Terbatas No. 40 Tahun 2007, organ tertinggi dalam struktur perseroan yang memegang segala kewenangan yang tidak diserahkan kepada Direksi atau Dewan Komisaris adalah:',
          options: [
            'Direktur Utama',
            'Rapat Umum Pemegang Saham (RUPS)',
            'Kepala Dinas Tenaga Kerja',
            'Manajer Keuangan Perusahaan'
          ],
          correctAnswerIndex: 1,
          explanation: 'RUPS adalah organ perseroan pemegang kekuasaan tertinggi yang berwenang mengangkat/memberhentikan Direksi dan Komisaris, mengubah anggaran dasar, serta menyetujui merger atau likuidasi.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 2: RANTAI PASOK, DISTRIBUTOR & EKOSISTEM PERDAGANGAN
    // --------------------------------------------------------------------------
    {
      id: 'corp-2-1',
      prerequisiteId: 'corp-1-3',
      stepNumber: 'Langkah 2.1',
      stageTitle: 'TAHAP 2: Rantai Pasok, Distributor & Ekosistem Perdagangan',
      label: 'Anatomi Jalur Distribusi: Principal ke Konsumen',
      domain: 'Bisnis',
      summary: 'Struktur harga bertingkat: Principal (Pabrik) -> Distributor Tunggal -> Sub-Distributor -> Grosir/Wholesaler -> Retailer -> End Consumer.',
      x: 450,
      y: 120,
      level: 1,
      microContent: {
        mentalModel: 'Channel Margin Stacking & Price Waterfall Structure',
        analogy: 'Mata air pegunungan yang mengalir ke sungai, kanal kota, pipa perumahan, hingga keran kamar mandi. Setiap pintu air memungut biaya pemeliharaan. Jika harga di mata air (HPP Pabrik) Rp 5.000 dan di keran akhir (HET Konsumen) Rp 15.000, selisih Rp 10.000 itu dibagi secara terukur ke setiap pipa distributor agar air tetap mengalir lancar.',
        academicInsight: 'Struktur distribusi konvensional menggunakan pembagian margin terukur: Principal (EBITDA Margin 25-35%), Main Distributor (Gross Margin 8-12%, Net Margin 2-4%), Sub-Distributor (Gross Margin 5-8%), Retailer Modern/Tradisional (Gross Margin 15-25%). Jika principal memotong jalur distributor tanpa kapabilitas armada logistik mandiri, biaya operasional last-mile delivery justru akan membengkak lebih mahal dibanding fee distributor.',
        crossDisciplinary: {
          connectionText: 'Manajemen Rantai Pasok x Geometri Aliran Kas Likuid',
          domains: ['Bisnis', 'Keuangan'],
          insight: 'Bisnis distribusi adalah bisnis perputaran modal bervolume raksasa dengan margin tipis; keunggulan bersaing distributor bertumpu pada kecepatan perputaran piutang (Receivables Turnover).',
        },
        caseStudy: {
          companyOrFigure: 'Ekosistem Distribusi PT Mayora Indah & Enseval (Kalbe Farma)',
          story: 'Mayora dan Kalbe tidak menjual biskuit dan obat langsung ke warung kelontong jutaan pintu. Mereka mengandalkan jaringan armada distributor resmi dengan ribuan truk kanvas yang memiliki jadwal kunjungan (Call Plan) rutin mingguan ke ratusan ribu outlet tradisional di seluruh pelosok Indonesia.',
          takeaway: 'Penguasaan jalur distribusi teritorial adalah parit pertahanan fisik terkuat yang melindungi produk dari serbuan kompetitor baru.'
        },
        actionableSteps: [
          'Petakan struktur harga bertingkat (Price Structure Template): HPP Pabrik -> Harga Beli Distributor -> Harga Jual ke Grosir -> Harga Eceran Tertinggi (HET).',
          'Pastikan margin retailer cukup menarik (minimal 15-20%) agar pemilik toko aktif memajang produk Anda di rak terdepan (eye-level display).',
          'Terapkan Price Protection Policy: tindak tegas distributor nakal yang membanting harga (price-dumping) di luar wilayah teritorialnya.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Penetapan Margin Rantai Pasok Produk Minuman Baru',
        context: 'HPP produksi minuman kemasan Anda adalah Rp 3.000/botol dan HET pasar yang diterima konsumen adalah Rp 7.000/botol. Tersedia margin bruto Rp 4.000/botol untuk dialokasikan.',
        dilemma: 'Bagaimana menstruktur pembagian margin ke jalur distribusi?',
        choices: [
          {
            id: 'c1',
            text: 'Ambil seluruh margin Rp 3.500 untuk pabrik Anda, dan hanya beri margin 3% (Rp 100) untuk distributor dan retailer.',
            consequence: 'Distributor dan pemilik warung menolak menjual produk Anda karena tidak menutup biaya listrik kulkas dan transportasi; produk mati di gudang.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Tanpa margin yang memadai untuk perantara, rantai pasok menolak menggerakkan produk Anda ke konsumen.'
          },
          {
            id: 'c2',
            text: 'Alokasikan secara seimbang: Pabrik laba Rp 1.500 (37.5%), Distributor Rp 700 (10%), dan Retailer warung Rp 1.800 (25.7%).',
            consequence: 'Pemilik warung bersemangat merekomendasikan produk Anda karena marginnya lebih tinggi dari kompetitor, distributor rajin mengirim pasokan, dan omzet melonjak 300%.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menyelaraskan struktur insentif finansial di setiap lini distribusi adalah kunci ekspansi penetrasi pasar ritel.'
          },
          {
            id: 'c3',
            text: 'Jual langsung dari pabrik ke konsumen per botol via jasa ekspedisi kurir ekspres.',
            consequence: 'Biaya ongkos kirim Rp 10.000 per botol membuat harga jual melambung tidak kompetitif dan pembeli kabur.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Mengabaikan skala ekonomi distribusi grosir untuk barang bernilai unit rendah melipatgandakan biaya logistik per unit.'
          },
          {
            id: 'c4',
            text: 'Bagi-bagikan seluruh produk gratis tanpa pernah memungut pembayaran.',
            consequence: 'Perusahaan mengalami kebangkrutan insolvensi total dalam waktu 30 hari.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Aktivitas tanpa pemulihan biaya modal operasional bukanlah model bisnis yang dapat bertahan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-2-1',
          question: 'Dalam manajemen distribusi FMCG (Fast-Moving Consumer Goods), mengapa margin persentase kotor yang diberikan kepada Retailer Toko Eceran (15-25%) umumnya jauh lebih besar dibanding margin Distributor Utama (8-12%)?',
          options: [
            'Karena pemilik warung ritel memiliki gedung kantor bertingkat',
            'Karena retailer menanggung biaya sewa rak fisik, perputaran unit satuan kecil, biaya listrik pendingin, dan berhadapan langsung dengan konsumen akhir yang membutuhkan insentif display produk',
            'Karena distributor utama tidak perlu membayar bensin truk',
            'Karena undang-undang perdagangan melarang distributor mengambil keuntungan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Retailer menanggung biaya tempat ritel, risiko barang kedaluwarsa satuan, dan biaya operasional langsung, sehingga membutuhkan margin per unit lebih tebal dibanding distributor yang mengandalkan volume grosir masif.'
        }
      ]
    },
    {
      id: 'corp-2-2',
      prerequisiteId: 'corp-2-1',
      stepNumber: 'Langkah 2.2',
      stageTitle: 'TAHAP 2: Rantai Pasok, Distributor & Ekosistem Perdagangan',
      label: 'Perjanjian Kerjasama Distributor (PKS), Kuota & Teritori',
      domain: 'Hukum',
      summary: 'Klausul krusial PKS Distributor: Hak teritorial eksklusif, sales target quota, Terms of Payment (TOP), jaminan bank garansi, dan hak terminasi sepihak.',
      x: 450,
      y: 270,
      level: 1,
      microContent: {
        mentalModel: 'Exclusive Distribution Agreement & Territory Ring-Fencing',
        analogy: 'Perjanjian Distributor Eksklusif bagaikan ikatan pernikahan bisnis. Principal memberi wilayah kekuasaan monopoli (misal: Eksklusif Se-Provinsi Bali) dengan kompensasi Distributor wajib memenuhi mahar target penjualan minimal Rp 2 miliar per bulan. Jika distributor malas dan gagal memenuhi target 3 bulan berturut-turut, Principal berhak menceraikan kontrak dan menunjuk distributor lain.',
        academicInsight: 'Berdasarkan Permendag No. 24/2021 tentang Perikatan Pendistribusian Barang, distributor bertindak atas namanya sendiri dan atas risiko sendiri. Poin paling rawan sengketa perdata adalah klausul Minimum Sales Quota dan Cross-Territory Selling (penjualan lintas batas wilayah). Principal wajib mengikat distributor dengan Bank Garansi (BG) atau Surat Kredit Berdokumen Dalam Negeri (SKBDN) untuk memitigasi risiko gagal bayar barang konsinyasi/tempo.',
        crossDisciplinary: {
          connectionText: 'Hukum Kontrak Dagang x Manajemen Risiko Piutang',
          domains: ['Hukum', 'Keuangan'],
          insight: 'Memberikan tempo pembayaran (TOP) 60 hari tanpa jaminan Bank Garansi kepada distributor baru sama dengan memberikan pinjaman tanpa agunan bernilai ratusan juta rupiah.',
        },
        caseStudy: {
          companyOrFigure: 'Sengketa Pemutusan Distributor Minuman Energi (MA RI No. 892 K/Pdt/2018)',
          story: 'Principal multinasional memutus kontrak distributor lokal di Jawa Tengah secara sepihak karena gagal mencapai target kuota penjualan tahunan. Karena draf PKS tidak mencantumkan klausul pelepasan hak Pasal 1266 KUHPerdata, distributor menggugat ke pengadilan dan menuntut ganti rugi pemutusan sepihak senilai Rp 8.2 miliar.',
          takeaway: 'Selalu cantumkan pengesampingan Pasal 1266 KUHPerdata dalam kontrak bisnis agar pemutusan kerja sama akibat wanprestasi target sah tanpa harus menunggu vonis pengadilan.'
        },
        actionableSteps: [
          'Pastikan kontrak PKS mencantumkan klausul pelepasan Pasal 1266 dan 1267 KUHPerdata untuk terminasi instan saat terjadi wanprestasi.',
          'Kunci klausul wilayah: larang keras tindakan "cross-docking" atau menjual barang ke luar zona wilayah yang ditetapkan.',
          'Wajibkan agunan berupa Deposito Berjangka atau Bank Garansi senilai 1.5x dari rata-rata plafon kredit tempo (TOP).'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Permintaan Hak Distributor Eksklusif dari Pengusaha Daerah',
        context: 'Distributor besar di Sumatera meminta hak eksklusif penjualan produk kosmetik Anda untuk seluruh Pulau Sumatera, namun hanya bersedia membayar tempo (TOP) 90 hari tanpa agunan bank garansi.',
        dilemma: 'Bagaimana merumuskan negosiasi kontrak hukum yang aman bagi arus kas perusahaan?',
        choices: [
          {
            id: 'c1',
            text: 'Langsung tanda tangani kontrak eksklusif 5 tahun dengan tempo 90 hari tanpa jaminan apapun.',
            consequence: 'Distributor menimbun piutang Rp 3 miliar, gagal bayar di bulan ke-4, dan wilayah Sumatera terkunci tidak bisa dimasuki distributor lain.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Memberikan eksklusivitas wilayah tanpa jaminan finansial membahayakan solvabilitas kas dan menyandera pasar.'
          },
          {
            id: 'c2',
            text: 'Tawarkan status Non-Eksklusif terlebih dahulu untuk 6 bulan pertama dengan sistem Cash Before Delivery (CBD), atau syaratkan hak eksklusif wajib didukung Bank Garansi senilai plafon kredit dengan kuota penjualan triwulanan yang ketat.',
            consequence: 'Arus kas terproteksi 100%, komitmen mitra teruji secara objektif, dan perusahaan bebas mengevaluasi kinerja pasar secara aman.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Mitigasi bertahap dengan Bank Garansi dan kuota evaluatif melindungi hak pasar dan keamanan piutang modal kerja.'
          },
          {
            id: 'c3',
            text: 'Kirimkan seluruh stok gudang senilai Rp 10 miliar secara konsinyasi tanpa tanda terima surat jalan.',
            consequence: 'Barang digelapkan dan Anda tidak memiliki bukti hukum untuk melakukan penagihan atau sita jaminan.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Mengirim barang tanpa surat jalan dan pengikatan hukum adalah kelalaian fatal tata kelola rantai pasok.'
          },
          {
            id: 'c4',
            text: 'Tolak bermitra dan putuskan tidak akan pernah menjual produk ke luar pulau Jawa.',
            consequence: 'Perusahaan gagal melakukan ekspansi pasar nasional dan kompetitor merebut seluruh pangsa luar Jawa.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Menutup diri dari ekspansi karena takut bernegosiasi hukum mematikan potensi pertumbuhan skala bisnis.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-2-2',
          question: 'Mengapa dalam perjanjian kerjasama distribusi komersial (PKS) di Indonesia, para pengacara korporat selalu mencantumkan klausul "Para pihak sepakat untuk mengesampingkan ketentuan Pasal 1266 Kitab Undang-Undang Hukum Perdata (KUHPerdata)"?',
          options: [
            'Agar perusahaan tidak perlu membayar gaji pegawai distributor',
            'Agar jika salah satu pihak wanprestasi (misal: menunggak bayar atau gagal capai target), kontrak kerja sama dapat dibatalkan atau diakhiri seketika tanpa harus menunggu izin atau putusan hakim dari pengadilan',
            'Agar perseroan bebas dari kewajiban perpajakan',
            'Agar distributor boleh menjual produk palsu secara bebas'
          ],
          correctAnswerIndex: 1,
          explanation: 'Pasal 1266 KUHPerdata mewajibkan pembatalan perjanjian dilakukan melalui putusan hakim pengadilan; mengesampingkannya memungkinkan terminasi kontrak instan saat salah satu pihak ingkar janji.'
        }
      ]
    },
    {
      id: 'corp-2-3',
      prerequisiteId: 'corp-2-2',
      stepNumber: 'Langkah 2.3',
      stageTitle: 'TAHAP 2: Rantai Pasok, Distributor & Ekosistem Perdagangan',
      label: 'Logistik, MOQ, Buffer Stock & Cash Trap Mitigation',
      domain: 'Bisnis',
      summary: 'Mengelola modal kerja distribusi: Economic Order Quantity (EOQ), biaya simpan gudang (Carrying Costs), dan mitigasi kas macet akibat piutang toko.',
      x: 450,
      y: 420,
      level: 1,
      microContent: {
        mentalModel: 'Working Capital Cash Trap & Economic Order Quantity ($EOQ = \\sqrt{\\frac{2DS}{H}}$)',
        analogy: 'Tangki air yang bocor di bawah tanah. Anda melihat air mengalir deras dari keran dapur (omzet besar), namun meteran air melonjak dan cadangan sumur Anda kering kerontang. Dalam bisnis distribusi, kas macet di dua pipa tersembunyi: tumpukan kardus stok barang mati di gudang (Inventory) dan nota tagihan tempo warung kelontong yang belum tertagih (Receivables).',
        academicInsight: 'Banyak distributor beromzet puluhan miliar bangkrut mendadak akibat Cash Trap: Days Sales Outstanding (DSO = rata-rata 75 hari penagihan piutang ritel) jauh lebih panjang daripada Days Payable Outstanding (DPO = kewajiban membayar pabrik tempo 30 hari). Selisih 45 hari defisit likuiditas ini memicu krisis kas operasional jika tidak didukung fasilitas Supply Chain Financing.',
        crossDisciplinary: {
          connectionText: 'Manajemen Operasi Logistik x Manajemen Likuiditas Kas',
          domains: ['Bisnis', 'Keuangan'],
          insight: 'Biaya penyimpanan stok gudang (Inventory Holding Cost) mencapai 20-30% dari nilai barang per tahun (biaya sewa gudang, asuransi, risiko barang rusak/kedaluwarsa, dan bunga modal kerja).',
        },
        caseStudy: {
          companyOrFigure: 'Prinsip Cross-Docking Wal-Mart',
          story: 'Sam Walton merevolusi rantai pasok dengan sistem Cross-Docking: truk barang dari pabrik tiba di gudang distribusi, barang langsung dipindahkan ke truk pengantar toko ritel dalam waktu kurang dari 24 jam tanpa pernah mengendap di rak gudang. Menghilangkan biaya sewa gudang dan membebaskan miliaran dolar modal kerja.',
          takeaway: 'Kecepatan perputaran inventaris (Inventory Turnover) adalah kunci melipatgandakan return on capital tanpa menambah modal kas.'
        },
        actionableSteps: [
          'Terapkan batasan MOQ (Minimum Order Quantity) yang menutupi biaya solar truk dan upah driver logistik per rute pengiriman.',
          'Hitung Aging Piutang (Account Receivables Aging): stop pasokan barang baru seketika jika toko menunggak nota di atas 45 hari.',
          'Kombinasikan metode analisis ABC Inventaris: 20% produk Fast-Moving (Kategori A) wajib dijaga buffer stock-nya, sedangkan Slow-Moving (Kategori C) diproduksi berdasarkan pesanan (Just-In-Time).'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Jebakan Modal Kerja (Cash Trap) Distributor Makanan Beku',
        context: 'Omzet distribusi makanan beku Anda naik dari Rp 500 juta ke Rp 2 miliar per bulan. Namun rekening bank operasional Anda kosong melompong karena Rp 1.6 miliar piutang masih tertahan di 120 toko ritel, sementara pabrik menagih pelunasan Rp 1.2 miliar dalam 7 hari.',
        dilemma: 'Tindakan penyelamatan likuiditas apa yang wajib dieksekusi minggu ini?',
        choices: [
          {
            id: 'c1',
            text: 'Terus kirim barang ke 120 toko ritel tersebut demi mempertahankan pertumbuhan grafik omzet di laporan.',
            consequence: 'Pabrik memutus pasokan barang karena Anda gagal bayar dalam 7 hari, dan bisnis distribusi Anda tutup seketika akibat krisis insolvensi.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Omzet adalah kesombongan di atas kertas; kas tunai adalah oksigen nyata kelangsungan bisnis.'
          },
          {
            id: 'c2',
            text: 'Hentikan pengiriman barang ke toko yang menunggak nota di atas 30 hari, berikan diskon pelunasan cepat 2% (2/10 net 30) untuk penagihan kas kilat, dan ajukan fasilitas Invoice Factoring ke bank devisa terpercaya.',
            consequence: 'Kas segar masuk Rp 800 juta dalam 5 hari, tagihan pabrik terbayar tepat waktu, hubungan dengan principal aman, dan disiplin piutang ritel terbentuk.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Pemberian insentif pelunasan cepat dan penghentian kredit ke debitur macet memulihkan pembuluh darah kas perusahaan.'
          },
          {
            id: 'c3',
            text: 'Pinjam uang ke rentenir ilegal bunga 15% per bulan untuk melunasi pabrik.',
            consequence: 'Bunga rentenir memakan seluruh margin laba kotor Anda dan aset gudang disita paksa sebulan kemudian.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Menutup defisit modal kerja dengan utang berbunga eksorbitan mempercepat spiral kehancuran bisnis.'
          },
          {
            id: 'c4',
            text: 'Kabur dan matikan seluruh nomor telepon penagihan.',
            consequence: 'Laporan pidana penipuan dan penggelapan (Pasal 372 & 378 KUHP) dengan status DPO kepolisian.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Melarikan diri dari kewajiban dagang berujung pada konsekuensi pidana dan kehancuran reputasi seumur hidup.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-2-3',
          question: 'Apa yang dimaksud dengan fenomena "Cash Trap" dalam bisnis distribusi barang berskala besar?',
          options: [
            'Situasi di mana uang tunai dicuri oleh kasir toko',
            'Kondisi di mana omzet dan pembukuan laba di atas kertas terlihat melonjak pesat, namun saldo kas riil di rekening bank kosong karena seluruh modal kerja tersandera pada piutang toko yang belum tertagih dan inventaris stok mati di gudang',
            'Bank sentral melarang penarikan uang dari mesin ATM',
            'Pabrik memberikan seluruh barang secara cuma-cuma'
          ],
          correctAnswerIndex: 1,
          explanation: 'Cash trap terjadi ketika laba akuntansi tidak terkonversi menjadi kas cair karena tertahan pada perpanjangan piutang pelanggan dan pembengkakan persediaan barang gudang.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 3: DUNIA KONTRAKTOR, PROYEK, & PENGADAAN (PROCUREMENT)
    // --------------------------------------------------------------------------
    {
      id: 'corp-3-1',
      prerequisiteId: 'corp-2-3',
      stepNumber: 'Langkah 3.1',
      stageTitle: 'TAHAP 3: Dunia Kontraktor, Proyek, & Pengadaan',
      label: 'Ekosistem Tender Konstruksi & Pengadaan (LPSE & Swasta)',
      domain: 'Hukum',
      summary: 'Mekanisme lelang proyek: Membaca dokumen RKS/TOR, menyusun Rencana Anggaran Biaya (RAB), Harga Perkiraan Sendiri (HPS), serta instrumen Bank Garansi Tender.',
      x: 720,
      y: 120,
      level: 1,
      microContent: {
        mentalModel: 'Procurement Bid Optimization & Winner\'s Curse Mitigation',
        analogy: 'Mengikuti tender proyek seperti menembak sasaran di tengah kabut tebal. Jika tawaran harga Anda terlalu tinggi, Anda kalah dalam lelang; jika tawaran Anda terlalu murah membanting harga hanya demi menang lelang, Anda menderita "Kutukan Pemenang" (Winner\'s Curse): proyek dimenangkan namun Anda bangkrut saat mengeksekusinya di lapangan karena anggaran tidak menutup biaya material.',
        academicInsight: 'Berdasarkan Perpres No. 16/2018 jo. Perpres No. 12/2021 tentang Pengadaan Barang/Jasa Pemerintah melalui sistem LPSE (Layanan Pengadaan Secara Elektronik), evaluasi lelang menggunakan sistem Gugur Harga Terendah atau Nilai Tertimbang Kualitas & Biaya. Dokumen penawaran wajib melampirkan Jaminan Penawaran (Bid Bond), Sertifikat Badan Usaha (SBU) Jasa Konstruksi, dan kesesuaian harga satuan upah/material di bawah batas pagu HPS (Harga Perkiraan Sendiri).',
        crossDisciplinary: {
          connectionText: 'Hukum Pengadaan Publik x Rekayasa Estimasi Biaya Sipil',
          domains: ['Hukum', 'Data & Analitik'],
          insight: 'Menyusun RAB proyek tidak sekadar menjumlahkan semen dan pasir; komponen biaya overhead, Pajak Pertambahan Nilai (PPN), asuransi CAR (Contractor\'s All Risks), dan margin kontingensi risiko 10% wajib dihitung cermat.',
        },
        caseStudy: {
          companyOrFigure: 'Winner\'s Curse Kontraktor Tol Swasta (2018)',
          story: 'Kontraktor swasta memotong harga penawaran hingga 28% di bawah HPS demi memenangkan proyek jembatan layang. Saat harga semen dan besi beton dunia melonjak 35%, kontraktor tidak memiliki ruang margin cadangan, pekerjaan terhenti 8 bulan, bank garansi pelaksanaan dicairkan oleh pemilik proyek, dan perusahaan masuk daftar hitam (Blacklist LKPP).',
          takeaway: 'Jangan pernah membanting harga penawaran di bawah batas keselamatan margin teknis hanya demi gengsi memenangkan lelang.'
        },
        actionableSteps: [
          'Bedah Dokumen Pengadaan (RKS): cermati spesifikasi teknis khusus, syarat kualifikasi tenaga ahli (SKA/SKT), dan metode pembayaran.',
          'Dapatkan Sertifikat Badan Usaha (SBU) dan Sertifikat Standar dari LPJK (Lembaga Pengembangan Jasa Konstruksi) yang masih berlaku.',
          'Gunakan jaminan penawaran resmi dari Bank BUMN atau Perusahaan Penjaminan (Surety Bond) terdaftar di OJK.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Penawaran Harga Tender Renovasi Gedung Rp 5 Miliar',
        context: 'Nilai pagu HPS proyek renovasi gedung kampus adalah Rp 5.000.000.000. Estimasi biaya riil teknis material dan upah kerja (RAB internal Anda) adalah Rp 4.100.000.000 (margin aman 18%). Pesaing lain dikabarkan menawar banting harga di angka Rp 3.600.000.000.',
        dilemma: 'Berapa angka penawaran yang akan Anda masukkan ke sistem lelang?',
        choices: [
          {
            id: 'c1',
            text: 'Ikut banting harga ke Rp 3.500.000.000 (di bawah biaya riil produksi) asal menang proyek.',
            consequence: 'Anda menang lelang namun mengalami kerugian kas riil Rp 600 juta, pengerjaan mangkrak, dan bank garansi disita.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Winner\'s curse: memenangkan tender dengan harga di bawah biaya produksi adalah bunuh diri komersial.'
          },
          {
            id: 'c2',
            text: 'Tetapkan penawaran rasional di Rp 4.450.000.000 (diskon 11% dari HPS) dengan menyajikan keunggulan metode kerja tercepat, jadwal CPM yang presisi, dan portofolio mutu tanpa cacat.',
            consequence: 'Pesaing banting harga gugur saat evaluasi kewajaran harga teknis (karena penawaran di bawah 80% HPS wajib klarifikasi harga satuan), dan proyek dimenangkan oleh Anda dengan margin keuntungan sehat 8%.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Penawaran berbasis metodologi realistis dan margin sehat melindungi kontraktor dari risiko kegagalan proyek.'
          },
          {
            id: 'c3',
            text: 'Suap panitia lelang dengan uang tunai Rp 500 juta agar tender dimenangkan secara curang.',
            consequence: 'Terjaring Operasi Tangkap Tangan (OTT) penegak hukum; hukuman penjara tipikor dan pencabutan hak usaha seumur hidup.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Tindak pidana suap pengadaan barang dan jasa adalah kejahatan korupsi dengan sanksi pidana berat.'
          },
          {
            id: 'c4',
            text: 'Kirim dokumen penawaran kosong tanpa melampirkan surat jaminan penawaran.',
            consequence: 'Gugur otomatis pada tahap seleksi administrasi pertama.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Kelalaian kelengkapan administrasi dasar menggugurkan keikutsertaan lelang seketika.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-3-1',
          question: 'Dalam lelang proyek pengadaan barang dan jasa pemerintah (LPSE), apa konsekuensi hukum jika peserta tender yang telah dinyatakan sebagai pemenang lelang resmi kemudian menolak atau mengundurkan diri untuk menandatangani kontrak kerja?',
          options: [
            'Panitia akan membelikan tiket liburan ke luar negeri',
            'Jaminan Penawaran (Bid Bond) milik peserta lelang dicairkan dan disetorkan ke kas negara, serta perusahaan dikenakan sanksi daftar hitam (blacklist) selama 1 hingga 2 tahun',
            'Perusahaan dibebaskan dari pajak selama 5 tahun',
            'Tidak ada sanksi apapun'
          ],
          correctAnswerIndex: 1,
          explanation: 'Mengundurkan diri setelah menang lelang merugikan keuangan negara, sehingga jaminan penawaran disita dan entitas di-blacklist dari seluruh tender pengadaan nasional.'
        }
      ]
    },
    {
      id: 'corp-3-2',
      prerequisiteId: 'corp-3-1',
      stepNumber: 'Langkah 3.2',
      stageTitle: 'TAHAP 3: Dunia Kontraktor, Proyek, & Pengadaan',
      label: 'Kontrak SPK, Termin Progres Fisik, & Retensi Proyek',
      domain: 'Hukum',
      summary: 'Arsitektur kontrak konstruksi: Uang Muka (Down Payment), sertifikat progres bulanan (Monthly Certificate), opname lapangan, dan dana retensi 5%.',
      x: 720,
      y: 270,
      level: 1,
      microContent: {
        mentalModel: 'Construction Contract Milestones & Retention Security Mechanics',
        analogy: 'Membangun rumah bertingkat: Pemilik proyek tidak memberi seluruh karung uang di awal, melainkan menyiramkan air kas secara bertahap saat tiang pancang selesai (Termin 25%), atap tertutup (Termin 50%), finishing dinding (Termin 95%). Sisa 5% terakhir ditahan di dalam brankas (Uang Retensi) selama 6 bulan masa pemeliharaan untuk memastikan genteng tidak bocor saat hujan deras pertama.',
        academicInsight: 'Berdasarkan UU Jasa Konstruksi No. 2/2017 dan standar FIDIC (International Federation of Consulting Engineers), kontrak konstruksi yang sehat memisahkan Pembayaran Uang Muka (15-20% didukung Jaminan Uang Muka), Pembayaran Prestasi Pekerjaan (Termin Progres Fisik berbasis Berita Acara Opname Pekerjaan), dan Retensi 5% yang baru dicairkan setelah Berita Acara Serah Terima Akhir (FHO - Final Hand Over) masa pemeliharaan selesai.',
        crossDisciplinary: {
          connectionText: 'Hukum Kontrak Konstruksi x Manajemen Arus Kas Talangan Proyek',
          domains: ['Hukum', 'Keuangan'],
          insight: 'Bahaya paling mematikan bagi kontraktor adalah fenomena "Over-Bill vs Under-Bill": mengakui progres pembayaran lebih cepat dari progres fisik di lapangan sehingga kehabisan kas saat proyek memasuki tahap penyelesaian akhir.',
        },
        caseStudy: {
          companyOrFigure: 'Tragedi Kontraktor Bangkrut Tanpa SPK Resmi (Surabaya, 2021)',
          story: 'Kontraktor mengerjakan proyek interior hotel senilai Rp 2.8 miliar hanya berpegang pada janji lisan dan pesan WhatsApp dari direktur pengembang. Saat progres 80%, direktur pengembang diganti dan manajemen baru menolak membayar karena tidak ada SPK resmi bertandatangan basah dan Berita Acara Opname pekerjaan.',
          takeaway: 'Haram menurunkan satu truk material atau mengerahkan tukang ke lapangan sebelum Surat Perintah Kerja (SPK) resmi ditandatangani di atas meterai.'
        },
        actionableSteps: [
          'Jangan pernah memulai pekerjaan lapangan tanpa SPK / Surat Perjanjian Kontrak Kerja Konstruksi berkekuatan hukum tetap.',
          'Pastikan Berita Acara Pemeriksaan Pekerjaan (Opname Bersama) ditandatangani konsultan pengawas dan Pejabat Pembuat Komitmen (PPK) sebelum mengajukan invoice termin.',
          'Perhitungkan masa pemeliharaan (Defect Liability Period) 90-180 hari dalam anggaran kas sebelum retensi 5% dapat dicairkan.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Permintaan Mulai Kerja Cepat Tanpa SPK Bertanda Tangan',
        context: 'Pemilik proyek swasta mendesak kontraktor Anda untuk menurunkan alat berat dan memulai penggalian pondasi senilai Rp 800 juta besok pagi karena jadwal peresmian mendesak, dengan janji: "Dokumen SPK dan uang muka sedang diproses bagian legal minggu depan".',
        dilemma: 'Tindakan eksekutif apa yang wajib diambil?',
        choices: [
          {
            id: 'c1',
            text: 'Langsung kirim alat berat dan belanjakan kas tabungan Anda untuk membeli besi pondasi besok pagi.',
            consequence: 'Dua minggu kemudian proyek dibatalkan pemilik lahan sengketa, pemilik proyek menolak bertanggung jawab, dan uang Rp 800 juta Anda musnah tanpa bukti perikatan kontrak.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Bekerja tanpa ikatan kontrak tertulis adalah bunuh diri legal dalam industri jasa konstruksi.'
          },
          {
            id: 'c2',
            text: 'Tolak mobilisasi alat berat secara santun: Kirimkan Surat Konfirmasi Kesiapan Teknis dan tegaskan pekerjaan fisik akan dimobilisasi dalam 1x24 jam tepat setelah SPK resmi ditandatangani dan Uang Muka efektif masuk rekening operasional.',
            consequence: 'Pemilik proyek mempercepat bagian legal mereka menandatangani SPK dalam 2 hari, uang muka cair, dan risiko pekerjaan terproteksi hukum 100%.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menegakkan disiplin administrasi kontrak melindungi modal kerja kontraktor dari risiko pembatalan proyek sepihak.'
          },
          {
            id: 'c3',
            text: 'Gadaikan sertifikat rumah pribadi untuk membiayai proyek tersebut secara sukarela.',
            consequence: 'Risiko kerugian proyek merambat langsung menyita rumah tinggal keluarga Anda.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Mencampuradukkan aset tempat tinggal pribadi untuk talangan proyek berisiko hukum tinggi adalah kesalahan fatal.'
          },
          {
            id: 'c4',
            text: 'Bakar kantor pemilik proyek karena merasa dipermainkan jadwalnya.',
            consequence: 'Tindak pidana perusakan properti dan kurungan penjara.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Tindakan anarkis melanggar hukum pidana dan menghancurkan reputasi bisnis selamanya.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-3-2',
          question: 'Dalam kontrak proyek konstruksi, apa fungsi utama dari pemotongan "Uang Retensi" (biasanya sebesar 5% dari total nilai kontrak)?',
          options: [
            'Sebagai uang tips tambahan untuk konsultan pengawas proyek',
            'Sebagai jaminan dana yang ditahan sementara oleh pemilik proyek selama masa pemeliharaan (Defect Liability Period) untuk memastikan kontraktor memperbaiki segala kerusakan atau cacat pekerjaan sebelum serah terima akhir (FHO)',
            'Sebagai uang pelicin untuk mengelabui petugas dinas perpajakan',
            'Sebagai premi asuransi kesehatan para pekerja bangunan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Retensi 5% berfungsi sebagai jaminan kepatuhan kontraktor untuk merawat dan memperbaiki cacat fisik bangunan selama masa garansi pemeliharaan berlangsung.'
        }
      ]
    },
    {
      id: 'corp-3-3',
      prerequisiteId: 'corp-3-2',
      stepNumber: 'Langkah 3.3',
      stageTitle: 'TAHAP 3: Dunia Kontraktor, Proyek, & Pengadaan',
      label: 'Manajemen Risiko Proyek: Eskalasi Harga, Denda & Sub-Kontraktor',
      domain: 'Hukum',
      summary: 'Klausul proteksi kontraktor: Penyesuaian eskalasi harga material, klausul kahar (Force Majeure), denda keterlambatan (Liquidated Damages), dan kontrak back-to-back sub-kontraktor.',
      x: 720,
      y: 420,
      level: 1,
      microContent: {
        mentalModel: 'Construction Risk Allocation & Back-to-Back Subcontracting',
        analogy: 'Membawa payung anti-badai saat mendaki gunung. Jika terjadi badai salju tak terduga (harga semen melonjak 50% atau bencana gempa bumi), klausul eskalasi harga dan Force Majeure adalah payung yang membebaskan Anda dari tuntutan denda keterlambatan. Jika Anda menyewa pemandu lokal (Sub-Kontraktor), ikat mereka dengan aturan yang sama: Anda baru membayar subcon setelah pemilik proyek membayar Anda.',
        academicInsight: 'Berdasarkan syarat umum kontrak konstruksi, klausul Liquidated Damages (Denda Keterlambatan) umumnya dipatok sebesar 1/1000 (satu permil) per hari keterlambatan dari nilai kontrak, dengan batas maksimal 5% dari total nilai kontrak. Kontraktor wajib memasukkan klausul "Price Escalation Clause" untuk proyek tahun jamak (Multi-Years Contract) guna melindungi margin dari fluktuasi indeks harga material BPS.',
        crossDisciplinary: {
          connectionText: 'Hukum Klaim Konstruksi x Manajemen Rantai Pasok Sub-Kontraktor',
          domains: ['Hukum', 'Bisnis'],
          insight: 'Prinsip "Pay-When-Paid" atau "Pay-If-Paid" dalam kontrak sub-kontraktor mengisolasi risiko kontraktor utama agar tidak mengalami krisis likuiditas saat pemilik proyek menunda pembayaran termin.',
        },
        caseStudy: {
          companyOrFigure: 'Klaim Keterlambatan Proyek Pelabuhan Rp 45 Miliar (Makassar, 2020)',
          story: 'Proyek reklamasi tertunda 90 hari akibat cuaca ekstrem gelombang tinggi dan kenaikan harga solar industri non-subsidi. Kontraktor berhasil terhindar dari denda keterlambatan Rp 2.25 miliar karena secara disiplin mengirimkan Surat Pemberitahuan Force Majeure yang dilengkapi laporan resmi BMKG dalam tenggat waktu 3x24 jam sejak peristiwa terjadi.',
          takeaway: 'Hak proteksi hukum (seperti Force Majeure) gugur seketika jika Anda lalai mengirimkan notifikasi tertulis sesuai tenggat waktu kontrak.'
        },
        actionableSteps: [
          'Kunci klausul Notifikasi Waktu: laporkan setiap kendala lapangan atau cuaca buruk secara tertulis maksimal 3x24 jam.',
          'Gunakan kontrak "Back-to-Back" untuk seluruh sub-kontraktor dan mandor lapangan: samakan standar mutu dan termin pencairan kas.',
          'Cantumkan batas maksimal denda keterlambatan (Liquidated Damages Capped) maksimal 5% dari sisa nilai pekerjaan yang belum selesai.'
        ],
        difficulty: 'Mahir',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Lonjakan Harga Baja Tulangan 40% di Tengah Proyek',
        context: 'Di bulan ke-3 proyek pembangunan gedung gudang senilai Rp 10 miliar dengan kontrak Lump Sum tetap, perang luar negeri meletus dan memicu lonjakan harga baja tulangan sebesar 40%. Jika diteruskan tanpa revisi harga, kontraktor Anda akan rugi Rp 1.4 miliar.',
        dilemma: 'Langkah hukum dan teknis apa yang harus dieksekusi kontraktor?',
        choices: [
          {
            id: 'c1',
            text: 'Ganti baja tulangan dengan ukuran banci yang lebih kecil dan tipis tanpa memberitahu pengawas demi menghemat biaya.',
            consequence: 'Struktur gedung retak dan runtuh saat uji beban, izin konstruksi dicabut dan direksi dipidana atas kegagalan bangunan (UU Jasa Konstruksi).',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Mengurangi spesifikasi teknis membahayakan nyawa manusia dan merupakan tindak kejahatan pidana kegagalan konstruksi.'
          },
          {
            id: 'c2',
            text: 'Ajukan Surat Permohonan Addendum Penyesuaian Harga (Contract Price Adjustment) yang didukung data kenaikan Indeks Harga Produsen BPS dan nota pemasok resmi, atau negosiasikan re-engineering desain struktur alternatif bersama konsultan perencana.',
            consequence: 'Pemilik proyek menyetujui addendum eskalasi harga 25% dan optimalisasi desain pelat lantai, proyek berlanjut aman tanpa mengorbankan mutu keselamatan.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Pengajuan addendum formal berbasis data harga statistik pemerintah adalah prosedur hukum yang sah untuk menyelesaikan disrupsi biaya tak terduga.'
          },
          {
            id: 'c3',
            text: 'Langsung tinggalkan proyek begitu saja di malam hari tanpa kabar.',
            consequence: 'Perusahaan Anda dituntut ganti rugi perdata wanprestasi, bank garansi dicairkan dan masuk daftar hitam nasional seumur hidup.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Melarikan diri dari proyek konstruksi mencoreng nama baik perseroan dan menjamin penyitaan aset jaminan bank.'
          },
          {
            id: 'c4',
            text: 'Lanjutkan proyek dalam diam hingga seluruh tabungan perusahaan habis dan karyawan mogok kerja.',
            consequence: 'Perusahaan mengalami kebangkrutan tanpa sempat melakukan perundingan hak kontraktual.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menerima kerugian struktural tanpa memanfaatkan mekanisme addendum kontrak adalah kelalaian tata kelola eksekutif.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-3-3',
          question: 'Dalam kontrak hukum konstruksi standar di Indonesia, apa yang dimaksud dengan ketentuan "Liquidated Damages" dan berapakah besaran standar yang umum berlaku?',
          options: [
            'Biaya liburan tahunan untuk para pekerja di lokasi tambang',
            'Ganti rugi keterlambatan penyelesaian proyek yang telah disepakati di muka dalam kontrak, umumnya ditetapkan sebesar 1/1000 (satu permil) per hari keterlambatan dengan batas maksimal 5% dari nilai kontrak',
            'Denda pajak pertambahan nilai yang harus disetorkan ke dinas pariwisata',
            'Uang ganti rugi jika cuaca di lokasi proyek terlalu dingin'
          ],
          correctAnswerIndex: 1,
          explanation: 'Liquidated Damages mematok kompensasi pasti atas keterlambatan jadwal tanpa pemilik proyek perlu membuktikan rincian kerugian riil di pengadilan.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 4: PERPAJAKAN KORPORAT & OPTIMALISASI LEGAL (TAX PLANNING)
    // --------------------------------------------------------------------------
    {
      id: 'corp-4-1',
      prerequisiteId: 'corp-3-3',
      stepNumber: 'Langkah 4.1',
      stageTitle: 'TAHAP 4: Perpajakan Korporat & Optimalisasi Legal',
      label: 'Fondasi Pajak Badan: PPh Badan, Fasilitas 31E, & PPh Final',
      domain: 'Pajak',
      summary: 'Kewajiban perpajakan entitas perseroan: Tarif PPh Badan 22%, fasilitas diskon 50% Pasal 31E UU PPh, PPh Final UMKM PP 55/2022 (0.5%), dan pemotongan PPh 21/23.',
      x: 990,
      y: 120,
      level: 1,
      microContent: {
        mentalModel: 'Corporate Income Tax Optimization Framework (UU Harmonisasi Peraturan Perpajakan / UU HPP)',
        analogy: 'Negara adalah "mitra tidur" wajib yang memegang saham tanpa menyumbang modal awal bisnis Anda. Setiap akhir tahun buku, mitra ini menagih jatah 22% dari laba bersih kena pajak Anda. Namun undang-undang perpajakan menyediakan "jalan tol resmi" berupa diskon fasilitas 50% bagi perusahaan yang omzetnya belum melampaui batas tertentu.',
        academicInsight: 'Berdasarkan UU HPP No. 7/2021 dan Pasal 31E UU PPh, wajib pajak badan dalam negeri dengan peredaran bruto (omzet) hingga Rp 50 miliar mendapatkan fasilitas pengurangan tarif sebesar 50% atas Penghasilan Kena Pajak dari bagian omzet sampai dengan Rp 4.8 miliar (tarif efektif menjadi 11%, bukan 22%). Sementara bagi wajib pajak badan baru, tersedia opsi PPh Final 0.5% (PP No. 55/2022) selama 3 tahun untuk PT atau 4 tahun untuk CV.',
        crossDisciplinary: {
          connectionText: 'Hukum Perpajakan Korporat x Akuntansi Manajemen Laba Bersih',
          domains: ['Pajak', 'Keuangan'],
          insight: 'Memilih PPh Final 0.5% dari omzet sangat menguntungkan jika margin laba bersih Anda tebal (>20%); sebaliknya jika margin tipis (<2%) atau sedang merugi, tarif normal Pasal 31E jauh lebih hemat karena pajak dihitung dari laba bersih, bukan dari peredaran bruto.',
        },
        caseStudy: {
          companyOrFigure: 'Penghematan Pajak Legal PT Distribusi Logistik (Bandung, 2023)',
          story: 'PT logistik beromzet Rp 18 miliar mencatatkan laba kena pajak Rp 1.2 miliar. Konsultan pajak memanfaatkan fasilitas Pasal 31E UU PPh: PPh Badan terutang yang seharusnya Rp 264 juta (22%) berhasil ditekan secara legal menjadi Rp 132 juta (tarif fasilitas 11%), menghemat kas operasional Rp 132 juta secara sah tanpa melanggar undang-undang.',
          takeaway: 'Kecerdasan memanfaatkan fasilitas insentif perpajakan resmi melipatgandakan arus kas bersih perseroan secara legal.'
        },
        actionableSteps: [
          'Evaluasi kelayakan pemanfaatan tarif PPh Final 0.5% vs pembukuan tarif normal fasilitas Pasal 31E.',
          'Lakukan rekonsiliasi fiskal positif dan negatif antara laporan laba rugi komersial dengan aturan perpajakan.',
          'Pastikan bukti potong PPh Pasal 23 dari klien korporat dikumpulkan rapi sebagai kredit pajak pengurang PPh Badan di SPT Tahunan 1771.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Skema Pajak Badan Usaha Baru: PPh Final 0.5% vs Pembukuan Normal',
        context: 'PT perdagangan umum Anda baru berdiri setahun dengan proyeksi omzet Rp 3.5 miliar dan margin laba bersih sangat tipis sebesar 3% (Laba bersih kena pajak hanya Rp 105 juta).',
        dilemma: 'Skema perhitungan pajak mana yang paling menghemat kas operasional perusahaan?',
        choices: [
          {
            id: 'c1',
            text: 'Gunakan skema PPh Final 0.5% dari seluruh peredaran bruto omzet.',
            consequence: 'Pajak terutang menjadi Rp 17.500.000 (memakan hampir 17% dari seluruh total laba bersih riil perusahaan).',
            scoreBonus: 20,
            isOptimal: false,
            explanation: 'Bagi bisnis bermargin tipis, PPh Final omzet membebani laba karena pajak dipungut tanpa mempedulikan tingginya biaya HPP.'
          },
          {
            id: 'c2',
            text: 'Pilih skema pembukuan tarif normal dengan fasilitas Pasal 31E UU PPh (Tarif efektif 11% dari laba bersih).',
            consequence: 'Pajak terutang hanya 11% x Rp 105 juta = Rp 11.550.000, menghemat kas riil hampir Rp 6 juta secara sah dan legal.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Bagi bisnis bermargin laba tipis, tarif normal fasilitas 31E dari laba bersih jauh lebih efisien dibanding PPh Final omzet.'
          },
          {
            id: 'c3',
            text: 'Jangan bayar pajak dan hapus seluruh laporan keuangan dari komputer perusahaan.',
            consequence: 'Pemeriksaan pajak khusus oleh Dirjen Pajak dengan sanksi denda 200% dan pencekalan paspor keluar negeri.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Menghilangkan catatan pembukuan adalah tindak pidana perpajakan dengan ancaman sanksi berat.'
          },
          {
            id: 'c4',
            text: 'Laporkan omzet fiktif Rp 50 miliar agar terlihat keren di mata teman kantor.',
            consequence: 'Tagihan pajak membengkak ratusan juta rupiah yang tidak sanggup dilunasi perseroan.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Memalsukan kenaikan angka penjualan di SPT memicu penetapan pajak liar yang merugikan arus kas.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-4-1',
          question: 'Berdasarkan Pasal 31E Undang-Undang Pajak Penghasilan (UU PPh), fasilitas perpajakan apa yang diberikan oleh negara kepada Wajib Pajak Badan dalam negeri yang memiliki omzet tahunan di bawah Rp 50 miliar?',
          options: [
            'Pembebasan pajak gratis selamanya tanpa perlu lapor SPT',
            'Mendapatkan fasilitas pengurangan tarif sebesar 50% dari tarif normal (dari 22% menjadi 11%) atas Penghasilan Kena Pajak yang menjadi bagian dari peredaran bruto hingga Rp 4.8 miliar',
            'Diberikan pinjaman modal tanpa bunga dari kantor pajak',
            'Seluruh gaji karyawan ditanggung oleh APBN'
          ],
          correctAnswerIndex: 1,
          explanation: 'Fasilitas Pasal 31E memberikan diskon tarif pajak badan 50% untuk mendukung pertumbuhan usaha kecil dan menengah di Indonesia.'
        }
      ]
    },
    {
      id: 'corp-4-2',
      prerequisiteId: 'corp-4-1',
      stepNumber: 'Langkah 4.2',
      stageTitle: 'TAHAP 4: Perpajakan Korporat & Optimalisasi Legal',
      label: 'PPN, Status PKP, & Mekanisme e-Faktur Coretax',
      domain: 'Pajak',
      summary: 'Pengukuhan Pengusaha Kena Pajak (PKP), mekanisme pemungutan PPN 11%/12%, serta manajemen pengkreditan Faktur Pajak Masukan vs Pajak Keluaran.',
      x: 990,
      y: 270,
      level: 1,
      microContent: {
        mentalModel: 'Value-Added Tax (VAT) Input-Output Credit Mechanism',
        analogy: 'Anda menjadi kasir titipan negara. Saat Anda menjual barang seharga Rp 100.000 + PPN 11% (Rp 11.000) ke pelanggan, uang Rp 11.000 itu bukan uang Anda (Pajak Keluaran). Namun saat memproduksi barang itu, Anda sudah membayar PPN Rp 6.000 ke pabrik bahan baku (Pajak Masukan). Ke kantor pajak, Anda hanya menyetorkan selisihnya: Rp 11.000 - Rp 6.000 = Rp 5.000.',
        academicInsight: 'Berdasarkan UU PPN jo. UU HPP, badan usaha dengan omzet melampaui Rp 4.8 miliar per tahun wajib dikukuhkan sebagai Pengusaha Kena Pajak (PKP). Pajak Masukan atas perolehan Barang/Jasa Kena Pajak dapat dikreditkan dengan Pajak Keluaran sepanjang berhubungan langsung dengan kegiatan usaha (3M: Mendapatkan, Menagih, Memelihara penghasilan) dan didukung Faktur Pajak elektronik (e-Faktur) yang valid.',
        crossDisciplinary: {
          connectionText: 'Kepatuhan Sistem Administrasi Pajak x Arus Kas Transaksi B2B',
          domains: ['Pajak', 'Data & Analitik'],
          insight: 'Menjadi PKP membuka peluang memenangkan tender korporat B2B dan instansi pemerintah yang mensyaratkan Faktur Pajak sah; namun menuntut disiplin rekonsiliasi PPN bulanan agar tidak terkena denda keterlambatan e-Faktur.',
        },
        caseStudy: {
          companyOrFigure: 'Denda Pajak Faktur Kadaluwarsa Rp 450 Juta (Jakarta, 2022)',
          story: 'Perusahaan distributor telat mengunggah (upload) Faktur Pajak Masukan ke sistem DJP melewati batas tanggal 15 bulan berikutnya. Akibatnya, sistem menolak faktur masukan tersebut dan perusahaan tidak bisa mengkreditkan PPN Rp 450 juta yang sudah dibayar ke supplier, terpaksa membayar PPN ganda ke kas negara.',
          takeaway: 'Disiplin mengunggah dan memverifikasi QR code Faktur Pajak Masukan secara real-time adalah perlindungan likuiditas kas operasional.'
        },
        actionableSteps: [
          'Jika omzet mendekati batas Rp 4.8 miliar, segera ajukan Pengukuhan PKP sebelum diterbitkan Surat Ketetapan Pajak jabatan oleh KPP.',
          'Pastikan Faktur Pajak Masukan diunggah dan disetujui (approval success) sebelum batas akhir tanggal 15 bulan berikutnya di aplikasi Coretax/e-Faktur.',
          'Gunakan rekening khusus penampungan PPN agar uang titipan negara tidak terpakai secara tidak sadar untuk belanja modal kerja.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Pengukuhan PKP Sukarela Sebelum Omzet Rp 4.8 Miliar',
        context: 'Omzet bisnis katering korporasi Anda baru mencapai Rp 1.5 miliar per tahun (belum wajib PKP). Calon klien baru (perusahaan multinasional minyak) menawarkan kontrak konsumsi Rp 2 miliar per tahun dengan syarat vendor wajib berstatus PKP dan menerbitkan e-Faktur PPN resmi.',
        dilemma: 'Apakah Anda mengajukan pengukuhan PKP secara sukarela?',
        choices: [
          {
            id: 'c1',
            text: 'Tolak tawaran karena takut ribet mengurus administrasi e-Faktur dan audit pembukuan pajak setiap bulan.',
            consequence: 'Klien multinasional beralih ke katering kompetitor dan Anda kehilangan peluang kontrak bernilai miliaran rupiah.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Menghindari status PKP karena enggan tertib administrasi membatasi pertumbuhan bisnis ke level korporasi elit.'
          },
          {
            id: 'c2',
            text: 'Segera ajukan permohonan PKP sukarela ke KPP Pratama, pasang sertifikat elektronik e-Faktur, dan menangkan kontrak tender korporat tersebut.',
            consequence: 'Kontrak Rp 2 miliar diraih, kredibilitas perseroan naik kelas, dan PPN atas belanja bahan baku supermarket kini bisa dikreditkan secara efisien.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Pengukuhan PKP secara strategis membuka akses pasar korporat bernilai tinggi dan memungkinkan pengkreditan pajak masukan.'
          },
          {
            id: 'c3',
            text: 'Terbitkan faktur pajak manual buatan sendiri menggunakan aplikasi pengolah kata Word.',
            consequence: 'Tindak pidana penerbitan faktur pajak ilegal tanpa transaksi riil dengan ancaman pidana penjara minimal 2 tahun.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Menerbitkan faktur pajak di luar sistem e-Faktur DJP resmi adalah tindak kejahatan pidana perpajakan berat.'
          },
          {
            id: 'c4',
            text: 'Minta klien mentransfer PPN ke rekening pribadi komisaris tanpa lapor SPT.',
            consequence: 'Penggelapan pajak yang terdeteksi rekonsiliasi data bank perbankan Coretax.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Mengantongi uang PPN tanpa penyetoran adalah tindak pidana penggelapan uang negara.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-4-2',
          question: 'Bagaimana prinsip dasar mekanisme pengkreditan Pajak Pertambahan Nilai (PPN) bagi sebuah perusahaan berstatus Pengusaha Kena Pajak (PKP)?',
          options: [
            'Perusahaan wajib membayar seluruh PPN tanpa boleh mengurangi biaya apapun',
            'Jumlah PPN yang wajib disetor ke kas negara adalah selisih antara Pajak Keluaran (PPN yang dipungut saat menjual) dikurangi dengan Pajak Masukan (PPN yang telah dibayar saat membeli barang modal)',
            'PPN hanya berlaku untuk barang yang diimpor dari luar angkasa',
            'Pajak masukan otomatis hangus setiap hari Jumat'
          ],
          correctAnswerIndex: 1,
          explanation: 'Mekanisme PPN bertumpu pada pengkreditan: Pajak Terutang = Pajak Keluaran dikurangi Pajak Masukan yang sah dan berkaitan dengan kegiatan operasional bisnis.'
        }
      ]
    },
    {
      id: 'corp-4-3',
      prerequisiteId: 'corp-4-2',
      stepNumber: 'Langkah 4.3',
      stageTitle: 'TAHAP 4: Perpajakan Korporat & Optimalisasi Legal',
      label: 'Tax Planning Legal vs Penghindaran Pajak Ilegal (Tax Evasion)',
      domain: 'Pajak',
      summary: 'Garis batas hukum: Pemanfaatan celah sah (Tax Avoidance / Deductible Expenses, Biaya Natura UU HPP, Depresiasi Dipercepat) vs Tindak Pidana Penggelapan (Tax Evasion & Faktur Fiktif).',
      x: 990,
      y: 420,
      level: 1,
      microContent: {
        mentalModel: 'Judge Learned Hand Doctrine on Tax Avoidance (Gregory v. Helvering)',
        analogy: 'Hakim Agung AS Learned Hand menyatakan: "Siapapun berhak mengatur urusan keuangannya sedemikian rupa sehingga pajaknya serendah mungkin; tidak ada kewajiban patriotik untuk membayar pajak lebih tinggi dari yang dituntut undang-undang." Tax Planning adalah memilih rute jalan tol resmi yang bebas tarif; Tax Evasion adalah menerobos palang tol tanpa membayar dan menabrak petugas.',
        academicInsight: 'Berdasarkan UU HPP dan PMK No. 66/2023, biaya natura dan kenikmatan bagi karyawan (seperti fasilitas laptop, makan bersama di tempat kerja, asuransi kesehatan, tempat tinggal di daerah tertentu) kini berstatus Deductible Expense (dapat dibiayakan untuk mengurangi laba kotor PPh Badan), sekaligus bukan objek pajak bagi pegawai sepanjang memenuhi batas threshold kelayakan. Ini berbeda total dengan Tax Evasion (Pasal 39 UU KUP) seperti menyembunyikan omzet penjualan atau membeli faktur pajak fiktif.',
        crossDisciplinary: {
          connectionText: 'Hukum Pidana Perpajakan x Strategi Penggajian Eksekutif',
          domains: ['Pajak', 'Hukum'],
          insight: 'Memberikan fasilitas kompensasi dalam bentuk natura resmi (PMK 66/2023) menekan PPh Badan perseroan secara legal tanpa membebani PPh 21 karyawan berlebihan.',
        },
        caseStudy: {
          companyOrFigure: 'Pembongkaran Skandal Faktur Fiktif Rp 98 Miliar (DJP Kemenkeu, 2021)',
          story: 'Direktur sebuah PT manufaktur tergoda tawaran calo pajak untuk membeli faktur pajak masukan fiktif senilai Rp 98 miliar guna mengklaim restitusi pajak. Sistem integrasi data DJP mendeteksi tidak adanya arus barang riil, pabrik fiktif, dan rekening nominee. Direktur divonis 3 tahun penjara dan denda 3x lipat nilai restitusi (Rp 294 miliar) yang menyita seluruh pabrik dan aset pribadinya.',
          takeaway: 'Jangan pernah menyentuh faktur pajak palsu; optimalisasi pajak korporat harus bertumpu pada dokumen operasional riil yang sah secara hukum.'
        },
        actionableSteps: [
          'Maksimalkan Biaya yang Boleh Dikurangkan (Deductible Expenses): konversi fasilitas kerja karyawan ke skema natura sesuai ketentuan PMK 66/2023.',
          'Gunakan metode Depresiasi Fiskal yang tepat: pilih Metode Saldo Menurun (Declining Balance) untuk aset mesin agar depresiasi di tahun awal lebih besar memotong laba kena pajak.',
          'Dokumentasikan Transfer Pricing Documentation (TP Doc / Local File & Master File) jika bertransaksi dengan entitas afiliasi istimewa.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Optimasi Pajak Akhir Tahun Buku: Tax Planning atau Gelapkan Kas?',
        context: 'Menjelang tutup tahun buku Desember, PT Anda mencatatkan laba kotor sebelum pajak Rp 2.5 miliar. Staf akuntansi menyarankan dua opsi: Opsi A (Beli faktur masukan palsu dari calo untuk memangkas pajak jadi Rp 0) vs Opsi B (Percepat peremajaan laptop & server kantor yang sudah usang, serta alokasikan bonus kinerja karyawan sebelum 31 Desember).',
        dilemma: 'Strategi mana yang disetujui Direktur Utama?',
        choices: [
          {
            id: 'c1',
            text: 'Pilih Opsi A membeli faktur fiktif untuk menghilangkan pajak sepenuhnya.',
            consequence: 'Tertangkap audit forensik digital Coretax DJP; perseroan didenda 300% dan Direksi dijatuhi hukuman kurungan penjara pidana perpajakan.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Membeli faktur pajak fiktif adalah tindak pidana kejahatan perpajakan serius yang berujung pada sanksi kurungan dan penyitaan aset.'
          },
          {
            id: 'c2',
            text: 'Pilih Opsi B: Lakukan belanja modal laptop/server yang dapat didepresiasikan, bayarkan bonus karyawan berkinerja (deductible expense), dan optimalkan fasilitas Pasal 31E UU PPh.',
            consequence: 'Infrastruktur kantor menjadi canggih berkecepatan tinggi, moral karyawan melambung tinggi, laba kena pajak terpangkas secara sah dan legal tanpa melanggar undang-undang.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Tax planning cerdas mengonversi beban kewajiban pajak menjadi investasi aset produktif dan kesejahteraan tim yang sah diakui fiskus.'
          },
          {
            id: 'c3',
            text: 'Pindahkan seluruh kas perusahaan ke rekening pribadi istri tanpa pencatatan pembukuan.',
            consequence: 'Ditetapkan sebagai penarikan dividen terselubung yang dikenakan sanksi bunga denda ganda.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Transfer kas perusahaan ke rekening pribadi tanpa dasar hukum dividen atau gaji adalah penyelewengan tata kelola perseroan.'
          },
          {
            id: 'c4',
            text: 'Bakar gedung kantor agar seluruh dokumen pembukuan hilang.',
            consequence: 'Tindak pidana perusakan dan penghilangan arsip perpajakan dengan pidana maksimal.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Tindakan kriminal perusakan bukti adalah pelanggaran hukum berat.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-4-3',
          question: 'Apa perbedaan mendasar antara Tax Avoidance (Perencanaan/Penghindaran Pajak Legal) dengan Tax Evasion (Penggelapan Pajak Ilegal)?',
          options: [
            'Tax Avoidance hanya boleh dilakukan oleh presiden, Tax Evasion untuk rakyat biasa',
            'Tax Avoidance memanfaatkan celah dan insentif sah yang diperbolehkan undang-undang perpajakan untuk meminimalkan beban pajak secara legal, sedangkan Tax Evasion menggunakan cara ilegal seperti memalsukan laporan keuangan, menyembunyikan omzet, atau membeli faktur pajak fiktif',
            'Keduanya adalah tindak pidana terlarang',
            'Tax Evasion diwajibkan oleh kementerian keuangan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Tax avoidance adalah hak wajib pajak mengatur urusan keuangannya sesuai aturan hukum, sedangkan tax evasion adalah perbuatan melanggar hukum pidana dengan memalsukan data riil.'
        }
      ]
    },

    // --------------------------------------------------------------------------
    // TAHAP 5: ARSITEKTUR KEKAYAAN KORPORAT (CORPORATE WEALTH ACCUMULATION)
    // --------------------------------------------------------------------------
    {
      id: 'corp-5-1',
      prerequisiteId: 'corp-4-3',
      stepNumber: 'Langkah 5.1',
      stageTitle: 'TAHAP 5: Arsitektur Kekayaan Korporat',
      label: 'Laba Ditahan (Retained Earnings) vs Penarikan Dividen',
      domain: 'Keuangan',
      summary: 'Mekanisme akumulasi modal: Mengapa orang terkaya dunia menahan laba di dalam neraca korporasi (Retained Earnings) bebas pajak dividen untuk melipatgandakan efek compounding.',
      x: 1260,
      y: 120,
      level: 1,
      microContent: {
        mentalModel: 'Corporate Compounding Vehicle & Deferred Dividend Taxation',
        analogy: 'Ketika Anda menarik uang keluar dari perusahaan sebagai dividen pribadi, uang itu harus melewati pintu gerbang pajak orang pribadi (pajak dividen 10% atau PPh 21 progresif hingga 35%). Sebaliknya, jika uang dibiarkan tetap di dalam neraca perusahaan sebagai Laba Ditahan (Retained Earnings), 100% modal bekerja utuh tanpa terpotong untuk membeli mesin baru, tanah gudang, atau saham anak perusahaan lain.',
        academicInsight: 'Berdasarkan Pasal 4 ayat (3) huruf f UU PPh jo. UU Cipta Kerja, dividen yang diinvestasikan kembali di wilayah NKRI dalam jangka waktu minimal 3 tahun dikecualikan dari objek pajak penghasilan (PPh Dividen 0%). Menahan laba di dalam korporasi memungkinkan efek compounding modal bergulir sebelum pajak pemegang saham perorangan dikenakan.',
        crossDisciplinary: {
          connectionText: 'Keuangan Korporat x Psikologi Kesabaran Alokasi Modal',
          domains: ['Keuangan', 'Pajak'],
          insight: 'Warren Buffett tidak pernah membagikan dividen tunai di Berkshire Hathaway selama lebih dari 55 tahun; ia menahan 100% laba untuk dialokasikan kembali ke investasi yang menghasilkan imbal hasil di atas rata-rata pasar.',
        },
        caseStudy: {
          companyOrFigure: 'Berkshire Hathaway Tanpa Pembagian Dividen Tunai',
          story: 'Sejak 1965, Warren Buffett menolak desakan membagikan laba tunai ke pemegang saham. Laba ditahan digunakan memborong GEICO, BNSF Railway, dan saham Apple. Hasilnya, nilai per lembar saham Berkshire melesat dari $19 menjadi lebih dari $600.000 per lembar tanpa tergerus pemotongan pajak dividen tahunan.',
          takeaway: 'Gunakan badan usaha korporasi sebagai wadah penimbun dan pengganda modal (compounding vehicle) paling efisien di dunia.'
        },
        actionableSteps: [
          'Tetapkan Dividend Payout Ratio yang disiplin: batasi penarikan dividen pribadi secukupnya untuk kebutuhan hidup.',
          'Re-investasikan dividen pribadi ke instrumen produktif di dalam negeri minimal 3 tahun untuk menikmati fasilitas bebas PPh dividen 0%.',
          'Alokasikan pos Laba Ditahan untuk riset teknologi dan akuisisi aset produktif jangka panjang perseroan.'
        ],
        difficulty: 'Menengah',
        readTime: '4 min'
      },
      decisionScenario: {
        title: 'Dilema Alokasi Surplus Laba Bersih Rp 5 Miliar Akhir Tahun',
        context: 'PT Anda mencatatkan laba bersih setelah pajak sebesar Rp 5 miliar. Kedua pemegang saham berdebat: Opsi A (Tarik seluruhnya sebagai dividen pribadi tunai Rp 2.5 miliar per orang) vs Opsi B (Tahan 80% laba di kas perusahaan untuk uang muka pembelian gedung gudang operasional baru).',
        dilemma: 'Keputusan RUPS mana yang paling memaksimalkan nilai kekayaan jangka panjang?',
        choices: [
          {
            id: 'c1',
            text: 'Tarik 100% laba menjadi dividen tunai pribadi dan belanjakan untuk mobil sport konsumtif.',
            consequence: 'Dikenakan pajak dividen perorangan, nilai mobil mengalami depresiasi 25% per tahun, dan perusahaan kekurangan modal kerja saat kompetitor ekspansi.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menguras kas perusahaan untuk konsumsi pribadi mematikan daya saing ekspansi dan memicu kebocoran pajak.'
          },
          {
            id: 'c2',
            text: 'Tarik dividen wajar 20% untuk kebutuhan likuiditas pribadi, dan tahan 80% (Rp 4 miliar) sebagai Retained Earnings untuk membeli gedung gudang yang mengeliminasi biaya sewa permanen.',
            consequence: 'Perusahaan memiliki aset tanah komersial yang mengalami apresiasi nilai, neraca modal menguat, bebas dari pajak dividen ganda, dan valuasi saham PT melonjak drastis.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Menahan laba untuk aset produktif memperkuat struktur modal dan mengakumulasi kekayaan ekuitas bebas pajak dividen.'
          },
          {
            id: 'c3',
            text: 'Bagi-bagikan uang kas ke orang yang tidak dikenal di jalanan.',
            consequence: 'Perusahaan kehilangan likuiditas modal kerja dan terancam gagal bayar tagihan operasional.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Mengabaikan tanggung jawab pengelolaan modal perseroan merugikan kelangsungan hidup entitas.'
          },
          {
            id: 'c4',
            text: 'Simpan uang tunai di brankas kantor tanpa dicatatkan di neraca akuntansi.',
            consequence: 'Penyembunyian aset yang melanggar aturan tata kelola akuntansi dan memicu audit pajak investigatif.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Menyimpan kas gelap di luar neraca resmi adalah pelanggaran kepatuhan hukum perpajakan dan perseroan.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-5-1',
          question: 'Berdasarkan Undang-Undang Harmonisasi Peraturan Perpajakan (UU HPP) dan UU Cipta Kerja di Indonesia, perlakuan perpajakan apa yang diberikan kepada dividen yang diterima oleh Wajib Pajak Orang Pribadi dalam negeri?',
          options: [
            'Wajib disita 100% oleh kementerian sosial',
            'Dikecualikan dari objek Pajak Penghasilan (bebas pajak PPh Dividen 0%) sepanjang dividen tersebut diinvestasikan kembali di wilayah Negara Kesatuan Republik Indonesia (NKRI) dalam jangka waktu minimal 3 tahun',
            'Dikenakan pajak penghasilan final 50%',
            'Dikenakan denda pidana kurungan'
          ],
          correctAnswerIndex: 1,
          explanation: 'Insentif bebas PPh dividen diberikan kepada perorangan jika dividen diinvestasikan kembali ke instrumen produktif di dalam negeri minimal selama 3 tahun.'
        }
      ]
    },
    {
      id: 'corp-5-2',
      prerequisiteId: 'corp-5-1',
      stepNumber: 'Langkah 5.2',
      stageTitle: 'TAHAP 5: Arsitektur Kekayaan Korporat',
      label: 'Struktur Holding Company & Isolasi Risiko Operasional',
      domain: 'Bisnis',
      summary: 'Arsitektur korporasi konglomerasi: Perusahaan Induk (Holding), Anak Perusahaan Operasional (Operating Companies), dividen antar-PT bebas pajak, dan pemisahan risiko liabilitas.',
      x: 1260,
      y: 270,
      level: 1,
      microContent: {
        mentalModel: 'Corporate Ring-Fencing & Intercompany Dividend Exemption (Pasal 4 ayat 3 huruf f UU PPh)',
        analogy: 'Lambung kapal selam yang dibagi menjadi beberapa kompartemen kedap air terpisah. Jika lambung ruang mesin nomor 3 bocor tertabrak karang (Anak Perusahaan A bangkrut atau digugat), pintu kedap air ditutup rapat. Ruang kabin penumpang dan kompartemen kemudi (Holding Company dan Anak Perusahaan B) tetap aman mengapung tanpa ikut tenggelam ke dasar samudera.',
        academicInsight: 'Berdasarkan Pasal 4 ayat (3) huruf f UU PPh, dividen yang diterima oleh Wajib Pajak Badan dalam negeri (PT Holding) dari penyertaan modal pada badan usaha lain yang didirikan di Indonesia (Anak Perusahaan) adalah Non-Objek Pajak (Bebas PPh 100% tanpa syarat kepemilikan minimal). Struktur ini memungkinkan laba dari PT A dialirkan ke PT Holding bebas pajak dan diinjeksikan kembali sebagai permodalan ke PT B.',
        crossDisciplinary: {
          connectionText: 'Struktur Hukum Korporat Multi-Entitas x Manajemen Risiko Utang',
          domains: ['Hukum', 'Keuangan'],
          insight: 'Pemisahan aset properti/HKI di anak perusahaan khusus (Property/IP HoldCo) dan operasional di anak perusahaan terpisah (OpCo) melindungi aset tanah pabrik agar tidak bisa disita kreditor jika operasional OpCo mengalami insolvensi dagang.',
        },
        caseStudy: {
          companyOrFigure: 'Restrukturisasi Google Menjadi Alphabet Inc (2015)',
          story: 'Google membentuk induk usaha Alphabet Inc. Bisnis inti pencarian dan iklan YouTube yang sangat menguntungkan diisolasi di PT Google, sementara proyek berisiko tinggi (mobil otonom Waymo, riset bioteknologi Calico) dijadikan anak perusahaan terpisah di bawah Alphabet. Kerugian di Waymo tidak menyeret neraca keuangan mesin pencari Google.',
          takeaway: 'Jangan campurkan bisnis mesin kas tunai yang aman dengan eksperimen proyek berisiko tinggi di dalam satu entitas PT yang sama.'
        },
        actionableSteps: [
          'Dirikan PT Holding (Perusahaan Induk) yang menguasai 99% saham di setiap anak perusahaan operasional (Operating Companies).',
          'Alirkan dividen laba dari anak perusahaan ke Holding bebas PPh 100% berdasarkan Pasal 4 ayat (3) huruf f UU PPh.',
          'Pisahkan kepemilikan Hak Kekayaan Intelektual (Paten/Merek) dan Properti Riil di entitas tersendiri, lalu sewakan ke anak perusahaan operasional.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Ekspansi Bisnis Berisiko Tinggi: Satu PT atau Bikin Anak Perusahaan?',
        context: 'Perusahaan F&B Anda (PT Rasa Makmur) memiliki 10 cabang restoran menguntungkan bernilai aset Rp 15 miliar. Anda ingin berekspansi meluncurkan startup aplikasi pesan-antar makanan digital yang membutuhkan bakar uang promosi dan memiliki risiko kegagalan tinggi.',
        dilemma: 'Bagaimana menstruktur kepemilikan bisnis baru ini?',
        choices: [
          {
            id: 'c1',
            text: 'Jalankan startup aplikasi tersebut di dalam PT Rasa Makmur yang sama dan campurkan seluruh utang pembakarannya.',
            consequence: 'Startup gagal dalam 18 bulan, tagihan utang server dan vendor software menuntut pailit dan menyita seluruh 10 gerai restoran Anda yang sebenarnya sangat menguntungkan.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Mencampurkan bisnis berisiko tinggi ke dalam entitas yang memegang aset produktif membahayakan kelangsungan seluruh bisnis inti.'
          },
          {
            id: 'c2',
            text: 'Bentuk struktur Holding Company: Dirikan PT Baru (PT Teknologi Mandiri) sebagai anak perusahaan yang terpisah secara legal untuk mengelola aplikasi digital, dengan permodalan terisolasi rapi.',
            consequence: 'Jika startup aplikasi gagal, kebangkrutan terisolasi hanya di PT Teknologi Mandiri tanpa bisa menyentuh aset gerai restoran di PT Rasa Makmur (Corporate Ring-Fencing berhasil).',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Pemisahan entitas anak perusahaan (ring-fencing) mengisolasi liabilitas hukum dan melindungi aset bisnis inti dari kegagalan proyek baru.'
          },
          {
            id: 'c3',
            text: 'Gunakan nama yayasan panti asuhan untuk mendirikan startup aplikasi tersebut.',
            consequence: 'Pelanggaran hukum perdata dan pidana tata kelola yayasan komersial.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Menyalahgunakan badan hukum yayasan untuk bisnis spekulatif adalah pelanggaran hukum berat.'
          },
          {
            id: 'c4',
            text: 'Tutup 10 restoran yang menguntungkan demi fokus 100% pada aplikasi yang belum teruji pasar.',
            consequence: 'Kehilangan mesin arus kas utama dan perusahaan kehabisan modal sebelum aplikasi selesai dibuat.',
            scoreBonus: 5,
            isOptimal: false,
            explanation: 'Mematikan sumber kas inti demi proyek spekulatif melanggar prinsip diversifikasi portofolio korporasi.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-5-2',
          question: 'Menurut Pasal 4 ayat (3) huruf f Undang-Undang Pajak Penghasilan (UU PPh), perlakuan perpajakan apa yang berlaku atas dividen yang diterima oleh sebuah perseroan terbatas (PT Holding) dari anak perusahaannya yang berbadan hukum Indonesia?',
          options: [
            'Dikenakan pajak penghasilan sebesar 50%',
            'Dikecualikan dari objek Pajak Penghasilan (Bebas PPh 0% tanpa dipotong pajak)',
            'Diwajibkan disetorkan seluruhnya ke kas dinas pariwisata daerah',
            'Dividen antar-PT dianggap sebagai tindak pidana pencucian uang'
          ],
          correctAnswerIndex: 1,
          explanation: 'Dividen antar-perusahaan berbadan hukum di Indonesia tidak dikenakan PPh (Non-Objek Pajak), memungkinkan perputaran modal internal di dalam grup holding secara efisien bebas friksi pajak.'
        }
      ]
    },
    {
      id: 'corp-5-3',
      prerequisiteId: 'corp-5-2',
      stepNumber: 'Langkah 5.3',
      stageTitle: 'TAHAP 5: Arsitektur Kekayaan Korporat',
      label: 'Proteksi Aset & Doktrin Piercing the Corporate Veil',
      domain: 'Hukum',
      summary: 'Batasan hukum perlindungan aset: Kapan tirai perseroan dapat ditembus pengadilan (Piercing the Corporate Veil), tata kelola rekening terpisah, dan benteng proteksi kekayaan pribadi pemilik.',
      x: 1260,
      y: 420,
      level: 1,
      microContent: {
        mentalModel: 'Piercing the Corporate Veil & Commingling of Funds Prohibition (Pasal 3 ayat 2 UU PT)',
        analogy: 'Tirai baja perseroan (Corporate Veil) adalah perisai pelindung yang membuat Anda kebal dari tuntutan utang perusahaan. Namun perisai baja ini akan mencair seketika jika Anda memperlakukan rekening bank PT seperti dompet pribadi Anda sendiri: menggunakan kas PT untuk belanja perhiasan istri atau membayar cicilan mobil pribadi tanpa melalui mekanisme dividen atau gaji resmi.',
        academicInsight: 'Berdasarkan Pasal 3 ayat (2) UU PT No. 40/2007, perlindungan tanggung jawab terbatas (Limited Liability) gugur dan pemegang saham bertanggung jawab penuh hingga seluruh harta pribadinya jika: (1) Persyaratan perseroan sebagai badan hukum belum/tidak terpenuhi, (2) Pemegang saham memanfaatkan perseroan dengan itikad buruk untuk kepentingan pribadi, (3) Terjadi percampuran harta pribadi dan harta perseroan (Commingling of Assets).',
        crossDisciplinary: {
          connectionText: 'Hukum Kepailitan Korporasi x Tata Kelola Akuntansi Forensik',
          domains: ['Hukum', 'Keuangan'],
          insight: 'Kurator kepailitan dan pengadilan niaga akan menembus tirai perseroan jika ditemukan bukti mutasi rekening bank perusahaan yang digunakan untuk keperluan konsumtif pribadi pemegang saham pengendali.',
        },
        caseStudy: {
          companyOrFigure: 'Vonis Tanggung Jawab Pribadi Pemegang Saham (Putusan MA No. 343 K/N/2016)',
          story: 'Sebuah PT properti dinyatakan pailit dan menunggak utang Rp 18 miliar ke ratusan pembeli unit apartemen. Hakim pengadilan niaga membuktikan adanya penarikan kas PT sebesar Rp 6 miliar ke rekening pribadi direktur/pemegang saham mayoritas tanpa dasar dividen yang sah. Hakim menjatuhkan vonis "Piercing the Corporate Veil": seluruh rumah pribadi, tanah, dan rekening bank pribadi pemegang saham disita kurator untuk melunasi utang pembeli.',
          takeaway: 'Disiplin pemisahan rekening bank dan pencatatan transaksi akuntansi adalah syarat mutlak agar perlindungan hukum PT tidak runtuh.'
        },
        actionableSteps: [
          'Haram mencampurkan rekening bank: jangan pernah membayar belanja konsumsi pribadi menggunakan kartu debit atau rekening PT.',
          'Gunakan mekanisme gaji resmi, tunjangan direksi, atau pembagian dividen RUPS yang sah saat mengambil kas keluar dari perseroan.',
          'Terapkan audit independen tahunan oleh Kantor Akuntan Publik (KAP) untuk membuktikan integritas pemisahan aset di hadapan hukum.'
        ],
        difficulty: 'Mahir',
        readTime: '5 min'
      },
      decisionScenario: {
        title: 'Dilema Penggunaan Kas Perusahaan untuk Keperluan Darurat Keluarga',
        context: 'Istri direktur utama membutuhkan uang tunai Rp 500 juta segera untuk pelunasan rumah pribadi keluarga. Kas operasional PT sedang memiliki saldo cair Rp 1.5 miliar.',
        dilemma: 'Bagaimana cara menarik dana tersebut secara sah tanpa merusak tirai perlindungan badan hukum PT?',
        choices: [
          {
            id: 'c1',
            text: 'Langsung transfer Rp 500 juta dari rekening koran PT ke rekening penjual rumah tanpa pembukuan atau dokumen apapun.',
            consequence: 'Terjadi percampuran harta (commingling of funds) yang menggugurkan limited liability; jika PT menghadapi sengketa perdata, kurator berhak menyita seluruh rumah pribadi Anda.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Percampuran dana pribadi dan perusahaan merobek tirai perseroan (piercing the corporate veil) dan menghilangkan perlindungan aset pribadi.'
          },
          {
            id: 'c2',
            text: 'Gelar RUPS pembagian dividen interim resmi yang sah atau buat Perjanjian Pinjaman Pemegang Saham (Shareholders Loan Agreement) bertingkat komersial dengan bunga wajar dan jadwal pelunasan tertulis di atas meterai.',
            consequence: 'Transaksi sah secara hukum perseroan dan pajak, tirai badan hukum PT terlindungi kokoh, dan aset pribadi tetap kebal dari risiko sengketa operasional bisnis.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Dokumentasi formal dividen atau perjanjian pinjaman direksi yang wajar mempertahankan integritas badan hukum perseroan.'
          },
          {
            id: 'c3',
            text: 'Palsukan kuitansi pembelian mesin pabrik seolah-olah bernilai Rp 500 juta.',
            consequence: 'Tindak pidana pemalsuan laporan keuangan dan penggelapan pajak dengan sanksi pidana penjara.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Membuat kuitansi belanja fiktif adalah tindak kejahatan pidana pemalsuan dokumen akuntansi.'
          },
          {
            id: 'c4',
            text: 'Biarkan rumah keluarga disita tanpa berbuat apapun.',
            consequence: 'Keluarga kehilangan tempat tinggal padahal sebenarnya perseroan memiliki dasar hukum yang sah untuk mencairkan dividen atau bonus.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Ketidaktahuan terhadap prosedur hukum penarikan kas perseroan yang sah merugikan kesejahteraan keluarga pendiri.'
          }
        ]
      },
      quiz: [
        {
          id: 'q-corp-5-3',
          question: 'Menurut Pasal 3 ayat (2) UU Perseroan Terbatas No. 40 Tahun 2007, doktrin "Piercing the Corporate Veil" (penembusan tirai perseroan) dapat terjadi dan membuat pemegang saham bertanggung jawab hingga seluruh harta pribadinya apabila:',
          options: [
            'Perusahaan memiliki logo kantor berwarna merah',
            'Terjadi percampuran harta pribadi pemegang saham dengan harta perseroan, atau perseroan dimanfaatkan dengan itikad buruk untuk kepentingan pribadi yang merugikan kreditor',
            'Perusahaan mempekerjakan karyawan dari luar negeri',
            'RUPS diadakan di restoran cepat saji'
          ],
          correctAnswerIndex: 1,
          explanation: 'Tirai perlindungan tanggung jawab terbatas perseroan akan gugur jika pemegang saham mencampuradukkan harta pribadi dengan kas perseroan (commingling of funds) atau bertindak dengan itikad buruk.'
        }
      ]
    }
  ],
  edges: [
    // Tahap 1
    { id: 'cwe1', from: 'corp-1-1', to: 'corp-1-2', label: 'Perizinan OSS', domains: ['Hukum', 'Hukum'] },
    { id: 'cwe2', from: 'corp-1-2', to: 'corp-1-3', label: 'Tata Kelola RUPS', domains: ['Hukum', 'Bisnis'] },
    // Tahap 1 -> Tahap 2
    { id: 'cwe3', from: 'corp-1-3', to: 'corp-2-1', label: 'Ekosistem Distribusi', domains: ['Hukum', 'Bisnis'] },
    // Tahap 2
    { id: 'cwe4', from: 'corp-2-1', to: 'corp-2-2', label: 'Kontrak PKS Teritori', domains: ['Bisnis', 'Hukum'] },
    { id: 'cwe5', from: 'corp-2-2', to: 'corp-2-3', label: 'Logistik & Modal Kerja', domains: ['Hukum', 'Keuangan'] },
    // Tahap 2 -> Tahap 3
    { id: 'cwe6', from: 'corp-2-3', to: 'corp-3-1', label: 'Pengadaan Proyek', domains: ['Keuangan', 'Hukum'] },
    // Tahap 3
    { id: 'cwe7', from: 'corp-3-1', to: 'corp-3-2', label: 'Kontrak SPK & Termin', domains: ['Hukum', 'Keuangan'] },
    { id: 'cwe8', from: 'corp-3-2', to: 'corp-3-3', label: 'Risiko & Subcon', domains: ['Hukum', 'Bisnis'] },
    // Tahap 3 -> Tahap 4
    { id: 'cwe9', from: 'corp-3-3', to: 'corp-4-1', label: 'Kepatuhan Pajak Badan', domains: ['Bisnis', 'Pajak'] },
    // Tahap 4
    { id: 'cwe10', from: 'corp-4-1', to: 'corp-4-2', label: 'e-Faktur PPN Masukan', domains: ['Pajak', 'Pajak'] },
    { id: 'cwe11', from: 'corp-4-2', to: 'corp-4-3', label: 'Tax Planning Legal', domains: ['Pajak', 'Hukum'] },
    // Tahap 4 -> Tahap 5
    { id: 'cwe12', from: 'corp-4-3', to: 'corp-5-1', label: 'Akumulasi Laba Ditahan', domains: ['Hukum', 'Keuangan'] },
    // Tahap 5
    { id: 'cwe13', from: 'corp-5-1', to: 'corp-5-2', label: 'Holding Company', domains: ['Keuangan', 'Bisnis'] },
    { id: 'cwe14', from: 'corp-5-2', to: 'corp-5-3', label: 'Proteksi Aset Pemilik', domains: ['Bisnis', 'Hukum'] },
  ]
};

