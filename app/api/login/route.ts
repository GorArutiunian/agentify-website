import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { createSession, verifyPassword } from '@/lib/auth'
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) return NextResponse.json({ error: 'Missing credentials' }, { status: 400 })
    await query(
      'CREATE TABLE IF NOT EXISTS users (id uuid DEFAULT gen_random_uuid() PRIMARY KEY, name text NOT NULL, email text UNIQUE NOT NULL, password_hash text NOT NULL, created_at timestamptz DEFAULT now())'
    )
    const found = await query<{ id: string; password_hash: string }>('SELECT id, password_hash FROM users WHERE email=$1', [email])
    const user = found.rows[0]
    if (!user) return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    const ok = await verifyPassword(password, user.password_hash)
    if (!ok) return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    const token = await createSession(user.id)
    const res = NextResponse.json({ ok: true })
    res.headers.set('Set-Cookie', `session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${60*60*24*30}`)
    return res
  } catch (e) {
    return NextResponse.json({ error: 'Login error' }, { status: 500 })
  }
}


