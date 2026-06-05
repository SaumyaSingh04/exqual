import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="#home" className="navbar-logo">
            <span className="logo-mark">Ex<em>Qual</em></span>
            <span className="logo-sub">Compliance</span>
          </a>

          <ul className="navbar-links">
            {navLinks.map(l => (
              <li key={l.label}>
                <a href={l.href} className="nav-link">{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <a href="#contact" className="nav-cta">Begin Engagement</a>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta mobile-cta" onClick={() => setMenuOpen(false)}>
              Begin Engagement
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
