import React from "react";
import "./about.scss";

export default function About() {
  const skills = {
    frontend: [
      "React", "Angular", "HTML5", "CSS3", "Bootstrap", "JavaScript (ES6+)", "Redux" ,"TypeScript"
    ],
    backend: [
      "C / C++", "C#", "ASP.NET Core", "ASP.NET MVC", "Node.js", "Express.js", "RESTful API","Clean Architecture", "Python" ,"JWT Authentication","Web Scraping"
    ],
    dataTools: [
      "Microsoft SQL Server", "MongoDB", "EF Core", "LINQ", "Git/GitHub", "Data Structures","SOLID Principles","OOP"
    ]
  };

  return (
    <div className="about-section" id="about">
      <div className="container">
        <div className="header-wrapper">
          <h2 className="section-title">About Me</h2>
          <div className="title-bar"></div>
        </div>

        <div className="content-grid">
          <div className="bio-column">
            <h3 className="sub-title">Who I Am</h3>
            <p className="bio-text">
              Software Engineer specializing in building scalable enterprise applications using .NET 8 and Angular. With a strong foundation in Clean Architecture and SQL Server, I focus on delivering high-performance solutions.
            </p>
            <p className="bio-text">
              From complex backend logic to responsive user interfaces. I am committed to writing clean, maintainable code and solving real-world business problems efficiently. I am looking for an opportunity where I can leverage my skills to contribute to the growth and success of an organization.
            </p>
            
            <div className="interests-box">
              <h3 className="sub-title">Interests</h3>
              <p>
                In addition to coding, I have a keen interest in contributing to open-source projects and staying ahead of industry trends to drive innovation.
              </p>
            </div>
          </div>

          <div className="skills-column">
            <h3 className="sub-title">Tech Stack</h3>
            
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4>Backend Architecture</h4>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="skill-category">
              <h4>Database & Tools</h4>
              <div className="skill-tags">
                {skills.dataTools.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}