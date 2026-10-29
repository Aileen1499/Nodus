# NODUS — Knowledge Graph & Decision Simulation System

> **"Connect the Dots to Wealth & Business Mastery"**

NODUS adalah platform pembelajaran kognitif interaktif yang dirancang untuk menjembatani kesenjangan antara teori akademis dan eksekusi eksekutif di dunia nyata. Berakar pada domain **Bisnis, Ekonomi, Keuangan, Psikologi Perilaku, dan Geopolitik**, NODUS menggantikan pembelajaran pasif konvensional dengan *4-Tier Pedagogical Engine*:

1. **Interactive Visual Knowledge Graph (Mindmap):** Pemetaan simpul pengetahuan dinamis SVG/Canvas dengan kurva bezier berpendar (*glowing pathways*) yang memperlihatkan kausalitas antar-disiplin ilmu.
2. **Micro-Reader Sheet:** Intisari padat dengan analogi dunia nyata (<150 kata), koneksi lintas ilmu (inter-disciplinary synthesis), dan 3 daftar centang tindakan nyata harian.
3. **Decision Simulator:** Simulasi taktis dilema bisnis/finansial dengan pilihan bercabang dan evaluasi konsekuensi langsung.
4. **Gamified Retention Engine:** Kuis penalaran berbatas waktu (30 detik per soal dengan progress bar visual), perolehan Rank Points (⭐ RP), Daily Streak (🔥), dan pembukaan simpul bertahap.

---

## 🎨 Design System & Branding

- **Background Utama (Dark Mode):** Slate Obsidian (`#0B0F19`)
- **Card & Container Surface:** Dark Slate (`#1E293B`)
- **Aksen Primer & AI Glow:** Electric Indigo (`#6366F1`)
- **Aksen Keberhasilan & Mastery:** Emerald Mint (`#10B981`)
- **Aksen Finansial / Perhatian:** Amber Gold (`#F59E0B`)
- **Aksen Psikologi / Perilaku:** Rose Violet (`#EC4899`)
- **Tipografi:** Pure White (`#F8FAFC`) untuk judul, Muted Slate (`#94A3B8`) untuk paragraf

---

## 📁 Struktur Direktori

```
Nodus/
├── docs/
│   └── SRS.md                       # Software Requirements Specification Formal
├── public/
│   └── logo.svg                     # Logo Vector Nodus
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx           # Navigation bar & User stats (RP, Streak, Credits)
│   │   │   ├── HelpModal.tsx        # Panduan penggunaan 4-Tier Engine
│   │   │   └── SettingsModal.tsx    # Konfigurasi Gemini API Key & reset data
│   │   ├── mindmap/
│   │   │   └── MindmapCanvas.tsx    # Interactive SVG/Canvas Mindmap Engine
│   │   ├── quiz/
│   │   │   └── QuizEngine.tsx       # Decision Simulator & Timed Reasoning Quiz (30s)
│   │   └── reader/
│   │       └── MicroReaderSheet.tsx # Micro-Reader Bottom Sheet & Drawer
│   ├── context/
│   │   └── UserContext.tsx          # Local State Mastery Engine (localStorage)
│   ├── data/
│   │   └── mockMindmaps.ts          # Curated Knowledge Graphs untuk 4 Preset Prompts
│   ├── lib/
│   │   └── gemini.ts                # Gemini API Integration & Offline Fallback Engine
│   ├── types/
│   │   └── index.ts                 # TypeScript Interfaces & Data Models
│   ├── App.tsx                      # Root Application Controller
│   ├── index.css                    # Tailwind CSS Directives & Custom Styling
│   └── main.tsx                     # Entry Point
├── index.html                       # HTML Template
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Panduan Menjalankan Secara Lokal

### 1. Prasyarat
- Node.js v18+ atau v20+
- NPM

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di `http://localhost:3000` (atau port yang tertera di terminal).

### 4. Build untuk Produksi
```bash
npm run build
npm run preview
```

---

## ⚡ Fitur Utama yang Telah Diimplementasikan

- **[FR-01] Interactive Knowledge Graph:** Kanvas SVG responsif dengan zoom, pan, dragging simpul, dan jalur bezier berpendar.
- **[FR-02] Dynamic AI Prompt Engine:** Terintegrasi dengan Gemini API (JSON Schema) dan memiliki generator offline cadangan untuk kueri kustom.
- **[FR-03] Micro-Reader Bottom Sheet:** Responsif untuk Mobile (sheet bawah) dan Desktop (drawer samping), dilengkapi checklist tindakan nyata (+10 RP).
- **[FR-04] Interactive Decision Simulator:** Uji kasus nyata dengan pilihan strategi dan penjelasan trade-off.
- **[FR-05] Gamified Quiz Engine:** Countdown timer 30s, umpan balik hijau/merah instan, confetti selebrasi, dan penghargaan RP.
- **[FR-06] Local State Mastery Progress:** Menyimpan RP, streak, kredit, dan daftar simpul yang dikuasai secara persisten di LocalStorage.
- **[NFR-01, 02, 03]:** Mobile-first responsive, 60 FPS visual rendering, dan dark obsidian glassmorphism.

---

Dokumen spesifikasi arsitektur lengkap dapat dilihat pada [docs/SRS.md](docs/SRS.md).
