import React from "react";
import "./Projects.css";
const projects = [
  {
    title: "ToDo React App",
    description: "A simple and interactive task management application built using React.",
    link: "https://github.com/MajdaMilanovic/ReactApp",
    private: false,
  },
  {
    title: "eLibrary Application",
    description: "A complete eLibrary app with Angular frontend and .NET backend. Features include book search, ratings, and user management.",
    private: true,
    details: "Technologies: Angular, .NET Core | Role: Full-Stack Developer",
  },
  {
    title: "Smart Phone Home App",
    description: "An innovative smart home management application developed during a hackathon.",
    link: "https://github.com/MajdaMilanovic/FastSmartPhoneHome",
    private: false,
  },
  {
    title: "CRM Application",
    description: "A customer relationship management app developed during my internship, focusing on managing customer interactions efficiently.",
    private: true,
    details: "Technologies: ASP.NET Core, SQL Server | Role: Backend Developer",
  },
   {
    title: "IoT Application",
    description: "Temperature and humidity sensor Arduino project.",
    private: false,
    link:"https://github.com/MajdaMilanovic/IoTProject",
  },
];

export const Projects: React.FC = () => {

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            {project.private ? (
              <p className="project-private">
                🔒 <strong>Private Project</strong><br />
                {project.details}
              </p>
            ) : (
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

