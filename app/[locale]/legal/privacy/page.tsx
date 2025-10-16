import LogosStripBottom from '@/components/logos-strip'

export const metadata = { title: "Privacy Policy | Agentify" };

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-agentify-section text-white section-padding min-h-[60vh] flex items-center">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Privacy</span><br />
              <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-6 text-sm text-brand-pink font-medium">
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-agentify-section">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 border border-gray-200">
              <div className="prose prose-lg max-w-none">
                
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-brand-900 mb-4">Who we are</h2>
                  <p className="text-brand-700 leading-relaxed">
                    Agentify ("we", "us") provides AI agents and automation services. This policy explains how we handle personal data when you use our services.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-brand-900 mb-4">What we collect</h2>
                  <div className="bg-brand-50 rounded-lg p-6">
                    <ul className="space-y-3 text-brand-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Website usage data:</strong> Pages viewed, device information, and basic analytics</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Contact information:</strong> Name, email, company details you provide</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-brand-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span><strong>Service data:</strong> Operational data for agents (only what you choose to provide)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">How we use your data</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="font-semibold text-[#2D1B69] mb-3">Service Delivery</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Respond to your inquiries</li>
                        <li>• Deliver AI agent services</li>
                        <li>• Provide technical support</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                      <h3 className="font-semibold text-[#2D1B69] mb-3">Improvement & Security</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Operate and secure our platform</li>
                        <li>• Improve our services</li>
                        <li>• Incident response and monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Data sharing</h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <h3 className="font-semibold text-green-800">We do not sell your data</h3>
                    </div>
                    <p className="text-green-700">Your personal information is never sold to third parties.</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4">We may share data with trusted sub-processors strictly to deliver our services:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-semibold text-[#2D1B69] mb-2">Infrastructure</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Vercel (hosting)</li>
                        <li>• Cloudflare (CDN/WAF)</li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-semibold text-[#2D1B69] mb-2">Services</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Resend (email)</li>
                        <li>• n8n (automation)</li>
                        <li>• OpenAI/Azure (AI models)</li>
                        <li>• Plausible (analytics)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Your rights</h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-700 mb-4">You have the right to:</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-[#2D1B69] mb-2">Access</h4>
                        <p className="text-gray-600 text-sm">Request copies of your data</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-[#2D1B69] mb-2">Correct</h4>
                        <p className="text-gray-600 text-sm">Update inaccurate information</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1h2v2H7V6zm3 0h2v2h-2V6zM7 10h2v2H7v-2zm3 0h2v2h-2v-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="font-semibold text-[#2D1B69] mb-2">Delete</h4>
                        <p className="text-gray-600 text-sm">Request data deletion</p>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <p className="text-gray-700">Contact us at: <a href="mailto:agentifyworks@gmail.com" className="text-[#E93E8F] hover:underline font-semibold">agentifyworks@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[#2D1B69] mb-4">Security & Retention</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-[#2D1B69] mb-3">Security Measures</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Encryption in transit (HTTPS/TLS)</li>
                        <li>• Server-side secret storage only</li>
                        <li>• Per-client data isolation</li>
                        <li>• Regular security audits</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-[#2D1B69] mb-3">Data Retention</h3>
                      <ul className="text-gray-700 space-y-2 text-sm">
                        <li>• Contact records: 24 months</li>
                        <li>• Operational logs: 30-90 days</li>
                        <li>• Deletion on request</li>
                        <li>• Automatic cleanup</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-semibold text-brand-900 mb-4">Contact Information</h2>
                  <div className="bg-gradient-to-r from-brand-600 to-brand-500 rounded-lg p-6 text-white">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Privacy Officer</h3>
                        <p className="text-gray-200">agentifyworks@gmail.com</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Global Operations</h3>
                        <p className="text-gray-200">Available worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <LogosStripBottom />
    </>
  );
}
