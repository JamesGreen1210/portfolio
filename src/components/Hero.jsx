import React from 'react';
import styles from '../styles/Hero.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
      <div className={styles.hero}>
        <div className={styles.content}>
          <blockquote className={styles.quote}>
            “Well done is better than well said.”
            <cite className={styles.citation}>- Benjamin Franklin</cite>
          </blockquote>
          <h1 className={styles.title}>Hey, I'm James.</h1>
          <p className={styles.description}>I hope to demonstrate my skills, knowledge, and passion. Enjoy my work and my journey.</p>
        </div>
        <div className={styles.arrows}>
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
        </div>
      </div>
    );
};

export default Hero;