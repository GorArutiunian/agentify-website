import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  message: z.string().min(10),
  channel: z.enum(['whatsapp','telegram']).optional(),
  honeypot: z.string().optional()
})

export async function POST(req: Request) {
  try {
    if (!resend) return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    
    const data = await req.json()
    const parsed = schema.safeParse(data)
    if (!parsed.success) return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
    if (parsed.data.honeypot) return NextResponse.json({ ok: true })

    const to = process.env.SALES_INBOX
    if (!to) return NextResponse.json({ error: 'Missing SALES_INBOX' }, { status: 500 })

    await resend.emails.send({
      to,
      from: 'Agentify <noreply@agentify.dev>',
      subject: `New contact from ${parsed.data.name}`,
      text: JSON.stringify(parsed.data, null, 2)
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'Email error' }, { status: 500 })
  }
}

