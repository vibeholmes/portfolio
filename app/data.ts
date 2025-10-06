type Project = {
  name: string
  description: string
  link: string
  image: string
  video?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Certificate = {
  course: string
  issuer: string
  description: string
  link: string
  image: string
  video?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = { label: string; link: string }

export const PROJECTS: Project[] = [
  {
    name: 'BGIS',
    description:
      'BGIS is a facilities management and real estate services private company headquartered in Markham, Ontario, Canada, with a staff of over 10,000 globally.',
    link: 'https://www.bgis.com/',
    image: '/projects/bgis.png',
    id: 'project1',
  },
  {
    name: 'Helcim',
    description:
      'Helcim is the easy and affordable solution for small and medium businesses accepting credit card payments in-person or online.',
    link: 'https://www.helcim.com/',
    image: '/projects/helcim.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'iQlance',
    title: 'Senior Software Engineer',
    start: '2023',
    end: 'Present',
    link: 'https://www.iqlance.com/',
    id: 'work1',
  },
  {
    company: 'BGIS',
    title: 'Software Engineer',
    start: '2019',
    end: '2023',
    link: 'https://www.bgis.com/',
    id: 'work2',
  },
  {
    company: 'Helcim',
    title: 'Junior Web Developer',
    start: '2018',
    end: '2019',
    link: 'https://www.helcim.com/',
    id: 'work3',
  },
]

export const CERTIFICATES: Certificate[] = [
  {
    course: 'Machine Learning A-Z',
    issuer: 'Udemy',
    description: '',
    link: 'https://www.udemy.com/certificate/UC-990bd0de-74c5-4268-a80e-fce2996d4aaf/',
    image: '/certificates/UC-990bd0de-74c5-4268-a80e-fce2996d4aaf.jpg',
    id: 'certificate1',
  },
  {
    course: 'SQL (Advanced) Certificate',
    issuer: 'HackerRank',
    description: '',
    link: 'https://www.hackerrank.com/certificates/d5b4dfbcc787',
    image: '/certificates/d5b4dfbcc787.png',
    id: 'certificate2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-2',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Github', link: 'https://github.com/vibeholmes' },
  { label: 'Twitter', link: 'https://x.com/vibeholmes' },
]

export const EMAIL = 'brennanholmesx@gmail.com'
