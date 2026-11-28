/** Membacakan pelajaran dengan suara bawaan perangkat (tanpa kuota, tanpa server). */
const synth = (): SpeechSynthesis | null => (typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null);

export const canSpeak = (): boolean => !!synth() && typeof SpeechSynthesisUtterance !== 'undefined';

/** Pecah teks per kalimat; Chrome memotong ucapan yang terlalu panjang. */
const chunk = (text: string): string[] => {
  const out: string[] = [];
  text.replace(/\s+/g, ' ').trim().split(/(?<=[.!?])\s+/).forEach((s) => {
    let rest = s;
    while (rest.length > 220) {
      const cut = rest.lastIndexOf(',', 220) > 80 ? rest.lastIndexOf(',', 220) + 1 : rest.lastIndexOf(' ', 220);
      out.push(rest.slice(0, cut).trim());
      rest = rest.slice(cut).trim();
    }
    if (rest) out.push(rest);
  });
  return out;
};

let session = 0;

export const stopSpeaking = (): void => { session++; synth()?.cancel(); };

/** Mulai membaca; onEnd dipanggil saat selesai, berhenti, atau gagal. */
export const speakText = (text: string, onEnd: () => void): void => {
  const s = synth();
  if (!s) { onEnd(); return; }
  s.cancel();
  const mine = ++session;
  const parts = chunk(text);
  const voice = s.getVoices().find((v) => v.lang.toLowerCase().startsWith('id'));
  let i = 0;
  const next = () => {
    if (mine !== session) return;
    if (i >= parts.length) { onEnd(); return; }
    const u = new SpeechSynthesisUtterance(parts[i++]);
    u.lang = 'id-ID';
    if (voice) u.voice = voice;
    u.rate = 0.96;
    u.onend = next;
    u.onerror = () => { if (mine === session) onEnd(); };
    s.speak(u);
  };
  next();
};
