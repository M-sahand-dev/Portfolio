import { jsx as _jsx } from "react/jsx-runtime";
import { BlogPost } from './index';
export const BLogContent = ({ post }) => {
    return (
    // Grid container rendering a list of blog posts
    _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: post.map((item) => (
        // Render each blog post with unique key and spread props
        _jsx(BlogPost, { ...item }, item.id))) }));
};
