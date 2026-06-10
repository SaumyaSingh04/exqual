import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './ServicePage.css'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <path d="M1.5 5.5l2.8 2.8 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2.5 7h9M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function PlusIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sp-faq-item sp-faq-item--${index}`}>
      <button className="sp-faq-q" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        {q}
        <span className="sp-faq-icon"><PlusIcon /></span>
      </button>
      <div className={`sp-faq-body${open ? ' open' : ''}`}>
        <p className="sp-faq-a">{a}</p>
      </div>
    </div>
  )
}

function FloatingOrbs() {
  return (
    <div className="sp-orbs" aria-hidden="true">
      <div className="sp-orb sp-orb--1" />
      <div className="sp-orb sp-orb--2" />
      <div className="sp-orb sp-orb--3" />
    </div>
  )
}

function ParticleGrid() {
  return (
    <div className="sp-particles" aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="sp-particle" style={{ '--i': i }} />
      ))}
    </div>
  )
}

export default function ServicePage({
  badge, title, titleEm, heroDesc, heroImg,
  stats, overviewTitle, overviewTitleEm, overviewBody,
  benefits, sidebarFeatures, services, steps, standards, faqs,
  ctaBandTitle, ctaBandSub,
}) {
  const [heroVisible, setHeroVisible] = useState(false)
  const [overviewRef, overviewVisible] = useInView(0.08)
  const [servicesRef, servicesVisible] = useInView(0.05)
  const [processRef, processVisible] = useInView(0.05)
  const [standardsRef, standardsVisible] = useInView(0.05)
  const [faqRef, faqVisible] = useInView(0.05)
  const [statsRef, statsVisible] = useInView(0.2)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const t = setTimeout(() => setHeroVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="sp-hero" ref={heroRef}>
          <FloatingOrbs />
          <ParticleGrid />
          <div className="sp-hero-glow" aria-hidden="true" />

          <div className="container">
            <nav className={`sp-breadcrumb${heroVisible ? ' visible' : ''}`} aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="sp-breadcrumb-sep">›</span>
              <Link to="/#services">Services</Link>
              <span className="sp-breadcrumb-sep">›</span>
              <span>{title}{titleEm ? ` ${titleEm}` : ''}</span>
            </nav>

            <div className="sp-hero-inner">
              <div className={`sp-hero-content${heroVisible ? ' visible' : ''}`}>
                <span className="sp-hero-eyebrow">{badge}</span>
                <h1 className="sp-hero-title">
                  {title}{titleEm && <><br /><em>{titleEm}</em></>}
                </h1>
                <p className="sp-hero-desc">{heroDesc}</p>
                <div className="sp-hero-actions">
                  <a href="#contact" className="sp-hero-cta">
                    Get Started <ArrowIcon />
                  </a>
                  <a href="#overview" className="sp-hero-secondary">Learn more ↓</a>
                </div>
              </div>

              <div
                className={`sp-hero-visual${heroVisible ? ' visible' : ''}`}
                style={{ '--rx': `${mousePos.y * 0.5}deg`, '--ry': `${mousePos.x * 0.5}deg` }}
              >
                <div className="sp-hero-card-3d">
                  <div className="sp-hero-img-wrap">
                    <img src={heroImg} alt={title} loading="eager" />
                    <div className="sp-hero-img-overlay" aria-hidden="true" />
                  </div>
                  <div className="sp-hero-img-badge">
                    <span className="sp-hero-img-dot" />
                    {badge}
                  </div>
                  <div className="sp-hero-floating-stat">
                    <span className="sp-hfs-value">98%</span>
                    <span className="sp-hfs-label">Success Rate</span>
                  </div>
                  <div className="sp-hero-floating-cert">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path d="M9 1l2.2 4.5 5 .7-3.6 3.5.85 4.95L9 12.35l-4.45 2.35.85-4.95L1.8 6.2l5-.7L9 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    </svg>
                    ISO Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="sp-stats-bar" ref={statsRef}>
          <div className="container">
            <div className="sp-stats-inner">
              {stats.map((s, i) => (
                <div key={s.label} className={`sp-stat-item${statsVisible ? ' visible' : ''}`} style={{ '--delay': `${i * 0.1}s` }}>
                  <span className="sp-stat-value">{s.value}</span>
                  <span className="sp-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── OVERVIEW ── */}
        <section className="sp-overview section-pad" id="overview" ref={overviewRef}>
          <div className="container">
            <div className={`sp-overview-grid${overviewVisible ? ' visible' : ''}`}>
              <div>
                <span className="sp-overview-eyebrow">Service Overview</span>
                <h2 className="sp-overview-title">
                  {overviewTitle}{overviewTitleEm && <><br /><em>{overviewTitleEm}</em></>}
                </h2>
                <p className="sp-overview-body">{overviewBody}</p>
                <ul className="sp-benefits-list">
                  {benefits.map((b, i) => (
                    <li key={b} className="sp-benefit-item" style={{ '--delay': `${i * 0.07}s` }}>
                      <span className="sp-benefit-check"><CheckIcon /></span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="sp-hero-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  Request a Consultation <ArrowIcon />
                </a>
              </div>
              <aside>
                <div className="sp-sidebar-card">
                  <div className="sp-sidebar-glow" aria-hidden="true" />
                  <p className="sp-sidebar-label">Ready to Start?</p>
                  <h3 className="sp-sidebar-title">Free Scoping Session</h3>
                  <p className="sp-sidebar-body">A senior consultant maps your roadmap, timeline, and investment — in 30 minutes. No obligation.</p>
                  <a href="#contact" className="sp-sidebar-cta">Request Free Consultation <ArrowIcon /></a>
                  <a href="/#services" className="sp-sidebar-secondary">← View all services</a>
                  <hr className="sp-sidebar-divider" />
                  <div className="sp-sidebar-features">
                    {sidebarFeatures.map(f => (
                      <span key={f} className="sp-sidebar-feature">
                        <span className="sp-sidebar-feature-dot" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── SERVICES INCLUDED ── */}
        <section className="sp-services section-pad" ref={servicesRef}>
          <div className="container">
            <div className={`sp-services-header${servicesVisible ? ' visible' : ''}`}>
              <span className="eyebrow">What's Included</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                Scope of <em>Delivery</em>
              </h2>
            </div>
            <div className="sp-services-grid">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`sp-service-card${servicesVisible ? ' visible' : ''}`}
                  style={{ '--delay': `${i * 0.08}s` }}
                >
                  <div className="sp-service-card-icon">{s.icon}</div>
                  <span className="sp-service-card-tag">{s.tag}</span>
                  <h3 className="sp-service-card-title">{s.title}</h3>
                  <p className="sp-service-card-desc">{s.desc}</p>
                  <div className="sp-service-card-shine" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="sp-process section-pad" ref={processRef}>
          <div className="sp-process-bg" aria-hidden="true" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className={`sp-process-header${processVisible ? ' visible' : ''}`}>
              <span className="eyebrow">Our Approach</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                How It <em>Works</em>
              </h2>
            </div>
            <div className="sp-process-steps">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={`sp-step${processVisible ? ' visible' : ''}`}
                  style={{ '--delay': `${i * 0.15}s` }}
                >
                  <div className="sp-step-num-wrap">
                    <div className="sp-step-num">0{i + 1}</div>
                    <div className="sp-step-ring" aria-hidden="true" />
                  </div>
                  <h4 className="sp-step-title">{s.title}</h4>
                  <p className="sp-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STANDARDS ── */}
        {standards && standards.length > 0 && (
          <section className="sp-standards section-pad" ref={standardsRef}>
            <div className="container">
              <div className={`sp-standards-header${standardsVisible ? ' visible' : ''}`}>
                <span className="eyebrow">Standards & Frameworks</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                  Applicable <em>Standards</em>
                </h2>
              </div>
              <div className="sp-standards-grid">
                {standards.map((s, i) => (
                  <div
                    key={s.code}
                    className={`sp-standard-chip${standardsVisible ? ' visible' : ''}`}
                    style={{ '--delay': `${i * 0.06}s` }}
                  >
                    <span className="sp-standard-code">{s.code}</span>
                    <span className="sp-standard-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA BAND ── */}
        <section className="sp-cta-band">
          <div className="sp-cta-band-shapes" aria-hidden="true">
            <div className="sp-cta-shape sp-cta-shape--1" />
            <div className="sp-cta-shape sp-cta-shape--2" />
          </div>
          <div className="container">
            <div className="sp-cta-band-inner">
              <div>
                <h2 className="sp-cta-band-title">{ctaBandTitle}</h2>
                <p className="sp-cta-band-sub">{ctaBandSub}</p>
              </div>
              <a href="#contact" className="sp-cta-band-btn">
                Begin Engagement <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        {faqs && faqs.length > 0 && (
          <section className="sp-faq section-pad" ref={faqRef}>
            <div className="container">
              <div className={`sp-faq-header${faqVisible ? ' visible' : ''}`}>
                <span className="eyebrow">Common Questions</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                  Frequently <em>Asked</em>
                </h2>
              </div>
              <div className="sp-faq-list" role="list">
                {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} index={i} />)}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}
