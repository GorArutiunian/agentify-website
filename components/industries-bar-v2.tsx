"use client"

const industries = [
  'Real Estate',
  'Legal',
  'Logistics',
  'Healthcare',
  'E-commerce',
  'Financial Services',
  'Education',
  'Manufacturing',
  'Retail',
  'Professional Services',
  'Technology',
  'Consulting'
]

export function IndustriesBarV2() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-purple-dark to-brand-purple-bright">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Trusted by businesses across industries
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white font-medium hover:bg-gradient-to-r hover:from-brand-pink-hot/20 hover:to-brand-magenta/20 hover:border-brand-pink-hot/50 hover:shadow-agentify-glow transition-all duration-300 cursor-pointer group"
              >
                <span className="group-hover:text-brand-pink-hot transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="text-center mt-8 lg:hidden">
            <p className="text-gray-300 text-sm">
              ← Scroll to see more industries →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
