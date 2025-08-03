import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../components/Resume.pdf'; 
import ProfileImage from './profile.jpg';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'MERN Stack Engineer', 'Python & SQL Programmer', 'Web App Builder'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const typeWriter = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, roleIndex, isDeleting, typingSpeed]);

  return (
    <section className="home" id="home">
      <div className="container">
        <div className="home-content">
            <h1>Hi, I'm <span>Mohammed Zaid</span></h1>
            <h2 className="typed-text">I'm a <span>{typedText}</span><span className="cursor">|</span></h2>

        <div className="horizontal-layout">
          <div className="home-image">
            <img src={ProfileImage} alt="Profile" className="profile-image" />
          </div>

          <div className="home-text1">
            <p>
              I build full-stack web applications using the MERN stack, with a strong grip on backend logic, API development, and database management. 
              I also work with Python and SQL to solve data-driven problems and write scalable backend services. 
              My focus is on writing clean, maintainable code and building responsive, user-friendly interfaces that perform well across all devices — 
              from crafting intuitive UIs to structuring solid backend systems, I bring the full package.
            </p>
          </div>
            <div className="buttons">
              <Link to="/contact" className="primary-btn">Let's Connect</Link>
              <a href={Resume} download className="secondary-btn">Download CV</a>
            </div>
          </div>
        </div>
        <br/><br/>
        <div className="home-highlights">
          <div className="highlight-item">
            <h3>20+</h3>
            <p>Full Stack Projects</p>
          </div>
          <div className="highlight-item">
            <h3>10+</h3>
            <p>Major Technologies</p>
          </div>
          <div className="highlight-item">
            <h3>1000+</h3>
            <p>Hours of Practice & Debugging</p>
          </div>
          <div className="highlight-item">
          <h3>50+</h3>
          <p>Git Commits & Pull Requests Made</p>
          </div>
          <div className="highlight-item">
            <h3>Ready</h3>
            <p>To Join Your Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}