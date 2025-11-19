import { Plane, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Plane className="w-5 h-5" />
          </div>
          <span className="font-semibold tracking-tight gradient-text">AeroVoyage</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          <a href="#destinations" className="hover:text-white/90">Destinations</a>
          <a href="#itineraries" className="hover:text-white/90">Itineraries</a>
          <a href="#subscribe" className="hover:text-white/90">Subscribe</a>
          <a href="#contact" className="hover:text-white/90">Contact</a>
          <a href="/test" className="text-orange-300 hover:text-orange-200">System Test</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg border border-white/10 text-slate-200">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
