
import React, { useState } from 'react';
import Button from '../components/Button';
import auth from '../utils/auth';
import Login from './Login';

function Regis({ onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [login, setLogin] = useState(false); // should be boolean

  const handleRegister = (e) => {
    e.preventDefault();
    const success = auth.register({ name, email, password });
    if (success) {
      if (onSuccess) onSuccess();
    } else {
      setError('Email already exists');
    }
  };

  const handleClick = () => {
    setLogin(true);
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleRegister} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full border p-2 rounded"
        />
        <Button type="submit">Register</Button>
      </form>

      <div className="mt-4">
        {login ? (
          <Login />
        ) : (
          <Button onClick={handleClick}>Already have an account? Login</Button>
        )}
      </div>
    </div>
  );
}

export default Regis;
