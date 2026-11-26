import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useUser } from '../../context/UserContext';
import { localDay } from '../../lib/date';
import { firstName, getName, setName, timeGreeting } from '../../lib/profileName';

const SKIP_KEY = 'nodus_name_skip_v1';

/** Sapaan di Peta: memakai nama pengguna dan menyebut hal nyata dari progresnya, bukan slogan. */
export const Greeting: React.FC = () => {
  const { user } = useAuth();
  const { progress } = useUser();
  const [name, setLocal] = useState(() => getName());
  const [draft, setDraft] = useState('');
  const [skipped, setSkipped] = useState(() => { try { return localStorage.getItem(SKIP_KEY) === '1'; } catch { return false; } });
  const accountName = user?.displayName && !['Learner', 'Executive Leader'].includes(user.displayName) ? firstName(user.displayName) : '';
  const who = name || accountName;
  const mastered = progress.masteredNodeIds?.length ?? 0;
  const doneToday = progress.lastStudyDate === localDay();

  if (!who) {
    if (skipped) return null;
    const save = () => { if (!draft.trim()) return; setName(draft); setLocal(draft.trim().slice(0, 30)); };
    return (
      <div className="mb-3 rounded-2xl border border-slate-200/80 bg-white p-4 dark:border-white/10 dark:bg-[#1C1C1F]">
        <p className="font-serif text-lg font-medium text-slate-900 dark:text-white">Halo, senang kamu di sini.</p>
        <p className="mt-0.5 text-[13px] text-slate-600 dark:text-slate-300">Boleh tahu mau dipanggil siapa? Namamu hanya tersimpan di perangkat ini.</p>
        <div className="mt-3 flex gap-2">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && save()} maxLength={30} placeholder="Nama panggilan" autoComplete="given-name"
            className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-base text-slate-900 placeholder-slate-400 focus:border-[#CF8E1F] focus:outline-none dark:border-white/15 dark:bg-[#121214] dark:text-white" />
          <button onClick={save} disabled={!draft.trim()} className="btn-ink shrink-0 !px-5 text-sm">Simpan</button>
        </div>
        <button onClick={() => { try { localStorage.setItem(SKIP_KEY, '1'); } catch { /* abaikan */ } setSkipped(true); }} className="mt-2 text-[12px] font-semibold text-slate-500 underline underline-offset-4 dark:text-slate-400">Lewati saja</button>
      </div>
    );
  }

  const line = mastered === 0
    ? 'Belum ada pelajaran yang kamu selesaikan. Satu pelajaran lima menit sudah cukup untuk hari ini.'
    : doneToday
      ? `Hari ini kamu sudah belajar. ${mastered} pelajaran sudah kamu kuasai, pelan tapi pasti.`
      : `${mastered} pelajaran sudah kamu kuasai. Mau lanjut yang mana hari ini?`;
  return (
    <div className="mb-3 px-1">
      <p className="font-serif text-[22px] font-medium leading-tight text-slate-900 dark:text-white">{timeGreeting()}, {who}.</p>
      <p className="mt-0.5 text-[13px] leading-snug text-slate-600 dark:text-slate-300">{line}</p>
    </div>
  );
};
