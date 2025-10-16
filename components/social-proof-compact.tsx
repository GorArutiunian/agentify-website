"use client"
import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Cut our response time by 80% and increased bookings by 40% in just 2 weeks.",
    person: "Sarah Chen",
    company: "Wellness Clinic"
  },
  {
    quote: "The AI agent handles our lead qualification so well, we've seen 50% more qualified prospects.",
    person: "Mike Rodriguez",
    company: "Real Estate Agency"
  },
  {
    quote: "Finally, a solution that actually works. Our team saves 15+ hours per week on admin tasks.",
    person: "Jennifer Kim",
    company: "Legal Firm"
  }
]

export function SocialProofCompact() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Real results from real businesses
          </p>
        </div>

        {/* Desktop: Rotating carousel */}
        <div className="hidden md:block">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="text-gray-900 font-semibold">
                {testimonials[currentIndex].person}
              </div>
              <div className="text-gray-600">
                {testimonials[currentIndex].company}
              </div>
            </div>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-[#E93E8F]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Stacked grid */}
        <div className="md:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-gray-900 font-semibold text-sm">
                {testimonial.person}
              </div>
              <div className="text-gray-600 text-sm">
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
