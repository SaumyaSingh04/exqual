import { useEffect, useRef } from 'react'
import './CTA.css'

const STATS = [
  { value: '20+',   label: 'Years of Industry Expertise' },
  { value: '6,000+', label: 'Certified Clients'          },
  { value: '98%',   label: 'Success Rate'                },
]

const BADGES = [
  'ISO 9001', 'ISO 45001', 'ISO 14001', 'CE Mark', 'IATF 16949',
]

export default function CTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('cta-visible'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="cta-section" id="cta" ref={sectionRef}>
      <div className="cta-grid-pattern" aria-hidden="true" />

      <div className="container cta-shell">

        {/* ── LEFT ── */}
        <div className="cta-left">
          <span className="cta-eyebrow">Trusted Worldwide</span>

          <h2 className="cta-headline">
            Start Your<br />
            <em>Certification Journey.</em>
          </h2>

          <p className="cta-sub">
            Get a clear roadmap — certification scope, timeline, and strategy in one session.
          </p>

          {/* stat row */}
          <div className="cta-stats">
            {STATS.map(s => (
              <div className="cta-stat" key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          {/* badge strip */}
          <div className="cta-badges">
            {BADGES.map(b => (
              <span className="cta-badge" key={b}>{b}</span>
            ))}
          </div>
        </div>

        {/* ── RIGHT CARD ── */}
        <div className="cta-card">
          <div className="cta-card-glow" aria-hidden="true" />

          <p className="cta-card-eyebrow">Start Today — No Obligation</p>
          <h3 className="cta-card-title">Free Scoping<br />Session</h3>
          <p className="cta-card-body">
            A senior consultant maps your roadmap, timeline, and investment — in 30 minutes.
          </p>

          <a href="#contact" className="cta-card-btn">
            <span>Request Free Consultation</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>

          <a href="#services" className="cta-card-link">Explore our services →</a>

          <div className="cta-card-trust">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 16.77l-6.18 3.25L7 13.14 2 8.27l6.91-1.01L12 1z"/></svg>
            <span>Rated 4.9 / 5 across 600+ client reviews</span>
          </div>
        </div>

      </div>
    </section>
  )
}
