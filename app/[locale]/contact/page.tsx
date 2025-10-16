"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendlyModal } from '@/components/calendly-modal'
import { LogosStrip } from '@/components/logos-strip'
import { TrustLine } from '@/components/trust-line'
import { MessageCircle, Mail, Clock, Shield } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  channel: z.enum(['whatsapp','telegram']).optional(),
  honeypot: z.string().max(0).optional()
})

type FormValues = z.infer<typeof schema>

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, watch } = useForm<FormValues>({ resolver: zodResolver(schema) })
  
  const channelValue = watch('channel')

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) 
      })
      
      if (res.ok) {
        reset()
        alert('Thank you! We will reach out to you within 24 hours.')
      } else {
        const error = await res.json()
        alert('Something went wrong. Please try again or contact us directly at hello@agentify.com')
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.')
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-brand-100 text-brand-900 section-padding min-h-[50vh] flex items-center">
        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-brand-900">Let's</span><br />
              <span className="text-brand-600">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-700 leading-relaxed">
              Ready to transform your business with AI automation? Let's discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-brand-900 mb-6">
                    Send us a <span className="text-brand-600">message</span>
                  </h2>
                  <p className="text-base text-brand-700">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        className={`w-full rounded-lg border-2 bg-white px-4 py-3 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-600'
                        }`}
                        placeholder="Your Name" 
                        {...register('name')} 
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input 
                        className={`w-full rounded-lg border-2 bg-white px-4 py-3 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-600'
                        }`}
                        placeholder="Email Address" 
                        type="email"
                        {...register('email')} 
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      className={`w-full rounded-lg border-2 bg-white px-4 py-3 focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-600'
                      }`}
                      placeholder="Company Name" 
                      {...register('company')} 
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-brand-700 mb-2">Preferred communication channel (optional)</label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                          channelValue === 'whatsapp' 
                            ? 'border-brand-600 bg-brand-50 text-brand-600' 
                            : 'border-gray-300 text-gray-700 hover:border-brand-300'
                        }`}
                        onClick={() => register('channel').onChange({ target: { value: 'whatsapp' } })}
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                          channelValue === 'telegram' 
                            ? 'border-brand-600 bg-brand-50 text-brand-600' 
                            : 'border-gray-300 text-gray-700 hover:border-brand-300'
                        }`}
                        onClick={() => register('channel').onChange({ target: { value: 'telegram' } })}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Telegram
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <textarea 
                      className={`w-full rounded-lg border-2 bg-white px-4 py-3 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand-600'
                      }`}
                      rows={6} 
                      placeholder="Tell us about your business and how we can help..." 
                      {...register('message')} 
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>
                  
                  <input className="hidden" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
                  
                  <button 
                    disabled={isSubmitting} 
                    className="w-full px-8 py-4 bg-brand-600 text-white font-bold text-lg rounded-lg hover:bg-brand-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  
                  {/* Reassurance text */}
                  <div className="bg-brand-50 rounded-lg p-4 border border-brand-100">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-brand-600 mt-0.5" />
                      <div className="text-sm text-brand-700">
                        <p className="font-medium mb-1">We reply within 24h. Your info stays confidential and is never used to train AI.</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              {/* Contact Info & CTA */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-brand-600 to-brand-500 text-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Get started today</h3>
                  <p className="text-gray-200 mb-6">
                    Prefer to speak directly? Schedule a free consultation call with our AI automation experts.
                  </p>
                  <CalendlyModal 
                    label="Schedule FREE Call" 
                    className="w-full px-8 py-4 bg-white text-brand-600 font-bold text-lg rounded-lg hover:bg-gray-50 transition-colors shadow-lg" 
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-brand-900 mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
                          <Mail className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-brand-900">Email</div>
                          <a href="mailto:agentify.works@gmail.com" className="text-brand-600 hover:underline">agentify.works@gmail.com</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-brand-900 mb-4">Follow Us</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">IG</span>
                        </div>
                        <div>
                          <div className="font-medium text-brand-900">Instagram</div>
                          <a href="https://instagram.com/agent_ify" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">@agent_ify</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">f</span>
                        </div>
                        <div>
                          <div className="font-medium text-brand-900">Facebook</div>
                          <a href="https://facebook.com/agentify" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Agentify</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-brand-50 border border-brand-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-brand-900 mb-4">Response Time</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-brand-900">Within 24 Hours</div>
                        <div className="text-brand-700">We respond to all inquiries promptly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <TrustLine />
      <LogosStrip />
    </>
  )
}