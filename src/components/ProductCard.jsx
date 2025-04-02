// src/components/ProductCard.jsx
import { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white border shadow-lg rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-gray-900 font-bold">${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
