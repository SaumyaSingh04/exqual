import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Process from '../components/Process/Process'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Stats from '../components/Stats/Stats'
import Industries from '../components/Industries/Industries'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
        <Stats />
        <Industries />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
