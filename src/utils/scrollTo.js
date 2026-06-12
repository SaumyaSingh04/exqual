import { useNavigate, useLocation } from 'react-router-dom'

export function useScrollTo() {
  const navigate = useNavigate()
  const location = useLocation()

  return (sectionId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${sectionId}`)
    }
  }
}
