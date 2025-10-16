"use client"
import { useState, useEffect } from 'react'

export function TestimonialsExpanded() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Our response time went from 4 hours to under 2 minutes. Game changer.",
      person: "Sarah Chen",
      company: "TechFlow Solutions",
      metric: "+40% conversions",
      headline: "Lightning Fast Response"
    },
    {
      quote: "Cut our admin workload by 60%. Now we focus on what matters.",
      person: "Marcus Rodriguez",
      company: "Growth Partners",
      metric: "−60% workload",
      headline: "Massive Time Savings"
    },
    {
      quote: "Qualified leads increased 45% since implementing the AI agent.",
      person: "Jennifer Walsh",
      company: "Premier Realty",
      metric: "+45% qualified leads",
      headline: "Better Lead Quality"
    },
    {
      quote: "No more missed appointments. Our AI handles everything perfectly.",
      person: "David Kim",
      company: "HealthFirst Clinic",
      metric: "100% appointment accuracy",
      headline: "Zero Missed Appointments"
    },
    {
      quote: "Customer satisfaction jumped 35% with instant responses.",
      person: "Lisa Thompson",
      company: "RetailMax",
      metric: "+35% satisfaction",
      headline: "Happy Customers"
    },
    {
      quote: "Saved $12K monthly on support staff. ROI was immediate.",
      person: "Robert Johnson",
      company: "FinancePro",
      metric: "$12K monthly savings",
      headline: "Immediate ROI"
    },
    {
      quote: "Our AI agent works 24/7. Never sleeps, never takes breaks.",
      person: "Amanda Foster",
      company: "Global Logistics",
      metric: "24/7 availability",
      headline: "Always Available"
    },
    {
      quote: "Integration was seamless. Up and running in 2 days.",
      person: "Carlos Mendez",
      company: "TechStart Inc",
      metric: "2-day setup",
      headline: "Quick Implementation"
    },
    {
      quote: "Lead response time under 30 seconds. Incredible.",
      person: "Rachel Green",
      company: "Marketing Masters",
      metric: "<30 second response",
      headline: "Instant Responses"
    },
    {
      quote: "Our AI agent handles 80% of inquiries automatically.",
      person: "Michael Brown",
      company: "ServiceFirst",
      metric: "80% automation",
      headline: "High Automation"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section-padding bg-gradient-brand-soft text-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-white/90">
            Real results from real businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                {testimonials[currentIndex]?.headline}
              </div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-brand-600 to-pink-500 rounded-full text-sm font-bold">
                {testimonials[currentIndex]?.metric}
              </div>
            </div>
            
            <blockquote className="text-xl lg:text-2xl text-white mb-6 leading-relaxed text-center">
              "{testimonials[currentIndex]?.quote}"
            </blockquote>
            
            <div className="text-center">
              <div className="text-white font-semibold text-lg">
                {testimonials[currentIndex]?.person}
              </div>
              <div className="text-white/80">
                {testimonials[currentIndex]?.company}
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
