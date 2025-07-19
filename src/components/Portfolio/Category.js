import { jsx as _jsx } from "react/jsx-runtime";
export const Category = ({ children, onClick }) => {
    return (
    // Calls onClick handler when clicked
    _jsx("button", { className: "portfolio-filter-btn", onClick: onClick, children: children }));
};
