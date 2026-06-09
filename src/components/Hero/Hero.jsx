import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-accent" aria-hidden="true" />

        <h1 className="hero-heading">
          Compliance Expertise.<br />
          Delivered with Precision.
        </h1>

        <p className="hero-sub">
          Expert-led certification and management solutions — precise, efficient, and built for measurable impact.
        </p>

        <div className="hero-actions">
          <a href="#about" className="hero-btn-outline">LEARN MORE</a>
          <a href="#contact" className="hero-btn-gold">REQUEST A CONSULTATION</a>
        </div>
      </div>
    </section>
  )
}
