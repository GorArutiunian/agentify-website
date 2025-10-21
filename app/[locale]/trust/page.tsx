import LogoShapesBg from '@/components/logo-shapes-bg'

export const metadata = { title: "Trust Center | Agentify" };

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] text-white py-20">
        {/* Logo Shapes Background */}
        <LogoShapesBg />
        
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Trust</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">Center</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trust is our foundation. Explore our security, privacy, and compliance commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-16 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <LogoShapesBg />
        <div className="container-responsive relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Legal & Security Resources</h2>
              <p className="text-gray-300">Everything you need to know about our security and privacy practices</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <a href="/security" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E93E8F] transition-colors">Security Overview</h3>
                  <p className="text-gray-300 mb-6">Learn about our security architecture, encryption, and access controls.</p>
                  <div className="text-[#E93E8F] font-semibold group-hover:underline">View Security →</div>
                </div>
              </a>

              <a href="/legal/privacy" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E93E8F] transition-colors">Privacy Policy</h3>
                  <p className="text-gray-300 mb-6">Understand how we collect, use, and protect your personal data.</p>
                  <div className="text-[#E93E8F] font-semibold group-hover:underline">View Privacy →</div>
                </div>
              </a>

              <a href="/legal/terms" className="group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E93E8F] transition-colors">Terms of Service</h3>
                  <p className="text-gray-300 mb-6">Review our terms, acceptable use policy, and service commitments.</p>
                  <div className="text-[#E93E8F] font-semibold group-hover:underline">View Terms →</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Commitments */}
      <section className="relative py-16 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <LogoShapesBg />
        <div className="container-responsive relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Trust Commitments</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We're committed to maintaining the highest standards of security, privacy, and transparency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Encryption in Transit</h3>
                <p className="text-gray-300">All data is encrypted using HTTPS/TLS 1.3 during transmission</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Server-Side Storage</h3>
                <p className="text-gray-300">Secrets and API keys stored server-side only, never in browsers</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">No Model Training</h3>
                <p className="text-gray-300">Your data is never used to train AI models by default</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Client Isolation</h3>
                <p className="text-gray-300">Per-client data isolation with separate credentials and scopes</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Data Minimization</h3>
                <p className="text-gray-300">We collect only what's necessary to provide our services</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1h2v2H7V6zm3 0h2v2h-2V6zM7 10h2v2H7v-2zm3 0h2v2h-2v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Deletion on Request</h3>
                <p className="text-gray-300">Your data is deleted immediately upon request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="relative py-16 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <LogoShapesBg />
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Flexible Deployment Options</h2>
              <p className="text-gray-300">
                Choose the deployment model that best fits your compliance and security requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Hosted by Agentify</h3>
                <p className="text-gray-300 mb-6">
                  We manage everything for you with enterprise-grade security and compliance.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E93E8F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Managed infrastructure and security</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E93E8F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Automatic updates and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E93E8F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>24/7 monitoring and support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Your Cloud Environment</h3>
                <p className="text-gray-300 mb-6">
                  Deploy within your own cloud infrastructure for maximum control and compliance.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E93E8F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Data never leaves your environment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E93E8F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>AWS, GCP, or Azure deployment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#E93E8F] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Complete control over security policies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-16 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <LogoShapesBg />
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] rounded-2xl p-12 text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">💬</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Questions About Trust & Security?</h2>
              <p className="text-xl text-gray-200 mb-8">
                We're here to answer any questions about our security practices and compliance.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:agentifyworks@gmail.com" 
                  className="inline-block bg-white text-[#E93E8F] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  agentifyworks@gmail.com
                </a>
                <p className="text-gray-300 text-sm">
                  Our team responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
