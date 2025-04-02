// src/components/SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={handleSearch}
        className="px-4 py-2 border rounded-lg w-1/2"
      />
    </div>
  );
};

export default SearchBar;
