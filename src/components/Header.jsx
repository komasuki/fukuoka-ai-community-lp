import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      const headerHeight = 80
      const targetPosition = target.offsetTop - headerHeight
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#" className="logo">
            <span className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </span>
            <span className="logo-text">Fukuoka AI</span>
          </a>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><a href="#why" onClick={(e) => handleNavClick(e, '#why')}>なぜ今AI？</a></li>
              <li><a href="#benefits" onClick={(e) => handleNavClick(e, '#benefits')}>参加メリット</a></li>
              <li><a href="#events" onClick={(e) => handleNavClick(e, '#events')}>イベント</a></li>
              <li><a href="#channels" onClick={(e) => handleNavClick(e, '#channels')}>つながる</a></li>
              <li>
                <a href="#join" className="btn-nav" onClick={(e) => handleNavClick(e, '#join')}>
                  参加する
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
