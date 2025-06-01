
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Google Certified: Bits & Bytes of Computer Networking',
      issuer: 'Google (Coursera)',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'NPTEL Cloud Computing',
      issuer: 'IIT Kharagpur',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'Advanced Python Certification',
      issuer: 'VIT Bhopal',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'Business Intelligence in Power BI',
      issuer: 'Skill Nation',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'MATLAB and Simulink Certification',
      issuer: 'VIT Bhopal',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'Space Robotics Internship',
      issuer: 'Kodacy',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'Data Analytics Certification',
      issuer: 'GeeksforGeeks',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'Machine Learning Course',
      issuer: 'Udemy',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'IBM Blockchain Developer',
      issuer: 'IBM',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
    {
      title: 'IBM Blockchain Foundation',
      issuer: 'IBM',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=300&fit=crop',
      url: '#', // PLACE YOUR CERTIFICATE URL HERE
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Certifications</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise in various technologies.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-700 hover:border-blue-500">
                    <div className="relative overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-gray-900/90 p-2 rounded-full">
                        <Award className="text-blue-400" size={20} />
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{cert.title}</h3>
                      <p className="text-gray-300 mb-2">{cert.issuer}</p>
                      <p className="text-sm text-gray-400 mb-4">{cert.date}</p>
                      
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Certificate
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
            <CarouselNext className="hidden md:flex bg-gray-800 border-gray-600 text-white hover:bg-gray-700" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
