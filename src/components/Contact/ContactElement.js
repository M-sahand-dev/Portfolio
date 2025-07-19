import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContactContentAbout, ContactForm } from './index';
export const ContactElement = () => {
    return (_jsx("div", { id: "contact", className: "py-20", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h4", { className: "text-indigo-400 text-lg mb-2", children: "Get in Touch" }), _jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Contact Me" }), _jsx("div", { className: "w-20 h-1 bg-indigo-600 mx-auto" })] }), _jsxs("div", { className: "flex flex-col md:flex-row", children: [_jsx(ContactContentAbout, {}), _jsx(ContactForm, {})] })] }) }));
};
