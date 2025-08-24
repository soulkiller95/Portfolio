import { PROJECTS } from '../data/data'
import { motion } from 'framer-motion'

function Card({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl glass p-0 text-white shadow-xl hover: border-blue-500/30 hover:shadow-blue-500/20 transition duration-300"
    >
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/30 blur-2xl transition group-hover:scale-110" />
      <img src={p.image} alt={p.title} className="h-40 w-full object-cover opacity-90" />
      <div className="relative z-10 space-y-3 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <span className="rounded-full bg-black/40 px-3 py-1 text-xs">Project</span>
        </div>
        <p className="text-white/80">{p.desc}</p>
        <div className="flex flex-wrap gap-2 pt-2 text-xs text-white/80">
          {p.tags?.map((t) => (
            <span key={t} className="rounded-full bg-black/40 px-3 py-1">{t}</span>
          ))}
        </div>
        <div className="flex gap-3 pt-4">
          <a href={p.link} className="btn-ghost">Live</a>
          <a href={p.repo} className="btn-ghost">Code</a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section anchor-offset">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">My work</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p) => <Card key={p.title} p={p} />)}
      </div>
    </section>
  )
}
