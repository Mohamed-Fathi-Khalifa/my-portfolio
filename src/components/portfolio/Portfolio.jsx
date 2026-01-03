import { useEffect, useState } from "react";
import "./portfolio.scss";
import { featuredPortfolio } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(featuredPortfolio);
  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="portfolio-grid">
          {data.map((d) => (
            <div className="project-card" key={d.id}>
              <div className="image-container">
                <img src={d.img} alt={d.title} />
                <div className="overlay"></div>
              </div>
              
              <div className="content">
                <div className="header">
                  <h3>{d.title}</h3>
                </div>

                <div className="tech-stack">
                  {d.tech.map((t, index) => (
                    <span key={index} className="tech-badge">{t}</span>
                  ))}
                </div>

                <p className="description">{d.description}</p>

                <div className="links-container">
                  {d.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="github-btn"
                    >
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}