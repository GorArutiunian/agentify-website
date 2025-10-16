import Link from 'next/link'
import { Shield, Lock, Eye } from 'lucide-react'

export function TrustBadge() {
  return (
    <div className="bg-brand-50 rounded-lg p-4 border border-brand-100">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <Shield className="w-5 h-5 text-brand-600" />
        </div>
        <div className="text-sm">
          <p className="text-brand-900 font-medium mb-1">Built on enterprise-grade security</p>
          <p className="text-brand-700 text-xs">
            Data encrypted in transit • No training on client data by default • 
            <Link href="/trust" className="text-brand-600 hover:underline ml-1">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
