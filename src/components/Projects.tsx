
import React from 'react';
import { ExternalLink, Github, Heart, Building, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'MedisinCare',
      description: 'Comprehensive healthcare management system with patient records, appointment scheduling, and medical inventory management.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      features: [
        'Patient registration and records management',
        'Doctor appointment scheduling',
        'Medical inventory tracking',
        'Prescription management system'
      ],
      liveUrl: '#', // PLACE YOUR PROJECT LIVE URL HERE
      githubUrl: '#', // PLACE YOUR PROJECT GITHUB URL HERE
      icon: Heart,
    },
    {
      title: 'Hostel Management System',
      description: 'Complete hostel management solution for student accommodation with room allocation, fee management, and visitor tracking.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Bootstrap'],
      features: [
        'Student registration and room allocation',
        'Fee management and payment tracking',
        'Visitor management system',
        'Maintenance request handling'
      ],
      liveUrl: '#', // PLACE YOUR PROJECT LIVE URL HERE
      githubUrl: '#', // PLACE YOUR PROJECT GITHUB URL HERE
      icon: Building,
    },
    {
      title: 'Crop Disease Prediction',
      description: 'Machine learning-based system for predicting crop diseases using image recognition and providing treatment recommendations.',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'Scikit-learn'],
      features: [
        'Image-based disease detection',
        'Machine learning classification',
        'Treatment recommendations',
        'Crop health monitoring dashboard'
      ],
      liveUrl: '#', // PLACE YOUR PROJECT LIVE URL HERE
      githubUrl: '#', // PLACE YOUR PROJECT GITHUB URL HERE
      icon: Leaf,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my key projects in healthcare, management systems, and machine learning applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-700 hover:border-orange-500">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-gray-900/90 p-2 rounded-full">
                  <project.icon className="text-orange-500" size={20} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-orange-500"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 border border-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-white">Want to see more?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These are my key projects showcasing healthcare solutions, management systems, 
              and machine learning applications. Each project demonstrates different aspects of my technical expertise.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3" asChild>
              {/* PLACE YOUR GITHUB PROFILE LINK HERE */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
