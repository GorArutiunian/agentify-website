"use client"
import { CalendlyModal } from '@/components/calendly-modal'

export function AIAgentsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary via-accent-purple to-secondary text-white">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">AI Agents</span>
          </h2>
          
          <p className="text-xl text-gray-200 leading-relaxed mb-12">
            Stop losing revenue to manual admin, slow follow-ups, and missed opportunities. Get specialized AI agents that automate your busiest workflows—at <span className="text-primary font-bold">30% below market rates</span> with fast deployment and managed hosting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyModal
              label="Book a 15-min consult"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent-pink text-white font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2"
            />
            <a
              href="/agents"
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-secondary transition-colors"
            >
              See 50+ agents
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
