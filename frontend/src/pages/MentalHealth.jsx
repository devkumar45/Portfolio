import { Link } from "react-router-dom";
import mentalHealth from "../assets/projects/mental-health.png";

function MentalHealth() {
  return (
    <div className="project-details">

      <img
        src={mentalHealth}
        alt="Mental Health Prediction"
        className="details-image"
      />

      <h1>🧠 Mental Health Prediction</h1>

      <p className="details-intro">
        Mental Health Prediction is a Machine Learning project that predicts
        a student's mental health status using academic and lifestyle factors.
        The model helps identify students who may require additional support.
      </p>

      <h2>✨ Key Features</h2>

      <ul>
        <li>Mental Health Prediction</li>
        <li>Data Preprocessing</li>
        <li>Feature Engineering</li>
        <li>Machine Learning Model</li>
        <li>Prediction Results</li>
        <li>Flask Backend</li>
      </ul>

      <h2>🛠️ Tech Stack</h2>

      <div className="tech-stack">
        <span>Python</span>
        <span>Flask</span>
        <span>Scikit-learn</span>
        <span>Pandas</span>
        <span>MySQL</span>
      </div>

      <h2>💡 What I Learned</h2>

      <ul>
        <li>Data Cleaning</li>
        <li>Machine Learning Workflow</li>
        <li>Model Training</li>
        <li>Model Evaluation</li>
        <li>Flask API Development</li>
      </ul>

      <h2>🚀 Future Improvements</h2>

      <ul>
        <li>Deep Learning Integration</li>
        <li>Better Accuracy</li>
        <li>Real-time Prediction</li>
        <li>Interactive Dashboard</li>
      </ul>

      <div className="project-buttons">

        <a
          href="https://github.com/devkumar45/Mental-Health-prediction.git"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          GitHub Repository
        </a>

        <button className="demo-btn" disabled>
          Live Demo Coming Soon
        </button>

      </div>

      <br />

      <Link to="/" className="github-btn">
        ⬅ Back to Portfolio
      </Link>

    </div>
  );
}

export default MentalHealth;