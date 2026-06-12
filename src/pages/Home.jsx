import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Process from '../components/Process/Process'
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

export default function Home() {
  const { hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hash) return
    if (hash === '#contact') { navigate('/contact', { replace: true }); return }
    const id = hash.replace('#', '')
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(id)
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
      if (attempts < 10) setTimeout(() => tryScroll(attempts + 1), 100)
    }
    tryScroll()
  }, [hash])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
