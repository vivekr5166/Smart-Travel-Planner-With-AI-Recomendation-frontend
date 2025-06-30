import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-2">SmartTravel.ai</h2>
          <p className="text-sm">Plan smarter. Travel better. Powered by AI ✈️</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/plan-trip" className="hover:underline">Plan Trip</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/signup" className="hover:underline">Signup</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@smarttravel.ai</p>
          <p className="text-sm">Phone: +91-6299724560</p>
          <p className="text-sm">Patna, Bihar, India</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-xs mt-10 border-t border-blue-400 pt-4">
        &copy; {new Date().getFullYear()} SmartTravel.ai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
