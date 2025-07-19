import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { NavigationMobileMenuBtn, NavigationMobileMenu } from './index';
import { navItems } from '../../constants';
export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => {
            document.body.style.overflow = !prev ? 'hidden' : '';
            return !prev;
        });
    };
    return (_jsx("header", { className: "fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg", children: _jsxs("div", { className: "container mx-auto px-6 py-4", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx(Link, { to: '/', className: "text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer", children: "Mehdi Leylaei" }), _jsx("nav", { className: "hidden lg:flex space-x-6 *:px-3 *:py-2 *:text-sm *:font-medium *:text-gray-300 *:hover:text-white *:transition-colors *:cursor-pointer", children: navItems.map((item) => (_jsx(Link, { to: item.id, spy: true, smooth: true, offset: item.offset, duration: 500, className: "px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer", activeClass: "text-indigo-400 font-semibold", children: item.label }, item.id))) }), _jsx(NavigationMobileMenuBtn, { isOpen: isMobileMenuOpen, onClick: toggleMobileMenu })] }), _jsx(NavigationMobileMenu, { isOpen: isMobileMenuOpen, onClose: toggleMobileMenu, navItems: navItems })] }) }));
};
