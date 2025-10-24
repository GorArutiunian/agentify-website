"use client"
import { useState, useEffect } from 'react'
import { CalendlyModal } from '@/components/calendly-modal'

export function HeroV3() {
  const [currentMessage, setCurrentMessage] = useState(0)

  const chatMessages = [
    "Hi, I'm your AI assistant. How can I help today?",
    "Schedule a meeting",
    "Sure, let's find a time."
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % chatMessages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [chatMessages.length])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#130724] via-[#3a0a63] to-[#ff3c91] py-16 md:py-20">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-brand-hotpink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl"></div>
      
      <div className="container-responsive relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-high mb-6 leading-tight">
              <span className="text-white">AI agents for</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">smart businesses.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              We deploy ready-made AI agents for sales, support and ops—so you reply in minutes, cut costs, and never miss a lead.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <CalendlyModal 
                label="Book a 30-min consult" 
                className="px-8 py-4 bg-gradient-to-r from-[#ff3c91] to-[#b833ff] text-white font-bold text-lg rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2" 
              />
              <a 
                href="/agents" 
                className="px-8 py-4 ring-1 ring-white/30 hover:ring-[#ff3c91] text-white font-bold text-lg rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                See 50+ agents
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="bg-white/5 backdrop-blur ring-1 ring-white/10 rounded-xl p-4">
                <div className="text-xl font-bold text-text-high">≤ 2 min</div>
                <div className="text-gray-300 text-xs">avg response</div>
              </div>
              <div className="bg-white/5 backdrop-blur ring-1 ring-white/10 rounded-xl p-4">
                <div className="text-xl font-bold text-text-high">30-50% fewer</div>
                <div className="text-gray-300 text-xs">no-shows</div>
              </div>
              <div className="bg-white/5 backdrop-blur ring-1 ring-white/10 rounded-xl p-4">
                <div className="text-xl font-bold text-text-high">Up to 40%</div>
                <div className="text-gray-300 text-xs">more lead</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Phone Chat UI */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-64 sm:w-72 md:w-80 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-6 flex flex-col">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-brand-hotpink to-brand-magenta rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">A</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Agentify AI</div>
                        <div className="text-green-400 text-xs">Online</div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 space-y-4 overflow-hidden">
                    {chatMessages.slice(0, currentMessage + 1).map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                      >
                        <div
                          className={`max-w-xs px-4 py-3 rounded-2xl ${
                            index % 2 === 0
                              ? 'bg-white/10 text-white'
                              : 'bg-gradient-to-r from-brand-hotpink to-brand-magenta text-white'
                          }`}
                        >
                          <p className="text-sm">{message}</p>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing Indicator */}
                    {currentMessage < chatMessages.length - 1 && (
                      <div className="flex justify-start">
                        <div className="bg-white/10 px-4 py-3 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Phone Footer */}
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="flex-1 bg-white/10 rounded-full px-4 py-2">
                      <div className="text-gray-400 text-sm">Type a message...</div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-brand-hotpink to-brand-magenta rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 shadow-[0_0_80px_-30px] shadow-brand-magenta rounded-[3rem] -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}