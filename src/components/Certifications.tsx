import { useReveal } from '../hooks/useReveal'
import { certifications, achievements } from '../data/resume'
import { MedalIcon } from './icons'

export default function Certifications() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="recognition" className="py-24 md:py-32 border-t border-ink-border">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="section-eyebrow text-gold text-xs uppercase mb-4">Certifications &amp; Achievements</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">Recognition</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="rounded-xl border border-ink-border p-5 flex items-start gap-3 hover:border-gold/40 transition-colors"
            >
              <MedalIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p className="text-sm text-paper-muted leading-snug">{cert}</p>
            </div>
          ))}
        </div>

        {achievements.map((a) => (
          <div key={a} className="rounded-xl border border-gold/30 bg-gold/5 p-5 flex items-start gap-3">
            <MedalIcon className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <p className="text-sm text-paper leading-snug">{a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
