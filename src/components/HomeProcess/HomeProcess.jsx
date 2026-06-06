import { useEffect, useRef } from 'react'
import './HomeProcess.css'

const steps = [
  {
    num: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2a9 9 0 1 0 0 18A9 9 0 0 0 11 2zm0 4v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Discovery',
    sub: 'Strategic Assessment',
    desc: 'We audit your existing systems, decode your market context, and engineer a precision certification roadmap unique to your enterprise.',
  },
  {
    num: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M12 15.5h7M15.5 12v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Architecture',
    sub: 'System Design',
    desc: 'Custom documentation, policies, and governance frameworks are crafted to align your operations with the target standard at a fundamental level.',
  },
  {
    num: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M4.22 17.78l1.42-1.42M16.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Implementation',
    sub: 'Operational Embedding',
    desc: 'Your team is trained, processes are embedded, and a quality culture is instilled — not layered on top of existing work.',
  },
  {
    num: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 11l5 5L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    title: 'Certification',
    sub: 'Validated & Authorised',
    desc: 'A rigorous internal audit closes every gap before the certification body arrives. We stand beside you for a seamless, confident outcome.',
  },
]

export default function HomeProcess() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.hp-reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hproc section-pad" id="process" ref={ref}>
      <div className="container">

        <div className="hproc-header hp-reveal">
          <span className="eyebrow">Our Process</span>
          <h2 className="section-title">How We Drive<br /><em>Consistent Results.</em></h2>
          <p className="section-lead">A proven four-step framework that turns strategy into sustainable business growth.</p>
        </div>

        <div className="hproc-track">
          {/* animated connector line — desktop only */}
          <div className="hproc-line" aria-hidden="true">
            <div className="hproc-line-fill" />
          </div>

          <div className="hproc-cards">
            {steps.map(({ num, icon, title, sub, desc }, i) => (
              <div
                className={`hproc-card hp-reveal hp-d${i + 1}`}
                key={num}
              >
                <span className="hproc-bg-num" aria-hidden="true">{num}</span>

                <div className="hproc-node">
                  <span className="hproc-node-ring" />
                  <span className="hproc-node-icon">{icon}</span>
                </div>

                <div className="hproc-body">
                  <span className="hproc-num">{num}</span>
                  <span className="hproc-sub">{sub}</span>
                  <h3 className="hproc-title">{title}</h3>
                  <p className="hproc-desc">{desc}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hproc-arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
