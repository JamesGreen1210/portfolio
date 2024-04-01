import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/About'; // Import your About component
import Contact from './components/Contact'; // Import your Contact component  
import Navbar from './components/Navbar'; // Import your Navbar component
import Projects from './components/Projects'; // Import your Projects component

// Find the root div in the HTML where the React app will attach itself.
const rootElement = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(rootElement);

// Initial render: Render the <App /> into the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
