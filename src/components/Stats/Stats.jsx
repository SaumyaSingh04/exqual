import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const stats = [
  { end: 20, suffix: '+', label: 'Years of Authority', sub: 'Industry leadership since 2004' },
  { end: 6000, suffix: '+', label: 'Enterprises Certified', sub: 'Across every major sector' },
  { end: 98, suffix: '%', label: 'First-Pass Rate', sub: 'Unmatched in the industry' },
  { end: 40, suffix: '+', label: 'Countries Served', sub: 'True global footprint' },
]

function Counter({ end, suffix, duration = 2000 }) {
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
      <div className="stats-band-bg" aria-hidden="true">
        <div className="sb-line-top" />
        <div className="sb-line-btm" />
        <div className="sb-orb" />
      </div>
      <div className="container">
        <div className="stats-row">
          {stats.map(({ end, suffix, label, sub }, i) => (
            <div className={`stat-block reveal reveal-delay-${i + 1}`} key={label}>
              <span className="sb-num">
                <Counter end={end} suffix={suffix} />
              </span>
              <span className="sb-label">{label}</span>
              <span className="sb-sub">{sub}</span>
              {i < stats.length - 1 && <div className="sb-sep" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
