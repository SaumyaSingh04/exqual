import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollTo } from '../../utils/scrollTo'
import './Navbar.css'

const servicesItems = [
  {
    label: 'Management System Certification',
    href: '/services/management-system-certification',
    tag: 'ISO Standards',
    category: 'Certification',
    tags: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
    desc: 'Achieve ISO 9001, ISO 14001, ISO 45001 and other globally recognised management system certifications that demonstrate operational excellence.',
    img: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Industry Specific Certification',
    href: '/services/industry-specific-certification',
    tag: 'Sector-Tailored',
    category: 'Certification',
    tags: ['IATF 16949', 'AS9100', 'FSSC 22000'],
    desc: 'Sector-tailored certification programmes — from IATF 16949 for automotive to AS9100 for aerospace — ensuring full regulatory alignment within your vertical.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 6v6l7 4 7-4V6L9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M9 2v10M2 6l7 4 7-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Product Certification',
    href: '/services/product-certification',
    tag: 'Conformity Assessment',
    category: 'Assessment',
    tags: ['CE Marking', 'Safety', 'Performance'],
    desc: 'Third-party product conformity assessments that validate safety, performance, and compliance, opening doors to regulated markets worldwide.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4"/><path d="M6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Compliance Audits',
    href: '/services/compliance-audits',
    tag: 'Risk Management',
    category: 'Audit',
    tags: ['Gap Analysis', 'Risk', 'Regulatory'],
    desc: 'Rigorous gap analyses and full-scope compliance audits that surface risk early, protect your licence to operate, and satisfy regulator expectations.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5h12M3 9h8M3 13h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="14" cy="13" r="2.5" stroke="currentColor" strokeWidth="1.4"/><path d="M15.8 14.8l1.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Accreditation Support',
    href: '/services/accreditation-support',
    tag: 'Full Guidance',
    category: 'Advisory',
    tags: ['UKAS', 'DAkkS', 'Documentation'],
    desc: 'End-to-end guidance through accreditation bodies — documentation, readiness reviews, and representation — so your first submission is your best submission.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l2 4 4.5.7-3.25 3.15.77 4.48L9 12.1l-4.02 2.23.77-4.48L2.5 6.7 7 6 9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Inspection Services',
    href: '/services/inspection-services',
    tag: 'Independent Assurance',
    category: 'Inspection',
    tags: ['On-site', 'Remote', 'Supply Chain'],
    desc: 'Independent on-site and remote inspections across supply chains, construction, and manufacturing — delivering impartial reports you can act on.',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.4"/><path d="M12.5 12.5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M6 8h4M8 6v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
]

const aboutItems = [
  {
    label: 'Who We Are',
    href: '/about/who-we-are',
    tag: 'Est. 2004',
    category: 'Company',
    tags: ['20+ Years', '40+ Countries', 'ISO Accredited'],
    desc: 'ExQual Compliance is a globally recognised certification and compliance authority, trusted by 6,000+ enterprises across 40+ countries since 2004.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Our Process',
    href: '/about/our-process',
    tag: '4-Stage Methodology',
    category: 'Approach',
    tags: ['Discovery', 'Architecture', 'Audit', 'Certify'],
    desc: 'A proven four-stage engagement model — from strategic discovery to post-certification continuity — delivering a 98% first-pass rate across all engagements.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="4" cy="9" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="14" cy="9" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="4" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="9" cy="14" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M6 9h2M10 9h2M9 6v2M9 10v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  },
  {
    label: 'Why ExQual',
    href: '/about/why-exqual',
    tag: '98% First-Pass Rate',
    category: 'Differentiators',
    tags: ['6K+ Clients', '94% Retention', 'Global Reach'],
    desc: 'Not just certified — transformed. Our pre-audit gap closure eliminates surprises and turns compliance into a durable competitive advantage for your enterprise.',
    img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l2 4 4.5.7-3.25 3.15.77 4.48L9 12.1l-4.02 2.23.77-4.48L2.5 6.7 7 6 9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></svg>,
  },
  {
    label: 'Client Testimonials',
    href: '/about/client-testimonials',
    tag: '4.9 / 5 Rating',
    category: 'Social Proof',
    tags: ['600+ Reviews', 'Verified Clients', 'Global'],
    desc: 'Rated 4.9 out of 5 across 600+ verified client reviews. Enterprises in 40+ countries trust ExQual to deliver certification with precision and zero surprises.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=85',
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5h12M3 9h8M3 13h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [openMenu, setOpenMenu]   = useState(null)
  const [activeSvc, setActiveSvc] = useState(0)
  const [activeAbt, setActiveAbt] = useState(0)
  const [mobileExp, setMobileExp] = useState(null)
  const closeTimer                = useRef(null)
  const navRef                    = useRef(null)
  const scrollTo                  = useScrollTo()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [menuOpen])

  const openDrop  = (key) => { clearTimeout(closeTimer.current); setOpenMenu(key) }
  const closeDrop = ()    => { closeTimer.current = setTimeout(() => setOpenMenu(null), 150) }

  const svcOpen = openMenu === 'services'
  const abtOpen = openMenu === 'about'
  const curSvc  = servicesItems[activeSvc]
  const curAbt  = aboutItems[activeAbt]

  return (
    <header ref={navRef}>
      {/* ── Top Bar ── */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <a href="tel:+441234567890" className="topbar-item">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2.5 1.5h2.2l.9 2.3-.7.7a7.1 7.1 0 0 0 3.6 3.6l.7-.7 2.3.9v2.2A1 1 0 0 1 10.5 11 9 9 0 0 1 2 2.5a1 1 0 0 1 .5-.9z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +44 (0) 123 456 7890
            </a>
            <span className="topbar-sep" aria-hidden="true" />
            <a href="mailto:info@exqual.com" className="topbar-item">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <rect x="1" y="3" width="11" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4l5.5 3.5L12 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              info@exqual.com
            </a>
            <span className="topbar-sep" aria-hidden="true" />
            <span className="topbar-item topbar-badge">
              <span className="topbar-dot" />
              ISO Accredited Body
            </span>
          </div>
          <div className="topbar-right">
            <span className="topbar-item topbar-hours">Mon – Fri, 9:00 – 18:00 GMT</span>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <span className="logo-mark">Ex<em>Qual</em></span>
            <span className="logo-sub">Compliance</span>
          </Link>

          {/* Desktop nav */}
          <ul className="navbar-links">

            {/* Home */}
            <li><button className="nav-link nav-link-btn" onClick={() => scrollTo('home')}>Home</button></li>

            {/* Services dropdown */}
            <li className="has-mega" onMouseEnter={() => openDrop('services')} onMouseLeave={closeDrop}>
              <button
                className={`nav-link nav-link-btn ${svcOpen ? 'mega-active' : ''}`}
                aria-haspopup="true"
                aria-expanded={svcOpen}
              >
                Services
                <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`mega-menu ${svcOpen ? 'mega-menu--open' : ''}`} role="region" aria-label="Services menu">
                <div className="mega-accent-bar" />
                <div className="mega-inner">

                  <div className="mega-left">
                    <p className="mega-section-label">What We Offer</p>
                    <ul className="mega-list">
                      {servicesItems.map((s, i) => (
                        <li key={s.label} style={{ '--i': i }}>
                          <Link
                            to={s.href}
                            className={`mega-item ${activeSvc === i ? 'mega-item--active' : ''}`}
                            onMouseEnter={() => setActiveSvc(i)}
                            onClick={() => { setOpenMenu(null); setMenuOpen(false) }}
                          >
                            <span className={`mega-item-icon ${activeSvc === i ? 'mega-item-icon--active' : ''}`}>{s.icon}</span>
                            <span className="mega-item-text">
                              <span className="mega-item-label-row">
                                <span className="mega-item-label">{s.label}</span>
                              </span>
                              <span className="mega-item-sub-row">
                                <span className="mega-item-cat">{s.category}</span>
                                <span className="mega-item-tag">{s.tag}</span>
                              </span>
                            </span>
                            <svg className="mega-item-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <button className="mega-view-all" onClick={() => { setOpenMenu(null); scrollTo('services') }}>
                      View all services
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className="mega-divider" />

                  <div className="mega-preview">
                    <div className="mega-preview-img-wrap">
                      {servicesItems.map((s, i) => (
                        <img key={s.label} src={s.img} alt={s.label}
                          className={`mega-preview-img ${activeSvc === i ? 'mega-preview-img--visible' : ''}`} />
                      ))}
                      <div className="mega-preview-img-overlay" />
                      <span className="mega-preview-badge">{curSvc.tag}</span>
                    </div>
                    <div className="mega-preview-body">
                      <p className="mega-preview-eyebrow">Service Overview</p>
                      <h3 className="mega-preview-title" key={`st-${activeSvc}`}>{curSvc.label}</h3>
                      <p className="mega-preview-desc" key={`sd-${activeSvc}`}>{curSvc.desc}</p>
                      <div className="mega-preview-tags" key={`stags-${activeSvc}`}>
                        {curSvc.tags.map(t => <span key={t} className="mega-tag-chip">{t}</span>)}
                      </div>
                      <Link to={curSvc.href} className="mega-preview-cta" onClick={() => setOpenMenu(null)}>
                        Learn More
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            {/* About Us dropdown */}
            <li className="has-mega" onMouseEnter={() => openDrop('about')} onMouseLeave={closeDrop}>
              <button
                className={`nav-link nav-link-btn ${abtOpen ? 'mega-active' : ''}`}
                aria-haspopup="true"
                aria-expanded={abtOpen}
              >
                About Us
                <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`mega-menu ${abtOpen ? 'mega-menu--open' : ''}`} role="region" aria-label="About menu">
                <div className="mega-accent-bar" />
                <div className="mega-inner">

                  <div className="mega-left">
                    <p className="mega-section-label">Company</p>
                    <ul className="mega-list">
                      {aboutItems.map((a, i) => (
                        <li key={a.label} style={{ '--i': i }}>
                          <Link
                            to={a.href}
                            className={`mega-item ${activeAbt === i ? 'mega-item--active' : ''}`}
                            onMouseEnter={() => setActiveAbt(i)}
                            onClick={() => { setOpenMenu(null); setMenuOpen(false) }}
                          >
                            <span className={`mega-item-icon ${activeAbt === i ? 'mega-item-icon--active' : ''}`}>{a.icon}</span>
                            <span className="mega-item-text">
                              <span className="mega-item-label-row">
                                <span className="mega-item-label">{a.label}</span>
                              </span>
                              <span className="mega-item-sub-row">
                                <span className="mega-item-cat">{a.category}</span>
                                <span className="mega-item-tag">{a.tag}</span>
                              </span>
                            </span>
                            <svg className="mega-item-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <button className="mega-view-all" onClick={() => { setOpenMenu(null); scrollTo('why-us') }}>
                      Learn about us
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 6h7M6 2.5l3.5 3.5L6 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className="mega-divider" />

                  <div className="mega-preview">
                    <div className="mega-preview-img-wrap">
                      {aboutItems.map((a, i) => (
                        <img key={a.label} src={a.img} alt={a.label}
                          className={`mega-preview-img ${activeAbt === i ? 'mega-preview-img--visible' : ''}`} />
                      ))}
                      <div className="mega-preview-img-overlay" />
                      <span className="mega-preview-badge">{curAbt.tag}</span>
                    </div>
                    <div className="mega-preview-body">
                      <p className="mega-preview-eyebrow">About ExQual</p>
                      <h3 className="mega-preview-title" key={`at-${activeAbt}`}>{curAbt.label}</h3>
                      <p className="mega-preview-desc" key={`ad-${activeAbt}`}>{curAbt.desc}</p>
                      <div className="mega-preview-tags" key={`atags-${activeAbt}`}>
                        {curAbt.tags.map(t => <span key={t} className="mega-tag-chip">{t}</span>)}
                      </div>
                      <Link to={curAbt.href} className="mega-preview-cta" onClick={() => setOpenMenu(null)}>
                        Learn More
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            {/* Contact Us */}
            <li><Link to="/contact" className="nav-link">Contact Us</Link></li>

          </ul>

          {/* Right CTA */}
          <div className="navbar-right">
            <Link to="/contact" className="nav-cta">Begin Engagement</Link>
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <button className="mobile-link" onClick={() => { scrollTo('home'); setMenuOpen(false) }}>Home</button>

            <div className="mobile-group">
              <button
                className="mobile-group-header"
                onClick={() => setMobileExp(v => v === 'services' ? null : 'services')}
              >
                Services
                <svg className={`mobile-chevron ${mobileExp === 'services' ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileExp === 'services' && (
                <div className="mobile-sub">
                  {servicesItems.map(s => (
                    <Link key={s.label} to={s.href} className="mobile-sub-link" onClick={() => setMenuOpen(false)}>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mobile-group">
              <button
                className="mobile-group-header"
                onClick={() => setMobileExp(v => v === 'about' ? null : 'about')}
              >
                About Us
                <svg className={`mobile-chevron ${mobileExp === 'about' ? 'open' : ''}`} width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {mobileExp === 'about' && (
                <div className="mobile-sub">
                  {aboutItems.map(a => (
                    <Link key={a.label} to={a.href} className="mobile-sub-link" onClick={() => setMenuOpen(false)}>
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link to="/contact" className="nav-cta mobile-cta" onClick={() => setMenuOpen(false)}>Begin Engagement</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
