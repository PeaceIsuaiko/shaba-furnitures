
import React from 'react';
import Button from './Button';
import CartApi  from '../api/CartApi';

function ProductCard({ product }) {
  const handleAddToCart = async () => {
    try {
      await CartApi.addProductToCart(product);
      console.log('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-lg font-bold">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
  );
}

export default ProductCard;