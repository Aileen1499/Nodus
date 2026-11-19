import React, { useId } from 'react';

interface LogoMarkProps {
  size?: number;
  className?: string;
}

/**
 * Lambang NODUS: huruf N yang dibentuk dari jalur (garis) dan simpul (titik).
 * Dua tiang krem = fondasi, diagonal emas = jalur belajar yang menghubungkan dua simpul.
 * Ubin arang dengan cahaya emas halus, sama di mode terang dan gelap.
 */
export const LogoMark: React.FC<LogoMarkProps> = ({ size = 32, className }) => {
  const uid = useId().replace(/:/g, '');
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="NODUS" className={className}>
      <defs>
        <radialGradient id={`${uid}-glow`} cx="0.82" cy="0.12" r="0.9">
          <stop offset="0" stopColor="#E3A63A" stopOpacity=".34" />
          <stop offset="1" stopColor="#E3A63A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${uid}-gold`} x1="17" y1="14" x2="47" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F3C766" />
          <stop offset="1" stopColor="#CF8E1F" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#151517" />
      <rect width="64" height="64" rx="16" fill={`url(#${uid}-glow)`} />
      <rect x="1" y="1" width="62" height="62" rx="15" stroke="#E3A63A" strokeOpacity=".32" strokeWidth="2" />
      <path d="M17 49V15M47 49V15" stroke="#FBF9F5" strokeWidth="6" strokeLinecap="round" />
      <path d="M17 15L47 49" stroke={`url(#${uid}-gold)`} strokeWidth="6.5" strokeLinecap="round" />
      <circle cx="17" cy="15" r="8" fill="#E3A63A" fillOpacity=".16" />
      <circle cx="47" cy="49" r="8" fill="#E3A63A" fillOpacity=".16" />
      <circle cx="17" cy="15" r="5.6" fill="#E3A63A" stroke="#151517" strokeWidth="2.4" />
      <circle cx="47" cy="49" r="5.6" fill="#E3A63A" stroke="#151517" strokeWidth="2.4" />
      <circle cx="47" cy="15" r="2.8" fill="#FBF9F5" />
      <circle cx="17" cy="49" r="2.8" fill="#FBF9F5" />
    </svg>
  );
};

interface LogoProps {
  size?: number;
  /** Tampilkan tagline kecil di bawah nama. */
  tagline?: boolean;
  className?: string;
}

/** Lambang + kata NODUS. */
export const Logo: React.FC<LogoProps> = ({ size = 32, tagline = false, className = '' }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`}>
    <LogoMark size={size} />
    <span className="flex flex-col leading-none">
      <span className="font-serif font-semibold tracking-[0.16em] text-slate-900 dark:text-white" style={{ fontSize: size * 0.62 }}>NODUS</span>
      {tagline && <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A6410] dark:text-[#E9C06B]">Hubungkan · Pahami · Putuskan</span>}
    </span>
  </span>
);

/** Pola simpul dan jalur dekoratif untuk latar layar bermerek. */
export const NodeConstellation: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className={className}>
    <g stroke="#E3A63A" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="4 5">
      <path d="M40 220L120 140L210 175L300 90L370 120" />
      <path d="M120 140L150 60L260 40L300 90" />
      <path d="M210 175L250 260L340 230L370 120" />
    </g>
    {[[40, 220], [120, 140], [210, 175], [300, 90], [370, 120], [150, 60], [260, 40], [250, 260], [340, 230]].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r={i % 3 === 0 ? 13 : 9} fill="#E3A63A" fillOpacity=".12" />
        <circle cx={x} cy={y} r={i % 3 === 0 ? 6 : 4} fill={i % 2 ? '#E3A63A' : '#9A6410'} fillOpacity={i % 2 ? 0.9 : 0.55} />
      </g>
    ))}
  </svg>
);
