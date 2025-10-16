"use client"
import { CalendlyModal } from '@/components/calendly-modal'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-light-purple to-bright-pink relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-200 via-pink-200 to-pink-300"></div>
      
      <div className="container-responsive relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to free up 10+ hours a week?
          </h2>
          
          {/* Sub-heading */}
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto">
            Join hundreds of businesses already using AI agents to automate their operations and grow faster.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <CalendlyModal
              label="Book a 15-min consult"
              className="px-8 py-4 bg-white text-secondary font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
            />
            <a
              href="mailto:agentifyworks@gmail.com"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-secondary transition-colors"
            >
              Email us
            </a>
          </div>
          
          {/* Small Text */}
          <p className="text-purple-100 text-sm mb-8">
            Free consultation • No commitment • Get started today
          </p>
          
          {/* Security Information Box */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-purple-200 max-w-md mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-bold text-secondary mb-2">
                  Built on enterprise-grade security
                </h3>
                <p className="text-gray-600 text-sm mb-2">
                  Data encrypted in transit • No training on client data by default
                </p>
                <a href="/security" className="text-primary text-sm font-medium hover:underline">
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
