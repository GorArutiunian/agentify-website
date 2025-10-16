"use client"
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'

const locales = ['en','ru','hy'] as const

export function LanguageSwitcher() {
  const pathname = usePathname()
  const locale = useLocale()
  useTranslations()

  const switchLocale = (l: string) => {
    const parts = pathname.split('/')
    parts[1] = l
    return parts.join('/')
  }

  return (
    <div className="inline-flex rounded-full border bg-light-cream/70 backdrop-blur px-1 py-1 text-xs">
      {locales.map((l) => (
        <Link
          key={l}
          href={switchLocale(l)}
          className={`px-2 py-1 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
            l === locale ? 'bg-primary text-white' : 'text-secondary hover:bg-neutral'
          }`}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}


