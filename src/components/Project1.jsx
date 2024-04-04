import React, { useEffect } from 'react';
import styles from '../styles/Project1.module.css';

function Project1() {
  const project1ColabLink = "https://JamesGreen1210.github.io/portfolio/Welcome_To_Colaboratory.html";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.project1}>
      <div className={styles.header}>Quantum Hybrid Project</div>
      <div className={styles.buttonContainer}>
        <a href={project1ColabLink} target="_blank" rel="noopener noreferrer" className={styles.button}>Open in Colab</a>
      </div>
      <div className={styles.iframeContainer}>
        <iframe 
          src={project1ColabLink} 
          frameborder="0" 
          allowfullscreen 
          title="Google Colab Notebook"
          scrolling="no"
        />
      </div>
    </div>
  );
}

export default Project1;