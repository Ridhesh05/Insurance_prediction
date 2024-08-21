import React from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Banner2 from './components/Banner2';
import Work from './components/Work';
import Footer from './components/Footer';
import Home from './pages/Home'; // Corrected import statement
import Insurance from './pages/Insurance';
const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/predict" element={<Insurance />} />

      </Routes>
    </Router>
  );
};

export default App;
