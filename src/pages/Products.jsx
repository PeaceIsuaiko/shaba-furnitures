import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import products from '../api/products.json';
import ProductList from '../pages/ProductList';
import Cart from './Cart';
import BackB from '../components/BackB';
import SearchBar from '../components/SearchBar';
import { searchExternalProducts } from '../api/ProductApi';

const Products = () => {
  const [searchResults, setSearchResults] = useState(products);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults(products);
      setSearchError(null);
      return;
    }

  
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      setSearchResults(filteredProducts);
      setSearchError(null);
    } else {
  
      try {
        const externalResults = await searchExternalProducts(query);
        setSearchResults(externalResults);
        setSearchError(null);
      } catch (error) {
        setSearchError('Error searching for products: ' + error.message);
        setSearchResults([]);
      }
    }
  };

  return (
    <div className='bg-white'>
     <div className='flex flex-row'>
     <BackB />
     <Navbar />
     </div>
      <div className="container mx-auto px-8">
        <SearchBar onSearch={handleSearch} />
        {searchError && <p className="text-red-500">{searchError}</p>}
        <h2 className="text-xl font-semibold mt-8 mb-2">
          {searchResults.length > 0 ? 'Search Results' : 'Available Products'}
        </h2>
        <ProductList products={searchResults} />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
