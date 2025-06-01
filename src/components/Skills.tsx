
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'TypeScript', level: 85 },
        { name: 'C++', level: 75 },
      ],
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Azure', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 80 },
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Squarespace', level: 85 },
        { name: 'DOSS Framework', level: 80 },
        { name: 'WAF', level: 75 },
        { name: 'ADF Azure', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technical skills acquired through hands-on experience 
            and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Problem Solving Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg shadow-lg">
              <h4 className="text-3xl font-bold mb-2">200+</h4>
              <p className="text-lg mb-4">LeetCode Problems Solved</p>
              <p className="text-sm opacity-90">
                Consistent problem-solving practice with focus on algorithms and data structures
              </p>
              {/* PLACE YOUR LEETCODE PROFILE LINK HERE */}
              <a href="#" className="inline-block mt-4 text-white underline hover:no-underline">
                View Profile →
              </a>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg shadow-lg">
              <h4 className="text-3xl font-bold mb-2">100+</h4>
              <p className="text-lg mb-4">GeeksForGeeks Problems</p>
              <p className="text-sm opacity-90">
                Advanced problem-solving and competitive programming challenges
              </p>
              {/* PLACE YOUR GEEKSFORGEEKS PROFILE LINK HERE */}
              <a href="#" className="inline-block mt-4 text-white underline hover:no-underline">
                View Profile →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
