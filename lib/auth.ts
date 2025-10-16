import bcrypt from 'bcryptjs'
import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'dev_secret_change_me')

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export async function verifyPassword(password: string, hash: string) {
  return await bcrypt.compare(password, hash)
}

export async function createSession(userId: string) {
  const token = await new SignJWT({ sub: userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(secret)
  return token
}

export async function verifySession(token: string) {
  const { payload } = await jwtVerify(token, secret)
  return payload.sub as string
}


