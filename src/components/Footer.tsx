import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Music, Scissors } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/Untitled design.png" 
                alt="H&R Barbers Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Premium barbershop experience with precision grooming and exceptional service. 
              Elevate your look with our skilled barbers.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="TikTok"
              >
                <Music size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>526 Filton Ave</p>
              <p>Bristol, BS7 0QE</p>
              <p>(555) 123-4567</p>
              <p>info@hrbarbers.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 H&R Barbers. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;