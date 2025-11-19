import { useEffect, useState } from 'react'

export default function Itineraries() {
  const [ownerEmail, setOwnerEmail] = useState('')
  const [name, setName] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchItins = async () => {
    if (!ownerEmail) return
    setLoading(true)
    try {
      const res = await fetch(`${base}/api/itineraries?owner_email=${encodeURIComponent(ownerEmail)}`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const createItin = async (e) => {
    e.preventDefault()
    if (!ownerEmail || !name) return
    setLoading(true)
    try {
      await fetch(`${base}/api/itineraries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, owner_email: ownerEmail })
      })
      setName('')
      await fetchItins()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Optionally auto-fetch
  }, [])

  return (
    <section id="itineraries" className="py-24 bg-slate-950/95">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold gradient-text">Your itineraries</h2>
          <p className="text-slate-300/80 mt-2">Create and retrieve saved trips</p>
        </div>

        <form onSubmit={createItin} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input value={ownerEmail} onChange={(e)=>setOwnerEmail(e.target.value)} placeholder="your@email.com" className="rounded-xl glass text-white placeholder:text-slate-400 px-4 py-3" />
          <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Trip name (e.g., Bali 2025)" className="rounded-xl glass text-white placeholder:text-slate-400 px-4 py-3" />
          <button type="submit" className="btn-primary">Create</button>
        </form>

        <div className="mt-6 flex gap-3 items-center">
          <button onClick={fetchItins} className="btn-ghost">Fetch</button>
          {loading && <span className="text-slate-400 animate-pulse">Loading...</span>}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="card p-5 hover-lift">
              <h3 className="text-white text-xl font-medium">{it.name}</h3>
              <p className="text-slate-300/80">{it.owner_email}</p>
              <p className="text-slate-400 mt-2">Items: {it.items?.length || 0}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
