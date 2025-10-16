"use client"
import { useEffect, useState } from 'react'

export function IndustryScroll() {
  const [isVisible, setIsVisible] = useState(false)
  
  const industries = [
    'Real Estate', 'Healthcare', 'Legal', 'Insurance', 'Accounting', 
    'Education', 'Logistics', 'E-commerce', 'HR', 'Marketing', 
    'Finance', 'Support', 'Manufacturing', 'Retail', 'Consulting'
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="section-container">
        <div className="text-center mb-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Trusted by businesses across industries
          </h3>
        </div>
        
        <div className="relative overflow-hidden">
          <div 
            className={`flex gap-4 transition-all duration-1000 ${
              isVisible ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              animation: 'scroll 30s linear infinite'
            }}
          >
            {/* First set */}
            {industries.map((industry, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-brand-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {industry}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {industries.map((industry, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-brand-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
