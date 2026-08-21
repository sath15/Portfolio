import { useReveal } from '../hooks/useReveal'
import { internship, organizationRoles } from '../data/resume'

export default function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-ink-border bg-ink-soft/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="section-eyebrow text-gold text-xs uppercase mb-4">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">Internship &amp; organization roles</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Internship */}
          <div className="rounded-2xl border border-ink-border p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-spatial-soft mb-2">Internship</p>
            <h3 className="font-display text-xl mb-1 text-paper">{internship.title}</h3>
            <p className="text-sm text-paper-dim mb-1">{internship.organization}</p>
            <p className="text-sm font-mono text-paper-dim mb-6">
              {internship.location} · {internship.period}
            </p>
            <ul className="space-y-3">
              {internship.points.map((p) => (
                <li key={p} className="text-sm text-paper-muted leading-relaxed flex gap-2">
                  <span className="mt-1.5 block w-1 h-1 rounded-full bg-spatial shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Organization roles */}
          <div className="flex flex-col gap-10">
            {organizationRoles.map((role) => (
              <div key={role.role} className="rounded-2xl border border-ink-border p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-gold mb-2">Organization</p>
                <h3 className="font-display text-xl mb-1 text-paper">{role.role}</h3>
                <p className="text-sm text-paper-dim mb-1">{role.organization}</p>
                <p className="text-sm font-mono text-paper-dim mb-6">
                  {role.location} · {role.period}
                </p>
                <ul className="space-y-3">
                  {role.points.map((p) => (
                    <li key={p} className="text-sm text-paper-muted leading-relaxed flex gap-2">
                      <span className="mt-1.5 block w-1 h-1 rounded-full bg-gold shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
