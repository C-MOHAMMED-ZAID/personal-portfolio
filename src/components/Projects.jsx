import { useState, useEffect } from 'react';
import Image1 from './1.jpg';
import Image2 from './2.jpg';
import Image3 from './3.jpg';
import Image4 from './4.jpg';
import Image5 from './5.jpg';
import Image6 from './6.jpg';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Employee Management System",
      description: "A role-based employee management portal with admin controls, JWT authentication, CRUD operations, and MongoDB integration. Built using the MERN stack with complete modular structure.",
      image: Image1,
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      category: ["fullstack", "backend"],
      demo: "https://employee-management-system-virid-six.vercel.app/",
      code: "https://github.com/C-MOHAMMED-ZAID/Employee-Management-System.git"
    },
    {
      id: 2,
      title: "Restaurant & Food Supply Chain System",
      description: "A Django + MySQL app for managing food orders, delivery chains, and inventory tracking. Includes sustainability analytics using ML and separate roles for restaurant, admin, and delivery users.",
      image: Image2,
      tech: ["Python", "Django", "MySQL", "ML"],
      category: ["fullstack", "backend"],
      demo: "https://restaurant-supply-demo.vercel.app",
      code: "https://github.com/C-MOHAMMED-ZAID/Food-Supply-Chain.git"
    },
    {
      id: 3,
      title: "Code Reviewer AI",
      description: "AI-powered tool built with MERN stack and Gemini API that reviews code like a senior developer. Provides real-time suggestions and UI for tracking review history and best practices.",
      image: Image3,
      tech: ["React", "Node.js", "Express", "Gemini API", "MongoDB"],
      category: ["fullstack"],
      demo: "https://code-reviewer-ai-two.vercel.app/",
      code: "https://github.com/C-MOHAMMED-ZAID/Code-Reviewer-AI.git"
    },
    {
      id: 4,
      title: "QuoteCraft",
      description: "A motivational quote generator using public API with favorites, search functionality, and responsive frontend-only architecture. Built with HTML, CSS, and JavaScript.",
      image: Image4,
      tech: ["HTML", "CSS", "JavaScript", "API"],
      category: ["frontend"],
      demo: "https://c-mohammed-zaid.github.io/QuoteCraft/",
      code: "https://github.com/C-MOHAMMED-ZAID/QuoteCraft.git"
    },
    {
      id: 5,
      title: "SkillForge",
      description: "A dynamic skill tracking dashboard built using vanilla JavaScript. Users can log skills, notes, and projects — all stored in localStorage. No framework used, fully custom DOM logic.",
      image: Image5,
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      category: ["frontend"],
      demo: "https://c-mohammed-zaid.github.io/SkillForge/",
      code: "https://github.com/C-MOHAMMED-ZAID/SkillForge.git"
    },
    {
      id: 6,
      title: "JobHive",
      description: "A job application tracking tool with CRUD operations, filters, and persistent data via localStorage. Built in React with a clean, minimal UI for productivity seekers.",
      image: Image6,
      tech: ["React", "CSS", "localStorage"],
      category: ["frontend"],
      demo: "https://jobhive-23fnb0ubl-zaid-working-project.vercel.app/",
      code: "https://github.com/C-MOHAMMED-ZAID/JobHive.git"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  return (
    <section className="projects-section">
      <div className="container"><br/><br/>
        <div className="section-header hidden">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="projects-intro hidden">
          <p>Here's a collection of my recent work that demonstrates my technical skills and problem-solving approach. Each project represents unique challenges and solutions.</p>
        </div><br/>

        <div className="project-filters hidden">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
          <button className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`} onClick={() => setFilter('frontend')}>Frontend</button>
          <button className={`filter-btn ${filter === 'backend' ? 'active' : ''}`} onClick={() => setFilter('backend')}>Backend</button>
          <button className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`} onClick={() => setFilter('fullstack')}>Full Stack</button>
        </div><br/>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="image-placeholder">
                  <span>{}</span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo">Live Demo</a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link code">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}