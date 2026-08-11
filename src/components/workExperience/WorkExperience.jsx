import './workExperience.scss';

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      tech: "(.NET & Angular)",
      company: "SKUs App (by El-Mokhtasa for Pharmaceutical Distribution)",
      location: "Maadi, Egypt",
      period: "Apr 2026 – Present",
      bullets: [
        "Developed backend architectures and Angular interfaces for the SKUs App, bridging pharmacies with external warehouse ERPs.",
        "Implemented robust RESTful APIs for seamless integration, utilizing Hangfire for asynchronous full and delta stock synchronization.",
        "Engineered the order management lifecycle, creating dynamic validation flows handling inventory, quotas, and minimum order value discrepancies.",
      ]
    }
  ];

  return (
    <div className="work-experience" id="workexperience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="card-header">
                <div className="role-wrapper">
                  <h3>{exp.role}</h3>
                  <span className="tech-badge">{exp.tech}</span>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              
              <div className="company-info">
                <h4>{exp.company}</h4>
                {exp.location && <span className="location">{exp.location}</span>}
              </div>
              
              <ul className="bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}