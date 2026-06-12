import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function ComplianceAudits() {
  return (
    <ServicePage
      badge="Risk Mitigation"
      title="Compliance"
      titleEm="Audits"
      heroDesc="Internal and external audits that identify compliance gaps, reduce operational risk, and deliver corrective action plans that stick."
      heroImg="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '5,000+', label: 'Audits Conducted' },
        { value: '99%',    label: 'Client Satisfaction' },
        { value: '80+',    label: 'Industries Audited' },
        { value: '20+',    label: 'Years of Experience' },
      ]}
      overviewTitle="Audits That Drive"
      overviewTitleEm="Real Improvement"
      overviewBody="An audit is only valuable if it leads to genuine improvement. Our auditors go beyond tick-box compliance — they identify systemic risks, benchmark performance against best practice, and deliver actionable corrective action plans. Whether you need an internal audit programme or an independent second-party supplier audit, our team delivers clarity and confidence."
      benefits={[
        'Independent, impartial audit findings you can trust',
        'Auditors with direct industry and regulatory experience',
        'Structured corrective and preventive action (CAPA) plans',
        'Gap analysis reports with prioritised remediation roadmap',
        'Internal audit programme design and implementation',
        'Regulatory mock audits ahead of authority inspections',
      ]}
      sidebarFeatures={[
        'Sector-experienced lead auditors',
        'Actionable CAPA plans included',
        'Full written audit reports',
        'Mock regulatory audit service',
        'Ongoing audit programme support',
      ]}
      services={[
        {
          tag: 'Internal',
          title: 'Internal Audit Programme',
          desc: 'Design and delivery of a structured internal audit programme — from schedule and checklists to reporting and CAPA follow-up.',
          icon: <Icon><rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M7 8h8M7 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M14 15l2-2-2-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Supplier',
          title: 'Second-Party Supplier Audits',
          desc: 'Independent supplier qualification and performance audits that protect your supply chain from compliance and quality risk.',
          icon: <Icon><path d="M4 17s0-6 7-6 7 6 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="7" r="4" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Gap Analysis',
          title: 'Regulatory Gap Analysis',
          desc: 'A thorough assessment of your current position against applicable regulations — with a prioritised remediation plan.',
          icon: <Icon><path d="M3 17l4-4 4 4 4-6 4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Mock Audit',
          title: 'Mock Regulatory Inspections',
          desc: 'Simulated regulatory inspections that prepare your team and identify weaknesses before authorities arrive.',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'CAPA',
          title: 'Corrective Action Planning',
          desc: 'Structured CAPA management to resolve non-conformances, address root causes, and prevent recurrence.',
          icon: <Icon><path d="M4 11h14M11 4l7 7-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Remote',
          title: 'Remote & Desktop Audits',
          desc: 'Efficient remote audit services delivering the same rigour and insight as on-site visits — with reduced cost and disruption.',
          icon: <Icon><rect x="2" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M7 20h8M11 16v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Audit Planning', desc: 'We define audit scope, objectives, and criteria — and agree a programme schedule aligned to your business calendar.' },
        { title: 'On-Site Audit', desc: 'Our lead auditors conduct structured interviews, document reviews, and process observations to gather objective evidence.' },
        { title: 'Findings Report', desc: 'A detailed written report is issued within 5 working days — categorising findings and identifying root cause opportunities.' },
        { title: 'CAPA & Close-Out', desc: 'We support your team through corrective action planning, implementation, and formal close-out of all non-conformances.' },
      ]}
      standards={[
        { code: 'ISO 19011:2018', name: 'Guidelines for Auditing Management Systems' },
        { code: 'ISO 9001:2015', name: 'Quality Management Systems' },
        { code: 'ISO 14001:2015', name: 'Environmental Management Systems' },
        { code: 'ISO 45001:2018', name: 'Occupational Health & Safety' },
        { code: 'IATF 16949:2016', name: 'Automotive Quality Management' },
        { code: 'ISO 13485:2016', name: 'Medical Devices Quality Management' },
      ]}
      faqs={[
        { q: 'Can you conduct audits against standards we are not yet certified to?', a: 'Yes. Gap analysis audits against any standard or regulation are a core part of our service — useful for pre-certification readiness or benchmarking.' },
        { q: 'How quickly can you mobilise an audit team?', a: 'For standard engagements, typically within 2–3 weeks. We also offer emergency audit response for urgent regulatory situations.' },
        { q: 'Do you provide auditors for specific industries only?', a: 'No. Our auditor pool covers over 80 industry sectors. We match auditor experience to your sector as standard practice.' },
        { q: 'What format is the audit report delivered in?', a: 'All reports are delivered in professional PDF format with executive summary, detailed findings, risk classification, and CAPA template — typically within 5 working days of the audit.' },
      ]}
      ctaBandTitle="Ready to strengthen your compliance?"
      ctaBandSub="Book a free consultation and let our lead auditors scope the right audit programme for your organisation — no obligation."
    />
  )
}
