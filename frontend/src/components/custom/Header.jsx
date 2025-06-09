import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="px-12 py-1 sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-12 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src='/logo.svg' alt="TravelMateAI Logo" className="h-8 w-auto"/>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/create-trip" className="font-medium hover:text-blue-600 transition-colors">Trip Planner</Link>
          <Link to="/chatbot" className="font-medium hover:text-blue-600 transition-colors">Chatbot</Link>
          <Link to="/about" className="font-medium hover:text-blue-600 transition-colors">About</Link>
          <Link to="/contact-us" className="font-medium hover:text-blue-600 transition-colors">Contact Us</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Button variant="ghost" className='cursor-pointer'>Log In</Button>
          <Button className='cursor-pointer'>Sign In</Button>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center p-2 rounded hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in-down">
          <nav className="flex flex-col gap-2 px-6 py-4">
            <Link to="/create-trip" className="py-2 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Trip Planner</Link>
            <Link to="/chatbot" className="py-2 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Chatbot</Link>
            <Link to="/about" className="py-2 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact-us" className="py-2 font-medium hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <div className="flex gap-2 mt-4">
              <Button variant="ghost" className='w-full cursor-pointer'>Log In</Button>
              <Button className='w-full cursor-pointer'>Sign In</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

