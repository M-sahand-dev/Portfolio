import type {
  NavItem,
  LanguagesProps,
  SkillsProps,
  EducationProps,
  ExperienceProps,
  PortfolioData,
  BlogPostProps,
  Testimonial,
  ContactLinkProps,
  ServicesProps,
} from '../types';

import { IoLogoTwitter } from 'react-icons/io';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaMobileAlt,
  FaSearch,
  FaPaintBrush,
  FaBullhorn,
  FaPalette,
  FaCode
} from 'react-icons/fa';

import test from '../assets/pikaso-composition.jpg';

export const navItems: NavItem[] = [
  { id: "home", label: "Home", offset: -150 },
  { id: "about", label: "About", offset: -50 },
  { id: "services", label: "Services", offset: -50 },
  { id: "portfolio", label: "Portfolio", offset: -50 },
  { id: "testimonials", label: "Testimonials", offset: -30 },
  { id: "blog", label: "Blog", offset: -30 },
  { id: "contact", label: "Contact", offset: -20 },
];

export const languages: LanguagesProps[] = [
  { id: 1, language: 'reading', grade: 60 },
  { id: 2, language: 'speaking', grade: 50 },
  { id: 3, language: 'listening', grade: 55 },
  { id: 4, language: 'grammar', grade: 70 },
];
export const skills: SkillsProps[] = [
  { id: 1, skill: 'HTML & CSS', grade: 90 },
  { id: 2, skill: 'Tailwind CSS', grade: 80 },
  { id: 3, skill: 'Bootstrap', grade: 50 },
  { id: 4, skill: 'JavaScript', grade: 60 },
  { id: 5, skill: 'Git & GitHub', grade: 55 },
  { id: 6, skill: 'React.js', grade: 40 },
  { id: 7, skill: 'jQuery', grade: 40 },
  { id: 8, skill: 'Adobe Photoshop', grade: 75 },
  { id: 9, skill: 'Adobe Illustrator', grade: 65 },
];
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
export const education: EducationProps[] = [
  {
    id: 1,
    years: '2023 - 2025',
    education: 'Master in Computer Science',
    university: 'Harvard University',
  },
  {
    id: 2,
    years: '2023 - 2025',
    education: 'Master in Computer Science',
    university: 'Harvard University',
  },
];
export const portForioData: PortfolioData[] = [
  {
    id: 1,
    title: 'Creative Design',
    category: 'Design',
    description: 'UI/UX Design',
    Image: test,
  },
  {
    id: 2,
    title: 'Creative Design',
    category: 'Design',
    description: 'UI/UX Design',
    Image: test,
  },
  {
    id: 3,
    title: 'Creative Design',
    category: 'Design',
    description: 'UI/UX Design',
    Image: test,
  },
  {
    id: 4,
    title: 'Mobile App Design',
    category: 'Design',
    description: 'UI/UX Design',
    Image: test,
  },
  {
    id: 5,
    title: 'Web Application',
    category: 'Development',
    description: 'Web Development',
    Image: test,
  },
  {
    id: 6,
    title: 'E-commerce Website',
    category: 'Development',
    description: 'Web Development',
    Image: test,
  },
];

export const blogPost: BlogPostProps[] = [
  {
    id: 1,
    image: 'https://www.sunucuteknik.com/wp-content/uploads/2022/02/java.jpg',
    lengthComments: 5,
    date: 'June 15, 2023',
    title: "How to Improve Your Website's User Experience",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
  {
    id: 2,
    lengthComments: 8,
    image:
      'https://miro.medium.com/v2/resize:fit:2000/1*8bPiDNL1K1ZdK9O_T5IVKw.png',
    date: 'May 15, 2023',
    title: "How to Improve Your Website's User Experience",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
  {
    id: 3,
    lengthComments: 10,
    date: 'October 28, 2024',
    image:
      'https://stepmediasoftware.com/wp-content/uploads/2025/02/what-is-golang-used-for-1200x640.webp',
    title: "How to Improve Your Website's User Experience",
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
];

// Static list of testimonial data
export const testimonials: Testimonial[] = [
  {
    image: 'https://www.course-api.com/images/people/person-1.jpeg',
    name: 'Susan Smith',
    revioe:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
    education: 'CEO, Tech Solutions Inc.',
  },
  {
    image: 'https://www.course-api.com/images/people/person-2.jpeg',
    name: 'Anna Johnson',
    revioe:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
    education: 'Marketing Director, Brandify Co.',
  },
  {
    image: 'https://www.course-api.com/images/people/person-4.jpeg',
    name: 'Peter Jones',
    revioe:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out...",
    education: 'Lead Developer, CodeCraft LLC',
  },
];

export const ContactLinks: ContactLinkProps[] = [
  {
    id: 1,
    link: 'https://x.com/M_sahand_js?t=Y3nphbBdHJupcrOUMiTtHA&s=09',
    icon: IoLogoTwitter,
  },
  {
    id: 2,
    link: 'https://www.instagram.com/m_sahand_js?igsh=MXIxZTZuaXg5dmRuNw==',
    icon: FaInstagram,
  },
  {
    id: 3,
    link: 'https://www.linkedin.com/in/mehdi-leilaei-0042162aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    link: 'https://github.com/M-sahand-dev',
    icon: FaGithub,
  },
  {
    id: 5,
    link: 'https://t.me/M_sahand_js',
    icon: FaTelegram,
  },
];

export const servicesProps: ServicesProps[] = [
  {
    id: 1,
    icon: FaPalette,
    skill: 'UI/UX Design',
    poraghraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
  {
    id: 2,
    icon: FaCode,
    skill: 'Web Development',
    poraghraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
  {
    id: 3,
    icon: FaMobileAlt,
    skill: 'App Development',
    poraghraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
  {
    id: 4,
    icon: FaSearch,
    skill: 'SEO Optimization',
    poraghraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
  {
    id: 5,
    icon: FaPaintBrush,
    skill: 'Graphic Design',
    poraghraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },
  {
    id: 2,
    icon: FaBullhorn,
    skill: 'Digital Marketing',
    poraghraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi velit, sit amet ultrices nisl tincidunt id.',
  },

];
