/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark base
        'brand-bg': '#071025',
        'brand-surface': '#0f1724',
        'brand-muted': '#0b1a2a',
        // Accents
        'brand-cyan': '#00c2d8',
        'brand-blue': '#39A0ED',
        'brand-neon': '#7CF4FF',
        'brand-accent': '#8B5CF6',
        // Neutral
        'muted-gray': '#94A3B8',
        'panel-glass': 'rgba(255,255,255,0.04)',

        // Keep some legacy tokens (mapped to the new palette)
        'acm-blue': '#39A0ED',
        'acm-light-blue': '#7CF4FF',
        'acm-yellow': '#FFD166',
        'acm-dark-blue': '#0b3b66',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'serif'],
        mono: ['Inconsolata', 'monospace'],
        ACM: ['myriad-pro','sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms ease-out both',
        'fade-in': 'fade-in 500ms ease-out both',
      },
      boxShadow: {
        'glass': '0 6px 24px rgba(2,6,23,0.6)',
      },
    },
  },
  plugins: [],
}

