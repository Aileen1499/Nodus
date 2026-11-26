import { SITE_URL } from '../../lib/site';
import { renderScoreCard } from '../../lib/shareCard';
import React, { useMemo } from 'react';
import { Crown, Share2, TrendingUp } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { allNodes } from '../../lib/nodeIndex';

const AXES = ['Bisnis', 'Keuangan', 'Ekonomi', 'Psikologi', 'Hukum', 'Komunikasi'] as const;
const LEVELS: { min: number; name: string }[] = [
  { min: 0, name: 'Pemula' }, { min: 10, name: 'Pelaku' }, { min: 30, name: 'Praktisi' }, { min: 60, name: 'Ahli' }, { min: 85, name: 'Strategis' },
];

/** Profil kemampuan: radar enam bidang, skor, dan level. Memperlihatkan nilai belajar sehingga lebih mudah menginginkan lebih. */
export const CapabilityCard: React.FC<{ isPro: boolean; onUpgrade?: () => void }> = ({ isPro, onUpgrade }) => {
  const { progress } = useUser();

  const stats = useMemo(() => {
    const all = allNodes();
    const mastered = new Set(progress.masteredNodeIds);
    const per = AXES.map((axis) => {
      const items = all.filter((p) => (p.node.domain === axis || (axis === 'Keuangan' && p.node.domain === 'Pajak')) && p.node.level !== 0 && p.node.id !== p.map.rootId);
      const done = items.filter((p) => mastered.has(p.node.id)).length;
      return { axis, total: items.length, done, pct: items.length ? done / items.length : 0 };
    });
    const total = per.reduce((n, a) => n + a.total, 0);
    const done = per.reduce((n, a) => n + a.done, 0);
    const score = total ? Math.round((done / total) * 100) : 0;
    const level = [...LEVELS].reverse().find((l) => score >= l.min)!;
    const nextLevel = LEVELS.find((l) => l.min > score);
    const weakest = [...per].filter((a) => a.total > 0).sort((a, b) => a.pct - b.pct)[0];
    return { per, score, done, total, level, nextLevel, weakest };
  }, [progress.masteredNodeIds]);

  const share = async () => {
    const text = `Level ${stats.level.name} di NODUS, skor kemampuan bisnisku ${stats.score}/100 (${stats.done} pelajaran dikuasai). Coba juga: ${SITE_URL}`;
    const blob = await renderScoreCard({ level: stats.level.name, score: stats.score, done: stats.done, total: stats.total, axes: stats.per.map((a) => ({ name: a.axis, pct: a.pct })) });
    try {
      if (blob) {
        const file = new File([blob], 'skor-nodus.png', { type: 'image/png' });
        if (navigator.canShare?.({ files: [file] })) { await navigator.share({ files: [file], text, title: 'NODUS' }); return; }
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob); a.download = 'skor-nodus.png';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
        return;
      }
      if (navigator.share) { await navigator.share({ title: 'NODUS', text }); return; }
      await navigator.clipboard.writeText(text);
    } catch { /* dibatalkan atau tidak didukung */ }
  };

  const size = 220, cx = size / 2, cy = size / 2, R = 78;
  const pt = (i: number, r: number) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / AXES.length;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)] as const;
  };
  const ring = (f: number) => AXES.map((_, i) => pt(i, R * f).join(',')).join(' ');
  const shape = stats.per.map((a, i) => pt(i, R * Math.max(0.06, a.pct)).join(',')).join(' ');

  return (
    <div className="rounded-3xl bg-[#151517] p-5 text-[#FBF9F5] shadow-float dark:bg-[#1C1C1F] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow !text-[#E9C06B]">Profil kemampuan</p>
          <h3 className="mt-1 font-serif text-2xl font-semibold leading-tight">Level {stats.level.name}</h3>
          <p className="mt-1 text-[13px] text-[#FBF9F5]/65">
            {stats.done} dari {stats.total} pelajaran dikuasai{stats.nextLevel ? ` · ${stats.nextLevel.min - stats.score}% lagi menuju ${stats.nextLevel.name}` : ''}
          </p>
        </div>
        <div className="text-right">
          <p className="bg-gradient-to-b from-[#FFF3D6] to-[#E9C06B] bg-clip-text font-serif text-5xl font-medium leading-none text-transparent">{stats.score}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#FBF9F5]/70">Skor</p>
        </div>
      </div>

      <svg viewBox={`0 0 ${size} ${size}`} className="mx-auto mt-3 h-auto w-full max-w-[260px]" role="img" aria-label="Radar kemampuan per bidang">
        {[0.33, 0.66, 1].map((f) => <polygon key={f} points={ring(f)} fill="none" stroke="rgba(251,249,245,0.14)" strokeWidth={1} />)}
        {AXES.map((_, i) => { const [x, y] = pt(i, R); return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(251,249,245,0.10)" />; })}
        <polygon points={shape} fill="rgba(227,166,58,0.28)" stroke="#E3A63A" strokeWidth={2} strokeLinejoin="round" />
        {stats.per.map((a, i) => { const [x, y] = pt(i, R * Math.max(0.06, a.pct)); return <circle key={a.axis} cx={x} cy={y} r={3} fill="#E9C06B" />; })}
        {AXES.map((axis, i) => { const [x, y] = pt(i, R + 17); return <text key={axis} x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize={10} fontWeight={700} fill="rgba(251,249,245,0.75)">{axis}</text>; })}
      </svg>

      {stats.weakest && (
        <div className="mt-3 flex items-start gap-3 rounded-2xl bg-white/[0.06] p-3.5">
          <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-[#E9C06B]" />
          <p className="min-w-0 flex-1 text-[13px] leading-snug text-[#FBF9F5]/80">
            Bidang yang paling bisa naik: <span className="font-bold text-[#FBF9F5]">{stats.weakest.axis}</span> ({stats.weakest.done}/{stats.weakest.total}).
            {!isPro && ' Pro membuka semua jalurnya sampai tuntas.'}
          </p>
        </div>
      )}
      <button onClick={share} className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 py-3 text-sm font-bold text-[#FBF9F5] hover:bg-white/10"><Share2 className="h-4 w-4" />Bagikan skorku</button>
      {!isPro && onUpgrade && (
        <button onClick={onUpgrade} className="btn-gold mt-3 flex w-full items-center justify-center gap-2 !py-3 text-sm"><Crown className="h-4 w-4" />Lihat paket Pro</button>
      )}
    </div>
  );
};
