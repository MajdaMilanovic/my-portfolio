import React from "react";
import "./About.css";

export const About: React.FC = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <strong>Majda</strong>, a passionate and creative individual with a background in <strong>Information Technologies</strong>. 
            As a final-year student, I have honed my technical and creative skills by working on diverse projects ranging from software development to 
            embedded systems.
          </p>
          <p>
            My journey has been filled with constant learning. I’ve participated in multiple workshops to improve both my <strong>technical skills </strong> 
            and <strong> soft skills</strong>, earning certifications for <strong>communication and teamwork</strong>. I believe that combining technical 
            knowledge with strong interpersonal skills is the key to success in the tech industry.
          </p>
          <p>
            I'm currently focused on projects involving <strong>web development</strong> and <strong>product management</strong>, aspiring to create 
            impactful applications that solve real-world problems. Let’s build something amazing together!
          </p>
        </div>
        <div className="about-image">
          <img
            src="your-profile-image.jpg"
            alt="Your Name"
          />
        </div>
      </div>
      <div className="about-achievements">
        <h3>Workshops and Volunteering</h3>
        <ul>
          <li>Coordinator of the Program on youth peace activism: "The Future we want" where the youth were trained to act against violence and discrimination 
in their communities.</li>
          <li>Youth activism</li>
          <li>Communication skills</li>
          <li>Communication and entering into conflict</li>
          <li>"Who am I?" - getting to know the concept of identity</li>
          <li>"Leadership" -knowledge and skills necessary to realize the planned activities</li>
          <li>"Youth summit" within the USAID BiH project #reGeneracija </li>
          <li>"Interactive training" - strengthening of personal capacities (non-violent conflict resolution, 
communication skills)</li>
          <li>Photography workshop for young people</li>
          <li>In 2019 was actively engaged as youth coordinator in different workshops</li>
          <li>Volunteer work at many activities in my community</li>
          <li>Worked on project "Young people advocate for communities" for 1 year</li>
          <li>Worked as a translator at workshops for children aimed at promoting children's rights</li>
          <li>In 2022 and 2023 worked as a volunteer at the largest business and technology conference in
 Bosnia and Herzegovina: The NetWork Conference.</li>

        </ul>
      </div>
      <div className="about-achievements">
        <h3>Achievements & Certifications</h3>
        <ul>
          <li>Certificate in Soft Skills Workshop 2023</li>
          <li>Certificate "Globalsoft React.js CodeCamp 2024</li>
          <li>Multiple workshops on teamwork and problem-solving</li>
          <li>Completed projects in web development and embedded systems</li>
          <li>Consistently improving technical and soft skills</li>
        </ul>
      </div>
    </div>
  );
};


