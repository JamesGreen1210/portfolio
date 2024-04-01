import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import profileIcon from '../assets/profile-icon.png'; // Import the icon

function Navbar() {
  return (
    <nav className={styles.navbar} style={{ display: 'flex', alignItems: 'center' }}>
      <img src={profileIcon} alt="Profile" style={{ position: 'absolute', left: '10px', width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} /> {/* Add the icon */}
      <Link to="/" className={styles.navItem}>Home</Link>
      <Link to="/projects" className={styles.navItem}>Projects</Link>
      <Link to="/contact" className={styles.navItem}>Contact</Link>
    </nav>
  );
}

export default Navbar;