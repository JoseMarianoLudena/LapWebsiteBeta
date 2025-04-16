import React from 'react';
import background from '../assets/background.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <Navbar />

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-80 text-center">
          <h2 className="text-2xl font-bold mb-4">Log In</h2>
          <input type="email" placeholder="Email" className="w-full mb-3 px-4 py-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-2 px-4 py-2 border rounded" />
          
          <div className="flex justify-between items-center text-sm mb-4">
            <a href="#" className="text-red-500">Forgot Password?</a>
            <label className="flex items-center space-x-1">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
          </div>

          <button className="w-full bg-black text-white py-2 rounded font-semibold">Sign In</button>

          <div className="my-3 font-semibold">OR</div>

          <a href="/signup" className="underline">Sign Up</a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
