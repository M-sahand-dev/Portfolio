import type { JSX } from 'react';
import { useState } from 'react';
// import {navItems} from "../../constants/data"
import { Link  } from 'react-router-dom';
import {Navigation_Mobile_Menu_Btn} from "./index"

export const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
      setIsMobileMenuOpen(prev => {
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
            Mehdi Leilaei
          </Link>

          <nav className="hidden lg:flex space-x-6 *:px-3 *:py-2 *:text-sm *:font-medium *:text-gray-300 *:hover:text-white *:transition-colors *:cursor-pointer">
            <Link to={"/"} id='home'>Home</Link>
            <Link to={"/about"} id='about'>About</Link>
            <Link to={"/services"} id='services'>Services</Link>
            <Link to={"/portfolio"} id='portfolio'>Portfolio</Link>
            <Link to={"/testimonials"} id='testimonials'>Testimonials</Link>
            <Link to={"/blog"} id='blog'>Blog</Link>
            <Link to={"/contact"} id='contact'>Contact</Link>
          </nav>

          <Navigation_Mobile_Menu_Btn                         
          isOpen={isMobileMenuOpen }
          onClick={toggleMobileMenu}/>
        </div>
      </div>
      {/* <Outlet/> */}
    </header>
  );
};
