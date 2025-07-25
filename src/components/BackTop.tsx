import { useEffect, useState, type JSX } from "react";
import { FaArrowUp } from "react-icons/fa";

export const BackTop = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(window.pageYOffset > 300);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  return (
        <button
            id="back-to-top"
            aria-label="Scroll to top"
            className={`
                fixed bottom-8 right-8 
                bg-indigo-600 text-white 
                w-12 h-12 rounded-full 
                flex items-center justify-center 
                transition duration-300 
                ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
            onClick={scrollToTop}
        >
            <FaArrowUp />
        </button>
  );
};