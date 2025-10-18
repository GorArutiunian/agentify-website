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
  'Marketing',
  'Finance',
  'Technology',
  'Manufacturing',
  'Retail',
  'Consulting',
  'Non-Profit',
  'Government',
  'Media',
  'Travel',
  'Sports'
]

export function IndustriesScroll() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#E93E8F] rounded-full blur-2xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#FF6B9D] rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-[#E93E8F] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-[#FF6B9D] rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D] rounded-full blur-3xl opacity-25"></div>
        <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-[#E93E8F] rounded-full blur-lg"></div>
        <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-[#FF6B9D] rounded-full blur-xl"></div>
      </div>
      
      <div className="container-responsive relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D] mb-12">
            Trusted by businesses across industries
          </h2>
          
          {/* Professional Industries Scroll with Enhanced Background */}
          <div className="bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-md rounded-3xl p-12 border-2 border-white/20 shadow-2xl">
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
              <div className="flex animate-scroll">
                {[...industries, ...industries].map((industry, index) => (
                  <div
                    key={index}
                    className="inline-flex rounded-full px-10 py-5 bg-gradient-to-r from-white/20 to-white/10 ring-2 ring-white/40 hover:ring-[#E93E8F] text-white whitespace-nowrap transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[#E93E8F]/20 hover:to-[#FF6B9D]/20 text-xl font-bold shadow-xl mx-3 hover:scale-105"
                  >
                    <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#E93E8F] hover:to-[#FF6B9D] transition-all duration-300">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="text-center mt-8 lg:hidden">
            <p className="text-gray-400 text-sm">
              ← Scroll to see more industries →
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
