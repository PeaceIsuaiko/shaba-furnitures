import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import Button from '../components/Button';

function UserSettings() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveSettings = () => {
    // Save settings to localStorage, server, or context
    alert('Settings saved!');
  };

  return (
   <Toggle>
     <div>
      <h2 className="text-xl font-semibold">Profile Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            placeholder="Enter your email"
          />
        </div>

        <Button
          onClick={handleSaveSettings}
          className="mt-4 px-4 py-2"
        >
          Save Settings
        </Button>
      </div>
    </div>
   </Toggle>
  );
}

export default UserSettings;
