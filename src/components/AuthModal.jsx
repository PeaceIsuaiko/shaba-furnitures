import React, { useState } from 'react';
import Login from '../pages/Login';
import Register from '../pages/Regis';
import Forgot from '../pages/Forgot';
import Reset from '../pages/Reset';

function AuthModal({ onAuthSuccess }) {
  const [showLogin, setShowLogin] = useState(true);
  const [showForgot, setShowForgot] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-[90%] max-w-md">
        {showForgot ? (
          <>
            <Forgot />
            <button
              className="text-sm text-blue-600 mt-2"
              onClick={() => setShowForgot(false)}
            >
              Back to login/register
            </button>
          </>
        ) : (
          <>
            {showLogin ? <Login onSuccess={onAuthSuccess} /> : <Register onSuccess={onAuthSuccess} />}
            <div className="mt-4 flex justify-between">
              <button
                className="text-sm text-blue-600"
                onClick={() => setShowLogin(!showLogin)}
              >
                {showLogin ? 'New here? Register' : 'Already have an account? Login'}
              </button>
              <Reset
                className="text-sm text-red-600"
                onClick={() => setShowForgot(true)}
              >
                Forgot Password?
              </Reset>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
