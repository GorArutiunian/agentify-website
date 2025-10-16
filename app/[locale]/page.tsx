"use client"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Star, Gauge, ArrowUp, Check } from 'lucide-react'
import { CalendlyModal } from '@/components/calendly-modal'
import { IndustriesBar } from '@/components/industries-bar'
import LogosStripBottom from '@/components/logos-strip'
import { HowItWorks } from '@/components/how-it-works'
import { SocialProofCompact } from '@/components/social-proof-compact'
import { FinalCTA } from '@/components/final-cta'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTASection } from '@/components/cta-section'
import { PhilosophySection } from '@/components/philosophy-section'
import { AIAgentsSection } from '@/components/ai-agents-section'
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
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-secondary text-white overflow-hidden">
        {/* Geometric Background Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary transform rotate-45"></div>
          <div className="absolute top-40 right-40 w-20 h-20 bg-accent-purple transform rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent-pink transform -rotate-12"></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-primary transform rotate-45"></div>
        </div>
        
        <div className="container-responsive py-20 relative z-10 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">MODERN DAY</span><br />
                <span className="text-primary">AI ALCHEMY</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
                We Help Businesses Produce Spine-Chilling ROI Via AI Automation
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                Stop wasting time and money on manual processes. It's time to make your operations count, scale your business and blow up your efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <CalendlyModal 
                  label="Speak To Our Team Today" 
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent-purple text-white font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-transform shadow-lg w-full sm:w-auto text-center" 
                />
                <Link 
                  href="/agents" 
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white hover:text-secondary transition-colors w-full sm:w-auto text-center"
                >
                  Explore Agents
                </Link>
              </div>
              
              <p className="text-sm text-gray-400 text-center sm:text-left">
                Schedule Your FREE Consultation Call Now
              </p>
            </div>
            
            {/* Right Side - AI Automation Visualization */}
            <div className="relative">
              {/* Central AI Brain - Made Bigger */}
              <div className="relative mx-auto w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem]">
                {/* Main AI Core */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center animate-pulse border-4 border-white/20 shadow-2xl">
                  <div className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white drop-shadow-lg">AI</div>
                </div>
                
                {/* Orbiting Elements - Made Bigger */}
                <div className="absolute -top-12 md:-top-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-xl float-slow">
                    <Star className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>
                
                <div className="absolute -right-12 md:-right-16 lg:-right-20 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-xl pulse-soft">
                    <Gauge className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>
                
                <div className="absolute -bottom-12 md:-bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-xl float-slow" style={{animationDelay: '0.8s'}}>
                    <ArrowUp className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>
                
                <div className="absolute -left-12 md:-left-16 lg:-left-20 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center shadow-xl pulse-soft" style={{animationDelay: '0.4s'}}>
                    <Check className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Floating Stats - MUCH BIGGER */}
              <div className="absolute -top-8 -right-8 md:-top-12 md:-right-16 bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-white/30 min-w-[140px] md:min-w-[180px] shadow-2xl">
                <div className="text-primary font-bold text-4xl md:text-6xl lg:text-7xl">24/7</div>
                <div className="text-white text-lg md:text-xl lg:text-2xl font-medium">Always Working</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-16 bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-white/30 min-w-[140px] md:min-w-[180px] shadow-2xl">
                <div className="text-accent-purple font-bold text-4xl md:text-6xl lg:text-7xl">99.9%</div>
                <div className="text-white text-lg md:text-xl lg:text-2xl font-medium">Accuracy</div>
              </div>
              
              <div className="absolute top-1/2 -right-28 md:-right-40 lg:-right-48 transform -translate-y-1/2 bg-white/15 backdrop-blur-sm rounded-3xl p-8 md:p-10 border-2 border-white/30 min-w-[140px] md:min-w-[180px] shadow-2xl">
                <div className="text-accent-pink font-bold text-4xl md:text-6xl lg:text-7xl">0</div>
                <div className="text-white text-lg md:text-xl lg:text-2xl font-medium">Downtime</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Cut */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-r from-secondary via-secondary to-transparent transform skew-y-1"></div>
      </section>

      <IndustriesBar />
      
      {/* Popular agents section - show top 6 only */}
      <section className="section-padding bg-agentify-section">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-primary">Hot Agents</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
      <TestimonialsSection />
      <CTASection />
      <PhilosophySection />
      <AIAgentsSection />
      <SocialProofCompact />
      <FinalCTA />
      <LogosStripBottom />
    </>
  )
}