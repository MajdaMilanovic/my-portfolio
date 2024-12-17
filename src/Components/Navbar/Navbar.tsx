import React, {useState} from 'react';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
   return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">
                MyPortfolio
            </a>
            <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                &#9776;
            </div>
            <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

