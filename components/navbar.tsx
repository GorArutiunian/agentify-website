"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { CalendlyModal } from '@/components/calendly-modal'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const locales = ['en'] as const

export function Navbar() {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const locale = useLocale()
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const switchLocale = (l: string) => {
    const parts = pathname.split('/')
    parts[1] = l
    return parts.join('/')
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const earlyHidePoint = 300
      
      setScrollY(currentScrollY)
      
      // Disable scroll-based hiding on mobile devices (screen width < 768px)
      const isMobile = window.innerWidth < 768
      if (isMobile) {
        setIsVisible(true)
        return
      }
      
      if (currentScrollY < earlyHidePoint) {
        setIsVisible(true)
      } else {
        const scrollDirection = currentScrollY > scrollY ? 'down' : 'up'
        setIsVisible(scrollDirection === 'up')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollY])

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const backgroundOpacity = Math.min(0.75, 0.6 + (scrollY / 2000) * 0.15)
  const textColor = 'text-gray-900'
  const hoverColor = 'hover:text-[#2D1B69] hover:scale-105'

  return (
    <>
      <header 
        className={`fixed top-0 z-50 w-full border-b backdrop-blur-lg transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${backgroundOpacity})`,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottomColor: 'rgba(45, 27, 105, 0.2)'
        }}
      >
        <div className="container-responsive flex h-16 md:h-14 items-center justify-between">
          <Link href={`/${locale}`} className={`flex items-center gap-3 font-bold text-2xl md:text-3xl transition-all duration-300 ${textColor} hover:scale-105 hover:text-[#2D1B69]`}>
            <img src="/agentify-logo.png" alt="Agentify Logo" className="w-8 h-8 md:w-10 md:h-10" />
            <div className="flex items-center gap-2">
              <span>Agentify</span>
              <span className="text-sm md:text-base font-normal text-[#E93E8F]">bots</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold items-center">
            <Link href={`/${locale}`} className={`transition-all duration-300 ${textColor} ${hoverColor} px-3 py-3 rounded-lg hover:bg-gray-100 flex items-center`}>
              {t('home')}
            </Link>
            <Link href={`/${locale}/agents`} className={`transition-all duration-300 ${textColor} ${hoverColor} px-3 py-3 rounded-lg hover:bg-gray-100 flex items-center`}>
              {t('agents')}
            </Link>
            <Link href={`/${locale}/faq`} className={`transition-all duration-300 ${textColor} ${hoverColor} px-3 py-3 rounded-lg hover:bg-gray-100 flex items-center`}>
              {t('faq')}
            </Link>
            <Link href={`/${locale}/about`} className={`transition-all duration-300 ${textColor} ${hoverColor} px-3 py-3 rounded-lg hover:bg-gray-100 flex items-center`}>
              About
            </Link>
            <Link href={`/${locale}/contact`} className={`transition-all duration-300 ${textColor} ${hoverColor} px-3 py-3 rounded-lg hover:bg-gray-100 flex items-center`}>
              {t('contact')}
            </Link>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 ml-8">
            <CalendlyModal 
              label="Get Started" 
              className="px-6 py-3 bg-gradient-to-r from-[#D63384] to-[#2D1B69] text-white font-bold text-base rounded-lg hover:scale-110 transition-all duration-300 hover:from-[#2D1B69] hover:to-[#D63384] shadow-lg flex items-center justify-center" 
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-900 hover:text-[#2D1B69] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-16 right-0 z-40 h-[calc(100vh-4rem)] w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-2">
          <Link 
            href={`/${locale}`} 
            onClick={closeMobileMenu}
            className="px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100 hover:text-[#2D1B69] rounded-lg transition-colors"
          >
            {t('home')}
          </Link>
          <Link 
            href={`/${locale}/agents`} 
            onClick={closeMobileMenu}
            className="px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100 hover:text-[#2D1B69] rounded-lg transition-colors"
          >
            {t('agents')}
          </Link>
          <Link 
            href={`/${locale}/faq`} 
            onClick={closeMobileMenu}
            className="px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100 hover:text-[#2D1B69] rounded-lg transition-colors"
          >
            {t('faq')}
          </Link>
          <Link 
            href={`/${locale}/about`} 
            onClick={closeMobileMenu}
            className="px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100 hover:text-[#2D1B69] rounded-lg transition-colors"
          >
            About
          </Link>
          <Link 
            href={`/${locale}/contact`} 
            onClick={closeMobileMenu}
            className="px-4 py-3 text-lg font-semibold text-gray-900 hover:bg-gray-100 hover:text-[#2D1B69] rounded-lg transition-colors"
          >
            {t('contact')}
          </Link>
          
          <div className="pt-4 border-t border-gray-200">
            <CalendlyModal 
              label="Get Started" 
              className="w-full px-6 py-3 bg-gradient-to-r from-[#D63384] to-[#2D1B69] text-white font-bold text-base rounded-lg hover:scale-105 transition-all duration-300 hover:from-[#2D1B69] hover:to-[#D63384] shadow-lg flex items-center justify-center" 
            />
          </div>
        </nav>
      </div>
    </>
  )
}


