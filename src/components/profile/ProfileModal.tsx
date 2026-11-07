import React, { useMemo, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { MindmapData, MindmapNode } from '../../types';
import { allNodes, findNode } from '../../lib/nodeIndex';
import { plain } from '../../lib/pathLogic';
import { X, Search, Bookmark, Highlighter, Trash2, Copy, Check, ArrowRight, Flame, Clock, CheckCircle2 } from 'lucide-react';

interface ProfileModalProps {
  onClose: () => void;
  /** Open a lesson (and the curriculum it belongs to) from the vault. */
  onOpenNode?: (node: MindmapNode, map: MindmapData) => void;
}

type VaultTab = 'overview' | 'saved' | 'notes';

const RANKS = [
  { title: 'Junior Analyst', from: 0, to: 200 },
  { title: 'Strategic Operator', from: 200, to: 500 },
  { title: 'Executive Architect', from: 500, to: 1000 },
  { title: 'Grand Sovereign', from: 1000, to: 1000 },
];

const getRank = (rp: number) => {
  const idx = RANKS.findIndex((r, i) => rp < r.to || i === RANKS.length - 1);
  const current = RANKS[idx];
  const next = RANKS[idx + 1];
  const percent = next ? ((rp - current.from) / (current.to - current.from)) * 100 : 100;
  return { current, next, percent: Math.max(0, Math.min(100, percent)), remaining: next ? current.to - rp : 0 };
};

const MARK_DOT: Record<string, string> = {
  yellow: 'bg-[#E3A63A]',
  emerald: 'bg-[#2E7D5B]',
  indigo: 'bg-[#4A7BB5]',
  rose: 'bg-[#C5506A]',
};

const formatDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  } catch {
    return '';
  }
};

