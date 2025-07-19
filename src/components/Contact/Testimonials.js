import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TestimonialsControls, TestimonialsComandUser } from './index';
// Swiper dependencies for slider functionality
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../constants/data';
export const Testimonials = () => {
    return (_jsx("section", { id: "testimonials", className: "py-20 relative", children: _jsxs("div", { className: "container mx-auto px-6 relative", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h4", { className: "text-indigo-400 text-lg mb-2", children: "Client Speak" }), _jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "What Some of My Clients Say" }), _jsx("div", { className: "w-20 h-1 bg-indigo-600 mx-auto" })] }), _jsx(Swiper, { modules: [Navigation], spaceBetween: 50, slidesPerView: 1, navigation: {
                        nextEl: '.testimonial-next',
                        prevEl: '.testimonial-prev',
                    }, loop: true, children: testimonials.map((testimonial, index) => (_jsx(SwiperSlide, { children: _jsx(TestimonialsComandUser, { image: testimonial.image, name: testimonial.name, revioe: testimonial.revioe, education: testimonial.education }) }, index))) }), _jsx(TestimonialsControls, { icon: _jsx(FaChevronLeft, {}), direction: "left-0", testimonial: "testimonial-prev", aria: "Previous testimonial" }), _jsx(TestimonialsControls, { icon: _jsx(FaChevronRight, {}), direction: "right-0", testimonial: "testimonial-next", aria: "Next testimonial" })] }) }));
};
