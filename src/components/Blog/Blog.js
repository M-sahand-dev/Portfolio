import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { blogPost } from '../../constants/data';
import { BLogContent } from './index';
export const Blog = () => {
    const [post] = useState(blogPost);
    return (_jsx("div", { id: "blog", className: "py-20 bg-gray-800", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h4", { className: "text-indigo-400 text-lg mb-2", children: "Recent Posts" }), _jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "From My Blog" }), _jsx("div", { className: "w-20 h-1 bg-indigo-600 mx-auto" })] }), _jsx(BLogContent, { post: post }), _jsx("div", { className: "text-center mt-12", children: _jsx("a", { href: "#", className: "inline-block border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition duration-300", children: "View All Posts" }) })] }) }));
};
