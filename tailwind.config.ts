import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#f9f3ea',
          100: '#f0e4d1',
          200: '#e3cfaa',
          300: '#d2b47f',
          400: '#c29a59',
          500: '#ad7e3b',
          600: '#8a622f',
          700: '#684b24',
          800: '#4a371a',
          900: '#2f2212'
        }
      },
      boxShadow: {
        luxe: '0 24px 80px rgba(0,0,0,0.45)',
        gold: '0 0 0 1px rgba(221, 187, 122, 0.18), 0 24px 80px rgba(221, 187, 122, 0.14)'
      },
      backgroundImage: {
        'studio-radial':
          'radial-gradient(circle at top, rgba(221,187,122,0.18), transparent 34%), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 24%), linear-gradient(180deg, #0c0b0a 0%, #11100f 40%, #080807 100%)'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)']
      }
    }
  },
  plugins: []
};

export default config;
