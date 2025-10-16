"use client"
import { useMemo } from 'react'

export default function SchedulePage() {
  const calendlyUrl = useMemo(() => (
    process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/calendly/15min'
  ), [])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-12 bg-light-cream">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden border-[0.5px] border-gray-200">
        <div className="px-6 pt-6">
          <h1 className="text-2xl font-semibold text-secondary">Schedule a call</h1>
          <p className="text-slate-600 mt-1 mb-4">Pick a time that works for you.</p>
        </div>
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
  )
}


