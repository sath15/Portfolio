import { useReveal } from '../hooks/useReveal'
import { projects, type Project } from '../data/resume'

function ProjectCard({ project, reverse }: { project: Project; reverse: boolean }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal py-16 border-t border-ink-border ${
        reverse ? '' : ''
      }`}
    >
      {/* Content */}
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-gold border border-gold/30 rounded-full px-2.5 py-1">
            {project.code}
          </span>
          <span className="font-mono text-xs text-paper-dim uppercase tracking-wide">
            {project.domain}
          </span>
        </div>

        <h3 className="font-display text-2xl md:text-3xl mb-4">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] uppercase tracking-wide text-spatial-soft bg-spatial/10 border border-spatial/20 rounded-md px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <dl className="space-y-4 text-sm md:text-[15px] leading-relaxed">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-1">
              Problem
            </dt>
            <dd className="text-paper-muted">{project.problem}</dd>
          </div>

          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-1">
              Approach
            </dt>
            <dd className="text-paper-muted">{project.approach}</dd>
          </div>

          {project.design && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-1">
                Design &amp; interaction
              </dt>
              <dd className="text-paper-muted">{project.design}</dd>
            </div>
          )}

          <div>
            <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-1">
              Implementation
            </dt>
            <dd className="text-paper-muted">{project.implementation}</dd>
          </div>

          {project.result && (
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-1">
                Result
              </dt>
              <dd className="text-paper-muted">{project.result}</dd>
            </div>
          )}
        </dl>

        <div className="mt-6 pt-6 border-t border-ink-border">
          <p className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-3">
            Key features
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {project.features.map((f) => (
              <li
                key={f}
                className="text-sm text-paper-muted flex gap-2"
              >
                <span className="text-gold mt-1.5 block w-1 h-1 rounded-full bg-gold shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="py-24 md:py-32 border-t border-ink-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="reveal max-w-2xl">
          <p className="section-eyebrow text-gold text-xs uppercase mb-4">
            Featured Work
          </p>

          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Three projects, three ways of designing an experience.
          </h2>

          <p className="mt-4 text-paper-muted">
            Each is tagged with the domain it lives in — VR, mixed reality, or AI —
            rather than numbered by order.
          </p>
        </div>

        <div>
          {projects.map((p, i) => (
            <ProjectCard
              key={p.code}
              project={p}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}