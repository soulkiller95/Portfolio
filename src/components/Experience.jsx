import { EXPERIENCE } from '../data/data'

export default function Experience() {
  return (
    <section id="experience" className="section anchor-offset">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">Journey</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Professional Experience</h2>
      </div>
      <div className="space-y-4">
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="rounded-2xl glass p-6 text-white/90">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <span className="text-sm text-white/70">{e.period}</span>
            </div>
            <p className="mt-2 text-white/80">{e.details}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {e.tech?.map((t) => (<span key={t} className="rounded-full bg-black/40 px-3 py-1">{t}</span>))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
