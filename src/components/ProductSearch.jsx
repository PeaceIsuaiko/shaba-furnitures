import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { searchExternalProducts } from '../api/ProductApi';

function ProductSearch({ onClose, onResults}) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
        const results = await searchExternalProducts(query, 'product_name');
        onResults(results);
        navigate('/search-results');
    } catch (error) {
        console.error('Error fetching products:', error);
    }

    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white shadow-md p-4 rounded">
        <h2>Search for a product</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter product name or description"
            className="py-2 px-4 border border-gray-400 rounded"
          />
          <Button type="submit">Search</Button>
        </form>
        <Button onClick={onClose}>Cancel</Button>
      </div>
    </div>
  );
}

export default ProductSearch;