import { useEffect, useRef } from 'react'
import './Industries.css'

const FALLBACKS = [
  'linear-gradient(135deg,#1a1a2e 0%,#16213e 100%)',
  'linear-gradient(135deg,#0d1b2a 0%,#1b4332 100%)',
  'linear-gradient(135deg,#2d1b69 0%,#11998e 100%)',
  'linear-gradient(135deg,#373b44 0%,#4286f4 100%)',
  'linear-gradient(135deg,#141e30 0%,#243b55 100%)',
  'linear-gradient(135deg,#1a1a1a 0%,#4a1942 100%)',
  'linear-gradient(135deg,#0f2027 0%,#203a43 100%)',
  'linear-gradient(135deg,#2c3e50 0%,#3d5a80 100%)',
]

const industries = [
  {
    name: 'Manufacturing',
    count: '1,200+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=1200&q=85&auto=format&fit=crop',
    size: 'hero',
  },
  {
    name: 'Healthcare',
    count: '420+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=85&auto=format&fit=crop',
    size: 'tall',
  },
  {
    name: 'Information Technology',
    count: '810+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=85&auto=format&fit=crop',
    size: 'normal',
  },
  {
    name: 'Construction',
    count: '560+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1590578772584-e30a080cf5b2?w=800&q=85&auto=format&fit=crop',
    size: 'normal',
  },
  {
    name: 'Aerospace & Defence',
    count: '190+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=85&auto=format&fit=crop',
    size: 'wide',
  },
  {
    name: 'Energy',
    count: '280+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=85&auto=format&fit=crop',
    size: 'normal',
  },
  {
    name: 'Retail',
    count: '390+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&q=85&auto=format&fit=crop',
    size: 'normal',
  },
  {
    name: 'Food & Beverage',
    count: '640+',
    label: 'certified clients',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85&auto=format&fit=crop',
    size: 'normal',
  },
]

function Tile({ name, count, label, img, size, index }) {
  const handleError = e => {
    e.currentTarget.style.display = 'none'
    e.currentTarget.parentElement.style.background = FALLBACKS[index % FALLBACKS.length]
  }

  return (
    <div className={`ind-tile ind-tile--${size}`}>
      <img src={img} alt={name} loading="lazy" onError={handleError} />
      <div className="ind-tile-overlay" />
      <div className="ind-tile-content">
        {size === 'hero' && (
          <div className="ind-tile-stat">
            <span className="ind-tile-num">{count}</span>
            <span className="ind-tile-lbl">{label}</span>
          </div>
        )}
        <span className="ind-tile-name">{name}</span>
        {size !== 'hero' && <span className="ind-tile-count">{count}</span>}
        <div className="ind-tile-line" />
      </div>
    </div>
  )
}

export default function Industries() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.06 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="industries section-pad" id="industries" ref={ref}>
      <div className="container">

        <div className="ind-header reveal">
          <span className="eyebrow">Who We Serve</span>
          <h2 className="section-title">
            Sector Expertise at<br />
            <em>Enterprise Depth.</em>
          </h2>
          <p className="section-lead">
            Compliance architecture tailored to the regulatory complexities of eight critical global industries.
          </p>
        </div>

        <div className="ind-bento reveal d1">
          {industries.map((ind, i) => (
            <Tile key={ind.name} {...ind} index={i} />
          ))}
        </div>

        <div className="ind-meta reveal d2">
          <div className="ind-meta-pill">8 regulated sectors</div>
          <div className="ind-meta-dot" />
          <div className="ind-meta-pill">One compliance authority</div>
        </div>

      </div>
    </section>
  )
}
