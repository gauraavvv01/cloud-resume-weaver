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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* LinkedIn-style profile card */}
          <div className="bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
            {/* Cover section */}
            <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            {/* Profile content */}
            <div className="relative px-8 pb-8">
              {/* Profile picture */}
              <div className="flex justify-center -mt-16 mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    {/* PLACE YOUR PROFILE IMAGE HERE */}
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                      alt="Gaurav Gupta" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name and title */}
              <div className="text-center mb-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
                  Gaurav Gupta
                </h1>
                
                <div className="text-xl md:text-2xl text-gray-300 mb-4 h-8">
                  I am{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </div>

                <p className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto leading-relaxed">
                  B.Tech CSE student at VIT Bhopal with expertise in MERN stack development, 
                  Machine Learning, and Data Analytics
                </p>

                {/* Contact info */}
                <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm mb-8">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    Sagar, India
                  </div>
                  <div className="flex items-center">
                    <Phone size={16} className="mr-1" />
                    +91 7987432344
                  </div>
                  <div className="flex items-center">
                    <Mail size={16} className="mr-1" />
                    gauraavvv01@gmail.com
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <Download className="mr-2" size={20} />
                  {/* PLACE YOUR RESUME DOWNLOAD LINK HERE */}
                  Download Resume
                </Button>
                <Button 
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail className="mr-2" size={20} />
                  Contact Me
                </Button>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-6 mb-8">
                {/* PLACE YOUR SOCIAL MEDIA LINKS HERE */}
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                  <Github size={28} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:gauraavvv01@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
                  <Mail size={28} />
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-blue-400 mb-1">Cloud</div>
                  <div className="text-gray-400 text-sm">AWS/Azure</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-purple-400 mb-1">MERN</div>
                  <div className="text-gray-400 text-sm">Full Stack</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-green-400 mb-1">200+</div>
                  <div className="text-gray-400 text-sm">LeetCode</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div className="text-2xl font-bold text-orange-400 mb-1">100+</div>
                  <div className="text-gray-400 text-sm">GeeksforGeeks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
