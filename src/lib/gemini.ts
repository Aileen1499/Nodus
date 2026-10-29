import { MindmapData, MindmapNode, MindmapEdge, DomainType } from '../types';
import { MOCK_MINDMAPS } from '../data/mockMindmaps';

const SYSTEM_PROMPT = `
Anda adalah NODUS AI Engine — arsitek sistem pengetahuan multi-disiplin berstandar dunia dalam Bisnis, Ekonomi, Keuangan, Psikologi Perilaku, dan Geopolitik.
Tugas Anda adalah membedah topik/pertanyaan pengguna ke dalam bentuk Knowledge Graph (Mindmap) interaktif berorientasi aksi eksekutif dengan struktur JSON murni.

KEMBALIKAN HANYA JSON VALID TANPA MARKDOWN BACKTICKS (JANGAN GUNAKAN \`\`\`json ATAU \`\`\`).
STRUKTUR JSON HARUS MENGIKUTI SCHEMA PERSIS SEPERTI INI:
{
  "id": "mindmap-unique-slug",
  "topic": "Judul Topik yang Dicari",
  "rootId": "node-root",
  "description": "Deskripsi sintetis topik dalam 1-2 kalimat tajam",
  "nodes": [
    {
      "id": "node-root",
      "label": "Judul Node Inti (Maks 4 kata)",
      "domain": "Bisnis" | "Ekonomi" | "Keuangan" | "Psikologi" | "Geopolitik",
      "summary": "Ringkasan tesis node ini (1-2 kalimat)",
      "x": 400,
      "y": 280,
      "level": 0,
      "microContent": {
        "analogy": "Analogi dunia nyata yang sederhana dan nampol, ditulis dalam gaya bahasa Indonesia lugas (di bawah 150 kata).",
        "crossDisciplinary": {
          "connectionText": "Nama Hubungan Lintas Disiplin (misal: 'Mikroekonomi x Psikologi Kognitif')",
          "domains": ["Ekonomi", "Psikologi"],
          "insight": "Penjelasan bagaimana node ini menghubungkan kedua disiplin tersebut."
        },
        "actionableSteps": [
          "Tindakan nyata 1 yang bisa dilakukan pengguna hari ini.",
          "Tindakan nyata 2 yang bisa dilakukan pengguna hari ini.",
          "Tindakan nyata 3 yang bisa dilakukan pengguna hari ini."
        ]
      },
      "decisionScenario": {
        "title": "Kasus Taktis Dunia Nyata",
        "context": "Latar belakang dilema bisnis/finansial yang realistis.",
        "dilemma": "Pertanyaan dilema tindakan yang harus diputuskan.",
        "choices": [
          {
            "id": "c1",
            "text": "Opsi tindakan A",
            "consequence": "Konsekuensi strategis dan dampaknya terhadap bisnis/finansial.",
            "scoreBonus": 15,
            "isOptimal": false,
            "explanation": "Mengapa pilihan ini kurang optimal."
          },
          {
            "id": "c2",
            "text": "Opsi tindakan B",
            "consequence": "Konsekuensi strategis yang menghasilkan pertumbuhan optimal dan keunggulan kompetitif.",
            "scoreBonus: 50,
            "isOptimal": true,
            "explanation": "Mengapa pilihan ini adalah langkah terbaik."
          }
        ]
      },
      "quiz": [
        {
          "id": "q1",
          "question": "Pertanyaan penalaran konseptual mendalam (bukan hafalan definisi mentah)?",
          "options": [
            "Pilihan jawaban A",
            "Pilihan jawaban B (Jawaban Benar)",
            "Pilihan jawaban C",
            "Pilihan jawaban D"
          ],
          "correctAnswerIndex": 1,
          "explanation": "Penjelasan logis mengapa jawaban tersebut benar dan prinsip dasarnya."
        }
      ]
    }
  ],
  "edges": [
    {
      "id": "e1",
      "from": "node-root",
      "to": "node-child-1",
      "label": "Keterangan Hubungan Kausal",
      "domains": ["Bisnis", "Ekonomi"]
    }
  ]
}

PANDUAN POSISI KOORDINAT KANVAS (x, y):
- Node Root: x: 400, y: 280
- Buat 4 hingga 5 cabang node (level 1) yang mengelilingi root:
  - Node 1 (Barat Laut): x: 180, y: 140
  - Node 2 (Timur Laut): x: 620, y: 140
  - Node 3 (Barat Daya): x: 200, y: 440
  - Node 4 (Tenggara): x: 600, y: 440
  - Node 5 (Opsional / Selatan): x: 400, y: 480
`;

