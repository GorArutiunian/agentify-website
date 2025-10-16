import { useTranslations } from 'next-intl'
import { CalendlyModal } from '@/components/calendly-modal'

export const metadata = {
  title: "Contact Us | Agentify",
  description: "Get in touch with Agentify. Schedule a free consultation to discuss how AI automation can transform your business."
};

export default function ContactPage() {
  const t = useTranslations('contact')

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
              <span className="text-white">Get in</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to transform your business with AI automation? Let's discuss how we can help you save time, reduce costs, and scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-3xl font-bold text-[#2D1B69] mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E93E8F] focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E93E8F] focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E93E8F] focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E93E8F] focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E93E8F] focus:border-transparent"
                      placeholder="Tell us about your automation needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white font-bold text-lg rounded-lg hover:scale-105 transition-transform shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                  <h2 className="text-3xl font-bold text-[#2D1B69] mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2D1B69] mb-2">Email</h3>
                        <p className="text-gray-600">agentifyworks@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2D1B69] mb-2">Response Time</h3>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#2D1B69] mb-2">Location</h3>
                        <p className="text-gray-600">Global Operations</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Consultation CTA */}
                <div className="bg-gradient-to-br from-[#2D1B69] to-[#3D2A7A] rounded-2xl shadow-xl p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-4">Prefer a Quick Call?</h3>
                  <p className="text-gray-300 mb-6">
                    Schedule a 15-minute consultation to discuss your automation needs.
                  </p>
                  <CalendlyModal 
                    label="Schedule Free Consultation"
                    className="px-6 py-3 bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D] text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-lg inline-flex items-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our AI automation services.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly can you deploy AI agents?",
                  answer: "Most AI agents can be deployed within 24-48 hours. We use pre-built templates and custom configurations to ensure rapid deployment while maintaining quality."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, we provide 24/7 monitoring and support for all deployed AI agents. Our team ensures optimal performance and handles any issues that arise."
                },
                {
                  question: "What types of businesses do you work with?",
                  answer: "We work with businesses of all sizes, from startups to enterprises, across various industries including healthcare, real estate, e-commerce, and professional services."
                },
                {
                  question: "How much does AI automation cost?",
                  answer: "Pricing varies based on the complexity and number of AI agents needed. We offer flexible packages starting from $500/month. Contact us for a custom quote."
                },
                {
                  question: "Is my data secure?",
                  answer: "Absolutely. We use enterprise-grade security measures, including encryption, secure data handling, and compliance with industry standards to protect your data."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}