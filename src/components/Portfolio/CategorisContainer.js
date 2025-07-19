import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Category } from './index';
// Container for rendering category filter buttons or tags in a centered, wrapped layout
export const CategorisContainer = ({ filterItems, }) => {
    return (_jsx("div", { className: "flex justify-center mb-12", children: _jsxs("div", { className: "inline-flex flex-wrap justify-center gap-2", children: [_jsx(Category, { onClick: () => filterItems('all'), children: "All" }), _jsx(Category, { onClick: () => filterItems('Design'), children: "Design" }), _jsx(Category, { onClick: () => filterItems('Development'), children: "Development" }), _jsx(Category, { onClick: () => filterItems('Branding'), children: "Branding" })] }) }));
};
