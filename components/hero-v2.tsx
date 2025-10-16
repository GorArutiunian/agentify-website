"use client"
import Link from 'next/link'
import { CalendlyModal } from '@/components/calendly-modal'
import { Clock, TrendingUp, Users } from 'lucide-react'

export function HeroV2() {
  return (
    <section className="relative min-h-screen bg-gradient-brand text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white transform rotate-45 rounded-lg"></div>
        <div className="absolute top-40 right-40 w-20 h-20 bg-white transform rotate-12 rounded-lg"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white transform -rotate-12 rounded-lg"></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 bg-white transform rotate-45 rounded-lg"></div>
      </div>
      
      <div className="section-container section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-sm font-medium text-white">AI Agents for SMBs</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Automate your busywork.<br />
              <span className="text-white">
                Grow faster.
              </span>
            </h1>
            
            {/* Supporting text */}
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-2xl">
              We deploy ready-made AI agents for sales, support and ops—so you reply in minutes, cut costs, and never miss a lead.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <CalendlyModal 
                label="Book a 15-min consult" 
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-600 font-bold text-base sm:text-lg rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-center"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.plausible) {
                    window.plausible('BookConsult_Click', { props: { location: 'hero' } })
                  }
                }}
              />
              <Link 
                href="/agents" 
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all w-full sm:w-auto text-center"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.plausible) {
                    window.plausible('ViewAllAgents_Click', { props: { location: 'hero' } })
                  }
                }}
              >
                See 50+ agents
              </Link>
            </div>
            
            {/* Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">&lt;2 min avg response</div>
                  <div className="text-sm text-white/80">Lightning fast</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">30–50% fewer no-shows</div>
                  <div className="text-sm text-white/80">Better attendance</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Up to 40% more qualified leads</div>
                  <div className="text-sm text-white/80">Better quality</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Main phone mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border-4 border-white/20">
                <div className="p-6 h-full flex flex-col">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                    <div className="text-white text-xs font-medium">9:41</div>
                    <div className="w-16 h-1 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* App content */}
                  <div className="flex-1 bg-white rounded-2xl p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#E93E8F] to-[#D63384] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Agentify Bot</div>
                        <div className="text-xs text-gray-500">Online</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="text-sm text-gray-700">Hi! I'm your AI assistant. How can I help you today?</div>
                        <div className="text-xs text-gray-500 mt-1">2 min ago</div>
                      </div>
                      
                      <div className="bg-[#E93E8F]/10 rounded-lg p-3 ml-8">
                        <div className="text-sm text-gray-700">I need to schedule a meeting</div>
                        <div className="text-xs text-gray-500 mt-1">1 min ago</div>
                      </div>
                      
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="text-sm text-gray-700">I can help with that! What time works best for you?</div>
                        <div className="text-xs text-gray-500 mt-1">Just now</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
