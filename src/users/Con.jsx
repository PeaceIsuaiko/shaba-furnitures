import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Toggle from "../components/Toggle";
import Button from "../components/Button";

function Con() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mas, setMas] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();
    if (!name || !email || !mas) {
      setError('Please fill in all fields correctly.');
      setSuccess(false);
      return;
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      content: mas
    };
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(newMessage);
    localStorage.setItem('messages', JSON.stringify(messages));

    setName('');
    setEmail('');
    setMas('');
    setError(null);
    setSuccess(true);
  };

  return (
    <div className="">
      <Toggle>
        <div className="px-12 py-14 bg-yellow-400">
          <form onSubmit={handleContact} className="flex flex-col gap-4">
            <label htmlFor="name" className="font-bold">Username</label>
            <input id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Your Name" className="p-2 border rounded" />
            <label htmlFor="email" className="font-bold">Your Email</label>
            <input id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your Email" className="p-2 border rounded" />
            <label htmlFor="message" className="font-bold">Message</label>
            <textarea id="message" onChange={(e) => setMas(e.target.value)} value={mas} placeholder="Type your message here" cols={20} rows={5} className="p-2 border rounded" />
            <Button type="submit">Send</Button>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-600">Message sent successfully!</p>}
          </form>
          <div className='flex justify-end flex-col gap-6 px-20 mt-6'>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-white text-2xl"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-white text-2xl"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-white text-2xl"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </Toggle>
    </div>
  );
}
export default Con;
