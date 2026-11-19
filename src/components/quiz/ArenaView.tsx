import React, { useMemo, useState } from 'react';
import { ArrowRight, Award, Flame, Lock, RefreshCw, Target } from 'lucide-react';
import { MindmapData, MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { allNodes } from '../../lib/nodeIndex';
import { getLockReason, getNodeState, plain } from '../../lib/pathLogic';
import { buildPracticeSet, isDueForReview, PracticeItem } from '../../lib/review';
import { PracticeSession } from './PracticeSession';
import { CertificateView } from './CertificateView';

interface ArenaViewProps {
  data: MindmapData;
  onClose: () => void;
  onSelectNode: (node: MindmapNode) => void;
}

type Filter = 'all' | 'todo' | 'done' | 'due';

export const ArenaView: React.FC<ArenaViewProps> = ({ data, onSelectNode }) => {
  const { isNodeMastered, progress } = useUser();
  const [filter, setFilter] = useState<Filter>('all');
  const [showCertificate, setShowCertificate] = useState(false);
  const [session, setSession] = useState<{ items: PracticeItem[]; title: string } | null>(null);

  const nodes = data.nodes;
  const masteredCount = nodes.filter((n) => isNodeMastered(n.id)).length;
  const pct = Math.round((masteredCount / Math.max(1, nodes.length)) * 100);

  // Pool latihan lintas semua jalur: hanya pelajaran yang sudah dikuasai.
  const masteredPool = useMemo(
    () => allNodes().filter((p) => progress.masteredNodeIds.includes(p.node.id)),
    [progress.masteredNodeIds]
  );
  const duePool = useMemo(
    () => masteredPool.filter((p) => isDueForReview(p.node.id, progress.lastReviewed)),
    [masteredPool, progress.lastReviewed]
  );
  const dueIds = useMemo(() => new Set(duePool.map((p) => p.node.id)), [duePool]);

  const startPractice = () => {
    const pool = duePool.length > 0 ? duePool : masteredPool;
    const items = buildPracticeSet(pool, 5);
    if (items.length > 0) setSession({ items, title: duePool.length > 0 ? 'Latihan harian' : 'Latihan bebas' });
  };

  const filtered = nodes.filter((n) => {
    const done = isNodeMastered(n.id);
    if (filter === 'todo') return !done;
    if (filter === 'done') return done;
    if (filter === 'due') return done && dueIds.has(n.id);
    return true;
  });

  const FILTERS: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'Semua', count: nodes.length },
    { id: 'todo', label: 'Belum lulus', count: nodes.length - masteredCount },
    { id: 'done', label: 'Dikuasai', count: masteredCount },
    { id: 'due', label: 'Perlu diulang', count: nodes.filter((n) => isNodeMastered(n.id) && dueIds.has(n.id)).length },
  ];

  const hero = (() => {
    if (masteredPool.length === 0)
      return { title: 'Belum ada yang bisa diulang', body: 'Lulus satu evaluasi dulu. Setelah itu soal-soalnya akan kembali secara berkala supaya ilmu tidak menguap.', cta: null as string | null };
    if (duePool.length > 0)
      return { title: `${duePool.length} pelajaran perlu diulang`, body: 'Lima soal campuran dari yang pernah Anda kuasai. Sekitar 3 menit, menjaga streak Anda.', cta: 'Mulai latihan 5 soal' };
    return { title: 'Semua ingatan masih segar', body: 'Tidak ada yang jatuh tempo. Mau latihan bebas tetap boleh.', cta: 'Latihan bebas 5 soal' };
  })();

  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col bg-[#FBF9F5] dark:bg-[#151517] animate-fade-in" role="dialog" aria-label="Arena">
        <div className="flex items-center gap-3 border-b border-slate-200/80 bg-[#FBF9F5]/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-[#151517]/95 sm:px-8">
          <div className="min-w-0">
            <p className="eyebrow">Arena</p>
            <h2 className="truncate font-serif text-xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-2xl">Uji pemahaman</h2>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-[#FDF0D5] px-3 py-1.5 text-xs font-bold text-[#7A4D0A] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">
            <Flame className="h-3.5 w-3.5" />{progress.streak} hari
          </span>
        </div>

        <div className="flex-1 overflow-y-auto pb-32">
          <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-8 sm:py-8">
            {/* Latihan harian */}
            <div className="rounded-3xl bg-[#151517] p-5 text-[#FBF9F5] shadow-float dark:bg-[#1F1F23] sm:p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E3A63A] text-[#151517]"><RefreshCw className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <p className="eyebrow !text-[#E9C06B]">Latihan harian</p>
                  <h3 className="mt-1 font-serif text-2xl font-semibold leading-snug">{hero.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{hero.body}</p>
                  {hero.cta && <button onClick={startPractice} className="btn-gold mt-4 !py-3">{hero.cta}<ArrowRight className="h-4 w-4" /></button>}
                </div>
              </div>
            </div>

            {/* Status jalur */}
            <div className="surface p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"><Award className="h-5 w-5" /></span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-slate-900 dark:text-white">{data.topic}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{masteredCount} dari {nodes.length} pelajaran lulus evaluasi</p>
                </div>
                <span className="text-lg font-extrabold text-emerald-700 dark:text-emerald-300">{pct}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${pct}%` }} />
              </div>
              {masteredCount === nodes.length && nodes.length > 0 && (
                <div className="mt-3 flex flex-wrap items-center gap-3 rounded-xl bg-emerald-50 px-3 py-2.5 dark:bg-emerald-500/10">
                  <p className="min-w-0 flex-1 text-sm font-semibold text-emerald-800 dark:text-emerald-200">Jalur ini tuntas. Ambil sertifikat atau buka Kurikulum untuk jalur berikutnya.</p>
                  <button onClick={() => setShowCertificate(true)} className="btn-gold !px-4 !py-2 text-xs"><Award className="h-3.5 w-3.5" />Sertifikat</button>
                </div>
              )}
            </div>

            {/* Filter */}
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none sm:mx-0 sm:px-0" role="group" aria-label="Filter evaluasi">
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button key={f.id} aria-pressed={active} onClick={() => setFilter(f.id)} className={`chip ${active ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#E3A63A] dark:text-[#151517]' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
                    {f.label} ({f.count})
                  </button>
                );
              })}
            </div>

            {/* Kartu evaluasi */}
            {filtered.length === 0 ? (
              <div className="surface flex flex-col items-center px-6 py-12 text-center">
                <Target className="mb-3 h-9 w-9 text-slate-300 dark:text-slate-600" />
                <p className="font-bold text-slate-900 dark:text-white">Tidak ada pelajaran pada filter ini</p>
                <button onClick={() => setFilter('all')} className="btn-ink mt-4 !py-2 text-xs">Tampilkan semua</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {filtered.map((node) => {
                  const state = getNodeState(node, data, isNodeMastered);
                  const locked = state === 'locked';
                  const done = state === 'mastered';
                  const due = done && dueIds.has(node.id);
                  return (
                    <div key={node.id} className={`surface flex flex-col p-5 ${locked ? 'opacity-70' : ''}`}>
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="chip !py-1 bg-[#FDF0D5] text-[#7A4D0A] dark:bg-[#E3A63A]/15 dark:text-[#E9C06B]">{node.stepNumber || node.domain}</span>
                        {done ? (
                          <span className={`chip !py-1 ${due ? 'bg-amber-50 text-amber-800 dark:bg-amber-500/10 dark:text-amber-200' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300'}`}>{due ? 'Perlu diulang' : 'Dikuasai'}</span>
                        ) : locked ? (
                          <span className="chip !py-1 bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"><Lock className="h-3 w-3" />Terkunci</span>
                        ) : null}
                      </div>
                      <h3 className="font-serif text-lg font-semibold leading-snug text-slate-900 dark:text-white">{node.label}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{plain(node.decisionScenario.dilemma)}</p>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{locked ? getLockReason(node, data, isNodeMastered) : `1 kasus + ${node.quiz.length} soal`}</span>
                        <button
                          disabled={locked}
                          onClick={() => onSelectNode(node)}
                          className={`${done ? 'btn-ink' : 'btn-gold'} shrink-0 !px-4 !py-2 text-xs`}
                        >
                          {done ? 'Latihan ulang' : 'Mulai evaluasi'}<ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {showCertificate && <CertificateView data={data} onClose={() => setShowCertificate(false)} />}
      {session && <PracticeSession items={session.items} title={session.title} onClose={() => setSession(null)} />}
    </>
  );
};
