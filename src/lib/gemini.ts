import { MindmapData, MindmapNode, MindmapEdge, DomainType, QuizQuestion } from '../types';
import { MOCK_MINDMAPS } from '../data/mockMindmaps';

export interface PromptNodeSchema {
  id?: string;
  title?: string;
  label?: string;
  domain?: DomainType;
  analogy_core_idea?: string;
  cross_discipline_insight?: string;
  practical_application?: string[] | string;
  quiz?: Array<{
    question: string;
    options: string[];
    correct_index: number;
    explanation: string;
  }>;
}

export interface PromptResponseSchema {
  topic: string;
  nodes: PromptNodeSchema[];
}

const SYSTEM_PROMPT = `
Anda adalah NODUS AI Engine — arsitek sistem pengetahuan multi-disiplin berstandar eksekutif global.
Tugas Anda adalah membedah topik/pertanyaan pengguna ke dalam bentuk Knowledge Graph berorientasi aksi dengan struktur JSON murni.

KEMBALIKAN HANYA JSON VALID TANPA MARKDOWN BACKTICKS (JANGAN GUNAKAN \`\`\`json ATAU \`\`\`).
STRUKTUR JSON HARUS MENGIKUTI SCHEMA PERSIS SEPERTI INI:
{
  "topic": "Judul Topik yang Dicari",
  "nodes": [
    {
      "id": "node-root",
      "title": "Judul Cabang (Maks 4 kata)",
      "analogy_core_idea": "Analogi sederhana dunia nyata (max 150 kata).",
      "cross_discipline_insight": "Hubungan eksplisit lintas ilmu (misal: Ekonomi ke Psikologi/Geopolitik).",
      "practical_application": "3 langkah tindakan nyata.",
      "quiz": [
        {
          "question": "Pertanyaan studi kasus penalaran mendalam.",
          "options": ["Pilihan A", "Pilihan B (Benar)", "Pilihan C", "Pilihan D"],
          "correct_index": 1,
          "explanation": "Alasan logis jawaban benar dan prinsip dasarnya."
        }
      ]
    }
  ]
}
`;

