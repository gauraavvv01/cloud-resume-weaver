
import React from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'SDE Intern',
      company: 'Canary Hiring Technology',
      location: 'Hyderabad, India',
      duration: 'May 2025 - Present',
      description: [
        'Manage AWS Azure and web deployment through Squarespace with DOSS and WAF frameworks',
        'Work with ADF Azure for data integration and management',
        'Implement cloud solutions and optimize deployment processes',
      ],
    },
    {
      title: 'Project Lead Intern',
      company: 'BlueStock Fintech',
      location: 'Mumbai, India',
      duration: 'Dec 2024 - Feb 2025',
      description: [
        'Led a team of 15 members, coordinating tasks and ensuring effective communication to design and develop a full website',
        'Managed the entire development process, from planning to deployment, ensuring the project met deadlines and quality standards',
        'Contributed as a frontend engineer, implementing user interfaces, optimizing user experiences, and ensuring website responsiveness across various devices',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'Null Classes',
      location: 'Remote',
      duration: 'Aug 2024 - Oct 2024',
      description: [
        'Led the transition to a paperless practice with an electronic booking system, reducing labor costs by 30% and overhead by 10%',
        'Analyzed data from 25,000 users and enhanced Tableau dashboards to guide marketing and product strategies',
        'Increased app engagement by 2x, reduced drop-off rate by 30%, and tripled social media shares',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional experience in software development, data analysis, and project management.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-orange-600"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-20 bg-gray-800/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-orange-500 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center text-orange-400 mb-2">
                          <Building2 size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start">
                          <span className="text-orange-500 mr-2 mt-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
