import { Link } from "react-router-dom";

function StudentPerformance() {
  return (
    <div className="project-details">

      <h1>📊 Student Performance Prediction</h1>

      <p className="details-intro">
        Student Performance Prediction is a Machine Learning project designed
        to predict a student's academic performance using various educational
        and lifestyle factors such as attendance, study hours, assignments,
        quizzes, and exam scores. The goal is to help identify students who
        may need additional academic support and improve overall learning
        outcomes through predictive analytics.
      </p>

      <h2>✨ Key Features</h2>

      <ul>
        <li>Student Performance Prediction</li>
        <li>Academic Data Analysis</li>
        <li>Machine Learning Model</li>
        <li>Data Preprocessing</li>
        <li>Feature Engineering</li>
        <li>Performance Insights</li>
        <li>Prediction Result Generation</li>
      </ul>

      <h2>🛠️ Tech Stack</h2>

      <div className="tech-stack">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Matplotlib</span>
      </div>

      <h2>💡 What I Learned</h2>

      <ul>
        <li>Data Cleaning & Preprocessing</li>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Feature Selection</li>
        <li>Regression & Prediction Models</li>
        <li>Model Training & Evaluation</li>
        <li>Machine Learning Workflow</li>
      </ul>

      <h2>🚀 Future Improvements</h2>

      <ul>
        <li>Interactive Dashboard</li>
        <li>Higher Prediction Accuracy</li>
        <li>Real-time Student Analytics</li>
        <li>Cloud Deployment</li>
        <li>Performance Report Generation</li>
        <li>AI-based Personalized Recommendations</li>
      </ul>

      <div className="project-buttons">

        <button className="github-btn" disabled>
          GitHub Coming Soon
        </button>

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

export default StudentPerformance;