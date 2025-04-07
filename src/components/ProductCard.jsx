
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Container from './Container';
import CartApi  from '../api/CartApi';

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleAddToCart = async (event) => {
    event.stopPropagation();
    try{
      await CartApi.addProductToCart(product) ;
        console.log("Product added to cart")
      }catch (error) {
        console.error("Error adding product to cart:", error) ;
      }
    }
    const handleCardClick = ()  => {
      navigate(`/product/${product.id}`)
    }
  }


  return (
    
    <Container className="bg-black shadow-md p-3 rounded text-white"
    onClick={handleCardClick} >
      <h2 className="text-2xl font-bold">{product.name}</h2>
      <p className="text-lg font-bold">{product.description}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </Container>
  );


export default ProductCard;