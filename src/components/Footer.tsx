
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {/* PLACE YOUR NAME HERE */}
              Your Name
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Software Development Engineer passionate about creating innovative solutions 
              with cloud technologies and modern web development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors duration-300">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Experience
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {/* PLACE YOUR SOCIAL MEDIA LINKS HERE */}
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300 hover:scale-105 transform"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              {/* PLACE YOUR EMAIL HERE */}
              your.email@example.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Your Name. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="mx-1 text-red-500" size={16} /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
