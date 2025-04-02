// src/pages/ProductDetails.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import products from '../api/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find(product => product.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto my-8">
      <div className="flex">
        <img src={product.image} alt={product.name} className="w-1/2 object-cover h-80" />
        <div className="p-8">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-gray-900 font-bold text-xl mt-4">${product.price}</p>
          <button className="mt-4 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
