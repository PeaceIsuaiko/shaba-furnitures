import React, { useState } from 'react';
import Login from './Login';
import Register from './Regis';
import Forgot from './Forgot';
import Reset from './Reset';

function Auth({ onAuthSuccess }) {
  const [view, setView] = useState('login'); // default is login

  const renderForm = () => {
    switch (view) {
      case 'login':
        return (
          <Login
            onSuccess={onAuthSuccess}
            onSwitch={() => setView('register')}
            onForgot={() => setView('forgot')}
          />
        );
      case 'register':
        return (
          <Register
            onSuccess={onAuthSuccess}
            onSwitch={() => setView('login')}
          />
        );
      case 'forgot':
        return (
          <Forgot
            onNext={() => setView('reset')}
            onBack={() => setView('login')}
          />
        );
      case 'reset':
        return <Reset onBack={() => setView('login')} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        {renderForm()}
      </div>
    </div>
  );
}

export default Auth;
