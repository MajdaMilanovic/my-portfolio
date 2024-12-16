import './Navbar.css';

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/projects">Projects</a>
      <a href="skills">Skills</a>
      <a href="contact">Contact</a>
    </nav>
  );
};

