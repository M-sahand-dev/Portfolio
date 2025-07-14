import type {JSX} from 'react'

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
export const FooterLink = ({ link, href }: { link: string; href: string }):JSX.Element => {
  return (
    // List item wrapper for proper semantic structure
    <li>
      {/*
       * Actual link element with:
       * - Default gray color
       * - Hover effect changing to indigo
       * - Smooth transition animation
       */}
      <a
        href={href}
        className="text-gray-400 hover:text-indigo-400 transition"
        aria-label={`Navigate to ${link}`}
      >
        {link}
      </a>
    </li>
  );
};