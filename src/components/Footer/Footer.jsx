import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa6'
import { FiMail, FiPhone } from 'react-icons/fi'
import './Footer.css'

const pages = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Help', href: '#' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'About Us', href: '#why-us' },
]

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaXTwitter, href: '#', label: 'X' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaWhatsapp, href: '#', label: 'WhatsApp' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="footer-logo-main">Ex<span>Qual</span> Compliance</span>
            </a>
            <p className="footer-tagline">Reliable, Trusted, and Professional Services in India</p>
            <p className="footer-eoe">
              ExQual Compliance is an Equal Opportunity Employer. All qualified applicants will receive
              consideration for employment without regard to race, color, age, religion, sex, sexual orientation,
              gender identity / expression, national origin, protected veteran status, or any other characteristic
              protected under federal, state or local law, where applicable, and those with criminal histories will
              be considered in a manner consistent with applicable state and local laws.
            </p>
          </div>

          {/* Pages */}
          <div className="footer-col">
            <h4 className="footer-heading">Pages</h4>
            <ul className="footer-list">
              {pages.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-link">{label}</a></li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Social Media</h4>
            <div className="footer-socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="social-link" aria-label={label}>
                  <Icon size={15} />
                </a>
              ))}
            </div>

            <h4 className="footer-heading" style={{ marginTop: '28px' }}>Contact Details</h4>
            <ul className="footer-contact-list">
              <li><FiMail size={13} className="footer-contact-icon" /><a href="mailto:sales@veridix.in" className="footer-link">sales@veridix.in</a></li>
              <li><FiPhone size={13} className="footer-contact-icon" /><a href="tel:+919616096613" className="footer-link">+91 9616096613</a></li>
            </ul>
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
