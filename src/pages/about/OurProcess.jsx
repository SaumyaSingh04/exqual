import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function OurProcess() {
  return (
    <ServicePage
      badge="4-Stage Methodology"
      title="Our"
      titleEm="Process"
      heroDesc="A proven four-stage engagement model — from strategic discovery to post-certification continuity — delivering a 98% first-pass rate across all engagements."
      heroImg="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '98%',   label: 'First-Pass Success Rate' },
        { value: '4',     label: 'Stage Methodology' },
        { value: '30 Day', label: 'Avg. Onboarding' },
        { value: '6K+',   label: 'Successful Engagements' },
      ]}
      overviewTitle="Methodology Built for"
      overviewTitleEm="Certainty"
      overviewBody="Our four-stage engagement model eliminates the guesswork from compliance. Every engagement follows the same rigorous process — Discovery, Architecture, Audit, and Certify — each stage designed to close risk before it becomes a costly problem. This structured approach is why we achieve a 98% first-pass certification rate."
      benefits={[
        'Structured discovery to understand your unique compliance landscape',
        'Bespoke system architecture — not off-the-shelf templates',
        'Pre-audit gap closure to eliminate certification surprises',
        'Expert liaison with accredited certification bodies',
        'Post-certification continuity and surveillance support',
        'Dedicated senior consultant throughout every stage',
      ]}
      sidebarFeatures={[
        '4-stage proven methodology',
        '98% first-pass success rate',
        'Dedicated senior consultant',
        'No template-based shortcuts',
        'Post-cert support included',
      ]}
      services={[
        {
          tag: 'Stage 1',
          title: 'Discovery & Gap Analysis',
          desc: 'We map your current state against the target standard, identify gaps, and build a prioritised action plan with a clear timeline and investment breakdown.',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Stage 2',
          title: 'System Architecture',
          desc: 'Our consultants design and implement your management system — policies, procedures, records, and controls — tailored precisely to your operations.',
          icon: <Icon><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Stage 3',
          title: 'Pre-Audit Readiness',
          desc: 'We conduct a full internal audit, management review, and readiness assessment — closing every gap before the certification body arrives.',
          icon: <Icon><path d="M4 6h14M4 11h10M4 16h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M18.1 18.1l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Stage 4',
          title: 'Certification & Beyond',
          desc: 'We coordinate your Stage 1 and Stage 2 audits, support you through to certificate issue, and provide ongoing surveillance and maintenance support.',
          icon: <Icon><path d="M11 2l2.2 4.5 5 .7-3.6 3.5.85 4.95L11 13.35l-4.45 2.35.85-4.95L3.8 7.2l5-.7L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Ongoing',
          title: 'Surveillance Support',
          desc: 'Certification requires annual surveillance audits. Our post-cert packages keep your system current, compliant, and ready for recertification every 3 years.',
          icon: <Icon><path d="M4 11a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M18 11a7 7 0 0 1-14 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Training',
          title: 'Staff Training',
          desc: 'We develop your internal capability — from awareness training for all staff to certified internal auditor programmes for your compliance team.',
          icon: <Icon><circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4"/><path d="M4 19c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Discovery', desc: 'A senior consultant conducts an on-site or remote discovery session to understand your business, scope, and current compliance posture.' },
        { title: 'Architecture', desc: 'We design your management system from the ground up — every policy, procedure, and record built for your specific operations.' },
        { title: 'Audit', desc: 'Full internal audit and pre-assessment review ensures every non-conformity is closed before the certification body conducts their assessment.' },
        { title: 'Certify', desc: 'We coordinate Stage 1 and Stage 2 audits, support you through the certification decision, and deliver post-cert continuity packages.' },
      ]}
      standards={[
        { code: 'Stage 1', name: 'Documentation & System Review' },
        { code: 'Stage 2', name: 'On-Site Implementation Audit' },
        { code: 'Surveillance', name: 'Annual Maintenance Audits' },
        { code: 'Recertification', name: 'Full Assessment Every 3 Years' },
        { code: 'Internal Audit', name: 'Pre-Certification Readiness Review' },
        { code: 'Gap Analysis', name: 'Initial Compliance Assessment' },
      ]}
      faqs={[
        { q: 'How long does the full process take?', a: 'From discovery to certificate issue, engagements typically take 3–6 months depending on the standard, scope, and your current compliance level.' },
        { q: 'Do you work on-site or remotely?', a: 'Both. We offer fully on-site, fully remote, and hybrid engagement models — structured around what works best for your team and timeline.' },
        { q: 'What makes your process different from other consultancies?', a: 'Our pre-audit gap closure stage is the key differentiator. We eliminate every non-conformity before the certification body visits — which is why 98% of our clients pass first time.' },
        { q: 'Can you accelerate the timeline if we need certification urgently?', a: 'Yes. We offer accelerated engagement programmes for clients with time-sensitive requirements, including regulatory deadlines or contract obligations.' },
      ]}
      ctaBandTitle="See our process in action"
      ctaBandSub="Book a free 30-minute discovery call and get a clear roadmap — scope, timeline, and investment — tailored to your organisation."
      breadcrumbSection="About Us"
      breadcrumbHref="/#about"
    />
  )
}
