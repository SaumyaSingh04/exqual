import ServicePage from '../../components/ServicePage/ServicePage'

const Icon = ({ children }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{children}</svg>
)

export default function ClientTestimonials() {
  return (
    <ServicePage
      badge="4.9 / 5 Rating"
      title="Client"
      titleEm="Testimonials"
      heroDesc="Rated 4.9 out of 5 across 600+ verified client reviews. Enterprises in 40+ countries trust ExQual to deliver certification with precision and zero surprises."
      heroImg="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85&auto=format&fit=crop&crop=top"
      stats={[
        { value: '4.9/5',  label: 'Average Client Rating' },
        { value: '600+',   label: 'Verified Reviews' },
        { value: '6,000+', label: 'Enterprises Served' },
        { value: '94%',    label: 'Client Retention Rate' },
      ]}
      overviewTitle="Trusted by Enterprises"
      overviewTitleEm="Worldwide"
      overviewBody="Our 4.9/5 rating across 600+ verified reviews reflects a consistent pattern: clients come to ExQual for compliance, and stay because of transformation. From Fortune 500 enterprises to ambitious SMEs, across 40+ countries and every major regulated industry — the outcome is always the same."
      benefits={[
        '4.9/5 average rating across 600+ verified client reviews',
        'Clients in 40+ countries across 6 continents',
        '94% client retention — the highest in our sector',
        'Verified reviews from named, traceable enterprises',
        'Consistent first-pass certification outcomes across all sectors',
        'Long-term partnerships, not one-off engagements',
      ]}
      sidebarFeatures={[
        '4.9/5 client rating',
        '600+ verified reviews',
        '94% retention rate',
        '40+ countries',
        'All major industries',
      ]}
      services={[
        {
          tag: 'Manufacturing',
          title: 'Arun Sharma — Fujifilm India',
          desc: '"ExQual handled our QMS and GEM registration with expertise and precision. Smooth process, outstanding outcome. Highly recommended." — National GeM Support Manager',
          icon: <Icon><rect x="3" y="3" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Engineering',
          title: 'Satish V K — Sharplex Filters',
          desc: '"ExQual built a quality culture across our teams that drove real, lasting improvements. Leadership vision translated into day-to-day action." — Chairman',
          icon: <Icon><path d="M11 2l2.2 4.5 5 .7-3.6 3.5.85 4.95L11 13.35l-4.45 2.35.85-4.95L3.8 7.2l5-.7L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Healthcare',
          title: 'Fatima Al-Rashid — HealthCore Medical',
          desc: '"Every gap closed before the certification body arrived. First-pass success isn\'t their aspiration — it\'s their standard." — Quality Assurance Manager',
          icon: <Icon><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Technology',
          title: 'Rajesh Nair — Tata Consultancy Services',
          desc: '"ExQual identified inefficiencies we had missed for years. ROI was clear within the first quarter. An exceptional consulting partner." — Operations Head',
          icon: <Icon><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/><rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4"/></Icon>,
        },
        {
          tag: 'Automotive',
          title: 'James Whitfield — PrecisionTech Manufacturing',
          desc: '"IATF 16949 made seamless from day one. Deep automotive knowledge that built real confidence across our team." — CEO',
          icon: <Icon><path d="M9 2L2 6v6l7 4 7-4V6L9 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/></Icon>,
        },
        {
          tag: 'Pharma',
          title: 'Linda Zhang — HorizonPharma Ltd.',
          desc: '"Unmatched pharmaceutical quality expertise. Complex GMP requirements translated into clear, executable steps our team could own." — Quality Director',
          icon: <Icon><circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4"/><path d="M4 19c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></Icon>,
        },
      ]}
      steps={[
        { title: '4.9 / 5 Rating', desc: 'Our average score across 600+ verified reviews from named, traceable enterprises worldwide.' },
        { title: '94% Retention', desc: 'Nearly all clients who engage ExQual return for subsequent standards, surveillance, or new engagements.' },
        { title: '40+ Countries', desc: 'Consistent outcomes regardless of geography, jurisdiction, or industry sector.' },
        { title: '6,000+ Clients', desc: 'From SMEs to Fortune 500 enterprises — ExQual delivers the same rigour at every scale.' },
      ]}
      standards={[
        { code: '4.9 / 5', name: 'Average Verified Client Rating' },
        { code: '600+', name: 'Verified Client Reviews' },
        { code: '94%', name: 'Client Retention Rate' },
        { code: '6,000+', name: 'Enterprises Served Globally' },
        { code: '40+', name: 'Countries of Active Engagements' },
        { code: '98%', name: 'First-Pass Certification Rate' },
      ]}
      faqs={[
        { q: 'Where can I read ExQual client reviews?', a: 'Verified client reviews are available on our website, Google Business Profile, and through our accreditation body\'s published client feedback portal.' },
        { q: 'Do all reviews come from verified clients?', a: 'Yes. Every review on our platform is verified against a completed engagement — we do not accept anonymous or unverified submissions.' },
        { q: 'What industries are most represented in your client base?', a: 'Our clients span manufacturing, healthcare, technology, automotive, aerospace, food & beverage, construction, and financial services — with consistent outcomes across all sectors.' },
        { q: 'Can I speak with a reference client before engaging?', a: 'Yes. We can arrange introductions to reference clients in your specific industry upon request during the scoping process.' },
      ]}
      ctaBandTitle="Join 6,000+ satisfied enterprises"
      ctaBandSub="Book a free 30-minute scoping call and discover why enterprises in 40+ countries trust ExQual for their compliance needs."
      breadcrumbSection="About Us"
      breadcrumbHref="/#about"
    />
  )
}
