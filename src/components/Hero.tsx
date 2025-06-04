
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const roles = [
    'Web Developer',
    'Cloud Engineer', 
    'ML Enthusiast',
    'Content Writer',
    'Badminton Player'
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          setTypeSpeed(50);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypeSpeed(150);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typeSpeed, roles]);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Orange corner decorations */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-orange-500"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-orange-500"></div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Hello, my name is{' '}
                  <span className="text-orange-500">Gaurav Gupta</span>
                </h1>
                
                <div className="text-2xl md:text-4xl text-white mb-6">
                  I'm a{' '}
                  <span className="text-orange-500 font-semibold">
                    {displayText}
                    <span className="animate-pulse text-orange-500">|</span>
                  </span>
                </div>

                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  I'm a B.Tech CSE student at VIT Bhopal with expertise in Cloud Engineering, 
                  MERN stack development, Machine Learning, and Data Analytics. Passionate about 
                  creating innovative solutions and exploring new technologies.
                </p>
              </div>

              {/* Contact info */}
              <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-orange-500" />
                  Sagar, India
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-orange-500" />
                  +91 7987432344
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-orange-500" />
                  gauraavvv01@gmail.com
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
                <Button 
                  onClick={scrollToContact}
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </Button>
              </div>

              {/* Social links */}
              <div className="flex gap-4">
                {/* PLACE YOUR SOCIAL MEDIA LINKS HERE */}
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
                  <Github size={28} />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:gauraavvv01@gmail.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300 hover:scale-110 transform">
                  <Mail size={28} />
                </a>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="text-3xl font-bold text-orange-500 mb-2">Cloud AWS/Azure</div>
                  <div className="text-gray-400">Cloud Engineering</div>
                </div>
                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="text-3xl font-bold text-orange-500 mb-2">MERN</div>
                  <div className="text-gray-400">Full Stack</div>
                </div>
                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
                  <div className="text-gray-400">LeetCode</div>
                </div>
                <div className="text-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                  <div className="text-gray-400">GeeksforGeeks</div>
                </div>
              </div>

              {/* Additional info box */}
              <div className="bg-gray-800/30 backdrop-blur-lg rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    SDE Intern at Canary Hiring Technology
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    AWS & Azure Cloud Specialist
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Machine Learning Enthusiast
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Content Writer & Sports Player
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
