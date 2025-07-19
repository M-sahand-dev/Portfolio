import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FooterLink, FooterContainerLink } from './index';
/**
 * Footer component - Displays the website footer with copyright and navigation links
 *
 * Features:
 * - Responsive layout (stacked on mobile, horizontal on desktop)
 * - Copyright notice with dynamic year
 * - Navigation links section
 * - Dark theme with subtle border
 */
export const Footer = () => {
    return (
    // Main footer container with dark background and top border
    _jsx("footer", { className: "bg-gray-900 py-10 border-t border-gray-800", children: _jsx("div", { className: "container mx-auto px-6", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center", children: [_jsx("div", { className: "mb-6 md:mb-0", children: _jsx("p", { className: "text-gray-400", children: "\u00A9 2025 Mehdi Leylaei. All rights reserved." }) }), _jsx("div", { className: "", children: _jsxs(FooterContainerLink, { children: [_jsx(FooterLink, { href: '#', link: 'Home' }), _jsx(FooterLink, { href: '#', link: 'Privacy' }), _jsx(FooterLink, { href: '#', link: 'Terms' }), _jsx(FooterLink, { href: '#', link: 'FAQ' })] }) })] }) }) }));
};
