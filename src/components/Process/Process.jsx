import { useEffect, useRef } from 'react'
import { FiMessageSquare, FiLayout, FiSettings, FiCheckSquare, FiClipboard, FiAward } from 'react-icons/fi'
import './Process.css'

const steps = [
  { icon: FiMessageSquare, num: '01', title: 'Discovery', sub: 'Strategic Assessment', desc: 'We audit your systems and engineer a precision certification roadmap unique to your enterprise.' },
  { icon: FiLayout, num: '02', title: 'Architecture', sub: 'System Design', desc: 'Custom documentation, policies, and governance frameworks aligned with the target standard.' },
  { icon: FiSettings, num: '03', title: 'Implementation', sub: 'Operational Embedding', desc: 'Your team is trained and processes are embedded — not layered on top of existing work.' },
  { icon: FiCheckSquare, num: '04', title: 'Validation', sub: 'Pre-Audit Readiness', desc: 'A rigorous internal audit closes every gap before the certification body arrives.' },
  { icon: FiClipboard, num: '05', title: 'Certification', sub: 'External Audit Support', desc: 'Our consultants stand beside you through the external audit for a confident outcome.' },
  { icon: FiAward, num: '06', title: 'Authority', sub: 'Ongoing Compliance', desc: 'Continuous surveillance support maintains your certified standing and competitive advantage.' },
]

export default function Process() {
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
    <section className="process section-pad" id="process" ref={ref}>
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">The Pathway</span>
          <h2 className="section-title">Your Certification Journey</h2>
          <p className="section-lead">Six precision-engineered stages — from discovery to authority.</p>
        </div>

        <div className="proc-grid">
          {steps.map(({ icon: Icon, num, title, sub, desc }, i) => (
            <div className="proc-card reveal" key={num} style={{ transitionDelay: `${i * 0.05}s` }}>
              <div className="proc-card-top">
                <div className="proc-icon-wrap">
                  <Icon size={18} />
                </div>
                <span className="proc-num">{num}</span>
              </div>
              <div className="proc-sub">{sub}</div>
              <h3 className="proc-title">{title}</h3>
              <p className="proc-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
