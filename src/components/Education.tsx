
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science Engineering (Core)',
      institution: 'Vellore Institute of Technology, Bhopal',
      duration: '2022-2026',
      grade: 'CGPA: 9.04/10.0',
      location: 'Bhopal, India'
    },
    {
      degree: 'Class XII (Senior Secondary)',
      institution: 'Vaishnavi Public School',
      duration: '2021-2022',
      grade: '90.2%',
      location: 'India'
    },
    {
      degree: 'Class X (Secondary)',
      institution: 'Kendriya Vidyalaya Nowrozabad',
      duration: '2019-2020',
      grade: '91.4%',
      location: 'India'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic achievements and qualifications that built the foundation of my technical expertise.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-600"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-8 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900 shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-12 pb-12">
                <div className="bg-gray-800/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-orange-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="text-orange-500 mr-3" size={24} />
                        <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-orange-400 mb-2">{edu.institution}</h4>
                      <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          {edu.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2" size={16} />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-orange-900/50 text-orange-300 px-4 py-2 rounded-lg font-semibold border border-orange-700">
                        {edu.grade}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
