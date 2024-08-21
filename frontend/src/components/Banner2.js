import React from 'react';
import solve from '../assests/solve.jpg';
import './banner2.css';

const Banner2 = () => {
  return (
    <div className="banner-container">
      <div className='left-content'>
      <h3>Accurate Insurance <br /> Prediction</h3>
        <p>Get personalized insurance predictions <br /> based on your profile<br /> Save time and money by choosing the right coverage from the start.</p>
      </div>
      <div className='right-content'>
        <img src={solve} alt="Company Logo" className="banner" />
      </div>
    </div>
  )
}

export default Banner2;
