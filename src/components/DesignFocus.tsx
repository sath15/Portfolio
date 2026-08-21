import { useReveal } from '../hooks/useReveal'
import { designFocusPoints } from '../data/resume'

export default function DesignFocus() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="focus" className="py-24 md:py-32 border-t border-ink-border bg-ink-soft/40">
      <div ref={ref} className="reveal max-w-6xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="section-eyebrow text-gold text-xs uppercase mb-4">Design &amp; Interaction Focus</p>
          <h2 className="font-display text-3xl md:text-4xl leading-tight">Where the design thinking shows up.</h2>
          <p className="mt-4 text-paper-muted">
            This isn't formal UX research — it's interaction and environment design practiced through building real
            XR projects, plus a habit of structuring complex ideas so they're easier to follow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-ink-border rounded-2xl overflow-hidden border border-ink-border">
          {designFocusPoints.map((point) => (
            <div key={point.title} className="bg-ink p-8 hover:bg-ink-surface transition-colors">
              <h3 className="font-display text-lg mb-3 text-paper">{point.title}</h3>
              <p className="text-sm text-paper-muted leading-relaxed">{point.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
