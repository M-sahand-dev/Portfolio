import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { skills } from '../../constants';
export const SkilsItem = () => {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: skills.map((item, index) => (_jsxs("div", { children: [_jsxs("div", { className: "flex justify-between mb-2", children: [_jsx("span", { className: "text-gray-300", children: item.skill }), _jsxs("span", { className: "text-gray-300", children: [item.grade, "%"] })] }), _jsx("div", { className: "w-full bg-gray-700 rounded-full h-2", children: _jsx(motion.div, { className: "bg-indigo-600 h-2 rounded-full", initial: { width: 0 }, animate: { width: `${item.grade}%` }, transition: {
                            duration: 1.5,
                            ease: 'easeInOut',
                            delay: item.id * 0.2, // stagger animation by item id
                        } }) })] }, index))) }));
};
