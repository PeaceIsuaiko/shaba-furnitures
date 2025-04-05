import React from 'react';
import Button from "./Button"

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="font-bold mb-4">${product.price}</p>
      <Button Add To Cart />
    </div>
  );
};

export default ProductCard;
