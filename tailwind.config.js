/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        amber: {
          primary: '#f59e0b',
          glow: 'rgba(245, 158, 11, 0.25)',
          dark: '#d97706',
          light: '#fbbf24',
        },
        dark: {
          bg: '#0b0f19',
          darker: '#070a10',
          card: '#111827',
          cardHover: '#1e293b',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        heading: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'amber-glow': '0 0 24px rgba(245, 158, 11, 0.3)',
        'amber-glow-lg': '0 0 35px rgba(245, 158, 11, 0.45)',
        'card-dark': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'card-light': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse-green 2s infinite',
        'slide-in': 'slideInRight 0.3s ease forwards',
      },
      keyframes: {
        'pulse-green': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 8px rgba(16, 185, 129, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
        },
        slideInRight: {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
