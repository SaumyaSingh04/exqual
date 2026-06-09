import { useEffect, useRef } from 'react'
import './Process.css'

const stages = [
  {
    num: '01', phase: 'Engage', title: 'Strategic Discovery',
    body: 'Map your compliance gaps against the target framework before any documentation begins.',
    kpi: '2–3 wks', kpiLabel: 'Typical Sprint', above: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 3v3M14 22v3M3 14h3M22 14h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M6.5 6.5l2 2M19.5 19.5l2 2M6.5 21.5l2-2M19.5 8.5l2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="8.5" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 3" opacity="0.4"/>
      </svg>
    ),
  },
  {
    num: '02', phase: 'Design', title: 'Framework Development',
    body: 'Bespoke governance frameworks and documentation built precisely for your operations.',
    kpi: '100%', kpiLabel: 'Bespoke Delivery', above: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
        <circle cx="20.5" cy="20.5" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M20.5 18v5M18 20.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03', phase: 'Audit', title: 'Gap Assessment & Closure',
    body: 'Close every gap before the auditor arrives. Zero surprises, zero re-audits.',
    kpi: '98%', kpiLabel: 'First-Pass Rate', above: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 2.5L3.5 7v7c0 6.2 4.5 11.4 10.5 12.5C20 25.4 24.5 20.2 24.5 14V7L14 2.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9.5 14l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 8v1.5M14 18.5v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    num: '04', phase: 'Certify', title: 'Approval & Continuous Support',
    body: 'Certification secured. Ongoing surveillance keeps your compliance active and competitive.',
    kpi: '∞', kpiLabel: 'Ongoing Support', above: false,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="10.5" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 14l3.5 3.5L19 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="0.7" strokeDasharray="2 2.5" opacity="0.35"/>
      </svg>
    ),
  },
]

export default function Process() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    root.querySelectorAll('[data-reveal]').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="process" id="process" ref={ref}>
      <div className="container">

        <header className="proc-header" data-reveal style={{ transitionDelay: '0s' }}>
          <span className="eyebrow">The Pathway</span>
          <h2 className="section-title proc-title">Four Steps to <em>Certification.</em></h2>
          <p className="proc-sub">Structured, proven, and built for first-pass success.</p>
        </header>

       
        <div className="proc-timeline">

          {/* Spine row with nodes */}
          <div className="proc-spine-row">
            <div className="proc-rail">
              <div className="proc-rail-track" />
              <div className="proc-rail-fill" data-reveal data-rail style={{ transitionDelay: '0.2s' }} />
              <div className="proc-rail-arrow" data-reveal style={{ transitionDelay: '1.25s' }} />
            </div>
            {stages.map((s, i) => (
              <div className="proc-node-col" key={s.num}>
                <div className="proc-node" data-reveal style={{ transitionDelay: `${0.3 + i * 0.12}s` }}>
                  <div className="proc-node-pulse" />
                  <div className="proc-node-glow" />
                  <div className="proc-node-ring" />
                  <div className="proc-node-core">
                    <span className="proc-node-icon">{s.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Single panel row below spine */}
          <div className="proc-row">
            {stages.map((s, i) => (
              <div className="proc-col" key={s.num}
                data-reveal data-dir="down"
                style={{ transitionDelay: `${0.18 + i * 0.09}s` }}>
                <StagePanel stage={s} />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

function StagePanel({ stage }) {
  return (
    <article className="proc-panel" data-num={stage.num}>
      <div className="proc-panel-glass" />
      <div className="proc-panel-top">
        <span className="proc-panel-num">{stage.num}</span>
        <span className="proc-panel-sep">·</span>
        <span className="proc-panel-phase">{stage.phase}</span>
      </div>
      <h3 className="proc-panel-title">{stage.title}</h3>
      <p className="proc-panel-body">{stage.body}</p>
      <div className="proc-panel-metric">
        <span className="proc-metric-val">{stage.kpi}</span>
        <span className="proc-metric-lbl">{stage.kpiLabel}</span>
      </div>
      <div className="proc-panel-bar" />
    </article>
  )
}
