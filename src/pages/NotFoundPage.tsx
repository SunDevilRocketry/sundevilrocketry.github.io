import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="page-section">
      <div className="section-shell narrow-shell text-center">
        <div className="not-found-box">
          <p className="eyebrow">404</p>
          <h2>Page not found.</h2>
          <Link to="/" className="primary-button inline-button">
            Return home <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
