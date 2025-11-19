import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Itineraries from './components/Itineraries'
import SubscribeContact from './components/SubscribeContact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Itineraries />
        <SubscribeContact />
        <footer className="relative border-t border-white/10 py-10">
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="aurora" />
          </div>
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-slate-400 relative z-10">
            <p>© {new Date().getFullYear()} AeroVoyage</p>
            <a href="/test" className="hover:text-white">System Test</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
