/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0D12',
          soft: '#12151C',
          surface: '#161923',
          border: '#232733',
        },
        paper: {
          DEFAULT: '#EDEEF2',
          muted: '#9CA1AF',
          dim: '#6B7080',
        },
        gold: {
          DEFAULT: '#C9A24B',
          soft: '#E4C778',
          dim: '#8A712F',
        },
        spatial: {
          DEFAULT: '#5B8DEF',
          soft: '#8FB0F5',
          dim: '#2F4E8C',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent 0%, #0B0D12 85%), repeating-linear-gradient(0deg, rgba(156,161,175,0.08) 0px, rgba(156,161,175,0.08) 1px, transparent 1px, transparent 64px), repeating-linear-gradient(90deg, rgba(156,161,175,0.08) 0px, rgba(156,161,175,0.08) 1px, transparent 1px, transparent 64px)',
      },
    },
  },
  plugins: [],
}
