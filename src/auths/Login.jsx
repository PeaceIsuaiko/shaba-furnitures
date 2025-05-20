import React, { useState } from 'react';
import Button from '../components/Button';
import auth from '../utils/auth';


function Login({ onSuccess, onSwitch, onForgot }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = auth.login(email, password);
    if (success) {
      onSuccess?.();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Login</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />
        <Button type="submit">Login</Button>
      </form>
      <div className="mt-4 space-y-2">
        <Button onClick={onForgot}>Forgot Password</Button>
        <Button onClick={onSwitch}>Don't have an account? Register</Button>
      </div>
    </div>
  );
}


export default Login;
