"use client"

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
    <section className="py-16 bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724]">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E93E8F] to-[#FF6B9D] mb-12 mt-8">
            Powered by professional tools our agents integrate with
          </h2>
          
          {/* Tools Grid - EXACTLY 2 IDENTICAL ROWS */}
          <div className="space-y-12">
            {/* First Row - EXACTLY 10 tools */}
            <div className="flex justify-center items-center gap-6">
              {tools.slice(0, 10).map((tool, index) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group hover:scale-110 transition-all duration-300 w-20"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <img
                      src={tool.src}
                      alt={tool.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain group-hover:scale-110 group-hover:brightness-120 transition-all duration-200 ease-in-out"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                  <span className="text-xs text-white text-center leading-tight font-medium">
                    {tool.name}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Second Row - EXACTLY 10 tools */}
            <div className="flex justify-center items-center gap-6">
              {tools.slice(10).map((tool, index) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center group hover:scale-110 transition-all duration-300 w-20"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-3">
                    <img
                      src={tool.src}
                      alt={tool.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain group-hover:scale-110 group-hover:brightness-120 transition-all duration-200 ease-in-out"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden">
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                  <span className="text-xs text-white text-center leading-tight font-medium">
                    {tool.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}