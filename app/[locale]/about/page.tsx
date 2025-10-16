import { useTranslations } from 'next-intl'
import { CalendlyModal } from '@/components/calendly-modal'

export const metadata = {
  title: "About Us | Agentify",
  description: "Learn about Agentify's mission to revolutionize business operations with AI automation. Meet our team of experts."
};

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D1B69] via-[#3D2A7A] to-[#2D1B69] text-white py-20">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#E93E8F]/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-[#FF6B9D]/15 transform rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#2D1B69]/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-20 w-28 h-28 bg-[#E93E8F]/10 transform -rotate-12"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">About</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Agentify</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're revolutionizing how businesses operate by deploying intelligent AI agents that handle your most time-consuming tasks automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#2D1B69] mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses with AI automation that actually works. We believe every company deserves access to enterprise-grade AI agents that can handle customer inquiries, process orders, and manage workflows 24/7.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-3">Speed</h3>
                  <p className="text-gray-600">Deploy AI agents in 24 hours, not months. Get results immediately.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-3">Reliability</h3>
                  <p className="text-gray-600">99.9% uptime with enterprise-grade security and monitoring.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-3">ROI</h3>
                  <p className="text-gray-600">Proven results: 30-50% fewer no-shows, up to 40% more qualified leads.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-[#2D1B69] via-[#3D2A7A] to-[#2D1B69] text-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team of AI experts and business automation specialists are dedicated to transforming how you work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              {
                name: "Ashot Hambardzumyan",
                role: "CHIEF OPERATING OFFICER",
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
      <section className="bg-secondary text-white py-20 relative overflow-hidden">
        {/* Decorative Background Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-[#E93E8F]/10 transform rotate-45"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/15 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-accent-purple/10 transform -rotate-12"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#E93E8F]/8 rounded-full blur-lg"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/20 transform rotate-45"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our proven process ensures your AI agents are deployed quickly and deliver immediate results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your current processes and identify automation opportunities."
              },
              {
                step: "02", 
                title: "Design",
                description: "Custom AI agents are designed to fit your specific business needs."
              },
              {
                step: "03",
                title: "Deploy",
                description: "Your AI agents are deployed and integrated with your existing systems."
              },
              {
                step: "04",
                title: "Optimize",
                description: "Continuous monitoring and optimization to maximize your ROI."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2D1B69] mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Join hundreds of businesses already using AI automation to save time, reduce costs, and scale faster.
              </p>
              <CalendlyModal 
                label="Schedule Your FREE Consultation"
                className="px-8 py-4 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg inline-flex items-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}