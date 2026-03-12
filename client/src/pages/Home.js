import React from 'react';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Process from '../components/Process/Process';
import Industries from '../components/Industries/Industries';
import TechStack from '../components/TechStack/TechStack';
import Contact from '../components/Contact/Contact';
import CtaBanner from '../components/CtaBanner/CtaBanner';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Industries />
      <TechStack />
      <CtaBanner />
      <Contact />
    </>
  );
};

export default Home;
