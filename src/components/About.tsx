
import React from 'react';
import { Code, Database, Cloud, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            B.Tech CSE student at VIT Bhopal with a passion for full-stack development, 
            machine learning, and data analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated B.Tech Computer Science student at VIT Bhopal with a strong academic record (CGPA: 9.04/10). 
              My passion lies in creating innovative solutions through full-stack development and machine learning.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I have hands-on experience with the MERN stack, having developed comprehensive platforms like MediSinCare and 
              a Hostel Management System. My expertise extends to data analytics, where I've worked with tools like Tableau 
              and Power BI to derive meaningful insights from large datasets.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond academics, I'm passionate about sports, particularly badminton and cricket, and have achieved notable 
              victories in regional tournaments. I've also solved 200+ problems on LeetCode and 100+ on GeeksforGeeks.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-700 hover:border-blue-500">
              <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2 text-white">Full Stack Development</h4>
              <p className="text-gray-400 text-sm">MERN stack expertise with responsive web applications</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-700 hover:border-purple-500">
              <div className="bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-purple-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2 text-white">Machine Learning</h4>
              <p className="text-gray-400 text-sm">Predictive analytics and data science</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-700 hover:border-green-500">
              <div className="bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-green-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2 text-white">Data Analytics</h4>
              <p className="text-gray-400 text-sm">Power BI, Tableau, and statistical analysis</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-700 hover:border-orange-500">
              <div className="bg-orange-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-orange-400" size={32} />
              </div>
              <h4 className="font-semibold mb-2 text-white">Cloud Computing</h4>
              <p className="text-gray-400 text-sm">AWS, Azure, and cloud deployment solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
