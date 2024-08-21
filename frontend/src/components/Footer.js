import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Import your CSS file for styling
import twitter from '../assests/twitter.png'; // Adjust the path as needed
import instagram from '../assests/instagram.png'; // Adjust the path as needed
import newlogo from '../assests/newlogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/predict">Services</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#"><img src={twitter} alt="Twitter" /></a>
          <a href="#"><img src={instagram} alt="Instagram" /></a>
        </div>
      
      </div>
      <div className="footer-info">
        <p>Predict. Compare. Save.</p>
      </div>
    </footer>
  );
}

export default Footer;
