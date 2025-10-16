import './globals.css'
import type { Metadata } from 'next'
import { siteConfig } from '@/site.config'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.agentifybots.com'),
  title: {
    default: siteConfig.name,
    template: '%s — Agentify'
  },
  description:
    'Agentify builds practical AI agents for SMEs. Automate bookings, summaries, replies, and reports to save hours every week.',
  openGraph: {
    title: "Agentify — AI Agents for Business",
    description: "AI agents and automations that drive leads and save time.",
    url: "https://www.agentifybots.com",
    siteName: "Agentify",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  icons: { icon: "/favicon.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Analytics (optional) */}
        <script defer data-domain="agentifybots.com" src="https://plausible.io/js/script.js" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

