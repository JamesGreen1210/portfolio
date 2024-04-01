import React from 'react';
import styles from '../styles/Projects.module.css'; // Ensure you have a corresponding CSS module for this.

function Projects() {
  return (
    <div className={styles.projectsContainer}>
      <h1>Projects</h1>
      {/* Map through your projects and display them here */}
      <div className={styles.projectItem}>
        <h2>Project Name</h2>
        <p>Description of the project...</p>
      </div>
      {/* Add more project items here */}
    </div>
  );
}

export default Projects;
