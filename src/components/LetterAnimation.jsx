import React from 'react';
import styles from './LetterAnimation.module.scss';

const LetterAnimation = ({ text }) => {
  const letters = text.split('');

  return (
    <div className={styles.letterAnimation}>
      {letters.map((letter, index) => (
        <span className={styles.letter} key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default LetterAnimation;
