import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '../ui/navigation-menu';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the mobile menu
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="px-12 py-2 top-0 z-50 transition-all duration-300 ease-in-out relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          <span className="sr-only">Travel Website</span>
          <img src='/logo.svg' alt="TravelMateAI Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 rounded-full bg-white/80 backdrop-blur-lg shadow-md px-6 py-2 transition-all duration-300 ease-in-out relative z-50">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-blue-600 transition-all duration-300">
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[100px] gap-2 text-center">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/tourism"
                            className=" text-gray-700 hover:text-blue-600 rounded-md transition-colors duration-200 font-medium"
                          >
                            Tourism
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/restaurants"
                            className=" text-gray-700  hover:text-blue-600 rounded-md transition-colors duration-200 font-medium"
                          >
                            Restaurants
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/hotels"
                            className=" text-gray-700 hover:text-blue-600 rounded-md transition-colors duration-200 font-medium"
                          >
                            Hotels
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/chatbot" className="hover:text-blue-600  transition-colors duration-200 font-medium">Chatbot</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about" className="hover:text-blue-600  transition-colors duration-200 font-medium">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact-us" className="hover:text-blue-600  transition-colors duration-200 font-medium">Contact Us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant='ghost' className='text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
            Log In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
            Sign Up
          </Button>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg pb-4 animate-fade-in-down relative z-40">
          <nav className="flex flex-col gap-2 px-6 py-4">
            {/* Mobile Destinations Dropdown */}
            <div className="py-2">
              <div className="text-lg font-medium text-gray-800 px-2 py-1 mb-2">Destinations</div>
              <div className="flex flex-col ml-4 space-y-1">
                <Link to="/tourism" onClick={closeMenu}>Tourism</Link>
                <Link to="/resorts" onClick={closeMenu}>Resorts</Link>
                <Link to="/hotels" onClick={closeMenu}>Hotels</Link>
              </div>
            </div>

            <Link to="/chatbot" onClick={closeMenu}>Chatbot</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>

            <div className="flex flex-col gap-3 mt-6 px-2">
              <Button variant="ghost" className='w-full text-center hover:bg-gray-100 transition-colors duration-200 py-2 text-gray-700'>
                Log In
              </Button>
              <Button className='w-full text-center bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-2 shadow-md'>
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}

      {/* Add custom styles for better dropdown behavior */}
      <style jsx>{` 
        /* Animation for mobile menu */
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}

export default Header;