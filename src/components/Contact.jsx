import { PROFILE } from '../data/data'

export default function Contact() {
  return (
    <section id="contact" className="section anchor-offset">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-2 space-y-4">
          <div className="rounded-2xl glass p-6 text-white/85">
            <p>
              Want to collaborate, discuss a project, or just say hi? Drop a line and I'll get
              back as soon as possible.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${PROFILE.email}`} className="btn-primary">{PROFILE.email}</a>
              <a href={PROFILE.socials.linkedin} className="btn-ghost" target="_blank">LinkedIn</a>
              <a href={PROFILE.socials.github} className="btn-ghost" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl glass p-6 text-white/85">
            <p className="text-sm uppercase tracking-widest text-white/60">Status</p>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" /> Available for work
            </div>
            <p className="mt-3 text-sm text-white/70">Remote friendly • India (IST)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
