import React from 'react';
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div className="nav-item">
          <button><Link className="Nav-link" to="/Home.js">Home</Link></button>
        </div>
        <div className="nav-item">
          <button><Link className="Nav-link" to="/About.js">About</Link></button>
        </div>
        <div className="nav-item">
          <button><Link className="Nav-link" to="/Contact.js">Contact</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
