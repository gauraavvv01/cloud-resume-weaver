
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              Gaurav Gupta
            </h3>
            <p className="text-gray-400 leading-relaxed">
              B.Tech CSE student at VIT Bhopal passionate about creating innovative solutions 
              with MERN stack, machine learning, and data analytics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-orange-500 transition-colors duration-300">
                About
              </a>
              <a href="#education" className="block text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Education
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Skills
              </a>
              <a href="#experience" className="block text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Experience
              </a>
              <a href="#achievements" className="block text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Achievements
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-orange-500 transition-colors duration-300">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-white">Let's Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {/* PLACE YOUR SOCIAL MEDIA LINKS HERE */}
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300 hover:scale-105 transform border border-gray-700 hover:border-orange-500"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300 hover:scale-105 transform border border-gray-700 hover:border-orange-500"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:gauraavvv01@gmail.com"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-600 transition-colors duration-300 hover:scale-105 transform border border-gray-700 hover:border-orange-500"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              gauraavvv01@gmail.com
            </p>
            <p className="text-gray-400 text-sm">
              +91 7987432344
            </p>
            <p className="text-gray-400 text-sm">
              Sagar, India
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Gaurav Gupta. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="mx-1 text-orange-500" size={16} /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
