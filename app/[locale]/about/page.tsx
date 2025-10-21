"use client"
import { useTranslations } from 'next-intl'
import { CalendlyModal } from '@/components/calendly-modal'
import { BackgroundShapes } from '@/components/background-shapes'
import { Philosophy } from '@/components/philosophy'
import LogoShapesBg from '@/components/logo-shapes-bg'
import Headline from '@/components/headline'

export default function AboutPage() {
  const t = useTranslations('about')
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F0520] via-[#1A0A2E] via-[#2D1B69] via-[#3A0A63] to-[#0F0520] text-white py-20 min-h-[60vh] flex items-center">
        {/* Logo Shapes Background */}
        <LogoShapesBg />
        
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">ABOUT</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">AGENTIFY</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              We're on a mission to revolutionize business operations through intelligent AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <LogoShapesBg />

        <div className="container-responsive relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">STORY</span>
              </h2>
              <div className="space-y-6 text-lg text-white">
                <p>
                  Founded with a vision to democratize AI automation, Agentify was born from the belief that every business, regardless of size, deserves access to cutting-edge artificial intelligence solutions.
                </p>
                <p>
                  Our journey began when we recognized the massive inefficiencies in business operations worldwide. Companies were spending countless hours on repetitive tasks, losing revenue to human error, and struggling to scale their operations effectively.
                </p>
                <p>
                  We set out to change this by creating intelligent AI agents that could handle these tasks with precision, speed, and reliability that humans simply cannot match.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-6xl font-bold">70+</div>
                  <div className="text-xl">Businesses Transformed</div>
                  <div className="text-sm opacity-80">And counting...</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-pink rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Philosophy />

      {/* Our Team Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">A-TEAM</span>
            </h2>
            <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
              Founded by AI experts who have spent years perfecting the art of intelligent automation. With our elusive company culture, caliber of clientele, and deep technical expertise, we've attracted the best talent globally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Ashot Zargaryan",
                role: "HEAD OF OPERATIONS",
                description: "Client relations and business development specialist"
              },
              {
                name: "Gor Arutiunian",
                role: "FOUNDER & CEO",
                description: "AI automation expert specializing in business process optimization"
              },
              {
                name: "Arsen Hambardzumyan",
                role: "LEAD DEVELOPER",
                description: "Full-stack developer and AI integration specialist"
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                {/* Beautiful gradient circle with initials instead of images */}
                <div className="w-16 h-16 bg-gradient-to-br from-brand-hotpink to-brand-magenta rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-brand-hotpink font-bold text-xs md:text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] text-white py-20 relative overflow-hidden">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">OUR</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">PROCESS</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">How we transform your business operations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "DISCOVERY",
                description: "We analyze your current processes and identify automation opportunities"
              },
              {
                step: "02", 
                title: "DESIGN",
                description: "Custom AI agents are designed specifically for your business needs"
              },
              {
                step: "03",
                title: "IMPLEMENT",
                description: "Seamless integration with your existing systems and workflows"
              },
              {
                step: "04",
                title: "OPTIMIZE",
                description: "Continuous monitoring and optimization for maximum performance"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                {/* Arrow connecting to next step - hidden on mobile */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 z-0">
                    <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 10H28M28 10L20 2M28 10L20 18" stroke="#E93E8F" strokeWidth="2"/>
                    </svg>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-br from-brand-hotpink to-brand-magenta rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <div className="container-responsive text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-8">
            <span className="text-white">READY TO START</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">YOUR AI JOURNEY?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto px-4">
            If you're ready to revolutionize your business operations with AI automation, it would be our honor to find out. Schedule your FREE discovery call below.
          </p>
          
          <CalendlyModal 
            label="Speak To Our Team Today" 
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-brand-hotpink to-brand-magenta text-white font-bold text-lg sm:text-xl md:text-2xl rounded-full hover:scale-105 transition-transform shadow-2xl w-full sm:w-auto max-w-md mx-auto" 
          />
          <p className="text-gray-500 mt-4 text-center">
            Schedule Your FREE Audit Call Now
          </p>
        </div>
      </section>
    </>
  )
}