"use client"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import HeroV2 from '@/components/hero-v2'
import { IndustriesBar } from '@/components/industries-bar'
import LogosStripBottom from '@/components/logos-strip'
import { HowItWorks } from '@/components/how-it-works'
import { SocialProofCompact } from '@/components/social-proof-compact'
import { FinalCTA } from '@/components/final-cta'
import { agents as allAgents } from '@/content/agents'
import { AgentCard } from '@/components/agent-card'

export default function HomePage() {
  const t = useTranslations('home')
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Agentify",
    "url": "https://www.agentifybots.com",
    "logo": "https://www.agentifybots.com/agentify-logo.png",
    "description": "Launch AI agents in days. Faster replies, fewer no-shows, more qualified leads.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@agentifybots.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/agentifybots",
      "https://www.facebook.com/agentifybots"
    ]
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroV2 />
      <IndustriesBar />
      
      {/* Popular agents section - show top 6 only */}
      <section className="section-padding bg-agentify-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Popular agents
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              Our most requested AI agents that deliver immediate results
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAgents.filter(agent => agent.isHot).slice(0, 6).map(agent => (
              <div
                key={agent.slug}
                onClick={() => {
                  if (typeof window !== 'undefined' && window.plausible) {
                    window.plausible('PopularAgent_Card_Click', { props: { agent_name: agent.name } })
                  }
                }}
              >
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
            <Link 
              href="/agents"
              className="inline-flex items-center text-brand-pink hover:text-brand-glow font-medium transition-colors"
              onClick={() => {
                if (typeof window !== 'undefined' && window.plausible) {
                  window.plausible('ViewAllAgents_Click', { props: { location: 'popular_agents' } })
                }
              }}
            >
              View all 50 agents →
            </Link>
          </div>
        </div>
      </section>

      <HowItWorks />
      <SocialProofCompact />
      <FinalCTA />
      <LogosStripBottom />
    </>
  )
}