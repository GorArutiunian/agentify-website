import { siteConfig } from './site.config'

export default {
  locales: siteConfig.locales as unknown as string[],
  defaultLocale: siteConfig.localeDefault
}

