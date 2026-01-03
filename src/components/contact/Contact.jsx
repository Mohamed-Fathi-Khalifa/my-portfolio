import React, { useState } from 'react';
import "./contact.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    messageText: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.fullName.trim()) {
      formErrors.fullName = "Full name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (!formData.messageText.trim()) {
      formErrors.messageText = "Message cannot be empty";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p className="sub-text">
              I'm currently available for freelance projects or full-time opportunities.
              If you have a project that needs some creative touch, let's connect.
            </p>

            <a href="tel:+201024549719" className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div>
                <span>Phone</span>
                <p>+20 102 454 9719</p>
              </div>
            </a>

            <a href="mailto:mohamedfathimk9719@gmail.com" className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <span>Email</span>
                <p>mohamedfathimk9719@gmail.com</p>
              </div>
            </a>

            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <span>Location</span>
                <p>Giza, Egypt</p>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="links">
                <a href="https://www.linkedin.com/in/mohamed-fathi15/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/Mohamed-Fathi-Khalifa" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://Wa.me/+201024549719" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form
              action="https://formspree.io/f/meoqjaoa"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <div className="input-box">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "error-border" : ""}
                    placeholder=" "
                  />
                  <label>Full Name</label>
                  {errors.fullName && <span className="error-msg">{errors.fullName}</span>}
                </div>

                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error-border" : ""}
                    placeholder=" "
                  />
                  <label>Email Address</label>
                  {errors.email && <span className="error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="input-box textarea-box">
                <textarea
                  name="messageText"
                  value={formData.messageText}
                  onChange={handleChange}
                  className={errors.messageText ? "error-border" : ""}
                  placeholder=" "
                ></textarea>
                <label>Your Message</label>
                {errors.messageText && <span className="error-msg">{errors.messageText}</span>}
              </div>

              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
              </button>
              
              {isSubmitted && <div className="success-msg">Message sent successfully!</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}