import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  if (validateForm()) {
    emailjs.send(
      'service_7vzwyub',       //  service ID
      'template_tx340aw',      //  template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'DaPXXc3D2Msmjn7-_'        //  public key
    ).then(
      (result) => {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      },
      (error) => {
        setFormStatus({
          submitted: true,
          success: false,
          message: "Oops! Something went wrong. Please try again later."
        });
      }
    );
  }
};


  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="icon">📍</div>
              <div className="content">
                <h3>Address</h3>
                <p>Chennai, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="icon">📱</div>
              <div className="content">
                <h3>Phone</h3>
                <p>+91 90437 95013</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="icon">✉️</div>
              <div className="content">
                <h3>Email</h3>
                <p>mohammedzaid.connect@gmail.com</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
              <a href="https://github.com/c-mohammed-zaid" target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>
              <a href="www.linkedin.com/in/mohammedzaidc" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
              <a href="https://www.instagram.com/the__debug_life/" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? 'error' : ''}
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? 'error' : ''}
                />
                {formErrors.email && <span className="error-message">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject (Optional)</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? 'error' : ''}
                ></textarea>
                {formErrors.message && <span className="error-message">{formErrors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>

            {formStatus.submitted && (
              <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                {formStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}