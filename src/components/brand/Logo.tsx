import React from 'react';

interface LogoMarkProps {
  size?: number;
  className?: string;
}

/** Lambang NODUS: huruf N dari jalur dan simpul. Ubin arang dengan aksen emas, sama di mode terang dan gelap. */
export const LogoMark: React.FC<LogoMarkProps> = ({ size = 32, className }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" role="img" aria-label="NODUS" className={className}>
    <rect width="64" height="64" rx="16" fill="#151517" />
    <rect x="1" y="1" width="62" height="62" rx="15" stroke="#E3A63A" strokeOpacity=".28" strokeWidth="2" />
    <path d="M17 50V14M47 50V14" stroke="#FBF9F5" strokeWidth="6" strokeLinecap="round" />
    <path d="M17 14L47 50" stroke="#E3A63A" strokeWidth="6" strokeLinecap="round" />
    <circle cx="17" cy="14" r="5.6" fill="#E3A63A" stroke="#151517" strokeWidth="2.4" />
    <circle cx="47" cy="50" r="5.6" fill="#E3A63A" stroke="#151517" strokeWidth="2.4" />
    <circle cx="47" cy="14" r="2.8" fill="#FBF9F5" />
    <circle cx="17" cy="50" r="2.8" fill="#FBF9F5" />
  </svg>
);

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
      <span className="font-serif font-semibold tracking-[0.14em] text-slate-900 dark:text-white" style={{ fontSize: size * 0.62 }}>NODUS</span>
      {tagline && <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9A6410] dark:text-[#E9C06B]">Hubungkan · Pahami · Putuskan</span>}
    </span>
  </span>
);
