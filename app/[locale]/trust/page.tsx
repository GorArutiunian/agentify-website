import { useTranslations } from 'next-intl'

export const metadata = {
  title: "Trust Center | Agentify",
  description: "Agentify's Trust Center. Learn about our commitment to security, privacy, compliance, and reliability in our AI automation services."
};

export default function TrustCenterPage() {
  const t = useTranslations('trust')

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
              <span className="text-white">Trust</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Center</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trust is our foundation. Learn about our commitment to security, privacy, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Pillars Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2D1B69] mb-6">
                Our Trust <span className="text-primary">Pillars</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four fundamental pillars that guide everything we do to earn and maintain your trust.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Security",
                  description: "Enterprise-grade security with encryption, access controls, and continuous monitoring."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Privacy",
                  description: "Your data is protected with strict privacy controls and transparent data handling practices."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Compliance",
                  description: "Adherence to industry standards and regulations including GDPR, SOC 2, and more."
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Reliability",
                  description: "99.9% uptime guarantee with redundant systems and 24/7 monitoring."
                }
              ].map((pillar, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-full flex items-center justify-center mx-auto mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Security <span className="text-primary">Metrics</span>
              </h2>
              <p className="text-xl text-gray-300">
                Real-time security metrics that demonstrate our commitment to protecting your data.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "99.9%",
                  label: "Uptime SLA",
                  description: "Guaranteed service availability"
                },
                {
                  number: "< 15min",
                  label: "Response Time",
                  description: "Average incident response"
                },
                {
                  number: "256-bit",
                  label: "Encryption",
                  description: "AES encryption standard"
                },
                {
                  number: "24/7",
                  label: "Monitoring",
                  description: "Continuous security monitoring"
                }
              ].map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-[#E93E8F] mb-2">{metric.number}</div>
                  <div className="text-xl font-bold text-white mb-2">{metric.label}</div>
                  <div className="text-gray-300 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#2D1B69] mb-6">
                  Compliance & <span className="text-primary">Certifications</span>
                </h2>
                <p className="text-lg text-gray-600">
                  We maintain the highest standards of compliance and security certifications.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Security Standards</h3>
                  <ul className="space-y-4">
                    {[
                      "SOC 2 Type II Compliance",
                      "ISO 27001 Information Security",
                      "GDPR Data Protection",
                      "HIPAA Healthcare Compliance",
                      "PCI DSS Payment Security"
                    ].map((standard, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#E93E8F] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Data Protection</h3>
                  <ul className="space-y-4">
                    {[
                      "End-to-end encryption",
                      "Secure data centers",
                      "Regular security audits",
                      "Data breach prevention",
                      "Privacy by design"
                    ].map((protection, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#E93E8F] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{protection}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Questions About Our <span className="text-primary">Trust</span> Practices?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our security and compliance team is available to answer any questions about our trust practices and security measures.
            </p>
            <a
              href="mailto:agentifyworks@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              Contact Trust Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}