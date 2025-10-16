import { useTranslations } from 'next-intl'
import { CalendlyModal } from '@/components/calendly-modal'

export const metadata = {
  title: "FAQ | Agentify",
  description: "Frequently asked questions about Agentify's AI automation services. Get answers about deployment, pricing, support, and more."
};

export default function FAQPage() {
  const t = useTranslations('faq')

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
              <span className="text-white">Frequently Asked</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Find answers to common questions about AI automation, deployment, pricing, and support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              
              {/* General Questions */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#2D1B69] mb-8">General Questions</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      question: "What is Agentify and how does it work?",
                      answer: "Agentify is an AI automation platform that deploys intelligent agents to handle your most time-consuming business tasks. Our agents can manage customer inquiries, process orders, schedule appointments, and more - all automatically and 24/7."
                    },
                    {
                      question: "What types of AI agents do you offer?",
                      answer: "We offer 50+ ready-made AI agents including lead qualifiers, appointment schedulers, customer support bots, order processors, and industry-specific solutions for healthcare, real estate, e-commerce, and more."
                    },
                    {
                      question: "How is this different from chatbots?",
                      answer: "Unlike simple chatbots, our AI agents are full business automation solutions. They don't just answer questions - they perform complete workflows, integrate with your systems, make decisions, and execute tasks end-to-end."
                    },
                    {
                      question: "Do I need technical expertise to use Agentify?",
                      answer: "No technical expertise required. We handle all the setup, integration, and maintenance. You simply tell us what you want automated, and we deploy the solution for you."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-bold text-[#2D1B69] mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment & Setup */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#2D1B69] mb-8">Deployment & Setup</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      question: "How quickly can you deploy AI agents?",
                      answer: "Most AI agents can be deployed within 24-48 hours. We use pre-built templates and custom configurations to ensure rapid deployment while maintaining quality and security standards."
                    },
                    {
                      question: "What integrations do you support?",
                      answer: "We integrate with 100+ popular business tools including CRM systems (Salesforce, HubSpot), communication platforms (Slack, Teams), calendar systems (Google Calendar, Outlook), payment processors (Stripe, PayPal), and many more."
                    },
                    {
                      question: "Do you provide custom AI agents?",
                      answer: "Yes, we offer custom AI agent development for unique business requirements. Our team can create specialized agents tailored to your specific workflows and industry needs."
                    },
                    {
                      question: "What happens during the setup process?",
                      answer: "Our setup process includes: 1) Discovery call to understand your needs, 2) Custom configuration of your AI agents, 3) Integration with your existing systems, 4) Testing and optimization, 5) Training for your team, and 6) Go-live with ongoing support."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-bold text-[#2D1B69] mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Plans */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#2D1B69] mb-8">Pricing & Plans</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      question: "How much does AI automation cost?",
                      answer: "Pricing starts from $500/month for basic AI agents and scales based on complexity, number of agents, and usage volume. We offer flexible packages and custom pricing for enterprise clients. Contact us for a detailed quote."
                    },
                    {
                      question: "What's included in the monthly fee?",
                      answer: "Your monthly fee includes: AI agent deployment, system integration, 24/7 monitoring, performance optimization, regular updates, technical support, and access to our agent marketplace."
                    },
                    {
                      question: "Do you offer a free trial?",
                      answer: "Yes, we offer a 14-day free trial for select AI agents. This allows you to test the automation in your environment and see the results before committing to a full deployment."
                    },
                    {
                      question: "Are there any setup fees?",
                      answer: "Setup fees vary based on complexity. Simple deployments may have no setup fee, while complex custom integrations may include a one-time setup charge. All pricing is transparent and discussed upfront."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-bold text-[#2D1B69] mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support & Maintenance */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                <h2 className="text-2xl font-bold text-[#2D1B69] mb-8">Support & Maintenance</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      question: "What kind of support do you provide?",
                      answer: "We provide 24/7 monitoring, technical support, performance optimization, and regular system updates. Our support team is available via email, phone, and chat to resolve any issues quickly."
                    },
                    {
                      question: "How do you ensure AI agent reliability?",
                      answer: "We use enterprise-grade infrastructure, redundant systems, continuous monitoring, and automated failover mechanisms. Our AI agents have a 99.9% uptime guarantee with real-time performance tracking."
                    },
                    {
                      question: "Can I modify my AI agents after deployment?",
                      answer: "Yes, we provide ongoing optimization and customization services. You can request modifications, add new capabilities, or adjust workflows as your business needs evolve."
                    },
                    {
                      question: "What happens if there's an issue with my AI agents?",
                      answer: "Our 24/7 monitoring system detects issues immediately. We have automated recovery procedures and our support team responds to critical issues within 15 minutes during business hours."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                      <h3 className="text-lg font-bold text-[#2D1B69] mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Still Have <span className="text-primary">Questions?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our team is here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
            </p>
            <CalendlyModal 
              label="Schedule Free Consultation"
              className="px-8 py-4 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg inline-flex items-center"
            />
          </div>
        </div>
      </section>
    </>
  )
}