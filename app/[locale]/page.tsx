"use client"
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star, ArrowUp, Check, Gauge } from 'lucide-react'
import { CalendlyModal } from '@/components/calendly-modal'
import { AnimatedBlob } from '@/components/animated-blob'
import { LogoCloud } from '@/components/logo-cloud'
import { Testimonials } from '@/components/testimonials'
import { agents as allAgents } from '@/content/agents'
import { AgentCard } from '@/components/agent-card'
import { BackgroundShapes } from '@/components/background-shapes'

export default function HomePage() {
  const t = useTranslations('home')
  
  return (
    <>
      {/* Hero Section - Dark Purple Background */}
      <section className="relative min-h-screen bg-secondary text-white overflow-hidden">
        {/* Geometric Background Shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary transform rotate-45"></div>
          <div className="absolute top-40 right-40 w-20 h-20 bg-accent-purple transform rotate-12"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-accent-pink transform -rotate-12"></div>
          <div className="absolute bottom-40 left-40 w-24 h-24 bg-primary transform rotate-45"></div>
        </div>
        
        <div className="container-responsive py-20 relative z-10">
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
              {/* Central AI Brain */}
              <div className="relative mx-auto w-80 h-80">
                {/* Main AI Core */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center animate-pulse">
                  <div className="text-6xl font-bold text-white">AI</div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg float-slow">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg pulse-soft">
                    <Gauge className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg float-slow" style={{animationDelay: '0.8s'}}>
                    <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg pulse-soft" style={{animationDelay: '0.4s'}}>
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-primary font-bold text-2xl">24/7</div>
                <div className="text-white text-sm">Always Working</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-accent-purple font-bold text-2xl">99.9%</div>
                <div className="text-white text-sm">Accuracy</div>
              </div>
              
              <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-accent-pink font-bold text-2xl">0</div>
                <div className="text-white text-sm">Downtime</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Cut */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-light-pink transform -skew-y-1 hidden lg:block"></div>
      </section>

      {/* What We Offer Section */}
      <section className="relative text-white py-20" style={{backgroundColor: '#2D1B69'}}>
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#E93E8F]/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-[#E93E8F]/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#E93E8F]/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-[#E93E8F]/12 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#E93E8F]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/3 w-20 h-20 bg-[#E93E8F]/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-10 w-36 h-36 bg-[#E93E8F]/6 rounded-full blur-2xl"></div>
          <div className="absolute top-60 left-1/3 w-16 h-16 bg-[#E93E8F]/25 rounded-full blur-md"></div>
          <div className="absolute bottom-60 right-10 w-44 h-44 bg-[#E93E8F]/4 rounded-full blur-3xl"></div>
          <div className="absolute top-16 left-1/2 w-12 h-12 bg-[#E93E8F]/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-16 right-1/4 w-52 h-52 bg-[#E93E8F]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-80 left-20 w-18 h-18 bg-[#E93E8F]/22 rounded-full blur-lg"></div>
          <div className="absolute bottom-80 left-1/2 w-48 h-48 bg-[#E93E8F]/6 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-10 w-14 h-14 bg-[#E93E8F]/28 rounded-full blur-md"></div>
          <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-[#E93E8F]/9 rounded-full blur-xl"></div>
          <div className="absolute top-100 right-1/2 w-20 h-20 bg-[#E93E8F]/18 rounded-full blur-lg"></div>
          <div className="absolute bottom-100 left-1/5 w-56 h-56 bg-[#E93E8F]/2 rounded-full blur-3xl"></div>
          <div className="absolute top-24 left-1/6 w-26 h-26 bg-[#E93E8F]/14 rounded-full blur-lg"></div>
          <div className="absolute bottom-24 right-1/6 w-38 h-38 bg-[#E93E8F]/7 rounded-full blur-xl"></div>
        </div>
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Left Side */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                <span className="text-primary">AI AUTOMATION</span><br />
                <span className="text-white">AGENTS</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 italic">Automation, Just Automation.</p>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-accent-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">›</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">EXCLUSIVE AI AUTOMATION SPECIALISTS</h3>
                    <p className="text-lg text-gray-200">
                      We specialize exclusively in AI-powered business automation. Our intelligent agents handle your repetitive tasks, streamline workflows, and deliver measurable results.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary to-accent-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">›</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">24/7 OPERATIONAL EXCELLENCE</h3>
                    <p className="text-lg text-gray-200">
                      From customer service to data processing, our AI agents work 24/7 to optimize your operations and maximize your ROI.
                    </p>
                  </div>
                </div>
              </div>
              
              <CalendlyModal 
                label="Speak To Our Team Today" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-accent-purple text-white font-bold text-base sm:text-lg rounded-full hover:scale-105 transition-transform shadow-lg w-full sm:w-auto mx-auto" 
              />
              <p className="text-sm text-gray-400 text-center">
                Schedule Your FREE Audit Call Now
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Agents Section - Only Hot Agents */}
      <section className="py-20 relative overflow-hidden" style={{backgroundColor: '#2D1B69'}}>
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[#E93E8F]/8 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-30 w-32 h-32 bg-[#E93E8F]/12 rounded-full blur-xl"></div>
          <div className="absolute bottom-30 left-1/3 w-48 h-48 bg-[#E93E8F]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-[#E93E8F]/10 rounded-full blur-xl"></div>
          <div className="absolute top-60 left-1/4 w-24 h-24 bg-[#E93E8F]/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-60 right-1/4 w-52 h-52 bg-[#E93E8F]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-80 left-10 w-28 h-28 bg-[#E93E8F]/18 rounded-full blur-xl"></div>
          <div className="absolute bottom-80 right-10 w-44 h-44 bg-[#E93E8F]/7 rounded-full blur-2xl"></div>
          <div className="absolute top-16 left-1/2 w-12 h-12 bg-[#E93E8F]/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-16 right-1/4 w-52 h-52 bg-[#E93E8F]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-100 left-20 w-18 h-18 bg-[#E93E8F]/22 rounded-full blur-lg"></div>
          <div className="absolute bottom-100 left-1/2 w-48 h-48 bg-[#E93E8F]/6 rounded-full blur-2xl"></div>
          <div className="absolute top-50 right-10 w-14 h-14 bg-[#E93E8F]/28 rounded-full blur-md"></div>
          <div className="absolute bottom-50 left-1/3 w-32 h-32 bg-[#E93E8F]/9 rounded-full blur-xl"></div>
          <div className="absolute top-120 right-1/2 w-20 h-20 bg-[#E93E8F]/18 rounded-full blur-lg"></div>
          <div className="absolute bottom-120 left-1/5 w-56 h-56 bg-[#E93E8F]/2 rounded-full blur-3xl"></div>
          <div className="absolute top-30 left-1/6 w-26 h-26 bg-[#E93E8F]/14 rounded-full blur-lg"></div>
          <div className="absolute bottom-30 right-1/6 w-38 h-38 bg-[#E93E8F]/7 rounded-full blur-xl"></div>
          <div className="absolute top-70 right-1/8 w-22 h-22 bg-[#E93E8F]/16 rounded-full blur-md"></div>
          <div className="absolute bottom-70 left-1/8 w-34 h-34 bg-[#E93E8F]/8 rounded-full blur-lg"></div>
          {/* Additional geometric shapes for variety */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-primary/15 transform rotate-45"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent-purple/12 transform -rotate-12"></div>
          <div className="absolute top-1/3 left-1/5 w-16 h-16 bg-orange-500/10 transform rotate-30"></div>
          <div className="absolute bottom-1/3 right-1/5 w-28 h-28 bg-red-500/8 transform -rotate-45"></div>
        </div>
        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">MOST POPULAR AI AGENTS</span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Our hottest agents with transparent pricing - 30% below market rates
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allAgents.filter(agent => agent.isHot).map(agent => (
              <AgentCard 
                key={agent.slug} 
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
            ))}
          </div>
          
          {/* View All Agents CTA */}
          <div className="text-center mt-12">
            <Link 
              href="/agents"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#2D1B69] font-bold text-base sm:text-lg rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg w-full sm:w-auto max-w-sm mx-auto"
            >
              View All {allAgents.length} Agents →
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Tools Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-pulse"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-10 right-10 w-18 h-18 bg-indigo-200/30 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              POWERED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">PREMIUM TOOLS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We integrate with industry-leading platforms to deliver seamless automation experiences for your business
            </p>
          </div>
          <LogoCloud />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative" style={{backgroundColor: '#2D1B69'}}>
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-[#E93E8F]/8 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-30 w-32 h-32 bg-[#E93E8F]/12 rounded-full blur-xl"></div>
          <div className="absolute bottom-30 left-1/3 w-48 h-48 bg-[#E93E8F]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-[#E93E8F]/10 rounded-full blur-xl"></div>
        </div>
        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">WHAT OUR CLIENTS SAY</h2>
            <p className="text-xl text-white">Real results from real businesses</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Industry Focus Section with Scroll Buttons */}
      <section className="bg-secondary text-white py-20 overflow-hidden relative">
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#E93E8F]/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-[#E93E8F]/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#E93E8F]/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-[#E93E8F]/12 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#E93E8F]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/3 w-20 h-20 bg-[#E93E8F]/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-10 w-36 h-36 bg-[#E93E8F]/6 rounded-full blur-2xl"></div>
          <div className="absolute top-60 left-1/3 w-16 h-16 bg-[#E93E8F]/25 rounded-full blur-md"></div>
          <div className="absolute bottom-60 right-10 w-44 h-44 bg-[#E93E8F]/4 rounded-full blur-3xl"></div>
          <div className="absolute top-16 left-1/2 w-12 h-12 bg-[#E93E8F]/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-16 right-1/4 w-52 h-52 bg-[#E93E8F]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-80 left-20 w-18 h-18 bg-[#E93E8F]/22 rounded-full blur-lg"></div>
          <div className="absolute bottom-80 left-1/2 w-48 h-48 bg-[#E93E8F]/6 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-10 w-14 h-14 bg-[#E93E8F]/28 rounded-full blur-md"></div>
          <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-[#E93E8F]/9 rounded-full blur-xl"></div>
          <div className="absolute top-100 right-1/2 w-20 h-20 bg-[#E93E8F]/18 rounded-full blur-lg"></div>
          <div className="absolute bottom-100 left-1/5 w-56 h-56 bg-[#E93E8F]/2 rounded-full blur-3xl"></div>
          <div className="absolute top-24 left-1/6 w-26 h-26 bg-[#E93E8F]/14 rounded-full blur-lg"></div>
          <div className="absolute bottom-24 right-1/6 w-38 h-38 bg-[#E93E8F]/7 rounded-full blur-xl"></div>
        </div>
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">INDUSTRY FOCUS</h2>
            <p className="text-xl text-gray-300">We serve businesses across 10+ industries</p>
          </div>
          
          {/* Scrollable industry badges with auto-scroll */}
          <div className="relative">
            <div className="flex overflow-x-auto scrollbar-hide scroll-smooth">
              <div className="flex gap-6 px-4 animate-scroll">
                {['Real Estate', 'Healthcare / Clinics', 'Legal Firms', 'Insurance Agencies', 'Accounting & Finance', 'Education / Training', 'Logistics / Delivery', 'E-commerce', 'HR / Recruitment', 'Marketing / Advertising'].map((industry, idx) => (
                  <div key={idx} className="flex-shrink-0 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-2xl px-8 py-6 text-center border-2 border-white/20 hover:scale-105 transition-all min-w-[250px]">
                    <h3 className="text-white font-bold text-xl whitespace-nowrap">{industry}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* CTA Section */}
      <section className="relative py-20" style={{backgroundColor: '#2D1B69'}}>
        <BackgroundShapes variant="light" intensity="medium" />
        
        <div className="container-responsive text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8">
            <span className="text-white">READY TO TRANSFORM</span><br />
            YOUR BUSINESS?
          </h2>
          
          <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto px-4">
            If you're ready to revolutionize your operations with AI automation, it would be our honor to find out. Schedule your FREE discovery call below.
          </p>
          
          <CalendlyModal 
            label="Speak To Our Team Today" 
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-primary to-accent-purple text-white font-bold text-lg sm:text-xl md:text-2xl rounded-full hover:scale-105 transition-transform shadow-2xl w-full sm:w-auto max-w-md mx-auto" 
          />
          <p className="text-white mt-4 text-center">
            Schedule Your FREE Audit Call Now
          </p>
        </div>
      </section>
    </>
  )
}