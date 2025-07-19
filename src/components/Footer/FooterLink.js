import { jsx as _jsx } from "react/jsx-runtime";
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
export const FooterLink = ({ link, href }) => {
    return (
    // List item wrapper for proper semantic structure
    _jsx("li", { children: _jsx("a", { href: href, className: "text-gray-400 hover:text-indigo-400 transition", "aria-label": `Navigate to ${link}`, children: link }) }));
};
