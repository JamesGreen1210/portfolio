import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import Projects from './components/Projects';
import Hero from './components/Hero'; 
import './App.css';
import { Events, scroller, Element } from 'react-scroll';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import Project5 from './components/Project5';
import Project6 from './components/Project6';



function App() {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      scroller.scrollTo('hero', {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    } else {
      scroller.scrollTo('projects', {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -35
      });
    }
  };

  return (
    <div onWheel={handleWheel}>
      <Router>
        <Routes>
          <Route path="/" element={<><Element name="hero"><Hero /></Element><Element name="projects"><Projects /></Element></>} />
          <Route path="/project/1" element={<Project1 />} />
          <Route path="/project/2" element={<Project2 />} />
          <Route path="/project/3" element={<Project3 />} />
          <Route path="/project/4" element={<Project4 />} />
          <Route path="/project/5" element={<Project5 />} />
          <Route path="/project/6" element={<Project6 />} />
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
    </div>
  );
}

export default App;