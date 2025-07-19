import type { JSX } from 'react';
import { ContactContentCallMe, ContantContentAboutLink } from './index';

export const ContactContentAbout = (): JSX.Element => {
  return (
    // Container for contact introduction and details section
    <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
      {/* Section heading */}
      <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
      {/* Introductory paragraph encouraging contact */}
      <p className="text-gray-400 mb-8">
        Feel free to reach out if you're looking for a designer and developer
        for your project, have a question, or just want to connect.
      </p>
      {/* Contact information (location, email, phone) */}
      <ContactContentCallMe />
      {/* Social or contact links */}
      <ContantContentAboutLink />
    </div>
  );
};
