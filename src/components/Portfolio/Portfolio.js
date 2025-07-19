import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { portForioData } from '../../constants';
import { CategorisContainer, PortfolioItemsContainer } from './index';
export const Portfolio = () => {
    // Local state for current filtered items
    const [portforioItem, setPortforioItem] = useState(portForioData);
    // Handle category filtering
    const filterItems = (category) => {
        // console.log('Filtering by category:', category); // Debug: can be removed in production
        // setPortforioItem(portForioData)
        if (category === 'all') {
            setPortforioItem(portForioData);
            return;
        }
        // Filter portfolio data by category
        const newCategory = portForioData.filter((item) => item.category === category);
        setPortforioItem(newCategory);
    };
    return (_jsx("section", { id: "portfolio", className: "py-20 bg-gray-800", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h4", { className: "text-indigo-400 text-lg mb-2", children: "My Work" }), _jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Featured Projects" }), _jsx("div", { className: "w-20 h-1 bg-indigo-600 mx-auto" })] }), _jsx(CategorisContainer, { filterItems: filterItems }), _jsx(PortfolioItemsContainer, { portforioItem: portforioItem }), _jsx("div", { className: "text-center mt-12", children: _jsx("a", { href: "#", className: "inline-block border border-indigo-600 text-indigo-400 \r\n                           hover:bg-indigo-600 hover:text-white \r\n                           px-6 py-3 rounded-md transition duration-300", children: "View More Projects" }) })] }) }));
};
