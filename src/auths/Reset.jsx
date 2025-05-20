import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import auth from '../utils/auth';

function Reset({ onBack }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Log whenever this component re-renders
  useEffect(() => {
    console.log('Reset component rendered');
  });

  const handleResetPassword = (e) => {
    e.preventDefault();

    console.log('Handling password reset');

    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      console.log('Passwords do not match');
      return;
    }

    const success = auth.resetPassword(email, newPassword);

    if (success) {
      setMessage('Password reset successful!');
      console.log('Password reset successful');
      setTimeout(() => onBack(), 2000); // Go back to login after 2s
    } else {
      setMessage('User not found.');
      console.log('User not found');
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4">Reset Password</h1>
      <form onSubmit={handleResetPassword} className="space-y-4">
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          value={newPassword}
          required
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full border p-2 rounded"
        />
        <Button type="submit">Reset Password</Button>
        {message && (
          <p className={`text-sm ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Reset;
