import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { containerVariants } from "../../constants/animation";
import { Description, HeroSectionProfile } from "./index";
export const HeroSection = () => {
    return (_jsx("div", { id: 'home', className: "min-h-screen flex items-center pt-20", children: _jsxs(motion.div, { className: "container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center", initial: "hidden", animate: "visible", variants: containerVariants, children: [_jsx(Description, { name: "Mehdi", family: "Leylaei", skils: "React Developer & Frontend Developer", info: "I developing and build beautiful websites and applications that help people and businesses grow online." }), _jsx(HeroSectionProfile, {})] }) }));
};
