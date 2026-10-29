import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MindmapData, MindmapNode } from '../../types';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';
import {
  Search,
  Sparkles,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Layers,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface MindmapCanvasProps {
  data: MindmapData;
  activeNode: MindmapNode | null;
  onSelectNode: (node: MindmapNode) => void;
  onSearch: (query: string) => void;
  isLoading: boolean;
  presetQueries: string[];
}

export const MindmapCanvas: React.FC<MindmapCanvasProps> = ({
  data,
  activeNode,
  onSelectNode,
  onSearch,
  isLoading,
  presetQueries,
}) => {
  const { isNodeMastered } = useUser();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [searchInput, setSearchInput] = useState('');
  const [domainFilter, setDomainFilter] = useState<string>('all');
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Viewport Pan & Zoom state
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  // Draggable node state
  const [draggingNodeId, setDraggingNodeId] = useState<string | null>(null);
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({});
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Initialize and synchronize node positions from data
  useEffect(() => {
    const positions: Record<string, { x: number; y: number }> = {};
    data.nodes.forEach((node) => {
      positions[node.id] = { x: node.x, y: node.y };
    });
    setNodePositions(positions);
    centerViewOnRoot();
  }, [data]);

  const centerViewOnRoot = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const rootNode = data.nodes.find((n) => n.id === data.rootId) || data.nodes[0];
    const rootX = rootNode ? rootNode.x : 400;
    const rootY = rootNode ? rootNode.y : 280;

    const initialScale = rect.width < 640 ? 0.72 : 0.95;
    const targetX = rect.width / 2 - rootX * initialScale;
    const targetY = rect.height / 2 - rootY * initialScale;

    setTransform({
      x: targetX,
      y: targetY,
      scale: initialScale,
    });
  }, [data]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim() || isLoading) return;
    onSearch(searchInput.trim());
  };

  const handleZoom = (delta: number) => {
    setTransform((prev) => {
      const newScale = Math.min(Math.max(0.4, prev.scale + delta), 2.2);
      return { ...prev, scale: newScale };
    });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = -e.deltaY * 0.0012;
    setTransform((prev) => {
      const newScale = Math.min(Math.max(0.4, prev.scale + zoomFactor), 2.2);
      return { ...prev, scale: newScale };
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (draggingNodeId) return;
    if (e.button === 0) {
      setIsPanning(true);
      setPanStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingNodeId) {
      const newX = (e.clientX - transform.x) / transform.scale - dragOffset.x;
      const newY = (e.clientY - transform.y) / transform.scale - dragOffset.y;
      setNodePositions((prev) => ({
        ...prev,
        [draggingNodeId]: { x: Math.round(newX), y: Math.round(newY) },
      }));
      return;
    }

    if (isPanning) {
      setTransform((prev) => ({
        ...prev,
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
    setDraggingNodeId(null);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && !draggingNodeId) {
      const touch = e.touches[0];
      setIsPanning(true);
      setPanStart({ x: touch.clientX - transform.x, y: touch.clientY - transform.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isPanning) {
      const touch = e.touches[0];
      setTransform((prev) => ({
        ...prev,
        x: touch.clientX - panStart.x,
        y: touch.clientY - panStart.y,
      }));
    }
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
  };

  // Node Lock/Unlock Logic:
  const isNodeLocked = (node: MindmapNode): boolean => {
    if (node.level === 0 || node.id === data.rootId) return false;
    if (isNodeMastered(node.id)) return false;

    // Prerequisite step condition (e.g. Langkah 1.2 requires Langkah 1.1)
    if (node.prerequisiteId) {
      return !isNodeMastered(node.prerequisiteId);
    }

    const rootMastered = isNodeMastered(data.rootId);
    if (rootMastered) return false;

    const incomingEdges = data.edges.filter((e) => e.to === node.id);
    if (incomingEdges.length === 0) return false;
    return !incomingEdges.some((e) => isNodeMastered(e.from));
  };

  // Empty state check
  const hasNodes = data.nodes && data.nodes.length > 0;
  const startingNode = data.nodes.find((n) => n.id === data.rootId) || data.nodes[0];
  const isStartingNodeMastered = startingNode ? isNodeMastered(startingNode.id) : false;

  return (
    <div className="relative flex flex-1 flex-col h-[calc(100vh-4rem)] pb-14 md:pb-0 w-full overflow-hidden bg-[#F8FAFC] dark:bg-[#070A11] transition-colors duration-300 select-none">

      {/* Top Floating Bar: Search, Preset Chips & Domain Filters */}
      <div className="absolute top-3 sm:top-4 left-0 right-0 z-20 mx-auto w-full max-w-4xl px-3 sm:px-4 pointer-events-none">
        <div className="flex flex-col gap-2 pointer-events-auto">

          {/* Main Search Bar with Glowing Effect */}
          <form onSubmit={handleSearchSubmit} className="relative flex w-full items-center">
            <div className={`relative flex w-full items-center transition-all duration-300 rounded-2xl ${
              isInputFocused ? 'ring-4 ring-indigo-500/25 shadow-xl shadow-indigo-500/15' : 'shadow-lg'
            }`}>
              <input
                type="text"
                value={searchInput}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Cari topik atau tanyakan apapun (misal: 'Kenapa Elon Musk Bisa Kaya?')..."
                className="w-full rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/95 dark:bg-[#0B0F19]/95 py-3 sm:py-3.5 pl-11 pr-24 sm:pr-28 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 backdrop-blur-xl transition-all focus:border-indigo-500 focus:outline-none"
              />
              <Search className="absolute left-4 h-4 w-4 text-slate-400" />

              <button
                type="submit"
                disabled={isLoading || !searchInput.trim()}
                className="absolute right-2 flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-bold text-white shadow-md shadow-indigo-500/25 transition-all hover:opacity-95 active:scale-95 disabled:opacity-40"
              >
                {isLoading ? (
                  <Sparkles className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <>
                    <span>Bedah</span>
                    <ArrowRight className="h-3 w-3" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Preset Prompt Chips (Quick Prompts) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
            <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 shrink-0 mr-1">
              <Sparkles className="h-3 w-3 text-indigo-500" />
              Preset:
            </span>
            {presetQueries.map((query) => {
              const isActive = data.topic === query;
              return (
                <button
                  key={query}
                  onClick={() => {
                    setSearchInput(query);
                    onSearch(query);
                  }}
                  disabled={isLoading}
                  className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-all ${isActive
                      ? 'border-emerald-500/80 bg-emerald-50 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 shadow-sm'
                      : 'border-slate-200/90 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/70 text-slate-700 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-white'
                    }`}
                >
                  {query}
                </button>
              );
            })}
          </div>

          {/* Domain Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
            <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-semibold shrink-0 mr-1">
              <Layers className="h-3 w-3" />
              Domain:
            </span>
            {['Semua', 'Bisnis', 'Psikologi', 'Ekonomi', 'Pemasaran', 'Geopolitik', 'Keuangan', 'Komunikasi', 'Hukum'].map((domain) => {
              const isSelected =
                domainFilter === domain ||
                (domain !== 'Semua' &&
                  (data.topic.toLowerCase().includes(domain.toLowerCase()) ||
                    data.nodes.some((n) => n.domain === domain)));
              return (
                <button
                  key={domain}
                  onClick={() => {
                    if (domain === 'Semua') {
                      setDomainFilter('all');
                    } else {
                      setDomainFilter(domain);
                      onSearch(domain);
                    }
                  }}
                  className={`rounded-lg px-2.5 py-0.5 font-medium transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                      : 'bg-white/80 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200/80 dark:border-slate-800/60'
                  }`}
                >
                  {domain}
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* Floating Canvas Controls (Bottom Left) */}
      <div className="absolute bottom-16 md:bottom-6 left-3 sm:left-4 z-20 flex items-center gap-1 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B0F19]/90 p-1.5 shadow-xl backdrop-blur-xl transition-colors duration-300">
        <button
          onClick={() => handleZoom(0.15)}
          title="Perbesar Canvas (+)"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          onClick={() => handleZoom(-0.15)}
          title="Perkecil Canvas (-)"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800" />
        <button
          onClick={centerViewOnRoot}
          title="Pusatkan Tampilan (Reset)"
          className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
      </div>

      {/* Floating "Mulai di Sini" Guide Button with Soft Pulse */}
      {startingNode && (
        <div className="absolute bottom-16 md:bottom-6 right-3 sm:right-6 z-20">
          <button
            onClick={() => {
              centerViewOnRoot();
              onSelectNode(startingNode);
            }}
            className="group flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-emerald-500/25 ring-2 ring-emerald-400/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-emerald-200 tracking-wider">
                {isStartingNodeMastered ? 'Lanjutkan Modul' : 'Mulai di Sini'}
              </div>
              <div className="font-extrabold flex items-center gap-1.5">
                <span>{startingNode.stepNumber || 'Langkah 1'}: {startingNode.label}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Topic Overview Badge (Bottom Center-Right on Desktop) */}
      <div className="absolute bottom-6 right-64 z-10 hidden lg:flex items-center gap-2 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-[#0B0F19]/90 px-3.5 py-2 text-xs text-slate-700 dark:text-slate-300 shadow-xl backdrop-blur-xl transition-colors duration-300">
        <span className="font-bold text-slate-900 dark:text-white">{data.topic}</span>
        <span className="text-slate-400 dark:text-slate-500">•</span>
        <span className="text-slate-500 dark:text-slate-400">{data.nodes.length} Simpul Ilmu</span>
      </div>

      {/* Interactive SVG / Canvas Engine */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`h-full w-full cursor-grab active:cursor-grabbing ${isPanning ? 'cursor-grabbing' : ''}`}
        style={{ touchAction: 'none' }}
      >
        {!hasNodes ? (
          <div className="flex flex-col items-center justify-center h-full text-center px-4">
            <BookOpen className="h-12 w-12 text-slate-400 opacity-40 mb-3" />
            <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">Peta Konsep Belum Dimuat</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm">
              Ketik pertanyaan di kolom pencarian atau klik salah satu preset prompt di atas untuk memulai.
            </p>
          </div>
        ) : (
          <svg
            ref={svgRef}
            className="h-full w-full"
            style={{
              backgroundImage: isDark
                ? `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1.2px, transparent 0)`
                : `radial-gradient(circle at 1px 1px, rgba(79, 70, 229, 0.12) 1.2px, transparent 0)`,
              backgroundSize: `${36 * transform.scale}px ${36 * transform.scale}px`,
              backgroundPosition: `${transform.x}px ${transform.y}px`,
            }}
          >
            <defs>
              <linearGradient id="edgeGrad-Bisnis-Ekonomi" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGrad-Bisnis-Keuangan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGrad-Bisnis-Psikologi" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGrad-Ekonomi-Keuangan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGrad-Ekonomi-Psikologi" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="edgeGrad-default" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.7" />
              </linearGradient>

              {/* Glowing Filters */}
              <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#6366F1" floodOpacity="0.5" />
              </filter>
              <filter id="emeraldNodeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#10B981" floodOpacity="0.6" />
              </filter>
            </defs>

            {/* Viewport Transform Group */}
            <g transform={`translate(${transform.x}, ${transform.y}) scale(${transform.scale})`}>
              
              {/* 1. RENDER EDGES */}
              {data.edges.map((edge) => {
                const sourcePos = nodePositions[edge.from] || { x: 400, y: 280 };
                const targetPos = nodePositions[edge.to] || { x: 400, y: 280 };

                const gradKey = `edgeGrad-${edge.domains[0]}-${edge.domains[1]}`;

                const midX = (sourcePos.x + targetPos.x) / 2;
                const midY = (sourcePos.y + targetPos.y) / 2;
                const dx = targetPos.x - sourcePos.x;
                const dy = targetPos.y - sourcePos.y;
                const offsetFactor = 0.18;
                const ctrlX = midX - dy * offsetFactor;
                const ctrlY = midY + dx * offsetFactor;

                const pathD = `M ${sourcePos.x} ${sourcePos.y} Q ${ctrlX} ${ctrlY} ${targetPos.x} ${targetPos.y}`;

                const isSourceMastered = isNodeMastered(edge.from);
                const isTargetMastered = isNodeMastered(edge.to);
                const isEdgeActive = isSourceMastered && isTargetMastered;

                return (
                  <g key={edge.id} className="transition-opacity duration-300">
                    {/* Outer glow line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isEdgeActive ? '#10B981' : `url(#${gradKey})`}
                      strokeWidth={isEdgeActive ? 3.5 : 2}
                      strokeOpacity={isEdgeActive ? 0.8 : isDark ? 0.4 : 0.6}
                    />

                    {/* Animated flowing dash line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isEdgeActive ? '#10B981' : isDark ? '#818CF8' : '#4F46E5'}
                      strokeWidth={1.5}
                      strokeDasharray="6 8"
                      className="animate-dash-flow"
                      strokeOpacity={0.85}
                    />

                    {/* Edge Label badge */}
                    {edge.label && (
                      <g transform={`translate(${ctrlX}, ${ctrlY})`}>
                        <rect
                          x="-50"
                          y="-10"
                          width="100"
                          height="20"
                          rx="10"
                          fill={isDark ? '#0F172A' : '#FFFFFF'}
                          stroke={isDark ? '#334155' : '#CBD5E1'}
                          strokeWidth="1"
                          opacity="0.95"
                          filter={!isDark ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.06))' : undefined}
                        />
                        <text
                          x="0"
                          y="3.5"
                          textAnchor="middle"
                          fill={isDark ? '#94A3B8' : '#475569'}
                          fontSize="9.5"
                          fontWeight="600"
                          className="select-none pointer-events-none"
                        >
                          {edge.label.length > 16 ? edge.label.substring(0, 15) + '…' : edge.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* 2. RENDER NODES */}
              {data.nodes.map((node) => {
                const pos = nodePositions[node.id] || { x: node.x, y: node.y };
                const isRoot = node.level === 0 || node.id === data.rootId;
                const isMastered = isNodeMastered(node.id);
                const locked = isNodeLocked(node);
                const isSelected = activeNode?.id === node.id;

                const isDomainMismatched = domainFilter !== 'all' && node.domain !== domainFilter;
                const opacity = isDomainMismatched ? 0.25 : locked ? 0.45 : 1;

                const nodeWidth = isRoot ? 224 : 184;
                const nodeHeight = isRoot ? 104 : 88;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    opacity={opacity}
                    className="cursor-pointer transition-all duration-200"
                    onClick={() => {
                      if (!locked) {
                        onSelectNode(node);
                      }
                    }}
                    onMouseDown={(e) => {
                      if (e.button === 0) {
                        e.stopPropagation();
                        setDraggingNodeId(node.id);
                        setDragOffset({
                          x: (e.clientX - transform.x) / transform.scale - pos.x,
                          y: (e.clientY - transform.y) / transform.scale - pos.y,
                        });
                      }
                    }}
                  >
                    {/* Active selection halo */}
                    {isSelected && (
                      <rect
                        x={-nodeWidth / 2 - 8}
                        y={-nodeHeight / 2 - 8}
                        width={nodeWidth + 16}
                        height={nodeHeight + 16}
                        rx="24"
                        fill="none"
                        stroke={isMastered ? '#10B981' : '#6366F1'}
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                        className="animate-pulse"
                      />
                    )}

                    {/* Mastered Glow */}
                    {isMastered && (
                      <rect
                        x={-nodeWidth / 2}
                        y={-nodeHeight / 2}
                        width={nodeWidth}
                        height={nodeHeight}
                        rx="20"
                        fill="#10B981"
                        opacity={isDark ? "0.15" : "0.08"}
                        filter="url(#emeraldNodeGlow)"
                      />
                    )}

                    {/* Pulsating Indicator if it is Starting Node & Unmastered */}
                    {isRoot && !isMastered && (
                      <g transform={`translate(0, ${-nodeHeight / 2 - 13})`}>
                        <rect
                          x="-44"
                          y="-9"
                          width="88"
                          height="18"
                          rx="9"
                          fill="#10B981"
                          filter="drop-shadow(0 2px 8px rgba(16, 185, 129, 0.4))"
                        />
                        <text
                          x="0"
                          y="3.5"
                          fill="#FFFFFF"
                          fontSize="9.5"
                          fontWeight="800"
                          textAnchor="middle"
                          className="select-none pointer-events-none"
                        >
                          📍 Mulai di Sini
                        </text>
                      </g>
                    )}

                    {/* Main Node Card Body (Dual Theme) */}
                    <rect
                      x={-nodeWidth / 2}
                      y={-nodeHeight / 2}
                      width={nodeWidth}
                      height={nodeHeight}
                      rx="18"
                      fill={
                        isDark
                          ? isRoot ? '#131B2E' : '#1E293B'
                          : isRoot ? '#F8FAFC' : '#FFFFFF'
                      }
                      stroke={
                        isMastered
                          ? '#10B981'
                          : isSelected
                          ? '#6366F1'
                          : locked
                          ? isDark ? '#334155' : '#E2E8F0'
                          : isRoot
                          ? isDark ? '#818CF8' : '#6366F1'
                          : isDark ? '#475569' : '#CBD5E1'
                      }
                      strokeWidth={isSelected || isMastered || isRoot ? 2 : 1.2}
                      filter={!isDark ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.06))' : undefined}
                      className="transition-colors hover:stroke-indigo-500"
                    />

                    {/* Node Header Content */}
                    <g transform={`translate(${-nodeWidth / 2 + 14}, ${-nodeHeight / 2 + 20})`}>
                      
                      {/* Step / Domain Badge */}
                      <rect
                        x="0"
                        y="-12"
                        width={node.stepNumber ? 84 : isRoot ? 74 : 66}
                        height="18"
                        rx="9"
                        fill={
                          isMastered
                            ? isDark ? 'rgba(16, 185, 129, 0.2)' : '#D1FAE5'
                            : isDark ? 'rgba(99, 102, 241, 0.2)' : '#EEF2FF'
                        }
                        stroke={isMastered ? '#10B981' : isDark ? '#6366F1' : '#818CF8'}
                        strokeWidth="0.8"
                      />
                      <text
                        x={node.stepNumber ? 42 : isRoot ? 37 : 33}
                        y="0"
                        textAnchor="middle"
                        fill={
                          isMastered
                            ? isDark ? '#34D399' : '#065F46'
                            : isDark ? '#A5B4FC' : '#4338CA'
                        }
                        fontSize="9"
                        fontWeight="700"
                        className="select-none pointer-events-none"
                      >
                        {node.stepNumber || node.domain.toUpperCase()}
                      </text>

                      {/* Status Icon Indicator */}
                      <g transform={`translate(${nodeWidth - 46}, -4)`}>
                        {isMastered ? (
                          <g>
                            <circle cx="0" cy="0" r="8" fill="#10B981" />
                            <path d="M-3.5 0 L-1 2.5 L3.5 -2" stroke="#FFFFFF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          </g>
                        ) : locked ? (
                          <g>
                            <circle cx="0" cy="0" r="8" fill={isDark ? "#334155" : "#E2E8F0"} />
                            <rect x="-3" y="-1" width="6" height="5" rx="1" fill={isDark ? "#94A3B8" : "#64748B"} />
                            <path d="M-2 -1 V-3 A2 2 0 0 1 2 -3 V-1" stroke={isDark ? "#94A3B8" : "#64748B"} strokeWidth="1" fill="none" />
                          </g>
                        ) : (
                          <g>
                            <circle cx="0" cy="0" r="8" fill={isDark ? "rgba(99, 102, 241, 0.25)" : "rgba(79, 70, 229, 0.15)"} stroke="#6366F1" strokeWidth="1" />
                            <circle cx="0" cy="0" r="3" fill="#6366F1" />
                          </g>
                        )}
                      </g>

                      {/* Node Title Text */}
                      <text
                        x="0"
                        y="26"
                        fill={isDark ? '#F8FAFC' : '#0F172A'}
                        fontSize={isRoot ? "13.5" : "12"}
                        fontWeight="700"
                        className="select-none pointer-events-none"
                      >
                        {node.label.length > (isRoot ? 22 : 18)
                          ? node.label.substring(0, isRoot ? 20 : 16) + '…'
                          : node.label}
                      </text>

                      {/* Subtitle / Summary snippet */}
                      <text
                        x="0"
                        y={isRoot ? "44" : "40"}
                        fill={isDark ? '#94A3B8' : '#64748B'}
                        fontSize="9.5"
                        fontWeight="400"
                        className="select-none pointer-events-none"
                      >
                        {node.summary.length > (isRoot ? 32 : 26)
                          ? node.summary.substring(0, isRoot ? 30 : 24) + '…'
                          : node.summary}
                      </text>
                    </g>

                    {/* Ping indicator if ready to learn */}
                    {!locked && !isMastered && (
                      <circle
                        cx={nodeWidth / 2 - 12}
                        cy={nodeHeight / 2 - 12}
                        r="3.5"
                        fill="#6366F1"
                        className="animate-ping"
                      />
                    )}
                  </g>
                );
              })}

            </g>
          </svg>
        )}
      </div>

    </div>
  );
};