export const ProfileModal: React.FC<ProfileModalProps> = ({ onClose, onOpenNode }) => {
  const { progress, highlights, removeHighlight, bookmarkedNodeIds, toggleBookmark, isNodeMastered } = useUser();
  const [tab, setTab] = useState<VaultTab>('overview');
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const rank = getRank(progress.rankPoints);
  const q = query.trim().toLowerCase();

  // Mastery per domain, across every curriculum
  const domainMastery = useMemo(() => {
    const rows = new Map<string, { total: number; done: number }>();
    allNodes().forEach(({ node }) => {
      const row = rows.get(node.domain) || { total: 0, done: 0 };
      row.total += 1;
      if (progress.masteredNodeIds.includes(node.id)) row.done += 1;
      rows.set(node.domain, row);
    });
    return Array.from(rows.entries())
      .map(([domain, v]) => ({ domain, ...v }))
      .sort((a, b) => b.done - a.done || b.total - a.total);
  }, [progress.masteredNodeIds]);

  const masteredEntries = progress.masteredNodeIds.map((id) => findNode(id)).filter((e): e is NonNullable<typeof e> => !!e);
  const savedEntries = bookmarkedNodeIds.map((id) => findNode(id)).filter((e): e is NonNullable<typeof e> => !!e);

  const filteredSaved = savedEntries.filter(({ node }) => !q || node.label.toLowerCase().includes(q) || node.domain.toLowerCase().includes(q));
  const filteredNotes = highlights.filter((h) => !q || h.text.toLowerCase().includes(q) || h.nodeTitle.toLowerCase().includes(q) || (h.note || '').toLowerCase().includes(q));

  const open = (nodeId: string) => {
    const entry = findNode(nodeId);
    if (!entry || !onOpenNode) return;
    onOpenNode(entry.node, entry.map);
  };

  const copy = (id: string, text: string) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const tabs: { id: VaultTab; label: string; count?: number }[] = [
    { id: 'overview', label: 'Ringkasan' },
    { id: 'saved', label: 'Tersimpan', count: savedEntries.length },
    { id: 'notes', label: 'Stabilo & Catatan', count: highlights.length },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/50 sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-label="Brankas pengetahuan">
      <div className="flex h-full w-full max-w-2xl animate-sheet-up flex-col overflow-hidden bg-[#FBF9F5] shadow-float dark:bg-[#151517] sm:h-[90vh] sm:rounded-[28px]">
        <header className="shrink-0 border-b border-slate-200/70 px-5 pb-3 pt-4 dark:border-white/10 sm:px-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="eyebrow">Pengetahuan pribadi</p>
              <h2 className="font-serif text-[1.75rem] font-medium leading-tight tracking-tight text-slate-900 dark:text-white">Brankas</h2>
            </div>
            <button onClick={onClose} aria-label="Tutup" className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-1 overflow-x-auto scrollbar-none" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`chip ${tab === t.id ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#FBF9F5] dark:text-[#151517]' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10'}`}
              >
                {t.label}
                {t.count !== undefined && t.count > 0 && <span className="rounded-full bg-[#E3A63A] px-1.5 text-[10px] font-extrabold tabular-nums text-[#151517]">{t.count}</span>}
              </button>
            ))}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 pb-32 pt-5 sm:px-7">
          {tab !== 'overview' && (
            <label className="mb-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 focus-within:border-[#CF8E1F] dark:border-white/10 dark:bg-white/5">
              <Search className="h-4 w-4 text-slate-400" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={tab === 'saved' ? 'Cari konsep tersimpan…' : 'Cari stabilo atau catatan…'} aria-label="Cari di Brankas" className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white" />
            </label>
          )}

          {tab === 'overview' && (
            <div className="space-y-5">
              <section className="rounded-3xl bg-[#151517] p-5 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#E3A63A]">Tingkat saat ini</p>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <h3 className="font-serif text-2xl font-medium">{rank.current.title}</h3>
                  <span className="text-sm font-bold tabular-nums text-[#E3A63A]">{progress.rankPoints} RP</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-valuenow={Math.round(rank.percent)} aria-valuemin={0} aria-valuemax={100} aria-label="Progres tingkat">
                  <div className="h-full rounded-full bg-[#E3A63A] transition-all duration-500" style={{ width: `${rank.percent}%` }} />
                </div>
                <p className="mt-2 text-xs font-medium text-slate-300">{rank.next ? `${rank.remaining} RP lagi menuju ${rank.next.title}` : 'Tingkat tertinggi tercapai'}</p>
              </section>

              <section className="grid grid-cols-3 gap-2.5">
                {[
                  { icon: Flame, value: `${progress.streak}`, label: 'Hari beruntun' },
                  { icon: CheckCircle2, value: `${progress.masteredNodeIds.length}`, label: 'Simpul dikuasai' },
                  { icon: Clock, value: `${Math.round(progress.totalStudyMinutes || 0)}m`, label: 'Waktu belajar' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl bg-white p-3.5 text-center shadow-card ring-1 ring-slate-200/70 dark:bg-white/5 dark:shadow-none dark:ring-white/10">
                    <s.icon className="mx-auto h-5 w-5 text-[#CF8E1F]" />
                    <p className="mt-1.5 text-xl font-extrabold tabular-nums text-slate-900 dark:text-white">{s.value}</p>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{s.label}</p>
                  </div>
                ))}
              </section>

              <section>
                <h3 className="mb-1 text-base font-extrabold text-slate-900 dark:text-white">Penguasaan per domain</h3>
                <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">Dihitung dari simpul yang lulus Cek Paham, bukan dari materi yang sekadar dibuka.</p>
                <ul className="space-y-3">
                  {domainMastery.map((row) => (
                    <li key={row.domain}>
                      <div className="mb-1 flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-100">
                        <span>{row.domain}</span>
                        <span className="text-xs tabular-nums text-slate-500 dark:text-slate-400">{row.done} / {row.total}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
                        <div className="h-full rounded-full bg-emerald-500 transition-all duration-500" style={{ width: `${Math.round((row.done / Math.max(1, row.total)) * 100)}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="mb-1 text-base font-extrabold text-slate-900 dark:text-white">Ulangi untuk mengingat</h3>
                <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">Materi yang sudah dikuasai. Uji ulang berkala menjaga ingatan; jadwal otomatis belum tersedia.</p>
                {masteredEntries.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-slate-300 p-5 text-center text-sm text-slate-500 dark:border-white/15 dark:text-slate-400">Belum ada simpul yang dikuasai. Selesaikan Cek Paham pertamamu dari tab Peta.</p>
                ) : (
                  <ul className="space-y-2">
                    {masteredEntries.slice(0, 4).map(({ node }) => (
                      <li key={node.id}>
                        <button onClick={() => open(node.id)} className="flex w-full items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-card ring-1 ring-slate-200/70 transition-colors hover:ring-[#E3A63A] dark:bg-white/5 dark:shadow-none dark:ring-white/10">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"><Check className="h-4 w-4" strokeWidth={3} /></span>
                          <span className="min-w-0 flex-1">
                            <span className="eyebrow block">{node.stepNumber || node.domain}</span>
                            <span className="block truncate text-sm font-bold text-slate-900 dark:text-white">{node.label}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-400" />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </div>
          )}

          {tab === 'saved' && (
            filteredSaved.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center dark:border-white/15">
                <Bookmark className="mx-auto h-8 w-8 text-slate-400" />
                <h3 className="mt-3 text-base font-extrabold text-slate-900 dark:text-white">{savedEntries.length === 0 ? 'Belum ada konsep tersimpan' : 'Tidak ada hasil'}</h3>
                <p className="mx-auto mt-1 max-w-xs text-sm text-slate-500 dark:text-slate-400">{savedEntries.length === 0 ? 'Ketuk ikon penanda pada simpul atau di halaman baca untuk menyimpannya di sini.' : 'Coba kata kunci lain.'}</p>
              </div>
            ) : (
              <ul className="space-y-2.5">
                {filteredSaved.map(({ node, map }) => (
                  <li key={node.id} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-200/70 dark:bg-white/5 dark:shadow-none dark:ring-white/10">
                    <button onClick={() => open(node.id)} className="min-w-0 flex-1 text-left">
                      <span className="eyebrow block">{node.domain}{isNodeMastered(node.id) ? ' • Dikuasai' : ''}</span>
                      <span className="mt-0.5 block text-[15px] font-bold leading-snug text-slate-900 dark:text-white">{node.label}</span>
                      <span className="mt-0.5 block truncate text-xs text-slate-500 dark:text-slate-400">{map.topic}</span>
                    </button>
                    <button onClick={() => toggleBookmark(node.id)} aria-label="Hapus dari tersimpan" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E3A63A] text-[#151517]">
                      <Bookmark className="h-4 w-4" fill="currentColor" />
                    </button>
                  </li>
                ))}
              </ul>
            )
          )}

          {tab === 'notes' && (
            filteredNotes.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 p-8 text-center dark:border-white/15">
                <Highlighter className="mx-auto h-8 w-8 text-slate-400" />
                <h3 className="mt-3 text-base font-extrabold text-slate-900 dark:text-white">{highlights.length === 0 ? 'Belum ada stabilo' : 'Tidak ada hasil'}</h3>
                <p className="mx-auto mt-1 max-w-xs text-sm text-slate-500 dark:text-slate-400">{highlights.length === 0 ? 'Buka materi, sorot kalimat penting, dan tambahkan catatan. Semuanya terkumpul di sini.' : 'Coba kata kunci lain.'}</p>
              </div>
            ) : (
              <ul className="space-y-3">
                {filteredNotes.map((hl) => (
                  <li key={hl.id} className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-slate-200/70 dark:bg-white/5 dark:shadow-none dark:ring-white/10">
                    <div className="flex items-start gap-3">
                      <span aria-hidden className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${MARK_DOT[hl.color] || MARK_DOT.yellow}`} />
                      <div className="min-w-0 flex-1">
                        <p className="font-serif text-[1.0625rem] leading-relaxed text-slate-800 dark:text-slate-100">“{plain(hl.text)}”</p>
                        {hl.note && (
                          <p className="mt-2 rounded-xl bg-slate-100 px-3 py-2 text-sm leading-relaxed text-slate-700 dark:bg-white/10 dark:text-slate-200"><span className="font-bold">Catatanku: </span>{hl.note}</p>
                        )}
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <button onClick={() => open(hl.nodeId)} disabled={!findNode(hl.nodeId)} className="inline-flex min-w-0 items-center gap-1 text-xs font-bold text-[#9A6410] disabled:opacity-50 dark:text-[#E9C06B]">
                            <span className="truncate">{hl.nodeTitle}</span>
                            <ArrowRight className="h-3 w-3 shrink-0" />
                          </button>
                          <span className="flex shrink-0 items-center gap-0.5">
                            <span className="mr-1 text-[11px] text-slate-400">{formatDate(hl.createdAt)}</span>
                            <button onClick={() => copy(hl.id, hl.text)} aria-label="Salin kalimat" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10">
                              {copiedId === hl.id ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                            </button>
                            <button onClick={() => removeHighlight(hl.id)} aria-label="Hapus stabilo" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )
          )}
        </div>
      </div>
    </div>
  );
};
