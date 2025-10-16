"use client"
import { useState } from 'react'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string|undefined>()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation
    if (!name || !email || !password) {
      setError('Please fill in all fields')
      return
    }
    if (name.length < 2) {
      setError('Name must be at least 2 characters')
      return
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    
    setLoading(true)
    setError(undefined)
    
    try {
      const res = await fetch('/api/register', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: name, email, password }) 
      })
      
      setLoading(false)
      
      if (res.ok) {
        alert('Account created successfully! Please log in.')
        window.location.href = '/login'
      } else {
        const data = await res.json().catch(()=>({}))
        setError(data.error || 'Registration failed. Please try again.')
      }
    } catch (error) {
      setLoading(false)
      setError('Network error. Please check your connection and try again.')
    }
  }

  return (
    <main className="container-responsive py-20" style={{backgroundColor: '#2D1B69', minHeight: '100vh'}}>
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          <span className="text-[#E93E8F]">CREATE ACCOUNT</span>
        </h1>
        <form onSubmit={onSubmit} className="rounded-2xl border-2 border-[#E93E8F] bg-white p-8 shadow-xl space-y-6">
          <div>
            <input 
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-[#E93E8F] focus:outline-none transition-colors" 
              placeholder="Full Name" 
              value={name} 
              onChange={(e)=>setName(e.target.value)} 
            />
          </div>
          <div>
            <input 
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-[#E93E8F] focus:outline-none transition-colors" 
              placeholder="Email Address" 
              type="email"
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
            />
          </div>
          <div>
            <input 
              type="password" 
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-[#E93E8F] focus:outline-none transition-colors" 
              placeholder="Password (min. 6 characters)" 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} 
            />
          </div>
          {error && (
            <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-xl text-sm">
              {error}
            </div>
          )}
          <button 
            disabled={loading} 
            className="w-full rounded-xl bg-gradient-to-r from-[#E93E8F] to-[#2D1B69] text-white font-bold px-6 py-3 hover:scale-105 transition-transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Account…' : 'Create Account'}
          </button>
        </form>
      </div>
    </main>
  )
}


