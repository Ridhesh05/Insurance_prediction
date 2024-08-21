import React, { useState } from 'react';
import Header from '../components/header';
import './Insurance.css';

const Insurance = () => {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    children: '',
    sex: '',
    smoker: '',
    region: ''
  });
  const [prediction, setPrediction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Convert region names to their corresponding numerical values
    const regionMap = {
      "southeast": 0,
      "southwest": 1,
      "northwest": 2,
      "northeast": 3
    };

    // Update the formData with the numerical value for region
    setFormData({
      ...formData,
      [name]: name === 'region' ? regionMap[value.toLowerCase()] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
      <div className="insurance-container">
        <div className="form-section">
          <h2>Get Insurance Cost</h2>
          <form onSubmit={handleSubmit}>
            <label>Age:</label>
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} />

            <label>BMI:</label>
            <input type="text" name="bmi" value={formData.bmi} onChange={handleInputChange} />

            <label>Number of Children:</label>
            <input type="number" name="children" value={formData.children} onChange={handleInputChange} />

            <label>Sex:</label>
            <select name="sex" value={formData.sex} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="1">Male</option>
              <option value="0">Female</option>
            </select>

            <label>Smoker:</label>
            <select name="smoker" value={formData.smoker} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>

            <label>Region:</label>
            <select name="region" value={formData.region} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="southeast">Southeast</option>
              <option value="southwest">Southwest</option>
              <option value="northwest">Northwest</option>
              <option value="northeast">Northeast</option>
            </select>

            <button type="submit">Get Prediction</button>
          </form>
        </div>

        <div className="result-section">
          {prediction !== null && (
            <div className="result">
              <h3>Insurance Prediction</h3>
              <p>Estimated Cost: ${prediction}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Insurance;
