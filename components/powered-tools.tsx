"use client"
import Image from 'next/image'

const tools = [
  { name: 'Zapier', src: '/logos/zapier.svg', url: 'https://zapier.com' },
  { name: 'Make', src: '/logos/make.svg', url: 'https://www.make.com' },
  { name: 'n8n', src: '/logos/n8n.svg', url: 'https://n8n.io' },
  { name: 'Slack', src: '/logos/slack.svg', url: 'https://slack.com' },
  { name: 'Notion', src: '/logos/notion.svg', url: 'https://www.notion.so' },
  { name: 'Airtable', src: '/logos/airtable.svg', url: 'https://airtable.com' },
  { name: 'HubSpot', src: '/logos/hubspot.svg', url: 'https://www.hubspot.com' },
  { name: 'Salesforce', src: '/logos/salesforce.svg', url: 'https://www.salesforce.com' },
  { name: 'Intercom', src: '/logos/intercom.svg', url: 'https://www.intercom.com' },
  { name: 'Zendesk', src: '/logos/zendesk.svg', url: 'https://www.zendesk.com' },
  { name: 'Stripe', src: '/logos/stripe.svg', url: 'https://stripe.com' },
  { name: 'Shopify', src: '/logos/shopify.svg', url: 'https://www.shopify.com' },
  { name: 'Google Sheets', src: '/logos/googlesheets.svg', url: 'https://workspace.google.com/products/sheets/' },
  { name: 'Gmail', src: '/logos/gmail.svg', url: 'https://www.google.com/gmail/about/' },
  { name: 'Google Calendar', src: '/logos/gcal.svg', url: 'https://workspace.google.com/products/calendar/' },
  { name: 'Microsoft Teams', src: '/logos/microsoftteams.svg', url: 'https://www.microsoft.com/microsoft-teams' },
  { name: 'Twilio', src: '/logos/twilio.svg', url: 'https://www.twilio.com' },
  { name: 'Telegram', src: '/logos/telegram.svg', url: 'https://telegram.org' },
  { name: 'WhatsApp', src: '/logos/whatsapp.svg', url: 'https://www.whatsapp.com' },
  { name: 'Calendly', src: '/logos/calendly.svg', url: 'https://calendly.com' }
]

export function PoweredTools() {
  return (
    <section className="py-16 bg-[#130724]">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-sm text-gray-300 mb-12">
            Powered by professional tools our agents integrate with
          </h2>
          
          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/8 transition-all duration-300 ring-1 ring-white/10 rounded-xl p-4 flex items-center justify-center group"
              >
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    width={64}
                    height={64}
                    className="max-h-16 w-auto object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      img.style.display = 'none';
                      const fallback = img.nextElementSibling as HTMLElement;
                      if (fallback) {
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div
                    className="w-16 h-16 rounded-lg bg-gradient-to-r from-brand-hotpink to-brand-magenta flex items-center justify-center text-white font-bold text-xs hidden"
                  >
                    {tool.name.charAt(0)}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}