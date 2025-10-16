export function LogosStrip() {
  const logos = [
    { name: 'n8n', src: '/logos/n8n.svg' },
    { name: 'HubSpot', src: '/logos/hubspot.svg' },
    { name: 'Salesforce', src: '/logos/salesforce.svg' },
    { name: 'Telegram', src: '/logos/telegram.svg' },
    { name: 'WhatsApp', src: '/logos/whatsapp.svg' },
    { name: 'Slack', src: '/logos/slack.svg' },
    { name: 'Google Sheets', src: '/logos/googlesheets.svg' },
    { name: 'Zapier', src: '/logos/zapier.svg' },
    { name: 'Zendesk', src: '/logos/zendesk.svg' },
    { name: 'Notion', src: '/logos/notion.svg' },
    { name: 'Airtable', src: '/logos/airtable.svg' },
    { name: 'Gmail', src: '/logos/gmail.svg' },
    { name: 'Asana', src: '/logos/asana.svg' },
    { name: 'Monday', src: '/logos/monday.svg' },
    { name: 'Stripe', src: '/logos/stripe.svg' },
    { name: 'Twilio', src: '/logos/twilio.svg' },
    { name: 'Shopify', src: '/logos/shopify.svg' },
    { name: 'Intercom', src: '/logos/intercom.svg' },
    { name: 'ClickUp', src: '/logos/clickup.svg' },
    { name: 'Make', src: '/logos/make.svg' }
  ]

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="section-container">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-brand-600 uppercase tracking-wide">
            Powered by professional tools
          </p>
        </div>
        
        <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-9 w-auto transition-all duration-300"
                aria-hidden="true"
                role="presentation"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
