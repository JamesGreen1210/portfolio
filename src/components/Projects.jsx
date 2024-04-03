import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import styles from '../styles/Projects.module.css';
import downloadImage from '../assets/Images/download.png'; // Import the image


function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'This is a description of Project 1.',
      image: downloadImage
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is a description of Project 2.',
      image: downloadImage
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'This is a description of Project 3.',
      image: downloadImage
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'This is a description of Project 4.',
      image: downloadImage
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'This is a description of Project 5.',
      image: downloadImage
    },
    {
      id: 6,
      name: 'Project 6',
      description: 'This is a description of Project 6.',
      image: downloadImage
    },

  ];
  
  return (
    <Element name="projects" className={styles.projects}>
      {projects.map((project, i) => (
        <Fade key={i}>
          <Link to={`/project/${project.id}`} className={styles.projectLink}>
            <div className={styles.project}>
              <div className={styles.projectImage} style={{ backgroundImage: `url(${project.image})` }} />
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </Link>
        </Fade>
      ))}
    </Element>
  );
}

export default Projects;