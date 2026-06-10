import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function ProductCertification() {
  return (
    <ServicePage
      badge="Market Access"
      title="Product"
      titleEm="Certification"
      heroDesc="CE marking, product testing, and regulatory approvals that open global markets — delivered efficiently with full documentation support."
      heroImg="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '2,400+', label: 'Products Certified' },
        { value: '60+',    label: 'Markets Covered' },
        { value: '95%',    label: 'First-Submission Rate' },
        { value: '20+',    label: 'Years of Experience' },
      ]}
      overviewTitle="Global Market"
      overviewTitleEm="Access Simplified"
      overviewBody="Regulatory approvals can block market entry for months if managed poorly. Our product certification specialists navigate CE marking, type examination, and market-specific approvals on your behalf — preparing technical files, coordinating notified bodies, and ensuring your product reaches market on time."
      benefits={[
        'CE marking for all applicable EU product directives',
        'Technical file preparation and Declaration of Conformity',
        'Coordination with notified bodies and test laboratories',
        'UKCA marking for Great Britain market access',
        'FCC, UL, and international market approval support',
        'Post-market surveillance and regulatory monitoring',
      ]}
      sidebarFeatures={[
        'All major EU & GB directives covered',
        'Notified body coordination included',
        '95% first-submission approval rate',
        'Technical file preparation included',
        'Post-market surveillance support',
      ]}
      services={[
        {
          tag: 'CE Marking',
          title: 'CE Marking & EU Compliance',
          desc: 'Full CE marking service across all applicable EU directives — from conformity assessment to Declaration of Conformity.',
          icon: <Icon><path d="M14 8a5 5 0 100 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M14 8a5 5 0 000 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'UKCA',
          title: 'UKCA Marking (Great Britain)',
          desc: 'Post-Brexit UKCA marking support for products sold in England, Scotland, and Wales.',
          icon: <Icon><rect x="3" y="6" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4"/><path d="M3 9h16M7 6v10" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Testing',
          title: 'Product Testing Coordination',
          desc: 'We manage product testing through accredited laboratories and interpret results for compliance purposes.',
          icon: <Icon><path d="M8 3v8l-3 6h12l-3-6V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Technical File',
          title: 'Technical File Preparation',
          desc: 'Complete technical documentation packages that satisfy notified body and market surveillance authority requirements.',
          icon: <Icon><path d="M4 4h9l5 5v9H4V4z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M13 4v5h5" stroke="currentColor" strokeWidth="1.4"/><path d="M7 12h8M7 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'International',
          title: 'International Approvals (FCC / UL)',
          desc: 'US FCC, UL, and other international regulatory approvals managed from a single point of contact.',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M3 11h16M11 3c-2 3-2 12 0 16M11 3c2 3 2 12 0 16" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Post-Market',
          title: 'Post-Market Surveillance',
          desc: 'Ongoing regulatory monitoring and post-market surveillance programmes to maintain product compliance as standards evolve.',
          icon: <Icon><path d="M2 11s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Directive Mapping', desc: 'We identify all applicable EU/GB directives and international regulations for your product and define the conformity route.' },
        { title: 'Technical File', desc: 'Our team prepares the complete technical documentation package including risk assessments, test plans, and compliance evidence.' },
        { title: 'Testing & Assessment', desc: 'We coordinate product testing and, where required, notified body type examination — managing all correspondence on your behalf.' },
        { title: 'Market Release', desc: 'We issue the Declaration of Conformity, apply the required marking, and prepare your product for market launch.' },
      ]}
      standards={[
        { code: 'EU MDR 2017/745', name: 'Medical Device Regulation' },
        { code: 'EU LVD 2014/35/EU', name: 'Low Voltage Directive' },
        { code: 'EU RED 2014/53/EU', name: 'Radio Equipment Directive' },
        { code: 'EU UKCA', name: 'UK Conformity Assessed Marking' },
        { code: 'FCC Part 15', name: 'US Radio Frequency Devices' },
        { code: 'EU EMC 2014/30/EU', name: 'Electromagnetic Compatibility' },
      ]}
      faqs={[
        { q: 'Which CE directives do you cover?', a: 'We cover all major EU directives including LVD, EMC, RED, Machinery, PPE, CPR, and MDR — a full list is available on request.' },
        { q: 'Do you provide the testing or just coordinate it?', a: 'We coordinate testing through our network of accredited laboratories. We prepare test plans, accompany tests where needed, and interpret results for compliance.' },
        { q: 'Can you handle CE marking for a product range?', a: 'Yes. We regularly manage portfolio-level CE marking projects and can structure technical files to cover product families efficiently.' },
        { q: 'What if a standard is updated after we have CE marking?', a: 'Our post-market surveillance service monitors standard updates and alerts you when action is required to maintain compliance.' },
      ]}
      ctaBandTitle="Ready to unlock global markets?"
      ctaBandSub="Book a free scoping session and get a clear roadmap for your product approval — directive mapping, timeline, and investment with no obligation."
    />
  )
}
