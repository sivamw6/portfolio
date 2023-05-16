import React from 'react';
import styles from './Projects.module.scss'
import phpWebsite from '../images/php-website.JPG';
import bootstrapWebsite from '../images/bootstrap-website.JPG';
import reactWebsite from '../images/react-website.JPG';
import SlideInAnimation from '../components/SlideInAnimation';

const Projects = () => {
  return (
    <>

      <div className={styles.projects}>
        <SlideInAnimation>
          <h1 className={styles.h1}>Projects</h1>
            <div className={styles['img-box']}>

              <div className={styles.box1}>
                <a 
                  href="https://www.mavishin.com/ootd/index.php" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <img className={styles.img} src={phpWebsite} alt='php-website'></img>
                </a>
                <h5 className={styles.h5}>PHP, SQL</h5>
              </div>

              <div className={styles.box2}>
                <a 
                  href="https://www.mavishin.com/decorlife/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <img className={styles.img} src={bootstrapWebsite} alt='bootstrap-website'></img>              
                </a>
                <h5 className={styles.h5}>HTML, CSS, Bootstrap</h5>
              </div>

              <div className={styles.box3}>
                <a 
                  href="https://www.mavishin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <img className={styles.img} src={reactWebsite} alt='bootstrap-website'></img>
                </a>
                <h5 className={styles.h5}>React</h5>
              </div>


            </div>
        </SlideInAnimation>
      </div>

    </>
  )
}

export default Projects;
