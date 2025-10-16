"use client"
import { useEffect, useRef } from 'react'

type Props = {
  value: number
  durationMs?: number
  formatter?: (n: number) => string
  reducedMotion?: boolean
}

export function AnimatedNumber({ value, durationMs = 900, formatter, reducedMotion }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const preferReduced = reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (preferReduced) {
      el.textContent = formatter ? formatter(value) : String(Math.round(value))
      return
    }
    const start = performance.now()
    const startVal = 0
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const current = Math.round(startVal + (value - startVal) * t)
      el.textContent = formatter ? formatter(current) : String(current)
      if (t < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [value, durationMs, formatter, reducedMotion])

  return <span ref={ref} />
}


