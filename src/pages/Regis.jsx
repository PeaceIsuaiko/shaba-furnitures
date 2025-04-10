import React, { useState } from 'react';
import Button from '../components/Button';
import auth from '../utils/auth';

function Regis() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (auth.register({ name, email, password })) {
        
      } else {
        setError('Email already exists');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
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
        <Button type="submit">Register</Button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Regis;