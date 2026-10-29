import type { VercelRequest, VercelResponse } from '@vercel/node';

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
    const { nodeTitle, nodeDomain, question, userApiKey } = await req.json();

    const apiKey = (userApiKey || process.env.GEMINI_API_KEY || '').trim();

    const systemPrompt = `Anda adalah Socrates, AI Mentor Nodus (seorang Senior Business Strategist, Macroeconomist, dan Behavioral Psychologist kelas dunia). 
Tugas Anda adalah membimbing pengguna yang sedang mempelajari simpul materi: "${nodeTitle}" (Domain: ${nodeDomain}).
Aturan respons:
1. Jawab pertanyaan pengguna secara ringkas, to-the-point, cerdas, dan lugas (maksimal 150-180 kata).
2. Gunakan analogi dunia nyata yang sangat membumi dan aplikatif untuk bisnis atau kehidupan nyata.
3. Selalu akhiri dengan 1 pertanyaan reflektif taktis untuk menguji nalar kritis pengguna.
4. Gunakan gaya bahasa mentor kelas atas yang menginspirasi, santun, dan profesional.`;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          reply: `Sebagai Socrates, saya melihat inti dari "${nodeTitle}" adalah tentang leverage dan insentif. Mengenai pertanyaan Anda: bayangkan analogi kedai kopi lokal. Jika Anda menerapkan prinsip ini, jangan ubah bahan dasarnya, tetapi ubah struktur penawaran dan persepsi nilainya. Pelanggan Anda tidak membeli kafein, mereka membeli jeda ketenangan atau status bekerja di tempat yang tepat. Pertanyaan saya untuk Anda: Jika Anda menaikkan harga 10% besok pagi, nilai tambah apa yang membuat pelanggan setia Anda justru tersenyum puas?`,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nPertanyaan Pengguna: "${question}"\n\nBerikan jawaban mentor Anda:`,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        },
      }),
    });

    if (!geminiRes.ok) {
      throw new Error(`Gemini API returned status ${geminiRes.status}`);
    }

    const data = await geminiRes.json();
    const replyText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Maaf, saya sedang merenungkan jawaban terbaik. Silakan ulangi pertanyaan Anda.';

    return new Response(JSON.stringify({ reply: replyText }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({
        reply: 'Sebagai mentor Anda: Ingatlah bahwa setiap kendala dalam bisnis adalah masalah informasi atau arsitektur insentif. Fokuskan pada inti analogi materi ini dan eksekusi dalam skala uji coba kecil terlebih dahulu.',
        error: err.message,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

