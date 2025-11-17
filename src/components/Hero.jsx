import { motion } from 'framer-motion'

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Don't just apply. <span className="text-slate-900">Land the job you want.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mt-5 text-lg text-slate-600 max-w-2xl"
            >
              We help you uncover your strengths, sharpen your story, and show up with confidence.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.button
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 }}
                onClick={onCTAClick}
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 text-base font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Start the journey
              </motion.button>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2 py-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Powered by Humeva
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_-10%,#34d399_0%,transparent_50%),radial-gradient(circle_at_100%_40%,#0ea5e9_0%,transparent_40%)]" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="w-full">
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="rounded-lg bg-slate-700/50 p-3">Before: Generic résumé</div>
                    <div className="rounded-lg bg-emerald-600/30 p-3">After: Clear strengths</div>
                    <div className="rounded-lg bg-slate-700/50 p-3">No callbacks</div>
                    <div className="rounded-lg bg-emerald-600/30 p-3">3 interviews in 2 weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
