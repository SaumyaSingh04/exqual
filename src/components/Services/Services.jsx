import { useState, useEffect, useRef } from 'react'
import './Services.css'

const services = [
  {
    tag: '01',
    title: 'Management System Certification',
    badge: 'ISO Standards',
    desc: 'ISO 9001, ISO 14001, and ISO 45001 — quality, environment, and safety frameworks built to global standards.',
    points: ['ISO 9001 Quality Management Systems', 'ISO 14001 Environmental Management', 'ISO 45001 Occupational Health & Safety'],
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=700&q=85&auto=format&fit=crop&crop=faces,top',
    cta: 'Request Certification',
  },
  {
    tag: '02',
    title: 'Industry Specific Certification',
    badge: 'Sector Expertise',
    desc: 'Sector-specific certification for automotive, food safety, aerospace, and medical devices.',
    points: ['IATF 16949 Automotive Quality', 'ISO 22000 Food Safety Management', 'ISO 13485 Medical Devices'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=700&q=85&auto=format&fit=crop&crop=faces,top',
    cta: 'Explore Sectors',
  },
  {
    tag: '03',
    title: 'Product Certification',
    badge: 'Market Access',
    desc: 'CE marking, product testing, and regulatory approvals for unrestricted global market access.',
    points: ['CE Marking & Regulatory Approval', 'Independent Product Testing', 'Market Access Documentation'],
    img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&h=700&q=85&auto=format&fit=crop&crop=faces,top',
    cta: 'Start Approval Process',
  },
  {
    tag: '04',
    title: 'Compliance Audits',
    badge: 'Risk Mitigation',
    desc: 'Internal and external audits that identify gaps, reduce risk, and drive corrective action.',
    points: ['Internal Audit Programme Design', 'Regulatory Gap Analysis Reports', 'Corrective & Preventive Action Plans'],
    img: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=900&h=700&q=85&auto=format&fit=crop&crop=faces,top',
    cta: 'Schedule an Audit',
  },
  {
    tag: '05',
    title: 'Accreditation Support',
    badge: 'Body Accreditation',
    desc: 'Accreditation consulting for labs, inspection bodies, and certification organizations seeking global recognition.',
    points: ['ISO/IEC 17025 Laboratory Accreditation', 'ISO/IEC 17020 Inspection Bodies', 'ISO/IEC 17065 Certification Bodies'],
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&h=700&q=85&auto=format&fit=crop&crop=center',
    cta: 'Get Accredited',
  },
  {
    tag: '06',
    title: 'Inspection Services',
    badge: 'Verification',
    desc: 'Professional inspection across facilities, supply chains, and service environments — verified results, every time.',
    points: ['Manufacturing Floor Inspection', 'Supply Chain & Vendor Audits', 'Pre-shipment Verification'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=700&q=85&auto=format&fit=crop&crop=faces,top',
    cta: 'Book Inspection',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(true)
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef(null)
  const tabsRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setSectionVisible(true),
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const startAutoRotate = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setActive(prev => (prev + 1) % services.length)
        setVisible(true)
      }, 300)
    }, 4000)
  }

  useEffect(() => {
    startAutoRotate()
    return () => clearInterval(intervalRef.current)
  }, [])

  const switchTab = (i) => {
    if (i === active) return
    setVisible(false)
    setTimeout(() => { setActive(i); setVisible(true) }, 300)
    startAutoRotate()
  }

  const svc = services[active]

  return (
    <section className="services section-pad" id="services" ref={sectionRef}>
      <div className="container">

        <div className={`svc-header reveal${sectionVisible ? ' in' : ''}`}>
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title">Enterprise-Grade<br /><em>Compliance Solutions</em></h2>
          <p className="section-lead">Six specialized domains. One unified framework. Global certifications, delivered.</p>
        </div>

        <div className={`svc-tabs-wrap reveal${sectionVisible ? ' in' : ''}`}>
          <nav className="svc-tabs" role="tablist" aria-label="Service categories" ref={tabsRef}>
            {services.map((s, i) => (
              <button
                key={s.tag}
                role="tab"
                aria-selected={active === i}
                aria-controls="svc-panel"
                className={`svc-tab${active === i ? ' svc-tab--active' : ''}`}
                onClick={() => switchTab(i)}
              >
                <span className="svc-tab-num">{s.tag}</span>
                <span className="svc-tab-label">{s.title}</span>
              </button>
            ))}
          </nav>

        </div>

        <div
          id="svc-panel"
          role="tabpanel"
          className={`svc-showcase reveal${sectionVisible ? ' in' : ''}`}
        >
          <div className={`svc-inner${visible ? ' is-visible' : ' is-hidden'}`}>

            <div className="svc-content">
              <div className="svc-meta">
                <span className="svc-num-label">{svc.tag} / 06</span>
                <span className="svc-badge-inline">{svc.badge}</span>
              </div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-desc">{svc.desc}</p>

              <ul className="svc-benefits" aria-label="Key benefits">
                {svc.points.map(p => (
                  <li key={p}>
                    <span className="svc-check" aria-hidden="true">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="svc-cta">
                {svc.cta}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path d="M2.5 7.5h10M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="svc-visual">
              <div className="svc-img-frame">
                <img src={svc.img} alt={svc.title} loading="lazy" />
                <div className="svc-img-gradient" aria-hidden="true" />
                <div className="svc-img-badge" aria-hidden="true">
                  <span className="svc-img-badge-dot" />
                  {svc.badge}
                </div>
                <div className="svc-img-counter" aria-hidden="true">{svc.tag}</div>
              </div>
            </div>

          </div>
        </div>

        <div className={`svc-offer reveal${sectionVisible ? ' in' : ''}`}>
          <div className="svc-offer-header">
            <h2 className="svc-offer-heading">What We Offer</h2>
            <p className="svc-offer-desc">Certified compliance specialists delivering efficient, cost-effective solutions aligned to international standards — with full confidentiality.</p>
          </div>
          <div className="svc-offer-grid">
            {[
              { name: 'Management System Services', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=85&auto=format&fit=crop' },
              { name: 'Sustainability Services',      img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=85&auto=format&fit=crop' },
              { name: 'Industry Specific Services',  img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=85&auto=format&fit=crop' },
              { name: 'Product Specific Services',   img: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&q=85&auto=format&fit=crop' },
              { name: 'Cyber Security',              img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=85&auto=format&fit=crop' },
            ].map(({ name, img }) => (
              <div key={name} className="svc-offer-card">
                <div className="svc-offer-card-img">
                  <img src={img} alt={name} loading="lazy" />
                </div>
                <div className="svc-offer-card-body">
                  <span className="svc-offer-card-name">{name}</span>
                  <a href="#contact" className="svc-offer-read-more">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
