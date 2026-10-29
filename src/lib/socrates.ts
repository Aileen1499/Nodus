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
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
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

  // 3. Contextual Offline Mentor Intelligence
  const qLower = trimmedQ.toLowerCase();
  
  if (qLower.includes('kopi') || qLower.includes('kafe') || qLower.includes('f&b') || qLower.includes('toko')) {
    return `Sebagai Socrates, mari kita bawa konsep "${nodeTitle}" ke kedai kopi lokal Anda.
Jika Anda menjual secangkir cappuccino seharga Rp 35.000, margin biji kopinya mungkin hanya Rp 3.000. Tapi mengapa pelanggan memilih duduk 2 jam di tempat Anda daripada menyeduh sachet di rumah? Karena Anda menjual ruang ketenangan, koneksi Wi-Fi yang stabil, dan validasi sosial. 

Penerapan taktisnya: Jangan bersaing di harga murah biji kopi. Terapkan "Pricing Tier": sediakan opsi kopi premium single-origin seharga Rp 55.000 sebagai jangkar (anchor). Secara otomatis, cappuccino Rp 35.000 Anda akan terasa sangat wajar dan menjadi pilihan mayoritas.

Pertanyaan reflektif saya untuk Anda: Dari 100 orang yang datang ke toko Anda hari ini, berapa persen yang datang karena kualitas rasa, dan berapa persen yang datang karena suasana ruangan?`;
  }

  if (qLower.includes('contoh') || qLower.includes('terapkan') || qLower.includes('aplikasi') || qLower.includes('gimana')) {
    return `Sebagai Socrates, analogi praktis untuk "${nodeTitle}" adalah seperti tuas pengungkit mekanis Archimedes. 

Di dunia nyata, Anda tidak perlu bekerja 10 kali lebih keras untuk menghasilkan dampak 10 kali lipat. Anda hanya butuh posisi tumpuan (pivot) yang tepat: apakah itu lewat parit pertahanan ekonomi, penurunan friksi di otak konsumen, atau restrukturisasi penawaran Anda. Mulailah dengan 1 eksperimen mikro selama 7 hari tanpa mengubah seluruh bisnis Anda sekaligus.

Pertanyaan saya: Jika Anda hanya boleh mengubah 1 variabel saja dalam penawaran Anda minggu ini, variabel mana yang paling cepat mengubah persepsi nilai di mata calon pembeli?`;
  }

  return `Sebagai Socrates, mari kita renungkan esensi dari "${nodeTitle}".
Dalam domain ${nodeDomain}, prinsip paling mendasar adalah memahami bagaimana insentif dan persepsi menggerakkan alokasi sumber daya. Orang tidak mengambil keputusan berdasarkan angka objektif di atas kertas, melainkan berdasarkan bagaimana pikiran mereka menyaring rasa aman, risiko kehilangan, dan potensi status.

Pegang prinsip ini: Sederhanakan pilihan, kurangi friksi keraguan, dan buktikan hasilnya dengan tindakan nyata terukur.

Bagaimana Anda akan menguji konsep ini pada proyek atau pekerjaan Anda dalam 48 jam ke depan?`;
}
