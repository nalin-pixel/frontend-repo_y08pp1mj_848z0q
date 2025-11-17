import { motion } from 'framer-motion'

export default function SmashMeter() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-400 mb-2">Before</div>
              <div className="rounded-lg bg-white/5 border border-white/10 p-4 text-slate-300">Generic résumé, no callbacks.</div>
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-emerald-500/20 bg-white/5 p-6 shadow-sm">
              <div className="text-sm font-semibold text-emerald-400 mb-2">After</div>
              <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-200">Clear strengths, 3 interviews in 2 weeks.</div>
              <div className="mt-4 h-2 w-full rounded bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '82%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-2 rounded bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-[0_0_20px_3px_rgba(16,185,129,0.35)]"
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">Smash Meter: 82%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
