import { PROFILE } from '../data/data'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React, Vite, Tailwind & Framer Motion.</p>
        <div className="flex items-center gap-3">
          <a href="#hero" className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10">Back to top</a>
          <a href={PROFILE.socials.github} target="_blank" className="hover:text-white">GitHub</a>
          <a href={PROFILE.socials.linkedin} target="_blank" className="hover:text-white">LinkedIn</a>
          <a href={`sumedh.acharya@gmail.com`} className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  )
}
