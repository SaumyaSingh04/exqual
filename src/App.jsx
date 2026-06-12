import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ManagementSystemCertification from './pages/services/ManagementSystemCertification.jsx'
import IndustrySpecificCertification from './pages/services/IndustrySpecificCertification.jsx'
import ProductCertification from './pages/services/ProductCertification.jsx'
import ComplianceAudits from './pages/services/ComplianceAudits.jsx'
import AccreditationSupport from './pages/services/AccreditationSupport.jsx'
import InspectionServices from './pages/services/InspectionServices.jsx'
import WhoWeAre from './pages/about/WhoWeAre.jsx'
import OurProcess from './pages/about/OurProcess.jsx'
import WhyExQual from './pages/about/WhyExQual.jsx'
import ClientTestimonials from './pages/about/ClientTestimonials.jsx'
import ContactPage from './pages/ContactPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/management-system-certification" element={<ManagementSystemCertification />} />
        <Route path="/services/industry-specific-certification" element={<IndustrySpecificCertification />} />
        <Route path="/services/product-certification" element={<ProductCertification />} />
        <Route path="/services/compliance-audits" element={<ComplianceAudits />} />
        <Route path="/services/accreditation-support" element={<AccreditationSupport />} />
        <Route path="/services/inspection-services" element={<InspectionServices />} />
        <Route path="/about/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/our-process" element={<OurProcess />} />
        <Route path="/about/why-exqual" element={<WhyExQual />} />
        <Route path="/about/client-testimonials" element={<ClientTestimonials />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
