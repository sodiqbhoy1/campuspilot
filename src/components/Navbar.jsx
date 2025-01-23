import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu when the hamburger icon is clicked
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-100 text-black p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo (CampusPilot) */}
        <div className="text-2xl font-bold">
          <Link to="" className="flex items-center">
            <span className="text-[#035140]"> CampusPilot </span>
          </Link>
        </div>

        {/* Menu items (Home, About Us, Features, Contact) */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/features" className="hover:text-gray-300">Features</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>

        {/* Register Now button */}
        <div className="hidden md:block">
          <a
            href="#register"
            className="bg-[#035140] hover:bg-[#035140cc] text-white py-2 px-6 rounded-lg font-semibold"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-[#035140cc]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 text-black p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="hover:text-gray-300" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="hover:text-gray-300" onClick={closeMenu}>About</Link>
            <Link to="/features" className="hover:text-gray-300" onClick={closeMenu}>Features</Link>
            <Link to="/contact" className="hover:text-gray-300" onClick={closeMenu}>Contact</Link>

            <a
              href="#register"
              className="bg-[#035140] hover:bg-[#035140cc] text-white py-2 px-6 rounded-lg font-semibold"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
