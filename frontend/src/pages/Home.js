import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import Banner2 from '../components/Banner2';
import Work from '../components/Work';
import Footer from '../components/Footer';

const Home = () => {
  return (
    
      <div>
        <Header />
        <Banner2 />
        <Work />
        <Footer />
      </div>
   
  );
};

export default Home;