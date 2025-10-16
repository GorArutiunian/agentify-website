"use client"
import { useTranslations } from 'next-intl'
import { HeroV3 } from '@/components/hero-v3'
import { PoweredTools } from '@/components/powered-tools'
import { IndustriesScroll } from '@/components/industries-scroll'
import { TestimonialsV2 } from '@/components/testimonials-v2'
import { FinalCTAV2 } from '@/components/final-cta-v2'
import { agents as allAgents } from '@/content/agents'
import { AgentCard } from '@/components/agent-card'

export default function HomePage() {
  const t = useTranslations('home')
  
  // Show only the top 6 hot agents
  const popularAgents = allAgents.filter(agent => agent.isHot).slice(0, 6)

  // JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agentify",
    "description": "AI agents and automations that drive leads and save time for businesses.",
    "url": "https://www.agentifybots.com",
    "logo": "https://www.agentifybots.com/agentify-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-000-0000",
      "contactType": "customer service",
      "email": "agentifyworks@gmail.com"
    }
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section with Phone Chat UI */}
      <HeroV3 />

      {/* Popular agents section */}
      <section className="py-24 bg-[#130724]">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-high mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">Hot Agents</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready-made AI agents that handle your most time-consuming tasks automatically. 
              Deploy in 24 hours, see results immediately.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAgents.map((agent) => (
              <div key={agent.slug} className="group">
                <AgentCard 
                  title={agent.name} 
                  slug={agent.slug} 
                  summary={agent.blurb}
                  category={agent.category}
                  subtitle={agent.subtitle}
                  industry={agent.industry}
                  tier={agent.tier}
                  metrics={agent.metrics}
                  disclaimer={agent.disclaimer}
                  isHot={agent.isHot}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/agents"
              className="inline-flex items-center text-brand-hotpink hover:text-brand-magenta font-medium transition-colors"
            >
              View all 50 agents →
            </a>
          </div>
        </div>
      </section>

      {/* Powered by professional tools */}
      <PoweredTools />

      {/* Industries scroll */}
      <IndustriesScroll />

      {/* Testimonials */}
      <TestimonialsV2 />

      {/* Final CTA */}
      <FinalCTAV2 />
    </>
  )
}