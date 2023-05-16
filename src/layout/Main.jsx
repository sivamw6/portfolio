import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Main = ({ scrollToSection }) => {
  const location = useLocation();
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  // Scroll to correct section when URL changes
  React.useEffect(() => {
    if (location.pathname === '/home') {
      scrollToSection(home);
    } else if (location.pathname === '/about') {
      scrollToSection(about);
    } else if (location.pathname === '/projects') {
      scrollToSection(projects);
    } else if (location.pathname === '/contact') {
      scrollToSection(contact);
    }
  }, [location, scrollToSection]);

  return (
    <>
      <div id="home" ref={home}>
        <Home />
      </div>
      <div id="about" ref={about}>
        <About />
      </div>
      <div id="projects" ref={projects}>
        <Projects />
      </div>
      <div id="contact" ref={contact}>
        <Contact />
      </div>
    </>
  );
};

export default Main;

     
