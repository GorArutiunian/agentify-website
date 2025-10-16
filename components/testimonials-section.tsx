"use client"
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Finally, a solution that actually works. Our team saves 15+ hours per week on admin tasks.",
    author: "Jennifer Kim",
    company: "Legal Firm",
    rating: 5
  },
  {
    id: 2,
    quote: "The AI agents handle our customer inquiries so well, our response time went from hours to minutes.",
    author: "Michael Chen",
    company: "E-commerce Store",
    rating: 5
  },
  {
    id: 3,
    quote: "Best investment we've made. Our appointment booking system is now 100% automated.",
    author: "Sarah Johnson",
    company: "Medical Practice",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What our clients say
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Real results from real businesses
          </p>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 max-w-2xl mx-auto">
            <div className="flex justify-center mb-6">
              {renderStars(testimonials[currentTestimonial]?.rating || 5)}
            </div>
            
            <blockquote className="text-lg text-gray-700 leading-relaxed mb-8">
              "{testimonials[currentTestimonial]?.quote}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-bold text-gray-900 text-lg">
                {testimonials[currentTestimonial]?.author}
              </div>
              <div className="text-gray-600">
                {testimonials[currentTestimonial]?.company}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
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
