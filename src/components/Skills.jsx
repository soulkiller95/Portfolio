import { SKILLS } from '../data/data'
import { motion } from 'framer-motion'

export default function Skills() {
  return (
    <section id="skills" className="section anchor-offset">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-300/80">My expertise</p>
        <h2 className="text-3xl sm:text-4xl font-bold">Skills & Technologies</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="group rounded-2xl glass p-4 text-white hover:bg-gradient-to-r from-blue-900 to-purple-900 hover:scale-[1.03] hover:shadow-lg hover:shadow-orange-500/10 transition duration-300 flex items-center justify-center"
          >
            <div className="font-medium">{s}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
