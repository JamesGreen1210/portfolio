import styles from '../styles/Project1.module.css';

function Project1() {
  const project1ColabLink = "https://JamesGreen1210.github.io/portfolio/Welcome_To_Colaboratory.html";
  return (
    <div className={styles.project1}>
      <h1>Quantum Machine Learning Project</h1>
      {/* ... rest of your content */}
      <p>What issues have I ran into?</p>
      {/* ... rest of your content */}
      <iframe 
        src={project1ColabLink} 
        style={{ width: "100%", height: "600px" }} 
        frameborder="0" 
        allowfullscreen 
        title="Google Colab Notebook"
      />
    </div>
  );
}

export default Project1;