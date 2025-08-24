import { motion } from 'framer-motion'
import { PROFILE } from '../data/data'

export default function Hero() {
  return (
    <section id="hero" className="section pt-32">
      <div className="grid grid-cols-1 items-center gap-12 sm:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Available for work
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl bg-gradient-tr from-purple-500/30 via-indigo-500/30 to-black">
            {PROFILE.name}
          </h1>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
            {PROFILE.role}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/80">
            {PROFILE.about}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href={`mailto:${PROFILE.email}`} className="btn-ghost">Email</a>
            <a href={PROFILE.socials.github} className="btn-ghost" target="_blank">GitHub</a>
            <a href={PROFILE.socials.linkedin} className="btn-ghost" target="_blank">LinkedIn</a>
          </div>
        </div>
        <motion.div
          initial={{ rotate: -8, opacity: 0, y: 20 }}
          whileInView={{ rotate: -8, opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-indigo-600/40 to-fuchsia-600/40 blur-2xl" />
          <div className="rounded-3xl glass p-6 shadow-2xl">
            <div className="aspect-[4/3] rounded-2xl bg-black/60 p-6">
              <div className="h-full w-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/80">
                      <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                      Live Preview
                    </div>
                    <h3 className="text-xl font-semibold text-white">Frontend Focus</h3>
                    <p className="text-sm text-white/70">Neon gradients • Glass UI • Motion</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-white/70">
                    <span className="bg-black/40 rounded-full px-3 py-1">React</span>
                    <span className="bg-black/40 rounded-full px-3 py-1">Next.js</span>
                    <span className="bg-black/40 rounded-full px-3 py-1">TypeScript</span>
                    <span className="bg-black/40 rounded-full px-3 py-1">Node.js</span>
                    <span className="bg-black/40 rounded-full px-3 py-1">PostgreSQL</span>
                    <span className="bg-black/40 rounded-full px-3 py-1">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
