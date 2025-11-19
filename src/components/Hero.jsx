import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden gridlines">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="aurora" />
      <div className="orb-glow left-[-5%] top-[10%]" />
      <div className="orb-glow left-[60%] top-[55%]" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl animate-fade-up">
            <p className="inline-flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-orange-300/90 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10 shine-border">
              Modern Travel • Fintech • Interactive
            </p>
            <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight gradient-text">
              Your next trip, designed to feel effortless
            </h1>
            <p className="mt-4 text-lg text-slate-200/90 max-w-xl">
              Plan, book, and manage itineraries with a sleek interface and realtime updates. Explore curated destinations and keep every boarding pass at your fingertips.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#destinations" className="btn-primary">Explore Destinations</a>
              <a href="#itineraries" className="btn-ghost">Build Itinerary</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950" />
    </section>
  )
}
