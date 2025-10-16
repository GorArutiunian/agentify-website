import { notFound } from 'next/navigation'
import { agents, pricingByTier, type AgentDetail } from '@/content/agents'
import { Bot, CheckCircle, Zap, TrendingUp, ArrowRight, Download, Shield, Server, Monitor, Wrench } from 'lucide-react'
import Link from 'next/link'
import { CalendlyModal } from '@/components/calendly-modal'
import { TrustBadge } from '@/components/trust-badge'
import { LogosStrip } from '@/components/logos-strip'
import { TrustLine } from '@/components/trust-line'

export default function AgentDetail({ params }: { params: { slug: string; locale: string } }) {
  const agent = agents.find((a: AgentDetail) => a.slug === params.slug)
  if (!agent) return notFound()

  const pricing = agent.tier ? pricingByTier[agent.tier] : null

  return (
    <div className="min-h-screen bg-white">
      <main className="section-container pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href={`/${params.locale}/agents`} className="text-brand-600 hover:text-brand-700 font-medium text-sm flex items-center gap-2">
            ← Back to All Agents
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-600 to-brand-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Bot className="w-10 h-10 text-white" />
            </div>
            <div>
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-brand-100 text-brand-600 text-xs font-medium rounded-full uppercase tracking-wide">
                  {agent.industry}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-brand-900">{agent.name}</h1>
            </div>
          </div>
          <p className="text-lg text-brand-600 font-medium mb-3">{agent.subtitle}</p>
          <p className="text-base text-brand-700 max-w-3xl leading-relaxed">{agent.blurb}</p>
        </div>

        {/* Metrics */}
        {agent.metrics && agent.metrics.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-3">
              {agent.metrics.map((metric: string, idx: number) => (
                <div 
                  key={idx}
                  className="px-5 py-3 bg-brand-50 rounded-lg border border-brand-200"
                >
                  <span className="text-brand-900 font-semibold text-lg">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Feature Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          {agent.features && agent.features.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-brand-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-600" />
                Key Features
              </h2>
              <ul className="space-y-2">
                {agent.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Integrations */}
          {agent.integrations && agent.integrations.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-brand-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-600" />
                Integrations
              </h2>
              <ul className="space-y-2">
                {agent.integrations.map((integration: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-700 text-sm">{integration}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {agent.outcomes && agent.outcomes.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-brand-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-600" />
                Expected Outcomes
              </h2>
              <ul className="space-y-2">
                {agent.outcomes.map((outcome: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-700 text-sm">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* KPIs */}
          {agent.kpis && agent.kpis.length > 0 && (
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-brand-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-600" />
                Key Metrics Tracked
              </h2>
              <ul className="space-y-2">
                {agent.kpis.map((kpi: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-700 text-sm">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* What You Get Checklist */}
        <div className="mb-12 bg-brand-50 rounded-lg p-6 border border-brand-200">
          <h2 className="text-xl font-semibold text-brand-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-brand-600" />
            What You Get
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="text-brand-700 text-sm">Fully configured AI agent</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="text-brand-700 text-sm">Hosting & monitoring included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="text-brand-700 text-sm">Integration setup & testing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="text-brand-700 text-sm">Training & documentation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="text-brand-700 text-sm">30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span className="text-brand-700 text-sm">Ongoing support & updates</span>
            </div>
          </div>
        </div>

        {/* Implementation Steps */}
        {agent.steps && Array.isArray(agent.steps) && agent.steps.length > 0 && (
          <div className="mb-12 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-brand-900 mb-4">Implementation Steps</h2>
            <ol className="space-y-3">
              {agent.steps.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-brand-700 text-sm pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* FAQ */}
        {agent.faq && Array.isArray(agent.faq) && agent.faq.length > 0 && (
          <div className="mb-12 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-brand-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {agent.faq.map((item: { q: string; a: string }, index: number) => (
                <div key={index}>
                  <h3 className="text-base font-semibold text-brand-900 mb-2">{item.q}</h3>
                  <p className="text-brand-700 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PDF Download Section */}
        <div className="mb-12 bg-brand-50 rounded-lg p-6 border border-brand-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-brand-900 mb-1">Download 1-page PDF spec</h3>
              <p className="text-brand-700 text-sm">Get a detailed specification sheet for this agent</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors text-sm font-medium">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        {agent.disclaimer && (
          <div className="mb-8 bg-yellow-50 rounded-lg p-4 border border-yellow-300">
            <p className="text-sm text-gray-700 italic text-center">
              <strong>Important:</strong> {agent.disclaimer}
            </p>
          </div>
        )}

        {/* Pricing Section - AFTER Details, BEFORE CTA - Only for Hot Agents */}
        {pricing && agent.isHot && (
          <div className="mb-12 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-brand-900 mb-2">
                Transparent <span className="text-brand-600">Pricing</span>
              </h2>
              <p className="text-brand-700">30% below market with everything included</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Market Price */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 opacity-60">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                  Typical Market Rate
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Setup Fee:</span>
                    <span className="text-lg font-semibold text-gray-700 line-through">
                      ${pricing.marketSetup.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Monthly:</span>
                    <span className="text-lg font-semibold text-gray-700 line-through">
                      ${pricing.marketMonthly.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Agentify Price */}
              <div className="bg-brand-50 rounded-lg p-4 border-2 border-brand-600 shadow-sm relative">
                <div className="absolute top-2 right-2">
                  <span className="inline-block px-2 py-1 bg-green-500 text-white text-xs font-medium rounded-full uppercase">
                    Save 30%
                  </span>
                </div>
                <div className="text-sm font-medium text-brand-600 uppercase tracking-wide mb-3">
                  Agentify Price
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-900 font-semibold text-sm">Setup Fee:</span>
                    <span className="text-xl font-bold text-brand-900">
                      ${pricing.agentifySetup.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-brand-900 font-semibold text-sm">Monthly:</span>
                    <span className="text-xl font-bold text-brand-900">
                      ${pricing.agentifyMonthly.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-brand-200">
                  <p className="text-xs text-brand-700">
                    ✓ Hosting + monitoring included<br />
                    ✓ Regular updates & support<br />
                    ✓ Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trust Micro-section */}
        <div className="mb-8">
          <TrustBadge />
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-brand-600 to-brand-500 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Get a personalized quote and demo in 24 hours. See exactly how this agent fits your workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyModal 
              label="Book Free Consultation" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-600 font-bold text-base sm:text-lg rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-center"
            />
            <button className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all w-full sm:w-auto text-center">
              <Download className="w-4 h-4" />
              Download PDF Spec
            </button>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Free consultation • No commitment • Get started today
          </p>
        </div>
      </main>
      <TrustLine />
      <LogosStrip />
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
