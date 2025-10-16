import '../globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { siteConfig } from '@/site.config'
import { getMessages } from 'next-intl/server'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BottomToolbar } from '@/components/bottom-toolbar'
import CookieConsent from '@/components/cookie-consent'

export const metadata: Metadata = {
  title: {
    default: 'Agentify — Ready-made AI Agents for Sales, Support & Ops',
    template: '%s — Agentify'
  },
  description: 'Launch AI agents in days. Faster replies, fewer no-shows, more qualified leads. Book a 15-minute consult.',
  alternates: {
    canonical: 'https://www.agentifybots.com/'
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale
  if (!siteConfig.locales.includes(locale as any)) notFound()

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="page-bg text-white antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <Footer />
          <BottomToolbar />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

