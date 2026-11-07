import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MindmapData, MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import { Search, Sparkles, ArrowRight, BookOpen, Layers, Minus, Plus, Check } from 'lucide-react';
import { NodeState, countMastered, getNodeState, getRecommendedNode, plain } from '../../lib/pathLogic';
import { NodeDetailCard } from './NodeDetailCard';
import { LearningPath } from './LearningPath';

interface MindmapCanvasProps {
  data: MindmapData;
  activeNode: MindmapNode | null;
  /** Opens the reading experience for a node. */
  onSelectNode: (node: MindmapNode) => void;
  onStartQuiz?: (node: MindmapNode) => void;
  onSearch: (query: string) => void;
  isLoading: boolean;
  presetQueries: string[];
}

const NODE_W = 212;
const NODE_H = 64;
const MIN_SCALE = 0.35;
const MAX_SCALE = 2.2;

const DOMAIN_FILTERS = [
  { id: 'all', label: 'Semua' },
  { id: 'Bisnis', label: 'Bisnis & Legal' },
  { id: 'Ekonomi', label: 'Makroekonomi' },
  { id: 'Psikologi', label: 'Psikologi' },
  { id: 'Keuangan', label: 'Keuangan' },
  { id: 'Geopolitik', label: 'Geopolitik' },
  { id: 'Komunikasi', label: 'Komunikasi' },
  { id: 'Pajak', label: 'Pajak' },
];

type Point = { x: number; y: number };
type VisualState = NodeState | 'current';
const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

/** Greedy word wrap for SVG text (SVG has no automatic wrapping). */
const wrapTitle = (text: string, max: number, maxLines = 2): string[] => {
  const words = plain(text).trim().split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length <= max) { line = candidate; continue; }
    if (line) { lines.push(line); line = ''; }
    if (lines.length === maxLines) {
      lines[maxLines - 1] = lines[maxLines - 1].slice(0, max - 1).trimEnd() + '…';
      return lines;
    }
    line = word.length > max ? word.slice(0, max - 1) + '…' : word;
  }
  if (line) lines.push(line);
  if (lines.length > maxLines) {
    lines.length = maxLines;
    lines[maxLines - 1] = lines[maxLines - 1].slice(0, max - 1).trimEnd() + '…';
  }
  return lines;
};

/** Smooth connector leaving/entering on the sides that face each other. */
const buildEdge = (a: Point, b: Point): { d: string; mid: Point } => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  if (Math.abs(dx) >= Math.abs(dy)) {
    const dir = dx >= 0 ? 1 : -1;
    const sx = a.x + (dir * NODE_W) / 2;
    const tx = b.x - (dir * NODE_W) / 2;
    const mx = (sx + tx) / 2;
    return { d: `M ${sx} ${a.y} C ${mx} ${a.y}, ${mx} ${b.y}, ${tx} ${b.y}`, mid: { x: mx, y: (a.y + b.y) / 2 } };
  }
  const dir = dy >= 0 ? 1 : -1;
  const sy = a.y + (dir * NODE_H) / 2;
  const ty = b.y - (dir * NODE_H) / 2;
  const my = (sy + ty) / 2;
  return { d: `M ${a.x} ${sy} C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${ty}`, mid: { x: (a.x + b.x) / 2, y: my } };
};

