
import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Project Lead Intern',
      company: 'BlueStock Fintech',
      location: 'Mumbai, India',
      duration: 'Dec 2024 - Feb 2025',
      description: [
        'Managed a team of 15 members, coordinating tasks and ensuring effective communication',
        'Led the entire development process from planning to deployment',
        'Contributed as a frontend engineer, implementing user interfaces',
        'Optimized user experiences and ensured website responsiveness across various devices',
        'Ensured project met deadlines and quality standards',
      ],
      technologies: ['React', 'JavaScript', 'Frontend Development', 'Team Leadership', 'Project Management'],
    },
    {
      title: 'Data Analyst Intern',
      company: 'Null Classes',
      location: 'Remote',
      duration: 'Aug 2024 - Oct 2024',
      description: [
        'Led transition to paperless practice with electronic booking system',
        'Reduced labor costs by 30% and overhead by 10%',
        'Analyzed data from 25,000 users and enhanced Tableau dashboards',
        'Guided marketing and product strategies through data insights',
        'Increased app engagement by 2x and reduced drop-off rate by 30%',
        'Tripled social media shares through strategic analysis',
      ],
      technologies: ['Tableau', 'Data Analysis', 'Dashboard Development', 'Marketing Analytics', 'User Engagement'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience in project leadership, data analytics, and full-stack development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-2 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-12 pb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col text-gray-600 text-sm">
                      <div className="flex items-center mb-1">
                        <Calendar className="mr-2" size={16} />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2" size={16} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h5>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Looking for Opportunities</h3>
            <p className="text-gray-600 mb-6">
              I'm actively seeking new challenges in software development, data analytics, 
              and full-stack development roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* PLACE YOUR LINKEDIN PROFILE LINK HERE */}
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <ExternalLink className="mr-2" size={18} />
                View LinkedIn Profile
              </a>
              {/* PLACE YOUR RESUME DOWNLOAD LINK HERE */}
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
