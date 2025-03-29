import React from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"; // Import icons

const CartList = ({ cart, addToCart, minusFromCart, removeFromCart }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
            {/* Product Image */}
            <img src={item.image} alt={item.title} className="w-16 h-16 rounded-md shadow-md" />

            {/* Product Info */}
            <div className="text-center">
              <p className="font-bold">{item.title}</p>
              <p className="text-gray-600">${item.price} x {item.quantity}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="bg-green-500 p-2 text-white rounded" onClick={() => addToCart(item)}>
                <FaPlus />
              </button>
              <button className="bg-red-500 p-2 text-white rounded" onClick={() => minusFromCart(item.id)}>
                <FaMinus />
              </button>
            </div>

            <button className="bg-red-500 p-2 text-white rounded" onClick={() => removeFromCart(item.id)}>
                <FaTrash />
              </button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
