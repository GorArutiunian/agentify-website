"use client"
import { useMemo } from 'react'
import LogoShapesBg from '@/components/logo-shapes-bg'

export default function SchedulePage() {
  const calendlyUrl = useMemo(() => (
    process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/agentifyworks/30min'
  ), [])

  return (
    <div className="relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] min-h-screen">
      {/* Logo Shapes Background */}
      <LogoShapesBg />
      
      {/* Glowing line separators */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
      <span className="pointer-events-none absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
      
      <div className="container-responsive relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="text-white">SCHEDULE</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">A CALL</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Pick a time that works for you.
            </p>
          </div>
          
          <div className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#E93E8F]/20">
            <div className="w-full h-[75vh] max-h-[800px]">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder={0}
                title="Schedule a consultation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


