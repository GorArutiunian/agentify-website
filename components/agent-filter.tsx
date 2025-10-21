"use client"
import { Search } from 'lucide-react'
import type { Industry } from '@/content/agents'

type Props = {
  industries: Industry[]
  selectedIndustry: string
  onIndustryChange: (industry: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
  totalResults: number
}

export function AgentFilter({
  industries,
  selectedIndustry,
  onIndustryChange,
  searchQuery,
  onSearchChange,
  totalResults
}: Props) {
  return (
    <div className="py-7 mb-10">
      {/* Search Box - Mobile Optimized */}
      <div className="max-w-sm sm:max-w-md mx-auto mb-4 sm:mb-5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search agents by name or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 sm:pl-11 pr-4 sm:pr-5 py-2 sm:py-2.5 rounded-full bg-white/15 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#E93E8F] transition-all placeholder-gray-400 text-sm sm:text-base"
          />
        </div>
      </div>

      {/* Industry Filter Chips */}
      <div className="container-responsive">
        <div className="flex flex-col gap-3 sm:gap-4 justify-center pb-2">
          {/* First Row - Most Popular + 5 industries */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={() => onIndustryChange('All')}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                selectedIndustry === 'All'
                  ? 'bg-[#E93E8F] text-white shadow-md'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              Popular
            </button>
            {industries.slice(0, 5).map((industry) => (
              <button
                key={industry}
                onClick={() => onIndustryChange(industry)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedIndustry === industry
                    ? 'bg-[#E93E8F] text-white shadow-md'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {industry === 'Healthcare / Clinics' ? 'Healthcare' :
                 industry === 'Legal Firms' ? 'Legal' :
                 industry === 'Insurance Agencies' ? 'Insurance' :
                 industry === 'Accounting & Finance Offices' ? 'Finance' :
                 industry === 'Education / Training Centers' ? 'Education' :
                 industry === 'Logistics / Delivery' ? 'Logistics' :
                 industry === 'HR / Recruitment Agencies' ? 'HR' :
                 industry === 'Marketing / Advertising Agencies' ? 'Marketing' :
                 industry}
              </button>
            ))}
          </div>
          
          {/* Second Row - Remaining 5 industries */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            {industries.slice(5).map((industry) => (
              <button
                key={industry}
                onClick={() => onIndustryChange(industry)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedIndustry === industry
                    ? 'bg-[#E93E8F] text-white shadow-md'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {industry === 'Healthcare / Clinics' ? 'Healthcare' :
                 industry === 'Legal Firms' ? 'Legal' :
                 industry === 'Insurance Agencies' ? 'Insurance' :
                 industry === 'Accounting & Finance Offices' ? 'Finance' :
                 industry === 'Education / Training Centers' ? 'Education' :
                 industry === 'Logistics / Delivery' ? 'Logistics' :
                 industry === 'HR / Recruitment Agencies' ? 'HR' :
                 industry === 'Marketing / Advertising Agencies' ? 'Marketing' :
                 industry}
              </button>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

