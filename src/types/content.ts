export interface Project {
  id: string
  title: string
  summary: string
  description: string
  phase: string
  status: string
  tags: string[]
  image: string
}

export interface Member {
  id: string
  name: string
  role: string
  team: string
  bio: string
  image: string
}

export interface HeroSlide {
  id: string
  image: string
  eyebrow: string
  title: string
  subtitle: string
  tagline: string
}
