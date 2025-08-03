import React from 'react';

export default function Experience() {
  const experiences = [
    {
      company: "Vcodez",
      position: "Full Stack Development Intern",
      duration: "Jan 2025 – Mar 2025",
      description: "Completed a 3-month offline internship focused on Python programming and web development. Contributed to a team project while learning industry practices and tools.",
      achievements: [
        "Worked on 'Restaurant Management & Food Supply Chain' system as a team project",
        "Designed ER diagrams and performed data modeling for food and user data",
        "Learned version control using Git and basic frontend/backend integration",
        "Built Python-based modules to simulate restaurant order flows"
      ]
    },
    {
      company: "Freelance & Self Projects",
      position: "Full Stack Developer (Project-Based)",
      duration: "Apr 2024 – Present",
      description: "Built full stack projects to apply MERN stack and SQL knowledge. Practiced deployment, API integration, and user interface design with real-world problem-solving focus.",
      achievements: [
        "Completed 20+ full stack and frontend-only projects using React, Node.js, Express, and MongoDB",
        "Built 'AI Enhanced Feedback System' with admin/business/customer modules and sentiment analysis",
        "Practiced deploying apps on GitHub and hosting via platforms like Render & Vercel",
        "Used JWT authentication, Bcrypt and modular backend structure in MERN apps"
      ]
    },
    {
      company: "Magic Bus Youth Skilling Livelihood Program",
      position: "IT Skilling Program Trainee",
      duration: "Nov 2024 – Feb 2025",
      description: "Selected participant in a national-level skilling initiative. Focused on soft skills, IT communication, and job-readiness training.",
      achievements: [
        "Completed 'Spoken English & Personality Development' by NIIT Foundation, New Delhi",
        "Won 'Best Performance' award for participation and dedication",
        "Collaborated with peers on mock interview exercises and group activities"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-title">
          <h2>Professional Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.position}</h3>
                  <span className="company"><strong>{exp.company}</strong></span><br/>
                  <span className="duration">{exp.duration}</span><br/><br/>
                </div>
                <p>{exp.description}</p><br/>
                <ul className="achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
