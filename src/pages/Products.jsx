import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../pages/ProductList';
import BackB from '../components/BackB';
import SearchBar from '../components/SearchBar';
import productsData from '../api/products.json';
import { searchExternalProducts } from '../api/ProductApi';

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [customSearchResults, setCustomSearchResults] = useState([]);

  const handleSearch = async (query) => {
    if (query.trim() === "") {
      setCustomSearchResults([]);
      return;
    }

    try {
      const results = await searchExternalProducts(query);
      setCustomSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
    // Hook in cart logic here later
  };

  return (
    <div>
      <Navbar />
      <BackB />
      <div className="container mx-auto px-4 py-6">
       

        <SearchBar onSearch={handleSearch} />

        <h2 className="text-xl font-semibold mt-8 mb-2">
          {customSearchResults.length > 0 ? "Search Results" : "Available Products"}
        </h2>

        <ProductList 
          products={customSearchResults.length > 0 ? customSearchResults : products} 
          onAddToCart={handleAddToCart} 
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;





ok. so lets do it well, for the api ptoduct search,
 we want a button then, when its clickedd, we have
  a pop-up form for the customer to filled, then the
   product if available in the api will appear on the 
   productlist section 
of the product page and can be added to cart