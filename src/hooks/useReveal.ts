import { useEffect, useRef } from 'react'

/**
 * Adds a `reveal` class treatment to an element and toggles `is-visible`
 * once it scrolls into view. Respects prefers-reduced-motion implicitly
 * via the CSS override in index.css.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
