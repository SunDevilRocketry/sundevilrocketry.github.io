import heroSlidesData from './heroSlides.json'
import projectsData from './projects.json'
import membersData from './members.json'
import type { HeroSlide, Member, Project } from '../types/content'

export interface NavigationItem {
  label: string
  to: string
}

export class ContentRegistry {
  readonly projects: Project[]
  readonly members: Member[]
  readonly heroSlides: HeroSlide[]

  constructor(projects: Project[], members: Member[], heroSlides: HeroSlide[]) {
    this.projects = projects
    this.members = members
    this.heroSlides = heroSlides
  }

  getProjects(): Project[] {
    return [...this.projects]
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id)
  }

  getMembers(): Member[] {
    return [...this.members]
  }

  getHeroSlides(): HeroSlide[] {
    return [...this.heroSlides]
  }

  getFeaturedProjects(limit = 3): Project[] {
    return this.projects.slice(0, limit)
  }
}

export const siteNavigation: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

export const siteContent = new ContentRegistry(
  projectsData as Project[],
  membersData as Member[],
  heroSlidesData as HeroSlide[]
)
