import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { end: 20,   suffix: '+', label: 'Years of Industry Expertise',    sub: 'Industry leadership since 2004' },
  { end: 6000, suffix: '+', label: 'Certified Clients',               sub: 'Across every major sector' },
  { end: 98,   suffix: '%', label: 'Success Rate',                    sub: 'Unmatched in the industry' },
  { end: 40,   suffix: '+', label: 'Countries Served',                sub: 'True global footprint' },
]

const isoBadges = [
  { num: 'ISO', label: '9001' },
  { num: 'ISO', label: '14001' },
  { num: 'ISO', label: '45001' },
  { num: 'IATF', label: '16949' },
]

function Counter({ end, suffix, duration = 1400 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * end))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Stats() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-band" id="stats" ref={ref}>
      <div className="container">
        <div className="stats-header reveal">
          <div className="stats-header-left">
            <span className="stats-kicker">Global Impact</span>
            <h2 className="stats-headline">
              Trusted by organizations<br /><em>worldwide.</em>
            </h2>
          </div>
          <div className="stats-iso-badges">
            {isoBadges.map(({ num, label }) => (
              <div className="iso-badge" key={label}>
                <span className="iso-badge-num">{num}</span>
                <span className="iso-badge-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stats-row">
          {stats.map(({ end, suffix, label, sub }, i) => (
            <div className={`stat-block reveal reveal-delay-${i + 1}`} key={i}>
              <div className="sb-accent" aria-hidden="true" />
              <span className="sb-num"><Counter end={end} suffix={suffix} /></span>
              <span className="sb-label">{label}</span>
              <span className="sb-sub">{sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
