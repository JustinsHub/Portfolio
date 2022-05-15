import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Portfolio: React.FC = () => {
  return (
    <section>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </section>
  )
}

export default Portfolio;
