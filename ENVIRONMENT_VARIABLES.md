# Environment Variables Required

Copy these to your `.env.local` file and fill in your actual values:

## Required for Production

```bash
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/agentify

# Email Service (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx
SALES_INBOX=agentifyworks@gmail.com

# Webhook Security
WIDGET_SECRET=your-super-secret-random-string-here
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/agentify
```

## Optional (for enhanced features)

```bash
# Stripe (if using payments)
STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# Analytics
PLAUSIBLE_DOMAIN=agentify.ai

# Next.js
NEXT_PUBLIC_APP_URL=https://www.agentify.ai
```

## How to Set in Vercel

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable with the appropriate value
5. Set environment to "Production", "Preview", or "Development" as needed

## Security Notes

- `WIDGET_SECRET`: Generate a long random string (32+ characters)
- `N8N_WEBHOOK_URL`: Should be your secured n8n webhook endpoint
- Never commit `.env.local` to version control
- Use different values for development vs production
