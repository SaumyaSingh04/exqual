import { useEffect, useRef, useState } from 'react'
import './WhyChooseUs.css'

function useCountUp(target, duration = 1400, started = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!started) return
    const isFloat = target % 1 !== 0
    const start = performance.now()
    const raf = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setValue(isFloat ? +(target * ease).toFixed(1) : Math.round(target * ease))
      if (p < 1) requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [started, target, duration])
  return value
}

function StatNumber({ raw, started, delay = 0 }) {
  const [go, setGo] = useState(false)
  useEffect(() => { if (started) { const t = setTimeout(() => setGo(true), delay); return () => clearTimeout(t) } }, [started, delay])
  const numeric = parseFloat(raw.replace(/[^0-9.]/g, ''))
  const suffix = raw.replace(/[0-9.]/g, '')
  const count = useCountUp(numeric, 1400, go)
  return <>{count}{suffix}</>
}

const supporting = [
  { num: '20+',   label: 'Years of institutional authority', sub: 'Est. 2004' },
  { num: '6,000+',label: 'Enterprise clients certified', sub: 'Across all sectors' },
  { num: '40+',   label: 'Countries served globally', sub: 'Six continents' },
]

const pillars = [
  { index: '01', tag: 'Global Authority',      body: 'Regulatory intelligence across six continents — institutional depth no generalist can replicate.' },
  { index: '02', tag: 'Proven Track Record',   body: 'Pre-audit gap closure that eliminates surprises before the certification body arrives.' },
  { index: '03', tag: 'Enterprise Scale',      body: 'Compliance architectures integrated with existing governance — not bolted on.' },
  { index: '04', tag: 'Sustained Partnership', body: 'Surveillance programmes that keep accreditation a living competitive advantage.' },
]

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.12 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="why section-pad" id="why-us" ref={sectionRef}>
      <div className="container">

        <div className={`why-header${visible ? ' in' : ''}`}>
          <span className="eyebrow">Why ExQual</span>
          <h2 className="section-title">Not Just Certified.<br /><em>Transformed.</em></h2>
        </div>

        {/* ── METRICS STAGE ── */}
        <div className={`why-stage${visible ? ' in' : ''}`}>

          {/* Hero metric */}
          <div className="why-hero-metric">
            <div className="why-hero-bg-rule" />
            <span className="why-hero-eyebrow">First-Pass Certification Rate</span>
            <p className="why-hero-num">
              <StatNumber raw="98%" started={visible} delay={200} />
            </p>
            <p className="why-hero-descriptor">
              Industry average sits near 60 %. Our pre-audit framework closes every gap before the assessor arrives.
            </p>
            <div className="why-hero-badge">Industry benchmark: ~60%</div>
          </div>

          {/* Supporting metrics */}
          <div className="why-support-col">
            {supporting.map(({ num, label, sub }, i) => (
              <div className={`why-support-item d${i + 1}${visible ? ' in' : ''}`} key={label}>
                <div className="why-support-num">
                  <StatNumber raw={num} started={visible} delay={400 + i * 150} />
                </div>
                <div className="why-support-meta">
                  <span className="why-support-label">{label}</span>
                  <span className="why-support-sub">{sub}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── DIFFERENTIATORS STRIP ── */}
        <div className="why-pillars">
          {pillars.map(({ index, tag, body }, i) => (
            <div className={`why-pillar d${i + 1}${visible ? ' in' : ''}`} key={tag}>
              <span className="why-pillar-index">{index}</span>
              <div className="why-pillar-content">
                <span className="why-pillar-tag">{tag}</span>
                <p className="why-pillar-body">{body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
