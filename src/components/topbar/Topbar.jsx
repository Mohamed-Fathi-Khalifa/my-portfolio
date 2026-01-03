import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Mohamed Fathi<span className="dot">.</span>
          </a>
          
          <div className="contact-container">
            <div className="item-container">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <span>+20 102 454 9719</span>
            </div>
            <div className="item-container">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <span>mohamedfathimk9719@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="right">
          <a 
            className="cv-btn" 
            href="https://drive.google.com/uc?export=download&id=1IjUWIDGSa3sEs1r5hTV7e8PXSCNGnrS8" 
            target="_blank" 
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFileDownload} className="btn-icon" />
            <span>Download CV</span>
          </a>

          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}