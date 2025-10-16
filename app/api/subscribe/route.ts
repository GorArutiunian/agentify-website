import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2024-06-20' })

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json({ error: 'Stripe not configured' }, { status: 501 })
    }
    const form = await req.formData()
    const priceId = String(form.get('priceId') || '')
    if (!priceId) return NextResponse.json({ error: 'Missing priceId' }, { status: 400 })

    const origin = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/success`,
      cancel_url: `${origin}/pricing`
    })
    return NextResponse.redirect(session.url!, 303)
  } catch (e) {
    return NextResponse.json({ error: 'Stripe error' }, { status: 500 })
  }
}

