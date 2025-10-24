import { notFound } from 'next/navigation'
import { agents, pricingByTier, type AgentDetail } from '@/content/agents'
import { Bot, CheckCircle, Zap, TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import LogoShapesBg from '@/components/logo-shapes-bg'

export default function AgentDetail({ params }: { params: { slug: string; locale: string } }) {
  const agent = agents.find((a: AgentDetail) => a.slug === params.slug)
  if (!agent) return notFound()

  const pricing = agent.tier ? pricingByTier[agent.tier] : null

  return (
    <div className="relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] min-h-screen">
      {/* Logo Shapes Background */}
      <LogoShapesBg />
      
      {/* Glowing line separators */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
      <span className="pointer-events-none absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
      
      <main className="container-responsive relative z-10 pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href={`/${params.locale}/agents`} className="text-[#E93E8F] hover:text-[#FF6B9D] font-semibold text-sm flex items-center gap-2">
            ← Back to All Agents
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-2xl flex items-center justify-center shadow-xl">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                  {agent.industry}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">{agent.name}</h1>
            </div>
          </div>
          <p className="text-xl text-[#E93E8F] font-semibold italic mb-3">{agent.subtitle}</p>
          <p className="text-lg text-gray-200 max-w-3xl leading-relaxed">{agent.blurb}</p>
        </div>

        {/* Metrics */}
        {agent.metrics && agent.metrics.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {agent.metrics.map((metric: string, idx: number) => (
                <div 
                  key={idx}
                  className="px-5 py-3 bg-white rounded-xl shadow-lg border-2 border-[#E93E8F]/30"
                >
                  <span className="text-[#2D1B69] font-bold text-lg">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Two Column Layout for Details - FIRST */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          {agent.features && agent.features.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E93E8F]">
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#E93E8F]" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {agent.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E93E8F] flex-shrink-0 mt-1" />
                    <span className="text-[#2D1B69] font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Integrations */}
          {agent.integrations && agent.integrations.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E93E8F]">
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-[#E93E8F]" />
                Integrations
              </h2>
              <ul className="space-y-3">
                {agent.integrations.map((integration: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E93E8F] flex-shrink-0 mt-1" />
                    <span className="text-[#2D1B69] font-medium">{integration}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {agent.outcomes && agent.outcomes.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E93E8F]">
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#E93E8F]" />
                Expected Outcomes
              </h2>
              <ul className="space-y-3">
                {agent.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E93E8F] flex-shrink-0 mt-1" />
                    <span className="text-[#2D1B69] font-medium">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* KPIs */}
          {agent.kpis && agent.kpis.length > 0 && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E93E8F]">
              <h2 className="text-2xl font-bold text-[#2D1B69] mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-[#E93E8F]" />
                Key Metrics Tracked
              </h2>
              <ul className="space-y-3">
                {agent.kpis.map((kpi: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E93E8F] flex-shrink-0 mt-1" />
                    <span className="text-[#2D1B69] font-medium">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Implementation Steps */}
        {agent.steps && Array.isArray(agent.steps) && agent.steps.length > 0 && (
          <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E93E8F]">
            <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Implementation Steps</h2>
            <ol className="space-y-4">
              {agent.steps.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {index + 1}
                  </div>
                  <span className="text-[#2D1B69] font-medium pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* FAQ */}
        {agent.faq && Array.isArray(agent.faq) && agent.faq.length > 0 && (
          <div className="mb-12 bg-white rounded-2xl p-8 shadow-xl border-2 border-[#E93E8F]">
            <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {agent.faq.map((item: { q: string; a: string }, index: number) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-[#2D1B69] mb-2">{item.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Disclaimer */}
        {agent.disclaimer && (
          <div className="mb-8 bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
            <p className="text-sm text-gray-700 italic text-center">
              <strong>Important:</strong> {agent.disclaimer}
            </p>
          </div>
        )}

        {/* Pricing Section - AFTER Details, BEFORE CTA - Only for Hot Agents */}
        {pricing && agent.isHot && (
          <div className="mb-12 bg-white rounded-3xl p-8 shadow-2xl border-4 border-[#E93E8F]">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-[#2D1B69] mb-2">
                Transparent <span className="text-[#E93E8F]">Pricing</span>
              </h2>
              <p className="text-gray-600">30% below market with everything included</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Market Price */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border-2 border-gray-300 opacity-60">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                  Typical Market Rate
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Setup Fee:</span>
                    <span className="text-2xl font-bold text-gray-700 line-through">
                      ${pricing.marketSetup.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Monthly:</span>
                    <span className="text-2xl font-bold text-gray-700 line-through">
                      ${pricing.marketMonthly.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Agentify Price */}
              <div className="bg-gradient-to-br from-brand-hotpink/10 to-brand-magenta/10 rounded-2xl p-6 border-4 border-brand-hotpink shadow-xl relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full uppercase">
                    Save 30%
                  </span>
                </div>
                <div className="text-sm font-bold text-[#E93E8F] uppercase tracking-wide mb-4">
                  Agentify Price
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#2D1B69] font-bold">Setup Fee:</span>
                    <span className="text-3xl font-bold text-[#2D1B69]">
                      ${pricing.agentifySetup.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#2D1B69] font-bold">Monthly:</span>
                    <span className="text-3xl font-bold text-[#2D1B69]">
                      ${pricing.agentifyMonthly.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E93E8F]/30">
                  <p className="text-sm text-gray-700 italic">
                    ✓ Hosting + monitoring included<br />
                    ✓ Regular updates & support<br />
                    ✓ Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-brand-hotpink/20 to-brand-magenta/20 rounded-3xl p-12 border-2 border-brand-hotpink">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a personalized quote and demo in 24 hours. See exactly how this agent fits your workflow.
          </p>
          <a 
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/agentifyworks/30min'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] text-white font-bold text-lg rounded-full hover:from-[#ff3c91] hover:via-[#3a0a63] hover:to-[#130724] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </main>
    </div>
  )
}

// Generate static params for all agents
export async function generateStaticParams() {
  return agents.map((agent: AgentDetail) => ({
    slug: agent.slug,
    locale: 'en', // Add locale parameter
  }))
}

// Add metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const agent = agents.find((a: AgentDetail) => a.slug === params.slug)
  if (!agent) return {}

  const pricing = agent.tier ? pricingByTier[agent.tier] : null

  return {
    title: `${agent.name}${agent.subtitle ? ' - ' + agent.subtitle : ''} | Agentify`,
    description: agent.blurb,
    // Add JSON-LD structured data for products
    ...(pricing ? {
      other: {
        'application/ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: agent.name,
          description: agent.blurb,
          brand: {
            '@type': 'Brand',
            name: 'Agentify'
          },
          offers: {
            '@type': 'Offer',
            price: pricing.agentifyMonthly,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            priceValidUntil: '2025-12-31',
            seller: {
              '@type': 'Organization',
              name: 'Agentify'
            }
          },
          aggregateRating: agent.metrics ? {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127'
          } : undefined
        })
      }
    } : {})
  }
}
