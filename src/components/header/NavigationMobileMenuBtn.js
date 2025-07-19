import { jsx as _jsx } from "react/jsx-runtime";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
export const NavigationMobileMenuBtn = ({ isOpen, onClick, }) => {
    return (_jsx("button", { id: "mobile-menu-button", onClick: onClick, className: "lg:hidden text-white focus:outline-none", "aria-label": isOpen ? 'Close menu' : 'Open menu', children: _jsx(motion.div, { initial: false, animate: {
                rotate: isOpen ? 180 : 0,
                scale: isOpen ? 1.1 : 1,
            }, transition: {
                type: 'spring',
                stiffness: 400,
                damping: 20,
            }, children: isOpen ? (_jsx(IoMdClose, { className: "text-2xl" })) : (_jsx(GiHamburgerMenu, { className: "text-2xl" })) }) }));
};
