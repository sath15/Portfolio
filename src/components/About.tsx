import { useReveal } from '../hooks/useReveal'
import { education } from '../data/resume'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="py-24 md:py-32 border-t border-ink-border">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20">
        <div>
          <p className="section-eyebrow text-gold text-xs uppercase mb-4">About</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Technology, interaction, and AI — read as one discipline.
          </h2>
        </div>

        <div className="space-y-6 text-paper-muted text-base md:text-lg leading-relaxed">
          <p>
            I'm a Computer Science Engineering student who moves comfortably between building{' '}
            <span className="text-paper">Unity-based XR environments</span> and designing{' '}
            <span className="text-paper">AI systems</span> that have to work for real people, not just in a demo. What
            connects the two is the same question: how does someone actually experience this — whether "this" is a
            temple you're walking through in VR, or a voice interface a farmer uses in Telugu.
          </p>
          <p>
            I enjoy problems that sit at that intersection — where a technical system needs a thoughtful interaction
            layer to actually be usable, immersive, or clear.
          </p>

          <div className="pt-4 border-t border-ink-border">
            <h3 className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-4">Education</h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <p className="text-paper font-medium">{e.degree}</p>
                    <p className="text-sm text-paper-dim">
                      {e.institution} · {e.location}
                    </p>
                  </div>
                  <div className="text-sm font-mono text-paper-muted whitespace-nowrap">
                    {e.period} · {e.detail}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
