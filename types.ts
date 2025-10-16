export type PricingPlan = {
  id: 'starter' | 'growth' | 'business'
  name: string
  price: number
  blurb: string
  features: string[]
  stripePriceId: string
}

export type PricingConfig = {
  plans: PricingPlan[]
  setupFee: number
  setupFeePromo: boolean
}

export type Agent = {
  title: string
  slug: string
  summary: string
  outcomes: string[]
  features: string[]
  integrations: string[]
  kpis: string[]
  setup_steps: string[]
  faq: { q: string; a: string }[]
  pricing_hint: string
  demo: { url: string; video?: string }
  images: string[]
}

// Plausible analytics type declaration
declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void
  }
}

