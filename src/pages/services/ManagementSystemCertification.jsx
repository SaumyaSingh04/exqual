import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function ManagementSystemCertification() {
  return (
    <ServicePage
      badge="ISO Standards"
      title="Management System"
      titleEm="Certification"
      heroDesc="Achieve globally recognised ISO 9001, ISO 14001, and ISO 45001 certifications that demonstrate operational excellence, environmental responsibility, and workplace safety."
      heroImg="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '3,200+', label: 'Certifications Issued' },
        { value: '98%',    label: 'First-Pass Success Rate' },
        { value: '40+',    label: 'Countries Served' },
        { value: '20+',    label: 'Years of Experience' },
      ]}
      overviewTitle="Globally Recognised"
      overviewTitleEm="ISO Certification"
      overviewBody="Management system certification proves to customers, regulators, and stakeholders that your organisation operates to the highest international standards. Our expert consultants guide you from gap analysis through to successful certification audit — with a 98% first-pass rate that speaks for itself."
      benefits={[
        'Structured gap analysis against current ISO requirements',
        'Documentation design and management system architecture',
        'Staff training and internal auditor development',
        'Pre-audit readiness reviews to eliminate surprises',
        'Liaison with accredited certification bodies',
        'Post-certification maintenance and surveillance support',
      ]}
      sidebarFeatures={[
        'Fixed-fee, transparent pricing',
        'Dedicated senior consultant',
        '98% first-pass certification rate',
        'Full documentation support',
        'Post-cert maintenance included',
      ]}
      services={[
        {
          tag: 'Quality',
          title: 'ISO 9001 Quality Management',
          desc: 'Build customer confidence and operational efficiency with the world\'s most recognised quality management standard.',
          icon: <Icon><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Environment',
          title: 'ISO 14001 Environmental',
          desc: 'Demonstrate environmental responsibility and meet regulatory expectations with a certified environmental management system.',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Safety',
          title: 'ISO 45001 Health & Safety',
          desc: 'Protect your workforce and comply with occupational health and safety obligations through ISO 45001 certification.',
          icon: <Icon><path d="M11 3l8 4v5c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Energy',
          title: 'ISO 50001 Energy Management',
          desc: 'Reduce energy costs and carbon footprint with a structured energy management framework aligned to global best practice.',
          icon: <Icon><path d="M13 3L7 13h5l-1 6 6-10h-5l1-6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Security',
          title: 'ISO 27001 Information Security',
          desc: 'Safeguard your data assets and demonstrate cyber resilience with ISO 27001 certification.',
          icon: <Icon><rect x="5" y="9" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M8 9V7a3 3 0 116 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Integrated',
          title: 'Integrated Management Systems',
          desc: 'Combine multiple ISO standards into a single integrated management system for maximum efficiency and reduced audit overhead.',
          icon: <Icon><circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M11 3v2M11 17v2M3 11h2M17 11h2M5.6 5.6l1.4 1.4M14 14l1.4 1.4M5.6 16.4l1.4-1.4M14 8l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Gap Analysis', desc: 'We assess your current processes against ISO requirements and produce a detailed gap report with a prioritised action plan.' },
        { title: 'System Design', desc: 'Our consultants design and document your management system — policies, procedures, and records — tailored to your operations.' },
        { title: 'Internal Audit', desc: 'We conduct a full internal audit and management review to validate readiness before the certification body visit.' },
        { title: 'Certification', desc: 'We coordinate the Stage 1 and Stage 2 audits with your chosen accredited body and support you through to certificate issue.' },
      ]}
      standards={[
        { code: 'ISO 9001:2015', name: 'Quality Management Systems' },
        { code: 'ISO 14001:2015', name: 'Environmental Management Systems' },
        { code: 'ISO 45001:2018', name: 'Occupational Health & Safety' },
        { code: 'ISO 50001:2018', name: 'Energy Management Systems' },
        { code: 'ISO 27001:2022', name: 'Information Security Management' },
        { code: 'ISO 22301:2019', name: 'Business Continuity Management' },
      ]}
      faqs={[
        { q: 'How long does ISO certification take?', a: 'Typically 3–6 months depending on the standard, scope, and your current level of compliance. Our gap analysis will give you a precise timeline.' },
        { q: 'Do we need to prepare documentation before engaging you?', a: 'No. We handle all documentation design from scratch or improve your existing documents — whichever is more efficient for your situation.' },
        { q: 'Which certification body will issue our certificate?', a: 'You choose your preferred accredited certification body. We work with all major bodies including UKAS, DAkkS, ANAB, and others.' },
        { q: 'What happens after certification?', a: 'Certificates require annual surveillance audits and a full recertification every 3 years. We offer ongoing support packages to keep your system compliant.' },
      ]}
      ctaBandTitle="Ready to achieve ISO certification?"
      ctaBandSub="Book a free 30-minute scoping session and get a clear roadmap — scope, timeline, and investment — with no obligation."
    />
  )
}
