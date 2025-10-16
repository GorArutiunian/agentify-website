"use client"
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { CalendlyModal } from '@/components/calendly-modal'
import { Home, Bot, CreditCard, Phone, Calendar, User } from 'lucide-react'

export function BottomToolbar() {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('nav')

  const isActive = (href: string) => pathname === href

  return (
    <div className="hidden md:flex fixed bottom-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pb-safe">
        <div className="relative">
          {/* Bar */}
          <div className="h-16 rounded-t-2xl border-t bg-white/90 backdrop-blur shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between px-4">
            <Link
              href={`/${locale}`}
              className={`flex flex-col items-center gap-1 text-xs ${
                isActive(`/${locale}`) ? 'text-[#2D1B69] font-semibold' : 'text-gray-600'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>{t('home')}</span>
            </Link>

            <Link
              href={`/${locale}/agents`}
              className={`flex flex-col items-center gap-1 text-xs ${
                isActive(`/${locale}/agents`) ? 'text-[#2D1B69] font-semibold' : 'text-gray-600'
              }`}
            >
              <Bot className="w-5 h-5" />
              <span>{t('agents')}</span>
            </Link>

            {/* Floating CTA */}
            <div className="-translate-y-6">
              <CalendlyModal
                label="Book"
                className="rounded-full px-5 py-3 text-white font-bold shadow-xl bg-gradient-to-r from-[#D63384] to-[#2D1B69]"
              />
            </div>


            <Link
              href={`/${locale}/about`}
              className={`flex flex-col items-center gap-1 text-xs ${
                isActive(`/${locale}/about`) ? 'text-[#2D1B69] font-semibold' : 'text-gray-600'
              }`}
            >
              <User className="w-5 h-5" />
              <span>About</span>
            </Link>

            <Link
              href={`/${locale}/contact`}
              className={`flex flex-col items-center gap-1 text-xs ${
                isActive(`/${locale}/contact`) ? 'text-[#2D1B69] font-semibold' : 'text-gray-600'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
