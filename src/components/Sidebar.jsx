import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import debounce from 'lodash.debounce';

import styles from './Sidebar.module.scss';

const Sidebar = ({home, about, projects, contact}) => {
  const location = useLocation();
  // Function to scroll to the given section
  const scrollToSection = (page) => {
    const elementRef = page === "/home"
      ? home
      : page === "/about"
      ? about
      : page === "/projects"
      ? projects
      : page === "/contact"
      ? contact
      : null;
    if (elementRef && elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  // Add event listener to window to update URL when scrolling
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY < about.current.offsetTop) {
        window.history.replaceState(null, null, '/home');
      } else if (window.scrollY < projects.current.offsetTop) {
        window.history.replaceState(null, null, '/about');
      } else if (window.scrollY < contact.current.offsetTop) {
        window.history.replaceState(null, null, '/projects');
      } else {
        window.history.replaceState(null, null, '/contact');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to correct section when URL changes
  useEffect(() => {
    if (location.pathname === '/home') {
      scrollToSection(home);
    } else if (location.pathname === '/about') {
      scrollToSection(about);
    } else if (location.pathname === '/projects') {
      scrollToSection(projects);
    } else if (location.pathname === '/contact') {
      scrollToSection(contact);
    }
  }, [location]);

  return (
    <>
      {/* Navigation menu */}
      <div>
        <nav className={styles.nav}>
          <Link to="/home" className={styles.link} onClick={() => scrollToSection("/home")}>
            Home
          </Link>
          <Link to="/about" className={styles.link} onClick={() => scrollToSection("/about")}>
            About
          </Link>
          <Link to="/projects" className={styles.link} onClick={() => scrollToSection("/projects")}>
            Projects
          </Link>
          <Link to="/contact" className={styles.link} onClick={() => scrollToSection("/contact")}>
            Contact
          </Link>


          <ul className={styles.ul}>
            <li>
              <a className={styles.a} target="_blank" rel="noreferrer" href="https://linkedin.com">
                <FontAwesomeIcon icon={faLinkedin}/>
              </a>
            </li>
            <li>
              <a className={styles.a} target="_blank" rel="noreferrer" href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter}/>
              </a>
            </li>
            <li>
              <a className={styles.a} target="_blank" rel="noreferrer" href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </li>
            <li>
              <a className={styles.a} target="_blank" rel="noreferrer" href="https://github.com">
                <FontAwesomeIcon icon={faGithub}/>
              </a>
            </li>

          </ul>
        </nav>
      </div>
      {/* Sections */}
    </>
  );
};

export default Sidebar;
