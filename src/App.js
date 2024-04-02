import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import Projects from './components/Projects';
import Hero from './components/Hero'; 
import ProjectDetail from './components/ProjectDetail'; // Update the path as necessary
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Hero /><Projects /></>} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <div className="fixed-icons">
        <a href="mailto:jgreen142@my.gcu.edu">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/james-green-a21170261" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/JamesGreen1210" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="/James_Green_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFile} />
        </a>
      </div>
    </Router>
  );
}

export default App;