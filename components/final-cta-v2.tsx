"use client"
import { CalendlyModal } from '@/components/calendly-modal'

export function FinalCTAV2() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-purple-dark via-brand-purple-bright to-brand-pink-hot relative overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-pink-hot/20 via-transparent to-brand-magenta/20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-l from-brand-magenta/20 via-transparent to-brand-pink-hot/20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            Ready to free up 10+ hours a week?
          </h2>
          
          {/* Sub-heading */}
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of businesses already using AI agents to automate their operations and grow faster.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <CalendlyModal
              label="Book a 15-min consult"
              className="px-10 py-4 bg-gradient-to-r from-brand-pink-hot to-brand-magenta text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-agentify-glow flex items-center gap-2"
            />
            <a
              href="mailto:agentifyworks@gmail.com"
              className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-brand-purple-dark transition-all duration-300 backdrop-blur-sm"
            >
              Email us
            </a>
          </div>
          
          {/* Small Text */}
          <p className="text-gray-300 text-sm mb-12">
            Free consultation • No commitment • Get started today
          </p>
          
          {/* Security Information Box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-md mx-auto shadow-agentify-card">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-pink-hot to-brand-magenta rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-white mb-2 text-lg">
                  Built on enterprise-grade security
                </h3>
                <p className="text-gray-200 text-sm mb-3">
                  Data encrypted in transit • No training on client data by default
                </p>
                <a href="/security" className="text-brand-pink-hot text-sm font-medium hover:underline">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
