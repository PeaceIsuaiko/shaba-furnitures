  // src/pages/Products.jsx
  import React, { useState } from 'react';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
  import products from '../api/products.json'
  import ProductList from '../pages/ProductList';
  import BackB from '../components/BackB';
  import SearchBar from '../components/SearchBar';
  import { searchExternalProducts } from '../api/ProductApi';
  import ProductSearch from '../components/ProductSearch';

  const Products = () => {
    const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
    const [customSearchResults, setCustomSearchResults] = useState([]);
    const [searchError, setSearchError] = useState(null);
    const [searchType, setSearchType] = useState('name');

    const handleSearch = async (query) => {
      try {
        const results = await searchExternalProducts(query, searchType);
        setCustomSearchResults(results);
      } catch (error) {
        setSearchError('Error searching for products: ' + error.message);
        setCustomSearchResults([]);
      }
    };

    return (
      <div>
        <Navbar />
        <BackB />
        <div className="container mx-auto px-4 py-6">
          <SearchBar onSearch={handleSearch} />
          {searchError && <p className="text-red-500">{searchError}</p>}
          <h2 className="text-xl font-semibold mt-8 mb-2">
            {customSearchResults.length > 0 ? "Search Results" : "Available Products"}
          </h2>
          <button onClick={() => setIsSearchFormOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Search for a product
          </button>
          {isSearchFormOpen && (
            <ProductSearch
              onClose={() => setIsSearchFormOpen(false)}
              onSearch={handleSearch}
            />
          )}
          <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option value="name">Name</option>
            <option value="description">Description</option>
            <option value="price">Price</option>
          </select>
          <ProductList products={customSearchResults.length > 0 ? customSearchResults : products} />
        </div>
        <Footer />
      </div>
    );
  };

  export default Products;
