import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { siteNavigation } from '../data/content'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand" aria-label="Sun Devil Rocketry home">
          <img src="/img/big_logo.png" alt="Sun Devil Rocketry logo" className="brand-logo" />
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="nav-toggle-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {siteNavigation.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
