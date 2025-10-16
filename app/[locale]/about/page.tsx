"use client"
import { useTranslations } from 'next-intl'
import { CalendlyModal } from '@/components/calendly-modal'
import { TrustBadge } from '@/components/trust-badge'
import { LogosStrip } from '@/components/logos-strip'
import { TrustLine } from '@/components/trust-line'
import { Zap, Target, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const t = useTranslations('about')
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100 text-brand-900 section-padding min-h-[60vh] flex items-center">
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-brand-900">About</span><br />
              <span className="text-brand-600">Agentify</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-700 leading-relaxed">
              We're on a mission to revolutionize business operations through intelligent AI automation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900">
                Our <span className="text-brand-600">Story</span>
              </h2>
              <div className="space-y-6 text-base text-brand-700">
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
              <div className="bg-gradient-to-br from-brand-600 to-brand-500 rounded-3xl p-8 text-white">
                <div className="space-y-6">
                  <div className="text-6xl font-bold">70+</div>
                  <div className="text-xl">Businesses Transformed</div>
                  <div className="text-sm opacity-80">And counting...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="section-padding bg-brand-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-12">
              Our <span className="text-brand-600">Philosophy</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white border border-brand-100 rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">Speed</h3>
                <p className="text-brand-700">We believe in lightning-fast implementation and immediate results. Time is money, and we help you save both.</p>
              </div>
              
              <div className="bg-white border border-brand-100 rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">Precision</h3>
                <p className="text-brand-700">Every AI agent is meticulously crafted to deliver exact results, eliminating errors and maximizing efficiency.</p>
              </div>
              
              <div className="bg-white border border-brand-100 rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">Scale</h3>
                <p className="text-brand-700">Our solutions grow with your business, handling increased workload without breaking a sweat.</p>
              </div>
            </div>
            
            <div className="bg-white text-brand-900 rounded-2xl p-8 border border-brand-100">
              <h3 className="text-xl font-semibold mb-4">Mastery Demands Focus</h3>
              <p className="text-brand-700 leading-relaxed mb-4">
                We don't offer web design, SEO, social media management, or any other services. We do one thing and we do it exceptionally well: AI automation.
              </p>
              <p className="text-brand-700 leading-relaxed">
                This laser focus allows us to stay at the forefront of AI technology and deliver results that generalist agencies simply cannot match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-6">
              Meet the <span className="text-brand-600">Team</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-700 max-w-3xl mx-auto">
              Founded by AI experts who have spent years perfecting the art of intelligent automation. With our company culture, caliber of clientele, and deep technical expertise, we've attracted the best talent globally.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Ashot Zargaryan",
                role: "Head of Operations",
                description: "Client relations and business development specialist"
              },
              {
                name: "Gor Arutiunian",
                role: "Founder & CEO",
                description: "AI automation expert specializing in business process optimization"
              },
              {
                name: "Arsen Hambardzumyan",
                role: "Lead Developer",
                description: "Full-stack developer and AI integration specialist"
              }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center group-hover:scale-110 transition-transform border-4 border-brand-100 shadow-lg">
                  <span className="text-white font-bold text-xl md:text-2xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-brand-900 mb-2">{member.name}</h3>
                <p className="text-brand-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-brand-700 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding bg-brand-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-6">Our Process</h2>
            <p className="text-base sm:text-lg text-brand-700">How we transform your business operations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current processes and identify automation opportunities"
              },
              {
                step: "02", 
                title: "Design",
                description: "Custom AI agents are designed specifically for your business needs"
              },
              {
                step: "03",
                title: "Implement",
                description: "Seamless integration with your existing systems and workflows"
              },
              {
                step: "04",
                title: "Optimize",
                description: "Continuous monitoring and optimization for maximum performance"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                {/* Arrow connecting to next step - hidden on mobile */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 z-0">
                    <ArrowRight className="w-6 h-6 text-brand-300" />
                  </div>
                )}
                
                <div className="w-20 h-20 bg-brand-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg">
                  <span className="text-white font-bold text-2xl">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-900 mb-4">{phase.title}</h3>
                <p className="text-brand-700">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-600 to-brand-500 text-white">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            Ready to start your AI journey?
          </h2>
          
          <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto">
            If you're ready to revolutionize your business operations with AI automation, it would be our honor to find out. Schedule your FREE discovery call below.
          </p>
          
          <CalendlyModal 
            label="Speak To Our Team Today" 
            className="px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-brand-600 font-bold text-lg sm:text-xl md:text-2xl rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-2xl w-full sm:w-auto max-w-md mx-auto" 
          />
          <p className="text-gray-300 mt-4 text-center">
            Schedule Your FREE Audit Call Now
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            <TrustBadge />
          </div>
        </div>
      </section>
      
      <TrustLine />
      <LogosStrip />
    </>
  )
}