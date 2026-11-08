// ==============================================================================
// NODUS — CURRICULUM BUILDER
// Compact authoring format for new learning paths. A path is written as stages of
// lessons; the builder fills in everything structural (step numbers, prerequisite
// chain, canvas layout, edges, scoring) so authors only write the teaching content.
// ==============================================================================

import { DomainType, MindmapData, MindmapEdge, MindmapNode } from '../types';

export type ToolId = 'margin' | 'breakeven' | 'pricing' | 'cashflow' | 'inventory' | 'unit' | 'compound';

export interface ChoiceSpec {
  text: string;
  consequence: string;
  explanation: string;
  best?: boolean;
}

export interface QuizSpec {
  q: string;
  options: string[];
  answer: number;
  why: string;
}

export interface LessonSpec {
  id: string;
  label: string;
  domain: DomainType;
  summary: string;
  model: string; // kerangka berpikir
  analogy: string;
  insight: string; // wawasan teori / riset
  cross: { text: string; domains: DomainType[]; insight: string };
  story: { who: string; story: string; takeaway: string };
  actions: [string, string, string];
  level: 'Pemula' | 'Menengah' | 'Mahir';
  time: string;
  tool?: ToolId; // kalkulator yang relevan di tab Alat
  scenario: { title: string; context: string; dilemma: string; choices: ChoiceSpec[] };
  quiz: QuizSpec[];
}

export interface StageSpec {
  title: string;
  lessons: LessonSpec[];
}

export interface PathSpec {
  id: string;
  topic: string;
  description: string;
  stages: StageSpec[];
}

const COLS = [180, 460, 740];
const ROW_GAP = 150;

export const buildPath = (spec: PathSpec): MindmapData => {
  const nodes: MindmapNode[] = [];
  let index = 0;

  spec.stages.forEach((stage, stageIdx) => {
    stage.lessons.forEach((lesson, lessonIdx) => {
      const row = Math.floor(index / 3);
      const col = index % 3;
      // Serpentine layout keeps consecutive lessons adjacent
      const x = COLS[row % 2 === 0 ? col : 2 - col];
      const previous = nodes[nodes.length - 1];

      const choices = lesson.scenario.choices.map((c, i) => ({
        id: `c${i + 1}`,
        text: c.text,
        consequence: c.consequence,
        scoreBonus: c.best ? 30 : i % 2 === 0 ? -15 : -25,
        isOptimal: !!c.best,
        explanation: c.explanation,
      }));

      nodes.push({
        id: lesson.id,
        stepNumber: `Langkah ${stageIdx + 1}.${lessonIdx + 1}`,
        stageTitle: `TAHAP ${stageIdx + 1}: ${stage.title}`,
        label: lesson.label,
        domain: lesson.domain,
        summary: lesson.summary,
        x,
        y: 120 + row * ROW_GAP,
        level: index === 0 ? 0 : 1,
        ...(previous ? { prerequisiteId: previous.id } : {}),
        ...(lesson.tool ? { toolId: lesson.tool } : {}),
        microContent: {
          mentalModel: lesson.model,
          analogy: lesson.analogy,
          academicInsight: lesson.insight,
          crossDisciplinary: {
            connectionText: lesson.cross.text,
            domains: lesson.cross.domains,
            insight: lesson.cross.insight,
          },
          caseStudy: { companyOrFigure: lesson.story.who, story: lesson.story.story, takeaway: lesson.story.takeaway },
          actionableSteps: [...lesson.actions],
          difficulty: lesson.level,
          readTime: lesson.time,
        },
        decisionScenario: {
          title: lesson.scenario.title,
          context: lesson.scenario.context,
          dilemma: lesson.scenario.dilemma,
          choices,
        },
        quiz: lesson.quiz.map((q, i) => ({
          id: `q-${lesson.id}-${i + 1}`,
          question: q.q,
          options: q.options,
          correctAnswerIndex: q.answer,
          explanation: q.why,
        })),
      });
      index += 1;
    });
  });

  const edges: MindmapEdge[] = nodes.slice(1).map((node, i) => ({
    id: `e-${nodes[i].id}-${node.id}`,
    from: nodes[i].id,
    to: node.id,
    domains: [nodes[i].domain, node.domain],
  }));

  return {
    id: spec.id,
    topic: spec.topic,
    rootId: nodes[0].id,
    description: spec.description,
    nodes,
    edges,
  };
};
