import { NextResponse } from 'next/server'
// @ts-ignore
import pool from '../../../postg.config'

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json()
    if (!username || !email || !password) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    await pool.query(
      'CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, username text NOT NULL, email text UNIQUE NOT NULL, password text NOT NULL, created_at timestamptz DEFAULT now())'
    )
    const existing = await pool.query('SELECT id FROM users WHERE email=$1', [email])
    if (existing.rows[0]) return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    await pool.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password])
    return NextResponse.json({ message: 'User registered' })
  } catch (err) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 })
  }
}


