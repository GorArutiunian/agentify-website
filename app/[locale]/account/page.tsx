import { cookies } from 'next/headers'
import { verifySession } from '@/lib/auth'
import { query } from '@/lib/db'
import { redirect } from 'next/navigation'

export default async function AccountPage() {
  const token = cookies().get('session')?.value
  if (!token) return redirect('/login')
  let userId: string
  try {
    userId = await verifySession(token)
  } catch {
    return redirect('/login')
  }
  const user = (await query<{ name: string; email: string }>('SELECT name,email FROM users WHERE id=$1', [userId])).rows[0]
  return (
    <main className="container-responsive py-12">
      <h1 className="text-3xl font-semibold text-secondary mb-6">My account</h1>
      <div className="rounded-2xl border border-pink-100 bg-light-cream p-6 shadow-sm max-w-xl">
        <div className="text-sm text-slate-500">Name</div>
        <div className="mb-4 text-secondary">{user?.name}</div>
        <div className="text-sm text-slate-500">Email</div>
        <div className="text-secondary">{user?.email}</div>
      </div>
    </main>
  )
}


