
import React from 'react';
import { Code, Database, Cloud, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Software Development Engineer with expertise in cloud technologies, 
            web development, and a strong problem-solving background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated Software Development Engineer with a passion for creating scalable 
              solutions and solving complex problems. My experience spans across cloud platforms, 
              web development, and competitive programming.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 200 LeetCode problems and 100+ GeeksForGeeks challenges solved, I've 
              honed my algorithmic thinking and problem-solving skills. My professional experience 
              includes working with cloud technologies like AWS and Azure, managing deployments, 
              and implementing security frameworks.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm always eager to learn new technologies and contribute to innovative projects 
              that make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-600" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Problem Solving</h4>
              <p className="text-gray-600 text-sm">300+ coding challenges solved across platforms</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-purple-600" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Cloud Computing</h4>
              <p className="text-gray-600 text-sm">AWS & Azure deployment and management</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-green-600" size={32} />
              </div>
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className="text-gray-600 text-sm">Full-stack development with modern frameworks</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-orange-600" size={32} />
              </div>
              <h4 className="font-semibold mb-2">System Design</h4>
              <p className="text-gray-600 text-sm">Scalable architecture and deployment strategies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
