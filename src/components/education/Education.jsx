import "./education.scss";

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Postgraduate Diploma in IT & Engineering (DITE)",
      school: "Ain Shams University - Faculty of CIS",
      date: "Oct 2024 – Present",
      description: "Pursuing a Professional Postgraduate Diploma with a strong focus on software development, databases, computer security, networking, web technologies, and hands-on real-world application development."
    },
    {
      id: 2,
      degree: "Bachelor of Business Administration (BA)",
      school: "National Egyptian E-Learning University (EELU)",
      date: "2016 - 2020", 
      major: "Major: Management - Finance & Investment",
      gpa: "GPA: 3.15",
      description: ""
    }
  ];

  return (
    <div className="education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationData.map((item) => (
            <div className="education-card" key={item.id}>
              <div className="card-content">
                <div className="header-group">
                  <h3>{item.degree}</h3>
                  <span className="date-badge">{item.date}</span>
                </div>
                
                <h4 className="school-name">{item.school}</h4>
                
                {(item.major || item.gpa) && (
                  <div className="details-row">
                    {/* {item.major && <span className="highlight">{item.major}</span>} */}
                    {item.gpa && <span className="gpa-badge">{item.gpa}</span>}
                  </div>
                )}

                {item.description && (
                  <p className="description">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}