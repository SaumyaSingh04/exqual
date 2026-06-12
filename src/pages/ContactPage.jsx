import { useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
