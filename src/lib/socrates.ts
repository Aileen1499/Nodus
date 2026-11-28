// ==============================================================================
// NODUS — EMBEDDED AI MENTOR ("ASK SOCRATES")
// ==============================================================================

export interface ChatMessage {
  id: string;
  sender: 'user' | 'socrates';
  text: string;
  timestamp: string;
}

export async function askSocratesAI(
  nodeTitle: string,
  nodeDomain: string,
  question: string,
  userApiKey?: string
): Promise<string> {
  const trimmedQ = question.trim();
  if (!trimmedQ) return 'Silakan ajukan pertanyaan spesifik seputar simpul ilmu ini.';

  // 1. Try Vercel Serverless Route `/api/ask-socrates`
  try {
    const res = await fetch('/api/ask-socrates', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nodeTitle,
        nodeDomain,
        question: trimmedQ,
        userApiKey,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.reply) {
        return data.reply;
      }
    }
  } catch {
    // Proceed to fallback or direct call
  }

  // 2. Direct Gemini API call if key is present
  const apiKey = (
    userApiKey ||
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GEMINI_API_KEY) ||
    ''
  ).trim();

  if (apiKey && apiKey.length > 10) {
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const systemPrompt = `Anda adalah Socrates, AI Mentor Nodus (seorang Senior Business Strategist dan Behavioral Psychologist kelas dunia). 
Tugas Anda adalah membimbing pengguna yang sedang mempelajari simpul materi: "${nodeTitle}" (Domain: ${nodeDomain}).
Aturan:
1. Jawab pertanyaan pengguna secara ringkas, to-the-point, cerdas, dan lugas (maksimal 150-180 kata).
2. Gunakan analogi dunia nyata yang sangat membumi dan aplikatif.
3. Selalu akhiri dengan 1 pertanyaan reflektif taktis.
Gaya bahasa: Mentor berkelas, santun, lugas, menginspirasi.`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: `${systemPrompt}\n\nPertanyaan: "${trimmedQ}"\n\nJawaban Socrates:` }],
            },
          ],
        }),
      });

      if (response.ok) {
        const json = await response.json();
        const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return text;
      }
    } catch {
      // Fallback below
    }
  }

  // 3. AI tidak aktif: katakan terus terang, jangan pura-pura menjawab.
  return `Mentor AI belum aktif, jadi aku belum bisa menjawab pertanyaanmu tentang "${nodeTitle}".

Sementara itu, coba ini: tulis satu kalimat tentang bagaimana konsep ini terlihat di usaha atau pekerjaan yang kamu kenal, lalu cek apakah contoh di pelajaran sudah menjawab pertanyaanmu. Kamu juga bisa menambahkan kunci AI milikmu sendiri di Pengaturan.`;
}


// ------------------------------------------------------------------------------
// LATIHAN TULIS: umpan balik atas penjelasan pengguna dengan kata sendiri
// ------------------------------------------------------------------------------

export interface WrittenFeedback {
  text: string;
  /** 'ai' bila dinilai Socrates; 'local' bila memakai pemeriksaan sederhana di perangkat. */
  source: 'ai' | 'local';
}

const STOP = new Set(['yang', 'dengan', 'untuk', 'dari', 'pada', 'adalah', 'dalam', 'atau', 'karena', 'sebagai', 'dapat', 'akan', 'tidak', 'bisa', 'lebih', 'saat', 'bila', 'agar', 'oleh', 'juga', 'seperti', 'antara', 'setiap', 'sudah', 'telah', 'hanya', 'secara', 'sebuah', 'mereka', 'anda', 'kita']);

const keyTerms = (text: string): string[] => {
  const words = text.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter((w) => w.length >= 5 && !STOP.has(w));
  const freq = new Map<string, number>();
  words.forEach((w) => freq.set(w, (freq.get(w) || 0) + 1));
  return [...freq.entries()].sort((a, b) => b[1] - a[1] || b[0].length - a[0].length).map(([w]) => w).slice(0, 12);
};

/** Pemeriksaan sederhana tanpa AI: seberapa banyak istilah kunci materi yang muncul di jawaban. */
export const localWrittenFeedback = (answer: string, reference: string, model?: string): WrittenFeedback => {
  const terms = keyTerms(reference);
  const low = answer.toLowerCase();
  const hit = terms.filter((t) => low.includes(t.slice(0, Math.max(4, t.length - 2))));
  const miss = terms.filter((t) => !hit.includes(t)).slice(0, 3);
  const ratio = terms.length ? hit.length / terms.length : 0;
  const words = answer.trim().split(/\s+/).length;
  let text: string;
  if (words < 12) text = 'Jawaban masih sangat singkat. Coba tulis 2 sampai 4 kalimat: apa konsepnya, mengapa penting, dan satu contoh dari usaha atau hidup Anda.';
  else if (ratio >= 0.4) text = `Penjelasan Anda sudah memuat banyak istilah kunci materi${model ? ` (${model})` : ''}. Langkah berikutnya: tambahkan satu contoh angka atau situasi nyata agar pemahaman Anda teruji.`;
  else if (ratio >= 0.15) text = `Arah penjelasan Anda sudah tepat, tetapi beberapa gagasan inti belum tersentuh${miss.length ? `, misalnya: ${miss.join(', ')}` : ''}. Baca ulang bagian inti lalu perkaya jawaban Anda.`;
  else text = `Jawaban Anda belum menyentuh gagasan inti materi${miss.length ? ` (cari kaitannya dengan: ${miss.join(', ')})` : ''}. Baca ulang materi, lalu tulis ulang dengan kata Anda sendiri.`;
  return { text: `${text}\n\nCatatan: ini pemeriksaan otomatis sederhana di perangkat Anda. Hubungkan kunci AI untuk penilaian penalaran yang lebih dalam.`, source: 'local' };
};

export async function reviewWrittenAnswerAI(
  nodeTitle: string,
  nodeDomain: string,
  reference: string,
  answer: string,
  userApiKey?: string,
  model?: string
): Promise<WrittenFeedback> {
  const trimmed = answer.trim().slice(0, 1200);
  const prompt = `Nilai penjelasan pelajar berikut tentang "${nodeTitle}". Materi acuan: ${reference.slice(0, 900)}\n\nPenjelasan pelajar: "${trimmed}"\n\nBerikan umpan balik singkat (maksimal 120 kata) dengan format: 1) satu hal yang sudah tepat, 2) satu kekeliruan atau celah, 3) satu pertanyaan lanjutan. Jangan memuji berlebihan dan jangan menjawabkan ulang seluruh materi.`;
  try {
    const reply = await askSocratesAI(nodeTitle, nodeDomain, prompt, userApiKey);
    // askSocratesAI jatuh ke jawaban offline generik bila tak ada layanan AI: kenali dan pakai pemeriksaan lokal.
    if (reply && !reply.startsWith('Sebagai Socrates, mari kita renungkan') && !reply.startsWith('Sebagai Socrates, saya melihat inti')) {
      return { text: reply, source: 'ai' };
    }
  } catch {
    /* jatuh ke pemeriksaan lokal */
  }
  return localWrittenFeedback(trimmed, reference, model);
}
