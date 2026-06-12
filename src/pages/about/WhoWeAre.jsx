import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function WhoWeAre() {
  return (
    <ServicePage
      badge="Est. 2004"
      title="Who We"
      titleEm="Are"
      heroDesc="ExQual Compliance is a globally recognised certification and compliance authority, trusted by 6,000+ enterprises across 40+ countries since 2004."
      heroImg="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '2004',  label: 'Year Founded' },
        { value: '6,000+', label: 'Enterprises Served' },
        { value: '40+',   label: 'Countries' },
        { value: '20+',   label: 'Years of Excellence' },
      ]}
      overviewTitle="A Trusted Compliance"
      overviewTitleEm="Authority"
      overviewBody="Founded in 2004, ExQual Compliance has grown from a specialist ISO consultancy into a full-spectrum compliance authority. Our team of 120+ senior consultants operates across every major regulated industry — delivering certification outcomes that stand the test of scrutiny."
      benefits={[
        'ISO-accredited, internationally recognised authority',
        '120+ senior consultants with sector-specific expertise',
        'Presence in 40+ countries across 6 continents',
        'Trusted by Fortune 500 enterprises and SMEs alike',
        'Fully transparent, fixed-fee engagement model',
        'End-to-end support from gap analysis to post-cert maintenance',
      ]}
      sidebarFeatures={[
        'ISO Accredited Body',
        '20+ years of expertise',
        '6,000+ clients worldwide',
        'Fixed-fee, no surprises',
        'Dedicated senior consultant',
      ]}
      services={[
        {
          tag: 'Mission',
          title: 'Our Mission',
          desc: 'To make world-class compliance accessible to every organisation — removing complexity, eliminating risk, and delivering certification with certainty.',
          icon: <Icon><path d="M11 2l8 4v6c0 4-3.5 7-8 8-4.5-1-8-4-8-8V6l8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Vision',
          title: 'Our Vision',
          desc: 'A world where compliance is a genuine competitive advantage — not a burden. ExQual leads that transformation through precision, expertise, and partnership.',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M11 3v2M11 17v2M3 11h2M17 11h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Values',
          title: 'Integrity First',
          desc: 'Every engagement is governed by absolute integrity. We never cut corners, never overstate outcomes, and always put your long-term compliance health first.',
          icon: <Icon><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'People',
          title: 'Expert Team',
          desc: '120+ senior consultants — each with a minimum of 10 years sector experience — form the backbone of every ExQual engagement.',
          icon: <Icon><circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="15" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M2 18c0-3 2.7-5.5 6-5.5M10 18c0-3 2.7-5.5 6-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Global',
          title: 'Global Reach',
          desc: 'With active engagements in 40+ countries, ExQual delivers consistent, high-quality compliance outcomes regardless of geography or jurisdiction.',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M3 11h16M11 3c-2 2.5-3 5-3 8s1 5.5 3 8M11 3c2 2.5 3 5 3 8s-1 5.5-3 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Accreditation',
          title: 'ISO Accredited',
          desc: 'ExQual holds direct accreditation from internationally recognised accreditation bodies — giving your certificate the highest possible level of credibility.',
          icon: <Icon><path d="M11 2l2.2 4.5 5 .7-3.6 3.5.85 4.95L11 13.35l-4.45 2.35.85-4.95L3.8 7.2l5-.7L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Founded 2004', desc: 'ExQual was established in London as a specialist ISO 9001 and ISO 14001 consultancy serving UK manufacturing clients.' },
        { title: 'Global Expansion', desc: 'By 2010, ExQual had expanded into Europe, the Middle East, and Asia-Pacific — growing to 40+ countries and 2,000+ clients.' },
        { title: 'Full-Spectrum Authority', desc: 'From 2015, we broadened our portfolio to cover all major management system, product, and industry-specific certifications.' },
        { title: 'Today: 6,000+ Clients', desc: 'ExQual now serves over 6,000 enterprises globally, maintaining a 94% client retention rate and 98% first-pass certification success.' },
      ]}
      standards={[
        { code: 'UKAS Accredited', name: 'United Kingdom Accreditation Service' },
        { code: 'DAkkS Recognised', name: 'German Accreditation Body' },
        { code: 'ANAB Member', name: 'ANSI National Accreditation Board' },
        { code: 'IAF Member', name: 'International Accreditation Forum' },
        { code: 'IAS Approved', name: 'International Accreditation Service' },
        { code: 'ISO/IEC 17021', name: 'Conformity Assessment Standard' },
      ]}
      faqs={[
        { q: 'Where is ExQual Compliance headquartered?', a: 'ExQual is headquartered in London, UK, with regional offices across Europe, the Middle East, Asia-Pacific, and the Americas.' },
        { q: 'Is ExQual an accredited certification body?', a: 'Yes. ExQual holds accreditation from internationally recognised bodies including UKAS and DAkkS, ensuring our certificates carry global credibility.' },
        { q: 'What industries does ExQual serve?', a: 'We serve all major regulated industries including automotive, aerospace, food & beverage, construction, healthcare, technology, and financial services.' },
        { q: 'How large is the ExQual team?', a: 'Our team comprises 120+ senior consultants, each with a minimum of 10 years of sector-specific compliance and certification experience.' },
      ]}
      ctaBandTitle="Ready to work with ExQual?"
      ctaBandSub="Book a free 30-minute scoping session and discover why 6,000+ enterprises trust ExQual for their compliance needs."
      breadcrumbSection="About Us"
      breadcrumbHref="/#about"
    />
  )
}
