export const siteConfig = {
  name: 'Agentify',
  tagline: 'AI agents that do the work for you.',
  localeDefault: 'en',
  locales: ['en'] as const,
  currency: 'USD',
  contact: {
    email: 'agentifyworks@gmail.com',
    phone: '+1 (555) 000-0000',
    address: 'Global Operations'
  },
  social: {
    x: 'https://x.com/agentify',
    linkedin: 'https://www.linkedin.com/company/agentify',
    github: 'https://github.com/agentify'
  }
}

export type Locale = (typeof siteConfig.locales)[number]

