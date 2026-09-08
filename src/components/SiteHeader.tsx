import { NavLink } from 'react-router-dom'
import { siteNavigation } from '../data/content'

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand" aria-label="Sun Devil Rocketry home">
          <img src="/img/big_logo.png" alt="Sun Devil Rocketry logo" className="brand-logo" />
        </div>

        <nav className="primary-nav" aria-label="Primary navigation">
          {siteNavigation.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
