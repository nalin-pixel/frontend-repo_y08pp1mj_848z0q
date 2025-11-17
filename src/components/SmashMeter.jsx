import { motion } from 'framer-motion'

export default function SmashMeter() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-500 mb-2">Before</div>
              <div className="rounded-lg bg-slate-100 p-4 text-slate-600">Generic résumé, no callbacks.</div>
            </div>
          </div>
          <div>
            <div className="rounded-xl border border-emerald-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-emerald-600 mb-2">After</div>
              <div className="rounded-lg bg-emerald-50 p-4 text-emerald-700">Clear strengths, 3 interviews in 2 weeks.</div>
              <div className="mt-4 h-2 w-full rounded bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '82%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="h-2 rounded bg-emerald-500"
                />
              </div>
              <p className="mt-2 text-xs text-slate-500">Smash Meter: 82%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
