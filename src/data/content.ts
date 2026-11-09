import heroSlidesData from './heroSlides.json'
import projectsData from './projects.json'
import membersData from './members.json'
import type { HeroSlide, Member, Project } from '../types/content'

const projectMarkdownFiles = import.meta.glob('../../projects/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
}) as Record<string, string>

const projectMediaFiles = import.meta.glob('../../img/**/*.{mp4,webm,ogg,mov}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

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

  getProjectContent(path: string): string {
    const fileName = path.split('/').pop()
    return fileName ? projectMarkdownFiles[`../../projects/${fileName}`] ?? '' : ''
  }

  getProjectMediaUrl(path: string): string {
    const sourcePath = path.replace(/^\/img\//, '../../img/')
    return projectMediaFiles[sourcePath] ?? path
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
