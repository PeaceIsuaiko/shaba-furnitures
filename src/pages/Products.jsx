import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../pages/ProductList';
import BackB from '../components/BackB';
import SearchBar from '../components/SearchBar';
import products from '../api/products.json'
import { searchExternalProducts } from '../api/ProductApi';
import ProductSearchForm from '../components/ProductSearch';

const Products = () => {
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
  const [customSearchResults, setCustomSearchResults] = useState([]);
  const [searchError, setSearchError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('name');

  const handleSearch = async (query) => {
    try {
      const results = await searchExternalProducts(query, searchType);
      setCustomSearchResults(results);
      setCustomSearchResults([]);
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
        <SearchBar onSearch={handleSearch} onChange={(query) => setSearchQuery(query)} />
        {searchError && <p className="text-red-500">{searchError}</p>}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          {customSearchResults.length > 0 ? "Search Results" : "Available Products"}
        </h2>
        <Button onClick={() => setIsSearchFormOpen(true)}>Search for a product</Button>
        {isSearchFormOpen && (
          <ProductSearchForm
            onClose={() => setIsSearchFormOpen(false)}
            onSearch={handleSearch}
          />
        )}
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="name">Name</option>
          <option value="description">Description</option>
          <option value="price">Price</option>
        </select>
        <ProductList
          products={customSearchResults.length > 0 ? customSearchResults : products}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;