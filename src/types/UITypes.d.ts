import type { IconType } from 'react-icons';
export interface MobileNavProps {
    isOpen: boolean;
    onClick: () => void;
}
export interface NavItem {
    id: string;
    label: string;
    offset: number;
}
export interface NavMobileProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
}
export interface DescriptionProps {
    name: string;
    family: string;
    skils: string;
    info: string;
}
export interface LanguagesProps {
    id: number;
    language: string;
    grade: number;
}
export interface SkillsProps {
    id: number;
    skill: string;
    grade: number;
}
export interface EducationProps {
    id: number;
    years: string;
    education: string;
    university: string;
}
export interface ExperienceProps {
    id: number;
    present: string;
    skills: string;
    sourcePractice: string;
}
export interface ExperienceComponentProps {
    experience: ExperienceProps[];
}
export interface InfoProps {
    id: string;
    name: string;
    Info: string;
    Info2: string;
}
export interface InformationSectionProps {
    id: string;
    classStyle: string;
    name: string;
    email: string;
    age: number;
    from: string;
}
export interface PortfolioData {
    id: number;
    title: string;
    category: string;
    description: string;
    Image: string;
}
export interface BlogPostProps {
    id: number;
    image: string;
    lengthComments: number;
    date: string;
    title: string;
    content: string;
}
export interface Testimonial {
    image: string;
    name: string;
    revioe: string;
    education: string;
}
export interface BlogPostPropsContent {
    post: BlogPostProps[];
}
export interface ContactLinkProps {
    id: number;
    link: string;
    icon: IconType;
}
export interface CategoryProps {
    children: string;
    onClick: () => void;
}
export interface ServicesProps {
    id: number;
    icon: IconType;
    skill: string;
    poraghraph: string;
}
