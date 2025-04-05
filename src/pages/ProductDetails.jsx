import React, { useState, useEffect } from 'react';

function ProductDetails() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();
    fetch(`/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
    
      <div className="container mx-auto p-4 pt-6">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-lg font-bold mb-4">{product.description}</p>
        <p className="text-lg font-bold mb-4">${product.price}</p>
      </div>
      <div>
        <ul> clickable stars for rating
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Button Add To Cart />
     
    </div>
  );
}

export default ProductDetails;