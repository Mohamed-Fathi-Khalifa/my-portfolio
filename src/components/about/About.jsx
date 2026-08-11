import React from "react";
import "./about.scss";

export default function About() {
  const skillCategories = [
    {
      label: "Backend & Databases",
      items: [
        "C#", "ASP.NET Core MVC", "ASP.NET Core Web API", "Entity Framework",
        "ADO.NET", "LINQ", "SQL Server", "PostgreSQL", "MongoDB", "XML", "Microsoft Azure"
      ]
    },
    {
      label: "Architecture & Patterns",
      items: [
        "Clean Architecture", "N-Tier Architecture", "Domain-Driven Design (DDD)",
        "CQRS", "MediatR", "Repository & Unit of Work Patterns"
      ]
    },
    {
      label: "Integrations, Security & Tools",
      items: [
        "ERP / System Integration", "Data Synchronization", "Background Processing (Hangfire)",
        "Web Scraping", "JWT Authentication", "JWT & API Key Authentication",
        "Role-Based Access Control (RBAC)", "Git", "GitHub", "GitLab"
      ]
    },
    {
      label: "Frontend Development",
      items: [
        "Angular", "TypeScript", "React", "JavaScript", "ES6", "HTML5 & CSS3", "Bootstrap"
      ]
    },
    {
      label: "Basics & Concepts",
      items: [
        "Data Structures", "OOP", "SOLID Principles", "Algorithms", "API Design"
      ]
    }
  ];

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
              Software Engineer specializing in .NET and Angular, combining a strong technical foundation in Clean Architecture with a solid background in Business Administration. Adept at architecting robust backend solutions and seamless integrations that resolve complex B2B workflows.
            </p>
            <p className="bio-text">
              Proven expertise in optimizing database performance, implementing asynchronous processing, and delivering secure, enterprise-grade applications.
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

            {skillCategories.map((category, catIndex) => (
              <div className="skill-category" key={catIndex}>
                <h4>{category.label}</h4>
                <div className="skill-tags">
                  {category.items.map((skill, index) => (
                    <span key={index} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}