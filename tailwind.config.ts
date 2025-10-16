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
          // Agentify Brand Tokens
          brand: {
            deep: '#0e0621',
            purple: '#2a0a4a',
            'purple-2': '#4c0072',
            magenta: '#b833ff',
            hotpink: '#ff3c91'
          },
          text: {
            high: '#f7f7fb'
          },
          glass: 'rgba(255,255,255,0.06)'
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

