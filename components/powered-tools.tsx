"use client"
import Headline from '@/components/headline'
import LogoShapesBg from '@/components/logo-shapes-bg'

const tools = [
  { name: 'Zapier', src: '/logos/zapier.svg', url: 'https://zapier.com' },
  { name: 'Make', src: '/logos/make.svg', url: 'https://www.make.com' },
  { name: 'n8n', src: '/logos/n8n.svg', url: 'https://n8n.io' },
  { name: 'HubSpot', src: '/logos/hubspot.svg', url: 'https://www.hubspot.com' },
  { name: 'Zendesk', src: '/logos/zendesk.svg', url: 'https://www.zendesk.com' },
  { name: 'Google Sheets', src: '/logos/googlesheets.svg', url: 'https://workspace.google.com/products/sheets/' },
  { name: 'Gmail', src: '/logos/gmail.svg', url: 'https://www.google.com/gmail/about/' },
  { name: 'Google Calendar', src: '/logos/gcal.svg', url: 'https://workspace.google.com/products/calendar/' },
  { name: 'Twilio', src: '/logos/twilio.svg', url: 'https://www.twilio.com' },
  { name: 'Telegram', src: '/logos/telegram.svg', url: 'https://telegram.org' },
  { name: 'WhatsApp', src: '/logos/whatsapp.svg', url: 'https://www.whatsapp.com' },
  { name: 'Calendly', src: '/logos/calendly.svg', url: 'https://calendly.com' }
]

export function PoweredTools() {
  return (
    <section className="relative py-16 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
      {/* Glowing line separators */}
      <span className="pointer-events-none absolute inset-x-0 -top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
      <span className="pointer-events-none absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
      <span className="pointer-events-none absolute inset-x-0 -bottom-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
      <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
      <LogoShapesBg />
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto text-center">
          <Headline className="mb-12 mt-8">
            <span className="text-white">Powered by</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">professional tools</span>
          </Headline>
          
          {/* Tools Grid - Two equal lines, 1.1x bigger */}
          <div className="grid grid-cols-6 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {tools.map((tool, index) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center group hover:scale-110 transition-all duration-300"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center mb-3 sm:mb-4">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-white/30 rounded-lg flex items-center justify-center border border-white/30 shadow-lg p-2">
                    <img
                      src={tool.src}
                      alt={tool.name}
                      width={56}
                      height={56}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain group-hover:scale-110 group-hover:brightness-120 transition-all duration-200 ease-in-out"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <span className="text-sm sm:text-base text-white text-center leading-tight font-medium">
                  {tool.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
