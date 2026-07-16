import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import resume from "../assets/resume.pdf";
import ContactModal from "./ContactModal";

function Hero() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="hero"
        id="home"
        data-aos="fade-up"
      >
        <div className="blur blur1"></div>
        <div className="blur blur2"></div>

        <div className="hero-left fade-up">
          <p className="intro">👋 Hello, I'm</p>

          <h1>
            Dev <span>Kumar</span>
          </h1>

          <h2>
            <Typewriter
              words={[
                "Aspiring Data Scientist",
                "AI & ML Enthusiast",
                "Python Developer",
                "Full Stack Learner",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="description">
            Passionate about Artificial Intelligence, Machine Learning,
            Data Science, and AI. I enjoy building Machine Learning models
            and solving real-world problems using data-driven solutions.
          </p>

          <div className="hero-buttons">
            <a
              href={resume}
              download="Dev_Kumar_Resume.pdf"
              className="btn-primary"
            >
              📄 Download Resume
            </a>

            <button
              className="btn-secondary"
              onClick={() => setIsModalOpen(true)}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Hero;