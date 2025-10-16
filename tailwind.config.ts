import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#0F0A1E',   // page bg (near-black purple)
          dark:    '#1B1135',   // section bg
          purple:  '#6D28D9',   // violet-700
          pink:    '#EC4899',   // pink-500
          glow:    '#A855F7',   // violet-500
        }
      },
      backgroundImage: {
        'agentify-radial': 'radial-gradient(1200px 800px at 85% -10%, rgba(168,85,247,.25), transparent 60%), radial-gradient(1200px 800px at 10% 120%, rgba(236,72,153,.20), transparent 60%)',
        'agentify-hero': 'linear-gradient(180deg, #160D2A 0%, #0F0A1E 100%)',
        'agentify-card': 'linear-gradient(180deg, rgba(109,40,217,.35), rgba(236,72,153,.25))',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(168,85,247,.35)',
      },
      borderRadius: {
        lg: '12px',
        xl: '16px'
      }
    }
  },
  plugins: [animate]
}

export default config

