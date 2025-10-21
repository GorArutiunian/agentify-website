import LogoShapesBg from '@/components/logo-shapes-bg'

export const metadata = { title: "Security | Agentify" };

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2D1B69] via-[#3D2A7A] to-[#2D1B69] text-white py-20">
        {/* Logo Shapes Background */}
        <LogoShapesBg />
        
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Security</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">First</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We prioritize confidentiality, integrity, and availability of customer data with enterprise-grade security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-red-50 to-orange-50">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2D1B69] mb-4">Security Architecture</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our multi-layered security approach ensures your data is protected at every level
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Encryption & Transport</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>End-to-end encryption via HTTPS/TLS 1.3</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Secrets and API keys stored server-side only</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Never exposed in browser or client code</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Data Isolation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Per-client isolation with separate credentials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Dedicated data scopes and access controls</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Option to deploy in your own cloud environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling & Controls */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Data Handling</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>• Operational logs: 30-90 days (configurable)</li>
                    <li>• Deletion on request and contract end</li>
                    <li>• No model training on client data by default</li>
                    <li>• Regular automated cleanup processes</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">👥</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Access Controls</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>• Least privilege for systems and admins</li>
                    <li>• Multi-factor authentication required</li>
                    <li>• Audit trails for critical operations</li>
                    <li>• Role-based access controls (RBAC)</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl font-bold">🚨</span>
                </div>
                <h3 className="text-xl font-bold text-[#2D1B69] mb-4">Incident Response</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>• Security contact: agentifyworks@gmail.com</li>
                    <li>• 72-hour notification for material incidents</li>
                    <li>• Automated threat detection and response</li>
                    <li>• Regular security assessments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Providers */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-red-50 to-orange-50">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2D1B69] mb-4">Trusted Infrastructure Partners</h2>
              <p className="text-gray-600">
                We work with industry-leading providers to ensure the highest security standards
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-6">Core Infrastructure</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xs">V</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Vercel</h4>
                        <p className="text-gray-600 text-sm">Hosting & Edge Computing</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xs">CF</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Cloudflare</h4>
                        <p className="text-gray-600 text-sm">CDN, WAF & DDoS Protection</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#2D1B69] mb-6">Service Providers</h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xs">R</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Resend</h4>
                        <p className="text-gray-600 text-sm">Email Delivery Service</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-xs">AI</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">OpenAI/Azure</h4>
                        <p className="text-gray-600 text-sm">AI Model Providers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="py-16 bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-2xl p-12 text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Security Contact</h2>
              <p className="text-xl text-gray-200 mb-8">
                Have a security concern or vulnerability to report?
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:agentifyworks@gmail.com" 
                  className="inline-block bg-white text-[#2D1B69] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  agentifyworks@gmail.com
                </a>
                <p className="text-gray-300 text-sm">
                  We respond to all security reports within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
