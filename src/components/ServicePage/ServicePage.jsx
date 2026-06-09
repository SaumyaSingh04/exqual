import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './ServicePage.css'

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

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="sp-faq-item">
      <button className="sp-faq-q" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        {q}
        <span className="sp-faq-icon"><PlusIcon /></span>
      </button>
      {open && <p className="sp-faq-a">{a}</p>}
    </div>
  )
}

export default function ServicePage({
  badge, title, titleEm, heroDesc, heroImg,
  stats, overviewTitle, overviewTitleEm, overviewBody,
  benefits, sidebarFeatures, services, steps, standards, faqs,
  ctaBandTitle, ctaBandSub,
}) {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.05 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="sp-hero">
          <div className="container">
            <nav className="sp-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="sp-breadcrumb-sep">›</span>
              <Link to="/#services">Services</Link>
              <span className="sp-breadcrumb-sep">›</span>
              <span>{title}{titleEm ? ` ${titleEm}` : ''}</span>
            </nav>
            <div className="sp-hero-inner">
              <div>
                <span className="sp-hero-eyebrow">{badge}</span>
                <h1 className="sp-hero-title">{title}{titleEm && <><br /><em>{titleEm}</em></>}</h1>
                <p className="sp-hero-desc">{heroDesc}</p>
                <div className="sp-hero-actions">
                  <a href="#contact" className="sp-hero-cta">
                    Get Started <ArrowIcon />
                  </a>
                  <a href="#overview" className="sp-hero-secondary">
                    Learn more ↓
                  </a>
                </div>
              </div>
              <div className="sp-hero-img-wrap">
                <img src={heroImg} alt={title} loading="eager" />
                <div className="sp-hero-img-badge">
                  <span className="sp-hero-img-dot" />
                  {badge}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="sp-stats-bar">
          <div className="container">
            <div className="sp-stats-inner">
              {stats.map(s => (
                <div key={s.label} className="sp-stat-item">
                  <span className="sp-stat-value">{s.value}</span>
                  <span className="sp-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="sp-overview section-pad" id="overview" ref={sectionRef}>
          <div className="container">
            <div className={`sp-overview-grid reveal${visible ? ' in' : ''}`}>
              <div>
                <span className="sp-overview-eyebrow">Service Overview</span>
                <h2 className="sp-overview-title">
                  {overviewTitle}{overviewTitleEm && <><br /><em>{overviewTitleEm}</em></>}
                </h2>
                <p className="sp-overview-body">{overviewBody}</p>
                <ul className="sp-benefits-list">
                  {benefits.map(b => (
                    <li key={b} className="sp-benefit-item">
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

        {/* Services included */}
        <section className="sp-services section-pad">
          <div className="container">
            <div className="sp-services-header">
              <span className="eyebrow">What's Included</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                Scope of <em>Delivery</em>
              </h2>
            </div>
            <div className="sp-services-grid">
              {services.map(s => (
                <div key={s.title} className="sp-service-card">
                  <div className="sp-service-card-icon">{s.icon}</div>
                  <span className="sp-service-card-tag">{s.tag}</span>
                  <h3 className="sp-service-card-title">{s.title}</h3>
                  <p className="sp-service-card-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="sp-process section-pad">
          <div className="container">
            <div className="sp-process-header">
              <span className="eyebrow">Our Approach</span>
              <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                How It <em>Works</em>
              </h2>
            </div>
            <div className="sp-process-steps">
              {steps.map((s, i) => (
                <div key={s.title} className="sp-step">
                  <div className="sp-step-num">0{i + 1}</div>
                  <h4 className="sp-step-title">{s.title}</h4>
                  <p className="sp-step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        {standards && standards.length > 0 && (
          <section className="sp-standards section-pad">
            <div className="container">
              <div className="sp-standards-header">
                <span className="eyebrow">Standards & Frameworks</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                  Applicable <em>Standards</em>
                </h2>
              </div>
              <div className="sp-standards-grid">
                {standards.map(s => (
                  <div key={s.code} className="sp-standard-chip">
                    <span className="sp-standard-code">{s.code}</span>
                    <span className="sp-standard-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA band */}
        <section className="sp-cta-band">
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

        {/* FAQ */}
        {faqs && faqs.length > 0 && (
          <section className="sp-faq section-pad">
            <div className="container">
              <div className="sp-faq-header">
                <span className="eyebrow">Common Questions</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.4rem)' }}>
                  Frequently <em>Asked</em>
                </h2>
              </div>
              <div className="sp-faq-list" role="list">
                {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
