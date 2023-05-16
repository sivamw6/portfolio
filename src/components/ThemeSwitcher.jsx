import React, { useState, useEffect } from 'react';
import { SliderPicker } from 'react-color';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
  const [primaryColor, setPrimaryColor] = useState('#e6b3b8');

  const handlePrimaryColorChange = (color) => {
    setPrimaryColor(color.hex);
    document.documentElement.style.setProperty('--primary-color', color.hex);
  };
  
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
  }, []);

  return (
    <div>
      <SliderPicker className={styles.hue} color={primaryColor} onChange={handlePrimaryColorChange} />
    </div>
  );
};

export default ThemeSwitcher;
