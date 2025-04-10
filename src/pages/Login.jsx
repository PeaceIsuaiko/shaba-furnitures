import React, { useState } from 'react';
import Button from '../components/Button';
import auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = auth.login(email, password);
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('authenticated', true);
        navigate('/');
      } else {
        console.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;
