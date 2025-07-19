import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ExperienceItem = ({ id, present, skills, sourcePractice }) => {
    return (_jsxs("div", { id: String(id), className: "bg-gray-700 bg-opacity-50 p-6 rounded-lg", children: [_jsx("h4", { className: "text-indigo-400 mb-1", children: present }), _jsx("h5", { className: "text-xl font-bold mb-2", children: skills }), _jsx("p", { className: "text-gray-400", children: sourcePractice })] }));
};
