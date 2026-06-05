import './CTA.css'

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-bg">
        <div className="cta-shape cta-shape-1" />
        <div className="cta-shape cta-shape-2" />
      </div>
      <div className="container cta-inner">
        <div className="cta-content">
          <span className="section-label light">Ready to Get Certified?</span>
          <h2 className="section-title light">Take the First Step Toward<br />International Recognition</h2>
          <p className="section-sub light">
            Join over 6,000 businesses that have achieved world-class certification with ExQual Compliance. Our experts are ready to guide you every step of the way.
          </p>
        </div>
        <div className="cta-actions">
          <a href="#contact" className="btn-primary cta-btn-primary">Request Free Consultation</a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>
      </div>
    </section>
  )
}
