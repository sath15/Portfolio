import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/resume'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="resume" className="py-24 md:py-32 border-t border-ink-border bg-ink-soft/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 lg:px-8">
        {/* Resume */}
        <div className="rounded-2xl border border-ink-border p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-24">
          <div>
            <p className="section-eyebrow text-gold text-xs uppercase mb-3">Resume</p>
            <h3 className="font-display text-2xl md:text-3xl text-paper">The full, one-page version.</h3>
            <p className="mt-2 text-paper-muted text-sm">Education, skills, projects, and experience in a single PDF.</p>
          </div>
          {/* Placeholder — replace href with the hosted resume PDF, e.g. /resume.pdf */}
          <a
            href="#"
            aria-disabled="true"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-ink px-6 py-3 text-sm font-medium hover:bg-gold-soft transition-colors whitespace-nowrap"
          >
            <DownloadIcon className="w-4 h-4" />
            Download resume (PDF)
          </a>
        </div>

        {/* Contact */}
        <div id="contact" className="text-center max-w-2xl mx-auto">
          <p className="section-eyebrow text-gold text-xs uppercase mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-paper">
            Let&apos;s connect and build something meaningful.
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 text-sm font-medium hover:bg-gold-soft transition-colors w-full sm:w-auto justify-center"
            >
              <MailIcon className="w-4 h-4" />
              {profile.email}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 font-mono text-sm text-paper-muted">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-gold transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              {profile.linkedinLabel}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-gold transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              {profile.githubLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
