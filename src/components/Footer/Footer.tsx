import type { JSX } from 'react';
import { FooterLink, FooterContainerLink } from './index';

/**
 * Footer component - Displays the website footer with copyright and navigation links
 *
 * Features:
 * - Responsive layout (stacked on mobile, horizontal on desktop)
 * - Copyright notice with dynamic year
 * - Navigation links section
 * - Dark theme with subtle border
 */
export const Footer = (): JSX.Element => {
  return (
    // Main footer container with dark background and top border
    <footer className="bg-gray-900 py-10 border-t border-gray-800">
      {/* Centered container with horizontal padding */}
      <div className="container mx-auto px-6">
        {/* Flex container that changes direction based on screen size */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright section - appears first on mobile */}
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400">
              © 2025 Mehdi Leilaei. All rights reserved.
            </p>
          </div>

          {/* Navigation links section - appears second on mobile */}
          <div className="">
            {/* Reusable link container component */}
            <FooterContainerLink>
              {/* Individual footer links */}
              <FooterLink href={'#'} link={'Home'}></FooterLink>
              <FooterLink href={'#'} link={'Privacy'}></FooterLink>
              <FooterLink href={'#'} link={'Terms'}></FooterLink>
              <FooterLink href={'#'} link={'FAQ'}></FooterLink>
            </FooterContainerLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
