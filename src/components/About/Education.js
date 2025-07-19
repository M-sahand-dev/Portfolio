import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import  { education } from '../../constants';
import { EducationItem } from './index';
export const Education = ({ education, }) => {
    return (_jsxs("div", { className: "md:w-1/2 md:pl-6", children: [_jsx("h3", { className: "text-2xl font-bold mb-6", children: "My Education" }), _jsx("div", { className: "space-y-6", children: education.map((item) => (
                // Each item renders a single education entry
                _jsx(EducationItem, { ...item }, item.id))) })] }));
};
