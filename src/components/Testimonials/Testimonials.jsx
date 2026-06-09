import { useState, useRef, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'ARUN SHARMA',
    role: 'National GeM Support Manager - FUJIFILMS India Pvt. Ltd.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual handled our QMS and GEM registration with expertise and precision. Smooth process, outstanding outcome. Highly recommended."',
  },
  {
    name: 'SATISH V K',
    role: 'Chairman - Sharplex Filters (India) Pvt Ltd',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual built a quality culture across our teams that drove real, lasting improvements. Leadership vision translated into day-to-day action."',
  },
  {
    name: 'TEJAS PARIK',
    role: 'Director - Upaj Investment and Finance Pvt. Ltd.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Professional, results-driven support for our sustainability challenges. Strategic thinking that delivered measurable impact. Extremely pleased."',
  },
  {
    name: 'PARAMVEER SINGH',
    role: 'CEO One Stop Packaging Inc',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Exceptional focus on sustainable quality improvements. Their thorough approach made a tangible difference in our operations."',
  },
  {
    name: 'GREG HALLER',
    role: 'CEO - Alorica Inc',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Top-tier cybersecurity guidance that strengthened our defenses. Clear communication, timely execution, full confidence throughout."',
  },
  {
    name: 'FATIMA AL-RASHID',
    role: 'Quality Assurance Manager - HealthCore Medical',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Every gap closed before the certification body arrived. First-pass success isn\'t their aspiration — it\'s their standard."',
  },
  {
    name: 'RAJESH NAIR',
    role: 'Operations Head - Tata Consultancy Services',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ExQual identified inefficiencies we had missed for years. ROI was clear within the first quarter. An exceptional consulting partner."',
  },
  {
    name: 'PRIYA MENON',
    role: 'Managing Director - GreenPath Solutions',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ISO 14001 guidance that was thorough and practical. Zero non-conformances on certification audit. Truly world-class."',
  },
  {
    name: 'MICHAEL TORRES',
    role: 'VP of Compliance - BridgePoint Financial',
    avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Knowledgeable, responsive consultants who helped us build a compliance culture that will serve us for years."',
  },
  {
    name: 'SUNITA KAPOOR',
    role: 'Director Quality - Apollo MedTech',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Complex multi-site QMS harmonization delivered with precision. Stakeholders aligned, outcomes exceeded expectations."',
  },
  {
    name: 'JAMES WHITFIELD',
    role: 'CEO - PrecisionTech Manufacturing',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"IATF 16949 made seamless from day one. Deep automotive knowledge that built real confidence across our team."',
  },
  {
    name: 'ANANYA BOSE',
    role: 'Head of Strategy - Infosys BPM',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"From gap analysis to certification, ExQual was with us every step. Industry knowledge that genuinely sets them apart."',
  },
  {
    name: 'DAVID OKONKWO',
    role: 'Plant Manager - Siemens Energy Africa',
    avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"ISO 45001 implementation that genuinely changed our plant safety culture. Inclusive approach, credible and lasting results."',
  },
  {
    name: 'LINDA ZHANG',
    role: 'Quality Director - HorizonPharma Ltd.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Unmatched pharmaceutical quality expertise. Complex GMP requirements translated into clear, executable steps our team could own."',
  },
  {
    name: 'VIKRAM DESAI',
    role: 'Founder - NovaBuild Infrastructure',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&h=120&q=85&auto=format&fit=crop&crop=face',
    text: '"Built our QMS from scratch with practical templates and hands-on support. We now bid on larger contracts with full confidence."',
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
