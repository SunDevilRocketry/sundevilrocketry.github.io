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
            description="Excited about what we're doing? Interested in sponsoring or joining us? Just want to get in touch? We're here to field your questions."
          />

          <div className="contact-list">
            <div><Globe size={18} /> rocketry.asu@gmail.com</div>
            <div><Briefcase size={18} /> Tempe, Arizona</div>
          </div>
        </div>
        
        
        {/*ETS: This form has been temporarily disabled since it was not wired properly.
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
        </form> */}
      </div>
    </div>
  )
}
