import type { JSX } from 'react';

export const TestimonialsControls = ({ direction, icon, testimonial, aria } : 
    {direction:string , icon : JSX.Element , testimonial : string ,aria:string }):JSX.Element =>{
    return(
        <button
        className={`
            ${testimonial} absolute ${direction} top-1/2 -translate-y-1/2 z-10 
            bg-white rounded-full w-12 h-12 flex items-center justify-center 
            text-indigo-600 shadow-lg 
            hover:bg-indigo-600 hover:text-white 
            transition-all duration-300 
            hover:scale-110 active:scale-95 
            my-20 mx-8
        `}
        aria-label={aria} // improves accessibility
    >
        {icon}
    </button>
    )
}