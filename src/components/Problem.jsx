import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section className="py-16 md:py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="text-center text-xl md:text-2xl leading-relaxed text-slate-300"
        >
          A résumé alone is never enough. Recruiters want to see who you are — your strengths, your impact, your story. Too often, that gets lost. We'll bring it out, bold and clear.
        </motion.p>
      </div>
    </section>
  )
}
