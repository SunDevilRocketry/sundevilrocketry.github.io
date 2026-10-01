import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="page-section">
      <div className="section-shell narrow-shell text-center">
        <div className="not-found-box">
          <p className="eyebrow">404</p>
          <h2>Yikes! No rockets here.</h2>
          <Link to="/" className="primary-button inline-button">
            <div className="rocketImages">
            <img src="/img/404images/rocket-image-flameless.png" alt="" className="rocket404-image"/>
            <img src="/img/404images/rocket-image.png" alt="" className="rocket404-image"/>

            </div>
            Return home <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
