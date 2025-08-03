import React from 'react';
import { Link } from 'react-router-dom';
import Resume from '../components/Resume.pdf';
import ProfileImage from './profile.jpg';

export default function About() {
  const personalInfo = [
    { label: "Full Name", value: "C Mohammed Zaid" },
    { label: "Birth Date", value: "June 25, 2003" },
    { label: "Phone", value: "+91 90437 95013" },
    { label: "Email", value: "mohammedzaid.connect@gmail.com" },
    { label: "Location", value: "Chennai, Tamil Nadu, India" },
    { label: "Freelance", value: "Available" },
    { label: "Languages", value: "English, Tamil, Hindi, Urdu" },
    { label: "Nationality", value: "Indian" }
  ];

  const services = [
    {
      title: "Full Stack Web Development",
      description: "Built end-to-end web applications using MongoDB, Express.js, React, and Node.js with authentication, routing, and API integration.",
      icon: "🌐"
    },
    {
      title: "Frontend Development",
      description: "Designed and developed responsive UIs using React, HTML, CSS, and modern libraries like Tailwind, Bootstrap, and Framer Motion.",
      icon: "💻"
    },
    {
      title: "Backend & API Development",
      description: "Created RESTful APIs, handled CRUD operations, authentication (JWT), and integrated frontend-backend logic using Express.js.",
      icon: "🔧"
    },
    {
      title: "Python & SQL Programming",
      description: "Solved real-world problems using Python and built SQL databases with complex queries, joins, and data modeling.",
      icon: "🐍"
    },
    {
      title: "Project Deployment & Hosting",
      description: "Deployed full-stack apps on platforms like Render and Vercel with GitHub integration and version control using Git.",
      icon: "🚀"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="img-placeholder">
              <span><img src={ProfileImage} alt="Profile" className="profile-image" /></span>
            </div>
          </div>

          <div className="about-text">
            <h3>Full Stack Developer</h3>
            <p>
              I’m a Full Stack Developer with a strong foundation in modern web technologies and a solid academic background in Computer Applications. My expertise lies in building fully functional web apps using the MERN stack, along with robust backend logic and structured database integration.
            </p>
            <p>
              I’ve worked on multiple full-stack projects that involve user authentication, dynamic routing, dashboard interfaces, form handling, and database management. I focus on clean code, reusable components, and delivering seamless user experiences across all screen sizes.
            </p>
            <p>
              Apart from the web stack, I have strong command over Python for scripting and logic building, and I’m confident in working with SQL for relational data operations, joins, and custom queries. My goal is to keep building, learning, and solving real-world problems through code.
            </p>

            <div className="personal-info">
              {personalInfo.map((info, index) => (
                <div className="info-item" key={index}>
                  <span className="info-title">{info.label}:</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>

            <div className="buttons">
              <Link to="/contact" className="primary-btn">Hire Me</Link>
              <a href={Resume} download className="secondary-btn">Download CV</a>
            </div><br/><br/>
          </div>
        </div>

        <div className="services-section">
          <h3 className="services-title">What I Do</h3>
          <div className="services-container">
            {services.map((service, index) => (
              <div className="service-item" key={index}><br/>
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
