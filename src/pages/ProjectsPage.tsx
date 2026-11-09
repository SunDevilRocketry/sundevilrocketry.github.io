import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { siteContent } from '../data/content'

export function ProjectsPage() {
  const projects = siteContent.getProjects()

  return (
    <div className="page-section">
      <div className="section-shell narrow-shell">
        <PageHeader
          eyebrow="Projects"
          title="Explore the work that moves our club forward."
          description=""
        />

        <div className="project-rail mt-large">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="project-slide-card">
              <div className="project-slide-media">
                <img src={project.image} alt={project.title} className="project-slide-image" />
              </div>
              <div className="project-slide-copy">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
