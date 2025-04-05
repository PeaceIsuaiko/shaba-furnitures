import React from 'react';

function ErrorMsg({ message }) {
  return (
    <div className="bg-red-500 text-white font-bold py-2 px-4 rounded mb-4">
      {message}
    </div>
  );
}

export default ErrorMsg;