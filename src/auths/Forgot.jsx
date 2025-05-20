import React, { useState } from 'react';
import Reset from './Reset';

function Forgot() {
  const [reset, setReset] = useState(false);

  const handleClick = () => {
    setReset(true);
  };

  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
      <p className="text-gray-700 mb-4">
        Enter your email to reset your password.
      </p>

      {reset ? (
       <Reset onBack={() => setReset(false)} />

      ) : (
        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Reset Password
        </button>
      )}
    </div>
  );
}

export default Forgot;
