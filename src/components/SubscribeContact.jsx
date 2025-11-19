import { useState } from 'react'

export default function SubscribeContact() {
  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [email, setEmail] = useState('')
  const [subMsg, setSubMsg] = useState('')

  const [name, setName] = useState('')
  const [msgEmail, setMsgEmail] = useState('')
  const [message, setMessage] = useState('')
  const [contactMsg, setContactMsg] = useState('')

  const subscribe = async (e) => {
    e.preventDefault()
    setSubMsg('')
    try {
      const res = await fetch(`${base}/api/subscribe`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
      if (res.ok) { setSubMsg('Subscribed! 🎉'); setEmail('') } else { setSubMsg('Failed to subscribe') }
    } catch { setSubMsg('Network error') }
  }

  const contact = async (e) => {
    e.preventDefault()
    setContactMsg('')
    try {
      const res = await fetch(`${base}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email: msgEmail, message }) })
      if (res.ok) { setContactMsg('Message sent ✅'); setName(''); setMsgEmail(''); setMessage('') } else { setContactMsg('Failed to send') }
    } catch { setContactMsg('Network error') }
  }

  return (
    <section id="subscribe" className="py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
          <h3 className="text-white text-2xl font-semibold">Stay in the loop</h3>
          <p className="text-slate-300/80 mt-2">Get destination drops and travel hacks.</p>
          <form onSubmit={subscribe} className="mt-6 flex gap-3">
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="you@domain.com" className="flex-1 rounded-xl bg-white/5 text-white placeholder:text-slate-400 px-4 py-3 ring-1 ring-white/10" />
            <button type="submit" className="rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white px-5 py-3 font-medium">Subscribe</button>
          </form>
          {subMsg && <p className="mt-3 text-slate-300">{subMsg}</p>}
        </div>

        <div id="contact" className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6">
          <h3 className="text-white text-2xl font-semibold">Contact us</h3>
          <p className="text-slate-300/80 mt-2">We reply within 24 hours.</p>
          <form onSubmit={contact} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" className="rounded-xl bg-white/5 text-white placeholder:text-slate-400 px-4 py-3 ring-1 ring-white/10" />
            <input value={msgEmail} onChange={(e)=>setMsgEmail(e.target.value)} type="email" placeholder="Email" className="rounded-xl bg-white/5 text-white placeholder:text-slate-400 px-4 py-3 ring-1 ring-white/10" />
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" className="md:col-span-2 rounded-xl bg-white/5 text-white placeholder:text-slate-400 px-4 py-3 ring-1 ring-white/10 min-h-[120px]" />
            <div className="md:col-span-2 flex items-center gap-3">
              <button type="submit" className="rounded-xl bg-white/10 text-white px-5 py-3 ring-1 ring-white/15">Send</button>
              {contactMsg && <span className="text-slate-300">{contactMsg}</span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
