import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import DesignFocus from './components/DesignFocus'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] bg-gold text-ink px-4 py-2 rounded-full text-sm font-medium"
      >
        Skip to projects
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <DesignFocus />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
