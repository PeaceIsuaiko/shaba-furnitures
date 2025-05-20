import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackB from '../components/BackB';
import products from '../api/products.json';
import Container from '../components/Container';
import Button from '../components/Button';
import { addProductToLocalCart } from '../utils/localCart'; 
import { addProductToWish } from '../utils/localCart'; 

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const selected = products.find((p) => p.id === Number(id)); 
    setProduct(selected);
  }, [id]);

  const handleStarClick = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    // Save as favorite if rating is 4 or 5
    if (newRating >= 4) {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      const alreadyExists = storedFavorites.find((item) => item.id === product.id);
      if (!alreadyExists) {
        storedFavorites.push({ id: product.id, name: product.name });
        localStorage.setItem('favorites', JSON.stringify(storedFavorites));
        console.log('Product added to favorites');
      }
    }
  };

  const handleAddToCart = () => {
    try {
      addProductToLocalCart(product);
      console.log('Product added to local cart');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handleAddToWish = () => {
    try {
      addProductToWish(product);
      console.log('Product added to wishlist');
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
    }
  };

  if (!product.name) {
    return <p className="text-center text-gray-400 mt-10">Product not found.</p>;
  }

  return (
    <div>
      <BackB />
      <Container className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-64 object-cover rounded"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="text-xl font-bold mb-4">${product.price}</p>
            {/* Star Rating */}
            <div className="flex items-center mb-6">
              {Array(5)
                .fill()
                .map((_, index) => (
                  <span
                    key={index}
                    onClick={() => handleStarClick(index)}
                    className={`text-2xl cursor-pointer transition-colors ${
                      index < rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Button onClick={handleAddToCart}>Add To Cart</Button>
            <button
              onClick={handleAddToWish}
              className="bg-gray-600 hover:bg-yellow-300 hover:text-black text-white font-bold py-2 px-4 rounded"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails;
