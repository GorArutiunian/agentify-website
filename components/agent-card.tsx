"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Bot, Stethoscope, Calculator, Home, Scale, Shield, Building, Heart, Briefcase, Users, Car, ShoppingCart, BookOpen, Plane, Trophy } from 'lucide-react'
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

// Field icon mapping
const getFieldIcon = (industry: Industry | undefined) => {
  const iconMap: Record<string, any> = {
    'Real Estate': Home,
    'Healthcare / Clinics': Stethoscope,
    'Legal Firms': Scale,
    'Insurance Agencies': Shield,
    'Accounting & Finance Offices': Calculator,
    'Education / Training Centers': BookOpen,
    'Logistics / Delivery': Car,
    'E-commerce': ShoppingCart,
    'HR / Recruitment Agencies': Users,
    'Marketing / Advertising Agencies': Briefcase
  }
  return iconMap[industry || ''] || Bot
}

export function AgentCard({ title, slug, summary, category = "AI Agent", subtitle, industry, tier, metrics, disclaimer, isHot }: Props) {
  const pricing = tier ? pricingByTier[tier] : null
  const params = useParams()
  const locale = params.locale || 'en'
  const FieldIcon = getFieldIcon(industry)
  return (
    <Link href={`/${locale}/agents/${slug}`} className="group block w-full h-full">
      <motion.article
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="rounded-3xl border-2 border-[#E93E8F] bg-gradient-to-br from-white to-gray-50 overflow-hidden shadow-xl hover:shadow-2xl hover:border-[#FF6B9D] transition-all duration-300 aspect-[3/4] sm:aspect-[4/5] relative group w-full h-full cursor-pointer"
      >
        
        <div className="p-2 sm:p-4 flex flex-col h-full relative">
          {/* Industry Badge */}
          {industry && (
            <div className="mb-0.5 sm:mb-3">
              <span className="inline-block px-1 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white text-xs sm:text-sm font-bold rounded-full uppercase tracking-wide">
                {industry === 'Healthcare / Clinics' ? 'Healthcare' :
                 industry === 'Legal Firms' ? 'Legal' :
                 industry === 'Insurance Agencies' ? 'Insurance' :
                 industry === 'Accounting & Finance Offices' ? 'Finance' :
                 industry === 'Education / Training Centers' ? 'Education' :
                 industry === 'Logistics / Delivery' ? 'Logistics' :
                 industry === 'HR / Recruitment Agencies' ? 'HR' :
                 industry === 'Marketing / Advertising Agencies' ? 'Marketing' :
                 industry}
              </span>
            </div>
          )}
          
          {/* Icon Section */}
          <div className="flex justify-center mb-1.5 sm:mb-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-[#E93E8F] to-[#2D1B69] rounded-xl flex items-center justify-center group-hover:from-[#FF6B9D] group-hover:to-[#3D2A7A] transition-colors shadow-lg group-hover:shadow-xl">
              <FieldIcon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>
          
          {/* Title & Subtitle */}
          <div className="text-center mb-1 sm:mb-3">
            <h3 className="text-xs sm:text-base font-bold text-[#2D1B69] group-hover:text-[#E93E8F] transition-colors mb-0 sm:mb-1 leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs sm:text-sm font-medium text-gray-600 italic leading-tight">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Metrics - Hidden on mobile, visible on desktop */}
          {metrics && metrics.length > 0 && (
            <div className="hidden sm:flex gap-1 mb-2 justify-center overflow-hidden flex-wrap">
              {metrics.map((metric, idx) => (
                <span 
                  key={idx}
                  className="inline-block px-1 py-0.5 bg-gradient-to-r from-blue-50 to-purple-50 text-[#2D1B69] text-xs font-bold rounded-full border border-[#E93E8F]/30 shadow-sm whitespace-nowrap"
                >
                  {metric}
                </span>
              ))}
            </div>
          )}
          
          {/* Disclaimer */}
          {disclaimer && (
            <div className="mb-1 sm:mb-2 text-xs text-gray-400 italic text-center leading-tight">
              {disclaimer}
            </div>
          )}
          
          {/* Pricing - Only show for popular agents */}
          {pricing && isHot && (
            <div className="mb-1.5 sm:mb-4 text-center">
              <div className="text-xs sm:text-lg font-bold text-[#2D1B69] mb-0 sm:mb-1">
                ${pricing.agentifySetup}
              </div>
              <div className="text-xs text-gray-600 mb-0 sm:mb-1">
                Setup • ${pricing.agentifyMonthly}/mo
              </div>
              <div className="text-xs text-gray-400 line-through">
                Market: ${pricing.marketSetup} • ${pricing.marketMonthly}/mo
              </div>
            </div>
          )}
          
          {/* Spacer to push CTA to bottom */}
          <div className="flex-1"></div>
          
          {/* CTA / Category Tag - Fixed at bottom */}
          <div className="flex justify-center">
            <span className="px-2 sm:px-5 py-0.5 sm:py-2 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white text-xs sm:text-sm font-bold rounded-full group-hover:from-[#2D1B69] group-hover:to-[#E93E8F] transition-colors shadow-md group-hover:shadow-lg">
              Explore Agent
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}

