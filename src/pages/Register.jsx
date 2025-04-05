import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phone', phone);
      formData.append('profileImage', profileImage);

      const response = await axios.post('/api/register', formData);
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
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
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
            placeholder="Profile Image"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;