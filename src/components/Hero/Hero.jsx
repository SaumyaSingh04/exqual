import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-accent" aria-hidden="true" />

        <h1 className="hero-heading">
          Driving Operational<br />
          Excellence with<br />
          Trusted Expertise
        </h1>

        <p className="hero-sub">
          Unlock expert-led compliance and management solutions tailored to your business
          needs. We focus on precision, efficiency, and measurable outcomes that elevate
          your organization.
        </p>

        <div className="hero-actions">
          <a href="#about" className="hero-btn-outline">LEARN MORE</a>
          <a href="#contact" className="hero-btn-gold">REQUEST A CONSULTATION</a>
        </div>
      </div>
    </section>
  )
}
