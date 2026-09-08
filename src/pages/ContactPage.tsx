import { ArrowRight, Briefcase, Globe } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'

export function ContactPage() {
  return (
    <div className="page-section">
      <div className="section-shell narrow-shell two-column-contact">
        <div>
          <PageHeader
            eyebrow="Contact"
            title="Get in touch with Sun Devil Rocketry."
            description="We love connecting with students, mentors, alumni, and sponsors who want to support our mission and grow the club."
          />

          <div className="contact-list">
            <div><Globe size={18} /> hello@sundevilrocketry.org</div>
            <div><Briefcase size={18} /> Tempe, Arizona</div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-grid">
            <label>
              Name
              <input placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@asu.edu" />
            </label>
          </div>

          <label>
            Interest
            <input placeholder="Membership, sponsorship, collaboration..." />
          </label>

          <label>
            Message
            <textarea rows={5} placeholder="Tell us about your interest or project." />
          </label>

          <button type="submit" className="primary-button">
            Send inquiry <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  )
}
