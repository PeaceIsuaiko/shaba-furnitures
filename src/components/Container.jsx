import React from 'react';

function Container({ children}) {
  return (
    <div
      className="bg-black shadow-lg p-6 rounded-lg flex flex-col items-center justify-center text-white"
    >
      {children}
    </div>
  );
}

export default Container;