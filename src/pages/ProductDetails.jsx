import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

function ProductDetails() {
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      <div className="container mx-auto p-4 pt-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg font-bold mb-4">{product.description}</p>
        <p className="text-lg font-bold mb-4">${product.price}</p>

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

        <Button>Add To Cart</Button>
      </div>
    </div>
  );
}

export default ProductDetails;
