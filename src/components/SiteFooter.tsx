import { Link } from 'react-router-dom'

const footerSocials = [
  { href: 'http://www.facebook.com/SunDevilRocketry/', label: 'Facebook', imgSrc: '/img/social-logos/facebook.png' },
  { href: 'https://www.instagram.com/sun.devil.rocketry/', label: 'Instagram', imgSrc: '/img/social-logos/instagram.png' },
  { href: 'https://www.linkedin.com/company/sun-devil-rocketry', label: 'LinkedIn', imgSrc: '/img/social-logos/linkedin.png' },
  { href: 'https://www.youtube.com/channel/UCQ922Kad6tfLVMjpdCOGOug/', label: 'YouTube', imgSrc: '/img/social-logos/youtube.png' },
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
          {footerSocials.map(({ href, label, imgSrc }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="social-badge">
              <img src={imgSrc} alt={label} />
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-between section-shell footer-bottom">
        <div className="mt-2">Copyright © 2026 All rights reserved</div>
        <Link to="/contact" className="footer-contact-link">Contact Us</Link>
      </div>
    </footer>
  )
}
