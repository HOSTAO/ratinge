'use client'
import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('https://bestemail.in/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'ratinge' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0d1117 0%, #111 100%)', borderTop: '1px solid rgba(32,217,161,0.15)', padding: '60px 24px' }}>
      <div style={{ maxWidth: 580, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>⭐</div>
        <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8, fontFamily: "'Syne', sans-serif" }}>
          Build a stronger reputation
        </h3>
        <p style={{ color: '#888', fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
          Tips on getting more reviews, managing your online presence, and turning customers into brand advocates.
        </p>

        {status === 'success' ? (
          <div style={{ background: 'rgba(32,217,161,0.1)', border: '1px solid rgba(32,217,161,0.3)', borderRadius: 12, padding: '14px 24px', color: '#20D9A1', fontWeight: 600 }}>
            ✓ Subscribed! Great tips coming your way.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 10, maxWidth: 460, margin: '0 auto 16px', flexWrap: 'wrap' }}>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{ flex: 1, minWidth: 200, padding: '13px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, color: '#fff', fontSize: 15, outline: 'none', fontFamily: "'Poppins', sans-serif" }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{ padding: '13px 24px', background: 'linear-gradient(135deg, #20D9A1, #5F39FF)', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: 'pointer', whiteSpace: 'nowrap', opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p style={{ color: '#f87171', fontSize: 13, marginTop: 8 }}>Something went wrong. Please try again.</p>
        )}

        <p style={{ color: '#444', fontSize: 12, marginTop: 14 }}>
          No spam · Unsubscribe anytime ·{' '}
          <a href="https://bestemail.in" target="_blank" rel="noopener noreferrer" style={{ color: '#20D9A1', textDecoration: 'none' }}>
            Powered by BestEmail.in
          </a>
        </p>
      </div>
    </div>
  )
}
