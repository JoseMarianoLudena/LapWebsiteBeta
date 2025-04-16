import React from 'react';
import Navbar from './components/Navbar';
import LoginBox from './components/LoginBox';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <LoginBox />
      </div>
      <Footer />
    </div>
  );
};

export default App;