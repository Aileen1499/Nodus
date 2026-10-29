export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { topic, apiKey: clientApiKey, model = 'gemini-1.5-flash' } = await req.json();

    if (!topic || typeof topic !== 'string') {
      return new Response(JSON.stringify({ error: 'Topic is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = (process.env.GEMINI_API_KEY || clientApiKey || '').trim();

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: 'GEMINI_API_KEY is not configured on the server or provided by client.',
          fallback: true,
        }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const cleanModel = model.replace(/^models\//, '');
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${cleanModel}:generateContent?key=${apiKey}`;

    const systemPrompt = `
Anda adalah NODUS AI Engine — arsitek sistem pengetahuan multi-disiplin berstandar eksekutif global.
Tugas Anda adalah membedah topik/pertanyaan pengguna ke dalam bentuk Knowledge Graph berorientasi aksi dengan struktur JSON murni.

KEMBALIKAN HANYA JSON VALID TANPA MARKDOWN BACKTICKS. IKUTI SCHEMA PERSIS SEPERTI INI:
{
  "topic": "Judul Topik",
  "nodes": [
    {
      "id": "node-1",
      "title": "Judul Cabang (Maks 4 kata)",
      "analogy_core_idea": "Analogi sederhana dunia nyata (max 120 kata).",
      "cross_discipline_insight": "Hubungan eksplisit lintas ilmu (misal: Ekonomi ke Psikologi/Geopolitik).",
      "case_study": {
        "company_or_figure": "Contoh: Apple Inc / Starbucks / Ray Dalio",
        "story": "Kisah eksekusi nyata bagaimana mereka menerapkan prinsip ini.",
        "takeaway": "Kunci taktis yang bisa diterapkan."
      },
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

    const geminiRes = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `${systemPrompt}\n\nTOPIK EKSEKUTIF PENGGUNA YANG HARUS DIBEDAH:\n"${topic.trim()}"`,
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

    if (!geminiRes.ok) {
      const errorText = await geminiRes.text();
      return new Response(
        JSON.stringify({ error: `Gemini API error ${geminiRes.status}: ${errorText}` }),
        { status: geminiRes.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const jsonResult = await geminiRes.json();
    const rawText = jsonResult.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return new Response(JSON.stringify({ error: 'Empty response from Gemini' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let cleaned = rawText.trim();
    if (cleaned.startsWith('```json')) {
      cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    const parsed = JSON.parse(cleaned);
    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

