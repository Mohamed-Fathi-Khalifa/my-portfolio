import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
const initializedRef = useRef(false);
useEffect(() => {
    if (!initializedRef.current) {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Full Stack Developer", ".NET Developer", "Software Engineer"],
      });
      initializedRef.current = true;
    }
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="container">
        <div className="left">
          <div className="img-wrapper">
            <div className="backdrop"></div>
            <img src="assets/man.png" alt="Mohamed Fathi" />
          </div>
        </div>
        
        <div className="right">
          <div className="wrapper">
            <h2>Welcome, I am</h2>
            <h1>Mohamed Fathi</h1>
            <h3>
              Freelance <span ref={textRef}></span>
            </h3>
            
            <div className="cta-buttons">
              <a href="#portfolio" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
          </div>
          
          <a href="#portfolio" className="scroll-down">
            <img src="assets/down.png" alt="Scroll Down" />
          </a>
        </div>
      </div>
    </div>
  );
}