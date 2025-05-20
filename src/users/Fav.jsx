import React, { useState, useEffect } from "react";
import Toggle from "../components/Toggle";
import { FaStar } from 'react-icons/fa'; // To show stars
import Button from "../components/Button"; // Your button component
import { useNavigate } from "react-router-dom";

function Fav() {
  const [favProducts, setFavProducts] = useState([]); // Store the favorite products
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    if (storedFavs.length > 0) {
      setFavProducts(storedFavs);
    } else {
      setError("No favorites found.");
    }
  }, []);

  // Navigate to ProductDetails on click
  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
   <Toggle>
     <div className="fav-page container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Favorites</h1>
      
      {error && <p className="text-red-500">{error}</p>}
      
      {/* Display favorite products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {favProducts.length > 0 ? (
          favProducts.map((product) => (
            <div
              key={product.id}
              className="fav-card p-4 bg-white shadow-md rounded-lg cursor-pointer hover:shadow-lg transition-shadow duration-300"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="flex items-center mb-2">
                {/* Display Stars */}
                <div className="flex">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-xl ${
                          index < product.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                </div>
              </div>
              <h2 className="text-lg font-bold">{product.name}</h2>
            </div>
          ))
        ) : (
          <p>No favorite products found.</p>
        )}
      </div>
      
      {/* Optionally, a button to clear favorites */}
      {favProducts.length > 0 && (
        <Button onClick={() => localStorage.removeItem('favorites')} className="mt-4 px-4 py-2">
          Clear Favorites
        </Button>
      )}
    </div>
   </Toggle>
  );
}

export default Fav;
