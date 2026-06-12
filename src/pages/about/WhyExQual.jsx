import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function WhyExQual() {
  return (
    <ServicePage
      badge="98% First-Pass Rate"
      title="Why"
      titleEm="ExQual"
      heroDesc="Not just certified — transformed. Our pre-audit gap closure eliminates surprises and turns compliance into a durable competitive advantage for your enterprise."
      heroImg="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '98%',   label: 'First-Pass Success Rate' },
        { value: '6,000+', label: 'Clients Worldwide' },
        { value: '94%',   label: 'Client Retention Rate' },
        { value: '40+',   label: 'Countries Served' },
      ]}
      overviewTitle="Compliance as a Competitive"
      overviewTitleEm="Advantage"
      overviewBody="Most consultancies help you pass a certification audit. ExQual transforms your organisation — building compliant systems that become a genuine operational edge. Our pre-audit gap closure methodology, sector-specialist consultants, and post-certification continuity packages deliver outcomes no generalist firm can match."
      benefits={[
        '98% first-pass certification rate across all standards',
        'Pre-audit gap closure — zero surprises on certification day',
        '120+ senior consultants with 10+ years sector experience each',
        'Fixed-fee engagement model — no scope creep, no hidden costs',
        '94% client retention reflecting deep, trust-based partnerships',
        'Post-certification surveillance to keep your certificate live',
      ]}
      sidebarFeatures={[
        '98% first-pass rate',
        'Fixed-fee, no surprises',
        '120+ senior consultants',
        '94% client retention',
        '40+ countries served',
      ]}
      services={[
        {
          tag: 'Differentiator 1',
          title: 'Pre-Audit Gap Closure',
          desc: 'Every non-conformance is identified and closed before the certification body arrives. This is why 98% of our clients achieve certification on their first attempt.',
          icon: <Icon><path d="M4 6h14M4 11h10M4 16h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M18.1 18.1l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Differentiator 2',
          title: 'Sector-Specialist Consultants',
          desc: '120+ senior consultants — each with a minimum of 10 years in their specific industry — ensure your compliance system is built for your operations, not a generic template.',
          icon: <Icon><circle cx="8" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/><circle cx="15" cy="6" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M2 18c0-3 2.7-5.5 6-5.5M10 18c0-3 2.7-5.5 6-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Differentiator 3',
          title: 'Fixed-Fee Certainty',
          desc: 'No hourly billing, no scope creep surprises. Every ExQual engagement is priced at a fixed fee agreed before work begins — full transparency from day one.',
          icon: <Icon><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Differentiator 4',
          title: 'Global Accreditation Credibility',
          desc: 'ExQual holds accreditation from UKAS, DAkkS, and ANAB — giving your certificate the highest possible credibility with customers, regulators, and supply chains worldwide.',
          icon: <Icon><path d="M11 2l2.2 4.5 5 .7-3.6 3.5.85 4.95L11 13.35l-4.45 2.35.85-4.95L3.8 7.2l5-.7L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Differentiator 5',
          title: 'Post-Certification Continuity',
          desc: 'Certification is the beginning, not the end. Our ongoing surveillance packages ensure your management system remains current, compliant, and ready for every recertification cycle.',
          icon: <Icon><path d="M4 11a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M18 11a7 7 0 0 1-14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Differentiator 6',
          title: '94% Client Retention',
          desc: 'Our retention rate reflects a simple truth — clients who work with ExQual once, stay with ExQual. We build partnerships, not just projects.',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
      ]}
      steps={[
        { title: '6 Continents', desc: 'Active compliance intelligence across 48 regulatory jurisdictions — depth no generalist firm can match.' },
        { title: '98% First-Pass', desc: 'Pre-audit gap closure eliminates every non-conformance before the certification body arrives.' },
        { title: '320+ Frameworks', desc: 'Standards-grade compliance built into your operations across every major management system standard.' },
        { title: '94% Retention', desc: 'Clients return because ExQual delivers outcomes — not just reports. Long-term surveillance partnerships.' },
      ]}
      standards={[
        { code: 'UKAS Accredited', name: 'United Kingdom Accreditation Service' },
        { code: 'DAkkS Recognised', name: 'German Accreditation Body' },
        { code: 'ANAB Member', name: 'ANSI National Accreditation Board' },
        { code: 'IAF Member', name: 'International Accreditation Forum' },
        { code: 'ISO/IEC 17021', name: 'Conformity Assessment Standard' },
        { code: '98% Rate', name: 'First-Pass Certification Success' },
      ]}
      faqs={[
        { q: 'What makes ExQual different from other ISO consultancies?', a: 'Our pre-audit gap closure stage is the key differentiator. We eliminate every non-conformance before the certification body visits — which is why 98% of our clients pass first time.' },
        { q: 'How does the fixed-fee model work?', a: 'Before any work begins, we provide a fully itemised fixed-fee proposal covering every stage from discovery to certificate issue. No hourly billing, no scope creep, no hidden costs.' },
        { q: 'Do you offer post-certification support?', a: 'Yes. All ExQual engagements include access to post-certification surveillance packages — covering annual maintenance audits, system updates, and recertification preparation.' },
        { q: 'Can ExQual handle multi-site or multi-standard engagements?', a: 'Absolutely. We regularly deliver integrated management systems spanning multiple sites, multiple countries, and multiple standards simultaneously — with a single dedicated senior consultant.' },
      ]}
      ctaBandTitle="Discover the ExQual difference"
      ctaBandSub="Book a free 30-minute scoping call and get a clear roadmap — scope, timeline, and fixed investment — tailored to your organisation."
      breadcrumbSection="About Us"
      breadcrumbHref="/#about"
    />
  )
}
