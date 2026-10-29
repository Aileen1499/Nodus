// ==============================================================================
// NODUS — TYPE DEFINITIONS
// ==============================================================================

export type DomainType = 
  | 'Bisnis' 
  | 'Ekonomi' 
  | 'Keuangan' 
  | 'Psikologi' 
  | 'Geopolitik'
  | 'Komunikasi'
  | 'Hukum'
  | 'Data & Analitik'
  | 'Pajak';

export type NodeStatus = 'locked' | 'available' | 'mastered';

export interface DecisionChoice {
  id: string;
  text: string;
  consequence: string;
  scoreBonus: number; // RP bonus
  isOptimal: boolean;
  explanation: string;
}

export interface DecisionScenario {
  title: string;
  context: string;
  dilemma: string;
  choices: DecisionChoice[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CaseStudy {
  companyOrFigure: string;
  story: string;
  takeaway: string;
}

export interface MicroContent {
  analogy: string; // Inti Idemya (<120 words)
  mentalModel?: string; // Kerangka berpikir / Teori utama (misal: "Prospect Theory (Kahneman & Tversky)")
  academicInsight?: string; // Riset akademis / wawasan eksekutif mendalam
  crossDisciplinary: {
    connectionText: string;
    domains: DomainType[];
    insight: string;
  };
  caseStudy?: CaseStudy; // Real-world executive case study
  actionableSteps: string[]; // 3 practical steps
  difficulty?: 'Pemula' | 'Menengah' | 'Mahir';
  readTime?: string;
}

export interface MindmapNode {
  id: string;
  label: string;
  domain: DomainType;
  summary: string;
  stepNumber?: string; // e.g. "Langkah 1.1"
  stageTitle?: string; // e.g. "TAHAP 1: Fondasi & Kesadaran Nilai Uang"
  prerequisiteId?: string; // ID node sebelumnya yang wajib dikuasai
  x: number; // Canvas coordinate
  y: number; // Canvas coordinate
  level: number; // 0 for root, 1 for branch, 2 for leaf
  status?: NodeStatus; // Computed dynamically based on user progress
  microContent: MicroContent;
  decisionScenario: DecisionScenario;
  quiz: QuizQuestion[];
}

export interface MindmapEdge {
  id: string;
  from: string; // Source Node ID
  to: string; // Target Node ID
  label?: string; // Relationship description
  domains: [DomainType, DomainType]; // Cross-discipline connection
}

export interface MindmapData {
  id: string;
  topic: string;
  rootId: string;
  description: string;
  nodes: MindmapNode[];
  edges: MindmapEdge[];
}

export interface UserProgress {
  rankPoints: number; // Total accumulated RP (Rank Points)
  streak: number; // Daily learning streak
  credits: number; // Deep-dive credits (default 10)
  masteredNodeIds: string[]; // Node IDs completed by user
  checkedActions: Record<string, boolean>; // Node ID + Action Index for actionable checklist
  lastActiveDate: string; // YYYY-MM-DD for streak calculation
  apiKey?: string;
  aiModel?: string;
}
