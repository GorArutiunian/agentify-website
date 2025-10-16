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
        primary: {
          DEFAULT: '#E93E8F',
          dark: '#8A2BE2'
        },
        secondary: {
          DEFAULT: '#1A0F2D'
        },
        accent: {
          pink: '#E93E8F',
          purple: '#8A2BE2',
          magenta: '#FF1493'
        },
        neutral: '#FFF0F0',
        light: {
          blue: '#FFE5E5',
          sky: '#FFE5E5',
          peach: '#FFE5E5',
          cream: '#FFF8F5',
          pink: '#FFF0F0',
          rose: '#FFE5E5'
        },
        dark: {
          purple: '#1A0F2D',
          navy: '#0F172A'
        }
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

