import Link from 'next/link'
import { CalendlyModal } from '@/components/calendly-modal'
import { TrustBadge } from '@/components/trust-badge'

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-brand text-white">
      <div className="section-container">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            Ready to free up 10+ hours a week?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using AI agents to automate their operations and grow faster.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CalendlyModal 
              label="Book a 15-min consult" 
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-600 font-bold text-base sm:text-lg rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-lg w-full sm:w-auto text-center"
              onClick={() => {
                if (typeof window !== 'undefined' && window.plausible) {
                  window.plausible('BookConsult_Click', { props: { location: 'final_cta' } })
                }
              }}
            />
            <Link 
              href="mailto:hello@agentifybots.com"
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all w-full sm:w-auto text-center"
            >
              Email us
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Free consultation • No commitment • Get started today
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            <TrustBadge />
          </div>
        </div>
      </div>
    </section>
  )
}
