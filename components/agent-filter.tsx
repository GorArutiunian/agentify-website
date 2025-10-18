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
    <div className="bg-[#130724] py-7 mb-10">
      {/* Search Box */}
      <div className="max-w-md mx-auto mb-5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search agents by name or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-11 pr-5 py-2.5 rounded-full bg-white/15 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#E93E8F] transition-all placeholder-gray-400 text-base"
          />
        </div>
      </div>

      {/* Industry Filter Chips */}
      <div className="container-responsive">
        <div className="flex flex-col gap-4 justify-center pb-2">
          {/* First Row - Most Popular + 5 industries */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onIndustryChange('All')}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                selectedIndustry === 'All'
                  ? 'bg-[#E93E8F] text-white shadow-md'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              Most Popular
            </button>
            {industries.slice(0, 5).map((industry) => (
              <button
                key={industry}
                onClick={() => onIndustryChange(industry)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedIndustry === industry
                    ? 'bg-[#E93E8F] text-white shadow-md'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
          
          {/* Second Row - Remaining 5 industries */}
          <div className="flex flex-wrap justify-center gap-4">
            {industries.slice(5).map((industry) => (
              <button
                key={industry}
                onClick={() => onIndustryChange(industry)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedIndustry === industry
                    ? 'bg-[#E93E8F] text-white shadow-md'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

