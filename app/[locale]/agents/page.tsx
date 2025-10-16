"use client"
import { useState, useMemo } from 'react'
import { agents as allAgents, industries } from '@/content/agents'
import { AgentCard } from '@/components/agent-card'
import { AgentFilter } from '@/components/agent-filter'
import { LogosStrip } from '@/components/logos-strip'

export default function AgentsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Filter and search logic
  const filteredAgents = useMemo(() => {
    let filtered = allAgents
    
    // If there's a search query, search across ALL agents first
    if (searchQuery) {
      filtered = filtered.filter(agent =>
        agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        agent.blurb.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (agent.subtitle && agent.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    } else {
      // Apply industry filter only when there's no search query
      if (selectedIndustry === 'All') {
        // Show only hot agents for "Most Popular"
        filtered = filtered.filter(agent => agent.isHot)
      } else {
        // Show all agents for specific industry
        filtered = filtered.filter(agent => agent.industry === selectedIndustry)
      }
    }
    
    return filtered
  }, [selectedIndustry, searchQuery])

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100 text-brand-900 section-padding min-h-[50vh] flex items-center">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#E93E8F] transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#FF6B9D] transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-40 left-40 w-24 h-24 bg-[#E93E8F] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-brand-900">Our</span><br />
              <span className="text-brand-600">
                AI Agents
              </span>
            </h1>
            <p className="text-lg md:text-xl text-brand-700 leading-relaxed max-w-3xl mx-auto">
              Stop losing revenue to manual admin, slow follow-ups, and missed opportunities. 
              Get specialized AI agents that automate your busiest workflows—at <strong className="text-brand-600">30% below market rates</strong> with 
              fast deployment and managed hosting.
            </p>
          </div>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          {/* Section Intro */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-900 mb-4">
              {selectedIndustry === 'All' ? 'Most Popular' : selectedIndustry} <span className="text-brand-600">AI Agents</span>
            </h2>
            <p className="text-base md:text-lg text-brand-700 max-w-4xl mx-auto leading-relaxed">
              {selectedIndustry === 'All' 
                ? `Our most popular agents with transparent pricing. Each industry's #1 performing bot with 
                  30% below market rates. Includes setup, hosting, monitoring, and integrations.`
                : `Specialized AI agents for ${selectedIndustry}. Get 30% below market rates with fast deployment and managed hosting.`
              }
            </p>
          </div>
          
          {/* Filter and Search */}
          <AgentFilter
            industries={industries}
            selectedIndustry={selectedIndustry}
            onIndustryChange={setSelectedIndustry}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            totalResults={filteredAgents.length}
          />

          {/* Agents Grid */}
                  {filteredAgents.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {filteredAgents.map(agent => (
                <AgentCard 
                  key={agent.slug} 
                  title={agent.name} 
                  slug={agent.slug} 
                  summary={agent.blurb}
                  category={agent.category}
                  subtitle={agent.subtitle}
                  industry={agent.industry}
                  tier={agent.tier}
                  metrics={agent.metrics}
                  disclaimer={agent.disclaimer}
                  isHot={agent.isHot}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 mb-4">No agents found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedIndustry('All')
                  setSearchQuery('')
                }}
                className="px-6 py-3 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white font-bold rounded-full hover:from-[#2D1B69] hover:to-[#E93E8F] transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Footer Note */}
          <div className="mt-6 text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl p-4 border-2 border-[#E93E8F]/20">
            <p className="text-sm text-gray-700 max-w-3xl mx-auto leading-relaxed">
              <strong className="text-[#2D1B69]">Why 30% below market?</strong> Agentify prices are 30% below comparable 
              U.S. market rates for SMB automation because we specialize in n8n-based workflows and managed integrations 
              for mid-size offices. Exact quotes depend on your specific integrations, data volume, and support needs. 
              All solutions include hosting, monitoring, and regular updates.
            </p>
          </div>
        </div>
      </section>
      
      <LogosStrip />
    </>
  )
}
