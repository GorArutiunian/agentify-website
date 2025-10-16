"use client"

const industries = [
  'Real Estate',
  'Healthcare',
  'Legal',
  'Insurance',
  'Accounting',
  'Education',
  'Logistics',
  'E-commerce',
  'HR/Recruiting',
  'Marketing'
]

export function IndustriesScroll() {
  return (
    <section className="py-12 bg-[#130724]">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-lg text-gray-300 mb-8">
            Trusted by businesses across industries
          </h2>
          
          {/* Industries Scroll */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar justify-center">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="inline-flex rounded-full px-4 py-2 bg-white/5 ring-1 ring-white/10 hover:ring-brand-hotpink text-white whitespace-nowrap transition-all duration-300 cursor-pointer hover:bg-white/8"
              >
                <span className="hover:text-brand-hotpink transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="text-center mt-6 lg:hidden">
            <p className="text-gray-400 text-sm">
              ← Scroll to see more industries →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
