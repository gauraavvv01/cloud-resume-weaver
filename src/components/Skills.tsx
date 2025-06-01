
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'C/C++', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'HTML5/CSS3', level: 90 },
      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'MERN Stack', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'RESTful APIs', level: 80 },
      ],
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Predictive Analytics', level: 80 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Python Libraries', level: 85 },
      ],
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Power BI', level: 90 },
        { name: 'Tableau', level: 85 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'MATLAB/Simulink', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive set of technical skills acquired through hands-on experience 
            and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-center text-white">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
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
