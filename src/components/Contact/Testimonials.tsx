import type { JSX } from 'react';
import { TestimonialsControls, TestimonialsComandUser } from './index';

// Swiper dependencies for slider functionality
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Swiper core styles
// import 'swiper/css';
// import 'swiper/css/navigation';

import { testimonials } from '../../constants/data';
import type { Testimonial } from '../../types';

export const Testimonials = (): JSX.Element => {
  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          {/* Subtitle */}
          <h4 className="text-indigo-400 text-lg mb-2">Client Speak</h4>

          {/* Main title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Some of My Clients Say
          </h2>

          {/* Decorative divider */}
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          loop={true}
        >
          {testimonials.map((testimonial: Testimonial, index: number) => (
            <SwiperSlide key={index}>
              <TestimonialsComandUser
                image={testimonial.image}
                name={testimonial.name}
                revioe={testimonial.revioe}
                education={testimonial.education}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation controls */}
        <TestimonialsControls
          icon={<FaChevronLeft />}
          direction="left-0"
          testimonial="testimonial-prev"
          aria="Previous testimonial"
        />
        <TestimonialsControls
          icon={<FaChevronRight />}
          direction="right-0"
          testimonial="testimonial-next"
          aria="Next testimonial"
        />
      </div>
    </section>
  );
};
