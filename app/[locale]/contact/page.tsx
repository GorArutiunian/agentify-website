"use client"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CalendlyModal } from '@/components/calendly-modal'
import { BackgroundShapes } from '@/components/background-shapes'
import LogoShapesBg from '@/components/logo-shapes-bg'
import Headline from '@/components/headline'

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
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) })

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
      <section className="relative bg-gradient-to-br from-[#0F0520] via-[#1A0A2E] via-[#2D1B69] via-[#3A0A63] to-[#0F0520] text-white py-20 min-h-[50vh] flex items-center">
        {/* Logo Shapes Background */}
        <LogoShapesBg />
        
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">LET'S</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">CONNECT</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Ready to transform your business with AI automation? Let's discuss your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 bg-[#130724]">
        {/* Glowing line separators */}
        <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
        <LogoShapesBg />
        <div className="container-responsive relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    <span className="text-white">SEND US A</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">MESSAGE</span>
                  </h2>
                  <p className="text-lg text-gray-200">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <input 
                        className={`w-full rounded-xl border-2 bg-white px-4 py-3 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-pink-100 focus:border-primary'
                        }`}
                        placeholder="Your Name" 
                        {...register('name')} 
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input 
                        className={`w-full rounded-xl border-2 bg-white px-4 py-3 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-500' : 'border-pink-100 focus:border-primary'
                        }`}
                        placeholder="Email Address" 
                        type="email"
                        {...register('email')} 
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      className={`w-full rounded-xl border-2 bg-white px-4 py-3 focus:outline-none transition-colors ${
                        errors.company ? 'border-red-500 focus:border-red-500' : 'border-pink-100 focus:border-primary'
                      }`}
                      placeholder="Company Name" 
                      {...register('company')} 
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-300">{errors.company.message}</p>}
                  </div>
                  
                  <select className="w-full rounded-xl border-2 border-pink-100 bg-white px-4 py-3 focus:border-primary focus:outline-none transition-colors" {...register('channel')}>
                    <option value="">Preferred communication channel (optional)</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="telegram">Telegram</option>
                  </select>
                  
                  <div>
                    <textarea 
                      className={`w-full rounded-xl border-2 bg-white px-4 py-3 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-500' : 'border-pink-100 focus:border-primary'
                      }`}
                      rows={6} 
                      placeholder="Tell us about your business and how we can help..." 
                      {...register('message')} 
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>}
                  </div>
                  
                  <input className="hidden" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
                  
                  <button 
                    disabled={isSubmitting} 
                    className="w-full px-8 py-4 bg-gradient-to-r from-brand-hotpink to-[#6B1A7B] text-white font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
              
              {/* Contact Info & CTA */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white to-gray-100 text-[#2D1B69] rounded-3xl p-8 shadow-xl border-2 border-brand-hotpink">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta mb-6">GET STARTED TODAY</h3>
                  <p className="text-[#2D1B69] mb-8 font-medium">
                    Prefer to speak directly? Schedule a free consultation call with our AI automation experts.
                  </p>
                  <CalendlyModal 
                    label="Schedule FREE Call" 
                    className="w-full px-8 py-4 bg-gradient-to-r from-brand-hotpink to-[#6B1A7B] text-white font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-lg" 
                  />
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                    <h4 className="text-xl font-bold text-[#2D1B69] mb-4">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-white/80 to-white/20 rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                          <span className="text-[#2D1B69] font-bold">@</span>
                        </div>
                        <div>
                          <div className="font-semibold text-[#2D1B69]">Email</div>
                          <div className="text-gray-700">agentify.works@gmail.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
                    <h4 className="text-xl font-bold text-[#2D1B69] mb-4">Follow Us</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-white/80 to-white/20 rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                          <span className="text-[#2D1B69] font-bold">IG</span>
                        </div>
                        <div>
                          <div className="font-semibold text-[#2D1B69]">Instagram</div>
                          <a href="https://instagram.com/agent_ify" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#E93E8F] transition-colors">@agent_ify</a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-white/80 to-white/20 rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                          <span className="text-[#2D1B69] font-bold">f</span>
                        </div>
                        <div>
                          <div className="font-semibold text-[#2D1B69]">Facebook</div>
                          <a href="https://facebook.com/agentify" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#E93E8F] transition-colors">Agentify</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white border-2 border-brand-hotpink rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-bold text-[#2D1B69] mb-4">Response Time</h4>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-white/80 to-white/20 rounded-full flex items-center justify-center border border-white/50 shadow-lg">
                        <span className="text-[#2D1B69] font-bold">→</span>
                      </div>
                      <div>
                        <div className="font-semibold text-[#2D1B69]">Within 24 Hours</div>
                        <div className="text-gray-700">We respond to all inquiries promptly</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}