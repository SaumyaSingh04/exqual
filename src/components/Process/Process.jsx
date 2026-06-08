import { useEffect, useRef } from 'react'
import './Process.css'

const stages = [
  {
    num: '01', phase: 'Engage', title: 'Strategic Discovery',
    body: 'Precision mapping of your compliance posture. Every gap identified against the target framework before a single document is written.',
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
    num: '02', phase: 'Design', title: 'Architecture & Build',
    body: 'Governance frameworks embedded into operations — not layered on top. Bespoke documentation built for your exact context.',
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
    num: '03', phase: 'Audit', title: 'Gap Closure & Review',
    body: 'Rigorous pre-audit remediation across every control domain. We close every gap before your auditor opens a checklist.',
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
    num: '04', phase: 'Certify', title: 'Authority & Continuity',
    body: 'Certification achieved. Continuous surveillance turns compliance into a durable competitive advantage.',
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
          <span className="eyebrow">
            The Pathway
          </span>
          <h2 className="section-title proc-title">
            From Engagement to <em>Authority.</em>
          </h2>
          <p className="proc-sub">Four stages. One outcome — certification that holds.</p>

        </header>

        <div className="proc-index" data-reveal style={{ transitionDelay: '0.08s' }}>
          {stages.map((s, i) => (
            <div className="proc-index-item" key={s.num} style={{ '--i': i }}>
              <span className="proc-index-num">{s.num}</span>
              <span className="proc-index-slash">/</span>
              <span className="proc-index-phase">{s.phase}</span>
            </div>
          ))}
        </div>

        <div className="proc-timeline">

          {/* Top row */}
          <div className="proc-row proc-row--top">
            {stages.map((s, i) => (
              <div className="proc-col" key={s.num}
                data-reveal data-dir="up"
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
                {s.above ? <StagePanel stage={s} pos="top" /> : <div className="proc-spacer" />}
              </div>
            ))}
          </div>

          {/* Spine */}
          <div className="proc-spine-row">
            <div className="proc-rail">
              <div className="proc-rail-track" />
              <div className="proc-rail-fill" data-reveal data-rail style={{ transitionDelay: '0.2s' }} />
              <div className="proc-rail-arrow" data-reveal style={{ transitionDelay: '1.25s' }} />
            </div>

            {stages.map((s, i) => (
              <div className="proc-node-col" key={s.num}>
                <div className={`proc-stem ${s.above ? 'proc-stem--down' : 'proc-stem--ghost'}`} />
                <div className="proc-node" data-reveal style={{ transitionDelay: `${0.3 + i * 0.12}s` }}>
                  <div className="proc-node-pulse" />
                  <div className="proc-node-glow" />
                  <div className="proc-node-ring" />
                  <div className="proc-node-core">
                    <span className="proc-node-icon">{s.icon}</span>
                  </div>
                </div>
                <div className={`proc-stem ${!s.above ? 'proc-stem--down' : 'proc-stem--ghost'}`} />
              </div>
            ))}
          </div>

          {/* Bottom row */}
          <div className="proc-row proc-row--bot">
            {stages.map((s, i) => (
              <div className="proc-col" key={s.num}
                data-reveal data-dir="down"
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
                {!s.above ? <StagePanel stage={s} pos="bot" /> : <div className="proc-spacer" />}
              </div>
            ))}
          </div>

        </div>

        <p className="proc-footnote" data-reveal style={{ transitionDelay: '0.65s' }}>
          End-to-end advisory from first contact to post-certification continuity
        </p>

      </div>
    </section>
  )
}

function StagePanel({ stage, pos }) {
  return (
    <article className={`proc-panel proc-panel--${pos}`} data-num={stage.num}>
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
