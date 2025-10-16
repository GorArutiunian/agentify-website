'use client'
import Image from 'next/image';

const present = [
  { name: 'n8n',             file: '/logos/n8n.svg' },
  { name: 'Zapier',          file: '/logos/zapier.svg' },
  { name: 'Slack',           file: '/logos/slack.svg' },
  { name: 'HubSpot',         file: '/logos/hubspot.svg' },
  { name: 'Salesforce',      file: '/logos/salesforce.svg' },
  { name: 'Stripe',          file: '/logos/stripe.svg' },
  { name: 'Zendesk',         file: '/logos/zendesk.svg' },
  { name: 'Google Sheets',   file: '/logos/googlesheets.svg' },
  { name: 'Google Cloud',    file: '/logos/googlecloud.svg' },
  { name: 'Microsoft Teams', file: '/logos/microsoftteams.svg' },
  { name: 'Telegram',        file: '/logos/telegram.svg' },
  { name: 'WhatsApp',        file: '/logos/whatsapp.svg' },
];

// drop these files later into /public/logos to reach 20
const future = [
  { name: 'Notion',     file: '/logos/notion.svg' },
  { name: 'Calendly',   file: '/logos/calendly.svg' },
  { name: 'Airtable',   file: '/logos/airtable.svg' },
  { name: 'Intercom',   file: '/logos/intercom.svg' },
  { name: 'Asana',      file: '/logos/asana.svg' },
  { name: 'Shopify',    file: '/logos/shopify.svg' },
  { name: 'Make',       file: '/logos/make.svg' },      // aka Integromat
  { name: 'Twilio',     file: '/logos/twilio.svg' },
];

const items = [...present, ...future];

export function LogosStrip() {
  return (
    <section className="bg-brand-dark/40 border-y border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-6 text-center">
          <p className="text-sm tracking-wide text-white/60">Powered by professional tools</p>
          <h3 className="mt-2 text-xl font-semibold">
            <span className="bg-gradient-to-r from-brand-pink to-brand-purple bg-clip-text text-transparent">
              Trusted integrations we work with
            </span>
          </h3>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {items.map((logo) => (
            <li
              key={logo.name}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <div className="relative h-8 w-[120px]">
                <Image
                  src={logo.file}
                  alt={logo.name}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}