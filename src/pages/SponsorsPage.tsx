import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import airtechLogo from '../../img/logos/sponsors/airtech.png'
import asuLogo from '../../img/logos/sponsors/asu.png'
import blueOriginLogo from '../../img/logos/sponsors/blue-origin.png'
import threeDConnexionLogo from '../../img/logos/sponsors/3d-connexion-logo.png'
import epsilon3Logo from '../../img/logos/sponsors/Epsilon3.webp'
import epsonLogo from '../../img/logos/sponsors/Epson_logo.svg.png'
import labJackLogo from '../../img/logos/sponsors/LabJack.png'
import raytheonLogo from '../../img/logos/sponsors/raytheon.png'
import sendCutSendLogo from '../../img/logos/sponsors/send-cut-send.webp'
import synnaxLogo from '../../img/logos/sponsors/synnax.png'

const sponsorTiers = [
  {
    name: 'Gold Sponsors',
    sponsors: [
      { name: 'Arizona State University Fulton Schools of Engineering', href: 'https://engineering.asu.edu/', logo: asuLogo, darkLogo: true },
      { name: 'LabJack', href: 'https://labjack.com/', logo: labJackLogo },
      { name: '3Dconnexion', href: 'https://3dconnexion.com/us/', logo: threeDConnexionLogo, darkLogo: true },
      { name: 'Epson LabelWorks', href: 'https://labelworks.epson.com/', logo: epsonLogo },
      { name: 'Airtech', href: 'https://airtech.com/', logo: airtechLogo },
      { name: 'Synnax', href: 'https://synnaxlabs.com/', logo: synnaxLogo, darkLogo: true },
      { name: 'Blue Origin', href: 'https://www.blueorigin.com/', logo: blueOriginLogo },
      { name: 'Epsilon3', href: 'https://www.epsilon3.io/', logo: epsilon3Logo, darkLogo: true },
      { name: 'SendCutSend', href: 'https://www.sendcutsend.com/', logo: sendCutSendLogo, darkLogo: true },
    ],
  },
  {
    name: 'Silver Sponsors',
    sponsors: [
      { name: 'RTX (Raytheon)', href: 'https://www.rtx.com/raytheon', logo: raytheonLogo, darkLogo: true },
    ],
  },
]

export function SponsorsPage() {
  return (
    <div className="sponsor-page">
      <section className="page-section sponsor-intro theme-dark">
        <div className="section-shell narrow-shell">
          <PageHeader
            eyebrow="Our partners"
            title="Our sponsors."
            description="Thank you to our sponsors! Their support is what makes Sun Devil Rocketry's work possible."
          />

          <div className="sponsor-page-actions">
            <Link className="primary-button" to="/contact">
              Become a sponsor
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section sponsor-list theme-light">
        <div className="section-shell narrow-shell">
          {sponsorTiers.map(({ name, sponsors }) => (
            <section className="sponsor-tier" key={name} aria-labelledby={`${name.toLowerCase().replaceAll(' ', '-')}-heading`}>
              <h3 id={`${name.toLowerCase().replaceAll(' ', '-')}-heading`}>{name}</h3>
              <div className="sponsor-grid">
                {sponsors.map(({ darkLogo, ...sponsor }) => (
                  <a
                    className={`sponsor-card${darkLogo ? ' sponsor-card-dark-logo' : ''}`}
                    href={sponsor.href}
                    key={sponsor.name}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={sponsor.name}
                  >
                    <img src={sponsor.logo} alt={`${sponsor.name} logo`} />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
