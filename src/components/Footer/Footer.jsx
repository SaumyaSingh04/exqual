import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import './Footer.css'

const services = [
  'Management System Certification',
  'Industry Specific Certification',
  'Product Certification',
  'Compliance Audits',
  'Accreditation Support',
  'Inspection Services',
]

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-main">Ex<span>Qual</span></span>
              <span className="footer-logo-sub">Compliance</span>
            </a>
            <p className="footer-about">
              Helping organizations achieve global standards through expert certification, auditing, and compliance solutions.
            </p>
            <div className="footer-socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="social-link" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-list">
              {services.map(s => (
                <li key={s}><a href="#services" className="footer-link">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {quickLinks.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-link">{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMapPin size={14} className="footer-contact-icon" />
                <span>123 Business Bay, Dubai, UAE</span>
              </li>
              <li>
                <FiPhone size={14} className="footer-contact-icon" />
                <span>+971 4 123 4567</span>
              </li>
              <li>
                <FiMail size={14} className="footer-contact-icon" />
                <span>info@exqualcompliance.com</span>
              </li>
            </ul>
            <a href="#contact" className="footer-cta-btn">Get Free Quote</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">© {new Date().getFullYear()} ExQual Compliance. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Privacy Policy</a>
            <a href="#" className="footer-legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
