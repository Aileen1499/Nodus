/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#070A11',
          900: '#0B0F19', // Primary Background
          800: '#111827',
          700: '#172033',
        },
        surface: {
          dark: '#1E293B', // Card & Container BG
          muted: '#0F172A',
          border: '#334155',
          hover: '#283548',
        },
        nodus: {
          indigo: '#6366F1', // Primary Accent & AI Glow
          emerald: '#10B981', // Wealth & Success Accent
          amber: '#F59E0B',
          rose: '#EC4899',
          cyan: '#06B6D4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 22px rgba(99, 102, 241, 0.9))' },
        },
        emeraldGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 12px rgba(16, 185, 129, 0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 22px rgba(16, 185, 129, 0.9))' },
        },
        floatNode: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        dashFlow: {
          to: { strokeDashoffset: '-24' },
        },
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'emerald-glow': 'emeraldGlow 3s ease-in-out infinite',
        'float-node': 'floatNode 4s ease-in-out infinite',
        'dash-flow': 'dashFlow 1.2s linear infinite',
      },
    },
  },
  plugins: [],
}

