import React from 'react';

export default function Education() {
  const educations = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Measi Institute of Information Technology",
      location: "Chennai, Tamilnadu",
      duration: "2023 - 2025",
      description: "Completed post-graduation in computer applications with a focus on full-stack development, Python programming, and software engineering principles.",
      achievements: [
        "Graduated with 9.03 CGPA",
        "Completed 3-month offline internship training at Vcodez (Python + Web Development)",
        "Built group project: 'Restaurant Management & Food Supply Chain System' – contributed ER design and data modeling",
        "Awarded Best Performance at Magic Bus IT Skilling Program for active participation"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Islamiah College",
      location: "Vaniyambadi, Tamilnadu",
      duration: "2020 - 2023",
      description: "Learned core computer science concepts including data structures, DBMS, and object-oriented programming, laying the foundation for software development.",
      achievements: [
        "Graduated with 81.3% aggregate and 8.55 CGPA",
        "Completed academic mini-projects using Python and SQL",
        "Participated in college-level coding practice sessions",
        "Maintained consistent academic performance across all semesters"
      ]
    },
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title">
          <h2>Educational Background</h2>
        </div>
        
        <div className="education-container">
          {educations.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-content">
                <div className="education-year"><br/>
                  <span>{edu.duration}</span>
                </div>
                <div className="education-details">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <p className="location">{edu.location}</p>
                  <p>{edu.description}</p><br/>
                  <ul className="achievements">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}