import { Shield, Lock, Database, Users, AlertTriangle, Mail, FileText, CheckCircle } from 'lucide-react'
import { TrustBadge } from '@/components/trust-badge'
import LogosStripBottom from '@/components/logos-strip'

export const metadata = { title: "Trust Center | Agentify" };

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100 text-brand-900 section-padding min-h-[60vh] flex items-center">
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-brand-900">Trust</span><br />
              <span className="text-brand-600">Center</span>
            </h1>
            <p className="text-lg lg:text-xl text-brand-700 leading-relaxed">
              Your trust is our foundation. Explore our security, privacy, and compliance commitments.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-4">Legal & Security Resources</h2>
            <p className="text-base sm:text-lg text-brand-700">Everything you need to know about our security and privacy practices</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/security" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">Security Overview</h3>
                <p className="text-brand-700 text-sm mb-4">Learn about our security architecture, encryption, and access controls.</p>
                <div className="text-brand-600 font-medium text-sm group-hover:underline">View Security →</div>
              </div>
            </a>

            <a href="/legal/privacy" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">Privacy Policy</h3>
                <p className="text-brand-700 text-sm mb-4">Understand how we collect, use, and protect your personal data.</p>
                <div className="text-brand-600 font-medium text-sm group-hover:underline">View Privacy →</div>
              </div>
            </a>

            <a href="/legal/terms" className="group">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-3 group-hover:text-brand-600 transition-colors">Terms of Service</h3>
                <p className="text-brand-700 text-sm mb-4">Review our terms, acceptable use policy, and service commitments.</p>
                <div className="text-brand-600 font-medium text-sm group-hover:underline">View Terms →</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Commitments */}
      <section className="section-padding bg-brand-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-4">Our Trust Commitments</h2>
            <p className="text-base sm:text-lg text-brand-700 max-w-3xl mx-auto">
              We're committed to maintaining the highest standards of security, privacy, and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">Encryption in Transit</h3>
              <p className="text-brand-700 text-sm">All data is encrypted using HTTPS/TLS 1.3 during transmission</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">Server-Side Storage</h3>
              <p className="text-brand-700 text-sm">Secrets and API keys stored server-side only, never in browsers</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">No Model Training</h3>
              <p className="text-brand-700 text-sm">Your data is never used to train AI models by default</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">Client Isolation</h3>
              <p className="text-brand-700 text-sm">Per-client data isolation with separate credentials and scopes</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">Data Minimization</h3>
              <p className="text-brand-700 text-sm">We collect only what's necessary to provide our services</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-brand-900 mb-3">Deletion on Request</h3>
              <p className="text-brand-700 text-sm">Your data is deleted immediately upon request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-4">Flexible Deployment Options</h2>
              <p className="text-base sm:text-lg text-brand-700">
                Choose the deployment model that best fits your compliance and security requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-4">Hosted by Agentify</h3>
                <p className="text-brand-700 text-sm mb-4">
                  We manage everything for you with enterprise-grade security and compliance.
                </p>
                <ul className="space-y-2 text-brand-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Managed infrastructure and security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automatic updates and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 monitoring and support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900 mb-4">Your Cloud Environment</h3>
                <p className="text-brand-700 text-sm mb-4">
                  Deploy within your own cloud infrastructure for maximum control and compliance.
                </p>
                <ul className="space-y-2 text-brand-700 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Data never leaves your environment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>AWS, GCP, or Azure deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Complete control over security policies</span>
                  </li>
                </ul>
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

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-brand-600 to-brand-500 rounded-lg p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Questions About Trust & Security?</h2>
              <p className="text-lg text-gray-200 mb-6">
                We're here to answer any questions about our security practices and compliance.
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:agentifyworks@gmail.com" 
                  className="inline-block bg-white text-brand-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
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

        <LogosStripBottom />
    </>
  );
}
