import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discover',
    text: 'Identify your strengths and wins',
  },
  {
    title: 'Reframe',
    text: 'Position your story for the job you want',
  },
  {
    title: 'Present',
    text: 'Build confidence and land interviews',
  },
]

export default function Steps() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 p-6 bg-white/5 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-400">Step {i + 1}</div>
              <div className="mt-2 text-2xl font-bold tracking-tight text-white">{s.title}</div>
              <p className="mt-2 text-slate-300">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