export async function generateMindmapWithGemini(
  query: string,
  apiKey?: string,
  model: string = 'gemini-1.5-flash'
): Promise<MindmapData> {
  const trimmed = query.trim();

  // 1. Direct match with preset mock knowledge graphs
  for (const [presetKey, mockData] of Object.entries(MOCK_MINDMAPS)) {
    if (presetKey.toLowerCase() === trimmed.toLowerCase()) {
      return JSON.parse(JSON.stringify(mockData));
    }
  }

  // 2. Fuzzy match with presets
  for (const [presetKey, mockData] of Object.entries(MOCK_MINDMAPS)) {
    const keyLower = presetKey.toLowerCase();
    const queryLower = trimmed.toLowerCase();
    if (
      (queryLower.includes('elon') && keyLower.includes('elon')) ||
      (queryLower.includes('inflasi') && keyLower.includes('inflasi')) ||
      (queryLower.includes('f&b') && keyLower.includes('f&b')) ||
      (queryLower.includes('ekspor') && keyLower.includes('ekspor')) ||
      (queryLower.includes('geopolitik') && keyLower.includes('geopolitik'))
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }
  }

  // 3. If API key is provided, query Gemini API
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const cleanModel = model.replace(/^models\//, '');
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey.trim()}`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\nTOPIK PENGGUNA YANG HARUS DIBEDAH:\n"${trimmed}"`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 8192,
            responseMimeType: 'application/json',
          },
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.warn('Gemini API returned error status:', response.status, errorText);
        throw new Error(`API error ${response.status}: ${errorText}`);
      }

      const jsonResult = await response.json();
      const rawText = jsonResult.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawText) {
        throw new Error('Gemini API did not return text part');
      }

      // Sanitize JSON text
      let cleaned = rawText.trim();
      if (cleaned.startsWith('```json')) {
        cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (cleaned.startsWith('```')) {
        cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }

      const parsed: MindmapData = JSON.parse(cleaned);
      if (parsed && Array.isArray(parsed.nodes) && parsed.nodes.length > 0) {
        return normalizeMindmapData(parsed, trimmed);
      }
    } catch (apiError) {
      console.warn('Failed to call or parse Gemini API, falling back to smart dynamic generator:', apiError);
    }
  }

  // 4. Intelligent Dynamic Fallback Generator for any custom query
  return generateDynamicFallback(trimmed);
}

