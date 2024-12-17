import React from "react";
import "./Skills.css";

export const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-section">
        <h3>Hard Skills</h3>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>ASP .NET Framework</li>
          <li>HTML / CSS</li>
          <li>SQL Databases</li>
          <li>API Development</li>
          <li>Python</li>
          <li>Angular</li>
          <li>C++</li>
          <li>C#</li>

          
        </ul>
      </div>
      <div className="skills-section">
        <h3>Soft Skills</h3>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem Solving</li>
          <li>Leadership</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Conflict resolution</li>
          <li>Creative Thinking</li>
        </ul>
        <div className="certification">
          <p>I have completed many workshops to improve my soft skills.</p>
        </div>
      </div>
    </div>
  );
};


