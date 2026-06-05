import { useEffect, useRef } from 'react'
import './Hero.css'

const stats = [
  { n: '20+', l: 'Years Active' },
  { n: '6,000+', l: 'Enterprises Certified' },
  { n: '98%', l: 'First-Pass Rate' },
  { n: '40+', l: 'Countries' },
]

const trustBar = [
  'ISO Certification',
  'Compliance Audits',
  'Product Certification',
  'Inspection Services',
  'Accreditation Support',
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('in'))
    }, 80)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-inner container">

        {/* Left — text content */}
        <div className="hero-content">
          <div className="hero-badge reveal d1">
            <span className="badge-dot" />
            Global ISO &amp; Compliance Authority · Est. 2004
          </div>

          <h1 className="hero-headline reveal d2">
            Precision<br />
            <em>Compliance</em><br />
            Authority.
          </h1>

          <p className="hero-lead reveal d3">
            ExQual elevates enterprises to world-class standards — delivering ISO certifications and compliance frameworks that command global respect.
          </p>

          <div className="hero-actions reveal d4">
            <a href="#contact" className="h-btn-primary">
              Begin Engagement
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="h-btn-ghost">Explore Services</a>
          </div>

          <div className="hero-stats reveal d5">
            {stats.map(({ n, l }) => (
              <div className="hstat" key={l}>
                <span className="hstat-num">{n}</span>
                <span className="hstat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div className="hero-visual reveal d3">
          <div className="hero-img-glow" aria-hidden="true" />
          <div className="hero-img-container">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=90&auto=format&fit=crop"
              alt="Enterprise compliance professionals"
              className="hero-img"
            />
            <div className="hero-img-badge">
              <span className="hib-num">98%</span>
              <span className="hib-text">First-Pass<br />Certification Rate</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="container trust-bar-inner">
          <span className="trust-bar-label">Our Services</span>
          <div className="trust-bar-items">
            {trustBar.map((item, i) => (
              <span className="trust-item" key={i}>
                <span className="trust-dot" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
