import { useEffect, useState } from 'react'

export default function Destinations() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/destinations`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="destinations" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold gradient-text">Curated destinations</h2>
            <p className="text-slate-300/80 mt-2">A rotating list pulled from the backend</p>
          </div>
        </div>

        {loading ? (
          <p className="text-slate-400">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((d, i) => (
              <article key={i} className="group relative overflow-hidden card hover-lift">
                {d.image && (
                  <img src={d.image} alt={d.name} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                )}
                <div className="p-5">
                  <h3 className="text-white text-xl font-medium">{d.name}</h3>
                  <p className="text-slate-300/80">{d.country}</p>
                  {d.tagline && <p className="text-slate-400 mt-2">{d.tagline}</p>}
                </div>
                <div className="absolute inset-px rounded-[calc(theme(borderRadius.2xl)-1px)] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(249,115,22,.15), rgba(236,72,153,.15))' }} />
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
