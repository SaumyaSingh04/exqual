import { useEffect, useRef } from 'react'
import { FiAward, FiCheckCircle, FiPackage, FiSearch, FiShield, FiClipboard } from 'react-icons/fi'
import './Services.css'

const services = [
  {
    icon: FiAward, tag: '01',
    title: 'Management System Certification',
    desc: 'ISO 9001, ISO 14001, ISO 45001 — governance frameworks that elevate operational excellence to global standards.',
    featured: true,
  },
  {
    icon: FiCheckCircle, tag: '02',
    title: 'Industry Specific Certification',
    desc: 'Precision certification for automotive, food safety, medical devices, aerospace, and regulated industries worldwide.',
  },
  {
    icon: FiPackage, tag: '03',
    title: 'Product Certification',
    desc: 'CE marking, product testing and regulatory approvals — ensuring your products command global market access.',
  },
  {
    icon: FiSearch, tag: '04',
    title: 'Compliance Audits',
    desc: 'Deep-dive internal and external audits revealing regulatory gaps before they become enterprise-level liabilities.',
    featured: true,
  },
  {
    icon: FiShield, tag: '05',
    title: 'Accreditation Support',
    desc: 'End-to-end accreditation consulting for laboratories, inspection bodies, and certification authorities.',
  },
  {
    icon: FiClipboard, tag: '06',
    title: 'Inspection Services',
    desc: 'Rigorous professional inspection across manufacturing, supply chains, and mission-critical service environments.',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services section-pad" id="services" ref={ref}>
      <div className="svc-bg" aria-hidden="true">
        <div className="svc-orb svc-orb-a" />
        <div className="svc-orb svc-orb-b" />
        <div className="svc-grid-lines" />
      </div>
      <div className="container">
        <div className="svc-header-row reveal">
          <div>
            <span className="eyebrow">What We Offer</span>
            <h2 className="section-title">Services Built for<br /><em className="title-em">Enterprise Scale.</em></h2>
          </div>
          <p className="svc-header-lead">Six specialised disciplines, one integrated compliance authority — delivering certifications that open global doors.</p>
        </div>

        <div className="svc-mosaic">
          {services.map(({ icon: Icon, tag, title, desc, featured }, i) => (
            <div
              className={`svc-tile reveal reveal-delay-${(i % 4) + 1}${featured ? ' svc-tile--featured' : ''}`}
              key={title}
            >
              <div className="svc-tile-inner">
                <div className="svc-tile-top">
                  <span className="svc-tag">{tag}</span>
                  <div className="svc-icon-ring">
                    <div className="svc-icon-glass">
                      <Icon size={20} />
                    </div>
                  </div>
                </div>
                <div className="svc-tile-body">
                  <h3 className="svc-title">{title}</h3>
                  <p className="svc-desc">{desc}</p>
                </div>
                <div className="svc-tile-footer">
                  <span className="svc-learn">Learn more</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="svc-arrow" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {featured && <div className="svc-featured-glow" aria-hidden="true" />}
                <div className="svc-border-sweep" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
