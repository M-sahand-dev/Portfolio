import type { JSX } from 'react';
import type { CategoryProps } from '../../types';

export const Category = ({ children, onClick }: CategoryProps): JSX.Element => {
  return (
    // Calls onClick handler when clicked
    <button className="portfolio-filter-btn" onClick={onClick}>
      {children}
    </button>
  );
};
