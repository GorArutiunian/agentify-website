"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'
import { pricingByTier, type Tier, type Industry } from '@/content/agents'

type Props = {
  title: string
  slug: string
  summary: string
  category?: string
  subtitle?: string
  industry?: Industry
  tier?: Tier
  metrics?: string[]
  disclaimer?: string
  isHot?: boolean
}

export function AgentCard({ title, slug, summary, category = "AI Agent", subtitle, industry, tier, metrics, disclaimer, isHot }: Props) {
  const pricing = tier ? pricingByTier[tier] : null
  const params = useParams()
  const locale = params.locale || 'en'
  return (
    <Link href={`/${locale}/agents/${slug}`} className="group block">
      <motion.article
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="rounded-3xl border-2 border-[#E93E8F] bg-gradient-to-br from-white to-gray-50 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#FF6B9D] transition-all duration-300 h-full flex flex-col relative group"
      >
        {/* Hot Badge */}
        {isHot && (
          <div className="absolute top-2 right-2 z-10">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-500 to-red-600 text-white text-sm font-bold rounded-full uppercase tracking-wide shadow-lg animate-pulse">
              🔥 HOT
            </span>
          </div>
        )}
        
        <div className="p-5 flex flex-col h-full">
          {/* Industry Badge */}
          {industry && (
            <div className="mb-3">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white text-sm font-bold rounded-full uppercase tracking-wide">
                {industry}
              </span>
            </div>
          )}
          
          {/* Icon Section */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-xl flex items-center justify-center group-hover:from-[#FF6B9D] group-hover:to-[#3D2A7A] transition-colors shadow-lg group-hover:shadow-xl">
              <Bot className="w-7 h-7 text-white" />
            </div>
          </div>
          
          {/* Title & Subtitle */}
          <div className="text-center mb-3">
            <h3 className="text-lg font-bold text-[#2D1B69] group-hover:text-[#E93E8F] transition-colors mb-1 leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm font-medium text-gray-600 italic leading-tight">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {metrics.map((metric, idx) => (
                <span 
                  key={idx}
                  className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-[#2D1B69] text-sm font-bold rounded-full border border-[#E93E8F]/30 shadow-sm"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}
          
          {/* Pricing Block - Only for Hot Agents */}
          {pricing && isHot && (
            <div className="mb-4">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-[#E93E8F]/20 shadow-sm">
                <div className="text-xs text-gray-400 line-through mb-1 text-center">
                  Market: ${pricing.marketSetup.toLocaleString()} / ${pricing.marketMonthly.toLocaleString()}/mo
                </div>
                <div className="text-sm font-bold text-center">
                  <span className="text-[#E93E8F]">-30%:</span> <span className="text-[#2D1B69]">${pricing.agentifySetup.toLocaleString()} / ${pricing.agentifyMonthly.toLocaleString()}/mo</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Disclaimer */}
          {disclaimer && (
            <div className="mb-2 text-xs text-gray-400 italic text-center leading-tight">
              {disclaimer}
            </div>
          )}
          
          {/* CTA / Category Tag */}
          <div className="flex justify-center mt-auto">
            <span className="px-5 py-2 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white text-sm font-bold rounded-full group-hover:from-[#2D1B69] group-hover:to-[#E93E8F] transition-colors shadow-md group-hover:shadow-lg">
              {industry || category || 'See Demo'}
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

