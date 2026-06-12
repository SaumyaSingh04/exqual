import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function AccreditationSupport() {
  return (
    <ServicePage
      badge="Body Accreditation"
      title="Accreditation"
      titleEm="Support"
      heroDesc="Accreditation consulting for laboratories, inspection bodies, and certification organisations seeking globally recognised accreditation status."
      heroImg="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=85&auto=format&fit=crop&crop=center"
      stats={[
        { value: '400+', label: 'Bodies Accredited' },
        { value: '96%',  label: 'First-Cycle Success' },
        { value: '50+',  label: 'Accreditation Bodies Worked With' },
        { value: '20+',  label: 'Years of Experience' },
      ]}
      overviewTitle="Accreditation"
      overviewTitleEm="Done Right"
      overviewBody="Achieving and maintaining accreditation demands a level of technical and procedural rigour that goes far beyond standard certification. Our accreditation specialists have guided over 400 conformity assessment bodies through ISO/IEC 17025, 17020, and 17065 accreditation — bringing insider knowledge of assessor expectations, documentation requirements, and common failure points."
      benefits={[
        'Full quality management system design for accreditation scope',
        'Technical procedures and method validation documentation',
        'Personnel competence frameworks and training records',
        'Witness audit preparation and assessor liaison',
        'Proficiency testing programme selection and management',
        'Ongoing compliance and surveillance cycle support',
      ]}
      sidebarFeatures={[
        '96% first-cycle accreditation rate',
        'Assessor-experienced consultants',
        'Full documentation package included',
        'Witness audit preparation support',
        'Post-accreditation maintenance plans',
      ]}
      services={[
        {
          tag: 'Laboratory',
          title: 'ISO/IEC 17025 Laboratory Accreditation',
          desc: 'Testing and calibration laboratory accreditation — from quality system design to UKAS, DAkkS, and ILAC-member body assessment.',
          icon: <Icon><path d="M8 3v8l-3 6h12l-3-6V3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 3h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><circle cx="11" cy="15" r="1.2" fill="currentColor"/></Icon>,
        },
        {
          tag: 'Inspection',
          title: 'ISO/IEC 17020 Inspection Bodies',
          desc: 'Accreditation support for Type A, B, and C inspection bodies across all technical sectors.',
          icon: <Icon><path d="M2 11s3-6 9-6 9 6 9 6-3 6-9 6-9-6-9-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Certification',
          title: 'ISO/IEC 17065 Certification Bodies',
          desc: 'Product, process, and service certification body accreditation — scheme design, impartiality requirements, and decision-making processes.',
          icon: <Icon><path d="M11 2l2.2 4.5 5 .7-3.6 3.5.85 4.95L11 13.35l-4.45 2.35.85-4.95L3.8 7.2l5-.7L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Personnel',
          title: 'ISO/IEC 17024 Personnel Certification',
          desc: 'Accreditation for bodies that certify individuals against defined competence requirements.',
          icon: <Icon><circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="1.4"/><path d="M4 19c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
        {
          tag: 'Proficiency',
          title: 'Proficiency Testing Support',
          desc: 'Selection, enrolment, and results interpretation for proficiency testing programmes required for laboratory accreditation.',
          icon: <Icon><path d="M3 17l4-4 4 4 4-6 4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Extension',
          title: 'Scope Extension Services',
          desc: 'Adding new test methods, inspection activities, or certification schemes to your existing accreditation scope.',
          icon: <Icon><circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/><path d="M11 3v2M11 17v2M3 11h2M17 11h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
      ]}
      steps={[
        { title: 'Readiness Review', desc: 'We assess your current quality system and technical capability against accreditation standard requirements and identify gaps.' },
        { title: 'System Build', desc: 'We design and document your quality management system, technical procedures, and competence framework to assessor expectations.' },
        { title: 'Witness Preparation', desc: 'Our consultants simulate assessor witness testing and document review sessions to prepare your technical staff for the real assessment.' },
        { title: 'Accreditation Assessment', desc: 'We support you through the full accreditation assessment cycle — from initial application to certificate issue and first surveillance.' },
      ]}
      standards={[
        { code: 'ISO/IEC 17025:2017', name: 'Testing & Calibration Laboratories' },
        { code: 'ISO/IEC 17020:2012', name: 'Inspection Bodies' },
        { code: 'ISO/IEC 17065:2012', name: 'Product/Process Certification Bodies' },
        { code: 'ISO/IEC 17024:2012', name: 'Personnel Certification Bodies' },
        { code: 'ISO/IEC 17021:2015', name: 'Management System Certification Bodies' },
        { code: 'ISO/IEC 17043:2023', name: 'Proficiency Testing Providers' },
      ]}
      faqs={[
        { q: 'Which accreditation bodies do you work with?', a: 'We work with all major national accreditation bodies including UKAS (UK), DAkkS (Germany), COFRAC (France), ANAB (US), and over 50 ILAC and IAF members globally.' },
        { q: 'How long does ISO/IEC 17025 accreditation take?', a: 'Typically 6–12 months from engagement to certificate, depending on the number of test methods and scope breadth. We provide a precise timeline after initial review.' },
        { q: 'Can you help us extend an existing accreditation scope?', a: 'Yes. Scope extension is one of our most common engagements. We manage the technical documentation, method validation, and accreditation body submission.' },
        { q: 'Do you provide support during the actual accreditation assessment?', a: 'Yes. We can be present during the assessment to advise your team, respond to assessor queries, and ensure any immediate corrective actions are handled professionally.' },
      ]}
      ctaBandTitle="Ready to achieve accreditation?"
      ctaBandSub="Book a free readiness review and get a clear picture of your accreditation pathway — scope, timeline, and investment with no obligation."
    />
  )
}
