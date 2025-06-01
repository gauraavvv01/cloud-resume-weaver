
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Certificates from '@/components/Certificates';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <Certificates />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Achievements />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
