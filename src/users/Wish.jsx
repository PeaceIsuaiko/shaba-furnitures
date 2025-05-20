import React, { useState, useEffect } from 'react';
import Toggle from "../components/Toggle";
import Button from '../components/Button';

function Wish() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleRemove = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
  };

  return (
    <div>
      <Toggle>
        <div className="container mx-auto p-6">
          <h3 className="text-2xl font-bold mb-4">Your Wishlist</h3>
          {wishlist.length === 0 ? (
            <p className="text-gray-700">Your wishlist is empty. Add products to your wishlist!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {wishlist.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 shadow-sm bg-white">
                  <img
                    src={product.image || "https://via.placeholder.com/150"}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="text-sm text-gray-600">{product.category}</p>
                  <p className="text-yellow-700 font-semibold">${product.price}</p>
                  <Button
                    onClick={() => handleRemove(product.id)}
                    className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Toggle>
    </div>
  );
}

export default Wish;
