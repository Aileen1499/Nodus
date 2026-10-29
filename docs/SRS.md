# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
## Project: NODUS — Knowledge Graph & Decision Simulation System
**Version:** 1.0.0  
**Status:** Approved & Implemented  
**Date:** 2026-10-29  
**Authors:** Senior Full-Stack Engineer & AI Systems Architect  

---

### 1. Executive Summary & Product Vision
**NODUS** is an interactive, visual-first cognitive learning platform designed to bridge the chasm between theoretical knowledge and real-world executive execution. Rooted in the core domains of **Bisnis, Ekonomi, Keuangan, Psikologi Perilaku, and Decision Making**, NODUS replaces fragmented passive learning (articles, static e-books, linear courses) with an integrated 4-tier pedagogical engine:
1. **Interactive Visual Knowledge Graph (Mindmap):** Dynamic SVG/Canvas node networks mapping conceptual causalities and cross-disciplinary connections.
2. **Micro-Reader Sheet:** High-density, bite-sized synthesis emphasizing real-world analogies (<150 words), inter-domain linkages, and three actionable execution steps.
3. **Decision Simulator:** Real-world tactical scenario simulator testing risk-reward trade-offs and second-order consequences.
4. **Gamified Retention Engine:** Timed reasoning assessments (30s timer), Rank Points (RP), daily streaks, and progressive node unlocking.

---

### 2. Design System & Brand Identity
- **App Name:** NODUS
- **Tagline:** *Connect the Dots to Wealth & Business Mastery*
- **Visual Aesthetic:** Slate Obsidian Cyber-Executive (Dark Mode Only).
- **Color Palette:**
  - **Background Primary:** Slate Obsidian (`#0B0F19`)
  - **Card & Surface Background:** Dark Slate Surface (`#1E293B`)
  - **Primary Accent & AI Glow:** Electric Indigo (`#6366F1`)
  - **Wealth, Mastery & Success Accent:** Emerald Mint (`#10B981`)
  - **Warning / Scarcity Accent:** Amber Gold (`#F59E0B`)
  - **Psychology / Behavior Accent:** Rose Violet (`#EC4899`)
  - **Text Colors:** Pure White (`#F8FAFC`) for Headings, Muted Slate (`#94A3B8`) for Body.
- **Brand Logo:** Interconnected node network shaped like "N" with glowing gradient pathways transitioning from `#6366F1` to `#10B981`.

---

### 3. Functional Requirements (FR)

#### [FR-01] Interactive Knowledge Graph Engine
- **FR-01.1 Dynamic Node Rendering:** System renders dynamic SVG/Canvas nodes organized organically or radially around a central query theme.
- **FR-01.2 Domain Categorization:** Each node is color-tagged by domain (Ekonomi, Bisnis, Keuangan, Psikologi).
- **FR-01.3 Visual Edge Connections:** Curved bezier connection pathways displaying directional relationships and animated pulses between related disciplines.
- **FR-01.4 Pan & Zoom Controls:** Full pan (drag canvas) and zoom (mouse wheel / touch pinch / dedicated controls) with reset view capability.
- **FR-01.5 Node Status States:**
  - *Root / Mastered:* Glowing emerald badge with completion indicator.
  - *Unlocked / Available:* Vibrant indigo pulsating border, interactive.
  - *Locked:* Low opacity slate with lock icon, unlockable after mastering parent nodes.

#### [FR-02] Dynamic AI Prompt Engine (Gemini API & Fallback)
- **FR-02.1 Dynamic Prompt Synthesis:** Accepts user queries or preset chips (e.g., *"Kenapa Elon Musk Bisa Kaya?"*, *"Dasar-Dasar Inflasi & Saham"*, *"Psikologi Marketing F&B"*, *"Geopolitik Impor Ekspor"*).
- **FR-02.2 Structured JSON Schema:** Enforces strict JSON output containing:
  - `nodes`: `id`, `label`, `domain`, `summary`, `status`, `x`, `y`
  - `edges`: `from`, `to`, `label`, `relationshipType`
  - `microContent`: Analogy (<150 words), cross-domain connections, 3 actionable items.
  - `decisionScenario`: Dilemma, choices, tactical impact.
  - `quiz`: 3-5 reasoning questions with options, correct index, and detailed explanation.
- **FR-02.3 Zero-Crash Offline / Mock Fallback:** When API key is absent or network fails, instantly loads curated rich mock data trees for all preset prompts and provides a synthetic generator for custom prompts.
- **FR-02.4 Client API Key Management:** Allows users to input their Google Gemini API key securely, persisted in encrypted/local storage.

#### [FR-03] Micro-Reader Bottom Sheet / Side Drawer
- **FR-03.1 Responsive Sheet:** Bottom slide sheet on mobile (<768px) and side slide drawer on tablet/desktop (>=768px).
- **FR-03.2 Structured Content Layout:**
  - 💡 **Inti Idemya:** Simple, relatable real-world analogy under 150 words.
  - 🧠 **Koneksi Lintas Ilmu:** Clear explanation showing how this concept connects Economics to Psychology, Geopolitics, or Business strategy.
  - 🛠️ **Tindakan Nyata:** 3 practical, daily actionable checkboxes that users can immediately tick off.
- **FR-03.3 Primary Action Trigger:** Single high-contrast CTA button *"Mulai Cek Paham (Kuis & Skenario)"* triggering the simulation engine.

#### [FR-04] Interactive Decision Simulator
- **FR-04.1 Real-World Context:** Poses a high-stakes, realistic scenario (e.g., pricing strategy under inflation, capital allocation dilemma).
- **FR-04.2 Branching Choices:** Presents 2 to 3 strategic actions with distinct risk-reward profiles.
- **FR-04.3 Consequence Analysis:** Immediate visual breakdown of chosen strategy's short-term vs long-term impact on cash flow, brand equity, or mental bandwidth.

#### [FR-05] Gamified Retention Quiz Engine
- **FR-05.1 Timed Reasoning:** 30-second countdown timer per question with visual progress bar and time-low warning.
- **FR-05.2 Instant Visual Feedback:** Instant green glow for correct choice, red for incorrect, accompanied by logical rationale.
- **FR-05.3 Scoring & Rank Points (RP):** Awards +50 to +100 RP per mastered node, bonus for consecutive correct answers and remaining time.
- **FR-05.4 Completion & Unlock Card:** Summary screen celebrating mastery with confetti, updating node status on the Knowledge Graph, and unlocking child nodes.

#### [FR-06] Local State Mastery & Gamification Engine
- **FR-06.1 Storage Persistence:** Stores user progress in `localStorage` under `nodus_user_progress_v1`.
- **FR-06.2 Tracked Metrics:**
  - `rankPoints`: Total accumulated RP.
  - `streak`: Daily consecutive learning streak.
  - `credits`: Deep-dive credits (refreshed daily).
  - `masteredNodeIds`: Set of completed node IDs.
  - `lastActiveDate`: Timestamp for streak calculation.
- **FR-06.3 Stats Bar:** Dynamic header display showing ⭐ RP, 🔥 Streak, and ⚡ Deep-Dive Credits with real-time reactive updates.

---

### 4. Non-Functional Requirements (NFR)

- **[NFR-01] Mobile-First Responsiveness:**
  - Seamless layout from 320px / 375px viewport (iPhone SE / Android) to 1440px+ 4K monitors.
  - Zero unwanted horizontal scrolling (`overflow-x: hidden` constraint).
  - Minimum touch target size of 44x44px for all interactive buttons and nodes.
- **[NFR-02] Rendering Performance:**
  - Target 60 FPS for SVG/Canvas graph interactions (pan, zoom, node drag).
  - Cumulative Layout Shift (CLS) < 0.1.
  - Instant modal transitions utilizing GPU-accelerated CSS transforms.
- **[NFR-03] UI/UX Aesthetics:**
  - Ultra-modern dark obsidian theme with subtle glowing gradients (`#6366F1` to `#10B981`).
  - Glassmorphic backdrops with backdrop blur (`backdrop-blur-md`).
  - Typography: Modern sans-serif system stack optimized for readability.
  - Clear Indonesian tone: Lugas, profesional, inspiratif, dan bebas jargon yang tidak dijelaskan.

---

### 5. Architectural Diagram

```
+---------------------------------------------------------------------------------+
|                                 NODUS CLIENT (SPA)                              |
+---------------------------------------------------------------------------------+
|                                                                                 |
|  +--------------------+  +----------------------+  +-------------------------+  |
|  | Header & Stats Bar |  | Search & Prompt Bar  |  | API Key Settings Modal  |  |
|  +--------------------+  +----------------------+  +-------------------------+  |
|                                                                                 |
|  +---------------------------------------------------------------------------+  |
|  |                  MINDMAP CANVAS ENGINE (SVG / Canvas Hybrid)              |  |
|  |   - Interactive Draggable Nodes (Economics, Business, Finance, Psychology) |  |
|  |   - Pulsing Gradient Vector Edges (Cross-Disciplinary Connections)        |  |
|  |   - Viewport Transform Matrix (Pan & Zoom)                                |  |
|  +---------------------------------------------------------------------------+  |
|                                                                                 |
|              | (Node Click)                                                     |
|              v                                                                  |
|  +---------------------------------------------------------------------------+  |
|  |                         MICRO-READER SHEET                                |  |
|  |   - 💡 Inti Idemya (Analogis < 150 kata)                                   |  |
|  |   - 🧠 Koneksi Lintas Ilmu (Cross-Discipline Synthesis)                   |  |
|  |   - 🛠️ Tindakan Nyata (3 Actionable Checklists)                           |  |
|  |   - CTA: "Mulai Cek Paham (Kuis & Skenario)"                              |  |
|  +---------------------------------------------------------------------------+  |
|                                                                                 |
|              | (CTA Click)                                                      |
|              v                                                                  |
|  +---------------------------------------------------------------------------+  |
|  |                       DECISION & QUIZ ENGINE MODAL                        |  |
|  |   - Decision Simulator: High-Stakes Tactical Dilemma                       |  |
|  |   - Timed Reasoning Quiz (30s Timer per question)                         |  |
|  |   - Immediate Pedagogical Feedback & Consequence Breakdown                 |  |
|  |   - Completion Card: Confetti + RP Award + Node Unlock                     |  |
|  +---------------------------------------------------------------------------+  |
|                                                                                 |
|  +---------------------------------------------------------------------------+  |
|  |                       PERSISTENCE & STATE LAYER                           |  |
|  |   - LocalStorage (`nodus_user_progress_v1`)                               |  |
|  |   - Gemini API Service with Offline Curated Fallbacks                     |  |
|  +---------------------------------------------------------------------------+  |
+---------------------------------------------------------------------------------+
```

---

### 6. Verification and Acceptance Matrix
| Req ID | Acceptance Criteria | Testing Procedure |
| :--- | :--- | :--- |
| **FR-01** | Mindmap renders nodes with domain colors, enables panning and zooming, shows locked/available/mastered states. | Interact with canvas; verify drag, zoom, and node click behavior. |
| **FR-02** | User can enter custom queries or click preset chips; Gemini API or fallback returns valid tree. | Test preset chips and custom query with/without API key. |
| **FR-03** | Micro-Reader opens as bottom sheet (mobile) or drawer (desktop) with 3 structured sections. | Open node; verify analogy, cross-discipline link, and 3 checkboxes. |
| **FR-04** | Decision Simulator shows dilemma with 2-3 choices and strategic feedback. | Select decision option; verify impact explanation. |
| **FR-05** | Quiz runs 30s timer per question, provides green/red feedback, awards RP, triggers confetti. | Complete quiz; verify score, timer deduction, and completion card. |
| **FR-06** | Stats (RP, streak, mastered nodes) persist across page refresh. | Refresh browser; check if RP and mastered status persist. |
| **NFR-01** | Zero horizontal overflow on 375px mobile screen. | Test on mobile viewport; inspect layout. |

