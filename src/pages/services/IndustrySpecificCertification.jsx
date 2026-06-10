import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function IndustrySpecificCertification() {
  return (
    <ServicePage
      badge="Sector Expertise"
      title="Industry Specific"
      titleEm="Certification"
      heroDesc="Sector-tailored certification for automotive, food safety, aerospace, and medical devices — meeting the precise regulatory demands of your industry."
      heroImg="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '1,800+', label: 'Sector Certifications' },
        { value: '12+',    label: 'Industries Covered' },
        { value: '97%',    label: 'First-Pass Rate' },
        { value: '20+',    label: 'Years of Experience' },
      ]}
      overviewTitle="Certification Built"
      overviewTitleEm="For Your Industry"
      overviewBody="Generic ISO frameworks don't capture the full regulatory picture for specialist sectors. Our consultants bring deep industry knowledge — whether you operate in automotive supply chains, food production, aerospace manufacturing, or medical device development — ensuring your certification is fit for purpose and regulator-ready."
      benefits={[
        'Sector-specific gap analysis and readiness assessment',
        'Documentation aligned to industry regulatory language',
        'Specialist consultant with direct sector experience',
        'Integration with existing ISO management systems',
        'Pre-audit preparation and internal audit support',
        'Ongoing surveillance and recertification management',
      ]}
      sidebarFeatures={[
        'Deep sector-specific expertise',
        'Regulatory-aligned documentation',
        '97% first-pass certification rate',
        'Integration with existing ISO systems',
        'Full post-certification support',
      ]}
      services={[
        {
          tag: 'Automotive',
          title: 'IATF 16949 Automotive Quality',
          desc: 'Meet the mandatory quality requirements of global automotive OEMs with IATF 16949 certification.',
          icon: <Icon><circle cx="7" cy="16" r="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="15" cy="16" r="2" stroke="currentColor" strokeWidth="1.4"/><path d="M5 16H3V10l3-6h8l3 6v6h-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Food Safety',
          title: 'ISO 22000 Food Safety',
          desc: 'Protect consumers and satisfy global retailer requirements with ISO 22000 food safety management certification.',
          icon: <Icon><path d="M11 3c0 0-6 3-6 8a6 6 0 0012 0c0-5-6-8-6-8z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M11 11v5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Medical',
          title: 'ISO 13485 Medical Devices',
          desc: 'Demonstrate compliance with medical device regulatory requirements and gain access to global healthcare markets.',
          icon: <Icon><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M11 7v8M7 11h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Aerospace',
          title: 'AS9100 Aerospace Quality',
          desc: 'Meet the stringent quality management requirements of the aerospace, space, and defence industries.',
          icon: <Icon><path d="M11 2l2 7h6l-5 4 2 7-5-4-5 4 2-7-5-4h6l2-7z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Telecom',
          title: 'TL 9000 Telecommunications',
          desc: 'Satisfy telecom industry supply chain quality requirements with TL 9000 certification.',
          icon: <Icon><rect x="4" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="11" cy="16" r="1.2" stroke="currentColor" strokeWidth="1.2"/></Icon>,
        },
        {
          tag: 'Rail',
          title: 'IRIS / EN 15085 Rail',
          desc: 'Achieve IRIS certification and EN 15085 welding compliance for railway industry supplier qualification.',
          icon: <Icon><rect x="5" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/><circle cx="8" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="14" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.2"/><path d="M5 12h12" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Sector Assessment', desc: 'We map your operations against sector-specific requirements and identify gaps unique to your industry regulatory context.' },
        { title: 'System Development', desc: 'Our specialists design documentation, processes, and controls aligned to your sector standard and customer requirements.' },
        { title: 'Training & Audit', desc: 'We train your team, conduct an internal audit, and validate readiness before the certification body visit.' },
        { title: 'Certification', desc: 'We manage the full certification audit process and support you through to certificate issue and customer notification.' },
      ]}
      standards={[
        { code: 'IATF 16949:2016', name: 'Automotive Quality Management' },
        { code: 'ISO 22000:2018', name: 'Food Safety Management Systems' },
        { code: 'ISO 13485:2016', name: 'Medical Devices Quality Management' },
        { code: 'AS9100 Rev D', name: 'Aerospace Quality Management' },
        { code: 'TL 9000 R6.3', name: 'Telecommunications Quality' },
        { code: 'EN 15085', name: 'Railway Welding Certification' },
      ]}
      faqs={[
        { q: 'Can you integrate IATF 16949 with our existing ISO 9001 system?', a: 'Yes. IATF 16949 is built on ISO 9001 structure. We integrate both into a unified system to minimise duplication and audit overhead.' },
        { q: 'Do you cover FSSC 22000 as well as ISO 22000?', a: 'Yes. We support ISO 22000, FSSC 22000, BRCGS, and SQF — the full spectrum of food safety standards.' },
        { q: 'How long does IATF 16949 certification typically take?', a: 'For organisations with an existing ISO 9001 base, typically 4–8 months. We provide a precise timeline after initial gap analysis.' },
        { q: 'Do you work with medical device start-ups or only established manufacturers?', a: 'Both. We have supported start-ups through their first ISO 13485 certification and helped established manufacturers maintain compliance through design changes.' },
      ]}
      ctaBandTitle="Ready to certify for your sector?"
      ctaBandSub="Book a free scoping session and get a clear roadmap tailored to your industry — scope, timeline, and investment with no obligation."
    />
  )
}
