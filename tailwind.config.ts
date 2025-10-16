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
          // Agentify Brand Colors
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
          // New Brand Gradient System
          brand: {
            'purple-dark': '#4c0072',
            'purple-bright': '#8a00ff',
            'pink-hot': '#ff3c91',
            'magenta': '#b833ff'
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
        backgroundImage: {
          'agentify-primary': 'linear-gradient(135deg, #4c0072 0%, #8a00ff 50%, #ff3c91 100%)',
          'agentify-accent': 'linear-gradient(135deg, #ff3c91 0%, #b833ff 100%)',
          'agentify-hero': 'linear-gradient(135deg, #4c0072 0%, #8a00ff 100%)',
          'agentify-glow': 'radial-gradient(ellipse at center, rgba(255, 60, 145, 0.1) 0%, transparent 70%)'
        },
        boxShadow: {
          'agentify-glow': '0 0 40px rgba(255, 60, 145, 0.3)',
          'agentify-card': '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)'
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

