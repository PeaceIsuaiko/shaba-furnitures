import React, { useState } from 'react';
import Button from './Button';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
        className="py-2 px-4 border border-gray-400 rounded"
      />
     <Button  <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSearch}
      >
        <img src="" alt="clickable search icon" />
      </button> />
    </div>
  );
}

export default SearchBar;