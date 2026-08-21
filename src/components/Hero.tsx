import { profile } from '../data/resume'
import { ArrowUpRight, DownloadIcon, GitHubIcon, LinkedInIcon } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
      {/* Signature: faint AR ground-plane grid, fading into the page — evokes spatial computing without going neon */}
      <div className="absolute inset-x-0 top-0 h-[560px] bg-grid-fade pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-24 right-[-10%] w-[520px] h-[520px] rounded-full bg-spatial/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <p className="section-eyebrow text-gold text-xs uppercase mb-6">Portfolio </p>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] max-w-3xl text-paper">
          {profile.name}
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl text-paper-muted font-display leading-snug">
          {profile.tagline}
        </p>

        <p className="mt-6 max-w-2xl text-base text-paper-dim leading-relaxed">{profile.intro}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-6 py-3 text-sm font-medium hover:bg-gold-soft transition-colors"
          >
            View projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-full border border-ink-border px-6 py-3 text-sm font-medium text-paper hover:border-gold hover:text-gold transition-colors"
          >
            <DownloadIcon className="w-4 h-4" />
            Download resume
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6 font-mono text-sm text-paper-muted">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-gold transition-colors"
          >
            <LinkedInIcon className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-gold transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
