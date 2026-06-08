import { useState, useRef, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'ARUN SHARMA',
    role: 'National GeM Support Manager - FUJIFILMS India Pvt. Ltd.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual delivered outstanding consulting services during our QMS and GEM registration process. Their depth of expertise, attention to detail, and commitment to client success ensured a smooth, efficient outcome. We truly appreciated their guidance and dedication, and would enthusiastically recommend them to others in similar regulatory environments."',
  },
  {
    name: 'SATISH V K',
    role: 'Chairman - Sharplex Filters (India) Pvt Ltd',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"They encouraged a strong culture of quality ownership across our organization, which led to meaningful employee engagement and sustainable improvements. Their ability to connect leadership vision with day-to-day actions was impressive. We saw real results and long-term value from their approach, and highly recommend their team to others."',
  },
  {
    name: 'TEJAS PARIK',
    role: 'Director - Upaj Investment and Finance Pvt. Ltd.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Veridix provided insightful, professional, and results-oriented support for our sustainability challenges. Their team brought strategic thinking and practical solutions that helped us advance key initiatives. We\'re extremely pleased with their service and would recommend them to any organization seeking measurable impact in this area."',
  },
  {
    name: 'PARAMVEER SINGH',
    role: 'CEO One Stop Packaging Inc',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"They consistently delivers exceptional service with a dedicated focus on long-term sustainable quality improvements. Their thorough approach and deep industry knowledge have made a tangible difference in our operations. We appreciate their professionalism and would confidently recommend them to others in need of high-impact consulting support."',
  },
  {
    name: 'GREG HALLER',
    role: 'CEO - Alorica Inc',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Working with ExQual gave us expert cybersecurity guidance that significantly strengthened our digital defenses. They offered top-quality solutions, clear communication, and timely execution throughout the process. Their team demonstrated professionalism and technical depth, which gave us full confidence. We highly recommend their services."',
  },
  {
    name: 'FATIMA AL-RASHID',
    role: 'Quality Assurance Manager - HealthCore Medical',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"The pre-audit framework ExQual uses is extraordinary. Every gap was closed before the certification body arrived. First-pass success is their standard, not an aspiration — and it showed throughout our entire ISO 13485 engagement."',
  },
  {
    name: 'RAJESH NAIR',
    role: 'Operations Head - Tata Consultancy Services',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual\'s systematic approach to process optimization transformed our operations significantly. Their team identified inefficiencies we had overlooked for years and provided actionable solutions. The ROI was evident within the first quarter. An exceptional consulting partner."',
  },
  {
    name: 'PRIYA MENON',
    role: 'Managing Director - GreenPath Solutions',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Their ISO 14001 implementation guidance was thorough and practical. ExQual ensured our entire team understood the environmental management requirements deeply. We passed our certification audit with zero non-conformances. Truly world-class consulting."',
  },
  {
    name: 'MICHAEL TORRES',
    role: 'VP of Compliance - BridgePoint Financial',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"We engaged ExQual for regulatory compliance support and were impressed at every step. Their consultants are knowledgeable, responsive, and genuinely invested in client success. They helped us build a compliance culture that will serve us for years to come."',
  },
  {
    name: 'SUNITA KAPOOR',
    role: 'Director Quality - Apollo MedTech',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual guided us through a complex multi-site QMS harmonization project with remarkable expertise. Their structured methodology and clear communication kept stakeholders aligned throughout. The outcome exceeded our expectations in both quality and timeline."',
  },
  {
    name: 'JAMES WHITFIELD',
    role: 'CEO - PrecisionTech Manufacturing',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"The ExQual team brought clarity to our IATF 16949 journey from day one. Their hands-on involvement and deep automotive quality knowledge made the entire process seamless. Our team gained confidence and competence that will deliver value long-term."',
  },
  {
    name: 'ANANYA BOSE',
    role: 'Head of Strategy - Infosys BPM',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"From gap analysis to final certification, ExQual was with us every step. Their proactive communication and in-depth industry knowledge set them apart from other consultants we have worked with. I would not hesitate to engage them again for future initiatives."',
  },
  {
    name: 'DAVID OKONKWO',
    role: 'Plant Manager - Siemens Energy Africa',
    avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual delivered an ISO 45001 implementation that genuinely improved safety culture on our plant floor. Their consultants engaged workers at every level, not just management. That inclusive approach made our safety improvements both credible and lasting."',
  },
  {
    name: 'LINDA ZHANG',
    role: 'Quality Director - HorizonPharma Ltd.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Partnering with ExQual for our GMP compliance project was one of the best decisions we made this year. Their pharmaceutical quality expertise is unmatched. They translated complex regulatory requirements into clear, executable steps our team could own immediately."',
  },
  {
    name: 'VIKRAM DESAI',
    role: 'Founder - NovaBuild Infrastructure',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual helped us establish a robust project quality management system from scratch. Their practical templates, training sessions, and on-site support accelerated our readiness significantly. We are now bidding on larger contracts with full confidence in our QMS."',
  },
]

const VISIBLE = 4

export default function Testimonials() {
  const [page, setPage] = useState(0)
  const [fading, setFading] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const totalPages = Math.ceil(testimonials.length / VISIBLE)
  const autoRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const go = (n) => {
    if (fading) return
    setFading(true)
    setTimeout(() => { setPage(n); setFading(false) }, 220)
  }

  const resetAuto = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => go((page + 1) % totalPages), 3500)
  }

  useEffect(() => {
    autoRef.current = setInterval(() =>
      setPage(p => { setFading(true); setTimeout(() => setFading(false), 220); return (p + 1) % totalPages })
    , 3500)
    return () => clearInterval(autoRef.current)
  }, [totalPages])

  const cards = testimonials.slice(page * VISIBLE, page * VISIBLE + VISIBLE)

  return (
    <section className="testi section-pad" id="testimonials" ref={ref}>
      <div className="container">
        <h2 className={`testi-heading reveal${visible ? ' in' : ''}`}>What Our Clients Say</h2>
        <p className={`testi-review-count reveal${visible ? ' in' : ''}`}>⭐ 16 Verified Reviews</p>

        <div className={`testi-row-wrap reveal${visible ? ' in' : ''}`}>
          <button className="testi-arrow" onClick={() => { go((page - 1 + totalPages) % totalPages); resetAuto() }} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className={`testi-cards${fading ? ' fading' : ''}`}>
            {cards.map((t) => (
              <div key={t.name} className="testi-card">
                <img src={t.avatar} alt={t.name} className="testi-avatar" loading="lazy" />
                <p className="testi-name">{t.name}</p>
                <p className="testi-role">{t.role}</p>
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">{t.text}</p>
              </div>
            ))}
          </div>

          <button className="testi-arrow" onClick={() => { go((page + 1) % totalPages); resetAuto() }} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={`testi-dots reveal${visible ? ' in' : ''}`}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} className={`testi-dot${i === page ? ' active' : ''}`} onClick={() => { go(i); resetAuto() }} aria-label={`Page ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
