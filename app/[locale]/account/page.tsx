import { cookies } from 'next/headers'
import { verifySession } from '@/lib/auth'
import { query } from '@/lib/db'
import { redirect } from 'next/navigation'
import LogoShapesBg from '@/components/logo-shapes-bg'

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
    <main className="relative bg-gradient-to-br from-[#130724] via-[#1a0a2e] via-[#2D1B69] to-[#130724] min-h-screen">
      {/* Logo Shapes Background */}
      <LogoShapesBg />
      
      {/* Glowing line separators */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.8)] blur-[1px]"></span>
      <span className="pointer-events-none absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.6)] blur-[2px]"></span>
      
      <div className="container-responsive relative z-10 py-20">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
          <span className="text-white">MY</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-hotpink to-brand-magenta">ACCOUNT</span>
        </h1>
        <div className="rounded-2xl border-2 border-[#E93E8F] bg-white p-8 shadow-xl max-w-xl">
          <div className="text-sm text-gray-500 mb-2">Name</div>
          <div className="mb-6 text-[#2D1B69] text-lg font-semibold">{user?.name}</div>
          <div className="text-sm text-gray-500 mb-2">Email</div>
          <div className="text-[#2D1B69] text-lg font-semibold">{user?.email}</div>
        </div>
      </div>
    </main>
  )
}


