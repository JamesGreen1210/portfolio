import { Link } from 'react-router-dom';
import styles from '../styles/Projects.module.css';

function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      description: 'This is a description of Project 1.',
      image: '../assets/download.png'
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'This is a description of Project 2.',
      image: '../assets/download.png'
    },
    {
      id: 3,
      name: 'Project 3',
      description: 'This is a description of Project 3.',
      image: '../assets/download.png'
    },
    {
      id: 4,
      name: 'Project 4',
      description: 'This is a description of Project 4.',
      image: '../assets/download.png'
    },
    {
      id: 5,
      name: 'Project 5',
      description: 'This is a description of Project 5.',
      image: '../assets/download.png'
    },
    {
      id: 6,
      name: 'Project 6',
      description: 'This is a description of Project 6.',
      image: '../assets/download.png'
    },
    {
      id: 7,
      name: 'Project 7',
      description: 'This is a description of Project 7.',
      image: '../assets/download.png'
    },
    {
      id: 8,
      name: 'Project 8',
      description: 'This is a description of Project 8.',
      image: '../assets/download.png'
    },
    {
      id: 9,
      name: 'Project 9',
      description: 'This is a description of Project 9.',
      image: '../assets/download.png'
    }
  ];
  return (
    <div className={styles.projects}>
      {projects.map((project, i) => (
        <Link to={`/project/${project.id}`} key={i} className={styles.projectLink}>
          <div className={styles.project}>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Projects;