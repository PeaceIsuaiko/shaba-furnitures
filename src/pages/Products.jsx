// src/pages/Products.jsx
import { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddToCart = (product) => {
    // Add logic for adding to cart
    console.log('Added to cart:', product);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ProductList searchQuery={searchQuery} onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
};

export default Products;
