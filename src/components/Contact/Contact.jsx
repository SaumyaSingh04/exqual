import { useState, useRef, useEffect } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import './Contact.css'

const contactInfo = [
  { icon: FiMapPin, label: 'Our Office', value: '123 Business Bay, Dubai, UAE' },
  { icon: FiPhone, label: 'Phone', value: '+971 4 123 4567' },
  { icon: FiMail, label: 'Email', value: 'info@exqualcompliance.com' },
  { icon: FiClock, label: 'Working Hours', value: 'Mon – Sat: 8:00 AM – 6:00 PM' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
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
        <div className="section-header fade-up">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Start Your Journey</h2>
          <p className="section-sub">Have a question or ready to begin your certification process? Reach out to our team and we'll get back to you within 24 hours.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info fade-up">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div className="contact-info-item" key={label}>
                <div className="contact-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="contact-info-label">{label}</div>
                  <div className="contact-info-value">{value}</div>
                </div>
              </div>
            ))}
            <div className="contact-card-accent" />
          </div>

          <form className="contact-form fade-up" onSubmit={handleSubmit} style={{ transitionDelay: '0.1s' }}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Company Name</label>
                <input
                  className="form-input"
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                />
              </div>
              <div className="form-group">
                <label className="form-label">Service Required</label>
                <select
                  className="form-input form-select"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
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
            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea
                className="form-input form-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="btn-primary form-submit">
              {sent ? '✓ Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
