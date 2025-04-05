import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', {
        email,
        newPassword,
        confirmPassword,
      });
      console.log('Password reset successful:', response);
    } catch (error) {
      console.error('Password reset failed:', error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
        <form onSubmit={handleResetPassword}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <button type="submit">Reset Password</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;