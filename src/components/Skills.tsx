
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        'Python',
        'JavaScript',
        'C/C++',
        'Java',
        'HTML5/CSS3',
      ],
    },
    {
      title: 'Web Development',
      skills: [
        'MERN Stack',
        'MongoDB',
        'Express.js',
        'React',
        'Node.js',
        'RESTful APIs',
      ],
    },
    {
      title: 'Data Science & ML',
      skills: [
        'Machine Learning',
        'Predictive Analytics',
        'Statistical Analysis',
        'Data Visualization',
        'Python Libraries',
      ],
    },
    {
      title: 'Cloud & Tools',
      skills: [
        'AWS',
        'Azure',
        'Squarespace',
        'WAF',
        'DOSS',
        'ADF',
        'Azure APIM',
        'Git/GitHub',
        'MATLAB/Simulink',
      ],
    },
    {
      title: 'Data Analytics Tools',
      skills: [
        'Power BI',
        'Tableau',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive set of technical skills acquired through hands-on experience 
            and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700 hover:border-orange-500">
              <h3 className="text-xl font-bold mb-6 text-center text-white">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-600 hover:border-orange-400 transition-colors duration-200">
                    <span className="font-medium text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
