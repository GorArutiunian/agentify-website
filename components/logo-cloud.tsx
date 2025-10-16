// Simple color mapping for better filter results
const colorFilters: Record<string, string> = {
  '#EA4A5A': 'brightness(0) saturate(100%) invert(28%) sepia(99%) saturate(2268%) hue-rotate(324deg) brightness(98%) contrast(95%)', // n8n red
  '#FF7A59': 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(2476%) hue-rotate(346deg) brightness(102%) contrast(101%)', // HubSpot orange
  '#00A1E0': 'brightness(0) saturate(100%) invert(55%) sepia(98%) saturate(2476%) hue-rotate(180deg) brightness(102%) contrast(101%)', // Salesforce blue
  '#0088CC': 'brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(2476%) hue-rotate(180deg) brightness(102%) contrast(101%)', // Telegram blue
  '#25D366': 'brightness(0) saturate(100%) invert(55%) sepia(98%) saturate(2476%) hue-rotate(120deg) brightness(102%) contrast(101%)', // WhatsApp green
  '#4A154B': 'brightness(0) saturate(100%) invert(18%) sepia(99%) saturate(3000%) hue-rotate(280deg) brightness(95%) contrast(105%)', // Slack purple
  '#4285F4': 'brightness(0) saturate(100%) invert(45%) sepia(98%) saturate(2476%) hue-rotate(200deg) brightness(102%) contrast(101%)', // Google Cloud blue
  '#0F9D58': 'brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(2476%) hue-rotate(120deg) brightness(102%) contrast(101%)', // Google Sheets green
  '#635BFF': 'brightness(0) saturate(100%) invert(35%) sepia(98%) saturate(2476%) hue-rotate(240deg) brightness(102%) contrast(101%)', // Stripe purple
  '#FF4A00': 'brightness(0) saturate(100%) invert(30%) sepia(98%) saturate(2476%) hue-rotate(10deg) brightness(102%) contrast(101%)', // Zapier orange
  '#6264A7': 'brightness(0) saturate(100%) invert(35%) sepia(99%) saturate(2000%) hue-rotate(220deg) brightness(98%) contrast(105%)', // Microsoft Teams blue
  '#03363D': 'brightness(0) saturate(100%) invert(15%) sepia(98%) saturate(2476%) hue-rotate(160deg) brightness(102%) contrast(101%)' // Zendesk teal
};

export function LogoCloud() {
  const logos = [
    {
      name: 'n8n',
      src: '/logos/n8n.svg',
      color: '#EA4A5A'
    },
    {
      name: 'HubSpot',
      src: '/logos/hubspot.svg',
      color: '#FF7A59'
    },
    {
      name: 'Salesforce',
      src: '/logos/salesforce.svg',
      color: '#00A1E0'
    },
    {
      name: 'Telegram',
      src: '/logos/telegram.svg',
      color: '#0088CC'
    },
    {
      name: 'WhatsApp',
      src: '/logos/whatsapp.svg',
      color: '#25D366'
    },
    {
      name: 'Slack',
      src: '/logos/slack.svg',
      color: '#4A154B'
    },
    {
      name: 'Google Cloud',
      src: '/logos/googlecloud.svg',
      color: '#4285F4'
    },
    {
      name: 'Google Sheets',
      src: '/logos/googlesheets.svg',
      color: '#0F9D58'
    },
    {
      name: 'Stripe',
      src: '/logos/stripe.svg',
      color: '#635BFF'
    },
    {
      name: 'Zapier',
      src: '/logos/zapier.svg',
      color: '#FF4A00'
    },
    {
      name: 'Microsoft Teams',
      src: '/logos/microsoftteams.svg',
      color: '#6264A7'
    },
    {
      name: 'Zendesk',
      src: '/logos/zendesk.svg',
      color: '#03363D'
    }
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-8 opacity-80">
      {logos.map((logo) => (
        <div key={logo.name} className="flex flex-col items-center justify-center group">
          <div 
            className="w-20 h-20 rounded-2xl bg-white hover:bg-gray-50 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 border-[0.5px] border-gray-300"
          >
            <img 
              src={logo.src} 
              alt={logo.name}
              className="w-12 h-12 object-contain transition-all duration-300"
              style={{ filter: colorFilters[logo.color] || `brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(200deg) brightness(100%) contrast(100%)` }}
              onError={(e) => {
                // Fallback to colored circle with letter if image fails
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
                const fallback = img.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.style.display = 'flex';
                  fallback.style.backgroundColor = logo.color;
                }
              }}
            />
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg hidden"
              style={{ backgroundColor: logo.color }}
            >
              {logo.name.charAt(0)}
            </div>
          </div>
          <span className="text-sm text-slate-600 mt-3 font-medium group-hover:text-slate-800 transition-colors">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  )
}


