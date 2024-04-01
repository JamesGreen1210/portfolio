import React from 'react';
import styles from '../styles/Contact.module.css'; // Ensure you have a corresponding CSS module for this.

function Contact() {
  return (
    <div className={styles.contactContainer}>
      <h1>Contact Me</h1>
      <p>Feel free to reach out via email: your.email@example.com</p>
      {/* Add your contact form or information here */}
    </div>
  );
}

export default Contact;
