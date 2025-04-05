import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;