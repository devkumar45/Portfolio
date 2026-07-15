function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      data-aos="fade-left"
    >
      <h2 className="section-title">My Projects</h2>

      <p className="projects-subtitle">
        Here are some Machine Learning, Artificial Intelligence, and Data
        Science projects that I have built to solve real-world problems.
      </p>

      <div className="projects-container">

        {/* AI Health Assistant */}
        <div className="project-card">

          <h3>🏥 AI Health Assistant</h3>

          <p>
            An AI-powered healthcare assistant that helps users analyze
            health-related information through a modern web interface. Built
            with React, Flask, and MySQL to deliver an intelligent and
            user-friendly healthcare experience.
          </p>

          <div className="tech-stack">
            React • Flask • Python • MySQL • AI
          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/devkumar45/ai-health-care.git"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

            <button className="demo-btn" disabled>
              Coming Soon
            </button>

          </div>

        </div>

        {/* Mental Health Prediction */}
        <div className="project-card">

          <h3>🧠 Mental Health Prediction</h3>

          <p>
            Machine Learning model that predicts a student's mental health
            status using multiple academic and lifestyle factors.
          </p>

          <div className="tech-stack">
            Python • Flask • Scikit-learn • MySQL
          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/devkumar45/Mental-Health-prediction.git"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

            <button className="demo-btn" disabled>
              Coming Soon
            </button>

          </div>

        </div>

        {/* Student Performance Prediction */}
        <div className="project-card">

          <h3>📊 Student Performance Prediction</h3>

          <p>
            ML model that predicts student academic performance using
            attendance, study hours, assignments, and exam scores.
          </p>

          <div className="tech-stack">
            Python • Pandas • Scikit-learn
          </div>

          <div className="project-buttons">

            <button className="github-btn" disabled>
              Coming Soon
            </button>

            <button className="demo-btn" disabled>
              Coming Soon
            </button>

          </div>

        </div>

        {/* Portfolio Website */}
        <div className="project-card">

          <h3>🌐 Personal Portfolio Website</h3>

          <p>
            A modern responsive portfolio website showcasing my projects,
            technical skills, education, and contact system with smooth
            animations and a professional UI.
          </p>

          <div className="tech-stack">
            React • CSS • Flask • MySQL
          </div>

          <div className="project-buttons">

            <a
              href="https://github.com/devkumar45/Portfolio.git"
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              GitHub
            </a>

            <button className="demo-btn" disabled>
              Coming Soon
            </button>

          </div>

        </div>

        {/* More Projects Coming Soon */}
        <div className="project-card">

          <h3>🚀 More Projects Coming Soon</h3>

          <p>
            I am continuously learning and building new AI, Machine Learning,
            Data Science, and Full Stack projects. Stay tuned for more exciting
            projects coming soon.
          </p>

          <div className="tech-stack">
            AI • Machine Learning • Data Science • React • Python
          </div>

          <div className="project-buttons">

            <button className="github-btn" disabled>
              Coming Soon
            </button>

            <button className="demo-btn" disabled>
              In Progress
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;