import { useEffect, useRef } from 'react'
import './Industries.css'

const industries = [
  {
    name: 'Healthcare & Medical',
    count: '420+ certified',
    img: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Information Technology',
    count: '810+ certified',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Manufacturing & Logistics',
    count: '1,200+ certified',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Construction & Real Estate',
    count: '560+ certified',
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Retail & Consumer Goods',
    count: '390+ certified',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Oil, Gas & Energy',
    count: '280+ certified',
    img: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Aerospace & Defence',
    count: '190+ certified',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80&auto=format&fit=crop',
  },
  {
    name: 'Food & Beverage',
    count: '640+ certified',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop',
  },
]

export default function Industries() {
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

        <div className="ind-grid">
          {industries.map(({ name, count, img }, i) => (
            <div className={`ind-card reveal d${Math.min(i % 4 + 1, 5)}`} key={name}>
              <div className="ind-card-img-wrap">
                <img src={img} alt={name} loading="lazy" />
                <div className="ind-card-overlay" />
              </div>
              <div className="ind-card-body">
                <span className="ind-card-name">{name}</span>
                <span className="ind-card-count">{count}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="ind-footer reveal">
          <span className="ind-footer-text">Regulated industries covered globally</span>
          <div className="ind-divider" />
          <span className="ind-footer-count">8 Core Sectors · 40+ Countries</span>
        </div>
      </div>
    </section>
  )
}
