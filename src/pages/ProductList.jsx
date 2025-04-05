import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import productsData from "../api/products.json"; // Load default products
import { searchExternalProducts } from "../api/ProductApi"; // API function

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState(productsData); // Default products

  useEffect(() => {
    if (searchQuery) {
      // If search query exists, fetch products from API
      searchExternalProducts(searchQuery).then((apiProducts) => {
        if (apiProducts.length > 0) {
          setProducts(apiProducts);
        } else {
          setProducts([]); // Empty if no results found
        }
      });
    } else {
      // If no search, use default products.json
      setProducts(productsData);
    }
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-500">
          No products found. Please try another keywords.
        </p>
      )}
    </div>
  );
};

export default ProductList;
