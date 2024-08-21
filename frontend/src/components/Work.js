import React from 'react';
import './work.css'; // Import your CSS file for styling
import personalized from '../assests/personalized.png';
import verified from '../assests/verified.png';
import prediction from '../assests/prediction.png';
const Work = () => {
  return (
    <div className="work-container">
      <h2 className="work-title">How It Works</h2>
      <div className="work-features">
        <div className="work-feature">
          <img src={personalized} alt="Personalized Insights" className="feature-icon" />
          <h3 className="feature-title">Personalized Insights</h3>
          <p className="feature-description">Get detailed information about your predicted insurance rates based on your profile.</p>
        </div>
        <div className="work-feature">
          <img src={verified} alt="Secure & Private" className="feature-icon" />
          <h3 className="feature-title">Secure & Private</h3>
          <p className="feature-description">We prioritize your data security. Your information is kept confidential throughout the process.</p>
        </div>
        <div className="work-feature">
          <img src={prediction} alt="Insurance Cost Prediction" className="feature-icon" />
          <h3 className="feature-title">Insurance Cost Prediction</h3>
          <p className="feature-description">Receive accurate predictions of your insurance costs tailored to your needs and profile.</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
