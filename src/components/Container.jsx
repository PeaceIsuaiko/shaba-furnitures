import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import productsData from '../api/products.json';
import ProductList from '../pages/ProductList';
import BackB from '../components/BackB';
import SearchBar from '../components/SearchBar';
import { searchExternalProducts } from '../api/ProductApi';
import ProductSearch from '../components/ProductSearch';

const Products = () => {
  const [allProducts, setAllProducts] = useState(productsData);
  const [displayedProducts, setDisplayedProducts] = useState(productsData);
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [searchType, setSearchType] = useState('name');

  // Function to handle search
  const handleSearch = async (query) => {
    if (!query) {
      setDisplayedProducts(allProducts);
      return;
    }

    // Filter local products
    const filteredProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      setDisplayedProducts(filteredProducts);
    } else {
      try {
        const externalResults = await searchExternalProducts(query, searchType);
        setDisplayedProducts(externalResults);
      } catch (error) {
        setSearchError('Error searching for products: ' + error.message);
        setDisplayedProducts([]);
      }
    }
  };

  return (
    <div>
      <BackB />
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <SearchBar onSearch={handleSearch} />
        {searchError && <p className="text-red-500">{searchError}</p>}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          {displayedProducts.length > 0 ? 'Search Results' : 'Available Products'}
        </h2>
        <button
          onClick={() => setIsSearchFormOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
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
        <ProductList products={displayedProducts} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
