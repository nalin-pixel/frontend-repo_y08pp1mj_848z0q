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
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky mobile CTA */}
      <div className={`fixed inset-x-0 bottom-0 z-40 p-4 sm:hidden transition-transform ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <button onClick={scrollToCTA} className="w-full rounded-lg bg-emerald-500 text-white py-3 font-medium shadow-lg hover:bg-emerald-600">
          Join the Waitlist
        </button>
      </div>

      {/* Nav */}
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-lg font-extrabold tracking-tight">SmashThatJob</div>
          <button onClick={scrollToCTA} className="hidden sm:inline-flex rounded-md border border-slate-200 px-3 py-1.5 text-sm hover:bg-slate-50">Join waitlist</button>
        </div>
      </header>

      <main>
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

      <footer className="py-10 text-center text-slate-500 text-sm">© {new Date().getFullYear()} SmashThatJob</footer>
    </div>
  )
}

export default App
