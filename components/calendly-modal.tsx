"use client"
import { useState } from 'react'

type Props = {
  label: string
  className?: string
}

export function CalendlyModal({ label, className }: Props) {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/agentifyworks/30min'

  const handleClick = () => {
    window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <button onClick={handleClick} className={className}>{label}</button>
  )
}


