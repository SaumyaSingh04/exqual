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
    accent: 'left',
  },
  {
    num: '02',
    tag: 'Proven Track Record',
    title: 'A 98% First-Pass Certification Rate',
    body: 'Our proprietary pre-audit framework eliminates surprises. We close every gap before the certification body arrives — resulting in a pass rate that stands as one of the highest in the industry and a reputation built entirely on outcomes.',
    metric: '98%',
    metricLabel: 'First-Pass Rate',
    accent: 'right',
  },
  {
    num: '03',
    tag: 'Enterprise Scale',
    title: 'Built for the Complexity of Large Organisations',
    body: 'From multinational manufacturers to regulated healthcare groups, our methodology scales. We design compliance architectures that integrate with your existing governance structures — not systems bolted on as an afterthought.',
    metric: '6,000+',
    metricLabel: 'Clients Certified',
    accent: 'left',
  },
  {
    num: '04',
    tag: 'Sustained Partnership',
    title: 'Compliance That Outlasts the Certificate',
    body: 'Certification is a milestone, not the destination. Our surveillance and maintenance programmes ensure your accreditation remains a living, competitive advantage — not a document that gathers dust until the next audit cycle.',
    metric: '40+',
    metricLabel: 'Countries Served',
    accent: 'right',
  },
]

export default function WhyChooseUs() {
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
    <section className="why section-pad" id="why-us" ref={ref}>
      <div className="why-bg" aria-hidden="true">
        <div className="why-orb-a" />
        <div className="why-orb-b" />
      </div>
      <div className="container">
        <div className="why-header reveal">
          <span className="eyebrow">Why ExQual</span>
          <h2 className="section-title">
            Not Just Certified.<br />
            <em className="title-em">Transformed.</em>
          </h2>
          <p className="section-lead">
            Four pillars that separate ExQual from every other compliance firm operating today.
          </p>
        </div>

        <div className="why-pillars">
          {pillars.map(({ num, tag, title, body, metric, metricLabel, accent }, i) => (
            <div
              className={`why-pillar reveal reveal-delay-${(i % 3) + 1}`}
              key={num}
              data-accent={accent}
            >
              <div className="pillar-left" data-num={num}>
                <div className="pillar-num-block">
                  <span className="pillar-num">{num}</span>
                  <span className="pillar-tag">{tag}</span>
                </div>
                <div className="pillar-metric-block">
                  <span className="pillar-metric">{metric}</span>
                  <span className="pillar-metric-label">{metricLabel}</span>
                </div>
              </div>
              <div className="pillar-divider" aria-hidden="true" />
              <div className="pillar-right">
                <h3 className="pillar-title">{title}</h3>
                <p className="pillar-body">{body}</p>
                <div className="pillar-line" aria-hidden="true" />
              </div>
              <div className="pillar-accent-bar" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
