function Skills() {
  return (
    <section
      className="skills"
      id="skills"
      data-aos="zoom-in"
    >
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <h3>Programming</h3>
          <p>Python</p>
          <p>SQL</p>
        </div>

        <div className="skill-card">
          <h3>Data Science</h3>
          <p>Pandas</p>
          <p>NumPy</p>
          <p>Matplotlib</p>
          <p>Seaborn</p>
        </div>

        <div className="skill-card">
          <h3>Machine Learning</h3>
          <p>Scikit-learn</p>
          <p>Data Preprocessing</p>
          <p>Model Training</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Jupyter Notebook</p>
          <p>VS Code</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>MySQL</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;