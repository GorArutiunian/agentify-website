import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { siteConfig } from './site.config'

export const routing = defineRouting({
  locales: siteConfig.locales,
  defaultLocale: siteConfig.localeDefault as "en",
  localePrefix: 'always'
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
