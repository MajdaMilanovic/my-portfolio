import React from "react";

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'To-Do App',
      description: 'A React-based to-do list application with category filtering.',
      technologies: ['React', 'TypeScript'],
      link: 'https://github.com/yourusername/todo-app',
    },
    // Add more projects here
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

