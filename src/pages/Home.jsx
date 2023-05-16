import React, { useState } from 'react';
import styles from './Home.module.scss';
import profilePhoto from '../images/profile-photo.JPG';
import LetterAnimation from '../components/LetterAnimation';
import SlideInAnimation from '../components/SlideInAnimation';
import ThemeSwitcher from '../components/ThemeSwitcher';


const Home = () => {

  const [themeColor, setThemeColor] = useState('');


  return (
    <div className={styles.home}>
      
      <div className={styles.hue}><ThemeSwitcher themeColor={themeColor} setThemeColor={setThemeColor} />
</div>
      <div className={styles.content}>
      <div className={`${styles.circle} + circle`} style={{ backgroundColor: themeColor }}></div>
        <img className={styles.img} src={profilePhoto} alt="" />
        <SlideInAnimation>
          <div className={styles.text}>
            <h1 className={styles.h1}>
              <LetterAnimation text="Hi, I'm Mavis" />
            </h1>
              <div className={styles.p}><LetterAnimation text="and I'm a Web developer" /></div>
          </div>
        </SlideInAnimation>
      </div>
    </div>
  );
};

export default Home;
