import { PageHeader } from '../components/PageHeader'
import { MembersPage } from './MembersPage'



export function AboutPage() {
  return (
    <>
      <div className="page-section theme-dark ">
        <div className="section-shell narrow-shell ">
          <PageHeader
            eyebrow="About"
            title="Sun Devil Rocketry is ASU's aerospace community."

            description=""
          />
          <h2 className="mt-large opacity-80">
            SDR, formerly Daedalus Astronautics, is an organization within Arizona State University’s Ira A. Fulton Schools of Engineering. The structure of the club is multifaceted and deeply rooted in research and development of rocketry technologies, as well as community involvement and professional strengthening of its members.
            <br/> 
            <br/> 
            SDR believes that rocketry should be accessible to everybody, even with no prior experience. 
            The Introduction Teams are designed to instruct new members from modeling a rocket digitally all the way to launching it in the desert. SDR also has long-standing relations with local elementary schools. 
            Throughout the year, club members visit classrooms to teach the basics of rocketry and walk students through building their own rocket.
          </h2>
        </div>
      </div>

      <MembersPage />
    </>
  )
}
