import React, { useMemo, useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useAuth } from '../../context/AuthContext';
import { DomainType, MindmapData, MindmapNode } from '../../types';
import { allNodes, findNode } from '../../lib/nodeIndex';
import { plain } from '../../lib/pathLogic';
import { WeeklyRecap } from '../growth/WeeklyRecap';
import { Cloud, CheckCircle, Search, Bookmark, Highlighter, Trash2, Copy, Check, ArrowRight, Flame, Clock, CheckCircle2, Play, Trophy, Sparkles, ChevronRight } from 'lucide-react';

interface ProfileModalProps {
  /** Unused: the vault is a full tab, closed by navigating away. */
  onClose?: () => void;
  /** Open a lesson (and the curriculum it belongs to) from the vault. */
  onOpenNode?: (node: MindmapNode, map: MindmapData) => void;
  /** Open the sign-in sheet so progress can sync across devices. */
  onOpenAuth?: () => void;
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

const MARK_COLOR: Record<string, string> = {
  yellow: '#E3A63A',
  emerald: '#2E7D5B',
  indigo: '#4A7BB5',
  rose: '#C5506A',
};

const DOMAIN_COLOR: Record<DomainType, string> = {
  Bisnis: '#CF8E1F',
  Ekonomi: '#2E7D5B',
  Keuangan: '#3C6E9E',
  Psikologi: '#B5476A',
  Geopolitik: '#7A5BA8',
  Komunikasi: '#D2693A',
  Hukum: '#6B6F78',
  'Data & Analitik': '#2A8C8C',
  Pajak: '#8A6A3B',
};
const domainColor = (d: string) => DOMAIN_COLOR[d as DomainType] || '#CF8E1F';

const formatDate = (iso: string) => {
  try {
    return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  } catch {
    return '';
  }
};

const CARD = 'rounded-2xl bg-white shadow-card ring-1 ring-slate-200/70 dark:bg-[#1C1C1F] dark:shadow-none dark:ring-white/10';
const SUB = 'text-slate-600 dark:text-slate-300';

const ProgressRing: React.FC<{ percent: number; label: string }> = ({ percent, label }) => {
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-24 w-24 shrink-0" role="progressbar" aria-valuenow={Math.round(percent)} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <svg viewBox="0 0 96 96" className="h-full w-full -rotate-90">
        <circle cx="48" cy="48" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" />
        <circle cx="48" cy="48" r={r} fill="none" stroke="#E3A63A" strokeWidth="8" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - percent / 100)} className="transition-all duration-700" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-2xl font-medium tabular-nums leading-none text-white">{Math.round(percent)}<span className="text-sm text-[#E3A63A]">%</span></span>
      </div>
    </div>
  );
};

const EmptyState: React.FC<{ icon: React.ReactNode; title: string; body: string; hints?: string[] }> = ({ icon, title, body, hints }) => (
  <div className={`${CARD} px-6 py-10 text-center`}>
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FDF0D5] text-[#9A6410] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">{icon}</div>
    <h3 className="mt-4 font-serif text-xl font-medium text-slate-900 dark:text-white">{title}</h3>
    <p className={`mx-auto mt-1.5 max-w-xs text-sm leading-relaxed ${SUB}`}>{body}</p>
    {hints && (
      <ol className="mx-auto mt-5 max-w-xs space-y-2 text-left">
        {hints.map((h, i) => (
          <li key={h} className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3A63A] text-xs font-extrabold text-[#151517]">{i + 1}</span>
            <span className={`pt-0.5 text-sm leading-snug ${SUB}`}>{h}</span>
          </li>
        ))}
      </ol>
    )}
  </div>
);

const SectionHead: React.FC<{ title: string; hint?: string }> = ({ title, hint }) => (
  <div className="mb-3">
    <h3 className="font-serif text-xl font-medium tracking-tight text-slate-900 dark:text-white">{title}</h3>
    {hint && <p className={`mt-0.5 text-[13px] leading-relaxed ${SUB}`}>{hint}</p>}
  </div>
);