// Normalizer to ensure all node fields, coordinates, and types are safe
function normalizeMindmapData(data: MindmapData, originalQuery: string): MindmapData {
  const rootId = data.rootId || data.nodes[0]?.id || 'root-node';
  const nodes: MindmapNode[] = data.nodes.map((n, idx) => {
    const isRoot = n.id === rootId || idx === 0;
    return {
      id: n.id || `node-${idx}`,
      label: n.label || `Konsep ${idx + 1}`,
      domain: (n.domain as DomainType) || (idx % 2 === 0 ? 'Bisnis' : 'Ekonomi'),
      summary: n.summary || 'Analisis mendalam konsep ini.',
      x: typeof n.x === 'number' ? n.x : 200 + (idx * 150) % 500,
      y: typeof n.y === 'number' ? n.y : 150 + Math.floor(idx / 2) * 160,
      level: isRoot ? 0 : 1,
      microContent: {
        analogy: n.microContent?.analogy || 'Konsep ini bekerja seperti mesin pendorong efisiensi dalam bisnis nyata.',
        crossDisciplinary: n.microContent?.crossDisciplinary || {
          connectionText: 'Bisnis x Psikologi Perilaku',
          domains: ['Bisnis', 'Psikologi'],
          insight: 'Menghubungkan efisiensi sistem operasional dengan pengambilan keputusan manusia.',
        },
        actionableSteps: n.microContent?.actionableSteps?.length
          ? n.microContent.actionableSteps
          : [
              'Audit kesiapan infrastruktur Anda terkait topik ini.',
              'Implementasikan eksperimen skala kecil dalam 7 hari ke depan.',
              'Ukur dampak terhadap arus kas dan efisiensi waktu tim.',
            ],
      },
      decisionScenario: n.decisionScenario || {
        title: `Keputusan Strategis: ${n.label}`,
        context: 'Situasi menuntut eksekusi cepat di tengah persaingan pasar.',
        dilemma: 'Bagaimana memilih pendekatan alokasi sumber daya terbaik?',
        choices: [
          {
            id: 'c1',
            text: 'Pendekatan konvensional yang lambat tapi minim risiko reputasi.',
            consequence: 'Pesaing mengambil pangsa pasar lebih dulu.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Kurang gesit dalam merespons dinamika pasar modern.',
          },
          {
            id: 'c2',
            text: 'Pendekatan iteratif berbasis data dengan validasi mingguan.',
            consequence: 'Mencapai kecocokan pasar lebih cepat dengan modal terkontrol.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Iterasi cepat meminimalkan biaya kegagalan.',
          },
        ],
      },
      quiz: n.quiz?.length
        ? n.quiz
        : [
            {
              id: `q-${idx}-1`,
              question: `Apa prinsip paling fundamental yang mendasari keberhasilan ${n.label}?`,
              options: [
                'Mengandalkan intuisi semata tanpa metrik terukur',
                'Pemahaman mendalam terhadap struktur insentif dan keunggulan biaya',
                'Menunggu regulasi pemerintah sebelum berinovasi',
                'Menghindari segala bentuk investasi teknologi',
              ],
              correctAnswerIndex: 1,
              explanation: 'Pemahaman struktur insentif dan keunggulan biaya adalah fondasi penciptaan nilai jangka panjang.',
            },
          ],
    };
  });

  const edges: MindmapEdge[] = (data.edges || []).map((e, idx) => ({
    id: e.id || `edge-${idx}`,
    from: e.from,
    to: e.to,
    label: e.label || 'Koneksi Kausal',
    domains: e.domains || ['Bisnis', 'Ekonomi'],
  }));

  return {
    id: data.id || `mindmap-${Date.now()}`,
    topic: data.topic || originalQuery,
    rootId,
    description: data.description || `Sintesis multi-disiplin untuk topik ${originalQuery}.`,
    nodes,
    edges,
  };
}

