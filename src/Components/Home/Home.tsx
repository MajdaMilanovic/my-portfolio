import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
import { motion } from "framer-motion";

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">
          Welcome to <span className="highlight">My Portfolio</span>
        </h1>
        <p className="hero-subtitle">
          I’m a passionate developer crafting beautiful and functional web
          experiences.
        </p>
        <a href="/projects" className="cta-button">
          View My Work
        </a>
      </header>

      <section className="intro-section">
        <h2 className="section-title">About Me</h2>
        <p className="intro-text">
          I am a software developer specializing in front-end and back-end
          technologies. I love building impactful projects and solving real-world
          problems. Scroll down to explore my projects, skills, and journey.
        </p>
      </section>

      <footer className="footer">
        <p>© 2024 My Portfolio | All Rights Reserved</p>
      </footer>
    </div>
  );
};

