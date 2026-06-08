import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'TechBridge Solutions',
    country: 'United Kingdom',
    flag: '🇬🇧',
    text: 'ExQual Compliance guided us through our ISO 9001 certification seamlessly. Their institutional knowledge and structured approach transformed what seemed daunting into a precise, manageable process. Every consultant they deployed had lived experience in our industry.',
    cert: 'ISO 9001',
    initials: 'SM',
  },
  {
    name: 'Rajiv Menon',
    role: 'Chief Executive Officer',
    company: 'Optima Manufacturing',
    country: 'India',
    flag: '🇮🇳',
    text: "Within four months we achieved ISO 14001 certification. ExQual's consultants were not just advisors — they were embedded partners who genuinely invested in our outcome. The rigor they brought to every milestone was exceptional.",
    cert: 'ISO 14001',
    initials: 'RM',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Quality Assurance Manager',
    company: 'HealthCore Medical',
    country: 'UAE',
    flag: '🇦🇪',
    text: 'The pre-audit framework ExQual uses is extraordinary. Every gap was closed before the certification body arrived. First-pass success is their standard, not an aspiration — and it showed throughout our entire engagement.',
    cert: 'ISO 13485',
    initials: 'FA',
  },
  {
    name: 'James Whitfield',
    role: 'Founder & Managing Director',
    company: 'BuildRight Construction',
    country: 'Australia',
    flag: '🇦🇺',
    text: 'ExQual understood our sector complexities, designed a compliance architecture that integrates with how we operate, and delivered on every commitment. Their cross-industry depth is what sets them apart.',
    cert: 'ISO 45001',
    initials: 'JW',
  },
]

const certBadges = ['ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'ISO 13485', 'GDPR']

const clients = [
  { name: 'TechBridge Solutions', abbr: 'TBS' },
  { name: 'Optima Manufacturing', abbr: 'OM' },
  { name: 'HealthCore Medical', abbr: 'HCM' },
  { name: 'BuildRight Construction', abbr: 'BRC' },
  { name: 'Nexara Financial', abbr: 'NF' },
  { name: 'VerdaTech Group', abbr: 'VTG' },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => switchTo(i => (i + 1) % testimonials.length), 7000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const switchTo = (valOrFn) => {
    if (fading) return
    setFading(true)
    setTimeout(() => {
      setActiveIndex(valOrFn)
      setFading(false)
    }, 240)
  }

  const handleSwitch = (idx) => switchTo(idx)

  const ft = testimonials[activeIndex]
  const supporting = testimonials.map((t, i) => ({ ...t, idx: i })).filter((_, i) => i !== activeIndex)

  return (
    <section className="testi section-pad" id="testimonials" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className="testi-header reveal">
          <div className="testi-header-left">
            <span className="eyebrow">Client Voices</span>
            <h2 className="section-title">
              Trusted by Enterprises<br />
              <em className="title-em">Across the Globe.</em>
            </h2>
          </div>
          <div className="testi-header-right">
            <div className="testi-stat">
              <span className="testi-stat-num">200+</span>
              <span className="testi-stat-label">Certifications Delivered</span>
            </div>
            <div className="testi-stat-divider" />
            <div className="testi-stat">
              <span className="testi-stat-num">98%</span>
              <span className="testi-stat-label">First-Pass Success Rate</span>
            </div>
            <div className="testi-stat-divider" />
            <div className="testi-stat">
              <span className="testi-stat-num">40+</span>
              <span className="testi-stat-label">Countries Served</span>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="testi-grid reveal reveal-delay-1">

          {/* Featured Card */}
          <div className={`testi-featured ${fading ? 'testi-fade-out' : 'testi-fade-in'}`}>
            <div className="testi-featured-accent" />
            <div className="testi-featured-top">
              <span className="testi-cert">{ft.cert}</span>
              <div className="testi-stars-wrap">
                <span className="testi-stars">★★★★★</span>
                <span className="testi-stars-label">Verified Client</span>
              </div>
            </div>
            <blockquote className="testi-featured-quote">
              <span className="testi-qmark" aria-hidden="true">&ldquo;</span>
              {ft.text}
            </blockquote>
            <div className="testi-featured-footer">
              <div className="testi-featured-author">
                <div className="testi-avatar testi-avatar-lg">{ft.initials}</div>
                <div className="testi-author-info">
                  <p className="testi-author-name">{ft.name}</p>
                  <p className="testi-author-role">{ft.role} · {ft.company}</p>
                </div>
              </div>
              <div className="testi-featured-right">
                <span className="testi-location">{ft.flag} {ft.country}</span>
                <div className="testi-dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`testi-dot ${i === activeIndex ? 'active' : ''}`}
                      onClick={() => handleSwitch(i)}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Cards */}
          <div className="testi-supporting">
            {supporting.map((t) => (
              <button
                key={t.name}
                className="testi-support-card"
                onClick={() => handleSwitch(t.idx)}
              >
                <div className="tsc-top">
                  <div className="testi-avatar testi-avatar-sm">{t.initials}</div>
                  <div className="tsc-meta">
                    <span className="tsc-name">{t.name}</span>
                    <span className="tsc-company">{t.company} · {t.flag}</span>
                  </div>
                  <span className="tsc-cert">{t.cert}</span>
                </div>
                <p className="tsc-quote">{t.text.length > 100 ? t.text.slice(0, 100) + '…' : t.text}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Authority Strip */}
        <div className="testi-strip reveal reveal-delay-2">
          <span className="testi-strip-label">Trusted by</span>
          <div className="testi-strip-logos">
            {clients.map(c => (
              <div key={c.name} className="testi-logo-pill" title={c.name}>
                <span className="logo-abbr">{c.abbr}</span>
              </div>
            ))}
          </div>
          <div className="testi-strip-divider" />
          <div className="testi-cert-row">
            {certBadges.map(b => (
              <span key={b} className="testi-cert-chip">
                <svg width="7" height="7" viewBox="0 0 8 8" fill="none" aria-hidden="true"><circle cx="4" cy="4" r="3" fill="currentColor" opacity=".5"/></svg>
                {b}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
