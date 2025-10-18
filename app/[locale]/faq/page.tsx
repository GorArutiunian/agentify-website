"use client"
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { BackgroundShapes } from '@/components/background-shapes'

export default function FAQPage() {
  const t = useTranslations('faq')
  
  const faqs = [
    {
      question: t('q1'),
      answer: t('a1')
    },
    {
      question: t('q2'),
      answer: t('a2')
    },
    {
      question: t('q3'),
      answer: t('a3')
    },
    {
      question: t('q4'),
      answer: t('a4')
    },
    {
      question: t('q5'),
      answer: t('a5')
    },
    {
      question: t('q6'),
      answer: t('a6')
    },
    {
      question: t('q7'),
      answer: t('a7')
    },
    {
      question: t('q8'),
      answer: t('a8')
    },
    {
      question: t('q9'),
      answer: t('a9')
    },
    {
      question: t('q10'),
      answer: t('a10')
    },
    {
      question: t('q11'),
      answer: t('a11')
    },
    {
      question: t('q12'),
      answer: t('a12')
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] text-white py-20 min-h-[50vh] flex items-center">
        {/* Geometric Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-40 h-40 bg-[#E93E8F] transform rotate-45"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-[#FF6B9D] transform -rotate-12"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">{t('title').split(' ').slice(0, 2).join(' ')}</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D]">{t('title').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
        <BackgroundShapes variant="light" intensity="low" />
        <div className="container-responsive relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-2 border-[#E93E8F] rounded-2xl overflow-hidden hover:border-[#FF6B9D] transition-colors shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="text-xl font-bold text-[#2D1B69]">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-[#E93E8F] transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-8 py-6 bg-white border-t border-[#E93E8F]/30">
          <p className="text-[#2D1B69] leading-relaxed text-lg font-medium">{answer}</p>
        </div>
      )}
    </div>
  )
}