export const MindmapCanvas: React.FC<MindmapCanvasProps> = ({ data, activeNode, onSelectNode, onStartQuiz, onSearch, isLoading, presetQueries }) => {
  const { isNodeMastered } = useUser();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [searchInput, setSearchInput] = useState('');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [view, setView] = useState<'graph' | 'path'>('graph');
  const [showPresets, setShowPresets] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState<Point>({ x: 0, y: 0 });
  const pinchRef = useRef<{ dist: number; scale: number } | null>(null);

  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [nodePositions, setNodePositions] = useState<Record<string, Point>>({});
  const [dragOffset, setDragOffset] = useState<Point>({ x: 0, y: 0 });
  const dragOrigin = useRef<Point>({ x: 0, y: 0 });
  const dragMoved = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const hasNodes = !!data.nodes && data.nodes.length > 0;
  const recommended = hasNodes ? getRecommendedNode(data, isNodeMastered) : undefined;
  const selectedNode = (selectedId && data.nodes.find((n) => n.id === selectedId)) || recommended;
  const masteredCount = countMastered(data, isNodeMastered);

  const fitTo = useCallback(
    (positions: Record<string, Point>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect || rect.width === 0 || data.nodes.length === 0) return null;
      const xs = data.nodes.map((n) => positions[n.id]?.x ?? n.x);
      const ys = data.nodes.map((n) => positions[n.id]?.y ?? n.y);
      const minX = Math.min(...xs) - NODE_W / 2 - 28;
      const maxX = Math.max(...xs) + NODE_W / 2 + 28;
      const minY = Math.min(...ys) - NODE_H / 2 - 28;
      const maxY = Math.max(...ys) + NODE_H / 2 + 28;
      const scale = clamp(Math.min(rect.width / (maxX - minX), rect.height / (maxY - minY)), MIN_SCALE, 1.15);
      return { scale, x: rect.width / 2 - ((minX + maxX) / 2) * scale, y: rect.height / 2 - ((minY + maxY) / 2) * scale };
    },
    [data]
  );

  const focusPoint = useCallback((point: Point, scale: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTransform({ x: rect.width / 2 - point.x * scale, y: rect.height / 2 - point.y * scale, scale });
  }, []);

  /** Whole map if it stays readable, otherwise zoom in on where the learner is. */
  const frameInitialView = useCallback(
    (positions: Record<string, Point>) => {
      const fit = fitTo(positions);
      if (fit && fit.scale >= 0.8) { setTransform(fit); return; }
      const start = recommended || data.nodes[0];
      if (start) focusPoint(positions[start.id] || { x: start.x, y: start.y }, 0.95);
      else if (fit) setTransform(fit);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fitTo, focusPoint, data]
  );

  useEffect(() => {
    const positions: Record<string, Point> = {};
    data.nodes.forEach((n) => { positions[n.id] = { x: n.x, y: n.y }; });
    setNodePositions(positions);
    setSelectedId(null);
    setDomainFilter('all');
    if (view !== 'graph') return;
    const frame = requestAnimationFrame(() => frameInitialView(positions));
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, view]);

  const zoomBy = (factor: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    setTransform((prev) => {
      const scale = clamp(prev.scale * factor, MIN_SCALE, MAX_SCALE);
      if (!rect) return { ...prev, scale };
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const wx = (cx - prev.x) / prev.scale;
      const wy = (cy - prev.y) / prev.scale;
      return { scale, x: cx - wx * scale, y: cy - wy * scale };
    });
  };

  // Non-passive wheel listener: zoom the canvas without scrolling the page
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = Math.exp(-e.deltaY * 0.0015);
      setTransform((prev) => {
        const scale = clamp(prev.scale * factor, MIN_SCALE, MAX_SCALE);
        const rect = el.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;
        const wx = (px - prev.x) / prev.scale;
        const wy = (py - prev.y) / prev.scale;
        return { scale, x: px - wx * scale, y: py - wy * scale };
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [view, hasNodes]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim() || isLoading) return;
    onSearch(searchInput.trim());
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (draggingNodeId || e.button !== 0) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingNodeId) {
      if (Math.hypot(e.clientX - dragOrigin.current.x, e.clientY - dragOrigin.current.y) > 4) dragMoved.current = true;
      if (!dragMoved.current) return;
      const x = (e.clientX - transform.x) / transform.scale - dragOffset.x;
      const y = (e.clientY - transform.y) / transform.scale - dragOffset.y;
      setNodePositions((prev) => ({ ...prev, [draggingNodeId]: { x: Math.round(x), y: Math.round(y) } }));
      return;
    }
    if (isPanning) setTransform((prev) => ({ ...prev, x: e.clientX - panStart.x, y: e.clientY - panStart.y }));
  };

  const handleMouseUp = () => { setIsPanning(false); setDraggingNodeId(null); };

  const touchDistance = (e: React.TouchEvent) =>
    Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      pinchRef.current = { dist: touchDistance(e), scale: transform.scale };
      setIsPanning(false);
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      setIsPanning(true);
      setPanStart({ x: t.clientX - transform.x, y: t.clientY - transform.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinchRef.current) {
      const p = pinchRef.current;
      const scale = clamp((p.scale * touchDistance(e)) / p.dist, MIN_SCALE, MAX_SCALE);
      setTransform((prev) => ({ ...prev, scale }));
    } else if (e.touches.length === 1 && isPanning) {
      const t = e.touches[0];
      setTransform((prev) => ({ ...prev, x: t.clientX - panStart.x, y: t.clientY - panStart.y }));
    }
  };

  const handleTouchEnd = () => { setIsPanning(false); pinchRef.current = null; };

  const handleNodeActivate = (node: MindmapNode) => {
    if (dragMoved.current) { dragMoved.current = false; return; }
    setSelectedId(node.id);
  };

  const c = {
    dot: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(21,21,23,0.10)',
    cardFill: isDark ? '#26262A' : '#FFFFFF',
    cardStroke: isDark ? '#3A3A3F' : '#D6D1C5',
    masteredFill: isDark ? '#16352A' : '#EAF6F0',
    lockedFill: isDark ? '#1B1B1E' : '#F4F1EA',
    lockedStroke: isDark ? '#2E2E32' : '#E8E4DB',
    ink: isDark ? '#FBF9F5' : '#151517',
    muted: isDark ? '#918C80' : '#6E695E',
    line: isDark ? '#4A4A50' : '#C9C3B6',
    gold: '#E3A63A',
    goldDeep: isDark ? '#E9C06B' : '#9A6410',
    green: '#2E7D5B',
    greenText: isDark ? '#7BD9AE' : '#1F5640',
  };

  const visualState = (node: MindmapNode): VisualState => {
    const state = getNodeState(node, data, isNodeMastered);
    return state === 'available' && recommended?.id === node.id ? 'current' : state;
  };

  const stateLabel: Record<VisualState, string> = { mastered: 'dikuasai', current: 'sedang dipelajari', available: 'siap dipelajari', locked: 'terkunci' };

  const controlChip = (active: boolean) =>
    `chip border ${
      active
        ? 'border-[#151517] bg-[#151517] text-[#FBF9F5] dark:border-[#FBF9F5] dark:bg-[#FBF9F5] dark:text-[#151517]'
        : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-white'
    }`;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-36 pt-4 sm:px-6">
      <div className="space-y-3">
        <form onSubmit={handleSearchSubmit} role="search" className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white p-1.5 pl-4 shadow-card focus-within:border-[#CF8E1F] dark:border-white/10 dark:bg-[#1F1F23] dark:shadow-none">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            aria-label="Cari topik atau tanyakan apa pun"
            placeholder="Cari topik atau tanyakan apa pun…"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none dark:text-white"
          />
          <button type="submit" disabled={isLoading || !searchInput.trim()} className="btn-gold !px-4 !py-2 text-sm">
            {isLoading ? <Sparkles className="h-4 w-4 animate-spin" /> : (<><span>Bedah</span><ArrowRight className="h-4 w-4" /></>)}
          </button>
        </form>

        <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-0.5 scrollbar-none sm:mx-0 sm:px-0" role="group" aria-label="Filter domain">
          {DOMAIN_FILTERS.map((cat) => {
            const selected = domainFilter === cat.id;
            return (
              <button
                key={cat.id}
                aria-pressed={selected}
                onClick={() => { setDomainFilter(cat.id); if (cat.id !== 'all') onSearch(cat.id); }}
                className={controlChip(selected)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl bg-[#FDF0D5] p-3.5 dark:bg-[#E3A63A]/10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/70 text-[#9A6410] dark:bg-white/10 dark:text-[#E9C06B]"><Layers className="h-5 w-5" /></span>
            <div className="min-w-0 flex-1">
              <p className="eyebrow !text-[#7A4D0A] dark:!text-[#E9C06B]">Peta pengetahuan terpilih</p>
              <h1 className="truncate text-[15px] font-extrabold leading-tight text-slate-900 dark:text-white">{data.topic}</h1>
            </div>
            <button onClick={() => setShowPresets((v) => !v)} aria-expanded={showPresets} className="shrink-0 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold text-[#5E3A08] transition-colors hover:bg-white dark:bg-white/10 dark:text-[#E9C06B] dark:hover:bg-white/15">
              {showPresets ? 'Tutup' : 'Ganti'}
            </button>
          </div>

          {showPresets && (
            <ul className="mt-3 max-h-56 space-y-1 overflow-y-auto rounded-xl bg-white/80 p-1.5 dark:bg-black/20">
              {presetQueries.map((query) => {
                const isActive = data.topic === query;
                return (
                  <li key={query}>
                    <button
                      onClick={() => { setSearchInput(''); setShowPresets(false); onSearch(query); }}
                      disabled={isLoading}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm font-semibold transition-colors ${
                        isActive ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#FBF9F5] dark:text-[#151517]' : 'text-slate-700 hover:bg-white dark:text-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      <span className="min-w-0 flex-1 truncate">{query}</span>
                      {isActive && <Check className="h-4 w-4 shrink-0" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-center gap-2.5">
              <div className="h-1.5 w-full max-w-[140px] overflow-hidden rounded-full bg-white/70 dark:bg-white/10">
                <div className="h-full rounded-full bg-emerald-500 transition-all duration-500" style={{ width: `${Math.round((masteredCount / Math.max(1, data.nodes.length)) * 100)}%` }} />
              </div>
              <span className="whitespace-nowrap text-xs font-semibold tabular-nums text-[#5E3A08] dark:text-[#E9C06B]">{masteredCount} / {data.nodes.length} selesai</span>
            </div>
            <div className="flex shrink-0 rounded-full bg-white/70 p-0.5 dark:bg-white/10" role="tablist" aria-label="Tampilan peta">
              {([{ id: 'graph', label: 'Graf' }, { id: 'path', label: 'Jalur' }] as const).map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={view === tab.id}
                  onClick={() => setView(tab.id)}
                  className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors ${
                    view === tab.id ? 'bg-[#151517] text-[#FBF9F5] dark:bg-[#FBF9F5] dark:text-[#151517]' : 'text-[#5E3A08] dark:text-[#E9C06B]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {!hasNodes ? (
        <div className="mt-4 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-white/15">
          <BookOpen className="mb-3 h-10 w-10 text-slate-400" />
          <h2 className="text-base font-bold text-slate-800 dark:text-slate-100">Peta belum dimuat</h2>
          <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">Ketik topik di kolom pencarian, atau pilih salah satu peta lewat tombol “Ganti”.</p>
        </div>
      ) : view === 'path' ? (
        <div className="mt-4"><LearningPath data={data} onOpenNode={onSelectNode} /></div>
      ) : (
        <div className="mt-4 grid min-w-0 gap-4 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="min-w-0">
            <div className="relative h-[52vh] min-h-[320px] max-h-[560px] overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-card dark:border-white/10 dark:bg-[#1B1B1E] dark:shadow-none lg:h-[600px] lg:max-h-none">
              <div className="absolute left-3 top-3 z-10 flex items-center gap-0.5 rounded-full bg-white/95 p-1 shadow-card ring-1 ring-slate-200/70 dark:bg-[#26262A]/95 dark:ring-white/10">
                <button onClick={() => zoomBy(1 / 1.2)} aria-label="Perkecil" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"><Minus className="h-4 w-4" /></button>
                <button onClick={() => { const fit = fitTo(nodePositions); if (fit) setTransform(fit); }} title="Tampilkan seluruh peta" className="rounded-full px-2.5 py-1.5 text-xs font-bold text-slate-800 transition-colors hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-white/10">Pas</button>
                <button onClick={() => zoomBy(1.2)} aria-label="Perbesar" className="flex h-8 w-8 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"><Plus className="h-4 w-4" /></button>
              </div>

              <div className="absolute right-3 top-3 z-10 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold tabular-nums text-slate-800 shadow-card ring-1 ring-slate-200/70 dark:bg-[#26262A]/95 dark:text-slate-100 dark:ring-white/10">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />{masteredCount} / {data.nodes.length} Selesai
              </div>

              <div className="absolute bottom-3 right-3 z-10 flex items-center gap-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-card ring-1 ring-slate-200/70 dark:bg-[#26262A]/95 dark:text-slate-200 dark:ring-white/10">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500" />Dikuasai</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#E3A63A]" />Aktif</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-slate-400" />Terkunci</span>
              </div>

              {isLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-white/80 backdrop-blur-sm dark:bg-[#1B1B1E]/80" role="status">
                  <Sparkles className="h-7 w-7 animate-spin text-[#CF8E1F]" />
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-100">Menyusun peta pengetahuan…</p>
                </div>
              )}

              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`h-full w-full select-none ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
                style={{ touchAction: 'none' }}
              >
                <svg
                  className="h-full w-full"
                  role="group"
                  aria-label={`Peta pengetahuan: ${data.topic}`}
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, ${c.dot} 1.2px, transparent 0)`,
                    backgroundSize: `${28 * transform.scale}px ${28 * transform.scale}px`,
                    backgroundPosition: `${transform.x}px ${transform.y}px`,
                  }}
                >
                  <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
                    {data.edges.map((edge) => {
                      const from = data.nodes.find((n) => n.id === edge.from);
                      const to = data.nodes.find((n) => n.id === edge.to);
                      if (!from || !to) return null;
                      const a = nodePositions[edge.from] || { x: from.x, y: from.y };
                      const b = nodePositions[edge.to] || { x: to.x, y: to.y };
                      const { d, mid } = buildEdge(a, b);
                      const fromDone = isNodeMastered(edge.from);
                      const toState = getNodeState(to, data, isNodeMastered);
                      const kind = fromDone && toState === 'mastered' ? 'done' : fromDone && toState === 'available' ? 'active' : 'idle';
                      const touchesSelected = selectedNode && (edge.from === selectedNode.id || edge.to === selectedNode.id);
                      return (
                        <g key={edge.id}>
                          <path
                            d={d}
                            fill="none"
                            stroke={kind === 'done' ? c.green : kind === 'active' ? c.gold : c.line}
                            strokeWidth={kind === 'idle' ? 1.6 : 2.6}
                            strokeLinecap="round"
                            strokeDasharray={kind === 'done' ? undefined : kind === 'active' ? '7 7' : '3 6'}
                            className={kind === 'active' ? 'animate-dash-flow' : undefined}
                            opacity={kind === 'idle' ? 0.75 : 1}
                          />
                          {edge.label && touchesSelected && (
                            <g transform={`translate(${mid.x}, ${mid.y})`} className="pointer-events-none">
                              <rect x="-62" y="-11" width="124" height="22" rx="11" fill={c.cardFill} stroke={c.cardStroke} />
                              <text x="0" y="4" textAnchor="middle" fill={c.muted} fontSize="10" fontWeight="600">{edge.label.length > 22 ? edge.label.slice(0, 21) + '…' : edge.label}</text>
                            </g>
                          )}
                        </g>
                      );
                    })}

                    {data.nodes.map((node) => {
                      const pos = nodePositions[node.id] || { x: node.x, y: node.y };
                      const vs = visualState(node);
                      const isSelected = selectedNode?.id === node.id || activeNode?.id === node.id;
                      const dimmed = domainFilter !== 'all' && node.domain !== domainFilter;
                      const lines = wrapTitle(node.label, 20);
                      const eyebrow = (node.stepNumber || node.domain).toUpperCase();
                      const fill = vs === 'mastered' ? c.masteredFill : vs === 'locked' ? c.lockedFill : c.cardFill;
                      const stroke = vs === 'mastered' ? c.green : vs === 'current' ? c.ink : vs === 'locked' ? c.lockedStroke : c.cardStroke;
                      const eyebrowColor = vs === 'mastered' ? c.greenText : vs === 'locked' ? c.muted : c.goldDeep;
                      const titleColor = vs === 'locked' ? c.muted : c.ink;
                      const iconX = -NODE_W / 2 + 30;

                      return (
                        <g
                          key={node.id}
                          transform={`translate(${pos.x}, ${pos.y})`}
                          opacity={dimmed ? 0.25 : 1}
                          className="cursor-pointer outline-none"
                          role="button"
                          tabIndex={0}
                          aria-label={`${node.stepNumber ? node.stepNumber + ': ' : ''}${node.label}, ${stateLabel[vs]}`}
                          aria-pressed={isSelected}
                          onClick={() => handleNodeActivate(node)}
                          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedId(node.id); } }}
                          onMouseDown={(e) => {
                            if (e.button !== 0) return;
                            e.stopPropagation();
                            dragMoved.current = false;
                            dragOrigin.current = { x: e.clientX, y: e.clientY };
                            setDraggingNodeId(node.id);
                            setDragOffset({ x: (e.clientX - transform.x) / transform.scale - pos.x, y: (e.clientY - transform.y) / transform.scale - pos.y });
                          }}
                        >
                          {isSelected && <rect x={-NODE_W / 2 - 5} y={-NODE_H / 2 - 5} width={NODE_W + 10} height={NODE_H + 10} rx={26} fill="none" stroke={c.gold} strokeWidth={3} />}
                          <rect x={-NODE_W / 2} y={-NODE_H / 2} width={NODE_W} height={NODE_H} rx={22} fill={fill} stroke={stroke} strokeWidth={vs === 'current' ? 2 : 1.5} />
                          <circle cx={iconX} cy={0} r={16} fill={vs === 'mastered' ? c.green : vs === 'current' ? c.gold : vs === 'locked' ? (isDark ? '#2E2E32' : '#E8E4DB') : 'none'} stroke={vs === 'available' ? c.gold : 'none'} strokeWidth={2} />
                          {vs === 'mastered' && <path d={`M ${iconX - 6} 0 L ${iconX - 1.5} 4.5 L ${iconX + 6} -4.5`} fill="none" stroke="#FFFFFF" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />}
                          {vs === 'current' && <path d={`M ${iconX - 3.5} -6 L ${iconX + 6} 0 L ${iconX - 3.5} 6 Z`} fill="#151517" />}
                          {vs === 'available' && <circle cx={iconX} cy={0} r={3.5} fill={c.gold} />}
                          {vs === 'locked' && (
                            <g stroke={c.muted} fill="none" strokeWidth={1.6} strokeLinecap="round">
                              <rect x={iconX - 5} y={-1} width={10} height={8} rx={2} fill={c.muted} />
                              <path d={`M ${iconX - 3} -1 V -3.5 A 3 3 0 0 1 ${iconX + 3} -3.5 V -1`} />
                            </g>
                          )}
                          <text x={-NODE_W / 2 + 54} y={lines.length > 1 ? -14 : -8} fill={eyebrowColor} fontSize={9.5} fontWeight={700} letterSpacing="0.6" className="pointer-events-none select-none">{eyebrow}</text>
                          {lines.map((line, i) => (
                            <text key={i} x={-NODE_W / 2 + 54} y={(lines.length > 1 ? 2 : 10) + i * 16} fill={titleColor} fontSize={13} fontWeight={700} className="pointer-events-none select-none">{line}</text>
                          ))}
                        </g>
                      );
                    })}
                  </g>
                </svg>
              </div>
            </div>
            <p className="mt-2 px-1 text-center text-xs font-medium text-slate-500 dark:text-slate-400 lg:hidden">Ketuk simpul untuk melihat detail. Geser untuk menjelajah, cubit untuk zoom.</p>
          </div>

          {selectedNode && (
            <div className="lg:sticky lg:top-20">
              <NodeDetailCard
                node={selectedNode}
                data={data}
                isRecommended={recommended?.id === selectedNode.id}
                onOpen={onSelectNode}
                onSelectNode={(node) => { setSelectedId(node.id); focusPoint(nodePositions[node.id] || { x: node.x, y: node.y }, Math.max(transform.scale, 0.85)); }}
                onStartQuiz={onStartQuiz}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
