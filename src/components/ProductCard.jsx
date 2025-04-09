import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Container from './Container';
import { addProductToLocalCart } from '../utils/localCart'; 

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    try {
      addProductToLocalCart(product); 
      console.log('Product added to local cart');
    } catch (error) {
      console.error('Error adding product to local cart:', error);
    }
  };

  const goToProductDetails = () => {
    console.log('Navigating to:', `/products/${product.id}`);
    navigate(`/products/${product.id}`);
  };

  return (
   <div>
    <div
      className="bg-black shadow-md p-3 rounded text-white cursor-pointer"
      onClick={goToProductDetails}
    >
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-lg font-bold">${product.price}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </div>
   </div>
  );
}

export default ProductCard;
