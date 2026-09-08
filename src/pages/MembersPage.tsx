import { PageHeader } from '../components/PageHeader'
import { siteContent } from '../data/content'

export function MembersPage() {
  const members = siteContent.getMembers()

  return (
    <div className="page-section">
      <div className="section-shell narrow-shell">
        <PageHeader
          eyebrow="Members"
          title="Our Team"
          description="Sun Devil Rocketry's team of student leaders help propel our organization to new heights!"
        />

        <div className="member-grid mt-large">
          {members.map((member) => (
            <article key={member.id} className="member-card">
              <div className="member-image-wrap">
                <img src={member.image} alt={member.name} className="member-image" />
              </div>

              <div className="member-card-body">
                <h3>{member.name}</h3>
                <h1 className="member-role">{member.role}</h1>
                <p className="member-bio">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
