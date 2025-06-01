
import React from 'react';
import { ExternalLink, Github, Cloud, Code, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud management solution using AWS and Azure services with automated deployment pipelines.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      features: [
        'Multi-cloud deployment strategy',
        'Automated CI/CD pipelines',
        'Infrastructure as Code',
        'Security best practices implementation'
      ],
      liveUrl: '#', // PLACE YOUR PROJECT LIVE URL HERE
      githubUrl: '#', // PLACE YOUR PROJECT GITHUB URL HERE
      icon: Cloud,
    },
    {
      title: 'Web Application with Squarespace Integration',
      description: 'Modern web application with custom deployment through Squarespace and advanced security features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'Squarespace', 'WAF', 'DOSS'],
      features: [
        'Responsive web design',
        'Squarespace CMS integration',
        'Web Application Firewall setup',
        'Distributed object storage'
      ],
      liveUrl: '#', // PLACE YOUR PROJECT LIVE URL HERE
      githubUrl: '#', // PLACE YOUR PROJECT GITHUB URL HERE
      icon: Code,
    },
    {
      title: 'Data Pipeline with ADF Azure',
      description: 'Scalable data processing pipeline using Azure Data Factory for ETL operations and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      technologies: ['Azure Data Factory', 'Python', 'SQL', 'Power BI', 'Azure Storage'],
      features: [
        'Real-time data processing',
        'Automated ETL workflows',
        'Data visualization dashboards',
        'Scalable architecture design'
      ],
      liveUrl: '#', // PLACE YOUR PROJECT LIVE URL HERE
      githubUrl: '#', // PLACE YOUR PROJECT GITHUB URL HERE
      icon: Database,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work in cloud computing, web development, and data engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                  <project.icon className="text-blue-600" size={20} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
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
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
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
                    className="flex-1 hover:bg-blue-50 hover:border-blue-300"
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
                    className="flex-1 hover:bg-gray-50"
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
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have more projects showcasing 
              various technologies and problem-solving approaches.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
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
