import type { JSX } from 'react';
import { ContactElement } from './index';
import { Footer } from '../Footer';

export const Contact = (): JSX.Element => {
  return (
    <div>
      <ContactElement />
      <Footer />
    </div>
  );
};