export const ProfileModal: React.FC<ProfileModalProps> = ({ onOpenNode, onOpenAuth }) => {
  const { user } = useAuth();
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

  // Group saved concepts by learning path once the list grows
  const savedGroups = useMemo(() => {
    const groups = new Map<string, typeof filteredSaved>();
    filteredSaved.forEach((e) => {
      const list = groups.get(e.map.topic) || [];
      list.push(e);
      groups.set(e.map.topic, list);
    });
    return Array.from(groups.entries());
  }, [filteredSaved]);
  const grouped = filteredSaved.length > 4 && savedGroups.length > 1;

  const resumeEntry = progress.lastOpenedNodeId && !progress.masteredNodeIds.includes(progress.lastOpenedNodeId) ? findNode(progress.lastOpenedNodeId) : undefined;
  const starter = useMemo(() => {
    const all = allNodes();
    return all.find(({ node }) => node.level > 0 && !node.prerequisiteId) || all[0];
  }, []);

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
    { id: 'notes', label: 'Catatan', count: highlights.length },
  ];

  const savedCard = ({ node, map }: { node: MindmapNode; map: MindmapData }) => {
    const color = domainColor(node.domain);
    return (
      <li key={node.id} className={`${CARD} overflow-hidden`}>
        <button onClick={() => open(node.id)} className="block w-full px-4 pb-2 pt-4 text-left">
          <span className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide" style={{ backgroundColor: `${color}1F`, color }}>
              <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />{node.domain}
            </span>
            {isNodeMastered(node.id) && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"><Check className="h-3 w-3" strokeWidth={3} />Dikuasai</span>
            )}
          </span>
          <span className="mt-2.5 block font-serif text-[1.1875rem] font-medium leading-snug text-slate-900 dark:text-white">{node.label}</span>
          {node.summary && <span className={`mt-1 line-clamp-2 block text-sm leading-relaxed ${SUB}`}>{plain(node.summary)}</span>}
        </button>
        <div className="flex items-center justify-between gap-2 border-t border-slate-100 px-4 py-1.5 dark:border-white/10">
          <span className={`min-w-0 truncate text-xs font-semibold ${SUB}`}>{map.topic}</span>
          <span className="flex shrink-0 items-center gap-1">
            <button onClick={() => toggleBookmark(node.id)} aria-label="Lepas simpan" className="flex h-11 w-11 items-center justify-center rounded-full text-[#CF8E1F] transition-colors hover:bg-[#FDF0D5] dark:text-[#E9C06B] dark:hover:bg-[#E3A63A]/15">
              <Bookmark className="h-[18px] w-[18px]" fill="currentColor" />
            </button>
            <button onClick={() => open(node.id)} className="inline-flex h-11 items-center gap-1 rounded-full bg-[#151517] px-4 text-[13px] font-bold text-[#FBF9F5] transition-transform active:scale-95 dark:bg-[#FBF9F5] dark:text-[#121214]">
              Buka<ArrowRight className="h-3.5 w-3.5" />
            </button>
          </span>
        </div>
      </li>
    );
  };

  return (
    <div className="fixed inset-0 z-50 pt-[env(safe-area-inset-top)] animate-fade-in bg-[#FBF9F5] dark:bg-[#121214]" role="dialog" aria-modal="true" aria-label="Brankas pengetahuan">
      <div className="flex h-full w-full flex-col overflow-hidden">
        <header className="shrink-0 border-b border-slate-200/70 px-5 pb-3 pt-4 dark:border-white/10 sm:px-7">
         <div className="mx-auto w-full max-w-3xl">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="eyebrow">Pengetahuan pribadi</p>
              <h2 className="font-serif text-[1.75rem] font-medium leading-tight tracking-tight text-slate-900 dark:text-white">Brankas</h2>
            </div>
            {user ? (
              <span className="mt-1 inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-3 text-[11px] font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                <CheckCircle className="h-3.5 w-3.5" />Tersinkron
              </span>
            ) : (
              <button onClick={onOpenAuth} className="mt-0.5 inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-[#FDF0D5] px-3.5 text-[12px] font-bold text-[#7A4D0A] transition-colors hover:bg-[#FBE5B8] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">
                <Cloud className="h-4 w-4" />Masuk untuk sinkron
              </button>
            )}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-white/5" role="tablist">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`flex min-h-[44px] min-w-0 items-center justify-center gap-1.5 rounded-xl px-2 text-[13px] font-bold transition-all ${tab === t.id ? 'bg-white text-slate-900 shadow-sm dark:bg-[#FBF9F5] dark:text-[#121214]' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}
              >
                {t.label}
                {t.count !== undefined && t.count > 0 && <span className="rounded-full bg-[#E3A63A] px-1.5 text-[10px] font-extrabold tabular-nums text-[#151517]">{t.count}</span>}
              </button>
            ))}
          </div>
         </div>
        </header>

        <div className="flex-1 overflow-y-auto">
         <div className="mx-auto w-full max-w-3xl px-5 pb-32 pt-5 sm:px-7">
          {tab !== 'overview' && (savedEntries.length > 0 || highlights.length > 0) && (
            <label className="mb-4 flex min-h-[48px] items-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-4 focus-within:border-[#CF8E1F] focus-within:ring-2 focus-within:ring-[#E3A63A]/30 dark:border-white/10 dark:bg-[#1C1C1F]">
              <Search className="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-300" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={tab === 'saved' ? 'Cari konsep tersimpan…' : 'Cari stabilo atau catatan…'} aria-label="Cari di Brankas" className="min-w-0 flex-1 bg-transparent text-[15px] text-slate-900 placeholder-slate-500 focus:outline-none dark:text-white dark:placeholder-slate-400" />
            </label>
          )}

          {tab === 'overview' && (
            <div className="space-y-7">
              <section className="relative overflow-hidden rounded-3xl bg-[#151517] p-5 text-white ring-1 ring-white/10 dark:bg-[#1C1C1F]">
                <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#E3A63A]/20 blur-3xl" />
                <div className="relative flex items-center gap-4">
                  <ProgressRing percent={rank.percent} label="Progres tingkat" />
                  <div className="min-w-0 flex-1">
                    <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#E3A63A]"><Trophy className="h-3.5 w-3.5" />Tingkat saat ini</p>
                    <h3 className="mt-1 font-serif text-[1.625rem] font-medium leading-tight">{rank.current.title}</h3>
                    <p className="mt-1 text-sm font-bold tabular-nums text-[#E3A63A]">{progress.rankPoints} RP</p>
                  </div>
                </div>
                <div className="relative mt-4 rounded-2xl bg-white/10 px-4 py-3">
                  <p className="text-[13px] font-medium leading-snug text-slate-200">
                    {rank.next ? <><span className="font-bold text-white">{rank.remaining} RP lagi</span> menuju {rank.next.title}</> : 'Tingkat tertinggi tercapai'}
                  </p>
                </div>
              </section>

              <WeeklyRecap />

              <section className="grid grid-cols-3 gap-2.5">
                {[
                  { icon: Flame, value: `${progress.streak}`, label: 'Hari beruntun', tint: '#D2693A' },
                  { icon: CheckCircle2, value: `${progress.masteredNodeIds.length}`, label: 'Dikuasai', tint: '#2E7D5B' },
                  { icon: Clock, value: `${Math.round(progress.totalStudyMinutes || 0)}`, unit: 'mnt', label: 'Waktu belajar', tint: '#CF8E1F' },
                ].map((s) => (
                  <div key={s.label} className={`${CARD} px-2 py-3.5 text-center`}>
                    <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full" style={{ backgroundColor: `${s.tint}1F`, color: s.tint }}><s.icon className="h-[18px] w-[18px]" /></span>
                    <p className="mt-2 font-serif text-2xl font-medium leading-none tabular-nums text-slate-900 dark:text-white">{s.value}{s.unit && <span className={`ml-0.5 font-sans text-[11px] font-bold ${SUB}`}>{s.unit}</span>}</p>
                    <p className={`mt-1.5 text-[11px] font-semibold leading-tight ${SUB}`}>{s.label}</p>
                  </div>
                ))}
              </section>

              {resumeEntry && onOpenNode ? (
                <section>
                  <button onClick={() => open(resumeEntry.node.id)} className="group flex w-full items-center gap-4 rounded-2xl bg-[#E3A63A] p-4 text-left text-[#151517] shadow-card transition-transform active:scale-[0.99]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#151517] text-[#E3A63A]"><Play className="h-5 w-5" fill="currentColor" /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.1em] opacity-80">Lanjutkan belajar</span>
                      <span className="mt-0.5 block font-serif text-lg font-medium leading-snug">{resumeEntry.node.label}</span>
                      <span className="mt-0.5 block truncate text-xs font-semibold opacity-80">{resumeEntry.map.topic}</span>
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0" />
                  </button>
                </section>
              ) : null}

              <section>
                <SectionHead title="Penguasaan per domain" hint="Dihitung dari simpul yang lulus Cek Paham, bukan dari materi yang sekadar dibuka." />
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {domainMastery.map((row) => {
                    const pct = Math.round((row.done / Math.max(1, row.total)) * 100);
                    const color = domainColor(row.domain);
                    return (
                      <li key={row.domain} className={`${CARD} p-4`}>
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex min-w-0 items-center gap-2 text-[15px] font-bold text-slate-900 dark:text-white">
                            <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                            <span className="truncate">{row.domain}</span>
                          </span>
                          <span className="font-serif text-xl font-medium tabular-nums" style={{ color }}>{pct}%</span>
                        </div>
                        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-label={`Penguasaan ${row.domain}`}>
                          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct}%`, backgroundColor: color }} />
                        </div>
                        <p className={`mt-2 text-xs font-medium tabular-nums ${SUB}`}>{row.done} dari {row.total} simpul dikuasai</p>
                      </li>
                    );
                  })}
                </ul>
              </section>

              <section>
                <SectionHead title="Ulangi untuk mengingat" hint="Materi yang sudah dikuasai. Uji ulang berkala menjaga ingatan; jadwal otomatis belum tersedia." />
                {masteredEntries.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-[#E3A63A]/60 bg-[#FDF0D5]/50 px-6 py-8 text-center dark:border-[#E3A63A]/40 dark:bg-[#E3A63A]/10">
                    <Sparkles className="mx-auto h-7 w-7 text-[#CF8E1F] dark:text-[#E9C06B]" />
                    <h4 className="mt-3 font-serif text-xl font-medium text-slate-900 dark:text-white">Mulai perjalananmu</h4>
                    <p className={`mx-auto mt-1.5 max-w-xs text-sm leading-relaxed ${SUB}`}>Selesaikan Cek Paham pertamamu untuk membuka simpul pertama, mengumpulkan RP, dan memulai rangkaian hari beruntun.</p>
                    {starter && onOpenNode && (
                      <button onClick={() => open(starter.node.id)} className="btn-gold mt-5 min-h-[48px] px-6">Mulai belajar<ArrowRight className="h-4 w-4" /></button>
                    )}
                  </div>
                ) : (
                  <ul className="space-y-2.5">
                    {masteredEntries.slice(0, 4).map(({ node, map }) => (
                      <li key={node.id}>
                        <button onClick={() => open(node.id)} className={`${CARD} flex min-h-[64px] w-full items-center gap-3 p-3.5 text-left transition-colors hover:ring-[#E3A63A]`}>
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2E7D5B] text-white"><Check className="h-4 w-4" strokeWidth={3} /></span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-[15px] font-bold text-slate-900 dark:text-white">{node.label}</span>
                            <span className={`block truncate text-xs ${SUB}`}>{node.stepNumber || node.domain} · {map.topic}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-300" />
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
              savedEntries.length === 0 ? (
                <EmptyState
                  icon={<Bookmark className="h-7 w-7" />}
                  title="Belum ada konsep tersimpan"
                  body="Simpan konsep yang ingin kamu kunjungi lagi, lalu temukan semuanya rapi di sini."
                  hints={['Buka sebuah simpul dari Peta', 'Ketuk ikon penanda di halaman baca', 'Konsepnya muncul di Brankas']}
                />
              ) : (
                <div className={`${CARD} px-6 py-10 text-center`}>
                  <Search className="mx-auto h-7 w-7 text-slate-500 dark:text-slate-300" />
                  <h3 className="mt-3 font-serif text-xl font-medium text-slate-900 dark:text-white">Tidak ada hasil</h3>
                  <p className={`mt-1 text-sm ${SUB}`}>Coba kata kunci lain.</p>
                </div>
              )
            ) : grouped ? (
              <div className="space-y-6">
                {savedGroups.map(([topic, list]) => (
                  <section key={topic}>
                    <h3 className="mb-2.5 flex items-center justify-between gap-3">
                      <span className="eyebrow min-w-0 truncate">{topic}</span>
                      <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold tabular-nums text-slate-600 dark:bg-white/10 dark:text-slate-300">{list.length}</span>
                    </h3>
                    <ul className="space-y-3">{list.map(savedCard)}</ul>
                  </section>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">{filteredSaved.map(savedCard)}</ul>
            )
          )}

          {tab === 'notes' && (
            filteredNotes.length === 0 ? (
              highlights.length === 0 ? (
                <EmptyState
                  icon={<Highlighter className="h-7 w-7" />}
                  title="Belum ada stabilo"
                  body="Sorot kalimat penting saat membaca. Semua kutipan dan catatanmu terkumpul di sini."
                  hints={['Buka materi dan tahan pada sebuah kalimat', 'Pilih warna stabilo, tambahkan catatan', 'Kutipan tersimpan di Brankas']}
                />
              ) : (
                <div className={`${CARD} px-6 py-10 text-center`}>
                  <Search className="mx-auto h-7 w-7 text-slate-500 dark:text-slate-300" />
                  <h3 className="mt-3 font-serif text-xl font-medium text-slate-900 dark:text-white">Tidak ada hasil</h3>
                  <p className={`mt-1 text-sm ${SUB}`}>Coba kata kunci lain.</p>
                </div>
              )
            ) : (
              <ul className="space-y-3">
                {filteredNotes.map((hl) => {
                  const color = MARK_COLOR[hl.color] || MARK_COLOR.yellow;
                  return (
                    <li key={hl.id} className={`${CARD} overflow-hidden`} style={{ borderLeft: `4px solid ${color}` }}>
                      <div className="px-4 pb-1 pt-4">
                        <p className="font-serif text-[1.125rem] leading-relaxed text-slate-900 dark:text-slate-50">“{plain(hl.text)}”</p>
                        {hl.note && (
                          <div className="mt-3 rounded-xl px-3.5 py-2.5" style={{ backgroundColor: `${color}1A` }}>
                            <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-700 dark:text-slate-200">Catatanku</p>
                            <p className="mt-0.5 text-sm leading-relaxed text-slate-800 dark:text-slate-100">{hl.note}</p>
                          </div>
                        )}
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-2 border-t border-slate-100 pl-4 pr-2 dark:border-white/10">
                        <button onClick={() => open(hl.nodeId)} disabled={!findNode(hl.nodeId)} className="flex min-h-[44px] min-w-0 flex-1 flex-col items-start justify-center text-left disabled:opacity-60">
                          <span className="flex w-full items-center gap-1 text-[13px] font-bold text-[#9A6410] dark:text-[#E9C06B]">
                            <span className="truncate">{hl.nodeTitle}</span>
                            <ArrowRight className="h-3 w-3 shrink-0" />
                          </span>
                          <span className={`text-[11px] ${SUB}`}>{hl.domain} · {formatDate(hl.createdAt)}</span>
                        </button>
                        <span className="flex shrink-0 items-center">
                          <button onClick={() => copy(hl.id, hl.text)} aria-label="Salin kalimat" className="flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10">
                            {copiedId === hl.id ? <Check className="h-[18px] w-[18px] text-emerald-600 dark:text-emerald-400" /> : <Copy className="h-[18px] w-[18px]" />}
                          </button>
                          <button onClick={() => removeHighlight(hl.id)} aria-label="Hapus stabilo" className="flex h-11 w-11 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:text-slate-300 dark:hover:bg-rose-500/10 dark:hover:text-rose-300">
                            <Trash2 className="h-[18px] w-[18px]" />
                          </button>
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )
          )}
         </div>
        </div>
      </div>
    </div>
  );
};
