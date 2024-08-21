import React from 'react';
import { Link } from 'react-router-dom';
import sample2 from '../assests/sample2.png';
import jogging from '../assests/jogging.jpg';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <li className="logo-container">
        <Link to="/">
          <img src={sample2} alt="Company Logo" className="logo" />
        </Link>
      </li>
      <nav>
        <ul className="menu">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/predict">Predict</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
