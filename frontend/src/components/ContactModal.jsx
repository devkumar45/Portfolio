import { FaGithub, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="contact-modal">

        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>📞 Contact Me</h2>

        <div className="contact-options">

          <a
            href="mailto:dev250922@gmail.com"
            className="contact-option"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dev-kumar-1a351834b"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/devkumar45"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

        </div>

      </div>
    </div>
  );
}

export default ContactModal;