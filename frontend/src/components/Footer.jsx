import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import resume from "../assets/resume.pdf";

function Footer() {
  return (
    <footer
      className="footer"
      data-aos="fade-up"
    >
      <h2>Dev Kumar</h2>

      <p>Aspiring Data Scientist</p>

      <div className="social-icons">
        <a
          href="https://github.com/devkumar45"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/dev-kumar-1a351834b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:dev250922@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href={resume}
          download="Dev_Kumar_Resume.pdf"
        >
          <FaDownload />
        </a>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © 2026 Dev Kumar. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;