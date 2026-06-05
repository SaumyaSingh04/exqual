import { useEffect, useRef } from 'react'
import { FiMessageSquare, FiLayout, FiSettings, FiCheckSquare, FiClipboard, FiAward } from 'react-icons/fi'
import './Process.css'

const steps = [
  { icon: FiMessageSquare, num: '01', title: 'Discovery', sub: 'Strategic Assessment', desc: 'We audit your existing systems, decode your market context, and engineer a precision certification roadmap unique to your enterprise.' },
  { icon: FiLayout, num: '02', title: 'Architecture', sub: 'System Design', desc: 'Custom documentation, policies, and governance frameworks are crafted to align your operations with the target standard at a fundamental level.' },
  { icon: FiSettings, num: '03', title: 'Implementation', sub: 'Operational Embedding', desc: 'Your team is trained, processes are embedded, and a quality culture is instilled — not layered on top of existing work.' },
  { icon: FiCheckSquare, num: '04', title: 'Validation', sub: 'Pre-Audit Readiness', desc: 'A rigorous internal audit against certification criteria closes every gap before the certification body steps through your door.' },
  { icon: FiClipboard, num: '05', title: 'Certification', sub: 'External Audit Support', desc: 'Our consultants stand beside you through the external audit, managing the process for a seamless and confident outcome.' },
  { icon: FiAward, num: '06', title: 'Authority', sub: 'Ongoing Compliance', desc: 'Certified and sustained. Continuous surveillance support ensures your standing is maintained and leveraged for competitive advantage.' },
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
      <div className="proc-bg" aria-hidden="true">
        <div className="proc-orb-a" />
        <div className="proc-orb-b" />
        <div className="proc-grid" />
      </div>
      <div className="container">
        <div className="section-header centered reveal">
          <span className="eyebrow">The Pathway</span>
          <h2 className="section-title">Your Certification Journey</h2>
          <p className="section-lead">Six precision-engineered stages — from discovery to authority.</p>
        </div>

        <div className="proc-journey">
          {steps.map(({ icon: Icon, num, title, sub, desc }, i) => (
            <div className={`proc-step reveal reveal-delay-${(i % 3) + 1}`} key={num} data-side={i % 2 === 0 ? 'left' : 'right'}>
              <div className="proc-step-content" data-num={num}>
                <div className="proc-meta-row">
                  <span className="proc-num">{num}</span>
                  <span className="proc-sub">{sub}</span>
                </div>
                <h3 className="proc-title">{title}</h3>
                <p className="proc-desc">{desc}</p>
              </div>
              <div className="proc-node-col">
                <div className="proc-node">
                  <div className="proc-node-ring" />
                  <div className="proc-node-ring proc-node-ring-2" />
                  <div className="proc-node-icon">
                    <Icon size={20} />
                  </div>
                </div>
                {i < steps.length - 1 && <div className="proc-connector" />}
              </div>
              <div className="proc-step-mirror" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
