import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function InspectionServices() {
  return (
    <ServicePage
      badge="Verification"
      title="Inspection"
      titleEm="Services"
      heroDesc="Professional inspection across manufacturing, supply chains, and service environments — independent verification that protects your business and your customers."
      heroImg="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '10,000+', label: 'Inspections Delivered' },
        { value: '100+',    label: 'Countries Covered' },
        { value: '99.2%',   label: 'Report Accuracy Rate' },
        { value: '20+',     label: 'Years of Experience' },
      ]}
      overviewTitle="Independent Inspection"
      overviewTitleEm="You Can Trust"
      overviewBody="When quality, safety, or contractual compliance is at stake, independent inspection provides the objective evidence that internal teams cannot. Our inspectors operate across manufacturing floors, ports of entry, construction sites, and complex supply chains — delivering verified results with full traceability and impartial reporting."
      benefits={[
        'Accredited inspectors with sector-specific technical expertise',
        'Pre-shipment, in-process, and goods receipt inspection',
        'Detailed inspection reports delivered within 24 hours',
        'Vendor qualification and ongoing supplier monitoring',
        'Construction and infrastructure progress inspections',
        'Full photographic and documentary evidence packages',
      ]}
      sidebarFeatures={[
        'Accredited inspection team',
        '24-hour report turnaround',
        'Global inspection coverage',
        'Full photographic evidence',
        'Vendor qualification programmes',
      ]}
      services={[
        {
          tag: 'Manufacturing',
          title: 'Manufacturing Floor Inspection',
          desc: 'In-process and final inspection of manufactured goods against drawings, specifications, and quality plans.',
          icon: <Icon><rect x="2" y="7" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M6 7V5a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.4"/><path d="M11 11v4M9 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Pre-Shipment',
          title: 'Pre-Shipment Inspection',
          desc: 'Final quality checks before goods leave the factory — preventing costly returns and supply chain disruptions.',
          icon: <Icon><path d="M3 9l2-5h12l2 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="9" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M8 9v9" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Supplier',
          title: 'Supply Chain & Vendor Audits',
          desc: 'Structured vendor qualification audits that assess capability, compliance, and quality management performance.',
          icon: <Icon><path d="M4 17s0-6 7-6 7 6 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="7" r="4" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Construction',
          title: 'Construction & Infrastructure',
          desc: 'Progress inspections, material verification, and hold-point witness services for construction and infrastructure projects.',
          icon: <Icon><path d="M2 18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M4 18V10l7-6 7 6v8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><rect x="8" y="13" width="6" height="5" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Loading',
          title: 'Container Loading Supervision',
          desc: 'On-site supervision of container loading to verify quantities, condition, and stowage compliance.',
          icon: <Icon><rect x="2" y="8" width="18" height="11" rx="1" stroke="currentColor" strokeWidth="1.4"/><path d="M6 8V6a2 2 0 014 0v2M12 8V6a2 2 0 014 0v2" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Remote',
          title: 'Remote Inspection Services',
          desc: 'Technology-enabled remote inspection using live video, IoT sensors, and digital documentation for efficient oversight.',
          icon: <Icon><rect x="2" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M7 20h8M11 16v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Inspection Brief', desc: 'We agree scope, acceptance criteria, inspection checkpoints, and reporting format before mobilisation.' },
        { title: 'Mobilisation', desc: 'An experienced inspector with relevant sector knowledge is assigned and mobilised to site — typically within 48 hours of confirmation.' },
        { title: 'On-Site Inspection', desc: 'Our inspector conducts a thorough assessment against agreed criteria, gathering photographic evidence and objective measurements.' },
        { title: 'Report Delivery', desc: 'A detailed inspection report — with findings, photographs, and a clear pass/hold/fail recommendation — is delivered within 24 hours.' },
      ]}
      standards={[
        { code: 'ISO/IEC 17020:2012', name: 'Requirements for Inspection Bodies' },
        { code: 'ISO 9001:2015', name: 'Quality Management Systems' },
        { code: 'ASTM E2659', name: 'Standard Practice for Certificate Programs' },
        { code: 'EN 13306', name: 'Maintenance Terminology' },
        { code: 'API Standards', name: 'Oil & Gas Inspection Standards' },
        { code: 'IFIA Code', name: 'International Federation of Inspection Agencies' },
      ]}
      faqs={[
        { q: 'How quickly can you mobilise an inspector?', a: 'For standard requests, we mobilise within 24–48 hours. We also offer emergency inspection response for time-critical situations.' },
        { q: 'Do you operate globally?', a: 'Yes. Our inspector network spans over 100 countries. We can mobilise local inspectors with relevant technical expertise in most major manufacturing and trade locations.' },
        { q: 'What is included in an inspection report?', a: 'Every report includes executive summary, detailed findings against acceptance criteria, full photographic evidence, measurement records, and a clear disposition recommendation.' },
        { q: 'Can you inspect against our own customer specifications?', a: 'Yes. We routinely work against customer-specific drawings, specifications, and quality plans — not just public standards.' },
      ]}
      ctaBandTitle="Ready to protect your supply chain?"
      ctaBandSub="Contact us to scope your inspection programme — we'll confirm availability, assign the right inspector, and mobilise fast."
    />
  )
}
