import { SITE_HOST } from './site';

export interface ScoreCardData {
  level: string;
  score: number;
  done: number;
  total: number;
  axes: { name: string; pct: number }[];
}

/** Gambar kartu skor (PNG) untuk dibagikan, supaya yang terkirim berupa kartu, bukan sekadar tautan. */
export const renderScoreCard = async (d: ScoreCardData): Promise<Blob | null> => {
  try {
    const W = 1080, H = 1350;
    const c = document.createElement('canvas');
    c.width = W; c.height = H;
    const g = c.getContext('2d');
    if (!g) return null;
    try { await (document as Document & { fonts?: FontFaceSet }).fonts?.ready; } catch { /* abaikan */ }
    const serif = '"Newsreader", Georgia, serif';
    const sans = '"Plus Jakarta Sans", system-ui, sans-serif';

    g.fillStyle = '#151517'; g.fillRect(0, 0, W, H);
    const glow = g.createRadialGradient(W * 0.8, 0, 0, W * 0.8, 0, 700);
    glow.addColorStop(0, 'rgba(227,166,58,0.28)'); glow.addColorStop(1, 'rgba(227,166,58,0)');
    g.fillStyle = glow; g.fillRect(0, 0, W, H);

    g.fillStyle = '#E9C06B'; g.font = `800 34px ${sans}`; g.textAlign = 'left';
    g.fillText('N O D U S', 80, 120);
    g.fillStyle = 'rgba(251,249,245,0.6)'; g.font = `600 26px ${sans}`;
    g.fillText('PROFIL KEMAMPUAN BISNIS', 80, 175);

    g.fillStyle = '#FBF9F5'; g.font = `500 84px ${serif}`;
    g.fillText(`Level ${d.level}`, 80, 290);
    g.fillStyle = 'rgba(251,249,245,0.7)'; g.font = `500 30px ${sans}`;
    g.fillText(`${d.done} dari ${d.total} pelajaran dikuasai`, 80, 345);

    g.textAlign = 'right'; g.fillStyle = '#E9C06B'; g.font = `500 190px ${serif}`;
    g.fillText(String(d.score), W - 80, 330);
    g.fillStyle = 'rgba(251,249,245,0.6)'; g.font = `700 24px ${sans}`;
    g.fillText('SKOR / 100', W - 80, 375);

    // Radar
    const cx = W / 2, cy = 800, R = 300, n = Math.max(3, d.axes.length);
    const pt = (i: number, r: number): [number, number] => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
    };
    g.strokeStyle = 'rgba(251,249,245,0.16)'; g.lineWidth = 2;
    [0.33, 0.66, 1].forEach((f) => {
      g.beginPath();
      for (let i = 0; i < n; i++) { const [x, y] = pt(i, R * f); i ? g.lineTo(x, y) : g.moveTo(x, y); }
      g.closePath(); g.stroke();
    });
    for (let i = 0; i < n; i++) { const [x, y] = pt(i, R); g.beginPath(); g.moveTo(cx, cy); g.lineTo(x, y); g.stroke(); }
    g.beginPath();
    d.axes.forEach((a, i) => { const [x, y] = pt(i, R * Math.max(0.06, a.pct)); i ? g.lineTo(x, y) : g.moveTo(x, y); });
    g.closePath(); g.fillStyle = 'rgba(227,166,58,0.35)'; g.fill(); g.strokeStyle = '#E3A63A'; g.lineWidth = 5; g.stroke();
    g.fillStyle = '#FBF9F5'; g.font = `700 30px ${sans}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    d.axes.forEach((a, i) => { const [x, y] = pt(i, R + 52); g.fillText(a.name, x, y); });
    g.textBaseline = 'alphabetic';

    g.fillStyle = 'rgba(251,249,245,0.12)'; g.fillRect(80, 1190, W - 160, 2);
    g.textAlign = 'left'; g.fillStyle = '#FBF9F5'; g.font = `700 34px ${sans}`;
    g.fillText('Hubungkan konsep, bangun kemampuan bisnis.', 80, 1250);
    g.fillStyle = '#E9C06B'; g.font = `700 30px ${sans}`;
    g.fillText(`Coba di ${SITE_HOST}`, 80, 1300);

    return await new Promise<Blob | null>((res) => c.toBlob((b) => res(b), 'image/png'));
  } catch {
    return null;
  }
};
