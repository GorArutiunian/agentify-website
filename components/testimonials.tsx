"use client"
import { useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 * 3 // Scroll 3 cards at a time (each card is ~400px wide)
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const scrollAmount = 400 * 3
        const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
        const currentScroll = scrollContainerRef.current.scrollLeft
        
        // If we're at the end, scroll back to start
        if (currentScroll >= maxScroll - 50) {
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          })
        } else {
          scrollContainerRef.current.scrollTo({
            left: currentScroll + scrollAmount,
            behavior: 'smooth'
          })
        }
      }
    }, 4000) // 4 seconds

    return () => clearInterval(interval)
  }, [])
  const testimonials = [
    {
      quote: 'The Lead Qualifier bot increased our conversion rate by 28% in just 2 months. Response time went from hours to under 2 minutes!',
      author: 'Sarah Mitchell',
      company: 'Premier Realty Group',
      agent: 'Lead Qualifier'
    },
    {
      quote: 'Our no-show rate dropped from 35% to just 8% after implementing the Appointment Reminder bot. Game changer for our clinic!',
      author: 'Dr. James Chen',
      company: 'HealthFirst Medical',
      agent: 'Appointment & Reminder Bot'
    },
    {
      quote: 'Client intake used to take 45 minutes per case. Now it takes 10 minutes and our team can focus on actual legal work.',
      author: 'Michael Rodriguez',
      company: 'Rodriguez & Partners Law',
      agent: 'Client Intake Bot'
    },
    {
      quote: 'Policy renewals are now automated and we saw a 40% increase in on-time renewals. Our clients love the reminders!',
      author: 'Emily Watson',
      company: 'SecureLife Insurance',
      agent: 'Policy Renewal Reminder'
    },
    {
      quote: 'The Auto-Invoice bot saves us 15 hours per week. Invoicing is now instant and error-free. Best investment we made!',
      author: 'David Kim',
      company: 'KimTax Accounting',
      agent: 'Auto-Invoice Bot'
    },
    {
      quote: 'Student attendance and progress tracking is completely automated. Parents get real-time updates and love it!',
      author: 'Lisa Thompson',
      company: 'BrightFuture Learning Center',
      agent: 'Student Progress Bot'
    },
    {
      quote: 'Our shipment tracking bot handles 500+ daily inquiries automatically. Customer satisfaction went up 45%!',
      author: 'Robert Martinez',
      company: 'FastTrack Logistics',
      agent: 'Shipment Tracking Bot'
    },
    {
      quote: 'Cart recovery bot brought back 32% of abandoned carts. That is $50K+ in recovered revenue in 3 months!',
      author: 'Amanda Foster',
      company: 'TrendyWear E-commerce',
      agent: 'Cart Recovery Bot'
    },
    {
      quote: 'Candidate screening used to take 3 days. Now it takes 3 hours. We fill positions 60% faster than before!',
      author: 'Chris Johnson',
      company: 'TalentPro Recruiting',
      agent: 'Candidate Screener Bot'
    },
    {
      quote: 'Campaign reporting is now automated and real-time. Our clients get daily updates without us lifting a finger!',
      author: 'Jessica Brown',
      company: 'DigitalBoost Marketing',
      agent: 'Campaign KPI Reporter'
    },
    {
      quote: 'The property inquiry triage bot handles 80% of initial questions. Our agents only talk to serious buyers now!',
      author: 'Tom Anderson',
      company: 'Skyline Properties',
      agent: 'Property Inquiry Triage'
    },
    {
      quote: 'Patient intake is seamless now. Check-in time reduced from 15 minutes to 3 minutes. Patients are happier!',
      author: 'Dr. Maria Garcia',
      company: 'CareWell Clinic',
      agent: 'Patient Intake Bot'
    },
    {
      quote: 'Never miss a court deadline again! The reminder bot keeps our entire team on track. Stress levels way down!',
      author: 'William Taylor',
      company: 'Taylor Legal Services',
      agent: 'Deadline & Court Reminder'
    },
    {
      quote: 'Claim submissions are now instant. Processing time cut by 70%. Our clients get faster service!',
      author: 'Jennifer Lee',
      company: 'SafeGuard Insurance',
      agent: 'Claim Submission Bot'
    },
    {
      quote: 'Late payment reminders are automated and professional. Collection rate improved by 35% in 2 months!',
      author: 'Mark Wilson',
      company: 'Wilson CPA Firm',
      agent: 'Late Payment Reminder'
    }
  ]

  return (
    <div className="relative">
      {/* Scroll Buttons - Fully outside scrolling area */}
      <button
        onClick={() => scroll('left')}
        className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-6 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-white/20"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button
        onClick={() => scroll('right')}
        className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-6 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border border-white/20"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
      
      {/* Scrollable testimonials */}
      <div ref={scrollContainerRef} className="flex overflow-x-auto scrollbar-hide scroll-smooth px-16">
        <div className="flex gap-6 py-4">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-xl border-2 border-[#E93E8F]/20 hover:border-[#E93E8F] transition-all w-[400px]"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white text-xs font-bold rounded-full">
                  {testimonial.agent}
                </span>
              </div>
              <blockquote className="text-gray-800 text-base mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#2D1B69]">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}


