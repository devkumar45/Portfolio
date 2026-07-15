function About() {
  return (
    <section
      className="about"
      id="about"
      data-aos="fade-right"
    >
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          Hello! I'm <span>Dev Kumar</span>, an Aspiring Data Scientist and
          B.Tech Computer Science (AI & ML) student. I enjoy building Machine
          Learning models, AI applications, and Data Science projects that
          solve real-world problems.
        </p>

        <p className="about-text">
          I continuously improve my skills in Python, SQL, Machine Learning,
          Data Science, and AI by building practical ML models and working on
          real-world datasets.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>🎓 Education</h3>
            <p>B.Tech CSE (AI & ML)</p>
          </div>

          <div className="about-card">
            <h3>🤖 Specialization</h3>
            <p>Machine Learning & Data Science</p>
          </div>

          <div className="about-card">
            <h3>🎯 Career Goal</h3>
            <p>Become a Data Scientist & AI Engineer</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats">
          <div className="stat-card">
            <h2>6+</h2>
            <p>ML Projects</p>
          </div>

          <div className="stat-card">
            <h2>7+</h2>
            <p>Certificates</p>
          </div>

          <div className="stat-card">
            <h2>2+</h2>
            <p>Years Learning</p>
          </div>

          <div className="stat-card">
            <h2>100%</h2>
            <p>Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;