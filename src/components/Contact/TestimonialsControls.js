import { jsx as _jsx } from "react/jsx-runtime";
export const TestimonialsControls = ({ direction, icon, testimonial, aria }) => {
    return (_jsx("button", { className: `
            ${testimonial} absolute ${direction} top-1/2 -translate-y-1/2 z-10 
            bg-white rounded-full w-12 h-12 flex items-center justify-center 
            text-indigo-600 shadow-lg 
            hover:bg-indigo-600 hover:text-white 
            transition-all duration-300 
            hover:scale-110 active:scale-95 
            my-20 mx-8
        `, "aria-label": aria, children: icon }));
};
