import { Link } from "react-router-dom";
import portfolio from "../assets/projects/portfolio.png";

function PortfolioProject() {
  return (
    <div className="project-details">

      <img
        src={portfolio}
        alt="Portfolio Website"
        className="details-image"
      />

      <h1>🌐 Personal Portfolio Website</h1>

      <p className="details-intro">
        This is my personal developer portfolio built to showcase my skills,
        projects, education, and technical journey. The website is fully
        responsive, modern, and designed to provide recruiters and visitors
        with a professional overview of my work.
      </p>

      <h2>✨ Key Features</h2>

      <ul>
        <li>Modern & Responsive UI Design</li>
        <li>Animated Hero Section</li>
        <li>Project Showcase</li>
        <li>Skills & Education Sections</li>
        <li>Resume Download</li>
        <li>Working Contact Form</li>
        <li>Project Detail Pages</li>
        <li>Smooth Scroll & AOS Animations</li>
      </ul>

      <h2>🛠️ Tech Stack</h2>

      <div className="tech-stack">
        <span>React</span>
        <span>Vite</span>
        <span>CSS</span>
        <span>Flask</span>
        <span>Python</span>
        <span>MySQL</span>
      </div>

      <h2>💡 What I Learned</h2>

      <ul>
        <li>React Component Architecture</li>
        <li>Responsive Web Design</li>
        <li>React Router Navigation</li>
        <li>Frontend & Backend Integration</li>
        <li>Form Handling with Flask</li>
        <li>Deployment Preparation</li>
        <li>Professional Portfolio Design</li>
      </ul>

      <h2>🚀 Future Improvements</h2>

      <ul>
        <li>Dark / Light Theme Toggle</li>
        <li>Live Project Demo Links</li>
        <li>Blog Section</li>
        <li>Certificates Gallery</li>
        <li>Visitor Analytics Dashboard</li>
        <li>Multi-language Support</li>
      </ul>

      <div className="project-buttons">

        <a
          href="https://github.com/devkumar45/Portfolio.git"
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

export default PortfolioProject;