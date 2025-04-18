import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginBox from './components/LoginBox';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';


const App = () => {
  return (
    <Router basename="/LapWebsiteBeta">
      <Routes> 
        {/* SignUp and LogIn pages */}
        <Route path="/" element={<LoginBox />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<SignUp />} />

        {/* MainPage */}
        <Route path="/main" element={<MainPage />} />
        <Route path="/account" element={<div>Account Page Placeholder</div>} />
        <Route path="/men" element={<div>Men Page Placeholder</div>} />
        <Route path="/women" element={<div>Women Page Placeholder</div>} />
        <Route path="/testimonials" element={<div>Testimonials Page Placeholder</div>} />
        <Route path="/about" element={<div>About Page Placeholder</div>} />
        <Route path="/legal" element={<div>Legal Page Placeholder</div>} />
        <Route path="/support" element={<div>Support Page Placeholder</div>} />
        <Route path="/contact" element={<div>Contact Page Placeholder</div>} />

      </Routes>
    </Router>
  );
};

export default App;