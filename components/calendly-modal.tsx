"use client"
import { useState } from 'react'

type Props = {
  label: string
  className?: string
}

export function CalendlyModal({ label, className }: Props) {
  const [open, setOpen] = useState(false)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/agentifyworks/15min'

  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>{label}</button>
      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D1B69]/95">
          {/* Backdrop - clicking it closes the modal */}
          <div 
            className="absolute inset-0 bg-[#2D1B69]/95" 
            onClick={() => setOpen(false)} 
            aria-label="Close modal"
          />
          
          {/* Modal content - perfectly centered both horizontally and vertically */}
          <div className="relative z-10 w-[90vw] max-w-3xl my-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Clear close button - positioned at top right corner */}
            <button 
              onClick={() => setOpen(false)} 
              className="absolute top-4 right-4 z-20 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-gray-400 hover:scale-110"
              aria-label="Close"
            >
              <span className="text-gray-700 font-bold text-3xl leading-none">×</span>
            </button>

            {/* Calendly iframe embedded */}
            <div className="w-full h-[75vh] max-h-[650px]">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a consultation"
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}


