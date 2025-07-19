import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { borderVariants, imageVariants } from '../../constants';
import Mehdi from '../../assets/profile/Mehdi.jpg';
export const HeroSectionProfile = () => {
    return (_jsx(motion.div, { className: "md:w-1/2 flex justify-center", variants: imageVariants, children: _jsxs("div", { className: "relative", children: [_jsx(motion.div, { className: "absolute -top-6 -left-6 w-full h-full border-2 border-indigo-400 rounded-lg z-0", variants: borderVariants }), _jsx(motion.img, { src: Mehdi, alt: "Profile", className: "relative z-10 rounded-lg w-80 h-96 object-cover", whileHover: { scale: 1.03 }, transition: { type: 'spring', stiffness: 400, damping: 10 } })] }) }));
};
