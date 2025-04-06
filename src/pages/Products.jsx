import React from 'react';

function Container({ children }) {
  return (
    <div className="bg-black shadow-md p-3 rounded text-white">
      {children}
    </div>
  );
}

export default Container;