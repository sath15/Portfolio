import { useReveal } from '../hooks/useReveal'
import { skills } from '../data/resume'

export default function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-ink-border">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="section-eyebrow text-gold text-xs uppercase mb-4">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">Toolkit</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="rounded-2xl border border-ink-border p-6 hover:border-gold/40 transition-colors">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-paper-muted border border-ink-border rounded-md px-2.5 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
