import createNextIntlPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-hook-form'
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self';",
              "base-uri 'self';",
              "frame-ancestors 'none';",
              "form-action 'self';",
              // Scripts and styles kept tight; allow vercel analytics and plausible if present
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.vercel.app https://plausible.io;",
              "style-src 'self' 'unsafe-inline';",
              // Images & fonts
              "img-src 'self' data: blob: *.svg;",
              "font-src 'self' data:;",
              // Network calls (adjust api domain if needed)
              "connect-src 'self' https://*.vercel.app https://api.agentify.ai https://plausible.io;",
              // Frames - allow Calendly iframes
              "frame-src 'self' https://calendly.com;",
              // Media
              "media-src 'self' blob: data:;",
              // Objects disabled
              "object-src 'none';",
            ].join(" ")
          }
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl(nextConfig);

