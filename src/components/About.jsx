import { PROFILE } from '../data/data'

export default function About() {
  return (
    <section id="about" className="section anchor-offset">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2 space-y-5 text-white/85">
          <p>
            I'm a full‑stack web developer with a strong focus on front‑end craft. I love
            building accessible, user‑friendly interfaces and scalable systems using modern
            JavaScript/TypeScript ecosystems.
          </p>
          <p>
            Mission: leverage technology to solve real‑world problems with thoughtful, user‑centered
            design and clean, maintainable code—staying current with industry best practices.
          </p>
          <p>
            Recent work includes a PostgreSQL‑backed course platform and a growing library of polished
            browser games (from Solitaire to a full Chess engine) with mobile optimization, animations,
            and delightful UX details.
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl glass p-5 text-white/90">
            <p className="text-sm uppercase tracking-widest text-white/60">Quick Facts</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>📍 {PROFILE.location}</li>
              <li>🛠 Favorite stack: React • Next.js • TypeScript • Tailwind</li>
              <li>🎮 Game dev hobbyist (Canvas + Web Audio)</li>
              <li>🚀 Perf + accessibility champion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
