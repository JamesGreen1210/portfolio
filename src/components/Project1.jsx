import styles from '../styles/Project1.module.css';

function Project1() {
  const project1ColabLink = "https://JamesGreen1210.github.io/portfolio/Welcome_To_Colaboratory.html";
  return (
    <div className={styles.project1}>
      <h1>Quantum Machine Learning Project</h1>
      {/* ... rest of your content */}
      <p>What issues have I ran into?</p>
      {/* ... rest of your content */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
        <iframe 
          src={project1ColabLink} 
          style={{ width: "80%", height: "2000px", border: "2px solid black" }} 
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