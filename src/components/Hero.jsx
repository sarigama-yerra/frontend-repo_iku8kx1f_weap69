import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-300/90 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10">
              Modern Travel • Fintech • Interactive
            </p>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Your next trip, designed to feel effortless
            </h1>
            <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
              Plan, book, and manage itineraries with a sleek interface and realtime updates. Explore curated destinations and keep every boarding pass at your fingertips.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#destinations" className="px-5 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white font-medium shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-shadow">Explore Destinations</a>
              <a href="#itineraries" className="px-5 py-3 rounded-xl bg-white/10 text-white font-medium ring-1 ring-white/15 hover:bg-white/15 transition-colors">Build Itinerary</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
    </section>
  )
}
