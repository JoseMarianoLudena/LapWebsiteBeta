import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../MainPage.css';

const MainPage = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <h2>Welcome to the Main Page!</h2>
        <p>This is a placeholder for the main page content.</p>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;