import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { 
  X, 
  Award, 
  Sparkles, 
  Flame, 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Brain, 
  Globe2, 
  Briefcase,
  Highlighter,
  Trash2,
  Copy,
  Check
} from 'lucide-react';

interface ProfileModalProps {
  onClose: () => void;
  onSelectNodeById?: (nodeId: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const { progress, highlights, removeHighlight } = useUser();
  const [activeTab, setActiveTab] = useState<'overview' | 'highlights'>('overview');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Compute Rank Title based on RP
  const getRankInfo = (rp: number) => {
    if (rp < 200) {
      return { title: 'Junior Analyst', nextLevel: 'Strategic Operator', nextTarget: 200, progressPercent: (rp / 200) * 100 };
    }
    if (rp < 500) {
      return { title: 'Strategic Operator', nextLevel: 'Executive Architect', nextTarget: 500, progressPercent: ((rp - 200) / 300) * 100 };
    }
    if (rp < 1000) {
      return { title: 'Executive Architect', nextLevel: 'Grand Sovereign', nextTarget: 1000, progressPercent: ((rp - 500) / 500) * 100 };
    }
    return { title: 'Grand Sovereign', nextLevel: 'Max Rank Achieved', nextTarget: 1000, progressPercent: 100 };
  };

  const rank = getRankInfo(progress.rankPoints);

  const handleCopyQuote = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Badge list with unlock conditions
  const badges = [
    {
      id: 'first-principles',
      name: 'First Principles Pioneer',
      desc: 'Membedah masalah ke hukum atomik dasar',
      unlocked: progress.masteredNodeIds.some(id => id.includes('first-principles') || id.includes('musk') || id.includes('zhero')),
      icon: Briefcase,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      id: 'inflation-shield',
      name: 'Anti-Inflation Shield',
      desc: 'Memahami erosi nilai uang fiat & saham riil',
      unlocked: progress.masteredNodeIds.some(id => id.includes('inflasi') || id.includes('macro')),
      icon: TrendingUp,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      id: 'neuro-marketer',
      name: 'Behavioral Alchemist',
      desc: 'Menguasai Decoy Effect & Sensory Framing',
      unlocked: progress.masteredNodeIds.some(id => id.includes('decoy') || id.includes('beh')),
      icon: Brain,
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/30',
    },
    {
      id: 'geopolitical-sovereign',
      name: 'Geopolitik Navigator',
      desc: 'Menguasai choke points & perang mata uang',
      unlocked: progress.masteredNodeIds.some(id => id.includes('geo') || id.includes('choke') || id.includes('forex')),
      icon: Globe2,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      id: 'corporate-founder',
      name: 'PT Corporate Architect',
      desc: 'Mendirikan badan usaha & tata kelola legal',
      unlocked: progress.masteredNodeIds.some(id => id.includes('corp') || id.includes('zhero-1')),
      icon: Award,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-4 backdrop-blur-md">
      <div className="flex flex-col w-full max-w-xl max-h-[88vh] rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-[#0B0F19] shadow-2xl overflow-hidden transition-colors duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-5 sm:px-6 py-4 bg-slate-50 dark:bg-[#0F172A]">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-emerald-400 p-[1.5px]">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-900 text-emerald-400">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">Profil Kognitif & Catatan</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Pencapaian mastery dan kalimat penting yang Anda stabilo</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Navigation: Ringkasan Prestasi vs Catatan Pentingku */}
        <div className="flex items-center gap-2 px-5 pt-3 pb-2 border-b border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-[#0B0F19]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Award className="h-3.5 w-3.5" />
            <span>Prestasi & Status</span>
          </button>

          <button
            onClick={() => setActiveTab('highlights')}
            className={`flex items-center gap-1.5 py-1.5 px-3.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'highlights'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Highlighter className="h-3.5 w-3.5" />
            <span>Catatan Pentingku</span>
            {highlights.length > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-white/25 text-[10px]">
                {highlights.length}
              </span>
            )}
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {activeTab === 'overview' ? (
            <>
              {/* Rank & Level Banner */}
              <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-emerald-500/10 p-5">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Tingkat Keahlian Kognitif
                    </span>
                    <h4 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                      {rank.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-sm">
                    <Sparkles className="h-4 w-4" />
                    <span>{progress.rankPoints} RP</span>
                  </div>
                </div>

                {/* Rank Progress Bar */}
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>Progress ke {rank.nextLevel}</span>
                    <span className="font-semibold">{Math.min(100, Math.round(rank.progressPercent))}%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-500"
                      style={{ width: `${Math.min(100, rank.progressPercent)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3.5 text-center">
                  <Flame className="h-5 w-5 text-rose-500 mx-auto mb-1 animate-bounce" />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{progress.streak} Hari</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Daily Streak</div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3.5 text-center">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{progress.masteredNodeIds.length} Simpul</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Dikuasai Penuh</div>
                </div>

                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-3.5 text-center">
                  <Zap className="h-5 w-5 text-indigo-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{progress.credits} Token</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">AI Deep-Dive</div>
                </div>
              </div>

              {/* Achievement Badges Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Lencana Prestasi Eksekutif
                  </h4>
                  <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                    {badges.filter(b => b.unlocked).length} dari {badges.length} Terbuka
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {badges.map((badge) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={badge.id}
                        className={`flex items-start gap-3 rounded-2xl border p-3.5 transition-all ${
                          badge.unlocked
                            ? 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm'
                            : 'border-slate-200/50 dark:border-slate-800/40 bg-slate-100/50 dark:bg-slate-900/20 opacity-50'
                        }`}
                      >
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${badge.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h5 className="text-xs font-bold text-slate-900 dark:text-slate-100 truncate">
                              {badge.name}
                            </h5>
                            {badge.unlocked && (
                              <ShieldCheck className="h-3 w-3 text-emerald-500 shrink-0" />
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5 line-clamp-2">
                            {badge.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            /* Highlights / Catatan Pentingku View */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white">
                    Koleksi Kalimat Penting (Stabilo)
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Kutipan emas yang Anda sorot di Micro-Reader tersimpan di sini
                  </p>
                </div>
                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
                  {highlights.length} Catatan
                </span>
              </div>

              {highlights.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-8 text-center space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-500 mx-auto">
                    <Highlighter className="h-6 w-6" />
                  </div>
                  <h5 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Belum Ada Kalimat yang Di-Stabilo
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Buka materi apapun di kanvas, lalu sorot teks dengan mouse atau jari Anda untuk menandai kalimat penting dengan stabilo.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {highlights.map((hl) => (
                    <div
                      key={hl.id}
                      className="rounded-2xl border border-amber-500/30 bg-amber-50/30 dark:bg-slate-900/70 p-4 shadow-sm space-y-2 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/70 px-2 py-0.5 rounded-md">
                            {hl.domain}
                          </span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-[280px]">
                            {hl.nodeTitle}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleCopyQuote(hl.id, hl.text)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                            title="Salin Kalimat"
                          >
                            {copiedId === hl.id ? (
                              <Check className="h-3.5 w-3.5 text-emerald-500" />
                            ) : (
                              <Copy className="h-3.5 w-3.5" />
                            )}
                          </button>
                          <button
                            onClick={() => removeHighlight(hl.id)}
                            className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                            title="Hapus Stabilo"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-100 font-serif italic border-l-2 border-amber-500 pl-3 py-0.5">
                        "{hl.text}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
