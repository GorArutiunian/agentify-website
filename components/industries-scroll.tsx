"use client"
import Headline from '@/components/headline'
import LogoShapesBg from '@/components/logo-shapes-bg'

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
    <section className="relative py-20 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] overflow-hidden">
      {/* Glowing line separators */}
      <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
      <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
      <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
      <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
      <LogoShapesBg />
      
      <div className="container-responsive relative z-10">
        <div className="max-w-6xl mx-auto">
          <Headline className="text-center mb-12">
            <span className="text-white">Trusted by businesses</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">across industries</span>
          </Headline>
          
          {/* Professional Industries Scroll with Enhanced Background */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-lg">
            <div className="flex gap-8 overflow-x-auto no-scrollbar">
              <div className="flex animate-scroll">
                {[...industries, ...industries].map((industry, index) => (
                  <div
                    key={index}
                    className="inline-flex rounded-full px-10 py-5 bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 text-white whitespace-nowrap transition-all duration-300 cursor-pointer hover:bg-white/30 text-xl font-bold shadow-lg mx-3 hover:scale-105"
                  >
                    <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-hotpink hover:to-brand-magenta transition-all duration-300">
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
