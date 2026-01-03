import './workExperience.scss';

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      role: "Freelance Full-Stack Developer",
      tech: "(.NET & Angular)",
      company: "Freelance",
      period: "Oct 2025 – Present",
      description: "Delivering scalable back-end architectures and secure RESTful APIs using ASP.NET Core and SQL Server, while creating responsive interfaces with Angular. My primary focus is on server-side performance, database optimization, and implementing complex business logic. I ensure code quality through Clean Architecture and strictly adhere to project timelines to meet client expectations."
    },
    {
      id: 2,
      role: ".NET Full-Stack Trainee",
      tech: "(ITI)",
      company: "Information Technology Institute",
      location: "Giza, Egypt",
      period: "July 2025 – Dec 2025",
      description: "Developed full-stack web applications using ASP.NET Core, Entity Framework Core, Angular, and SQL Server, applying OOP and software engineering principles. Collaborated in Agile teams using Git/GitHub to build and deploy RESTful APIs and real-world business solutions."
    },
    {
      id: 3,
      role: ".NET Full-Stack Trainee",
      tech: "(DEPI)",
      company: "Digital Egypt Pioneers Initiative",
      location: "Smart Village, Egypt",
      period: "Oct 2024 – Apr 2025",
      description: "Developed scalable full-stack web applications using ASP.NET Core, leveraging MVC/Razor Pages for the front end, Entity Framework Core and SQL Server for data management, and RESTful APIs with clean architecture principles (SOLID design patterns)."
    },
    {
      id: 4,
      role: "MEAN-Stack Developer Trainee",
      tech: "(NTI)",
      company: "National Telecommunication Institute",
      location: "Menofia, Egypt",
      period: "Aug 2024 – Nov 2024",
      description: "Developed a full-stack e-commerce app using the MEAN stack with user authentication, product management, shopping cart, and order processing. Secured admin routes for product and order management, and deployed for testing and demonstration."
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
              
              <p className="description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}