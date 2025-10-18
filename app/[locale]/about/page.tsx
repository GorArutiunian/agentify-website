"use client"
import { useTranslations } from 'next-intl'
import { CalendlyModal } from '@/components/calendly-modal'
import { BackgroundShapes } from '@/components/background-shapes'
import { Philosophy } from '@/components/philosophy'

export default function AboutPage() {
  const t = useTranslations('about')
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] text-white py-20 min-h-[60vh] flex items-center">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#E93E8F] transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#FF6B9D] transform -rotate-12"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">ABOUT</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">AGENTIFY</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed">
              We're on a mission to revolutionize business operations through intelligent AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        <BackgroundShapes variant="light" intensity="low" />
        
        {/* Additional Decorative Shapes for Our Story */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-24 h-24 bg-primary/15 transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-20 h-20 bg-[#E93E8F]/20 rounded-full blur-md"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-purple/15 transform -rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/4 w-28 h-28 bg-primary/10 rounded-full blur-lg"></div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">STORY</span>
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
              <div className="bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-3xl p-8 text-white">
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

      {/* Our Philosophy Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#E93E8F]/10 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-[#E93E8F]/15 rounded-full blur-lg"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#E93E8F]/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-[#E93E8F]/12 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#E93E8F]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/3 w-20 h-20 bg-[#E93E8F]/20 rounded-full blur-lg"></div>
          <div className="absolute bottom-32 left-10 w-36 h-36 bg-[#E93E8F]/6 rounded-full blur-2xl"></div>
          <div className="absolute top-60 left-1/3 w-16 h-16 bg-[#E93E8F]/25 rounded-full blur-md"></div>
          <div className="absolute bottom-60 right-10 w-44 h-44 bg-[#E93E8F]/4 rounded-full blur-3xl"></div>
          <div className="absolute top-16 left-1/2 w-12 h-12 bg-[#E93E8F]/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-16 right-1/4 w-52 h-52 bg-[#E93E8F]/3 rounded-full blur-3xl"></div>
          <div className="absolute top-80 left-20 w-18 h-18 bg-[#E93E8F]/22 rounded-full blur-lg"></div>
          <div className="absolute bottom-80 left-1/2 w-48 h-48 bg-[#E93E8F]/6 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-10 w-14 h-14 bg-[#E93E8F]/28 rounded-full blur-md"></div>
          <div className="absolute bottom-40 left-1/3 w-32 h-32 bg-[#E93E8F]/9 rounded-full blur-xl"></div>
          <div className="absolute top-100 right-1/2 w-20 h-20 bg-[#E93E8F]/18 rounded-full blur-lg"></div>
          <div className="absolute bottom-100 left-1/5 w-56 h-56 bg-[#E93E8F]/2 rounded-full blur-3xl"></div>
          {/* Additional rectangular shapes */}
          <div className="absolute top-32 left-20 w-20 h-20 bg-primary/15 transform rotate-12"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 bg-accent-purple/10 transform -rotate-45"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-[#E93E8F]/20 transform rotate-30"></div>
        </div>
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-12">
              OUR <span className="text-[#E93E8F]">PHILOSOPHY</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border-2 border-[#E93E8F]/20 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#E93E8F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">→</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">SPEED</h3>
                <p className="text-gray-600">We believe in lightning-fast implementation and immediate results. Time is money, and we help you save both.</p>
              </div>
              
              <div className="bg-white border-2 border-[#E93E8F]/20 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#2D1B69] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">PRECISION</h3>
                <p className="text-gray-600">Every AI agent is meticulously crafted to deliver exact results, eliminating errors and maximizing efficiency.</p>
              </div>
              
              <div className="bg-white border-2 border-[#E93E8F]/20 rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#E93E8F] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">↑</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">SCALE</h3>
                <p className="text-gray-600">Our solutions grow with your business, handling increased workload without breaking a sweat.</p>
              </div>
            </div>
            
            <div className="bg-white text-[#2D1B69] rounded-3xl p-12 border-2 border-[#E93E8F]/20">
              <h3 className="text-2xl font-bold mb-6">MASTERY DEMANDS FOCUS</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We don't offer web design, SEO, social media management, or any other services. We do one thing and we do it exceptionally well: AI automation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This laser focus allows us to stay at the forefront of AI technology and deliver results that generalist agencies simply cannot match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        <BackgroundShapes variant="light" intensity="low" />
        
        {/* Additional Decorative Shapes for Team Section */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-28 h-28 bg-primary/20 rounded-full blur-md"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-[#E93E8F]/15 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-accent-purple/10 rounded-full blur-lg"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-primary/15 transform -rotate-12"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-[#E93E8F]/20 transform rotate-45"></div>
          <div className="absolute bottom-60 left-10 w-36 h-36 bg-primary/10 rounded-full blur-xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">A-TEAM</span>
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
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] flex items-center justify-center group-hover:scale-110 transition-transform border-4 border-white/20 shadow-xl">
                  <span className="text-white font-bold text-xl md:text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#E93E8F] font-bold text-xs md:text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] text-white py-20 relative overflow-hidden">
        {/* Decorative Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-[#E93E8F]/10 transform rotate-45"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/15 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent-purple/10 transform -rotate-12"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#E93E8F]/8 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 transform rotate-45"></div>
          <div className="absolute top-60 right-10 w-36 h-36 bg-[#E93E8F]/5 rounded-full blur-xl"></div>
        </div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D] mb-6">OUR PROCESS</h2>
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
                
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-xl border-4 border-[#E93E8F]">
                  <span className="text-[#E93E8F] font-bold text-2xl">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <Philosophy />

      {/* CTA Section */}
      <section className="py-20 relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        <BackgroundShapes variant="light" intensity="medium" />
        <div className="container-responsive text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8">
            <span className="text-white">READY TO START</span><br />
            YOUR AI JOURNEY?
          </h2>
          
          <p className="text-lg sm:text-xl text-white mb-12 max-w-3xl mx-auto px-4">
            If you're ready to revolutionize your business operations with AI automation, it would be our honor to find out. Schedule your FREE discovery call below.
          </p>
          
          <CalendlyModal 
            label="Speak To Our Team Today" 
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-primary to-accent-purple text-white font-bold text-lg sm:text-xl md:text-2xl rounded-full hover:scale-105 transition-transform shadow-2xl w-full sm:w-auto max-w-md mx-auto" 
          />
          <p className="text-gray-500 mt-4 text-center">
            Schedule Your FREE Audit Call Now
          </p>
        </div>
      </section>
    </>
  )
}