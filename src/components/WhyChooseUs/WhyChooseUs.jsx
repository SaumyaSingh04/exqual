import { useEffect, useRef, useState } from 'react'
import './WhyChooseUs.css'

function useCounter(target, active, duration = 1800) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = ts => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 4)) * target))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return val
}

const pillars = [
  {
    index: '01',
    tag: '6 Continents Coverage',
    stat: '6', suffix: ' Continents',
    body: 'Regulatory intelligence spanning six continents — institutional depth no generalist firm can replicate.',
    detail: 'Recognised across 48 regulatory jurisdictions.',
  },
  {
    index: '02',
    tag: '98% First-Pass Certification Rate',
    stat: '98', suffix: '%',
    body: 'Pre-audit gap closure that eliminates surprises before the certification body arrives.',
    detail: 'First-pass rate across all engagements since founding.',
  },
  {
    index: '03',
    tag: '320+ Compliance Frameworks Delivered',
    stat: '320', suffix: '+',
    body: 'Compliance architectures integrated with governance frameworks — not bolted on as afterthoughts.',
    detail: 'Enterprises trust ExQual to architect standards-grade compliance.',
  },
  {
    index: '04',
    tag: '94% Client Retention Rate',
    stat: '94', suffix: '%',
    body: 'Surveillance programmes that keep accreditation a living competitive advantage.',
    detail: 'Client retention rate reflecting long-term strategic partnership.',
  },
]

function Pillar({ pillar, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const count = useCounter(parseInt(pillar.stat), visible)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.25 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`wcu-pillar${visible ? ' in' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="wcu-pillar-node">
        <div className="wcu-pillar-dot" />
      </div>
      <div className="wcu-pillar-body-wrap">
        <div className="wcu-pillar-head">
          <span className="wcu-pillar-idx">{pillar.index}</span>
          <span className="wcu-pillar-tag">{pillar.tag}</span>
          <span className="wcu-pillar-num">{count}{pillar.suffix}</span>
        </div>
        <p className="wcu-pillar-text">{pillar.body}</p>
        <p className="wcu-pillar-detail">{pillar.detail}</p>
        <div className="wcu-pillar-line-fill" />
      </div>
    </div>
  )
}

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [anchorIn, setAnchorIn] = useState(false)
  const heroCount = useCounter(98, anchorIn, 2200)

  // Anchor reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnchorIn(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  // Scroll-driven line draw
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      const { top, height } = track.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(0, Math.min(1, (vh - top) / (height + vh * 0.3)))
      track.style.setProperty('--progress', progress)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="wcu section-pad" id="why-us" ref={sectionRef}>
      <div className="container">

        <div className={`wcu-eyebrow-row${anchorIn ? ' in' : ''}`}>
          <span className="eyebrow">ExQual in Numbers</span>
        </div>

        <div className="wcu-stage">

          {/* ── LEFT ANCHOR ── */}
          <div className={`wcu-anchor${anchorIn ? ' in' : ''}`}>
            <div className="wcu-anchor-grid-bg" />

            <div className="wcu-anchor-content">
              <p className="wcu-anchor-overline">Flagship Performance Metric</p>

              <div className="wcu-anchor-hero">
                <span className="wcu-anchor-big">{heroCount}</span>
                <span className="wcu-anchor-pct">%</span>
              </div>

              <p className="wcu-anchor-metric-label">First-Pass Certification Rate</p>

              <div className="wcu-anchor-rule" />

              <h2 className="wcu-anchor-headline">
                Not Just Compliance —<br /><em>Transformation.</em>
              </h2>

              <p className="wcu-anchor-desc">
                Across every engagement ExQual has led — from ISO&nbsp;9001 to AS9100 to
                IATF&nbsp;16949 — clients achieve certification on the first attempt.
                No re-audits. No surprises.
              </p>

              <div className="wcu-anchor-standards">
                {['ISO 9001', 'AS9100', 'IATF 16949', 'ISO 45001', 'ISO 14001'].map(s => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>

            <div className="wcu-anchor-glow" />
          </div>

          {/* ── RIGHT PILLAR TIMELINE ── */}
          <div className="wcu-timeline">
            <div className="wcu-timeline-track" ref={trackRef} />
            {pillars.map((p, i) => (
              <Pillar key={p.tag} pillar={p} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
