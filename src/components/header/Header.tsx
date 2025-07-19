import type { JSX } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationMobileMenuBtn, NavigationMobileMenu } from './index';
import { navItems } from '../../constants';
import type { NavItem } from '../../types';

export const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };
  return (
    <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to={'/'}
            className="text-2xl font-bold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
          >
            Mehdi Leylaei
          </Link>

          <nav className="hidden lg:flex space-x-6 *:px-3 *:py-2 *:text-sm *:font-medium *:text-gray-300 *:hover:text-white *:transition-colors *:cursor-pointer">
            {navItems.map((data: NavItem, index: number) => (
              <Link to={data.link} id={data.id} key={index}>
                {data.label}
              </Link>
            ))}
          </nav>

          <NavigationMobileMenuBtn
            isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          />
        </div>
        <NavigationMobileMenu
          isOpen={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          navItems={navItems}
        />
      </div>
    </header>
  );
};
