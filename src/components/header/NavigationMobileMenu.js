import { jsx as _jsx } from "react/jsx-runtime";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-scroll";
export const NavigationMobileMenu = ({ isOpen, onClose, navItems, }) => {
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: {
                opacity: 1,
                height: 'auto',
                transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                },
            }, exit: {
                opacity: 0,
                height: 0,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            }, className: "md:hidden bg-gray-800/95 backdrop-blur-lg shadow-inner", children: _jsx(motion.div, { initial: { opacity: 0 }, animate: {
                    opacity: 1,
                    transition: { delay: 0.2 },
                }, exit: { opacity: 0 }, className: "py-3 px-4", children: _jsx("div", { className: "flex flex-col space-y-2", children: navItems.map((item, index) => (_jsx(motion.div, { initial: { x: -30, opacity: 0 }, animate: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.3 + index * 0.08,
                                type: 'spring',
                                stiffness: 120,
                                damping: 10,
                            },
                        }, exit: {
                            x: -30,
                            opacity: 0,
                            transition: {
                                delay: index * 0.03,
                                duration: 0.2,
                            },
                        }, children: _jsx(Link, { to: item.id, spy: true, smooth: true, offset: item.offset, duration: 500, onClick: onClose, className: "\r\n                          block px-4 py-3 rounded-lg\r\n                          text-gray-200 hover:text-white\r\n                          hover:bg-gray-700/40\r\n                          transition-all duration-200\r\n                          font-medium\r\n                          active:bg-gray-700/30\r\n                      ", activeClass: "\r\n                          font-medium\r\n                              active:bg-gray-700/30\r\n                          ", children: item.label }) }, index))) }) }) })) }));
};
