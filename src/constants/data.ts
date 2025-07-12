import type {
  NavItem,
  LanguagesProps,
  SkillsProps,
  EducationProps,
  ExperienceProps,
  PortfolioData,
} from '../types';
import test from "../assets/pikaso-composition.jpg";

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', link: '/' },
  { id: 'about', label: 'About', link: '/about' },
  { id: 'portfolio', label: 'Portfolio', link: '/portfolio' },
  { id: 'testimonials', label: 'Testimonials', link: '/testimonials' },
  { id: 'blog', label: 'Blog', link: '/blog' },
  { id: 'contact', label: 'Contact', link: '/contact' },
];

export const languages: LanguagesProps[] = [
  { id: 1, language: "reading", grade: 60 },
  { id: 2, language: "speaking", grade: 50 },
  { id: 3, language: "listening", grade: 55 },
  { id: 4, language: "grammar", grade: 70 },
]
export const   skills: SkillsProps[]= [
  { id: 1, skill: "HTML & CSS", grade: 90 },
  { id: 2, skill: "Tailwind CSS", grade: 80 },
  { id: 3, skill: "Bootstrap", grade: 50 },
  { id: 4, skill: "JavaScript", grade: 60 },
  { id: 5, skill: "Git & GitHub", grade: 55 },
  { id: 6, skill: "React.js", grade: 40 },
  { id: 7, skill: "jQuery", grade: 40 },
  { id: 8, skill: "Adobe Photoshop", grade: 75 },
  { id: 9, skill: "Adobe Illustrator", grade: 65 },
]
export const experience: ExperienceProps[] = [
  {
    id: 1,
    present: '2025 Present',
    skills: 'React.js developer',
    sourcePractice: 'Apadana',
  },
  {
    id: 2,
    present: '2024 Present',
    skills: 'JavaScript developer',
    sourcePractice: 'Jonas',
  },
];
export const education: EducationProps[]= [
  {
    id: 1,
    years: "2023 - 2025",
    education: "Master in Computer Science",
    university: "Harvard University",
  },
  {
    id: 2,
    years: "2023 - 2025",
    education: "Master in Computer Science",
    university: "Harvard University",
  },
]
export const portForioData:PortfolioData[] = [
  {
    id: 1,
    title: "Creative Design",
    category: "Design",
    description: "UI/UX Design",
    Image: test,
  },
  {
    id: 2,
    title: "Creative Design",
    category: "Design",
    description: "UI/UX Design",
    Image: test,
  },
  {
    id: 3,
    title: "Creative Design",
    category: "Design",
    description: "UI/UX Design",
    Image: test,
  },
  {
    id: 4,
    title: "Mobile App Design",
    category: "Design",
    description: "UI/UX Design",
    Image: test,
  },
  {
    id: 5,
    title: "Web Application",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 6,
    title: "E-commerce Website",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 7,
    title: "E-commerce Website",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 8,
    title: "E-commerce Website",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 9,
    title: "E-commerce Website",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 10,
    title: "E-commerce Website",
    category: "Development",
    description: "Web Development",
    Image: test,
  },
  {
    id: 11,
    title: "Brand Identity",
    category: "Branding",
    description: "Branding",
    Image: test,
  },
  {
    id: 12,
    title: "Corporate Branding",
    category: "Branding",
    description: "Branding",
    Image: test,
  },
];