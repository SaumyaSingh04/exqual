import { useEffect, useRef } from 'react'
import './WhyChooseUs.css'

const pillars = [
  {
    num: '01',
    tag: 'Global Authority',
    title: 'Two Decades of Unrivalled Expertise',
    body: 'Since 2004, ExQual has operated at the intersection of precision and trust. Our consultants have navigated the most complex regulatory landscapes across 40+ countries — bringing institutional knowledge that no generalist firm can replicate.',
    metric: '20+',
    metricLabel: 'Years Active',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=85&auto=format&fit=crop',
  },
  {
    num: '02',
    tag: 'Proven Track Record',
    title: 'A 98% First-Pass Certification Rate',
    body: 'Our proprietary pre-audit framework eliminates surprises. We close every gap before the certification body arrives — resulting in a pass rate that stands as one of the highest in the industry.',
    metric: '98%',
    metricLabel: 'First-Pass Rate',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85&auto=format&fit=crop',
  },
  {
    num: '03',
    tag: 'Enterprise Scale',
    title: 'Built for the Complexity of Large Organisations',
    body: 'From multinational manufacturers to regulated healthcare groups, our methodology scales. We design compliance architectures that integrate with your existing governance structures — not systems bolted on as an afterthought.',
    metric: '6,000+',
    metricLabel: 'Clients Certified',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=85&auto=format&fit=crop',
  },
  {
    num: '04',
    tag: 'Sustained Partnership',
    title: 'Compliance That Outlasts the Certificate',
    body: 'Certification is a milestone, not the destination. Our surveillance and maintenance programmes ensure your accreditation remains a living, competitive advantage — not a document that gathers dust until the next audit cycle.',
    metric: '40+',
    metricLabel: 'Countries Served',
    img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=85&auto=format&fit=crop',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal, .fade-left, .fade-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="why section-pad" id="why-us" ref={ref}>
      <div className="container">
        <div className="why-header reveal">
          <span className="eyebrow">Why ExQual</span>
          <h2 className="section-title">Not Just Certified.<br /><em>Transformed.</em></h2>
          <p className="section-lead">Four pillars that separate ExQual from every other compliance firm operating today.</p>
        </div>

        <div className="why-pillars">
          {pillars.map(({ num, tag, title, body, metric, metricLabel, img }, i) => {
            const rev = i % 2 === 1
            return (
              <div className={`why-row${rev ? ' why-row--rev' : ''}`} key={num}>
                <div className={`why-img-col ${rev ? 'fade-right' : 'fade-left'}`}>
                  <div className="why-img-wrap">
                    <img src={img} alt={title} loading="lazy" />
                    <div className="why-metric-overlay">
                      <span className="why-metric-num">{metric}</span>
                      <span className="why-metric-lbl">{metricLabel}</span>
                    </div>
                  </div>
                </div>
                <div className={`why-content-col ${rev ? 'fade-left' : 'fade-right'}`}>
                  <span className="why-num-tag">{num} — {tag}</span>
                  <h3 className="why-title">{title}</h3>
                  <p className="why-body">{body}</p>
                  <div className="why-rule" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
