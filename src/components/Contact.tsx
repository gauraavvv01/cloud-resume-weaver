
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white text-center">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-center">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-600/20 p-6 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center border border-orange-500/30">
                  <Mail className="text-orange-500" size={32} />
                </div>
                <h4 className="font-semibold text-white mb-2">Email</h4>
                <p className="text-gray-300">gauraavvv01@gmail.com</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600/20 p-6 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center border border-orange-500/30">
                  <Phone className="text-orange-500" size={32} />
                </div>
                <h4 className="font-semibold text-white mb-2">Phone</h4>
                <p className="text-gray-300">+91 7987432344</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-600/20 p-6 rounded-full mx-auto mb-4 w-20 h-20 flex items-center justify-center border border-orange-500/30">
                  <MapPin className="text-orange-500" size={32} />
                </div>
                <h4 className="font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-300">Sagar, India</p>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold text-white mb-6 text-center">Follow Me</h4>
              <div className="flex justify-center space-x-6">
                {/* PLACE YOUR SOCIAL MEDIA LINKS HERE */}
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-orange-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-gray-600 hover:border-orange-500"
                >
                  <Github className="text-gray-300 hover:text-white transition-colors" size={28} />
                </a>
                <a
                  href="#"
                  className="bg-gray-700 hover:bg-orange-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-gray-600 hover:border-orange-500"
                >
                  <Linkedin className="text-orange-400 hover:text-white transition-colors" size={28} />
                </a>
                <a
                  href="mailto:gauraavvv01@gmail.com"
                  className="bg-gray-700 hover:bg-orange-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform border border-gray-600 hover:border-orange-500"
                >
                  <Mail className="text-orange-400 hover:text-white transition-colors" size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
