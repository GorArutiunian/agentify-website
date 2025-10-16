"use client"

const tools = [
  { name: 'Zapier', src: '/logos/zapier.svg' },
  { name: 'Notion', src: '/logos/notion.svg' },
  { name: 'Slack', src: '/logos/slack.svg' },
  { name: 'HubSpot', src: '/logos/hubspot.svg' },
  { name: 'Salesforce', src: '/logos/salesforce.svg' },
  { name: 'n8n', src: '/logos/n8n.svg' },
  { name: 'Make', src: '/logos/make.svg' },
  { name: 'Twilio', src: '/logos/twilio.svg' },
  { name: 'Shopify', src: '/logos/shopify.svg' },
  { name: 'Intercom', src: '/logos/intercom.svg' },
  { name: 'Google Sheets', src: '/logos/googlesheets.svg' },
  { name: 'Stripe', src: '/logos/stripe.svg' },
  { name: 'Telegram', src: '/logos/telegram.svg' },
  { name: 'WhatsApp', src: '/logos/whatsapp.svg' },
  { name: 'Microsoft Teams', src: '/logos/microsoftteams.svg' },
  { name: 'Zendesk', src: '/logos/zendesk.svg' },
  { name: 'Google Cloud', src: '/logos/googlecloud.svg' },
  { name: 'Mailchimp', src: '/logos/mailchimp.svg' },
  { name: 'Airtable', src: '/logos/airtable.svg' },
  { name: 'Calendly', src: '/logos/calendly.svg' }
]

export function PoweredTools() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-purple-dark to-brand-purple-bright">
      <div className="container-responsive">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Powered by professional tools
          </h2>
          <p className="text-lg text-gray-200 mb-12">
            Our agents integrate with the tools you already use
          </p>
          
          {/* Tools Grid */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-8 items-center justify-items-center">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 hover:scale-110"
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 group-hover:shadow-agentify-glow transition-all duration-300">
                  <img
                    src={tool.src}
                    alt={tool.name}
                    className="w-8 h-8 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
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
                    className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-pink-hot to-brand-magenta flex items-center justify-center text-white font-bold text-xs hidden"
                  >
                    {tool.name.charAt(0)}
                  </div>
                </div>
                <span className="text-xs text-gray-300 group-hover:text-white transition-colors text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Caption */}
          <p className="text-sm text-gray-300 mt-12 max-w-2xl mx-auto">
            Powered by professional tools our agents integrate with
          </p>
        </div>
      </div>
    </section>
  )
}
