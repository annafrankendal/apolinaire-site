import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SHOP_URL } from '@/data/products'
import { imgSrc } from '@/lib/img'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = !isHome || scrolled
  const textColor = solid ? '#1A1A18' : '#F4EFE4'
  const borderColor = solid ? '#1A1A18' : '#F4EFE4'

  const navItems = [
    { label: 'Våra drycker', href: '/smaker', internal: true },
    { label: 'För företag', href: '/foretag', internal: true },
    { label: 'Inspiration', href: '/inspiration', internal: true },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: solid ? 'rgba(244,239,228,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(8px)' : 'none',
        borderBottom: solid ? '1px solid #D8D2C4' : 'none',
      }}
    >
      <div className="container-editorial flex items-center justify-between py-5">
        <Link to="/" className="flex items-center">
          <img
            src={imgSrc('/images/logo-apolinaire.png')}
            alt="Apolinaire"
            style={{
              height: '18px',
              width: 'auto',
              filter: solid ? 'brightness(0)' : 'brightness(0) invert(1)',
              transition: 'filter 0.5s ease',
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.label} to={item.href}
              className="eyebrow transition-opacity hover:opacity-60"
              style={{ color: textColor }}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={SHOP_URL} target="_blank" rel="noreferrer"
          className="eyebrow px-5 py-2 border transition-all hover:opacity-80"
          style={{ color: textColor, borderColor }}>
          Beställ
        </a>
      </div>
    </header>
  )
}
