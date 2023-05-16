import React, { useState, useEffect } from 'react';
import Rocket from '../images/launch.png';

import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles['button-container']}>
      {showScrollTopButton && (<div className={styles.text}>《 Scroll to top</div>)}
      {showScrollTopButton && (
        <img src={Rocket} onClick={scrollTop} className={styles.button} alt="rocket icon"/>
      )}
    </div>
  );
};

export default ScrollToTop;
