import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { languages } from '../../constants';
export const LanguageSkils = () => {
    return (_jsxs("div", { children: [_jsx("h4", { className: "text-center text-2xl mb-8 font-bold", children: "English" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: languages.map((item) => {
                    return (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { className: "text-gray-300", children: item.language }), _jsxs("span", { className: "text-gray-300", children: [item.grade, "%"] })] }), _jsx("div", { className: "w-full bg-gray-700 rounded-full h-2", children: _jsx(motion.div, { className: "bg-indigo-600 h-2 rounded-full", initial: { width: 0 }, animate: { width: `${item.grade}%` }, transition: {
                                        duration: 1.5,
                                        ease: 'easeInOut',
                                        delay: item.id * 0.2, // sequential animation
                                    } }) })] }, item.id));
                }) })] }));
};
