import { useEffect, useRef } from 'react'
import './Hero.css'

const stats = [
  { n: '20+',    l: 'Years Active',     end: 20  },
  { n: '6,000+', l: 'Enterprises',      end: 6000 },
  { n: '98%',    l: 'First-Pass Rate',  end: 98  },
  { n: '40+',    l: 'Countries',        end: 40  },
]

const trustBadges = [
  'ISO Certification',
  'Compliance Audits',
  'Product Certification',
  'Inspection Services',
  'Accreditation Support',
]

function countUp(el, end, suffix, duration = 1200) {
  const start = performance.now()
  const isLarge = end >= 1000
  const step = ts => {
    const p = Math.min((ts - start) / duration, 1)
    const ease = 1 - Math.pow(1 - p, 3)
    const val = Math.round(ease * end)
    el.textContent = isLarge ? val.toLocaleString() + suffix : val + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.querySelectorAll('.reveal').forEach(el => el.classList.add('in'))
    }, 60)

    // counter animation on stats entering viewport
    const nums = ref.current?.querySelectorAll('.hstat-num[data-end]')
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target
        countUp(el, +el.dataset.end, el.dataset.suffix)
        io.unobserve(el)
      })
    }, { threshold: 0.5 })
    nums?.forEach(n => io.observe(n))

    return () => { clearTimeout(t); io.disconnect() }
  }, [])

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-inner container">

        {/* LEFT */}
        <div className="hero-content">
          <div className="h-kicker reveal d1">
            <span className="kicker-pill">Est. 2004</span>
            Global ISO &amp; Compliance Authority
          </div>

          <h1 className="h-headline reveal d2">
            The Standard<br />
            for <em>Enterprise</em><br />
            Compliance.
          </h1>

          <p className="h-descriptor reveal d3">
            ExQual elevates enterprises to world-class standards — delivering ISO certifications
            and compliance frameworks that command global respect in 40+ countries.
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
            <div className="hstats-rule" />
            <div className="hstats-row">
              {stats.map(({ n, l, end }) => {
                const suffix = n.replace(/[\d,]/g, '')
                return (
                  <div className="hstat" key={l}>
                    <span className="hstat-num" data-end={end} data-suffix={suffix}>{n}</span>
                    <span className="hstat-label">{l}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-visual reveal d2">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90&auto=format&fit=crop"
              alt="Enterprise compliance professionals"
              className="hero-img"
              loading="eager"
            />
            <div className="hero-img-overlay" aria-hidden="true" />
            <div className="hero-float-card">
              <div className="hfc-icon">✓</div>
              <div>
                <span className="hfc-num">98%</span>
                <span className="hfc-text">First-Pass Certification Rate</span>
              </div>
            </div>
            <div className="hero-float-badge">
              <span className="hfb-dot" />
              ISO Accredited Partner
            </div>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <span className="trust-bar-label">OUR SERVICES</span>
          <div className="trust-bar-divider" />
          <div className="trust-bar-track-wrap">
            <div className="trust-bar-track">
              {[...trustBadges, ...trustBadges].map((b, i) => (
                <span className="trust-item" key={i}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
