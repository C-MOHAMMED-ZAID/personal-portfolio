import { useEffect, useState } from 'react';

export default function Skills() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);
  
  const skills = [
    { 
      category: "Languages", 
      items: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "SQL", level: 85 },
        { name: "HTML5/CSS3", level: 95 }
      ] 
    },
    { 
      category: "Frontend", 
      items: [
        { name: "React", level: 92 },
        { name: "Redux", level: 60 },
        { name: "Vue.js", level: 70 },
        { name: "Bootstrap", level: 90 },
        { name: "Material UI", level: 85 }
      ] 
    },
    { 
      category: "Backend", 
      items: [
        { name: "Node.js", level: 88 },
        { name: "Express", level: 90 },
        { name: "GraphQL", level: 70 },
        { name: "REST APIs", level: 95 },
        { name: "JWT Authentication", level: 65}
      ] 
    },
    { 
      category: "Databases", 
      items: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 85 },
      ] 
    },
    { 
      category: "Tools & Platforms", 
      items: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 70 }
      ] 
    },
    { 
      category: "Other", 
      items: [
        { name: "Basic AI Prompt Engineering", level: 85 },
        { name: "API Integration", level: 80 },
        { name: "Version Control", level: 90 }
      ] 
    },
    { 
      category: "Soft Skills", 
      items: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Fast Learner", level: 80 },
        { name: "Time Management", level: 80 },
        { name: "Adaptability", level: 80 },
      ] 
    }
  ];

  return (
    <section className="skills-section">
      <div className="container"><br/><br/>
        <div className="section-header hidden">
          <h2>Technical Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-intro hidden">
          <p>I've developed expertise in various technologies across the full stack development spectrum. Here's a comprehensive overview of my technical proficiencies:</p>
        </div>
        
        <div className={`skills-grid ${visible ? 'visible' : ''}`}>
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-category hidden" style={{animationDelay: `${index * 0.1}s`}}>
              <h3>{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{
                          width: visible ? `${skill.level}%` : '0%',
                          transition: `width 1s ease-in-out ${idx * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <br/><br/>
        <div className="certifications hidden">
          <h3>Certifications</h3>
          <ul className="cert-list">
            <li>MERN Full Stack Certification – College Placement Training</li>
            <li>MongoDB Developer's Toolkit – GeeksforGeeks</li>
            <li>Python Programming – YBI Foundation</li>
            <li>SQL & Database Programming</li>
            <li>JavaScript Basics from Scratch – UpGrad</li>
          </ul>
        </div>
      </div>
    </section>
  );
}