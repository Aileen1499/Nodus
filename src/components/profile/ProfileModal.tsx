import React from 'react';
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
  Coins, 
  Globe2, 
  Briefcase,
  MessageSquare,
  FileSpreadsheet,
  Scale
} from 'lucide-react';

interface ProfileModalProps {
  onClose: () => void;
  onSelectNodeById?: (nodeId: string) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ onClose }) => {
  const { progress } = useUser();

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

  // Badge list with unlock conditions
  const badges = [
    {
      id: 'first-principles',
      name: 'First Principles Pioneer',
      desc: 'Membedah masalah ke hukum atomik dasar',
      unlocked: progress.masteredNodeIds.some(id => id.includes('first-principles') || id.includes('musk')),
      icon: Briefcase,
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/30',
    },
    {
      id: 'inflation-shield',
      name: 'Anti-Inflation Shield',
      desc: 'Memahami erosi nilai uang fiat & saham riil',
      unlocked: progress.masteredNodeIds.some(id => id.includes('inflasi')),
      icon: TrendingUp,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      id: 'neuro-marketer',
      name: 'Behavioral Alchemist',
      desc: 'Menguasai Decoy Effect & Sensory Framing',
      unlocked: progress.masteredNodeIds.some(id => id.includes('fnb') || id.includes('decoy')),
      icon: Brain,
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/30',
    },
    {
      id: 'geopolitical-sovereign',
      name: 'Geopolitik Navigator',
      desc: 'Menguasai choke points & perang mata uang',
      unlocked: progress.masteredNodeIds.some(id => id.includes('geo') || id.includes('choke')),
      icon: Globe2,
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30',
    },
    {
      id: 'streak-master',
      name: 'Iron Consistency',
      desc: 'Menjaga streak belajar selama minimal 3 hari berturut-turut',
      unlocked: progress.streak >= 3,
      icon: Flame,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/30',
    },
    {
      id: 'master-negotiator',
      name: 'Master Negosiator FBI',
      desc: 'Menguasai Tactical Empathy, BATNA, dan Piramida Minto',
      unlocked: progress.masteredNodeIds.some(id => id.includes('nego') || id.includes('batna') || id.includes('minto')),
      icon: MessageSquare,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/30',
    },
    {
      id: 'financial-modeler',
      name: 'Data & Financial Architect',
      desc: 'Menguasai Model 3-Statement, Formula Excel & SQL Query',
      unlocked: progress.masteredNodeIds.some(id => id.includes('excel') || id.includes('3statement') || id.includes('sql')),
      icon: FileSpreadsheet,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/30',
    },
    {
      id: 'legal-tax-shield',
      name: 'Benteng Hukum & Pajak',
      desc: 'Menguasai SHA, Vesting, HKI, dan Optimalisasi Pajak UU HPP',
      unlocked: progress.masteredNodeIds.some(id => id.includes('hukum') || id.includes('sha') || id.includes('pajak')),
      icon: Scale,
      color: 'text-violet-500 bg-violet-500/10 border-violet-500/30',
    },
    {
      id: 'wealth-builder',
      name: 'Equity Multiplier',
      desc: 'Mengumpulkan lebih dari 250 Rank Points',
      unlocked: progress.rankPoints >= 250,
      icon: Coins,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/30',
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
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-50">Profil Kognitif & Pencapaian</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Metrik retensi dan lencana mastery Anda</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
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

        </div>

      </div>
    </div>
  );
};

