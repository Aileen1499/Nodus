import React, { useState, useMemo } from 'react';
import { MOCK_MINDMAPS } from '../../data/mockMindmaps';
import { TOPIC_REGISTRY } from '../../lib/topicEngine';
import { STRUCTURED_CURRICULA } from '../../lib/curriculumData';
import { MindmapData } from '../../types';
import { useUser } from '../../context/UserContext';
import { X, Search, Sparkles, CheckCircle2, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface ExploreModalProps {
  onClose: () => void;
  onSelectTopic: (topic: string) => void;
}

export const ExploreModal: React.FC<ExploreModalProps> = ({ onClose, onSelectTopic }) => {
  const { isNodeMastered } = useUser();
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>('all');

  const topicsList = useMemo(() => {
    const map = new Map<string, MindmapData>();
    // 1. First priority: Structured step-by-step pathways (Langkah 1.1 -> 3.2)
    (Object.values(STRUCTURED_CURRICULA) as MindmapData[]).forEach((m: MindmapData) => map.set(m.id, m));
    // 2. Core distinct domains
    (Object.values(TOPIC_REGISTRY) as MindmapData[]).forEach((m: MindmapData) => {
      if (!map.has(m.id)) map.set(m.id, m);
    });
    // 3. Multi-discipline tracks
    (Object.values(MOCK_MINDMAPS) as MindmapData[]).forEach((m: MindmapData) => {
      if (!map.has(m.id)) map.set(m.id, m);
    });
    return Array.from(map.values());
  }, []);

  const filtered = topicsList.filter((m) => {
    const matchesSearch =
      m.topic.toLowerCase().includes(searchFilter.toLowerCase()) ||
      m.description.toLowerCase().includes(searchFilter.toLowerCase());

    if (selectedDomain === 'all') return matchesSearch;
    return matchesSearch && m.nodes.some((n) => n.domain === selectedDomain);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-md">
      <div className="flex flex-col w-full max-w-2xl max-h-[85vh] rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0B0F19] shadow-2xl overflow-hidden transition-colors duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-5 sm:px-6 py-4 bg-slate-50 dark:bg-[#0F172A]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">Katalog Pengetahuan NODUS</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Pilih kurikulum multi-disiplin untuk dibedah di kanvas</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search & Domain Filter Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#0B0F19] space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Cari topik kurikulum (misal: 'Miliarder', 'Saham', 'Negosiasi', 'Excel', 'Pajak')..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
          </div>

          {/* Domain Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
            <span className="flex items-center gap-1 text-slate-400 font-semibold shrink-0 mr-1">
              <Layers className="h-3 w-3" />
              Domain:
            </span>
            {['all', 'Bisnis', 'Ekonomi', 'Keuangan', 'Psikologi', 'Geopolitik', 'Komunikasi', 'Hukum', 'Data & Analitik', 'Pajak'].map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`rounded-lg px-2.5 py-1 font-medium transition-all shrink-0 ${
                  selectedDomain === domain
                    ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {domain === 'all' ? 'Semua' : domain}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center text-slate-500 dark:text-slate-400">
              <BookOpen className="h-10 w-10 text-slate-400 mb-2 opacity-50" />
              <p className="text-sm font-semibold">Tidak ada topik yang cocok</p>
              <p className="text-xs mt-1">Coba gunakan kata kunci lain atau gunakan fitur pencarian AI di halaman utama.</p>
            </div>
          ) : (
            filtered.map((map) => {
              const rootNode = map.nodes.find((n) => n.id === map.rootId) || map.nodes[0];
              const masteredCount = map.nodes.filter((n) => isNodeMastered(n.id)).length;
              const isFullyMastered = masteredCount === map.nodes.length;

              return (
                <div
                  key={map.id}
                  onClick={() => {
                    onSelectTopic(map.topic);
                    onClose();
                  }}
                  className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/80 dark:bg-slate-900/60 p-4 hover:border-indigo-500/60 hover:shadow-md cursor-pointer transition-all duration-200"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="rounded-md bg-indigo-50 dark:bg-indigo-500/15 px-2 py-0.5 text-[10px] font-bold text-indigo-700 dark:text-indigo-400 border border-indigo-500/20">
                        {rootNode.domain}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {map.nodes.length} Simpul Ilmu
                      </span>
                      {isFullyMastered ? (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="h-3 w-3" />
                          Selesai Dikuasai
                        </span>
                      ) : masteredCount > 0 ? (
                        <span className="text-[11px] font-medium text-amber-600 dark:text-amber-400">
                          Progres: {masteredCount}/{map.nodes.length}
                        </span>
                      ) : null}
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {map.topic}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {map.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <div className="flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>+{map.nodes.length * 80} RP</span>
                    </div>

                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white text-slate-600 dark:text-slate-300 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};

