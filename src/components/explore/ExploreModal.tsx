import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Search, Layers, Clock, Wrench, Play } from 'lucide-react';
import { MindmapData } from '../../types';
import { useUser } from '../../context/UserContext';
import { allMaps, findNode } from '../../lib/nodeIndex';
import { getRecommendedNode } from '../../lib/pathLogic';

interface ExploreModalProps {
  onClose: () => void;
  onSelectMap: (map: MindmapData) => void;
}

const FILTERS = ['Semua', 'Bisnis', 'Keuangan', 'Ekonomi', 'Psikologi', 'Hukum', 'Pajak', 'Pemasaran'] as const;

// Kategori jalur ditentukan dari domain dominan simpulnya, bukan dari pencocokan teks kasar.
const trackCategories = (map: MindmapData): Set<string> => {
  const counts = new Map<string, number>();
  map.nodes.forEach((n) => counts.set(n.domain, (counts.get(n.domain) || 0) + 1));
  const cats = new Set<string>();
  const total = map.nodes.length || 1;
  counts.forEach((count, domain) => {
    if (count / total >= 0.2) cats.add(domain);
  });
  const text = `${map.topic} ${map.description}`.toLowerCase();
  if (/pemasaran|marketing|brand|sales/.test(text)) cats.add('Pemasaran');
  if (/pajak|tax/.test(text)) cats.add('Pajak');
  if (/hukum|legal|pt |cv /.test(text)) cats.add('Hukum');
  return cats;
};

const dominantDomain = (map: MindmapData): string => {
  const counts = new Map<string, number>();
  map.nodes.forEach((n) => counts.set(n.domain, (counts.get(n.domain) || 0) + 1));
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Bisnis';
};

export const ExploreModal: React.FC<ExploreModalProps> = ({ onClose, onSelectMap }) => {
  const { isNodeMastered, progress } = useUser();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Semua');

  const maps = useMemo(() => allMaps().filter((m) => m.nodes.length > 0), []);

  const resume = useMemo(() => {
    const last = progress.lastOpenedNodeId ? findNode(progress.lastOpenedNodeId) : undefined;
    if (!last) return null;
    const next = getRecommendedNode(last.map, isNodeMastered);
    return next ? { map: last.map, node: next } : null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress.lastOpenedNodeId, progress.masteredNodeIds]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return maps.filter((m) => {
      if (filter !== 'Semua' && !trackCategories(m).has(filter)) return false;
      if (!q) return true;
      return (
        m.topic.toLowerCase().includes(q) ||
        m.description.toLowerCase().includes(q) ||
        m.nodes.some((n) => n.label.toLowerCase().includes(q))
      );
    });
  }, [maps, query, filter]);

  const totalLessons = maps.reduce((sum, m) => sum + m.nodes.length, 0);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FBF9F5] dark:bg-[#151517] animate-fade-in" role="dialog" aria-label="Kurikulum">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-slate-200/80 bg-[#FBF9F5]/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-[#151517]/95 sm:px-8">
        <button onClick={onClose} aria-label="Kembali ke peta" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="min-w-0">
          <p className="eyebrow">Kurikulum</p>
          <h2 className="truncate font-serif text-xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-2xl">Semua jalur belajar</h2>
        </div>
        <span className="ml-auto hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300 sm:inline">
          {maps.length} jalur · {totalLessons} pelajaran
        </span>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6 sm:px-8 sm:py-8">
          {/* Resume */}
          {resume && (
            <button
              onClick={() => onSelectMap(resume.map)}
              className="group flex w-full items-center gap-4 rounded-3xl bg-[#151517] p-4 text-left text-[#FBF9F5] shadow-float transition-transform hover:-translate-y-0.5 dark:bg-[#1F1F23] sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E3A63A] text-[#151517]"><Play className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1">
                <span className="eyebrow !text-[#E9C06B]">Lanjutkan belajar</span>
                <span className="block truncate text-base font-bold">{resume.node.label}</span>
                <span className="block truncate text-xs text-slate-400">{resume.map.topic}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>
          )}

          {/* Search + filters */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari jalur atau pelajaran, misalnya: arus kas, saham, PT, negosiasi"
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-[#CF8E1F] focus:outline-none focus:ring-2 focus:ring-[#E3A63A]/30 dark:border-slate-700 dark:bg-[#1F1F23] dark:text-white"
              />
            </div>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:px-0" role="group" aria-label="Filter kategori">
              {FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={`chip ${active ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#E3A63A] dark:text-[#151517]' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="surface flex flex-col items-center px-6 py-14 text-center">
              <Layers className="mb-3 h-10 w-10 text-slate-300 dark:text-slate-600" />
              <p className="font-bold text-slate-900 dark:text-white">Tidak ada jalur yang cocok</p>
              <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">Coba kata kunci lain, atau ketik topik apa pun di kolom Bedah pada halaman Peta.</p>
              <button onClick={() => { setQuery(''); setFilter('Semua'); }} className="btn-ink mt-5 !py-2 text-xs">Reset pencarian</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((map) => {
                const mastered = map.nodes.filter((n) => isNodeMastered(n.id)).length;
                const total = map.nodes.length;
                const pct = Math.round((mastered / total) * 100);
                const done = mastered === total;
                const toolCount = map.nodes.filter((n) => n.toolId).length;
                const next = getRecommendedNode(map, isNodeMastered);
                return (
                  <button
                    key={map.id}
                    onClick={() => onSelectMap(map)}
                    className="surface group flex flex-col p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-float"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="chip !py-1 bg-[#FDF0D5] text-[#7A4D0A] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">{dominantDomain(map)}</span>
                      {done && (
                        <span className="chip !py-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                          <CheckCircle2 className="h-3 w-3" /> Tuntas
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 dark:text-white">{map.topic}</h3>
                    <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{map.description}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1"><Layers className="h-3.5 w-3.5" />{total} pelajaran</span>
                      <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />±{total * 5} menit</span>
                      {toolCount > 0 && <span className="inline-flex items-center gap-1"><Wrench className="h-3.5 w-3.5" />{toolCount} alat</span>}
                    </div>

                    <div className="mt-4">
                      <div className="mb-1.5 flex justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                        <span>{mastered === 0 ? 'Belum dimulai' : `${mastered}/${total} dikuasai`}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div className="h-full rounded-full bg-[#E3A63A] transition-all" style={{ width: `${pct}%` }} />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 text-xs dark:border-slate-800">
                      <span className="min-w-0 truncate font-medium text-slate-500 dark:text-slate-400">
                        {done ? 'Ulangi kapan saja' : next ? `Berikutnya: ${next.label}` : ''}
                      </span>
                      <span className="inline-flex shrink-0 items-center gap-1 pl-3 font-bold text-[#9A6410] transition-transform group-hover:translate-x-1 dark:text-[#E9C06B]">
                        {mastered > 0 && !done ? 'Lanjut' : 'Buka peta'} <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
