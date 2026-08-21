import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-ink-border py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-paper-dim">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  )
}
