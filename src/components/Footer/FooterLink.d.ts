import type { JSX } from 'react';
/**
 * Footer_Link - Reusable link component for footer navigation
 *
 * @param {Object} props - Component props
 * @param {string} props.link - The display text for the link
 * @param {string} props.href - The URL destination for the link
 *
 * Features:
 * - Semantic list item structure
 * - Smooth color transition on hover
 * - Consistent styling with footer theme
 */
export declare const FooterLink: ({ link, href }: {
    link: string;
    href: string;
}) => JSX.Element;
