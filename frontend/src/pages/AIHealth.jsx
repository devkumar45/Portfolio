import { Link } from "react-router-dom";
import aiHealth from "../assets/projects/ai-health.png";

function AIHealth() {
  return (
    <div className="project-details">

      <img
        src={aiHealth}
        alt="AI Health Assistant"
        className="details-image"
      />

      <h1>🏥 AI Health Assistant</h1>

      <p className="details-intro">
        AI Health Assistant is a Full Stack healthcare application built using
        React, Flask, Python, and MySQL. The project provides an intelligent,
        user-friendly interface where users can interact with an AI-powered
        healthcare system while experiencing a modern and responsive UI.
      </p>

      <h2>✨ Key Features</h2>

      <ul>
        <li>AI-powered healthcare interface</li>
        <li>Responsive React frontend</li>
        <li>Flask backend API</li>
        <li>MySQL database integration</li>
        <li>Contact form with backend</li>
        <li>Professional UI with animations</li>
        <li>Resume download feature</li>
        <li>GitHub integration</li>
      </ul>

      <h2>🛠️ Tech Stack</h2>

      <div className="tech-stack">
        <span>React</span>
        <span>Flask</span>
        <span>Python</span>
        <span>MySQL</span>
        <span>CSS</span>
        <span>Git</span>
        <span>GitHub</span>
      </div>

      <h2>💡 What I Learned</h2>

      <ul>
        <li>Building a complete Full Stack application</li>
        <li>Connecting React with Flask APIs</li>
        <li>Working with MySQL databases</li>
        <li>Creating REST APIs</li>
        <li>Frontend and backend integration</li>
        <li>Responsive UI development</li>
        <li>Preparing projects for deployment</li>
      </ul>

      <h2>🚀 Future Improvements</h2>

      <ul>
        <li>AI Chatbot</li>
        <li>Disease Prediction</li>
        <li>Voice Assistant</li>
        <li>Medical Report Analysis</li>
        <li>Doctor Recommendation System</li>
      </ul>

      <div className="project-buttons">

        <a
          href="https://github.com/devkumar45/ai-health-care.git"
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

export default AIHealth;