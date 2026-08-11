import "./topbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
            href="https://drive.google.com/uc?export=download&id=1fGHd_I1fcVZnWK5XC0frLuNuM1G_Yl_0"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="btn-icon"
              aria-hidden="true"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-17.7 0-32 14.3-32 32l0 64c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 8.8-7.2 16-16 16L96 496c-8.8 0-16-7.2-16-16l0-64c0-17.7-14.3-32-32-32z" />
            </svg>
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