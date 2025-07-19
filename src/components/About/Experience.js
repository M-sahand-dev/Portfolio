import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExperienceItem } from './index';
export const Experience = ({ experience, }) => {
    return (_jsxs("div", { className: "md:w-1/2 md:pr-6 mb-10 md:mb-0", children: [_jsx("h3", { className: "text-2xl font-bold mb-6", children: "My Experience" }), _jsx("div", { className: "space-y-6", children: experience.map((item) => (
                // Each item represents a job or skill experience block
                _jsx(ExperienceItem, { ...item }, item.id))) })] }));
};
