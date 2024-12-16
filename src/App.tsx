import React from 'react';
import {
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import {Home}  from "./Components/Home";
import  {About}  from "./Components/About";
import  {Projects}  from "./Components/Projects";
import  {Skills}  from "./Components/Skills";
import {Contact}  from "./Components/Contact";
import { Navbar}  from "./Components/Navbar";
interface AppProps {}

const App: React.FC<AppProps> = () => {
   return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
