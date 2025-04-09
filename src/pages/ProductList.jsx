import React from 'react';
import ProductCard from '../components/ProductCard';

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center text-gray-500">
          No products found. Please try another keyword.
        </p>
      )}
    </div>
  );
}

export default ProductList;
