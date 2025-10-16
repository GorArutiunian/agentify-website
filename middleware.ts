import createMiddleware from 'next-intl/middleware'
import { siteConfig } from './site.config'

export default createMiddleware({
  locales: siteConfig.locales as unknown as string[],
  defaultLocale: siteConfig.localeDefault,
  localePrefix: 'as-needed'
})

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
}

