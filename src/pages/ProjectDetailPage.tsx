import { ArrowLeft } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { siteContent } from '../data/content'

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = id ? siteContent.getProjectById(id) : undefined

  if (!project) {
    return (
      <div className="page-section">
        <div className="section-shell narrow-shell text-center">
          <div className="not-found-box">
            <p className="eyebrow">Project</p>
            <h2>Project not found.</h2>
            <Link to="/projects" className="primary-button inline-button">
              <ArrowLeft size={18} /> Back to projects
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section project-detail-page">
      <div className="section-shell narrow-shell">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="project-detail-hero">
          <div className="project-detail-image-wrap">
            <img src={project.image} alt={project.title} className="project-detail-image" />
          </div>
          <div className="project-detail-copy">
            <p className="eyebrow">{project.phase}</p>
            <h2>{project.title}</h2>
            <p className="project-detail-summary">{project.summary}</p>
          </div>
        </div>

        <div className="project-detail-grid">
          <section className="detail-panel">
            <h3>About this project</h3>
            <p>{project.description}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
