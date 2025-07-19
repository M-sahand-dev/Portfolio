import type { JSX } from 'react';
import { ContactContentAbout, ContactForm } from './index';

export const ContactElement = (): JSX.Element => {
  return (
    <div id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/*  Section header with main and sub titles centered */}
        <div className="text-center mb-16">
          <h4 className="text-indigo-400 text-lg mb-2">Get in Touch</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Contact information section */}
          <ContactContentAbout />
          {/* Contact form section */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
