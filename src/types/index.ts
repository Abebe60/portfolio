export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'Data Engineering' | 'AI & LLM' | 'Backend & APIs' | 'Full-Stack';
  tags: string[];
  metrics: { label: string; value: string }[];
  architectureUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  codeSnippet?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    icon: string;
    popular?: boolean;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
