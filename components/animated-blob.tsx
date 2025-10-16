"use client"
import { motion } from 'framer-motion'

export function AnimatedBlob() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary to-accent-green blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.35, x: 0 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute right-10 top-24 h-56 w-56 rounded-full bg-gradient-to-tr from-accent-amber to-primary blur-3xl"
      />
    </div>
  )
}

