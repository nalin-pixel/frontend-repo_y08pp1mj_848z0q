import { useState } from 'react'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(`${backend}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Request failed')
      const data = await res.json()
      setStatus('success')
      setMessage(data.status === 'created' ? 'You’re in. Welcome to the Smash Squad.' : 'You’re already on the list. We’ll keep you posted.')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage('Something went wrong. Try again?')
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Stop just applying. Start landing.</h2>
        <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-medium shadow-sm transition-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            {status === 'loading' ? 'Joining…' : 'Join the Waitlist'}
          </button>
        </form>
        <p className="mt-3 text-sm text-slate-500">No spam. Just launch updates and early access.</p>
        {status !== 'idle' && (
          <div className={`mt-4 text-sm ${status === 'success' ? 'text-emerald-700' : status === 'error' ? 'text-red-600' : 'text-slate-600'}`}>
            {message}
          </div>
        )}
      </div>
    </section>
  )
}
