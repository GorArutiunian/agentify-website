import Link from 'next/link'
import { CheckCircle, Settings, BarChart3 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Pick an agent",
      description: "Choose from 50+ proven playbooks"
    },
    {
      icon: Settings,
      title: "We tailor & connect",
      description: "Plug into your tools in days"
    },
    {
      icon: BarChart3,
      title: "Go live & measure",
      description: "We monitor & improve"
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Get your AI agents up and running in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#E93E8F] to-[#D63384] rounded-full mb-6">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/agents"
            className="inline-flex items-center text-[#E93E8F] hover:text-[#D63384] font-medium transition-colors"
          >
            Browse all agents →
          </Link>
        </div>
      </div>
    </section>
  )
}
