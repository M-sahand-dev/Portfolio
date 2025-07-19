import type { JSX } from 'react';
import { ContactLink } from './index';

export const ContantContentAboutLink = (): JSX.Element => {
  return (
    <div className="mt-10">
      {/* Section title */}
      <h4 className="font-bold mb-4">Follow Me</h4>
      {/* Container for social icons */}
      <ContactLink />
    </div>
  );
};
