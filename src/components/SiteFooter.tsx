import { Link } from 'react-router-dom'

const footerSocials = [
  { href: 'http://www.facebook.com/SunDevilRocketry/', label: 'Facebook' },
  { href: 'https://www.instagram.com/sun.devil.rocketry/', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/sun-devil-rocketry', label: 'LinkedIn' },
  { href: 'https://www.youtube.com/channel/UCQ922Kad6tfLVMjpdCOGOug/', label: 'YouTube' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <div className="footer-branding">
          <div className="footer-logo">
            <img src="/logo.png" alt="Sun Devil Rocketry logo" className="footer-logo-image" />
          </div>
          <p>
            Sun Devil Rocketry is an undergraduate student organization at Arizona State University focused on preparing students to become leaders in aerospace through valuable experiences in rocket propulsion development and high-power rocketry.
          </p>
        </div>

        <div className="footer-socials">
          {footerSocials.map(({ href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-badge">
              {label.substring(0, 1)}
            </a>
          ))}
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <span>Copyright © 2026 All rights reserved</span>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  )
}
