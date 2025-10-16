import { getRequestConfig } from 'next-intl/server'
import { routing } from '../i18n'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  
  // Ensure locale is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = (await import(`../messages/${locale}.json`)).default;
  
  return { 
    locale,
    messages 
  };
});
