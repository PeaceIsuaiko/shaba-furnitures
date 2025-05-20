import React, { useState, useEffect } from 'react';
import Toggle from "../components/Toggle";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  return (
    <Toggle>
      <div className='flex flex-col px-14 py-7 w-full'>
        <h3 className="text-xl font-semibold mb-4">User Messages</h3>
        {messages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className="border p-4 rounded bg-white shadow">
                <p><strong>Name:</strong> {msg.name}</p>
                <p><strong>Email:</strong> {msg.email}</p>
                <p><strong>Message:</strong> {msg.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Toggle>
  );
}

export default AdminMessages;
