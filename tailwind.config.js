/** @type {import('tailwindcss').Config} */
//
// NODUS design tokens
// -------------------
// The selected NODUS direction is a warm, editorial "cream / charcoal / gold" system.
// Rather than rewriting thousands of utility classes, the semantic scales that existing
// components already use (slate, indigo, emerald) are re-pointed at the NODUS palette:
//
//   slate   -> warm neutrals (paper, sand, ink)     roles: surfaces, borders, text
//   indigo  -> NODUS gold / bronze (brand accent)   roles: primary accent, selected, focus
//   emerald -> NODUS green                          roles: success, mastered, progress
//
// Prefer the explicit names below (ink, paper, gold, leaf) in new code.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#FBF9F5', 100: '#F4F1EA', 200: '#E8E4DB', 300: '#D6D1C5', 400: '#918C80',
          500: '#6E695E', 600: '#55514A', 700: '#3F3C37', 800: '#2A2926', 900: '#1B1B1E', 950: '#121214',
        },
        indigo: {
          50: '#FCF6E8', 100: '#F8EAC9', 200: '#F1D8A0', 300: '#E9C06B', 400: '#E3A63A',
          500: '#CF8E1F', 600: '#9A6410', 700: '#7A4D0A', 800: '#5E3A08', 900: '#432A06', 950: '#2A1A03',
        },
        emerald: {
          50: '#EAF6F0', 100: '#CFEBDD', 200: '#A8DCC3', 300: '#7BD9AE', 400: '#4FB885',
          500: '#2E7D5B', 600: '#26694C', 700: '#1F5640', 800: '#194534', 900: '#133528', 950: '#0B2219',
        },
        ink: { DEFAULT: '#151517', soft: '#1F1F23', raised: '#262629', line: '#3A3A3F' },
        paper: { DEFAULT: '#FBF9F5', sunken: '#F4F1EA', line: '#E8E4DB' },
        gold: { DEFAULT: '#E3A63A', deep: '#9A6410', tint: '#FCF6E8', ink: '#5E3A08' },
        leaf: { DEFAULT: '#2E7D5B', mint: '#7BD9AE', tint: '#EAF6F0' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(21,21,23,0.04), 0 8px 24px -12px rgba(21,21,23,0.10)',
        float: '0 12px 32px -10px rgba(21,21,23,0.28)',
      },
      keyframes: {
        dashFlow: { to: { strokeDashoffset: '-24' } },
        sheetUp: { from: { transform: 'translateY(24px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        'dash-flow': 'dashFlow 1.2s linear infinite',
        'sheet-up': 'sheetUp 0.28s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'fade-in': 'fadeIn 0.2s ease-out both',
      },
    },
  },
  plugins: [],
}
