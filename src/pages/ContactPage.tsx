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
        <form className="contact-form" action="https://formspree.io/xlepgddz" method="post">
          <div className="form-grid mb-2">
            <label>
              Full name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="_replyto" type="email" placeholder="you@asu.edu" required />
            </label>
          </div>

          <label className='mb-2'>
            Subject
            <input name="_subject" type="text" placeholder="How can we help?" required />
          </label>

          <label>
            Message
            <textarea name="message" rows={5} placeholder="Tell us about your interest or project." required />
          </label>

          <button type="submit" className="primary-button">
            Send message <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  )
}
