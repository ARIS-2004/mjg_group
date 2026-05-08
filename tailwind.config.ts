import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF4FF',
          100: '#DCE8FF',
          200: '#B9D0FF',
          300: '#8FB1FF',
          400: '#5C8AFF',
          500: '#2563EB',
          600: '#1F4FCC',
          700: '#173B99',
          800: '#123C8D',
          900: '#0B1F4D',
          950: '#06122E',
        },
        accent: {
          400: '#FFB07A',
          500: '#FF6B35',
          600: '#F97316',
          700: '#C25216',
        },
        surface: {
          base: '#FFFFFF',
          soft: '#F8FAFC',
          tint: '#EEF4FF',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(11,31,77,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,77,0.06) 1px, transparent 1px)',
        'radial-soft':
          'radial-gradient(circle at top, #ffffff 0%, #eef4ff 100%)',
        'hero-gradient':
          'linear-gradient(135deg, #EEF4FF 0%, #FFFFFF 45%, #EEF4FF 100%)',
        'cta-gradient':
          'linear-gradient(120deg, #0B1F4D 0%, #123C8D 55%, #2563EB 100%)',
      },
      boxShadow: {
        glass:
          '0 1px 0 rgba(255,255,255,0.6) inset, 0 10px 40px -10px rgba(11,31,77,0.18)',
        soft: '0 10px 30px -12px rgba(11,31,77,0.18)',
        'soft-lg': '0 24px 60px -20px rgba(11,31,77,0.25)',
        glow: '0 0 0 1px rgba(37,99,235,0.15), 0 12px 50px -12px rgba(37,99,235,0.45)',
        'glow-orange':
          '0 0 0 1px rgba(249,115,22,0.18), 0 12px 50px -12px rgba(249,115,22,0.45)',
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'pulse-soft': 'pulseSoft 3.5s ease-in-out infinite',
        ring: 'ringSpin 4s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        ringSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
