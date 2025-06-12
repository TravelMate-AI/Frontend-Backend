import React, { useState } from 'react';
import { Button } from './ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from './ui/navigation-menu';
import { Link } from 'react-router-dom';

// Import hooks autentikasi Anda
import { useIsAuthenticated, useUser, useAuthActions } from '@/hooks/useAuth';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Dapatkan status autentikasi, data pengguna, dan fungsi logout dari AuthContext
  const isAuthenticated = useIsAuthenticated();
  const user = useUser();
  const { logout } = useAuthActions();

  // Function to close the mobile menu
  const closeMenu = () => setMenuOpen(false);

  // Handler untuk logout
  const handleLogout = () => {
    logout(); // Panggil fungsi logout dari context
    closeMenu(); // Tutup menu mobile setelah logout
  };

  return (
    <header className="px-12 py-2 top-0 z-50 transition-all duration-300 ease-in-out relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          <img src='/logo.svg' alt="TravelMateAI Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 rounded-full bg-white/80 backdrop-blur-lg shadow-md px-6 py-2 transition-all duration-300 ease-in-out relative z-50">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/chatbot" className="hover:text-blue-600  transition-colors duration-200 font-medium">AI Chatbot</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/restaurants" className="hover:text-blue-600  transition-colors duration-200 font-medium">Restaurants & Resorts</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/tourism" className="hover:text-blue-600  transition-colors duration-200 font-medium">Tourism</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/hotels" className="hover:text-blue-600  transition-colors duration-200 font-medium">Hotels</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop Auth Buttons / User Info */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {user && <span className="text-gray-700 font-medium">Hi, {user.name || user.email}!</span>}
              <Button
                onClick={handleLogout} // Menggunakan handleLogout
                className="bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 cursor-pointer"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant='ghost' className='text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer'>
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
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
                <Link to="/tourism" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">Tourism</Link>
                {/* Perbaikan: Ganti /resorts menjadi /restaurants */}
                <Link to="/restaurants" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">Restaurants</Link>
                <Link to="/hotels" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">Hotels</Link>
              </div>
            </div>

            <Link to="/chatbot" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">AI Chatbot</Link>
            <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact-us" onClick={closeMenu} className="text-gray-700 hover:text-blue-600">Contact Us</Link>

            {/* Mobile Auth Buttons / User Info */}
            <div className="flex flex-col gap-3 mt-6 px-2">
              {isAuthenticated ? (
                <>
                  {user && <span className="text-gray-700 text-center font-medium mb-2">Hi, {user.name || user.email}!</span>}
                  <Button
                    onClick={handleLogout} // Menggunakan handleLogout
                    className='w-full text-center bg-red-500 hover:bg-red-600 text-white transition-colors duration-200 py-2 shadow-md'
                  >
                    Log Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={closeMenu}>
                    <Button variant="ghost" className='w-full text-center hover:bg-gray-100 transition-colors duration-200 py-2 text-gray-700'>
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={closeMenu}>
                    <Button className='w-full text-center bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 py-2 shadow-md'>
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}

      {/* Add custom styles for better dropdown behavior */}
      {/* Peringatan: Hapus atau perbaiki attribute 'jsx' di sini */}
      <style>{`
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
