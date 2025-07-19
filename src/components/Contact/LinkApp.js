import { jsx as _jsx } from "react/jsx-runtime";
export const LinkApp = ({ href, icon, }) => {
    return (
    // Link button with icon and hover styles for contact methods
    _jsx("a", { href: href, className: "w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition", children: icon }));
};