// Generate rich, customized fallback data when user inputs a custom query offline
function generateDynamicFallback(query: string): MindmapData {
  const rootId = 'custom-root';
  const nodes: MindmapNode[] = [
    {
      id: rootId,
      label: query.length > 28 ? query.substring(0, 25) + '...' : query,
      domain: 'Bisnis',
      summary: `Arsitektur fundamental dan koneksi multi-disiplin seputar "${query}".`,
      x: 400,
      y: 280,
      level: 0,
      microContent: {
        analogy: `Memahami "${query}" bagaikan merakit mesin jam mekanis berputar. Di luar terlihat jarum jam berputar anggun, namun di dalam ada roda gerigi ekonomi yang memutar gir psikologi konsumen, pelumas arus kas keuangan, dan gravitasi geopolitik yang mengatur ruang geraknya.`,
        crossDisciplinary: {
          connectionText: 'Bisnis Strategis x Psikologi Keputusan',
          domains: ['Bisnis', 'Psikologi'],
          insight:
            'Kunci dari menguasai bidang ini bukan menghafal teori terisolasi, melainkan memahami bagaimana persepsi manusia menggerakkan alokasi modal dan efisiensi operasional.',
        },
        actionableSteps: [
          `Identifikasi 1 bottleneck terbesar dalam implementasi "${query}" di proyek/organisasi Anda.`,
          'Susun kerangka First Principles: bedah biaya dan nilai tambah produk ke elemen paling mendasar.',
          'Ukur feedback loop konsumen setiap 14 hari untuk memastikan arah adaptasi yang tepat.',
        ],
      },
      decisionScenario: {
        title: `Dilema Eksekusi: Penerapan "${query}"`,
        context: 'Anda memiliki sumber daya modal terbatas dan jendela waktu persaingan yang sempit.',
        dilemma: 'Bagaimana mengalokasikan fokus tim dalam 90 hari ke depan?',
        choices: [
          {
            id: 'c1',
            text: 'Membeli solusi instan dari vendor luar tanpa memahami mekanisme internalnya.',
            consequence: 'Biaya membengkak dan Anda memiliki ketergantungan kronis yang mudah ditiru pesaing.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Tanpa pemahaman kapabilitas internal, keunggulan bersaing Anda bersifat semu.',
          },
          {
            id: 'c2',
            text: 'Bangun kapabilitas inti in-house dengan siklus prototipe cepat berbasis First Principles.',
            consequence: 'Menguasai hak kekayaan intelektual, memangkas struktur biaya, dan menciptakan parit pertahanan ekonomi (moat).',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Kapabilitas in-house menghasilkan keunggulan biaya struktural yang berkelanjutan.',
          },
        ],
      },
      quiz: [
        {
          id: 'q-custom-1',
          question: `Dalam mengevaluasi keberlanjutan strategi terkait "${query}", metrik mana yang paling mencerminkan daya tahan jangka panjang?`,
          options: [
            'Jumlah like dan impresi media sosial di minggu pertama rilis',
            'Tingkat retensi pelanggan sejati dan margin arus kas bebas (Free Cash Flow) yang positif',
            'Pernyataan optimis dari pihak eksternal tanpa verifikasi neraca keuangan',
            'Besarnya diskon harga yang diberikan kepada pasar secara terus menerus',
          ],
          correctAnswerIndex: 1,
          explanation: 'Free Cash Flow dan retensi konsumen adalah indikator kebenaran paling objektif dalam ekonomi bisnis.',
        },
        {
          id: 'q-custom-2',
          question: 'Bagaimana pendekatan lintas ilmu (cross-disciplinary) meningkatkan kualitas pengambilan keputusan eksekutif?',
          options: [
            'Membuat proses keputusan menjadi 10 kali lebih lambat karena terlalu banyak teori',
            'Menghindarkan dari blind spots (titik buta) dengan menguji asumsi ekonomi terhadap hukum psikologi perilaku manusia',
            'Menghilangkan kebutuhan akan data kuantitatif lapangan',
            'Memastikan semua orang selalu setuju tanpa perdebatan ide',
          ],
          correctAnswerIndex: 1,
          explanation: 'Menggabungkan sudut pandang ekonomi dan psikologi mengungkap bias tersembunyi yang sering merusak analisis linier.',
        },
      ],
    },
    {
      id: 'custom-node-1',
      label: 'Efisiensi Biaya & Margin',
      domain: 'Ekonomi',
      summary: 'Mengontrol struktur biaya satuan (Unit Economics) agar menghasilkan margin kontribusi yang sehat.',
      x: 180,
      y: 150,
      level: 1,
      microContent: {
        analogy:
          'Membangun bisnis dengan unit economics negatif bagaikan menambal perahu bocor dengan menambah penumpang: semakin cepat perahu melaju, semakin cepat ia karam ke dasar laut.',
        crossDisciplinary: {
          connectionText: 'Mikroekonomi x Akuntansi Keuangan',
          domains: ['Ekonomi', 'Keuangan'],
          insight: 'Setiap produk yang terjual harus memberikan sumbangan kas nyata setelah memotong biaya variabel langsung.',
        },
        actionableSteps: [
          'Hitung Customer Acquisition Cost (CAC) vs Customer Lifetime Value (LTV).',
          'Pastikan rasio LTV/CAC Anda minimal di atas 3:1.',
          'Eliminasi pengeluaran operasional yang tidak berkorelasi dengan retensi pelanggan.',
        ],
      },
      decisionScenario: {
        title: 'Kasus: Pertumbuhan vs Profitabilitas Unit',
        context: 'Perusahaan Anda bisa membakar diskon demi meraih 100.000 pengguna baru dengan rugi Rp 5.000 per pesanan.',
        dilemma: 'Apakah melanjutkan subsidi demi metrik vanitas pengguna?',
        choices: [
          {
            id: 'c1',
            text: 'Terus bakar uang subsidi agar grafiknya terlihat naik di mata pemodal spekulatif.',
            consequence: 'Ketika kas habis dan subsidi dihentikan, 90% pengguna langsung kabur.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Pertumbuhan berbasis subsidi murni adalah ilusi retensi semu.',
          },
          {
            id: 'c2',
            text: 'Hentikan subsidi, fokus memperbaiki kelezatan/keunggulan produk sampai pelanggan rela membayar harga penuh.',
            consequence: 'Basis pengguna berkualitas bertahan, unit economics berubah positif, dan bisnis berdiri di atas kaki sendiri.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Profitabilitas unit adalah hukum gravitasi ekonomi yang tidak bisa dihindari.',
          },
        ],
      },
      quiz: [
        {
          id: 'q-custom-node1-1',
          question: 'Apa arti dari rasio LTV / CAC sebesar 3:1 dalam kesehatan bisnis?',
          options: [
            'Biaya mengakuisisi pelanggan 3 kali lebih besar dari pendapatan yang dihasilkan',
            'Nilai seumur hidup yang dihasilkan pelanggan adalah 3 kali lipat dari biaya yang dikeluarkan untuk mendapatkannya',
            'Bisnis mengalami kerugian operasional 33% setiap bulan',
            'Pajak perusahaan harus dibayar 3 kali dalam satu tahun',
          ],
          correctAnswerIndex: 1,
          explanation: 'Rasio 3:1 adalah benchmark emas bisnis sehat: modal pemasaran menghasilkan 3x nilai kembali.',
        },
      ],
    },
    {
      id: 'custom-node-2',
      label: 'Psikologi Dorongan Perilaku',
      domain: 'Psikologi',
      summary: 'Mendesain arsitektur pilihan (Nudge) yang menyelaraskan tindakan pengguna dengan nilai intrinsik produk.',
      x: 620,
      y: 150,
      level: 1,
      microContent: {
        analogy:
          'Menginstruksikan orang lewat ceramah panjang bagaikan mendorong air ke atas bukit. Mendesain Nudge bagaikan menggali parit kecil di lereng bukit: air mengalir ke tempat yang Anda tuju secara alami tanpa paksaan.',
        crossDisciplinary: {
          connectionText: 'Psikologi Kognitif x Konversi Bisnis',
          domains: ['Psikologi', 'Bisnis'],
          insight:
            'Mengurangi friksi kognitif satu langkah pada alur checkout dapat melipatgandakan tingkat konversi transaksi tanpa menambah biaya iklan.',
        },
        actionableSteps: [
          'Kurangi jumlah kolom formulir yang harus diisi pelanggan di situs Anda.',
          'Gunakan opsi "Pilihan Default" yang paling bermanfaat bagi pelanggan.',
          'Berikan kejelasan feedback instan pada setiap aksi yang dilakukan pengguna.',
        ],
      },
      decisionScenario: {
        title: 'Kasus: Desain Halaman Langganan',
        context: 'Pengguna ragu mencoba paket layanan tahunan Anda karena komitmen tinggi.',
        dilemma: 'Bagaimana merancang opsi agar pengguna merasa nyaman dan aman?',
        choices: [
          {
            id: 'c1',
            text: 'Kunci pengguna dengan kontrak 2 tahun dengan penalti pembatalan yang disembunyikan dalam syarat ketentuan kecil.',
            consequence: 'Menimbulkan kemarahan, tuntutan hukum konsumen, dan rating reputasi hancur.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Dark pattern menciptakan kebencian konsumen dan merusak nilai jangka panjang.',
          },
          {
            id: 'c2',
            text: 'Tawarkan uji coba 14 hari bebas risiko dengan garansi uang kembali 100% tanpa syarat rumit.',
            consequence: 'Menghilangkan rasa takut gagal (risk reversal), angka pendaftaran naik 250%, dan kepuasan pelanggan melonjak.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Membalikkan risiko dari pundak pembeli ke penjual adalah katalis konversi paling etis.',
          },
        ],
      },
      quiz: [
        {
          id: 'q-custom-node2-1',
          question: 'Prinsip "Risk Reversal" dalam penawaran bisnis bekerja dengan cara:',
          options: [
            'Memindahkan seluruh risiko ketidakpastian dari pembeli ke pundak penjual melalui garansi kepuasan',
            'Menghilangkan garansi agar pembeli menanggung seluruh risiko kerusakan',
            'Menaikkan harga produk 5 kali lipat untuk menutupi risiko kerugian',
            'Memaksa pelanggan menandatangani surat bebas tuntutan',
          ],
          correctAnswerIndex: 0,
          explanation: 'Ketika konsumen merasa tidak punya risiko rugi, hambatan psikologis untuk mencoba produk langsung runtuh.',
        },
      ],
    },
    {
      id: 'custom-node-3',
      label: 'Alokasi Modal & Pertahanan',
      domain: 'Keuangan',
      summary: 'Menjaga bantalan likuiditas kas agar tetap hidup melewati siklus krisis dan memanfaatkan peluang murah.',
      x: 220,
      y: 430,
      level: 1,
      microContent: {
        analogy:
          'Kas cair di masa damai terasa seperti ban serep mobil yang memakan tempat di bagasi. Namun saat ban utama meletus di tengah jalan tol malam hari yang sepi, ban serep itu adalah penyelamat nyawa Anda.',
        crossDisciplinary: {
          connectionText: 'Keuangan Korporat x Siklus Makroekonomi',
          domains: ['Keuangan', 'Ekonomi'],
          insight:
            'Di masa krisis kredit, kas adalah raja; bisnis yang memiliki kas melimpah dapat membeli aset kompetitor yang tertekan dengan harga sepersen dari nilai wajarnya.',
        },
        actionableSteps: [
          'Pertahankan dana operasional darurat minimal 6 hingga 12 bulan di instrumen likuid.',
          'Hindari leverage utang jangka pendek berbunga tinggi untuk mendanai aset jangka panjang.',
          'Buat skenario stres-test keuangan: apa yang terjadi jika omzet turun 50% selama 6 bulan?',
        ],
      },
      decisionScenario: {
        title: 'Kasus: Penawaran Utang Murah Saat Ekonomi Panas',
        context: 'Lembaga keuangan menawarkan kredit ekspansi Rp 2 Miliar dengan jaminan seluruh aset usaha.',
        dilemma: 'Apakah mengambil pinjaman maksimal untuk membeli gedung kantor megah?',
        choices: [
          {
            id: 'c1',
            text: 'Ambil pinjaman maksimal dan bangun gedung mewah demi gengsi prestise.',
            consequence: 'Beban cicilan bulanan mencekik arus kas saat suku bunga naik, aset terancam disita bank.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Menggunakan utang untuk aset non-produktif memperbesar kerapuhan finansial.',
          },
          {
            id: 'c2',
            text: 'Tolak utang berlebih; pinjam hanya seperlunya untuk peralatan yang langsung melipatgandakan kapasitas produksi.',
            consequence: 'Kapasitas produksi naik, margin aman, dan neraca keuangan tetap kebal dari gejolak suku bunga.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Utang produktif yang terukur melindungi kelangsungan hidup jangka panjang.',
          },
        ],
      },
      quiz: [
        {
          id: 'q-custom-node3-1',
          question: 'Mengapa sebuah perusahaan yang mencatat "Laba Bersih di Laporan Laba Rugi" masih bisa bangkrut dalam hitungan minggu?',
          options: [
            'Karena laba di laporan akuntansi tidak sama dengan ketersediaan Kas Riil (Arus Kas Likuid) untuk membayar gaji dan kewajiban jatuh tempo',
            'Karena kantor pajak menyita seluruh perabotan kantor secara mendadak',
            'Karena karyawan menolak menerima bonus akhir tahun',
            'Karena harga saham di bursa turun 1%',
          ],
          correctAnswerIndex: 0,
          explanation: 'Laba adalah opini akuntansi, tetapi Kas adalah fakta riil. Kegagalan likuiditas kas adalah penyebab langsung kematian bisnis.',
        },
      ],
    },
    {
      id: 'custom-node-4',
      label: 'Konteks Regulasi & Geopolitik',
      domain: 'Geopolitik',
      summary: 'Mengantisipasi perubahan kebijakan bea, subsidi, dan rantai pasok antar-wilayah.',
      x: 600,
      y: 430,
      level: 1,
      microContent: {
        analogy:
          'Seorang nakhoda kapal layar ulung tidak bertarung melawan arah tiupan badai; ia mengatur sudut layar kapalnya untuk memanfaatkan hembusan angin badai meluncur lebih cepat ke tujuan.',
        crossDisciplinary: {
          connectionText: 'Geopolitik Regulasi x Strategi Pasar Global',
          domains: ['Geopolitik', 'Bisnis'],
          insight:
            'Perubahan regulasi lokal dan kebijakan tarif internasional selalu menciptakan pemenang baru yang bergerak cepat beradaptasi sebelum pesaing menyadarinya.',
        },
        actionableSteps: [
          'Pelajari arah undang-undang dan kebijakan subsidi nasional di industri Anda untuk 5 tahun ke depan.',
          'Diversifikasi sumber pemasok agar tidak tergantung pada satu negara yang berisiko konflik.',
          'Bangun hubungan yang patuh hukum dan transparan dengan regulator terkait.',
        ],
      },
      decisionScenario: {
        title: 'Kasus: Penerapan Regulasi Lingkungan Baru',
        context: 'Pemerintah mengeluarkan batas emisi dan kewajiban daur ulang baru yang ketat.',
        dilemma: 'Pesaing mencoba menyuap inspektur atau mengabaikan aturan.',
        choices: [
          {
            id: 'c1',
            text: 'Abaikan aturan dan berharap tidak tertangkap razia pemerintah.',
            consequence: 'Pabrik disegel paksa, kena denda miliaran rupiah, dan reputasi publik hancur.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Bermain abu-abu dalam regulasi adalah bom waktu yang pasti meledak.',
          },
          {
            id: 'c2',
            text: 'Jadikan kepatuhan ramah lingkungan sebagai keunggulan diferensiasi branding hijau di mata konsumen generasi muda.',
            consequence: 'Mendapat sertifikasi resmi pemerintah, keringanan pajak hijau, dan loyalitas konsumen premium.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Mengubah kewajiban regulasi menjadi senjata pemasaran menciptakan parit pertahanan etis.',
          },
        ],
      },
      quiz: [
        {
          id: 'q-custom-node4-1',
          question: 'Bagaimana perusahaan visioner menyikapi perubahan regulasi pemerintah yang semakin ketat?',
          options: [
            'Mengeluh terus menerus dan memindahkan aset ke rekening luar negeri ilegal',
            'Mengantisipasi tren kepatuhan lebih awal dan menjadikannya standar keunggulan reputasi dibanding pesaing lamban',
            'Menutup bisnis dan memecat seluruh staf seketika',
            'Meniru pelanggaran yang dilakukan pelaku bisnis ilegal',
          ],
          correctAnswerIndex: 1,
          explanation: 'Pelopor kepatuhan (early compliance) memenangkan kepercayaan pasar dan membentuk standar industri baru.',
        },
      ],
    },
  ];

  const edges: MindmapEdge[] = [
    { id: 'ce1', from: rootId, to: 'custom-node-1', label: 'Fondasi Efisiensi', domains: ['Bisnis', 'Ekonomi'] },
    { id: 'ce2', from: rootId, to: 'custom-node-2', label: 'Arsitektur Perilaku', domains: ['Bisnis', 'Psikologi'] },
    { id: 'ce3', from: rootId, to: 'custom-node-3', label: 'Daya Tahan Likuiditas', domains: ['Bisnis', 'Keuangan'] },
    { id: 'ce4', from: rootId, to: 'custom-node-4', label: 'Konteks Lingkungan & Aturan', domains: ['Bisnis', 'Geopolitik'] },
    { id: 'ce5', from: 'custom-node-1', to: 'custom-node-3', label: 'Margin Menghasilkan Kas', domains: ['Ekonomi', 'Keuangan'] },
    { id: 'ce6', from: 'custom-node-2', to: 'custom-node-4', label: 'Norma Sosial & Kebijakan', domains: ['Psikologi', 'Geopolitik'] },
  ];

  return {
    id: `custom-mindmap-${Date.now()}`,
    topic: query,
    rootId,
    description: `Analisis sistematis multi-disiplin untuk mengakselerasi pemahaman mendalam tentang "${query}".`,
    nodes,
    edges,
  };
}

