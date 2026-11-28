import { MindmapData, MindmapNode, MindmapEdge, DomainType, QuizQuestion } from '../types';
import { MOCK_MINDMAPS } from '../data/mockMindmaps';
import { getMindmapForTopic } from './topicEngine';
import { allMaps, resolveRetired } from './nodeIndex';
import { getCurriculumForQuery } from './curriculumData';

export interface PromptNodeSchema {
  id?: string;
  title?: string;
  label?: string;
  domain?: DomainType;
  analogy_core_idea?: string;
  cross_discipline_insight?: string;
  case_study?: {
    company_or_figure?: string;
    story?: string;
    takeaway?: string;
  };
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

const tokens = (t: string): string[] =>
  Array.from(new Set(t.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((w) => w.length >= 4)));

/** Jalur kurikulum yang paling banyak menyentuh kata dalam pertanyaan; null bila tidak ada yang cukup dekat. */
export function findClosestPath(query: string): MindmapData | null {
  const q = tokens(query);
  if (q.length === 0) return null;
  let best: MindmapData | null = null;
  let bestScore = 0;
  for (const m of allMaps()) {
    const head = m.topic.toLowerCase();
    const body = m.nodes.map((n) => `${n.label} ${n.summary || ''}`).join(' ').toLowerCase();
    let score = 0;
    for (const w of q) {
      if (head.includes(w)) score += 3;
      if (body.includes(w)) score += 1;
    }
    if (score > bestScore) { best = m; bestScore = score; }
  }
  return bestScore >= 2 ? best : null;
}

export async function generateMindmapWithGemini(
  query: string,
  userApiKey?: string,
  model: string = 'gemini-2.5-flash'
): Promise<MindmapData> {
  const trimmed = query.trim();

  // 0. Structured Step-by-Step Pathway (Basic to Advanced Curriculum)
  const curriculumMatch = getCurriculumForQuery(trimmed);
  if (curriculumMatch) {
    return curriculumMatch;
  }

  // 0b. Dynamic Domain & Core Topic Engine (Bisnis, Psikologi, Ekonomi, Pemasaran, Geopolitik)
  const topicEngineMatch = getMindmapForTopic(trimmed);
  if (topicEngineMatch) {
    return resolveRetired(topicEngineMatch);
  }

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

  // 5. Tanpa AI aktif: jangan mengarang peta kosong yang berpura-pura membahas topik ini.
  //    Tawarkan jalur terdekat dari kurikulum yang sudah ada, atau katakan terus terang tidak ada.
  const closest = findClosestPath(trimmed);
  if (closest) return closest;
  throw new Error('NO_MATCH');
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
        caseStudy: n.case_study ? {
          companyOrFigure: n.case_study.company_or_figure || 'Studi Kasus Pasar Global',
          story: n.case_study.story || 'Penerapan langsung di industri terkemuka.',
          takeaway: n.case_study.takeaway || 'Kunci taktis eksekusi.'
        } : undefined,
        actionableSteps: actionSteps.slice(0, 3),
        difficulty: 'Menengah',
        readTime: '2 min'
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

