import React, { useState, useMemo } from 'react';
import { MOCK_MINDMAPS } from '../../data/mockMindmaps';
import { TOPIC_REGISTRY } from '../../lib/topicEngine';
import { STRUCTURED_CURRICULA } from '../../lib/curriculumData';
import { MindmapData } from '../../types';
import { useUser } from '../../context/UserContext';
import { 
  X, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Layers,
  GraduationCap,
  TrendingUp,
  Building2,
  ShieldCheck,
  Brain,
  Globe2
} from 'lucide-react';

interface ExploreModalProps {
  onClose: () => void;
  onSelectTopic: (topic: string) => void;
}

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  'Bisnis': Building2,
  'Ekonomi': TrendingUp,
  'Keuangan': Sparkles,
  'Psikologi': Brain,
  'Geopolitik': Globe2,
  'Hukum': ShieldCheck,
  'Pajak': ShieldCheck,
  'default': GraduationCap,
};

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
      m.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
      m.nodes.some((n) => n.label.toLowerCase().includes(searchFilter.toLowerCase()));

    if (!matchesSearch) return false;
    if (selectedDomain === 'all') return true;

    const domainLower = selectedDomain.toLowerCase();
    const matchesDomain =
      m.topic.toLowerCase().includes(domainLower) ||
      m.description.toLowerCase().includes(domainLower) ||
      m.nodes.some((n) => {
        const nodeDomainLower = n.domain.toLowerCase();
        if (nodeDomainLower === domainLower) return true;
        if (domainLower === 'hukum' && (nodeDomainLower.includes('hukum') || nodeDomainLower.includes('legal'))) return true;
        if (domainLower === 'pajak' && (n.label.toLowerCase().includes('pajak') || n.microContent.analogy.toLowerCase().includes('pajak'))) return true;
        if (domainLower === 'data & analitik' && (nodeDomainLower.includes('data') || nodeDomainLower.includes('analitik'))) return true;
        return false;
      });

    return matchesDomain;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-5 md:p-6 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="flex flex-col w-full max-w-4xl max-h-[90vh] rounded-[32px] border border-slate-200/90 dark:border-slate-800/90 bg-[#F4F7FC] dark:bg-[#0B0F19] shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-6 sm:px-8 py-5 bg-white/95 dark:bg-[#161E2E]/95 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-600 to-emerald-400 p-[1.5px] shadow-md shadow-indigo-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-900 text-emerald-400">
                <Compass className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Katalog Kurikulum Eksekutif
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Pilih topik strategis untuk langsung membedah peta simpul ilmu di kanvas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-800/80 transition-colors"
            aria-label="Tutup"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search & Domain Filter Bar */}
        <div className="px-6 sm:px-8 py-4 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-[#161E2E]/80 space-y-3">
          <div className="relative">
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Cari topik (misal: 'Zero-to-Hero', 'Saham', 'Negosiasi', 'Excel', 'Pajak')..."
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/90 py-3 pl-11 pr-4 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            />
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
          </div>

          {/* Domain Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <span className="flex items-center gap-1 text-slate-400 font-bold shrink-0 mr-1 text-[11px]">
              <Layers className="h-3.5 w-3.5" />
              Domain:
            </span>
            {['all', 'Bisnis', 'Ekonomi', 'Keuangan', 'Psikologi', 'Geopolitik', 'Komunikasi', 'Hukum', 'Data & Analitik', 'Pajak'].map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`rounded-xl px-3 py-1.5 font-bold transition-all shrink-0 ${
                  selectedDomain === domain
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {domain === 'all' ? 'Semua Topik' : domain}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid: Luxury Destination iOS Cards */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center text-slate-500 dark:text-slate-400">
              <Compass className="h-12 w-12 text-slate-400 mb-3 opacity-40 animate-pulse" />
              <p className="text-base font-bold">Tidak ada topik yang cocok</p>
              <p className="text-xs mt-1 max-w-sm">
                Coba gunakan kata kunci lain atau gunakan fitur pencarian AI di halaman utama.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {filtered.map((map) => {
                const rootNode = map.nodes.find((n) => n.id === map.rootId) || map.nodes[0];
                const masteredCount = map.nodes.filter((n) => isNodeMastered(n.id)).length;
                const isFullyMastered = masteredCount === map.nodes.length;
                const DomainIcon = DOMAIN_ICONS[rootNode.domain] || DOMAIN_ICONS['default'];

                return (
                  <div
                    key={map.id}
                    onClick={() => {
                      onSelectTopic(map.topic);
                      onClose();
                    }}
                    className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 dark:border-slate-800/90 bg-white dark:bg-[#161E2E] p-5 sm:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-indigo-500/50 hover:-translate-y-0.5 cursor-pointer transition-all duration-300 overflow-hidden"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <span className="flex items-center gap-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/15 px-3 py-1 text-[11px] font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-500/25">
                            <DomainIcon className="h-3 w-3" />
                            {rootNode.domain}
                          </span>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            {map.nodes.length} Simpul
                          </span>
                        </div>

                        {isFullyMastered ? (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                            <CheckCircle2 className="h-3 w-3" />
                            Dikuasai
                          </span>
                        ) : masteredCount > 0 ? (
                          <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/30">
                            {masteredCount}/{map.nodes.length}
                          </span>
                        ) : null}
                      </div>

                      {/* Title & Description */}
                      <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                        {map.topic}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mt-1.5 leading-relaxed">
                        {map.description}
                      </p>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-5 pt-3.5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400">
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>+{map.nodes.length * 80} RP Bonus</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                        <span>Buka Peta</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
