"use client"
import { useMemo, useState } from 'react'
import type { PricingConfig } from '@/types'
import { CalendlyModal } from '@/components/calendly-modal'

type Props = { config: PricingConfig }

export function PricingGrid({ config }: Props) {
  const [yearly, setYearly] = useState(false)
  const factor = yearly ? (10/12) : 1
  const priceLabel = yearly ? 'yr' : 'mo'
  const resolved = useMemo(()=>config.plans.map(p=>({
    ...p,
    priceComputed: Math.round(p.price * factor),
    stripePriceId: resolvePriceId(p.stripePriceId, yearly)
  })), [config, yearly])

  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-6 text-sm">
        <span className={!yearly?"font-medium text-secondary":"text-slate-500"}>Monthly</span>
        <button onClick={()=>setYearly(y=>!y)} className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs bg-light-cream">
          <span className={`inline-block h-5 w-5 rounded-full transition ${yearly?'translate-x-5 bg-primary':'bg-slate-300'}`} />
        </button>
        <span className={yearly?"font-medium text-secondary":"text-slate-500"}>Yearly <span className="ml-1 rounded bg-green-100 text-green-700 px-1 text-[10px]">2 months free</span></span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {resolved.map(plan => (
          <div key={plan.id} className={`rounded-2xl border border-pink-100 bg-light-cream p-6 shadow-sm hover:shadow-md transition ${plan.id==='growth'?'relative':''}`}>
            {plan.id==='growth' && <div className="absolute -top-2 right-4 rounded-full bg-primary text-white text-xs px-2 py-0.5 shadow">Popular</div>}
            <div className="text-sm text-slate-500">{plan.name}</div>
            <div className="mt-2 text-3xl font-bold text-secondary">${plan.priceComputed}<span className="text-base font-normal text-slate-500">/{priceLabel}</span></div>
            <p className="mt-2 text-sm text-slate-600">{plan.blurb}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.features.map((f,i)=>(<li key={i}>• {f}</li>))}
            </ul>
            <div className="mt-6">
              <CalendlyModal 
                label="Get Started" 
                className="w-full px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function resolvePriceId(template: string, yearly: boolean): string {
  const key = template.replace(/\$\{([^}]+)\}/g, (_, name) => process.env[String(name)] || '')
  // If you want separate yearly Stripe Price IDs, you can add ENV_YEARLY variants later.
  return key
}


