"use client"
import React from 'react'
import { Bot, MessageSquare, Eye, Code, Zap } from 'lucide-react'

// Fallback icon mapping
const iconMap: Record<string, React.ReactNode> = {
  chat: <MessageSquare className="w-full h-full" />,
  vision: <Eye className="w-full h-full" />,
  code: <Code className="w-full h-full" />,
  default: <Bot className="w-full h-full" />,
}

export default function AnimatedAgentIcon({ name, animation }: { name: string; animation: string }) {
  const icon = iconMap[animation] || iconMap.default

  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 flex items-center justify-center text-blue-600 bg-blue-50 rounded-2xl p-6 hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <span className="mt-2 text-lg font-semibold text-gray-700">{name}</span>
    </div>
  )
}