export async function generateMindmapWithGemini(
  query: string,
  userApiKey?: string,
  model: string = 'gemini-1.5-flash'
): Promise<MindmapData> {
  const trimmed = query.trim();

  // 1. Direct match with preset mock knowledge graphs
  for (const [presetKey, mockData] of Object.entries(MOCK_MINDMAPS)) {
    if (presetKey.toLowerCase() === trimmed.toLowerCase()) {
      return JSON.parse(JSON.stringify(mockData));
    }
  }

  // 2. Keyword match for curriculum tracks
  const qLower = trimmed.toLowerCase();
  for (const [presetKey, mockData] of Object.entries(MOCK_MINDMAPS)) {
    const kLower = presetKey.toLowerCase();
    
    // Billionaire / Elon Musk / Warren Buffett / Bezos track
    if (
      (qLower.includes('elon') || qLower.includes('musk') || qLower.includes('buffett') || qLower.includes('miliarder') || qLower.includes('bezos') || qLower.includes('kaya')) &&
      kLower.includes('miliarder')
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }

    // Stocks / DCF / Trading / Inflation / Forex track
    if (
      (qLower.includes('saham') || qLower.includes('inflasi') || qLower.includes('trading') || qLower.includes('dcf') || qLower.includes('dxy') || qLower.includes('forex') || qLower.includes('suku bunga')) &&
      kLower.includes('saham')
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }

    // Export / Import / Geopolitics / Customs / Chokepoint track
    if (
      (qLower.includes('ekspor') || qLower.includes('impor') || qLower.includes('geopolitik') || qLower.includes('pabean') || qLower.includes('hs code') || qLower.includes('incoterm') || qLower.includes('chokepoint') || qLower.includes('malaka')) &&
      kLower.includes('ekspor')
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }

    // Negotiation / Communication / Speaking / Minto track
    if (
      (qLower.includes('negosiasi') || qLower.includes('bicara') || qLower.includes('komunikasi') || qLower.includes('pitch') || qLower.includes('minto') || qLower.includes('chris voss') || qLower.includes('speaking') || qLower.includes('artikulasi')) &&
      kLower.includes('negosiasi')
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }

    // Financial Modeling / Excel / Data / SQL track
    if (
      (qLower.includes('excel') || qLower.includes('modeling') || qLower.includes('sql') || qLower.includes('kohort') || qLower.includes('data') || qLower.includes('ltv') || qLower.includes('cac') || qLower.includes('analisis data')) &&
      kLower.includes('excel')
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }

    // Law / Tax / Contract / Vesting / HKI track
    if (
      (qLower.includes('hukum') || qLower.includes('pajak') || qLower.includes('kontrak') || qLower.includes('vesting') || qLower.includes('sha') || qLower.includes('pt') || qLower.includes('paten') || qLower.includes('hki')) &&
      kLower.includes('hukum')
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }

    // F&B / Decoy / Marketing / Consumer psychology track
    if (
      (qLower.includes('f&b') || qLower.includes('kuliner') || qLower.includes('decoy') || qLower.includes('marketing') || qLower.includes('restoran')) &&
      kLower.includes('psikologi marketing')
    ) {
      return JSON.parse(JSON.stringify(mockData));
    }
  }

  // 3. Try serverless backend route `/api/generate-node`
  try {
    const apiRouteRes = await fetch('/api/generate-node', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic: trimmed,
        apiKey: userApiKey,
        model,
      }),
    });

    if (apiRouteRes.ok) {
      const jsonOutput = await apiRouteRes.json();
      if (jsonOutput && jsonOutput.nodes && jsonOutput.nodes.length > 0) {
        return adaptPromptResponseToMindmap(jsonOutput, trimmed);
      }
    }
  } catch {
    // API route not reachable in local dev or network offline; proceed to direct client call
  }

  // 4. Direct Client-side Gemini API call if key is available
  const apiKey = (
    userApiKey ||
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) ||
    ''
  ).trim();

  if (apiKey && apiKey.length > 10) {
    try {
      const cleanModel = model.replace(/^models\//, '');
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey}`;

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
                  text: `${SYSTEM_PROMPT}\n\nTOPIK EKSEKUTIF PENGGUNA YANG HARUS DIBEDAH:\n"${trimmed}"`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 8192,
            responseMimeType: 'application/json',
          },
        }),
      });

      if (response.ok) {
        const jsonResult = await response.json();
        const rawText = jsonResult.candidates?.[0]?.content?.parts?.[0]?.text;

        if (rawText) {
          let cleaned = rawText.trim();
          if (cleaned.startsWith('```json')) {
            cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
          } else if (cleaned.startsWith('```')) {
            cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
          }

          const parsed = JSON.parse(cleaned);
          if (parsed && Array.isArray(parsed.nodes) && parsed.nodes.length > 0) {
            return adaptPromptResponseToMindmap(parsed, trimmed);
          }
        }
      }
    } catch (apiError) {
      console.warn('Direct Gemini call failed, falling back to smart dynamic generator:', apiError);
    }
  }

  // 5. Intelligent Dynamic Fallback Generator for any custom query
  return generateDynamicFallback(trimmed);
}

/**
 * Adapt the required backend schema into full MindmapData canvas format
 */
