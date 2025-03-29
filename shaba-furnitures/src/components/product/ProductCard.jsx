import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // ✅ Correct import
import productData from "./product.json";
import { FaStar } from "react-icons/fa"; // ✅ Import star icon

const ProductCard = () => {
  const { id } = useParams(); // ✅ Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productData.find((item) => item.id === Number(id)); // ✅ Correct ID parsing
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div className="text-center text-xl font-semibold mt-10">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Product Title & Price */}
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600 mt-2">${product.price}</p>

        {/* Product Descriptions */}
        <ul className="list-disc pl-6 mt-2">
          {product.descriptions?.map((description, index) => (
            <li key={index} className="text-gray-700">{description}</li>
          ))}
        </ul>

        {/* Star Rating */}
        <div className="flex space-x-1 mt-4">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400" />
          ))}
        </div>

        {/* Add to Cart Button */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
