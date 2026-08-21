import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#focus', label: 'Design Focus' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#recognition', label: 'Recognition' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-ink-border' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
        <a href="#top" className="font-display text-sm tracking-[0.18em] text-paper">
          S. KOTHA
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-[13px] text-paper-muted">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-gold transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-ink-border px-4 py-1.5 text-[13px] font-mono text-paper hover:border-gold hover:text-gold transition-colors"
        >
          Let&apos;s connect
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-[1.5px] w-6 bg-paper transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-paper transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-paper transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-ink-border px-6 pb-6">
          <ul className="flex flex-col gap-4 font-mono text-sm text-paper-muted pt-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