function adaptPromptResponseToMindmap(data: any, originalQuery: string): MindmapData {
  const rootId = 'node-root';
  const nodesRaw: any[] = data.nodes || [];

  const domainsList: DomainType[] = ['Bisnis', 'Keuangan', 'Ekonomi', 'Psikologi', 'Geopolitik', 'Komunikasi', 'Hukum'];

  const nodes: MindmapNode[] = nodesRaw.map((n, idx) => {
    const isRoot = idx === 0;
    const label = n.title || n.label || `Cabang ${idx + 1}`;
    const domain: DomainType = n.domain || domainsList[idx % domainsList.length];

    let actionSteps: string[] = [];
    if (Array.isArray(n.practical_application)) {
      actionSteps = n.practical_application;
    } else if (typeof n.practical_application === 'string') {
      actionSteps = n.practical_application
        .split('\n')
        .map((s: string) => s.replace(/^\d+[\.\)]\s*/, '').trim())
        .filter((s: string) => s.length > 0);
    }
    if (actionSteps.length === 0) {
      actionSteps = [
        'Audit kesiapan infrastruktur dan alokasi modal Anda.',
        'Implementasikan eksperimen taktis skala kecil dalam 7 hari.',
        'Ukur dampak terhadap efisiensi dan mitigasi risiko.',
      ];
    }

    const quizzes: QuizQuestion[] = (n.quiz || []).map((q: any, qIdx: number) => ({
      id: `q-${idx}-${qIdx}`,
      question: q.question || 'Pertanyaan studi kasus penalaran:',
      options: q.options || ['Opsi A', 'Opsi B', 'Opsi C', 'Opsi D'],
      correctAnswerIndex: typeof q.correct_index === 'number' ? q.correct_index : (q.correctAnswerIndex ?? 0),
      explanation: q.explanation || 'Alasan logis jawaban benar dan prinsip dasarnya.',
    }));

    if (quizzes.length === 0) {
      quizzes.push({
        id: `q-${idx}-1`,
        question: `Apa prinsip paling fundamental yang mendasari keberhasilan ${label}?`,
        options: [
          'Mengandalkan intuisi semata tanpa metrik terukur',
          'Pemahaman mendalam terhadap struktur insentif, parit pertahanan, dan alokasi modal efisien',
          'Menunggu regulasi pemerintah sebelum berinovasi',
          'Menghindari segala bentuk investasi teknologi',
        ],
        correctAnswerIndex: 1,
        explanation: 'Pemahaman struktur insentif dan keunggulan biaya adalah fondasi penciptaan nilai jangka panjang.',
      });
    }

    // Positions around canvas
    let x = 400;
    let y = 280;
    if (idx === 1) { x = 180; y = 130; }
    else if (idx === 2) { x = 620; y = 130; }
    else if (idx === 3) { x = 180; y = 430; }
    else if (idx === 4) { x = 620; y = 430; }
    else if (idx > 4) { x = 200 + (idx * 140) % 520; y = 150 + Math.floor(idx / 2) * 160; }

    return {
      id: isRoot ? rootId : (n.id || `node-${idx}`),
      label,
      domain,
      summary: n.analogy_core_idea?.substring(0, 100) || n.summary || `Analisis mendalam konsep ${label}.`,
      x,
      y,
      level: isRoot ? 0 : 1,
      microContent: {
        analogy: n.analogy_core_idea || 'Konsep ini bekerja seperti mesin tuas pengganda nilai dalam eksekusi bisnis.',
        crossDisciplinary: {
          connectionText: 'Korelasi Lintas Ilmu',
          domains: [domain, 'Psikologi'],
          insight: n.cross_discipline_insight || 'Menghubungkan arsitektur insentif rasional dengan dinamika perilaku manusia di pasar.',
        },
        actionableSteps: actionSteps.slice(0, 3),
      },
      decisionScenario: {
        title: `Dilema Taktis: ${label}`,
        context: 'Situasi menuntut eksekusi cepat di tengah persaingan pasar.',
        dilemma: 'Bagaimana memilih alokasi sumber daya terbaik dengan risiko terkontrol?',
        choices: [
          {
            id: 'c1',
            text: 'Pendekatan konvensional yang mengikuti kebiasaan lama pasar.',
            consequence: 'Pesaing mendominasi ceruk pasar lebih dulu dan margin tergerus.',
            scoreBonus: 15,
            isOptimal: false,
            explanation: 'Kurang memiliki keunggulan parit pertahanan dan leverage sistemik.',
          },
          {
            id: 'c2',
            text: 'Pendekatan strategis berbasis data dengan validasi First Principles.',
            consequence: 'Menciptakan parit pertahanan ekonomi (moat) dan efisiensi biaya struktural.',
            scoreBonus: 50,
            isOptimal: true,
            explanation: 'Pilihan optimal yang memaksimalkan pengembalian atas risiko terhitung.',
          },
        ],
      },
      quiz: quizzes,
    };
  });

  const edges: MindmapEdge[] = [];
  for (let i = 1; i < nodes.length; i++) {
    edges.push({
      id: `edge-${i}`,
      from: rootId,
      to: nodes[i].id,
      label: 'Kausalitas Sistemik',
      domains: [nodes[0].domain, nodes[i].domain],
    });
  }

  return {
    id: `mindmap-${Date.now()}`,
    topic: data.topic || originalQuery,
    rootId,
    description: `Sintesis multi-disiplin berstandar eksekutif untuk topik ${originalQuery}.`,
    nodes,
    edges,
  };
}

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
        analogy: `Memahami "${query}" bagaikan merakit mesin jet berkecepatan tinggi. Di luar terlihat mulus meluncur, namun di dalam ada roda gerigi ekonomi makro, pelumas arus kas keuangan, hukum regulasi yang membatasi jalurnya, dan navigasi psikologi yang menentukan arahnya.`,
        crossDisciplinary: {
          connectionText: 'Bisnis Strategis x Psikologi Keputusan',
          domains: ['Bisnis', 'Psikologi'],
          insight:
            'Kunci dari menguasai bidang ini bukan menghafal teori terisolasi, melainkan memahami bagaimana persepsi manusia menggerakkan alokasi modal dan efisiensi operasional.',
        },
        actionableSteps: [
          `Identifikasi 1 bottleneck terbesar dalam penerapan "${query}" di proyek/organisasi Anda.`,
          'Susun kerangka First Principles: bedah biaya dan nilai tambah produk ke elemen paling mendasar.',
          'Ukur feedback loop data setiap 14 hari untuk memastikan arah adaptasi yang tepat.',
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
      ],
    },
    {
      id: 'custom-node-1',
      label: 'Efisiensi Biaya & Margin',
      domain: 'Ekonomi',
      summary: 'Mengontrol struktur biaya satuan (Unit Economics) agar menghasilkan margin kontribusi yang sehat.',
      x: 180,
      y: 130,
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
        context: 'Perusahaan Anda bisa membakar diskon demi meraih pengguna baru dengan rugi per transaksi.',
        dilemma: 'Apakah melanjutkan subsidi demi metrik vanitas pengguna?',
        choices: [
          {
            id: 'c1',
            text: 'Terus bakar uang subsidi agar grafiknya terlihat naik di mata pemodal spekulatif.',
            consequence: 'Ketika kas habis dan subsidi dihentikan, pengguna langsung kabur.',
            scoreBonus: 10,
            isOptimal: false,
            explanation: 'Pertumbuhan berbasis subsidi murni adalah ilusi retensi semu.',
          },
          {
            id: 'c2',
            text: 'Hentikan subsidi, fokus memperbaiki keunggulan produk sampai pelanggan rela membayar harga penuh.',
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
      y: 130,
      level: 1,
      microContent: {
        analogy:
          'Menginstruksikan orang lewat ceramah panjang bagaikan mendorong air ke atas bukit. Mendesain Nudge bagaikan menggali parit kecil di lereng bukit: air mengalir ke tempat yang Anda tuju secara alami tanpa paksaan.',
        crossDisciplinary: {
          connectionText: 'Psikologi Kognitif x Konversi Bisnis',
          domains: ['Psikologi', 'Bisnis'],
          insight:
            'Mengurangi friksi kognitif satu langkah pada alur transaksi dapat melipatgandakan tingkat konversi tanpa menambah biaya iklan.',
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
            text: 'Kunci pengguna dengan kontrak 2 tahun dengan penalti pembatalan yang disembunyikan.',
            consequence: 'Menimbulkan kemarahan, tuntutan hukum konsumen, dan rating reputasi hancur.',
            scoreBonus: 0,
            isOptimal: false,
            explanation: 'Dark pattern menciptakan kebencian konsumen dan merusak nilai jangka panjang.',
          },
          {
            id: 'c2',
            text: 'Tawarkan uji coba 14 hari bebas risiko dengan garansi kepuasan 100% tanpa syarat rumit.',
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
      label: 'Alokasi Modal & Likuiditas',
      domain: 'Keuangan',
      summary: 'Menjaga bantalan likuiditas kas agar tetap hidup melewati siklus krisis dan memanfaatkan peluang murah.',
      x: 180,
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
      x: 620,
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
            text: 'Jadikan kepatuhan ramah lingkungan sebagai keunggulan diferensiasi branding hijau di mata konsumen.',
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
