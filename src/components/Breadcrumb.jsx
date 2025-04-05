import React from 'react';

function Breadcrumb({ pages }) {
  return (
    <div className="text-gray-500 font-bold py-2 px-4 mb-4">
      {pages.map((page, index) => (
        <span key={index}>
          {page.name}
          {index < pages.length - 1 && ' > '}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;