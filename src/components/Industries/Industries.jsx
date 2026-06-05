import { useEffect, useRef } from 'react'
import {
  FiActivity, FiCpu, FiTruck, FiHome,
  FiShoppingBag, FiDroplet, FiZap, FiPackage
} from 'react-icons/fi'
import './Industries.css'

const industries = [
  { icon: FiActivity, name: 'Healthcare & Medical', count: '420+ certified' },
  { icon: FiCpu, name: 'Information Technology', count: '810+ certified' },
  { icon: FiTruck, name: 'Manufacturing & Logistics', count: '1,200+ certified' },
  { icon: FiHome, name: 'Construction & Real Estate', count: '560+ certified' },
  { icon: FiShoppingBag, name: 'Retail & Consumer Goods', count: '390+ certified' },
  { icon: FiDroplet, name: 'Oil, Gas & Energy', count: '280+ certified' },
  { icon: FiZap, name: 'Aerospace & Defence', count: '190+ certified' },
  { icon: FiPackage, name: 'Food & Beverage', count: '640+ certified' },
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
      <div className="ind-bg" aria-hidden="true">
        <div className="ind-orb-a" />
        <div className="ind-orb-b" />
        <div className="ind-grid-lines" />
      </div>
      <div className="container">
        <div className="section-header reveal">
          <span className="eyebrow">Who We Serve</span>
          <h2 className="section-title">
            Sector Expertise at<br />
            <em className="title-em">Enterprise Depth.</em>
          </h2>
          <p className="section-lead">
            Compliance architecture tailored to the regulatory complexities of eight critical global industries.
          </p>
        </div>

        <div className="ind-marquee-wrapper">
          <div className="ind-row ind-row-top">
            {[...industries.slice(0, 4), ...industries.slice(0, 4)].map((ind, i) => (
              <IndustryCard key={i} {...ind} />
            ))}
          </div>
          <div className="ind-row ind-row-btm">
            {[...industries.slice(4), ...industries.slice(4)].map((ind, i) => (
              <IndustryCard key={i} {...ind} />
            ))}
          </div>
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

function IndustryCard({ icon: Icon, name, count }) {
  return (
    <div className="ind-card">
      <div className="ind-card-inner">
        <div className="ind-icon-wrap">
          <div className="ind-icon-glass">
            <Icon size={20} />
          </div>
          <div className="ind-icon-ring" />
        </div>
        <div className="ind-card-text">
          <span className="ind-name">{name}</span>
          <span className="ind-count">{count}</span>
        </div>
        <div className="ind-card-arrow">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
