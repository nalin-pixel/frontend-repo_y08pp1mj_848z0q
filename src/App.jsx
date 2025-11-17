import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Steps from './components/Steps'
import SmashMeter from './components/SmashMeter'
import Trust from './components/Trust'
import Perks from './components/Perks'
import FinalCTA from './components/FinalCTA'

function App() {
  const ctaRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setShowSticky(v > 0.18)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Atmospheric background accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[60vh] w-[90vw] -translate-x-1/2 rounded-full blur-3xl opacity-30 bg-[radial-gradient(60%_60%_at_50%_50%,#06b6d4_0%,transparent_60%)]" />
        <div className="absolute top-1/3 -right-20 h-[40vh] w-[50vw] rounded-full blur-3xl opacity-20 bg-[radial-gradient(50%_50%_at_50%_50%,#22c55e_0%,transparent_60%)]" />
        <div className="absolute bottom-0 -left-10 h-[40vh] w-[50vw] rounded-full blur-3xl opacity-10 bg-[radial-gradient(50%_50%_at_50%_50%,#a855f7_0%,transparent_60%)]" />
      </div>

      {/* Sticky mobile CTA */}
      <div className={`fixed inset-x-0 bottom-0 z-40 p-4 sm:hidden transition-transform ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <button
          onClick={scrollToCTA}
          className="w-full rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 font-medium shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_30px_-8px_rgba(34,197,94,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Join the Waitlist
        </button>
      </div>

      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border-b border-white/10">
          <div className="text-lg font-extrabold tracking-tight">SmashThatJob</div>
          <button
            onClick={scrollToCTA}
            className="hidden sm:inline-flex rounded-md px-3 py-1.5 text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Join waitlist
          </button>
        </div>
      </header>

      <main className="pt-20">
        <Hero onCTAClick={scrollToCTA} />
        <Problem />
        <Steps />
        <SmashMeter />
        <Trust />
        <Perks />
        <div ref={ctaRef}>
          <FinalCTA />
        </div>
      </main>

      <footer className="py-10 text-center text-slate-400 text-sm border-t border-white/10">© {new Date().getFullYear()} SmashThatJob</footer>
    </div>
  )
}

export default App
