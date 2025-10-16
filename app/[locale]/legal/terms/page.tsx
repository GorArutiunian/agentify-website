import { useTranslations } from 'next-intl'

export const metadata = {
  title: "Terms of Service | Agentify",
  description: "Agentify's terms of service. Read our terms and conditions for using our AI automation platform and services."
};

export default function TermsOfServicePage() {
  const t = useTranslations('terms')

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
              <span className="text-white">Terms of</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Service</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully before using our AI automation services.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: {new Date().toISOString().slice(0,10)}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                
                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  By accessing and using Agentify's AI automation services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Agentify provides AI automation services including but not limited to AI agents, chatbots, workflow automation, and related software solutions. These services are designed to help businesses automate routine tasks and improve operational efficiency.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Users are responsible for providing accurate information, maintaining the security of their accounts, complying with applicable laws and regulations, and using our services in accordance with these terms.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Payment for services is due as specified in your service agreement. We reserve the right to modify pricing with 30 days' notice. Late payments may result in service suspension or termination.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Service Availability</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While we strive to maintain high service availability, we do not guarantee uninterrupted service. We may perform maintenance, updates, or modifications that may temporarily affect service availability.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  All content, software, and materials provided through our service are protected by intellectual property laws. Users may not copy, modify, or distribute our proprietary content without written permission.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Agentify shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Either party may terminate this agreement with 30 days' written notice. We reserve the right to terminate accounts that violate these terms or engage in fraudulent or illegal activities.
                </p>

                <h2 className="text-2xl font-bold text-[#2D1B69] mb-6">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                </p>

                <div className="mt-8 p-6 bg-gradient-to-r from-[#E93E8F]/10 to-[#2D1B69]/10 rounded-xl border border-[#E93E8F]/20">
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Contact Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these terms, please contact us at:
                  </p>
                  <div className="mt-4">
                    <p className="text-gray-700">
                      <strong>Email:</strong> agentifyworks@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}