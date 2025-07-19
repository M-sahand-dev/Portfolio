import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header, HeroSection, About, Services, Portfolio, Testimonials, Contact, BackTop } from "./index";
import { motion } from "framer-motion";
import { pageVariants } from "../constants";
import { Blog } from "./Blog";
export default function LandingPage() {
    return (_jsxs(motion.div, { initial: "initial", animate: "in", exit: "out", variants: pageVariants, className: "main-content", children: [_jsx(Header, {}), _jsx(HeroSection, {}), _jsx(About, {}), _jsx(Services, {}), _jsx(Portfolio, {}), _jsx(Testimonials, {}), _jsx(Blog, {}), _jsx(Contact, {}), _jsx(BackTop, {})] }, "content"));
}
