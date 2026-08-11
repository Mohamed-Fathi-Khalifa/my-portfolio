import { useEffect, useState } from "react";
import "./trainings.scss";
import { trainingsData } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Trainings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(trainingsData);
  }, []);

  return (
    <div className="trainings" id="trainings">
      <div className="container">
        <h2 className="section-title">Intensive Training & Bootcamps</h2>

        <div className="trainings-grid">
          {data.map((item) => (
            <div className="training-card" key={item.id}>
              <div className="card-icon-wrap">
                <FontAwesomeIcon icon={faGraduationCap} className="cap-icon" />
              </div>

              <div className="content">
                <div className="header">
                  <h3>{item.role}</h3>
                  <span className="period">{item.period}</span>
                </div>

                <div className="org-info">
                  <span className="org-name">{item.organization}</span>
                  <span className="location">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="loc-icon" />
                    {item.location}
                  </span>
                </div>

                <div className="tech-stack">
                  {item.tech.map((t, index) => (
                    <span key={index} className="tech-badge">{t}</span>
                  ))}
                </div>

                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
