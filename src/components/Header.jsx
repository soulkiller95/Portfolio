import { PROFILE } from '../data/data'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
        <a href="#hero" className="text-white font-semibold font-size=25px" >{PROFILE.name}</a>
        <div className="hidden gap-6 text-white/80 sm:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="#contact" className="btn-primary">Get in touch</a>
      </nav>
    </header>
  )
}
