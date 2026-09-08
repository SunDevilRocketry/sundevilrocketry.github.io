import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { siteContent } from '../data/content'

export function HomePage() {
  const featuredProjects = siteContent.getFeaturedProjects(3)
  const heroSlides = siteContent.getHeroSlides()
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [heroSlides.length])

  const activeHero = heroSlides[activeSlide]

  return (
    <>
      <section className="hero-panel hero-slider">
        <div className="hero-slide-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {heroSlides.map((slide) => (
            <div key={slide.id} className="hero-slide">
              <img src={slide.image} alt={slide.eyebrow} className="hero-slide-image" />
              <div className="hero-slide-overlay" />
            </div>
          ))}
        </div>

        <div className="hero-content-overlay">
          <p className="hero-eyebrow">{activeHero.eyebrow}</p>
          <div className="hero-word">{activeHero.title}</div>
          <div className="hero-word">{activeHero.subtitle}</div>
          <div className="hero-word">{activeHero.tagline}</div>

          <div className="hero-cta-row">
            <a className="primary-cta" href="https://sundevilcentral.eoss.asu.edu/feeds?type=club&type_id=35474&tab=about" target="_blank" rel="noreferrer">
              Join our club
            </a>
          </div>
        </div>

        <div className="hero-dots" aria-label="Hero slide controls">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-dot ${index === activeSlide ? 'is-active' : ''}`}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="content-section intro-section theme-dark py-20">
        <span className="section-divider" />
        <div className="section-shell">
          <h2>WELCOME TO SUN DEVIL ROCKETRY</h2>
          <p className="intro-copy">Join us!</p>
          <p className="intro-body">
            Sun Devil Rocketry, Arizona State University&apos;s oldest rocketry student organization, helps prepare students to become leaders in aerospace through meaningful projects, interactions, and experiences. Our members have the opportunity to explore and make contributions to solid and liquid rocket propulsion research and development. In addition, our members design, manufacture, and launch high-power rockets for competitive and experimental purposes. Our award-winning outreach program exposes hundreds of K-12 students to rocketry each year. Contact us to learn more about how you can become better prepared for industry and graduate school through applied projects.
          </p>
        </div>
        <span className="section-divider" />
      </section>

      <span className="section-divider" />
      <span className="section-divider" />

      <section className="content-section projects-section theme-light">
        <div className="section-shell">
          <div className="section-heading-row home-projects-heading">
            <h2>Projects</h2>
          </div>

          <div className="project-rail home-project-rail">
            {featuredProjects.map((project) => (
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

          <div className="projects-section-link-wrap">
            <Link to="/projects" className="projects-section-link">
              View all projects
            </Link>
          </div>
        </div>
      </section>

      <span className="section-divider" />

      <section className="content-section support-section theme-light">
        <div className="section-shell support-box">
          <div>
            <h2>Support Sun Devil Rocketry</h2>
            <p>
              Nothing we do would be possible without the support of our donors, corporate sponsors, and talented membership. Be part of the future of aerospace, and support Sun Devil Rocketry today!
            </p>
          </div>
          <div className="support-actions">
            <a href="./sponsors.html" className="support-link">donate</a>
            <a href="./sponsors.html" className="support-link">become a sponsor</a>
          </div>
        </div>
      </section>

      <span className="section-divider" />
      <span className="section-divider" />

    </>
  )
}
