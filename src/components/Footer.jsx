import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white mt-1 py-6"> {/* Changed background to a darker shade */}
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold">CampusPilot</h3>
          <p className="mt-2 text-gray-300">
            Revolutionizing school management with smart solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-4">
            <Link to="/" className="text-gray-300 hover:text-yellow-500 mx-2">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-yellow-500 mx-2">About Us</Link>
            <Link to="/contact" className="text-gray-300 hover:text-yellow-500 mx-2">Contact</Link>
         
        </div>

        {/* Social Media */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://facebook.com" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-yellow-500">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-4 border-t border-gray-500 pt-4 text-sm">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} CampusPilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
