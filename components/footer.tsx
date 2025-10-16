import Link from 'next/link'
import { useLocale } from 'next-intl'

export function Footer() {
  const locale = useLocale()
  return (
    <footer className="mt-1" style={{backgroundColor: '#1A0F2D'}}>
      <div className="container-responsive py-12 text-sm text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="font-bold text-xl text-white mb-4">Agentify</div>
            <p className="text-gray-300 leading-relaxed max-w-md mb-6">
              AI agents and automations for businesses worldwide. Transform your operations with intelligent automation.
            </p>
            <div className="text-xs text-gray-400">
              © {new Date().getFullYear()} Agentify. All rights reserved.
            </div>
          </div>
          
                  {/* Services Links */}
                  <div>
                    <h3 className="font-semibold text-white mb-4">Services</h3>
                    <div className="space-y-3">
                      <Link href={`/${locale}/agents`} className="block text-gray-300 hover:text-primary transition-colors">AI Agents</Link>
                      <Link href={`/${locale}/about`} className="block text-gray-300 hover:text-primary transition-colors">About</Link>
                      <Link href={`/${locale}/contact`} className="block text-gray-300 hover:text-primary transition-colors">Contact</Link>
                    </div>
                  </div>
          
          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal & Support</h3>
            <div className="space-y-3">
              <Link href={`/${locale}/trust`} className="block text-gray-300 hover:text-primary transition-colors">Trust Center</Link>
              <Link href={`/${locale}/security`} className="block text-gray-300 hover:text-primary transition-colors">Security</Link>
              <Link href={`/${locale}/legal/privacy`} className="block text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href={`/${locale}/legal/terms`} className="block text-gray-300 hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

