import { useEffect, useRef } from 'react'
import './Hero.css'

const stats = [
  { n: '20+',    l: 'Years Active' },
  { n: '6,000+', l: 'Enterprises' },
  { n: '98%',    l: 'First-Pass Rate' },
  { n: '40+',    l: 'Countries' },
]

const trustBadges = [
  'ISO Certification',
  'Compliance Audits',
  'Product Certification',
  'Inspection Services',
  'Accreditation Support',
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('in'))
    }, 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero" id="home" ref={ref}>
      {/* background wash */}
      <div className="hero-wash" aria-hidden="true" />

      <div className="hero-inner container">

        {/* ── LEFT ── */}
        <div className="hero-content">
          <div className="h-kicker reveal d1">
            <span className="kicker-dot" />
            Global ISO &amp; Compliance Authority · Est. 2004
          </div>

          <h1 className="h-headline reveal d2">
            Precision<br />
            <em>Compliance</em><br />
            <span className="hl-plain">Authority.</span>
          </h1>

          <p className="h-descriptor reveal d3">
            ExQual elevates enterprises to world-class standards — delivering ISO certifications
            and compliance frameworks that command global respect.
          </p>

          <div className="h-actions reveal d4">
            <a href="#contact" className="h-btn-primary">
              Begin Engagement
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="h-btn-ghost">Explore Services</a>
          </div>

          <div className="h-stats reveal d5">
            {stats.map(({ n, l }) => (
              <div className="hstat" key={l}>
                <span className="hstat-num">{n}</span>
                <span className="hstat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-visual reveal d2">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90&auto=format&fit=crop"
              alt="Enterprise compliance professionals"
              className="hero-img"
              loading="eager"
            />
            <div className="hero-float-card">
              <div className="hfc-icon">✓</div>
              <div>
                <span className="hfc-num">98%</span>
                <span className="hfc-text">First-Pass<br />Certification Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar">
        <div className="container trust-bar-inner">
          <span className="trust-bar-label">Our Services</span>
          <div className="trust-bar-divider" />
          <div className="trust-bar-items">
            {trustBadges.map(b => (
              <span className="trust-item" key={b}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
