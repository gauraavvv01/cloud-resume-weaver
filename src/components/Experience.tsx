
import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'SDW Intern',
      company: 'Canary Hiring Technology',
      location: 'Hyderabad, India',
      duration: '2024 - Present',
      description: [
        'Managed AWS and Azure cloud infrastructure for scalable applications',
        'Implemented web deployment strategies using Squarespace platform',
        'Worked with DOSS (Distributed Object Storage Service) framework for data management',
        'Configured WAF (Web Application Firewall) for enhanced security',
        'Utilized ADF Azure (Azure Data Factory) for data integration and transformation',
        'Collaborated with cross-functional teams to deliver cloud-based solutions',
      ],
      technologies: ['AWS', 'Azure', 'Squarespace', 'DOSS', 'WAF', 'ADF Azure', 'Cloud Security'],
    },
    // Add more experiences here as needed
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience in software development, cloud computing, and web deployment.
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
              I'm actively seeking new challenges in software development, cloud engineering, 
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
