import { Check } from 'lucide-react'

const perks = [
  'Priority access at launch',
  'Smash Squad badge',
  'Be first to reshape your career story',
]

export default function Perks() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <ul className="grid gap-3">
          {perks.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/20">
                <Check size={16} />
              </span>
              <span className="text-slate-200">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
