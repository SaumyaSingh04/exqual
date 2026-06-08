import { useState, useRef, useEffect } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock, FiShield, FiAward, FiCheckCircle } from 'react-icons/fi'
import './Contact.css'

const contactDetails = [
  { icon: FiMapPin, label: 'Office', value: '123 Business Bay, Dubai, UAE' },
  { icon: FiPhone, label: 'Phone', value: '+971 4 123 4567' },
  { icon: FiMail, label: 'Email', value: 'info@exqualcompliance.com' },
  { icon: FiClock, label: 'Hours', value: 'Mon – Sat · 8:00 AM – 6:00 PM' },
]

const trust = [
  { icon: FiShield, text: 'Confidential & Secure' },
  { icon: FiAward, text: 'ISO-Accredited Experts' },
  { icon: FiCheckCircle, text: 'No-Obligation Consultation' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', company: '', service: '', message: '' })
  }

  return (
    <section className="contact section-pad" id="contact" ref={ref}>
      <div className="container">
        <div className="contact-wrap">

          {/* ── Left panel ── */}
          <div className="contact-panel reveal d1">
            <div className="panel-top">
              <span className="eyebrow">Book a Consultation</span>
              <h2 className="panel-heading">Let's Elevate<br /><em>Your Compliance</em></h2>
              <p className="panel-sub">
                Our senior consultants will map a clear path to certification — with zero jargon and a defined timeline from day one.
              </p>
            </div>

            <div className="contact-details">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div className="detail-row" key={label}>
                  <span className="detail-icon"><Icon size={15} /></span>
                  <div>
                    <span className="detail-label">{label}</span>
                    <span className="detail-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel-footer">
              <div className="reply-badge">
                <span className="badge-dot" />
                Replies within 24 hours
              </div>
              <div className="trust-row">
                {trust.map(({ icon: Icon, text }) => (
                  <span className="trust-item" key={text}>
                    <Icon size={13} /> {text}
                  </span>
                ))}
              </div>
            </div>

            <div className="panel-glow" />
          </div>

          {/* ── Form ── */}
          <form className="contact-form reveal d2" onSubmit={handleSubmit}>
            <div className="form-header">
              <p className="form-eyebrow">Start the conversation</p>
              <p className="form-hint">We'll respond with a tailored proposal within one business day.</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name <span>*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Jane Smith" required />
              </div>
              <div className="form-group">
                <label>Work Email <span>*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="jane@company.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Company</label>
                <input type="text" name="company" value={form.company} onChange={handleChange}
                  placeholder="Company Ltd." />
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <div className="select-wrap">
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <option>Management System Certification</option>
                    <option>Industry Specific Certification</option>
                    <option>Product Certification</option>
                    <option>Compliance Audits</option>
                    <option>Accreditation Support</option>
                    <option>Inspection Services</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Brief <span>*</span></label>
              <textarea name="message" value={form.message} onChange={handleChange}
                placeholder="Describe your certification goals or current compliance challenges…"
                rows={4} required />
            </div>

            <div className="form-actions">
              <button type="submit" className={`submit-btn${sent ? ' sent' : ''}`}>
                {sent ? <><FiCheckCircle size={16} /> Request Sent</> : 'Request Consultation →'}
              </button>
              <span className="form-note">No commitment required.</span>
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}
