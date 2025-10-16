import { Shield, Lock, Database, Users, AlertTriangle, Mail } from 'lucide-react'
import { TrustBadge } from '@/components/trust-badge'
import { LogosStrip } from '@/components/logos-strip'

export const metadata = { title: "Security | Agentify" };

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100 text-brand-900 section-padding min-h-[60vh] flex items-center">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-brand-900">Security</span><br />
              <span className="text-brand-600">First</span>
            </h1>
            <p className="text-lg lg:text-xl text-brand-700 leading-relaxed">
              We prioritize confidentiality, integrity, and availability of customer data with enterprise-grade security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Architecture */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-4">Security Architecture</h2>
            <p className="text-base sm:text-lg text-brand-700 max-w-3xl mx-auto">
              Our multi-layered security approach ensures your data is protected at every level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-4">Encryption & Transport</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">End-to-end encryption via HTTPS/TLS 1.3</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Secrets and API keys stored server-side only</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Never exposed in browser or client code</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-4">Data Isolation</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Per-client isolation with separate credentials</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Dedicated data scopes and access controls</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Option to deploy in your own cloud environment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Handling & Controls */}
      <section className="section-padding bg-brand-50">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-4">Data Handling</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Operational logs: 30-90 days (configurable)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Deletion on request and contract end</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">No model training on client data by default</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Regular automated cleanup processes</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-4">Access Controls</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Least privilege for systems and admins</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Multi-factor authentication required</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Audit trails for critical operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Role-based access controls (RBAC)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-4">Incident Response</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Security contact: agentifyworks@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">72-hour notification for material incidents</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Automated threat detection and response</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-brand-700 text-sm">Regular security assessments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Providers */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-4">Trusted Infrastructure Partners</h2>
            <p className="text-base sm:text-lg text-brand-700">
              We work with industry-leading providers to ensure the highest security standards
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-brand-900 mb-4">Core Infrastructure</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">V</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-900">Vercel</h4>
                      <p className="text-brand-700 text-sm">Hosting & Edge Computing</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">CF</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-900">Cloudflare</h4>
                      <p className="text-brand-700 text-sm">CDN, WAF & DDoS Protection</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-900 mb-4">Service Providers</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">R</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-900">Resend</h4>
                      <p className="text-brand-700 text-sm">Email Delivery Service</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">AI</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-900">OpenAI/Azure</h4>
                      <p className="text-brand-700 text-sm">AI Model Providers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="section-padding bg-brand-50">
        <div className="section-container">
          <div className="max-w-md mx-auto">
            <TrustBadge />
          </div>
        </div>
      </section>

      {/* Security Contact */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-brand-600 to-brand-500 rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Security Contact</h2>
              <p className="text-lg text-gray-200 mb-6">
                Have a security concern or vulnerability to report?
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:agentifyworks@gmail.com" 
                  className="inline-block bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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

      <LogosStrip />
    </>
  );
}
