import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const EducationItem = ({ id, years, education, university, }) => {
    return (_jsxs("div", { className: "bg-gray-700 bg-opacity-50 p-6 rounded-lg", children: [_jsx("h4", { className: "text-indigo-400 mb-1", children: years }), _jsx("h5", { className: "text-xl font-bold mb-2", children: education }), _jsx("p", { className: "text-gray-400", children: university })] }, id));
};
