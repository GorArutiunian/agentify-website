export const metadata = { title: "Terms of Service | Agentify" };

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D1B69] via-[#3D2A7A] to-[#2D1B69] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#E93E8F] transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#FF6B9D] transform -rotate-12"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Terms of</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">Service</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully before using our AI agent services.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: {new Date().toISOString().slice(0,10)}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-green-50 to-blue-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="prose prose-lg max-w-none">
                
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Our Services</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                    <p className="text-gray-700 leading-relaxed">
                      Agentify provides AI agents and automation services as described in proposals or statements of work (SOW). 
                      Our services include custom AI agent development, automation workflows, and ongoing support.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Acceptable Use Policy</h2>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">!</span>
                      </div>
                      <h3 className="font-semibold text-red-800">Prohibited Activities</h3>
                    </div>
                    <ul className="text-red-700 space-y-2">
                      <li>• No illegal, harmful, or abusive activities</li>
                      <li>• No attempts to bypass rate limits or security measures</li>
                      <li>• No unauthorized access to systems or data</li>
                      <li>• No violation of third-party rights or privacy</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Data & Intellectual Property</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-semibold text-green-800 mb-3">Your Data</h3>
                      <ul className="text-green-700 space-y-2 text-sm">
                        <li>• You retain full ownership of your data</li>
                        <li>• We never claim ownership of your content</li>
                        <li>• Data is used only to provide services</li>
                        <li>• You control data retention and deletion</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-800 mb-3">Our IP</h3>
                      <ul className="text-blue-700 space-y-2 text-sm">
                        <li>• Agentify retains IP rights to our platform</li>
                        <li>• Custom agents developed for you</li>
                        <li>• Proprietary automation workflows</li>
                        <li>• Training materials and documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Service Level & Availability</h2>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-yellow-800">Our Commitments</h3>
                    </div>
                    <p className="text-yellow-700 mb-4">
                      We aim for high availability and quality, but do not guarantee uninterrupted service or error-free output. 
                      AI systems may occasionally produce unexpected results.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-[#2D1B69] mb-2">Uptime Target</h4>
                        <p className="text-gray-600 text-sm">99.5% availability during business hours</p>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-semibold text-[#2D1B69] mb-2">Support Response</h4>
                        <p className="text-gray-600 text-sm">24-48 hours for non-critical issues</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Liability & Limitations</h2>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-[#2D1B69] mb-2">Limitation of Liability</h3>
                        <p className="text-gray-700 text-sm">
                          To the maximum extent permitted by law, our liability is limited to the fees paid for the relevant service period.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2D1B69] mb-2">Indemnification</h3>
                        <p className="text-gray-700 text-sm">
                          You agree to indemnify us against claims arising from your use of our services in violation of these terms.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2D1B69] mb-2">Disclaimers</h3>
                        <p className="text-gray-700 text-sm">
                          Services are provided "as is" without warranties of merchantability, fitness, or non-infringement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Termination & Data Return</h2>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-[#2D1B69] mb-3">Termination Rights</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Either party may terminate with notice</li>
                          <li>• 30 days notice for standard termination</li>
                          <li>• Immediate termination for breach</li>
                          <li>• Terms per applicable SOW or agreement</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#2D1B69] mb-3">Data Handling</h3>
                        <ul className="text-gray-700 space-y-2 text-sm">
                          <li>• Data returned or deleted upon request</li>
                          <li>• 30-day grace period for data export</li>
                          <li>• Secure deletion of all copies</li>
                          <li>• Compliance with data protection laws</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Governing Law & Contact</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-[#2D1B69] mb-3">Legal Framework</h3>
                      <p className="text-gray-700 text-sm">
                        These terms are governed by the laws of the jurisdiction where Agentify operates. 
                        Any disputes will be resolved through binding arbitration.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-[#2D1B69] to-[#E93E8F] rounded-lg p-6 text-white">
                      <h3 className="font-semibold mb-2">Legal Contact</h3>
                      <p className="text-gray-200 mb-2">agentifyworks@gmail.com</p>
                      <p className="text-gray-300 text-sm">For questions about these terms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
