import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ForgotPassword() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPassword;