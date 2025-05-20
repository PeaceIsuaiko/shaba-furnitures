import React, { useState } from 'react';
import Toggle from '../components/Toggle';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom'; // For navigation

const InCart = () => {
  const navigate = useNavigate();
  
  // Get the cart items from localStorage or use an empty array if no items are found
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    return savedCart;
  });

  // Remove item from the cart
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update cart in localStorage
  };

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Navigate to the full cart page
  const handleGoToCart = () => {
    navigate('/cart');
  };

  return (
    <Toggle>
      <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Items in Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center">
                <span>{item.name} - ${item.price}</span>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 "
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold">Total: ${totalPrice}</div>
        </div>
      )}

      {/* Button to navigate to the full cart page */}
      <Button 
        onClick={handleGoToCart} 
        className="mt-4 px-4 py-2 "
      >
        Go to Cart
      </Button>
    </div>
    </Toggle>
  );
};

export default InCart;
