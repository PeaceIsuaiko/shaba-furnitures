import React, { useState, useEffect } from 'react';
import CartApi from '../api/CartApi';

function CartIcon() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    CartApi.getCart()
      .then((response) => {
        setCartCount(response.data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="text-gray-500 font-bold py-2 px-4 mb-4">
      <svg>
        {/* Cart icon */}
      </svg>
      {cartCount}
    </div>
  );
}

export default CartIcon;