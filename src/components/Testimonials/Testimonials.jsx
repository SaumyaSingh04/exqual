import { useState, useEffect, useRef } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'TechBridge Solutions',
    country: 'United Kingdom',
    text: 'ExQual Compliance guided us through our ISO 9001 certification seamlessly. Their institutional knowledge and structured approach transformed what seemed daunting into a precise, manageable process.',
    cert: 'ISO 9001',
    initials: 'SM',
    color: '#A4294F',
  },
  {
    name: 'Rajiv Menon',
    role: 'Chief Executive Officer',
    company: 'Optima Manufacturing',
    country: 'India',
    text: "Within four months we achieved ISO 14001 certification. ExQual's hands-on consultants were not just advisors — they were embedded partners who genuinely invested in our outcome.",
    cert: 'ISO 14001',
    initials: 'RM',
    color: '#7A1F3D',
  },
  {
    name: 'Fatima Al-Rashid',
    role: 'Quality Assurance Manager',
    company: 'HealthCore Medical',
    country: 'UAE',
    text: 'The pre-audit framework ExQual uses is extraordinary. Every gap was closed before the certification body arrived. First-pass success is their standard, and we experienced exactly that.',
    cert: 'ISO 13485',
    initials: 'FA',
    color: '#C4395F',
  },
  {
    name: 'James Whitfield',
    role: 'Founder & Managing Director',
    company: 'BuildRight Construction',
    country: 'Australia',
    text: 'Exceptional at every stage. ExQual understood our sector complexities, designed a compliance architecture that actually integrates with how we operate, and delivered on every commitment.',
    cert: 'ISO 45001',
    initials: 'JW',
    color: '#8B2040',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setInterval(() => switchTo(i => (i + 1) % testimonials.length), 6000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const switchTo = (valOrFn) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(prev => typeof valOrFn === 'function' ? valOrFn(prev) : valOrFn)
      setAnimating(false)
    }, 280)
  }

  const t = testimonials[active]

  return (
    <section className="testi section-pad" id="testimonials" ref={sectionRef}>
      <div className="testi-bg" aria-hidden="true">
        <div className="testi-orb-a" style={{ background: t.color }} />
        <div className="testi-orb-b" />
      </div>

      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Client Voices</span>
          <h2 className="section-title">
            Trusted by Enterprises<br />
            <em className="title-em">Across the Globe.</em>
          </h2>
        </div>

        <div className="testi-layout">
          {/* Sidebar navigation */}
          <aside className="testi-sidebar reveal reveal-delay-1">
            {testimonials.map((item, i) => (
              <button
                key={i}
                className={`testi-tab ${i === active ? 'active' : ''}`}
                onClick={() => switchTo(i)}
                style={{ '--accent': item.color }}
              >
                <span className="ttab-avatar" style={{ background: item.color }}>
                  {item.initials}
                </span>
                <span className="ttab-body">
                  <span className="ttab-name">{item.name}</span>
                  <span className="ttab-company">{item.company}</span>
                </span>
                <span className="ttab-cert">{item.cert}</span>
              </button>
            ))}
          </aside>

          {/* Main glass card */}
          <div className={`testi-card reveal reveal-delay-2 ${animating ? 'exit' : 'enter'}`}>
            <div className="testi-card-glow" style={{ background: t.color }} aria-hidden="true" />

            <div className="testi-card-top">
              <span className="testi-cert-badge" style={{ borderColor: t.color, color: t.color }}>
                {t.cert}
              </span>
              <span className="testi-stars">{'★'.repeat(5)}</span>
            </div>

            <blockquote className="testi-quote">
              <span className="testi-quotemark" aria-hidden="true">&ldquo;</span>
              {t.text}
            </blockquote>

            <div className="testi-author">
              <div className="testi-avatar" style={{ background: t.color }}>
                {t.initials}
                <div className="testi-avatar-ring" style={{ borderColor: t.color }} />
              </div>
              <div className="testi-author-info">
                <span className="testi-name">{t.name}</span>
                <span className="testi-role">{t.role} · {t.company}</span>
                <span className="testi-country">{t.country}</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="testi-progress">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot ${i === active ? 'active' : ''}`}
                  style={i === active ? { background: t.color } : {}}
                  onClick={() => switchTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
